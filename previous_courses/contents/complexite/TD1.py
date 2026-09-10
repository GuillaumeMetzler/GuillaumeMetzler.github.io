# On s'intéresse ici au problème complet qui consiste à ordonner les crêpes 
# dans le bon ordre mais également dans le bon sens.

# Pour cela on va commencer par créer deux fonctions :
# 	1) une fonction qui va permettre de localiser la crêpe la plus grande et non rangée
#	2) une fonction qui va représenter l'inversion des crêpes, i.e. le retournement de la pile.

# On va ensuite mettre tout cela dans une fonction globale qui va dépendre de la taille de la pile.

# Le sens de la crêpe sera représenté par le signe associé à la taille de la crêpe
# Cette taille sera représentée par un nombre entier.


import numpy as np
import random
import os

#####################################
####### Fonction de recherche #######
#####################################

def Chercher(Les_crepes, Nombre_crepes):    #La fonction pour trouver la plus grande
    Index_Grande = 0                        #Initialiser l'index à zero et commencer la recherche
    Grande = Les_crepes[0]
    for i in range(1,Nombre_crepes):
        if np.abs(Les_crepes[i])>np.abs(Grande):
            Grande = Les_crepes[i]
            Index_Grande = i
    return Index_Grande                     #Renvoie l'indice de la plus grandes des crêpes



###########################################
####### Fonction : retourner la pile #######
###########################################


def Retourner(Les_crepes, Nombre_crepes):         #La fonction pour effectuer le retournement
                                                  #Pour compter le nombre de retournement
    if Nombre_crepes == 0:
            Les_crepes[0] = Les_crepes[0] * (-1)
    else:
        for i in range(0, int(Nombre_crepes/2)):
            Temp = Les_crepes[i] * (-1)
            Les_crepes[i] = Les_crepes[Nombre_crepes-1-i] * (-1)
            Les_crepes[Nombre_crepes-1-i] = Temp
        if (Nombre_crepes%2)>0:             #Changer le signe de l'élément au milieu dans Les_crepes[] en cas de pile impaire
            Les_crepes[int(Nombre_crepes/2)] = Les_crepes[int(Nombre_crepes/2)] * (-1)
    return Les_crepes    




################################
####### Fonction globale #######
################################


def Organiser(n):
    Les_crepes = np.array(random.sample(list(range(n)),n))+1
    Count = 0                                       #Pour compter le nombre de retournement
    Taille = len(Les_crepes)     
    print ("Nos Crepes avant: ", Les_crepes)            
    for i in range(Taille,0,-1):                     
         Index_Grande = Chercher(Les_crepes,i)      
         print("La plus grande est:",Les_crepes[Index_Grande],"dans les restes",i,"crepes")
         if (Index_Grande != i-1) or (Les_crepes[Index_Grande]<0): #on ne fait quelque chose que si la plus grande n'est pas déjà en place et bien orientée
                                                                                              
             if Index_Grande !=0:                                  #si la plus grande n'est pas *déjà* en haut...     
                 Retourner(Les_crepes,Index_Grande+1)              #Placer la spatule en bas du crêpe plus grande et retourne
                                                                   
                 print ("apres: ", Les_crepes)
                 Count+=1       
             if Les_crepes[0]>0:                                   #Vérifier la face de crêpe quand elle est en haut 
                 Retourner(Les_crepes,0)                           #on la met à l'envers si elle n'est pas déjà à l'envers
                                                                   
                 print ("apres: ", Les_crepes)
                 Count+=1                
             Retourner(Les_crepes,i)                               #puis on retourne la pile pour mettre la crêpe à sa place
                                                                   
             print ("apres: ", Les_crepes)
             Count+=1 
    return Count      
                                                                            
print("On a effectue :",Organiser(5),"Retournement")  