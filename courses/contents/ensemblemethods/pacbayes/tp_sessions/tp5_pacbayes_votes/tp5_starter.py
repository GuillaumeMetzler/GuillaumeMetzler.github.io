# %% [markdown]
# # TP 5 -- PAC-Bayes for majority votes: certify, then learn. Starter file
# Statistical Supervised Machine Learning. Copy this file into your notebook (or import it) and fill in the TODOs.

# %%
import os, sys
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm, binom
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_digits

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
sys.path.insert(0, os.path.join(HERE, "..", "common"))
from tptools import load, kl_inv_upper
from pbtools import kl_div, fo_bound, tnd_bound, tandem_fixed_point   # to check your own functions

DELTA = 0.05


# ---------------------------------------------------------------- Part 2
def simulate_errors(n, m, p, c, rng):
    """(n, m) matrix of errors of n voters on m examples: voter i errs when
    sqrt(c) Z + sqrt(1-c) xi_i < Phi^{-1}(p), Z and xi_i i.i.d. N(0,1)."""
    raise NotImplementedError  # TODO


# ---------------------------------------------------------------- Part 3
def digits_data():
    """The running example of Part IV of the notes: 1257 training and 540 test digits, task 'digit < 5'."""
    X, y = load_digits(return_X_y=True)
    y = np.where(y >= 5, 1, -1)
    return train_test_split(X, y, test_size=0.3, random_state=0)       # Xtr, Xte, ytr, yte


def grow_forest(Xtr, ytr, n_trees=100, frac=0.5, rng=None):
    """Trees learned with DecisionTreeClassifier(max_features="sqrt") on bootstrap samples of size frac * m,
    and the boolean (n_trees, m) matrix of their out-of-bag examples."""
    raise NotImplementedError  # TODO


def oob_statistics(trees, oob, Xtr, ytr):
    """OOB error of each tree (vector L) and size n1 of the smallest OOB set;
    OOB joint error of each pair of trees on their common OOB examples (matrix E)
    and size m of the smallest common OOB set."""
    raise NotImplementedError  # TODO


def my_fo_bound(Q, P, L, n1):
    raise NotImplementedError  # TODO: 2 kl^{-1}(Q.L, (KL(Q||P) + ln(2 sqrt(n1)/DELTA)) / n1)   (equation (15.3))


def my_tnd_bound(Q, P, E, m):
    raise NotImplementedError  # TODO: 4 kl^{-1}(Q'E Q, (2 KL(Q||P) + ln(2 sqrt(m)/DELTA)) / m)  (equation (15.4))


# ---------------------------------------------------------------- Part 4
def gibbs_oob(L, lam, P):
    """Gibbs posterior Q(h) proportional to P(h) exp(-lam L(h)) (Proposition 14.6)."""
    raise NotImplementedError  # TODO


def my_tandem_algorithm(E, lam, P, alpha=0.1, n_iter=3000, tol=1e-9):
    """Algorithm 13 of the notes: damped fixed-point iterations for Q(h) proportional to P(h) exp(-lam e(h, Q)),
    with e(h, Q) = sum_h' Q(h') E[h, h']. Return Q and the number of iterations."""
    raise NotImplementedError  # TODO


def effective_trees(Q):
    return 1 / np.sum(Q ** 2)
