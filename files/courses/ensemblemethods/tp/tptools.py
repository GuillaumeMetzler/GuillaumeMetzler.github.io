"""Small toolbox shared by the five practical sessions of"""
import os
import sys
import numpy as np
from sklearn.model_selection import train_test_split

DATADIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
if DATADIR not in sys.path:
    sys.path.insert(0, DATADIR)


def load(name):
    """Dataset of the course ('wdbc', 'pima', 'australian', 'spambase', ...), labels in {-1,+1}.
    The features are NOT standardized: this must be done after the split, on the training set only."""
    from prepdata import data_recovery
    cwd = os.getcwd(); os.chdir(DATADIR)
    try:
        X, y = data_recovery(name)
    finally:
        os.chdir(cwd)
    return np.asarray(X, dtype=float), np.where(np.asarray(y) > 0, 1, -1)


def split3(X, y, seed, sizes=(0.6, 0.2, 0.2)):
    """Stratified train / validation / test split."""
    Xtr, Xr, ytr, yr = train_test_split(X, y, train_size=sizes[0], stratify=y, random_state=seed)
    Xva, Xte, yva, yte = train_test_split(Xr, yr, test_size=sizes[2] / (sizes[1] + sizes[2]),
                                          stratify=yr, random_state=seed)
    return Xtr, ytr, Xva, yva, Xte, yte


def kl(q, p):
    """Binary kl divergence kl(q||p) = q ln(q/p) + (1-q) ln((1-q)/(1-p)), with 0 ln 0 = 0."""
    q = np.clip(np.asarray(q, dtype=float), 0, 1); p = np.clip(np.asarray(p, dtype=float), 1e-15, 1 - 1e-15)
    with np.errstate(divide="ignore", invalid="ignore"):
        a = np.where(q > 0, q * np.log(q / p), 0.0)
        b = np.where(q < 1, (1 - q) * np.log((1 - q) / (1 - p)), 0.0)
    return a + b


def kl_inv_upper(q, eps, n_iter=60):
    """Upper inverse of the kl: sup{p in [q,1] : kl(q||p) <= eps}, by bisection (vectorized in q and eps)."""
    q, eps = np.broadcast_arrays(np.asarray(q, dtype=float), np.asarray(eps, dtype=float))
    lo, hi = q.copy(), np.ones_like(q)
    for _ in range(n_iter):
        mid = 0.5 * (lo + hi)
        bad = kl(q, mid) > eps
        hi = np.where(bad, mid, hi); lo = np.where(bad, lo, mid)
    return hi if hi.ndim else float(hi)


def hoeffding_width(n, delta):
    return np.sqrt(np.log(1 / delta) / (2 * n))
