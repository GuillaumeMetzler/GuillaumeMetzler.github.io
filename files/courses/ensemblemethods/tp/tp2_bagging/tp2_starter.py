# TP 2 - Bagging and random forests. 


import os, sys
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
sys.path.insert(0, os.path.join(HERE, "..", "common"))
from tptools import load


def split(name, seed):
    X, y = load(name)
    return train_test_split(X, y, test_size=0.3, stratify=y, random_state=seed)


def f_true(x):
    return np.sin(2 * np.pi * x)


def bagging(Xtr, ytr, Xte, B, rng, base=None):
    """Learn B models (default: fully grown trees) on bootstrap samples of (Xtr, ytr).
    Return the B x n_test matrix of their predictions on Xte, and, for each training example,
    the sum and the number of the votes of the models for which it is out of bag."""
    base = base or (lambda r: DecisionTreeClassifier(random_state=r))
    raise NotImplementedError  


def mean_disagreement(V):
    """Mean disagreement between two distinct models, from the B x n matrix V of +-1 predictions."""
    raise NotImplementedError  O


def gibbs_joint_disagreement(V, y):
    """Gibbs risk, joint error and disagreement of the uniform
    vote of the models, from the B x n matrix V of +-1 predictions and the labels y.
    Hint: W = (V != y).mean(0) is the proportion of models that err on each example."""
    raise NotImplementedError  


def digits_split():
    from sklearn.datasets import load_digits
    X, y = load_digits(return_X_y=True)
    y = np.where(y >= 5, 1, -1)
    return train_test_split(X, y, test_size=0.3, random_state=0)    


if __name__ == "__main__":
    Xtr, Xte, ytr, yte = split("pima", 0)
    print(Xtr.shape, Xte.shape)
