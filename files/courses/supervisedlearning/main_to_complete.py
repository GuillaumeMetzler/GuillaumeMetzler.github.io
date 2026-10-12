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
from sklearn.metrics import confusion_matrix
from functions import loadCsv, oneHotEncodeColumns, data_recovery
from functions import listP, applyAlgo

from sklearn.neighbors import KNeighborsClassifier
from sklearn import svm



# Quelques paramètres initiaux #

nbFoldValid = 5 # nombre de groupes pour la K-CV

#############################################
#############################################
############## Première partie ##############
#############################################
#############################################

# On va commencer par faire de l'apprentissage des paramètres d'un modèle en suivant 
# le processus d'apprentissage vu en cours, on le fera par exemple avec un SVM linéaire
# dans un premier temps à l'aide du bout de code suivant 

#clf = svm.SVC(C = ..., kernel = 'linear')
#        clf.fit(Xtrain, ytrain)
#        predTrain = clf.predict(Xtrain)
#        predTest = clf.predict(Xtest)

# Et pour calculer les performances

#        ctrain = confusion_matrix(ytrain, predTrain)
#        score_train = ... (calculer une mesure de perf) ...
#        ctest = confusion_matrix(ytest, predTest)
#        ftest = ... (calculer la même mesure de perf) ...




#############################################
#############################################
############## Deuxième Partie ##############
#############################################
#############################################


# On cherche cette fois-ci à automatiser le process sur un ensemble de jeux de données
# et plusieurs algorithmes









# On va stocker les résultats obtenus pour chaque jeux de données et pour chaque algorithme
results = {}

# On va maintenant parcourir l'ensemble de nos jeux de données sur lesquels
# on applique successivement nos algorithmes

for dataset in ['wine']:

    # On écrira un petit code qui fonctionne de la façon suivante :

    # 1) Charger les données à l'aide de la fonction data_recovery
    # 2) Séparer votre jeu de données en train/test à l'aide de la fonction train_test_split
    # 3) Créer vos folds de validation à l'aide de la fonction StratifiedKFold 


    results[dataset] = {} 


    for algo in ... # on parcourt l'ensemble des algorithmes que l'on souhaite tester

        # Il s'agit de commencer à écrire le processus de cross validation pour sélectionner le meilleur hyperparamètre
            validParam = [] # Stockage du score moyen par éléments de notre grille hyper-paramètres
            for param in ...: # On parcourt l'ensemble des hyper-paramètres
                valid = [] # stockage des scores pour sur chaque fold


                for iFoldVal in range(nbFoldValid):

                    # On écrira un petit code qui fonctionne de la façon suivante :

                    #  Dans cette boucle 
                    #   - définir votre ensemble train et valid
                    #   - normaliser vos données sur l'ensemble d'entrainement à l'aide de la fonction Normalizer
                    #   - appliquer la transformation sur le jeu train et valid
                    #   - apprendre votre modèle et évaluer sa performance
                    #   - ajouter ce score à votre liste "valid".

                # On stocke les valeurs la valeur moyenne (np.mean)
                # On cherche la valeur d'hyper-paramètre qui maximise le score moyen


        # Une fois que cela est fait, il faut renormaliser les données pour appliquer les transformations sur le test.     
  
        # Enfin, on réapprend notre modèle et on l'évalue sur le test et on stocke nos résultats
        # ...

        results[dataset][algo] = ... 'stocker le score qui vous intéresse'...



#Affichage de l'ensemble des résultats, décommenter si vous souhaitez les voir

print(results)