# -*- coding: utf-8 -*-
"""
pbtools -- small toolbox for PAC-Bayesian bounds on (weighted) majority votes.
Used to generate the figures of the lecture notes and as the reference
implementation for the notebooks / project (G. Metzler, Lyon 2).

Conventions: labels y in {-1,+1}; voters output predictions in {-1,+1};
a posterior rho is a probability vector over a finite set of n voters.
"""
import numpy as np
from sklearn.tree import DecisionTreeClassifier

# ---------------------------------------------------------------------------
# Binary kl divergence and its inversions
# ---------------------------------------------------------------------------

def kl_bin(q, p):
    """kl(q || p) between Bernoulli(q) and Bernoulli(p)."""
    q = np.clip(q, 0.0, 1.0)
    p = np.clip(p, 1e-12, 1 - 1e-12)
    out = 0.0
    with np.errstate(divide="ignore", invalid="ignore"):
        t1 = np.where(q > 0, q * np.log(q / p), 0.0)
        t2 = np.where(q < 1, (1 - q) * np.log((1 - q) / (1 - p)), 0.0)
    out = t1 + t2
    return out


def kl_inv_upper(q, eps, tol=1e-10):
    """sup { p in [q,1] : kl(q||p) <= eps } by bisection."""
    if eps <= 0:
        return q
    lo, hi = q, 1.0
    while hi - lo > tol:
        mid = 0.5 * (lo + hi)
        if kl_bin(q, mid) > eps:
            hi = mid
        else:
            lo = mid
    return hi


def kl_inv_lower(q, eps, tol=1e-10):
    """inf { p in [0,q] : kl(q||p) <= eps } by bisection."""
    if eps <= 0:
        return q
    lo, hi = 0.0, q
    while hi - lo > tol:
        mid = 0.5 * (lo + hi)
        if kl_bin(q, mid) > eps:
            lo = mid
        else:
            hi = mid
    return lo


def kl_div(rho, pi):
    """KL(rho || pi) for discrete distributions."""
    rho = np.asarray(rho, float)
    pi = np.asarray(pi, float)
    mask = rho > 0
    return float(np.sum(rho[mask] * np.log(rho[mask] / pi[mask])))

# ---------------------------------------------------------------------------
# Classical PAC-Bayesian bounds on the Gibbs risk (losses in [0,1])
# ---------------------------------------------------------------------------

def bound_mcallester(emp, KL, m, delta):
    """McAllester-type bound (Maurer's constant): emp + sqrt((KL+ln(2 sqrt m/delta))/(2m))."""
    return emp + np.sqrt((KL + np.log(2 * np.sqrt(m) / delta)) / (2 * m))


def bound_seeger(emp, KL, m, delta):
    """Seeger / Langford-Seeger bound with Maurer's constant (kl inversion)."""
    return kl_inv_upper(emp, (KL + np.log(2 * np.sqrt(m) / delta)) / m)


def bound_catoni(emp, KL, m, delta, C):
    """Catoni's bound for a fixed C > 0 (Germain et al., 2009, form)."""
    return (1 - np.exp(-C * emp - (KL + np.log(1 / delta)) / m)) / (1 - np.exp(-C))


def bound_catoni_grid(emp, KL, m, delta, grid=None):
    """Catoni's bound optimised over a finite grid of C (union bound)."""
    if grid is None:
        grid = np.logspace(-2, 1.5, 30)
    d = delta / len(grid)
    return min(bound_catoni(emp, KL, m, d, C) for C in grid)


def lambda_star(emp, KL, m, delta):
    """Optimal lambda for the PAC-Bayes-lambda bound (Thiemann et al., 2017)."""
    c = KL + np.log(2 * np.sqrt(m) / delta)
    return 2.0 / (np.sqrt(2 * m * emp / c + 1) + 1)


def bound_lambda(emp, KL, m, delta, lam=None):
    """PAC-Bayes-lambda bound, valid for all lambda in (0,2) simultaneously."""
    if lam is None:
        lam = lambda_star(emp, KL, m, delta)
    c = KL + np.log(2 * np.sqrt(m) / delta)
    return emp / (1 - lam / 2) + c / (lam * (1 - lam / 2) * m)

# ---------------------------------------------------------------------------
# Bagged trees with out-of-bag bookkeeping
# ---------------------------------------------------------------------------

class BaggedTrees:
    """Random-forest-like ensemble keeping track of the out-of-bag samples.

    Each voter is a DecisionTreeClassifier trained on a bootstrap sample; its
    OOB set plays the role of a validation set that is independent of it.
    """

    def __init__(self, n_estimators=100, max_features="sqrt", max_depth=None,
                 bootstrap_frac=1.0, random_state=0):
        self.n_estimators = n_estimators
        self.max_features = max_features
        self.max_depth = max_depth
        self.bootstrap_frac = bootstrap_frac
        self.random_state = random_state

    def fit(self, X, y):
        rng = np.random.RandomState(self.random_state)
        m = X.shape[0]
        k = int(self.bootstrap_frac * m)
        self.trees_, self.oob_ = [], []
        for t in range(self.n_estimators):
            idx = rng.randint(0, m, k)
            oob = np.ones(m, dtype=bool)
            oob[idx] = False
            tree = DecisionTreeClassifier(max_features=self.max_features,
                                          max_depth=self.max_depth,
                                          random_state=rng.randint(1 << 30))
            tree.fit(X[idx], y[idx])
            self.trees_.append(tree)
            self.oob_.append(oob)
        self.oob_ = np.array(self.oob_)          # (n_voters, m)
        return self

    def predict_all(self, X):
        """Matrix of votes, shape (n_voters, n_points), values in {-1,+1}."""
        return np.array([t.predict(X) for t in self.trees_])

    def predict(self, X, rho=None):
        V = self.predict_all(X)
        if rho is None:
            rho = np.ones(len(self.trees_)) / len(self.trees_)
        s = rho @ V
        return np.where(s >= 0, 1, -1)

    # --- OOB statistics used by the PAC-Bayesian bounds --------------------
    def oob_losses(self, X, y):
        """Per-voter OOB 0-1 losses and the size n of the smallest OOB set."""
        V = self.predict_all(X)
        err = (V != y[None, :]) & self.oob_
        cnt = self.oob_.sum(1)
        return err.sum(1) / cnt, int(cnt.min())

    def oob_tandem(self, X, y):
        """Pairwise OOB tandem losses on the intersections of OOB sets."""
        V = self.predict_all(X)
        E = ((V != y[None, :]) & self.oob_).astype(float)
        O = self.oob_.astype(float)
        both = O @ O.T
        L = (E @ E.T) / np.maximum(both, 1)
        return L, int(both.min())

    def oob_disagreement(self, X):
        V = self.predict_all(X)
        O = self.oob_.astype(float)
        D = ((V[:, None, :] != V[None, :, :]) & (self.oob_[:, None, :] & self.oob_[None, :, :])).sum(2)
        both = O @ O.T
        return D / np.maximum(both, 1), int(both.min())

# ---------------------------------------------------------------------------
# Majority-vote statistics on a labelled sample
# ---------------------------------------------------------------------------

def mv_statistics(V, y, rho):
    """Given votes V (n_voters x m), labels y and posterior rho, return a dict
    with the MV risk, Gibbs risk, joint error (tandem), disagreement,
    and the margin vector."""
    E = (V != y[None, :]).astype(float)
    W = rho @ E                                  # fraction (rho-weighted) of wrong voters
    margin = y * (rho @ V)
    mv = np.mean(margin <= 0)
    gibbs = W.mean()
    joint = np.mean(W ** 2)
    dis = gibbs * 2 - 2 * joint                 # d = 2 (R(G) - e)
    return dict(mv=mv, gibbs=gibbs, joint=joint, dis=dis, W=W, margin=margin)


def c_bound(gibbs, dis):
    """C-bound 1 - (1-2 r)^2 / (1 - 2 d), valid when r < 1/2."""
    if gibbs >= 0.5:
        return 1.0
    return 1 - (1 - 2 * gibbs) ** 2 / (1 - 2 * dis)

# ---------------------------------------------------------------------------
# PAC-Bayesian bounds on the majority vote from OOB statistics
# ---------------------------------------------------------------------------

def fo_bound(rho, pi, Lhat, n, delta):
    """First-order bound: 2 * kl^{-1}( E_rho Lhat, (KL + ln(2 sqrt n/delta))/n )."""
    KL = kl_div(rho, pi)
    return min(1.0, 2 * kl_inv_upper(float(rho @ Lhat), (KL + np.log(2 * np.sqrt(n) / delta)) / n))


def tnd_bound(rho, pi, Lt, n, delta):
    """Tandem bound (Masegosa et al., 2020): 4 * kl^{-1}( E_rho2 Lt, (2KL + ln(2 sqrt n/delta))/n )."""
    KL = kl_div(rho, pi)
    return min(1.0, 4 * kl_inv_upper(float(rho @ Lt @ rho), (2 * KL + np.log(2 * np.sqrt(n) / delta)) / n))


def cbound_pb(rho, pi, Lhat, n1, D, n2, delta):
    """PAC-Bayesian C-bound (union bound over Gibbs-risk and disagreement)."""
    KL = kl_div(rho, pi)
    r_up = kl_inv_upper(float(rho @ Lhat), (KL + np.log(4 * np.sqrt(n1) / delta)) / n1)
    d_lo = kl_inv_lower(float(rho @ D @ rho), (2 * KL + np.log(4 * np.sqrt(n2) / delta)) / n2)
    if r_up >= 0.5:
        return 1.0
    return min(1.0, 1 - (1 - 2 * r_up) ** 2 / (1 - 2 * d_lo))

# ---------------------------------------------------------------------------
# Bound minimisation
# ---------------------------------------------------------------------------

def softmax(z):
    z = z - z.max()
    e = np.exp(z)
    return e / e.sum()


def optimize_fo(pi, Lhat, n, delta, n_iter=100):
    """Alternating minimisation of the PAC-Bayes-lambda bound (Thiemann et al., 2017):
    rho(h) ~ pi(h) exp(-lambda n Lhat(h)),  lambda <- lambda*(rho)."""
    lam = 1.0
    for _ in range(n_iter):
        rho = softmax(np.log(pi) - lam * n * Lhat)
        KL = kl_div(rho, pi)
        lam_new = lambda_star(float(rho @ Lhat), KL, n, delta)
        if abs(lam_new - lam) < 1e-9:
            break
        lam = lam_new
    return rho


def optimize_tnd(pi, Lt, n, delta, n_iter=200, lr=None):
    """Minimise the tandem PAC-Bayes-lambda bound of Masegosa et al. (2020)
    by alternating a gradient step on softmax logits and the closed-form lambda."""
    from scipy.optimize import minimize
    c0 = np.log(2 * np.sqrt(n) / delta)
    theta = np.log(pi).copy()
    lam = 1.0
    for _ in range(20):
        def f(th):
            rho = softmax(th)
            KL = kl_div(rho, pi)
            val = (rho @ Lt @ rho) / (1 - lam / 2) + (2 * KL + c0) / (lam * (1 - lam / 2) * n)
            g_rho = 2 * Lt @ rho / (1 - lam / 2) + 2 * (np.log(np.maximum(rho, 1e-300) / pi) + 1) / (lam * (1 - lam / 2) * n)
            g = rho * (g_rho - rho @ g_rho)
            return val, g
        res = minimize(f, theta, jac=True, method="L-BFGS-B", options={"maxiter": n_iter})
        theta = res.x
        rho = softmax(theta)
        emp = float(rho @ Lt @ rho)
        KL2 = 2 * kl_div(rho, pi)
        lam_new = 2.0 / (np.sqrt(2 * n * emp / (KL2 + c0) + 1) + 1)
        if abs(lam_new - lam) < 1e-6:
            break
        lam = lam_new
    return softmax(theta)

# ---------------------------------------------------------------------------
# Differentiable kl inversion (implicit function theorem) and direct
# minimisation of kl-based certificates (self-bounding learning)
# ---------------------------------------------------------------------------

def kl_inv_grads(q, eps, p):
    """Partial derivatives (dp/dq, dp/deps) of p = kl^{-1}(q, eps) (upper or
    lower inverse, given the value p already computed).  From F(q,p)=kl(q||p)-eps=0:
    dp/dq = -F_q / F_p,  dp/deps = 1 / F_p,  F_q = ln(q(1-p)/(p(1-q))),  F_p = (p-q)/(p(1-p))."""
    q = min(max(q, 1e-12), 1 - 1e-12)
    p = min(max(p, 1e-12), 1 - 1e-12)
    if abs(p - q) < 1e-12:
        return 1.0, np.inf
    Fq = np.log(q * (1 - p) / (p * (1 - q)))
    Fp = (p - q) / (p * (1 - p))
    return -Fq / Fp, 1.0 / Fp


def certificate_and_grad(theta, pi, n, delta, kind, L=None, Lt=None):
    """Value and gradient (w.r.t. softmax logits) of the kl-form certificate
    kind='fo'  : 2 kl^{-1}(rho.L, (KL + ln(2 sqrt n/delta))/n)
    kind='tnd' : 4 kl^{-1}(rho'Lt rho, (2KL + ln(2 sqrt n/delta))/n)."""
    rho = softmax(theta)
    KL = kl_div(rho, pi)
    c = np.log(2 * np.sqrt(n) / delta)
    dKL = np.log(np.maximum(rho, 1e-300) / pi) + 1
    if kind == "fo":
        q, eps, fac, g_q, g_eps = rho @ L, (KL + c) / n, 2.0, L, dKL / n
    else:
        q, eps, fac, g_q, g_eps = rho @ Lt @ rho, (2 * KL + c) / n, 4.0, 2 * Lt @ rho, 2 * dKL / n
    p = kl_inv_upper(q, eps)
    dq, de = kl_inv_grads(q, eps, p)
    g_rho = fac * (dq * g_q + de * g_eps)
    return fac * p, rho * (g_rho - rho @ g_rho)
