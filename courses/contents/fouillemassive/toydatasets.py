
import math
import random
import sys

import numpy as np

def make_board(n):
    n_cols = 4
    n_rows = 4
    Xx = np.random.uniform(low=0, high=n_cols, size=(n))
    Xy = np.random.uniform(low=0, high=n_rows, size=(n))
    X = np.array([Xx, Xy]).T
    y = []
    for x in X:
        row = math.floor(x[0])
        col = math.floor(x[1])
        if (row+col) % 2 == 0:
            y.append(-1)
        else:
            y.append(1)
    y = np.array(y)
    return X, y


def make_circles(n_samples, n_circles=4, noise=0.07, factor=1):
    mult = 1
    label = -1
    Xx = []
    Xy = []
    y = []
    for i in range(n_circles):
        n_samples_circle = n_samples // n_circles
        linspace = np.linspace(0, 2 * np.pi, n_samples_circle, endpoint=False)
        Xx.extend((np.cos(linspace) + np.random.normal(
                                   scale=noise, size=n_samples_circle)) * mult)
        Xy.extend((np.sin(linspace) + np.random.normal(
                                   scale=noise, size=n_samples_circle)) * mult)
        for j in range(n_samples_circle):
            y.append(label)
        mult += factor
        label *= -1
    X = np.array([Xx, Xy]).T
    y = np.array(y)
    return X, y


def make_swiss_roll(n):
    nbRoll = 1
    noise = 0.40
    nPerRoll = n//2
    t = 1.5 * np.pi * (1 + 2 * np.random.uniform(low=0, high=nbRoll,
                                                 size=nPerRoll))
    Xx1 = t * np.cos(t)
    Xy1 = t * np.sin(t)
    X1 = np.array([Xx1, Xy1]).T
    X1 += noise * np.random.randn(nPerRoll, 2)
    t = 1.5 * np.pi * (1 + 2 * np.random.uniform(low=0, high=nbRoll,
                                                 size=nPerRoll))
    Xx2 = 0.9*t * np.cos(t)
    Xy2 = 0.9*t * np.sin(t)
    X2 = np.array([Xx2, Xy2]).T
    X2 += noise * np.random.randn(nPerRoll, 2)
    X = np.vstack((X1, X2))
    y = np.array([-1]*nPerRoll + [1]*nPerRoll)
    return X, y