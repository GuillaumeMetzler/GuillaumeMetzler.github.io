# %% [markdown]
# # TP 3 -- Boosting. Starter file
# Statistical Supervised Machine Learning. Copy this file into your notebook (or import it) and fill in the TODOs.

# %%
import os, sys
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
sys.path.insert(0, os.path.join(HERE, "..", "common"))
from tptools import load


class Stumps:
    """Weighted decision stumps h(x) = s * sign(x_j - t) for a FIXED training matrix X."""

    def __init__(self, X):
        self.X = X
        # TODO: sort every feature once (np.argsort(X, axis=0)), prepare the thresholds
        raise NotImplementedError

    def fit(self, y, w):
        """Return (weighted error, j, t, s) of the best stump; w >= 0, sum(w) = 1. No loop over the examples."""
        raise NotImplementedError  # TODO


def stump_predict(X, j, t, s):
    return s * np.where(X[:, j] > t, 1, -1)


def adaboost(Xtr, ytr, T, Xte):
    """Return the stumps (j_t, t_t, s_t), alpha_t, eps_t, Z_t and the scores f_t on the training and test sets
    for t = 1..T (the stumps are needed in Part 6 to see the vote as a weighted majority vote)."""
    raise NotImplementedError  # TODO


def gradient_boosting(Xtr, ytr, Xev, M, nu, depth=2):
    """Squared loss: F_0 = mean(ytr), then F_k = F_{k-1} + nu * (regression tree fitted on the residuals)."""
    raise NotImplementedError  # TODO


if __name__ == "__main__":
    X, y = load("spambase")
    print(X.shape, np.unique(y, return_counts=True))
