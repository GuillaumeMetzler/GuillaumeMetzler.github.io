# -*- coding: utf-8 -*-
"""Generates all matplotlib figures of the PAC-Bayes lecture notes."""
import os, sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "common"))
from pbtools import *
from sklearn.datasets import make_moons, load_breast_cancer, load_digits, load_wine, make_classification
from sklearn.model_selection import train_test_split
from scipy.stats import norm

OUT = os.path.join(os.path.dirname(__file__), "figures")
os.makedirs(OUT, exist_ok=True)

plt.rcParams.update({
    "font.family": "serif", "mathtext.fontset": "cm", "font.size": 10,
    "axes.spines.top": False, "axes.spines.right": False,
    "axes.titlesize": 10, "legend.fontsize": 8.5, "legend.frameon": False,
    "figure.dpi": 150, "savefig.bbox": "tight",
})
C1, C2, C3, C4, C5, GREY = "#1f5f99", "#c8553d", "#2a9d8f", "#e9a13b", "#6c4f9c", "#8c8c8c"


def save(fig, name):
    fig.savefig(os.path.join(OUT, name))
    plt.close(fig)
    print("saved", name)

# ---------------------------------------------------------------------------
# 1. Prior / posterior over threshold classifiers (Gibbs posterior)
# ---------------------------------------------------------------------------
def fig_prior_posterior():
    rng = np.random.RandomState(3)
    m = 40
    x = rng.uniform(-3, 3, m)
    y = np.where(x + 0.6 * rng.randn(m) > 0.4, 1, -1)
    theta = np.linspace(-3, 3, 601)
    emp = np.array([np.mean(np.where(x > t, 1, -1) != y) for t in theta])
    prior = norm.pdf(theta, 0, 1.2)
    prior /= np.trapezoid(prior, theta)
    fig, axes = plt.subplots(1, 2, figsize=(9, 3.0))
    ax = axes[0]
    ax.scatter(x[y == 1], np.zeros((y == 1).sum()) + 0.05, marker="+", color=C1, s=40, label="$y=+1$")
    ax.scatter(x[y == -1], np.zeros((y == -1).sum()) - 0.05, marker="_", color=C2, s=40, label="$y=-1$")
    ax.plot(theta, emp, color="k", lw=1.2, label=r"empirical risk $\hat R_S(h_\theta)$")
    ax.set_xlabel(r"threshold $\theta$  ($h_\theta(x)=\mathrm{sign}(x-\theta)$)")
    ax.set_ylim(-0.15, 0.8)
    ax.legend(loc="upper right")
    ax.set_title("Data and empirical risk of each voter")
    ax = axes[1]
    ax.fill_between(theta, prior, color=GREY, alpha=0.3, label=r"prior $P$")
    for lam, col in [(0.05, C4), (0.2, C3), (1.0, C1)]:
        post = prior * np.exp(-lam * m * emp)
        post /= np.trapezoid(post, theta)
        ax.plot(theta, post, color=col, lw=1.6, label=r"Gibbs posterior, $\lambda=%g$" % lam)
    ax.set_xlabel(r"threshold $\theta$")
    ax.set_ylabel("density")
    ax.legend(loc="upper left")
    ax.set_title(r"$Q_\lambda(\theta)\propto P(\theta)\,e^{-\lambda m \hat R_S(h_\theta)}$")
    save(fig, "prior_posterior.pdf")

# ---------------------------------------------------------------------------
# 2. Individual voters vs. majority vote (random forest on moons)
# ---------------------------------------------------------------------------
def fig_gibbs_vs_mv():
    X, y = make_moons(300, noise=0.3, random_state=1)
    y = np.where(y > 0, 1, -1)
    bt = BaggedTrees(200, max_features=1, max_depth=None, random_state=0).fit(X, y)
    xx, yy = np.meshgrid(np.linspace(-2, 3, 250), np.linspace(-1.6, 2.1, 250))
    G = np.c_[xx.ravel(), yy.ravel()]
    V = bt.predict_all(G)
    cm = ListedColormap(["#f3c9bf", "#c3d7ea"])
    fig, axes = plt.subplots(1, 4, figsize=(11, 2.8), sharey=True)
    for k, ax in enumerate(axes[:2]):
        ax.contourf(xx, yy, V[k].reshape(xx.shape), levels=[-2, 0, 2], cmap=cm)
        ax.set_title(r"voter $h_{%d}\sim Q$" % (k + 1))
    ax = axes[2]
    cs = ax.contourf(xx, yy, V.mean(0).reshape(xx.shape), levels=np.linspace(-1, 1, 21), cmap="RdBu")
    ax.set_title(r"$\mathbb{E}_{h\sim Q}\,h(x)$")
    ax = axes[3]
    ax.contourf(xx, yy, np.where(V.mean(0) >= 0, 1, -1).reshape(xx.shape), levels=[-2, 0, 2], cmap=cm)
    ax.set_title(r"majority vote $B_Q(x)$")
    for ax in axes:
        ax.scatter(X[y == 1, 0], X[y == 1, 1], s=5, c=C1)
        ax.scatter(X[y == -1, 0], X[y == -1, 1], s=5, c=C2)
        ax.set_xticks([]); ax.set_yticks([])
    fig.colorbar(cs, ax=axes[2], fraction=0.046, pad=0.02, ticks=[-1, 0, 1])
    save(fig, "gibbs_vs_mv.pdf")

# ---------------------------------------------------------------------------
# 3. kl divergence and its inversion
# ---------------------------------------------------------------------------
def fig_kl_inverse():
    q, eps = 0.1, 0.05
    p = np.linspace(0.001, 0.5, 500)
    fig, ax = plt.subplots(figsize=(5.6, 3.2))
    ax.plot(p, kl_bin(q, p), color=C1, lw=1.8, label=r"$p\mapsto \mathrm{kl}(\hat q\,\|\,p)$, $\hat q=0.1$")
    ax.plot(p, 2 * (p - q) ** 2, color=C4, lw=1.4, ls="--", label=r"Pinsker: $2(p-\hat q)^2$")
    ax.axhline(eps, color=GREY, lw=1)
    pu, pl = kl_inv_upper(q, eps), kl_inv_lower(q, eps)
    pp = q + np.sqrt(eps / 2)
    ax.plot([pu, pu], [0, eps], color=C1, lw=1)
    ax.plot([pl, pl], [0, eps], color=C1, lw=1)
    ax.plot([pp, pp], [0, eps], color=C4, lw=1, ls="--")
    ax.annotate(r"$\overline{\mathrm{kl}}^{-1}(\hat q,\varepsilon)=%.3f$" % pu, (pu, eps), (pu - 0.12, eps + 0.09),
                arrowprops=dict(arrowstyle="->", lw=0.7), fontsize=9)
    ax.annotate(r"$\hat q+\sqrt{\varepsilon/2}=%.3f$" % pp, (pp, eps * 0.4), (pp + 0.08, eps * 0.4 + 0.02),
                arrowprops=dict(arrowstyle="->", lw=0.7), fontsize=9)
    ax.annotate("lower inversion", (pl, eps), (pl - 0.005, eps + 0.12),
                arrowprops=dict(arrowstyle="->", lw=0.7), fontsize=9)
    ax.text(0.45, eps + 0.008, r"$\varepsilon$", color=GREY)
    ax.set_ylim(0, 0.35); ax.set_xlim(0, 0.5)
    ax.set_xlabel("$p$ (true risk)")
    ax.legend(loc="upper center")
    save(fig, "kl_inverse.pdf")

# ---------------------------------------------------------------------------
# 4. Comparison of the classical bounds
# ---------------------------------------------------------------------------
def fig_bounds_comparison():
    delta = 0.05
    ms = np.unique(np.logspace(1.7, 5, 40).astype(int))
    fig, axes = plt.subplots(1, 3, figsize=(11, 3.1))
    for ax, emp, KL in [(axes[0], 0.1, 5.0), (axes[1], 0.0, 5.0)]:
        b1 = [min(1, bound_mcallester(emp, KL, m, delta)) for m in ms]
        b2 = [bound_seeger(emp, KL, m, delta) for m in ms]
        b3 = [bound_catoni_grid(emp, KL, m, delta) for m in ms]
        b4 = [min(1, bound_lambda(emp, KL, m, delta)) for m in ms]
        ax.plot(ms, b1, color=C4, label="McAllester (Pinsker)")
        ax.plot(ms, b4, color=C3, ls="-.", label=r"PAC-Bayes-$\lambda$")
        ax.plot(ms, b3, color=C5, ls=":", lw=2, label="Catoni (grid on $C$)")
        ax.plot(ms, b2, color=C1, lw=1.8, label="Seeger (kl)")
        ax.axhline(emp, color=GREY, lw=0.8)
        ax.set_xscale("log"); ax.set_xlabel("sample size $m$")
        ax.set_title(r"$\hat R_S(G_Q)=%g$, KL$(Q\|P)=%g$" % (emp, KL))
        ax.set_ylim(0, 0.8 if emp > 0 else 0.5)
    axes[0].set_ylabel(r"bound on $R(G_Q)$  ($\delta=0.05$)")
    axes[0].legend()
    ax = axes[2]
    m, KL = 1000, 10.0
    emps = np.linspace(0, 0.5, 60)
    ax.plot(emps, [min(1, bound_mcallester(e, KL, m, delta)) for e in emps], color=C4)
    ax.plot(emps, [min(1, bound_lambda(e, KL, m, delta)) for e in emps], color=C3, ls="-.")
    ax.plot(emps, [bound_catoni_grid(e, KL, m, delta) for e in emps], color=C5, ls=":", lw=2)
    ax.plot(emps, [bound_seeger(e, KL, m, delta) for e in emps], color=C1, lw=1.8)
    ax.plot(emps, emps, color=GREY, lw=0.8)
    ax.set_xlabel(r"empirical Gibbs risk $\hat R_S(G_Q)$")
    ax.set_title(r"$m=1000$, KL$(Q\|P)=10$")
    save(fig, "bounds_comparison.pdf")

# ---------------------------------------------------------------------------
# 5. Gibbs posterior on a finite set of voters: temperature trade-off
# ---------------------------------------------------------------------------
def fig_temperature():
    X, y = load_breast_cancer(return_X_y=True)
    y = np.where(y > 0, 1, -1)
    Xp, Xrest, yp, yrest = train_test_split(X, y, train_size=100, random_state=1)
    Xtr, Xte, ytr, yte = train_test_split(Xrest, yrest, train_size=120, random_state=0)
    # voters = decision stumps on each feature at quantiles computed on a separate sample Xp
    voters = []
    for j in range(X.shape[1]):
        for t in np.quantile(Xp[:, j], [0.2, 0.4, 0.5, 0.6, 0.8]):
            for s in (1, -1):
                voters.append((j, t, s))
    def votes(Xs):
        return np.array([s * np.where(Xs[:, j] > t, 1, -1) for j, t, s in voters])
    Vtr = votes(Xtr); n = len(voters); m = len(ytr)
    Lhat = (Vtr != ytr).mean(1)
    pi = np.ones(n) / n
    delta = 0.05
    lams = np.logspace(-3, 2, 80)
    gib, kls, bnd = [], [], []
    for lam in lams:
        rho = softmax(np.log(pi) - lam * m * Lhat)
        KL = kl_div(rho, pi)
        gib.append(rho @ Lhat); kls.append(KL)
        bnd.append(bound_seeger(rho @ Lhat, KL, m, delta))
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.1))
    ax = axes[0]
    order = np.argsort(Lhat)
    for lam, col in [(0.001, GREY), (0.05, C3), (1.0, C1)]:
        rho = softmax(np.log(pi) - lam * m * Lhat)
        ax.plot(np.arange(n), rho[order], color=col, lw=1.4, label=r"$\lambda=%g$" % lam)
    ax.set_yscale("log"); ax.set_ylim(1e-6, 1)
    ax.set_xlabel(r"voters sorted by empirical risk $\hat R_S(h)$")
    ax.set_ylabel(r"$Q_\lambda(h)$")
    ax.set_title("Gibbs posterior over %d decision stumps" % n)
    ax.legend()
    ax = axes[1]
    ax.plot(lams, gib, color=C4, label=r"$\hat R_S(G_{Q_\lambda})$")
    ax.plot(lams, np.array(kls) / m, color=C5, ls="--", label=r"KL$(Q_\lambda\|P)/m$")
    ax.plot(lams, bnd, color=C1, lw=1.8, label="Seeger bound")
    ax.axhline(np.log(n) / m, color=GREY, lw=0.8, ls=":")
    ax.text(lams[0], np.log(n) / m + 0.01, r"$\ln|H|/m$", color=GREY, fontsize=8)
    i = int(np.argmin(bnd))
    ax.scatter([lams[i]], [bnd[i]], color=C1, zorder=5)
    ax.set_xscale("log"); ax.set_xlabel(r"inverse temperature $\lambda$")
    ax.legend(loc="upper right"); ax.set_ylim(0, 0.6)
    ax.set_title("Accuracy / complexity trade-off (breast cancer)")
    save(fig, "gibbs_temperature.pdf")

# ---------------------------------------------------------------------------
# 6. Distribution of W_Q and margins for a random forest
# ---------------------------------------------------------------------------
def fig_wq_distribution():
    X, y = load_digits(return_X_y=True)
    y = np.where(y >= 5, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.4, random_state=0)
    bt = BaggedTrees(200, random_state=0).fit(Xtr, ytr)
    V = bt.predict_all(Xte)
    rho = np.ones(200) / 200
    st = mv_statistics(V, yte, rho)
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.0))
    ax = axes[0]
    bins = np.linspace(0, 1, 41)
    ax.hist(st["W"], bins=bins, color=C1, alpha=0.8)
    ax.axvspan(0.5, 1.0, color=C2, alpha=0.12)
    ax.axvline(st["gibbs"], color=C4, lw=1.6)
    ax.text(st["gibbs"] + 0.01, ax.get_ylim()[1] * 0.85, r"$R(G_Q)=\mathbb{E}\,W_Q=%.3f$" % st["gibbs"], color=C4)
    ax.text(0.52, ax.get_ylim()[1] * 0.6, r"$B_Q$ errs" + "\n" + r"$R(B_Q)=%.3f$" % st["mv"], color=C2)
    ax.set_xlabel(r"$W_Q(x,y)=\mathbb{E}_{h\sim Q}\,\mathbf{1}[h(x)\neq y]$")
    ax.set_ylabel("number of test points")
    ax.set_title("Random forest, 200 trees (digits $<5$ vs $\\geq 5$)")
    ax = axes[1]
    mar = np.sort(st["margin"])
    ax.plot(mar, np.arange(1, len(mar) + 1) / len(mar), color=C1, lw=1.8)
    ax.axvline(0, color=C2, lw=1)
    ax.set_xlabel(r"margin $M_Q(x,y)=y\,\mathbb{E}_{h\sim Q}h(x)=1-2W_Q(x,y)$")
    ax.set_ylabel("empirical CDF")
    ax.set_title(r"Margin distribution: $R(B_Q)=\mathbb{P}(M_Q\leq 0)$")
    save(fig, "wq_distribution.pdf")

# ---------------------------------------------------------------------------
# 7. C-bound landscape
# ---------------------------------------------------------------------------
def fig_cbound_landscape():
    r = np.linspace(0.001, 0.499, 400)
    d = np.linspace(0, 0.5, 400)
    R, Dd = np.meshgrid(r, d)
    C = 1 - (1 - 2 * R) ** 2 / (1 - 2 * Dd + 1e-12)
    feasible = Dd <= 2 * R * (1 - R)
    C = np.where(feasible, C, np.nan)
    fig, ax = plt.subplots(figsize=(5.4, 3.8))
    cs = ax.contourf(R, Dd, C, levels=np.linspace(0, 1, 11), cmap="viridis")
    ax.contour(R, Dd, C, levels=[0.1, 0.2, 0.3, 0.5], colors="w", linewidths=0.6)
    ax.plot(r, 2 * r * (1 - r), color="k", lw=1)
    ax.text(0.03, 0.40, r"$d_Q=2R(1-R)$" + "\n(boundary: $e_Q=R^2$)", fontsize=8)
    fig.colorbar(cs, ax=ax, label=r"C-bound $C_Q$")
    ax.set_xlabel(r"Gibbs risk $R(G_Q)$"); ax.set_ylabel(r"disagreement $d_Q$")
    ax.set_title("The C-bound rewards disagreement between voters")
    save(fig, "cbound_landscape.pdf")

# ---------------------------------------------------------------------------
# 8. Oracle bounds vs diversity (max_features) on a random forest
# ---------------------------------------------------------------------------
def fig_mv_bounds_diversity():
    X, y = make_classification(3000, 20, n_informative=8, n_redundant=4, flip_y=0.05, random_state=2)
    y = np.where(y > 0, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.5, random_state=0)
    feats = [1, 2, 4, 8, 12, 20]
    res = []
    for f in feats:
        bt = BaggedTrees(100, max_features=f, random_state=0).fit(Xtr, ytr)
        st = mv_statistics(bt.predict_all(Xte), yte, np.ones(100) / 100)
        res.append((st["mv"], 2 * st["gibbs"], 4 * st["joint"], c_bound(st["gibbs"], st["dis"]), st["gibbs"], st["dis"]))
    res = np.array(res)
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.1))
    ax = axes[0]
    ax.plot(feats, res[:, 0], "o-", color="k", label=r"$R(B_Q)$ (majority vote)")
    ax.plot(feats, res[:, 1], "s--", color=C4, label=r"first order $2R(G_Q)$")
    ax.plot(feats, res[:, 2], "^--", color=C3, label=r"tandem $4e_Q$")
    ax.plot(feats, res[:, 3], "d-", color=C1, label=r"C-bound $C_Q$")
    ax.set_xlabel("max_features (number of features tried per split)")
    ax.set_ylabel("value on test sample")
    ax.set_title("Oracle bounds on the risk of the majority vote")
    ax.legend()
    ax = axes[1]
    ax.plot(feats, res[:, 4], "o-", color=C4, label=r"Gibbs risk $R(G_Q)$")
    ax.plot(feats, res[:, 5], "o-", color=C5, label=r"disagreement $d_Q$")
    ax.set_xlabel("max_features")
    ax.set_title("Individual strength vs. diversity")
    ax.legend()
    save(fig, "mv_bounds_diversity.pdf")

# ---------------------------------------------------------------------------
# 9. Linear classifiers with Gaussian posterior
# ---------------------------------------------------------------------------
def fig_linear_gaussian():
    rng = np.random.RandomState(0)
    m = 80
    X = np.r_[rng.randn(m // 2, 2) * 0.8 + [1.2, 1.0], rng.randn(m // 2, 2) * 0.8 - [1.0, 1.0]]
    y = np.r_[np.ones(m // 2), -np.ones(m // 2)]
    w = np.array([1.0, 1.1])
    fig, axes = plt.subplots(1, 2, figsize=(9.5, 3.4))
    for ax, scale, title in [(axes[0], 1.0, r"$Q=N(\mathbf{w},I)$, $\|\mathbf{w}\|=%.1f$"),
                             (axes[1], 5.0, r"$Q=N(\mathbf{w},I)$, $\|\mathbf{w}\|=%.1f$")]:
        ww = scale * w
        xs = np.linspace(-3.5, 3.5, 10)
        for _ in range(40):
            v = ww + rng.randn(2)
            ax.plot(xs, -v[0] / v[1] * xs, color=GREY, lw=0.5, alpha=0.5)
        ax.plot(xs, -ww[0] / ww[1] * xs, color="k", lw=1.8)
        ax.scatter(X[y > 0, 0], X[y > 0, 1], c=C1, s=12)
        ax.scatter(X[y < 0, 0], X[y < 0, 1], c=C2, s=12)
        mg = y * (X @ ww) / np.linalg.norm(X, axis=1)
        gibbs = norm.cdf(-mg).mean()
        mv = np.mean(y * (X @ ww) <= 0)
        ax.set_xlim(-3.5, 3.5); ax.set_ylim(-3.5, 3.5)
        ax.set_title(title % np.linalg.norm(ww) + "\n" + r"$\hat R_S(G_Q)=%.3f$, $\hat R_S(B_Q)=%.3f$, KL$=%.1f$"
                     % (gibbs, mv, np.linalg.norm(ww) ** 2 / 2))
        ax.set_xticks([]); ax.set_yticks([])
    save(fig, "linear_gaussian.pdf")

# ---------------------------------------------------------------------------
# 10. Learning the weights of a forest: uniform vs FO vs TND
# ---------------------------------------------------------------------------
def fig_rf_optimisation():
    datasets = []
    X, y = load_breast_cancer(return_X_y=True); datasets.append(("breast cancer", X, y))
    X, y = load_digits(return_X_y=True); datasets.append(("digits (<5 / >=5)", X, (y >= 5).astype(int)))
    X, y = make_moons(2000, noise=0.3, random_state=0); datasets.append(("moons", X, y))
    X, y = make_classification(3000, 20, n_informative=8, flip_y=0.05, random_state=2); datasets.append(("simulated", X, y))
    delta = 0.05
    rows = []
    for name, X, y in datasets:
        y = np.where(y > 0, 1, -1)
        Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=0)
        bt = BaggedTrees(100, bootstrap_frac=0.5, random_state=0).fit(Xtr, ytr)
        L, n = bt.oob_losses(Xtr, ytr); Lt, n2 = bt.oob_tandem(Xtr, ytr)
        pi = np.ones(100) / 100
        V = bt.predict_all(Xte)
        r = []
        for rho, bfun in [(pi, None), (optimize_fo(pi, L, n, delta), "fo"), (optimize_tnd(pi, Lt, n2, delta), "tnd")]:
            r.append((mv_statistics(V, yte, rho)["mv"], fo_bound(rho, pi, L, n, delta), tnd_bound(rho, pi, Lt, n2, delta)))
        rows.append((name, r))
    fig, axes = plt.subplots(1, len(rows), figsize=(11.5, 2.9), sharey=True)
    lab = ["uniform $\\pi$", "$\\rho^\\star_{\\mathrm{FO}}$", "$\\rho^\\star_{\\mathrm{TND}}$"]
    for ax, (name, r) in zip(axes, rows):
        r = np.array(r)
        xs = np.arange(3)
        ax.bar(xs - 0.25, r[:, 0], 0.25, color="k", label="test risk of $B_\\rho$")
        ax.bar(xs, r[:, 1], 0.25, color=C4, label="FO bound")
        ax.bar(xs + 0.25, r[:, 2], 0.25, color=C3, label="TND bound")
        ax.set_xticks(xs); ax.set_xticklabels(lab)
        ax.set_title(name)
    axes[0].legend(loc="upper left", fontsize=7.5)
    axes[0].set_ylabel("risk / bound ($\\delta=0.05$)")
    save(fig, "rf_optimisation.pdf")


if __name__ == "__main__" and len(sys.argv) == 1:
    fig_prior_posterior()
    fig_gibbs_vs_mv()
    fig_kl_inverse()
    fig_bounds_comparison()
    fig_temperature()
    fig_wq_distribution()
    fig_cbound_landscape()
    fig_mv_bounds_diversity()
    fig_linear_gaussian()
    fig_rf_optimisation()


# ---------------------------------------------------------------------------
# 11. Self-bounding learning dynamics: direct gradient descent on certificates
# ---------------------------------------------------------------------------
def fig_selfbounding_dynamics():
    X, y = load_digits(return_X_y=True)
    y = np.where(y >= 5, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=0)
    bt = BaggedTrees(100, bootstrap_frac=0.5, random_state=0).fit(Xtr, ytr)
    L, n1 = bt.oob_losses(Xtr, ytr); Lt, n2 = bt.oob_tandem(Xtr, ytr)
    V = bt.predict_all(Xte); pi = np.ones(100) / 100
    curves = {}
    for kind, n in [("fo", n1), ("tnd", n2)]:
        th = np.zeros(100); mom = np.zeros(100); vel = np.zeros(100)
        rec = []
        for it in range(401):
            val, g = certificate_and_grad(th, pi, n, 0.05, kind, L, Lt)
            rho = softmax(th)
            if it % 5 == 0:
                rec.append((it, val, mv_statistics(V, yte, rho)["mv"], 1 / np.sum(rho ** 2)))
            mom = 0.9 * mom + 0.1 * g; vel = 0.999 * vel + 0.001 * g ** 2
            th -= 0.05 * (mom / (1 - 0.9 ** (it + 1))) / (np.sqrt(vel / (1 - 0.999 ** (it + 1))) + 1e-8)
        curves[kind] = np.array(rec)
    fig, axes = plt.subplots(1, 3, figsize=(11.5, 3.0))
    for kind, col, lab in [("fo", C4, "minimizing the FO certificate"), ("tnd", C3, "minimizing the TND certificate")]:
        r = curves[kind]
        axes[0].plot(r[:, 0], r[:, 1], color=col, lw=1.8, label=lab)
        axes[1].plot(r[:, 0], r[:, 2], color=col, lw=1.8)
        axes[2].plot(r[:, 0], r[:, 3], color=col, lw=1.8)
    axes[0].set_title("certificate being minimized"); axes[0].legend()
    axes[1].set_title(r"test risk of the vote $B_\rho$")
    axes[2].set_title(r"effective number of trees $1/\sum_t\rho_t^2$")
    for ax in axes:
        ax.set_xlabel("gradient iterations (Adam)")
    save(fig, "selfbounding_dynamics.pdf")

# ---------------------------------------------------------------------------
# 12. Self-bounding versus hold-out (test-set bound)
# ---------------------------------------------------------------------------
def fig_selfbounding_vs_holdout():
    X, y = make_classification(8000, 20, n_informative=8, flip_y=0.05, random_state=2)
    y = np.where(y > 0, 1, -1)
    ms = [200, 500, 1000, 2000, 4000]
    res = []
    for m in ms:
        r = []
        for seed in range(3):
            Xa, Xt, ya, yt = train_test_split(X, y, train_size=m, random_state=seed, stratify=y)
            bt = BaggedTrees(100, bootstrap_frac=0.5, random_state=seed).fit(Xa, ya)
            Lt, n2 = bt.oob_tandem(Xa, ya); pi = np.ones(100) / 100
            rho = optimize_tnd(pi, Lt, n2, 0.05)
            sb_risk = mv_statistics(bt.predict_all(Xt), yt, rho)["mv"]
            sb_cert = tnd_bound(rho, pi, Lt, n2, 0.05)
            X1, X2, y1, y2 = train_test_split(Xa, ya, test_size=0.3, random_state=seed, stratify=ya)
            b = BaggedTrees(100, bootstrap_frac=0.5, random_state=seed).fit(X1, y1)
            ho_risk = np.mean(b.predict(Xt) != yt)
            ho_cert = kl_inv_upper(np.mean(b.predict(X2) != y2), np.log(1 / 0.05) / len(y2))
            r.append((sb_risk, sb_cert, ho_risk, ho_cert))
        res.append(np.mean(r, axis=0))
    res = np.array(res)
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.2))
    ax = axes[0]
    ax.plot(ms, res[:, 0], "o-", color=C3, label="self-bounding (all $m$ examples)")
    ax.plot(ms, res[:, 2], "s--", color=C5, label="hold-out ($70\\%$ for training)")
    ax.set_xscale("log"); ax.set_xlabel("sample size $m$"); ax.set_title("test risk of the learned vote"); ax.legend()
    ax = axes[1]
    ax.plot(ms, res[:, 1], "o-", color=C3, label="TND certificate (OOB, all data)")
    ax.plot(ms, res[:, 3], "s--", color=C5, label="test-set bound on $30\\%$ hold-out")
    ax.set_xscale("log"); ax.set_xlabel("sample size $m$"); ax.set_title(r"certificate ($\delta=0.05$)"); ax.legend()
    save(fig, "selfbounding_vs_holdout.pdf")


# ---------------------------------------------------------------------------
# 13. Model selection with the certificate (union bound over K candidates)
# ---------------------------------------------------------------------------
def fig_selfbounding_selection():
    X, y = load_digits(return_X_y=True)
    y = np.where(y >= 5, 1, -1)
    depths = [1, 2, 3, 5, 8, None]
    K = len(depths)
    res = []
    for seed in range(5):
        Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=seed, stratify=y)
        row = []
        for dpt in depths:
            bt = BaggedTrees(100, max_depth=dpt, bootstrap_frac=0.5, random_state=seed).fit(Xtr, ytr)
            Lt, n2 = bt.oob_tandem(Xtr, ytr); L, n1 = bt.oob_losses(Xtr, ytr); pi = np.ones(100) / 100
            rho = optimize_tnd(pi, Lt, n2, 0.05 / K)
            cert = tnd_bound(rho, pi, Lt, n2, 0.05 / K)
            row.append((mv_statistics(bt.predict_all(Xte), yte, rho)["mv"], cert))
        res.append(row)
    res = np.array(res)             # (seeds, K, 2)
    mean = res.mean(0); std = res.std(0)
    lab = [str(d) if d is not None else "None" for d in depths]
    xs = np.arange(K)
    fig, ax = plt.subplots(figsize=(6.2, 3.2))
    ax.errorbar(xs, mean[:, 1], std[:, 1], fmt="o-", color=C3, capsize=3, label=r"TND certificate with $\delta/K$ ($K=6$)")
    ax.errorbar(xs, mean[:, 0], std[:, 0], fmt="s--", color="k", capsize=3, label="test risk of the vote")
    best = int(np.argmin(mean[:, 1]))
    ax.scatter([xs[best]], [mean[best, 1]], s=160, facecolors="none", edgecolors=C2, lw=1.5, zorder=5, label="selected by the certificate")
    ax.set_xticks(xs); ax.set_xticklabels(lab); ax.set_xlabel("max_depth of the trees")
    ax.set_ylim(0, 1.0); ax.legend(loc="upper right")
    ax.set_title("Self-bounding model selection (digits, 5 splits)")
    save(fig, "selfbounding_selection.pdf")


# ===========================================================================
# v3 figures: more illustrations and algorithm runs
# ===========================================================================
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier as _DTC
TABDIR = os.path.join(os.path.dirname(__file__), "tables")
os.makedirs(TABDIR, exist_ok=True)


def write_tab(name, txt):
    open(os.path.join(TABDIR, name), "w").write(txt)
    print("table", name)


def fig_adaboost():
    X, y = make_classification(2000, 20, n_informative=6, flip_y=0.05, random_state=4)
    y = np.where(y > 0, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.5, random_state=0)
    T = 400
    ada = AdaBoostClassifier(_DTC(max_depth=1), n_estimators=T, random_state=0).fit(Xtr, ytr)
    alphas = ada.estimator_weights_[:len(ada.estimators_)]
    Vtr = np.array([e.predict(Xtr) for e in ada.estimators_]); Vte = np.array([e.predict(Xte) for e in ada.estimators_])
    rounds = np.arange(1, len(alphas) + 1)
    tr_err, te_err = [], []
    csum_tr = np.cumsum(alphas[:, None] * Vtr, 0); csum_te = np.cumsum(alphas[:, None] * Vte, 0)
    for t in range(len(alphas)):
        tr_err.append(np.mean(np.where(csum_tr[t] >= 0, 1, -1) != ytr)); te_err.append(np.mean(np.where(csum_te[t] >= 0, 1, -1) != yte))
    fig, axes = plt.subplots(1, 3, figsize=(11.5, 3.0))
    ax = axes[0]
    Q = alphas / alphas.sum()
    ax.bar(rounds[:60], Q[:60], color=C1, width=0.8)
    ax.set_xlabel("round $t$ (first 60)"); ax.set_ylabel(r"$Q(h_t)=\alpha_t/\sum_s\alpha_s$")
    ax.set_title("AdaBoost's vote is a distribution $Q$")
    ax = axes[1]
    ax.plot(rounds, tr_err, color=C4, label="training error")
    ax.plot(rounds, te_err, color=C2, label="test error")
    ax.set_xscale("log"); ax.set_xlabel("number of rounds $T$"); ax.legend(); ax.set_title("errors of the vote")
    ax = axes[2]
    for t, col in [(5, GREY), (50, C3), (400, C1)]:
        mar = ytr * csum_tr[t - 1] / np.sum(alphas[:t])
        mar = np.sort(mar)
        ax.plot(mar, np.arange(1, len(mar) + 1) / len(mar), color=col, lw=1.6, label=f"$T={t}$")
    ax.axvline(0, color="k", lw=0.6)
    ax.set_xlabel(r"normalized margin $y\sum_t\alpha_th_t(x)/\sum_t\alpha_t$"); ax.set_ylabel("training CDF")
    ax.legend(); ax.set_title("margins keep increasing")
    save(fig, "adaboost_margins.pdf")


def fig_concentration():
    rng = np.random.RandomState(0)
    delta = 0.05
    ps = np.linspace(0.005, 0.5, 40)
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.2))
    for m, ls in [(100, "-"), (1000, "--")]:
        wh = np.sqrt(np.log(1 / delta) / (2 * m)) * np.ones_like(ps)
        wk = [kl_inv_upper(p, np.log(1 / delta) / m) - p for p in ps]
        axes[0].plot(ps, wh, color=C4, ls=ls, label=f"Hoeffding, $m={m}$")
        axes[0].plot(ps, wk, color=C1, ls=ls, label=f"kl (Chernoff), $m={m}$")
    axes[0].set_xlabel(r"empirical risk $\hat p$"); axes[0].set_ylabel(r"width of the bound $p-\hat p$")
    axes[0].set_title("Width of the upper confidence bound ($\\delta=0.05$)"); axes[0].legend(fontsize=7.5)
    # coverage study
    m = 100; ptrue = np.linspace(0.01, 0.5, 15); fh, fk = [], []
    for p in ptrue:
        ph = rng.binomial(m, p, 4000) / m
        fh.append(np.mean(p > ph + np.sqrt(np.log(1 / delta) / (2 * m))))
        fk.append(np.mean([p > kl_inv_upper(q, np.log(1 / delta) / m) for q in ph]))
    axes[1].plot(ptrue, fh, "s-", color=C4, label="Hoeffding")
    axes[1].plot(ptrue, fk, "o-", color=C1, label="kl")
    axes[1].axhline(delta, color=C2, ls=":", label=r"$\delta=0.05$")
    axes[1].set_xlabel("true risk $p$"); axes[1].set_ylabel("frequency of failure")
    axes[1].set_title("Both bounds are valid ($m=100$, 4000 samples)"); axes[1].legend()
    save(fig, "concentration.pdf")


def fig_change_of_measure():
    rng = np.random.RandomState(2)
    n = 25
    P = rng.dirichlet(3 * np.ones(n)); phi = 2.2 * rng.randn(n)
    Qphi = P * np.exp(phi); Qphi /= Qphi.sum()
    Q0 = rng.dirichlet(0.4 * np.ones(n))
    ts = np.linspace(0, 1, 101)
    vals = []
    for t in ts:
        Q = (1 - t) * Q0 + t * Qphi
        vals.append(Q @ phi - kl_div(Q, P))
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.0), gridspec_kw=dict(width_ratios=[1.4, 1]))
    ax = axes[0]; x = np.arange(n); w = 0.28
    ax.bar(x - w, P, w, color=GREY, label="prior $P$")
    ax.bar(x, Q0, w, color=C4, label="some posterior $Q$")
    ax.bar(x + w, Qphi, w, color=C1, label=r"Gibbs distribution $Q_\phi\propto Pe^{\phi}$")
    ax2 = ax.twinx(); ax2.plot(x, phi, "k.", ms=5); ax2.set_ylabel(r"$\phi(h)$ (black dots)")
    ax2.spines["right"].set_visible(True)
    ax.set_xlabel("voters $h$"); ax.set_ylabel("probability"); ax.legend(loc="upper left", fontsize=7.5)
    ax = axes[1]
    ax.plot(ts, vals, color=C1, lw=1.8, label=r"$\mathbb{E}_Q\phi-\mathrm{KL}(Q\|P)$")
    ax.axhline(np.log(P @ np.exp(phi)), color=C2, ls="--", label=r"$\ln\mathbb{E}_Pe^{\phi}$")
    ax.set_xlabel(r"$t$ in $Q_t=(1-t)Q+tQ_\phi$"); ax.legend(); ax.set_title("the maximum is reached at $Q_\\phi$")
    save(fig, "change_of_measure.pdf")


def fig_occam():
    delta, m = 0.05, 1000
    Hs = np.logspace(0, 12, 60)
    fig, ax = plt.subplots(figsize=(5.8, 3.0))
    for emp, col in [(0.0, C3), (0.05, C1), (0.15, C4)]:
        ax.plot(Hs, [kl_inv_upper(emp, (np.log(H) + np.log(1 / delta)) / m) for H in Hs], color=col, lw=1.8, label=rf"$\hat R_S(h)={emp}$")
    ax.set_xscale("log"); ax.set_xlabel(r"size of the class $|\mathcal{H}|$ (uniform prior)"); ax.set_ylabel("Occam bound (kl form)")
    ax.set_title(r"The price of a finite class is only $\ln|\mathcal{H}|$ ($m=1000$)"); ax.legend()
    save(fig, "occam.pdf")


def fig_bound_anatomy():
    m, delta, emp = 1000, 0.05, 0.12
    KLs = [0, 2, 5, 10, 20, 50]
    conf = np.log(2 * np.sqrt(m) / delta)
    mc = [bound_mcallester(emp, k, m, delta) - emp for k in KLs]
    sg = [bound_seeger(emp, k, m, delta) - emp for k in KLs]
    fig, ax = plt.subplots(figsize=(6.4, 3.1))
    x = np.arange(len(KLs)); w = 0.36
    ax.bar(x - w / 2, [emp] * len(KLs), w, color=GREY, label=r"empirical term $\hat R_S(G_Q)$")
    ax.bar(x - w / 2, mc, w, bottom=emp, color=C4, label="complexity, McAllester")
    ax.bar(x + w / 2, [emp] * len(KLs), w, color=GREY)
    ax.bar(x + w / 2, sg, w, bottom=emp, color=C1, label="complexity, Seeger")
    ax.set_xticks(x); ax.set_xticklabels([str(k) for k in KLs]); ax.set_xlabel(r"$\mathrm{KL}(Q\|P)$ (nats)")
    ax.set_ylabel("bound on $R(G_Q)$"); ax.legend(fontsize=8)
    ax.set_title(r"Anatomy of a bound ($m=1000$, $\delta=0.05$, $\hat R_S=0.12$)")
    save(fig, "bound_anatomy.pdf")
    rows = []
    for k in KLs:
        rows.append(r"%d & %.4f & %.3f & %.3f & %.3f & %.3f \\" % (k, (k + conf) / m, bound_mcallester(emp, k, m, delta),
                     bound_lambda(emp, k, m, delta), bound_catoni_grid(emp, k, m, delta), bound_seeger(emp, k, m, delta)))
    write_tab("bound_anatomy.tex", "\n".join(rows))


def fig_ddprior():
    X, y = load_breast_cancer(return_X_y=True); y = np.where(y > 0, 1, -1)
    fracs = [0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 0.85]
    res = []
    for frac in fracs:
        bs, ts = [], []
        for seed in range(5):
            r = np.random.RandomState(seed)
            Xp, Xr, yp, yr = train_test_split(X, y, train_size=frac, random_state=seed)
            XS, Xt, yS, yt = train_test_split(Xr, yr, test_size=0.3, random_state=seed)
            vs = []
            for t in range(200):
                idx = r.randint(0, len(yp), len(yp))
                vs.append(_DTC(max_depth=r.randint(1, 4), max_features="sqrt", random_state=t).fit(Xp[idx], yp[idx]))
            e = np.array([(v.predict(XS) != yS).mean() for v in vs]); te = np.array([(v.predict(Xt) != yt).mean() for v in vs])
            mm = len(yS); Pu = np.ones(200) / 200; best = (1, 0)
            for lam in np.logspace(-3, 1, 30):
                Qd = softmax(np.log(Pu) - lam * mm * e)
                b = bound_seeger(Qd @ e, kl_div(Qd, Pu), mm, 0.05)
                if b < best[0]:
                    best = (b, Qd @ te)
            bs.append(best[0]); ts.append(best[1])
        res.append((np.mean(bs), np.std(bs), np.mean(ts), len(yS)))
    res = np.array(res)
    fig, ax = plt.subplots(figsize=(6.0, 3.1))
    ax.errorbar(fracs, res[:, 0], res[:, 1], fmt="o-", color=C1, capsize=3, label="best Seeger certificate")
    ax.plot(fracs, res[:, 2], "s--", color="k", label="test Gibbs risk")
    for f, r in zip(fracs, res):
        ax.annotate(f"m={int(r[3])}", (f, r[0]), (0, 6), textcoords="offset points", ha="center", fontsize=7)
    ax.set_xlabel("fraction of the data used to build the voters (prior)"); ax.set_ylim(0, 0.32); ax.legend()
    ax.set_title("Splitting the data between prior and bound (breast cancer)")
    save(fig, "ddprior_split.pdf")


def fig_montecarlo():
    rng = np.random.RandomState(0)
    X, y = load_breast_cancer(return_X_y=True); y = np.where(y > 0, 1, -1)
    from sklearn.preprocessing import StandardScaler
    from sklearn.svm import LinearSVC
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=0)
    sc = StandardScaler().fit(Xtr); Xtr = np.hstack([sc.transform(Xtr), np.ones((len(Xtr), 1))])
    u = LinearSVC(C=1.0, fit_intercept=False, max_iter=20000).fit(Xtr, ytr).coef_.ravel(); u /= np.linalg.norm(u)
    w = 8 * u; m = len(ytr); delta = 0.05
    exact = np.mean(norm.cdf(-ytr * (Xtr @ w) / np.linalg.norm(Xtr, axis=1)))
    exact_b = bound_seeger(exact, w @ w / 2, m, delta)
    Ns = [10, 30, 100, 300, 1000, 3000, 10000]; bs = []
    for N in Ns:
        Vs = w + rng.randn(N, len(w)); emp_mc = np.mean(np.sign(Xtr @ Vs.T) != ytr[:, None])
        up = kl_inv_upper(emp_mc, np.log(2 / (delta / 2)) / N)
        bs.append(bound_seeger(up, w @ w / 2, m, delta / 2))
    fig, ax = plt.subplots(figsize=(5.8, 3.0))
    ax.plot(Ns, bs, "o-", color=C1, label="Monte Carlo certificate ($\\delta/2+\\delta/2$)")
    ax.axhline(exact_b, color=C3, ls="--", label="certificate with the exact Gibbs risk")
    ax.axhline(exact, color=GREY, ls=":", label="exact empirical Gibbs risk")
    ax.set_xscale("log"); ax.set_xlabel("number $N$ of sampled classifiers"); ax.legend(fontsize=8)
    ax.set_title("Certifying a Gaussian posterior by sampling")
    save(fig, "montecarlo.pdf")


def fig_condorcet():
    from scipy.stats import binom
    p = 0.3; ns = np.arange(1, 102, 2)
    fig, axes = plt.subplots(1, 2, figsize=(10, 3.1))
    ax = axes[0]
    ax.plot(ns, [binom.sf(n // 2, n, p) for n in ns], color="k", lw=1.8, label=r"$R(B_Q)$")
    e = p ** 2 + p * (1 - p) / ns; d = 2 * p * (1 - p) * (1 - 1 / ns)
    ax.plot(ns, 2 * p * np.ones_like(ns, dtype=float), color=C4, ls="--", label="first order $2R(G_Q)$")
    ax.plot(ns, 4 * e, color=C3, ls="-.", label="tandem $4e_Q$")
    ax.plot(ns, 1 - (1 - 2 * p) ** 2 / (1 - 2 * d), color=C1, label="C-bound")
    ax.set_xlabel("number of independent voters $n$"); ax.set_ylim(0, 1); ax.legend()
    ax.set_title(r"Independent voters, error $p=0.3$")
    ax = axes[1]
    rng = np.random.RandomState(0); n, N = 25, 20000; cs = np.linspace(0, 1, 11); out = []
    for c in cs:
        leader = rng.rand(N) < p; indep = rng.rand(n, N) < p; copy = rng.rand(N) < c
        Err = np.where(copy[None, :], leader[None, :], indep).astype(float); W = Err.mean(0)
        g, e2 = W.mean(), np.mean(W ** 2); d2 = 2 * (g - e2)
        out.append((np.mean(W >= 0.5), 2 * g, 4 * e2, 1 - (1 - 2 * g) ** 2 / (1 - 2 * d2)))
    out = np.array(out)
    ax.plot(cs, out[:, 0], color="k", lw=1.8, label=r"$R(B_Q)$")
    ax.plot(cs, out[:, 1], color=C4, ls="--", label="first order")
    ax.plot(cs, out[:, 2], color=C3, ls="-.", label="tandem")
    ax.plot(cs, out[:, 3], color=C1, label="C-bound")
    ax.set_xlabel("correlation $c$ of the errors ($n=25$)"); ax.set_ylim(0, 1.25); ax.legend(fontsize=8)
    ax.set_title("Correlated voters")
    save(fig, "condorcet.pdf")


def fig_bound_regions():
    r = np.linspace(0.001, 0.499, 400); d = np.linspace(0, 0.5, 400)
    R, Dd = np.meshgrid(r, d)
    feas = Dd <= 2 * R * (1 - R)
    FO = 2 * R; TND = 4 * (R - Dd / 2); CB = 1 - (1 - 2 * R) ** 2 / (1 - 2 * Dd + 1e-12)
    best = np.argmin(np.stack([FO, TND, CB]), 0).astype(float)
    best[~feas] = np.nan
    fig, ax = plt.subplots(figsize=(5.4, 3.6))
    from matplotlib.colors import ListedColormap as LC
    ax.contourf(R, Dd, best, levels=[-0.5, 0.5, 1.5, 2.5], colors=["#f6d9a8", "#b9e2dc", "#c3d7ea"])
    ax.plot(r, r, color=C3, lw=1, ls="--"); ax.text(0.30, 0.25, r"$d_Q=R(G_Q)$", color=C3, fontsize=7, rotation=33)
    ax.plot(r, 2 * r * (1 - r), color="k", lw=1)
    ax.text(0.38, 0.08, "first order\nis the smallest", fontsize=8, ha="center")
    ax.text(0.08, 0.3, "C-bound\nis the smallest", fontsize=8, ha="center")
    ax.set_xlabel(r"Gibbs risk $R(G_Q)$"); ax.set_ylabel(r"disagreement $d_Q$")
    ax.set_title("Which oracle bound is the tightest?")
    save(fig, "bound_regions.pdf")
    print("fraction TND best:", np.nanmean(best == 1))


def fig_cctnd():
    X, y = make_classification(3000, 20, n_informative=8, n_redundant=4, flip_y=0.05, random_state=2)
    y = np.where(y > 0, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.5, random_state=0)
    bt = BaggedTrees(100, max_features=2, random_state=0).fit(Xtr, ytr)
    st = mv_statistics(bt.predict_all(Xte), yte, np.ones(100) / 100)
    g, e = st["gibbs"], st["joint"]
    mus = np.linspace(-1.0, 0.45, 400)
    vals = (e - 2 * mus * g + mus ** 2) / (0.5 - mus) ** 2
    mu_s = (g / 2 - e) / (0.5 - g)
    fig, ax = plt.subplots(figsize=(5.8, 3.1))
    ax.plot(mus, vals, color=C1, lw=1.8, label=r"$\frac{e_Q-2\mu R(G_Q)+\mu^2}{(1/2-\mu)^2}$")
    ax.axvline(0, color=C3, ls="--", lw=0.8); ax.scatter([0], [4 * e], color=C3, zorder=5, label=f"tandem ($\\mu=0$): {4*e:.3f}")
    ax.scatter([mu_s], [c_bound(g, st['dis'])], color=C2, zorder=5, label=f"minimum = C-bound: {c_bound(g, st['dis']):.3f}")
    ax.axhline(st["mv"], color="k", lw=1, label=f"$R(B_Q)$ = {st['mv']:.3f}")
    ax.set_ylim(0, 1.25); ax.set_xlabel(r"$\mu$"); ax.legend(fontsize=8, loc="upper center", ncol=2)
    ax.set_title("The Chebyshev--Cantelli family on a random forest")
    save(fig, "cctnd.pdf")


def fig_uniformity():
    rng = np.random.RandomState(0)
    n, m, delta, T = 1000, 100, 0.05, 2000
    mins, viol_naive, viol_occam = [], 0, 0
    for _ in range(T):
        emp = rng.binomial(m, 0.5, n) / m
        mn = emp.min(); mins.append(mn)
        viol_naive += 0.5 > mn + np.sqrt(np.log(1 / delta) / (2 * m))
        viol_occam += 0.5 > mn + np.sqrt((np.log(n) + np.log(1 / delta)) / (2 * m))
    fig, ax = plt.subplots(figsize=(6.0, 3.0))
    ax.hist(mins, bins=np.arange(0.2, 0.5, 0.01), color=C1, alpha=0.85)
    ax.axvline(0.5, color="k", lw=1.2); ax.text(0.495, ax.get_ylim()[1] * 0.85, "true risk $0.5$", ha="right", fontsize=8)
    thr = 0.5 - np.sqrt(np.log(1 / delta) / (2 * m))
    ax.axvline(thr, color=C2, ls="--", lw=1)
    ax.text(thr + 0.005, ax.get_ylim()[1] * 0.55, "naive Hoeffding bound\nis wrong for every\nminimum left of this line", color=C2, fontsize=7.5, ha="left")
    ax.set_xlabel(r"$\min_h \hat R_S(h)$ over $1000$ random classifiers ($m=100$)")
    ax.set_title(f"Selection bias: naive bound wrong in {100*viol_naive/T:.1f}% of the runs, Occam in {100*viol_occam/T:.1f}%")
    save(fig, "uniformity.pdf")
    write_tab("uniformity.tex", r"%.1f & %.1f & %.3f" % (100 * viol_naive / T, 100 * viol_occam / T, np.mean(mins)))


def fig_fo_iterations_and_weights():
    X, y = load_digits(return_X_y=True); y = np.where(y >= 5, 1, -1)
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=0)
    bt = BaggedTrees(100, bootstrap_frac=0.5, random_state=0).fit(Xtr, ytr)
    L, n1 = bt.oob_losses(Xtr, ytr); Lt, n2 = bt.oob_tandem(Xtr, ytr); D, n3 = bt.oob_disagreement(Xtr)
    V = bt.predict_all(Xte); pi = np.ones(100) / 100; delta = 0.05
    # trace of the alternating algorithm
    lam, rows = 1.0, []
    for it in range(1, 9):
        rho = softmax(np.log(pi) - lam * n1 * L); KL = kl_div(rho, pi)
        lam_new = lambda_star(rho @ L, KL, n1, delta)
        rows.append(r"%d & %.4f & %.4f & %.2f & %.4f & %.4f & %.3f \\" % (it, lam, rho @ L, KL, bound_lambda(rho @ L, KL, n1, delta, lam_new),
                    fo_bound(rho, pi, L, n1, delta), mv_statistics(V, yte, rho)["mv"]))
        lam = lam_new
    write_tab("fo_iterations.tex", "\n".join(rows))
    rho_fo = optimize_fo(pi, L, n1, delta); rho_tnd = optimize_tnd(pi, Lt, n2, delta)
    from scipy.optimize import minimize as _min
    rho_cb = softmax(_min(lambda th: cbound_pb(softmax(th), pi, L, n1, D, n3, delta), np.log(pi), method="Powell",
                          options={"maxfev": 4000, "xtol": 1e-3, "ftol": 1e-5}).x)
    fig, axes = plt.subplots(1, 2, figsize=(10.5, 3.1))
    ax = axes[0]
    for r, col, lab in [(pi, GREY, "uniform"), (rho_fo, C4, "FO-optimized"), (rho_tnd, C3, "TND-optimized"), (rho_cb, C1, "C-bound-optimized")]:
        ax.plot(np.arange(1, 101), np.sort(r)[::-1], color=col, lw=1.6, label=lab)
    ax.set_yscale("log"); ax.set_ylim(1e-5, 1); ax.set_xlabel("trees sorted by weight"); ax.set_ylabel(r"$\rho_t$"); ax.legend(fontsize=8)
    ax.set_title("Learned posteriors (digits, 100 trees)")
    ax = axes[1]
    order = np.argsort(L)
    ax.scatter(L, rho_tnd, s=12, color=C3, label="TND-optimized")
    ax.scatter(L, rho_fo, s=12, color=C4, marker="^", label="FO-optimized")
    ax.set_yscale("log"); ax.set_ylim(1e-6, 1); ax.set_xlabel(r"OOB loss $\hat L_t$ of the tree"); ax.set_ylabel(r"$\rho_t$"); ax.legend(fontsize=8)
    ax.set_title("Weight versus individual quality")
    save(fig, "rf_weights.pdf")
    rows = []
    for name, r in [("uniform", pi), ("FO-optimized", rho_fo), ("TND-optimized", rho_tnd), ("C-bound-optimized", rho_cb)]:
        st = mv_statistics(V, yte, r)
        rows.append(r"%s & %.3f & %.3f & %.3f & %.3f & %.3f & %.1f \\" % (name, st["mv"], st["gibbs"], fo_bound(r, pi, L, n1, delta),
                    tnd_bound(r, pi, Lt, n2, delta), cbound_pb(r, pi, L, n1, D, n3, delta), 1 / np.sum(r ** 2)))
    write_tab("rf_posteriors.tex", "\n".join(rows))
    write_tab("rf_sizes.tex", r"$m=%d$, $n_1=%d$, $n_2=%d$" % (len(ytr), n1, n2))


def fig_pbgd():
    rng = np.random.RandomState(1)
    m = 200
    X = np.r_[rng.randn(m // 2, 2) * 0.9 + [1.0, 0.8], rng.randn(m // 2, 2) * 0.9 - [1.0, 0.8]]
    y = np.r_[np.ones(m // 2), -np.ones(m // 2)]
    flip = rng.rand(m) < 0.08; y[flip] *= -1
    Xb = np.hstack([X, np.ones((m, 1))]); nx = np.linalg.norm(Xb, axis=1)
    from scipy.optimize import minimize as _min
    from sklearn.svm import LinearSVC
    def obj(w, C):
        t = -y * (Xb @ w) / nx
        return C * np.sum(norm.cdf(t)) + 0.5 * w @ w, C * Xb.T @ (norm.pdf(t) * (-y / nx)) + w
    Cs = np.logspace(-2, 2, 25); res = []
    w0 = LinearSVC(C=1, fit_intercept=False, max_iter=20000).fit(Xb, y).coef_.ravel()
    for C in Cs:
        w = _min(obj, w0, args=(C,), jac=True, method="L-BFGS-B").x
        g = np.mean(norm.cdf(-y * (Xb @ w) / nx))
        res.append((C, np.linalg.norm(w), g, bound_seeger(g, w @ w / 2, m, 0.05), np.mean(np.sign(Xb @ w) != y), w))
    fig, axes = plt.subplots(1, 2, figsize=(10.5, 3.3))
    ax = axes[0]
    ax.plot(Cs, [r[2] for r in res], color=C4, label="empirical Gibbs risk")
    ax.plot(Cs, [r[1] ** 2 / 2 / m for r in res], color=C5, ls="--", label=r"$\mathrm{KL}/m=\|\mathbf{w}\|^2/(2m)$")
    ax.plot(Cs, [r[3] for r in res], color=C1, lw=1.8, label="Seeger certificate")
    ax.plot(Cs, [r[4] for r in res], color="k", ls=":", label="training error of the vote")
    ax.set_xscale("log"); ax.set_xlabel("$C$"); ax.set_ylim(0, 0.6); ax.legend(fontsize=8); ax.set_title("PBGD: the certificate selects $C$")
    ax = axes[1]
    best = min(res, key=lambda r: r[3])
    xx = np.linspace(-3.5, 3.5, 10)
    for r, col, lab in [(res[2], GREY, f"C={res[2][0]:.2g}"), (best, C1, f"C={best[0]:.2g} (best certificate)"), (res[-1], C4, f"C={res[-1][0]:.0f}")]:
        w = r[5]; ax.plot(xx, -(w[0] * xx + w[2]) / w[1], color=col, lw=1.6, label=lab)
    ax.scatter(X[y > 0, 0], X[y > 0, 1], s=8, c=C1); ax.scatter(X[y < 0, 0], X[y < 0, 1], s=8, c=C2)
    ax.set_xlim(-3.5, 3.5); ax.set_ylim(-3.5, 3.5); ax.legend(fontsize=7.5, loc="upper left"); ax.set_title("learned hyperplanes")
    save(fig, "pbgd.pdf")
    write_tab("pbgd_best.tex", r"%.2g & %.2f & %.3f & %.3f & %.3f" % (best[0], best[1], best[2], best[3], best[4]))


def fig_rff():
    rng = np.random.RandomState(0)
    Xm, ym = make_moons(1500, noise=0.25, random_state=0); ym = np.where(ym > 0, 1, -1)
    Xa, Xb_, ya, yb = train_test_split(Xm, ym, test_size=0.4, random_state=0)
    gamma, N = 5.0, 2000
    W = rng.normal(0, np.sqrt(2 * gamma), (N, 2)); b = rng.uniform(0, 2 * np.pi, N)
    def votes(Z):
        H = np.sign(np.cos(Z @ W.T + b)).T
        return np.vstack([H, -H])
    Va = votes(Xa); emp = (Va != ya).mean(1); P = np.ones(2 * N) / (2 * N); m = len(ya)
    xx, yy = np.meshgrid(np.linspace(-1.6, 2.6, 180), np.linspace(-1.2, 1.7, 140)); G = np.c_[xx.ravel(), yy.ravel()]
    VG = votes(G); Vb = votes(Xb_)
    fig, axes = plt.subplots(1, 4, figsize=(11.5, 2.6), sharey=True)
    ax = axes[0]
    ax.contourf(xx, yy, VG[0].reshape(xx.shape), levels=[-2, 0, 2], colors=["#f3c9bf", "#c3d7ea"])
    ax.set_title(r"one voter $\mathrm{sign}\cos(\omega^\top x+b)$", fontsize=9)
    for ax, lam in zip(axes[1:], [0.001, 0.02, 0.5]):
        rho = softmax(np.log(P) - lam * m * emp)
        s = rho @ VG
        ax.contourf(xx, yy, np.where(s >= 0, 1, -1).reshape(xx.shape), levels=[-2, 0, 2], colors=["#f3c9bf", "#c3d7ea"])
        te = np.mean(np.where(rho @ Vb >= 0, 1, -1) != yb)
        ax.set_title(rf"Gibbs posterior $\lambda={lam}$: test {te:.3f}", fontsize=9)
    for ax in axes:
        ax.scatter(Xa[:300, 0], Xa[:300, 1], s=3, c=np.where(ya[:300] > 0, C1, C2)); ax.set_xticks([]); ax.set_yticks([])
    save(fig, "rff_votes.pdf")


if __name__ == "__main__" and len(sys.argv) > 1 and sys.argv[1] == "v3":
    for f in [fig_adaboost, fig_concentration, fig_change_of_measure, fig_occam, fig_bound_anatomy, fig_ddprior,
              fig_montecarlo, fig_condorcet, fig_bound_regions, fig_cctnd, fig_uniformity, fig_fo_iterations_and_weights,
              fig_pbgd, fig_rff]:
        f()
