# -*- coding: utf-8 -*-
"""
Created on Wed Sep 14 14:40:17 2022

@author: yanis
"""
import random as r

p = [1, 2, 3, 4, 5]


def reverse(l, _i):
    if _i == len(l) -1:
        return
    l[_i:len(l)] = l[_i:len(l)][::-1]
    for j in range(_i, len(l)):
        l[j]["position"] = 1 if l[j]["position"] == 0 else 0


def plusGrande(l, s):
    m = s
    # si on trouve la plus grande n -s s'arreter
    for _i in range(s, len(l)):
        if l[_i]["taille"] >= l[m]["taille"]:
            m = _i
    return m
# 0 = endroit
# 1 = envers
p = [
     {"taille":1, "position": 0}, 
     {"taille":2, "position": 0}, 
     {"taille":3, "position": 0}, 
     {"taille":4, "position": 0}, 
     {"taille":5, "position": 0}
]


r.shuffle(p)

# p = [5,4, 3, 2, 1]
def printPile(p):
    for i in p:
        print(str(i["position"]) + " : " + str(i["taille"]))

printPile(p)
# print(p)

def check(l):
    for i in range(0, len(l) - 1):
        if l[i]["taille"] < l[i + 1]["taille"] and l[i]["position"] == 0:
            return False
    return 1 if l[len(l) - 1] == 1 else 0


i = 0
n = len(p)
op = 0
while not check(p) and i < n:
    print("Indice : " + str(i))
    big = plusGrande(p, i)
    reverse(p, big)
    if p[len(p)-1]["position"] == 0:
        reverse(p, len(p) - 1)
    op = op + 1
    printPile(p)
    reverse(p, i)
    
    op = op +1
    i = i + 1
    
print("Fini")
printPile(p)
print("Nb opérations : " + str(op))

# val = plusGrande(p, 1)
# nb opération en fonction de n
# nb moyen sur n sur 100 tirages