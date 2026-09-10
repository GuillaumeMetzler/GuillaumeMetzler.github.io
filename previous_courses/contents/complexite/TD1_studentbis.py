# Code made by Joris DUBOIS #

import random

mvt = 0

def retourner(pos, pile):
	global mvt

	npile = []
	# Retourner
	for i in range(pos+1):
		npile.append( (pile[i][0], not pile[i][1]) )
	npile.reverse()
	# Rajoute le reste
	if pos < len(pile):
		for i in range(pos+1, len(pile)):
			npile.append(pile[i])
	
	mvt += 1
	return npile

def chercheCrepe(n, pile):
	for i in range(len(pile)):
		if pile[i][0] == n:
			return i

def deplacer(crepe, pos, pile):
	index = chercheCrepe(crepe, pile)
	if index != 0:
		pile = retourner(index, pile)
	if (pile[0][1] == True):
		pile = retourner(0, pile)
	pile = retourner(pos, pile)
	return pile

def magic(pile):
	dernier = len(pile)-1
	while dernier != -1:
		if pile[dernier][0] != dernier or pile[dernier][1] == False:
			pile = deplacer(dernier, dernier, pile)
		dernier-=1

	return pile

def generePile(n):
	pile = []
	global mvt
	mvt = 0
	for i in range(n):
		pile.append((i, random.choice([True, False]) ))
	random.shuffle(pile)
	return pile

def resolve(n):
	pile = generePile(n)
	print(pile)
	pile = magic(pile)
	print(pile)
	print(f"En {mvt} mouvements !")

resolve(5)