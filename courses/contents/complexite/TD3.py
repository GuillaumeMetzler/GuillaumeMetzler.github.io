#############################################
##### Algorithme drapeau cas bi-couleur #####
#############################################

### Fonction pour échanger la place de deux éléments

def permute(Tab, i, j):
    aux = Tab[i]
    Tab[i] = Tab[j]
    Tab[j] = aux
    return Tab

def Organiser_bi(Tab):
    b = 0                     # Indice de la couleur bleu
    r = len(Tab)-1            # Indice de la couleur rouge
 
    while i<j:
        if(Tab[b]=='Bleu'):
        	b += 1
        else:
        	permute(Tab,b,r)
            r -= 1
    return Tab

TEST = ['Rouge','Bleu','Rouge','Bleu', 'Rouge', 'Bleu', 'Rouge', 'Rouge', 'Bleu']  
print("Avant le traitement : ",TEST)
print("Apres le traitement : ",Organiser_bi(TEST))    



##############################################
##### Algorithme drapeau cas tri-couleur #####
##############################################


def Organiser_tri(Tab):
    b = 0                     # L'indice de bleu
    w = 0                     # L'indice de blanc
    r = len(Tab)-1            # L'indice de rouge

    while j<=k:
        if Tab[w]=='Blanc':  #Si l'indice de blanc pointe vers un blanc, increment pour le prochain
            w  +=  1
        elif Tab[j]=='Bleu':
            permute(Tab, i, j)   #Si il pointe vers un bleu, On fait la permutation avec le bleu
            b += 1
            w += 1
        elif Tab[j]=='Rouge':
            permute(Tab, j, k)   #Si il pointe vers un rouge, On fait la permutation avec le rouge
            r  -= 1
    return Tab

TEST = ['Rouge','Blanc','Blanc','Bleu','Rouge','Bleu', 'Rouge', 'Blanc','Blanc','Blanc','Bleu','Blanc', 'Rouge','Blanc', 'Rouge', 'Bleu','Blanc']  
print("Avant le traitement : ",TEST)
print("Apres le traitement : ",Organiser_tri(TEST))   






