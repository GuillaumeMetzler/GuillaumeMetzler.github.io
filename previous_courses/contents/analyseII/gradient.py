import numpy as np
import matplotlib.pyplot as plt

#Cette première partie va nous servir à représenter notre fonction
m = 200
# Espace de représentation selon les valeurs de x
x_val = np.linspace(-7,7,m)


# A cet endroit, il va falloir définir votre fonction f
def my_func(x):  
    return (3*x**2 - 6*x +2)

# Ici on calcule l'image de la fonction f 
function_values = my_func(x_val[:,np.newaxis])


###########################################################
### On va maintenant procéder à la descente de gradient ###
###########################################################

# nombre d'itérations (ne pas changer cette valeur !)
N = 10
# pas d'apprentissage (il faudra jouer avec cette valeur)
t = 0.5


##### Ecrire votre descente de gradient ici ######

# vous devrez enregistrer deux choses au cours de ce process
# 1) les valeurs explorer par l'algorithme dans une liste nommé x_explore qu'il va 
#    falloir initialiser
x_explore = [0.3]
# 2) les valeurs prises par la fonction f (my_func) que vous stockerez dans une liste
#    liste nommée f_values
f_values = [my_func(x_explore[0])]


for j in range(N-1):
    last_x = x_explore[-1]
    this_x = last_x - t*(6*last_x - 6)
    x_explore.append(this_x)
    f_values.append(my_func(this_x))


##### Fin descente de gradient ######


#############################
### Préparation du graphe ###
#############################

### Eviter de changer cette section ###

# Création de la fenêtre graphique
fig, ax = plt.subplots()
# Représentation de la fonction f
ax.plot(x_val, function_values, 'k')

colors = ['b', 'g', 'm', 'c', 'orange','b', 'g', 'm', 'c', 'orange']
for j in range(1,N):
    ax.annotate('', xy=(x_explore[j], f_values[j]), xytext=(x_explore[j-1], f_values[j-1]),
                   arrowprops={'arrowstyle': '->', 'color': 'r', 'lw': 1},
                   va='center', ha='center')


# Labels, titles and a legend.
ax.scatter(x_explore, f_values, c=colors, s=40, lw=3)
ax.set_xlim(-7,7)
ax.set_ylim(-2,50)
ax.set_xlabel(r'$x$')
ax.set_ylabel(r'$f(x)$')
ax.set_title('Itérations de la descente de gradient')

plt.tight_layout()
plt.savefig('exemple.png')
plt.show()


