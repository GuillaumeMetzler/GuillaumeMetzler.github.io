# %% [markdown]
# # TP 4 -- From an error on a sample to a PAC-Bayesian guarantee. Starter file
# Statistical Supervised Machine Learning. Copy this file into your notebook (or import it) and fill in the TODOs.

# %%
import os, sys
import numpy as np
import matplotlib.pyplot as plt

HERE = os.path.dirname(os.path.abspath(__file__)) if "__file__" in globals() else os.getcwd()
sys.path.insert(0, os.path.join(HERE, "..", "common"))
from tptools import kl, kl_inv_upper, hoeffding_width      # use them to CHECK your own versions

DELTA = 0.05
THETA, ETA = 0.37, 0.15
T = np.round(np.arange(0, 1.0001, 0.02), 2)                  # 51 thresholds
TT = np.r_[T, T]; SS = np.r_[np.ones(51), -np.ones(51)]       # the 102 classifiers h_{t,s}(x) = s sign(x - t)
K = len(TT)
PRIOR = np.ones(K) / K


def true_risks():
    raise NotImplementedError  # TODO: R(h_{t,+1}) = ETA + (1 - 2 ETA) |t - THETA|, R(h_{t,-1}) = 1 - R(h_{t,+1})


def sample(m, rng):
    raise NotImplementedError  # TODO: x uniform on [0,1], clean label sign(x - THETA) flipped with probability ETA


def emp_risks(x, y):
    raise NotImplementedError  # TODO: the 102 empirical risks, no loop over the classifiers


def my_kl_inv_upper(q, eps, n_iter=60):
    raise NotImplementedError  # TODO: Algorithm 12 of the notes (bisection on [q, 1]), vectorized in q


def KL(Q, P):
    raise NotImplementedError  # TODO: sum over Q > 0 only


def linear_bound(gibbs_emp, kl_qp, m, lam, delta=DELTA):
    raise NotImplementedError  # TODO: Theorem 14.4, R_S(G_Q) + (KL + ln(1/delta)) / lam + lam / (8m)


def mcallester(gibbs_emp, kl_qp, m, delta=DELTA):
    raise NotImplementedError  # TODO: Theorem 14.5


def seeger(gibbs_emp, kl_qp, m, delta=DELTA):
    raise NotImplementedError  # TODO: Theorem 14.5


def gibbs_posterior(r, lam, P=PRIOR):
    """Proposition 14.6: Q_lambda(h) proportional to P(h) exp(-lambda r(h)); subtract the maximum of the exponent first."""
    raise NotImplementedError  # TODO
