# Some required libraries 

import os
import csv
import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder

# A first function to dowlnload the datasets

def loadCsv(path):
    data = []
    with open(path, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for row in reader:
            data.append(np.array(row))
    data = np.array(data)
    (n, d) = data.shape
    return data, n, d

# Encode Categorical variables

def oneHotEncodeColumns(data, columnsCategories):
    dataCategories = data[:, columnsCategories]
    dataEncoded = OneHotEncoder(sparse_output=False).fit_transform(dataCategories)
    columnsNumerical = []
    for i in range(data.shape[1]):
        if i not in columnsCategories:
            columnsNumerical.append(i)
    dataNumerical = data[:, columnsNumerical]
    return np.hstack((dataNumerical, dataEncoded)).astype(float)



# Another function to prepare the data

def data_recovery(dataset):
    if dataset in ['abalone8', 'abalone17', 'abalone20']:
        data = pd.read_csv("datasets/abalone.data", header=None)
        data = pd.get_dummies(data, dtype=float)
        if dataset in ['abalone8']:
            y = np.array([1 if elt == 8 else 0 for elt in data[8]])
        elif dataset in ['abalone17']:
            y = np.array([1 if elt == 17 else 0 for elt in data[8]])
        elif dataset in ['abalone20']:
            y = np.array([1 if elt == 20 else 0 for elt in data[8]])
        X = np.array(data.drop([8], axis=1))
    elif dataset in ['autompg']:
        data = pd.read_csv("datasets/auto-mpg.data", header=None, sep=r'\s+')
        data = data.replace('?', np.nan)
        data = data.dropna()
        data = data.drop([8], axis=1)
        data = data.astype(float)
        y = np.array([1 if elt in [2, 3] else 0 for elt in data[7]])
        X = np.array(data.drop([7], axis=1))
    elif dataset in ['australian']:
        data, n, d = loadCsv('datasets/australian.data')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1].astype(int)
        y[y != 1] = 0
    elif dataset in ['balance']:
        data = pd.read_csv("datasets/balance-scale.data", header=None)
        y = np.array([1 if elt in ['L'] else 0 for elt in data[0]])
        X = np.array(data.drop([0], axis=1))
    elif dataset in ['bankmarketing']:
        data, n, d = loadCsv('datasets/bankmarketing.csv')
        X = data[:, np.arange(0, d-1)]
        X = oneHotEncodeColumns(X, [1, 2, 3, 4, 6, 7, 8, 10, 15])
        y = data[:, d-1]
        y[y == "no"] = "0"
        y[y == "yes"] = "1"
        y = y.astype(int)
    elif dataset in ['bupa']:
        data, n, d = loadCsv('datasets/bupa.dat')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1].astype(int)
        y[y != 1] = 0
    elif dataset in ['german']:
        data = pd.read_csv("datasets/german.data-numeric", header=None,
                           sep=r'\s+')
        y = np.array([1 if elt == 2 else 0 for elt in data[24]])
        X = np.array(data.drop([24], axis=1))
    elif dataset in ['glass']:
        data = pd.read_csv("datasets/glass.data", header=None, index_col=0)
        y = np.array([1 if elt == 1 else 0 for elt in data[10]])
        X = np.array(data.drop([10], axis=1))
    elif dataset in ['hayes']:
        data = pd.read_csv("datasets/hayes-roth.data", header=None)
        y = np.array([1 if elt in [3] else 0 for elt in data[5]])
        X = np.array(data.drop([0, 5], axis=1))
    elif dataset in ['heart']:
        data, n, d = loadCsv('datasets/heart.data')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y = y.astype(int)
        y[y != 2] = 0
        y[y == 2] = 1
    elif dataset in ['iono']:
        data = pd.read_csv("datasets/ionosphere.data", header=None)
        y = np.array([1 if elt in ['b'] else 0 for elt in data[34]])
        X = np.array(data.drop([34], axis=1))
    elif dataset in ['libras']:
        data = pd.read_csv("datasets/movement_libras.data", header=None)
        y = np.array([1 if elt in [1] else 0 for elt in data[90]])
        X = np.array(data.drop([90], axis=1))
    elif dataset == "newthyroid":
        data, n, d = loadCsv('datasets/newthyroid.dat')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1].astype(int)
        y[y < 2] = 0
        y[y >= 2] = 1
    elif dataset in ['pageblocks']:
        data = pd.read_csv("datasets/page-blocks.data", header=None,
                           sep=r'\s+')
        y = np.array([1 if elt in [2, 3, 4, 5] else 0 for elt in data[10]])
        X = np.array(data.drop([10], axis=1))
    elif dataset in ['pima']:
        data, n, d = loadCsv('datasets/pima-indians-diabetes.data')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y[y != '1'] = '0'
        y = y.astype(int)
    elif dataset in ['satimage']:
        data, n, d = loadCsv('datasets/satimage.data')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y = y.astype(int)
        y[y != 4] = 0
        y[y == 4] = 1
    elif dataset in ['segmentation']:
        data, n, d = loadCsv('datasets/segmentation.data')
        X = data[:, np.arange(1, d)].astype(float)
        y = data[:, 0]
        y[y == "WINDOW"] = '1'
        y[y != '1'] = '0'
        y = y.astype(int)
    elif dataset == "sonar":
        data, n, d = loadCsv('datasets/sonar.dat')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y[y != 'R'] = '0'
        y[y == 'R'] = '1'
        y = y.astype(int)
    elif dataset == "spambase":
        data, n, d = loadCsv('datasets/spambase.dat')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1].astype(int)
        y[y != 1] = 0
    elif dataset == "splice":
        data, n, d = loadCsv('datasets/splice.data')
        X = data[:, np.arange(1, d)].astype(float)
        y = data[:, 0].astype(int)
        y[y == 1] = 2
        y[y == -1] = 1
        y[y == 2] = 0
    elif dataset in ['vehicle']:
        data, n, d = loadCsv('datasets/vehicle.data')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y[y != "van"] = '0'
        y[y == "van"] = '1'
        y = y.astype(int)
    elif dataset in ['wdbc']:
        data, n, d = loadCsv('datasets/wdbc.dat')
        X = data[:, np.arange(d-1)].astype(float)
        y = data[:, d-1]
        y[y != 'M'] = '0'
        y[y == 'M'] = '1'
        y = y.astype(int)
    elif dataset in ['wine']:
        data = pd.read_csv("datasets/wine.data", header=None)
        y = np.array([1 if elt == 1 else 0 for elt in data[0]])
        X = np.array(data.drop([0], axis=1))
    elif dataset in ['wine4']:
        data = pd.read_csv("datasets/winequality-red.csv", sep=';')
        y = np.array([1 if elt in [4] else 0 for elt in data.quality])
        X = np.array(data.drop(["quality"], axis=1))
    elif dataset in ['yeast3', 'yeast6']:
        data = pd.read_csv("datasets/yeast.data", header=None, sep=r'\s+')
        data = data.drop([0], axis=1)
        if dataset == 'yeast3':
            y = np.array([1 if elt == 'ME3' else 0 for elt in data[9]])
        elif dataset == 'yeast6':
            y = np.array([1 if elt == 'EXC' else 0 for elt in data[9]])
        X = np.array(data.drop([9], axis=1))
    return X, y