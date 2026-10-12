########################################
########## Suite de Fibonacci ########## 
########################################

##########################
### Approche récursive ###
##########################

# On cherche à évaluer le temps de calcul du énième terme 
# de la suite de Fibonacci. Pour cela, onva d'abord estimer 
# le temps de calcul pour n = 30 puis on utilisera la complexité
# de l'algorithme pour en déduire le temps d'excécution pour un 
# entier n quelconque.

from timeit import default_timer
import numpy as np
from math import sqrt

n  = 40

def Fibo_recursif(n) :
    if n <= 1 : return n
    else : return Fibo_recursif(n-1)+Fibo_recursif(n-2)


# Constante intervenant dans la complexité de l'approche récursive
phi =  1/2 * (1 + sqrt(5))

# Evaluation temps calcul 
Start = default_timer()
print('Resultat :', Fibo_recursif(n))
Stop  = default_timer()
T_Fibo_n = Stop-Start
print('Le temp d execution pour n=30 est de :', Stop-Start,'secondes')

print("Estimation du temps de calcul de Fibo(100) en heures : ",  T_Fibo_n * phi**(100-n) / (60*60) )
print("Estimation du temps de calcul de Fibo(500) en années : ",  T_Fibo_n * phi**(500-n) / (60*60*24*365) ) 


####################################
### Une approche par recensement ###
####################################

# On va ici stocker en mémoire les valeurs déjà calculés
# On pourra ajouter ci-dessous, une variable qui compte le 
# nombre d'opérations effectuées afin de vérifier que la
# complexité est bien linéaire grâce à cet aspect mémoire.

def Fibo_recensement(n) :
	memoire = {0 : 1, 1 : 1 }

	def Fibo(n) :
		if n in memoire : return memoire[n]
		else :
			f = Fibo_recensement(n-1) + Fibo_recensement(n-2)
			memoire[n] = f
			return f

	return Fibo(n)

	
print("Résultat", Fibo_recensement(n))	

for k in range(n+1) :
	print( "F({}) = {}.".format(k, Fibo_recensement(k) ) )


##############################
### Une approche itérative ###
##############################


def Fibo_iteratif(n):      
    a = 0
    b = 1
    for i in range(n):
        Fib = a+b
        a = b
        b = Fib
    return Fib


#########################################
### Une approche puissance de matrice ###
#########################################

# On définit notre matrice A

A = np.array([[0, 1], [1, 1]])

# Puis notre fonction puissance

def Fibo_puiss(A,n):
	if n == 0:
		output = np.array([[1, 0], [0, 1]])
		return(output)
	elif (n % 2) == 0:
		output = Fibo_puiss(A,n/2)
		return(np.dot(output,output))
	else:
		output = Fibo_puiss(A,(n-1)/2)
		return(np.dot(A,np.dot(output,output)))


