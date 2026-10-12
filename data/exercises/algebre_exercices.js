/* Banque d'exercices interactifs - genere automatiquement, ne pas editer
   a la main : regenerer depuis build_algebre_full.py. NB: on utilise 'var'
   (et non 'const') pour que ces variables soient bien attachees a l'objet
   window et donc lisibles depuis exercises.js charge dans un <script> separe. */
var EXERCISES_CATEGORIES = [
 {
  "slug": "espaces-vectoriels",
  "label": "Espaces vectoriels & applications linéaires"
 },
 {
  "slug": "dimension-finie",
  "label": "Espaces vectoriels de dimension finie"
 },
 {
  "slug": "matrices",
  "label": "Matrices & calcul matriciel"
 },
 {
  "slug": "systemes-lineaires",
  "label": "Systèmes linéaires"
 },
 {
  "slug": "reduction",
  "label": "Réduction des endomorphismes"
 },
 {
  "slug": "formes-quadratiques",
  "label": "Formes quadratiques & espaces euclidiens"
 },
 {
  "slug": "svd",
  "label": "Généralités & décomposition en valeurs singulières (SVD)"
 },
 {
  "slug": "acp",
  "label": "Analyse en composantes principales (ACP)"
 },
 {
  "slug": "generalisation",
  "label": "Généralisation des méthodes"
 },
 {
  "slug": "afc",
  "label": "Analyse factorielle des correspondances (AFC)"
 },
 {
  "slug": "acm",
  "label": "Analyse factorielle des correspondances multiples (ACM)"
 }
];
var EXERCISES_DATA = [
 {
  "type": "qcm",
  "q": "Dans la définition d'un \\(\\mathbb{K}\\)-espace vectoriel \\(E\\), quelle structure algébrique doit posséder \\((E,+)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un groupe abélien"
   },
   {
    "key": "b",
    "text": "Un anneau commutatif"
   },
   {
    "key": "c",
    "text": "Un corps"
   },
   {
    "key": "d",
    "text": "Un groupe non commutatif"
   }
  ],
  "ans": "a",
  "ansText": "Un groupe abélien",
  "id": "espaces-vectoriels-01",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Parmi les ensembles suivants, lequel n'est PAS un \\(\\mathbb{R}\\)-espace vectoriel pour les lois usuelles ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{Q}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{R}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{C}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathbb{Q}\\)",
  "id": "espaces-vectoriels-02",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Que désigne-t-on par combinaison linéaire des vecteurs \\(x_1,\\dots,x_n\\) d'un \\(\\mathbb{K}\\)-espace vectoriel \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Tout vecteur de la forme \\(\\sum_{k=1}^n \\alpha_k x_k\\) avec \\(\\alpha_1,\\dots,\\alpha_n \\in \\mathbb{K}\\)"
   },
   {
    "key": "b",
    "text": "Le produit \\(x_1 \\cdot x_2 \\cdots x_n\\)"
   },
   {
    "key": "c",
    "text": "La somme \\(x_1 + x_2 + \\dots + x_n\\) uniquement, sans coefficients"
   },
   {
    "key": "d",
    "text": "Un vecteur \\(x_k\\) quelconque de la famille"
   }
  ],
  "ans": "a",
  "ansText": "Tout vecteur de la forme \\(\\sum_{k=1}^n \\alpha_k x_k\\) avec \\(\\alpha_1,\\dots,\\alpha_n \\in \\mathbb{K}\\)",
  "id": "espaces-vectoriels-03",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Que signifie \\(\\text{« } F \\text{ est un sous-espace vectoriel de } E \\text{ »}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(F\\) est une partie de \\(E\\) qui, munie des lois induites par celles de \\(E\\), possède elle-même une structure d'espace vectoriel"
   },
   {
    "key": "b",
    "text": "\\(F\\) est un sous-ensemble fini de \\(E\\)"
   },
   {
    "key": "c",
    "text": "\\(F\\) est un sous-ensemble de \\(E\\) contenant strictement \\(E\\)"
   },
   {
    "key": "d",
    "text": "\\(F\\) est une partie de \\(E\\) stable uniquement par addition"
   }
  ],
  "ans": "a",
  "ansText": "\\(F\\) est une partie de \\(E\\) qui, munie des lois induites par celles de \\(E\\), possède elle-même une structure d'espace vectoriel",
  "id": "espaces-vectoriels-04",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation des sous-espaces vectoriels, \\(F \\subset E\\) est un sous-espace vectoriel de \\(E\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(F \\neq \\emptyset\\) et \\(\\forall (x,x') \\in F^2, \\forall (\\alpha,\\beta) \\in \\mathbb{K}^2,\\ \\alpha x + \\beta x' \\in F\\)"
   },
   {
    "key": "b",
    "text": "\\(F\\) est stable par combinaison linéaire, que \\(F\\) soit vide ou non"
   },
   {
    "key": "c",
    "text": "\\(F \\neq \\emptyset\\) et \\(F\\) est stable par multiplication scalaire uniquement"
   },
   {
    "key": "d",
    "text": "\\(F\\) contient un nombre infini d'éléments"
   }
  ],
  "ans": "a",
  "ansText": "\\(F \\neq \\emptyset\\) et \\(\\forall (x,x') \\in F^2, \\forall (\\alpha,\\beta) \\in \\mathbb{K}^2,\\ \\alpha x + \\beta x' \\in F\\)",
  "id": "espaces-vectoriels-05",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soit \\(F = \\{(x_1,x_2) \\in \\mathbb{R}^2 \\mid 2x_1 - x_2 = 0\\}\\). Que peut-on affirmer ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(F\\) est un sous-espace vectoriel de \\(\\mathbb{R}^2\\)"
   },
   {
    "key": "b",
    "text": "\\(F\\) n'est pas un sous-espace vectoriel car \\((0,0) \\notin F\\)"
   },
   {
    "key": "c",
    "text": "\\(F\\) n'est pas stable par addition"
   },
   {
    "key": "d",
    "text": "\\(F\\) est un sous-espace vectoriel seulement si \\(\\alpha,\\beta \\geq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(F\\) est un sous-espace vectoriel de \\(\\mathbb{R}^2\\)",
  "id": "espaces-vectoriels-06",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Pourquoi \\(F = \\{(x_1,x_2) \\in \\mathbb{R}^2 \\mid x_1^2+x_2^2=1\\}\\) n'est-il pas un sous-espace vectoriel de \\(\\mathbb{R}^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur nul \\((0,0)\\) n'appartient pas à \\(F\\)"
   },
   {
    "key": "b",
    "text": "\\(F\\) contient trop d'éléments"
   },
   {
    "key": "c",
    "text": "\\(F\\) n'est pas un sous-ensemble de \\(\\mathbb{R}^2\\)"
   },
   {
    "key": "d",
    "text": "\\(F\\) est stable par combinaison linéaire mais pas par addition"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur nul \\((0,0)\\) n'appartient pas à \\(F\\)",
  "id": "espaces-vectoriels-07",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Dans \\(E = \\mathbb{R}^3\\), lesquels des sous-ensembles suivants sont des sous-espaces vectoriels de \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Les droites et les plans passant par l'origine"
   },
   {
    "key": "b",
    "text": "Les droites et les plans ne passant pas par l'origine"
   },
   {
    "key": "c",
    "text": "Uniquement les plans, jamais les droites"
   },
   {
    "key": "d",
    "text": "Aucun sous-ensemble propre de \\(\\mathbb{R}^3\\) n'est un sous-espace vectoriel"
   }
  ],
  "ans": "a",
  "ansText": "Les droites et les plans passant par l'origine",
  "id": "espaces-vectoriels-08",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soient \\(F\\) et \\(G\\) deux sous-espaces vectoriels d'un \\(\\mathbb{K}\\)-espace vectoriel \\(E\\). Que peut-on dire de \\(F \\cap G\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(F \\cap G\\) est un sous-espace vectoriel de \\(E\\)"
   },
   {
    "key": "b",
    "text": "\\(F \\cap G\\) n'est jamais un sous-espace vectoriel"
   },
   {
    "key": "c",
    "text": "\\(F \\cap G\\) est un sous-espace vectoriel seulement si \\(F = G\\)"
   },
   {
    "key": "d",
    "text": "\\(F \\cap G\\) est toujours réduit à l'ensemble vide"
   }
  ],
  "ans": "a",
  "ansText": "\\(F \\cap G\\) est un sous-espace vectoriel de \\(E\\)",
  "id": "espaces-vectoriels-09",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Que désigne \\(\\mathrm{Vect}(A)\\) pour \\(A\\) une partie non vide d'un espace vectoriel \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le plus petit sous-espace vectoriel de \\(E\\) (au sens de l'inclusion) contenant \\(A\\)"
   },
   {
    "key": "b",
    "text": "Le plus grand sous-ensemble de \\(E\\) ne contenant pas \\(A\\)"
   },
   {
    "key": "c",
    "text": "L'ensemble des éléments de \\(A\\) qui sont non nuls"
   },
   {
    "key": "d",
    "text": "Le complémentaire de \\(A\\) dans \\(E\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le plus petit sous-espace vectoriel de \\(E\\) (au sens de l'inclusion) contenant \\(A\\)",
  "id": "espaces-vectoriels-10",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la somme \\(F+G\\) de deux sous-espaces vectoriels \\(F\\) et \\(G\\) de \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(F+G = \\mathrm{Vect}(F \\cup G)\\)"
   },
   {
    "key": "b",
    "text": "\\(F+G = F \\cap G\\)"
   },
   {
    "key": "c",
    "text": "\\(F+G = \\mathrm{Vect}(F) \\cap \\mathrm{Vect}(G)\\)"
   },
   {
    "key": "d",
    "text": "\\(F+G\\) n'est défini que lorsque \\(F = G\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(F+G = \\mathrm{Vect}(F \\cup G)\\)",
  "id": "espaces-vectoriels-11",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Deux sous-espaces vectoriels \\(F\\) et \\(G\\) de \\(E\\) sont dits supplémentaires si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(F \\cap G = \\{0_E\\}\\) et \\(F+G = E\\)"
   },
   {
    "key": "b",
    "text": "\\(F \\cap G = E\\) et \\(F+G = \\{0_E\\}\\)"
   },
   {
    "key": "c",
    "text": "\\(F \\subset G\\) et \\(G \\subset F\\)"
   },
   {
    "key": "d",
    "text": "\\(F + G = E\\), sans condition sur \\(F \\cap G\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(F \\cap G = \\{0_E\\}\\) et \\(F+G = E\\)",
  "id": "espaces-vectoriels-12",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Si \\(E = F \\oplus G\\), que dit la Proposition 1.6 sur la décomposition d'un vecteur \\(x \\in E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Il existe un unique couple \\((x_1,x_2) \\in F \\times G\\) tel que \\(x = x_1+x_2\\)"
   },
   {
    "key": "b",
    "text": "Il existe une infinité de couples \\((x_1,x_2) \\in F \\times G\\) tels que \\(x = x_1+x_2\\)"
   },
   {
    "key": "c",
    "text": "Aucun couple \\((x_1,x_2)\\) ne vérifie \\(x = x_1+x_2\\)"
   },
   {
    "key": "d",
    "text": "La décomposition n'existe que si \\(x = 0_E\\)"
   }
  ],
  "ans": "a",
  "ansText": "Il existe un unique couple \\((x_1,x_2) \\in F \\times G\\) tel que \\(x = x_1+x_2\\)",
  "id": "espaces-vectoriels-13",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Une application \\(f : E \\to E'\\) entre deux \\(\\mathbb{K}\\)-espaces vectoriels est dite linéaire si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall \\alpha,\\beta \\in \\mathbb{K}, \\forall x,x' \\in E,\\ f(\\alpha x + \\beta x') = \\alpha f(x) + \\beta f(x')\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall x \\in E,\\ f(x) = x\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est bijective"
   },
   {
    "key": "d",
    "text": "\\(\\forall x,x' \\in E,\\ f(x+x') = f(x) \\cdot f(x')\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall \\alpha,\\beta \\in \\mathbb{K}, \\forall x,x' \\in E,\\ f(\\alpha x + \\beta x') = \\alpha f(x) + \\beta f(x')\\)",
  "id": "espaces-vectoriels-14",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Laquelle des applications suivantes de \\(\\mathbb{R}^3\\) dans \\(\\mathbb{R}^2\\) est linéaire ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x_1,x_2,x_3) = (x_1+x_2,\\ x_1+x_3)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x_1,x_2,x_3) = (x_1 x_2,\\ x_3)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x_1,x_2,x_3) = (x_1+1,\\ x_2)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x_1,x_2,x_3) = (x_1^2,\\ x_2+x_3)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x_1,x_2,x_3) = (x_1+x_2,\\ x_1+x_3)\\)",
  "id": "espaces-vectoriels-15",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Pourquoi l'application \\(f(x_1,x_2) = x_1^2+x_2^2\\) de \\(\\mathbb{R}^2\\) dans \\(\\mathbb{R}\\) n'est-elle pas linéaire ?",
  "opts": [
   {
    "key": "a",
    "text": "Car \\(f(\\alpha x) = \\alpha^2 f(x) \\neq \\alpha f(x)\\) en général"
   },
   {
    "key": "b",
    "text": "Car elle n'est pas définie sur tout \\(\\mathbb{R}^2\\)"
   },
   {
    "key": "c",
    "text": "Car elle ne prend que des valeurs négatives"
   },
   {
    "key": "d",
    "text": "Car \\(f(0,0) \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "Car \\(f(\\alpha x) = \\alpha^2 f(x) \\neq \\alpha f(x)\\) en général",
  "id": "espaces-vectoriels-16",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f \\in \\mathcal{L}(E,E')\\) et \\(F\\) un sous-espace vectoriel de \\(E\\). Que peut-on dire de \\(f(F)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(F)\\) est un sous-espace vectoriel de \\(E'\\)"
   },
   {
    "key": "b",
    "text": "\\(f(F)\\) est un sous-espace vectoriel de \\(E\\), jamais de \\(E'\\)"
   },
   {
    "key": "c",
    "text": "\\(f(F)\\) n'est jamais stable par addition"
   },
   {
    "key": "d",
    "text": "\\(f(F)\\) est toujours réduit à \\(\\{0_{E'}\\}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(F)\\) est un sous-espace vectoriel de \\(E'\\)",
  "id": "espaces-vectoriels-17",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Comment est défini le noyau \\(\\ker(f)\\) d'une application linéaire \\(f : E \\to E'\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ker(f) = \\{x \\in E \\mid f(x) = 0_{E'}\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ker(f) = \\{y \\in E' \\mid \\exists x \\in E,\\ f(x)=y\\}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ker(f) = \\{x \\in E \\mid f(x) = x\\}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ker(f) = E'\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ker(f) = \\{x \\in E \\mid f(x) = 0_{E'}\\}\\)",
  "id": "espaces-vectoriels-18",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Comment est définie l'image \\(\\mathrm{Im}(f)\\) d'une application linéaire \\(f : E \\to E'\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{Im}(f) = \\{y \\in E' \\mid \\exists x \\in E,\\ f(x)=y\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{Im}(f) = \\{x \\in E \\mid f(x)=0_{E'}\\}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Im}(f) = E\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{Im}(f)\\) est toujours réduite à \\(\\{0_{E'}\\}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{Im}(f) = \\{y \\in E' \\mid \\exists x \\in E,\\ f(x)=y\\}\\)",
  "id": "espaces-vectoriels-19",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Pour \\(f \\in \\mathcal{L}(E,E')\\), l'application \\(f\\) est injective si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ker(f) = \\{0_E\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{Im}(f) = E'\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ker(f) = E\\)"
   },
   {
    "key": "d",
    "text": "\\(f(0_E) \\neq 0_{E'}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ker(f) = \\{0_E\\}\\)",
  "id": "espaces-vectoriels-20",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "L'application \\(f(x_1,x_2) = (x_1, 2x_2)\\) de \\(\\mathbb{R}^2\\) dans \\(\\mathbb{R}^2\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "Bijective (à la fois injective et surjective)"
   },
   {
    "key": "b",
    "text": "Injective mais pas surjective"
   },
   {
    "key": "c",
    "text": "Surjective mais pas injective"
   },
   {
    "key": "d",
    "text": "Ni injective ni surjective"
   }
  ],
  "ans": "a",
  "ansText": "Bijective (à la fois injective et surjective)",
  "id": "espaces-vectoriels-21",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soient \\(E_1\\) et \\(E_2\\) deux sous-espaces supplémentaires de \\(E\\). Comment est défini le projecteur \\(p\\) sur \\(E_1\\) parallèlement à \\(E_2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Pour \\(x = x_1+x_2\\) avec \\((x_1,x_2) \\in E_1 \\times E_2\\),\\ \\(p(x) = x_1\\)"
   },
   {
    "key": "b",
    "text": "Pour \\(x = x_1+x_2\\),\\ \\(p(x) = x_2\\)"
   },
   {
    "key": "c",
    "text": "Pour \\(x = x_1+x_2\\),\\ \\(p(x) = x_1-x_2\\)"
   },
   {
    "key": "d",
    "text": "Pour \\(x = x_1+x_2\\),\\ \\(p(x) = x_1+x_2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Pour \\(x = x_1+x_2\\) avec \\((x_1,x_2) \\in E_1 \\times E_2\\),\\ \\(p(x) = x_1\\)",
  "id": "espaces-vectoriels-22",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soit \\(p\\) le projecteur sur \\(E_1\\) parallèlement à \\(E_2\\). Que valent \\(\\ker(p)\\) et \\(\\mathrm{Im}(p)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ker(p) = E_2\\) et \\(\\mathrm{Im}(p) = E_1\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ker(p) = E_1\\) et \\(\\mathrm{Im}(p) = E_2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ker(p) = E_1 \\cap E_2\\) et \\(\\mathrm{Im}(p) = E\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ker(p) = \\{0_E\\}\\) et \\(\\mathrm{Im}(p) = E\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ker(p) = E_2\\) et \\(\\mathrm{Im}(p) = E_1\\)",
  "id": "espaces-vectoriels-23",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soit \\(p\\) un endomorphisme de \\(E\\). D'après la Proposition d'idempotence, \\(p\\) est un projecteur si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(p \\circ p = p\\)"
   },
   {
    "key": "b",
    "text": "\\(p \\circ p = \\mathrm{Id}_E\\)"
   },
   {
    "key": "c",
    "text": "\\(p \\circ p = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(p\\) est bijective"
   }
  ],
  "ans": "a",
  "ansText": "\\(p \\circ p = p\\)",
  "id": "espaces-vectoriels-24",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soient \\(E_1,E_2\\) deux sous-espaces supplémentaires de \\(E\\). Comment est définie la symétrie \\(s\\) par rapport à \\(E_1\\) parallèlement à \\(E_2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Pour \\(x=x_1+x_2\\) avec \\((x_1,x_2) \\in E_1\\times E_2\\),\\ \\(s(x) = x_1 - x_2\\)"
   },
   {
    "key": "b",
    "text": "Pour \\(x=x_1+x_2\\),\\ \\(s(x) = x_1 + x_2\\)"
   },
   {
    "key": "c",
    "text": "Pour \\(x=x_1+x_2\\),\\ \\(s(x) = x_2 - x_1\\)"
   },
   {
    "key": "d",
    "text": "Pour \\(x=x_1+x_2\\),\\ \\(s(x) = x_1\\)"
   }
  ],
  "ans": "a",
  "ansText": "Pour \\(x=x_1+x_2\\) avec \\((x_1,x_2) \\in E_1\\times E_2\\),\\ \\(s(x) = x_1 - x_2\\)",
  "id": "espaces-vectoriels-25",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Quelle relation relie le projecteur \\(p\\) sur \\(E_1\\) parallèlement à \\(E_2\\) et la symétrie \\(s\\) par rapport à \\(E_1\\) parallèlement à \\(E_2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(s = 2p - \\mathrm{Id}_E\\)"
   },
   {
    "key": "b",
    "text": "\\(s = p - \\mathrm{Id}_E\\)"
   },
   {
    "key": "c",
    "text": "\\(s = \\mathrm{Id}_E - 2p\\)"
   },
   {
    "key": "d",
    "text": "\\(s = p \\circ p\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(s = 2p - \\mathrm{Id}_E\\)",
  "id": "espaces-vectoriels-26",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2,x_3) = (x_1+x_2,\\ x_1+x_3)\\) l'application linéaire de \\(\\mathbb{R}^3\\) dans \\(\\mathbb{R}^2\\) du cours. Quelle est la deuxième composante de \\(f(2,3,-1)\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "espaces-vectoriels-27",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Avec \\(f(x_1,x_2,x_3) = (x_1+x_2,\\ x_1+x_3)\\), quelle est la première composante de \\(f(-1,4,5)\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "espaces-vectoriels-28",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Dans l'exemple du cours, \\(E=\\mathbb{R}^2\\) et \\(p\\) est le projecteur sur \\(E_1\\) (l'axe des abscisses) parallèlement à \\(E_2\\) (l'axe des ordonnées), qui à \\(x=(x_1,x_2)\\) associe \\(p(x)=(x_1,0)\\). Pour \\(x=(5,3)\\), quelle est la deuxième composante de \\(p(x)\\) ?",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "espaces-vectoriels-29",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Toujours pour \\(x=(5,3)=(5,0)+(0,3)\\), la symétrie \\(s\\) par rapport à \\(E_1\\) parallèlement à \\(E_2\\) donne \\(s(x)=x_1-x_2\\). Quelle est la deuxième composante de \\(s(x)\\) ?",
  "ans": -3,
  "ansText": "-3",
  "tol": 0.01,
  "id": "espaces-vectoriels-30",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Pour \\(x=(5,3)\\) avec \\(p(x)=(5,0)\\) (projecteur de l'exemple du cours), on sait que \\(s = 2p-\\mathrm{Id}_E\\). Calculez la première composante de \\(2p(x)-x\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "espaces-vectoriels-31",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2) = x_1^2+x_2^2\\) l'application (non linéaire) de \\(\\mathbb{R}^2\\) dans \\(\\mathbb{R}\\) du cours. Calculez \\(f(3,4)\\).",
  "ans": 25,
  "ansText": "25",
  "tol": 0.01,
  "id": "espaces-vectoriels-32",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Avec la même fonction \\(f(x_1,x_2)=x_1^2+x_2^2\\), calculez \\(f(2,4)\\) (utile pour vérifier que \\(f(\\alpha x)\\neq \\alpha f(x)\\)).",
  "ans": 20,
  "ansText": "20",
  "tol": 0.01,
  "id": "espaces-vectoriels-33",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soit \\(F=\\{(x_1,x_2)\\in\\mathbb{R}^2 \\mid 2x_1-x_2=0\\}\\) le sous-espace vectoriel de l'exemple du cours. Calculez \\(2x_1-x_2\\) pour le vecteur \\(x=(4,9)\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "espaces-vectoriels-34",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soit \\(F = \\mathrm{Vect}((1,0)) \\subset \\mathbb{R}^2\\), et soient \\(x=(1,-1)\\) et \\(y=(1,1)\\), deux vecteurs qui n'appartiennent pas à \\(F\\). Quelle est la première composante du vecteur \\(x+y\\) (qui, lui, appartient à \\(F\\)) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "espaces-vectoriels-35",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2)=(x_1,2x_2)\\), la bijection de \\(\\mathbb{R}^2\\) dans \\(\\mathbb{R}^2\\) de l'exemple du cours. Quelle est la deuxième composante de l'unique antécédent de \\(y=(3,10)\\) par \\(f\\) ?",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "espaces-vectoriels-36",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Combien d'éléments contient le sous-espace vectoriel trivial \\(\\{0_E\\}\\) d'un espace vectoriel \\(E\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "espaces-vectoriels-37",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "num",
  "q": "Soient \\(F\\) et \\(G\\) deux sous-espaces supplémentaires de \\(E\\) (\\(E = F \\oplus G\\)). Pour un vecteur \\(x \\in E\\) donné, combien de couples \\((x_1,x_2) \\in F \\times G\\) vérifient \\(x=x_1+x_2\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "espaces-vectoriels-38",
  "cat": "espaces-vectoriels"
 },
 {
  "type": "qcm",
  "q": "Soit \\((x_1, \\ldots, x_n)\\) une famille de vecteurs d'un \\(K\\)-espace vectoriel \\(E\\). Que signifie que cette famille est \\textbf{libre} ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall (\\lambda_1, \\ldots, \\lambda_n) \\in K^n, \\ \\sum_{k=1}^n \\lambda_k x_k = 0 \\implies \\lambda_k = 0 \\ \\forall k\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists (\\lambda_1, \\ldots, \\lambda_n) \\in K^n \\setminus \\{0\\}, \\ \\sum_{k=1}^n \\lambda_k x_k = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Vect}(x_1, \\ldots, x_n) = E\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall x \\in E, \\ \\exists! (\\lambda_1, \\ldots, \\lambda_n) \\text{ tel que } x = \\sum_{k=1}^n \\lambda_k x_k\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall (\\lambda_1, \\ldots, \\lambda_n) \\in K^n, \\ \\sum_{k=1}^n \\lambda_k x_k = 0 \\implies \\lambda_k = 0 \\ \\forall k\\)",
  "id": "dimension-finie-01",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation des familles liées, une famille \\((x_1, \\ldots, x_n)\\) d'au moins deux vecteurs est liée si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "tous les vecteurs de la famille sont non nuls"
   },
   {
    "key": "b",
    "text": "l'un des vecteurs de la famille peut s'écrire comme combinaison linéaire des autres"
   },
   {
    "key": "c",
    "text": "la famille est génératrice de \\(E\\)"
   },
   {
    "key": "d",
    "text": "le nombre de vecteurs \\(n\\) est strictement supérieur à \\(\\dim(E)\\)"
   }
  ],
  "ans": "b",
  "ansText": "l'un des vecteurs de la famille peut s'écrire comme combinaison linéaire des autres",
  "id": "dimension-finie-02",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Parmi les affirmations suivantes, laquelle est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "Toute sur-famille d'une famille libre est libre"
   },
   {
    "key": "b",
    "text": "Toute sous-famille d'une famille liée est liée"
   },
   {
    "key": "c",
    "text": "Toute sur-famille d'une famille liée est liée"
   },
   {
    "key": "d",
    "text": "Toute sous-famille d'une famille génératrice est génératrice"
   }
  ],
  "ans": "c",
  "ansText": "Toute sur-famille d'une famille liée est liée",
  "id": "dimension-finie-03",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "On considère la famille de vecteurs \\(v_1 = (1, -1)\\), \\(v_2 = (3, -2)\\) et \\(v_3 = (0, 1)\\) de \\(\\mathbb{R}^2\\). Cette famille est liée car on peut écrire :",
  "opts": [
   {
    "key": "a",
    "text": "\\(v_1 = v_2 + v_3\\)"
   },
   {
    "key": "b",
    "text": "\\(v_2 = 3v_1 + v_3\\)"
   },
   {
    "key": "c",
    "text": "\\(v_3 = v_1 - v_2\\)"
   },
   {
    "key": "d",
    "text": "\\(v_1 = 2v_2 - v_3\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(v_2 = 3v_1 + v_3\\)",
  "id": "dimension-finie-04",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "On considère la famille de vecteurs \\(v_1 = (1, 2, 1, 0)\\) et \\(v_2 = (-1, 0, -1, 1)\\) de \\(\\mathbb{R}^4\\). On peut montrer que cette famille est libre. Quel est son rang \\(\\mathrm{rg}(v_1, v_2)\\) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "dimension-finie-05",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Reprenons la famille \\(v_1 = (1, -1)\\), \\(v_2 = (3, -2)\\), \\(v_3 = (0, 1)\\) de \\(\\mathbb{R}^2\\) (famille liée car \\(v_2 = 3v_1 + v_3\\)). Quel est le rang \\(\\mathrm{rg}(v_1, v_2, v_3)\\) de cette famille ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "dimension-finie-06",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Une famille \\((x_1, \\ldots, x_n)\\) de \\(E\\) est dite \\textbf{génératrice} si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{Vect}(x_1, \\ldots, x_n) = E\\)"
   },
   {
    "key": "b",
    "text": "la famille est libre"
   },
   {
    "key": "c",
    "text": "\\(n = \\dim(E)\\)"
   },
   {
    "key": "d",
    "text": "tous les \\(x_i\\) sont non nuls"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{Vect}(x_1, \\ldots, x_n) = E\\)",
  "id": "dimension-finie-07",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "On appelle \\textbf{base} de \\(E\\) toute famille d'éléments de \\(E\\) qui est :",
  "opts": [
   {
    "key": "a",
    "text": "libre uniquement"
   },
   {
    "key": "b",
    "text": "génératrice uniquement"
   },
   {
    "key": "c",
    "text": "à la fois libre et génératrice"
   },
   {
    "key": "d",
    "text": "de cardinal égal à \\(\\dim(E) + 1\\)"
   }
  ],
  "ans": "c",
  "ansText": "à la fois libre et génératrice",
  "id": "dimension-finie-08",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation d'une base (Proposition 2.2), une famille \\((x_1, \\ldots, x_n)\\) de \\(E\\) est une base de \\(E\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "tout \\(x \\in E\\) s'écrit comme combinaison linéaire des \\(x_i\\), de façon éventuellement non unique"
   },
   {
    "key": "b",
    "text": "tout \\(x \\in E\\) s'écrit de façon unique comme combinaison linéaire des \\(x_i\\)"
   },
   {
    "key": "c",
    "text": "la famille est génératrice et de cardinal minimal parmi toutes les familles génératrices"
   },
   {
    "key": "d",
    "text": "la famille est liée mais génératrice"
   }
  ],
  "ans": "b",
  "ansText": "tout \\(x \\in E\\) s'écrit de façon unique comme combinaison linéaire des \\(x_i\\)",
  "id": "dimension-finie-09",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "On considère la base \\(v_1 = (1, 1)\\) et \\(v_2 = (1, -1)\\) de \\(\\mathbb{R}^2\\), et le vecteur \\(x = (4, 2)\\). On sait que \\(x = \\alpha_1 v_1 + \\alpha_2 v_2\\) avec \\(\\alpha_1 = \\dfrac{x_1 + x_2}{2}\\). Quelle est la valeur de \\(\\alpha_1\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "dimension-finie-10",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Quelle est la dimension de l'espace vectoriel \\(M_2(\\mathbb{R})\\) des matrices carrées d'ordre 2 ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "dimension-finie-11",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "On considère la famille libre \\(v_1 = (1, -1, 0)\\) et \\(v_2 = (2, 5, 0)\\) de \\(\\mathbb{R}^3\\), qui n'est pas génératrice de \\(\\mathbb{R}^3\\). Quelle est la dimension de \\(\\mathrm{Vect}(v_1, v_2)\\) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "dimension-finie-12",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de la base incomplète, dans un espace vectoriel \\(E\\) de dimension finie :",
  "opts": [
   {
    "key": "a",
    "text": "toute famille génératrice peut être réduite à une base"
   },
   {
    "key": "b",
    "text": "toute famille libre peut être complétée en une base de \\(E\\)"
   },
   {
    "key": "c",
    "text": "toute famille liée peut être complétée en une base de \\(E\\)"
   },
   {
    "key": "d",
    "text": "toute base peut être réduite à une famille libre plus petite"
   }
  ],
  "ans": "b",
  "ansText": "toute famille libre peut être complétée en une base de \\(E\\)",
  "id": "dimension-finie-13",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soit \\(E\\) un espace vectoriel de dimension finie \\(n \\in \\mathbb{N}^*\\) et \\((x_1, \\ldots, x_n)\\) une famille de \\(n\\) vecteurs de \\(E\\). D'après le Théorème 2.3, on a alors :",
  "opts": [
   {
    "key": "a",
    "text": "« libre », « génératrice » et « base » sont trois propriétés équivalentes pour cette famille"
   },
   {
    "key": "b",
    "text": "cette famille est nécessairement une base de \\(E\\)"
   },
   {
    "key": "c",
    "text": "cette famille est nécessairement libre, mais pas forcément génératrice"
   },
   {
    "key": "d",
    "text": "cette famille est nécessairement génératrice, mais pas forcément libre"
   }
  ],
  "ans": "a",
  "ansText": "« libre », « génératrice » et « base » sont trois propriétés équivalentes pour cette famille",
  "id": "dimension-finie-14",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Si \\(F\\) est un sous-espace vectoriel d'un espace vectoriel \\(E\\) de dimension finie, alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dim(F) \\geq \\dim(E)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dim(F) \\leq \\dim(E)\\), avec égalité si et seulement si \\(F = E\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dim(F) = \\dim(E) - 1\\) nécessairement"
   },
   {
    "key": "d",
    "text": "\\(F\\) n'est pas nécessairement de dimension finie"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\dim(F) \\leq \\dim(E)\\), avec égalité si et seulement si \\(F = E\\)",
  "id": "dimension-finie-15",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Soit \\(E\\) un espace vectoriel de dimension \\(5\\) et \\(F\\) un sous-espace vectoriel \\textbf{strict} de \\(E\\) (c'est-à-dire \\(F \\neq E\\)). Quelle est la dimension maximale possible de \\(F\\) ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "dimension-finie-16",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 2.4, tout sous-espace vectoriel \\(F\\) d'un espace vectoriel \\(E\\) de dimension finie :",
  "opts": [
   {
    "key": "a",
    "text": "est nécessairement égal à \\(E\\)"
   },
   {
    "key": "b",
    "text": "admet un supplémentaire dans \\(E\\)"
   },
   {
    "key": "c",
    "text": "n'admet pas de supplémentaire dès que \\(\\dim(F) > 0\\)"
   },
   {
    "key": "d",
    "text": "est nécessairement de dimension impaire"
   }
  ],
  "ans": "b",
  "ansText": "admet un supplémentaire dans \\(E\\)",
  "id": "dimension-finie-17",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soient \\(F\\) et \\(G\\) deux sous-espaces supplémentaires de \\(E\\), \\((x_1, \\ldots, x_p)\\) une base de \\(F\\) et \\((y_1, \\ldots, y_q)\\) une base de \\(G\\). D'après la Proposition 2.5 (recollement de bases) :",
  "opts": [
   {
    "key": "a",
    "text": "\\((x_1, \\ldots, x_p, y_1, \\ldots, y_q)\\) est une base de \\(E\\)"
   },
   {
    "key": "b",
    "text": "\\((x_1, \\ldots, x_p, y_1, \\ldots, y_q)\\) est une famille liée de \\(E\\)"
   },
   {
    "key": "c",
    "text": "seule \\((x_1, \\ldots, x_p)\\) reste une base de \\(E\\)"
   },
   {
    "key": "d",
    "text": "il faut ajouter d'autres vecteurs à cette famille pour obtenir une base de \\(E\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((x_1, \\ldots, x_p, y_1, \\ldots, y_q)\\) est une base de \\(E\\)",
  "id": "dimension-finie-18",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Soient \\(F\\) et \\(G\\) deux sous-espaces supplémentaires d'un espace vectoriel \\(E\\) de dimension finie, avec \\(\\dim(F) = 3\\) et \\(\\dim(G) = 5\\). Quelle est la dimension de \\(E\\) ?",
  "ans": 8,
  "ansText": "8",
  "tol": 0.01,
  "id": "dimension-finie-19",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Soient \\(F\\) et \\(G\\) deux sous-espaces vectoriels quelconques de \\(E\\), avec \\(\\dim(F) = 4\\), \\(\\dim(G) = 3\\) et \\(\\dim(F \\cap G) = 2\\). En utilisant \\(\\dim(F+G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)\\), calculez \\(\\dim(F+G)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "dimension-finie-20",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Soit \\(E = \\{0_E\\}\\) l'espace vectoriel réduit au vecteur nul. Quelle est la dimension de \\(E\\) ?",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "dimension-finie-21",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Le rang d'une famille \\((x_1, \\ldots, x_n)\\) de \\(E\\), noté \\(\\mathrm{rg}(x_1, \\ldots, x_n)\\), est défini comme :",
  "opts": [
   {
    "key": "a",
    "text": "le nombre \\(n\\) de vecteurs de la famille"
   },
   {
    "key": "b",
    "text": "la dimension de \\(\\mathrm{Vect}(x_1, \\ldots, x_n)\\)"
   },
   {
    "key": "c",
    "text": "la dimension de \\(E\\)"
   },
   {
    "key": "d",
    "text": "toujours égal à \\(\\dim(E) - n\\)"
   }
  ],
  "ans": "b",
  "ansText": "la dimension de \\(\\mathrm{Vect}(x_1, \\ldots, x_n)\\)",
  "id": "dimension-finie-22",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 2.7, pour une famille \\((x_1, \\ldots, x_n)\\) de vecteurs de \\(E\\), on a toujours :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(x_1, \\ldots, x_n) = n\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(x_1, \\ldots, x_n) \\leq n\\), avec égalité si et seulement si la famille est libre"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{rg}(x_1, \\ldots, x_n) \\geq n\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(x_1, \\ldots, x_n) = \\dim(E)\\) quel que soit \\(n\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\mathrm{rg}(x_1, \\ldots, x_n) \\leq n\\), avec égalité si et seulement si la famille est libre",
  "id": "dimension-finie-23",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Dans \\(\\mathbb{R}^n\\), on note \\(e_1\\) le premier vecteur de la base canonique et on considère la famille \\((e_1, 2e_1, 3e_1, 4e_1)\\), composée de \\(4\\) vecteurs colinéaires. Quel est son rang ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "dimension-finie-24",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soit \\(E\\) muni d'une base \\((x_1, \\ldots, x_n)\\) et \\(F\\) un espace vectoriel. D'après la Proposition 2.8, pour toute famille \\((y_1, \\ldots, y_n)\\) de vecteurs de \\(F\\), il existe :",
  "opts": [
   {
    "key": "a",
    "text": "plusieurs applications linéaires \\(f\\) telles que \\(f(x_k) = y_k\\) pour tout \\(k\\)"
   },
   {
    "key": "b",
    "text": "une unique application linéaire \\(f \\in \\mathcal{L}(E, F)\\) telle que \\(f(x_k) = y_k\\) pour tout \\(k\\)"
   },
   {
    "key": "c",
    "text": "au plus une application (pas nécessairement linéaire) telle que \\(f(x_k) = y_k\\)"
   },
   {
    "key": "d",
    "text": "aucune application linéaire vérifiant cette propriété en général"
   }
  ],
  "ans": "b",
  "ansText": "une unique application linéaire \\(f \\in \\mathcal{L}(E, F)\\) telle que \\(f(x_k) = y_k\\) pour tout \\(k\\)",
  "id": "dimension-finie-25",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f \\in \\mathcal{L}(E, E')\\) avec \\(E\\) de dimension finie muni d'une base \\((e_1, \\ldots, e_n)\\). D'après la Proposition 2.9, \\(f\\) est \\textbf{injective} si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une famille génératrice de \\(E'\\)"
   },
   {
    "key": "b",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une famille libre de \\(E'\\)"
   },
   {
    "key": "c",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une base de \\(E'\\)"
   },
   {
    "key": "d",
    "text": "\\(f(e_k) = 0\\) pour au moins un indice \\(k\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\((f(e_1), \\ldots, f(e_n))\\) est une famille libre de \\(E'\\)",
  "id": "dimension-finie-26",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Avec les mêmes notations, \\(f\\) est \\textbf{bijective} si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une famille libre de \\(E'\\)"
   },
   {
    "key": "b",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une famille génératrice de \\(E'\\)"
   },
   {
    "key": "c",
    "text": "\\((f(e_1), \\ldots, f(e_n))\\) est une base de \\(E'\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dim(E') > \\dim(E)\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\((f(e_1), \\ldots, f(e_n))\\) est une base de \\(E'\\)",
  "id": "dimension-finie-27",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Deux espaces vectoriels \\(E\\) et \\(E'\\) de dimensions finies sont isomorphes si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dim(E) = \\dim(E')\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dim(E) < \\dim(E')\\)"
   },
   {
    "key": "c",
    "text": "\\(E\\) et \\(E'\\) ont la même base canonique"
   },
   {
    "key": "d",
    "text": "\\(\\dim(E) + \\dim(E')\\) est pair"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dim(E) = \\dim(E')\\)",
  "id": "dimension-finie-28",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Le rang d'une application linéaire \\(f \\in \\mathcal{L}(E, E')\\), noté \\(\\mathrm{rg}(f)\\), est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(f) = \\dim(\\mathrm{Ker}(f))\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(f) = \\dim(\\mathrm{Im}(f))\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{rg}(f) = \\dim(E) - \\dim(E')\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(f) = \\dim(E)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\mathrm{rg}(f) = \\dim(\\mathrm{Im}(f))\\)",
  "id": "dimension-finie-29",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Soit \\(f \\in \\mathcal{L}(E, E')\\) avec \\(\\dim(E) = 7\\) et \\(\\dim(\\mathrm{Ker}(f)) = 3\\). D'après le théorème du rang, quelle est la valeur de \\(\\mathrm{rg}(f)\\) ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "dimension-finie-30",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Si \\(\\dim(E) = \\dim(E')\\) et \\(f \\in \\mathcal{L}(E, E')\\), d'après la Proposition 2.11, il y a équivalence entre les propriétés suivantes :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) injective, \\(f\\) surjective, \\(f\\) bijective"
   },
   {
    "key": "b",
    "text": "\\(f\\) injective et \\(f\\) nulle"
   },
   {
    "key": "c",
    "text": "\\(f\\) surjective implique que \\(f\\) n'est pas injective"
   },
   {
    "key": "d",
    "text": "aucune de ces propriétés n'est liée aux autres"
   }
  ],
  "ans": "a",
  "ansText": "\\(f\\) injective, \\(f\\) surjective, \\(f\\) bijective",
  "id": "dimension-finie-31",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Est-il vrai que pour toute application linéaire \\(f\\) et toute base \\((e_1, \\ldots, e_n)\\) de \\(E\\), la famille \\((f(e_1), \\ldots, f(e_n))\\) est toujours une base de \\(\\mathrm{Im}(f)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, c'est toujours vrai par définition de l'image"
   },
   {
    "key": "b",
    "text": "Non, cette famille engendre \\(\\mathrm{Im}(f)\\) mais n'est pas nécessairement libre (par exemple si \\(f = 0\\))"
   },
   {
    "key": "c",
    "text": "Oui, car une base d'un espace se transforme toujours en une base de l'image"
   },
   {
    "key": "d",
    "text": "Non, car cette famille n'engendre même pas \\(\\mathrm{Im}(f)\\)"
   }
  ],
  "ans": "b",
  "ansText": "Non, cette famille engendre \\(\\mathrm{Im}(f)\\) mais n'est pas nécessairement libre (par exemple si \\(f = 0\\))",
  "id": "dimension-finie-32",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "On considère \\(f : \\mathbb{R}^2 \\to \\mathbb{R}^2\\) définie sur la base canonique \\((e_1, e_2)\\) par \\(f(e_1) = 0\\) et \\(f(e_2) = e_1\\). On a alors \\(\\mathrm{Ker}(f) = \\mathrm{Im}(f) = \\mathrm{Vect}(e_1)\\). \\(\\mathrm{Ker}(f)\\) et \\(\\mathrm{Im}(f)\\) sont-ils des sous-espaces supplémentaires de \\(\\mathbb{R}^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, car \\(\\dim(\\mathrm{Ker}(f)) + \\dim(\\mathrm{Im}(f)) = 2\\)"
   },
   {
    "key": "b",
    "text": "Non, car leur intersection vaut \\(\\mathrm{Vect}(e_1)\\), qui n'est pas réduite à \\(\\{0\\}\\)"
   },
   {
    "key": "c",
    "text": "Oui, car toute application linéaire vérifie cette propriété"
   },
   {
    "key": "d",
    "text": "Non, car \\(f\\) n'est pas linéaire"
   }
  ],
  "ans": "b",
  "ansText": "Non, car leur intersection vaut \\(\\mathrm{Vect}(e_1)\\), qui n'est pas réduite à \\(\\{0\\}\\)",
  "id": "dimension-finie-33",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Dans un espace vectoriel \\(E\\) de dimension \\(n\\), une famille de \\textbf{plus de} \\(n\\) vecteurs est-elle nécessairement génératrice de \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toujours"
   },
   {
    "key": "b",
    "text": "Non : par exemple la famille \\((e_1, 2e_1, \\ldots, (n+1)e_1)\\) compte \\(n+1\\) vecteurs mais n'est pas génératrice"
   },
   {
    "key": "c",
    "text": "Oui, car une telle famille est nécessairement libre"
   },
   {
    "key": "d",
    "text": "Non, une famille de plus de \\(n\\) vecteurs ne peut jamais être génératrice"
   }
  ],
  "ans": "b",
  "ansText": "Non : par exemple la famille \\((e_1, 2e_1, \\ldots, (n+1)e_1)\\) compte \\(n+1\\) vecteurs mais n'est pas génératrice",
  "id": "dimension-finie-34",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Un hyperplan d'un espace vectoriel \\(E\\) de dimension finie \\(n \\geq 2\\) est un sous-espace vectoriel de \\(E\\) de dimension :",
  "opts": [
   {
    "key": "a",
    "text": "\\(n\\)"
   },
   {
    "key": "b",
    "text": "\\(n - 1\\)"
   },
   {
    "key": "c",
    "text": "\\(1\\)"
   },
   {
    "key": "d",
    "text": "\\(n + 1\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(n - 1\\)",
  "id": "dimension-finie-35",
  "cat": "dimension-finie"
 },
 {
  "type": "num",
  "q": "Quelle est la dimension d'un hyperplan de \\(\\mathbb{R}^6\\) ?",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "dimension-finie-36",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soit \\(H\\) un hyperplan de \\(E\\) et \\(a \\in E\\) tel que \\(a \\notin H\\). D'après la Proposition 2.12 :",
  "opts": [
   {
    "key": "a",
    "text": "\\(H \\oplus \\mathrm{Vect}(a) = E\\), c'est-à-dire que \\(\\mathrm{Vect}(a)\\) est un supplémentaire de \\(H\\) dans \\(E\\)"
   },
   {
    "key": "b",
    "text": "\\(H \\subset \\mathrm{Vect}(a)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Vect}(a) \\subset H\\)"
   },
   {
    "key": "d",
    "text": "\\(H \\cap \\mathrm{Vect}(a)\\) contient un vecteur non nul"
   }
  ],
  "ans": "a",
  "ansText": "\\(H \\oplus \\mathrm{Vect}(a) = E\\), c'est-à-dire que \\(\\mathrm{Vect}(a)\\) est un supplémentaire de \\(H\\) dans \\(E\\)",
  "id": "dimension-finie-37",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Soit \\(H\\) un sous-espace vectoriel de \\(E\\) (dimension finie \\(n \\geq 2\\)). D'après la Proposition 2.13, \\(H\\) est un hyperplan de \\(E\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(H\\) est le noyau d'une forme linéaire non nulle sur \\(E\\)"
   },
   {
    "key": "b",
    "text": "\\(H\\) contient le vecteur nul"
   },
   {
    "key": "c",
    "text": "\\(H\\) est de dimension \\(1\\)"
   },
   {
    "key": "d",
    "text": "\\(H\\) est un sous-espace vectoriel quelconque de \\(E\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(H\\) est le noyau d'une forme linéaire non nulle sur \\(E\\)",
  "id": "dimension-finie-38",
  "cat": "dimension-finie"
 },
 {
  "type": "qcm",
  "q": "Une matrice \\(A\\) de type \\((n, p)\\) à coefficients dans \\(K\\) est un tableau organisé en :",
  "opts": [
   {
    "key": "a",
    "text": "\\(n\\) lignes et \\(p\\) colonnes"
   },
   {
    "key": "b",
    "text": "\\(p\\) lignes et \\(n\\) colonnes"
   },
   {
    "key": "c",
    "text": "\\(n\\) lignes et \\(n\\) colonnes"
   },
   {
    "key": "d",
    "text": "\\(n \\times p\\) lignes et une seule colonne"
   }
  ],
  "ans": "a",
  "ansText": "\\(n\\) lignes et \\(p\\) colonnes",
  "id": "matrices-01",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A\\) une matrice de type \\((n, p)\\). Le \\(i\\)-ème vecteur ligne \\(L_i = (a_{i1}, \\ldots, a_{ip})\\) de \\(A\\) est un élément de :",
  "opts": [
   {
    "key": "a",
    "text": "\\(K^p\\)"
   },
   {
    "key": "b",
    "text": "\\(K^n\\)"
   },
   {
    "key": "c",
    "text": "\\(K^{np}\\)"
   },
   {
    "key": "d",
    "text": "\\(K^{n+p}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(K^p\\)",
  "id": "matrices-02",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A\\) une matrice de type \\((n, p)\\). Le \\(j\\)-ème vecteur colonne \\(C_j = (a_{1j}, \\ldots, a_{nj})\\) de \\(A\\) est un élément de :",
  "opts": [
   {
    "key": "a",
    "text": "\\(K^n\\)"
   },
   {
    "key": "b",
    "text": "\\(K^p\\)"
   },
   {
    "key": "c",
    "text": "\\(K^{np}\\)"
   },
   {
    "key": "d",
    "text": "\\(K^{n-p}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(K^n\\)",
  "id": "matrices-03",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Une matrice carrée \\(A\\) d'ordre \\(n\\) est dite \\textbf{diagonale} si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i \\neq j\\)"
   },
   {
    "key": "b",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i > j\\)"
   },
   {
    "key": "c",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i < j\\)"
   },
   {
    "key": "d",
    "text": "\\(a_{ii} = 0\\) pour tout \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(a_{ij} = 0\\) pour tout \\(i \\neq j\\)",
  "id": "matrices-04",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Une matrice carrée \\(A\\) d'ordre \\(n\\) est dite \\textbf{triangulaire supérieure} si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i > j\\)"
   },
   {
    "key": "b",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i < j\\)"
   },
   {
    "key": "c",
    "text": "\\(a_{ij} = 0\\) pour tout \\(i \\neq j\\)"
   },
   {
    "key": "d",
    "text": "\\(a_{ii} = 1\\) pour tout \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(a_{ij} = 0\\) pour tout \\(i > j\\)",
  "id": "matrices-05",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "L'espace vectoriel \\(\\mathcal{M}_{n,p}(K)\\) des matrices de type \\((n,p)\\) est de dimension :",
  "opts": [
   {
    "key": "a",
    "text": "\\(n \\times p\\)"
   },
   {
    "key": "b",
    "text": "\\(n + p\\)"
   },
   {
    "key": "c",
    "text": "\\(\\max(n,p)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\min(n,p)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(n \\times p\\)",
  "id": "matrices-06",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Quelle est la dimension de l'espace vectoriel \\(\\mathcal{M}_{3,2}(\\mathbb{R})\\), c'est-à-dire le nombre d'éléments de sa base canonique \\((E_{ij})\\) ?",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "matrices-07",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(A \\in \\mathcal{M}_{m,n}(K)\\) et \\(B \\in \\mathcal{M}_{n,p}(K)\\). Le produit matriciel \\(AB\\) est bien défini et appartient à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathcal{M}_{m,p}(K)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathcal{M}_{n,p}(K)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathcal{M}_{m,n}(K)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathcal{M}_{p,m}(K)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathcal{M}_{m,p}(K)\\)",
  "id": "matrices-08",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Pour des matrices \\(A, B, C\\) de tailles compatibles, quelle égalité est toujours vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((AB)C = A(BC)\\)"
   },
   {
    "key": "b",
    "text": "\\(AB = BA\\)"
   },
   {
    "key": "c",
    "text": "\\((AB)^{-1} = A^{-1}B^{-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(AB = 0 \\implies A = 0 \\text{ ou } B = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((AB)C = A(BC)\\)",
  "id": "matrices-09",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Concernant le produit matriciel dans \\(\\mathcal{M}_n(\\mathbb{R})\\) avec \\(n \\geq 2\\), laquelle des affirmations suivantes est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "Il n'est pas commutatif en général"
   },
   {
    "key": "b",
    "text": "Il est toujours commutatif"
   },
   {
    "key": "c",
    "text": "\\(AB = 0\\) implique toujours \\(A = 0\\) ou \\(B = 0\\)"
   },
   {
    "key": "d",
    "text": "Le produit de deux matrices non nulles est toujours inversible"
   }
  ],
  "ans": "a",
  "ansText": "Il n'est pas commutatif en général",
  "id": "matrices-10",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(A\\) inversible dans \\(\\mathcal{M}_n(\\mathbb{R})\\) et \\(B \\in \\mathcal{M}_n(\\mathbb{R})\\) telle que \\(AB = 0\\). Alors nécessairement :",
  "opts": [
   {
    "key": "a",
    "text": "\\(B = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(A = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(B\\) est inversible"
   },
   {
    "key": "d",
    "text": "\\(\\det(B) \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(B = 0\\)",
  "id": "matrices-11",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(A, B \\in \\mathcal{M}_{m,n}(K)\\) et \\(\\lambda \\in K\\). Que vaut \\((\\lambda A + B)^T\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda A^T + B^T\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda A^T - B^T\\)"
   },
   {
    "key": "c",
    "text": "\\(\\lambda(A^T B^T)\\)"
   },
   {
    "key": "d",
    "text": "\\((\\lambda A B)^T\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lambda A^T + B^T\\)",
  "id": "matrices-12",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(A \\in \\mathcal{M}_{m,n}(K)\\) et \\(C \\in \\mathcal{M}_{n,p}(K)\\). Que vaut \\((AC)^T\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(C^T A^T\\)"
   },
   {
    "key": "b",
    "text": "\\(A^T C^T\\)"
   },
   {
    "key": "c",
    "text": "\\(CA\\)"
   },
   {
    "key": "d",
    "text": "\\((AC)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(C^T A^T\\)",
  "id": "matrices-13",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Une matrice carrée \\(A\\) telle que \\(A^T = A\\) est dite :",
  "opts": [
   {
    "key": "a",
    "text": "symétrique"
   },
   {
    "key": "b",
    "text": "anti-symétrique"
   },
   {
    "key": "c",
    "text": "diagonale"
   },
   {
    "key": "d",
    "text": "triangulaire"
   }
  ],
  "ans": "a",
  "ansText": "symétrique",
  "id": "matrices-14",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Une matrice carrée \\(A\\) telle que \\(A^T = -A\\) est dite :",
  "opts": [
   {
    "key": "a",
    "text": "anti-symétrique"
   },
   {
    "key": "b",
    "text": "symétrique"
   },
   {
    "key": "c",
    "text": "diagonale"
   },
   {
    "key": "d",
    "text": "identité"
   }
  ],
  "ans": "a",
  "ansText": "anti-symétrique",
  "id": "matrices-15",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Soit \\(A\\) une matrice de type \\((n,p)\\) avec \\(n = 4\\) et \\(p = 7\\). D'après la propriété \\(\\mathrm{rg}(A) \\le \\inf(n,p)\\), quelle est la valeur maximale possible du rang de \\(A\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "matrices-16",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Le rang d'une matrice \\(A \\in \\mathcal{M}_{n,p}(K)\\) est défini comme :",
  "opts": [
   {
    "key": "a",
    "text": "le rang de la famille des vecteurs colonnes de \\(A\\)"
   },
   {
    "key": "b",
    "text": "le déterminant de \\(A\\)"
   },
   {
    "key": "c",
    "text": "le nombre total de coefficients non nuls de \\(A\\)"
   },
   {
    "key": "d",
    "text": "le nombre de lignes de \\(A\\)"
   }
  ],
  "ans": "a",
  "ansText": "le rang de la famille des vecteurs colonnes de \\(A\\)",
  "id": "matrices-17",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Pour toute matrice \\(A \\in \\mathcal{M}_{n,p}(K)\\), on a toujours :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(A) \\le \\min(n,p)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(A) = n\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{rg}(A) = p\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(A) = n \\times p\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{rg}(A) \\le \\min(n,p)\\)",
  "id": "matrices-18",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Le rang d'une matrice \\(A\\) et celui de sa transposée \\(A^T\\) vérifient :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(A^T) = \\mathrm{rg}(A)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(A^T) = n - \\mathrm{rg}(A)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{rg}(A^T) \\neq \\mathrm{rg}(A)\\) en général"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(A^T) = 1/\\mathrm{rg}(A)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{rg}(A^T) = \\mathrm{rg}(A)\\)",
  "id": "matrices-19",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Une matrice carrée \\(A \\in \\mathcal{M}_n(K)\\) est inversible si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(A) = n\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(A) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{rg}(A) < n\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(A) = n - 1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{rg}(A) = n\\)",
  "id": "matrices-20",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "On considère la matrice échelonnée \\[A = \\begin{pmatrix} 0 & 4 & 3 & 2 \\\\ 0 & 0 & -2 & 1 \\\\ 0 & 0 & 0 & 8 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}.\\] Quel est son rang (nombre de lignes non nulles) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "matrices-21",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "On considère la matrice échelonnée réduite \\[B = \\begin{pmatrix} 1 & 4 & -3 & 5 \\\\ 0 & 1 & -2 & 7 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}.\\] Quel est son rang ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "matrices-22",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "En effectuant des opérations élémentaires sur les lignes de \\[C = \\begin{pmatrix} 2 & 4 & -3 & 5 \\\\ 4 & 1 & -2 & 7 \\\\ 6 & 2 & 4 & 1 \\\\ 8 & -5 & -2 & 1 \\end{pmatrix},\\] on obtient deux dernières lignes indépendantes. Quel est le rang de \\(C\\) ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "matrices-23",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Quel est le rang de la matrice triangulaire inférieure \\[A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 8 & 5 & 0 \\\\ -12 & 3 & 14 \\end{pmatrix} ?\\]",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "matrices-24",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Quel est le rang de la matrice \\[B = \\begin{pmatrix} 1 & 2 & 1 \\\\ 1 & 1 & 3 \\\\ 1 & 1 & 3 \\end{pmatrix} ?\\] (on remarquera que deux lignes sont identiques)",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "matrices-25",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(A, B \\in \\mathcal{M}_n(K)\\). Laquelle des relations suivantes est toujours vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\det(AB) = \\det(A)\\det(B)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\det(A+B) = \\det(A) + \\det(B)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\det(AB) = \\det(A) + \\det(B)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\det(A+B) = \\det(A)\\det(B)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\det(AB) = \\det(A)\\det(B)\\)",
  "id": "matrices-26",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Si \\(A \\in \\mathcal{M}_n(K)\\) est inversible, alors \\(\\det(A^{-1})\\) vaut :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{1}{\\det(A)}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\det(A)\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\det(A)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\det(A)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{1}{\\det(A)}\\)",
  "id": "matrices-27",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "L'échange de deux colonnes d'une matrice carrée a pour effet sur son déterminant de :",
  "opts": [
   {
    "key": "a",
    "text": "changer son signe"
   },
   {
    "key": "b",
    "text": "le multiplier par 2"
   },
   {
    "key": "c",
    "text": "le laisser inchangé"
   },
   {
    "key": "d",
    "text": "l'annuler systématiquement"
   }
  ],
  "ans": "a",
  "ansText": "changer son signe",
  "id": "matrices-28",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Ajouter à une colonne d'une matrice une combinaison linéaire des autres colonnes a pour effet sur le déterminant de :",
  "opts": [
   {
    "key": "a",
    "text": "ne rien changer"
   },
   {
    "key": "b",
    "text": "changer son signe"
   },
   {
    "key": "c",
    "text": "le multiplier par le coefficient de la combinaison"
   },
   {
    "key": "d",
    "text": "l'annuler systématiquement"
   }
  ],
  "ans": "a",
  "ansText": "ne rien changer",
  "id": "matrices-29",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u \\in \\mathcal{L}(E)\\) un endomorphisme d'un espace vectoriel \\(E\\) de dimension finie \\(n\\), et soit \\(\\lambda \\in K\\). Que vaut \\(\\det(\\lambda u)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda^n \\det(u)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda \\det(u)\\)"
   },
   {
    "key": "c",
    "text": "\\(n\\lambda \\det(u)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\det(u)\\), indépendamment de \\(\\lambda\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lambda^n \\det(u)\\)",
  "id": "matrices-30",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A = (a_{ij}) \\in \\mathcal{M}_n(K)\\). On appelle mineur \\(\\Delta_{ij}\\) de \\(A\\) :",
  "opts": [
   {
    "key": "a",
    "text": "le déterminant de la matrice obtenue en supprimant la \\(i\\)-ème ligne et la \\(j\\)-ème colonne de \\(A\\)"
   },
   {
    "key": "b",
    "text": "le coefficient \\(a_{ij}\\) lui-même"
   },
   {
    "key": "c",
    "text": "le déterminant de \\(A\\) tout entier"
   },
   {
    "key": "d",
    "text": "la somme des éléments de la \\(i\\)-ème ligne de \\(A\\)"
   }
  ],
  "ans": "a",
  "ansText": "le déterminant de la matrice obtenue en supprimant la \\(i\\)-ème ligne et la \\(j\\)-ème colonne de \\(A\\)",
  "id": "matrices-31",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Si \\(A \\in \\mathcal{M}_n(K)\\) est inversible, son inverse s'exprime à l'aide de la comatrice par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(A^{-1} = \\dfrac{1}{\\det(A)} \\mathrm{Com}(A)^T\\)"
   },
   {
    "key": "b",
    "text": "\\(A^{-1} = \\det(A) \\, \\mathrm{Com}(A)\\)"
   },
   {
    "key": "c",
    "text": "\\(A^{-1} = \\mathrm{Com}(A)^T\\)"
   },
   {
    "key": "d",
    "text": "\\(A^{-1} = \\dfrac{1}{\\det(A)} \\mathrm{Com}(A)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(A^{-1} = \\dfrac{1}{\\det(A)} \\mathrm{Com}(A)^T\\)",
  "id": "matrices-32",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Effectuer l'opération élémentaire \\(L_i \\leftarrow L_i + \\lambda L_j\\) sur les lignes d'une matrice \\(A\\) revient, matriciellement, à :",
  "opts": [
   {
    "key": "a",
    "text": "pré-multiplier \\(A\\) par la matrice élémentaire correspondante"
   },
   {
    "key": "b",
    "text": "post-multiplier \\(A\\) par la matrice élémentaire correspondante"
   },
   {
    "key": "c",
    "text": "transposer la matrice \\(A\\)"
   },
   {
    "key": "d",
    "text": "remplacer \\(A\\) par son inverse"
   }
  ],
  "ans": "a",
  "ansText": "pré-multiplier \\(A\\) par la matrice élémentaire correspondante",
  "id": "matrices-33",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Soient \\(B\\) et \\(B'\\) deux bases d'un espace vectoriel \\(E\\) de dimension finie \\(n\\), \\(P\\) la matrice de passage de \\(B\\) vers \\(B'\\), et \\(A\\), \\(A'\\) les matrices d'un endomorphisme \\(u\\) respectivement dans \\(B\\) et dans \\(B'\\). Alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(A' = P^{-1} A P\\)"
   },
   {
    "key": "b",
    "text": "\\(A' = P A P^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(A' = PA\\)"
   },
   {
    "key": "d",
    "text": "\\(A' = P^{-1} A\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(A' = P^{-1} A P\\)",
  "id": "matrices-34",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer le déterminant \\[\\det\\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}.\\]",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "matrices-35",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer le déterminant \\[\\det\\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}.\\]",
  "ans": 10,
  "ansText": "10",
  "tol": 0.01,
  "id": "matrices-36",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "À l'aide de la règle de Sarrus, calculer \\[\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}.\\]",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "matrices-37",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "La matrice \\[A = \\begin{pmatrix} 2 & 3 & -1 \\\\ 0 & -4 & 5 \\\\ 0 & 0 & 3 \\end{pmatrix}\\] est triangulaire supérieure. Calculer \\(\\det(A)\\) en utilisant le produit des éléments diagonaux.",
  "ans": -24,
  "ansText": "-24",
  "tol": 0.01,
  "id": "matrices-38",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer le déterminant de la matrice diagonale \\[D = \\begin{pmatrix} 2 & 0 & 0 & 0 \\\\ 0 & -3 & 0 & 0 \\\\ 0 & 0 & 5 & 0 \\\\ 0 & 0 & 0 & 4 \\end{pmatrix}.\\]",
  "ans": -120,
  "ansText": "-120",
  "tol": 0.01,
  "id": "matrices-39",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "On considère la matrice \\[A = \\begin{pmatrix} 3 & 1 & -2 & 4 \\\\ 0 & 0 & 5 & 1 \\\\ 0 & 2 & 0 & 0 \\\\ 3 & 6 & 0 & 1 \\end{pmatrix}.\\] Calculer sa trace \\(\\mathrm{tr}(A)\\), c'est-à-dire la somme de ses coefficients diagonaux.",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "matrices-40",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Pour la matrice \\[A = \\begin{pmatrix} 3 & 1 & -2 & 4 \\\\ 0 & 0 & 5 & 1 \\\\ 0 & 2 & 0 & 0 \\\\ 3 & 6 & 0 & 1 \\end{pmatrix},\\] on effectue \\(L_4 \\leftarrow L_4 - L_1\\) puis on développe selon la première colonne : \\(\\det(A) = 3 \\times (-2) \\times (5 \\times (-3) - 1 \\times 2)\\). Calculer \\(\\det(A)\\).",
  "ans": 102,
  "ansText": "102",
  "tol": 0.01,
  "id": "matrices-41",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Pour la matrice \\[A = \\begin{pmatrix} 3 & 1 & -2 & 4 \\\\ 0 & 0 & 5 & 1 \\\\ 0 & 2 & 0 & 0 \\\\ 3 & 6 & 0 & 1 \\end{pmatrix},\\] le cofacteur \\(A_{11}\\) est le déterminant de la matrice obtenue en supprimant la 1ère ligne et la 1ère colonne, affecté du signe \\((-1)^{1+1}\\). Calculer \\(A_{11}\\).",
  "ans": 10,
  "ansText": "10",
  "tol": 0.01,
  "id": "matrices-42",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Pour la même matrice \\(A\\) que précédemment, calculer le cofacteur \\(A_{13} = (-1)^{1+3}\\Delta_{13}\\), où \\(\\Delta_{13}\\) est le mineur obtenu en supprimant la 1ère ligne et la 3ème colonne.",
  "ans": -6,
  "ansText": "-6",
  "tol": 0.01,
  "id": "matrices-43",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Toujours pour la même matrice \\(A\\), calculer le cofacteur \\(A_{14} = (-1)^{1+4}\\Delta_{14}\\), où \\(\\Delta_{14}\\) est le mineur obtenu en supprimant la 1ère ligne et la 4ème colonne.",
  "ans": 30,
  "ansText": "30",
  "tol": 0.01,
  "id": "matrices-44",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer, à l'aide de la règle de Sarrus, le déterminant \\[\\det\\begin{pmatrix} 0 & 1 & 2 \\\\ 2 & 2 & 3 \\\\ 4 & 0 & 1 \\end{pmatrix}.\\]",
  "ans": -6,
  "ansText": "-6",
  "tol": 0.01,
  "id": "matrices-45",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "On a établi que \\[\\begin{pmatrix} 0 & 1 & 2 \\\\ 2 & 2 & 3 \\\\ 4 & 0 & 1 \\end{pmatrix}^{-1} = \\begin{pmatrix} -1/3 & 1/6 & 1/6 \\\\ -5/3 & 4/3 & -2/3 \\\\ 4/3 & -2/3 & 1/3 \\end{pmatrix}.\\] Quelle est la valeur du coefficient en position \\((1,1)\\) de cette matrice inverse ?",
  "ans": -0.3333,
  "ansText": "-1/3",
  "tol": 0.01,
  "id": "matrices-46",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Soient \\[A = \\begin{pmatrix} 1 & 3 & 0 \\\\ 0 & -2 & -1 \\end{pmatrix} \\text{ et } B = \\begin{pmatrix} 5 & -1 & -3 \\\\ 1 & 1 & 4 \\\\ -2 & 3 & 2 \\end{pmatrix}.\\] Calculer le coefficient en position \\((1,1)\\) de la matrice produit \\(AB\\).",
  "ans": 8,
  "ansText": "8",
  "tol": 0.01,
  "id": "matrices-47",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Avec les mêmes matrices \\[A = \\begin{pmatrix} 1 & 3 & 0 \\\\ 0 & -2 & -1 \\end{pmatrix} \\text{ et } B = \\begin{pmatrix} 5 & -1 & -3 \\\\ 1 & 1 & 4 \\\\ -2 & 3 & 2 \\end{pmatrix},\\] calculer le coefficient en position \\((2,2)\\) de la matrice produit \\(AB\\).",
  "ans": -5,
  "ansText": "-5",
  "tol": 0.01,
  "id": "matrices-48",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Soient \\[A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\text{ et } B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.\\] Calculer le coefficient en position \\((2,1)\\) de la matrice produit \\(AB\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "matrices-49",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Soient \\[C = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix} \\text{ et } D = \\begin{pmatrix} 1 & 0 \\\\ 2 & -1 \\end{pmatrix}.\\] Calculer \\(\\det(CD)\\) en utilisant la multiplicativité du déterminant (ou en calculant directement \\(CD\\)).",
  "ans": -11,
  "ansText": "-11",
  "tol": 0.01,
  "id": "matrices-50",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer, à l'aide de la règle de Sarrus, le déterminant \\[\\det\\begin{pmatrix} 1 & 2 & -1 \\\\ 2 & 1 & -1 \\\\ -1 & 2 & 1 \\end{pmatrix}.\\]",
  "ans": -4,
  "ansText": "-4",
  "tol": 0.01,
  "id": "matrices-51",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Calculer le déterminant \\[\\det\\begin{pmatrix} 3 & 0 & 0 & 1 \\\\ 1 & 1 & 1 & 3 \\\\ 3 & 1 & 1 & 1 \\\\ 0 & 2 & 1 & 3 \\end{pmatrix}\\] en développant selon la première ligne.",
  "ans": -8,
  "ansText": "-8",
  "tol": 0.01,
  "id": "matrices-52",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Soit \\(D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}\\) une matrice diagonale. Sachant que \\(D^p\\) est la matrice diagonale des puissances \\(p\\)-ièmes des coefficients diagonaux, quel est le coefficient en position \\((2,2)\\) de \\(D^4\\) ?",
  "ans": 81,
  "ansText": "81",
  "tol": 0.01,
  "id": "matrices-53",
  "cat": "matrices"
 },
 {
  "type": "num",
  "q": "Dans \\(E = \\mathbb{R}^2\\), on considère les bases \\(B = (e_1, e_2) = ((1,1),(-1,1))\\) et \\(B' = (e_1', e_2') = ((1,0),(3,1))\\). La matrice de passage de \\(B\\) vers \\(B'\\) est \\[P_{B,B'} = \\begin{pmatrix} 0.5 & 2 \\\\ -0.5 & -1 \\end{pmatrix}.\\] Quelle est la valeur du coefficient en position \\((2,2)\\) de \\(P_{B,B'}\\) ?",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "matrices-54",
  "cat": "matrices"
 },
 {
  "type": "qcm",
  "q": "Dans un système linéaire écrit sous forme matricielle \\(Ax = b\\), que représente le vecteur \\(b\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le second membre du système"
   },
   {
    "key": "b",
    "text": "Le vecteur des inconnues du système"
   },
   {
    "key": "c",
    "text": "Les coefficients du système"
   },
   {
    "key": "d",
    "text": "Le rang du système"
   }
  ],
  "ans": "a",
  "ansText": "Le second membre du système",
  "id": "systemes-lineaires-01",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Pour un système linéaire \\(S\\) de matrice associée \\(A\\), le rang du système \\(S\\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "Le rang de la matrice \\(A\\)"
   },
   {
    "key": "b",
    "text": "Le nombre d'inconnues du système"
   },
   {
    "key": "c",
    "text": "Le déterminant de la matrice \\(A\\)"
   },
   {
    "key": "d",
    "text": "Le nombre d'équations du système"
   }
  ],
  "ans": "a",
  "ansText": "Le rang de la matrice \\(A\\)",
  "id": "systemes-lineaires-02",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Un système linéaire \\(Ax = b\\) est dit homogène lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "\\(b = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(A\\) est inversible"
   },
   {
    "key": "c",
    "text": "le nombre d'équations est égal au nombre d'inconnues"
   },
   {
    "key": "d",
    "text": "\\(b \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(b = 0\\)",
  "id": "systemes-lineaires-03",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Si \\(u\\) est l'application linéaire associée à la matrice \\(A\\), l'ensemble des solutions du système homogène \\(Ax = 0\\) est exactement :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{Ker}(u)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{Im}(u)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\{0\\}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{R}^n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{Ker}(u)\\)",
  "id": "systemes-lineaires-04",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Si \\(x_0\\) est une solution particulière du système \\(S : Ax = b\\), l'ensemble des solutions de \\(S\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\{x_0 + K \\mid K \\in \\mathrm{Ker}(u)\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\{x_0\\}\\) uniquement"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Ker}(u)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\{K - x_0 \\mid K \\in \\mathrm{Im}(u)\\}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\{x_0 + K \\mid K \\in \\mathrm{Ker}(u)\\}\\)",
  "id": "systemes-lineaires-05",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de Rouché-Fontené, un système \\(S : Ax = b\\) (à \\(n\\) inconnues) admet une solution si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{rg}(A) = \\mathrm{rg}(A \\mid b)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(A) = n\\)"
   },
   {
    "key": "c",
    "text": "\\(\\det(A) \\neq 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(A) < \\mathrm{rg}(A \\mid b)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{rg}(A) = \\mathrm{rg}(A \\mid b)\\)",
  "id": "systemes-lineaires-06",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Toujours d'après le théorème de Rouché-Fontené, lorsque le système \\(S : Ax = b\\) à \\(n\\) inconnues admet des solutions, celles-ci forment un sous-espace affine de dimension :",
  "opts": [
   {
    "key": "a",
    "text": "\\(n - \\mathrm{rg}(A)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{rg}(A)\\)"
   },
   {
    "key": "c",
    "text": "\\(n + \\mathrm{rg}(A)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{rg}(A) - n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(n - \\mathrm{rg}(A)\\)",
  "id": "systemes-lineaires-07",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "On appelle système de Cramer tout système :",
  "opts": [
   {
    "key": "a",
    "text": "De \\(n\\) équations à \\(n\\) inconnues, de rang \\(n\\)"
   },
   {
    "key": "b",
    "text": "De \\(n\\) équations à \\(p\\) inconnues avec \\(p > n\\)"
   },
   {
    "key": "c",
    "text": "Homogène uniquement"
   },
   {
    "key": "d",
    "text": "Dont le second membre \\(b\\) est nul"
   }
  ],
  "ans": "a",
  "ansText": "De \\(n\\) équations à \\(n\\) inconnues, de rang \\(n\\)",
  "id": "systemes-lineaires-08",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Pour un système de Cramer \\(S : Ax = b\\) (avec \\(A\\) inversible), l'unique solution du système est donnée par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x = A^{-1}b\\)"
   },
   {
    "key": "b",
    "text": "\\(x = Ab\\)"
   },
   {
    "key": "c",
    "text": "\\(x = A^{T}b\\)"
   },
   {
    "key": "d",
    "text": "\\(x = b\\,A^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x = A^{-1}b\\)",
  "id": "systemes-lineaires-09",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Dans la formule de Cramer \\(x_k = \\dfrac{\\det(A_k)}{\\det(A)}\\), la matrice \\(A_k\\) est obtenue en :",
  "opts": [
   {
    "key": "a",
    "text": "Remplaçant la \\(k\\)-ème colonne de \\(A\\) par le vecteur \\(b\\)"
   },
   {
    "key": "b",
    "text": "Remplaçant la \\(k\\)-ème ligne de \\(A\\) par le vecteur \\(b\\)"
   },
   {
    "key": "c",
    "text": "Supprimant la \\(k\\)-ème colonne de \\(A\\)"
   },
   {
    "key": "d",
    "text": "Transposant la matrice \\(A\\)"
   }
  ],
  "ans": "a",
  "ansText": "Remplaçant la \\(k\\)-ème colonne de \\(A\\) par le vecteur \\(b\\)",
  "id": "systemes-lineaires-10",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "On considère le système de Cramer \\(S : \\begin{cases} 2x_1 + 3x_2 = 2 \\\\ x_1 - 5x_2 = 1 \\end{cases}\\), de matrice associée \\(A = \\begin{pmatrix} 2 & 3 \\\\ 1 & -5 \\end{pmatrix}\\). Calculer \\(\\det(A)\\).",
  "ans": -13,
  "ansText": "-13",
  "tol": 0.01,
  "id": "systemes-lineaires-11",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le système \\(S : \\begin{cases} 2x_1 + 3x_2 = 2 \\\\ x_1 - 5x_2 = 1 \\end{cases}\\), donner la valeur de \\(x_1\\) obtenue à l'aide des formules de Cramer.",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "systemes-lineaires-12",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x_1 + 3x_2 = 2 \\\\ x_1 - 5x_2 = 1 \\end{cases}\\), donner la valeur de \\(x_2\\).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "systemes-lineaires-13",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "On considère le système triangulaire \\(S : \\begin{cases} 2x_1 + 3x_2 - x_3 = 7 \\\\ -2x_2 + 3x_3 = -1 \\\\ 7x_3 = -7 \\end{cases}\\). En résolvant \\\"de bas en haut\\\", donner la valeur de \\(x_3\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "systemes-lineaires-14",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x_1 + 3x_2 - x_3 = 7 \\\\ -2x_2 + 3x_3 = -1 \\\\ 7x_3 = -7 \\end{cases}\\), donner la valeur de \\(x_2\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "systemes-lineaires-15",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x_1 + 3x_2 - x_3 = 7 \\\\ -2x_2 + 3x_3 = -1 \\\\ 7x_3 = -7 \\end{cases}\\), donner la valeur de \\(x_1\\).",
  "ans": 4.5,
  "ansText": "4.5",
  "tol": 0.01,
  "id": "systemes-lineaires-16",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "La méthode du pivot de Gauss consiste à :",
  "opts": [
   {
    "key": "a",
    "text": "Effectuer des opérations élémentaires sur les lignes de \\(A\\) pour se ramener à une matrice triangulaire (échelonnée)"
   },
   {
    "key": "b",
    "text": "Calculer directement le déterminant de \\(A\\) puis en déduire les solutions"
   },
   {
    "key": "c",
    "text": "Diagonaliser la matrice \\(A\\)"
   },
   {
    "key": "d",
    "text": "Calculer \\(A^{-1}\\) à l'aide de la comatrice avant toute autre opération"
   }
  ],
  "ans": "a",
  "ansText": "Effectuer des opérations élémentaires sur les lignes de \\(A\\) pour se ramener à une matrice triangulaire (échelonnée)",
  "id": "systemes-lineaires-17",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Pour un système de \\(n\\) équations linéairement indépendantes à \\(p\\) inconnues, si \\(p > n\\) (plus d'inconnues que d'équations), le système admet :",
  "opts": [
   {
    "key": "a",
    "text": "Une infinité de solutions"
   },
   {
    "key": "b",
    "text": "Une solution unique"
   },
   {
    "key": "c",
    "text": "Aucune solution"
   },
   {
    "key": "d",
    "text": "Exactement \\(n\\) solutions"
   }
  ],
  "ans": "a",
  "ansText": "Une infinité de solutions",
  "id": "systemes-lineaires-18",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Pour un système de \\(n\\) équations linéairement indépendantes à \\(p\\) inconnues, si \\(p < n\\) (plus d'équations que d'inconnues), le système :",
  "opts": [
   {
    "key": "a",
    "text": "N'admet pas de solution (sauf cas particulier)"
   },
   {
    "key": "b",
    "text": "Admet toujours une solution"
   },
   {
    "key": "c",
    "text": "Admet une infinité de solutions"
   },
   {
    "key": "d",
    "text": "Est nécessairement un système de Cramer"
   }
  ],
  "ans": "a",
  "ansText": "N'admet pas de solution (sauf cas particulier)",
  "id": "systemes-lineaires-19",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "On applique le pivot de Gauss au système \\(S : \\begin{cases} 2x_1 - 4x_2 - 2x_3 = 8 \\\\ 5x_1 - 2x_2 + 3x_3 = -1 \\\\ -x_1 + 3x_2 + 7x_3 = -2 \\end{cases}\\). Donner la valeur de \\(x_3\\).",
  "ans": 0.925,
  "ansText": "0.925",
  "tol": 0.005,
  "id": "systemes-lineaires-20",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x_1 - 4x_2 - 2x_3 = 8 \\\\ 5x_1 - 2x_2 + 3x_3 = -1 \\\\ -x_1 + 3x_2 + 7x_3 = -2 \\end{cases}\\), donner la valeur de \\(x_2\\).",
  "ans": -3.55,
  "ansText": "-3.55",
  "tol": 0.005,
  "id": "systemes-lineaires-21",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x_1 - 4x_2 - 2x_3 = 8 \\\\ 5x_1 - 2x_2 + 3x_3 = -1 \\\\ -x_1 + 3x_2 + 7x_3 = -2 \\end{cases}\\), donner la valeur de \\(x_1\\).",
  "ans": -2.175,
  "ansText": "-2.175",
  "tol": 0.005,
  "id": "systemes-lineaires-22",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "On considère le système \\(S : \\begin{cases} x_1 - x_2 - 2x_3 = -1 \\\\ 3x_1 - 2x_2 + 3x_3 = 2 \\end{cases}\\) (2 équations, 3 inconnues, indépendantes). L'espace des solutions de \\(S\\) est de dimension :",
  "opts": [
   {
    "key": "a",
    "text": "1"
   },
   {
    "key": "b",
    "text": "0"
   },
   {
    "key": "c",
    "text": "2"
   },
   {
    "key": "d",
    "text": "3"
   }
  ],
  "ans": "a",
  "ansText": "1",
  "id": "systemes-lineaires-23",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "On considère le système \\(S : \\begin{cases} 2x - 3y = 4 \\\\ 3x + 7y = -1 \\end{cases}\\). \\(S\\) est-il un système de Cramer ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, car sa matrice associée est inversible"
   },
   {
    "key": "b",
    "text": "Non, car le second membre est nul"
   },
   {
    "key": "c",
    "text": "Non, car il n'est pas carré"
   },
   {
    "key": "d",
    "text": "Oui, mais seulement pour l'inconnue \\(x\\)"
   }
  ],
  "ans": "a",
  "ansText": "Oui, car sa matrice associée est inversible",
  "id": "systemes-lineaires-24",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Résoudre le système \\(S : \\begin{cases} 2x - 3y = 4 \\\\ 3x + 7y = -1 \\end{cases}\\) à l'aide des formules de Cramer et donner la valeur de \\(x\\) (arrondir si besoin).",
  "ans": 1.087,
  "ansText": "25/23 ≈ 1.087",
  "tol": 0.005,
  "id": "systemes-lineaires-25",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x - 3y = 4 \\\\ 3x + 7y = -1 \\end{cases}\\), donner la valeur de \\(y\\) (arrondir si besoin).",
  "ans": -0.609,
  "ansText": "-14/23 ≈ -0.609",
  "tol": 0.005,
  "id": "systemes-lineaires-26",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "On considère le système triangulaire \\(S : \\begin{cases} 2x - 3y + 6z - 3u = 2 \\\\ z + u = -5 \\\\ 4u = -8 \\\\ 7y - 3z + 2u = -1 \\end{cases}\\). En résolvant \\\"de bas en haut\\\", donner la valeur de \\(u\\).",
  "ans": -2,
  "ansText": "-2",
  "tol": 0.01,
  "id": "systemes-lineaires-27",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x - 3y + 6z - 3u = 2 \\\\ z + u = -5 \\\\ 4u = -8 \\\\ 7y - 3z + 2u = -1 \\end{cases}\\), donner la valeur de \\(z\\).",
  "ans": -3,
  "ansText": "-3",
  "tol": 0.01,
  "id": "systemes-lineaires-28",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} 2x - 3y + 6z - 3u = 2 \\\\ z + u = -5 \\\\ 4u = -8 \\\\ 7y - 3z + 2u = -1 \\end{cases}\\), donner la valeur de \\(y\\) (arrondir si besoin).",
  "ans": -0.857,
  "ansText": "-6/7 ≈ -0.857",
  "tol": 0.005,
  "id": "systemes-lineaires-29",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "On considère le système \\(S : \\begin{cases} x - 2y + 2z = 3 \\\\ 3x - 2z = -7 \\\\ -x + y + z = 6 \\end{cases}\\). Résoudre \\(S\\) et donner la valeur de \\(x\\).",
  "ans": 0.2,
  "ansText": "0.2",
  "tol": 0.01,
  "id": "systemes-lineaires-30",
  "cat": "systemes-lineaires"
 },
 {
  "type": "num",
  "q": "Pour le même système \\(S : \\begin{cases} x - 2y + 2z = 3 \\\\ 3x - 2z = -7 \\\\ -x + y + z = 6 \\end{cases}\\), donner la valeur de \\(z\\).",
  "ans": 3.8,
  "ansText": "3.8",
  "tol": 0.01,
  "id": "systemes-lineaires-31",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "On considère un système linéaire à 4 inconnues \\((x, y, z, u)\\) formé de seulement 3 équations linéairement indépendantes. Ce système peut-il être un système de Cramer ?",
  "opts": [
   {
    "key": "a",
    "text": "Non, car il faudrait autant d'équations que d'inconnues"
   },
   {
    "key": "b",
    "text": "Oui, dans tous les cas"
   },
   {
    "key": "c",
    "text": "Oui, à condition que \\(\\det(A) = 0\\)"
   },
   {
    "key": "d",
    "text": "Non, car le second membre \\(b\\) est nul"
   }
  ],
  "ans": "a",
  "ansText": "Non, car il faudrait autant d'équations que d'inconnues",
  "id": "systemes-lineaires-32",
  "cat": "systemes-lineaires"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un endomorphisme de \\(E\\). Un vecteur \\(x \\in E\\), \\(x \\neq 0\\), est un vecteur propre de \\(u\\) s'il existe \\(\\lambda \\in K\\) tel que :",
  "opts": [
   {
    "key": "a",
    "text": "\\(u(x) = \\lambda x\\)"
   },
   {
    "key": "b",
    "text": "\\(u(\\lambda x) = x\\)"
   },
   {
    "key": "c",
    "text": "\\(x = \\lambda u(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(u(x) = \\lambda + x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u(x) = \\lambda x\\)",
  "id": "reduction-01",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Un endomorphisme \\(u\\) d'un espace vectoriel \\(E\\) de dimension finie \\(n\\) est dit diagonalisable si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "il existe une base de \\(E\\) formée de vecteurs propres de \\(u\\)"
   },
   {
    "key": "b",
    "text": "toutes les valeurs propres de \\(u\\) sont nulles"
   },
   {
    "key": "c",
    "text": "\\(u\\) est bijectif"
   },
   {
    "key": "d",
    "text": "la représentation matricielle de \\(u\\) est toujours triangulaire"
   }
  ],
  "ans": "a",
  "ansText": "il existe une base de \\(E\\) formée de vecteurs propres de \\(u\\)",
  "id": "reduction-02",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Comment appelle-t-on l'ensemble des valeurs propres d'un endomorphisme \\(u\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "le spectre de \\(u\\), noté \\(\\mathrm{Spec}(u)\\)"
   },
   {
    "key": "b",
    "text": "le noyau de \\(u\\)"
   },
   {
    "key": "c",
    "text": "le rang de \\(u\\)"
   },
   {
    "key": "d",
    "text": "la trace de \\(u\\)"
   }
  ],
  "ans": "a",
  "ansText": "le spectre de \\(u\\), noté \\(\\mathrm{Spec}(u)\\)",
  "id": "reduction-03",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Le sous-espace propre associé à une valeur propre \\(\\lambda\\) d'un endomorphisme \\(u\\), noté \\(E_\\lambda(u)\\), est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(E_\\lambda(u) = \\mathrm{Ker}(u - \\lambda \\, \\mathrm{Id})\\)"
   },
   {
    "key": "b",
    "text": "\\(E_\\lambda(u) = \\mathrm{Im}(u - \\lambda \\, \\mathrm{Id})\\)"
   },
   {
    "key": "c",
    "text": "\\(E_\\lambda(u) = \\mathrm{Ker}(u) \\cap \\mathrm{Im}(u)\\)"
   },
   {
    "key": "d",
    "text": "\\(E_\\lambda(u) = \\mathrm{Ker}(u + \\lambda \\, \\mathrm{Id})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(E_\\lambda(u) = \\mathrm{Ker}(u - \\lambda \\, \\mathrm{Id})\\)",
  "id": "reduction-04",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Une valeur propre \\(\\lambda = 0\\) d'un endomorphisme \\(u\\) existe si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(u\\) n'est pas injectif"
   },
   {
    "key": "b",
    "text": "\\(u\\) est bijectif"
   },
   {
    "key": "c",
    "text": "\\(u\\) est l'application identité"
   },
   {
    "key": "d",
    "text": "\\(E\\) est de dimension 1"
   }
  ],
  "ans": "a",
  "ansText": "\\(u\\) n'est pas injectif",
  "id": "reduction-05",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Si \\(x\\) est un vecteur propre de \\(u\\) associé à la valeur propre \\(\\lambda\\), et \\(\\alpha \\in K\\), \\(\\alpha \\neq 0\\), que peut-on dire du vecteur \\(\\alpha x\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "c'est aussi un vecteur propre de \\(u\\) associé à la même valeur propre \\(\\lambda\\)"
   },
   {
    "key": "b",
    "text": "c'est un vecteur propre de \\(u\\) associé à la valeur propre \\(\\alpha \\lambda\\)"
   },
   {
    "key": "c",
    "text": "ce n'est pas nécessairement un vecteur propre de \\(u\\)"
   },
   {
    "key": "d",
    "text": "c'est un vecteur propre de \\(u\\) uniquement si \\(\\alpha = 1\\)"
   }
  ],
  "ans": "a",
  "ansText": "c'est aussi un vecteur propre de \\(u\\) associé à la même valeur propre \\(\\lambda\\)",
  "id": "reduction-06",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Le polynôme caractéristique d'un endomorphisme \\(u\\) d'un espace vectoriel \\(E\\) de dimension \\(n\\), noté \\(P_u(\\lambda) = \\det(u - \\lambda \\, \\mathrm{Id})\\), est de quel degré en \\(\\lambda\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(n\\)"
   },
   {
    "key": "b",
    "text": "\\(n-1\\)"
   },
   {
    "key": "c",
    "text": "\\(n+1\\)"
   },
   {
    "key": "d",
    "text": "\\(2n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(n\\)",
  "id": "reduction-07",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Concernant les deux écritures possibles du polynôme caractéristique, \\(\\det(u - \\lambda \\, \\mathrm{Id})\\) et \\(\\det(\\lambda \\, \\mathrm{Id} - u)\\), quelle affirmation est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\det(\\lambda \\, \\mathrm{Id} - u) = (-1)^n \\det(u - \\lambda \\, \\mathrm{Id})\\), et \\(\\det(\\lambda \\, \\mathrm{Id} - u)\\) est toujours unitaire (coefficient dominant égal à 1)"
   },
   {
    "key": "b",
    "text": "\\(\\det(\\lambda \\, \\mathrm{Id} - u) = \\det(u - \\lambda \\, \\mathrm{Id})\\) pour tout \\(n\\)"
   },
   {
    "key": "c",
    "text": "\\(\\det(\\lambda \\, \\mathrm{Id} - u) = (-1)^n \\det(u - \\lambda \\, \\mathrm{Id})\\), et c'est \\(\\det(u - \\lambda \\, \\mathrm{Id})\\) qui est toujours unitaire"
   },
   {
    "key": "d",
    "text": "les deux polynômes n'ont pas nécessairement les mêmes racines"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\det(\\lambda \\, \\mathrm{Id} - u) = (-1)^n \\det(u - \\lambda \\, \\mathrm{Id})\\), et \\(\\det(\\lambda \\, \\mathrm{Id} - u)\\) est toujours unitaire (coefficient dominant égal à 1)",
  "id": "reduction-08",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Si une matrice \\(A\\) est triangulaire (supérieure ou inférieure), comment obtient-on directement ses valeurs propres ?",
  "opts": [
   {
    "key": "a",
    "text": "ce sont exactement les coefficients diagonaux de \\(A\\)"
   },
   {
    "key": "b",
    "text": "ce sont les coefficients de la première ligne de \\(A\\)"
   },
   {
    "key": "c",
    "text": "il faut nécessairement calculer \\(\\det(A - \\lambda I)\\) par la méthode du pivot"
   },
   {
    "key": "d",
    "text": "une matrice triangulaire n'admet jamais de valeurs propres réelles"
   }
  ],
  "ans": "a",
  "ansText": "ce sont exactement les coefficients diagonaux de \\(A\\)",
  "id": "reduction-09",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A \\in M_n(K)\\) de valeurs propres \\(\\lambda_1, \\ldots, \\lambda_n\\) (comptées avec multiplicité). Laquelle de ces égalités est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{tr}(A) = \\sum_{i=1}^n \\lambda_i\\) et \\(\\det(A) = \\prod_{i=1}^n \\lambda_i\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{tr}(A) = \\prod_{i=1}^n \\lambda_i\\) et \\(\\det(A) = \\sum_{i=1}^n \\lambda_i\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{tr}(A) = \\det(A) = \\sum_{i=1}^n \\lambda_i\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{tr}(A) = n\\lambda_1\\) et \\(\\det(A) = \\lambda_1^n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{tr}(A) = \\sum_{i=1}^n \\lambda_i\\) et \\(\\det(A) = \\prod_{i=1}^n \\lambda_i\\)",
  "id": "reduction-10",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 1 & -1 \\\\ 3 & 5 \\end{pmatrix}\\). Son polynôme caractéristique est \\(P_A(\\lambda) = (\\lambda-2)(\\lambda-4)\\). Quelle est sa plus grande valeur propre ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "reduction-11",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 1 & -1 \\\\ 3 & 5 \\end{pmatrix}\\). Quelle est sa plus petite valeur propre ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "reduction-12",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}\\). Calculer \\(\\mathrm{tr}(A)\\), la somme des deux valeurs propres de \\(A\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "reduction-13",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}\\). Calculer \\(\\det(A)\\), le produit des deux valeurs propres de \\(A\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "reduction-14",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}\\). En utilisant \\(\\lambda_1 + \\lambda_2 = \\mathrm{tr}(A)\\) et \\(\\lambda_1 \\lambda_2 = \\det(A)\\), déterminer la plus grande valeur propre de \\(A\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "reduction-15",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 2 & -1 \\\\ 0 & 2 \\end{pmatrix}\\). Quelle est l'unique valeur propre de \\(A\\) (comptée avec sa multiplicité) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "reduction-16",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 2 & -1 \\\\ 0 & 2 \\end{pmatrix}\\), de valeur propre \\(\\lambda = 2\\) de multiplicité 2. Quelle est la dimension du sous-espace propre \\(E_2(A)\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "reduction-17",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}\\). Calculer sa plus grande valeur propre (on pourra utiliser \\(\\mathrm{tr}(A)\\) et \\(\\det(A)\\)).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "reduction-18",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & -2 & 5 \\\\ 0 & 0 & 4 \\end{pmatrix}\\). Quelle est sa plus grande valeur propre ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "reduction-19",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un endomorphisme admettant des valeurs propres \\(\\lambda_1, \\ldots, \\lambda_r\\) deux à deux distinctes. Que peut-on affirmer sur la famille de sous-espaces propres \\(\\{E_{\\lambda_i}(u)\\}_{i=1}^r\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "ils sont en somme directe"
   },
   {
    "key": "b",
    "text": "ils sont deux à deux orthogonaux"
   },
   {
    "key": "c",
    "text": "leur intersection est toujours de dimension 1"
   },
   {
    "key": "d",
    "text": "leur réunion est toujours égale à \\(E\\)"
   }
  ],
  "ans": "a",
  "ansText": "ils sont en somme directe",
  "id": "reduction-20",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de caractérisation de la diagonalisabilité, un endomorphisme \\(u\\) d'un espace vectoriel \\(E\\) de dimension \\(n\\) est diagonalisable si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(E\\) est la somme directe de ses sous-espaces propres"
   },
   {
    "key": "b",
    "text": "\\(u\\) est bijectif"
   },
   {
    "key": "c",
    "text": "toutes les valeurs propres de \\(u\\) sont distinctes"
   },
   {
    "key": "d",
    "text": "le polynôme caractéristique de \\(u\\) est de degré pair"
   }
  ],
  "ans": "a",
  "ansText": "\\(E\\) est la somme directe de ses sous-espaces propres",
  "id": "reduction-21",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un endomorphisme admettant \\(r \\le n\\) valeurs propres distinctes \\(\\lambda_1, \\ldots, \\lambda_r\\), de multiplicités \\(m(\\lambda_1), \\ldots, m(\\lambda_r)\\). Lequel des critères suivants caractérise la diagonalisabilité de \\(u\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dim(E_{\\lambda_k}(u)) = m(\\lambda_k)\\) pour tout \\(k \\in \\{1, \\ldots, r\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(m(\\lambda_k) = 1\\) pour tout \\(k\\)"
   },
   {
    "key": "c",
    "text": "\\(r = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dim(E_{\\lambda_k}(u)) < m(\\lambda_k)\\) pour au moins un \\(k\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dim(E_{\\lambda_k}(u)) = m(\\lambda_k)\\) pour tout \\(k \\in \\{1, \\ldots, r\\}\\)",
  "id": "reduction-22",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Si le polynôme caractéristique d'une matrice \\(A \\in M_n(R)\\) est scindé sur \\(R\\) et possède toutes ses racines simples, alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(A\\) est diagonalisable dans \\(M_n(R)\\), mais cette condition n'est pas nécessaire à la diagonalisabilité"
   },
   {
    "key": "b",
    "text": "\\(A\\) n'est jamais diagonalisable"
   },
   {
    "key": "c",
    "text": "cette condition est nécessaire et suffisante pour que \\(A\\) soit diagonalisable"
   },
   {
    "key": "d",
    "text": "\\(A\\) admet nécessairement une unique valeur propre"
   }
  ],
  "ans": "a",
  "ansText": "\\(A\\) est diagonalisable dans \\(M_n(R)\\), mais cette condition n'est pas nécessaire à la diagonalisabilité",
  "id": "reduction-23",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un endomorphisme d'un espace vectoriel \\(E\\) de dimension \\(n\\), \\(\\lambda\\) une valeur propre de multiplicité \\(m(\\lambda)\\) et \\(E_\\lambda(u)\\) le sous-espace propre associé. Quelle inégalité est toujours vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dim(E_\\lambda(u)) \\le m(\\lambda)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dim(E_\\lambda(u)) \\ge m(\\lambda)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dim(E_\\lambda(u)) = m(\\lambda)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dim(E_\\lambda(u)) = n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dim(E_\\lambda(u)) \\le m(\\lambda)\\)",
  "id": "reduction-24",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Dans la diagonalisation \\(A' = P^{-1} A P\\) d'une matrice diagonalisable \\(A\\), comment est construite la matrice de passage \\(P\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "les vecteurs propres de \\(A\\) sont placés en colonnes de \\(P\\)"
   },
   {
    "key": "b",
    "text": "les valeurs propres de \\(A\\) sont placées en colonnes de \\(P\\)"
   },
   {
    "key": "c",
    "text": "\\(P\\) est toujours la matrice identité"
   },
   {
    "key": "d",
    "text": "les vecteurs propres de \\(A\\) sont placés en lignes de \\(P\\)"
   }
  ],
  "ans": "a",
  "ansText": "les vecteurs propres de \\(A\\) sont placés en colonnes de \\(P\\)",
  "id": "reduction-25",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 1 & -1 \\\\ 3 & 5 \\end{pmatrix}\\), de valeurs propres \\(\\lambda_1 = 2\\) et \\(\\lambda_2 = 4\\). Le vecteur propre associé à \\(\\lambda_1 = 2\\) est \\((-1, 1)\\) et celui associé à \\(\\lambda_2 = 4\\) est \\((-1, 3)\\). En notant \\(P = \\begin{pmatrix} -1 & -1 \\\\ 1 & 3 \\end{pmatrix}\\) la matrice de passage, calculer \\(\\det(P)\\).",
  "ans": -2,
  "ansText": "-2",
  "tol": 0.01,
  "id": "reduction-26",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 0 & 3 & 2 \\\\ -2 & 5 & 2 \\\\ 2 & -3 & 0 \\end{pmatrix}\\), de polynôme caractéristique \\(P_A(\\lambda) = -(\\lambda-2)^2(\\lambda-1)\\). Quelle est la valeur propre de multiplicité 2 ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "reduction-27",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 0 & 3 & 2 \\\\ -2 & 5 & 2 \\\\ 2 & -3 & 0 \\end{pmatrix}\\), de valeurs propres \\(\\lambda_1 = 1\\) (multiplicité 1) et \\(\\lambda_2 = 2\\) (multiplicité 2). Sachant que \\(A\\) est diagonalisable, quelle est la dimension du sous-espace propre \\(E_{\\lambda_2}(A)\\) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "reduction-28",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(A = \\begin{pmatrix} 0 & 3 & 2 \\\\ -2 & 5 & 2 \\\\ 2 & -3 & 0 \\end{pmatrix}\\), de valeurs propres \\(1, 2, 2\\) (comptées avec multiplicité). Calculer \\(\\mathrm{tr}(A)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "reduction-29",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A = \\begin{pmatrix} 0 & 3 & 2 \\\\ -2 & 5 & 2 \\\\ 2 & -3 & 0 \\end{pmatrix}\\). Pourquoi peut-on affirmer que \\(A\\) est diagonalisable bien qu'elle admette une valeur propre multiple ?",
  "opts": [
   {
    "key": "a",
    "text": "parce que pour chaque valeur propre, la dimension du sous-espace propre est égale à sa multiplicité"
   },
   {
    "key": "b",
    "text": "parce que \\(A\\) est une matrice triangulaire"
   },
   {
    "key": "c",
    "text": "parce que le polynôme caractéristique de \\(A\\) n'a que des racines complexes"
   },
   {
    "key": "d",
    "text": "parce que \\(\\mathrm{tr}(A) = \\det(A)\\)"
   }
  ],
  "ans": "a",
  "ansText": "parce que pour chaque valeur propre, la dimension du sous-espace propre est égale à sa multiplicité",
  "id": "reduction-30",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Concernant la matrice de rotation \\(R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\\), laquelle des affirmations suivantes est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "ses valeurs propres complexes sont \\(e^{i\\theta}\\) et \\(e^{-i\\theta}\\), et \\(R(\\theta)\\) est diagonalisable dans \\(R\\) si et seulement si \\(\\theta \\equiv 0\\ [\\pi]\\)"
   },
   {
    "key": "b",
    "text": "ses valeurs propres sont toujours réelles, quelle que soit la valeur de \\(\\theta\\)"
   },
   {
    "key": "c",
    "text": "\\(R(\\theta)\\) n'est jamais diagonalisable, ni dans \\(R\\), ni dans \\(C\\)"
   },
   {
    "key": "d",
    "text": "\\(R(\\theta)\\) est diagonalisable dans \\(R\\) pour toute valeur de \\(\\theta\\)"
   }
  ],
  "ans": "a",
  "ansText": "ses valeurs propres complexes sont \\(e^{i\\theta}\\) et \\(e^{-i\\theta}\\), et \\(R(\\theta)\\) est diagonalisable dans \\(R\\) si et seulement si \\(\\theta \\equiv 0\\ [\\pi]\\)",
  "id": "reduction-31",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Parmi les affirmations suivantes, laquelle est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "un automorphisme d'espace vectoriel n'admet que des valeurs propres non nulles"
   },
   {
    "key": "b",
    "text": "tout endomorphisme est diagonalisable"
   },
   {
    "key": "c",
    "text": "un endomorphisme injectif admet nécessairement 0 comme valeur propre"
   },
   {
    "key": "d",
    "text": "toutes les matrices triangulaires sont non diagonalisables"
   }
  ],
  "ans": "a",
  "ansText": "un automorphisme d'espace vectoriel n'admet que des valeurs propres non nulles",
  "id": "reduction-32",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Parmi les affirmations suivantes, laquelle est fausse ?",
  "opts": [
   {
    "key": "a",
    "text": "les racines du polynôme caractéristique sont exactement les valeurs propres de l'endomorphisme étudié"
   },
   {
    "key": "b",
    "text": "un endomorphisme non injectif admet 0 comme valeur propre"
   },
   {
    "key": "c",
    "text": "il existe des matrices triangulaires diagonalisables"
   },
   {
    "key": "d",
    "text": "tout automorphisme d'espace vectoriel est diagonalisable"
   }
  ],
  "ans": "d",
  "ansText": "tout automorphisme d'espace vectoriel est diagonalisable",
  "id": "reduction-33",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A = \\begin{pmatrix} 1 & 2 & -2 \\\\ 2 & 1 & -2 \\\\ 2 & 2 & -3 \\end{pmatrix}\\), de polynôme caractéristique \\(P_A(\\lambda) = -(\\lambda-1)(\\lambda+1)^2\\). Quelles sont les valeurs propres de \\(A\\), avec leurs multiplicités ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda = 1\\) (multiplicité 1) et \\(\\lambda = -1\\) (multiplicité 2)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda = 1\\) (multiplicité 2) et \\(\\lambda = -1\\) (multiplicité 1)"
   },
   {
    "key": "c",
    "text": "\\(\\lambda = 1\\) et \\(\\lambda = -1\\), chacune de multiplicité 1"
   },
   {
    "key": "d",
    "text": "\\(\\lambda = -1\\) de multiplicité 3"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lambda = 1\\) (multiplicité 1) et \\(\\lambda = -1\\) (multiplicité 2)",
  "id": "reduction-34",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(B = \\begin{pmatrix} 0 & 3 & 3 \\\\ -1 & 8 & 6 \\\\ 2 & -14 & -10 \\end{pmatrix}\\), de valeurs propres \\(0, -1, -1\\). Calculer \\(\\mathrm{tr}(B)\\) et vérifier la cohérence avec la somme des valeurs propres.",
  "ans": -2,
  "ansText": "-2",
  "tol": 0.01,
  "id": "reduction-35",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(B = \\begin{pmatrix} 0 & 3 & 3 \\\\ -1 & 8 & 6 \\\\ 2 & -14 & -10 \\end{pmatrix}\\), de polynôme caractéristique \\(P_B(\\lambda) = -\\lambda(\\lambda+1)^2\\). En résolvant \\((B+I_3)x=0\\), on trouve que le sous-espace propre associé à \\(\\lambda=-1\\) est de dimension 1. Que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(B\\) n'est pas diagonalisable, car \\(\\dim(E_{-1}(B)) = 1 < m(-1) = 2\\)"
   },
   {
    "key": "b",
    "text": "\\(B\\) est diagonalisable, car \\(\\dim(E_{-1}(B)) \\ge 1\\)"
   },
   {
    "key": "c",
    "text": "\\(B\\) est diagonalisable, car ses valeurs propres sont entières"
   },
   {
    "key": "d",
    "text": "on ne peut rien conclure sans calculer \\(E_0(B)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(B\\) n'est pas diagonalisable, car \\(\\dim(E_{-1}(B)) = 1 < m(-1) = 2\\)",
  "id": "reduction-36",
  "cat": "reduction"
 },
 {
  "type": "num",
  "q": "Soit \\(C = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}\\), de polynôme caractéristique \\(P_C(\\lambda) = -(\\lambda-1)^2(\\lambda+1)\\). En résolvant \\((C - I_3)x = 0\\), on ne trouve qu'un seul vecteur propre indépendant pour \\(\\lambda = 1\\). Quelle est la dimension du sous-espace propre \\(E_1(C)\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "reduction-37",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "La matrice \\(C = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}\\), de valeur propre \\(\\lambda = 1\\) de multiplicité 2, est-elle diagonalisable dans \\(R\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "non, car \\(\\dim(E_1(C)) = 1 < m(1) = 2\\)"
   },
   {
    "key": "b",
    "text": "oui, car son polynôme caractéristique est scindé sur \\(R\\)"
   },
   {
    "key": "c",
    "text": "oui, car \\(C\\) admet une valeur propre négative"
   },
   {
    "key": "d",
    "text": "non, car \\(C\\) n'a pas de valeurs propres réelles"
   }
  ],
  "ans": "a",
  "ansText": "non, car \\(\\dim(E_1(C)) = 1 < m(1) = 2\\)",
  "id": "reduction-38",
  "cat": "reduction"
 },
 {
  "type": "qcm",
  "q": "Soit \\(\\varphi : E \\times E \\to K\\) une application. Que signifie « \\(\\varphi\\) est bilinéaire » ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi\\) est linéaire par rapport à chacun de ses deux arguments séparément"
   },
   {
    "key": "b",
    "text": "\\(\\varphi\\) est linéaire uniquement par rapport au premier argument"
   },
   {
    "key": "c",
    "text": "\\(\\varphi\\) est une application continue de \\(E \\times E\\) dans \\(K\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varphi\\) vérifie \\(\\varphi(x,y) = \\varphi(y,x)\\) pour tous \\(x,y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi\\) est linéaire par rapport à chacun de ses deux arguments séparément",
  "id": "formes-quadratiques-01",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Laquelle des applications suivantes, définies sur \\(\\mathbb{R}^3 \\times \\mathbb{R}^3\\), est une forme bilinéaire ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi(x,y) = 3x_1y_1 - 2x_2y_3 + 5x_3y_1\\)"
   },
   {
    "key": "b",
    "text": "\\(\\varphi(x,y) = 3x_1^2y_2 - x_2y_1\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi(x,y) = 3x_1 - x_2y_1 + 5x_3y_3\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varphi(x,y) = x_1y_1 + x_2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi(x,y) = 3x_1y_1 - 2x_2y_3 + 5x_3y_1\\)",
  "id": "formes-quadratiques-02",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Une forme bilinéaire \\(\\varphi\\) sur \\(E\\) est dite symétrique lorsque...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi(x,y) = \\varphi(y,x)\\) pour tous \\(x,y \\in E\\)"
   },
   {
    "key": "b",
    "text": "\\(\\varphi(x,x) = 0\\) pour tout \\(x \\in E\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi(\\lambda x, y) = \\varphi(x, \\lambda y)\\) uniquement"
   },
   {
    "key": "d",
    "text": "sa matrice associée est diagonale"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi(x,y) = \\varphi(y,x)\\) pour tous \\(x,y \\in E\\)",
  "id": "formes-quadratiques-03",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Soit \\(\\varphi\\) une forme bilinéaire sur \\(E\\) muni d'une base \\((e_1,\\dots,e_n)\\), et \\(A\\) sa matrice associée, où \\(A_{ij} = \\varphi(e_i,e_j)\\). Comment s'exprime \\(\\varphi(x,y)\\) à l'aide de \\(A\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi(x,y) = x^T A y\\)"
   },
   {
    "key": "b",
    "text": "\\(\\varphi(x,y) = y^T A x^T\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi(x,y) = Ax \\cdot Ay\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varphi(x,y) = x^T A^{-1} y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi(x,y) = x^T A y\\)",
  "id": "formes-quadratiques-04",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "On considère la forme bilinéaire \\(\\varphi\\) sur \\(\\mathbb{R}^3\\) de matrice \\(A = \\begin{pmatrix}3 & -3 & 2\\\\ 6 & 0 & 0\\\\ -6 & 0 & 2\\end{pmatrix}\\), c'est-à-dire \\(\\varphi(x,y) = x^TAy\\). Calculer \\(\\varphi(x,y)\\) pour \\(x=(1,1,0)\\) et \\(y=(1,0,1)\\).",
  "ans": 11,
  "ansText": "11",
  "tol": 0.01,
  "id": "formes-quadratiques-05",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(\\varphi\\) la forme bilinéaire symétrique de matrice \\(A = \\begin{pmatrix}3 & 2 & -3\\\\ 2 & 5 & 0\\\\ -3 & 0 & 2\\end{pmatrix}\\). Calculer \\(\\varphi(x,y)\\) pour \\(x=(1,-1,0)\\) et \\(y=(2,0,-1)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "formes-quadratiques-06",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Soit \\(\\varphi\\) une forme bilinéaire symétrique sur \\(E\\). La forme quadratique associée \\(q\\) est définie par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(q(x) = \\varphi(x,x)\\)"
   },
   {
    "key": "b",
    "text": "\\(q(x) = \\varphi(x,0)\\)"
   },
   {
    "key": "c",
    "text": "\\(q(x) = \\sqrt{\\varphi(x,x)}\\)"
   },
   {
    "key": "d",
    "text": "\\(q(x) = \\varphi(x,x)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(q(x) = \\varphi(x,x)\\)",
  "id": "formes-quadratiques-07",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Si \\(q\\) est une forme quadratique sur \\(E\\) et \\(\\lambda \\in \\mathbb{R}\\), que vaut \\(q(\\lambda x)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda q(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda^2 q(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(|\\lambda| q(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(q(x) + \\lambda\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\lambda^2 q(x)\\)",
  "id": "formes-quadratiques-08",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Laquelle des expressions suivantes correspond à une identité de polarisation reliant une forme quadratique \\(q\\) à sa forme polaire \\(\\varphi\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y) - q(x) - q(y)\\big)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y) + q(x) + q(y)\\big)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi(x,y) = q(x+y) - q(x) - q(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y) - q(x) + q(y)\\big)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y) - q(x) - q(y)\\big)\\)",
  "id": "formes-quadratiques-09",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Avec la matrice \\(A = \\begin{pmatrix}3 & 2 & -3\\\\ 2 & 5 & 0\\\\ -3 & 0 & 2\\end{pmatrix}\\), calculer la valeur de la forme quadratique \\(q(x) = x^TAx\\) en \\(x=(2,-1,1)\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "formes-quadratiques-10",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(q\\) la forme quadratique de matrice \\(\\begin{pmatrix}1 & 0\\\\ 0 & 2\\end{pmatrix}\\), de forme polaire \\(\\varphi\\). En utilisant l'identité de polarisation \\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y)-q(x)-q(y)\\big)\\), calculer \\(\\varphi(x,y)\\) pour \\(x=(1,1)\\) et \\(y=(2,-1)\\).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "formes-quadratiques-11",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(q\\) la forme quadratique de matrice \\(\\begin{pmatrix}2 & 1\\\\ 1 & 3\\end{pmatrix}\\). Calculer \\(\\varphi(x,y) = \\dfrac{1}{2}\\big(q(x+y)-q(x)-q(y)\\big)\\) pour \\(x=(1,2)\\) et \\(y=(1,-1)\\).",
  "ans": -3,
  "ansText": "-3",
  "tol": 0.01,
  "id": "formes-quadratiques-12",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Une forme quadratique \\(q\\) est dite définie positive lorsque...",
  "opts": [
   {
    "key": "a",
    "text": "\\(q(x) \\geq 0\\) pour tout \\(x \\in E\\)"
   },
   {
    "key": "b",
    "text": "\\(q(x) > 0\\) pour tout \\(x \\in E\\) non nul"
   },
   {
    "key": "c",
    "text": "\\(q(x) = 0\\) uniquement pour certains \\(x \\neq 0\\)"
   },
   {
    "key": "d",
    "text": "\\(q\\) est une application croissante"
   }
  ],
  "ans": "b",
  "ansText": "\\(q(x) > 0\\) pour tout \\(x \\in E\\) non nul",
  "id": "formes-quadratiques-13",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Quelle est la nature de la forme quadratique \\(q(x_1,x_2) = 4x_1^2 + 6x_1x_2 + 3x_2^2\\) (on écrit \\(q(x)=\\alpha x_1^2+2\\beta x_1x_2+\\gamma x_2^2\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "définie positive"
   },
   {
    "key": "b",
    "text": "définie négative"
   },
   {
    "key": "c",
    "text": "indéfinie"
   },
   {
    "key": "d",
    "text": "semi-définie positive, non définie"
   }
  ],
  "ans": "a",
  "ansText": "définie positive",
  "id": "formes-quadratiques-14",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Quelle est la nature de la forme quadratique \\(q(x_1,x_2) = x_1^2 + 4x_1x_2 + 4x_2^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "définie positive"
   },
   {
    "key": "b",
    "text": "indéfinie"
   },
   {
    "key": "c",
    "text": "semi-définie positive, non définie"
   },
   {
    "key": "d",
    "text": "définie négative"
   }
  ],
  "ans": "c",
  "ansText": "semi-définie positive, non définie",
  "id": "formes-quadratiques-15",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Quelle est la nature de la forme quadratique \\(q(x_1,x_2) = x_1^2 - 4x_1x_2 + 3x_2^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "définie positive"
   },
   {
    "key": "b",
    "text": "indéfinie"
   },
   {
    "key": "c",
    "text": "semi-définie négative"
   },
   {
    "key": "d",
    "text": "définie négative"
   }
  ],
  "ans": "b",
  "ansText": "indéfinie",
  "id": "formes-quadratiques-16",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer \\(q(2,1)\\) pour la forme quadratique \\(q(x_1,x_2) = x_1^2 - 4x_1x_2 + 3x_2^2\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "formes-quadratiques-17",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation des formes quadratiques par les valeurs propres de leur matrice \\(A\\), une forme quadratique \\(q\\) est définie positive si et seulement si...",
  "opts": [
   {
    "key": "a",
    "text": "toutes les valeurs propres de \\(A\\) sont strictement positives"
   },
   {
    "key": "b",
    "text": "toutes les valeurs propres de \\(A\\) sont positives ou nulles"
   },
   {
    "key": "c",
    "text": "la trace de \\(A\\) est positive"
   },
   {
    "key": "d",
    "text": "le déterminant de \\(A\\) est positif"
   }
  ],
  "ans": "a",
  "ansText": "toutes les valeurs propres de \\(A\\) sont strictement positives",
  "id": "formes-quadratiques-18",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "On considère la forme quadratique de matrice \\(A = \\begin{pmatrix}2 & 5 & -6\\\\ 5 & 6 & 3\\\\ -6 & 3 & -1\\end{pmatrix}\\), dont les valeurs propres sont deux positives et une négative. Quelle est sa nature ?",
  "opts": [
   {
    "key": "a",
    "text": "semi-définie positive"
   },
   {
    "key": "b",
    "text": "semi-définie négative"
   },
   {
    "key": "c",
    "text": "ni semi-définie positive ni semi-définie négative (indéfinie)"
   },
   {
    "key": "d",
    "text": "définie positive"
   }
  ],
  "ans": "c",
  "ansText": "ni semi-définie positive ni semi-définie négative (indéfinie)",
  "id": "formes-quadratiques-19",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer la valeur de la forme quadratique de matrice \\(A = \\begin{pmatrix}2 & 5 & -6\\\\ 5 & 6 & 3\\\\ -6 & 3 & -1\\end{pmatrix}\\) en \\(x=(1,1,1)\\).",
  "ans": 11,
  "ansText": "11",
  "tol": 0.01,
  "id": "formes-quadratiques-20",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer la valeur de la forme quadratique de matrice \\(B = \\begin{pmatrix}0 & 3 & 3\\\\ 3 & 2 & -1\\\\ 3 & -1 & -2\\end{pmatrix}\\) en \\(x=(1,0,1)\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "formes-quadratiques-21",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer la valeur de la forme quadratique de matrice \\(C = \\begin{pmatrix}0 & 1 & 1\\\\ 1 & 0 & 0\\\\ 1 & 0 & 1\\end{pmatrix}\\) en \\(x=(1,1,1)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "formes-quadratiques-22",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Un produit scalaire sur un espace vectoriel réel \\(E\\) est...",
  "opts": [
   {
    "key": "a",
    "text": "une forme bilinéaire, symétrique et définie positive"
   },
   {
    "key": "b",
    "text": "une forme bilinéaire quelconque"
   },
   {
    "key": "c",
    "text": "une forme linéaire positive"
   },
   {
    "key": "d",
    "text": "une forme quadratique définie positive"
   }
  ],
  "ans": "a",
  "ansText": "une forme bilinéaire, symétrique et définie positive",
  "id": "formes-quadratiques-23",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(\\varphi\\) le produit scalaire défini par \\(\\varphi(x,y) = x_1y_1 + 3x_1y_2 + 3x_2y_1 + 10x_2y_2\\). Calculer \\(\\varphi(x,x)\\) pour \\(x=(1,-1)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "formes-quadratiques-24",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "L'inégalité de Cauchy-Schwarz \\(|\\langle x,y\\rangle|^2 \\leq \\langle x,x\\rangle\\langle y,y\\rangle\\) devient une égalité lorsque...",
  "opts": [
   {
    "key": "a",
    "text": "\\(x\\) et \\(y\\) sont orthogonaux"
   },
   {
    "key": "b",
    "text": "\\(x\\) et \\(y\\) sont colinéaires"
   },
   {
    "key": "c",
    "text": "\\(x\\) et \\(y\\) ont la même norme"
   },
   {
    "key": "d",
    "text": "\\(x\\) et \\(y\\) forment une base orthonormée"
   }
  ],
  "ans": "b",
  "ansText": "\\(x\\) et \\(y\\) sont colinéaires",
  "id": "formes-quadratiques-25",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer le produit scalaire canonique \\(\\langle x,y\\rangle\\) pour \\(x=(1,2)\\) et \\(y=(3,-1)\\) dans \\(\\mathbb{R}^2\\).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "formes-quadratiques-26",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\cos\\theta\\), le cosinus de l'angle entre \\(x=(1,0)\\) et \\(y=(1,1)\\), pour le produit scalaire canonique de \\(\\mathbb{R}^2\\).",
  "ans": 0.7071,
  "ansText": "\\(\\sqrt{2}/2 \\approx 0.7071\\)",
  "tol": 0.01,
  "id": "formes-quadratiques-27",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Un espace euclidien est...",
  "opts": [
   {
    "key": "a",
    "text": "un espace vectoriel réel de dimension finie muni d'un produit scalaire"
   },
   {
    "key": "b",
    "text": "un espace vectoriel complexe muni d'une norme"
   },
   {
    "key": "c",
    "text": "un espace vectoriel de dimension infinie muni d'une métrique"
   },
   {
    "key": "d",
    "text": "un espace vectoriel muni d'une seule base orthonormée"
   }
  ],
  "ans": "a",
  "ansText": "un espace vectoriel réel de dimension finie muni d'un produit scalaire",
  "id": "formes-quadratiques-28",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer la norme euclidienne \\(\\|x\\|_2\\) du vecteur \\(x=(3,-4)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "formes-quadratiques-29",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer la norme \\(\\|x\\|_1 = \\sum_i |x_i|\\) du vecteur \\(x=(3,-4)\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "formes-quadratiques-30",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Laquelle des propriétés suivantes n'est PAS un axiome de norme ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(N(\\alpha x) = |\\alpha| N(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(N(x) = 0 \\iff x = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(N(x+x') \\leq N(x) + N(x')\\)"
   },
   {
    "key": "d",
    "text": "\\(N(x+y) = N(x) + N(y)\\) pour tous \\(x,y\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(N(x+y) = N(x) + N(y)\\) pour tous \\(x,y\\)",
  "id": "formes-quadratiques-31",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Soient \\(v, w\\) deux vecteurs d'un espace euclidien. Ils sont orthogonaux si et seulement si...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|v-w\\| = \\|v+w\\|\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|v-w\\| = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|v\\| = \\|w\\|\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|v+w\\| = \\|v\\| + \\|w\\|\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\|v-w\\| = \\|v+w\\|\\)",
  "id": "formes-quadratiques-32",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Le projeté orthogonal d'un vecteur \\(x\\) sur un vecteur \\(y\\) non nul est donné par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(p_y(x) = \\dfrac{\\langle x,y\\rangle}{\\|y\\|^2}\\, y\\)"
   },
   {
    "key": "b",
    "text": "\\(p_y(x) = \\dfrac{\\langle x,y\\rangle}{\\|x\\|^2}\\, y\\)"
   },
   {
    "key": "c",
    "text": "\\(p_y(x) = \\langle x,y\\rangle \\, x\\)"
   },
   {
    "key": "d",
    "text": "\\(p_y(x) = \\dfrac{\\|x\\|}{\\|y\\|}\\, y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p_y(x) = \\dfrac{\\langle x,y\\rangle}{\\|y\\|^2}\\, y\\)",
  "id": "formes-quadratiques-33",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Calculer le coefficient \\(\\lambda\\) de la projection orthogonale \\(p_y(x) = \\lambda y\\) de \\(x=(2,3)\\) sur \\(y=(1,1)\\).",
  "ans": 2.5,
  "ansText": "2.5",
  "tol": 0.01,
  "id": "formes-quadratiques-34",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "On munit \\(M_2(\\mathbb{R})\\) du produit scalaire de Frobenius \\(\\langle A,B\\rangle_F = \\sum_{i,j} a_{ij}b_{ij}\\). Calculer \\(\\langle A,B\\rangle_F\\) pour \\(A=\\begin{pmatrix}1 & 2\\\\ 3 & 4\\end{pmatrix}\\) et \\(B=\\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix}\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "formes-quadratiques-35",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Si \\(P\\) est la matrice de passage de la base \\(B\\) à la base \\(B'\\), et \\(S, S'\\) sont les matrices d'un produit scalaire dans ces bases respectives, alors...",
  "opts": [
   {
    "key": "a",
    "text": "\\(S' = P^T S P\\)"
   },
   {
    "key": "b",
    "text": "\\(S' = P S P^T\\)"
   },
   {
    "key": "c",
    "text": "\\(S' = P^{-1} S P\\)"
   },
   {
    "key": "d",
    "text": "\\(S' = P S P^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(S' = P^T S P\\)",
  "id": "formes-quadratiques-36",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Une base \\((e_i)_{i=1}^n\\) d'un espace euclidien est dite orthonormée lorsque...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle e_i, e_j\\rangle = \\delta_{ij}\\) pour tous \\(i,j\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle e_i, e_j\\rangle = 0\\) pour tous \\(i,j\\), sans condition sur les normes"
   },
   {
    "key": "c",
    "text": "tous les vecteurs \\(e_i\\) sont colinéaires"
   },
   {
    "key": "d",
    "text": "la matrice associée au produit scalaire dans cette base est nulle"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle e_i, e_j\\rangle = \\delta_{ij}\\) pour tous \\(i,j\\)",
  "id": "formes-quadratiques-37",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "On considère les matrices \\(A = \\begin{pmatrix}0 & -1 & 0\\\\ 1 & 0 & 0\\\\ 0 & 0 & -1\\end{pmatrix}\\), \\(B = \\begin{pmatrix}-1 & 2 & 0\\\\ 1 & 1 & -2\\\\ 1 & 1 & 2\\end{pmatrix}\\) et \\(C = \\begin{pmatrix}2 & -2 & 1\\\\ -1 & -1 & 1\\\\ 1 & 0 & 0\\end{pmatrix}\\). Pour lesquelles de ces matrices les colonnes forment-elles une famille orthogonale de \\(\\mathbb{R}^3\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(A\\) et \\(B\\) uniquement"
   },
   {
    "key": "b",
    "text": "\\(A\\) et \\(C\\) uniquement"
   },
   {
    "key": "c",
    "text": "\\(B\\) et \\(C\\) uniquement"
   },
   {
    "key": "d",
    "text": "\\(A\\), \\(B\\) et \\(C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(A\\) et \\(B\\) uniquement",
  "id": "formes-quadratiques-38",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(C = \\begin{pmatrix}2 & -2 & 1\\\\ -1 & -1 & 1\\\\ 1 & 0 & 0\\end{pmatrix}\\). En notant \\(C_2\\) et \\(C_3\\) ses deuxième et troisième colonnes, calculer \\(\\langle C_2, C_3\\rangle\\).",
  "ans": -3,
  "ansText": "-3",
  "tol": 0.01,
  "id": "formes-quadratiques-39",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "On applique le procédé de Gram-Schmidt à \\(e_1=(1,1,0)\\) et \\(e_2=(1,0,1)\\) munis du produit scalaire canonique. En posant \\(u_1=e_1\\) et \\(u_2 = e_2 - \\text{proj}_{u_1}(e_2)\\), calculer la première composante de \\(u_2\\).",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.01,
  "id": "formes-quadratiques-40",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Une matrice \\(P\\) est dite orthogonale lorsque \\(P^TP = I\\). Que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(P^{-1} = P^T\\)"
   },
   {
    "key": "b",
    "text": "\\(P^{-1} = P\\)"
   },
   {
    "key": "c",
    "text": "\\(\\det(P) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(P\\) n'est jamais inversible"
   }
  ],
  "ans": "a",
  "ansText": "\\(P^{-1} = P^T\\)",
  "id": "formes-quadratiques-41",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Parmi les affirmations suivantes concernant les espaces euclidiens, laquelle est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "Tout endomorphisme d'un espace euclidien est diagonalisable"
   },
   {
    "key": "b",
    "text": "De toute base d'un espace euclidien, on peut construire une base orthonormée"
   },
   {
    "key": "c",
    "text": "Toute matrice orthogonale a un déterminant nul"
   },
   {
    "key": "d",
    "text": "La matrice d'un produit scalaire est la même dans toutes les bases"
   }
  ],
  "ans": "b",
  "ansText": "De toute base d'un espace euclidien, on peut construire une base orthonormée",
  "id": "formes-quadratiques-42",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Soit \\(F\\) un sous-espace d'un espace euclidien \\(E\\). Laquelle des propositions suivantes est FAUSSE ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dim(E) = \\dim(F) + \\dim(F^\\perp)\\)"
   },
   {
    "key": "b",
    "text": "\\(E = F \\oplus F^\\perp\\)"
   },
   {
    "key": "c",
    "text": "\\((F^\\perp)^\\perp = F\\)"
   },
   {
    "key": "d",
    "text": "\\(F \\cap F^\\perp\\) contient des vecteurs non nuls"
   }
  ],
  "ans": "d",
  "ansText": "\\(F \\cap F^\\perp\\) contient des vecteurs non nuls",
  "id": "formes-quadratiques-43",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "Soit \\(F\\) un sous-espace d'un espace euclidien \\(E\\) tel que \\(\\dim(E)=7\\) et \\(\\dim(F)=4\\). Calculer \\(\\dim(F^\\perp)\\).",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "formes-quadratiques-44",
  "cat": "formes-quadratiques"
 },
 {
  "type": "num",
  "q": "On considère la droite vectorielle engendrée par \\(a=(-2,3,4)\\). Calculer le coefficient \\(\\lambda = \\dfrac{\\langle a,x\\rangle}{\\|a\\|^2}\\) de la projection orthogonale de \\(x=(-2,4,1)\\) sur cette droite.",
  "ans": 0.6897,
  "ansText": "\\(20/29 \\approx 0.6897\\)",
  "tol": 0.01,
  "id": "formes-quadratiques-45",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "Soit \\(F\\) un sous-espace de dimension \\(p<n\\) d'un espace euclidien \\(E\\), engendré par les colonnes d'une matrice \\(A\\). Le projeté orthogonal \\(p(x)\\) d'un vecteur \\(x\\) sur \\(F\\) est donné par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(p(x) = A(A^TA)^{-1}A^Tx\\)"
   },
   {
    "key": "b",
    "text": "\\(p(x) = A^{-1}x\\)"
   },
   {
    "key": "c",
    "text": "\\(p(x) = A^TAx\\)"
   },
   {
    "key": "d",
    "text": "\\(p(x) = (A^TA)x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p(x) = A(A^TA)^{-1}A^Tx\\)",
  "id": "formes-quadratiques-46",
  "cat": "formes-quadratiques"
 },
 {
  "type": "qcm",
  "q": "On considère la matrice de données \\(X \\in \\mathcal{M}_{n,p}(\\mathbb{R})\\), où \\(X = (x_1^{\\top}, \\dots, x_n^{\\top})\\). Que représentent respectivement les lignes et les colonnes de \\(X\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Les lignes sont les individus, les colonnes sont les variables"
   },
   {
    "key": "b",
    "text": "Les lignes sont les variables, les colonnes sont les individus"
   },
   {
    "key": "c",
    "text": "Les lignes sont les distances, les colonnes sont les corrélations"
   },
   {
    "key": "d",
    "text": "Les lignes et les colonnes représentent toutes les deux les individus"
   }
  ],
  "ans": "a",
  "ansText": "Les lignes sont les individus, les colonnes sont les variables",
  "id": "svd-01",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Dans le cours, la variance totale \\(V\\!ar_{tot}\\) d'un nuage de points (aussi appelée inertie totale) mesure principalement :",
  "opts": [
   {
    "key": "a",
    "text": "le nombre de variables corrélées entre elles"
   },
   {
    "key": "b",
    "text": "la dispersion des individus autour du barycentre du nuage"
   },
   {
    "key": "c",
    "text": "le rang de la matrice de données \\(X\\)"
   },
   {
    "key": "d",
    "text": "la moyenne arithmétique des variables"
   }
  ],
  "ans": "b",
  "ansText": "la dispersion des individus autour du barycentre du nuage",
  "id": "svd-02",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "On considère trois individus décrits par les points \\(x_1=(1,2)\\), \\(x_2=(3,4)\\) et \\(x_3=(5,0)\\) de \\(\\mathbb{R}^2\\). Quelle est la première coordonnée du barycentre \\(\\bar x = \\dfrac{1}{n}\\sum_{i=1}^n x_i\\) du nuage de points ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "svd-03",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Une distance \\(d\\) sur un ensemble \\(E\\) doit vérifier la symétrie, la séparation et l'inégalité triangulaire. Laquelle des propriétés suivantes n'est PAS exigée par la définition d'une distance donnée dans le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(d(x,x') = d(x',x)\\)"
   },
   {
    "key": "b",
    "text": "\\(d(x,x') = 0 \\iff x = x'\\)"
   },
   {
    "key": "c",
    "text": "\\(d(x,x'') \\le d(x,x') + d(x',x'')\\)"
   },
   {
    "key": "d",
    "text": "\\(d(\\lambda x, \\lambda x') = \\lambda\\, d(x,x')\\) pour tout \\(\\lambda \\in \\mathbb{R}\\) (linéarité)"
   }
  ],
  "ans": "d",
  "ansText": "\\(d(\\lambda x, \\lambda x') = \\lambda\\, d(x,x')\\) pour tout \\(\\lambda \\in \\mathbb{R}\\) (linéarité)",
  "id": "svd-04",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Calculer la distance euclidienne entre \\(x=(1,2,3)\\) et \\(x'=(4,6,3)\\), définie par \\(d(x,x')=\\sqrt{\\sum_{i=1}^n (x_i-x_i')^2}\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "svd-05",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Calculer la distance de Manhattan entre \\(x=(1,2,3)\\) et \\(x'=(4,6,3)\\), définie par \\(d(x,x')=\\sum_{i=1}^n |x_i-x_i'|\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "svd-06",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "En utilisant la distance de Minkowski \\(d(x,x') = \\left(\\sum_{i=1}^n |x_i-x_i'|^p\\right)^{1/p}\\) avec \\(p=3\\), calculer la distance entre \\(x=(1,0)\\) et \\(x'=(0,1)\\) (arrondir à \\(10^{-2}\\) près).",
  "ans": 1.2599,
  "ansText": "≈1.26 (= 2^{1/3})",
  "tol": 0.02,
  "id": "svd-07",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "La distance de Tchebychev est définie par \\(d(x,x') = \\sup_{1 \\le i \\le n} |x_i - x_i'|\\). Calculer cette distance entre \\(x=(1,5,-2)\\) et \\(x'=(4,1,0)\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "svd-08",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "La distance discrète, définie par \\(d(x,x')=0\\) si \\(x=x'\\) et \\(d(x,x')=1\\) sinon, est particulièrement utile pour étudier la distance entre individus décrits par :",
  "opts": [
   {
    "key": "a",
    "text": "des variables quantitatives réelles"
   },
   {
    "key": "b",
    "text": "des variables qualitatives"
   },
   {
    "key": "c",
    "text": "des séries temporelles continues"
   },
   {
    "key": "d",
    "text": "des vecteurs propres"
   }
  ],
  "ans": "b",
  "ansText": "des variables qualitatives",
  "id": "svd-09",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Le problème des moindres carrés ordinaires (MCO) évoqué dans le cours, \\(\\min_{u \\in \\mathbb{R}^p} \\sum_{i=1}^n \\|x_i - p_u(x_i)\\|^2\\), consiste à :",
  "opts": [
   {
    "key": "a",
    "text": "maximiser la norme des vecteurs \\(x_i\\)"
   },
   {
    "key": "b",
    "text": "minimiser la somme des carrés des erreurs de projection sur la droite engendrée par \\(u\\)"
   },
   {
    "key": "c",
    "text": "minimiser le nombre de variables \\(p\\)"
   },
   {
    "key": "d",
    "text": "maximiser le rang de la matrice \\(X\\)"
   }
  ],
  "ans": "b",
  "ansText": "minimiser la somme des carrés des erreurs de projection sur la droite engendrée par \\(u\\)",
  "id": "svd-10",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "En utilisant l'orthogonalité entre \\(x - p_u(x)\\) et \\(u\\), et le théorème de Pythagore, le cours établit la relation :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|x-p_u(x)\\|^2 = \\|x\\|^2 - \\|p_u(x)\\|^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|x-p_u(x)\\|^2 = \\|x\\|^2 + \\|p_u(x)\\|^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|x-p_u(x)\\|^2 = \\|p_u(x)\\|^2 - \\|x\\|^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|x-p_u(x)\\|^2 = 2\\|x\\| \\cdot \\|p_u(x)\\|\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\|x-p_u(x)\\|^2 = \\|x\\|^2 - \\|p_u(x)\\|^2\\)",
  "id": "svd-11",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Lorsque \\(u\\) est un vecteur unitaire (\\(\\|u\\|=1\\)), le projeté orthogonal de \\(x\\) sur la droite vectorielle engendrée par \\(u\\) s'écrit :",
  "opts": [
   {
    "key": "a",
    "text": "\\(p_u(x) = \\langle x, u \\rangle\\, u\\)"
   },
   {
    "key": "b",
    "text": "\\(p_u(x) = \\|x\\|\\, u\\)"
   },
   {
    "key": "c",
    "text": "\\(p_u(x) = \\langle x,u\\rangle\\, x\\)"
   },
   {
    "key": "d",
    "text": "\\(p_u(x) = u^{\\top} x \\cdot x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p_u(x) = \\langle x, u \\rangle\\, u\\)",
  "id": "svd-12",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "En posant \\(X = (x_1^{\\top}, \\dots, x_n^{\\top})\\), le cours montre que \\(\\sum_{i=1}^n \\|p_u(x_i)\\|^2\\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(u^{\\top} X^{\\top} X\\, u\\)"
   },
   {
    "key": "b",
    "text": "\\(u^{\\top} X X^{\\top}\\, u\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Tr}(X)\\)"
   },
   {
    "key": "d",
    "text": "\\(X^{\\top} X\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u^{\\top} X^{\\top} X\\, u\\)",
  "id": "svd-13",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Soit \\(G\\) la matrice de Gram associée à des vecteurs \\(x_1, \\dots, x_n\\) d'un espace euclidien, définie par \\(G_{ij} = \\langle x_i, x_j \\rangle\\). D'après la Proposition 7.1 du cours, cette matrice est toujours :",
  "opts": [
   {
    "key": "a",
    "text": "antisymétrique et inversible"
   },
   {
    "key": "b",
    "text": "symétrique et semi-définie positive (valeurs propres \\(\\ge 0\\))"
   },
   {
    "key": "c",
    "text": "diagonale"
   },
   {
    "key": "d",
    "text": "de déterminant nul"
   }
  ],
  "ans": "b",
  "ansText": "symétrique et semi-définie positive (valeurs propres \\(\\ge 0\\))",
  "id": "svd-14",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Pour résoudre \\(\\max_{u \\in \\mathbb{R}^p,\\, \\|u\\|^2=1} u^{\\top} G' u\\) où \\(G' = X^{\\top}X\\), le cours introduit le lagrangien :",
  "opts": [
   {
    "key": "a",
    "text": "\\(L(u,\\alpha) = u^{\\top} G' u - \\alpha(u^{\\top}u - 1)\\)"
   },
   {
    "key": "b",
    "text": "\\(L(u,\\alpha) = u^{\\top} G' u + \\alpha(u^{\\top}u - 1)\\)"
   },
   {
    "key": "c",
    "text": "\\(L(u,\\alpha) = \\alpha\\, u^{\\top} G' u\\)"
   },
   {
    "key": "d",
    "text": "\\(L(u,\\alpha) = u^{\\top} G' u - \\alpha\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(L(u,\\alpha) = u^{\\top} G' u - \\alpha(u^{\\top}u - 1)\\)",
  "id": "svd-15",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "En annulant la dérivée partielle du lagrangien par rapport à \\(u\\), on obtient l'équation :",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^{\\top} X\\, u = \\alpha u\\)"
   },
   {
    "key": "b",
    "text": "\\(X^{\\top} X = \\alpha\\)"
   },
   {
    "key": "c",
    "text": "\\(u^{\\top} X^{\\top} X = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(X u = \\alpha X^{\\top} u\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(X^{\\top} X\\, u = \\alpha u\\)",
  "id": "svd-16",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Le vecteur \\(u\\) qui résout ce problème d'optimisation, et fournit ainsi la meilleure représentation possible en dimension 1, est :",
  "opts": [
   {
    "key": "a",
    "text": "le vecteur propre de \\(G'=X^{\\top}X\\) associé à sa plus petite valeur propre"
   },
   {
    "key": "b",
    "text": "le vecteur propre de \\(G'=X^{\\top}X\\) associé à sa plus grande valeur propre"
   },
   {
    "key": "c",
    "text": "n'importe quel vecteur unitaire de \\(\\mathbb{R}^p\\)"
   },
   {
    "key": "d",
    "text": "le barycentre du nuage de points"
   }
  ],
  "ans": "b",
  "ansText": "le vecteur propre de \\(G'=X^{\\top}X\\) associé à sa plus grande valeur propre",
  "id": "svd-17",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "D'après le paragraphe sur la dualité, obtenir une représentation en dimension réduite d'un ensemble d'individus revient à diagonaliser la matrice :",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^{\\top}X \\in \\mathcal{M}_p(\\mathbb{R})\\)"
   },
   {
    "key": "b",
    "text": "\\(XX^{\\top} \\in \\mathcal{M}_n(\\mathbb{R})\\)"
   },
   {
    "key": "c",
    "text": "\\(X \\in \\mathcal{M}_{n,p}(\\mathbb{R})\\)"
   },
   {
    "key": "d",
    "text": "\\(\\Sigma \\in \\mathcal{M}_{n,p}(\\mathbb{R})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(X^{\\top}X \\in \\mathcal{M}_p(\\mathbb{R})\\)",
  "id": "svd-18",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Toujours d'après ce paragraphe, projeter les variables dans un espace de dimension réduite revient à diagonaliser la matrice :",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^{\\top}X \\in \\mathcal{M}_p(\\mathbb{R})\\)"
   },
   {
    "key": "b",
    "text": "\\(XX^{\\top} \\in \\mathcal{M}_n(\\mathbb{R})\\)"
   },
   {
    "key": "c",
    "text": "\\(X\\)"
   },
   {
    "key": "d",
    "text": "\\(U' \\Sigma\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(XX^{\\top} \\in \\mathcal{M}_n(\\mathbb{R})\\)",
  "id": "svd-19",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Un fait marquant énoncé par le cours à propos des matrices \\(X^{\\top}X\\) et \\(XX^{\\top}\\) est que :",
  "opts": [
   {
    "key": "a",
    "text": "elles ont exactement le même nombre de lignes"
   },
   {
    "key": "b",
    "text": "toutes leurs valeurs propres non nulles sont égales"
   },
   {
    "key": "c",
    "text": "elles sont toujours inversibles"
   },
   {
    "key": "d",
    "text": "elles sont toujours égales entre elles"
   }
  ],
  "ans": "b",
  "ansText": "toutes leurs valeurs propres non nulles sont égales",
  "id": "svd-20",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 7.2 (décomposition en valeurs singulières), toute matrice réelle \\(X\\) d'ordre \\(n \\times p\\) et de rang \\(r \\le \\min(n,p)\\) peut se factoriser sous la forme \\(X = U \\Sigma U'^{\\top}\\), où les valeurs singulières non nulles \\(\\sigma_1, \\dots, \\sigma_r\\) présentes sur la diagonale de \\(\\Sigma\\) sont rangées :",
  "opts": [
   {
    "key": "a",
    "text": "dans un ordre croissant : \\(\\sigma_1 \\le \\sigma_2 \\le \\cdots \\le \\sigma_r\\)"
   },
   {
    "key": "b",
    "text": "dans un ordre décroissant : \\(\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge \\sigma_r \\ge 0\\)"
   },
   {
    "key": "c",
    "text": "dans un ordre quelconque, non précisé"
   },
   {
    "key": "d",
    "text": "toutes égales entre elles"
   }
  ],
  "ans": "b",
  "ansText": "dans un ordre décroissant : \\(\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge \\sigma_r \\ge 0\\)",
  "id": "svd-21",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Dans la décomposition \\(X=U\\Sigma U'^{\\top}\\), la matrice \\(U \\in \\mathcal{M}_n(\\mathbb{R})\\), composée des vecteurs singuliers à gauche de \\(X\\), correspond aux vecteurs propres de la matrice :",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^{\\top}X\\)"
   },
   {
    "key": "b",
    "text": "\\(XX^{\\top}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\Sigma\\)"
   },
   {
    "key": "d",
    "text": "\\(X\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(XX^{\\top}\\)",
  "id": "svd-22",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "De même, la matrice \\(U' \\in \\mathcal{M}_p(\\mathbb{R})\\), composée des vecteurs singuliers à droite de \\(X\\), correspond aux vecteurs propres de la matrice :",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^{\\top}X\\)"
   },
   {
    "key": "b",
    "text": "\\(XX^{\\top}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\Sigma^{\\top}\\)"
   },
   {
    "key": "d",
    "text": "\\(U\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(X^{\\top}X\\)",
  "id": "svd-23",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Les valeurs singulières \\(\\sigma_i\\) d'une matrice \\(X\\) sont, par définition établie dans le cours :",
  "opts": [
   {
    "key": "a",
    "text": "les valeurs propres de \\(X\\) elle-même"
   },
   {
    "key": "b",
    "text": "les racines carrées des valeurs propres non nulles de \\(X^{\\top}X\\) (indifféremment de \\(XX^{\\top}\\))"
   },
   {
    "key": "c",
    "text": "les éléments diagonaux de \\(X^{\\top}X\\)"
   },
   {
    "key": "d",
    "text": "la trace de la matrice \\(U\\)"
   }
  ],
  "ans": "b",
  "ansText": "les racines carrées des valeurs propres non nulles de \\(X^{\\top}X\\) (indifféremment de \\(XX^{\\top}\\))",
  "id": "svd-24",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Le théorème d'Eckart-Young donne la solution du problème \\(\\min_{\\tilde X \\in \\mathcal{M}_{n,p}(\\mathbb{R}),\\, \\mathrm{rg}(\\tilde X) \\le s} \\|X - \\tilde X\\|_F^2\\). Cette solution optimale est :",
  "opts": [
   {
    "key": "a",
    "text": "une matrice aléatoire de rang \\(s\\)"
   },
   {
    "key": "b",
    "text": "obtenue à partir de la décomposition en valeurs singulières de \\(X\\), tronquée aux \\(s\\) plus grandes valeurs singulières"
   },
   {
    "key": "c",
    "text": "toujours la matrice nulle"
   },
   {
    "key": "d",
    "text": "indépendante de la décomposition en valeurs singulières de \\(X\\)"
   }
  ],
  "ans": "b",
  "ansText": "obtenue à partir de la décomposition en valeurs singulières de \\(X\\), tronquée aux \\(s\\) plus grandes valeurs singulières",
  "id": "svd-25",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Pour une matrice \\(X \\in \\mathcal{M}_{n,p}(\\mathbb{R})\\), la norme de Frobenius au carré \\(\\|X\\|_F^2\\) est définie par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|X\\|_F^2 = \\max_{i,j} x_{ij}^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|X\\|_F^2 = \\sum_{i=1}^n \\sum_{j=1}^p x_{ij}^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|X\\|_F^2 = \\mathrm{Tr}(X)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|X\\|_F^2 = \\det(X)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\|X\\|_F^2 = \\sum_{i=1}^n \\sum_{j=1}^p x_{ij}^2\\)",
  "id": "svd-26",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "En utilisant la décomposition \\(X=\\sum_{k=1}^r \\sigma_k u_k (u_k')^{\\top}\\) et l'orthonormalité des vecteurs singuliers, le cours montre que \\(\\|X\\|_F^2\\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sum_{k=1}^r \\sigma_k\\)"
   },
   {
    "key": "b",
    "text": "\\(\\sum_{k=1}^r \\sigma_k^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\sigma_1^2\\) seulement"
   },
   {
    "key": "d",
    "text": "\\(n \\times p\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\sum_{k=1}^r \\sigma_k^2\\)",
  "id": "svd-27",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "La meilleure approximation \\(\\tilde X\\) de rang \\(s \\le r\\) de la matrice \\(X\\), au sens de la norme de Frobenius, s'écrit :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\tilde X = \\sigma_1 u_1 (u_1')^{\\top} + \\cdots + \\sigma_s u_s (u_s')^{\\top}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\tilde X = \\sigma_r u_r (u_r')^{\\top}\\) uniquement"
   },
   {
    "key": "c",
    "text": "\\(\\tilde X = U \\Sigma\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tilde X = \\sigma_1 + \\cdots + \\sigma_s\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\tilde X = \\sigma_1 u_1 (u_1')^{\\top} + \\cdots + \\sigma_s u_s (u_s')^{\\top}\\)",
  "id": "svd-28",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "Le premier indicateur (naïf) de qualité \\(\\tau\\) d'une approximation de rang \\(s\\) d'une matrice de rang \\(r\\), basé directement sur les valeurs singulières, est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\tau = \\dfrac{\\sum_{k=1}^{s} \\sigma_k(X)}{\\sum_{k=1}^{r} \\sigma_k(X)}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\tau = \\dfrac{\\sum_{k=1}^{s} \\sigma_k^2(X)}{\\sum_{k=1}^{r} \\sigma_k^2(X)} \\times 2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\tau = \\sigma_s(X) - \\sigma_1(X)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tau = \\dfrac{s}{r}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\tau = \\dfrac{\\sum_{k=1}^{s} \\sigma_k(X)}{\\sum_{k=1}^{r} \\sigma_k(X)}\\)",
  "id": "svd-29",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "On considère la matrice \\(X = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix}\\) étudiée dans l'exemple du cours. Sachant que les valeurs propres de \\(X^{\\top}X\\) sont \\(3\\), \\(1\\) et \\(0\\), quel est le rang de \\(X\\) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "svd-30",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Pour cette même matrice \\(X\\), le polynôme caractéristique de \\(X^{\\top}X\\) est \\(-\\lambda(\\lambda-3)(\\lambda-1)\\). Quelle est la plus grande valeur propre de \\(X^{\\top}X\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "svd-31",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "En déduire la plus grande valeur singulière \\(\\sigma_1\\) de \\(X\\) (arrondir à \\(10^{-2}\\) près).",
  "ans": 1.7321,
  "ansText": "√3 ≈ 1.73",
  "tol": 0.02,
  "id": "svd-32",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Quelle est la seconde valeur singulière \\(\\sigma_2\\) de \\(X\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "svd-33",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Quelle est la valeur propre de \\(X^{\\top}X\\) associée au troisième vecteur propre \\(u_3'\\), celui qui ne correspond à aucune valeur singulière non nulle de \\(X\\) ?",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "svd-34",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\|X\\|_F^2 = \\sum_{i,j} x_{ij}^2\\) pour \\(X = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix}\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "svd-35",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "En posant \\(\\tilde X = \\sigma_1 u_1 (u_1')^{\\top}\\) l'approximation de rang 1 de \\(X\\), le cours calcule \\(\\tau = \\|\\tilde X\\|_F^2/\\|X\\|_F^2 = 3/(3+1)\\). Quelle est la valeur de \\(\\tau\\) ?",
  "ans": 0.75,
  "ansText": "0.75",
  "tol": 0.01,
  "id": "svd-36",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "En utilisant l'indicateur naïf \\(\\tau = \\dfrac{\\sigma_1}{\\sigma_1+\\sigma_2}\\) pour cette même approximation de rang 1 (avec \\(\\sigma_1=\\sqrt{3}\\) et \\(\\sigma_2=1\\)), calculer \\(\\tau\\) (arrondir à \\(10^{-2}\\) près).",
  "ans": 0.634,
  "ansText": "≈0.63",
  "tol": 0.02,
  "id": "svd-37",
  "cat": "svd"
 },
 {
  "type": "num",
  "q": "Quelle est la valeur de l'indicateur \\(\\tau = \\|\\tilde X\\|_F^2/\\|X\\|_F^2\\) lorsque l'on prend une approximation de rang \\(s=2\\), c'est-à-dire égal au rang \\(r\\) de \\(X\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "svd-38",
  "cat": "svd"
 },
 {
  "type": "qcm",
  "q": "L'Analyse en Composantes Principales (ACP) s'applique à des variables...",
  "opts": [
   {
    "key": "a",
    "text": "qualitatives nominales"
   },
   {
    "key": "b",
    "text": "quantitatives réelles"
   },
   {
    "key": "c",
    "text": "binaires uniquement"
   },
   {
    "key": "d",
    "text": "mixtes, à la fois qualitatives et quantitatives"
   }
  ],
  "ans": "b",
  "ansText": "quantitatives réelles",
  "id": "acp-01",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Dans la matrice de design \\(X \\in \\mathcal{M}_{n,p}(\\mathbb{R})\\), un vecteur \\(x_i \\in \\mathbb{R}^p\\) (une ligne de X) représente...",
  "opts": [
   {
    "key": "a",
    "text": "une variable observée sur les n individus"
   },
   {
    "key": "b",
    "text": "un individu, décrit par les p variables"
   },
   {
    "key": "c",
    "text": "l'un des axes principaux de l'ACP"
   },
   {
    "key": "d",
    "text": "le barycentre du nuage de points"
   }
  ],
  "ans": "b",
  "ansText": "un individu, décrit par les p variables",
  "id": "acp-02",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Un vecteur variable \\(v_k \\in \\mathbb{R}^n\\) (une colonne de X) correspond à...",
  "opts": [
   {
    "key": "a",
    "text": "un individu de l'échantillon"
   },
   {
    "key": "b",
    "text": "une variable, avec ses n valeurs prises sur les individus"
   },
   {
    "key": "c",
    "text": "un axe principal de l'ACP"
   },
   {
    "key": "d",
    "text": "la matrice de corrélation des variables"
   }
  ],
  "ans": "b",
  "ansText": "une variable, avec ses n valeurs prises sur les individus",
  "id": "acp-03",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une matrice de design \\(X\\) décrit \\(n = 50\\) individus par \\(p = 8\\) variables quantitatives. Combien de coefficients (entrées) contient la matrice \\(X\\) ?",
  "ans": 400,
  "ansText": "400",
  "tol": 0.5,
  "id": "acp-04",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Deux individus ont pour coordonnées \\(x_i = (1, 2)\\) et \\(x_j = (4, 6)\\) sur \\(p = 2\\) variables. En utilisant la distance euclidienne \\(d(x_i, x_j) = \\sqrt{\\sum_{k=1}^{p} (x_{ik} - x_{jk})^2}\\), calculez \\(d(x_i, x_j)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.05,
  "id": "acp-05",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Que réalise-t-on lorsqu'on centre la matrice \\(X\\) pour obtenir \\(X_{centré}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "on divise chaque variable par son écart-type"
   },
   {
    "key": "b",
    "text": "on soustrait à chaque variable sa moyenne, de sorte que chaque colonne obtenue est de moyenne nulle"
   },
   {
    "key": "c",
    "text": "on normalise chaque individu pour qu'il soit de norme 1"
   },
   {
    "key": "d",
    "text": "on remplace X par sa matrice de corrélation"
   }
  ],
  "ans": "b",
  "ansText": "on soustrait à chaque variable sa moyenne, de sorte que chaque colonne obtenue est de moyenne nulle",
  "id": "acp-06",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Le centrage du nuage de points (translation par le vecteur des moyennes) a pour conséquence que...",
  "opts": [
   {
    "key": "a",
    "text": "les distances entre individus sont fortement modifiées"
   },
   {
    "key": "b",
    "text": "la variance totale du nuage est multipliée par n"
   },
   {
    "key": "c",
    "text": "les distances entre individus restent inchangées, car la distance euclidienne est invariante par translation"
   },
   {
    "key": "d",
    "text": "les variables deviennent automatiquement décorrélées"
   }
  ],
  "ans": "c",
  "ansText": "les distances entre individus restent inchangées, car la distance euclidienne est invariante par translation",
  "id": "acp-07",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une variable \\(v_k\\) prend les valeurs \\((2, 4, 6)\\) sur \\(n=3\\) individus. Calculez sa variance \\(s_k^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_{ik}-m_k)^2\\).",
  "ans": 2.6666666666666665,
  "ansText": "8/3 ≈ 2,667",
  "tol": 0.02,
  "id": "acp-08",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Lorsqu'on réduit les données (on divise chaque variable centrée par son écart-type) pour obtenir \\(X_{cen-réd}\\), on obtient une matrice telle que...",
  "opts": [
   {
    "key": "a",
    "text": "chaque variable a désormais une moyenne égale à 1"
   },
   {
    "key": "b",
    "text": "chaque variable a désormais une variance égale à 1"
   },
   {
    "key": "c",
    "text": "chaque individu est désormais de norme égale à 1"
   },
   {
    "key": "d",
    "text": "la matrice devient carrée de taille p"
   }
  ],
  "ans": "b",
  "ansText": "chaque variable a désormais une variance égale à 1",
  "id": "acp-09",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une variable centrée-réduite est calculée par \\(z = \\dfrac{x_{ik}-m_k}{s_k}\\). Sachant que \\(x_{ik}=10\\), \\(m_k = 6\\) et \\(s_k = 2\\), calculez cette valeur centrée-réduite.",
  "ans": 2,
  "ansText": "2",
  "tol": 0.05,
  "id": "acp-10",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Un des risques de la réduction (standardisation) des données avant l'ACP est que...",
  "opts": [
   {
    "key": "a",
    "text": "une variable très bruitée (peu informative) se voit attribuer une importance comparable à une variable informative, car les deux ont la même variance après réduction"
   },
   {
    "key": "b",
    "text": "les variables corrélées deviennent automatiquement orthogonales"
   },
   {
    "key": "c",
    "text": "la matrice X devient non inversible"
   },
   {
    "key": "d",
    "text": "les distances entre individus deviennent négatives"
   }
  ],
  "ans": "a",
  "ansText": "une variable très bruitée (peu informative) se voit attribuer une importance comparable à une variable informative, car les deux ont la même variance après réduction",
  "id": "acp-11",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Un argument justifiant physiquement de centrer-réduire les données avant l'ACP est que...",
  "opts": [
   {
    "key": "a",
    "text": "cela rend les variables adimensionnées, ce qui permet de comparer des variables exprimées dans des unités différentes"
   },
   {
    "key": "b",
    "text": "cela augmente artificiellement le nombre d'individus n"
   },
   {
    "key": "c",
    "text": "cela transforme les variables quantitatives en variables qualitatives"
   },
   {
    "key": "d",
    "text": "cela garantit que toutes les corrélations entre variables deviennent nulles"
   }
  ],
  "ans": "a",
  "ansText": "cela rend les variables adimensionnées, ce qui permet de comparer des variables exprimées dans des unités différentes",
  "id": "acp-12",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Deux individus ont pour coordonnées \\(x_i=(2,4)\\) et \\(x_j=(5,8)\\) sur deux variables d'écarts-types \\(s_1=2\\) et \\(s_2=3\\). En utilisant la distance après standardisation \\(d^2(x_i,x_j)=\\sum_{k=1}^{2}\\frac{1}{s_k^2}(x_{ik}-x_{jk})^2\\), calculez \\(d^2(x_i,x_j)\\).",
  "ans": 4.03,
  "ansText": "9/4 + 16/9 ≈ 4,03",
  "tol": 0.05,
  "id": "acp-13",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Dans la version dite « ACP normée », après avoir centré et réduit les données, on divise en plus l'ensemble des colonnes de \\(X_{cen-réd}\\) par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(p\\)"
   },
   {
    "key": "b",
    "text": "\\(n\\)"
   },
   {
    "key": "c",
    "text": "\\(\\sqrt{n}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sqrt{p}\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(\\sqrt{n}\\)",
  "id": "acp-14",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Les axes principaux \\(u_1', \\dots, u_s'\\) recherchés par l'ACP sont des directions...",
  "opts": [
   {
    "key": "a",
    "text": "orthogonales entre elles, choisies successivement pour maximiser la variance (l'inertie) du nuage de points après projection"
   },
   {
    "key": "b",
    "text": "parallèles entre elles, choisies arbitrairement"
   },
   {
    "key": "c",
    "text": "qui minimisent la variance du nuage de points après projection"
   },
   {
    "key": "d",
    "text": "identiques aux colonnes originales de X, sans aucune transformation"
   }
  ],
  "ans": "a",
  "ansText": "orthogonales entre elles, choisies successivement pour maximiser la variance (l'inertie) du nuage de points après projection",
  "id": "acp-15",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Pour déterminer les axes principaux permettant de représenter les individus, on diagonalise la matrice symétrique...",
  "opts": [
   {
    "key": "a",
    "text": "\\(X\\) elle-même"
   },
   {
    "key": "b",
    "text": "\\(C = Z^T Z\\) (matrice des corrélations linéaires)"
   },
   {
    "key": "c",
    "text": "la matrice nulle"
   },
   {
    "key": "d",
    "text": "le vecteur des moyennes \\(m\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(C = Z^T Z\\) (matrice des corrélations linéaires)",
  "id": "acp-16",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "La matrice de corrélation \\(C\\) d'un jeu de données comportant \\(p = 7\\) variables centrées-réduites a tous ses termes diagonaux égaux à 1. Quelle est la trace de \\(C\\), c'est-à-dire la somme de ses valeurs propres \\(\\sum_k \\lambda_k\\) ?",
  "ans": 7,
  "ansText": "7",
  "tol": 0.1,
  "id": "acp-17",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "La règle de Kaiser pour choisir le nombre d'axes à conserver consiste à...",
  "opts": [
   {
    "key": "a",
    "text": "conserver les axes dont la valeur propre associée \\(\\lambda_m\\) est strictement supérieure à 1, car la moyenne des valeurs propres d'une matrice de corrélation vaut toujours 1"
   },
   {
    "key": "b",
    "text": "conserver systématiquement les deux premiers axes"
   },
   {
    "key": "c",
    "text": "conserver les axes associés aux plus petites valeurs propres"
   },
   {
    "key": "d",
    "text": "tracer l'histogramme des valeurs propres et chercher une rupture dans la décroissance"
   }
  ],
  "ans": "a",
  "ansText": "conserver les axes dont la valeur propre associée \\(\\lambda_m\\) est strictement supérieure à 1, car la moyenne des valeurs propres d'une matrice de corrélation vaut toujours 1",
  "id": "acp-18",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "La règle de Cattell pour choisir le nombre d'axes à conserver consiste à...",
  "opts": [
   {
    "key": "a",
    "text": "ne conserver que les axes dont la valeur propre dépasse 1"
   },
   {
    "key": "b",
    "text": "représenter les valeurs propres par ordre décroissant sur un histogramme et chercher une rupture (un coude) dans la décroissance"
   },
   {
    "key": "c",
    "text": "sommer toutes les valeurs propres et diviser le résultat par p"
   },
   {
    "key": "d",
    "text": "ne conserver qu'un seul axe, systématiquement le premier"
   }
  ],
  "ans": "b",
  "ansText": "représenter les valeurs propres par ordre décroissant sur un histogramme et chercher une rupture (un coude) dans la décroissance",
  "id": "acp-19",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une ACP normée sur \\(p=5\\) variables donne les valeurs propres \\(\\lambda = (2{,}5\\,;\\ 1{,}5\\,;\\ 0{,}6\\,;\\ 0{,}25\\,;\\ 0{,}15)\\) (rangées par ordre décroissant, de somme 5). Quel pourcentage de l'inertie totale est expliqué par le premier axe principal (en %) ?",
  "ans": 50,
  "ansText": "2,5 / 5 = 50 %",
  "tol": 0.5,
  "id": "acp-20",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Avec les mêmes valeurs propres \\(\\lambda = (2{,}5\\,;\\ 1{,}5\\,;\\ 0{,}6\\,;\\ 0{,}25\\,;\\ 0{,}15)\\), quel pourcentage cumulé de l'inertie totale est expliqué par les deux premiers axes (en %) ?",
  "ans": 80,
  "ansText": "(2,5+1,5) / 5 = 80 %",
  "tol": 0.5,
  "id": "acp-21",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une ACP normée sur \\(p=4\\) variables donne les valeurs propres \\(\\lambda = (1{,}8\\,;\\ 1{,}2\\,;\\ 0{,}7\\,;\\ 0{,}3)\\) (de somme 4). Quel pourcentage de l'inertie totale est expliqué par le premier axe (en %) ?",
  "ans": 45,
  "ansText": "1,8 / 4 = 45 %",
  "tol": 0.5,
  "id": "acp-22",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une ACP normée sur \\(p=6\\) variables donne les valeurs propres, rangées par ordre décroissant, \\(\\lambda = (3\\,;\\ 1\\,;\\ 1\\,;\\ 0{,}6\\,;\\ 0{,}3\\,;\\ 0{,}1)\\) (de somme 6). Combien d'axes retient-on avec la règle de Kaiser (\\(\\lambda_m > 1\\) strictement) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.1,
  "id": "acp-23",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Dans une ACP normée portant sur \\(p = 12\\) variables, quelle est, en général, la moyenne des \\(p\\) valeurs propres de la matrice de corrélation \\(C\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "acp-24",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "La qualité de représentation du nuage complet des individus sur l'axe \\(u_m'\\) est mesurée par le rapport...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda_m / p\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda_m \\times p\\)"
   },
   {
    "key": "c",
    "text": "\\(p / \\lambda_m\\)"
   },
   {
    "key": "d",
    "text": "\\(\\lambda_m - p\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lambda_m / p\\)",
  "id": "acp-25",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Si un individu i possède une qualité de représentation \\(\\cos^2\\) proche de 1 sur l'axe \\(u_m'\\), cela signifie que...",
  "opts": [
   {
    "key": "a",
    "text": "cet individu contribue fortement à la construction de tous les axes de l'ACP"
   },
   {
    "key": "b",
    "text": "l'inertie totale de cet individu est presque entièrement expliquée par sa projection sur cet axe : il y est donc très bien représenté"
   },
   {
    "key": "c",
    "text": "cet individu est en réalité mal représenté sur cet axe"
   },
   {
    "key": "d",
    "text": "cet individu est nécessairement un individu supplémentaire"
   }
  ],
  "ans": "b",
  "ansText": "l'inertie totale de cet individu est presque entièrement expliquée par sa projection sur cet axe : il y est donc très bien représenté",
  "id": "acp-26",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Dans une ACP à \\(p=3\\) variables, un individu i a pour coordonnées sur les trois axes principaux \\(p_{u_1'}(z_i)=0{,}9\\), \\(p_{u_2'}(z_i)=-0{,}3\\) et \\(p_{u_3'}(z_i)=0{,}2\\). Sachant que \\(\\cos^2 = \\dfrac{p_{u_1'}(z_i)^2}{\\sum_{k=1}^{p} z_{ik}^2}\\) et que \\(\\sum_{k=1}^{p} z_{ik}^2\\) est ici la somme des carrés des trois coordonnées, calculez la qualité de représentation (\\(\\cos^2\\), en %) de cet individu sur le premier axe.",
  "ans": 86.2,
  "ansText": "0,81 / 0,94 ≈ 86,2 %",
  "tol": 1.0,
  "id": "acp-27",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Une forte contribution de l'individu i à l'axe \\(u_m'\\) (au sens de \\(p_{u_m'}(z_i)^2 / \\lambda_m\\)) signifie que...",
  "opts": [
   {
    "key": "a",
    "text": "cet individu pèse fortement dans la détermination (la construction) de cet axe principal"
   },
   {
    "key": "b",
    "text": "cet individu est mal représenté sur cet axe"
   },
   {
    "key": "c",
    "text": "l'axe n'est corrélé avec aucune des variables initiales"
   },
   {
    "key": "d",
    "text": "cet individu doit obligatoirement être retiré du jeu de données"
   }
  ],
  "ans": "a",
  "ansText": "cet individu pèse fortement dans la détermination (la construction) de cet axe principal",
  "id": "acp-28",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "La valeur propre associée à l'axe \\(u_1'\\) est \\(\\lambda_1 = 2\\), et la coordonnée d'un individu i sur cet axe est \\(p_{u_1'}(z_i) = 0{,}9\\). Calculez la contribution de cet individu à l'axe \\(u_1'\\), donnée par \\(p_{u_1'}(z_i)^2/\\lambda_1\\) (en %).",
  "ans": 40.5,
  "ansText": "0,81 / 2 = 40,5 %",
  "tol": 0.5,
  "id": "acp-29",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Les coordonnées d'une variable \\(v_k'\\) sur un axe principal \\(u_m\\) (espace des variables) correspondent...",
  "opts": [
   {
    "key": "a",
    "text": "à la moyenne de la variable"
   },
   {
    "key": "b",
    "text": "au coefficient de corrélation linéaire entre \\(v_k'\\) et \\(u_m\\), une valeur toujours comprise dans \\([-1,1]\\)"
   },
   {
    "key": "c",
    "text": "à la variance de la variable"
   },
   {
    "key": "d",
    "text": "au nombre total d'individus n"
   }
  ],
  "ans": "b",
  "ansText": "au coefficient de corrélation linéaire entre \\(v_k'\\) et \\(u_m\\), une valeur toujours comprise dans \\([-1,1]\\)",
  "id": "acp-30",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Dans le cercle des corrélations (représentation des variables dans l'espace engendré par deux axes principaux), les projections des variables se trouvent...",
  "opts": [
   {
    "key": "a",
    "text": "toujours en dehors du disque de rayon 1"
   },
   {
    "key": "b",
    "text": "à l'intérieur ou sur une hypersphère (un cercle, en dimension 2) de rayon 1"
   },
   {
    "key": "c",
    "text": "toujours exactement sur les axes eux-mêmes"
   },
   {
    "key": "d",
    "text": "à une distance de l'origine égale au nombre d'individus n"
   }
  ],
  "ans": "b",
  "ansText": "à l'intérieur ou sur une hypersphère (un cercle, en dimension 2) de rayon 1",
  "id": "acp-31",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Le carré de la distance entre deux variables centrées-réduites-normées \\(v_k'\\) et \\(v_l'\\) est donné par \\(d(v_k',v_l')^2 = 2(1-c_{kl})\\), où \\(c_{kl}\\) est leur coefficient de corrélation linéaire. Sachant que \\(c_{12}=0{,}6\\), calculez \\(d(v_1',v_2')^2\\).",
  "ans": 0.8,
  "ansText": "0.8",
  "tol": 0.02,
  "id": "acp-32",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Toujours avec \\(d(v_k',v_l')^2 = 2(1-c_{kl})\\), sachant que \\(d(v_1',v_2')^2 = 1{,}2\\), quelle est la valeur du coefficient de corrélation linéaire \\(c_{12}\\) ?",
  "ans": 0.4,
  "ansText": "0.4",
  "tol": 0.02,
  "id": "acp-33",
  "cat": "acp"
 },
 {
  "type": "num",
  "q": "Une ACP normée sur \\(p=3\\) variables donne les valeurs propres \\(\\lambda = (1{,}8\\,;\\ 0{,}9\\,;\\ 0{,}3)\\) (de somme 3). Quel pourcentage cumulé de l'inertie totale est expliqué par les deux premiers axes (en %) ?",
  "ans": 90,
  "ansText": "(1,8+0,9) / 3 = 90 %",
  "tol": 0.5,
  "id": "acp-34",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "On note \\(C = Z^T Z \\in \\mathcal{M}_p(\\mathbb{R})\\) (matrice des corrélations, espace des variables) et \\(G = ZZ^T \\in \\mathcal{M}_n(\\mathbb{R})\\) (matrice de Gram, espace des individus). On a alors :",
  "opts": [
   {
    "key": "a",
    "text": "C et G ont exactement les mêmes valeurs propres non nulles"
   },
   {
    "key": "b",
    "text": "C et G n'ont aucun lien mathématique entre elles"
   },
   {
    "key": "c",
    "text": "C est nécessairement de rang 1"
   },
   {
    "key": "d",
    "text": "G est toujours égale à la matrice identité"
   }
  ],
  "ans": "a",
  "ansText": "C et G ont exactement les mêmes valeurs propres non nulles",
  "id": "acp-35",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Pour projeter de nouveaux individus supplémentaires \\(I_+\\) sur les axes principaux déjà obtenus, on centre-réduit \\(I_+\\) en utilisant...",
  "opts": [
   {
    "key": "a",
    "text": "les moyennes et écarts-types recalculés uniquement sur \\(I_+\\)"
   },
   {
    "key": "b",
    "text": "les moyennes \\(m_j\\) et écarts-types \\(s_j\\) calculés sur les données initiales X, et non sur \\(I_+\\)"
   },
   {
    "key": "c",
    "text": "la moyenne et l'écart-type de la concaténation de X et \\(I_+\\)"
   },
   {
    "key": "d",
    "text": "aucune transformation n'est nécessaire avant projection"
   }
  ],
  "ans": "b",
  "ansText": "les moyennes \\(m_j\\) et écarts-types \\(s_j\\) calculés sur les données initiales X, et non sur \\(I_+\\)",
  "id": "acp-36",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Pour projeter de nouvelles variables supplémentaires \\(V_+\\), on centre-réduit \\(V_+\\) en utilisant...",
  "opts": [
   {
    "key": "a",
    "text": "les moyennes et écarts-types des variables initiales de X"
   },
   {
    "key": "b",
    "text": "des moyennes et écarts-types propres à \\(V_+\\) (notés \\(m_{+,j}\\) et \\(s_{+,j}\\)), nouvellement calculés sur ces variables"
   },
   {
    "key": "c",
    "text": "toujours une moyenne nulle et un écart-type égal à 1, sans calcul"
   },
   {
    "key": "d",
    "text": "les valeurs propres de la matrice C"
   }
  ],
  "ans": "b",
  "ansText": "des moyennes et écarts-types propres à \\(V_+\\) (notés \\(m_{+,j}\\) et \\(s_{+,j}\\)), nouvellement calculés sur ces variables",
  "id": "acp-37",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Pour intégrer l'information apportée par une variable nominale à q modalités (par exemple Homme/Femme) à l'interprétation d'une ACP, on peut...",
  "opts": [
   {
    "key": "a",
    "text": "l'ignorer complètement, car l'ACP ne traite que des variables quantitatives"
   },
   {
    "key": "b",
    "text": "calculer le barycentre des individus de chaque modalité (par exemple \\(z_H\\) et \\(z_F\\)) puis projeter ces individus moyens sur les axes principaux"
   },
   {
    "key": "c",
    "text": "transformer directement cette variable nominale en un nouvel axe principal"
   },
   {
    "key": "d",
    "text": "recalculer entièrement l'ACP après avoir supprimé tous les individus concernés"
   }
  ],
  "ans": "b",
  "ansText": "calculer le barycentre des individus de chaque modalité (par exemple \\(z_H\\) et \\(z_F\\)) puis projeter ces individus moyens sur les axes principaux",
  "id": "acp-38",
  "cat": "acp"
 },
 {
  "type": "qcm",
  "q": "Que cherche-t-on à généraliser dans ce chapitre par rapport aux méthodes (SVD, ACP) vues précédemment ?",
  "opts": [
   {
    "key": "a",
    "text": "Le fait de travailler avec une métrique différente de la métrique euclidienne et avec des individus n'ayant pas tous la même importance"
   },
   {
    "key": "b",
    "text": "Le fait de travailler uniquement avec des matrices carrées"
   },
   {
    "key": "c",
    "text": "Le fait de remplacer la matrice de design \\(X\\) par son inverse"
   },
   {
    "key": "d",
    "text": "Le fait de ne plus centrer ni réduire les données, quelle que soit la métrique utilisée"
   }
  ],
  "ans": "a",
  "ansText": "Le fait de travailler avec une métrique différente de la métrique euclidienne et avec des individus n'ayant pas tous la même importance",
  "id": "generalisation-01",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Jusqu'à présent (avant ce chapitre), quelle distance était systématiquement utilisée pour l'ACP/la SVD ?",
  "opts": [
   {
    "key": "a",
    "text": "La distance induite par la métrique \\(M\\) quelconque"
   },
   {
    "key": "b",
    "text": "La distance euclidienne, induite par la métrique \\(I_p\\) (produit scalaire canonique)"
   },
   {
    "key": "c",
    "text": "La distance de Mahalanobis induite par \\(W\\)"
   },
   {
    "key": "d",
    "text": "Une distance qui dépend du vecteur de poids \\(w\\)"
   }
  ],
  "ans": "b",
  "ansText": "La distance euclidienne, induite par la métrique \\(I_p\\) (produit scalaire canonique)",
  "id": "generalisation-02",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Quelles conditions doit vérifier une matrice \\(M \\in \\mathcal{M}_p(\\mathbb{R})\\) pour définir une métrique valide sur \\(\\mathbb{R}^p\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(M\\) doit être symétrique et définie positive"
   },
   {
    "key": "b",
    "text": "\\(M\\) doit être diagonale et inversible"
   },
   {
    "key": "c",
    "text": "\\(M\\) doit être antisymétrique et de trace nulle"
   },
   {
    "key": "d",
    "text": "\\(M\\) doit être orthogonale, i.e. \\(M^T M = I_p\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(M\\) doit être symétrique et définie positive",
  "id": "generalisation-03",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Étant donné une métrique \\(M\\) et deux vecteurs \\(x, x' \\in \\mathbb{R}^p\\), comment est défini le produit scalaire relatif à \\(M\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle x, x' \\rangle_M = x^T x'\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle x, x' \\rangle_M = x^T M x'\\)"
   },
   {
    "key": "c",
    "text": "\\(\\langle x, x' \\rangle_M = M x^T x'\\)"
   },
   {
    "key": "d",
    "text": "\\(\\langle x, x' \\rangle_M = x^T M^{-1} x'\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\langle x, x' \\rangle_M = x^T M x'\\)",
  "id": "generalisation-04",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Relativement à une métrique \\(M\\), un vecteur \\(x\\) est dit normé lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|x\\|_M^2 = x^T M x = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|x\\|_M^2 = x^T M x = 1\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|x\\|_M^2 = x^T x = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|x\\|_M^2 = x^T M^{-1} x = 1\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\|x\\|_M^2 = x^T M x = 1\\)",
  "id": "generalisation-05",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Relativement à une métrique \\(M\\), deux vecteurs \\(x\\) et \\(x'\\) sont dits orthogonaux lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x^T x' = 1\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle x, x' \\rangle_M = x^T M x' = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(x = M x'\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|x\\|_M = \\|x'\\|_M\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\langle x, x' \\rangle_M = x^T M x' = 0\\)",
  "id": "generalisation-06",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Dans les présentations effectuées précédemment (avant ce chapitre), quelle hypothèse était faite sur l'importance des individus ?",
  "opts": [
   {
    "key": "a",
    "text": "Tous les individus avaient le même poids (même importance)"
   },
   {
    "key": "b",
    "text": "Les individus les plus récents avaient plus de poids"
   },
   {
    "key": "c",
    "text": "Chaque individu avait un poids proportionnel à sa norme"
   },
   {
    "key": "d",
    "text": "Les poids étaient tirés aléatoirement"
   }
  ],
  "ans": "a",
  "ansText": "Tous les individus avaient le même poids (même importance)",
  "id": "generalisation-07",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "On note \\(w \\in \\mathbb{R}^n\\) le vecteur de poids des individus, avec \\(w_i \\geq 0\\). Sous quelle contrainte de normalisation ces poids sont-ils supposés être choisis ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sum_{i=1}^n w_i = 1\\)"
   },
   {
    "key": "b",
    "text": "\\(\\sum_{i=1}^n w_i = n\\), le nombre d'exemples"
   },
   {
    "key": "c",
    "text": "\\(\\max_i w_i = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sum_{i=1}^n w_i = p\\), le nombre de variables"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\sum_{i=1}^n w_i = n\\), le nombre d'exemples",
  "id": "generalisation-08",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Comment note-t-on la matrice associée au vecteur de poids \\(w\\) des individus ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(W = w w^T\\)"
   },
   {
    "key": "b",
    "text": "\\(W = \\mathrm{diag}(w)\\)"
   },
   {
    "key": "c",
    "text": "\\(W = I_n + w\\)"
   },
   {
    "key": "d",
    "text": "\\(W = w^T w\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(W = \\mathrm{diag}(w)\\)",
  "id": "generalisation-09",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "En présence d'un vecteur de poids \\(w\\), quelle est la nouvelle expression de la moyenne \\(m_k\\) de la variable \\(k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(m_k = \\frac{1}{n}\\sum_{i=1}^n x_{ik}\\)"
   },
   {
    "key": "b",
    "text": "\\(m_k = \\frac{1}{n}\\sum_{i=1}^n w_i x_{ik}\\)"
   },
   {
    "key": "c",
    "text": "\\(m_k = \\sum_{i=1}^n w_i x_{ik}\\)"
   },
   {
    "key": "d",
    "text": "\\(m_k = \\frac{1}{p}\\sum_{i=1}^n w_i x_{ik}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(m_k = \\frac{1}{n}\\sum_{i=1}^n w_i x_{ik}\\)",
  "id": "generalisation-10",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "En présence d'un vecteur de poids \\(w\\), quelle est la nouvelle expression de la variance \\(s_k^2\\) de la variable \\(k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(s_k^2 = \\frac{1}{n}\\sum_{i=1}^n (x_{ik} - m_k)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(s_k^2 = \\frac{1}{n}\\sum_{i=1}^n w_i (x_{ik} - m_k)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(s_k^2 = \\sum_{i=1}^n w_i x_{ik}^2\\)"
   },
   {
    "key": "d",
    "text": "\\(s_k^2 = \\frac{1}{n^2}\\sum_{i=1}^n w_i (x_{ik} - m_k)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(s_k^2 = \\frac{1}{n}\\sum_{i=1}^n w_i (x_{ik} - m_k)^2\\)",
  "id": "generalisation-11",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "En combinant poids \\(w_i\\) sur les individus et métrique générale \\(M\\), comment s'écrit l'inertie totale du nuage de points (à un facteur \\(1/n\\) près) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sum_{i=1}^n \\|x_i - \\bar{x}\\|_M^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\sum_{i=1}^n w_i \\|x_i - \\bar{x}\\|_M^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\sum_{i=1}^n w_i \\|x_i\\|_M^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sum_{i=1}^n w_i \\|\\bar{x}\\|_M^2\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\sum_{i=1}^n w_i \\|x_i - \\bar{x}\\|_M^2\\)",
  "id": "generalisation-12",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "En développant le problème de maximisation de la variance pour trouver le premier axe principal \\(u_1\\) (avec \\(\\|u_1\\|_M^2 = 1\\)), on montre qu'il est équivalent à maximiser :",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_1^T M X^T W X M u_1\\)"
   },
   {
    "key": "b",
    "text": "\\(u_1^T X^T X u_1\\)"
   },
   {
    "key": "c",
    "text": "\\(u_1^T W u_1\\)"
   },
   {
    "key": "d",
    "text": "\\(u_1^T M^{-1} X^T W X u_1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_1^T M X^T W X M u_1\\)",
  "id": "generalisation-13",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Le cours affirme que la matrice \\(M X^T W X M\\) intervenant dans le problème d'optimisation est une matrice de Gram. Qu'en déduit-on sur ses propriétés ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est antisymétrique et de rang 1"
   },
   {
    "key": "b",
    "text": "Elle est symétrique définie positive"
   },
   {
    "key": "c",
    "text": "Elle est nilpotente"
   },
   {
    "key": "d",
    "text": "Elle est diagonale"
   }
  ],
  "ans": "b",
  "ansText": "Elle est symétrique définie positive",
  "id": "generalisation-14",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "En annulant le gradient du Lagrangien \\(L(u_1,\\alpha) = u_1^T K u_1 - \\alpha(u_1^T M u_1 - 1)\\) (avec \\(K = MX^TWXM\\)) puis en utilisant le fait que \\(M\\) est inversible, à quel problème aux valeurs propres aboutit-on finalement ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(X^T W X M u_1 = \\alpha u_1\\)"
   },
   {
    "key": "b",
    "text": "\\(M u_1 = \\alpha X^T W X u_1\\)"
   },
   {
    "key": "c",
    "text": "\\(X^T X u_1 = \\alpha u_1\\)"
   },
   {
    "key": "d",
    "text": "\\(W u_1 = \\alpha M u_1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(X^T W X M u_1 = \\alpha u_1\\)",
  "id": "generalisation-15",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Le cours évoque aussi une généralisation \\\"duale\\\" : appliquer une métrique \\(M'\\) et des poids \\(W'\\) non plus aux individus mais aux variables. À quelle matrice s'applique-t-on alors la même analyse ?",
  "opts": [
   {
    "key": "a",
    "text": "À \\(X\\) elle-même"
   },
   {
    "key": "b",
    "text": "À \\(X^T\\), la transposée de la matrice de design"
   },
   {
    "key": "c",
    "text": "À \\(X^{-1}\\)"
   },
   {
    "key": "d",
    "text": "À \\(X X^T\\)"
   }
  ],
  "ans": "b",
  "ansText": "À \\(X^T\\), la transposée de la matrice de design",
  "id": "generalisation-16",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Dans le cas dual (métrique \\(M'\\) sur les variables, poids \\(W'\\) sur les variables), chercher les axes principaux revient à décomposer quelle matrice ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(X W' X^T M'\\)"
   },
   {
    "key": "b",
    "text": "\\(M' X^T W' X\\)"
   },
   {
    "key": "c",
    "text": "\\(X^T W' X M'\\)"
   },
   {
    "key": "d",
    "text": "\\(W' X X^T\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(X W' X^T M'\\)",
  "id": "generalisation-17",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Avec \\(U = (u_1, \\dots, u_s)\\) les \\(s\\) premiers vecteurs propres, comment s'écrit la matrice des coordonnées des individus projetés relativement à la métrique \\(M\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(p_U(X) = X M U\\)"
   },
   {
    "key": "b",
    "text": "\\(p_U(X) = U^T X\\)"
   },
   {
    "key": "c",
    "text": "\\(p_U(X) = X U\\)"
   },
   {
    "key": "d",
    "text": "\\(p_U(X) = M U X^T\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p_U(X) = X M U\\)",
  "id": "generalisation-18",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Que remarque le cours à la fin de cette section concernant les transformations usuelles des données ?",
  "opts": [
   {
    "key": "a",
    "text": "Qu'il n'a pas été fait mention d'une éventuelle transformation des données (centrage, réduction, division par \\(\\sqrt{n}\\)) dans cette section"
   },
   {
    "key": "b",
    "text": "Que le centrage devient obligatoire dès qu'on utilise une métrique \\(M\\)"
   },
   {
    "key": "c",
    "text": "Que la réduction des données annule automatiquement l'effet des poids \\(w_i\\)"
   },
   {
    "key": "d",
    "text": "Qu'il faut diviser les données par \\(n\\) plutôt que par \\(\\sqrt{n}\\) lorsqu'on pondère les individus"
   }
  ],
  "ans": "a",
  "ansText": "Qu'il n'a pas été fait mention d'une éventuelle transformation des données (centrage, réduction, division par \\(\\sqrt{n}\\)) dans cette section",
  "id": "generalisation-19",
  "cat": "generalisation"
 },
 {
  "type": "num",
  "q": "Soit la métrique \\(M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}\\) sur \\(\\mathbb{R}^2\\) et le vecteur \\(x = (1,1)\\). Calculer \\(\\|x\\|_M^2 = x^T M x\\).",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "generalisation-20",
  "cat": "generalisation"
 },
 {
  "type": "num",
  "q": "Soit la métrique \\(M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}\\) sur \\(\\mathbb{R}^2\\), et les vecteurs \\(x = (2,1)\\), \\(x' = (1,3)\\). Calculer le produit scalaire relatif à \\(M\\), \\(\\langle x, x' \\rangle_M = x^T M x'\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "generalisation-21",
  "cat": "generalisation"
 },
 {
  "type": "num",
  "q": "On dispose de \\(n=4\\) individus avec des poids \\(w = (0.5, 1, 1.5, 1)\\) (vérifiant bien \\(\\sum_i w_i = n\\)) et les valeurs \\(x = (2, 4, 6, 8)\\) d'une variable. En utilisant \\(m_k = \\frac{1}{n}\\sum_{i=1}^n w_i x_{ik}\\), calculer la moyenne pondérée de cette variable.",
  "ans": 5.5,
  "ansText": "5,5",
  "tol": 0.01,
  "id": "generalisation-22",
  "cat": "generalisation"
 },
 {
  "type": "qcm",
  "q": "Que représente un tableau de contingence \\(N\\) en Analyse Factorielle des Correspondances (AFC) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un tableau qui croise deux variables qualitatives \\(P\\) et \\(Q\\), en comptant pour chaque couple de modalités le nombre d'individus qui les possèdent simultanément"
   },
   {
    "key": "b",
    "text": "Un tableau qui recense les valeurs numériques centrées et réduites de plusieurs variables quantitatives"
   },
   {
    "key": "c",
    "text": "Un tableau contenant uniquement les valeurs propres et vecteurs propres d'une matrice de covariance"
   },
   {
    "key": "d",
    "text": "Un tableau donnant, pour chaque individu, sa projection sur les axes factoriels d'une ACP"
   }
  ],
  "ans": "a",
  "ansText": "Un tableau qui croise deux variables qualitatives \\(P\\) et \\(Q\\), en comptant pour chaque couple de modalités le nombre d'individus qui les possèdent simultanément",
  "id": "afc-01",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Dans une table de contingence \\(N\\) de taille \\(p \\times q\\), que représente l'entrée \\(n_{ij}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nombre d'individus possédant à la fois la modalité \\(p_i\\) de \\(P\\) et la modalité \\(q_j\\) de \\(Q\\)"
   },
   {
    "key": "b",
    "text": "La fréquence relative des individus ayant la modalité \\(p_i\\)"
   },
   {
    "key": "c",
    "text": "Le nombre total d'individus de l'échantillon"
   },
   {
    "key": "d",
    "text": "La distance du \\(\\chi^2\\) entre les profils \\(i\\) et \\(j\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le nombre d'individus possédant à la fois la modalité \\(p_i\\) de \\(P\\) et la modalité \\(q_j\\) de \\(Q\\)",
  "id": "afc-02",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "On étudie le lien entre l'animal de compagnie \\(P\\) (chat, chien, souris, lézard) et la couleur des yeux \\(Q\\) (bleu, vert, marron) sur un échantillon. Pour la modalité \\(\\text{chat}\\), on a \\(n_{\\text{chat,bleu}}=45\\), \\(n_{\\text{chat,vert}}=34\\), \\(n_{\\text{chat,marron}}=12\\). Quelle est la marge \\(n_{\\text{chat}\\cdot}\\) ?",
  "ans": 91,
  "ansText": "91",
  "tol": 0.1,
  "id": "afc-03",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Pour la modalité \\(\\text{chien}\\) du même exemple, on a \\(n_{\\text{chien,bleu}}=3\\), \\(n_{\\text{chien,vert}}=21\\), \\(n_{\\text{chien,marron}}=90\\). Quelle est la marge \\(n_{\\text{chien}\\cdot}\\) ?",
  "ans": 114,
  "ansText": "114",
  "tol": 0.1,
  "id": "afc-04",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "En reprenant l'exemple précédent, les marges en lignes valent \\(n_{\\text{chat}\\cdot}=91\\), \\(n_{\\text{chien}\\cdot}=114\\), \\(n_{\\text{souris}\\cdot}=16\\), \\(n_{\\text{lézard}\\cdot}=27\\). Quel est l'effectif total \\(n\\) de l'échantillon ?",
  "ans": 248,
  "ansText": "248",
  "tol": 0.1,
  "id": "afc-05",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Comment définit-on la table des fréquences \\(F\\) à partir de la table des effectifs bruts \\(N\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f_{ij} = n_{ij}/n\\), où \\(n\\) est l'effectif total"
   },
   {
    "key": "b",
    "text": "\\(f_{ij} = n_{ij}/n_{i\\cdot}\\)"
   },
   {
    "key": "c",
    "text": "\\(f_{ij} = n_{ij}/n_{\\cdot j}\\)"
   },
   {
    "key": "d",
    "text": "\\(f_{ij} = n_{i\\cdot} \\, n_{\\cdot j}/n^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f_{ij} = n_{ij}/n\\), où \\(n\\) est l'effectif total",
  "id": "afc-06",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Avec \\(n_{\\text{chat,bleu}}=45\\) et \\(n=248\\), calculer \\(f_{\\text{chat,bleu}}=n_{\\text{chat,bleu}}/n\\).",
  "ans": 0.1815,
  "ansText": "≈0,18 (45/248)",
  "tol": 0.01,
  "id": "afc-07",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Deux variables qualitatives \\(P\\) et \\(Q\\) sont dites indépendantes (notée \\(P \\perp Q\\)) lorsque",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall (i,j),\\; f_{ij} = f_{i\\cdot} f_{\\cdot j}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall (i,j),\\; f_{ij} = f_{i\\cdot} + f_{\\cdot j}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall (i,j),\\; f_{ij} = f_{ij}^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall (i,j),\\; n_{ij} = n/(pq)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall (i,j),\\; f_{ij} = f_{i\\cdot} f_{\\cdot j}\\)",
  "id": "afc-08",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Si, pour un couple de modalités \\((p_i, q_j)\\), on observe \\(f_{ij} > f_{i\\cdot} f_{\\cdot j}\\), que dit-on ?",
  "opts": [
   {
    "key": "a",
    "text": "Les modalités \\(p_i\\) et \\(q_j\\) s'attirent : la fréquence jointe observée dépasse le produit des fréquences marginales"
   },
   {
    "key": "b",
    "text": "Les modalités \\(p_i\\) et \\(q_j\\) se repoussent"
   },
   {
    "key": "c",
    "text": "Les variables \\(P\\) et \\(Q\\) sont indépendantes pour ce couple"
   },
   {
    "key": "d",
    "text": "La distance du \\(\\chi^2\\) entre ces deux modalités est nulle"
   }
  ],
  "ans": "a",
  "ansText": "Les modalités \\(p_i\\) et \\(q_j\\) s'attirent : la fréquence jointe observée dépasse le produit des fréquences marginales",
  "id": "afc-09",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple animal/couleur des yeux, on observe \\(f_{\\text{chat,bleu}} \\approx 0{,}18\\) alors que \\(f_{\\text{chat}\\cdot} f_{\\cdot \\text{bleu}} \\approx 0{,}09\\). Qu'en conclut-on ?",
  "opts": [
   {
    "key": "a",
    "text": "Les modalités « chat » et « bleu » s'attirent : la fréquence jointe observée dépasse largement la fréquence théorique sous indépendance"
   },
   {
    "key": "b",
    "text": "Les modalités « chat » et « bleu » se repoussent"
   },
   {
    "key": "c",
    "text": "Les variables « animal » et « couleur des yeux » sont indépendantes pour ce couple de modalités"
   },
   {
    "key": "d",
    "text": "On ne peut rien conclure sans connaître la distance du \\(\\chi^2\\) globale"
   }
  ],
  "ans": "a",
  "ansText": "Les modalités « chat » et « bleu » s'attirent : la fréquence jointe observée dépasse largement la fréquence théorique sous indépendance",
  "id": "afc-10",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Comment est défini le profil ligne \\(l_{ij}\\) associé à la modalité \\(p_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(l_{ij} = f_{ij}/f_{i\\cdot}\\), le pourcentage d'individus ayant la modalité \\(q_j\\) parmi ceux ayant la modalité \\(p_i\\)"
   },
   {
    "key": "b",
    "text": "\\(l_{ij} = f_{ij}/f_{\\cdot j}\\)"
   },
   {
    "key": "c",
    "text": "\\(l_{ij} = f_{i\\cdot}/f_{ij}\\)"
   },
   {
    "key": "d",
    "text": "\\(l_{ij} = f_{ij} \\cdot f_{i\\cdot}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(l_{ij} = f_{ij}/f_{i\\cdot}\\), le pourcentage d'individus ayant la modalité \\(q_j\\) parmi ceux ayant la modalité \\(p_i\\)",
  "id": "afc-11",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Comment est défini le profil colonne \\(c_{ij}\\) associé à la modalité \\(q_j\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(c_{ij} = f_{ij}/f_{\\cdot j}\\), le pourcentage d'individus ayant la modalité \\(p_i\\) parmi ceux ayant la modalité \\(q_j\\)"
   },
   {
    "key": "b",
    "text": "\\(c_{ij} = f_{ij}/f_{i\\cdot}\\)"
   },
   {
    "key": "c",
    "text": "\\(c_{ij} = f_{\\cdot j}/f_{ij}\\)"
   },
   {
    "key": "d",
    "text": "\\(c_{ij} = f_{ij} \\cdot f_{\\cdot j}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(c_{ij} = f_{ij}/f_{\\cdot j}\\), le pourcentage d'individus ayant la modalité \\(p_i\\) parmi ceux ayant la modalité \\(q_j\\)",
  "id": "afc-12",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Pour la modalité « souris », on a \\(n_{\\text{souris,bleu}}=2\\) et \\(n_{\\text{souris}\\cdot}=16\\). Calculer le profil ligne \\(l_{\\text{souris,bleu}} = n_{\\text{souris,bleu}}/n_{\\text{souris}\\cdot}\\).",
  "ans": 0.125,
  "ansText": "0,125",
  "tol": 0.005,
  "id": "afc-13",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Toujours pour « souris », on a \\(n_{\\text{souris,marron}}=8\\) et \\(n_{\\text{souris}\\cdot}=16\\). Calculer le profil ligne \\(l_{\\text{souris,marron}}\\).",
  "ans": 0.5,
  "ansText": "0,5",
  "tol": 0.005,
  "id": "afc-14",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Pour « chat », on a \\(n_{\\text{chat,marron}}=12\\) et \\(n_{\\text{chat}\\cdot}=91\\). Calculer le profil ligne \\(l_{\\text{chat,marron}}\\).",
  "ans": 0.1319,
  "ansText": "≈0,13 (12/91)",
  "tol": 0.01,
  "id": "afc-15",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Pour la couleur « marron », on a \\(n_{\\text{chien,marron}}=90\\) et \\(n_{\\cdot \\text{marron}}=117\\). Calculer le profil colonne \\(c_{\\text{chien,marron}} = n_{\\text{chien,marron}}/n_{\\cdot \\text{marron}}\\).",
  "ans": 0.7692,
  "ansText": "≈0,77 (90/117)",
  "tol": 0.02,
  "id": "afc-16",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Pour la couleur « vert », on a \\(n_{\\text{chat,vert}}=34\\) et \\(n_{\\cdot \\text{vert}}=69\\). Calculer le profil colonne \\(c_{\\text{chat,vert}}\\).",
  "ans": 0.4928,
  "ansText": "≈0,49 (34/69)",
  "tol": 0.01,
  "id": "afc-17",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de l'AFC, à quel espace appartiennent les profils lignes et à quoi correspondent-ils par analogie avec l'ACP ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^q\\), qui jouent le rôle des individus en ACP"
   },
   {
    "key": "b",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^p\\), qui jouent le rôle des variables en ACP"
   },
   {
    "key": "c",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^q\\), qui jouent le rôle des variables en ACP"
   },
   {
    "key": "d",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^{p \\times q}\\), qui jouent le rôle des axes factoriels"
   }
  ],
  "ans": "a",
  "ansText": "Ce sont des vecteurs de \\(\\mathbb{R}^q\\), qui jouent le rôle des individus en ACP",
  "id": "afc-18",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de l'AFC, à quel espace appartiennent les profils colonnes et à quoi correspondent-ils par analogie avec l'ACP ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^p\\), qui jouent le rôle des variables en ACP"
   },
   {
    "key": "b",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^q\\), qui jouent le rôle des individus en ACP"
   },
   {
    "key": "c",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^p\\), qui jouent le rôle des individus en ACP"
   },
   {
    "key": "d",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^{pq}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Ce sont des vecteurs de \\(\\mathbb{R}^p\\), qui jouent le rôle des variables en ACP",
  "id": "afc-19",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Quel facteur de pondération intervient dans la distance du \\(\\chi^2\\) entre deux profils lignes \\(l_a\\) et \\(l_b\\), \\(d^2_{\\chi^2}(l_a,l_b) = \\sum_j \\frac{1}{f_{\\cdot j}} \\left(\\frac{f_{aj}}{f_{a\\cdot}} - \\frac{f_{bj}}{f_{b\\cdot}}\\right)^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(1/f_{\\cdot j}\\), l'inverse de la marge de la colonne \\(j\\) : plus la modalité \\(q_j\\) est rare, plus l'écart pèse"
   },
   {
    "key": "b",
    "text": "\\(1/f_{i\\cdot}\\), l'inverse de la marge de la ligne \\(i\\)"
   },
   {
    "key": "c",
    "text": "\\(f_{\\cdot j}\\), la marge de la colonne \\(j\\) directement"
   },
   {
    "key": "d",
    "text": "\\(1/n\\), l'inverse de l'effectif total"
   }
  ],
  "ans": "a",
  "ansText": "\\(1/f_{\\cdot j}\\), l'inverse de la marge de la colonne \\(j\\) : plus la modalité \\(q_j\\) est rare, plus l'écart pèse",
  "id": "afc-20",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "On donne les profils lignes exacts \\(l_{\\text{chat,bleu}} = 45/91\\) et \\(l_{\\text{chien,bleu}} = 3/114\\), ainsi que la marge \\(f_{\\cdot \\text{bleu}} = 62/248 = 0{,}25\\). Calculer la contribution du terme « bleu » à la distance du \\(\\chi^2\\) entre les profils lignes chat et chien : \\(\\frac{1}{f_{\\cdot \\text{bleu}}}\\left(l_{\\text{chat,bleu}} - l_{\\text{chien,bleu}}\\right)^2\\).",
  "ans": 0.877,
  "ansText": "≈0,88",
  "tol": 0.03,
  "id": "afc-21",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "On donne les profils lignes exacts \\(l_{\\text{souris,marron}} = 8/16\\) et \\(l_{\\text{lézard,marron}} = 7/27\\), ainsi que la marge \\(f_{\\cdot \\text{marron}} = 117/248\\). Calculer la contribution du terme « marron » à la distance du \\(\\chi^2\\) entre les profils lignes souris et lézard : \\(\\frac{1}{f_{\\cdot \\text{marron}}}\\left(l_{\\text{souris,marron}} - l_{\\text{lézard,marron}}\\right)^2\\).",
  "ans": 0.123,
  "ansText": "≈0,12",
  "tol": 0.03,
  "id": "afc-22",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "On a \\(f_{\\text{lézard}\\cdot} = 27/248 \\approx 0{,}109\\) et \\(f_{\\cdot \\text{bleu}} = 62/248 = 0{,}25\\). Sous le modèle d'indépendance, calculer la fréquence théorique \\(f'_{\\text{lézard,bleu}} = f_{\\text{lézard}\\cdot} \\times f_{\\cdot \\text{bleu}}\\).",
  "ans": 0.027,
  "ansText": "≈0,03",
  "tol": 0.015,
  "id": "afc-23",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Avec \\(f_{\\text{lézard}\\cdot} \\approx 0{,}109\\) et \\(f_{\\cdot \\text{marron}} = 117/248 \\approx 0{,}472\\), calculer la fréquence théorique \\(f'_{\\text{lézard,marron}}\\) sous le modèle d'indépendance.",
  "ans": 0.0514,
  "ansText": "≈0,05",
  "tol": 0.015,
  "id": "afc-24",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Avec \\(f_{\\text{chat}\\cdot} = 91/248 \\approx 0{,}368\\) et \\(f_{\\cdot \\text{marron}} \\approx 0{,}472\\), calculer la fréquence théorique \\(f'_{\\text{chat,marron}}\\) sous le modèle d'indépendance.",
  "ans": 0.1735,
  "ansText": "≈0,17",
  "tol": 0.02,
  "id": "afc-25",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Quelle relation matricielle relie la matrice des profils lignes \\(L\\) à la matrice des fréquences \\(F\\) et à la matrice diagonale \\(D_P\\) des marges de \\(P\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(L = D_P^{-1} F\\)"
   },
   {
    "key": "b",
    "text": "\\(L = F D_P^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(L = D_Q^{-1} F\\)"
   },
   {
    "key": "d",
    "text": "\\(L = F D_Q^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(L = D_P^{-1} F\\)",
  "id": "afc-26",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Quelle relation matricielle relie la matrice des profils colonnes \\(C\\) (transposée) à \\(F\\) et à \\(D_Q\\), la matrice diagonale des marges de \\(Q\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(C^T = D_Q^{-1} F^T\\)"
   },
   {
    "key": "b",
    "text": "\\(C^T = D_P^{-1} F^T\\)"
   },
   {
    "key": "c",
    "text": "\\(C = D_Q^{-1} F\\)"
   },
   {
    "key": "d",
    "text": "\\(C^T = F^T D_Q^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(C^T = D_Q^{-1} F^T\\)",
  "id": "afc-27",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Le barycentre \\(\\bar l = \\sum_i f_{i\\cdot} l_i\\) des profils lignes (pondérés par les marges \\(f_{i\\cdot}\\)) est égal à",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur des marges de la variable \\(Q\\), \\((f_{\\cdot 1}, \\dots, f_{\\cdot q})\\)"
   },
   {
    "key": "b",
    "text": "Le vecteur des marges de la variable \\(P\\), \\((f_{1\\cdot}, \\dots, f_{p\\cdot})\\)"
   },
   {
    "key": "c",
    "text": "Le vecteur nul de \\(\\mathbb{R}^q\\)"
   },
   {
    "key": "d",
    "text": "Le vecteur uniforme \\((1/q, \\dots, 1/q)\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur des marges de la variable \\(Q\\), \\((f_{\\cdot 1}, \\dots, f_{\\cdot q})\\)",
  "id": "afc-28",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Le barycentre \\(\\bar c = \\sum_j f_{\\cdot j} c_j\\) des profils colonnes est égal à",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur des marges de la variable \\(P\\), \\((f_{1\\cdot}, \\dots, f_{p\\cdot})\\)"
   },
   {
    "key": "b",
    "text": "Le vecteur des marges de la variable \\(Q\\), \\((f_{\\cdot 1}, \\dots, f_{\\cdot q})\\)"
   },
   {
    "key": "c",
    "text": "Le vecteur nul de \\(\\mathbb{R}^p\\)"
   },
   {
    "key": "d",
    "text": "Le vecteur uniforme \\((1/p, \\dots, 1/p)\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur des marges de la variable \\(P\\), \\((f_{1\\cdot}, \\dots, f_{p\\cdot})\\)",
  "id": "afc-29",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Pour trouver les axes factoriels \\(u_m\\) associés aux profils lignes, quelle matrice carrée \\(S \\in M_q(\\mathbb{R})\\) doit-on diagonaliser ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(S = F^T D_P^{-1} F D_Q^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(S = F D_P^{-1} F^T D_Q^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(S = F^T D_Q^{-1} F D_P^{-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(S = D_P^{-1} F D_Q^{-1} F^T\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(S = F^T D_P^{-1} F D_Q^{-1}\\)",
  "id": "afc-30",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Pour trouver les axes factoriels \\(u'_m\\) associés aux profils colonnes, quelle matrice carrée \\(T \\in M_p(\\mathbb{R})\\) doit-on diagonaliser ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(T = F D_Q^{-1} F^T D_P^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(T = F^T D_Q^{-1} F D_P^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(T = F D_P^{-1} F^T D_Q^{-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(T = D_Q^{-1} F^T D_P^{-1} F\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(T = F D_Q^{-1} F^T D_P^{-1}\\)",
  "id": "afc-31",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Lorsque l'AFC est réalisée sur le nuage non centré des profils lignes, quelles propriétés vérifie le premier axe factoriel ?",
  "opts": [
   {
    "key": "a",
    "text": "Il relie l'origine au barycentre \\(\\bar l\\), toutes les projections des profils lignes tombent en \\(\\bar l\\), et l'inertie projetée sur cet axe vaut 1 : c'est un axe trivial, sans information"
   },
   {
    "key": "b",
    "text": "Il sépare parfaitement l'ensemble des modalités en deux groupes bien distincts"
   },
   {
    "key": "c",
    "text": "Il correspond à la plus petite valeur propre du système"
   },
   {
    "key": "d",
    "text": "Il n'existe que lorsque le tableau de contingence est carré (\\(p = q\\))"
   }
  ],
  "ans": "a",
  "ansText": "Il relie l'origine au barycentre \\(\\bar l\\), toutes les projections des profils lignes tombent en \\(\\bar l\\), et l'inertie projetée sur cet axe vaut 1 : c'est un axe trivial, sans information",
  "id": "afc-32",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Dans l'exemple animal (4 modalités pour \\(P\\)) / couleur des yeux (3 modalités pour \\(Q\\)), on a \\(\\min(p,q) = 3\\) et le premier axe factoriel (\\(\\lambda_1 = 1\\)) est trivial. Combien d'axes factoriels non triviaux, utiles à l'interprétation, l'AFC produit-elle au maximum ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.1,
  "id": "afc-33",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Quelle relation de dualité relie les axes factoriels \\(u_m\\) (profils lignes) et \\(u'_m\\) (profils colonnes) associés à une même valeur propre \\(\\lambda_m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_m = \\frac{1}{\\sqrt{\\lambda_m}} F^T D_P^{-1} u'_m\\) et \\(u'_m = \\frac{1}{\\sqrt{\\lambda_m}} F D_Q^{-1} u_m\\)"
   },
   {
    "key": "b",
    "text": "\\(u_m = \\lambda_m F^T D_Q^{-1} u'_m\\)"
   },
   {
    "key": "c",
    "text": "\\(u_m = u'_m\\) pour toute valeur propre \\(\\lambda_m\\)"
   },
   {
    "key": "d",
    "text": "\\(u_m = \\frac{1}{\\sqrt{\\lambda_m}} D_P^{-1} F u'_m\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_m = \\frac{1}{\\sqrt{\\lambda_m}} F^T D_P^{-1} u'_m\\) et \\(u'_m = \\frac{1}{\\sqrt{\\lambda_m}} F D_Q^{-1} u_m\\)",
  "id": "afc-34",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire des coordonnées principales (composantes sur un axe factoriel \\(u_m\\)) des profils lignes, associées à la valeur propre \\(\\lambda_m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles sont centrées, \\(\\sum_i f_{i\\cdot}\\, p_{u_m}(F)_i = 0\\), et leur inertie (variance pondérée) vaut \\(\\lambda_m\\)"
   },
   {
    "key": "b",
    "text": "Elles sont centrées, mais leur inertie vaut toujours 1 quel que soit l'axe"
   },
   {
    "key": "c",
    "text": "Elles ne sont pas centrées et leur inertie vaut \\(\\lambda_m\\)"
   },
   {
    "key": "d",
    "text": "Leur somme non pondérée (sans les \\(f_{i\\cdot}\\)) vaut \\(\\lambda_m\\)"
   }
  ],
  "ans": "a",
  "ansText": "Elles sont centrées, \\(\\sum_i f_{i\\cdot}\\, p_{u_m}(F)_i = 0\\), et leur inertie (variance pondérée) vaut \\(\\lambda_m\\)",
  "id": "afc-35",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Comment l'inertie totale \\(\\varphi^2\\) (qui mesure l'intensité de la liaison entre \\(P\\) et \\(Q\\)) s'exprime-t-elle en fonction des valeurs propres \\(\\lambda_m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi^2 = \\sum_{m=2}^{\\min(p,q)} \\lambda_m\\) (on exclut la valeur propre triviale \\(\\lambda_1=1\\))"
   },
   {
    "key": "b",
    "text": "\\(\\varphi^2 = \\sum_{m=1}^{\\min(p,q)} \\lambda_m\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi^2 = \\max_m \\lambda_m\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varphi^2 = \\lambda_1 \\times \\lambda_2 \\times \\dots \\times \\lambda_{\\min(p,q)}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi^2 = \\sum_{m=2}^{\\min(p,q)} \\lambda_m\\) (on exclut la valeur propre triviale \\(\\lambda_1=1\\))",
  "id": "afc-36",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "On a diagonalisé la matrice \\(S\\) pour un tableau tel que \\(\\min(p,q)=3\\), et obtenu les valeurs propres non triviales \\(\\lambda_2 = 0{,}18\\) et \\(\\lambda_3 = 0{,}05\\) (avec \\(\\lambda_1 = 1\\) l'axe trivial). Calculer l'inertie totale \\(\\varphi^2 = \\sum_{m=2}^{3} \\lambda_m\\).",
  "ans": 0.23,
  "ansText": "0,23",
  "tol": 0.01,
  "id": "afc-37",
  "cat": "afc"
 },
 {
  "type": "num",
  "q": "Avec \\(\\lambda_2 = 0{,}18\\) et \\(\\varphi^2 = 0{,}23\\) (valeurs de la question précédente), calculer le taux d'inertie de l'axe 2, défini par \\(\\lambda_2/\\varphi^2\\).",
  "ans": 0.7826,
  "ansText": "≈0,78",
  "tol": 0.02,
  "id": "afc-38",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Si une valeur propre \\(\\lambda_m\\) est très proche de 1, que peut-on en déduire sur le nuage projeté ?",
  "opts": [
   {
    "key": "a",
    "text": "L'axe sépare l'ensemble des modalités d'une variable en deux sous-groupes bien distincts ; la matrice \\(F\\) peut alors être réorganisée en diagonale par blocs"
   },
   {
    "key": "b",
    "text": "Les deux variables \\(P\\) et \\(Q\\) sont parfaitement indépendantes"
   },
   {
    "key": "c",
    "text": "L'axe est trivial et n'apporte strictement aucune information"
   },
   {
    "key": "d",
    "text": "La distance du \\(\\chi^2\\) entre tous les profils est nulle"
   }
  ],
  "ans": "a",
  "ansText": "L'axe sépare l'ensemble des modalités d'une variable en deux sous-groupes bien distincts ; la matrice \\(F\\) peut alors être réorganisée en diagonale par blocs",
  "id": "afc-39",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Si \\(k\\) valeurs propres sont proches de 1, que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nuage est scindé en \\(k\\) sous-groupes ; la matrice \\(F\\) peut être réorganisée en blocs diagonaux en permutant lignes et colonnes"
   },
   {
    "key": "b",
    "text": "Il existe exactement \\(k\\) modalités pour la variable \\(P\\)"
   },
   {
    "key": "c",
    "text": "L'inertie totale \\(\\varphi^2\\) est exactement égale à \\(k\\)"
   },
   {
    "key": "d",
    "text": "L'AFC échoue et ne peut plus être interprétée dans ce cas"
   }
  ],
  "ans": "a",
  "ansText": "Le nuage est scindé en \\(k\\) sous-groupes ; la matrice \\(F\\) peut être réorganisée en blocs diagonaux en permutant lignes et colonnes",
  "id": "afc-40",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Qu'appelle-t-on l'effet Guttman en AFC ?",
  "opts": [
   {
    "key": "a",
    "text": "Un nuage de points en forme de parabole, où le premier axe oppose des modalités extrêmes tandis que le second sépare les valeurs intermédiaires des valeurs extrêmes"
   },
   {
    "key": "b",
    "text": "Un phénomène où toutes les valeurs propres calculées sont nulles"
   },
   {
    "key": "c",
    "text": "Un cas particulier où le tableau de contingence est parfaitement diagonal dès le départ"
   },
   {
    "key": "d",
    "text": "Une méthode de correction appliquée lorsque des effectifs sont trop faibles"
   }
  ],
  "ans": "a",
  "ansText": "Un nuage de points en forme de parabole, où le premier axe oppose des modalités extrêmes tandis que le second sépare les valeurs intermédiaires des valeurs extrêmes",
  "id": "afc-41",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "En quoi consiste l'équivalence distributionnelle en AFC ?",
  "opts": [
   {
    "key": "a",
    "text": "Si l'on agrège deux modalités d'une même variable ayant des profils identiques en une seule modalité (de masse la somme des deux masses), les distances du \\(\\chi^2\\) entre les profils de l'autre variable restent inchangées"
   },
   {
    "key": "b",
    "text": "Toutes les distances du \\(\\chi^2\\) sont égales entre elles, quelle que soit la table étudiée"
   },
   {
    "key": "c",
    "text": "Les profils lignes et les profils colonnes suivent toujours la même distribution de probabilité"
   },
   {
    "key": "d",
    "text": "L'agrégation de deux modalités quelconques ne change jamais les résultats de l'AFC, même si leurs profils diffèrent"
   }
  ],
  "ans": "a",
  "ansText": "Si l'on agrège deux modalités d'une même variable ayant des profils identiques en une seule modalité (de masse la somme des deux masses), les distances du \\(\\chi^2\\) entre les profils de l'autre variable restent inchangées",
  "id": "afc-42",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "En quoi l'AFC diffère-t-elle fondamentalement de l'ACP concernant les rôles joués par les lignes et les colonnes du tableau étudié ?",
  "opts": [
   {
    "key": "a",
    "text": "En AFC, profils lignes et profils colonnes jouent un rôle symétrique (ce sont simplement deux variables qualitatives différentes), alors qu'en ACP les rôles des individus et des variables sont distincts"
   },
   {
    "key": "b",
    "text": "En AFC, seules les lignes du tableau sont analysées, jamais les colonnes"
   },
   {
    "key": "c",
    "text": "En ACP, lignes et colonnes jouent un rôle parfaitement symétrique, contrairement à l'AFC"
   },
   {
    "key": "d",
    "text": "L'AFC et l'ACP portent toutes deux exclusivement sur des données quantitatives"
   }
  ],
  "ans": "a",
  "ansText": "En AFC, profils lignes et profils colonnes jouent un rôle symétrique (ce sont simplement deux variables qualitatives différentes), alors qu'en ACP les rôles des individus et des variables sont distincts",
  "id": "afc-43",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formule de la contribution d'un profil ligne \\(l_i\\) à un axe factoriel \\(u_m\\) associé à la valeur propre \\(\\lambda_m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f_{i\\cdot} \\, (p_{u_m}(F)_i)^2 / \\lambda_m\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda_m / f_{i\\cdot}\\)"
   },
   {
    "key": "c",
    "text": "\\(p_{u_m}(F)_i / f_{i\\cdot}\\)"
   },
   {
    "key": "d",
    "text": "\\(f_{i\\cdot} \\times \\lambda_m\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f_{i\\cdot} \\, (p_{u_m}(F)_i)^2 / \\lambda_m\\)",
  "id": "afc-44",
  "cat": "afc"
 },
 {
  "type": "qcm",
  "q": "Que permet de faire l'Analyse factorielle des Correspondances Multiples (ACM) par rapport à l'AFC ?",
  "opts": [
   {
    "key": "a",
    "text": "Généraliser l'étude de deux variables qualitatives à l'étude de plusieurs variables qualitatives"
   },
   {
    "key": "b",
    "text": "Généraliser l'étude de variables quantitatives à des variables qualitatives"
   },
   {
    "key": "c",
    "text": "Remplacer l'ACP lorsque les variables sont fortement corrélées"
   },
   {
    "key": "d",
    "text": "Étudier une seule variable qualitative possédant un grand nombre de modalités"
   }
  ],
  "ans": "a",
  "ansText": "Généraliser l'étude de deux variables qualitatives à l'étude de plusieurs variables qualitatives",
  "id": "acm-01",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de l'ACM, une population de \\(n\\) individus est décrite par un ensemble de \\(p\\) variables de quelle nature ?",
  "opts": [
   {
    "key": "a",
    "text": "Quantitatives continues"
   },
   {
    "key": "b",
    "text": "Qualitatives nominales (catégorielles)"
   },
   {
    "key": "c",
    "text": "Qualitatives ordinales uniquement"
   },
   {
    "key": "d",
    "text": "Quantitatives discrètes"
   }
  ],
  "ans": "b",
  "ansText": "Qualitatives nominales (catégorielles)",
  "id": "acm-02",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Lorsque l'ACM est utilisée pour analyser les réponses à une enquête, à quoi correspond une modalité ?",
  "opts": [
   {
    "key": "a",
    "text": "À une question fermée de l'enquête"
   },
   {
    "key": "b",
    "text": "À une réponse possible parmi celles proposées pour une question donnée"
   },
   {
    "key": "c",
    "text": "À un individu interrogé au cours de l'enquête"
   },
   {
    "key": "d",
    "text": "À la moyenne des réponses obtenues à une question"
   }
  ],
  "ans": "b",
  "ansText": "À une réponse possible parmi celles proposées pour une question donnée",
  "id": "acm-03",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Que produit la phase de codage (binarisation) appliquée à une variable \\(v_j\\) possédant \\(k_j\\) modalités ?",
  "opts": [
   {
    "key": "a",
    "text": "Un vecteur de \\(\\mathbb{R}^n\\) laissé inchangé"
   },
   {
    "key": "b",
    "text": "Une matrice \\(Z_j\\) de taille \\(n \\times k_j\\), à valeurs binaires"
   },
   {
    "key": "c",
    "text": "Une matrice carrée de taille \\(k_j \\times k_j\\)"
   },
   {
    "key": "d",
    "text": "Un simple scalaire représentant le nombre de modalités"
   }
  ],
  "ans": "b",
  "ansText": "Une matrice \\(Z_j\\) de taille \\(n \\times k_j\\), à valeurs binaires",
  "id": "acm-04",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "D'après le chapitre, en quoi le codage (binarisation) diffère-t-il de l'encodage des réponses évoqué plus tôt dans le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce sont deux termes strictement synonymes"
   },
   {
    "key": "b",
    "text": "L'encodage consiste seulement à attribuer une valeur numérique à une réponse, alors que le codage projette la variable dans un espace de dimension égale au nombre de modalités"
   },
   {
    "key": "c",
    "text": "Le codage ne s'applique qu'à des variables quantitatives"
   },
   {
    "key": "d",
    "text": "L'encodage nécessite de connaître au préalable les valeurs propres de la matrice \\(S\\)"
   }
  ],
  "ans": "b",
  "ansText": "L'encodage consiste seulement à attribuer une valeur numérique à une réponse, alors que le codage projette la variable dans un espace de dimension égale au nombre de modalités",
  "id": "acm-05",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Comment obtient-on le tableau disjonctif complet \\(Z\\) à partir des matrices \\(Z_1, \\dots, Z_p\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "En sommant terme à terme les matrices \\(Z_j\\)"
   },
   {
    "key": "b",
    "text": "En concaténant les matrices \\(Z_j\\) (ou les vecteurs binaires des modalités) pour former une matrice de taille \\(n \\times q\\), avec \\(q = \\sum_{j=1}^p k_j\\)"
   },
   {
    "key": "c",
    "text": "En multipliant les matrices \\(Z_j\\) entre elles"
   },
   {
    "key": "d",
    "text": "En ne conservant que la première colonne de chaque \\(Z_j\\)"
   }
  ],
  "ans": "b",
  "ansText": "En concaténant les matrices \\(Z_j\\) (ou les vecteurs binaires des modalités) pour former une matrice de taille \\(n \\times q\\), avec \\(q = \\sum_{j=1}^p k_j\\)",
  "id": "acm-06",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "À quoi correspondent les marges des colonnes \\(Z_{\\cdot k}\\) du tableau disjonctif complet \\(Z\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Au nombre total de variables \\(p\\)"
   },
   {
    "key": "b",
    "text": "À la fréquence (l'effectif) de la modalité \\(k\\) dans la population"
   },
   {
    "key": "c",
    "text": "À la somme des valeurs propres de la matrice \\(S\\)"
   },
   {
    "key": "d",
    "text": "Toujours à \\(1\\), quelle que soit la modalité"
   }
  ],
  "ans": "b",
  "ansText": "À la fréquence (l'effectif) de la modalité \\(k\\) dans la population",
  "id": "acm-07",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Que valent les marges des lignes \\(o_{i\\cdot}\\) du tableau disjonctif complet \\(Z\\), pour tout individu \\(i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(o_{i\\cdot} = n\\), le nombre d'individus"
   },
   {
    "key": "b",
    "text": "\\(o_{i\\cdot} = q\\), le nombre total de modalités"
   },
   {
    "key": "c",
    "text": "\\(o_{i\\cdot} = p\\), le nombre de variables (ou de questions)"
   },
   {
    "key": "d",
    "text": "\\(o_{i\\cdot} = 1\\), quel que soit \\(p\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(o_{i\\cdot} = p\\), le nombre de variables (ou de questions)",
  "id": "acm-08",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "On considère \\(p = 3\\) variables qualitatives, comme dans l'exemple du chapitre : le genre (2 modalités), la tranche d'âge (4 modalités) et le statut civil (3 modalités). Quel est le nombre de colonnes \\(q\\) du tableau disjonctif complet \\(Z\\) ?",
  "ans": 9,
  "ansText": "9 (car \\(q = 2+4+3\\))",
  "tol": 0.001,
  "id": "acm-09",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "On dispose de \\(p = 4\\) variables qualitatives ayant respectivement 2, 3, 5 et 4 modalités. Quel est le nombre de colonnes \\(q\\) du tableau disjonctif complet correspondant ?",
  "ans": 14,
  "ansText": "14 (car \\(q = 2+3+5+4\\))",
  "tol": 0.001,
  "id": "acm-10",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Pour une enquête comportant \\(p = 6\\) variables (questions), à quelle valeur est égale la marge de ligne \\(o_{i\\cdot}\\) du tableau disjonctif complet, pour chaque individu \\(i\\) ?",
  "ans": 6,
  "ansText": "6 (\\(o_{i\\cdot}=p\\))",
  "tol": 0.001,
  "id": "acm-11",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Pour une population de \\(n = 40\\) individus décrite par \\(p = 4\\) variables qualitatives, quelle est la somme de tous les éléments du tableau disjonctif complet \\(Z\\) ?",
  "ans": 160,
  "ansText": "160 (somme totale égale à \\(np\\))",
  "tol": 0.001,
  "id": "acm-12",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "En ACM, quels sont les deux nuages de points étudiés, et dans quels espaces sont-ils représentés ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nuage des individus dans \\(\\mathbb{R}^q\\) et le nuage des modalités dans \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "b",
    "text": "Le nuage des individus dans \\(\\mathbb{R}^n\\) et le nuage des modalités dans \\(\\mathbb{R}^q\\)"
   },
   {
    "key": "c",
    "text": "Le nuage des variables dans \\(\\mathbb{R}^p\\) et le nuage des individus dans \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "d",
    "text": "Un seul nuage, celui des modalités, représenté dans \\(\\mathbb{R}^q\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le nuage des individus dans \\(\\mathbb{R}^q\\) et le nuage des modalités dans \\(\\mathbb{R}^n\\)",
  "id": "acm-13",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Comment le chapitre présente-t-il l'ACM par rapport à l'AFC ?",
  "opts": [
   {
    "key": "a",
    "text": "L'ACM est une méthode totalement indépendante, sans lien avec l'AFC"
   },
   {
    "key": "b",
    "text": "L'ACM se présente comme une AFC appliquée au tableau disjonctif complet"
   },
   {
    "key": "c",
    "text": "L'ACM remplace le tableau disjonctif complet par la matrice \\(N\\) brute"
   },
   {
    "key": "d",
    "text": "L'ACM n'utilise pas la distance du \\(\\chi^2\\), contrairement à l'AFC"
   }
  ],
  "ans": "b",
  "ansText": "L'ACM se présente comme une AFC appliquée au tableau disjonctif complet",
  "id": "acm-14",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Dans l'exemple du chapitre (\\(n = 7\\) individus, \\(p = 3\\) variables), la somme des fréquences \\(f_{i\\cdot}\\) d'un profil ligne (identique pour tous les individus) vaut \\(1/n\\). Quelle est cette valeur numérique ?",
  "ans": 0.142857,
  "ansText": "1/7 ≈ 0.142857",
  "tol": 0.001,
  "id": "acm-15",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Quels sont les termes diagonaux de la matrice \\(D_M\\), construite à partir du tableau des fréquences \\(F\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f_{\\cdot k} = \\dfrac{Z_{\\cdot k}}{np}\\)"
   },
   {
    "key": "b",
    "text": "\\(f_{\\cdot k} = \\dfrac{1}{n}\\)"
   },
   {
    "key": "c",
    "text": "\\(f_{\\cdot k} = Z_{\\cdot k}\\)"
   },
   {
    "key": "d",
    "text": "\\(f_{\\cdot k} = \\dfrac{n}{Z_{\\cdot k}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f_{\\cdot k} = \\dfrac{Z_{\\cdot k}}{np}\\)",
  "id": "acm-16",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "On considère une enquête avec \\(n = 10\\) individus et \\(p = 5\\) variables qualitatives. Une modalité \\(k\\) est choisie par \\(Z_{\\cdot k} = 8\\) individus. Quelle est la valeur du terme diagonal \\(f_{\\cdot k} = \\dfrac{Z_{\\cdot k}}{np}\\) de la matrice \\(D_M\\) ?",
  "ans": 0.16,
  "ansText": "0,16 (8 / 50)",
  "tol": 0.001,
  "id": "acm-17",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Comment sont définis les profils lignes \\(l_i\\) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(l_i\\) est la \\(i\\)-ème ligne de \\(Z\\) divisée par \\(n\\)"
   },
   {
    "key": "b",
    "text": "\\(l_i\\) est la \\(i\\)-ème ligne de \\(Z\\) divisée par \\(p\\), de sorte que \\(L = Z/p\\)"
   },
   {
    "key": "c",
    "text": "\\(l_i\\) est la \\(i\\)-ème colonne de \\(Z\\) divisée par \\(Z_{\\cdot k}\\)"
   },
   {
    "key": "d",
    "text": "\\(l_i\\) est le vecteur des valeurs propres de \\(S\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(l_i\\) est la \\(i\\)-ème ligne de \\(Z\\) divisée par \\(p\\), de sorte que \\(L = Z/p\\)",
  "id": "acm-18",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Quelle matrice joue le rôle de métrique dans le calcul de la distance du \\(\\chi^2\\) entre deux profils lignes (individus) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(D_O^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(D_M^{-1}\\)"
   },
   {
    "key": "c",
    "text": "La matrice identité \\(I_n\\)"
   },
   {
    "key": "d",
    "text": "La matrice \\(S\\) elle-même"
   }
  ],
  "ans": "b",
  "ansText": "\\(D_M^{-1}\\)",
  "id": "acm-19",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Quelle matrice doit-on diagonaliser pour obtenir les axes factoriels associés aux profils lignes (individus) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(S = F^T D_O^{-1} F D_M^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(S = D_O F D_M\\)"
   },
   {
    "key": "c",
    "text": "\\(S = Z^T Z\\)"
   },
   {
    "key": "d",
    "text": "\\(S = F F^T\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(S = F^T D_O^{-1} F D_M^{-1}\\)",
  "id": "acm-20",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Comment sont définis les profils colonnes \\(c_k\\) (profils des modalités) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^q\\) dont chaque composante vaut \\(n_{ik}/n\\)"
   },
   {
    "key": "b",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^n\\) dont la \\(i\\)-ème composante vaut \\(n_{ik}/Z_{\\cdot k}\\)"
   },
   {
    "key": "c",
    "text": "Ce sont des vecteurs de \\(\\mathbb{R}^p\\) dont chaque composante vaut \\(1/k_j\\)"
   },
   {
    "key": "d",
    "text": "Ce sont des scalaires égaux à la fréquence totale de la modalité \\(k\\)"
   }
  ],
  "ans": "b",
  "ansText": "Ce sont des vecteurs de \\(\\mathbb{R}^n\\) dont la \\(i\\)-ème composante vaut \\(n_{ik}/Z_{\\cdot k}\\)",
  "id": "acm-21",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Pour l'analyse des profils colonnes (modalités), quelle matrice induit la métrique utilisée pour la distance du \\(\\chi^2\\) entre deux profils colonnes ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(D_M^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(D_O^{-1} = n\\, I_n\\)"
   },
   {
    "key": "c",
    "text": "La matrice \\(T\\) elle-même"
   },
   {
    "key": "d",
    "text": "\\(D_M\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(D_O^{-1} = n\\, I_n\\)",
  "id": "acm-22",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Quelle matrice doit-on diagonaliser pour obtenir les axes factoriels associés aux profils colonnes (modalités) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(T = F D_M^{-1} F^T D_O^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(T = D_M F D_O\\)"
   },
   {
    "key": "c",
    "text": "\\(T = Z Z^T\\)"
   },
   {
    "key": "d",
    "text": "\\(T = F^T F\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(T = F D_M^{-1} F^T D_O^{-1}\\)",
  "id": "acm-23",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Que traduit la relation de dualité \\(p_{u_m}(Z) = \\frac{1}{\\sqrt{\\lambda_m}} L\\, p_{u'_m}(Z)\\) en ACM ?",
  "opts": [
   {
    "key": "a",
    "text": "Un lien entre les coordonnées des profils lignes sur \\(u_m\\) et celles des profils colonnes sur \\(u'_m\\), tous deux associés à la même valeur propre \\(\\lambda_m\\)"
   },
   {
    "key": "b",
    "text": "L'égalité stricte entre profils lignes et profils colonnes"
   },
   {
    "key": "c",
    "text": "Le fait que \\(\\lambda_m\\) est toujours égal à 1"
   },
   {
    "key": "d",
    "text": "L'absence de tout lien entre l'analyse des lignes et celle des colonnes"
   }
  ],
  "ans": "a",
  "ansText": "Un lien entre les coordonnées des profils lignes sur \\(u_m\\) et celles des profils colonnes sur \\(u'_m\\), tous deux associés à la même valeur propre \\(\\lambda_m\\)",
  "id": "acm-24",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "La matrice \\(C = \\frac{1}{np} Z D_M^{-1}\\), dont les colonnes représentent les modalités, admet des dépendances linéaires. Quelle est la borne donnée pour son rang, en fonction de \\(q\\) (nombre de modalités) et \\(p\\) (nombre de variables) ?",
  "opts": [
   {
    "key": "a",
    "text": "Au plus \\(q - p + 1\\)"
   },
   {
    "key": "b",
    "text": "Exactement \\(q\\)"
   },
   {
    "key": "c",
    "text": "Au plus \\(p - 1\\)"
   },
   {
    "key": "d",
    "text": "Au plus \\(n\\)"
   }
  ],
  "ans": "a",
  "ansText": "Au plus \\(q - p + 1\\)",
  "id": "acm-25",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Avec \\(q = 9\\) modalités au total et \\(p = 3\\) variables (comme dans l'exemple du chapitre), quel est le rang maximal de la matrice \\(C\\), d'après la borne \\(q - p + 1\\) donnée dans le cours ?",
  "ans": 7,
  "ansText": "7 (9 - 3 + 1)",
  "tol": 0.001,
  "id": "acm-26",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Toujours avec \\(q = 9\\) et \\(p = 3\\), quel est le nombre maximal de valeurs propres non nulles de la matrice \\(S\\), une fois écartée la valeur propre associée au centre de gravité du nuage (borne \\(q - p\\)) ?",
  "ans": 6,
  "ansText": "6 (9 - 3)",
  "tol": 0.001,
  "id": "acm-27",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Que représente le barycentre \\(\\bar c\\) du nuage des modalités ?",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur des marges des lignes de la matrice \\(F\\), soit \\(\\left(\\frac{1}{n}, \\dots, \\frac{1}{n}\\right)\\)"
   },
   {
    "key": "b",
    "text": "Le vecteur nul de \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "c",
    "text": "La modalité la plus fréquente de l'enquête"
   },
   {
    "key": "d",
    "text": "Le premier axe factoriel \\(u_1\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur des marges des lignes de la matrice \\(F\\), soit \\(\\left(\\frac{1}{n}, \\dots, \\frac{1}{n}\\right)\\)",
  "id": "acm-28",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Dans l'exemple du chapitre, \\(n = 7\\) individus et la modalité « genre = H » a un effectif \\(Z_{\\cdot k} = 4\\). Sachant que la distance du \\(\\chi^2\\) entre un profil colonne \\(c_k\\) et le barycentre \\(\\bar c\\) vaut \\(d^2_{\\chi^2}(c_k,\\bar c) = \\frac{n}{Z_{\\cdot k}} - 1\\), quelle est cette distance pour cette modalité ?",
  "ans": 0.75,
  "ansText": "0,75 (7/4 - 1)",
  "tol": 0.01,
  "id": "acm-29",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Toujours avec \\(n = 7\\), quelle est la distance du \\(\\chi^2\\) au barycentre \\(\\bar c\\) pour une modalité rare de la tranche d'âge ayant un effectif \\(Z_{\\cdot k} = 1\\) ?",
  "ans": 6,
  "ansText": "6 (7/1 - 1)",
  "tol": 0.01,
  "id": "acm-30",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Avec \\(q = 9\\) modalités et \\(p = 3\\) variables (exemple du chapitre), quelle est la valeur de l'inertie totale du nuage de points, sachant que \\(I_{tot} = \\dfrac{q}{p} - 1\\) ?",
  "ans": 2,
  "ansText": "2 (9/3 - 1)",
  "tol": 0.01,
  "id": "acm-31",
  "cat": "acm"
 },
 {
  "type": "num",
  "q": "Pour un tableau disjonctif complet comptant \\(q = 14\\) modalités au total, réparties sur \\(p = 4\\) variables, quelle est l'inertie totale du nuage de points ?",
  "ans": 2.5,
  "ansText": "2,5 (14/4 - 1)",
  "tol": 0.01,
  "id": "acm-32",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Comment appelle-t-on aussi la mesure de qualité de représentation \\(q_{u_m}(l_i)\\) d'un profil ligne sur un axe factoriel ?",
  "opts": [
   {
    "key": "a",
    "text": "La valeur propre \\(\\lambda_m\\)"
   },
   {
    "key": "b",
    "text": "Le \\(\\cos^2\\), cosinus carré de l'angle entre le point initial et sa projection"
   },
   {
    "key": "c",
    "text": "La contribution \\(c_{u_m}(l_i)\\)"
   },
   {
    "key": "d",
    "text": "La distance du \\(\\chi^2\\) totale du nuage"
   }
  ],
  "ans": "b",
  "ansText": "Le \\(\\cos^2\\), cosinus carré de l'angle entre le point initial et sa projection",
  "id": "acm-33",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la contribution \\(c_{u_m}(l_i)\\) d'un profil ligne \\(l_i\\) à l'axe factoriel \\(u_m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(c_{u_m}(l_i) = f_{i\\cdot} \\dfrac{p_{u_m}(l_i)^2}{\\lambda_m}\\)"
   },
   {
    "key": "b",
    "text": "\\(c_{u_m}(l_i) = \\lambda_m\\, p_{u_m}(l_i)\\)"
   },
   {
    "key": "c",
    "text": "\\(c_{u_m}(l_i) = \\dfrac{1}{f_{i\\cdot}}\\)"
   },
   {
    "key": "d",
    "text": "\\(c_{u_m}(l_i) = p_{u_m}(l_i) - \\lambda_m\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(c_{u_m}(l_i) = f_{i\\cdot} \\dfrac{p_{u_m}(l_i)^2}{\\lambda_m}\\)",
  "id": "acm-34",
  "cat": "acm"
 },
 {
  "type": "qcm",
  "q": "Que permettent d'ajouter les formules de projection d'un individu supplémentaire \\(l_{+,i}\\) ou d'une modalité supplémentaire \\(c_{+,k}\\), présentées en fin de chapitre ?",
  "opts": [
   {
    "key": "a",
    "text": "De représenter sur les axes déjà construits des individus ou modalités qui n'ont pas servi à calculer ces axes"
   },
   {
    "key": "b",
    "text": "De recalculer entièrement les valeurs propres \\(\\lambda_m\\) de la matrice \\(S\\)"
   },
   {
    "key": "c",
    "text": "De remplacer le tableau disjonctif complet par la matrice \\(N\\)"
   },
   {
    "key": "d",
    "text": "D'annuler l'inertie totale du nuage de points"
   }
  ],
  "ans": "a",
  "ansText": "De représenter sur les axes déjà construits des individus ou modalités qui n'ont pas servi à calculer ces axes",
  "id": "acm-35",
  "cat": "acm"
 }
];
