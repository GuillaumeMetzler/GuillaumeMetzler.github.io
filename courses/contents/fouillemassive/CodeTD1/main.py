import csv
import gzip
import os
import pickle
import random
import sys
import numpy as np
import warnings
import pandas as pd
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import Normalizer
from sklearn.metrics import average_precision_score, confusion_matrix
from functions import loadCsv, oneHotEncodeColumns, data_recovery
from functions import listP, applyAlgo

from sklearn.neighbors import KNeighborsClassifier
from sklearn import svm





warnings.filterwarnings("ignore")

### Quelques paramètrs généraux pour votre code ###

nbFoldValid = 5 # nombre de groupes pour la K-CV
seed = 1
if len(sys.argv) >= 2:
    seed = int(sys.argv[1])


# On stocke ci-dessous les valeurs des hyper-paramètres que l'on souhaitent tester
# La fonction listP va permetttre de créer une grille de valeurs sur les hyper-paramètres

listParams = {"knn": listP({"k": [1]}),
		      "svm_linear": listP({"C": [0.1,1,10]}),
		      "svm_poly": listP({"C": [0.1,1,10], 
		      						"d": [2,3,4]})
              }

# On va stocker les résultats obtenus pour chaque jeux de données et pour chaque algorithme
results = {}

# On va maintenant parcourir l'ensemble de nos jeux de données sur lesquels
# on applique successivement nos algorithmes

#for dataset in ['glass', 'wine', 'balance', 'autompg', 'pima', 'yeast3',
#                'yeast6', 'iono', 'hayes', 'vehicle', 'wine4', 'german',
#                'libras', 'abalone17', 'abalone20', 'abalone8', 'segmentation',
#                'pageblocks', 'satimage','bupa','heart','newthyroid','sonar',
#                'spambase','splice','wdbc']:
for dataset in ['glass', 'wine']:

    X, y = data_recovery(dataset) # chargement des données
    pctPos = 100*len(y[y == 1])/len(y) # calcul % positifs
    dataset = "{:05.2f}%".format(pctPos) + " " + dataset 
    print(dataset, X.shape)
    print(seed)
    np.random.seed(seed)
    random.seed(seed)
    Xtrain, Xtest, ytrain, ytest = train_test_split(X, y, shuffle=True,
                                                    stratify=y, test_size=0.2) # train-test split
    skf = StratifiedKFold(n_splits=nbFoldValid, shuffle=True) # initialisation CV
    foldsTrainValid = list(skf.split(Xtrain, ytrain)) # création des groupes
    results[dataset] = {} 
    for algo in listParams.keys(): # on parcourt l'ensemble des algorithmes
        if len(listParams[algo]) > 1:  # Début Cross-Validation
            validParam = [] # Stockage du score moyen par éléments de notre grille hyper-paramètres
            for param in listParams[algo]: # On parcourt l'ensemble des hyper-paramètres
                valid = [] # stockage des scores pour sur chaque fold
                for iFoldVal in range(nbFoldValid):
                    fTrain, fValid = foldsTrainValid[iFoldVal] # définition du fold de validation
                    # Normalisation
                    normalizer = Normalizer() 
                    normalizer.fit(Xtrain[fTrain]) 
                    X_trainv = normalizer.transform(Xtrain[fTrain]) 
                    X_valid = normalizer.transform(Xtrain[fValid])
                    # Fin normalisation
                    # On applique notre algo 
                    valid.append(applyAlgo(algo, param,
                                           X_trainv, ytrain[fTrain],
                                           X_valid, ytrain[fValid])[1])
                    # On stocke les valeurs 
                validParam.append(np.mean(valid))
            param = listParams[algo][np.argmax(validParam)]
        else:  # Pas de Cross-validation
            param = listParams[algo][0]
        # Normalisation
        normalizer = Normalizer()
        normalizer.fit(Xtrain)
        Xtrain = normalizer.transform(Xtrain)
        Xtest = normalizer.transform(Xtest)
        # Fin normalisation
        apTrain, apTest = applyAlgo(algo, param, Xtrain, ytrain, Xtest, ytest)
        results[dataset][algo] = (apTrain, apTest)



        # La suite n'est pas "importante" elle permettra de stocker vos résultats 
        # dans un tableau vous permettant de générer un pdf avec vos résultats

    #if not os.path.exists("results"):
    #    try:
    #        os.makedirs("results")
    #    except:
    #        pass
    #f = gzip.open("./results/res" + str(seed) + ".pklz", "wb")
    #pickle.dump(results, f)
    #f.close()

# Affichage de l'ensemble des résultats
print(results)