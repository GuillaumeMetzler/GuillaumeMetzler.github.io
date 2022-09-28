import os
os.system('cls' if os.name == 'nt' else 'clear')

def Affichage(Cases):
    
    for i in range(0,len(Cases)):
        print(1+i,":",Cases[i+1])

count = 0
def Deplacer(N_palets, Cases, A,B,C):
    #A : position case Source
    #B : position case Cible
    #C : position case Intermédiaire
    #N_palets : nombre d'éléments/palets.
    #Cases : dictionnaire contient des Tours de type list; chaque list correspond à un Tour
    if (N_palets!=0):
        global count
        Deplacer(N_palets-1,Cases, A, C, B) #1. Déplacer la pile de n-1 éléments de la case A vers la case C (en utilisant la case B comme case intermédiaire)
        Cases[B].append(Cases[A].pop())     #2.	Déplacer le dernier élément de la case A vers la case B
        count+=1
        print ("Delplacer le palet",N_palets,"de case:",A,"vers case:",B)
        Affichage(Cases)
        Deplacer(N_palets-1,Cases, C, B, A) #3.	Déplacer la pile de n-1 éléments de la case C vers la case B (en utilisant la case A comme case intermédiaire) 

Cases = dict()
#Cases[1] = [4,3,2,1]
Cases[1] = [3,2,1]
Cases[2] = []
Cases[3] = []

print("Notre tour de Hanoi:")
Affichage(Cases)

N_palets = len(Cases[1])
Deplacer(N_palets, Cases, 1,2,3)
print("Nous avons effectue:", count, "deplacements")







