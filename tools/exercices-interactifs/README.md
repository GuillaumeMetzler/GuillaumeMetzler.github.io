# Exercices interactifs — boîte à outils

Ce dossier contient tout ce qu'il faut pour reproduire, pour n'importe quel
cours, le système d'exercices auto-correctifs mis en place pour Analyse I
et pour Algèbre Linéaire et Analyse de Données (`exercices/*.html`) :
questions QCM ou à réponse numérique, correction immédiate, score
indépendant par thème, rendu LaTeX des formules via KaTeX (auto-hébergé,
pas de dépendance à un CDN externe), et questions illustrées par des
graphiques.

Les pages d'exercices vivent dans un dossier dédié à la racine du site,
`exercices/`, séparé de `courses/` (les pages de cours elles-mêmes).

## Comment ça marche (architecture)

Le moteur est **générique** et déjà en place sur le site — il n'y a jamais
besoin d'y toucher pour ajouter un nouveau cours :

- `assets/vendor/katex/` : KaTeX auto-hébergé (JS + CSS + polices), partagé
  par toutes les pages d'exercices.
- `assets/css/site.css` : les styles `.exo-*` (cartes, onglets, scores,
  figures...), partagés eux aussi.
- `assets/js/exercises.js` : moteur générique. Il lit deux variables globales,
  `window.EXERCISES_CATEGORIES` et `window.EXERCISES_DATA`, construit les
  onglets, les cartes de questions, gère la correction et un score
  indépendant par thème (pas de score global), et déclenche le rendu KaTeX
  des énoncés délimités par `\( ... \)` (inline) ou `\[ ... \]` (bloc).

Pour un nouveau cours, il suffit donc de fournir :
1. **Une page HTML** (`exercices/<cours>_exercices.html`), copie de
   `page_template.html` avec les `{{PLACEHOLDERS}}` remplis.
2. **Un fichier de données** (`assets/js/data/<cours>_exercices.js`) qui
   définit `EXERCISES_CATEGORIES` (la liste des thèmes/onglets) et
   `EXERCISES_DATA` (la liste des questions).
3. **Un lien** depuis la page du cours (`courses/<cours>.html`) vers la
   nouvelle page d'exercices, en `../exercices/<cours>_exercices.html`
   (voir le bloc "Exercices interactifs" ajouté dans `courses/analyse.html`
   ou `courses/algebre_analyse_donnees.html` pour le modèle exact).

## Format d'une question

Voir `data_example.py` pour le détail, résumé ici :

```json
{
  "type": "qcm",
  "id": "espaces-vectoriels-01",
  "cat": "espaces-vectoriels",
  "q": "Enoncé en HTML + LaTeX : \\(u(x) = \\lambda x\\)",
  "opts": [{"key": "a", "text": "..."}, {"key": "b", "text": "..."}, {"key": "c", "text": "..."}, {"key": "d", "text": "..."}],
  "ans": "a",
  "ansText": "texte de la bonne réponse (accepte du LaTeX)"
}
```

ou pour une question à réponse numérique (`"type": "num"`) : `"ans"` est un
nombre, `"tol"` la tolérance acceptée, `"ansText"` le texte affiché en cas
d'erreur. Un champ optionnel `"img"` (+ `"imgAlt"`) affiche un graphique
au-dessus des options/de la zone de réponse.

**Écrire le LaTeX directement** dans le texte des nouvelles questions (pas
besoin de passer par `latex_conv.py`, qui sert uniquement à convertir un
texte legacy en unicode "fait maison", comme c'était le cas pour les
questions d'Analyse I écrites avant l'introduction de LaTeX).

## Workflow pour un nouveau cours

1. Dupliquer `data_example.py` en un fichier par thème/catégorie
   (`data_<slug>.py`), et y écrire les questions avec les deux petits
   helpers `qcm()` / `num()` déjà fournis dans le modèle.
2. Dupliquer `build_template.py` en `build_<cours>.py`, importer chaque
   fonction `get_xxx()` et compléter la liste `CATEGORIES` (slug, libellé
   affiché sur l'onglet, fonction).
3. Lancer `python3 build_<cours>.py` : ça produit
   `<cours>_exercices.json` et `<cours>_exercices_data.js`.
4. Valider le LaTeX généré (recommandé, surtout si beaucoup de questions) :
   ```
   npm install katex --no-save   # une seule fois, télécharge katex localement
   node validate_latex.js <cours>_exercices.json
   ```
   Le script signale toute expression `\( ... \)` qui ne compile pas avec
   KaTeX (accolades non fermées, commande inconnue, etc.) avant la mise en
   ligne.
5. (Optionnel) Générer des graphiques illustrant certaines questions avec
   `make_graphs_template.py` (dupliqué/adapté), puis les référencer via le
   champ `"img"` d'une question. Les PNG vont dans `images/exercices/`.
6. Copier `<cours>_exercices_data.js` vers
   `assets/js/data/<cours>_exercices.js` sur le site.
7. Dupliquer `page_template.html` en `exercices/<cours>_exercices.html` et
   remplir les `{{PLACEHOLDERS}}` (titre, image d'avatar dans
   `images/courses/`, lien retour vers `../courses/<page_cours>.html`,
   résumé des thèmes, nom du fichier de données).
8. Ajouter un lien depuis `courses/<cours>.html` vers cette nouvelle page,
   en `../exercices/<cours>_exercices.html` (bloc "Exercices interactifs",
   voir modèle dans `courses/analyse.html`).

## État actuel sur le site

- **Analyse I** (`exercices/analyse_exercices.html`) : 280 questions
  réparties en 7 thèmes, avec illustrations graphiques.
- **Algèbre Linéaire et Analyse de Données**
  (`exercices/algebre_exercices.html`) : 423 questions réparties en 11
  thèmes correspondant chacun à une section du polycopié (espaces
  vectoriels & applications linéaires, espaces vectoriels de dimension
  finie, matrices & calcul matriciel, systèmes linéaires, réduction des
  endomorphismes, formes quadratiques & espaces euclidiens, SVD, ACP,
  généralisation des méthodes, AFC, ACM), avec un nombre de questions par
  thème proportionné à la richesse de la section correspondante dans le
  polycopié.
- **Modélisation Linéaire** (`exercices/modelelineaire_exercices.html`) :
  307 questions réparties en 10 thèmes correspondant chacun à une section
  du polycopié (dérivation des fonctions à plusieurs variables, recherche
  d'extrema & fonctions convexes, modèle linéaire gaussien simple, vecteur
  gaussien & géométrie des modèles linéaires, modèle linéaire gaussien
  multiple, ANOVA, régression linéaire en pratique (R), généralités sur les
  modèles linéaires généralisés, régression logistique, lois de probabilité
  usuelles), avec le même principe de dimensionnement selon la richesse de
  chaque section.
- **Introduction to Supervised Machine Learning**
  (`exercices/supervisedlearning_exercices.html`) : 435 questions réparties
  en 13 thèmes couvrant le polycopié (algèbre linéaire & convexité,
  optimisation convexe, introduction à l'apprentissage supervisé, théorie
  statistique de l'apprentissage, procédure d'apprentissage & mesures de
  performance, pertes de substitution & k plus proches voisins, SVM,
  régression linéaire/logistique/à noyau, arbres de décision, réseaux de
  neurones, retour sur la théorie statistique de l'apprentissage, méthodes
  d'ensemble (bagging, forêts aléatoires, boosting, stacking), gradient
  boosting). Le polycopié source est en anglais ; les questions ont été
  rédigées en français par cohérence avec le reste du site, en conservant
  les termes techniques d'usage (k-NN, SVM, bagging, boosting...). Les deux
  chapitres les plus riches du cours ("Supervised Algorithms" et "Advanced
  Supervised Algorithms") ont chacun été éclatés en plusieurs thèmes — un
  par algorithme ou grande famille de méthodes — plutôt que gardés comme un
  seul thème par chapitre, pour rester lisible malgré leur volume ; à
  l'inverse, les sections qui ne contenaient qu'une note du type « à
  rédiger plus tard » (optimisation convexe contrainte, applications
  pratiques, metric learning) ont été omises faute de contenu à évaluer.
