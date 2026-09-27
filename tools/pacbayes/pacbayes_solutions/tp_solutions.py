# %% [markdown]
# # TP PAC-Bayes -- Solutions
# Risk certificates for ensemble methods (Ensemble Methods, M2 MALIA, Lyon 2).
#
# This script (also distributed as a notebook) produces every number, table and
# figure of the solution sheet `tp_pacbayes_solutions.pdf`. It needs `pbtools.py`,
# `prepdata.py` and the folder `datasets/` of the course in the working directory
# (or in the paths below). Running everything takes a few minutes on a laptop.

# %%
import os, sys, time
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import StandardScaler

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
for p in [HERE, os.path.join(HERE, "data"), os.path.join(HERE, "..", "common")]:
    if p not in sys.path:
        sys.path.insert(0, p)
from pbtools import (kl_bin, kl_inv_upper, kl_inv_lower, kl_div, bound_seeger, bound_mcallester,
                     BaggedTrees, mv_statistics, fo_bound, tnd_bound, cbound_pb, softmax,
                     optimize_fo, optimize_tnd)
from prepdata import data_recovery

DATADIR = os.path.join(HERE, "data") if os.path.isdir(os.path.join(HERE, "data", "datasets")) else HERE
RES = os.path.join(HERE, "results"); FIG = os.path.join(HERE, "figures")
os.makedirs(RES, exist_ok=True); os.makedirs(FIG, exist_ok=True)
DELTA = 0.05
N_SPLITS = 5
BALANCED = ["australian", "balance", "bupa", "german", "heart", "iono", "pima", "sonar", "wdbc", "spambase"]
IMBALANCED = ["abalone8", "pageblocks", "satimage", "segmentation", "yeast3"]
plt.rcParams.update({"font.size": 9, "axes.spines.top": False, "axes.spines.right": False})


def load(name):
    """Load a dataset of the course with labels in {-1,+1} and standardized features."""
    cwd = os.getcwd(); os.chdir(DATADIR)
    try:
        X, y = data_recovery(name)
    finally:
        os.chdir(cwd)
    X = StandardScaler().fit_transform(np.asarray(X, dtype=float))
    return X, np.where(np.asarray(y) > 0, 1, -1)


def eff(rho):
    """Effective number of voters 1/sum rho^2."""
    return 1.0 / np.sum(rho ** 2)


def save_tab(name, rows):
    open(os.path.join(RES, name), "w").write("\n".join(rows) + "\n")
    print("  -> results/" + name)


def ms(a, d=3):
    a = np.asarray(a, dtype=float)
    return f"{a.mean():.{d}f} ({a.std():.{d}f})"

# %% [markdown]
# ## Part 1 -- Warm-up: inverting the kl and certifying one classifier

# %%
def kl_inv_bisection(q, eps, tol=1e-9):
    """Our own implementation of the upper kl inversion (Algorithm 1 of the notes)."""
    a, b = q, 1.0
    while b - a > tol:
        c = (a + b) / 2
        if kl_bin(q, c) > eps:
            b = c
        else:
            a = c
    return b


def part1():
    print("Part 1")
    rows = []
    for m in [100, 1000]:
        eps = np.log(1 / DELTA) / m
        for q in [0.0, 0.01, 0.05, 0.1, 0.3, 0.5]:
            k = kl_inv_bisection(q, eps)
            assert abs(k - kl_inv_upper(q, eps)) < 1e-6
            rows.append(f"{m} & {q:.2f} & {q + np.sqrt(eps / 2):.3f} & {k:.3f} & {q + np.sqrt(2 * q * eps) + 2 * eps:.3f} \\\\")
    save_tab("p1_widths.tex", rows)
    # certify one tree with an independent test sample (test-set bound)
    X, y = load("australian")
    X1, X2, y1, y2 = train_test_split(X, y, test_size=0.5, stratify=y, random_state=0)
    tree = DecisionTreeClassifier(max_depth=3, random_state=0).fit(X1, y1)
    err = np.mean(tree.predict(X2) != y2); n = len(y2)
    hoef = err + np.sqrt(np.log(1 / DELTA) / (2 * n)); kl = kl_inv_upper(err, np.log(1 / DELTA) / n)
    # naive and corrected bounds after choosing the depth on the same half
    errs = {d: np.mean(DecisionTreeClassifier(max_depth=d, random_state=0).fit(X1, y1).predict(X2) != y2) for d in range(1, 11)}
    dbest = min(errs, key=errs.get)
    naive = kl_inv_upper(errs[dbest], np.log(1 / DELTA) / n)
    union = kl_inv_upper(errs[dbest], np.log(10 / DELTA) / n)
    save_tab("p1_tree.tex", [f"{n} & {err:.3f} & {hoef:.3f} & {kl:.3f} & {dbest} & {errs[dbest]:.3f} & {naive:.3f} & {union:.3f}"])

# %% [markdown]
# ## Part 2 -- Certificates of a standard random forest

# %%
def forest_stats(X, y, seed, n_trees=100, frac=0.5, max_features="sqrt", max_depth=None):
    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, stratify=y, random_state=seed)
    bt = BaggedTrees(n_trees, bootstrap_frac=frac, max_features=max_features, max_depth=max_depth,
                     random_state=seed).fit(Xtr, ytr)
    L, n1 = bt.oob_losses(Xtr, ytr); Lt, n2 = bt.oob_tandem(Xtr, ytr); D, n3 = bt.oob_disagreement(Xtr)
    return dict(bt=bt, Xtr=Xtr, Xte=Xte, ytr=ytr, yte=yte, L=L, n1=n1, Lt=Lt, n2=n2, D=D, n3=n3,
                Vte=bt.predict_all(Xte), pi=np.ones(n_trees) / n_trees)


def certificates(F, rho):
    return (fo_bound(rho, F["pi"], F["L"], F["n1"], DELTA), tnd_bound(rho, F["pi"], F["Lt"], F["n2"], DELTA),
            cbound_pb(rho, F["pi"], F["L"], F["n1"], F["D"], F["n3"], DELTA))


CACHE = {}


def part2_3():
    print("Part 2 and 3")
    rows2, rows3, summary = [], [], {k: [] for k in ["u", "fo", "tnd"]}
    for name in BALANCED + IMBALANCED:
        X, y = load(name)
        R = {k: [] for k in ["mv", "gibbs", "dis", "fo", "tnd", "cb", "rf", "n1", "n2",
                             "mv_fo", "cert_fo", "eff_fo", "mv_tnd", "cert_tnd", "eff_tnd", "best_u"]}
        for seed in range(N_SPLITS):
            F = forest_stats(X, y, seed)
            CACHE[(name, seed)] = F
            st = mv_statistics(F["Vte"], F["yte"], F["pi"])
            fo, tnd, cb = certificates(F, F["pi"])
            rf = RandomForestClassifier(100, random_state=seed).fit(F["Xtr"], F["ytr"])
            for k, v in [("mv", st["mv"]), ("gibbs", st["gibbs"]), ("dis", st["dis"]), ("fo", fo), ("tnd", tnd),
                         ("cb", cb), ("rf", np.mean(rf.predict(F["Xte"]) != F["yte"])), ("n1", F["n1"]), ("n2", F["n2"])]:
                R[k].append(v)
            # Part 3: learning the weights
            r_fo = optimize_fo(F["pi"], F["L"], F["n1"], DELTA)
            r_tnd = optimize_tnd(F["pi"], F["Lt"], F["n2"], DELTA)
            R["mv_fo"].append(mv_statistics(F["Vte"], F["yte"], r_fo)["mv"])
            R["cert_fo"].append(fo_bound(r_fo, F["pi"], F["L"], F["n1"], DELTA)); R["eff_fo"].append(eff(r_fo))
            R["mv_tnd"].append(mv_statistics(F["Vte"], F["yte"], r_tnd)["mv"])
            R["cert_tnd"].append(tnd_bound(r_tnd, F["pi"], F["Lt"], F["n2"], DELTA)); R["eff_tnd"].append(eff(r_tnd))
            # best of the three certificates of the uniform vote, with a union bound (delta/3)
            R["best_u"].append(min(fo_bound(F["pi"], F["pi"], F["L"], F["n1"], DELTA / 3),
                                   tnd_bound(F["pi"], F["pi"], F["Lt"], F["n2"], DELTA / 3),
                                   cbound_pb(F["pi"], F["pi"], F["L"], F["n1"], F["D"], F["n3"], DELTA / 3)))
        M = {k: np.mean(v) for k, v in R.items()}
        rows2.append(f"{name} & {M['rf']:.3f} & {M['mv']:.3f} & {M['gibbs']:.3f} & {M['dis']:.3f} & {int(M['n1'])} & {int(M['n2'])} & "
                     f"{M['fo']:.3f} & {M['tnd']:.3f} & {M['cb']:.3f} \\\\")
        rows3.append(f"{name} & {ms(R['mv'])} & {ms(R['best_u'])} & {ms(R['mv_fo'])} & {ms(R['cert_fo'])} & {np.mean(R['eff_fo']):.1f} & "
                     f"{ms(R['mv_tnd'])} & {ms(R['cert_tnd'])} & {np.mean(R['eff_tnd']):.1f} \\\\")
        summary["u"].append((M["mv"], M["best_u"])); summary["fo"].append((M["mv_fo"], M["cert_fo"])); summary["tnd"].append((M["mv_tnd"], M["cert_tnd"]))
        print(f"  {name}: mv {M['mv']:.3f} FO {M['fo']:.3f} TND {M['tnd']:.3f} CB {M['cb']:.3f} | FO-opt {M['mv_fo']:.3f}/{M['cert_fo']:.3f} TND-opt {M['mv_tnd']:.3f}/{M['cert_tnd']:.3f}")
    s = {k: np.mean(v, axis=0) for k, v in summary.items()}
    rows3.append(r"\midrule")
    rows3.append(f"mean & {s['u'][0]:.3f} & {s['u'][1]:.3f} & {s['fo'][0]:.3f} & {s['fo'][1]:.3f} & & {s['tnd'][0]:.3f} & {s['tnd'][1]:.3f} & \\\\")
    save_tab("p2_forest.tex", rows2); save_tab("p3_weights.tex", rows3)

# %% [markdown]
# ## Part 4 -- The Gibbs posterior on decision stumps (temperature)

# %%
def stumps(Xp):
    V = []
    for j in range(Xp.shape[1]):
        for t in np.unique(np.quantile(Xp[:, j], [0.1, 0.25, 0.5, 0.75, 0.9])):
            for s in (1, -1):
                V.append((j, t, s))
    return V


def stump_votes(V, X):
    return np.array([s * np.where(X[:, j] > t, 1, -1) for j, t, s in V])


def part4():
    print("Part 4")
    rows = []
    fig, axes = plt.subplots(1, 2, figsize=(9, 3))
    for name, ax in [("wdbc", axes[0]), ("australian", axes[1])]:
        X, y = load(name)
        Xp, Xr, yp, yr = train_test_split(X, y, train_size=0.2, stratify=y, random_state=0)
        XS, Xt, yS, yt = train_test_split(Xr, yr, test_size=0.4, stratify=yr, random_state=0)
        V = stumps(Xp); VS = stump_votes(V, XS); Vt = stump_votes(V, Xt)
        n, m = len(V), len(yS); P = np.ones(n) / n
        emp = (VS != yS).mean(1); tst = (Vt != yt).mean(1)
        lams = np.logspace(-3, 1.5, 60); B, G, K = [], [], []
        for lam in lams:
            rho = softmax(np.log(P) - lam * m * emp)
            B.append(bound_seeger(rho @ emp, kl_div(rho, P), m, DELTA)); G.append(rho @ emp); K.append(kl_div(rho, P) / m)
        i = int(np.argmin(B)); lam = lams[i]; rho = softmax(np.log(P) - lam * m * emp)
        mv = np.mean(np.where(rho @ Vt >= 0, 1, -1) != yt)
        erm = int(np.argmin(emp)); occ = bound_seeger(emp[erm], np.log(n), m, DELTA)
        rows.append(f"{name} & {n} & {m} & {lam:.3f} & {G[i]:.3f} & {kl_div(rho, P):.2f} & {B[i]:.3f} & {rho @ tst:.3f} & {mv:.3f} & {occ:.3f} & {tst[erm]:.3f} \\\\")
        ax.plot(lams, G, label="empirical Gibbs risk"); ax.plot(lams, K, "--", label="KL/m"); ax.plot(lams, B, lw=2, label="Seeger bound")
        ax.scatter([lam], [B[i]], color="k", zorder=5); ax.set_xscale("log"); ax.set_ylim(0, 0.7)
        ax.set_xlabel(r"$\lambda$"); ax.set_title(f"{name}: {n} stumps, m={m}"); ax.legend(fontsize=7)
    fig.tight_layout(); fig.savefig(os.path.join(FIG, "tp_temperature.pdf")); plt.close(fig)
    save_tab("p4_stumps.tex", rows)

# %% [markdown]
# ## Part 5 -- Strength versus diversity

# %%
def part5():
    print("Part 5")
    rows = []
    for name in ["spambase", "german"]:
        X, y = load(name); d = X.shape[1]
        for mf in [1, "sqrt", 0.5, None]:
            R = []
            for seed in range(3):
                F = forest_stats(X, y, seed, max_features=mf)
                st = mv_statistics(F["Vte"], F["yte"], F["pi"])
                R.append((st["gibbs"], st["dis"], st["mv"], tnd_bound(F["pi"], F["pi"], F["Lt"], F["n2"], DELTA),
                          cbound_pb(F["pi"], F["pi"], F["L"], F["n1"], F["D"], F["n3"], DELTA)))
            R = np.mean(R, 0)
            lab = {1: "1", "sqrt": r"$\sqrt d$", 0.5: r"$d/2$", None: r"$d$"}[mf]
            rows.append(f"{name} & {lab} & {R[0]:.3f} & {R[1]:.3f} & {R[2]:.3f} & {R[3]:.3f} & {R[4]:.3f} \\\\")
    save_tab("p5_diversity.tex", rows)

# %% [markdown]
# ## Part 6 -- Self-bounding model selection versus cross-validation

# %%
def part6():
    print("Part 6")
    depths = [1, 2, 4, 8, None]; K = len(depths); rows = []
    for name in ["spambase", "pima", "wdbc", "german"]:
        X, y = load(name); sel_c, sel_cv, te_c, te_cv, te_best, cert_sel = [], [], [], [], [], []
        for seed in range(3):
            Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, stratify=y, random_state=seed)
            certs, tests = [], []
            for dp in depths:
                bt = BaggedTrees(100, bootstrap_frac=0.5, max_depth=dp, random_state=seed).fit(Xtr, ytr)
                Lt, n2 = bt.oob_tandem(Xtr, ytr); pi = np.ones(100) / 100
                rho = optimize_tnd(pi, Lt, n2, DELTA / K)
                certs.append(tnd_bound(rho, pi, Lt, n2, DELTA / K)); tests.append(np.mean(bt.predict(Xte, rho) != yte))
            # 5-fold cross-validation of the uniform forest
            cv = []
            for dp in depths:
                errs = []
                for a, b in StratifiedKFold(5, shuffle=True, random_state=seed).split(Xtr, ytr):
                    bt = BaggedTrees(100, bootstrap_frac=0.5, max_depth=dp, random_state=seed).fit(Xtr[a], ytr[a])
                    errs.append(np.mean(bt.predict(Xtr[b]) != ytr[b]))
                cv.append(np.mean(errs))
            ic, iv = int(np.argmin(certs)), int(np.argmin(cv))
            sel_c.append(ic); sel_cv.append(iv); te_c.append(tests[ic]); te_cv.append(tests[iv]); te_best.append(min(tests))
            cert_sel.append(certs[ic])
        lab = lambda i: str(depths[i]) if depths[i] else "None"
        rows.append(f"{name} & {', '.join(lab(i) for i in sel_c)} & {np.mean(te_c):.3f} & {', '.join(lab(i) for i in sel_cv)} & {np.mean(te_cv):.3f} & {np.mean(te_best):.3f} & {np.mean(cert_sel):.3f} \\\\")
    save_tab("p6_selection.tex", rows)

# %% [markdown]
# ## Part 7 -- Imbalanced datasets and a certificate on the balanced error

# %%
def class_restricted(F, cls):
    """OOB statistics restricted to the training examples of one class."""
    bt, Xtr, ytr = F["bt"], F["Xtr"], F["ytr"]
    mask = ytr == cls
    oob_saved = bt.oob_
    bt.oob_ = oob_saved[:, mask]
    Xc, yc = Xtr[mask], ytr[mask]
    L, n1 = bt.oob_losses(Xc, yc); Lt, n2 = bt.oob_tandem(Xc, yc)
    bt.oob_ = oob_saved
    return L, n1, Lt, n2


def part7():
    print("Part 7")
    rows = []
    for name in IMBALANCED:
        R = []
        for seed in range(N_SPLITS):
            F = CACHE[(name, seed)]; pi = F["pi"]
            triv = np.mean(F["yte"] == 1)  # predicting always -1 errs on the positives
            st = mv_statistics(F["Vte"], F["yte"], pi)
            best = min(fo_bound(pi, pi, F["L"], F["n1"], DELTA / 2), tnd_bound(pi, pi, F["Lt"], F["n2"], DELTA / 2))
            # balanced error: one certificate per class with delta/4 each (2 classes x 2 bounds)
            cert_cls, err_cls = [], []
            for cls in (1, -1):
                L, n1, Lt, n2 = class_restricted(F, cls)
                cert_cls.append(min(fo_bound(pi, pi, L, n1, DELTA / 4), tnd_bound(pi, pi, Lt, n2, DELTA / 4)))
                mk = F["yte"] == cls
                err_cls.append(np.mean(np.where(pi @ F["Vte"][:, mk] >= 0, 1, -1) != cls))
            R.append((triv, st["mv"], best, np.mean(err_cls), np.mean(cert_cls), err_cls[0], cert_cls[0]))
        R = np.mean(R, 0)
        rows.append(f"{name} & {R[0]:.3f} & {R[1]:.3f} & {R[2]:.3f} & {R[5]:.3f} & {R[6]:.3f} & {R[3]:.3f} & {R[4]:.3f} \\\\")
    save_tab("p7_imbalanced.tex", rows)

# %% [markdown]
# ## Part 8 -- Boosting

# %%
def part8():
    print("Part 8")
    rows = []
    for name in ["australian", "german", "pima", "spambase", "wdbc"]:
        X, y = load(name); R = []
        for seed in range(N_SPLITS):
            Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, stratify=y, random_state=seed)
            X1, X2, y1, y2 = train_test_split(Xtr, ytr, test_size=0.5, stratify=ytr, random_state=seed)
            ada = AdaBoostClassifier(DecisionTreeClassifier(max_depth=1), n_estimators=100, random_state=seed).fit(X1, y1)
            H = ada.estimators_; T = len(H)
            alpha = np.maximum(ada.estimator_weights_[:T], 1e-12)
            V2 = np.array([h.predict(X2) for h in H]); Vt = np.array([h.predict(Xte) for h in H])
            E2 = (V2 != y2).astype(float); L = E2.mean(1); Lt = E2 @ E2.T / len(y2); n = len(y2)
            pi = np.ones(T) / T; r_ada = alpha / alpha.sum()
            r_fo = optimize_fo(pi, L, n, DELTA); r_tnd = optimize_tnd(pi, Lt, n, DELTA)
            ada_full = AdaBoostClassifier(DecisionTreeClassifier(max_depth=1), n_estimators=100, random_state=seed).fit(Xtr, ytr)
            R.append((np.mean(ada_full.predict(Xte) != yte), mv_statistics(Vt, yte, r_ada)["mv"], r_ada @ L, kl_div(r_ada, pi),
                      fo_bound(r_ada, pi, L, n, DELTA / 2), tnd_bound(r_ada, pi, Lt, n, DELTA / 2),
                      mv_statistics(Vt, yte, r_tnd)["mv"], tnd_bound(r_tnd, pi, Lt, n, DELTA), mv_statistics(Vt, yte, r_fo)["mv"],
                      fo_bound(r_fo, pi, L, n, DELTA), T))
        R = np.mean(R, 0)
        rows.append(f"{name} & {R[0]:.3f} & {R[1]:.3f} & {R[2]:.3f} & {R[3]:.2f} & {R[4]:.3f} & {R[5]:.3f} & {R[8]:.3f} & {R[9]:.3f} & {R[6]:.3f} & {R[7]:.3f} \\\\")
        print("  ", rows[-1])
    save_tab("p8_boosting.tex", rows)

# %%
if __name__ == "__main__":
    t0 = time.time()
    part1(); part2_3(); part4(); part5(); part6(); part7(); part8()
    print(f"done in {time.time() - t0:.0f}s")
