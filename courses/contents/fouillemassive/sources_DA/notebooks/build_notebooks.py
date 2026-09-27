"""
Génère tp_da.ipynb (notebook étudiant, à trous) et tp_da_solutions.ipynb
(corrigé complet) à partir d'une seule spécification, pour garantir que les
deux restent parfaitement synchronisés.
"""
import nbformat as nbf

nb_student = nbf.v4.new_notebook()
nb_solutions = nbf.v4.new_notebook()
nb_student["cells"] = []
nb_solutions["cells"] = []

def md(text):
    nb_student["cells"].append(nbf.v4.new_markdown_cell(text))
    nb_solutions["cells"].append(nbf.v4.new_markdown_cell(text))

def shared_code(code):
    nb_student["cells"].append(nbf.v4.new_code_cell(code))
    nb_solutions["cells"].append(nbf.v4.new_code_cell(code))

def exercise(question_md, solution_code, placeholder="# À vous de jouer !\n"):
    nb_student["cells"].append(nbf.v4.new_markdown_cell(question_md))
    nb_student["cells"].append(nbf.v4.new_code_cell(placeholder))
    nb_solutions["cells"].append(nbf.v4.new_markdown_cell(question_md))
    nb_solutions["cells"].append(nbf.v4.new_code_cell(solution_code))


# =====================================================================
md("""\
# TP -- Adaptation de Domaine

**Fouille de Données Massives -- M2 Informatique, SISE**
Guillaume Metzler -- ICOM, Université Lumière Lyon 2 -- Laboratoire ERIC UR 3083

Ce TP prolonge le cours (séance 6) et le notebook `Code_DA.ipynb` déjà vu en cours. Il se
décompose en trois parties :

1. **Rappel guidé** : on reprend et complète, pas à pas, l'exemple filé du cours (régression 1D,
   deux gaussiennes décalées) pour bien ancrer la mécanique de la repondération.
2. **Cœur du TP** : sur un problème de *classification* 2D construit spécialement pour ce TP, on
   implémente et compare quatre méthodes d'estimation du ratio de densités vues en cours
   (*NN weighting*, KDE, classifieur de domaine / IWC, KMM).
3. **Application sur données réelles** : on applique la meilleure méthode à un jeu de données réel
   (`breast_cancer` de `scikit-learn`) sous un biais de sélection simulé.

Une quatrième partie, non corrigée, propose des pistes pour aller plus loin.

**Fichiers fournis** : `utils.py`, `toydatasets.py` (déjà vus en cours) et `tp_utils.py` (nouveau,
spécifique à ce TP -- génération de données avec covariate shift, méthodes de repondération,
*Effective Sample Size*).
""")

shared_code("""\
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression

from utils import gaussian, show_gaussian
from tp_utils import (generate_shift_classification, nn_weights, kde_weights,
                       iwc_weights, kmm_weights, effective_sample_size,
                       weighted_accuracy_report)

%matplotlib inline
np.random.seed(0)
""")

# =====================================================================
md("""\
## Partie 1 -- Rappel guidé : régression pondérée sous covariate shift

On reprend l'exemple filé du cours : $P_S(X)=\\mathcal N(-1,1)$, $P_T(X)=\\mathcal N(1,1)$, et
$P_S(Y\\mid X=x)=P_T(Y\\mid X=x)=\\mathcal N(|x|,\\,0.25)$ (covariate shift). On dispose d'un
échantillon source labellisé `(Xs, ys)` de taille $m=30$ et d'un échantillon cible **non labellisé**
`Xt` de taille $n=30$ (on garde `yt` uniquement pour évaluer, jamais pour entraîner).
""")

shared_code("""\
def label_func(x, noise=0.1):
    return np.abs(x.ravel()) + noise * np.random.randn(len(x))

np.random.seed(0)
Xs = np.random.randn(30, 1) * 1. - 1.
Xt = np.random.randn(30, 1) * 1. + 1.
ys = label_func(Xs, 0.5)
yt = label_func(Xt, 0.5)

show_gaussian(Xs, Xt, ys, yt)
""")

exercise(
"""\
### Question 1.1

Utilisez `sklearn.linear_model.LinearRegression` pour ajuster un modèle sur la source seule
`(Xs, ys)`, et affichez-le avec `show_gaussian(Xs, Xt, ys, yt, model_source_only)`.
""",
"""\
from sklearn.linear_model import LinearRegression

model_source_only = LinearRegression().fit(Xs, ys)
show_gaussian(Xs, Xt, ys, yt, model_source_only)
""")

exercise(
"""\
### Question 1.2

Calculez et affichez l'erreur quadratique moyenne du modèle `model_source_only` sur la source
`(Xs, ys)`, puis sur la cible `(Xt, yt)` (rappel : `yt` n'est utilisé ici que pour évaluer, jamais
pour entraîner). Que constatez-vous ?
""",
"""\
yps = model_source_only.predict(Xs)
err_src = np.mean(np.square(yps - ys))
ypt = model_source_only.predict(Xt)
err_tgt_source_only = np.mean(np.square(ypt - yt))
print("Erreur quadratique moyenne (source) : %.4f" % err_src)
print("Erreur quadratique moyenne (cible)  : %.4f" % err_tgt_source_only)
# L'erreur est nettement plus élevée sur la cible : le modèle, ajusté uniquement sur la source,
# ne s'étend pas correctement à la zone où vit la population cible.
""")

exercise(
"""\
### Question 1.3

Sous covariate shift, on a montré en cours que $w(x)=p_t(x)/p_s(x)=\\exp(2x)$ dans ce cas précis.
Écrivez une fonction `density_ratio(x)` qui calcule $w(x)$, et représentez-la superposée aux deux
densités (utilisez `gaussian` de `utils.py`, comme dans le notebook de cours).
""",
"""\
def density_ratio(x):
    return np.exp(2 * x.ravel())

lin = np.linspace(-4, 4, 1000)
weights_lin = density_ratio(lin)

plt.figure(figsize=(8, 3))
plt.fill_between(lin, gaussian(lin, mu=-1) * 100., label=r"$p_s(x)$", alpha=0.3, edgecolor="C0")
plt.fill_between(lin, gaussian(lin, mu=1) * 100., label=r"$p_t(x)$", alpha=0.3, edgecolor="C1")
plt.plot(lin, weights_lin, c="C0", label=r"$w(x) = \\exp(2x)$")
plt.xlabel("X"); plt.ylabel("Densité / poids"); plt.legend(fontsize=12); plt.ylim(0, 100); plt.show()
""")

exercise(
"""\
### Question 1.4

En utilisant l'argument `sample_weight` de `LinearRegression.fit`, ajustez le modèle **repondéré**
sur `(Xs, ys)` avec les poids `density_ratio(Xs)`. Comparez son erreur quadratique moyenne sur la
cible à celle du modèle source seul (Question 1.2). Affichez le résultat avec `show_gaussian`.
""",
"""\
w = density_ratio(Xs)
model_reweighted = LinearRegression().fit(Xs, ys, sample_weight=w)

ypt_rew = model_reweighted.predict(Xt)
err_tgt_reweighted = np.mean(np.square(ypt_rew - yt))
print("Erreur cible -- modèle source seul : %.4f" % err_tgt_source_only)
print("Erreur cible -- modèle repondéré   : %.4f" % err_tgt_reweighted)

show_gaussian(Xs, Xt, ys, yt, model_reweighted, w, show_error_tgt=True)
# Le modèle repondéré réduit nettement l'erreur cible : c'est exactement l'effet attendu de la
# Proposition 3.4 du cours (le risque cible est un risque source repondéré, sous covariate shift).
""")

# =====================================================================
md("""\
## Partie 2 -- Classification 2D sous covariate shift : comparer les méthodes

On passe à un problème de **classification binaire**, construit spécialement pour ce TP
(`generate_shift_classification` dans `tp_utils.py`) : la vraie règle de décision est
$y=+1$ si $x_1$ appartient à une bande $[-0.5,\\,1.8]$, $-1$ sinon -- une règle **non linéaire**
en $x_1$ (comme la fonction $|x|$ de la Partie 1). Cette règle est identique en source et en cible
(covariate shift), mais la distribution de $x_1$ change fortement : la source est concentrée près
de $0$ (elle voit surtout l'*intérieur* de la bande), la cible est concentrée bien plus loin
(surtout à l'*extérieur*, côté droit).

Un modèle **linéaire** (régression logistique) entraîné sur la source seule va donc être
fortement biaisé sur la région où vit la cible -- exactement le cadre où la repondération
d'instances doit démontrer son intérêt.
""")

shared_code("""\
Xs, ys, Xt, yt = generate_shift_classification(seed=2)

fig, ax = plt.subplots(figsize=(7, 4))
ax.scatter(Xs[ys == 1, 0], Xs[ys == 1, 1], color="C0", marker="o", alpha=0.7, label="source, y=+1")
ax.scatter(Xs[ys == -1, 0], Xs[ys == -1, 1], color="C0", marker="x", alpha=0.7, label="source, y=-1")
ax.scatter(Xt[yt == 1, 0], Xt[yt == 1, 1], color="C1", marker="o", alpha=0.5, label="cible, y=+1 (caché à l'entraînement)")
ax.scatter(Xt[yt == -1, 0], Xt[yt == -1, 1], color="C1", marker="x", alpha=0.5, label="cible, y=-1 (caché à l'entraînement)")
ax.axvspan(-0.5, 1.8, color="grey", alpha=0.08, label="bande vraie (y=+1)")
ax.set_xlabel("$X_1$"); ax.set_ylabel("$X_2$ (non informative)")
ax.legend(fontsize=9, loc="upper left", bbox_to_anchor=(1.01, 1.0))
plt.tight_layout(); plt.show()
""")

exercise(
"""\
### Question 2.1 -- Baseline "source seule"

Entraînez une régression logistique (`LogisticRegression`) sur `(Xs, ys)` uniquement. Affichez son
accuracy sur la source et sur la cible (`yt` pour évaluer seulement). Le résultat vous semble-t-il
cohérent avec la description du jeu de données ci-dessus ?
""",
"""\
clf_source_only = LogisticRegression().fit(Xs, ys)
acc_src = clf_source_only.score(Xs, ys)
acc_tgt_source_only = clf_source_only.score(Xt, yt)
print("Accuracy source : %.3f" % acc_src)
print("Accuracy cible (source seule) : %.3f" % acc_tgt_source_only)
# L'accuracy cible est très mauvaise (souvent proche ou en-dessous de 0.5) : le modèle linéaire,
# ajusté sur une source qui ne voit presque que l'intérieur de la bande, place sa frontière de
# décision très mal pour la région (extérieure, à droite) où vit la cible.
""")

exercise(
"""\
### Question 2.2 -- Les quatre méthodes de repondération

En utilisant les fonctions de `tp_utils.py` (`nn_weights`, `kde_weights`, `iwc_weights`,
`kmm_weights`), calculez les poids `w_nn`, `w_kde`, `w_iwc`, `w_kmm` pour l'échantillon source
`Xs` par rapport à `Xt`. Pour chaque méthode, ré-entraînez une régression logistique pondérée
(argument `sample_weight`) et calculez son accuracy sur la cible.
""",
"""\
w_nn = nn_weights(Xs, Xt, K=15)
w_kde = kde_weights(Xs, Xt, sigma=0.8)
w_iwc, domain_clf = iwc_weights(Xs, Xt)
w_kmm = kmm_weights(Xs, Xt)

weights_dict = {"source seule": None, "NN weighting": w_nn, "KDE": w_kde,
                "IWC (classifieur de domaine)": w_iwc, "KMM": w_kmm}
results = weighted_accuracy_report(Xs, ys, Xt, yt, weights_dict)

for name, r in results.items():
    print("%-30s accuracy cible = %.3f   ESS = %6.1f" % (name, r["acc_target"], r["ess"]))
""")

exercise(
"""\
### Question 2.3 -- Comparaison visuelle

Sur un même graphique en barres, comparez l'accuracy cible des cinq configurations de la Question
2.2 (source seule + 4 méthodes de repondération), et ajoutez une ligne horizontale représentant
l'accuracy d'un modèle **oracle** entraîné directement sur `(Xt, yt)` (borne haute théorique,
inatteignable en pratique puisque `yt` n'est normalement pas disponible).
""",
"""\
oracle = LogisticRegression().fit(Xt, yt)
acc_oracle = oracle.score(Xt, yt)

names = list(results.keys())
accs = [results[n]["acc_target"] for n in names]

fig, ax = plt.subplots(figsize=(8, 4))
bars = ax.bar(names, accs, color=["#8C8C8C", "#1F5F99", "#2A9D8F", "#C8553D", "#6C4F9C"])
ax.axhline(acc_oracle, color="black", linestyle="--", label="oracle (cible labellisée, non disponible en pratique)")
ax.set_ylabel("Accuracy cible"); ax.set_ylim(0, 1)
ax.legend(fontsize=9)
plt.xticks(rotation=20, ha="right")
plt.tight_layout(); plt.show()

print("Accuracy oracle : %.3f" % acc_oracle)
# Les quatre méthodes de repondération améliorent nettement l'accuracy cible par rapport à la
# source seule, et se rapprochent de la borne oracle -- avec des performances qui dépendent du
# réglage des hyperparamètres (K pour NN weighting, sigma pour KDE, gamma pour KMM) : c'est un
# point de vigilance pratique important.
""")

exercise(
"""\
### Question 2.4 -- Effective Sample Size et recouvrement de support

Reprenez la fonction `effective_sample_size` (déjà utilisée dans `weighted_accuracy_report`,
disponible aussi directement dans `tp_utils.py`) et affichez, pour chaque méthode, l'ESS obtenue.
Comparez-la à $m=250$ (la taille de l'échantillon source). Quelle méthode "utilise" le plus
efficacement l'échantillon source ? Faites le lien avec l'Exercice 1.3 du TD.
""",
"""\
for name, r in results.items():
    if name == "source seule":
        continue
    print("%-30s ESS = %6.1f  (sur m = %d)" % (name, r["ess"], len(Xs)))
# Toutes les méthodes ont une ESS très inférieure à m=250 : c'est cohérent avec le fait que seule
# une partie de la source (celle qui ressemble à la cible, à droite de la bande) est réellement
# pertinente ici. L'IWC a l'ESS la plus faible (à peine 2, contre 13 à 31 pour les autres) : elle
# concentre presque tout le poids sur une poignée de points source très "typiques cible", ce qui
# explique aussi sa variance d'un tirage à l'autre. KDE obtient la meilleure accuracy avec une ESS
# un peu plus généreuse : un bon compromis n'est pas toujours la méthode qui "sépare" le mieux les
# domaines, mais celle qui répartit intelligemment le poids sur les points les plus informatifs.
""")

exercise(
"""\
### Question 2.5 -- Visualiser le classifieur de domaine

Affichez, sur un maillage 2D couvrant `Xs` et `Xt`, la probabilité $\\phi(x)=\\widehat\\P(\\text{cible}
\\mid x)$ prédite par `domain_clf` (obtenu Question 2.2), avec les points source et cible
superposés -- comme la Figure 3.6 du cours.
""",
"""\
x1_grid = np.linspace(min(Xs[:, 0].min(), Xt[:, 0].min()) - 0.5,
                       max(Xs[:, 0].max(), Xt[:, 0].max()) + 0.5, 200)
x2_grid = np.linspace(min(Xs[:, 1].min(), Xt[:, 1].min()) - 0.5,
                       max(Xs[:, 1].max(), Xt[:, 1].max()) + 0.5, 200)
xx1, xx2 = np.meshgrid(x1_grid, x2_grid)
Z = domain_clf.predict_proba(np.c_[xx1.ravel(), xx2.ravel()])[:, 1].reshape(xx1.shape)

fig, ax = plt.subplots(figsize=(7, 4.5))
cs = ax.contourf(xx1, xx2, Z, levels=20, cmap="RdBu_r", alpha=0.55)
ax.scatter(Xs[:, 0], Xs[:, 1], color="C0", s=15, label="source")
ax.scatter(Xt[:, 0], Xt[:, 1], color="C1", s=15, marker="^", label="cible")
plt.colorbar(cs, ax=ax, label=r"$\\phi(x) = \\widehat P(\\mathrm{cible} \\mid x)$")
ax.legend(fontsize=9)
ax.set_xlabel("$X_1$"); ax.set_ylabel("$X_2$")
plt.tight_layout(); plt.show()
""")

# =====================================================================
md("""\
## Partie 3 -- Application sur données réelles : `breast_cancer` sous biais de sélection

On simule maintenant un **biais de sélection d'échantillon** (cf. cours, Définition 1.6) sur un
jeu de données réel : `sklearn.datasets.load_breast_cancer` (classification bénin/malin, 569
patientes). On construit artificiellement un domaine *source* biaisé en faveur des tumeurs de
petit rayon (`mean radius` faible), et on garde le reste comme domaine *cible* (plus représentatif
de la population de patientes dans son ensemble).
""")

shared_code("""\
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler

data = load_breast_cancer()
feats = ["mean radius", "mean smoothness"]
idxs = [list(data.feature_names).index(f) for f in feats]
X = data.data[:, idxs]
y = data.target
Xz = StandardScaler().fit_transform(X)
radius = data.data[:, list(data.feature_names).index("mean radius")]

rng = np.random.RandomState(4)
p_source = 1 / (1 + np.exp((radius - np.percentile(radius, 40)) / 1.2))
in_source = rng.rand(len(radius)) < p_source

Xs_bc, ys_bc = Xz[in_source], y[in_source]
Xt_bc, yt_bc = Xz[~in_source], y[~in_source]
print("Taille source : %d -- taille cible : %d" % (len(Xs_bc), len(Xt_bc)))
print("Proportion bénin -- source : %.2f -- cible : %.2f" % (ys_bc.mean(), yt_bc.mean()))
""")

exercise(
"""\
### Question 3.1

Entraînez une régression logistique sur `(Xs_bc, ys_bc)` seule, évaluez son accuracy sur
`(Xt_bc, yt_bc)`. Puis calculez les poids IWC (`iwc_weights`) et ré-entraînez un modèle repondéré.
Comparez les deux accuracies cible, ainsi que l'ESS des poids obtenus. Concluez : la repondération
apporte-t-elle ici un gain aussi spectaculaire que dans la Partie 2 ? Pourquoi, à votre avis ?
""",
"""\
base_bc = LogisticRegression(max_iter=5000).fit(Xs_bc, ys_bc)
acc_base_bc = base_bc.score(Xt_bc, yt_bc)

w_bc, clf_bc = iwc_weights(Xs_bc, Xt_bc)
rew_bc = LogisticRegression(max_iter=5000).fit(Xs_bc, ys_bc, sample_weight=w_bc)
acc_rew_bc = rew_bc.score(Xt_bc, yt_bc)

oracle_bc = LogisticRegression(max_iter=5000).fit(Xt_bc, yt_bc).score(Xt_bc, yt_bc)

print("Accuracy cible -- source seule : %.3f" % acc_base_bc)
print("Accuracy cible -- repondérée (IWC) : %.3f" % acc_rew_bc)
print("Accuracy cible -- oracle : %.3f" % oracle_bc)
print("ESS : %.1f (sur m=%d)" % (effective_sample_size(w_bc), len(Xs_bc)))
# Le gain est ici plus modeste que dans la Partie 2 : avec seulement deux features assez
# discriminantes, une régression logistique entraînée sur la source biaisée reste déjà assez
# proche de l'oracle -- le "mauvais recouvrement" est moins pénalisant qu'avec la règle fortement
# non linéaire de la Partie 2, où le modèle linéaire était volontairement mal spécifié sur la
# région cible. C'est un rappel utile : l'ampleur du gain apporté par l'adaptation de domaine
# dépend fortement de la sévérité du décalage ET de l'adéquation entre le modèle et le vrai
# phénomène (cf. mise en garde du cours sur les limites du "domain-invariant").
""")

# =====================================================================
md("""\
## Partie 4 -- Pour aller plus loin (ouverture, non corrigée)

Cette partie est volontairement **ouverte** : aucune solution n'est fournie, à vous d'explorer
selon votre temps et votre intérêt.

1. **Subspace Alignment** (Fernando, Habrard, Sebban, Tuytelaars, 2013) : alignez les sous-espaces
   principaux (ACP) de la source et de la cible par une simple transformation linéaire, puis
   comparez à l'IWC sur le jeu de données de la Partie 2.
2. **Sensibilité aux hyperparamètres** : reprenez la Question 2.2 et étudiez comment `K` (NN
   weighting), `sigma` (KDE) ou `gamma`/`B` (KMM) affectent l'accuracy cible et l'ESS. Que se
   passe-t-il dans les cas extrêmes (`K` très petit, `sigma` très grand...) ?
3. **DANN "maison"** : si vous êtes à l'aise avec `pytorch`, essayez d'implémenter une version très
   simplifiée de DANN (Section 4.4 du cours) sur le jeu de données de la Partie 2 : un petit MLP
   à deux têtes (classification + classifieur de domaine) entraîné en alternance, sans même
   implémenter le Gradient Reversal Layer (alternez simplement les pas de gradient des deux têtes).
   Retrouvez-vous une amélioration comparable à celle de l'IWC ?
4. Sur le jeu `breast_cancer` de la Partie 3, testez un biais de sélection sur une **autre**
   variable (par exemple `mean texture`), ou avec toutes les features plutôt que deux seulement.
   Le gain de la repondération change-t-il ?
""")

# ---------------------------------------------------------------------
import pathlib
out_dir = pathlib.Path(".")
with open(out_dir / "tp_da.ipynb", "w") as f:
    nbf.write(nb_student, f)
with open(out_dir / "tp_da_solutions.ipynb", "w") as f:
    nbf.write(nb_solutions, f)

print("Notebooks générés :", len(nb_student["cells"]), "cellules (étudiant) /",
      len(nb_solutions["cells"]), "cellules (corrigé)")
