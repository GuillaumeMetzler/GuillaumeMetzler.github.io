"""
tp_utils.py -- fonctions utilitaires pour le TP "Adaptation de Domaine"
(Fouille de Données Massives, séance 6).

Dans le même esprit que utils.py / toydatasets.py déjà utilisés dans le cours :
génération de données jouets avec covariate shift, et implémentation des
méthodes de repondération instance-based vues en cours (NN weighting, KDE,
IWC, KMM).
"""
import numpy as np
from sklearn.metrics.pairwise import rbf_kernel
from sklearn.neighbors import NearestNeighbors
from scipy.optimize import minimize


# --------------------------------------------------------------------- data
def generate_shift_classification(m=250, n=250, band=(-0.5, 1.8),
                                    src_mu=-0.3, src_sd=0.9,
                                    tgt_mu=2.0, tgt_sd=0.6,
                                    noise=0.05, seed=0):
    """
    Génère un problème de classification binaire avec covariate shift ET
    mauvaise spécification du modèle linéaire (dans l'esprit de l'exemple
    filé du cours, où le modèle linéaire est volontairement mal spécifié
    par rapport à la vraie fonction |x|) :

    la vraie règle de décision est y = +1 si x1 appartient à la "bande"
    `band`, -1 sinon (une règle NON linéaire en x1, à un peu de bruit
    d'étiquetage près) ; elle est identique en source et en cible
    (covariate shift), mais x1 est distribué très différemment entre les
    deux domaines : la source est concentrée près de 0 (elle "voit" surtout
    l'intérieur de la bande), la cible est concentrée bien plus loin
    (surtout à l'extérieur de la bande, côté droit). Un modèle *linéaire*
    entraîné sur la source seule apprend donc une frontière de décision
    fortement biaisée pour la région où vit la cible.

    Retourne Xs, ys, Xt, yt (yt n'est là que pour l'évaluation : à ne
    JAMAIS utiliser à l'entraînement).
    """
    rng = np.random.RandomState(seed)

    def rule(x1):
        return np.where((x1 > band[0]) & (x1 < band[1]), 1, -1)

    def sample_domain(n_samples, mu, sd):
        x1 = rng.randn(n_samples) * sd + mu
        x2 = rng.randn(n_samples)  # seconde feature, non informative (bruit)
        y_true = rule(x1)
        flip = rng.rand(n_samples) < noise
        y = np.where(flip, -y_true, y_true)
        return np.stack([x1, x2], axis=-1), y

    Xs, ys = sample_domain(m, src_mu, src_sd)
    Xt, yt = sample_domain(n, tgt_mu, tgt_sd)
    return Xs, ys, Xt, yt


# --------------------------------------------------------- density ratios
def nn_weights(Xs, Xt, K=5):
    """Nearest-Neighbors Weighting (Loog, 2012)."""
    nn = NearestNeighbors(n_neighbors=K).fit(Xs)
    _, idx = nn.kneighbors(Xt)
    w = np.zeros(len(Xs))
    for row in idx:
        w[row] += 1.0
    # normalisation : poids moyen = 1 (masse totale = m)
    w = w * (len(Xs) / w.sum()) if w.sum() > 0 else np.ones(len(Xs))
    return w


def kde_weights(Xs, Xt, sigma=1.0):
    """Ratio de densités par estimation à noyaux gaussiens (cf. cours, §3.3.2)."""
    gamma = 1.0 / (2 * sigma ** 2)
    ps_Xs = rbf_kernel(Xs, Xs, gamma=gamma).mean(axis=1)
    pt_Xs = rbf_kernel(Xt, Xs, gamma=gamma).mean(axis=0)
    w = pt_Xs / np.clip(ps_Xs, 1e-12, None)
    w = w * (len(Xs) / w.sum())
    return w


def iwc_weights(Xs, Xt, clf=None):
    """
    Importance Weighting Classifier : on entraîne un classifieur de domaine
    phi(x) = P(domaine = cible | x) et on pose w(x) = phi(x) / (1 - phi(x))
    (convention phi = P(T|x), cf. cours §3.3.4).
    """
    from sklearn.linear_model import LogisticRegression
    if clf is None:
        clf = LogisticRegression(max_iter=1000)
    X = np.vstack([Xs, Xt])
    dom = np.concatenate([np.zeros(len(Xs)), np.ones(len(Xt))])  # 0=source, 1=cible
    clf.fit(X, dom)
    phi = clf.predict_proba(Xs)[:, 1]
    phi = np.clip(phi, 1e-3, 1 - 1e-3)
    w = phi / (1 - phi)
    w = w * (len(Xs) / w.sum())
    return w, clf


def kmm_weights(Xs, Xt, gamma=0.1, B=20.0):
    """
    Kernel Mean Matching (Huang et al., 2007), résolu avec scipy.optimize
    (SLSQP) plutôt qu'un solveur QP dédié -- suffisant pour les tailles
    d'échantillon utilisées en TP (quelques centaines de points).

    w* = argmin_{0 <= w <= B, sum(w) = m}  w^T K w - 2 kappa^T w
    """
    m, n = len(Xs), len(Xt)
    K = rbf_kernel(Xs, Xs, gamma=gamma)
    kappa = (float(m) / n) * rbf_kernel(Xs, Xt, gamma=gamma).sum(axis=1)

    def objective(w):
        return w @ K @ w - 2 * kappa @ w

    def grad(w):
        return 2 * K @ w - 2 * kappa

    cons = [{"type": "eq", "fun": lambda w: w.sum() - m}]
    bounds = [(0, B)] * m
    w0 = np.ones(m)
    res = minimize(objective, w0, jac=grad, method="SLSQP",
                    bounds=bounds, constraints=cons,
                    options={"maxiter": 200, "ftol": 1e-8})
    return np.clip(res.x, 0, None)


# --------------------------------------------------------------- diagnostics
def effective_sample_size(w):
    """ESS(w) = (sum w)^2 / sum w^2, cf. TD Exercice 1.3."""
    return (w.sum() ** 2) / (w ** 2).sum()


def weighted_accuracy_report(Xs, ys, Xt, yt, weights_dict, clf_factory=None):
    """
    Entraîne un classifieur pour chaque jeu de poids fourni (dict nom -> poids,
    None pour la baseline non repondérée), évalue sur Xt/yt (labels cible
    utilisés UNIQUEMENT pour l'évaluation), retourne un dict de résultats.
    """
    from sklearn.linear_model import LogisticRegression
    if clf_factory is None:
        clf_factory = lambda: LogisticRegression(max_iter=1000)
    results = {}
    for name, w in weights_dict.items():
        clf = clf_factory()
        clf.fit(Xs, ys, sample_weight=w)
        acc_t = clf.score(Xt, yt)
        acc_s = clf.score(Xs, ys, sample_weight=w) if w is not None else clf.score(Xs, ys)
        ess = effective_sample_size(w) if w is not None else float(len(Xs))
        results[name] = {"clf": clf, "acc_target": acc_t, "acc_source": acc_s, "ess": ess}
    return results
