# TP 1 -- An experimental protocol for supervised learning. 

import os, sys
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split, StratifiedKFold, GridSearchCV, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
sys.path.insert(0, os.path.join(HERE, "..", "common"))
from tptools import load, kl_inv_upper, hoeffding_width     # load("pima") -> X, y with y in {-1,+1}

ETA = 0.1


def clean_label(X):
    """+1 above the curve x2 = 0.5 sin(pi x1), -1 below."""
    return np.where(X[:, 1] > 0.5 * np.sin(np.pi * X[:, 0]), 1, -1)


def toy_data(m, rng):
    """X uniform on [-1,1]^2, Y = clean label flipped with probability ETA."""
    raise NotImplementedError  # TODO


def err(model, X, y):
    """Empirical risk (0-1 loss) of a fitted model on (X, y)."""
    return float(np.mean(model.predict(X) != y))


if __name__ == "__main__":
    for name in ["wdbc", "pima", "australian"]:
        X, y = load(name)
        print(name, X.shape, np.unique(y, return_counts=True))
