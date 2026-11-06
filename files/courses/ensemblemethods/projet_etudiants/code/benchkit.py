""" Starter kit of the project.

    DATASETS
      real_dataset(name)            datasets of the course (common/tptools.load), labels in {-1,+1}
      REAL_SMALL, REAL_LARGE        suggested lists of real datasets
      twonorm, threenorm, ringnorm  Breiman's (1996, 1998) classical benchmarks of bagging and boosting
      checkerboard(m, d, k)         interaction-heavy problem (hard for stumps, easy for deep trees)
      additive(m, d)                additive problem (easy for stumps, i.e. for boosting of stumps)
      linear_gauss(m, d, d_inf)     two Gaussians, d_inf informative directions, the rest is noise
      flip_labels(y, rate, seed)    symmetric label noise

    PROTOCOL
      evaluate(model, X, y, n_rep, test_size, seed)  repeated stratified hold-out: error, AUC, fit/predict times
      timed_fit(model, X, y)        fit time and predict time of one model

All the generators return X (float array, shape (m, d)) and y in {-1, +1}. The Bayes risk of twonorm is known in
closed form (bayes_twonorm(d)); for the others, estimate it on a very large sample if you need it, it shall be useless normally.
"""
import os
import sys
import time
import numpy as np
from scipy.stats import norm
from sklearn.base import clone
from sklearn.model_selection import StratifiedShuffleSplit
from sklearn.metrics import roc_auc_score

HERE = os.path.dirname(os.path.abspath(__file__))
COMMON = os.path.join(HERE, "..", "common")
if COMMON not in sys.path:
    sys.path.insert(0, COMMON)

# --------------------------------------------------------------------------------------------------------------------
# Real datasets
# --------------------------------------------------------------------------------------------------------------------
REAL_SMALL = ["australian", "bupa", "german", "heart", "iono", "pima", "sonar", "wdbc", "balance",
              "vehicle", "wine", "glass", "newthyroid", "yeast3", "segmentation", "libras", "splice"]
REAL_LARGE = ["spambase", "satimage", "pageblocks", "abalone8", "bankmarketing"]


def real_dataset(name):
    """Dataset of the course (labels in {-1,+1}); features are NOT standardized."""
    from tptools import load
    return load(name)


# --------------------------------------------------------------------------------------------------------------------
# Simulated datasets
# --------------------------------------------------------------------------------------------------------------------
def _labels(rng, m):
    return np.where(rng.random(m) < 0.5, 1, -1)


def twonorm(m, d=20, seed=0):
    """Breiman: N(+a 1, I) vs N(-a 1, I), a = 2/sqrt(d). Linear Bayes rule."""
    rng = np.random.default_rng(seed)
    y = _labels(rng, m)
    a = 2 / np.sqrt(d)
    return rng.standard_normal((m, d)) + a * y[:, None], y


def bayes_twonorm(d=20):
    """Bayes risk of twonorm: Phi(-a sqrt(d)) = Phi(-2) ~ 0.0228 for every d."""
    return norm.cdf(-2.0)


def threenorm(m, d=20, seed=0):
    """Breiman: class +1 = mixture of N(a 1, I) and N(-a 1, I); class -1 = N(a(1,-1,1,-1,...), I), a = 2/sqrt(d)."""
    rng = np.random.default_rng(seed)
    y = _labels(rng, m)
    a = 2 / np.sqrt(d)
    alt = np.where(np.arange(d) % 2 == 0, 1.0, -1.0)
    s = np.where(rng.random(m) < 0.5, 1.0, -1.0)
    mu = np.where(y[:, None] > 0, a * s[:, None] * np.ones(d), a * alt)
    return rng.standard_normal((m, d)) + mu, y


def ringnorm(m, d=20, seed=0):
    """Breiman: class +1 = N(0, 4 I); class -1 = N(a 1, I), a = 1/sqrt(d). Quadratic Bayes rule."""
    rng = np.random.default_rng(seed)
    y = _labels(rng, m)
    a = 1 / np.sqrt(d)
    X = rng.standard_normal((m, d))
    X[y > 0] *= 2.0
    X[y < 0] += a
    return X, y


def checkerboard(m, d=2, k=4, n_noise=0, seed=0):
    """Uniform on [0,1]^d, label = parity of the cell of a k x ... x k grid (d informative features),
    plus n_noise irrelevant uniform features. Pure interactions: one feature alone says nothing."""
    rng = np.random.default_rng(seed)
    X = rng.random((m, d + n_noise))
    cells = np.floor(X[:, :d] * k).astype(int).sum(axis=1)
    return X, np.where(cells % 2 == 0, 1, -1)


def additive(m, d=10, n_inf=5, seed=0):
    """Uniform on [-1,1]^d; f(x) = sum_j g_j(x_j) over the n_inf first features, with step / sine / linear
    components, y = sign(f). No interaction: a sum of stumps can represent it."""
    rng = np.random.default_rng(seed)
    X = rng.uniform(-1, 1, (m, d))
    comps = [lambda t: np.sign(t - 0.3), lambda t: np.sin(3 * t), lambda t: t,
             lambda t: (t > -0.5).astype(float) - 0.5, lambda t: np.abs(t) - 0.5]
    f = sum(comps[j % len(comps)](X[:, j]) for j in range(n_inf))
    return X, np.where(f > 0, 1, -1)


def linear_gauss(m, d=50, d_inf=5, sep=1.5, seed=0):
    """Two Gaussian classes separated along d_inf directions only (the d - d_inf others are pure noise)."""
    rng = np.random.default_rng(seed)
    y = _labels(rng, m)
    X = rng.standard_normal((m, d))
    X[:, :d_inf] += (sep / np.sqrt(d_inf)) * y[:, None]
    return X, y


def flip_labels(y, rate, seed=0):
    """Flip each label independently with probability `rate` (apply to the TRAINING labels only)."""
    rng = np.random.default_rng(seed)
    return np.where(rng.random(len(y)) < rate, -y, y)


# --------------------------------------------------------------------------------------------------------------------
# Protocol
# --------------------------------------------------------------------------------------------------------------------
def timed_fit(model, X, y, Xte=None):
    """Fit a clone of `model`; return (fitted model, fit time, predict time on Xte or X)."""
    mdl = clone(model)
    t0 = time.perf_counter(); mdl.fit(X, y); t1 = time.perf_counter()
    mdl.predict(X if Xte is None else Xte); t2 = time.perf_counter()
    return mdl, t1 - t0, t2 - t1


def _score(mdl, X):
    if hasattr(mdl, "decision_function"):
        return mdl.decision_function(X)
    return mdl.predict_proba(X)[:, 1]


def evaluate(model, X, y, n_rep=10, test_size=0.3, seed=0, noise=0.0):
    """Repeated stratified hold-out. If noise > 0, the TRAINING labels are flipped with this rate (the test
    labels stay clean, so that the error measures the distance to the clean concept).
    Returns a dict of arrays of length n_rep: err, auc, t_fit, t_pred."""
    sss = StratifiedShuffleSplit(n_splits=n_rep, test_size=test_size, random_state=seed)
    out = {k: [] for k in ("err", "auc", "t_fit", "t_pred")}
    for r, (tr, te) in enumerate(sss.split(X, y)):
        ytr = flip_labels(y[tr], noise, seed=seed + r) if noise > 0 else y[tr]
        mdl, tf, tp = timed_fit(model, X[tr], ytr, X[te])
        out["err"].append(np.mean(mdl.predict(X[te]) != y[te]))
        try:
            out["auc"].append(roc_auc_score(y[te], _score(mdl, X[te])))
        except Exception:
            out["auc"].append(np.nan)
        out["t_fit"].append(tf); out["t_pred"].append(tp)
    return {k: np.array(v) for k, v in out.items()}


if __name__ == "__main__":
    from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
    from sklearn.tree import DecisionTreeClassifier
    X, y = twonorm(1000)
    print("Bayes risk of twonorm:", round(bayes_twonorm(), 4))
    for name, mdl in [("tree", DecisionTreeClassifier(random_state=0)),
                      ("RF", RandomForestClassifier(200, n_jobs=-1, random_state=0)),
                      ("AdaBoost", AdaBoostClassifier(n_estimators=200, random_state=0))]:
        r = evaluate(mdl, X, y, n_rep=3)
        print(f"{name:9s} err = {r['err'].mean():.3f}  fit = {r['t_fit'].mean():.2f}s")
