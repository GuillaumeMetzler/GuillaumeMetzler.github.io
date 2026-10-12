# Statistiques de reussite — mode d'emploi

Chaque fichier de ce dossier correspond a un enseignement (meme nom que la page,
sans l'extension `.html`), par exemple `algebre_analyse_donnees.xlsx` correspond
a `courses/algebre_analyse_donnees.html`.

Sur la page du cours, la section **« Statistiques de reussite »** lit ce fichier
automatiquement (aucune action a faire cote site : il suffit de remplir le
classeur Excel et de publier). Un badge « Reussite XX % » apparait aussi
automatiquement sur la vignette du cours, dans la page Enseignement / Archives
(calcule sur l'annee universitaire la plus recente, sur la composante
« moyenne » quand elle existe, sinon sur la premiere colonne de notes).

## Format du fichier

Chaque fichier est un classeur Excel (`.xlsx`). Seule la **premiere feuille**
du classeur est lue. Deux formats de colonnes sont acceptes.

### Format simple (une seule note par etudiant·e)

| annee | note |
|-------|------|
| 2024  | 14.5 |
| 2024  | 8    |
| 2025  | 16   |
| 2025  | 9.5  |

### Format detaille (plusieurs composantes, ex. examen/projet/moyenne)

Utile quand vous voulez distinguer plusieurs notes par etudiant·e (examen,
projet, moyenne, etc.). La page affiche alors deux filtres : un pour l'**annee
universitaire** et un pour l'**examen** (c'est-a-dire la composante a
regarder). Les statistiques et l'histogramme se recalculent selon les deux
filtres choisis.

| annee | examen | projet | moyenne |
|-------|--------|--------|---------|
| 2025  | 7      | 5      | 6       |
| 2025  | 9      | 15     | 12      |
| 2026  | 13     | 8      | 10.5    |

- La premiere colonne doit s'appeler `annee`.
- Les colonnes suivantes sont libres : vous pouvez en mettre autant que
  necessaire et les nommer comme vous voulez (`examen`, `projet`, `moyenne`,
  `oral`, ...). Chacune devient une option du filtre « Examen ».
- Quand une colonne `moyenne` existe, elle est affichee par defaut a
  l'ouverture de la page ; sinon c'est la premiere colonne de notes.

### Regles communes aux deux formats

- `annee` : annee universitaire de la session (ex. `2024` pour 2024-2025, `2025`
  pour 2025-2026). Le filtre « Annee universitaire » propose automatiquement
  toutes les annees presentes dans le fichier, et affiche par defaut la plus
  recente.
- Les notes sont sur 20. Ecrivez-les normalement dans Excel (`14,5` ou `14.5`
  selon les reglages regionaux de votre Excel, les deux sont geres). Une
  cellule vide, une annee manquante ou une note non numerique est simplement
  ignoree pour cette valeur (les autres colonnes de la ligne restent
  exploitees).
- N'ajoutez pas d'autres feuilles utiles dans le classeur : seule la premiere
  est lue.

## Ajouter des notes

1. Ouvrez le fichier `.xlsx` du cours concerne dans ce dossier avec Excel (ou
   creez-le, avec le format simple ou detaille selon vos besoins).
2. Ajoutez une ligne par etudiant·e.
3. Enregistrez au format Excel (`.xlsx`), puis publiez comme d'habitude
   (commit + push).

Tant qu'un fichier ne contient que sa ligne d'en-tete, la page affiche
« Aucune donnee de notes n'est encore disponible pour cet enseignement. » —
c'est normal, il suffit de le completer quand les notes sont disponibles.

Les statistiques calculees automatiquement, pour l'annee et la composante
choisies, sont : nombre d'etudiant·e·s, moyenne, mediane, ecart-type
(echantillon) et taux de reussite (note > 10/20), ainsi qu'un histogramme de
la distribution des notes par tranches de 2 points.

## Verifier une page en local avant de publier

Les navigateurs bloquent par securite le chargement de fichiers locaux
(Excel, CSV, etc.) quand on ouvre une page HTML directement en double-cliquant
dessus (URL en `file://...`). Le widget de statistiques semble alors vide ou
affiche « Aucune donnee disponible », meme si le fichier Excel est correctement
rempli — ce n'est pas un bug, juste une limitation de l'aperçu local.

Pour verifier une page avant de publier, lancez un petit serveur local depuis
le dossier du site (Terminal) :

```
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000/courses/<nom-du-cours>.html` dans votre
navigateur (au lieu de double-cliquer sur le fichier). Les statistiques
s'afficheront alors normalement, exactement comme une fois le site en ligne.
