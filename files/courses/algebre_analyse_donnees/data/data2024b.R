###########################################
###########################################
####### Examen d'Analyse de Données #######
###########################################
###########################################

# Nom : 
# Prénom : 


######################
##### Exercice 1 #####
######################


### Question 1 ###

### Question 2 ###

### Question 3 ###

### Question 4 ###

### Question 5 ###

### Question 6 ###

### Question 7 ###

######################
##### Exercice 2 #####
######################

### Question 1 ###

### Question 2 ###

### Question 3 ###



######################
##### Exercice 3 #####
######################

# On vous prépare directement le jeu de données que vous devrez employer
# dans le cadre de cet exercice.
# NE PAS TOUCHER A CES LIGNES DE CODE
# IL SUFFIT SIMPLEMENT DE LES EXECUTER

### Importation des données depuis internet

decathlon <- read.table("http://factominer.free.fr/course/donnees/AnaDo_JeuDonnees_Decathlon.csv", 
                        header=TRUE, sep=";",dec=".", row.names=1, fileEncoding="latin1", check.names=FALSE)
decathlon <- decathlon[decathlon$Competition=="JO",]
decathlon = as.matrix(decathlon[,1:10])

###############################
### Préparation des Données ###
###############################


### Question 1 ###

### Question 2 ###

### Question 3 ###

### Question 4 ###


######################################
### Analyse du nuage des individus ###
######################################


### Question 1 ###

### Question 2 ###

### Question 3 ###

### Question 4 ###

### Question 5 ###

### Question 6 ###

### Question 7 ###

### Question 8 ###

### Question 9 ###

