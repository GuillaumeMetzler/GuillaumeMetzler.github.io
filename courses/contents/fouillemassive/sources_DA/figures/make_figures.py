"""
Génère les figures matplotlib utilisées dans le poly / TD / TP sur l'adaptation de domaine.
Reprend l'esprit des figures de LectureDA.pdf (deux gaussiennes décalées en source/cible)
et du notebook Code_DA.ipynb (fonctions gaussian / show_gaussian de utils.py).
"""
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
from matplotlib.patches import FancyArrowPatch, Circle
from sklearn.linear_model import LinearRegression

mpl.rcParams["font.size"] = 12
mpl.rcParams["axes.spines.top"] = False
mpl.rcParams["axes.spines.right"] = False

C_S = "#1F5F99"   # bleu source
C_T = "#C8553D"   # rouge cible
C_K = "#2A9D8F"   # teal
C_G = "#8C8C8C"

def gaussian(x, mu=0., s=1.):
    return 1. / np.sqrt(2. * np.pi * s ** 2) * np.exp(-(x - mu) ** 2 / (2. * s ** 2))

np.random.seed(0)

# ---------------------------------------------------------------- Fig 1 : les deux densités + échantillons
Xs = np.random.randn(30) * 1. - 1.
Xt = np.random.randn(30) * 1. + 1.
lin = np.linspace(-4.5, 4.5, 400)

fig, ax = plt.subplots(figsize=(7, 3.2))
ax.plot(lin, gaussian(lin, mu=-1), color=C_S)
ax.fill_between(lin, gaussian(lin, mu=-1), alpha=0.25, color=C_S, label=r"$p_s(x)$")
ax.plot(lin, gaussian(lin, mu=1), color=C_T)
ax.fill_between(lin, gaussian(lin, mu=1), alpha=0.25, color=C_T, label=r"$p_t(x)$")
for x in Xs:
    ax.plot([x, x], [0, 0.02], color=C_S, lw=1.2)
for x in Xt:
    ax.plot([x, x], [0, 0.02], color=C_T, lw=1.2)
ax.plot([], [], color=C_S, lw=1.2, label=r"$x_i \sim P_S(X)$")
ax.plot([], [], color=C_T, lw=1.2, label=r"$x'_j \sim P_T(X)$")
ax.set_xlabel("$X$"); ax.set_ylabel("densité")
ax.legend(loc="upper left", fontsize=10, framealpha=0.95)
ax.set_xlim(-4.5, 4.5); ax.set_ylim(0, 0.48)
plt.tight_layout()
plt.savefig("fig_densities.png", dpi=200)
plt.close()

# ---------------------------------------------------------------- Fig 2 : régression, biais du modèle source-only
def label_func(x, noise=0.1, rng=None):
    rng = rng or np.random
    return np.abs(x) + noise * rng.randn(len(x))

rng = np.random.RandomState(0)
Xs2 = rng.randn(30) - 1.
Xt2 = rng.randn(30) + 1.
ys2 = label_func(Xs2, 0.5, rng)
yt2 = label_func(Xt2, 0.5, rng)

model_src = LinearRegression().fit(Xs2.reshape(-1, 1), ys2)
xx = np.linspace(-4.5, 4.5, 200).reshape(-1, 1)
yp_src = model_src.predict(xx)

fig, ax = plt.subplots(figsize=(7, 3.6))
ax.plot(Xs2, ys2, "o", color=C_S, alpha=0.75, label=r"$(x_i,y_i)$ source (labellisé)")
ax.plot(Xt2, yt2, "o", color=C_T, alpha=0.4, label=r"$(x'_j,y'_j)$ cible (inconnu à l'entraînement)")
ax.plot(xx, yp_src, color="black", lw=2, label=r"$\hat h_{\text{source}}$ (appris sur la source seule)")
ax.plot(xx, np.abs(xx), "--", color=C_G, lw=1.5, label=r"$E[Y|X=x]=|x|$ (vrai modèle)")
ax.set_xlabel("$X$"); ax.set_ylabel("$Y$")
ax.legend(loc="upper center", fontsize=9.5, ncol=1, framealpha=0.95)
plt.tight_layout()
plt.savefig("fig_regression_bias.png", dpi=200)
plt.close()

# ---------------------------------------------------------------- Fig 3 : poids d'importance / reweighting
def w_exact(x):
    return np.exp(2 * x)

weights = w_exact(Xs2)
weights_clipped = np.clip(weights, 0, 8)

fig, axes = plt.subplots(1, 2, figsize=(9.5, 3.4))
ax = axes[0]
ax.plot(lin, gaussian(lin, mu=-1) * 60, color=C_S, alpha=0.4)
ax.fill_between(lin, gaussian(lin, mu=-1) * 60, alpha=0.15, color=C_S)
ax.plot(lin, gaussian(lin, mu=1) * 60, color=C_T, alpha=0.4)
ax.fill_between(lin, gaussian(lin, mu=1) * 60, alpha=0.15, color=C_T)
ax.plot(lin, w_exact(lin), color="black", lw=2, label=r"$w(x)=\exp(2x)$")
ax.set_ylim(0, 25); ax.set_xlim(-4.5, 4.5)
ax.set_xlabel("$X$"); ax.set_title("(a) ratio de densités $w(x)$")
ax.legend(fontsize=9)

ax = axes[1]
ax.scatter(Xs2, ys2, s=15 + 25 * weights_clipped, color=C_S, alpha=0.7,
           edgecolor="white", linewidth=0.5, label=r"$(x_i,y_i)$, taille $\propto w(x_i)$")
ax.scatter(Xt2, yt2, s=25, color=C_T, alpha=0.35, label=r"$(x'_j,y'_j)$ cible")
model_rew = LinearRegression().fit(Xs2.reshape(-1, 1), ys2, sample_weight=weights)
ax.plot(xx, model_rew.predict(xx), color="black", lw=2, label=r"$\hat h_w$ (source repondérée)")
ax.plot(xx, np.abs(xx), "--", color=C_G, lw=1.5)
ax.set_xlabel("$X$"); ax.set_title("(b) régression repondérée")
ax.legend(fontsize=8.5, loc="upper center")
plt.tight_layout()
plt.savefig("fig_reweighting.png", dpi=200)
plt.close()

# ---------------------------------------------------------------- Fig 4 : NN weighting 2D
rng = np.random.RandomState(3)
Xs3 = rng.randn(40, 2) * [1.0, 0.6] + [0, 0]
Xt3 = rng.randn(25, 2) * [0.7, 0.9] + [1.6, 1.2]

from sklearn.neighbors import NearestNeighbors
K = 5
nn = NearestNeighbors(n_neighbors=K).fit(Xs3)
_, idx = nn.kneighbors(Xt3)
counts = np.zeros(len(Xs3))
for row in idx:
    counts[row] += 1

fig, ax = plt.subplots(figsize=(5.2, 4.6))
ax.scatter(Xs3[:, 0], Xs3[:, 1], s=30 + 60 * counts, color=C_S, alpha=0.8,
           edgecolor="white", linewidth=0.6, label=r"source $X_S$ (taille $\propto \hat w(x_i)$)")
ax.scatter(Xt3[:, 0], Xt3[:, 1], marker="^", s=45, color=C_T, alpha=0.85, label=r"cible $X_T$")
ax.set_xlabel("$X_1$"); ax.set_ylabel("$X_2$")
ax.legend(fontsize=9)
ax.set_title(f"Pondération par $K$-plus-proches-voisins ($K={K}$)")
plt.tight_layout()
plt.savefig("fig_nnweighting.png", dpi=200)
plt.close()

# ---------------------------------------------------------------- Fig 5 : domain classifier (IWC)
from sklearn.linear_model import LogisticRegression
rng = np.random.RandomState(7)
Xs4 = rng.randn(60, 2) * 0.9 + [-1, 0]
Xt4 = rng.randn(60, 2) * 0.9 + [1, 0.3]
Xall = np.vstack([Xs4, Xt4])
yall = np.concatenate([np.zeros(len(Xs4)), np.ones(len(Xt4))])
clf = LogisticRegression().fit(Xall, yall)

xx1, xx2 = np.meshgrid(np.linspace(-4, 4, 200), np.linspace(-3, 3.5, 200))
Z = clf.predict_proba(np.c_[xx1.ravel(), xx2.ravel()])[:, 1].reshape(xx1.shape)

fig, ax = plt.subplots(figsize=(6, 4.6))
cs = ax.contourf(xx1, xx2, Z, levels=20, cmap="RdBu_r", alpha=0.55)
ax.contour(xx1, xx2, Z, levels=[0.5], colors="black", linewidths=1.5, linestyles="--")
ax.scatter(Xs4[:, 0], Xs4[:, 1], color=C_S, s=25, label=r"source ($\phi \to 0$)")
ax.scatter(Xt4[:, 0], Xt4[:, 1], color=C_T, s=25, marker="^", label=r"cible ($\phi \to 1$)")
ax.set_xlabel("$X_1$"); ax.set_ylabel("$X_2$")
ax.legend(fontsize=9, loc="upper left")
cb = plt.colorbar(cs, ax=ax); cb.set_label(r"$\phi(x)=\hat P(\text{domaine}=T\mid x)$")
plt.tight_layout()
plt.savefig("fig_domainclassifier.png", dpi=200)
plt.close()

print("Figures générées.")
