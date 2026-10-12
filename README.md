# Site de Guillaume Metzler

Site statique (HTML/CSS/JS, sans étape de compilation). Pages à la racine ; tout le reste est rangé par rôle.

```
index.html, teaching.html, research.html,
publications.html, responsabilites.html,
previous_teaching.html     pages principales (URL inchangées)

courses/<cours>.html            pages des enseignements en cours
previous_courses/<cours>.html   pages des enseignements passés (archives)
exercices/<cours>_exercices.html  pages d'exercices interactifs

assets/            ce qui fait fonctionner le site
  css/site.css       feuille de style unique
  js/                scripts (site, publications, exercices, statistiques de réussite)
  vendor/katex/      KaTeX (rendu des formules)
  images/            favicon, logos, photos, vignettes de cours (courses/), figures d'exercices (exercices/)

data/              données lues par les scripts
  publications/      publications.js (liste des publications), pub-resumes.js (résumés)
  exercises/         énoncés des exercices (un fichier par cours + dossiers revisions-lycee, mathsworkshop-emlyon)
  grades/            statistiques de réussite : un .xlsx par cours (voir grades/README.md)

files/             documents téléchargeables
  courses/<cours>/   PDF, jeux de données, notebooks de chaque cours (nom du dossier = nom de la page .html)
  publications/<année>/  articles, posters, slides
  documents/         CV, offres, divers

_unused/           éléments non utilisés par le site (sources LaTeX, anciennes versions, doublons) ;
                   même chemin qu'avant dans ce dossier, voir _unused/README.md
```

Ajouter un cours : créer `courses/<cours>.html`, déposer les fichiers dans `files/courses/<cours>/`
et la vignette dans `assets/images/courses/<cours>.jpg`. Les liens dans les pages sont relatifs
(`../files/courses/<cours>/…`).
