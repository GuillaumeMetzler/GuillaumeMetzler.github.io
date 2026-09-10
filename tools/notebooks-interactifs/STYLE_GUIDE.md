# Guide de style — rework des notebooks (v2)

Ce fichier est la référence commune à tous les notebooks reconstruits. Lis-le
en entier avant d'écrire quoi que ce soit.

## Pourquoi ce rework

La v1 fonctionnait techniquement mais l'auteur du cours (un enseignant-
chercheur, pas un rédacteur IA) l'a jugée trop "IA" dans la rédaction :
trop structurée de façon uniforme, trop de blocs génériques répétés
identiquement d'un notebook à l'autre, une prose qui explique tout de façon
exhaustive et lisse au lieu d'aller à l'essentiel. Le but de ce rework n'est
pas d'ajouter du contenu superficiel, c'est de récrire avec une vraie voix
de prof, et d'ajouter deux choses concrètes : des questions d'observation
(exécuter du code déjà écrit et interpréter), et des exercices de code
entièrement libres précédés d'un exemple travaillé.

## La référence de style : `DecisionTrees.ipynb`

Ce notebook existe déjà sur le site (cours Introduction to Supervised
Machine Learning) et représente la voix qu'il faut retrouver. Extraits
représentatifs (le style est en anglais dans l'original, mais la
*construction* est ce qu'il faut imiter, en français) :

```
# Decision Trees & Ensemble Methods

This notebook focuses on:
- model training and **cross-validation**,
- **Decision Trees** (classification & regression),
- ensemble methods: **Bagging**, **Random Forests**, **AdaBoost**.

**Learning goals**
- Understand K-fold cross-validation and hyperparameter tuning.
- Train and interpret Decision Trees for classification and regression.
- ...
```

```
## I. What is a Decision Tree?

A Decision Tree splits the feature space into regions using simple rules
like if/else rules, we talk about binary decision trees in this case. For
**classification**, leaves predict class or labels of instances based on
the most represented group in a leaf. For **regression**, leaves return a
numeric value (e.g. mean value of all instances in a leaf).
```

```
Let us first have a look at the decision boundaries of a decision tree with
respect to the choice of the hyperparameter `max_depth` on the following
simulated data.
```
*(puis une cellule de code, sans grande cérémonie autour)*

```
$$  $$

**Question 1** : Run the following code and observe the performances of the
decision tree. What can you say, in your opinion, about the depth of the
tree regarding the performances?

$$  $$
```
*(puis une cellule de code, puis la question suivante)*

```
$$ $$

**Question 4**: What do you notice about the train and test scores as the
depth increases?

**Question 5**: What is the optimal structure in terms of depth according to
the results obtained?

**Question 6**: Why does the tree with `max_depth=None` often have very
good performance on the training set but poor performance on the test set?

$$  $$
```

Ce qu'il faut en retenir :
- Les phrases de transition sont courtes et directes : « Let us first have a
  look at... », « We can also represent... », « We now want to study... ».
  Pas de « Dans cette section, nous allons voir comment... » systématique.
- Les rappels théoriques sont concis (un paragraphe, pas une fiche
  encyclopédique) et vont à l'essentiel : une définition, une intuition,
  parfois une formule, rarement plus de 6-8 lignes d'affilée.
- Les questions d'observation sont regroupées par lot après un même bloc de
  code (2 à 4 questions à la suite), formulées simplement, parfois avec une
  imprécision volontaire assumée ("what can you say, in your opinion..."),
  jamais avec un luxe de guillemets/gras/emphase.
- Le séparateur `$$  $$` (mode maths vide) est utilisé comme espaceur visuel
  avant/après un bloc de questions — un tic de mise en forme du prof,
  reproduis-le.
- Il n'y a pas de bloc "Objectifs pédagogiques" répété section par section,
  ni de citation `> ...` en boîte à chaque début de notebook.

## Défauts précis de la v1 à corriger (ne pas reproduire)

Extraits réels de la v1 (à titre d'anti-exemple, NE PAS écrire comme ça) :

```
## Objectifs pédagogiques

- Comprendre la différence entre un problème de **régression** et un
  problème de **classification**, et la manière dont les données sont
  représentées pour un algorithme.
- Faire la différence entre **risque empirique** (...) et **risque vrai**
  (...), et observer empiriquement le phénomène de **sur-apprentissage**
  ...
- Mettre en œuvre une procédure expérimentale correcte : ...
- Calculer et interpréter les principales **mesures de performance** : ...

> Dans tout ce notebook, on utilise `numpy`, `matplotlib` et `scikit-learn`.
```
→ trop long, trop symétrique (toujours 4 puces qui reformulent le plan),
et la citation en boîte à la fin est un tic typique de rédaction
automatique. Remplace ça par 2-4 phrases de prose qui annoncent le sujet
sans le lister mécaniquement, à la manière de la cellule 0 de
DecisionTrees.ipynb (qui elle-même ne fait qu'UNE liste, pas une par
section).

```
### Exercice 1 — Représentation des données

On considère un jeu de données `load_wine()` de scikit-learn ...
1. Chargez le jeu de données avec `load_wine(return_X_y=True)`.
2. Affichez le nombre d'observations m, le nombre de descripteurs d et le
   nombre de classes distinctes.
3. Indiquez, dans un print, s'il s'agit d'un problème de régression ou de
   classification, et si oui, binaire ou multi-classes.
```
puis un stub avec :
```python
# TODO : chargez X (matrice des descripteurs) et y (labels) avec load_wine
X_wine, y_wine = None, None  # a completer

# Valeurs de secours pour que la cellule s'execute sans erreur
if X_wine is None:
    X_wine, y_wine = np.zeros((1, 1)), np.zeros(1)
...
```
→ c'est exactement le pattern interdit maintenant : liste numérotée
mécanique + squelette TODO + valeurs bidons de secours. Le nouvel exercice
correspondant doit ressembler à :
```python
CELLS.append(demo(r"""
# Exemple travaille : meme mecanique, sur un autre jeu de donnees
X_iris, y_iris = load_iris(return_X_y=True)
print(f"{X_iris.shape[0]} observations, {X_iris.shape[1]} descripteurs, "
      f"{len(np.unique(y_iris))} classes")
"""))
CELLS.append(md(r"""
Faites la même chose avec `load_wine` : combien d'observations, de
descripteurs, de classes ? Un problème de régression ou de classification ?
"""))
CELLS.append(exercice(
    consigne="Chargez load_wine, affichez m, d, le nombre de classes, et "
             "concluez sur le type de tache dans un print.",
    solution=r"""
X_wine, y_wine = load_wine(return_X_y=True)
m, d = X_wine.shape
n_classes = len(np.unique(y_wine))
print(f"{m} observations, {d} descripteurs, {n_classes} classes")
print("Classification multi-classes" if n_classes > 2 else "Classification binaire")
""",
))
```

## Ce qu'il faut ajouter (nouveau, obligatoire dans chaque notebook)

1. **Questions d'observation.** Pour chaque section principale (2 à 3 par
   notebook, donc au moins 4-6 questions d'observation au total par
   notebook), une cellule `demo()` qui fait varier un paramètre ou une
   situation (bruit, taille d'échantillon, hyperparamètre, structure des
   données...) et produit un graphique ou des scores, suivie d'une ou
   plusieurs cellules `question(...)` (utilise le helper, pas du texte
   markdown brut) qui demandent d'interpréter ce qui vient d'être observé.
   Toujours accompagner d'un `reponse(...)` (élément de réponse, visible
   seulement dans le corrigé — reste concis, 2-5 phrases, pas un roman).
2. **Exercices à code libre.** Utilise `exercice(consigne, solution)` (API
   v2, voir `nb_helpers.py` — LIS-LE, il a changé). Chaque `exercice(...)`
   doit être précédé d'une cellule `demo()` qui traite un cas analogue (même
   mécanique, jeu de données ou configuration différente). N'écris plus de
   squelette `# TODO` toi-même : `exercice()` s'en charge automatiquement à
   partir de la consigne.
3. **Étoffer.** Vise 8 à 11 exercices/questions au total par notebook (mélange
   d'exercices à code libre et de questions d'observation), et au moins
   2-3 sections `##` de contenu (pas juste une intro + une longue liste
   d'exercices). Approfondis avec de vraies variations : plusieurs jeux de
   données, plusieurs hyperparamètres balayés en grille (comme
   `depth_values = [1, 2, 3, 5, None]` + `subplots`), pas du remplissage.

## Consignes générales (inchangées)

- Français pour tout le texte pédagogique.
- Données simulées (`make_classification`, `make_regression`, `make_moons`,
  `make_blobs`...) pour les démos, jeux de données réels scikit-learn
  (`load_wine`, `load_digits`, `load_breast_cancer`, `load_diabetes`...)
  pour les exercices avancés.
- Vocabulaire cohérent avec la banque de QCM du même cours (fichiers
  `data_<theme>.py` dans `/tmp/exo_build/`, à consulter pour la terminologie
  française déjà validée).
- Dans les solutions, garder le réflexe de vérifier un calcul par un
  `assert` / `np.testing.assert_allclose` quand c'est pertinent (garde-fou
  qualité ET pédagogique) — ce n'est pas un tic à supprimer.
- Niveau : progression de L3 (premiers exercices, guidés dans l'énoncé même
  si le code est libre) à Master (derniers exercices, plus ouverts).

## Workflow attendu

1. Lire `nb_helpers.py` (API v2) en entier.
2. Lire le(s) chunk(s) source du polycopié concernés (`/tmp/exo_build/sl_chunks/`).
3. Lire l'ancien script (`_reference_old/build_nb_*.py`) pour la couverture
   du contenu (quelles notions, quelles formules) — PAS pour la prose, qui
   doit être entièrement récrite.
4. Écrire `build_nb_<slug>.py` dans `/tmp/exo_build/notebooks_build/`
   (utiliser l'API v2 : `md`, `demo`, `exercice`, `question`, `reponse`,
   `build_notebooks`).
5. L'exécuter : `cd /tmp/exo_build/notebooks_build && python3 build_nb_<slug>.py`.
6. Vérifier : `python3 check_notebook.py <NN>_<slug>_etudiant.ipynb <NN>_<slug>_corrige.ipynb`
   — corriger jusqu'à ce que les deux checks passent (syntaxe étudiant OK,
   exécution complète du corrigé sans erreur).
7. Relire le corrigé exécuté (`..._corrige_executed.ipynb`) et vérifier que
   les graphiques sont pertinents et que rien ne ressemble aux anti-exemples
   ci-dessus.
