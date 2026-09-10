# Notebooks pédagogiques — boîte à outils

Ce dossier contient les outils utilisés pour générer les notebooks Jupyter
pédagogiques associés à un cours (illustration des notions + exercices
pratiques sur données simulées / `scikit-learn`), sur le modèle de ceux
livrés pour **Introduction to Supervised Machine Learning**
(`courses/contents/supervisedlearning/notebooks/`, 9 thèmes x 2 versions).

Voir aussi `STYLE_GUIDE.md` : le guide de style suivi pour la rédaction
(voix, structure, anti-patterns à éviter) — à relire avant d'écrire un
nouveau thème ou pour un nouveau cours, il contient les enseignements du
rework v2 (voir plus bas).

## Principe

Pour chaque thème, on écrit **une seule** liste de cellules Python (dans un
script `build_nb_<slug>.py`) et on en tire automatiquement **deux**
notebooks :
- `<slug>_etudiant.ipynb` — les cellules d'exercice ne contiennent que la
  consigne rappelée en commentaire (aucun squelette, aucun `# TODO`) ; les
  questions d'observation portent sur du code déjà fourni, sans correction
  automatique.
- `<slug>_corrige.ipynb` — les mêmes exercices contiennent la solution
  complète et exécutée de bout en bout, et les questions d'observation sont
  accompagnées d'un élément de réponse.

Les deux notebooks restent ainsi automatiquement synchronisés (mêmes
rappels de cours, mêmes démos) : il n'y a qu'un seul fichier source à
maintenir par thème.

## Fichiers

- `nb_helpers.py` : le générateur (API v2). Expose `md(text)`,
  `demo(code)`, `exercice(consigne, solution)`, `question(text, n=None)`,
  `reponse(text)` (voir docstring en tête de fichier pour l'API complète)
  et `build_notebooks(cells, out_student, out_corrige)`.
- `check_notebook.py` : vérification systématique à lancer après chaque
  génération : `python3 check_notebook.py <etudiant>.ipynb <corrige>.ipynb`
  1. Vérifie que **toutes** les cellules de code de la version étudiant
     sont syntaxiquement valides (`ast.parse`).
  2. **Exécute** la version corrigée de bout en bout avec un vrai noyau
     Jupyter (`nbclient`) et échoue si la moindre cellule lève une
     exception. Écrit une copie `..._corrige_executed.ipynb` (avec les
     sorties/figures) pour relecture visuelle.
- `STYLE_GUIDE.md` : guide de rédaction (voix, structure des exercices et
  des questions d'observation, anti-patterns v1 à ne pas reproduire).

## Dépendances

```
pip install nbformat nbconvert nbclient ipykernel --break-system-packages
python3 -m ipykernel install --user --name python3
```

## Workflow pour un nouveau cours / thème

1. Extraire le texte du polycopié (`pdftotext -layout`) et, si besoin, le
   découper par chapitre/thème (voir `tools/exercices-interactifs/` pour
   la même étape, réutilisée pour les banques de QCM du même cours — les
   fichiers `data_<slug>.py` de cette banque sont d'ailleurs une bonne
   référence de vocabulaire français déjà validé pour le cours).
2. Décider du découpage en notebooks (regrouper les thèmes trop fins,
   scinder les chapitres trop riches — même logique que pour les banques
   de QCM ; un thème ne doit pas mélanger deux notions trop indépendantes,
   ex. théorie vs procédure expérimentale, ou bagging vs boosting, ont été
   séparés en deux notebooks distincts dans Supervised Learning).
3. Lire `STYLE_GUIDE.md` en entier (voix à adopter + anti-patterns).
4. Pour chaque thème, écrire `build_nb_<slug>.py` :
   ```python
   from nb_helpers import md, demo, exercice, question, reponse, build_notebooks

   CELLS = [
       md("# Titre\n\n..."),
       md("## 1. ...\n\nRappel de cours concis, avec LaTeX ($...$)."),

       # exercice a code libre : toujours precede d'un demo() analogue
       demo("# exemple travaille sur un cas analogue\n..."),
       md("### Exercice 1 : ...\n\nEnonce."),
       exercice(
           consigne="Rappel court de ce qui est demande (1-4 lignes).",
           solution="code complet et correct\n...",
       ),

       # question d'observation : code deja ecrit, l'etudiant l'execute et interprete
       demo("for hp in [...]:\n    ...\nplt.show()"),
       question("Que remarquez-vous quand hp augmente ?"),
       reponse("Element de reponse concis (2-5 phrases), visible dans le corrige."),
       ...
   ]

   build_notebooks(CELLS, "NN_<slug>_etudiant.ipynb", "NN_<slug>_corrige.ipynb")
   ```
5. `python3 build_nb_<slug>.py`
6. `python3 check_notebook.py NN_<slug>_etudiant.ipynb NN_<slug>_corrige.ipynb`
   et corriger jusqu'à ce que les deux vérifications passent.
7. Copier les deux `.ipynb` vers
   `courses/contents/<cours>/notebooks/` sur le site.
8. Ajouter un bloc "Notebooks Python" sur `courses/<cours>.html`, avec une
   paire de boutons (notebook / corrigé) par thème — voir le modèle dans
   `courses/supervisedlearning.html`.

## Recommandations de contenu (retour d'expérience)

- Langue : français pour tout le texte pédagogique (même si le polycopié
  source est en anglais), cohérent avec le reste du site.
- Voix : concise et directe, à la manière d'un prof qui commente son propre
  code (cf. `DecisionTrees.ipynb` déjà en ligne, et `STYLE_GUIDE.md`) —
  pas de liste "Objectifs pédagogiques" répétée section par section, pas
  de citation en boîte à chaque en-tête, peu de gras/emphase.
- Chaque thème : 1 cellule de titre + 2-4 phrases d'intro (pas de liste à
  puces mécanique), 2-3 sections `##` mêlant rappels de cours (concis,
  LaTeX) et démos exécutables, puis un mélange d'exercices à code libre et
  de questions d'observation (8 à 11 au total), gradués en difficulté (L3
  guidé → Master ouvert), et une courte conclusion.
- Exercices à code libre (`exercice`) : la cellule étudiant ne contient
  QUE la consigne en commentaire, jamais de squelette ni de valeurs de
  secours — et est toujours précédée d'un `demo()` traitant un cas
  analogue pour donner un modèle à suivre.
- Questions d'observation (`question` + `reponse`) : un `demo()` qui fait
  varier un paramètre/une situation (bruit, taille d'échantillon,
  hyperparamètre...) et produit un graphique ou des scores, suivi d'une ou
  plusieurs questions d'interprétation. Au moins 4 à 9 par notebook.
- Données simulées (`make_classification`, `make_regression`, `make_moons`,
  `make_blobs`...) pour les démos et au moins un jeu de données réel
  intégré à `scikit-learn` (`load_wine`, `load_digits`,
  `load_breast_cancer`, `load_diabetes`...) pour les exercices avancés.
- Dans chaque solution, vérifier autant que possible un calcul manuel par
  rapport à la référence `numpy`/`scikit-learn` (`assert`,
  `np.testing.assert_allclose`...) : garde-fou qualité ET pédagogique.

## État actuel sur le site

- **Introduction to Supervised Machine Learning**
  (`courses/contents/supervisedlearning/notebooks/`) : 9 thèmes x 2
  versions (étudiant/corrigé) = 18 notebooks — fondations (algèbre,
  convexité, optimisation), théorie statistique de l'apprentissage,
  procédure expérimentale & mesures de performance, k-NN & pertes de
  substitution, SVM, régressions (linéaire/logistique/à noyau), arbres de
  décision & réseaux de neurones, bagging & forêts aléatoires, boosting &
  gradient boosting & stacking. Théorie/procédure et bagging/boosting ont
  chacun été scindés en deux notebooks distincts (v2) suite au retour de
  l'enseignant sur la v1. Au total, 65 exercices à code libre et 55
  questions d'observation, tous vérifiés (exécution complète sans erreur
  des corrigés, validité syntaxique des cellules étudiant).
