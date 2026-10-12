/* Banque d'exercices interactifs - genere automatiquement, ne pas editer
   a la main : regenerer depuis build_supervisedlearning_full.py. NB: on
   utilise 'var' (et non 'const') pour que ces variables soient bien
   attachees a l'objet window et donc lisibles depuis exercises.js charge
   dans un <script> separe. */
var EXERCISES_CATEGORIES = [
 {
  "slug": "linear-algebra-convexity",
  "label": "Algèbre linéaire & convexité"
 },
 {
  "slug": "convex-optimization",
  "label": "Optimisation convexe"
 },
 {
  "slug": "introduction-sl",
  "label": "Introduction à l'apprentissage supervisé"
 },
 {
  "slug": "statistical-learning-theory",
  "label": "Théorie statistique de l'apprentissage"
 },
 {
  "slug": "learning-procedure",
  "label": "Procédure d'apprentissage & mesures de performance"
 },
 {
  "slug": "knn-surrogate-losses",
  "label": "Pertes de substitution & k plus proches voisins"
 },
 {
  "slug": "svm",
  "label": "Machines à vecteurs de support (SVM)"
 },
 {
  "slug": "regression-methods",
  "label": "Régression linéaire, logistique & à noyau"
 },
 {
  "slug": "decision-trees",
  "label": "Arbres de décision"
 },
 {
  "slug": "neural-networks",
  "label": "Réseaux de neurones"
 },
 {
  "slug": "slt-revisited",
  "label": "Retour sur la théorie statistique de l'apprentissage"
 },
 {
  "slug": "ensemble-methods",
  "label": "Méthodes d'ensemble : bagging, forêts aléatoires, boosting, stacking"
 },
 {
  "slug": "gradient-boosting",
  "label": "Gradient boosting"
 }
];
var EXERCISES_DATA = [
 {
  "type": "qcm",
  "q": "Quelle est la définition du produit scalaire entre deux vecteurs \\(x, y \\in \\mathbb{R}^d\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle x,y\\rangle = \\sum_{j=1}^d x_j y_j\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle x,y\\rangle = \\sum_{j=1}^d x_j^2 y_j^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\langle x,y\\rangle = \\prod_{j=1}^d x_j y_j\\)"
   },
   {
    "key": "d",
    "text": "\\(\\langle x,y\\rangle = \\sum_{j=1}^d (x_j - y_j)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle x,y\\rangle = \\sum_{j=1}^d x_j y_j\\)",
  "id": "linear-algebra-convexity-01",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer la norme \\(L_1\\) (norme de Manhattan) du vecteur \\(x = (3, -4, 0, 2)\\).",
  "ans": 9,
  "ansText": "9",
  "tol": 0.01,
  "id": "linear-algebra-convexity-02",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Parmi les propositions suivantes, laquelle N'EST PAS une propriété exigée par la définition d'une norme \\(\\|\\cdot\\|\\) sur un espace vectoriel \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|u\\| \\geq 0\\) pour tout \\(u \\in E\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|u\\| = 0 \\Leftrightarrow u = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|\\lambda u\\| = |\\lambda|\\, \\|u\\|\\) pour tout \\(\\lambda \\in \\mathbb{R}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|u+v\\| = \\|u\\| + \\|v\\|\\) pour tous \\(u,v \\in E\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(\\|u+v\\| = \\|u\\| + \\|v\\|\\) pour tous \\(u,v \\in E\\)",
  "id": "linear-algebra-convexity-03",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer la norme euclidienne (\\(L_2\\)) du vecteur \\(x = (3, 4)\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "linear-algebra-convexity-04",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Quelle est la définition de la norme \\(L_1\\) (norme de Manhattan) d'un vecteur \\(x \\in \\mathbb{R}^d\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|x\\|_1 = \\sum_{j=1}^d |x_j|\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|x\\|_1 = \\sqrt{\\sum_{j=1}^d x_j^2}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|x\\|_1 = \\max_{j} |x_j|\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|x\\|_1 = \\sum_{j=1}^d x_j\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\|x\\|_1 = \\sum_{j=1}^d |x_j|\\)",
  "id": "linear-algebra-convexity-05",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer la norme \\(L_\\infty\\) du vecteur \\(x = (-2, 7, -5, 3)\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "linear-algebra-convexity-06",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Quelle est la définition de la norme \\(L_\\infty\\) d'un vecteur \\(x \\in \\mathbb{R}^d\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|x\\|_\\infty = \\sum_{j=1}^d |x_j|\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|x\\|_\\infty = \\max_{j \\in \\{1,\\dots,d\\}} |x_j|\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|x\\|_\\infty = \\sqrt{\\sum_{j=1}^d x_j^2}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|x\\|_\\infty = \\min_{j} |x_j|\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\|x\\|_\\infty = \\max_{j \\in \\{1,\\dots,d\\}} |x_j|\\)",
  "id": "linear-algebra-convexity-07",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer la norme euclidienne du vecteur \\(x = (1, 2, 2)\\).",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "linear-algebra-convexity-08",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Comment définit-on la norme de Frobenius d'une matrice \\(X \\in \\mathbb{R}^{m\\times d}\\) à partir du produit scalaire matriciel \\(\\langle X, X\\rangle = \\mathrm{Tr}(X^TX)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\|X\\|_F = \\sqrt{\\mathrm{Tr}(X^TX)}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|X\\|_F = \\max_{i,j} |X_{ij}|\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|X\\|_F = \\sum_{i,j} X_{ij}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|X\\|_F = \\mathrm{Tr}(X)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\|X\\|_F = \\sqrt{\\mathrm{Tr}(X^TX)}\\)",
  "id": "linear-algebra-convexity-09",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer le produit scalaire \\(\\langle x,y \\rangle\\) entre \\(x=(1,2,3)\\) et \\(y=(4,-1,2)\\).",
  "ans": 8,
  "ansText": "8",
  "tol": 0.01,
  "id": "linear-algebra-convexity-10",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Calculer la norme de Frobenius de la matrice \\(X = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}\\) (arrondir à \\(10^{-3}\\) près).",
  "ans": 3.162,
  "ansText": "\\(\\sqrt{10} \\approx 3.162\\)",
  "tol": 0.01,
  "id": "linear-algebra-convexity-11",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f: \\mathbb{R} \\to \\mathbb{R}\\) est dite différentiable en \\(x_0\\) si...",
  "opts": [
   {
    "key": "a",
    "text": "la limite \\(\\lim_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}\\) existe et est finie"
   },
   {
    "key": "b",
    "text": "\\(f(x_0) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est bornée au voisinage de \\(x_0\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est convexe au voisinage de \\(x_0\\)"
   }
  ],
  "ans": "a",
  "ansText": "la limite \\(\\lim_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}\\) existe et est finie",
  "id": "linear-algebra-convexity-12",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de Taylor, pour une fonction \\(f\\) \\(k\\) fois dérivable en \\(x_0\\), on peut écrire \\(f(x_0+h)\\) sous la forme...",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x_0) + hf'(x_0) + \\dfrac{h^2}{2}f''(x_0) + \\dots + \\dfrac{h^k}{k!}f^{(k)}(x_0) + \\varepsilon_k(h)\\), avec \\(\\varepsilon_k(h) \\to 0\\) quand \\(h \\to 0\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x_0) \\cdot h^k\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x_0) + h^k f^{(k)}(x_0)\\) uniquement"
   },
   {
    "key": "d",
    "text": "\\(h \\cdot f(x_0)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x_0) + hf'(x_0) + \\dfrac{h^2}{2}f''(x_0) + \\dots + \\dfrac{h^k}{k!}f^{(k)}(x_0) + \\varepsilon_k(h)\\), avec \\(\\varepsilon_k(h) \\to 0\\) quand \\(h \\to 0\\)",
  "id": "linear-algebra-convexity-13",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "En utilisant l'approximation de Taylor au premier ordre \\(f(x_0+h) \\approx f(x_0) + h f'(x_0)\\), estimer \\(f(3.1)\\) pour \\(f(x)=x^2\\), en prenant \\(x_0=3\\) et \\(h=0.1\\).",
  "ans": 9.6,
  "ansText": "9.6",
  "tol": 0.01,
  "id": "linear-algebra-convexity-14",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Pour une fonction \\(f: \\mathbb{R}^d \\to \\mathbb{R}\\) différentiable en \\(x_0\\), la \\(i\\)-ème composante du gradient (Jacobien) \\(J_if(x_0)\\) est donnée par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{\\partial f(x)}{\\partial x_i}\\Big|_{x=x_0}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{\\partial^2 f(x)}{\\partial x_i^2}\\Big|_{x=x_0}\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x_0)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sum_i x_i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{\\partial f(x)}{\\partial x_i}\\Big|_{x=x_0}\\)",
  "id": "linear-algebra-convexity-15",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2,x_3) = 3x_1^2 + 2x_1x_2x_3 + 6x_3 + 5x_2x_3 + 9x_1x_3\\). Calculer \\(\\dfrac{\\partial f}{\\partial x_1}\\) au point \\((1,1,1)\\).",
  "ans": 17,
  "ansText": "17",
  "tol": 0.01,
  "id": "linear-algebra-convexity-16",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x_1,x_2,x_3) = 3x_1^2 + 2x_1x_2x_3 + 6x_3 + 5x_2x_3 + 9x_1x_3\\), calculer \\(\\dfrac{\\partial f}{\\partial x_2}\\) au point \\((1,1,1)\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "linear-algebra-convexity-17",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x_1,x_2,x_3) = 3x_1^2 + 2x_1x_2x_3 + 6x_3 + 5x_2x_3 + 9x_1x_3\\), calculer \\(\\dfrac{\\partial f}{\\partial x_3}\\) au point \\((1,1,1)\\).",
  "ans": 22,
  "ansText": "22",
  "tol": 0.01,
  "id": "linear-algebra-convexity-18",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "La matrice hessienne \\(H\\) d'une fonction \\(f: \\mathbb{R}^d \\to \\mathbb{R}\\) deux fois dérivable en \\(x_0\\) a pour coefficients...",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_{ij} = \\dfrac{\\partial^2 f(x)}{\\partial x_i \\partial x_j}\\Big|_{x=x_0}\\)"
   },
   {
    "key": "b",
    "text": "\\(H_{ij} = \\dfrac{\\partial f(x)}{\\partial x_i}\\Big|_{x=x_0}\\)"
   },
   {
    "key": "c",
    "text": "\\(H_{ij} = f(x_0)\\)"
   },
   {
    "key": "d",
    "text": "\\(H_{ij} = x_i x_j\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(H_{ij} = \\dfrac{\\partial^2 f(x)}{\\partial x_i \\partial x_j}\\Big|_{x=x_0}\\)",
  "id": "linear-algebra-convexity-19",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2) = 4x_1^2 + 6x_2^2 + 3x_1x_2 + 2(\\cos(x_1)+\\sin(x_2))\\). Calculer le coefficient \\(H_{11}\\) de la matrice hessienne de \\(f\\) au point \\((0,0)\\).",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "linear-algebra-convexity-20",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x_1,x_2) = 4x_1^2 + 6x_2^2 + 3x_1x_2 + 2(\\cos(x_1)+\\sin(x_2))\\), calculer le coefficient \\(H_{22}\\) de la matrice hessienne au point \\((0,0)\\).",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "linear-algebra-convexity-21",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Un ensemble \\(C\\) est dit convexe si...",
  "opts": [
   {
    "key": "a",
    "text": "pour tout \\(u,v \\in C\\) et tout \\(t \\in [0,1]\\), on a \\(tu + (1-t)v \\in C\\)"
   },
   {
    "key": "b",
    "text": "pour tout \\(u,v \\in C\\), on a \\(u+v \\in C\\)"
   },
   {
    "key": "c",
    "text": "\\(C\\) est borné"
   },
   {
    "key": "d",
    "text": "\\(C\\) contient l'origine"
   }
  ],
  "ans": "a",
  "ansText": "pour tout \\(u,v \\in C\\) et tout \\(t \\in [0,1]\\), on a \\(tu + (1-t)v \\in C\\)",
  "id": "linear-algebra-convexity-22",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "D'après les exemples du cours, laquelle des affirmations suivantes est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "L'intersection de deux ensembles convexes \\(C_1\\) et \\(C_2\\) est convexe"
   },
   {
    "key": "b",
    "text": "L'union de deux ensembles convexes est toujours convexe"
   },
   {
    "key": "c",
    "text": "Un hyperplan \\(\\{x \\in \\mathbb{R}^d \\mid a^Tx = b\\}\\) n'est jamais convexe"
   },
   {
    "key": "d",
    "text": "La boule unité \\(\\{u \\mid \\|u\\| \\leq 1\\}\\) n'est pas convexe"
   }
  ],
  "ans": "a",
  "ansText": "L'intersection de deux ensembles convexes \\(C_1\\) et \\(C_2\\) est convexe",
  "id": "linear-algebra-convexity-23",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Soit \\(u=(1,3)\\) et \\(v=(5,7)\\) deux points, et \\(t=0.25\\). Calculer la première coordonnée du point \\(z = tu + (1-t)v\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "linear-algebra-convexity-24",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Pour les mêmes vecteurs \\(u=(1,3)\\), \\(v=(5,7)\\) et \\(t=0.25\\), calculer la seconde coordonnée du point \\(z = tu + (1-t)v\\).",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "linear-algebra-convexity-25",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f: U \\to \\mathbb{R}\\) est dite convexe si, pour tout \\(u,v \\in U\\) et tout \\(t \\in [0,1]\\)...",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(tu+(1-t)v) \\leq t f(u) + (1-t) f(v)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(tu+(1-t)v) \\geq t f(u) + (1-t) f(v)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(u+v) = f(u)+f(v)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(tu+(1-t)v) = t f(u) + (1-t) f(v)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(tu+(1-t)v) \\leq t f(u) + (1-t) f(v)\\)",
  "id": "linear-algebra-convexity-26",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Si une fonction \\(f\\) est concave, alors...",
  "opts": [
   {
    "key": "a",
    "text": "\\(-f\\) est convexe"
   },
   {
    "key": "b",
    "text": "\\(f\\) est nécessairement linéaire"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'admet pas de dérivée"
   },
   {
    "key": "d",
    "text": "\\(f^2\\) est toujours convexe"
   }
  ],
  "ans": "a",
  "ansText": "\\(-f\\) est convexe",
  "id": "linear-algebra-convexity-27",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "L'épigraphe \\(E_f\\) d'une fonction \\(f: U \\to \\mathbb{R}\\) est l'ensemble des points...",
  "opts": [
   {
    "key": "a",
    "text": "situés au-dessus (ou sur) du graphe de \\(f\\), i.e. \\(\\{(x,y) \\mid y \\geq f(x)\\}\\)"
   },
   {
    "key": "b",
    "text": "situés en dessous du graphe de \\(f\\)"
   },
   {
    "key": "c",
    "text": "où \\(f\\) s'annule"
   },
   {
    "key": "d",
    "text": "où \\(f\\) atteint son maximum"
   }
  ],
  "ans": "a",
  "ansText": "situés au-dessus (ou sur) du graphe de \\(f\\), i.e. \\(\\{(x,y) \\mid y \\geq f(x)\\}\\)",
  "id": "linear-algebra-convexity-28",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation de la convexité par l'épigraphe, une fonction \\(f\\) est convexe sur \\(U\\) si et seulement si...",
  "opts": [
   {
    "key": "a",
    "text": "son épigraphe \\(E_f\\) est un ensemble convexe"
   },
   {
    "key": "b",
    "text": "son hypographe est convexe"
   },
   {
    "key": "c",
    "text": "\\(f\\) est bornée sur \\(U\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est strictement positive sur \\(U\\)"
   }
  ],
  "ans": "a",
  "ansText": "son épigraphe \\(E_f\\) est un ensemble convexe",
  "id": "linear-algebra-convexity-29",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Soient \\(f\\) et \\(g\\) deux fonctions convexes sur un ouvert \\(U\\) de \\(\\mathbb{R}^d\\). D'après les propriétés de la convexité vues en cours, laquelle des affirmations suivantes est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "La fonction \\(h(x) = \\max(f(x), g(x))\\) est convexe"
   },
   {
    "key": "b",
    "text": "La fonction \\(f \\times g\\) est toujours convexe"
   },
   {
    "key": "c",
    "text": "La fonction \\(f - g\\) est toujours convexe"
   },
   {
    "key": "d",
    "text": "\\(f\\) et \\(g\\) ne peuvent pas être toutes les deux convexes simultanément"
   }
  ],
  "ans": "a",
  "ansText": "La fonction \\(h(x) = \\max(f(x), g(x))\\) est convexe",
  "id": "linear-algebra-convexity-30",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation du premier ordre de la convexité, une fonction \\(f\\) continûment différentiable sur \\(U\\) est convexe si et seulement si, pour tout \\(u,v \\in U\\)...",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(v) \\geq f(u) + \\nabla f(u)(v-u)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(v) \\leq f(u) + \\nabla f(u)(v-u)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(v) = f(u) + \\nabla f(u)(v-u)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(v) \\geq f(u) + \\nabla f(u)(v-u)\\)",
  "id": "linear-algebra-convexity-31",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Une caractérisation équivalente du premier ordre de la convexité s'écrit, pour tout \\(u,v \\in U\\)...",
  "opts": [
   {
    "key": "a",
    "text": "\\((\\nabla f(v) - \\nabla f(u))(v-u) \\geq 0\\)"
   },
   {
    "key": "b",
    "text": "\\((\\nabla f(v) - \\nabla f(u))(v-u) \\leq 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(v) = \\nabla f(u)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) \\cdot \\nabla f(v) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((\\nabla f(v) - \\nabla f(u))(v-u) \\geq 0\\)",
  "id": "linear-algebra-convexity-32",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation du second ordre de la convexité, une fonction \\(f\\) deux fois continûment différentiable sur un ouvert \\(U\\) est convexe si et seulement si sa matrice hessienne \\(H\\) vérifie...",
  "opts": [
   {
    "key": "a",
    "text": "\\(u^T H u \\geq 0\\) pour tout \\(u\\) (i.e. \\(H\\) est semi-définie positive)"
   },
   {
    "key": "b",
    "text": "\\(u^T H u \\leq 0\\) pour tout \\(u\\)"
   },
   {
    "key": "c",
    "text": "\\(\\det(H) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(H\\) est inversible"
   }
  ],
  "ans": "a",
  "ansText": "\\(u^T H u \\geq 0\\) pour tout \\(u\\) (i.e. \\(H\\) est semi-définie positive)",
  "id": "linear-algebra-convexity-33",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\sum_{j=1}^d \\dfrac{\\lambda_j}{2} x_j^2\\) avec \\(\\lambda_1, \\dots, \\lambda_d > 0\\), dont la matrice hessienne est diagonale avec des coefficients \\(\\lambda_j > 0\\). Que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est convexe, car cette matrice diagonale est semi-définie positive"
   },
   {
    "key": "b",
    "text": "\\(f\\) est concave"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'est ni convexe ni concave"
   },
   {
    "key": "d",
    "text": "\\(f\\) est constante"
   }
  ],
  "ans": "a",
  "ansText": "\\(f\\) est convexe, car cette matrice diagonale est semi-définie positive",
  "id": "linear-algebra-convexity-34",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2) = \\dfrac{3}{2}x_1^2 + \\dfrac{5}{2}x_2^2\\) (fonction de la forme \\(\\sum_j \\frac{\\lambda_j}{2}x_j^2\\) avec \\(\\lambda_1=3, \\lambda_2=5\\)). Calculer \\(f(2,1)\\).",
  "ans": 8.5,
  "ansText": "8.5",
  "tol": 0.01,
  "id": "linear-algebra-convexity-35",
  "cat": "linear-algebra-convexity"
 },
 {
  "type": "qcm",
  "q": "En optimisation convexe, étant donné une fonction convexe \\(f : \\mathbb{R}^d \\to \\mathbb{R}\\), quel problème cherche-t-on typiquement à résoudre ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x^\\star = \\arg\\min_{x \\in \\mathbb{R}^d} f(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(x^\\star = \\arg\\max_{x \\in \\mathbb{R}^d} f(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(x^\\star\\) tel que \\(f(x^\\star) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(x^\\star\\) tel que \\(f\\) soit dérivable en \\(x^\\star\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x^\\star = \\arg\\min_{x \\in \\mathbb{R}^d} f(x)\\)",
  "id": "convex-optimization-01",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f : \\mathbb{R}^d \\to \\mathbb{R}\\) continue. Comment définit-on un minimum local \\(u \\in \\mathbb{R}^d\\) de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\leq f(v)\\) pour tout \\(v \\in V\\)"
   },
   {
    "key": "b",
    "text": "Pour tout \\(v \\in \\mathbb{R}^d\\), on a \\(f(u) \\leq f(v)\\)"
   },
   {
    "key": "c",
    "text": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\geq f(v)\\) pour tout \\(v \\in V\\)"
   },
   {
    "key": "d",
    "text": "On a \\(\\nabla f(u) \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\leq f(v)\\) pour tout \\(v \\in V\\)",
  "id": "convex-optimization-02",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Comment définit-on un minimum global \\(u\\) de \\(f\\) sur \\(\\mathbb{R}^d\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(u) \\leq f(v)\\) seulement pour les \\(v\\) proches de \\(u\\)"
   },
   {
    "key": "b",
    "text": "\\(f(u) \\leq f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(u) = 0\\) et \\(f\\) est convexe au voisinage de \\(u\\)"
   },
   {
    "key": "d",
    "text": "\\(f(u) \\geq f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f(u) \\leq f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)",
  "id": "convex-optimization-03",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "(Inéquation d'Euler) Soit \\(U\\) un ensemble convexe non vide et \\(u \\in U\\) un minimum relatif de \\(f\\), différentiable en \\(u\\). Que peut-on affirmer ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla f(u)(v-u) \\geq 0, \\; \\forall v \\in U\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla f(u)(v-u) \\leq 0, \\; \\forall v \\in U\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(u) = 0\\) quel que soit \\(U\\)"
   },
   {
    "key": "d",
    "text": "\\(f(u) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla f(u)(v-u) \\geq 0, \\; \\forall v \\in U\\)",
  "id": "convex-optimization-04",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "(Équation d'Euler) Soit \\(f\\) différentiable en \\(u \\in \\mathbb{R}^d\\). Si \\(u\\) est un minimum local (cas non contraint), que doit-on avoir ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(u) = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla f(u) \\geq 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(u) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla^2 f(u) = 0\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(\\nabla f(u) = 0\\)",
  "id": "convex-optimization-05",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Les solutions de l'équation d'Euler \\(\\nabla f(u) = 0\\) sont appelées points critiques. Cette condition est-elle suffisante pour garantir un extremum ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, tout point critique est un minimum global"
   },
   {
    "key": "b",
    "text": "Non, c'est une condition nécessaire mais pas suffisante : un point critique peut n'être ni un minimum ni un maximum"
   },
   {
    "key": "c",
    "text": "Oui, mais seulement si \\(f\\) est linéaire"
   },
   {
    "key": "d",
    "text": "Non, l'équation d'Euler ne s'applique qu'aux fonctions concaves"
   }
  ],
  "ans": "b",
  "ansText": "Non, c'est une condition nécessaire mais pas suffisante : un point critique peut n'être ni un minimum ni un maximum",
  "id": "convex-optimization-06",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Considérons \\(f(x) = \\dfrac{1}{2}(x-2)^2 - 2\\). Quelle est la valeur de \\(x\\) qui annule \\(f'(x)\\), c'est-à-dire la solution de l'équation d'Euler pour \\(f\\) ?",
  "ans": 2,
  "ansText": "\\(x = 2\\)",
  "tol": 0.01,
  "id": "convex-optimization-07",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x) = \\dfrac{1}{2}(x-2)^2 - 2\\), quelle est la valeur minimale \\(f(2)\\) ?",
  "ans": -2,
  "ansText": "\\(f(2) = -2\\)",
  "tol": 0.01,
  "id": "convex-optimization-08",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Pour \\(g(x) = \\dfrac{1}{2}x^3 - 1\\), calculez \\(g'(x)\\) puis évaluez-le en \\(x = 2\\).",
  "ans": 6,
  "ansText": "\\(g'(x) = \\dfrac{3}{2}x^2\\), donc \\(g'(2) = 6\\)",
  "tol": 0.01,
  "id": "convex-optimization-09",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) une solution de l'équation d'Euler \\(\\nabla f(u) = 0\\). Sous quelle condition \\(u\\) est-il un minimum local ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla^2 f(u)\\) est définie négative"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2 f(u) = H_f(u)\\) est semi-définie positive (PSD)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla^2 f(u)\\) est de rang 1"
   },
   {
    "key": "d",
    "text": "\\(\\nabla^2 f(u)\\) est inversible"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\nabla^2 f(u) = H_f(u)\\) est semi-définie positive (PSD)",
  "id": "convex-optimization-10",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Toujours pour une solution \\(u\\) de l'équation d'Euler, sous quelle condition \\(u\\) est-il un maximum local ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla^2 f(u) = H_f(u)\\) est semi-définie négative (NSD)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2 f(u)\\) est semi-définie positive (PSD)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(u) \\neq 0\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'est pas continue en \\(u\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla^2 f(u) = H_f(u)\\) est semi-définie négative (NSD)",
  "id": "convex-optimization-11",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x_1^2 + 4x_2^2 - 2x_1x_2\\), de gradient \\(\\nabla f(x) = (2x_1-2x_2,\\; 8x_2-2x_1)\\). Quelle est la valeur de la seconde composante de \\(\\nabla f\\) au point \\(x = (1,1)\\) ?",
  "ans": 6,
  "ansText": "\\(8 \\times 1 - 2\\times 1 = 6\\)",
  "tol": 0.01,
  "id": "convex-optimization-12",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Soit \\(f : \\mathbb{R}^2 \\to \\mathbb{R}\\) définie par \\(f(x) = x_1^2 + 4x_2^2 - 2x_1x_2\\). Son gradient est \\(\\nabla f(x) = (2x_1 - 2x_2,\\; 8x_2 - 2x_1)\\). En résolvant \\(\\nabla f(x) = 0\\), on trouve le point critique \\(x^\\star = (0,0)\\). Quelle est la valeur de \\(f(x^\\star)\\) ?",
  "ans": 0,
  "ansText": "\\(f(0,0) = 0\\)",
  "tol": 0.01,
  "id": "convex-optimization-13",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Pour la fonction \\(f(x) = x_1^2 + 4x_2^2 - 2x_1x_2\\), la matrice hessienne est \\(\\nabla^2 f(x) = \\begin{pmatrix} 2 & -2 \\\\ -2 & 8 \\end{pmatrix}\\). Quel est le déterminant de cette hessienne ?",
  "ans": 12,
  "ansText": "\\(\\det = 2 \\times 8 - (-2)\\times(-2) = 16 - 4 = 12\\)",
  "tol": 0.01,
  "id": "convex-optimization-14",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Pour la même hessienne \\(\\nabla^2 f(x) = \\begin{pmatrix} 2 & -2 \\\\ -2 & 8 \\end{pmatrix}\\), quelle est sa trace (somme des éléments diagonaux) ?",
  "ans": 10,
  "ansText": "\\(2 + 8 = 10\\)",
  "tol": 0.01,
  "id": "convex-optimization-15",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x) = 4 + \\big(x_1^2 - 2\\cos(2\\pi x_1)\\big) + \\big(x_2^2 - 2\\cos(2\\pi x_2)\\big)\\), le point \\(x^\\star = (0,0)\\) est une solution évidente de l'équation d'Euler et correspond au minimum global. Quelle est la valeur \\(f(0,0)\\) ?",
  "ans": 0,
  "ansText": "\\(f(0,0) = 4 + (0-2) + (0-2) = 0\\)",
  "tol": 0.01,
  "id": "convex-optimization-16",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Le gradient de \\(f(x) = 4 + (x_1^2-2\\cos(2\\pi x_1)) + (x_2^2-2\\cos(2\\pi x_2))\\) est \\(\\nabla f(x) = (2x_1 + 4\\pi\\sin(2\\pi x_1),\\; 2x_2 + 4\\pi\\sin(2\\pi x_2))\\). Quelle est la valeur de sa première composante au point \\(x = (0.5, 0.5)\\) (on rappelle que \\(\\sin(\\pi) = 0\\)) ?",
  "ans": 1,
  "ansText": "\\(2(0.5) + 4\\pi\\sin(\\pi) = 1 + 0 = 1\\)",
  "tol": 0.01,
  "id": "convex-optimization-17",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "En régression linéaire, avec \\(y \\in \\mathbb{R}^m\\), \\(X\\) une matrice de features et le modèle \\(y = X\\theta + \\varepsilon\\), quel problème de minimisation cherche-t-on à résoudre pour estimer \\(\\theta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\min_{\\theta \\in \\mathbb{R}^d} \\|y - X\\theta\\|_2^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\max_{\\theta \\in \\mathbb{R}^d} \\|y - X\\theta\\|_2^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\min_{\\theta \\in \\mathbb{R}^d} \\|\\theta\\|_2^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\min_{\\theta \\in \\mathbb{R}^d} \\|X\\|_2^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\min_{\\theta \\in \\mathbb{R}^d} \\|y - X\\theta\\|_2^2\\)",
  "id": "convex-optimization-18",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Pour le problème des moindres carrés \\(\\min_\\theta \\|y - X\\theta\\|_2^2\\), quel est le gradient de la fonction à optimiser par rapport à \\(\\theta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla_\\theta = -2X^T(y - X\\theta)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla_\\theta = 2X^T(y - X\\theta)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla_\\theta = -2X(y-X\\theta)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla_\\theta = X^TX\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla_\\theta = -2X^T(y - X\\theta)\\)",
  "id": "convex-optimization-19",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "En annulant le gradient \\(-2X^T(y-X\\theta) = 0\\) (équation d'Euler), quelle est la solution analytique \\(\\theta\\) du problème des moindres carrés ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\theta = X^Ty\\)"
   },
   {
    "key": "b",
    "text": "\\(\\theta = (X^TX)^{-1}X^Ty\\)"
   },
   {
    "key": "c",
    "text": "\\(\\theta = (X^Ty)^{-1}X\\)"
   },
   {
    "key": "d",
    "text": "\\(\\theta = X(X^TX)^{-1}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\theta = (X^TX)^{-1}X^Ty\\)",
  "id": "convex-optimization-20",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Contrairement à la régression linéaire, pourquoi la régression logistique nécessite-t-elle un algorithme itératif comme la descente de gradient ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce qu'il n'existe pas de solution analytique à la minimisation de la log-vraisemblance négative"
   },
   {
    "key": "b",
    "text": "Parce que la fonction de coût logistique n'est pas différentiable"
   },
   {
    "key": "c",
    "text": "Parce que \\(X^TX\\) n'est jamais inversible dans ce contexte"
   },
   {
    "key": "d",
    "text": "Parce que la régression logistique n'admet pas de fonction de coût"
   }
  ],
  "ans": "a",
  "ansText": "Parce qu'il n'existe pas de solution analytique à la minimisation de la log-vraisemblance négative",
  "id": "convex-optimization-21",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Pour minimiser \\(f(u_k - \\rho d_k)\\) au premier ordre, on doit maximiser le produit scalaire \\(\\langle \\nabla f(u_k), d_k \\rangle\\). D'après l'inégalité de Cauchy-Schwarz, quelle direction \\(d_k\\) choisit-on ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(d_k = \\nabla f(u_k)\\)"
   },
   {
    "key": "b",
    "text": "\\(d_k = -\\nabla f(u_k)\\)"
   },
   {
    "key": "c",
    "text": "\\(d_k = \\nabla^2 f(u_k)\\)"
   },
   {
    "key": "d",
    "text": "\\(d_k\\) est choisi aléatoirement"
   }
  ],
  "ans": "a",
  "ansText": "\\(d_k = \\nabla f(u_k)\\)",
  "id": "convex-optimization-22",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Quel critère d'arrêt utilise-t-on classiquement pour la descente de gradient, avec une constante \\(\\eta > 0\\) suffisamment petite ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(u_k) \\leq \\eta\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|\\nabla f(u_k)\\| \\leq \\eta\\)"
   },
   {
    "key": "c",
    "text": "\\(u_k \\leq \\eta\\)"
   },
   {
    "key": "d",
    "text": "\\(\\rho_k \\leq \\eta\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\|\\nabla f(u_k)\\| \\leq \\eta\\)",
  "id": "convex-optimization-23",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Dans la descente de gradient à pas constant \\(\\rho_k = \\rho\\), quel est le risque lié au choix de \\(\\rho\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un \\(\\rho\\) trop petit ralentit la convergence, un \\(\\rho\\) trop grand peut provoquer la divergence de l'algorithme"
   },
   {
    "key": "b",
    "text": "Le choix de \\(\\rho\\) n'a aucune influence sur la convergence"
   },
   {
    "key": "c",
    "text": "Un \\(\\rho\\) trop petit provoque toujours la divergence"
   },
   {
    "key": "d",
    "text": "Un \\(\\rho\\) trop grand accélère toujours la convergence sans risque"
   }
  ],
  "ans": "a",
  "ansText": "Un \\(\\rho\\) trop petit ralentit la convergence, un \\(\\rho\\) trop grand peut provoquer la divergence de l'algorithme",
  "id": "convex-optimization-24",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Dans la descente de gradient à pas optimal, comment est choisi \\(\\rho_k\\) à chaque itération ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\rho_k = 1/k\\) systématiquement"
   },
   {
    "key": "b",
    "text": "\\(\\rho_k\\) est fixé une fois pour toutes au début de l'algorithme"
   },
   {
    "key": "c",
    "text": "\\(\\rho_k = \\arg\\min_{\\rho > 0} f(u_k - \\rho \\nabla f(u_k))\\)"
   },
   {
    "key": "d",
    "text": "\\(\\rho_k = \\|\\nabla f(u_k)\\|\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(\\rho_k = \\arg\\min_{\\rho > 0} f(u_k - \\rho \\nabla f(u_k))\\)",
  "id": "convex-optimization-25",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Une fonction convexe et continûment différentiable \\(f\\) est dite \\(\\alpha\\)-fortement convexe (ou \\(\\alpha\\)-elliptique) s'il existe \\(\\alpha > 0\\) tel que, pour tous \\(u, v \\in \\mathbb{R}^d\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle \\nabla f(v) - \\nabla f(u), v-u \\rangle \\geq \\alpha \\|v-u\\|^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle \\nabla f(v) - \\nabla f(u), v-u \\rangle \\leq \\alpha \\|v-u\\|^2\\)"
   },
   {
    "key": "c",
    "text": "\\(f(v) - f(u) = \\alpha\\|v-u\\|\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) = \\alpha u\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle \\nabla f(v) - \\nabla f(u), v-u \\rangle \\geq \\alpha \\|v-u\\|^2\\)",
  "id": "convex-optimization-26",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Que garantit la proposition 2.3 (« Pas optimal : convergence ») lorsque \\(f\\) est \\(\\alpha\\)-fortement convexe ?",
  "opts": [
   {
    "key": "a",
    "text": "La descente de gradient à pas constant diverge toujours"
   },
   {
    "key": "b",
    "text": "La descente de gradient à pas optimal converge"
   },
   {
    "key": "c",
    "text": "Aucune méthode de descente de gradient ne converge"
   },
   {
    "key": "d",
    "text": "Seule la méthode de Newton converge"
   }
  ],
  "ans": "b",
  "ansText": "La descente de gradient à pas optimal converge",
  "id": "convex-optimization-27",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Avec le pas optimal \\(\\rho_k = \\arg\\min_{\\rho>0} f(u_k - \\rho \\nabla f(u_k))\\), en dérivant par rapport à \\(\\rho\\) et en annulant cette dérivée, que peut-on dire de deux directions de descente successives \\(\\nabla f(u_{k+1})\\) et \\(\\nabla f(u_k)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles sont colinéaires et de même sens"
   },
   {
    "key": "b",
    "text": "Elles sont orthogonales : \\(\\langle \\nabla f(u_{k+1}), \\nabla f(u_k)\\rangle = 0\\)"
   },
   {
    "key": "c",
    "text": "Elles sont toujours égales"
   },
   {
    "key": "d",
    "text": "Leur produit scalaire vaut \\(\\|\\nabla f(u_k)\\|^2\\)"
   }
  ],
  "ans": "b",
  "ansText": "Elles sont orthogonales : \\(\\langle \\nabla f(u_{k+1}), \\nabla f(u_k)\\rangle = 0\\)",
  "id": "convex-optimization-28",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Appliquons la formule générale du pas optimal pour une forme quadratique \\(f(u) = \\frac{1}{2}\\langle Au,u\\rangle - \\langle b,u\\rangle\\), à savoir \\(\\rho_k = \\dfrac{\\|Au_k-b\\|^2}{\\|Au_k-b\\|_A^2}\\) (où \\(\\|v\\|_A^2 = v^TAv\\)), au cas scalaire \\(d=1\\) avec \\(A = 2\\), \\(b = 4\\), soit \\(f(u) = u^2 - 4u\\), en partant de \\(u_0 = 0\\). Sachant que \\(\\nabla f(u_0) = Au_0 - b = -4\\) et \\(\\rho_0 = \\dfrac{\\|Au_0-b\\|^2}{\\|Au_0-b\\|_A^2} = \\dfrac{(Au_0-b)^2}{A(Au_0-b)^2} = \\dfrac{1}{A}\\), quelle est la valeur de \\(\\rho_0\\) ?",
  "ans": 0.5,
  "ansText": "\\(\\rho_0 = 1/A = 1/2 = 0.5\\)",
  "tol": 0.01,
  "id": "convex-optimization-29",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "En utilisant \\(\\rho_0 = 0.5\\) trouvé précédemment, calculez \\(u_1 = u_0 - \\rho_0(Au_0-b) = 0 - 0.5 \\times (-4)\\) pour l'exemple \\(f(u)=u^2-4u\\), \\(u_0=0\\).",
  "ans": 2,
  "ansText": "\\(u_1 = 2\\), qui est exactement le minimum de \\(f(u)=u^2-4u\\) (vérifiable via \\(f'(u)=2u-4=0\\))",
  "tol": 0.01,
  "id": "convex-optimization-30",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "En dehors du pas constant et du pas optimal, quelles méthodes de recherche linéaire (line search) sont mentionnées pour choisir le pas \\(\\rho_k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le critère d'Armijo et le critère de Wolfe"
   },
   {
    "key": "b",
    "text": "Le critère de Bayes et le critère de Fisher"
   },
   {
    "key": "c",
    "text": "Le critère AIC et le critère BIC"
   },
   {
    "key": "d",
    "text": "La règle de Bayes uniquement"
   }
  ],
  "ans": "a",
  "ansText": "Le critère d'Armijo et le critère de Wolfe",
  "id": "convex-optimization-31",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Quelle est la règle de mise à jour de la méthode de Newton pour l'optimisation ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_{k+1} = u_k - \\rho \\nabla f(u_k)\\)"
   },
   {
    "key": "b",
    "text": "\\(u_{k+1} = u_k - [\\nabla^2 f(u_k)]^{-1} \\nabla f(u_k)\\)"
   },
   {
    "key": "c",
    "text": "\\(u_{k+1} = u_k - \\nabla^2 f(u_k)\\)"
   },
   {
    "key": "d",
    "text": "\\(u_{k+1} = [\\nabla f(u_k)]^{-1}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(u_{k+1} = u_k - [\\nabla^2 f(u_k)]^{-1} \\nabla f(u_k)\\)",
  "id": "convex-optimization-32",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Parmi les affirmations suivantes sur la méthode de Newton, laquelle est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle nécessite généralement moins d'itérations pour converger, mais requiert l'inversion de la hessienne (coût \\(O(n^3)\\)), qui n'est pas toujours inversible"
   },
   {
    "key": "b",
    "text": "Elle ne nécessite jamais de calculer de dérivées et fonctionne même si \\(f\\) n'est pas différentiable"
   },
   {
    "key": "c",
    "text": "Elle est toujours plus simple à implémenter que la descente de gradient classique"
   },
   {
    "key": "d",
    "text": "Elle ne converge jamais, même pour les fonctions convexes"
   }
  ],
  "ans": "a",
  "ansText": "Elle nécessite généralement moins d'itérations pour converger, mais requiert l'inversion de la hessienne (coût \\(O(n^3)\\)), qui n'est pas toujours inversible",
  "id": "convex-optimization-33",
  "cat": "convex-optimization"
 },
 {
  "type": "num",
  "q": "Le calcul de l'inverse de la matrice hessienne dans la méthode de Newton a une complexité de l'ordre de \\(O(n^p)\\) pour une hessienne \\(n \\times n\\). Quelle est la valeur de \\(p\\) ?",
  "ans": 3,
  "ansText": "\\(p = 3\\), soit une complexité \\(O(n^3)\\)",
  "tol": 0.01,
  "id": "convex-optimization-34",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Pour éviter de calculer explicitement l'inverse de la hessienne à chaque étape, quelle est l'idée des méthodes de Quasi-Newton ?",
  "opts": [
   {
    "key": "a",
    "text": "Approximer \\(H_k^{-1}\\) par une matrice \\(M_k\\), mise à jour via \\(M_{k+1} = M_k + C_k\\) où \\(C_k\\) est une matrice de correction"
   },
   {
    "key": "b",
    "text": "Ignorer complètement l'information de second ordre"
   },
   {
    "key": "c",
    "text": "Calculer exactement \\(H_k^{-1}\\) mais une seule fois au début"
   },
   {
    "key": "d",
    "text": "Remplacer le gradient par la hessienne à chaque étape"
   }
  ],
  "ans": "a",
  "ansText": "Approximer \\(H_k^{-1}\\) par une matrice \\(M_k\\), mise à jour via \\(M_{k+1} = M_k + C_k\\) où \\(C_k\\) est une matrice de correction",
  "id": "convex-optimization-35",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "En posant \\(\\gamma_k = \\nabla f(u_{k+1}) - \\nabla f(u_k)\\) et \\(\\delta_k = u_{k+1} - u_k\\), quelle est la condition de Quasi-Newton que doit vérifier \\(M_{k+1}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(M_{k+1}\\gamma_k = \\delta_k\\)"
   },
   {
    "key": "b",
    "text": "\\(M_{k+1}\\delta_k = \\gamma_k\\)"
   },
   {
    "key": "c",
    "text": "\\(M_{k+1} = \\gamma_k \\delta_k^T\\)"
   },
   {
    "key": "d",
    "text": "\\(M_{k+1} = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(M_{k+1}\\gamma_k = \\delta_k\\)",
  "id": "convex-optimization-36",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "L'algorithme de Broyden repose sur une correction de rang 1, \\(C_k = v_kv_k^T\\). L'algorithme BFGS, quant à lui, repose sur une correction de quel rang, et lequel des deux est le plus utilisé en pratique ?",
  "opts": [
   {
    "key": "a",
    "text": "BFGS utilise une correction de rang 2 et est la méthode la plus utilisée en pratique"
   },
   {
    "key": "b",
    "text": "BFGS utilise une correction de rang 1, tout comme Broyden"
   },
   {
    "key": "c",
    "text": "BFGS utilise une correction de rang 3, mais Broyden reste préféré en pratique"
   },
   {
    "key": "d",
    "text": "BFGS n'utilise aucune correction, contrairement à Broyden"
   }
  ],
  "ans": "a",
  "ansText": "BFGS utilise une correction de rang 2 et est la méthode la plus utilisée en pratique",
  "id": "convex-optimization-37",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Dans l'algorithme BFGS, la formule de mise à jour de \\(M_k\\) est \\(M_{k+1} = M_k + \\dfrac{\\gamma_k\\gamma_k^T}{\\gamma_k^T\\delta_k} - \\dfrac{M_k\\delta_k\\delta_k^TM_k^T}{\\delta_k^TM_k\\delta_k}\\). Comment est choisi le pas \\(\\rho_k\\) à chaque itération de Broyden ou BFGS, une fois la direction \\(M_k\\nabla f(u_k)\\) déterminée ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\rho_k\\) est fixé arbitrairement à 1"
   },
   {
    "key": "b",
    "text": "\\(\\rho_k = \\arg\\min_{\\rho \\in \\mathbb{R}} f(u_k - \\rho M_k \\nabla f(u_k))\\), comme pour un pas optimal"
   },
   {
    "key": "c",
    "text": "\\(\\rho_k\\) est toujours égal à \\(1/k\\)"
   },
   {
    "key": "d",
    "text": "\\(\\rho_k\\) n'est jamais recalculé après la première itération"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\rho_k = \\arg\\min_{\\rho \\in \\mathbb{R}} f(u_k - \\rho M_k \\nabla f(u_k))\\), comme pour un pas optimal",
  "id": "convex-optimization-38",
  "cat": "convex-optimization"
 },
 {
  "type": "qcm",
  "q": "Le Machine Learning (apprentissage automatique) est un sous-domaine de quelle discipline ?",
  "opts": [
   {
    "key": "a",
    "text": "L'Intelligence Artificielle"
   },
   {
    "key": "b",
    "text": "La biologie computationnelle"
   },
   {
    "key": "c",
    "text": "Les sciences sociales"
   },
   {
    "key": "d",
    "text": "L'ingénierie logicielle uniquement"
   }
  ],
  "ans": "a",
  "ansText": "L'Intelligence Artificielle",
  "id": "introduction-sl-01",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Quelle question fondamentale, attribuée à A. Turing, est à l'origine de la problématique du Machine Learning ?",
  "opts": [
   {
    "key": "a",
    "text": "Les ordinateurs peuvent-ils calculer plus vite que l'humain ?"
   },
   {
    "key": "b",
    "text": "Les machines peuvent-elles penser ?"
   },
   {
    "key": "c",
    "text": "Les machines peuvent-elles remplacer les statisticiens ?"
   },
   {
    "key": "d",
    "text": "Les données sont-elles toujours fiables ?"
   }
  ],
  "ans": "b",
  "ansText": "Les machines peuvent-elles penser ?",
  "id": "introduction-sl-02",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Selon la définition formelle de Tom Mitchell (1997), un programme informatique est dit apprendre à partir d'une expérience E par rapport à une classe de tâches T et une mesure de performance P si :",
  "opts": [
   {
    "key": "a",
    "text": "Son code source diminue de taille au fil du temps"
   },
   {
    "key": "b",
    "text": "Sa performance sur les tâches de T, mesurée par P, s'améliore avec l'expérience E"
   },
   {
    "key": "c",
    "text": "Il n'a besoin d'aucune donnée pour fonctionner"
   },
   {
    "key": "d",
    "text": "Il produit toujours les mêmes résultats quelle que soit l'expérience E"
   }
  ],
  "ans": "b",
  "ansText": "Sa performance sur les tâches de T, mesurée par P, s'améliore avec l'expérience E",
  "id": "introduction-sl-03",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Dans la définition de Mitchell, à quoi peut correspondre concrètement l'expérience \\(E\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Uniquement au code source de l'algorithme"
   },
   {
    "key": "b",
    "text": "À une collection de données ainsi qu'au processus d'entraînement du modèle"
   },
   {
    "key": "c",
    "text": "À la puissance de calcul du processeur"
   },
   {
    "key": "d",
    "text": "À la documentation technique de l'algorithme"
   }
  ],
  "ans": "b",
  "ansText": "À une collection de données ainsi qu'au processus d'entraînement du modèle",
  "id": "introduction-sl-04",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Dans la définition de Mitchell, la tâche \\(T\\) peut typiquement faire référence à :",
  "opts": [
   {
    "key": "a",
    "text": "Une tâche de classification ou de régression"
   },
   {
    "key": "b",
    "text": "Le stockage physique des données"
   },
   {
    "key": "c",
    "text": "La vitesse d'exécution du programme"
   },
   {
    "key": "d",
    "text": "La consommation énergétique de la machine"
   }
  ],
  "ans": "a",
  "ansText": "Une tâche de classification ou de régression",
  "id": "introduction-sl-05",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Selon le cours, la nature des données utilisées en Machine Learning peut être très variée. Laquelle des propositions suivantes n'est PAS citée comme type de donnée possible ?",
  "opts": [
   {
    "key": "a",
    "text": "Images ou vidéos"
   },
   {
    "key": "b",
    "text": "Séries temporelles"
   },
   {
    "key": "c",
    "text": "Graphes ou arbres"
   },
   {
    "key": "d",
    "text": "Uniquement des nombres entiers positifs"
   }
  ],
  "ans": "d",
  "ansText": "Uniquement des nombres entiers positifs",
  "id": "introduction-sl-06",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple du jeu de données Dogs vs Cats, à quel type de tâche l'algorithme est-il confronté ?",
  "opts": [
   {
    "key": "a",
    "text": "Une tâche de classification"
   },
   {
    "key": "b",
    "text": "Une tâche de régression"
   },
   {
    "key": "c",
    "text": "Une tâche de clustering"
   },
   {
    "key": "d",
    "text": "Une tâche de réduction de dimension"
   }
  ],
  "ans": "a",
  "ansText": "Une tâche de classification",
  "id": "introduction-sl-07",
  "cat": "introduction-sl"
 },
 {
  "type": "num",
  "q": "Dans l'exemple de régression du cours, on cherche à prédire le score \\(y\\) obtenu à un test de langue à partir des scores obtenus à quatre autres tests, notés \\(x_1, x_2, x_3, x_4\\). Combien de variables explicatives (descripteurs) sont utilisées dans ce modèle ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0,
  "id": "introduction-sl-08",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Bien que les données puissent avoir des représentations très différentes (images, tableaux, texte...), sous quelle forme sont-elles finalement vues par une machine ?",
  "opts": [
   {
    "key": "a",
    "text": "Sous forme de texte brut uniquement"
   },
   {
    "key": "b",
    "text": "Sous forme de tableau de valeurs, c'est-à-dire de matrice"
   },
   {
    "key": "c",
    "text": "Sous forme de fichiers audio"
   },
   {
    "key": "d",
    "text": "Sous forme de graphes uniquement"
   }
  ],
  "ans": "b",
  "ansText": "Sous forme de tableau de valeurs, c'est-à-dire de matrice",
  "id": "introduction-sl-09",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Pourquoi la représentation des données (« representation learning ») est-elle considérée comme un axe de recherche important, notamment en traitement automatique du langage (NLP) ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce qu'il faut apprendre une bonne représentation des mots ou des phrases sous forme de vecteurs"
   },
   {
    "key": "b",
    "text": "Parce que le texte ne peut jamais être numérisé"
   },
   {
    "key": "c",
    "text": "Parce que les phrases ont toujours la même longueur"
   },
   {
    "key": "d",
    "text": "Parce que cela permet d'éviter totalement l'usage de modèles statistiques"
   }
  ],
  "ans": "a",
  "ansText": "Parce qu'il faut apprendre une bonne représentation des mots ou des phrases sous forme de vecteurs",
  "id": "introduction-sl-10",
  "cat": "introduction-sl"
 },
 {
  "type": "num",
  "q": "Sur une image en noir et blanc non normalisée, l'intensité d'un pixel prend généralement une valeur entre 0 et quelle valeur maximale ?",
  "ans": 255,
  "ansText": "255",
  "tol": 0,
  "id": "introduction-sl-11",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Quels sont les trois canaux de couleur utilisés pour représenter une image couleur classique par trois matrices distinctes ?",
  "opts": [
   {
    "key": "a",
    "text": "Rouge, Vert, Bleu"
   },
   {
    "key": "b",
    "text": "Cyan, Magenta, Jaune"
   },
   {
    "key": "c",
    "text": "Noir, Blanc, Gris"
   },
   {
    "key": "d",
    "text": "Rouge, Jaune, Bleu"
   }
  ],
  "ans": "a",
  "ansText": "Rouge, Vert, Bleu",
  "id": "introduction-sl-12",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Parmi les propositions suivantes, laquelle N'EST PAS citée comme un défaut (une limite) de l'utilisation directe des intensités de pixels comme descripteurs d'une image ?",
  "opts": [
   {
    "key": "a",
    "text": "L'intensité dépend de la luminosité et des conditions de prise de vue"
   },
   {
    "key": "b",
    "text": "La forme de l'objet dépend de l'angle de vue"
   },
   {
    "key": "c",
    "text": "La taille apparente de l'objet dépend de la distance de capture"
   },
   {
    "key": "d",
    "text": "Les pixels prennent uniquement des valeurs négatives"
   }
  ],
  "ans": "d",
  "ansText": "Les pixels prennent uniquement des valeurs négatives",
  "id": "introduction-sl-13",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Si une image est représentée par un vecteur de descripteurs de longueur \\(d\\), comment peut-on interpréter géométriquement cette image ?",
  "opts": [
   {
    "key": "a",
    "text": "Comme un point dans un espace de dimension d"
   },
   {
    "key": "b",
    "text": "Comme une droite dans le plan"
   },
   {
    "key": "c",
    "text": "Comme une matrice carrée obligatoirement de taille 2x2"
   },
   {
    "key": "d",
    "text": "Comme un nombre réel unique"
   }
  ],
  "ans": "a",
  "ansText": "Comme un point dans un espace de dimension d",
  "id": "introduction-sl-14",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Pour construire un algorithme d'apprentissage, le cours indique qu'il faut définir trois éléments. Lesquels ?",
  "opts": [
   {
    "key": "a",
    "text": "Input, Output, Model"
   },
   {
    "key": "b",
    "text": "Vitesse, Mémoire, Précision"
   },
   {
    "key": "c",
    "text": "Client, Serveur, Base de données"
   },
   {
    "key": "d",
    "text": "Capteur, Réseau, Stockage"
   }
  ],
  "ans": "a",
  "ansText": "Input, Output, Model",
  "id": "introduction-sl-15",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Que désigne le « Model » dans le triplet (Input, Output, Model) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un ensemble d'objets utilisés pour résoudre le problème : fonction objectif, type d'hypothèse et processus d'optimisation"
   },
   {
    "key": "b",
    "text": "Uniquement la base de données brute"
   },
   {
    "key": "c",
    "text": "Le matériel informatique utilisé pour l'entraînement"
   },
   {
    "key": "d",
    "text": "Le nom donné à l'algorithme par son concepteur"
   }
  ],
  "ans": "a",
  "ansText": "Un ensemble d'objets utilisés pour résoudre le problème : fonction objectif, type d'hypothèse et processus d'optimisation",
  "id": "introduction-sl-16",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Que cherche à minimiser le classifieur appris dans l'exemple Dogs vs Cats ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nombre d'images utilisées pour l'entraînement"
   },
   {
    "key": "b",
    "text": "L'erreur de classification, c'est-à-dire le nombre d'images mal classées"
   },
   {
    "key": "c",
    "text": "La taille en mémoire des images"
   },
   {
    "key": "d",
    "text": "Le nombre de canaux de couleur"
   }
  ],
  "ans": "b",
  "ansText": "L'erreur de classification, c'est-à-dire le nombre d'images mal classées",
  "id": "introduction-sl-17",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Une fois le modèle appris, comment est-il évalué en pratique ?",
  "opts": [
   {
    "key": "a",
    "text": "Il n'est jamais réévalué après l'apprentissage"
   },
   {
    "key": "b",
    "text": "Il est soumis à de nouvelles données qu'il doit classifier sans connaître leurs labels"
   },
   {
    "key": "c",
    "text": "Il est uniquement testé sur les données d'entraînement"
   },
   {
    "key": "d",
    "text": "Il est évalué uniquement par un expert humain sans nouvelles données"
   }
  ],
  "ans": "b",
  "ansText": "Il est soumis à de nouvelles données qu'il doit classifier sans connaître leurs labels",
  "id": "introduction-sl-18",
  "cat": "introduction-sl"
 },
 {
  "type": "num",
  "q": "Dans le cadre d'une tâche de classification binaire décrite dans le cours (spam/ham, transaction frauduleuse/légitime...), quelle valeur numérique est généralement attribuée à un exemple « négatif » (transaction légitime, e-mail normal) ?",
  "ans": -1,
  "ansText": "-1",
  "tol": 0,
  "id": "introduction-sl-19",
  "cat": "introduction-sl"
 },
 {
  "type": "num",
  "q": "À l'inverse, quelle valeur numérique est généralement attribuée à un exemple « positif » (objet d'intérêt, comme un spam ou une transaction frauduleuse) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0,
  "id": "introduction-sl-20",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Comment appelle-t-on l'apprentissage lorsqu'une information de label (une étiquette) est utilisée par l'algorithme de Machine Learning ?",
  "opts": [
   {
    "key": "a",
    "text": "Apprentissage supervisé"
   },
   {
    "key": "b",
    "text": "Apprentissage non supervisé"
   },
   {
    "key": "c",
    "text": "Apprentissage par renforcement"
   },
   {
    "key": "d",
    "text": "Apprentissage semi-automatique"
   }
  ],
  "ans": "a",
  "ansText": "Apprentissage supervisé",
  "id": "introduction-sl-21",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Laquelle de ces applications relève typiquement de l'apprentissage non supervisé selon le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "La détection de fraude bancaire supervisée par des labels connus"
   },
   {
    "key": "b",
    "text": "La réduction de dimension via l'Analyse en Composantes Principales (ACP)"
   },
   {
    "key": "c",
    "text": "La régression logistique linéaire"
   },
   {
    "key": "d",
    "text": "Le modèle linéaire gaussien"
   }
  ],
  "ans": "b",
  "ansText": "La réduction de dimension via l'Analyse en Composantes Principales (ACP)",
  "id": "introduction-sl-22",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Qu'est-ce qui caractérise principalement l'apprentissage par renforcement par rapport aux deux autres branches du Machine Learning ?",
  "opts": [
   {
    "key": "a",
    "text": "Il n'y a pas de données à proprement parler : un système évolue dans un environnement et apprend via un système de récompense/punition"
   },
   {
    "key": "b",
    "text": "Il nécessite uniquement des données labellisées en amont"
   },
   {
    "key": "c",
    "text": "Il repose exclusivement sur l'Analyse en Composantes Principales"
   },
   {
    "key": "d",
    "text": "Il ne peut être appliqué qu'aux images"
   }
  ],
  "ans": "a",
  "ansText": "Il n'y a pas de données à proprement parler : un système évolue dans un environnement et apprend via un système de récompense/punition",
  "id": "introduction-sl-23",
  "cat": "introduction-sl"
 },
 {
  "type": "num",
  "q": "Combien de grandes branches du Machine Learning sont présentées dans ce chapitre (apprentissage supervisé, non supervisé et par renforcement) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0,
  "id": "introduction-sl-24",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Quelles sont les deux grandes catégories de tâches regroupées sous l'apprentissage supervisé ?",
  "opts": [
   {
    "key": "a",
    "text": "La classification et la régression"
   },
   {
    "key": "b",
    "text": "Le clustering et la réduction de dimension"
   },
   {
    "key": "c",
    "text": "La compression et le chiffrement"
   },
   {
    "key": "d",
    "text": "L'exploration et la visualisation"
   }
  ],
  "ans": "a",
  "ansText": "La classification et la régression",
  "id": "introduction-sl-25",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Dans la suite du cours, on cherche à apprendre un classifieur, aussi appelé une hypothèse et noté \\(h\\), à partir d'une collection de données labellisées notée \\(\\{x_i, y_i\\}_{i=1}^{m}\\). Que représente \\(x_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un ensemble de descripteurs (les caractéristiques de l'observation i)"
   },
   {
    "key": "b",
    "text": "Le label de l'observation i"
   },
   {
    "key": "c",
    "text": "Le nombre total d'observations"
   },
   {
    "key": "d",
    "text": "La fonction de coût du modèle"
   }
  ],
  "ans": "a",
  "ansText": "Un ensemble de descripteurs (les caractéristiques de l'observation i)",
  "id": "introduction-sl-26",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Parmi les prérequis mathématiques mentionnés pour bien suivre ce cours, lequel n'est PAS explicitement cité ?",
  "opts": [
   {
    "key": "a",
    "text": "Probabilités et statistiques"
   },
   {
    "key": "b",
    "text": "Algèbre linéaire (déterminant, transposée, valeurs propres...)"
   },
   {
    "key": "c",
    "text": "Analyse (dérivation, intégration, suites de fonctions)"
   },
   {
    "key": "d",
    "text": "Théorie des jeux combinatoires"
   }
  ],
  "ans": "d",
  "ansText": "Théorie des jeux combinatoires",
  "id": "introduction-sl-27",
  "cat": "introduction-sl"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de l'apprentissage supervisé, que représente l'espace \\(\\mathcal{X}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "L'espace des sorties (labels) du problème"
   },
   {
    "key": "b",
    "text": "L'espace des entrées, aussi appelé espace des caractéristiques (features)"
   },
   {
    "key": "c",
    "text": "L'espace des hypothèses considérées"
   },
   {
    "key": "d",
    "text": "L'espace des paramètres du modèle appris"
   }
  ],
  "ans": "b",
  "ansText": "L'espace des entrées, aussi appelé espace des caractéristiques (features)",
  "id": "statistical-learning-theory-01",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Dans une tâche de <em>classification binaire</em>, quel est l'espace de sortie \\(\\mathcal{Y}\\) typique ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathcal{Y} \\subset \\mathbb{R}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathcal{Y} = [0,1]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathcal{Y} = \\{-1, +1\\}\\) (ou \\(\\{0,1\\}\\))"
   },
   {
    "key": "d",
    "text": "\\(\\mathcal{Y} = \\{1, \\ldots, q\\}\\) avec \\(q > 2\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(\\mathcal{Y} = \\{-1, +1\\}\\) (ou \\(\\{0,1\\}\\))",
  "id": "statistical-learning-theory-02",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Que désigne-t-on par « hypothèse » \\(h\\) dans le cadre de l'apprentissage supervisé ?",
  "opts": [
   {
    "key": "a",
    "text": "L'ensemble des observations tirées i.i.d."
   },
   {
    "key": "b",
    "text": "Une fonction \\(h : \\mathcal{X} \\to \\mathcal{Y}\\) apprise par l'algorithme à partir de l'échantillon"
   },
   {
    "key": "c",
    "text": "La fonction de perte \\(\\ell\\) utilisée pour l'entraînement"
   },
   {
    "key": "d",
    "text": "Un hyperparamètre de régularisation du modèle"
   }
  ],
  "ans": "b",
  "ansText": "Une fonction \\(h : \\mathcal{X} \\to \\mathcal{Y}\\) apprise par l'algorithme à partir de l'échantillon",
  "id": "statistical-learning-theory-03",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Un échantillon d'apprentissage \\(S = \\{(x_i,y_i)\\}_{i=1}^{m}\\) est supposé être...",
  "opts": [
   {
    "key": "a",
    "text": "Construit de façon déterministe à partir de \\(\\mathcal{X}\\)"
   },
   {
    "key": "b",
    "text": "Tiré de façon i.i.d. (indépendante et identiquement distribuée) selon la distribution jointe \\(D\\)"
   },
   {
    "key": "c",
    "text": "Composé uniquement d'exemples de la classe majoritaire"
   },
   {
    "key": "d",
    "text": "Tiré selon une loi normale centrée réduite, quel que soit le problème"
   }
  ],
  "ans": "b",
  "ansText": "Tiré de façon i.i.d. (indépendante et identiquement distribuée) selon la distribution jointe \\(D\\)",
  "id": "statistical-learning-theory-04",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Une fonction de perte \\(\\ell(h(\\cdot), \\cdot)\\) est, par définition, une fonction de...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathcal{X} \\times \\mathcal{Y} \\to \\mathbb{R}_+\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathcal{X} \\to \\mathcal{Y}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}_+ \\to \\mathcal{X}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathcal{Y} \\to \\mathcal{X} \\times \\mathcal{Y}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathcal{X} \\times \\mathcal{Y} \\to \\mathbb{R}_+\\)",
  "id": "statistical-learning-theory-05",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Le <em>risque vrai</em> (True Risk) \\(R_\\ell(h)\\) d'une hypothèse \\(h\\) est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R_\\ell(h) = \\dfrac{1}{m}\\sum_{i=1}^{m} \\ell(h(x_i), y_i)\\)"
   },
   {
    "key": "b",
    "text": "\\(R_\\ell(h) = \\mathbb{E}_{(x,y)\\sim D}\\big[\\ell(h(x), y)\\big]\\)"
   },
   {
    "key": "c",
    "text": "\\(R_\\ell(h) = \\sup_{h \\in H} \\ell(h(x), y)\\)"
   },
   {
    "key": "d",
    "text": "\\(R_\\ell(h) = \\min_{h \\in H} \\ell(h(x), y)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(R_\\ell(h) = \\mathbb{E}_{(x,y)\\sim D}\\big[\\ell(h(x), y)\\big]\\)",
  "id": "statistical-learning-theory-06",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Pourquoi ne peut-on pas calculer directement le risque vrai \\(R_\\ell(h)\\) en pratique ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que la fonction de perte n'est jamais convexe"
   },
   {
    "key": "b",
    "text": "Parce que la distribution jointe \\(D\\) des données est inconnue"
   },
   {
    "key": "c",
    "text": "Parce que l'espace des hypothèses est toujours de taille infinie"
   },
   {
    "key": "d",
    "text": "Parce que le nombre d'observations \\(m\\) est toujours trop petit"
   }
  ],
  "ans": "b",
  "ansText": "Parce que la distribution jointe \\(D\\) des données est inconnue",
  "id": "statistical-learning-theory-07",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Le <em>risque empirique</em> \\(R_S^{\\ell}(h)\\) associé à un échantillon \\(S\\) de taille \\(m\\) est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R_S^{\\ell}(h) = \\mathbb{E}_{(x,y)\\sim D}\\big[\\ell(h(x), y)\\big]\\)"
   },
   {
    "key": "b",
    "text": "\\(R_S^{\\ell}(h) = \\dfrac{1}{m}\\sum_{i=1}^{m} \\ell(h(x_i), y_i)\\)"
   },
   {
    "key": "c",
    "text": "\\(R_S^{\\ell}(h) = \\sum_{i=1}^{m} \\ell(h(x_i), y_i)^2\\)"
   },
   {
    "key": "d",
    "text": "\\(R_S^{\\ell}(h) = \\max_{i} \\ell(h(x_i), y_i)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(R_S^{\\ell}(h) = \\dfrac{1}{m}\\sum_{i=1}^{m} \\ell(h(x_i), y_i)\\)",
  "id": "statistical-learning-theory-08",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "Un classifieur binaire \\(h\\) est évalué avec la perte 0-1 sur un échantillon de \\(m=8\\) exemples. Il commet une erreur de classification sur 3 d'entre eux. Quelle est la valeur du risque empirique \\(R_S^{\\ell}(h)\\) ?",
  "ans": 0.375,
  "ansText": "\\(3/8 = 0.375\\)",
  "tol": 0.001,
  "id": "statistical-learning-theory-09",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "On considère une tâche de régression avec la perte absolue \\(\\ell(h(x),y) = |h(x)-y|\\) et les couples suivants : \\(h(x_1)=2.1,\\ y_1=2\\) ; \\(h(x_2)=3.5,\\ y_2=3\\) ; \\(h(x_3)=1.0,\\ y_3=1.5\\). Calculez le risque empirique \\(R_S^{\\ell}(h)\\) sur cet échantillon de \\(m=3\\) exemples.",
  "ans": 0.3667,
  "ansText": "\\((0.1+0.5+0.5)/3 \\approx 0.367\\)",
  "tol": 0.01,
  "id": "statistical-learning-theory-10",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "La perte 0-1, définie par \\(\\ell(h(x),y) = \\mathbb{1}_{\\{h(x)\\neq y\\}}\\), pose un problème pratique en optimisation car :",
  "opts": [
   {
    "key": "a",
    "text": "Elle prend toujours des valeurs négatives"
   },
   {
    "key": "b",
    "text": "Elle est non convexe et non différentiable ; sa minimisation directe est NP-difficile"
   },
   {
    "key": "c",
    "text": "Elle ne peut être définie que pour des tâches de régression"
   },
   {
    "key": "d",
    "text": "Elle est convexe mais trop coûteuse à évaluer numériquement"
   }
  ],
  "ans": "b",
  "ansText": "Elle est non convexe et non différentiable ; sa minimisation directe est NP-difficile",
  "id": "statistical-learning-theory-11",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Dans l'illustration du phénomène de surapprentissage (overfitting) présentée en cours, une hypothèse \\(h_2\\) qui ajuste parfaitement les données d'entraînement (courbe complexe) par rapport à une hypothèse \\(h_1\\) plus simple :",
  "opts": [
   {
    "key": "a",
    "text": "Généralise nécessairement mieux que \\(h_1\\) sur de nouvelles données"
   },
   {
    "key": "b",
    "text": "Risque de moins bien généraliser que \\(h_1\\) : c'est un exemple typique de surapprentissage"
   },
   {
    "key": "c",
    "text": "A systématiquement un risque empirique plus élevé que \\(h_1\\)"
   },
   {
    "key": "d",
    "text": "Est nécessairement une fonction affine"
   }
  ],
  "ans": "b",
  "ansText": "Risque de moins bien généraliser que \\(h_1\\) : c'est un exemple typique de surapprentissage",
  "id": "statistical-learning-theory-12",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Le principe de la <em>minimisation du risque empirique</em> (ERM) consiste, pour un espace d'hypothèses \\(H\\) fixé à l'avance, à chercher :",
  "opts": [
   {
    "key": "a",
    "text": "\\(h_S^{\\star} = \\arg\\max_{h \\in H} R_S^{\\ell}(h)\\)"
   },
   {
    "key": "b",
    "text": "\\(h_S^{\\star} = \\arg\\min_{h \\in H} R_S^{\\ell}(h)\\)"
   },
   {
    "key": "c",
    "text": "\\(h_S^{\\star} = \\arg\\min_{h \\in H} R_\\ell(h)\\), en utilisant directement le risque vrai"
   },
   {
    "key": "d",
    "text": "\\(h_S^{\\star}\\) choisie aléatoirement dans \\(H\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(h_S^{\\star} = \\arg\\min_{h \\in H} R_S^{\\ell}(h)\\)",
  "id": "statistical-learning-theory-13",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "La <em>minimisation du risque structurel</em> (structural risk minimization) diffère de l'ERM simple en ce qu'elle introduit :",
  "opts": [
   {
    "key": "a",
    "text": "Une suite croissante d'espaces d'hypothèses \\(\\{H_n\\}_{n\\in\\mathbb{N}}\\) et un terme de pénalité \\(\\text{pen}(n,d)\\) croissant avec \\(n\\)"
   },
   {
    "key": "b",
    "text": "Uniquement la perte 0-1 à la place de toute autre fonction de perte"
   },
   {
    "key": "c",
    "text": "Un unique espace d'hypothèses de taille infinie sans aucune contrainte"
   },
   {
    "key": "d",
    "text": "Une contrainte portant uniquement sur les données d'entrée \\(x_i\\)"
   }
  ],
  "ans": "a",
  "ansText": "Une suite croissante d'espaces d'hypothèses \\(\\{H_n\\}_{n\\in\\mathbb{N}}\\) et un terme de pénalité \\(\\text{pen}(n,d)\\) croissant avec \\(n\\)",
  "id": "statistical-learning-theory-14",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Dans la <em>minimisation du risque régularisé</em>, on résout \\(h_S^{\\star} = \\arg\\min_{h\\in H} \\big(R_S^{\\ell}(h) + \\lambda\\|\\theta\\|\\big)\\). Le terme \\(\\lambda\\|\\theta\\|\\) est appelé :",
  "opts": [
   {
    "key": "a",
    "text": "Le risque vrai de l'hypothèse"
   },
   {
    "key": "b",
    "text": "Un terme de régularisation, associé à une constante appelée hyperparamètre \\(\\lambda\\)"
   },
   {
    "key": "c",
    "text": "La complexité de Rademacher de l'espace d'hypothèses"
   },
   {
    "key": "d",
    "text": "La dimension de Vapnik-Chervonenkis de \\(H\\)"
   }
  ],
  "ans": "b",
  "ansText": "Un terme de régularisation, associé à une constante appelée hyperparamètre \\(\\lambda\\)",
  "id": "statistical-learning-theory-15",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "Pour une régression lasso, on a calculé \\(\\|y - X\\theta\\|_2^2 = 12.5\\) et \\(\\|\\theta\\|_1 = 8\\), avec un hyperparamètre de régularisation \\(\\lambda = 0.1\\). Quelle est la valeur de la fonction objectif \\(\\|y - X\\theta\\|_2^2 + \\lambda\\|\\theta\\|_1\\) ?",
  "ans": 13.3,
  "ansText": "\\(12.5 + 0.1 \\times 8 = 13.3\\)",
  "tol": 0.01,
  "id": "statistical-learning-theory-16",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Que se passe-t-il, dans la minimisation du risque régularisé, lorsque l'hyperparamètre \\(\\lambda\\) tend vers l'infini ?",
  "opts": [
   {
    "key": "a",
    "text": "Le modèle sur-apprend systématiquement les données d'entraînement"
   },
   {
    "key": "b",
    "text": "On risque un phénomène de sous-apprentissage (underfitting), avec une mauvaise capacité de généralisation"
   },
   {
    "key": "c",
    "text": "Le risque empirique devient nécessairement nul"
   },
   {
    "key": "d",
    "text": "Le modèle devient strictement identique au modèle non régularisé (\\(\\lambda=0\\))"
   }
  ],
  "ans": "b",
  "ansText": "On risque un phénomène de sous-apprentissage (underfitting), avec une mauvaise capacité de généralisation",
  "id": "statistical-learning-theory-17",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Pour choisir en pratique la valeur de l'hyperparamètre \\(\\lambda\\), le cours propose d'utiliser :",
  "opts": [
   {
    "key": "a",
    "text": "Une unique observation test choisie au hasard"
   },
   {
    "key": "b",
    "text": "Une validation croisée à \\(k\\) plis (k-fold cross-validation) sur l'ensemble d'entraînement"
   },
   {
    "key": "c",
    "text": "Le calcul analytique exact du risque vrai"
   },
   {
    "key": "d",
    "text": "La dimension de Vapnik-Chervonenkis uniquement"
   }
  ],
  "ans": "b",
  "ansText": "Une validation croisée à \\(k\\) plis (k-fold cross-validation) sur l'ensemble d'entraînement",
  "id": "statistical-learning-theory-18",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "On dispose d'un jeu de données de \\(m=600\\) exemples pour une validation croisée à \\(k=5\\) plis de taille égale. Combien d'exemples sont utilisés pour l'entraînement à chaque itération (c'est-à-dire en utilisant \\(k-1\\) plis) ?",
  "ans": 480,
  "ansText": "Taille d'un pli \\(=600/5=120\\) ; entraînement sur \\(4\\) plis \\(=4\\times120=480\\)",
  "tol": 0.5,
  "id": "statistical-learning-theory-19",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "En s'inspirant du schéma de découpage train/test du cours, un échantillon de \\(m=850\\) observations est séparé en 70% pour l'ensemble d'entraînement et 30% pour l'ensemble de test. Quelle est la taille de l'ensemble de test ?",
  "ans": 255,
  "ansText": "\\(0.30 \\times 850 = 255\\)",
  "tol": 1,
  "id": "statistical-learning-theory-20",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Une borne de généralisation de type PAC (Probably Approximately Correct) s'écrit \\(\\Pr\\big(|R(\\cdot) - R_S(\\cdot)| \\geq \\varepsilon\\big) \\leq \\delta\\). Que représente \\(\\delta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "La valeur exacte de l'écart entre le risque vrai et le risque empirique"
   },
   {
    "key": "b",
    "text": "Une borne supérieure sur la probabilité que cet écart dépasse ou égale \\(\\varepsilon\\)"
   },
   {
    "key": "c",
    "text": "Le nombre d'hypothèses contenues dans \\(H\\)"
   },
   {
    "key": "d",
    "text": "La dimension de Vapnik-Chervonenkis de l'espace d'hypothèses"
   }
  ],
  "ans": "b",
  "ansText": "Une borne supérieure sur la probabilité que cet écart dépasse ou égale \\(\\varepsilon\\)",
  "id": "statistical-learning-theory-21",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Dans une borne PAC \\(\\Pr(|R(\\cdot)-R_S(\\cdot)|\\geq\\varepsilon)\\leq\\delta\\), plus la valeur de \\(\\varepsilon\\) choisie est petite, plus...",
  "opts": [
   {
    "key": "a",
    "text": "La valeur de \\(\\delta\\) associée est également petite : la borne est automatiquement meilleure"
   },
   {
    "key": "b",
    "text": "La valeur de \\(\\delta\\) associée est grande (proche de 1), car garantir une faible déviation est plus difficile"
   },
   {
    "key": "c",
    "text": "Le nombre d'hypothèses de \\(H\\) diminue mécaniquement"
   },
   {
    "key": "d",
    "text": "La borne cesse de dépendre du nombre d'exemples \\(m\\)"
   }
  ],
  "ans": "b",
  "ansText": "La valeur de \\(\\delta\\) associée est grande (proche de 1), car garantir une faible déviation est plus difficile",
  "id": "statistical-learning-theory-22",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Quelles inégalités de concentration sont mentionnées dans le cours pour établir des bornes de généralisation ?",
  "opts": [
   {
    "key": "a",
    "text": "Les inégalités de Markov et de Chebyshev uniquement"
   },
   {
    "key": "b",
    "text": "Les inégalités de Hoeffding et de McDiarmid"
   },
   {
    "key": "c",
    "text": "L'inégalité de Cauchy-Schwarz uniquement"
   },
   {
    "key": "d",
    "text": "L'inégalité de Jensen uniquement"
   }
  ],
  "ans": "b",
  "ansText": "Les inégalités de Hoeffding et de McDiarmid",
  "id": "statistical-learning-theory-23",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Une borne de généralisation est dite <em>uniforme</em> lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "Elle ne dépend jamais du nombre d'exemples \\(m\\) de l'échantillon"
   },
   {
    "key": "b",
    "text": "Elle est valable simultanément pour toute hypothèse \\(h \\in H\\), et pas seulement pour une hypothèse fixée à l'avance"
   },
   {
    "key": "c",
    "text": "Elle ne s'applique qu'à une seule hypothèse choisie a priori"
   },
   {
    "key": "d",
    "text": "Elle prend exactement la même valeur numérique pour tous les problèmes d'apprentissage"
   }
  ],
  "ans": "b",
  "ansText": "Elle est valable simultanément pour toute hypothèse \\(h \\in H\\), et pas seulement pour une hypothèse fixée à l'avance",
  "id": "statistical-learning-theory-24",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "D'après le Théorème 5.1 (borne de généralisation uniforme), pour un espace d'hypothèses \\(H\\) de taille finie, avec probabilité au moins \\(1-\\delta\\), pour toute hypothèse \\(h \\in H\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R_\\ell(h) \\leq R_S^{\\ell}(h) + \\sqrt{\\dfrac{\\ln|H| + \\ln(2/\\delta)}{2m}}\\)"
   },
   {
    "key": "b",
    "text": "\\(R_\\ell(h) \\leq R_S^{\\ell}(h) - \\sqrt{\\dfrac{\\ln|H|}{m}}\\)"
   },
   {
    "key": "c",
    "text": "\\(R_\\ell(h) = R_S^{\\ell}(h)\\) exactement, quel que soit \\(m\\)"
   },
   {
    "key": "d",
    "text": "\\(R_\\ell(h) \\leq R_S^{\\ell}(h) + |H| \\cdot \\delta\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(R_\\ell(h) \\leq R_S^{\\ell}(h) + \\sqrt{\\dfrac{\\ln|H| + \\ln(2/\\delta)}{2m}}\\)",
  "id": "statistical-learning-theory-25",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "En appliquant le Théorème 5.1 avec \\(|H| = 50\\), \\(\\delta = 0.05\\) et \\(m = 2000\\), calculez la valeur du terme \\(\\sqrt{\\dfrac{\\ln|H| + \\ln(2/\\delta)}{2m}}\\).",
  "ans": 0.0436,
  "ansText": "\\(\\sqrt{(\\ln 50 + \\ln 40)/4000} \\approx 0.0436\\)",
  "tol": 0.001,
  "id": "statistical-learning-theory-26",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "Toujours avec le Théorème 5.1, pour \\(|H| = 8\\), \\(\\delta = 0.1\\) et \\(m = 500\\), calculez la valeur du terme \\(\\sqrt{\\dfrac{\\ln|H| + \\ln(2/\\delta)}{2m}}\\).",
  "ans": 0.0712,
  "ansText": "\\(\\sqrt{(\\ln 8 + \\ln 20)/1000} \\approx 0.0712\\)",
  "tol": 0.001,
  "id": "statistical-learning-theory-27",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Lorsque l'espace d'hypothèses \\(H\\) n'est pas de taille finie (par exemple l'ensemble des classifieurs linéaires en dimension \\(d\\)), quelle mesure de complexité, introduite par Vapnik et Chervonenkis dans les années 1970, est présentée dans le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "La complexité de Rademacher"
   },
   {
    "key": "b",
    "text": "La dimension de Vapnik-Chervonenkis (VC-dimension), notée \\(VC(H)\\)"
   },
   {
    "key": "c",
    "text": "La constante de stabilité uniforme \\(\\beta\\)"
   },
   {
    "key": "d",
    "text": "L'hyperparamètre de régularisation \\(\\lambda\\)"
   }
  ],
  "ans": "b",
  "ansText": "La dimension de Vapnik-Chervonenkis (VC-dimension), notée \\(VC(H)\\)",
  "id": "statistical-learning-theory-28",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "La complexité de Rademacher, présentée comme une autre mesure de complexité d'un espace d'hypothèses, mesure informellement :",
  "opts": [
   {
    "key": "a",
    "text": "Le nombre exact d'hypothèses contenues dans \\(H\\)"
   },
   {
    "key": "b",
    "text": "La capacité de l'ensemble d'hypothèses \\(H\\) à s'ajuster au bruit présent dans le jeu de données"
   },
   {
    "key": "c",
    "text": "La vitesse de convergence de l'algorithme de descente de gradient"
   },
   {
    "key": "d",
    "text": "Le nombre de plis utilisés lors d'une validation croisée"
   }
  ],
  "ans": "b",
  "ansText": "La capacité de l'ensemble d'hypothèses \\(H\\) à s'ajuster au bruit présent dans le jeu de données",
  "id": "statistical-learning-theory-29",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "(Définition 5.3) Un algorithme d'apprentissage \\(A\\) a une stabilité uniforme en \\(\\beta/m\\) si, en remplaçant un exemple quelconque de l'échantillon \\(S\\) par un autre exemple indépendant tiré de \\(D\\), alors :",
  "opts": [
   {
    "key": "a",
    "text": "Le risque empirique du nouveau modèle devient nul"
   },
   {
    "key": "b",
    "text": "Le supremum (sur \\(x\\)) de l'écart entre les pertes des deux modèles obtenus est majoré par \\(\\beta/m\\)"
   },
   {
    "key": "c",
    "text": "L'algorithme doit nécessairement être ré-entraîné sur un tout nouvel espace d'hypothèses \\(H\\)"
   },
   {
    "key": "d",
    "text": "Le nombre d'hypothèses de \\(H\\) double automatiquement"
   }
  ],
  "ans": "b",
  "ansText": "Le supremum (sur \\(x\\)) de l'écart entre les pertes des deux modèles obtenus est majoré par \\(\\beta/m\\)",
  "id": "statistical-learning-theory-30",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Le cadre de la <em>stabilité uniforme</em> (Bousquet et Elisseeff, 2002), contrairement aux approches basées sur \\(VC(H)\\) ou la complexité de Rademacher :",
  "opts": [
   {
    "key": "a",
    "text": "Nécessite toujours de calculer explicitement la taille de \\(H\\)"
   },
   {
    "key": "b",
    "text": "Ne repose pas directement sur une mesure de complexité de \\(H\\), mais sur la sensibilité de l'algorithme à une modification de l'échantillon"
   },
   {
    "key": "c",
    "text": "Ne peut s'appliquer qu'à des problèmes d'optimisation non convexes"
   },
   {
    "key": "d",
    "text": "Est mathématiquement équivalente à l'inégalité de Markov"
   }
  ],
  "ans": "b",
  "ansText": "Ne repose pas directement sur une mesure de complexité de \\(H\\), mais sur la sensibilité de l'algorithme à une modification de l'échantillon",
  "id": "statistical-learning-theory-31",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "num",
  "q": "D'après le Théorème 5.2 (borne basée sur la stabilité uniforme) \\(R_\\ell(\\theta_S) \\leq R_S^{\\ell}(\\theta_S) + \\dfrac{2\\beta}{m} + (4\\beta+K)\\sqrt{\\dfrac{\\ln(1/\\delta)}{2m}}\\), calculez la valeur du terme correctif \\(\\dfrac{2\\beta}{m} + (4\\beta+K)\\sqrt{\\dfrac{\\ln(1/\\delta)}{2m}}\\) pour \\(\\beta = 0.5\\), \\(K = 1\\) (borne sur la perte), \\(\\delta = 0.05\\) et \\(m = 1000\\).",
  "ans": 0.1171,
  "ansText": "\\(2(0.5)/1000 + (2+1)\\sqrt{\\ln 20 / 2000} \\approx 0.001 + 0.116 = 0.117\\)",
  "tol": 0.002,
  "id": "statistical-learning-theory-32",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Dans le Théorème 5.2, la vitesse de convergence globale de la borne basée sur la stabilité uniforme est de l'ordre de :",
  "opts": [
   {
    "key": "a",
    "text": "\\(O(m)\\)"
   },
   {
    "key": "b",
    "text": "\\(O(1/\\sqrt{m})\\)"
   },
   {
    "key": "c",
    "text": "\\(O(\\ln m)\\)"
   },
   {
    "key": "d",
    "text": "\\(O(1/m^2)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(O(1/\\sqrt{m})\\)",
  "id": "statistical-learning-theory-33",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Quel avantage pratique le cours attribue-t-il à la borne basée sur la stabilité uniforme (Théorème 5.2), comparée aux bornes basées sur \\(VC(H)\\) ou la complexité de Rademacher ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est totalement indépendante du terme de régularisation utilisé"
   },
   {
    "key": "b",
    "text": "Elle est plus facile à calculer en pratique et cohérente avec l'usage d'un terme de régularisation"
   },
   {
    "key": "c",
    "text": "Elle ne dépend jamais du nombre d'exemples \\(m\\)"
   },
   {
    "key": "d",
    "text": "Elle ne nécessite aucune hypothèse sur la fonction de perte \\(\\ell\\)"
   }
  ],
  "ans": "b",
  "ansText": "Elle est plus facile à calculer en pratique et cohérente avec l'usage d'un terme de régularisation",
  "id": "statistical-learning-theory-34",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "D'après le cours, la constante de stabilité uniforme \\(\\beta\\) est une fonction de l'hyperparamètre de régularisation \\(\\lambda\\) qui est :",
  "opts": [
   {
    "key": "a",
    "text": "Croissante : plus \\(\\lambda\\) est grand, plus \\(\\beta\\) augmente"
   },
   {
    "key": "b",
    "text": "Décroissante : plus \\(\\lambda\\) est grand, plus \\(\\beta\\) diminue"
   },
   {
    "key": "c",
    "text": "Totalement indépendante de la valeur de \\(\\lambda\\)"
   },
   {
    "key": "d",
    "text": "Toujours égale à 1, quelle que soit la valeur de \\(\\lambda\\)"
   }
  ],
  "ans": "b",
  "ansText": "Décroissante : plus \\(\\lambda\\) est grand, plus \\(\\beta\\) diminue",
  "id": "statistical-learning-theory-35",
  "cat": "statistical-learning-theory"
 },
 {
  "type": "qcm",
  "q": "Quel est l'objectif principal de l'ensemble de test (\\( \\textit{test set} \\)) dans un protocole expérimental d'apprentissage supervisé ?",
  "opts": [
   {
    "key": "a",
    "text": "Apprendre les paramètres du modèle"
   },
   {
    "key": "b",
    "text": "Évaluer la performance du modèle sur des données qu'il n'a jamais rencontrées, afin d'estimer sa capacité de généralisation"
   },
   {
    "key": "c",
    "text": "Sélectionner la valeur optimale d'un hyperparamètre"
   },
   {
    "key": "d",
    "text": "Normaliser les variables explicatives avant l'entraînement"
   }
  ],
  "ans": "b",
  "ansText": "Évaluer la performance du modèle sur des données qu'il n'a jamais rencontrées, afin d'estimer sa capacité de généralisation",
  "id": "learning-procedure-01",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Dans la procédure classique décrite dans le cours, quelle proportion des données est habituellement réservée à l'ensemble d'entraînement, et quelle proportion à l'ensemble de test ?",
  "opts": [
   {
    "key": "a",
    "text": "Environ 50% pour l'entraînement et 50% pour le test"
   },
   {
    "key": "b",
    "text": "Environ 2/3 pour l'entraînement et 1/3 pour le test"
   },
   {
    "key": "c",
    "text": "Environ 1/3 pour l'entraînement et 2/3 pour le test"
   },
   {
    "key": "d",
    "text": "Environ 90% pour l'entraînement et 10% pour le test"
   }
  ],
  "ans": "b",
  "ansText": "Environ 2/3 pour l'entraînement et 1/3 pour le test",
  "id": "learning-procedure-02",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Pourquoi introduit-on un ensemble de validation, distinct de l'ensemble d'apprentissage (\\( \\textit{learning set} \\)) et de l'ensemble de test ?",
  "opts": [
   {
    "key": "a",
    "text": "Pour augmenter artificiellement la taille du jeu de données disponible"
   },
   {
    "key": "b",
    "text": "Pour évaluer la performance associée à chaque valeur d'un hyperparamètre, sans utiliser l'ensemble de test"
   },
   {
    "key": "c",
    "text": "Pour remplacer complètement l'ensemble de test lors de l'évaluation finale"
   },
   {
    "key": "d",
    "text": "Pour normaliser les variables explicatives avant l'entraînement"
   }
  ],
  "ans": "b",
  "ansText": "Pour évaluer la performance associée à chaque valeur d'un hyperparamètre, sans utiliser l'ensemble de test",
  "id": "learning-procedure-03",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ordre correct des étapes de la procédure de réglage d'un hyperparamètre \\( \\lambda \\) décrite dans le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "Diviser en train/test, puis diviser le train en learning/validation ; pour chaque \\( \\lambda_i \\), apprendre sur le learning set et évaluer sur le validation set ; garder le meilleur \\( \\lambda \\) ; ré-apprendre un modèle sur tout l'ensemble d'entraînement ; puis tester ce modèle sur le test set"
   },
   {
    "key": "b",
    "text": "Diviser directement en learning/validation/test, apprendre un seul modèle, puis choisir l'hyperparamètre en observant les résultats sur le test set"
   },
   {
    "key": "c",
    "text": "Tester le modèle avant même de l'avoir entraîné, puis choisir l'hyperparamètre en fonction du résultat obtenu sur le test set"
   },
   {
    "key": "d",
    "text": "Apprendre le modèle directement sur l'ensemble de test, puis le valider sur l'ensemble d'apprentissage"
   }
  ],
  "ans": "a",
  "ansText": "Diviser en train/test, puis diviser le train en learning/validation ; pour chaque \\( \\lambda_i \\), apprendre sur le learning set et évaluer sur le validation set ; garder le meilleur \\( \\lambda \\) ; ré-apprendre un modèle sur tout l'ensemble d'entraînement ; puis tester ce modèle sur le test set",
  "id": "learning-procedure-04",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "On découpe un échantillon de la façon suivante (voir Figure 15 du cours) : \\( 70\\% \\) des données forment l'ensemble d'entraînement, le reste étant l'ensemble de test. Parmi l'ensemble d'entraînement, \\( 80\\% \\) forment le \\( \\textit{learning set} \\) et \\( 20\\% \\) forment le \\( \\textit{validation set} \\). Quel pourcentage du total des données représente le learning set ?",
  "ans": 56,
  "ansText": "\\(56\\%\\)",
  "tol": 1,
  "id": "learning-procedure-05",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Avec le même découpage que ci-dessus (entraînement \\( =70\\% \\) du total, dont \\( 80\\% \\) de learning set et \\( 20\\% \\) de validation set), quel pourcentage du total des données représente l'ensemble de validation ?",
  "ans": 14,
  "ansText": "\\(14\\%\\)",
  "tol": 1,
  "id": "learning-procedure-06",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Selon le cours, quel est le signe caractéristique du <strong>sur-apprentissage</strong> (\\( \\textit{overfitting} \\)) lorsqu'on compare la performance sur l'ensemble d'apprentissage et sur l'ensemble de validation ?",
  "opts": [
   {
    "key": "a",
    "text": "La performance de validation est supérieure à la performance d'apprentissage"
   },
   {
    "key": "b",
    "text": "La performance de validation est inférieure à la performance d'apprentissage"
   },
   {
    "key": "c",
    "text": "Les deux performances sont toujours rigoureusement identiques"
   },
   {
    "key": "d",
    "text": "La performance sur le test set dépasse toujours celle sur l'ensemble d'apprentissage"
   }
  ],
  "ans": "b",
  "ansText": "La performance de validation est inférieure à la performance d'apprentissage",
  "id": "learning-procedure-07",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Toujours selon le cours, quel est le signe caractéristique du <strong>sous-apprentissage</strong> (\\( \\textit{underfitting} \\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "La performance de validation est supérieure à la performance d'apprentissage"
   },
   {
    "key": "b",
    "text": "La performance de validation est inférieure à la performance d'apprentissage"
   },
   {
    "key": "c",
    "text": "La performance d'apprentissage est toujours nulle"
   },
   {
    "key": "d",
    "text": "La performance de test est toujours égale à zéro"
   }
  ],
  "ans": "a",
  "ansText": "La performance de validation est supérieure à la performance d'apprentissage",
  "id": "learning-procedure-08",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quel est le principal inconvénient de la méthode de validation simple (un seul découpage learning/validation) qui motive l'utilisation de la validation croisée (\\( \\textit{cross-validation} \\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est toujours plus lente à calculer que la validation croisée"
   },
   {
    "key": "b",
    "text": "La validation ne repose que sur une petite partie des données, donc potentiellement sur une faible portion de la distribution sous-jacente"
   },
   {
    "key": "c",
    "text": "Elle ne peut être utilisée que pour des problèmes de régression"
   },
   {
    "key": "d",
    "text": "Elle nécessite de connaître à l'avance la meilleure valeur de l'hyperparamètre"
   }
  ],
  "ans": "b",
  "ansText": "La validation ne repose que sur une petite partie des données, donc potentiellement sur une faible portion de la distribution sous-jacente",
  "id": "learning-procedure-09",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "On réalise une validation croisée à \\( k=5 \\) plis (folds) et on teste \\( 4 \\) valeurs différentes d'un hyperparamètre. Combien de modèles doit-on apprendre au total pendant la phase de réglage (sans compter le modèle final ré-appris sur tout l'ensemble d'entraînement) ?",
  "ans": 20,
  "ansText": "20",
  "tol": 0.5,
  "id": "learning-procedure-10",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formule de l'erreur quadratique moyenne (\\( \\textit{MSE} \\)) pour \\( m \\) exemples, où \\( y_i \\) est la vraie valeur et \\( \\hat y_i \\) la valeur prédite ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\displaystyle MSE = \\frac{1}{m}\\sum_{i=1}^m (y_i - \\hat y_i)^2 \\)"
   },
   {
    "key": "b",
    "text": "\\( \\displaystyle MSE = \\frac{1}{m}\\sum_{i=1}^m |y_i - \\hat y_i| \\)"
   },
   {
    "key": "c",
    "text": "\\( \\displaystyle MSE = \\sum_{i=1}^m (y_i - \\hat y_i) \\)"
   },
   {
    "key": "d",
    "text": "\\( \\displaystyle MSE = \\sqrt{\\frac{1}{m}\\sum_{i=1}^m (y_i - \\hat y_i)^2} \\)"
   }
  ],
  "ans": "a",
  "ansText": "\\( \\displaystyle MSE = \\frac{1}{m}\\sum_{i=1}^m (y_i - \\hat y_i)^2 \\)",
  "id": "learning-procedure-11",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quel est le lien entre le \\( \\textit{RMSE} \\) (Root Mean Square Error) et le \\( \\textit{MSE} \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( RMSE = MSE^2 \\)"
   },
   {
    "key": "b",
    "text": "\\( RMSE = \\sqrt{MSE} \\)"
   },
   {
    "key": "c",
    "text": "\\( RMSE = MSE / m \\)"
   },
   {
    "key": "d",
    "text": "\\( RMSE \\) et \\( MSE \\) sont toujours strictement égaux"
   }
  ],
  "ans": "b",
  "ansText": "\\( RMSE = \\sqrt{MSE} \\)",
  "id": "learning-procedure-12",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quel est le principal inconvénient du \\( MSE \\) (et donc du \\( RMSE \\)) comme mesure de performance en régression ?",
  "opts": [
   {
    "key": "a",
    "text": "Il n'est ni convexe ni différentiable"
   },
   {
    "key": "b",
    "text": "Il est très sensible aux valeurs aberrantes (outliers), ce qui peut biaiser le modèle"
   },
   {
    "key": "c",
    "text": "Il ne peut être calculé qu'en classification"
   },
   {
    "key": "d",
    "text": "Il est toujours négatif ou nul"
   }
  ],
  "ans": "b",
  "ansText": "Il est très sensible aux valeurs aberrantes (outliers), ce qui peut biaiser le modèle",
  "id": "learning-procedure-13",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Pourquoi utilise-t-on parfois le \\( MAE \\) (Mean Absolute Error) plutôt que le \\( MSE \\) ou le \\( RMSE \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le \\( MAE \\) est convexe alors que le \\( MSE \\) ne l'est pas"
   },
   {
    "key": "b",
    "text": "Basé sur la norme \\( \\ell_1 \\) plutôt que \\( \\ell_2 \\), le \\( MAE \\) est moins sensible aux valeurs aberrantes que le \\( MSE \\)"
   },
   {
    "key": "c",
    "text": "Le \\( MAE \\) ne nécessite pas de connaître les vraies valeurs \\( y_i \\)"
   },
   {
    "key": "d",
    "text": "Le \\( MAE \\) ne peut être utilisé qu'en classification"
   }
  ],
  "ans": "b",
  "ansText": "Basé sur la norme \\( \\ell_1 \\) plutôt que \\( \\ell_2 \\), le \\( MAE \\) est moins sensible aux valeurs aberrantes que le \\( MSE \\)",
  "id": "learning-procedure-14",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Soit un jeu de \\( 4 \\) exemples avec valeurs réelles \\( y = (3,\\, -0.5,\\, 2,\\, 7) \\) et valeurs prédites \\( \\hat y = (2.5,\\, 0,\\, 2,\\, 8) \\). Calculez le \\( MSE \\).",
  "ans": 0.375,
  "ansText": "0.375",
  "tol": 0.01,
  "id": "learning-procedure-15",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Avec les mêmes valeurs \\( y = (3,\\, -0.5,\\, 2,\\, 7) \\) et \\( \\hat y = (2.5,\\, 0,\\, 2,\\, 8) \\), calculez le \\( RMSE \\).",
  "ans": 0.612,
  "ansText": "\\(\\approx 0.612\\)",
  "tol": 0.01,
  "id": "learning-procedure-16",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Avec les mêmes valeurs \\( y = (3,\\, -0.5,\\, 2,\\, 7) \\) et \\( \\hat y = (2.5,\\, 0,\\, 2,\\, 8) \\), calculez le \\( MAE \\).",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.01,
  "id": "learning-procedure-17",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Parmi les propositions suivantes, laquelle correspond à d'autres mesures de performance en régression, citées dans le cours en plus du \\( MSE \\), du \\( RMSE \\) et du \\( MAE \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le critère AIC, le critère BIC et le \\( R^2 \\)"
   },
   {
    "key": "b",
    "text": "La précision et le rappel"
   },
   {
    "key": "c",
    "text": "L'AUC-ROC et le F-mesure"
   },
   {
    "key": "d",
    "text": "La matrice de confusion"
   }
  ],
  "ans": "a",
  "ansText": "Le critère AIC, le critère BIC et le \\( R^2 \\)",
  "id": "learning-procedure-18",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Dans une matrice de confusion pour une classification binaire (\\( y=1 \\) : classe positive, \\( y=0 \\) : classe négative), comment appelle-t-on un exemple de la classe positive correctement prédit positif par le modèle ?",
  "opts": [
   {
    "key": "a",
    "text": "Un Faux Positif (FP)"
   },
   {
    "key": "b",
    "text": "Un Vrai Positif (TP)"
   },
   {
    "key": "c",
    "text": "Un Faux Négatif (FN)"
   },
   {
    "key": "d",
    "text": "Un Vrai Négatif (TN)"
   }
  ],
  "ans": "b",
  "ansText": "Un Vrai Positif (TP)",
  "id": "learning-procedure-19",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formule de l'Accuracy (exactitude) à partir d'une matrice de confusion établie sur \\( m \\) exemples ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\displaystyle Accuracy = \\frac{TP}{TP+FP} \\)"
   },
   {
    "key": "b",
    "text": "\\( \\displaystyle Accuracy = \\frac{TP+TN}{m} \\)"
   },
   {
    "key": "c",
    "text": "\\( \\displaystyle Accuracy = \\frac{TP}{TP+FN} \\)"
   },
   {
    "key": "d",
    "text": "\\( \\displaystyle Accuracy = \\frac{FP+FN}{m} \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( \\displaystyle Accuracy = \\frac{TP+TN}{m} \\)",
  "id": "learning-procedure-20",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Un jeu de données contient \\( m = 100\\,000 \\) exemples, dont \\( m^+ = 1\\,000 \\) positifs et \\( m^- = 99\\,000 \\) négatifs. On considère un modèle trivial qui prédit systématiquement la classe négative. Quelle est son accuracy (donnez une proportion entre 0 et 1) ?",
  "ans": 0.99,
  "ansText": "0.99",
  "tol": 0.001,
  "id": "learning-procedure-21",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple précédent (modèle trivial prédisant toujours la classe négative sur un jeu très déséquilibré), pourquoi l'accuracy de \\( 99\\% \\) est-elle trompeuse ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que le modèle ne détecte aucun exemple de la classe positive minoritaire"
   },
   {
    "key": "b",
    "text": "Parce que l'accuracy ne peut jamais dépasser \\( 90\\% \\) en pratique"
   },
   {
    "key": "c",
    "text": "Parce que l'accuracy n'est définie que pour des problèmes de régression"
   },
   {
    "key": "d",
    "text": "Parce que le taux d'erreur du modèle dépasse \\( 50\\% \\)"
   }
  ],
  "ans": "a",
  "ansText": "Parce que le modèle ne détecte aucun exemple de la classe positive minoritaire",
  "id": "learning-procedure-22",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la Sensibilité (\\( \\textit{Sensitivity} \\)), aussi appelée Rappel (\\( \\textit{Recall} \\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\displaystyle Recall = \\frac{TP}{TP+FP} \\)"
   },
   {
    "key": "b",
    "text": "\\( \\displaystyle Recall = \\frac{TP}{TP+FN} \\)"
   },
   {
    "key": "c",
    "text": "\\( \\displaystyle Recall = \\frac{TN}{TN+FP} \\)"
   },
   {
    "key": "d",
    "text": "\\( \\displaystyle Recall = \\frac{TP+TN}{m} \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( \\displaystyle Recall = \\frac{TP}{TP+FN} \\)",
  "id": "learning-procedure-23",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Un classifieur \\( h_1 \\) est appliqué à un jeu de \\( 1000 \\) exemples (\\( 10 \\) positifs, \\( 990 \\) négatifs) et produit la matrice de confusion suivante : \\( TP=3 \\), \\( FN=7 \\), \\( FP=0 \\), \\( TN=990 \\). Calculez le Rappel (Recall) de \\( h_1 \\).",
  "ans": 0.3,
  "ansText": "0.3",
  "tol": 0.01,
  "id": "learning-procedure-24",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la Précision (\\( \\textit{Positive Predictive Value} \\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\displaystyle Precision = \\frac{TP}{TP+FN} \\)"
   },
   {
    "key": "b",
    "text": "\\( \\displaystyle Precision = \\frac{TP}{TP+FP} \\)"
   },
   {
    "key": "c",
    "text": "\\( \\displaystyle Precision = \\frac{TN}{TN+FN} \\)"
   },
   {
    "key": "d",
    "text": "\\( \\displaystyle Precision = \\frac{TP+FP}{m} \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( \\displaystyle Precision = \\frac{TP}{TP+FP} \\)",
  "id": "learning-procedure-25",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Un classifieur \\( h_2 \\), sur le même jeu de \\( 1000 \\) exemples, produit la matrice de confusion suivante : \\( TP=9 \\), \\( FN=1 \\), \\( FP=6 \\), \\( TN=984 \\). Calculez la Précision de \\( h_2 \\).",
  "ans": 0.6,
  "ansText": "0.6",
  "tol": 0.01,
  "id": "learning-procedure-26",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la Spécificité (\\( \\textit{True Negative Rate} \\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\displaystyle Specificity = \\frac{TN}{TN+FP} \\)"
   },
   {
    "key": "b",
    "text": "\\( \\displaystyle Specificity = \\frac{TP}{TP+FN} \\)"
   },
   {
    "key": "c",
    "text": "\\( \\displaystyle Specificity = \\frac{FP}{FP+TN} \\)"
   },
   {
    "key": "d",
    "text": "\\( \\displaystyle Specificity = \\frac{TN}{TN+FN} \\)"
   }
  ],
  "ans": "a",
  "ansText": "\\( \\displaystyle Specificity = \\frac{TN}{TN+FP} \\)",
  "id": "learning-procedure-27",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est défini le F-mesure \\( F_\\beta \\) (avec \\( \\beta = 1 \\), on parle alors de F1-score) ?",
  "opts": [
   {
    "key": "a",
    "text": "Comme la moyenne arithmétique de la Précision et du Rappel"
   },
   {
    "key": "b",
    "text": "Comme la moyenne harmonique de la Précision et du Rappel"
   },
   {
    "key": "c",
    "text": "Comme le produit de la Précision et du Rappel"
   },
   {
    "key": "d",
    "text": "Comme la différence entre la Précision et le Rappel"
   }
  ],
  "ans": "b",
  "ansText": "Comme la moyenne harmonique de la Précision et du Rappel",
  "id": "learning-procedure-28",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Pour le classifieur \\( h_1 \\) de l'exemple précédent, on a Précision \\( =1 \\) et Rappel \\( =0.3 \\). Calculez son F1-score (\\( \\beta=1 \\)).",
  "ans": 0.46,
  "ansText": "\\(\\approx 0.46\\)",
  "tol": 0.01,
  "id": "learning-procedure-29",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Pour le classifieur \\( h_2 \\) de l'exemple précédent, on a Précision \\( =0.6 \\) et Rappel \\( =0.9 \\). Calculez son F1-score (\\( \\beta=1 \\)).",
  "ans": 0.72,
  "ansText": "0.72",
  "tol": 0.01,
  "id": "learning-procedure-30",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Quel est l'effet du paramètre \\( \\beta \\) dans le F-mesure \\( F_\\beta \\), qui combine Précision et Rappel ?",
  "opts": [
   {
    "key": "a",
    "text": "Plus \\( \\beta \\) est grand, plus on privilégie le Rappel par rapport à la Précision"
   },
   {
    "key": "b",
    "text": "Plus \\( \\beta \\) est grand, plus on privilégie la Précision par rapport au Rappel"
   },
   {
    "key": "c",
    "text": "Le paramètre \\( \\beta \\) contrôle uniquement la taille de l'ensemble de test"
   },
   {
    "key": "d",
    "text": "Le paramètre \\( \\beta \\) n'a aucun effet sur la valeur du F-mesure"
   }
  ],
  "ans": "a",
  "ansText": "Plus \\( \\beta \\) est grand, plus on privilégie le Rappel par rapport à la Précision",
  "id": "learning-procedure-31",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la <em>Class Weighted Accuracy</em> (CWA), en fonction d'un paramètre \\( \\alpha \\in [0,1] \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( CWA = \\alpha \\times \\textit{Précision} + (1-\\alpha) \\times \\textit{Rappel} \\)"
   },
   {
    "key": "b",
    "text": "\\( CWA = \\alpha \\times \\textit{Sensibilité} + (1-\\alpha) \\times \\textit{Spécificité} \\)"
   },
   {
    "key": "c",
    "text": "\\( CWA = \\sqrt{\\textit{Sensibilité} \\times \\textit{Spécificité}} \\)"
   },
   {
    "key": "d",
    "text": "\\( CWA = \\dfrac{\\textit{Sensibilité} + \\textit{Spécificité}}{2\\alpha} \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( CWA = \\alpha \\times \\textit{Sensibilité} + (1-\\alpha) \\times \\textit{Spécificité} \\)",
  "id": "learning-procedure-32",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Comment est défini le G-mean, autre mesure utilisée dans les scénarios déséquilibrés ?",
  "opts": [
   {
    "key": "a",
    "text": "La moyenne arithmétique de la Sensibilité et de la Spécificité"
   },
   {
    "key": "b",
    "text": "La racine carrée du produit de la Sensibilité et de la Spécificité"
   },
   {
    "key": "c",
    "text": "Le produit de la Précision et du Rappel"
   },
   {
    "key": "d",
    "text": "La différence entre la Sensibilité et la Spécificité"
   }
  ],
  "ans": "b",
  "ansText": "La racine carrée du produit de la Sensibilité et de la Spécificité",
  "id": "learning-procedure-33",
  "cat": "learning-procedure"
 },
 {
  "type": "num",
  "q": "Pour le classifieur \\( h_2 \\) (\\( TP=9,\\, FN=1,\\, FP=6,\\, TN=984 \\)), la Sensibilité vaut \\( 0.9 \\) et la Spécificité vaut \\( 984/990 \\approx 0.994 \\). Calculez le G-mean de \\( h_2 \\).",
  "ans": 0.946,
  "ansText": "\\(\\approx 0.946\\)",
  "tol": 0.01,
  "id": "learning-procedure-34",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Que signifie une AUC (<em>Area Under the ROC Curve</em>) proche de \\( 1 \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le modèle est très mauvais, à peine meilleur qu'un tirage aléatoire"
   },
   {
    "key": "b",
    "text": "Le modèle est excellent : il attribue des scores plus élevés aux exemples positifs qu'aux exemples négatifs, presque parfaitement"
   },
   {
    "key": "c",
    "text": "Le modèle prédit systématiquement la classe négative"
   },
   {
    "key": "d",
    "text": "Le modèle ne peut pas être utilisé pour un problème de classification"
   }
  ],
  "ans": "b",
  "ansText": "Le modèle est excellent : il attribue des scores plus élevés aux exemples positifs qu'aux exemples négatifs, presque parfaitement",
  "id": "learning-procedure-35",
  "cat": "learning-procedure"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de la classification, pourquoi utilise-t-on des <em>pertes de substitution</em> (<em>surrogate losses</em>) plutôt que la perte 0-1 pour entraîner un modèle ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que la perte 0-1 est non convexe et non différentiable, ce qui la rend difficile à optimiser d'un point de vue algorithmique"
   },
   {
    "key": "b",
    "text": "Parce que la perte 0-1 ne peut prendre que des valeurs négatives"
   },
   {
    "key": "c",
    "text": "Parce que la perte 0-1 ne dépend pas des paramètres w du modèle"
   },
   {
    "key": "d",
    "text": "Parce que la perte 0-1 est toujours strictement supérieure à toutes ses relaxations convexes"
   }
  ],
  "ans": "a",
  "ansText": "Parce que la perte 0-1 est non convexe et non différentiable, ce qui la rend difficile à optimiser d'un point de vue algorithmique",
  "id": "knn-surrogate-losses-01",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "La <em>hinge loss</em>, utilisée pour entraîner un Support Vector Machine (SVM), est définie par \\( \\ell(h(x), y) = \\max(0,\\ 1 - y\\,h(x)) \\). Que vaut cette perte lorsque \\( y\\,h(x) \\geq 1 \\) (exemple bien classé avec une marge suffisante) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle vaut toujours 0"
   },
   {
    "key": "b",
    "text": "Elle vaut toujours 1"
   },
   {
    "key": "c",
    "text": "Elle croît linéairement avec \\( y\\,h(x) \\)"
   },
   {
    "key": "d",
    "text": "Elle diverge vers l'infini"
   }
  ],
  "ans": "a",
  "ansText": "Elle vaut toujours 0",
  "id": "knn-surrogate-losses-02",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "La perte exponentielle \\( \\ell(h(x), y) = \\exp(-y\\,h(x)) \\), très utilisée dans le cadre du <em>boosting</em>, se distingue de la hinge loss par le fait qu'elle",
  "opts": [
   {
    "key": "a",
    "text": "donne un poids plus important aux erreurs de classification et ne s'annule jamais, quelle que soit la marge"
   },
   {
    "key": "b",
    "text": "est nulle dès que la prédiction est correcte, comme la hinge loss"
   },
   {
    "key": "c",
    "text": "est non convexe, contrairement à la hinge loss"
   },
   {
    "key": "d",
    "text": "ne dépend pas du produit \\( y\\,h(x) \\)"
   }
  ],
  "ans": "a",
  "ansText": "donne un poids plus important aux erreurs de classification et ne s'annule jamais, quelle que soit la marge",
  "id": "knn-surrogate-losses-03",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "La perte logistique, utilisée pour entraîner une régression logistique, est définie (pour \\( y \\in \\{-1, 1\\} \\)) par \\( \\ell(h(x), y) = \\dfrac{1}{\\ln(2)} \\ln\\big(1 + \\exp(-y\\,h(x))\\big) \\). À quoi sert le facteur \\( \\dfrac{1}{\\ln(2)} \\) qui apparaît devant le logarithme ?",
  "opts": [
   {
    "key": "a",
    "text": "À normaliser la perte, de sorte qu'elle vaille exactement 1 lorsque \\( y\\,h(x) = 0 \\) (prédiction totalement incertaine)"
   },
   {
    "key": "b",
    "text": "À rendre la perte logistique non convexe"
   },
   {
    "key": "c",
    "text": "À annuler systématiquement la perte lorsque la prédiction est incorrecte"
   },
   {
    "key": "d",
    "text": "À transformer la perte logistique en la perte 0-1"
   }
  ],
  "ans": "a",
  "ansText": "À normaliser la perte, de sorte qu'elle vaille exactement 1 lorsque \\( y\\,h(x) = 0 \\) (prédiction totalement incertaine)",
  "id": "knn-surrogate-losses-04",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On utilise la hinge loss \\( \\ell(h(x), y) = \\max(0,\\ 1 - y\\,h(x)) \\). Pour un exemple tel que \\( y = 1 \\) et \\( h(x) = 0.5 \\), quelle est la valeur de la perte ?",
  "ans": 0.5,
  "ansText": "0,5",
  "tol": 0.01,
  "id": "knn-surrogate-losses-05",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On utilise la perte exponentielle \\( \\ell(h(x), y) = \\exp(-y\\,h(x)) \\). Pour un exemple tel que \\( y = 1 \\) et \\( h(x) = 1 \\), quelle est la valeur de cette perte (arrondie à \\( 10^{-4} \\) près) ?",
  "ans": 0.3679,
  "ansText": "0,3679",
  "tol": 0.001,
  "id": "knn-surrogate-losses-06",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On utilise la perte exponentielle \\( \\ell(h(x), y) = \\exp(-y\\,h(x)) \\). Pour un exemple tel que \\( y = -1 \\) et \\( h(x) = 1 \\) (prédiction incorrecte), quelle est la valeur de cette perte (arrondie à \\( 10^{-4} \\) près) ?",
  "ans": 2.7183,
  "ansText": "2,7183",
  "tol": 0.001,
  "id": "knn-surrogate-losses-07",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On utilise la perte logistique \\( \\ell(h(x), y) = \\dfrac{1}{\\ln(2)} \\ln\\big(1 + \\exp(-y\\,h(x))\\big) \\). Quelle est la valeur de cette perte lorsque \\( y = 1 \\) et \\( h(x) = 0 \\) (le modèle est totalement incertain sur sa prédiction) ?",
  "ans": 1.0,
  "ansText": "1",
  "tol": 0.01,
  "id": "knn-surrogate-losses-08",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "L'algorithme des k plus proches voisins (k-NN) est qualifié de méthode <strong>non paramétrique</strong>. Que signifie cette propriété ?",
  "opts": [
   {
    "key": "a",
    "text": "Il ne fait aucune hypothèse sur la distribution sous-jacente des données"
   },
   {
    "key": "b",
    "text": "Il n'a aucun paramètre à choisir, y compris la valeur de k"
   },
   {
    "key": "c",
    "text": "Il ne peut être utilisé qu'en régression, jamais en classification"
   },
   {
    "key": "d",
    "text": "Il nécessite de connaître à l'avance la loi de probabilité des données"
   }
  ],
  "ans": "a",
  "ansText": "Il ne fait aucune hypothèse sur la distribution sous-jacente des données",
  "id": "knn-surrogate-losses-09",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Pour une nouvelle observation \\( x' \\), le k-NN prédit l'étiquette \\( \\hat{y}(x') = \\arg\\max_{y \\in \\mathcal{Y}} k_y \\). Que désigne \\( k_y \\) dans cette formule ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nombre de voisins, parmi les k plus proches de \\( x' \\), qui appartiennent à la classe y"
   },
   {
    "key": "b",
    "text": "La distance moyenne entre \\( x' \\) et les points de la classe y"
   },
   {
    "key": "c",
    "text": "Le nombre total de points de la classe y dans tout le jeu de données"
   },
   {
    "key": "d",
    "text": "Le rang de la classe y parmi les k premières classes triées par ordre alphabétique"
   }
  ],
  "ans": "a",
  "ansText": "Le nombre de voisins, parmi les k plus proches de \\( x' \\), qui appartiennent à la classe y",
  "id": "knn-surrogate-losses-10",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Cover et Hart (1967) ont montré que, lorsque la taille m de l'échantillon d'apprentissage est suffisamment grande, la règle du plus proche voisin (k = 1) a un taux d'erreur",
  "opts": [
   {
    "key": "a",
    "text": "au plus égal à deux fois l'erreur de Bayes (l'erreur minimale atteignable compte tenu de la distribution des données)"
   },
   {
    "key": "b",
    "text": "toujours strictement inférieur à l'erreur de Bayes"
   },
   {
    "key": "c",
    "text": "indépendant de la dimension d des données"
   },
   {
    "key": "d",
    "text": "toujours nul, quel que soit le jeu de données"
   }
  ],
  "ans": "a",
  "ansText": "au plus égal à deux fois l'erreur de Bayes (l'erreur minimale atteignable compte tenu de la distribution des données)",
  "id": "knn-surrogate-losses-11",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Que se passe-t-il, en règle générale, lorsqu'on augmente la valeur de k dans le k-NN, jusqu'à atteindre k = m (m étant le nombre total d'exemples d'apprentissage) ?",
  "opts": [
   {
    "key": "a",
    "text": "La décision devient de plus en plus lissée, et pour k = m, on prédit systématiquement la classe majoritaire de tout le jeu de données"
   },
   {
    "key": "b",
    "text": "La décision devient de plus en plus instable et sensible au bruit"
   },
   {
    "key": "c",
    "text": "Le temps de calcul diminue fortement car moins de distances sont nécessaires"
   },
   {
    "key": "d",
    "text": "La prédiction devient indépendante des données d'apprentissage et suit une loi uniforme"
   }
  ],
  "ans": "a",
  "ansText": "La décision devient de plus en plus lissée, et pour k = m, on prédit systématiquement la classe majoritaire de tout le jeu de données",
  "id": "knn-surrogate-losses-12",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "En pratique, comment choisit-on généralement la valeur de k pour l'algorithme des k plus proches voisins ?",
  "opts": [
   {
    "key": "a",
    "text": "Par une procédure de validation croisée"
   },
   {
    "key": "b",
    "text": "En prenant systématiquement k = 1"
   },
   {
    "key": "c",
    "text": "En prenant k égal à la dimension d des données"
   },
   {
    "key": "d",
    "text": "En le fixant une fois pour toutes à partir de considérations purement théoriques, sans jamais le valider empiriquement"
   }
  ],
  "ans": "a",
  "ansText": "Par une procédure de validation croisée",
  "id": "knn-surrogate-losses-13",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Pour prédire l'étiquette d'une nouvelle observation avec le k-NN sur un jeu de n exemples de dimension d, la complexité en temps est en \\( O(nd + nk) \\) (calcul des distances puis sélection des voisins) et la mémoire nécessaire est en \\( O(n) \\). Que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "L'algorithme doit conserver tout le jeu d'apprentissage en mémoire pour prédire, ce qui le rend coûteux sur de grands jeux de données"
   },
   {
    "key": "b",
    "text": "L'algorithme n'a besoin d'aucune donnée d'apprentissage au moment de la prédiction"
   },
   {
    "key": "c",
    "text": "La complexité ne dépend jamais du nombre d'exemples n"
   },
   {
    "key": "d",
    "text": "L'algorithme est particulièrement bien adapté aux très grands jeux de données"
   }
  ],
  "ans": "a",
  "ansText": "L'algorithme doit conserver tout le jeu d'apprentissage en mémoire pour prédire, ce qui le rend coûteux sur de grands jeux de données",
  "id": "knn-surrogate-losses-14",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "On dispose de descripteurs \\( x_1, x_2, x_3 \\) dont les échelles de valeurs sont très différentes (par exemple \\( x_3 \\) variant dans les centaines alors que \\( x_1 \\) varie entre -1 et 1). Quel problème cela pose-t-il pour le calcul de la distance euclidienne dans le k-NN ?",
  "opts": [
   {
    "key": "a",
    "text": "La distance est alors dominée par le descripteur ayant la plus grande échelle, même s'il n'est pas le plus informatif"
   },
   {
    "key": "b",
    "text": "La distance euclidienne ne peut tout simplement plus être calculée dans ce cas"
   },
   {
    "key": "c",
    "text": "Cela n'a aucun effet : la distance euclidienne est invariante à l'échelle des descripteurs"
   },
   {
    "key": "d",
    "text": "Cela rend automatiquement le descripteur de plus grande échelle non pertinent pour la classification"
   }
  ],
  "ans": "a",
  "ansText": "La distance est alors dominée par le descripteur ayant la plus grande échelle, même s'il n'est pas le plus informatif",
  "id": "knn-surrogate-losses-15",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Parmi les solutions suivantes pour atténuer le problème de descripteurs à échelles très différentes dans le k-NN, laquelle consiste à transformer chaque variable pour qu'elle suive (approximativement) une loi normale centrée réduite ?",
  "opts": [
   {
    "key": "a",
    "text": "La normalisation \\( v_j \\leftarrow \\dfrac{v_j - \\mu_j}{\\sigma_j} \\), où \\( \\mu_j \\) et \\( \\sigma_j \\) sont la moyenne et l'écart-type du descripteur"
   },
   {
    "key": "b",
    "text": "La mise à l'échelle min-max \\( v_j \\leftarrow \\dfrac{v_j - \\min v_j}{\\max v_j - \\min v_j} \\)"
   },
   {
    "key": "c",
    "text": "L'ajout d'un poids nul à toutes les variables"
   },
   {
    "key": "d",
    "text": "La suppression pure et simple de toutes les variables sauf une"
   }
  ],
  "ans": "a",
  "ansText": "La normalisation \\( v_j \\leftarrow \\dfrac{v_j - \\mu_j}{\\sigma_j} \\), où \\( \\mu_j \\) et \\( \\sigma_j \\) sont la moyenne et l'écart-type du descripteur",
  "id": "knn-surrogate-losses-16",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "La distance de Manhattan (norme \\( L_1 \\)) entre deux points \\( x, x' \\in \\mathbb{R}^d \\) est \\( d_1(x,x') = \\sum_{j=1}^d |x_j - x'_j| \\), tandis que la distance euclidienne (norme \\( L_2 \\)) est \\( d_2(x,x') = \\sqrt{\\sum_{j=1}^d (x_j - x'_j)^2} \\). Ces deux distances sont des cas particuliers de quelle famille de distances ?",
  "opts": [
   {
    "key": "a",
    "text": "La norme \\( L_p \\), définie par \\( d_p(x,x') = \\left(\\sum_{j=1}^d |x_j - x'_j|^p\\right)^{1/p} \\) pour \\( p \\geq 1 \\)"
   },
   {
    "key": "b",
    "text": "La distance de corrélation"
   },
   {
    "key": "c",
    "text": "La distance de Hamming"
   },
   {
    "key": "d",
    "text": "La divergence de Kullback-Leibler"
   }
  ],
  "ans": "a",
  "ansText": "La norme \\( L_p \\), définie par \\( d_p(x,x') = \\left(\\sum_{j=1}^d |x_j - x'_j|^p\\right)^{1/p} \\) pour \\( p \\geq 1 \\)",
  "id": "knn-surrogate-losses-17",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Quel est l'objectif de l'algorithme Condensed Nearest Neighbor (Hart, 1968) ?",
  "opts": [
   {
    "key": "a",
    "text": "Sélectionner un sous-ensemble S' du jeu d'apprentissage S tel que le 1-NN appliqué à S' classe presque aussi bien que le 1-NN appliqué à tout le jeu S"
   },
   {
    "key": "b",
    "text": "Augmenter artificiellement la taille du jeu d'apprentissage pour améliorer la précision"
   },
   {
    "key": "c",
    "text": "Remplacer systématiquement la distance euclidienne par la distance de Manhattan"
   },
   {
    "key": "d",
    "text": "Choisir automatiquement la meilleure valeur de k par validation croisée"
   }
  ],
  "ans": "a",
  "ansText": "Sélectionner un sous-ensemble S' du jeu d'apprentissage S tel que le 1-NN appliqué à S' classe presque aussi bien que le 1-NN appliqué à tout le jeu S",
  "id": "knn-surrogate-losses-18",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On considère deux exemples décrits par trois descripteurs \\( (x_1, x_2, x_3) \\) : \\( x^{(1)} = (0.3,\\ 0.89,\\ 232) \\) et \\( x^{(2)} = (-0.1,\\ 0.23,\\ 652) \\). Calculez le carré de la distance euclidienne \\( d_2^2(x^{(1)}, x^{(2)}) = \\sum_{j=1}^3 (x^{(1)}_j - x^{(2)}_j)^2 \\).",
  "ans": 176400.6,
  "ansText": "≈ 176400,6 (dominé par le terme (232-652)² = 176400)",
  "tol": 1.0,
  "id": "knn-surrogate-losses-19",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "Pour les deux mêmes exemples \\( x^{(1)} = (0.3,\\ 0.89,\\ 232) \\) et \\( x^{(2)} = (-0.1,\\ 0.23,\\ 652) \\), calculez la distance de Manhattan \\( d_1(x^{(1)}, x^{(2)}) = \\sum_{j=1}^3 |x^{(1)}_j - x^{(2)}_j| \\).",
  "ans": 421.06,
  "ansText": "421,06",
  "tol": 0.1,
  "id": "knn-surrogate-losses-20",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "Le descripteur \\( x_3 \\) prend les valeurs 232, 652, 122 et 232 sur quatre exemples. En appliquant la normalisation min-max \\( v_j \\leftarrow \\dfrac{v_j - \\min v_j}{\\max v_j - \\min v_j} \\), quelle est la valeur normalisée du premier exemple (\\( x_3 = 232 \\)) ?",
  "ans": 0.2075,
  "ansText": "≈ 0,208 (= (232-122)/(652-122) = 110/530)",
  "tol": 0.01,
  "id": "knn-surrogate-losses-21",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "On dispose du jeu d'apprentissage unidimensionnel suivant (valeur du descripteur x, étiquette y) : (1, 1), (2, 1), (3, 0), (5, 0), (8, 1). Pour une nouvelle observation \\( x' = 4 \\), en utilisant la distance \\( |x - x'| \\), quelle étiquette prédit le 1-NN (k = 1) ? (En cas d'égalité de distance entre plusieurs voisins de même étiquette, répondez cette étiquette.)",
  "ans": 0,
  "ansText": "0 (les deux points les plus proches, x=3 et x=5, sont à distance 1 de x' et portent tous deux l'étiquette 0)",
  "tol": 0.001,
  "id": "knn-surrogate-losses-22",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "Avec le même jeu d'apprentissage (1, 1), (2, 1), (3, 0), (5, 0), (8, 1) et la même requête \\( x' = 4 \\), quelle étiquette prédit le k-NN avec k = 3 ?",
  "ans": 0,
  "ansText": "0 (les 3 plus proches voisins sont x=3 (d=1, y=0), x=5 (d=1, y=0) et x=2 (d=2, y=1) : 2 votes pour 0 contre 1 vote pour 1)",
  "tol": 0.001,
  "id": "knn-surrogate-losses-23",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "Toujours avec le même jeu d'apprentissage (1, 1), (2, 1), (3, 0), (5, 0), (8, 1) et la requête \\( x' = 4 \\), quelle étiquette prédit le k-NN avec k = 5, c'est-à-dire en utilisant tous les points disponibles ?",
  "ans": 1,
  "ansText": "1 (sur les 5 points, 3 portent l'étiquette 1 (x=1, x=2, x=8) contre 2 l'étiquette 0 (x=3, x=5) : la majorité bascule en faveur de 1)",
  "tol": 0.001,
  "id": "knn-surrogate-losses-24",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "num",
  "q": "Pour classer une observation \\( x' \\) à l'aide du 3-NN, on dispose de trois voisins \\( x_1, x_2, x_3 \\) d'étiquettes respectives \\( y_1 = 1,\\ y_2 = 1,\\ y_3 = -1 \\), situés respectivement à des distances \\( d_1 = 3,\\ d_2 = 4,\\ d_3 = 1 \\) de \\( x' \\). En pondérant le vote de chaque voisin par l'inverse de sa distance (poids \\( 1/d_i \\)), quelle étiquette est prédite pour \\( x' \\) ?",
  "ans": -1,
  "ansText": "-1 (poids pour la classe 1 : 1/3 + 1/4 = 7/12 ≈ 0,58 ; poids pour la classe -1 : 1/1 = 1, qui l'emporte, alors qu'un vote majoritaire non pondéré aurait prédit la classe 1)",
  "tol": 0.001,
  "id": "knn-surrogate-losses-25",
  "cat": "knn-surrogate-losses"
 },
 {
  "type": "qcm",
  "q": "Le SVM linéaire produit une hypothèse \\(h\\) de la forme \\(h(x)=\\text{sign}(\\langle w,x\\rangle+b)\\). Que représente géométriquement l'ensemble \\(\\{x : \\langle w,x\\rangle+b=0\\}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un hyperplan (affine) qui sépare l'espace en deux régions"
   },
   {
    "key": "b",
    "text": "Le centre de gravité de l'échantillon"
   },
   {
    "key": "c",
    "text": "L'ensemble des vecteurs de support uniquement"
   },
   {
    "key": "d",
    "text": "La frontière de la marge, distincte de la frontière de décision"
   }
  ],
  "ans": "a",
  "ansText": "Un hyperplan (affine) qui sépare l'espace en deux régions",
  "id": "svm-01",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Pourquoi le SVM cherche-t-il à maximiser la marge plutôt que de choisir un séparateur quelconque parmi ceux qui classent parfaitement les données d'entraînement ?",
  "opts": [
   {
    "key": "a",
    "text": "Pour réduire le temps de calcul de l'algorithme d'apprentissage"
   },
   {
    "key": "b",
    "text": "Un séparateur proche des exemples d'une classe risque de mal classer de nouvelles données situées du mauvais côté : une grande marge améliore la généralisation"
   },
   {
    "key": "c",
    "text": "Parce que cela garantit que le biais \\(b\\) est nul"
   },
   {
    "key": "d",
    "text": "Parce que cela minimise systématiquement la dimension de l'espace des caractéristiques"
   }
  ],
  "ans": "b",
  "ansText": "Un séparateur proche des exemples d'une classe risque de mal classer de nouvelles données situées du mauvais côté : une grande marge améliore la généralisation",
  "id": "svm-02",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Par une normalisation appropriée du couple \\((w,b)\\), les deux hyperplans qui délimitent la marge, initialement d'équation \\(\\langle w,x\\rangle+b=\\pm\\rho\\), peuvent toujours être réécrits sous la forme :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle w,x\\rangle+b=\\pm 1\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle w,x\\rangle+b=0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|w\\|_2=1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\langle w,x\\rangle+b=\\pm C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle w,x\\rangle+b=\\pm 1\\)",
  "id": "svm-03",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Dans le SVM à marge maximale, la marge \\(\\gamma\\) est définie comme :",
  "opts": [
   {
    "key": "a",
    "text": "La distance entre les deux hyperplans d'équation \\(\\langle w,x\\rangle+b=\\pm\\rho\\)"
   },
   {
    "key": "b",
    "text": "La norme du vecteur de poids \\(\\|w\\|_2\\)"
   },
   {
    "key": "c",
    "text": "La distance entre l'hyperplan séparateur et l'origine"
   },
   {
    "key": "d",
    "text": "Le nombre de vecteurs de support divisé par la taille de l'échantillon"
   }
  ],
  "ans": "a",
  "ansText": "La distance entre les deux hyperplans d'équation \\(\\langle w,x\\rangle+b=\\pm\\rho\\)",
  "id": "svm-04",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "En décomposant \\(x_+\\) et \\(x_-\\) (points situés sur les deux hyperplans de marge) et en utilisant \\(\\langle w,x_+\\rangle-\\langle w,x_-\\rangle=2\\), on montre que la marge \\(\\gamma\\), projection de \\(x_+-x_-\\) sur le vecteur unitaire \\(w/\\|w\\|_2\\), vaut :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\gamma=\\dfrac{2}{\\|w\\|_2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\gamma=\\dfrac{1}{\\|w\\|_2}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\gamma=2\\|w\\|_2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\gamma=\\dfrac{\\|w\\|_2}{2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\gamma=\\dfrac{2}{\\|w\\|_2}\\)",
  "id": "svm-05",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Un SVM à marge dure a pour vecteur de poids \\(w=(3,4)\\). En utilisant \\(\\gamma=\\dfrac{2}{\\|w\\|_2}\\), quelle est la largeur de la marge \\(\\gamma\\) ?",
  "ans": 0.4,
  "ansText": "\\(\\gamma=2/5=0.4\\)",
  "tol": 0.01,
  "id": "svm-06",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Un SVM à marge dure a pour vecteur de poids \\(w=(6,8)\\). Quelle est la largeur de la marge \\(\\gamma\\) ?",
  "ans": 0.2,
  "ansText": "\\(\\|w\\|_2=10\\), donc \\(\\gamma=2/10=0.2\\)",
  "tol": 0.01,
  "id": "svm-07",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quelle est la distance d'un point \\(x\\) à l'hyperplan d'équation \\(\\langle w,x\\rangle+b=0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{|\\langle w,x\\rangle+b|}{\\|w\\|_2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle w,x\\rangle+b\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|w\\|_2\\cdot(\\langle w,x\\rangle+b)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac{\\|w\\|_2}{|\\langle w,x\\rangle+b|}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{|\\langle w,x\\rangle+b|}{\\|w\\|_2}\\)",
  "id": "svm-08",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Soit l'hyperplan défini par \\(w=(3,4)\\) et \\(b=-10\\). Quelle est la distance du point \\(x=(1,2)\\) à cet hyperplan ?",
  "ans": 0.2,
  "ansText": "\\(\\langle w,x\\rangle+b=3\\times1+4\\times2-10=1\\), \\(\\|w\\|_2=5\\), donc distance \\(=1/5=0.2\\)",
  "tol": 0.01,
  "id": "svm-09",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quel est le problème d'optimisation associé au SVM à marge dure (Définition 7.1) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\min\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2\\) sous les contraintes \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\) pour tout \\(i\\)"
   },
   {
    "key": "b",
    "text": "\\(\\max\\limits_{(w,b)} \\|w\\|_2^2\\) sous les contraintes \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\) pour tout \\(i\\)"
   },
   {
    "key": "c",
    "text": "\\(\\min\\limits_{(w,b)} \\|w\\|_2\\) sans aucune contrainte"
   },
   {
    "key": "d",
    "text": "\\(\\min\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2 + \\sum_i \\xi_i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\min\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2\\) sous les contraintes \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\) pour tout \\(i\\)",
  "id": "svm-10",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Pour un candidat \\(w=(2,1)\\), quelle est la valeur de l'objectif du SVM à marge dure \\(\\dfrac12\\|w\\|_2^2\\) ?",
  "ans": 2.5,
  "ansText": "\\(\\dfrac12(2^2+1^2)=\\dfrac12\\times5=2.5\\)",
  "tol": 0.01,
  "id": "svm-11",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Dans le problème du SVM à marge souple (Définition 7.2), à quoi correspond la variable d'écart (« slack ») \\(\\xi_i\\) associée à l'exemple \\(x_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "À la marge maximale atteignable par le modèle"
   },
   {
    "key": "b",
    "text": "À une mesure de la violation, par le point \\(x_i\\), de la contrainte de marge \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\)"
   },
   {
    "key": "c",
    "text": "Au paramètre de régularisation du noyau utilisé"
   },
   {
    "key": "d",
    "text": "À la distance entre deux vecteurs de support consécutifs"
   }
  ],
  "ans": "b",
  "ansText": "À une mesure de la violation, par le point \\(x_i\\), de la contrainte de marge \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\)",
  "id": "svm-12",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quel est l'effet d'une valeur élevée du hyperparamètre \\(C\\) dans le SVM à marge souple ?",
  "opts": [
   {
    "key": "a",
    "text": "Le modèle tolère davantage de violations de marge et la marge devient plus large"
   },
   {
    "key": "b",
    "text": "Le modèle pénalise fortement les violations de marge, se rapprochant du comportement du SVM à marge dure"
   },
   {
    "key": "c",
    "text": "La dimension de l'espace des caractéristiques augmente automatiquement"
   },
   {
    "key": "d",
    "text": "Le noyau utilisé devient nécessairement un noyau gaussien"
   }
  ],
  "ans": "b",
  "ansText": "Le modèle pénalise fortement les violations de marge, se rapprochant du comportement du SVM à marge dure",
  "id": "svm-13",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Pour un SVM à marge souple avec \\(w=(1,1)\\), \\(C=2\\), \\(m=4\\) et un vecteur de variables d'écart \\(\\xi=(0,\\,0,\\,0.5,\\,1.5)\\), calculer la valeur de l'objectif \\(\\dfrac12\\|w\\|_2^2+\\dfrac{C}{m}\\sum_{i=1}^4 \\xi_i\\).",
  "ans": 2.0,
  "ansText": "\\(\\dfrac12(1+1)=1\\) et \\(\\dfrac{2}{4}(0+0+0.5+1.5)=0.5\\times2=1\\), total \\(=1+1=2\\)",
  "tol": 0.01,
  "id": "svm-14",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "La Proposition 7.1 montre que le problème du SVM à marge souple (Définition 7.2) est équivalent à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\min\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2 + \\dfrac{C}{m}\\sum_{i=1}^m [1-y_i(\\langle w,x_i\\rangle+b)]_+\\)"
   },
   {
    "key": "b",
    "text": "\\(\\min\\limits_{(w,b)} \\|w\\|_2 + C\\sum_i \\xi_i^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\max\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2 - \\dfrac{C}{m}\\sum_i \\xi_i\\)"
   },
   {
    "key": "d",
    "text": "\\(\\min\\limits_{(w,b)} \\dfrac{C}{m}\\sum_i y_i(\\langle w,x_i\\rangle+b)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\min\\limits_{(w,b)} \\dfrac12\\|w\\|_2^2 + \\dfrac{C}{m}\\sum_{i=1}^m [1-y_i(\\langle w,x_i\\rangle+b)]_+\\)",
  "id": "svm-15",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Un exemple a pour étiquette \\(y=1\\) et pour score \\(\\langle w,x\\rangle+b=0.3\\). Quelle est la valeur de la perte charnière \\([1-y(\\langle w,x\\rangle+b)]_+\\) ?",
  "ans": 0.7,
  "ansText": "\\(\\max(0,1-1\\times0.3)=\\max(0,0.7)=0.7\\)",
  "tol": 0.01,
  "id": "svm-16",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Un exemple a pour étiquette \\(y=1\\) et pour score \\(\\langle w,x\\rangle+b=1.5\\). Quelle est la valeur de la perte charnière \\([1-y(\\langle w,x\\rangle+b)]_+\\) ?",
  "ans": 0.0,
  "ansText": "\\(\\max(0,1-1.5)=\\max(0,-0.5)=0\\)",
  "tol": 0.01,
  "id": "svm-17",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Un exemple a pour étiquette \\(y=-1\\) et pour score \\(\\langle w,x\\rangle+b=0.2\\). Quelle est la valeur de la perte charnière \\([1-y(\\langle w,x\\rangle+b)]_+\\) ?",
  "ans": 1.2,
  "ansText": "\\(\\max(0,1-(-1)\\times0.2)=\\max(0,1.2)=1.2\\)",
  "tol": 0.01,
  "id": "svm-18",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Pourquoi préfère-t-on souvent résoudre la formulation duale plutôt que la formulation primale du SVM, en particulier lorsque la dimension \\(d\\) des données est grande ?",
  "opts": [
   {
    "key": "a",
    "text": "La complexité de la formulation duale dépend surtout du nombre d'exemples \\(m\\) plutôt que de la dimension \\(d\\), ce qui améliore la vitesse de convergence"
   },
   {
    "key": "b",
    "text": "La formulation duale permet d'ignorer totalement les étiquettes \\(y_i\\)"
   },
   {
    "key": "c",
    "text": "La formulation duale transforme le problème convexe en un problème non convexe plus général"
   },
   {
    "key": "d",
    "text": "La formulation duale ne nécessite aucune contrainte"
   }
  ],
  "ans": "a",
  "ansText": "La complexité de la formulation duale dépend surtout du nombre d'exemples \\(m\\) plutôt que de la dimension \\(d\\), ce qui améliore la vitesse de convergence",
  "id": "svm-19",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Le Lagrangien du SVM à marge souple s'écrit \\(L(w,b,\\xi,\\alpha,\\beta)=\\dfrac12\\|w\\|_2^2+\\dfrac{C}{m}\\sum_i\\xi_i+\\sum_i\\alpha_i(1-\\xi_i-y_i(\\langle w,x_i\\rangle+b))-\\sum_i\\beta_i\\xi_i\\). Les vecteurs \\(\\alpha\\) et \\(\\beta\\) sont :",
  "opts": [
   {
    "key": "a",
    "text": "Les vecteurs de variables duales (ou variables de Lagrange) associées respectivement à la première et à la seconde contrainte"
   },
   {
    "key": "b",
    "text": "Les coordonnées des vecteurs de support dans l'espace d'entrée"
   },
   {
    "key": "c",
    "text": "Des hyperparamètres à fixer avant l'apprentissage, comme \\(C\\)"
   },
   {
    "key": "d",
    "text": "Les images des données par la transformation \\(\\Phi\\) du noyau"
   }
  ],
  "ans": "a",
  "ansText": "Les vecteurs de variables duales (ou variables de Lagrange) associées respectivement à la première et à la seconde contrainte",
  "id": "svm-20",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "D'après la condition de stationnarité du Lagrangien par rapport à \\(w\\), quelle expression obtient-on ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(w=\\displaystyle\\sum_{i=1}^m y_i\\alpha_i x_i\\)"
   },
   {
    "key": "b",
    "text": "\\(w=\\displaystyle\\sum_{i=1}^m \\alpha_i\\)"
   },
   {
    "key": "c",
    "text": "\\(w=\\displaystyle\\sum_{i=1}^m x_i\\)"
   },
   {
    "key": "d",
    "text": "\\(w=\\dfrac{1}{m}\\displaystyle\\sum_{i=1}^m y_i x_i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(w=\\displaystyle\\sum_{i=1}^m y_i\\alpha_i x_i\\)",
  "id": "svm-21",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "La condition de stationnarité du Lagrangien par rapport à \\(b\\) donne :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\displaystyle\\sum_{i=1}^m \\alpha_i y_i = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\displaystyle\\sum_{i=1}^m \\alpha_i = m\\)"
   },
   {
    "key": "c",
    "text": "\\(b=\\displaystyle\\sum_{i=1}^m \\alpha_i y_i x_i\\)"
   },
   {
    "key": "d",
    "text": "\\(\\alpha_i=0\\) pour tout \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\displaystyle\\sum_{i=1}^m \\alpha_i y_i = 0\\)",
  "id": "svm-22",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "La condition de stationnarité du Lagrangien par rapport à \\(\\xi_i\\) conduit à la relation \\(\\dfrac{C}{m}-\\alpha_i-\\beta_i=0\\), avec \\(\\alpha_i,\\beta_i\\ge0\\). Quelle contrainte sur \\(\\alpha_i\\) cela impose-t-il dans la formulation duale ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(0\\le \\alpha_i \\le \\dfrac{C}{m}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\alpha_i \\ge 0\\) sans borne supérieure"
   },
   {
    "key": "c",
    "text": "\\(-1\\le \\alpha_i\\le 1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\alpha_i \\in \\{0,1\\}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(0\\le \\alpha_i \\le \\dfrac{C}{m}\\)",
  "id": "svm-23",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formulation duale du SVM à marge souple obtenue après avoir substitué les conditions KKT dans le Lagrangien ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\max\\limits_{\\alpha} -\\dfrac12\\displaystyle\\sum_{i=1}^m\\sum_{j=1}^m \\alpha_i\\alpha_j y_i y_j\\langle x_i,x_j\\rangle + \\sum_{i=1}^m \\alpha_i\\), sous \\(0\\le\\alpha_i\\le C/m\\) et \\(\\sum_i y_i\\alpha_i=0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\min\\limits_{\\alpha} \\displaystyle\\sum_{i=1}^m \\alpha_i^2\\), sous \\(\\alpha_i\\ge0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\max\\limits_{\\alpha} \\displaystyle\\sum_{i=1}^m \\alpha_i y_i\\), sans aucune contrainte"
   },
   {
    "key": "d",
    "text": "\\(\\min\\limits_{\\alpha} \\|w\\|_2^2\\), sous \\(\\alpha_i=C/m\\) pour tout \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\max\\limits_{\\alpha} -\\dfrac12\\displaystyle\\sum_{i=1}^m\\sum_{j=1}^m \\alpha_i\\alpha_j y_i y_j\\langle x_i,x_j\\rangle + \\sum_{i=1}^m \\alpha_i\\), sous \\(0\\le\\alpha_i\\le C/m\\) et \\(\\sum_i y_i\\alpha_i=0\\)",
  "id": "svm-24",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "On considère deux exemples \\(x_1=(1,0)\\) avec \\(y_1=+1\\) et \\(x_2=(0,1)\\) avec \\(y_2=-1\\), un noyau linéaire, et des variables duales \\(\\alpha_1=\\alpha_2=0.5\\). Calculer la valeur de l'objectif dual \\(-\\dfrac12\\sum_{i=1}^2\\sum_{j=1}^2 \\alpha_i\\alpha_j y_i y_j\\langle x_i,x_j\\rangle + \\sum_{i=1}^2 \\alpha_i\\).",
  "ans": 0.75,
  "ansText": "\\(\\langle x_1,x_1\\rangle=1\\), \\(\\langle x_2,x_2\\rangle=1\\), \\(\\langle x_1,x_2\\rangle=0\\); terme quadratique \\(=\\dfrac12(0.25+0.25)=0.25\\); objectif \\(=-0.25+(0.5+0.5)=0.75\\)",
  "tol": 0.01,
  "id": "svm-25",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Soit deux exemples \\(x_1=(2,1)\\) avec \\(y_1=1\\) et \\(x_2=(1,3)\\) avec \\(y_2=-1\\). En notant \\(G\\) la matrice de Gram du problème dual, avec \\(G_{ij}=y_iy_j\\langle x_i,x_j\\rangle\\), quelle est la valeur de \\(G_{12}\\) ?",
  "ans": -5.0,
  "ansText": "\\(\\langle x_1,x_2\\rangle=2\\times1+1\\times3=5\\), donc \\(G_{12}=y_1y_2\\times5=(1)(-1)\\times5=-5\\)",
  "tol": 0.01,
  "id": "svm-26",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "La matrice \\(G\\) définie par \\(G_{ij}=y_iy_j\\langle x_i,x_j\\rangle\\), appelée matrice de Gram, intervient dans l'écriture de l'objectif dual sous forme quadratique \\(-\\frac12\\alpha^TG\\alpha+\\sum_i\\alpha_i\\). Quelle propriété possède cette matrice ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est symétrique et semi-définie positive"
   },
   {
    "key": "b",
    "text": "Elle est antisymétrique"
   },
   {
    "key": "c",
    "text": "Elle est toujours inversible et de déterminant strictement négatif"
   },
   {
    "key": "d",
    "text": "Elle est diagonale"
   }
  ],
  "ans": "a",
  "ansText": "Elle est symétrique et semi-définie positive",
  "id": "svm-27",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Le texte précise que le problème dual du SVM est toujours strictement concave par rapport aux variables duales. Quelle conséquence directe cela a-t-il ?",
  "opts": [
   {
    "key": "a",
    "text": "Il peut exister une infinité de solutions optimales"
   },
   {
    "key": "b",
    "text": "Il existe une unique solution au problème dual"
   },
   {
    "key": "c",
    "text": "Le problème primal devient non convexe"
   },
   {
    "key": "d",
    "text": "La matrice de Gram devient nécessairement l'identité"
   }
  ],
  "ans": "b",
  "ansText": "Il existe une unique solution au problème dual",
  "id": "svm-28",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Que signifie « l'astuce du noyau » (kernel trick) en SVM ?",
  "opts": [
   {
    "key": "a",
    "text": "Il faut toujours calculer explicitement la transformation \\(\\Phi\\) associée au noyau"
   },
   {
    "key": "b",
    "text": "Il suffit de connaître la fonction noyau \\(K\\), sans jamais avoir besoin de calculer explicitement la transformation \\(\\Phi\\)"
   },
   {
    "key": "c",
    "text": "Il permet de remplacer tout produit scalaire par une somme de carrés"
   },
   {
    "key": "d",
    "text": "Il transforme systématiquement un problème de classification en un problème de régression"
   }
  ],
  "ans": "b",
  "ansText": "Il suffit de connaître la fonction noyau \\(K\\), sans jamais avoir besoin de calculer explicitement la transformation \\(\\Phi\\)",
  "id": "svm-29",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de Mercer, sous quelle condition une fonction \\(K\\) continue et symétrique peut-elle s'écrire comme un produit scalaire \\(\\langle \\Phi(x),\\Phi(x')\\rangle\\) dans un espace de caractéristiques (éventuellement de dimension infinie) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(K\\) doit être une fonction symétrique et semi-définie positive"
   },
   {
    "key": "b",
    "text": "\\(K\\) doit être une fonction linéaire de \\(x\\) et \\(x'\\)"
   },
   {
    "key": "c",
    "text": "\\(K\\) doit être bornée par 1 en toute paire de points"
   },
   {
    "key": "d",
    "text": "\\(K\\) doit être strictement positive en tout point"
   }
  ],
  "ans": "a",
  "ansText": "\\(K\\) doit être une fonction symétrique et semi-définie positive",
  "id": "svm-30",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quelles sont les deux propriétés que doit vérifier une fonction noyau \\(K\\) (et sa matrice associée) pour être une fonction noyau valide au sens de Mercer ?",
  "opts": [
   {
    "key": "a",
    "text": "Être antisymétrique et inversible"
   },
   {
    "key": "b",
    "text": "Être symétrique, i.e. \\(K(x,x')=K(x',x)\\), et semi-définie positive"
   },
   {
    "key": "c",
    "text": "Être diagonale et de trace nulle"
   },
   {
    "key": "d",
    "text": "Être bornée et strictement croissante"
   }
  ],
  "ans": "b",
  "ansText": "Être symétrique, i.e. \\(K(x,x')=K(x',x)\\), et semi-définie positive",
  "id": "svm-31",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Calculer le noyau linéaire \\(K(x,z)=\\langle x,z\\rangle\\) pour \\(x=(1,2,3)\\) et \\(z=(4,0,-1)\\).",
  "ans": 1.0,
  "ansText": "\\(1\\times4+2\\times0+3\\times(-1)=4-3=1\\)",
  "tol": 0.01,
  "id": "svm-32",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Calculer le noyau polynomial \\(K(x,z)=(\\langle x,z\\rangle+c)^p\\) pour \\(x=(1,2)\\), \\(z=(3,1)\\), \\(c=1\\) et \\(p=2\\).",
  "ans": 36.0,
  "ansText": "\\(\\langle x,z\\rangle=1\\times3+2\\times1=5\\), \\((5+1)^2=6^2=36\\)",
  "tol": 0.01,
  "id": "svm-33",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Calculer le noyau polynomial \\(K(x,z)=(\\langle x,z\\rangle+c)^p\\) pour \\(x=(2,0)\\), \\(z=(1,1)\\), \\(c=0\\) et \\(p=3\\).",
  "ans": 8.0,
  "ansText": "\\(\\langle x,z\\rangle=2\\times1+0\\times1=2\\), \\(2^3=8\\)",
  "tol": 0.01,
  "id": "svm-34",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Calculer le noyau gaussien \\(K(x,z)=\\exp\\!\\left(-\\dfrac{\\|x-z\\|_2^2}{2\\sigma^2}\\right)\\) pour \\(x=(0,0)\\), \\(z=(1,1)\\) et \\(\\sigma=1\\) (arrondi à \\(10^{-3}\\) près).",
  "ans": 0.368,
  "ansText": "\\(\\|x-z\\|_2^2=1+1=2\\), exposant \\(=-2/2=-1\\), \\(K=e^{-1}\\approx0.368\\)",
  "tol": 0.005,
  "id": "svm-35",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "Calculer le noyau gaussien \\(K(x,z)=\\exp\\!\\left(-\\dfrac{\\|x-z\\|_2^2}{2\\sigma^2}\\right)\\) pour \\(x=(1,2)\\), \\(z=(4,6)\\) et \\(\\sigma=5\\) (arrondi à \\(10^{-3}\\) près).",
  "ans": 0.607,
  "ansText": "\\(\\|x-z\\|_2^2=(-3)^2+(-4)^2=25\\), exposant \\(=-25/50=-0.5\\), \\(K=e^{-0.5}\\approx0.607\\)",
  "tol": 0.005,
  "id": "svm-36",
  "cat": "svm"
 },
 {
  "type": "num",
  "q": "En considérant un noyau polynomial de degré \\(p=2\\) avec \\(c=0\\) sur des données de dimension \\(d=3\\), quelle est la dimension de l'espace des caractéristiques \\(\\Phi(x)\\) associé (c'est-à-dire le nombre de monômes de degré 2 en 3 variables) ?",
  "ans": 6.0,
  "ansText": "Les monômes \\(x_1^2,x_2^2,x_3^2,\\sqrt2 x_1x_2,\\sqrt2 x_1x_3,\\sqrt2 x_2x_3\\) donnent une dimension de 6",
  "tol": 0.0,
  "id": "svm-37",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Dans le noyau gaussien \\(K(x,x')=\\exp\\!\\left(-\\dfrac{\\|x-x'\\|_2^2}{2\\sigma^2}\\right)\\), quel est l'effet d'une augmentation du hyperparamètre \\(\\sigma\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "On donne moins d'importance à la similarité entre exemples proches ; le rôle de chaque exemple devient plus uniforme"
   },
   {
    "key": "b",
    "text": "Le noyau devient strictement équivalent à un noyau linéaire"
   },
   {
    "key": "c",
    "text": "La matrice du noyau devient antisymétrique"
   },
   {
    "key": "d",
    "text": "Le SVM devient nécessairement un SVM à marge dure"
   }
  ],
  "ans": "a",
  "ansText": "On donne moins d'importance à la similarité entre exemples proches ; le rôle de chaque exemple devient plus uniforme",
  "id": "svm-38",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "D'après les conditions de complémentarité, si \\(\\alpha_i=0\\) pour un exemple \\(x_i\\), que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "Le point \\(x_i\\) est nécessairement mal classé"
   },
   {
    "key": "b",
    "text": "Le point \\(x_i\\) est correctement classé et situé strictement en dehors de la marge, i.e. \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\)"
   },
   {
    "key": "c",
    "text": "Le point \\(x_i\\) est nécessairement un vecteur de support"
   },
   {
    "key": "d",
    "text": "La variable d'écart \\(\\xi_i\\) associée est strictement positive"
   }
  ],
  "ans": "b",
  "ansText": "Le point \\(x_i\\) est correctement classé et situé strictement en dehors de la marge, i.e. \\(y_i(\\langle w,x_i\\rangle+b)\\ge 1\\)",
  "id": "svm-39",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "D'après les conditions de complémentarité, si \\(\\alpha_i = C/m\\) pour un exemple \\(x_i\\), que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "Le point \\(x_i\\) est situé strictement à l'extérieur de la marge"
   },
   {
    "key": "b",
    "text": "Le point \\(x_i\\) est mal classé ou situé strictement à l'intérieur de la marge (\\(\\xi_i\\ge0\\))"
   },
   {
    "key": "c",
    "text": "Le point \\(x_i\\) ne contribue jamais à la définition de l'hyperplan"
   },
   {
    "key": "d",
    "text": "Le multiplicateur \\(\\beta_i\\) vaut nécessairement \\(C/m\\)"
   }
  ],
  "ans": "b",
  "ansText": "Le point \\(x_i\\) est mal classé ou situé strictement à l'intérieur de la marge (\\(\\xi_i\\ge0\\))",
  "id": "svm-40",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "D'après les conditions de complémentarité, si \\(0 < \\alpha_i < C/m\\) pour un exemple \\(x_i\\), que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\xi_i=0\\) et le point est situé exactement sur l'hyperplan de marge, i.e. \\(y_i(\\langle w,x_i\\rangle+b)=1\\)"
   },
   {
    "key": "b",
    "text": "Le point \\(x_i\\) est nécessairement mal classé"
   },
   {
    "key": "c",
    "text": "La variable d'écart vérifie \\(\\xi_i > 1\\)"
   },
   {
    "key": "d",
    "text": "Le point \\(x_i\\) n'a aucune influence sur la valeur de \\(w\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\xi_i=0\\) et le point est situé exactement sur l'hyperplan de marge, i.e. \\(y_i(\\langle w,x_i\\rangle+b)=1\\)",
  "id": "svm-41",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "En combinant les conditions de complémentarité avec la relation \\(w=\\sum_{i=1}^m \\alpha_i y_i x_i\\), quels points contribuent effectivement à la définition de l'hyperplan séparateur ?",
  "opts": [
   {
    "key": "a",
    "text": "Tous les points de l'échantillon, sans exception"
   },
   {
    "key": "b",
    "text": "Uniquement les points ayant \\(\\alpha_i>0\\) (situés sur la marge ou la violant), c'est-à-dire les vecteurs de support"
   },
   {
    "key": "c",
    "text": "Uniquement les points correctement classés et situés en dehors de la marge"
   },
   {
    "key": "d",
    "text": "Uniquement le point le plus proche de l'origine"
   }
  ],
  "ans": "b",
  "ansText": "Uniquement les points ayant \\(\\alpha_i>0\\) (situés sur la marge ou la violant), c'est-à-dire les vecteurs de support",
  "id": "svm-42",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Avec un SVM à noyau, quelle est l'expression de l'hypothèse permettant de prédire l'étiquette d'un nouvel exemple \\(x'\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(h(x')=\\text{sign}(\\langle w,x'\\rangle+b)\\) uniquement, sans jamais utiliser le noyau"
   },
   {
    "key": "b",
    "text": "\\(h(x')=\\text{sign}\\!\\left(\\displaystyle\\sum_{i=1}^m \\alpha_i y_i K(x',x_i)\\right)\\)"
   },
   {
    "key": "c",
    "text": "\\(h(x')=\\text{sign}\\!\\left(\\displaystyle\\sum_{i=1}^m \\xi_i\\right)\\)"
   },
   {
    "key": "d",
    "text": "\\(h(x')=\\text{sign}(C-m)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(h(x')=\\text{sign}\\!\\left(\\displaystyle\\sum_{i=1}^m \\alpha_i y_i K(x',x_i)\\right)\\)",
  "id": "svm-43",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "Quelle est la conséquence pratique de l'utilisation d'un noyau lors de la phase de prédiction, par rapport au cas linéaire simple où \\(w\\) est calculé explicitement ?",
  "opts": [
   {
    "key": "a",
    "text": "Il faut calculer la similarité \\(K(x',x_i)\\) entre le nouvel exemple et les exemples d'entraînement (en pratique, les vecteurs de support)"
   },
   {
    "key": "b",
    "text": "Il n'est plus nécessaire de connaître les étiquettes \\(y_i\\) des exemples d'entraînement"
   },
   {
    "key": "c",
    "text": "La prédiction devient indépendante des variables duales \\(\\alpha_i\\)"
   },
   {
    "key": "d",
    "text": "Le calcul devient systématiquement plus rapide qu'avec un noyau linéaire"
   }
  ],
  "ans": "a",
  "ansText": "Il faut calculer la similarité \\(K(x',x_i)\\) entre le nouvel exemple et les exemples d'entraînement (en pratique, les vecteurs de support)",
  "id": "svm-44",
  "cat": "svm"
 },
 {
  "type": "qcm",
  "q": "En régression linéaire, quel type de variable cherche-t-on à prédire ?",
  "opts": [
   {
    "key": "a",
    "text": "Une variable continue (une valeur réelle)"
   },
   {
    "key": "b",
    "text": "Une étiquette de classe parmi un ensemble fini"
   },
   {
    "key": "c",
    "text": "Un rang ou un classement entre les exemples"
   },
   {
    "key": "d",
    "text": "Un ensemble de règles logiques"
   }
  ],
  "ans": "a",
  "ansText": "Une variable continue (une valeur réelle)",
  "id": "regression-methods-01",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme de l'hypothèse \\(h(\\theta, x)\\) utilisée en régression linéaire (à plusieurs variables) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(h(\\theta,x)=\\theta_0+\\theta_1x_1+\\theta_2x_2+\\dots+\\theta_dx_d\\)"
   },
   {
    "key": "b",
    "text": "\\(h(\\theta,x)=\\theta_0 \\cdot \\theta_1 x_1 \\cdots \\theta_d x_d\\)"
   },
   {
    "key": "c",
    "text": "\\(h(\\theta,x)=\\dfrac{1}{1+\\exp(-\\theta^Tx)}\\)"
   },
   {
    "key": "d",
    "text": "\\(h(\\theta,x)=\\max(\\theta_0,\\theta_1x_1,\\dots,\\theta_dx_d)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(h(\\theta,x)=\\theta_0+\\theta_1x_1+\\theta_2x_2+\\dots+\\theta_dx_d\\)",
  "id": "regression-methods-02",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Dans le modèle probabiliste \\(Y=\\theta X+\\varepsilon\\) utilisé pour justifier la régression linéaire, que représente \\(\\varepsilon\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le terme d'erreur (bruit) du modèle"
   },
   {
    "key": "b",
    "text": "Le taux d'apprentissage utilisé lors de l'optimisation"
   },
   {
    "key": "c",
    "text": "Le terme de régularisation appliqué aux paramètres"
   },
   {
    "key": "d",
    "text": "Le nombre d'exemples de l'échantillon d'apprentissage"
   }
  ],
  "ans": "a",
  "ansText": "Le terme d'erreur (bruit) du modèle",
  "id": "regression-methods-03",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle quantité minimise-t-on typiquement pour apprendre les paramètres \\(\\theta\\) d'un modèle de régression linéaire ?",
  "opts": [
   {
    "key": "a",
    "text": "L'erreur quadratique, \\(\\sum_{i=1}^{m} (y_i-h(\\theta,x_i))^2\\) (méthode des moindres carrés)"
   },
   {
    "key": "b",
    "text": "La perte logistique (log-vraisemblance négative)"
   },
   {
    "key": "c",
    "text": "La marge géométrique, comme pour un séparateur à vaste marge (SVM)"
   },
   {
    "key": "d",
    "text": "Le nombre d'erreurs de classification"
   }
  ],
  "ans": "a",
  "ansText": "L'erreur quadratique, \\(\\sum_{i=1}^{m} (y_i-h(\\theta,x_i))^2\\) (méthode des moindres carrés)",
  "id": "regression-methods-04",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle est la solution analytique (forme close), obtenue via les équations normales, du problème des moindres carrés \\(\\min_{\\theta} \\|y-h(\\theta,X)\\|_2^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\theta = (X^TX)^{-1}X^Ty\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\theta = X^Ty\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\theta = (XX^T)^{-1}y\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\theta = X^{-1}y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\theta = (X^TX)^{-1}X^Ty\\)",
  "id": "regression-methods-05",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est l'objectif d'ajouter un terme de régularisation \\(\\lambda\\|\\theta\\|^2\\) à la fonction de perte d'un modèle de régression ?",
  "opts": [
   {
    "key": "a",
    "text": "Éviter le surapprentissage en contrôlant l'amplitude des paramètres appris"
   },
   {
    "key": "b",
    "text": "Accélérer le calcul de la solution analytique du problème"
   },
   {
    "key": "c",
    "text": "Transformer le problème de régression en un problème de classification"
   },
   {
    "key": "d",
    "text": "Garantir que toutes les prédictions du modèle restent positives"
   }
  ],
  "ans": "a",
  "ansText": "Éviter le surapprentissage en contrôlant l'amplitude des paramètres appris",
  "id": "regression-methods-06",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle norme de régularisation est utilisée dans la régression Lasso, et quel est son effet caractéristique ?",
  "opts": [
   {
    "key": "a",
    "text": "La norme \\(\\ell_1\\), qui favorise la parcimonie (de nombreux coefficients nuls)"
   },
   {
    "key": "b",
    "text": "La norme \\(\\ell_2\\), qui favorise la parcimonie (de nombreux coefficients nuls)"
   },
   {
    "key": "c",
    "text": "La norme \\(\\ell_1\\), qui force tous les coefficients à rester inférieurs à 1"
   },
   {
    "key": "d",
    "text": "La norme \\(\\ell_\\infty\\), qui force tous les coefficients à être égaux"
   }
  ],
  "ans": "a",
  "ansText": "La norme \\(\\ell_1\\), qui favorise la parcimonie (de nombreux coefficients nuls)",
  "id": "regression-methods-07",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est un inconvénient notable de la régularisation \\(\\ell_1\\) (Lasso) par rapport à la régularisation \\(\\ell_2\\) (Ridge) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle n'est pas différentiable en tout point (notamment en 0)"
   },
   {
    "key": "b",
    "text": "Elle ne peut jamais réduire le nombre de variables effectivement utilisées"
   },
   {
    "key": "c",
    "text": "Elle rend impossible tout calcul de solution, même approchée"
   },
   {
    "key": "d",
    "text": "Elle augmente systématiquement la variance sans jamais réduire le biais"
   }
  ],
  "ans": "a",
  "ansText": "Elle n'est pas différentiable en tout point (notamment en 0)",
  "id": "regression-methods-08",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "On dispose d'un échantillon \\((x_i,y_i)\\) : \\(x\\) prend les valeurs \\(1,2,3,4\\) et \\(y\\) les valeurs correspondantes \\(2,3,5,4\\). On ajuste par moindres carrés une régression linéaire simple \\(h(\\theta,x)=\\theta_0+\\theta_1x\\). Quelle est la valeur de la pente \\(\\theta_1\\) ?",
  "ans": 0.8,
  "ansText": "\\(\\theta_1=0.8\\)",
  "tol": 0.02,
  "id": "regression-methods-09",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Avec le même échantillon (\\(x=1,2,3,4\\) et \\(y=2,3,5,4\\)), quelle est la valeur de l'ordonnée à l'origine \\(\\theta_0\\) du modèle \\(h(\\theta,x)=\\theta_0+\\theta_1x\\) obtenu par moindres carrés ?",
  "ans": 1.5,
  "ansText": "\\(\\theta_0=1.5\\)",
  "tol": 0.02,
  "id": "regression-methods-10",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "En utilisant le modèle ajusté \\(h(\\theta,x)=1.5+0.8x\\) sur cet échantillon, quelle est la prédiction du modèle pour une nouvelle valeur \\(x=6\\) ?",
  "ans": 6.3,
  "ansText": "\\(h(6)=1.5+0.8\\times 6=6.3\\)",
  "tol": 0.05,
  "id": "regression-methods-11",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Toujours avec le modèle \\(h(\\theta,x)=1.5+0.8x\\) sur l'échantillon \\(x=1,2,3,4\\), \\(y=2,3,5,4\\), quelle est l'erreur quadratique moyenne (EQM) du modèle sur cet échantillon d'apprentissage ?",
  "ans": 0.45,
  "ansText": "EQM \\(=1.80/4=0.45\\)",
  "tol": 0.02,
  "id": "regression-methods-12",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est l'objectif de la régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "Estimer la probabilité qu'un exemple appartienne à une classe donnée (tâche de classification)"
   },
   {
    "key": "b",
    "text": "Prédire une valeur réelle continue, comme en régression linéaire"
   },
   {
    "key": "c",
    "text": "Regrouper les exemples en groupes homogènes sans étiquettes"
   },
   {
    "key": "d",
    "text": "Réduire la dimension du vecteur de caractéristiques d'entrée"
   }
  ],
  "ans": "a",
  "ansText": "Estimer la probabilité qu'un exemple appartienne à une classe donnée (tâche de classification)",
  "id": "regression-methods-13",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Que calcule la fonction logistique (sigmoïde) \\(\\dfrac{1}{1+\\exp(-h(x))}\\) dans le cadre de la régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "Une transformation de la sortie linéaire \\(h(x)\\) en une valeur comprise entre 0 et 1, interprétée comme une probabilité"
   },
   {
    "key": "b",
    "text": "La distance euclidienne entre deux exemples de l'échantillon"
   },
   {
    "key": "c",
    "text": "Le gradient de la fonction de perte par rapport aux paramètres"
   },
   {
    "key": "d",
    "text": "La marge géométrique du classifieur, comme pour un SVM"
   }
  ],
  "ans": "a",
  "ansText": "Une transformation de la sortie linéaire \\(h(x)\\) en une valeur comprise entre 0 et 1, interprétée comme une probabilité",
  "id": "regression-methods-14",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Que modélise-t-on de façon linéaire dans la régression logistique binaire ?",
  "opts": [
   {
    "key": "a",
    "text": "Le logarithme du rapport des chances (log-odds), \\(\\ln\\!\\left(\\dfrac{P(y=1\\mid x)}{P(y=0\\mid x)}\\right)\\)"
   },
   {
    "key": "b",
    "text": "La probabilité \\(P(y=1\\mid x)\\) elle-même, directement"
   },
   {
    "key": "c",
    "text": "La variance de la variable prédite"
   },
   {
    "key": "d",
    "text": "Le nombre d'exemples mal classés par le modèle"
   }
  ],
  "ans": "a",
  "ansText": "Le logarithme du rapport des chances (log-odds), \\(\\ln\\!\\left(\\dfrac{P(y=1\\mid x)}{P(y=0\\mid x)}\\right)\\)",
  "id": "regression-methods-15",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Selon quelle règle un exemple \\(x\\) est-il (habituellement) classé dans la classe positive en régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "Si \\(P(y=1\\mid x) > 0.5\\), c'est-à-dire si \\(h(w,b,x) > 0\\)"
   },
   {
    "key": "b",
    "text": "Si \\(P(y=1\\mid x) < 0.5\\)"
   },
   {
    "key": "c",
    "text": "Si la sortie linéaire \\(h(w,b,x)\\) est un nombre entier"
   },
   {
    "key": "d",
    "text": "Si la norme de \\(x\\) est strictement supérieure à 1"
   }
  ],
  "ans": "a",
  "ansText": "Si \\(P(y=1\\mid x) > 0.5\\), c'est-à-dire si \\(h(w,b,x) > 0\\)",
  "id": "regression-methods-16",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle fonction de perte cherche-t-on à minimiser pour estimer les paramètres \\((w,b)\\) d'une régression logistique, à partir du principe du maximum de vraisemblance ?",
  "opts": [
   {
    "key": "a",
    "text": "La log-vraisemblance négative (perte logistique, ou entropie croisée)"
   },
   {
    "key": "b",
    "text": "L'erreur quadratique moyenne (EQM)"
   },
   {
    "key": "c",
    "text": "La distance de Hamming entre les prédictions et les étiquettes"
   },
   {
    "key": "d",
    "text": "La norme \\(\\ell_1\\) des données d'entrée"
   }
  ],
  "ans": "a",
  "ansText": "La log-vraisemblance négative (perte logistique, ou entropie croisée)",
  "id": "regression-methods-17",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Contrairement à la régression linéaire, la régression logistique...",
  "opts": [
   {
    "key": "a",
    "text": "Ne possède pas de solution analytique ; on utilise un algorithme itératif (descente de gradient, Newton-Raphson) car le problème reste convexe"
   },
   {
    "key": "b",
    "text": "Possède exactement la même solution analytique, \\(\\hat\\theta=(X^TX)^{-1}X^Ty\\)"
   },
   {
    "key": "c",
    "text": "N'admet aucune méthode de résolution, car le problème n'est pas convexe"
   },
   {
    "key": "d",
    "text": "Ne peut être résolue que par recherche exhaustive sur l'ensemble des paramètres possibles"
   }
  ],
  "ans": "a",
  "ansText": "Ne possède pas de solution analytique ; on utilise un algorithme itératif (descente de gradient, Newton-Raphson) car le problème reste convexe",
  "id": "regression-methods-18",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "On considère la fonction logistique \\(\\sigma(z)=\\dfrac{1}{1+\\exp(-z)}\\). Quelle est la valeur de \\(\\sigma(2)\\) (arrondie à \\(10^{-2}\\) près) ?",
  "ans": 0.88,
  "ansText": "\\(\\sigma(2)\\approx 0.88\\)",
  "tol": 0.01,
  "id": "regression-methods-19",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Un modèle de régression logistique a pour paramètres \\(w=(2,-1)\\) et \\(b=0.5\\). Pour un exemple \\(x=(1,3)\\), on a \\(h(w,b,x)=b+\\langle w,x\\rangle\\). Quelle est la probabilité prédite \\(P(y=1\\mid x)=\\dfrac{1}{1+\\exp(-h(w,b,x))}\\) (arrondie à \\(10^{-2}\\) près) ?",
  "ans": 0.38,
  "ansText": "\\(h(w,b,x)=0.5+2-3=-0.5\\), donc \\(P(y=1\\mid x)=\\sigma(-0.5)\\approx 0.38\\)",
  "tol": 0.01,
  "id": "regression-methods-20",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Dans l'approche par classe de référence de la régression logistique multinomiale (avec \\(q\\) classes), combien de modèles de régression logistique binaire doit-on apprendre ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(q-1\\)"
   },
   {
    "key": "b",
    "text": "\\(q\\)"
   },
   {
    "key": "c",
    "text": "\\(q+1\\)"
   },
   {
    "key": "d",
    "text": "\\(q(q-1)/2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(q-1\\)",
  "id": "regression-methods-21",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "La fonction softmax, \\(P(y=k\\mid x)=\\dfrac{\\exp(\\langle w^{(k)},x\\rangle)}{\\sum_{l=1}^{q}\\exp(\\langle w^{(l)},x\\rangle)}\\), peut être vue comme...",
  "opts": [
   {
    "key": "a",
    "text": "Une généralisation de la fonction logistique au cas multi-classes, indépendante du choix d'une classe de référence"
   },
   {
    "key": "b",
    "text": "Une simplification de la fonction logistique, valable uniquement dans le cas de deux classes"
   },
   {
    "key": "c",
    "text": "Une fonction de perte spécifique à la régression linéaire régularisée"
   },
   {
    "key": "d",
    "text": "Un algorithme d'optimisation de type descente de gradient"
   }
  ],
  "ans": "a",
  "ansText": "Une généralisation de la fonction logistique au cas multi-classes, indépendante du choix d'une classe de référence",
  "id": "regression-methods-22",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Combien de paramètres doit-on estimer dans une régression logistique multinomiale à \\(q\\) classes, avec un vecteur de caractéristiques de dimension \\(d\\) (approche par classe de référence, en comptant le biais) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((q-1)\\times(d+1)\\)"
   },
   {
    "key": "b",
    "text": "\\(q\\times d\\)"
   },
   {
    "key": "c",
    "text": "\\((q-1)\\times d\\)"
   },
   {
    "key": "d",
    "text": "\\(q\\times(d+1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((q-1)\\times(d+1)\\)",
  "id": "regression-methods-23",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "On considère un problème de classification à 3 classes. Les scores linéaires (avant softmax) pour un exemple \\(x\\) sont \\(z_1=1\\), \\(z_2=2\\), \\(z_3=0\\). Quelle est la probabilité softmax \\(P(y=2\\mid x)=\\dfrac{\\exp(z_2)}{\\exp(z_1)+\\exp(z_2)+\\exp(z_3)}\\) (arrondie à \\(10^{-2}\\) près) ?",
  "ans": 0.67,
  "ansText": "\\(P(y=2\\mid x)\\approx 0.67\\)",
  "tol": 0.02,
  "id": "regression-methods-24",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "On construit une régression logistique multinomiale (approche classe de référence) pour \\(q=5\\) classes, avec un vecteur de caractéristiques de dimension \\(d=4\\). Combien de paramètres au total doit-on estimer, sachant que chaque modèle binaire compte un biais et \\(d\\) coefficients ?",
  "ans": 20,
  "ansText": "\\((q-1)\\times(d+1)=4\\times 5=20\\)",
  "tol": 0.5,
  "id": "regression-methods-25",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "La régression à noyau (par exemple l'estimateur de Nadaraya-Watson) est une méthode...",
  "opts": [
   {
    "key": "a",
    "text": "Non paramétrique : elle ne suppose pas de forme fonctionnelle globale fixe (de type \\(h(\\theta,x)\\)) pour la relation entre \\(x\\) et \\(y\\)"
   },
   {
    "key": "b",
    "text": "Paramétrique : elle apprend un vecteur de paramètres \\(\\theta\\) de dimension fixe, comme la régression linéaire"
   },
   {
    "key": "c",
    "text": "Qui nécessite obligatoirement une transformation logistique de la sortie"
   },
   {
    "key": "d",
    "text": "Qui ne peut être utilisée que pour des tâches de classification binaire"
   }
  ],
  "ans": "a",
  "ansText": "Non paramétrique : elle ne suppose pas de forme fonctionnelle globale fixe (de type \\(h(\\theta,x)\\)) pour la relation entre \\(x\\) et \\(y\\)",
  "id": "regression-methods-26",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formule de l'estimateur de Nadaraya-Watson pour prédire \\(y\\) en un point \\(x\\), à partir d'un échantillon \\((x_i,y_i)_{i=1}^m\\), d'un noyau \\(K\\) et d'une largeur de bande \\(h\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat m(x) = \\dfrac{\\sum_{i=1}^m K\\left(\\frac{x-x_i}{h}\\right) y_i}{\\sum_{i=1}^m K\\left(\\frac{x-x_i}{h}\\right)}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat m(x) = \\sum_{i=1}^m K\\left(\\frac{x-x_i}{h}\\right) y_i\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat m(x) = \\dfrac{1}{m}\\sum_{i=1}^m y_i\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat m(x) = (X^TX)^{-1}X^Ty\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat m(x) = \\dfrac{\\sum_{i=1}^m K\\left(\\frac{x-x_i}{h}\\right) y_i}{\\sum_{i=1}^m K\\left(\\frac{x-x_i}{h}\\right)}\\)",
  "id": "regression-methods-27",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Dans l'estimateur de Nadaraya-Watson, à quoi sert la fonction noyau \\(K\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle attribue un poids à chaque observation \\(x_i\\), d'autant plus grand que \\(x_i\\) est proche du point \\(x\\) où l'on effectue la prédiction"
   },
   {
    "key": "b",
    "text": "Elle transforme la prédiction en probabilité, comme la fonction logistique"
   },
   {
    "key": "c",
    "text": "Elle sert à calculer la matrice hessienne de la fonction de perte"
   },
   {
    "key": "d",
    "text": "Elle sert uniquement à normaliser les variables d'entrée avant l'apprentissage"
   }
  ],
  "ans": "a",
  "ansText": "Elle attribue un poids à chaque observation \\(x_i\\), d'autant plus grand que \\(x_i\\) est proche du point \\(x\\) où l'on effectue la prédiction",
  "id": "regression-methods-28",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Que se passe-t-il, en régression à noyau, lorsque la largeur de bande \\(h\\) est choisie très petite ?",
  "opts": [
   {
    "key": "a",
    "text": "Le modèle devient très sensible aux observations proches, avec une variance élevée (risque de surapprentissage)"
   },
   {
    "key": "b",
    "text": "Le modèle devient équivalent à une régression linéaire globale"
   },
   {
    "key": "c",
    "text": "Toutes les observations reçoivent exactement le même poids, quelle que soit leur distance à \\(x\\)"
   },
   {
    "key": "d",
    "text": "La prédiction devient constante et égale à la moyenne globale de \\(y\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le modèle devient très sensible aux observations proches, avec une variance élevée (risque de surapprentissage)",
  "id": "regression-methods-29",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Que se passe-t-il, en régression à noyau, lorsque la largeur de bande \\(h\\) est choisie très grande (les observations reçoivent alors des poids proches les uns des autres) ?",
  "opts": [
   {
    "key": "a",
    "text": "L'estimation est fortement lissée et tend vers la moyenne globale de \\(y\\) (biais élevé)"
   },
   {
    "key": "b",
    "text": "L'estimation devient parfaitement précise en tout point de l'espace des \\(x\\)"
   },
   {
    "key": "c",
    "text": "L'estimateur devient équivalent à la médiane locale des observations voisines"
   },
   {
    "key": "d",
    "text": "Le modèle diverge et ne peut plus produire de prédiction"
   }
  ],
  "ans": "a",
  "ansText": "L'estimation est fortement lissée et tend vers la moyenne globale de \\(y\\) (biais élevé)",
  "id": "regression-methods-30",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Lequel des noyaux suivants correspond à un noyau gaussien standard (à une dimension) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(K(u)=\\exp(-u^2/2)\\)"
   },
   {
    "key": "b",
    "text": "\\(K(u)=|u|\\)"
   },
   {
    "key": "c",
    "text": "\\(K(u)=\\mathbb{1}_{[-1,1]}(u)\\) (noyau uniforme)"
   },
   {
    "key": "d",
    "text": "\\(K(u)=u^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(K(u)=\\exp(-u^2/2)\\)",
  "id": "regression-methods-31",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "On dispose de 3 observations : \\((x_1,y_1)=(1,10)\\), \\((x_2,y_2)=(2,20)\\), \\((x_3,y_3)=(4,30)\\). On utilise un noyau gaussien \\(K(u)=\\exp(-u^2/2)\\) avec une largeur de bande \\(h=1\\) pour prédire \\(y\\) au point \\(x_0=2\\) par l'estimateur de Nadaraya-Watson. Quelle est la valeur prédite \\(\\hat m(2)\\) (arrondie à \\(10^{-1}\\) près) ?",
  "ans": 17.3,
  "ansText": "\\(\\hat m(2)\\approx 17.3\\)",
  "tol": 0.2,
  "id": "regression-methods-32",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Avec les mêmes données (\\((1,10),(2,20),(4,30)\\)), le même noyau gaussien \\(K(u)=\\exp(-u^2/2)\\), une largeur de bande \\(h=1\\) et un point de prédiction \\(x_0=2\\), quel est le poids normalisé attribué à l'observation \\(x_2=2\\) dans la moyenne pondérée (arrondi à \\(10^{-2}\\) près) ?",
  "ans": 0.57,
  "ansText": "poids \\(\\approx 0.57\\)",
  "tol": 0.02,
  "id": "regression-methods-33",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Avec les mêmes 3 observations \\((1,10),(2,20),(4,30)\\), on utilise cette fois un noyau uniforme (fenêtre) : seules les observations telles que \\(|x_0-x_i|\\le h\\) reçoivent un poids (égal), les autres un poids nul. Pour \\(x_0=2\\) et \\(h=1.5\\), quelle est la prédiction \\(\\hat m(2)\\) ?",
  "ans": 15,
  "ansText": "Seules \\(x_1=1\\) et \\(x_2=2\\) sont dans la fenêtre \\([0.5,3.5]\\) : \\(\\hat m(2)=(10+20)/2=15\\)",
  "tol": 0.5,
  "id": "regression-methods-34",
  "cat": "regression-methods"
 },
 {
  "type": "num",
  "q": "Toujours avec les observations \\((1,10),(2,20),(4,30)\\) et un noyau uniforme (fenêtre), si l'on choisit une largeur de bande \\(h\\) suffisamment grande pour que les 3 observations tombent dans la fenêtre autour de \\(x_0=2\\), quelle est alors la prédiction \\(\\hat m(2)\\) ?",
  "ans": 20,
  "ansText": "\\(\\hat m(2)=(10+20+30)/3=20\\), la moyenne globale de \\(y\\)",
  "tol": 0.5,
  "id": "regression-methods-35",
  "cat": "regression-methods"
 },
 {
  "type": "qcm",
  "q": "Dans un arbre de décision \\(\\textbf{binaire}\\), chaque règle de décision appliquée à un nœud :",
  "opts": [
   {
    "key": "a",
    "text": "sépare les données du nœud en exactement deux groupes"
   },
   {
    "key": "b",
    "text": "sépare les données du nœud en un nombre de groupes égal au nombre de classes"
   },
   {
    "key": "c",
    "text": "répartit les données selon une loi gaussienne"
   },
   {
    "key": "d",
    "text": "fusionne systématiquement plusieurs feuilles en une seule"
   }
  ],
  "ans": "a",
  "ansText": "sépare les données du nœud en exactement deux groupes",
  "id": "decision-trees-01",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Si l'espace de sortie est \\(\\mathcal{Y} = \\{-1, +1\\}\\), on parle d'un arbre de :",
  "opts": [
   {
    "key": "a",
    "text": "arbre de régression"
   },
   {
    "key": "b",
    "text": "arbre de classification"
   },
   {
    "key": "c",
    "text": "arbre de clustering"
   },
   {
    "key": "d",
    "text": "arbre de régularisation"
   }
  ],
  "ans": "b",
  "ansText": "arbre de classification",
  "id": "decision-trees-02",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple classique du cours (séparer hommes et femmes à l'aide de l'âge et de la taille), la première règle utilisée est \\(\\text{Âge} \\le 25\\). Le nœud de gauche obtenu ne contient que des femmes. On dit que ce nœud est :",
  "opts": [
   {
    "key": "a",
    "text": "impur"
   },
   {
    "key": "b",
    "text": "pur"
   },
   {
    "key": "c",
    "text": "élagué"
   },
   {
    "key": "d",
    "text": "sur-appris"
   }
  ],
  "ans": "b",
  "ansText": "pur",
  "id": "decision-trees-03",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Pour un arbre de \\(\\textbf{régression}\\), quelle formule correspond au critère de variance d'un nœud \\(N\\), où \\(m_N\\) est le nombre d'exemples du nœud et \\(\\bar y\\) la moyenne des \\(y_i\\) dans ce nœud ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{1}{m_N}\\displaystyle\\sum_{i=1}^{m_N} (y_i - \\bar y)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\displaystyle\\sum_{i=1}^{m_N} (y_i - \\bar y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac{1}{m_N}\\displaystyle\\sum_{i=1}^{m_N} |y_i - \\bar y|\\)"
   },
   {
    "key": "d",
    "text": "\\(m_N \\displaystyle\\sum_{i=1}^{m_N} (y_i - \\bar y)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{1}{m_N}\\displaystyle\\sum_{i=1}^{m_N} (y_i - \\bar y)^2\\)",
  "id": "decision-trees-04",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "On souhaite prédire l'âge d'une personne à partir de sa taille à l'aide d'un arbre de régression. Le nœud racine contient les 7 âges suivants : \\(20, 32, 40, 28, 22, 40, 70\\). Calculez la variance de ce nœud (arrondie à 2 décimales), utilisée comme mesure de qualité du nœud.",
  "ans": 245.71,
  "ansText": "\\(\\bar y = 252/7 = 36\\), puis \\(Var_{root} = \\frac{1}{7}\\sum (y_i-36)^2 = \\frac{1720}{7} \\approx 245.71\\)",
  "tol": 0.1,
  "id": "decision-trees-05",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Toujours avec le jeu de données précédent (âges \\(20, 32, 40, 28, 22, 40, 70\\), variance à la racine \\(Var_{root}\\approx 245.71\\)), on teste un split sur la variable taille avec un seuil de 172. On obtient un nœud gauche de \\(|N_L|=4\\) exemples de variance \\(Var_{N_L}=342\\), et un nœud droit de \\(|N_R|=3\\) exemples de variance \\(Var_{N_R}=67.56\\). Calculez le gain \\(\\Gamma\\) associé à ce split (arrondi à 2 décimales).",
  "ans": 21.33,
  "ansText": "\\(\\Gamma = 245.71 - \\left(\\frac{4}{7}\\times 342 + \\frac{3}{7}\\times 67.56\\right) \\approx 245.71 - 224.38 \\approx 21.33\\)",
  "tol": 0.1,
  "id": "decision-trees-06",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple de l'arbre de régression ci-dessus, on compare trois seuils candidats sur la variable taille : \\(169\\) (gain \\(\\Gamma=10\\)), \\(170\\) (gain \\(\\Gamma=48\\)) et \\(172\\) (gain \\(\\Gamma\\approx 21.33\\)). Quel seuil doit être retenu pour effectuer le split ?",
  "opts": [
   {
    "key": "a",
    "text": "169"
   },
   {
    "key": "b",
    "text": "170"
   },
   {
    "key": "c",
    "text": "172"
   },
   {
    "key": "d",
    "text": "Les trois seuils donnent un gain identique"
   }
  ],
  "ans": "b",
  "ansText": "170",
  "id": "decision-trees-07",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "En classification binaire, l'impureté de Gini \\(G_N\\) d'un nœud \\(N\\) s'écrit, avec \\(p_1\\) la proportion d'exemples de la classe 1 dans \\(N\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(G_N = 2\\,p_1(1-p_1)\\)"
   },
   {
    "key": "b",
    "text": "\\(G_N = p_1^2 + (1-p_1)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(G_N = -p_1 \\log_2(p_1)\\)"
   },
   {
    "key": "d",
    "text": "\\(G_N = p_1(1-p_1)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(G_N = 2\\,p_1(1-p_1)\\)",
  "id": "decision-trees-08",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Que signifie une impureté de Gini égale à 0 pour un nœud ?",
  "opts": [
   {
    "key": "a",
    "text": "Le nœud contient autant d'exemples de chaque classe"
   },
   {
    "key": "b",
    "text": "Le nœud ne contient des exemples que d'une seule classe (il est pur)"
   },
   {
    "key": "c",
    "text": "Le nœud est vide, sans aucun exemple"
   },
   {
    "key": "d",
    "text": "Le nœud vient d'être élagué"
   }
  ],
  "ans": "b",
  "ansText": "Le nœud ne contient des exemples que d'une seule classe (il est pur)",
  "id": "decision-trees-09",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Dans l'exemple du cours, le nœud racine contient 4 femmes et 3 hommes (7 exemples). En notant \\(p_1\\) la proportion de femmes et en utilisant \\(G_N = 2\\,p_1(1-p_1)\\), calculez l'impureté de Gini du nœud racine (arrondie à 2 décimales).",
  "ans": 0.49,
  "ansText": "\\(p_1 = 4/7\\), donc \\(G_{root} = 2\\times\\frac{4}{7}\\times\\frac{3}{7} = \\frac{24}{49}\\approx 0.49\\)",
  "tol": 0.01,
  "id": "decision-trees-10",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Après application de la règle \\(\\text{Âge}\\le 25\\), le nœud de droite contient 2 femmes et 3 hommes (5 exemples). Calculez l'impureté de Gini de ce nœud.",
  "ans": 0.48,
  "ansText": "\\(p_1 = 2/5\\), donc \\(G = 2\\times\\frac{2}{5}\\times\\frac{3}{5} = \\frac{12}{25} = 0.48\\)",
  "tol": 0.01,
  "id": "decision-trees-11",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Un nœud contient 10 exemples répartis en 7 exemples de la classe A et 3 exemples de la classe B. Calculez son impureté de Gini.",
  "ans": 0.42,
  "ansText": "\\(p_A = 0.7\\), donc \\(G = 2\\times0.7\\times0.3 = 0.42\\)",
  "tol": 0.01,
  "id": "decision-trees-12",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "L'entropie \\(Ent_N\\) d'un nœud \\(N\\) à \\(L\\) classes, où \\(p_j\\) est la proportion d'exemples de la classe \\(j\\) dans \\(N\\), est définie par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(Ent_N = -\\displaystyle\\sum_{j=1}^{L} p_j \\log_2(p_j)\\)"
   },
   {
    "key": "b",
    "text": "\\(Ent_N = \\displaystyle\\sum_{j=1}^{L} p_j^2\\)"
   },
   {
    "key": "c",
    "text": "\\(Ent_N = \\displaystyle\\sum_{j=1}^{L} p_j(1-p_j)\\)"
   },
   {
    "key": "d",
    "text": "\\(Ent_N = -\\displaystyle\\sum_{j=1}^{L} \\log_2(p_j)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(Ent_N = -\\displaystyle\\sum_{j=1}^{L} p_j \\log_2(p_j)\\)",
  "id": "decision-trees-13",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Calculez l'entropie du nœud racine de l'exemple du cours (4 femmes, 3 hommes sur 7 exemples), en utilisant \\(Ent_N = -\\sum_j p_j\\log_2(p_j)\\) (arrondie à 4 décimales).",
  "ans": 0.9852,
  "ansText": "\\(Ent_{root} = -\\left(\\frac{4}{7}\\log_2\\frac{4}{7} + \\frac{3}{7}\\log_2\\frac{3}{7}\\right) \\approx 0.9852\\)",
  "tol": 0.01,
  "id": "decision-trees-14",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Un nœud contient 9 exemples : 6 de la classe A et 3 de la classe B. Calculez son entropie (arrondie à 4 décimales).",
  "ans": 0.9183,
  "ansText": "\\(p_A=2/3, p_B=1/3\\) donnent \\(Ent = -\\left(\\frac{2}{3}\\log_2\\frac{2}{3}+\\frac{1}{3}\\log_2\\frac{1}{3}\\right)\\approx 0.9183\\)",
  "tol": 0.01,
  "id": "decision-trees-15",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Le gain \\(\\Gamma\\) obtenu en séparant un nœud parent (mesure d'impureté \\(Q_{root}\\)) en deux nœuds fils \\(N_L\\) et \\(N_R\\) est défini par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\Gamma = Q_{root} - \\left(\\dfrac{|N_L|}{|N_L|+|N_R|}Q_{N_L} + \\dfrac{|N_R|}{|N_L|+|N_R|}Q_{N_R}\\right)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\Gamma = Q_{N_L} + Q_{N_R} - Q_{root}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\Gamma = Q_{root}\\times(Q_{N_L}+Q_{N_R})\\)"
   },
   {
    "key": "d",
    "text": "\\(\\Gamma = \\dfrac{Q_{root}}{Q_{N_L}+Q_{N_R}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\Gamma = Q_{root} - \\left(\\dfrac{|N_L|}{|N_L|+|N_R|}Q_{N_L} + \\dfrac{|N_R|}{|N_L|+|N_R|}Q_{N_R}\\right)\\)",
  "id": "decision-trees-16",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "À chaque étape de la construction d'un arbre de décision, quelle règle de split (variable et seuil) est retenue ?",
  "opts": [
   {
    "key": "a",
    "text": "Celle qui minimise le nombre de nœuds fils"
   },
   {
    "key": "b",
    "text": "Celle qui maximise le gain \\(\\Gamma\\)"
   },
   {
    "key": "c",
    "text": "Celle qui maximise la profondeur de l'arbre"
   },
   {
    "key": "d",
    "text": "Celle qui est choisie aléatoirement parmi toutes les variables"
   }
  ],
  "ans": "b",
  "ansText": "Celle qui maximise le gain \\(\\Gamma\\)",
  "id": "decision-trees-17",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "La fonction d'impureté de Gini est concave. Pourquoi cette propriété garantit-elle, via l'inégalité de Jensen, que le gain \\(\\Gamma\\) d'un split est toujours positif ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que la moyenne pondérée des impuretés des nœuds fils est toujours inférieure ou égale à l'impureté du nœud parent"
   },
   {
    "key": "b",
    "text": "Parce que la fonction de Gini est strictement croissante en \\(p_1\\)"
   },
   {
    "key": "c",
    "text": "Parce que la variance d'un échantillon est toujours positive"
   },
   {
    "key": "d",
    "text": "Parce que le nombre d'exemples dans les nœuds fils est toujours pair"
   }
  ],
  "ans": "a",
  "ansText": "Parce que la moyenne pondérée des impuretés des nœuds fils est toujours inférieure ou égale à l'impureté du nœud parent",
  "id": "decision-trees-18",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Reprenons le premier split de l'exemple (règle \\(\\text{Âge}\\le 25\\)) : \\(G_{root}\\approx 0.49\\), le nœud de gauche (2 exemples) est pur (\\(G=0\\)) et le nœud de droite (5 exemples) a une impureté \\(G=0.48\\). Calculez le gain de Gini \\(\\Gamma\\) de ce split (arrondi à 4 décimales).",
  "ans": 0.1469,
  "ansText": "\\(\\Gamma = \\frac{24}{49} - \\left(\\frac{2}{7}\\times0 + \\frac{5}{7}\\times0.48\\right) = \\frac{36}{245}\\approx 0.1469\\)",
  "tol": 0.01,
  "id": "decision-trees-19",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Un nœud parent contient 8 exemples (4 positifs, 4 négatifs), d'entropie \\(Ent_{parent}=1\\). Un split le sépare en un nœud gauche de 4 exemples (3 positifs, 1 négatif) et un nœud droit de 4 exemples (1 positif, 3 négatifs), chacun d'entropie \\(\\approx 0.8113\\). Calculez le gain d'information de ce split (arrondi à 4 décimales).",
  "ans": 0.1887,
  "ansText": "\\(\\Gamma = 1 - \\left(\\frac{4}{8}\\times0.8113+\\frac{4}{8}\\times0.8113\\right) = 1 - 0.8113 \\approx 0.1887\\)",
  "tol": 0.01,
  "id": "decision-trees-20",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Dans un arbre de \\(\\textbf{classification}\\), une fois qu'une feuille est atteinte, quelle est la règle de prédiction utilisée pour un nouvel exemple ?",
  "opts": [
   {
    "key": "a",
    "text": "La classe majoritaire parmi les exemples de la feuille"
   },
   {
    "key": "b",
    "text": "La moyenne des labels numériques de la feuille"
   },
   {
    "key": "c",
    "text": "La classe de l'exemple le plus proche du centre du nœud racine"
   },
   {
    "key": "d",
    "text": "Un tirage aléatoire parmi les classes présentes dans la feuille"
   }
  ],
  "ans": "a",
  "ansText": "La classe majoritaire parmi les exemples de la feuille",
  "id": "decision-trees-21",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Dans un arbre de \\(\\textbf{régression}\\), quelle est la prédiction associée à une feuille ?",
  "opts": [
   {
    "key": "a",
    "text": "La médiane des labels de la feuille"
   },
   {
    "key": "b",
    "text": "La moyenne des valeurs \\(y_i\\) des exemples de la feuille"
   },
   {
    "key": "c",
    "text": "La classe majoritaire de la feuille"
   },
   {
    "key": "d",
    "text": "La variance des labels de la feuille"
   }
  ],
  "ans": "b",
  "ansText": "La moyenne des valeurs \\(y_i\\) des exemples de la feuille",
  "id": "decision-trees-22",
  "cat": "decision-trees"
 },
 {
  "type": "num",
  "q": "Après un split sur la variable taille avec le seuil 172, le nœud (feuille) de gauche contient les 4 âges suivants : \\(22, 40, 70, 28\\). Quelle est la prédiction faite par un arbre de régression pour un nouvel individu qui tombe dans cette feuille ?",
  "ans": 40,
  "ansText": "La prédiction est la moyenne : \\((22+40+70+28)/4 = 160/4 = 40\\)",
  "tol": 0.01,
  "id": "decision-trees-23",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Construire un arbre jusqu'à obtenir des feuilles parfaitement pures est toujours possible en pratique, mais pose souvent un problème car :",
  "opts": [
   {
    "key": "a",
    "text": "cela réduit le nombre d'exemples du jeu d'entraînement"
   },
   {
    "key": "b",
    "text": "cela rend l'entropie négative"
   },
   {
    "key": "c",
    "text": "cela conduit souvent à du sur-apprentissage et une mauvaise généralisation"
   },
   {
    "key": "d",
    "text": "cela empêche de calculer l'impureté de Gini"
   }
  ],
  "ans": "c",
  "ansText": "cela conduit souvent à du sur-apprentissage et une mauvaise généralisation",
  "id": "decision-trees-24",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "Parmi les éléments suivants, lequel n'est PAS un paramètre habituellement utilisé pour l'élagage (pruning) d'un arbre de décision ?",
  "opts": [
   {
    "key": "a",
    "text": "La profondeur maximale de l'arbre"
   },
   {
    "key": "b",
    "text": "Le nombre minimal d'exemples requis dans un nœud pour autoriser un nouveau split"
   },
   {
    "key": "c",
    "text": "Le nombre de variables explicatives disponibles dans le jeu de données"
   },
   {
    "key": "d",
    "text": "Un seuil minimal sur le gain requis pour effectuer un nouveau split"
   }
  ],
  "ans": "c",
  "ansText": "Le nombre de variables explicatives disponibles dans le jeu de données",
  "id": "decision-trees-25",
  "cat": "decision-trees"
 },
 {
  "type": "qcm",
  "q": "D'après le modèle proposé par McCulloch et Pitts, puis formalisé par Rosenblatt sous le nom de <em>perceptron</em>, ce modèle prend en entrée un vecteur \\(x \\in \\mathbb{R}^d\\) et dépend d'un paramètre \\((w, b)\\) appartenant à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{R}^{d+1}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{R}^{d}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}^{2d}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{R}^{d-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathbb{R}^{d+1}\\)",
  "id": "neural-networks-01",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Historiquement, la sortie du perceptron \\(h(x)\\) est calculée comme le signe du produit scalaire entre \\(x\\) et \\(w\\), auquel on ajoute une constante \\(b\\). Quelle formule correspond à cette sortie ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(h(x) = \\operatorname{sign}\\big(\\langle w, x\\rangle + b\\big)\\)"
   },
   {
    "key": "b",
    "text": "\\(h(x) = \\langle w, x\\rangle \\times b\\)"
   },
   {
    "key": "c",
    "text": "\\(h(x) = \\operatorname{sign}(w) + b\\)"
   },
   {
    "key": "d",
    "text": "\\(h(x) = \\|w\\| \\times \\|x\\| + b\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(h(x) = \\operatorname{sign}\\big(\\langle w, x\\rangle + b\\big)\\)",
  "id": "neural-networks-02",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "La fonction de Heavyside, telle que définie dans ce chapitre et utilisée comme fonction d'activation du perceptron, renvoie :",
  "opts": [
   {
    "key": "a",
    "text": "\\(0\\) si \\(\\langle w,x\\rangle + b < 0\\), et \\(1\\) sinon"
   },
   {
    "key": "b",
    "text": "\\(1\\) si \\(\\langle w,x\\rangle + b < 0\\), et \\(0\\) sinon"
   },
   {
    "key": "c",
    "text": "\\(-1\\) si \\(\\langle w,x\\rangle + b < 0\\), et \\(1\\) sinon (comme la fonction signe)"
   },
   {
    "key": "d",
    "text": "toujours \\(0.5\\), quelle que soit la valeur de l'entrée"
   }
  ],
  "ans": "a",
  "ansText": "\\(0\\) si \\(\\langle w,x\\rangle + b < 0\\), et \\(1\\) sinon",
  "id": "neural-networks-03",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On considère un perceptron de paramètres \\(w = (1, 2, -1)\\) et \\(b = 0.5\\), muni de la fonction d'activation de Heavyside (qui vaut \\(0\\) si son argument est strictement négatif, et \\(1\\) sinon). Pour une entrée \\(x = (1, 0, 2)\\), calculez la sortie \\(h(x)\\).",
  "ans": 0,
  "ansText": "\\(\\langle w, x\\rangle + b = 1\\times1 + 2\\times0 + (-1)\\times2 + 0.5 = -2 + 0.5 = -0.5 < 0\\), donc \\(h(x) = 0\\)",
  "tol": 0.001,
  "id": "neural-networks-04",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On considère un perceptron de paramètres \\(w = (0.5, -1)\\) et \\(b = 0.2\\), muni de la fonction d'activation de Heavyside. Pour une entrée \\(x = (2, 1)\\), calculez la sortie \\(h(x)\\).",
  "ans": 1,
  "ansText": "\\(\\langle w, x\\rangle + b = 0.5\\times2 + (-1)\\times1 + 0.2 = 0 + 0.2 = 0.2 \\ge 0\\), donc \\(h(x) = 1\\)",
  "tol": 0.001,
  "id": "neural-networks-05",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "La fonction tangente hyperbolique, utilisée comme une version plus lisse de la fonction de Heavyside, est définie par \\(\\tanh(x) = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\) et prend ses valeurs dans :",
  "opts": [
   {
    "key": "a",
    "text": "\\([-1, 1]\\)"
   },
   {
    "key": "b",
    "text": "\\([0, 1]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}\\) tout entier"
   },
   {
    "key": "d",
    "text": "\\(\\{0, 1\\}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\([-1, 1]\\)",
  "id": "neural-networks-06",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "Calculez \\(\\tanh(1) = \\dfrac{e^1 - e^{-1}}{e^1 + e^{-1}}\\) (arrondi à 4 décimales).",
  "ans": 0.7616,
  "ansText": "\\(\\tanh(1) \\approx 0.7616\\)",
  "tol": 0.001,
  "id": "neural-networks-07",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Le chapitre précise que la fonction sigmoïde peut également être utilisée comme fonction d'activation lisse, à la place de la fonction de Heavyside. Elle est définie par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sigma(x) = \\dfrac{1}{1 + e^{-x}}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\sigma(x) = e^{-x}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\sigma(x) = \\max(0, x)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sigma(x) = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\sigma(x) = \\dfrac{1}{1 + e^{-x}}\\)",
  "id": "neural-networks-08",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "Calculez \\(\\sigma(2) = \\dfrac{1}{1 + e^{-2}}\\) (arrondi à 4 décimales).",
  "ans": 0.8808,
  "ansText": "\\(\\sigma(2) \\approx 0.8808\\)",
  "tol": 0.001,
  "id": "neural-networks-09",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Une autre fonction d'activation très utilisée dans les réseaux de neurones, appelée ReLU (<em>Rectified Linear Unit</em>), est définie par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\text{ReLU}(x) = \\max(0, x)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\text{ReLU}(x) = \\min(0, x)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\text{ReLU}(x) = |x|\\)"
   },
   {
    "key": "d",
    "text": "\\(\\text{ReLU}(x) = \\dfrac{1}{1 + e^{-x}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\text{ReLU}(x) = \\max(0, x)\\)",
  "id": "neural-networks-10",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Le chapitre indique que, comparée à la fonction de Heavyside, une fonction d'activation lisse comme tanh ou la sigmoïde présente un avantage important pour l'apprentissage par descente de gradient. Cet avantage est le suivant :",
  "opts": [
   {
    "key": "a",
    "text": "elle est dérivable presque partout, alors que la dérivée de la fonction de Heavyside est nulle presque partout"
   },
   {
    "key": "b",
    "text": "elle ne prend que des valeurs positives"
   },
   {
    "key": "c",
    "text": "elle ne dépend pas des paramètres \\(w\\) et \\(b\\) du neurone"
   },
   {
    "key": "d",
    "text": "elle prend uniquement des valeurs entières"
   }
  ],
  "ans": "a",
  "ansText": "elle est dérivable presque partout, alors que la dérivée de la fonction de Heavyside est nulle presque partout",
  "id": "neural-networks-11",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "L'algorithme de Hebb, l'un des premiers utilisés pour apprendre les paramètres \\(w\\) et \\(b\\) du perceptron, mais qui ne converge que pour des données linéairement séparables, met à jour les paramètres uniquement à partir :",
  "opts": [
   {
    "key": "a",
    "text": "des exemples mal classés \\(i \\in I\\), selon \\(w \\leftarrow w + \\alpha y_i x_i\\) et \\(b \\leftarrow b + \\alpha y_i\\)"
   },
   {
    "key": "b",
    "text": "de l'ensemble des exemples du jeu de données, à chaque itération"
   },
   {
    "key": "c",
    "text": "des exemples bien classés uniquement"
   },
   {
    "key": "d",
    "text": "de la moyenne de toutes les entrées \\(x_i\\) du jeu de données"
   }
  ],
  "ans": "a",
  "ansText": "des exemples mal classés \\(i \\in I\\), selon \\(w \\leftarrow w + \\alpha y_i x_i\\) et \\(b \\leftarrow b + \\alpha y_i\\)",
  "id": "neural-networks-12",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On applique la règle de Hebb à un exemple mal classé \\(x = (2, 1)\\), de label \\(y = 1\\), avec un taux d'apprentissage \\(\\alpha = 0.1\\). Le poids courant est \\(w = (1, -0.5)\\). D'après la mise à jour \\(w \\leftarrow w + \\alpha y x\\), quelle est la nouvelle valeur de la première coordonnée \\(w_1\\) ?",
  "ans": 1.2,
  "ansText": "\\(w_1 \\leftarrow 1 + 0.1 \\times 1 \\times 2 = 1 + 0.2 = 1.2\\)",
  "tol": 0.001,
  "id": "neural-networks-13",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "La règle de Widrow-Hoff (aussi appelée loi du delta) diffère de la règle de Hebb car, dans sa mise à jour \\(w \\leftarrow w + (y_i - h(x_i))x_i\\), elle prend en compte :",
  "opts": [
   {
    "key": "a",
    "text": "l'erreur observée entre le label \\(y_i\\) et la sortie courante \\(h(x_i)\\) du perceptron"
   },
   {
    "key": "b",
    "text": "uniquement le signe du label \\(y_i\\)"
   },
   {
    "key": "c",
    "text": "la norme du vecteur d'entrée \\(x_i\\)"
   },
   {
    "key": "d",
    "text": "le nombre total d'itérations déjà effectuées"
   }
  ],
  "ans": "a",
  "ansText": "l'erreur observée entre le label \\(y_i\\) et la sortie courante \\(h(x_i)\\) du perceptron",
  "id": "neural-networks-14",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On applique la règle de Widrow-Hoff avec la fonction d'activation tanh à un neurone de paramètres \\(w = (0.4, 0.2)\\) et \\(b = 0.1\\), pour une entrée \\(x = (1, -1)\\). On a \\(\\langle w, x\\rangle + b = 0.4\\times1 + 0.2\\times(-1) + 0.1 = 0.3\\). Calculez la sortie \\(h(x) = \\tanh(0.3)\\) (arrondie à 4 décimales).",
  "ans": 0.2913,
  "ansText": "\\(h(x) = \\tanh(0.3) \\approx 0.2913\\)",
  "tol": 0.001,
  "id": "neural-networks-15",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "Toujours pour ce même neurone (\\(h(x) \\approx 0.2913\\), \\(b = 0.1\\)), le label attendu est \\(y = 1\\) et le taux d'apprentissage est \\(\\alpha = 0.5\\). D'après la règle de Widrow-Hoff \\(b \\leftarrow b + \\alpha(y - h(x))\\), quelle est la nouvelle valeur de \\(b\\) (arrondie à 4 décimales) ?",
  "ans": 0.4543,
  "ansText": "\\(b \\leftarrow 0.1 + 0.5\\times(1 - 0.2913) = 0.1 + 0.5\\times0.7087 \\approx 0.4543\\)",
  "tol": 0.001,
  "id": "neural-networks-16",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Le perceptron simple (modèle linéaire) parvient à bien classer les jeux de données OR et AND, mais échoue sur le problème XOR. Cela s'explique par le fait que :",
  "opts": [
   {
    "key": "a",
    "text": "les données du problème XOR ne sont pas linéairement séparables"
   },
   {
    "key": "b",
    "text": "les données du problème XOR contiennent trop peu d'exemples"
   },
   {
    "key": "c",
    "text": "la fonction de Heavyside ne peut pas être appliquée au problème XOR"
   },
   {
    "key": "d",
    "text": "le problème XOR est un problème de régression et non de classification"
   }
  ],
  "ans": "a",
  "ansText": "les données du problème XOR ne sont pas linéairement séparables",
  "id": "neural-networks-17",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Pour résoudre le problème XOR, le chapitre propose d'apprendre une nouvelle représentation des données, obtenue en combinant plusieurs perceptrons (par exemple des perceptrons AND, OR et NOT), de sorte que le problème devienne linéairement séparable dans cette nouvelle représentation. Cette idée de composer plusieurs perceptrons en couches successives correspond à l'architecture :",
  "opts": [
   {
    "key": "a",
    "text": "du perceptron multi-couches (réseau de neurones)"
   },
   {
    "key": "b",
    "text": "d'un unique perceptron avec un biais plus grand"
   },
   {
    "key": "c",
    "text": "d'un arbre de décision"
   },
   {
    "key": "d",
    "text": "d'une analyse en composantes principales"
   }
  ],
  "ans": "a",
  "ansText": "du perceptron multi-couches (réseau de neurones)",
  "id": "neural-networks-18",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Dans un perceptron multi-couches, la première couche, les couches intermédiaires et la dernière couche sont respectivement appelées :",
  "opts": [
   {
    "key": "a",
    "text": "couche d'entrée, couches cachées, couche de sortie"
   },
   {
    "key": "b",
    "text": "couche cachée, couche d'entrée, couche de sortie"
   },
   {
    "key": "c",
    "text": "couche de sortie, couches cachées, couche d'entrée"
   },
   {
    "key": "d",
    "text": "couche d'entrée, couche de sortie, couches cachées"
   }
  ],
  "ans": "a",
  "ansText": "couche d'entrée, couches cachées, couche de sortie",
  "id": "neural-networks-19",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Dans la couche d'entrée (et dans chaque couche cachée) d'un réseau de neurones, on ajoute souvent un neurone supplémentaire dont l'entrée vaut toujours 1. Ce neurone sert à représenter :",
  "opts": [
   {
    "key": "a",
    "text": "le paramètre de biais \\(b\\) utilisé pour calculer la sortie de la couche suivante"
   },
   {
    "key": "b",
    "text": "une deuxième variable explicative du jeu de données"
   },
   {
    "key": "c",
    "text": "la sortie finale du réseau"
   },
   {
    "key": "d",
    "text": "la fonction d'activation utilisée par le réseau"
   }
  ],
  "ans": "a",
  "ansText": "le paramètre de biais \\(b\\) utilisé pour calculer la sortie de la couche suivante",
  "id": "neural-networks-20",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Un réseau de neurones est dit <em>fully connected</em> (entièrement connecté) lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "tous les neurones d'une couche sont connectés à tous les neurones de la couche suivante"
   },
   {
    "key": "b",
    "text": "chaque neurone n'est connecté qu'à un seul neurone de la couche suivante"
   },
   {
    "key": "c",
    "text": "le réseau ne comporte aucune couche cachée"
   },
   {
    "key": "d",
    "text": "tous les poids du réseau sont égaux à 0"
   }
  ],
  "ans": "a",
  "ansText": "tous les neurones d'une couche sont connectés à tous les neurones de la couche suivante",
  "id": "neural-networks-21",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Pour un problème de classification multi-classes avec \\(K\\) classes, la couche de sortie d'un réseau de neurones comporte généralement :",
  "opts": [
   {
    "key": "a",
    "text": "\\(K\\) neurones, un par classe"
   },
   {
    "key": "b",
    "text": "1 seul neurone, quelle que soit la valeur de \\(K\\)"
   },
   {
    "key": "c",
    "text": "\\(K - 1\\) neurones"
   },
   {
    "key": "d",
    "text": "autant de neurones que de couches cachées dans le réseau"
   }
  ],
  "ans": "a",
  "ansText": "\\(K\\) neurones, un par classe",
  "id": "neural-networks-22",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On considère un réseau de neurones dont la couche d'entrée est de dimension 3, avec deux couches cachées de tailles respectives 3 et 2, et une couche de sortie de dimension 1 (un biais étant associé à la couche d'entrée et à chaque couche cachée). En utilisant la formule du nombre de paramètres \\(\\sum_{k} d^{(k+1)}\\times\\big(d^{(k)}+1\\big)\\), calculez le nombre total de paramètres à apprendre dans ce réseau.",
  "ans": 23,
  "ansText": "\\((3+1)\\times3 + (3+1)\\times2 + (2+1)\\times1 = 12 + 8 + 3 = 23\\)",
  "tol": 0.1,
  "id": "neural-networks-23",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "Les paramètres d'un réseau de neurones sont appris par descente de gradient, à l'aide d'une procédure en deux étapes : le <em>Forward</em>, qui calcule la sortie (et la perte) du réseau à partir des données, et le <em>Backward</em>, qui met à jour les paramètres de toutes les couches, y compris les premières. Cette procédure de mise à jour, appelée rétropropagation (<em>back-propagation</em>), repose sur :",
  "opts": [
   {
    "key": "a",
    "text": "la règle de la chaîne (dérivée d'une composition de fonctions), qui permet de propager l'erreur de la sortie vers l'entrée"
   },
   {
    "key": "b",
    "text": "le calcul de la dérivée de la dernière couche uniquement"
   },
   {
    "key": "c",
    "text": "un tirage aléatoire des poids à chaque itération"
   },
   {
    "key": "d",
    "text": "la moyenne des sorties de toutes les couches du réseau"
   }
  ],
  "ans": "a",
  "ansText": "la règle de la chaîne (dérivée d'une composition de fonctions), qui permet de propager l'erreur de la sortie vers l'entrée",
  "id": "neural-networks-24",
  "cat": "neural-networks"
 },
 {
  "type": "num",
  "q": "On considère un réseau à deux couches cachées, comportant une seule unité par couche, pour une entrée scalaire \\(x = 2\\). La première couche calcule \\(y_1 = \\tanh(w_1 x)\\) avec \\(w_1 = 0.5\\) (soit \\(y_1 = \\tanh(1) \\approx 0.7616\\)). La deuxième couche calcule \\(y_2 = \\sigma(w_2 y_1)\\) avec \\(w_2 = 1\\) (soit \\(y_2 = \\sigma(0.7616) \\approx 0.6817\\)). Enfin, la couche de sortie ne comporte pas de fonction d'activation (cas d'une régression) et calcule \\(y_3 = w_3 y_2\\) avec \\(w_3 = 2\\). Calculez \\(y_3\\) (arrondi à 4 décimales).",
  "ans": 1.3634,
  "ansText": "\\(y_3 = 2 \\times 0.6817 \\approx 1.3634\\)",
  "tol": 0.001,
  "id": "neural-networks-25",
  "cat": "neural-networks"
 },
 {
  "type": "qcm",
  "q": "On considère le modèle de génération des données \\(y = f(x) + \\varepsilon\\), avec \\(\\mathbb{E}[\\varepsilon] = 0\\). Que représente \\(\\varepsilon\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un bruit aléatoire d'espérance nulle qui perturbe la valeur de \\(f(x)\\)"
   },
   {
    "key": "b",
    "text": "L'hypothèse \\(h\\) apprise sur l'échantillon \\(S\\)"
   },
   {
    "key": "c",
    "text": "L'erreur d'approximation de l'espace d'hypothèses \\(H\\)"
   },
   {
    "key": "d",
    "text": "La complexité de Rademacher de \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "Un bruit aléatoire d'espérance nulle qui perturbe la valeur de \\(f(x)\\)",
  "id": "slt-revisited-01",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "La preuve de la Proposition 8.1 (décomposition de l'erreur) repose sur la formule de König-Huygens. Que dit cette formule pour une variable aléatoire \\(X\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{E}[(X-\\mathbb{E}[X])^2] = \\mathbb{E}[X^2] - \\mathbb{E}[X]^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{E}[(X-\\mathbb{E}[X])^2] = \\mathbb{E}[X]^2 - \\mathbb{E}[X^2]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{E}[(X-\\mathbb{E}[X])^2] = \\mathbb{E}[X^2] + \\mathbb{E}[X]^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{E}[(X-\\mathbb{E}[X])^2] = (\\mathbb{E}[X])^3\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathbb{E}[(X-\\mathbb{E}[X])^2] = \\mathbb{E}[X^2] - \\mathbb{E}[X]^2\\)",
  "id": "slt-revisited-02",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "En utilisant la formule de König-Huygens \\(\\mathrm{Var}(X) = \\mathbb{E}[(X-\\mathbb{E}[X])^2] = \\mathbb{E}[X^2] - \\mathbb{E}[X]^2\\), calculez \\(\\mathrm{Var}(X)\\) sachant que \\(\\mathbb{E}[X] = 4\\) et \\(\\mathbb{E}[X^2] = 20\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.001,
  "id": "slt-revisited-03",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Selon la Proposition 8.1, l'erreur de généralisation \\(\\mathbb{E}[(y-h(x))^2]\\) se décompose en la somme de quels trois termes ?",
  "opts": [
   {
    "key": "a",
    "text": "Biais au carré de \\(h\\), variance de \\(h\\), erreur de Bayes"
   },
   {
    "key": "b",
    "text": "Biais de \\(h\\), variance de \\(h\\), erreur d'approximation"
   },
   {
    "key": "c",
    "text": "Erreur d'estimation, erreur d'optimisation, biais de \\(h\\)"
   },
   {
    "key": "d",
    "text": "Variance de \\(h\\), complexité de Rademacher, erreur de Bayes"
   }
  ],
  "ans": "a",
  "ansText": "Biais au carré de \\(h\\), variance de \\(h\\), erreur de Bayes",
  "id": "slt-revisited-04",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans la décomposition de l'erreur, le terme \\((\\mathbb{E}[h(x)] - f(x))^2\\) représente :",
  "opts": [
   {
    "key": "a",
    "text": "le biais au carré de \\(h\\) : l'écart entre sa moyenne sur \\(S\\) et la vraie valeur \\(f(x)\\)"
   },
   {
    "key": "b",
    "text": "la variance de \\(h\\) autour de sa moyenne"
   },
   {
    "key": "c",
    "text": "l'erreur de Bayes, indépendante de l'estimateur"
   },
   {
    "key": "d",
    "text": "l'erreur d'estimation liée à la taille de l'échantillon"
   }
  ],
  "ans": "a",
  "ansText": "le biais au carré de \\(h\\) : l'écart entre sa moyenne sur \\(S\\) et la vraie valeur \\(f(x)\\)",
  "id": "slt-revisited-05",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans la décomposition de l'erreur, le terme \\(\\mathbb{E}[(\\mathbb{E}[h(x)] - h(x))^2]\\) représente :",
  "opts": [
   {
    "key": "a",
    "text": "la variance de \\(h\\), c'est-à-dire sa sensibilité au changement de l'échantillon \\(S\\)"
   },
   {
    "key": "b",
    "text": "le biais au carré de \\(h\\)"
   },
   {
    "key": "c",
    "text": "l'erreur de Bayes du modèle"
   },
   {
    "key": "d",
    "text": "l'erreur d'approximation de l'espace \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "la variance de \\(h\\), c'est-à-dire sa sensibilité au changement de l'échantillon \\(S\\)",
  "id": "slt-revisited-06",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Le terme \\(\\mathbb{E}[(y-f(x))^2]\\), appelé erreur de Bayes, a pour propriété :",
  "opts": [
   {
    "key": "a",
    "text": "il ne dépend pas de l'estimateur \\(h\\), seulement de la distribution des données"
   },
   {
    "key": "b",
    "text": "il dépend uniquement de l'échantillon \\(S\\) utilisé pour apprendre \\(h\\)"
   },
   {
    "key": "c",
    "text": "il diminue nécessairement quand on complexifie le modèle \\(h\\)"
   },
   {
    "key": "d",
    "text": "il correspond exactement à la variance de \\(h\\)"
   }
  ],
  "ans": "a",
  "ansText": "il ne dépend pas de l'estimateur \\(h\\), seulement de la distribution des données",
  "id": "slt-revisited-07",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Un modèle simple, comme une régression linéaire, appliqué à un problème réellement non-linéaire présente typiquement :",
  "opts": [
   {
    "key": "a",
    "text": "un biais élevé et une variance faible"
   },
   {
    "key": "b",
    "text": "un biais faible et une variance élevée"
   },
   {
    "key": "c",
    "text": "un biais et une variance tous deux nuls"
   },
   {
    "key": "d",
    "text": "uniquement une erreur de Bayes élevée"
   }
  ],
  "ans": "a",
  "ansText": "un biais élevé et une variance faible",
  "id": "slt-revisited-08",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Un modèle complexe, comme un polynôme de haut degré, présente typiquement :",
  "opts": [
   {
    "key": "a",
    "text": "un biais faible mais une variance élevée : il généralise mal"
   },
   {
    "key": "b",
    "text": "un biais élevé et une variance faible"
   },
   {
    "key": "c",
    "text": "ni biais ni variance"
   },
   {
    "key": "d",
    "text": "une erreur de Bayes plus faible que celle du modèle linéaire"
   }
  ],
  "ans": "b",
  "ansText": "un biais élevé et une variance faible",
  "id": "slt-revisited-09",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "On a \\(\\mathbb{E}[h(x)] = 3.2\\), \\(f(x) = 3\\), une variance \\(\\mathbb{E}[(\\mathbb{E}[h(x)]-h(x))^2] = 0.15\\) et une erreur de Bayes \\(\\mathbb{E}[(y-f(x))^2] = 0.05\\). En utilisant la Proposition 8.1, calculez l'erreur de généralisation \\(\\mathbb{E}[(y-h(x))^2]\\).",
  "ans": 0.24,
  "ansText": "0.24",
  "tol": 0.005,
  "id": "slt-revisited-10",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "L'excès de risque \\(\\mathbb{E}[(y-h(x))^2] - \\mathbb{E}[(y-f(x))^2]\\), quantité que l'on cherche à minimiser d'après la Proposition 8.1, est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "la somme du biais au carré et de la variance de \\(h\\)"
   },
   {
    "key": "b",
    "text": "l'erreur de Bayes seule"
   },
   {
    "key": "c",
    "text": "le biais de \\(h\\) seul"
   },
   {
    "key": "d",
    "text": "la complexité de Rademacher de \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "la somme du biais au carré et de la variance de \\(h\\)",
  "id": "slt-revisited-11",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans l'Exemple 8.1, où l'on considère deux densités associées à deux classes, l'erreur de Bayes correspond géométriquement à :",
  "opts": [
   {
    "key": "a",
    "text": "l'aire sous les deux courbes de densité, dans la zone où elles se chevauchent"
   },
   {
    "key": "b",
    "text": "l'aire totale sous une seule des deux courbes de densité"
   },
   {
    "key": "c",
    "text": "la différence entre les moyennes des deux distributions"
   },
   {
    "key": "d",
    "text": "le maximum ponctuel atteint par les deux densités"
   }
  ],
  "ans": "a",
  "ansText": "l'aire sous les deux courbes de densité, dans la zone où elles se chevauchent",
  "id": "slt-revisited-12",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre général, avec une fonction de perte \\(\\ell : Y \\times Y \\to \\mathbb{R}\\), le risque \\(R(h) = \\mathbb{E}_{(x,y)\\sim D}[\\ell(y,h(x))]\\) est défini comme :",
  "opts": [
   {
    "key": "a",
    "text": "l'espérance du coût de la perte de \\(h\\) sur toute la distribution \\(D\\)"
   },
   {
    "key": "b",
    "text": "la moyenne empirique de \\(\\ell\\) calculée uniquement sur l'échantillon \\(S\\)"
   },
   {
    "key": "c",
    "text": "le minimum de \\(\\ell(y,h(x))\\) atteint sur l'espace \\(H\\)"
   },
   {
    "key": "d",
    "text": "la variance de \\(\\ell(y,h(x))\\) sur la distribution \\(D\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'espérance du coût de la perte de \\(h\\) sur toute la distribution \\(D\\)",
  "id": "slt-revisited-13",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "En notant \\(R^\\star\\) le risque de Bayes et \\(H\\) l'espace d'hypothèses, le regret de Bayes \\(R(h) - R^\\star\\) se décompose comme :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\left(R(h) - \\inf_{g\\in H} R(g)\\right) + \\left(\\inf_{g\\in H} R(g) - R^\\star\\right)\\)"
   },
   {
    "key": "b",
    "text": "le biais au carré plus la variance de \\(h\\) uniquement"
   },
   {
    "key": "c",
    "text": "le risque empirique de \\(h\\) plus l'erreur de Bayes"
   },
   {
    "key": "d",
    "text": "l'erreur d'optimisation plus l'erreur de Bayes"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\left(R(h) - \\inf_{g\\in H} R(g)\\right) + \\left(\\inf_{g\\in H} R(g) - R^\\star\\right)\\)",
  "id": "slt-revisited-14",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans la décomposition du regret de Bayes, le terme \\(\\inf_{g\\in H} R(g) - R^\\star\\) est appelé :",
  "opts": [
   {
    "key": "a",
    "text": "l'erreur d'approximation"
   },
   {
    "key": "b",
    "text": "l'erreur d'estimation"
   },
   {
    "key": "c",
    "text": "l'erreur d'optimisation"
   },
   {
    "key": "d",
    "text": "le risque empirique"
   }
  ],
  "ans": "a",
  "ansText": "l'erreur d'approximation",
  "id": "slt-revisited-15",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "L'erreur d'approximation \\(\\inf_{g\\in H} R(g) - R^\\star\\) a pour caractéristique importante :",
  "opts": [
   {
    "key": "a",
    "text": "elle ne dépend que de l'espace d'hypothèses \\(H\\), pas des données observées"
   },
   {
    "key": "b",
    "text": "elle dépend fortement de l'échantillon \\(S\\) tiré"
   },
   {
    "key": "c",
    "text": "elle diminue nécessairement quand la taille de l'échantillon augmente"
   },
   {
    "key": "d",
    "text": "elle est égale à la complexité de Rademacher de \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "elle ne dépend que de l'espace d'hypothèses \\(H\\), pas des données observées",
  "id": "slt-revisited-16",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans la décomposition du regret de Bayes, le terme \\(R(h) - \\inf_{g\\in H} R(g)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "l'excès de risque de \\(h\\) par rapport au meilleur élément de \\(H\\)"
   },
   {
    "key": "b",
    "text": "l'erreur d'approximation de \\(H\\)"
   },
   {
    "key": "c",
    "text": "l'erreur de Bayes du problème"
   },
   {
    "key": "d",
    "text": "le risque empirique de \\(h\\) sur \\(S\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'excès de risque de \\(h\\) par rapport au meilleur élément de \\(H\\)",
  "id": "slt-revisited-17",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "On note \\(h \\in \\arg\\min_{g\\in H} R_S(g)\\) (minimiseur du risque empirique) et \\(h_H = \\arg\\min_{g\\in H} R(g)\\) (meilleur élément de \\(H\\) pour le risque réel). L'excès de risque se décompose en trois termes : \\(R(h)-R(h_H) = (R(h)-R_S(h)) + (R_S(h)-R_S(h_H)) + (R_S(h_H)-R(h_H))\\). Lequel de ces trois termes est négatif ou nul par construction ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(R_S(h) - R_S(h_H)\\)"
   },
   {
    "key": "b",
    "text": "\\(R(h) - R_S(h)\\)"
   },
   {
    "key": "c",
    "text": "\\(R_S(h_H) - R(h_H)\\)"
   },
   {
    "key": "d",
    "text": "\\(R(h_H) - R^\\star\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(R_S(h) - R_S(h_H)\\)",
  "id": "slt-revisited-18",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Toujours dans cette décomposition en trois termes, le terme \\(R_S(h_H) - R(h_H)\\) est plus facile à contrôler que les autres car :",
  "opts": [
   {
    "key": "a",
    "text": "\\(h_H\\) est une fonction déterministe fixe (indépendante de \\(S\\)), donc la loi des grands nombres s'applique directement"
   },
   {
    "key": "b",
    "text": "il est toujours strictement négatif"
   },
   {
    "key": "c",
    "text": "il ne dépend d'aucune fonction de perte"
   },
   {
    "key": "d",
    "text": "il est toujours exactement égal à zéro"
   }
  ],
  "ans": "a",
  "ansText": "\\(h_H\\) est une fonction déterministe fixe (indépendante de \\(S\\)), donc la loi des grands nombres s'applique directement",
  "id": "slt-revisited-19",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Le texte établit la borne \\(R_S(h) - R_S(h_H) \\le \\sup_{g\\in H} \\left| \\mathbb{E}_{(x,y)\\sim D}[\\ell(g(x),y)] - \\frac{1}{m}\\sum_{i=1}^m \\ell(g(x_i),y_i) \\right|\\), puis en déduit une borne sur \\(R(h) - R_S(h)\\) avec un facteur multiplicatif de :",
  "opts": [
   {
    "key": "a",
    "text": "2"
   },
   {
    "key": "b",
    "text": "1"
   },
   {
    "key": "c",
    "text": "3"
   },
   {
    "key": "d",
    "text": "\\(\\frac{1}{2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "2",
  "id": "slt-revisited-20",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "Si le supremum \\(\\sup_{g\\in H} \\left| \\mathbb{E}[\\ell(g(x),y)] - \\frac{1}{m}\\sum_{i=1}^m \\ell(g(x_i),y_i) \\right|\\) vaut \\(0.08\\), quelle est la valeur numérique de la borne \\(R(h) - R_S(h) \\le 2 \\times (\\text{ce supremum})\\) ?",
  "ans": 0.16,
  "ansText": "0.16",
  "tol": 0.001,
  "id": "slt-revisited-21",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Quand la taille (complexité) de l'espace d'hypothèses \\(H\\) augmente, on peut généralement atteindre :",
  "opts": [
   {
    "key": "a",
    "text": "un risque empirique plus faible, mais avec une borne de généralisation (variance) plus grande"
   },
   {
    "key": "b",
    "text": "un risque empirique plus élevé et une borne de généralisation plus faible"
   },
   {
    "key": "c",
    "text": "ni changement du risque empirique ni de la borne de généralisation"
   },
   {
    "key": "d",
    "text": "systématiquement une erreur de Bayes plus faible"
   }
  ],
  "ans": "a",
  "ansText": "un risque empirique plus faible, mais avec une borne de généralisation (variance) plus grande",
  "id": "slt-revisited-22",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Quand l'espace d'hypothèses \\(H\\) contient un nombre fini d'hypothèses, sa <em>taille</em> (au sens de la complexité) est simplement définie comme :",
  "opts": [
   {
    "key": "a",
    "text": "le nombre d'hypothèses contenues dans l'ensemble \\(H\\)"
   },
   {
    "key": "b",
    "text": "la dimension de Vapnik-Chervonenkis de \\(H\\)"
   },
   {
    "key": "c",
    "text": "la complexité de Rademacher de \\(H\\)"
   },
   {
    "key": "d",
    "text": "le risque de Bayes associé à \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "le nombre d'hypothèses contenues dans l'ensemble \\(H\\)",
  "id": "slt-revisited-23",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Quand \\(H\\) est de taille infinie, une mesure alternative de sa capacité, plus simple à calculer dans le cas des classifieurs linéaires, est :",
  "opts": [
   {
    "key": "a",
    "text": "la dimension de Vapnik-Chervonenkis (VC)"
   },
   {
    "key": "b",
    "text": "l'erreur de Bayes"
   },
   {
    "key": "c",
    "text": "le biais au carré moyen"
   },
   {
    "key": "d",
    "text": "la variance empirique des observations"
   }
  ],
  "ans": "a",
  "ansText": "la dimension de Vapnik-Chervonenkis (VC)",
  "id": "slt-revisited-24",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "D'après la Définition 8.1, la complexité de Rademacher empirique s'écrit \\(R_S(H) = \\mathbb{E}_\\sigma\\left[\\sup_{h\\in H} \\frac{1}{m}\\sum_{i=1}^m \\sigma_i h(x_i)\\right]\\), où les variables \\(\\sigma_i\\) (variables de Rademacher) prennent leurs valeurs dans :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\{-1, +1\\}\\), chacune avec probabilité \\(1/2\\)"
   },
   {
    "key": "b",
    "text": "\\([0,1]\\) suivant une loi uniforme"
   },
   {
    "key": "c",
    "text": "\\(\\{0, 1\\}\\), chacune avec probabilité \\(1/2\\)"
   },
   {
    "key": "d",
    "text": "l'ensemble des réels, suivant une loi normale centrée réduite"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\{-1, +1\\}\\), chacune avec probabilité \\(1/2\\)",
  "id": "slt-revisited-25",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Informellement, la complexité de Rademacher d'un ensemble d'hypothèses \\(H\\) mesure :",
  "opts": [
   {
    "key": "a",
    "text": "la capacité de \\(H\\) à s'ajuster (fitter) à du bruit pur dans les données"
   },
   {
    "key": "b",
    "text": "le biais moyen des hypothèses contenues dans \\(H\\)"
   },
   {
    "key": "c",
    "text": "l'erreur de Bayes associée à \\(H\\)"
   },
   {
    "key": "d",
    "text": "le nombre exact d'hypothèses contenues dans \\(H\\)"
   }
  ],
  "ans": "a",
  "ansText": "la capacité de \\(H\\) à s'ajuster (fitter) à du bruit pur dans les données",
  "id": "slt-revisited-26",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "La complexité de Rademacher \\(R_m(H) = \\mathbb{E}_{S\\sim D^m}[R_S(H)]\\) a le comportement suivant :",
  "opts": [
   {
    "key": "a",
    "text": "elle augmente avec la taille de \\(H\\) et diminue avec la taille de l'échantillon \\(m\\)"
   },
   {
    "key": "b",
    "text": "elle diminue avec la taille de \\(H\\) et augmente avec \\(m\\)"
   },
   {
    "key": "c",
    "text": "elle est constante, indépendamment de la taille de \\(H\\) et de \\(m\\)"
   },
   {
    "key": "d",
    "text": "elle ne dépend que de la fonction de perte \\(\\ell\\), jamais de \\(H\\) ni de \\(m\\)"
   }
  ],
  "ans": "a",
  "ansText": "elle augmente avec la taille de \\(H\\) et diminue avec la taille de l'échantillon \\(m\\)",
  "id": "slt-revisited-27",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "La technique employée pour démontrer l'inégalité \\(\\mathbb{E}_S\\left[\\sup_{g\\in H}|\\ldots|\\right] \\le 2R_m(H)\\), en introduisant un échantillon fantôme \\(S'\\) et des variables de Rademacher, s'appelle :",
  "opts": [
   {
    "key": "a",
    "text": "la symétrisation"
   },
   {
    "key": "b",
    "text": "la régularisation"
   },
   {
    "key": "c",
    "text": "la validation croisée"
   },
   {
    "key": "d",
    "text": "la décomposition de König-Huygens"
   }
  ],
  "ans": "a",
  "ansText": "la symétrisation",
  "id": "slt-revisited-28",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Le résultat \\(\\mathbb{E}_{S\\sim D^m}[R(h) - R^\\star] \\le \\inf_{g\\in H} R(g) - R^\\star + 4R_m(H)\\) illustre plus généralement :",
  "opts": [
   {
    "key": "a",
    "text": "le compromis biais-variance pour la minimisation du risque, en explicitant le lien entre complexité de \\(H\\) et taille de l'échantillon"
   },
   {
    "key": "b",
    "text": "l'indépendance totale entre la complexité de \\(H\\) et la taille de l'échantillon"
   },
   {
    "key": "c",
    "text": "le fait que l'erreur de Bayes domine toujours l'erreur d'approximation"
   },
   {
    "key": "d",
    "text": "l'erreur d'optimisation uniquement, sans lien avec la variance"
   }
  ],
  "ans": "a",
  "ansText": "le compromis biais-variance pour la minimisation du risque, en explicitant le lien entre complexité de \\(H\\) et taille de l'échantillon",
  "id": "slt-revisited-29",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Le Théorème 8.1 (borne de généralisation de Rademacher) énonce que, pour tout \\(\\delta > 0\\), avec probabilité au moins \\(1-\\delta\\) sur le tirage de l'échantillon \\(S\\), pour tout \\(h \\in H\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R(h) \\le R_S(h) + 2R_m(H) + \\sqrt{\\frac{\\log(1/\\delta)}{2m}}\\)"
   },
   {
    "key": "b",
    "text": "\\(R(h) \\le R_S(h) - 2R_m(H)\\)"
   },
   {
    "key": "c",
    "text": "\\(R(h) = R_S(h) + R_m(H)\\)"
   },
   {
    "key": "d",
    "text": "\\(R(h) \\le \\frac{R_S(h)}{2R_m(H)}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(R(h) \\le R_S(h) + 2R_m(H) + \\sqrt{\\frac{\\log(1/\\delta)}{2m}}\\)",
  "id": "slt-revisited-30",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "D'après le Théorème 8.1, calculez la borne \\(R_S(h) + 2R_m(H) + \\sqrt{\\frac{\\log(1/\\delta)}{2m}}\\) pour \\(R_S(h) = 0.10\\), \\(R_m(H) = 0.05\\), \\(\\delta = 0.05\\) et \\(m = 100\\).",
  "ans": 0.3224,
  "ansText": "0.3224",
  "tol": 0.005,
  "id": "slt-revisited-31",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "Le Théorème 8.1 fournit aussi la borne \\(R(h) \\le R_S(h) + 2R_S(H) + 3\\sqrt{\\frac{\\log(1/\\delta)}{2m}}\\), qui n'utilise que la complexité de Rademacher <strong>empirique</strong> \\(R_S(H)\\) (calculable à partir des données). Calculez cette borne pour \\(R_S(h) = 0.15\\), \\(R_S(H) = 0.08\\), \\(\\delta = 0.1\\) et \\(m = 50\\).",
  "ans": 0.7652,
  "ansText": "0.7652",
  "tol": 0.01,
  "id": "slt-revisited-32",
  "cat": "slt-revisited"
 },
 {
  "type": "num",
  "q": "Dans une borne de généralisation du type \\(\\sqrt{\\frac{\\log(1/\\delta)}{2m}}\\), calculez la valeur de ce terme de confiance pour \\(\\delta = 0.01\\) et \\(m = 200\\).",
  "ans": 0.1073,
  "ansText": "0.1073",
  "tol": 0.002,
  "id": "slt-revisited-33",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "La démonstration du Théorème 8.1 repose principalement sur l'application de :",
  "opts": [
   {
    "key": "a",
    "text": "l'inégalité de McDiarmid"
   },
   {
    "key": "b",
    "text": "l'inégalité de Cauchy-Schwarz"
   },
   {
    "key": "c",
    "text": "le théorème central limite"
   },
   {
    "key": "d",
    "text": "la formule de König-Huygens"
   }
  ],
  "ans": "a",
  "ansText": "l'inégalité de McDiarmid",
  "id": "slt-revisited-34",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Dans la preuve, on pose \\(\\Phi(S) = \\sup_{h\\in H} (R(h) - R_S(h))\\) et l'on considère deux échantillons \\(S\\) et \\(S'\\) qui ne diffèrent que par un seul point. On montre alors que \\(|\\Phi(S) - \\Phi(S')|\\) est majoré par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\frac{1}{m}\\)"
   },
   {
    "key": "b",
    "text": "1"
   },
   {
    "key": "c",
    "text": "m"
   },
   {
    "key": "d",
    "text": "\\(\\frac{2}{m}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\frac{1}{m}\\)",
  "id": "slt-revisited-35",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Toujours dans la preuve du Théorème 8.1, on montre qu'avec forte probabilité, la complexité de Rademacher (théorique) vérifie :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R_m(H) \\le R_S(H) + \\sqrt{\\frac{\\log(2/\\delta)}{2m}}\\)"
   },
   {
    "key": "b",
    "text": "\\(R_m(H) = R_S(H)\\)"
   },
   {
    "key": "c",
    "text": "\\(R_m(H) \\ge 2R_S(H)\\)"
   },
   {
    "key": "d",
    "text": "\\(R_m(H) \\le R_S(H) - \\sqrt{\\frac{\\log(2/\\delta)}{2m}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(R_m(H) \\le R_S(H) + \\sqrt{\\frac{\\log(2/\\delta)}{2m}}\\)",
  "id": "slt-revisited-36",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "D'après les bornes de généralisation revisitées, lorsque la taille de l'échantillon \\(m\\) augmente (l'espace \\(H\\) restant fixé), la borne sur l'écart \\(R(h) - R_S(h)\\) :",
  "opts": [
   {
    "key": "a",
    "text": "diminue, car le terme de confiance et la complexité de Rademacher décroissent avec \\(m\\)"
   },
   {
    "key": "b",
    "text": "augmente strictement avec \\(m\\)"
   },
   {
    "key": "c",
    "text": "reste rigoureusement constante quelle que soit \\(m\\)"
   },
   {
    "key": "d",
    "text": "devient négative dès que \\(m\\) est suffisamment grand"
   }
  ],
  "ans": "a",
  "ansText": "diminue, car le terme de confiance et la complexité de Rademacher décroissent avec \\(m\\)",
  "id": "slt-revisited-37",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Comparé à la borne du Théorème 8.1 utilisant \\(R_m(H)\\), la borne utilisant la complexité empirique \\(R_S(H)\\) présente l'avantage :",
  "opts": [
   {
    "key": "a",
    "text": "d'être directement calculable à partir de l'échantillon observé \\(S\\), sans connaître la distribution \\(D\\)"
   },
   {
    "key": "b",
    "text": "d'être toujours strictement plus petite, quel que soit \\(m\\)"
   },
   {
    "key": "c",
    "text": "de ne plus dépendre du tout de \\(\\delta\\)"
   },
   {
    "key": "d",
    "text": "de remplacer entièrement le rôle du risque empirique \\(R_S(h)\\)"
   }
  ],
  "ans": "a",
  "ansText": "d'être directement calculable à partir de l'échantillon observé \\(S\\), sans connaître la distribution \\(D\\)",
  "id": "slt-revisited-38",
  "cat": "slt-revisited"
 },
 {
  "type": "qcm",
  "q": "Que signifie le terme <em>bagging</em> ?",
  "opts": [
   {
    "key": "a",
    "text": "Boosted Aggregating Gain"
   },
   {
    "key": "b",
    "text": "Bootstrap Aggregating"
   },
   {
    "key": "c",
    "text": "Balanced Averaging of Generalized models"
   },
   {
    "key": "d",
    "text": "Bayesian Aggregating"
   }
  ],
  "ans": "b",
  "ansText": "Bootstrap Aggregating",
  "id": "ensemble-methods-01",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est l'objectif principal recherché en combinant plusieurs modèles par bagging ?",
  "opts": [
   {
    "key": "a",
    "text": "Réduire le biais des modèles tout en augmentant leur variance"
   },
   {
    "key": "b",
    "text": "Réduire la variance de l'ensemble de classifieurs tout en conservant un fort pouvoir prédictif"
   },
   {
    "key": "c",
    "text": "Transformer des apprenants faibles en un apprenant fort"
   },
   {
    "key": "d",
    "text": "Apprendre un méta-modèle à partir des prédictions des modèles de base"
   }
  ],
  "ans": "b",
  "ansText": "Réduire la variance de l'ensemble de classifieurs tout en conservant un fort pouvoir prédictif",
  "id": "ensemble-methods-02",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Comment construit-on un échantillon bootstrap \\(S_t\\) de taille \\(m\\) à partir d'un ensemble d'apprentissage \\(S\\) de taille \\(m\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "En sélectionnant les m premiers exemples de S"
   },
   {
    "key": "b",
    "text": "En tirant m exemples de S sans remise"
   },
   {
    "key": "c",
    "text": "En tirant m exemples de S avec remise, chaque exemple ayant la même probabilité d'être tiré"
   },
   {
    "key": "d",
    "text": "En pondérant chaque exemple selon l'erreur du modèle précédent"
   }
  ],
  "ans": "c",
  "ansText": "En tirant m exemples de S avec remise, chaque exemple ayant la même probabilité d'être tiré",
  "id": "ensemble-methods-03",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Dans le tirage avec remise utilisé pour créer un échantillon bootstrap, que peut-il se passer pour un exemple donné du jeu d'entraînement initial ?",
  "opts": [
   {
    "key": "a",
    "text": "Il ne peut être tiré qu'une seule fois au maximum"
   },
   {
    "key": "b",
    "text": "Il peut être tiré plusieurs fois dans le même échantillon bootstrap"
   },
   {
    "key": "c",
    "text": "Il est automatiquement exclu de l'échantillon bootstrap"
   },
   {
    "key": "d",
    "text": "Il reçoit un poids nul dans l'échantillon bootstrap"
   }
  ],
  "ans": "b",
  "ansText": "Il peut être tiré plusieurs fois dans le même échantillon bootstrap",
  "id": "ensemble-methods-04",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle conséquence a le fait qu'un exemple soit tiré plusieurs fois dans un même échantillon bootstrap ?",
  "opts": [
   {
    "key": "a",
    "text": "L'algorithme l'ignore pour éviter le sur-apprentissage"
   },
   {
    "key": "b",
    "text": "L'algorithme doit lui accorder une importance plus grande pour minimiser son erreur"
   },
   {
    "key": "c",
    "text": "Cela n'a aucun effet sur l'apprentissage du modèle"
   },
   {
    "key": "d",
    "text": "Cela réduit automatiquement la taille effective de l'échantillon"
   }
  ],
  "ans": "b",
  "ansText": "L'algorithme doit lui accorder une importance plus grande pour minimiser son erreur",
  "id": "ensemble-methods-05",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Pour une tâche de régression, comment l'hypothèse finale \\(H_T\\) est-elle calculée à partir des T hypothèses \\(h_1,\\ldots,h_T\\) apprises par bagging ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_T(x) = \\max_t h_t(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(H_T(x) = \\frac{1}{T}\\sum_{t=1}^T h_t(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(H_T(x) = \\sum_{t=1}^T \\alpha_t h_t(x)\\) avec des poids appris itérativement"
   },
   {
    "key": "d",
    "text": "\\(H_T(x)\\) est choisie uniquement par vote majoritaire pondéré"
   }
  ],
  "ans": "b",
  "ansText": "\\(H_T(x) = \\frac{1}{T}\\sum_{t=1}^T h_t(x)\\)",
  "id": "ensemble-methods-06",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "Cinq modèles de régression obtenus par bagging prédisent respectivement 3.2, 3.5, 2.9, 3.1 et 3.3 pour une même observation. Quelle est la prédiction finale de l'ensemble agrégé (moyenne des prédictions) ?",
  "ans": 3.2,
  "ansText": "3.2",
  "tol": 0.01,
  "id": "ensemble-methods-07",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Pourquoi les arbres de décision profonds sont-ils des candidats particulièrement adaptés pour être combinés par bagging ?",
  "opts": [
   {
    "key": "a",
    "text": "Ils ont un biais élevé et une variance faible"
   },
   {
    "key": "b",
    "text": "Ils ont une variance élevée et un biais faible"
   },
   {
    "key": "c",
    "text": "Ils sont totalement insensibles aux variations des données d'entraînement"
   },
   {
    "key": "d",
    "text": "Ils convergent plus vite que les modèles linéaires"
   }
  ],
  "ans": "b",
  "ansText": "Ils ont une variance élevée et un biais faible",
  "id": "ensemble-methods-08",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Que montre l'analyse théorique du bagging concernant l'erreur quadratique moyenne du classifieur agrégé \\(H_T\\) par rapport à l'erreur quadratique moyenne des classifieurs individuels \\(h_t\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "L'erreur de \\(H_T\\) est toujours supérieure ou égale à l'erreur moyenne des \\(h_t\\)"
   },
   {
    "key": "b",
    "text": "L'erreur de \\(H_T\\) est toujours inférieure ou égale à l'erreur moyenne des \\(h_t\\), grâce à l'inégalité de Jensen"
   },
   {
    "key": "c",
    "text": "Les deux erreurs sont toujours strictement égales"
   },
   {
    "key": "d",
    "text": "Aucune relation ne peut être établie entre les deux erreurs"
   }
  ],
  "ans": "b",
  "ansText": "L'erreur de \\(H_T\\) est toujours inférieure ou égale à l'erreur moyenne des \\(h_t\\), grâce à l'inégalité de Jensen",
  "id": "ensemble-methods-09",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Par rapport au bagging standard, quelle randomisation supplémentaire les forêts aléatoires introduisent-elles ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles utilisent des poids appris itérativement comme dans le boosting"
   },
   {
    "key": "b",
    "text": "Elles tirent aléatoirement un sous-ensemble de \\(p'\\) variables à chaque nœud pour choisir la meilleure coupure"
   },
   {
    "key": "c",
    "text": "Elles n'utilisent jamais de tirage avec remise sur les exemples"
   },
   {
    "key": "d",
    "text": "Elles combinent uniquement des arbres de profondeur 1"
   }
  ],
  "ans": "b",
  "ansText": "Elles tirent aléatoirement un sous-ensemble de \\(p'\\) variables à chaque nœud pour choisir la meilleure coupure",
  "id": "ensemble-methods-10",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "On parle de <<double échantillonnage>> pour les forêts aléatoires. À quoi cela fait-il référence ?",
  "opts": [
   {
    "key": "a",
    "text": "Au tirage successif de deux échantillons bootstrap identiques"
   },
   {
    "key": "b",
    "text": "À l'échantillonnage à la fois sur les exemples (bootstrap) et sur les variables à chaque nœud"
   },
   {
    "key": "c",
    "text": "Au fait d'apprendre chaque arbre deux fois pour réduire le biais"
   },
   {
    "key": "d",
    "text": "À l'utilisation de deux jeux de validation distincts"
   }
  ],
  "ans": "b",
  "ansText": "À l'échantillonnage à la fois sur les exemples (bootstrap) et sur les variables à chaque nœud",
  "id": "ensemble-methods-11",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Dans l'algorithme des forêts aléatoires, la taille \\(m'\\) de l'échantillon bootstrap vérifie \\(m' \\le m\\). Que peut-on dire de cette contrainte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(m' < m\\) est obligatoire pour garantir la convergence de l'algorithme"
   },
   {
    "key": "b",
    "text": "\\(m' = m\\) est strictement interdit dans la pratique"
   },
   {
    "key": "c",
    "text": "Il n'est pas obligatoire d'avoir \\(m' < m\\) ; cela permet seulement d'accélérer l'apprentissage"
   },
   {
    "key": "d",
    "text": "\\(m'\\) doit toujours être égal à la dimension \\(d\\) des données"
   }
  ],
  "ans": "c",
  "ansText": "Il n'est pas obligatoire d'avoir \\(m' < m\\) ; cela permet seulement d'accélérer l'apprentissage",
  "id": "ensemble-methods-12",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est l'intérêt d'utiliser seulement un sous-ensemble des variables à chaque nœud plutôt que toutes les variables disponibles ?",
  "opts": [
   {
    "key": "a",
    "text": "Cela garantit un arbre totalement sans biais"
   },
   {
    "key": "b",
    "text": "Cela accélère l'apprentissage (moins d'exemples et de variables à considérer à chaque split) et crée de la diversité entre les arbres"
   },
   {
    "key": "c",
    "text": "Cela empêche à coup sûr tout risque de sur-apprentissage"
   },
   {
    "key": "d",
    "text": "Cela permet de se passer complètement du tirage bootstrap sur les exemples"
   }
  ],
  "ans": "b",
  "ansText": "Cela accélère l'apprentissage (moins d'exemples et de variables à considérer à chaque split) et crée de la diversité entre les arbres",
  "id": "ensemble-methods-13",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quel avantage pratique des arbres de décision et des forêts aléatoires est souligné dans le cours, en plus de leurs performances ?",
  "opts": [
   {
    "key": "a",
    "text": "Ils nécessitent très peu de données pour être entraînés"
   },
   {
    "key": "b",
    "text": "Leur décision est facile à comprendre (IA explicable) en suivant simplement le chemin emprunté par la donnée dans l'arbre"
   },
   {
    "key": "c",
    "text": "Ils n'ont besoin d'aucun réglage d'hyperparamètres"
   },
   {
    "key": "d",
    "text": "Ils sont toujours plus rapides à entraîner que les méthodes de boosting"
   }
  ],
  "ans": "b",
  "ansText": "Leur décision est facile à comprendre (IA explicable) en suivant simplement le chemin emprunté par la donnée dans l'arbre",
  "id": "ensemble-methods-14",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Dans certaines variantes de l'algorithme, comment peut-on améliorer le simple vote majoritaire entre les arbres d'une forêt aléatoire ?",
  "opts": [
   {
    "key": "a",
    "text": "En supprimant systématiquement les arbres les moins profonds"
   },
   {
    "key": "b",
    "text": "En donnant des poids différents aux arbres selon leurs performances (vote majoritaire pondéré)"
   },
   {
    "key": "c",
    "text": "En ne conservant qu'un seul arbre final"
   },
   {
    "key": "d",
    "text": "En réentraînant tous les arbres sur exactement les mêmes données, sans tirage aléatoire"
   }
  ],
  "ans": "b",
  "ansText": "En donnant des poids différents aux arbres selon leurs performances (vote majoritaire pondéré)",
  "id": "ensemble-methods-15",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Comment est définie l'importance \\(Imp_j\\) d'une variable \\(X^j\\) dans une forêt aléatoire ?",
  "opts": [
   {
    "key": "a",
    "text": "Comme la fréquence d'apparition de \\(X^j\\) dans le jeu de données"
   },
   {
    "key": "b",
    "text": "Comme la moyenne, sur tous les arbres et tous les nœuds où \\(X^j\\) est utilisée pour la coupure, de la diminution d'entropie \\(\\Delta Ent_N(X^j)\\) pondérée par la taille du nœud"
   },
   {
    "key": "c",
    "text": "Comme la corrélation entre \\(X^j\\) et la variable cible \\(y\\)"
   },
   {
    "key": "d",
    "text": "Comme le nombre total de feuilles pures obtenues grâce à cette variable"
   }
  ],
  "ans": "b",
  "ansText": "Comme la moyenne, sur tous les arbres et tous les nœuds où \\(X^j\\) est utilisée pour la coupure, de la diminution d'entropie \\(\\Delta Ent_N(X^j)\\) pondérée par la taille du nœud",
  "id": "ensemble-methods-16",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Que désigne-t-on par données <<Out Of Bag>> (OOB) pour un arbre donné dans le bagging ?",
  "opts": [
   {
    "key": "a",
    "text": "L'ensemble complet des données d'entraînement"
   },
   {
    "key": "b",
    "text": "Les exemples qui n'ont pas été tirés dans l'échantillon bootstrap utilisé pour entraîner cet arbre (environ 37% des données)"
   },
   {
    "key": "c",
    "text": "Les exemples mal classés par l'arbre"
   },
   {
    "key": "d",
    "text": "Les exemples utilisés pour le test final du modèle"
   }
  ],
  "ans": "b",
  "ansText": "Les exemples qui n'ont pas été tirés dans l'échantillon bootstrap utilisé pour entraîner cet arbre (environ 37% des données)",
  "id": "ensemble-methods-17",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "Pour un tirage avec remise de \\(m=10\\) exemples dans un ensemble de taille \\(m=10\\), quelle est la probabilité qu'un exemple donné ne soit jamais tiré, c'est-à-dire \\((1-1/m)^m\\) ? (donnez la valeur décimale)",
  "ans": 0.3487,
  "ansText": "0.3487",
  "tol": 0.01,
  "id": "ensemble-methods-18",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "Lorsque la taille de l'échantillon \\(m\\) devient grande, la probabilité qu'un exemple donné ne soit jamais tiré dans un échantillon bootstrap tend vers \\(e^{-1}\\approx 0.37\\). Quel est alors le pourcentage moyen de données effectivement utilisées pour entraîner chaque classifieur de base (en %) ?",
  "ans": 63.2,
  "ansText": "63.2",
  "tol": 1.0,
  "id": "ensemble-methods-19",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "À quoi servent principalement les données OOB dans la procédure de bagging ?",
  "opts": [
   {
    "key": "a",
    "text": "À entraîner directement le classifieur de base"
   },
   {
    "key": "b",
    "text": "À valider le modèle et régler ses hyperparamètres en estimant sa capacité de généralisation"
   },
   {
    "key": "c",
    "text": "À initialiser les poids du boosting"
   },
   {
    "key": "d",
    "text": "À normaliser les caractéristiques avant apprentissage"
   }
  ],
  "ans": "b",
  "ansText": "À valider le modèle et régler ses hyperparamètres en estimant sa capacité de généralisation",
  "id": "ensemble-methods-20",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle est la différence fondamentale d'approche entre bagging et boosting ?",
  "opts": [
   {
    "key": "a",
    "text": "Le bagging combine séquentiellement des apprenants faibles alors que le boosting combine en parallèle des apprenants forts"
   },
   {
    "key": "b",
    "text": "Le bagging combine en parallèle des apprenants forts appris sur des échantillons bootstrap indépendants, tandis que le boosting combine séquentiellement des apprenants faibles, chacun corrigeant les erreurs du précédent"
   },
   {
    "key": "c",
    "text": "Les deux méthodes utilisent exactement la même procédure de pondération des exemples"
   },
   {
    "key": "d",
    "text": "Le bagging nécessite un méta-modèle alors que le boosting n'en nécessite pas"
   }
  ],
  "ans": "b",
  "ansText": "Le bagging combine en parallèle des apprenants forts appris sur des échantillons bootstrap indépendants, tandis que le boosting combine séquentiellement des apprenants faibles, chacun corrigeant les erreurs du précédent",
  "id": "ensemble-methods-21",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Une classe de concepts \\(C\\) est dite (fortement) PAC-apprenable si, pour tout \\(\\varepsilon>0\\) et \\(\\delta>0\\), il existe un algorithme produisant une hypothèse \\(h_S\\) telle que, pour une taille d'échantillon suffisante :",
  "opts": [
   {
    "key": "a",
    "text": "\\(P_{S\\sim D^m}[R(h_S)\\le \\varepsilon] \\ge 1-\\delta\\)"
   },
   {
    "key": "b",
    "text": "\\(P_{S\\sim D^m}\\left[R(h_S)\\le \\frac12-\\gamma\\right] \\ge 1-\\delta\\) pour un certain \\(\\gamma>0\\)"
   },
   {
    "key": "c",
    "text": "\\(R(h_S) = 0\\) pour tout échantillon \\(S\\)"
   },
   {
    "key": "d",
    "text": "\\(R(h_S)\\le \\varepsilon\\) quelle que soit la taille de l'échantillon"
   }
  ],
  "ans": "a",
  "ansText": "\\(P_{S\\sim D^m}[R(h_S)\\le \\varepsilon] \\ge 1-\\delta\\)",
  "id": "ensemble-methods-22",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Une classe de concepts est dite <em>faiblement</em> PAC-apprenable si l'on peut seulement garantir, pour un certain \\(\\gamma>0\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(R(h_S) \\le \\varepsilon\\) pour tout \\(\\varepsilon\\) arbitrairement petit"
   },
   {
    "key": "b",
    "text": "\\(P_{S\\sim D^m}\\left[R(h_S)\\le \\frac12-\\gamma\\right] \\ge 1-\\delta\\), c'est-à-dire une hypothèse à peine meilleure que le hasard"
   },
   {
    "key": "c",
    "text": "\\(R(h_S)=0\\) avec certitude"
   },
   {
    "key": "d",
    "text": "L'algorithme s'exécute en temps constant quelle que soit la taille de l'échantillon"
   }
  ],
  "ans": "b",
  "ansText": "\\(P_{S\\sim D^m}\\left[R(h_S)\\le \\frac12-\\gamma\\right] \\ge 1-\\delta\\), c'est-à-dire une hypothèse à peine meilleure que le hasard",
  "id": "ensemble-methods-23",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Lesquels des exemples suivants sont typiquement cités comme des apprenants faibles ?",
  "opts": [
   {
    "key": "a",
    "text": "Un réseau de neurones profond et très sur-paramétré"
   },
   {
    "key": "b",
    "text": "Des souches de décision (arbres de profondeur 1 ou 2), ou un SVM linéaire sur un problème non linéairement séparable"
   },
   {
    "key": "c",
    "text": "Une forêt aléatoire de 500 arbres"
   },
   {
    "key": "d",
    "text": "Un modèle de stacking à deux niveaux"
   }
  ],
  "ans": "b",
  "ansText": "Des souches de décision (arbres de profondeur 1 ou 2), ou un SVM linéaire sur un problème non linéairement séparable",
  "id": "ensemble-methods-24",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Dans l'algorithme Adaboost, quel est le poids initial \\(w_i^{(1)}\\) attribué à chaque exemple \\(i\\) parmi \\(m\\) exemples d'entraînement ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(w_i^{(1)} = 1\\)"
   },
   {
    "key": "b",
    "text": "\\(w_i^{(1)} = 1/m\\)"
   },
   {
    "key": "c",
    "text": "\\(w_i^{(1)}\\) est tiré aléatoirement entre 0 et 1"
   },
   {
    "key": "d",
    "text": "\\(w_i^{(1)} = 0\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(w_i^{(1)} = 1/m\\)",
  "id": "ensemble-methods-25",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Comment est calculée l'erreur pondérée \\(\\varepsilon_t\\) de l'hypothèse \\(h_t\\) au round \\(t\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varepsilon_t = \\frac{1}{m}\\sum_{i=1}^m 1_{\\{h_t(x_i)y_i<0\\}}\\), l'erreur non pondérée classique"
   },
   {
    "key": "b",
    "text": "\\(\\varepsilon_t = \\sum_{i=1}^m w_i^{(t)} 1_{\\{h_t(x_i)y_i<0\\}}\\), la somme des poids des exemples mal classés"
   },
   {
    "key": "c",
    "text": "\\(\\varepsilon_t\\) est toujours égale à \\(1/2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\varepsilon_t = \\max_i w_i^{(t)}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\varepsilon_t = \\sum_{i=1}^m w_i^{(t)} 1_{\\{h_t(x_i)y_i<0\\}}\\), la somme des poids des exemples mal classés",
  "id": "ensemble-methods-26",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "On considère un round d'Adaboost avec m=4 exemples, tous de poids initial égal à 0.25. L'hypothèse ht apprise à ce round classe correctement 3 exemples et se trompe sur exactement 1 exemple. Quelle est l'erreur pondérée εt ?",
  "ans": 0.25,
  "ansText": "0.25",
  "tol": 0.001,
  "id": "ensemble-methods-27",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(suite du scénario précédent, \\(\\varepsilon_t=0.25\\)) Calculez le poids \\(\\alpha_t = \\frac12\\ln\\left(\\frac{1-\\varepsilon_t}{\\varepsilon_t}\\right)\\) attribué à cette hypothèse.",
  "ans": 0.5493,
  "ansText": "0.5493",
  "tol": 0.01,
  "id": "ensemble-methods-28",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(même scénario, \\(\\varepsilon_t=0.25\\)) Calculez le facteur de normalisation \\(Z_t = 2\\sqrt{\\varepsilon_t(1-\\varepsilon_t)}\\).",
  "ans": 0.866,
  "ansText": "0.866",
  "tol": 0.01,
  "id": "ensemble-methods-29",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(même scénario) Après application de la règle de mise à jour et normalisation des poids, quel est le nouveau poids de l'unique exemple mal classé ?",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.01,
  "id": "ensemble-methods-30",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(même scénario) Quel est le nouveau poids normalisé de chacun des 3 exemples correctement classés ?",
  "ans": 0.1667,
  "ansText": "0.1667",
  "tol": 0.01,
  "id": "ensemble-methods-31",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "On considère maintenant un autre round d'Adaboost avec m=5 exemples, tous de poids initial égal à 0.2. L'hypothèse ht se trompe sur exactement 2 exemples parmi les 5. Quelle est l'erreur pondérée εt ?",
  "ans": 0.4,
  "ansText": "0.4",
  "tol": 0.001,
  "id": "ensemble-methods-32",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(suite, \\(\\varepsilon_t=0.4\\)) Calculez \\(\\alpha_t = \\frac12\\ln\\left(\\frac{1-\\varepsilon_t}{\\varepsilon_t}\\right)\\).",
  "ans": 0.2027,
  "ansText": "0.2027",
  "tol": 0.01,
  "id": "ensemble-methods-33",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "(même scénario) Après mise à jour et normalisation, quel est le nouveau poids de chacun des 2 exemples mal classés ?",
  "ans": 0.25,
  "ansText": "0.25",
  "tol": 0.01,
  "id": "ensemble-methods-34",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "Que vaut \\(\\alpha_t\\) lorsque \\(\\varepsilon_t=0.5\\), c'est-à-dire lorsque l'apprenant de base \\(h_t\\) ne fait pas mieux qu'un tirage aléatoire ?",
  "ans": 0.0,
  "ansText": "0.0",
  "tol": 0.001,
  "id": "ensemble-methods-35",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quel est l'effet de la règle de mise à jour des poids d'Adaboost sur les exemples mal classés par rapport à ceux bien classés ?",
  "opts": [
   {
    "key": "a",
    "text": "Le poids des exemples mal classés diminue et celui des exemples bien classés augmente"
   },
   {
    "key": "b",
    "text": "Le poids des exemples mal classés augmente et celui des exemples bien classés diminue"
   },
   {
    "key": "c",
    "text": "Tous les poids restent inchangés d'un round à l'autre"
   },
   {
    "key": "d",
    "text": "Seul le poids des exemples bien classés est modifié"
   }
  ],
  "ans": "b",
  "ansText": "Le poids des exemples mal classés augmente et celui des exemples bien classés diminue",
  "id": "ensemble-methods-36",
  "cat": "ensemble-methods"
 },
 {
  "type": "num",
  "q": "On combine 3 apprenants faibles de poids \\(\\alpha_1=0.2\\), \\(\\alpha_2=0.5\\) et \\(\\alpha_3=0.7\\). Pour un point \\(x\\), leurs prédictions sont \\(h_1(x)=-1\\), \\(h_2(x)=+1\\) et \\(h_3(x)=+1\\). Calculez la somme pondérée \\(\\sum_t \\alpha_t h_t(x)\\).",
  "ans": 1.0,
  "ansText": "1.0",
  "tol": 0.01,
  "id": "ensemble-methods-37",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "D'après le calcul précédent (somme pondérée égale à 1.0), quelle est la classe finale prédite pour \\(x\\) par \\(H_T\\), donnée par le signe de cette somme ?",
  "opts": [
   {
    "key": "a",
    "text": "-1"
   },
   {
    "key": "b",
    "text": "0"
   },
   {
    "key": "c",
    "text": "+1"
   },
   {
    "key": "d",
    "text": "La prédiction est indéterminée"
   }
  ],
  "ans": "c",
  "ansText": "+1",
  "id": "ensemble-methods-38",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "D'après la borne théorique établie pour Adaboost, si pour tout \\(t\\), \\(\\gamma \\le \\frac12-\\varepsilon_t\\), comment l'erreur empirique \\(R_S(H_T)\\) évolue-t-elle avec le nombre de rounds T ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle croît exponentiellement avec T"
   },
   {
    "key": "b",
    "text": "Elle décroît exponentiellement avec T, puisque \\(R_S(H_T)\\le \\exp(-2\\gamma^2 T)\\)"
   },
   {
    "key": "c",
    "text": "Elle reste constante quel que soit T"
   },
   {
    "key": "d",
    "text": "Elle décroît linéairement avec T"
   }
  ],
  "ans": "b",
  "ansText": "Elle décroît exponentiellement avec T, puisque \\(R_S(H_T)\\le \\exp(-2\\gamma^2 T)\\)",
  "id": "ensemble-methods-39",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quelle est la principale différence entre le stacking et les méthodes de bagging/boosting ?",
  "opts": [
   {
    "key": "a",
    "text": "Le stacking ne peut combiner que des modèles de même nature"
   },
   {
    "key": "b",
    "text": "Dans le stacking, des modèles potentiellement différents sont appris indépendamment sur les mêmes données, puis un méta-modèle apprend à les combiner (pas de pondération itérative)"
   },
   {
    "key": "c",
    "text": "Le stacking n'utilise jamais de méta-modèle"
   },
   {
    "key": "d",
    "text": "Le stacking nécessite toujours un tirage bootstrap comme le bagging"
   }
  ],
  "ans": "b",
  "ansText": "Dans le stacking, des modèles potentiellement différents sont appris indépendamment sur les mêmes données, puis un méta-modèle apprend à les combiner (pas de pondération itérative)",
  "id": "ensemble-methods-40",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Quelles sont les deux étapes principales de la procédure de stacking ?",
  "opts": [
   {
    "key": "a",
    "text": "Normaliser les données puis choisir un seul meilleur modèle"
   },
   {
    "key": "b",
    "text": "Apprendre un ensemble d'apprenants de base sur les données d'entraînement, puis utiliser leurs prédictions comme nouvelles features pour apprendre un méta-modèle"
   },
   {
    "key": "c",
    "text": "Apprendre le méta-modèle en premier, puis en déduire les apprenants de base"
   },
   {
    "key": "d",
    "text": "Effectuer un tirage bootstrap puis un vote majoritaire simple"
   }
  ],
  "ans": "b",
  "ansText": "Apprendre un ensemble d'apprenants de base sur les données d'entraînement, puis utiliser leurs prédictions comme nouvelles features pour apprendre un méta-modèle",
  "id": "ensemble-methods-41",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Si les sous-modèles sont notés \\(h_1,\\ldots,h_T\\) et travaillent avec les features initiales \\(x\\), avec quelles features travaille le méta-modèle du stacking ?",
  "opts": [
   {
    "key": "a",
    "text": "Les mêmes features \\(x\\) que les sous-modèles"
   },
   {
    "key": "b",
    "text": "Les prédictions des sous-modèles, \\((h_1(x),\\ldots,h_T(x))\\)"
   },
   {
    "key": "c",
    "text": "Uniquement la variable cible \\(y\\)"
   },
   {
    "key": "d",
    "text": "Une combinaison aléatoire des features initiales"
   }
  ],
  "ans": "b",
  "ansText": "Les prédictions des sous-modèles, \\((h_1(x),\\ldots,h_T(x))\\)",
  "id": "ensemble-methods-42",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Pourquoi est-il déconseillé d'entraîner le méta-modèle directement sur les mêmes données que celles utilisées pour apprendre les sous-modèles ?",
  "opts": [
   {
    "key": "a",
    "text": "Cela est techniquement impossible"
   },
   {
    "key": "b",
    "text": "Cela augmente le risque de sur-apprentissage ; on préfère utiliser des prédictions obtenues sur des données de validation"
   },
   {
    "key": "c",
    "text": "Cela ralentit exagérément l'apprentissage"
   },
   {
    "key": "d",
    "text": "Cela empêche toute interprétation du modèle final"
   }
  ],
  "ans": "b",
  "ansText": "Cela augmente le risque de sur-apprentissage ; on préfère utiliser des prédictions obtenues sur des données de validation",
  "id": "ensemble-methods-43",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Le Super Learner est présenté comme une généralisation du stacking utilisant quelle procédure ?",
  "opts": [
   {
    "key": "a",
    "text": "Un simple tirage bootstrap comme dans le bagging"
   },
   {
    "key": "b",
    "text": "Une procédure de validation croisée à k plis (k-fold cross-validation)"
   },
   {
    "key": "c",
    "text": "Un unique découpage train/test"
   },
   {
    "key": "d",
    "text": "Une pondération de type Adaboost"
   }
  ],
  "ans": "b",
  "ansText": "Une procédure de validation croisée à k plis (k-fold cross-validation)",
  "id": "ensemble-methods-44",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Dans la procédure du Super Learner à k plis, comment les prédictions utilisées pour entraîner le méta-modèle sont-elles obtenues ?",
  "opts": [
   {
    "key": "a",
    "text": "En prédisant directement sur les données d'entraînement elles-mêmes"
   },
   {
    "key": "b",
    "text": "En entraînant chaque apprenant de base sur k-1 plis et en prédisant sur le pli restant, ceci étant répété pour chaque pli"
   },
   {
    "key": "c",
    "text": "En utilisant uniquement les données de test finales"
   },
   {
    "key": "d",
    "text": "En moyennant les hyperparamètres de chaque modèle"
   }
  ],
  "ans": "b",
  "ansText": "En entraînant chaque apprenant de base sur k-1 plis et en prédisant sur le pli restant, ceci étant répété pour chaque pli",
  "id": "ensemble-methods-45",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Le stacking permet-il de combiner des modèles de nature très différente (par exemple un SVM et un arbre de décision) ?",
  "opts": [
   {
    "key": "a",
    "text": "Non, tous les modèles combinés doivent être identiques"
   },
   {
    "key": "b",
    "text": "Oui, car les modèles de base sont appris indépendamment sur les mêmes données avant d'être combinés par le méta-modèle"
   },
   {
    "key": "c",
    "text": "Non, seul le bagging permet cela"
   },
   {
    "key": "d",
    "text": "Oui, mais uniquement si les modèles partagent exactement la même architecture"
   }
  ],
  "ans": "b",
  "ansText": "Oui, car les modèles de base sont appris indépendamment sur les mêmes données avant d'être combinés par le méta-modèle",
  "id": "ensemble-methods-46",
  "cat": "ensemble-methods"
 },
 {
  "type": "qcm",
  "q": "Contrairement à Adaboost, le gradient boosting effectue une optimisation dans...",
  "opts": [
   {
    "key": "a",
    "text": "l'espace des paramètres du modèle"
   },
   {
    "key": "b",
    "text": "l'espace des fonctions"
   },
   {
    "key": "c",
    "text": "l'espace des hyperparamètres"
   },
   {
    "key": "d",
    "text": "l'espace des caractéristiques (features)"
   }
  ],
  "ans": "b",
  "ansText": "l'espace des fonctions",
  "id": "gradient-boosting-01",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Quelle est la règle de mise à jour du modèle combiné \\(H_t\\) à l'itération \\(t\\) dans l'algorithme de gradient boosting, à partir du modèle précédent \\(H_{t-1}\\) et du nouvel apprenant faible \\(h_t\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_t = H_{t-1} - \\alpha_t h_t\\)"
   },
   {
    "key": "b",
    "text": "\\(H_t = \\alpha_t H_{t-1} + h_t\\)"
   },
   {
    "key": "c",
    "text": "\\(H_t = H_{t-1} + \\alpha_t h_t\\)"
   },
   {
    "key": "d",
    "text": "\\(H_t = H_{t-1} \\cdot \\alpha_t h_t\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(H_t = H_{t-1} + \\alpha_t h_t\\)",
  "id": "gradient-boosting-02",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Comment sont définis les pseudo-résidus \\(\\tilde{y}_i\\) à l'itération \\(t\\) de l'algorithme de gradient boosting, en fonction de la perte \\(\\ell\\) et du modèle courant \\(H_{t-1}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\tilde{y}_i = y_i - H_{t-1}(x_i)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\tilde{y}_i = -\\dfrac{\\partial \\ell(y_i, H_{t-1}(x_i))}{\\partial H_{t-1}(x_i)}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\tilde{y}_i = \\dfrac{\\partial \\ell(y_i, H_{t-1}(x_i))}{\\partial y_i}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tilde{y}_i = H_{t-1}(x_i) - \\alpha_t h_t(x_i)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\tilde{y}_i = -\\dfrac{\\partial \\ell(y_i, H_{t-1}(x_i))}{\\partial H_{t-1}(x_i)}\\)",
  "id": "gradient-boosting-03",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Pour la perte quadratique \\(\\ell(y, H(x)) = (y - H(x))^2\\), à quoi est égal le pseudo-résidu \\(\\tilde{y} = -\\dfrac{\\partial \\ell(y, H_{t-1}(x))}{\\partial H_{t-1}(x)}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y - H_{t-1}(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(2\\big(y - H_{t-1}(x)\\big)\\)"
   },
   {
    "key": "c",
    "text": "\\(-2\\big(y - H_{t-1}(x)\\big)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\big(y - H_{t-1}(x)\\big)^2\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(2\\big(y - H_{t-1}(x)\\big)\\)",
  "id": "gradient-boosting-04",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "À chaque itération \\(t\\), comment le nouvel apprenant faible \\(h_t\\) est-il appris dans l'algorithme du gradient boosting ?",
  "opts": [
   {
    "key": "a",
    "text": "en maximisant la vraisemblance des étiquettes \\(y_i\\)"
   },
   {
    "key": "b",
    "text": "en minimisant \\(\\sum_{i=1}^m (\\tilde{y}_i - h(x_i))^2\\), c'est-à-dire en ajustant \\(h\\) aux pseudo-résidus"
   },
   {
    "key": "c",
    "text": "en minimisant directement la perte originale \\(\\ell(y_i, H_{t-1}(x_i))\\) par rapport aux paramètres de \\(H_{t-1}\\)"
   },
   {
    "key": "d",
    "text": "en tirant \\(h\\) aléatoirement puis en conservant le meilleur candidat parmi plusieurs essais"
   }
  ],
  "ans": "b",
  "ansText": "en minimisant \\(\\sum_{i=1}^m (\\tilde{y}_i - h(x_i))^2\\), c'est-à-dire en ajustant \\(h\\) aux pseudo-résidus",
  "id": "gradient-boosting-05",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Une fois les pseudo-résidus ajustés par l'apprenant faible \\(h_{a_t}\\), comment le poids \\(\\alpha_t\\) de ce dernier est-il déterminé dans l'algorithme ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\alpha_t\\) est fixé arbitrairement à 1 pour tous les itérations"
   },
   {
    "key": "b",
    "text": "\\(\\alpha_t = \\arg\\min_{\\alpha \\in \\mathbb{R}^+} \\sum_{i=1}^m \\ell\\big(y_i, H_{t-1}(x_i) + \\alpha h_{a_t}(x_i)\\big)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\alpha_t\\) est tiré aléatoirement dans \\([0,1]\\)"
   },
   {
    "key": "d",
    "text": "\\(\\alpha_t\\) est égal à l'inverse du nombre d'itérations \\(T\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\alpha_t = \\arg\\min_{\\alpha \\in \\mathbb{R}^+} \\sum_{i=1}^m \\ell\\big(y_i, H_{t-1}(x_i) + \\alpha h_{a_t}(x_i)\\big)\\)",
  "id": "gradient-boosting-06",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Quelle est une différence essentielle entre Adaboost et le gradient boosting, d'après le texte ?",
  "opts": [
   {
    "key": "a",
    "text": "Adaboost ne peut être utilisé qu'en régression alors que le gradient boosting est réservé à la classification"
   },
   {
    "key": "b",
    "text": "Adaboost est basé sur la perte exponentielle alors que le gradient boosting permet d'utiliser des pertes personnalisées adaptées à la tâche"
   },
   {
    "key": "c",
    "text": "le gradient boosting n'utilise jamais d'arbres de décision, contrairement à Adaboost"
   },
   {
    "key": "d",
    "text": "Adaboost optimise dans l'espace des fonctions alors que le gradient boosting optimise dans l'espace des paramètres"
   }
  ],
  "ans": "b",
  "ansText": "Adaboost est basé sur la perte exponentielle alors que le gradient boosting permet d'utiliser des pertes personnalisées adaptées à la tâche",
  "id": "gradient-boosting-07",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Dans la pratique (par exemple avec des bibliothèques comme XGBoost), quel type d'apprenant faible est le plus couramment utilisé dans le gradient boosting ?",
  "opts": [
   {
    "key": "a",
    "text": "des réseaux de neurones profonds"
   },
   {
    "key": "b",
    "text": "des arbres de décision peu profonds, tels que des souches de décision (<em>decision stumps</em>)"
   },
   {
    "key": "c",
    "text": "des machines à vecteurs de support linéaires"
   },
   {
    "key": "d",
    "text": "des modèles des k plus proches voisins"
   }
  ],
  "ans": "b",
  "ansText": "des arbres de décision peu profonds, tels que des souches de décision (<em>decision stumps</em>)",
  "id": "gradient-boosting-08",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Le texte établit un parallèle entre l'algorithme de gradient boosting et un algorithme de descente de gradient particulier. Lequel ?",
  "opts": [
   {
    "key": "a",
    "text": "la descente de gradient stochastique à pas fixe"
   },
   {
    "key": "b",
    "text": "la descente de gradient à pas optimal, aussi appelée descente la plus profonde (<em>steepest descent</em>)"
   },
   {
    "key": "c",
    "text": "l'algorithme de Newton pur, sans aucune approximation"
   },
   {
    "key": "d",
    "text": "l'algorithme des k-moyennes"
   }
  ],
  "ans": "b",
  "ansText": "la descente de gradient à pas optimal, aussi appelée descente la plus profonde (<em>steepest descent</em>)",
  "id": "gradient-boosting-09",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "D'après le texte, quelle précaution faut-il prendre concernant le choix de la fonction de perte \\(\\ell\\) dans le gradient boosting ?",
  "opts": [
   {
    "key": "a",
    "text": "la perte utilisée pour ajuster les pseudo-résidus doit être la même que celle utilisée pour déterminer le poids \\(\\alpha_t\\) de l'apprenant faible"
   },
   {
    "key": "b",
    "text": "il faut toujours utiliser la perte exponentielle, quelle que soit la tâche considérée"
   },
   {
    "key": "c",
    "text": "la perte utilisée doit obligatoirement être non convexe"
   },
   {
    "key": "d",
    "text": "la perte utilisée pour ajuster les résidus n'a aucune importance et peut être choisie indépendamment de celle utilisée pour \\(\\alpha_t\\)"
   }
  ],
  "ans": "a",
  "ansText": "la perte utilisée pour ajuster les pseudo-résidus doit être la même que celle utilisée pour déterminer le poids \\(\\alpha_t\\) de l'apprenant faible",
  "id": "gradient-boosting-10",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "En reformulant la perte logistique à l'aide de la fonction sigmoïde \\(\\sigma\\), afin d'obtenir des probabilités d'appartenance à une classe, le pseudo-résidu s'écrit :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\tilde{y} = y - \\sigma(H_{t-1}(x))\\)"
   },
   {
    "key": "b",
    "text": "\\(\\tilde{y} = \\sigma(H_{t-1}(x)) - y\\)"
   },
   {
    "key": "c",
    "text": "\\(\\tilde{y} = y \\cdot \\sigma(H_{t-1}(x))\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tilde{y} = 2\\big(y - \\sigma(H_{t-1}(x))\\big)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\tilde{y} = y - \\sigma(H_{t-1}(x))\\)",
  "id": "gradient-boosting-11",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "On utilise la perte quadratique \\(\\ell(y, H(x)) = (y - H(x))^2\\), pour laquelle le pseudo-résidu vaut \\(\\tilde{y} = 2\\big(y - H_{t-1}(x)\\big)\\). Pour un exemple tel que \\(y_i = 5\\) et \\(H_{t-1}(x_i) = 3.2\\), calculez le pseudo-résidu \\(\\tilde{y}_i\\).",
  "ans": 3.6,
  "ansText": "3.6",
  "tol": 0.01,
  "id": "gradient-boosting-12",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "Toujours avec la perte quadratique et le pseudo-résidu \\(\\tilde{y} = 2\\big(y - H_{t-1}(x)\\big)\\), calculez le pseudo-résidu pour un exemple tel que \\(y_i = 10\\) et \\(H_{t-1}(x_i) = 12.5\\).",
  "ans": -5.0,
  "ansText": "-5.0",
  "tol": 0.01,
  "id": "gradient-boosting-13",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "Pour un problème de régression avec la perte quadratique \\(\\ell(y,\\rho) = \\sum_i (y_i - \\rho)^2\\), l'hypothèse initiale \\(H_0\\) est le \\(\\rho\\) qui minimise cette somme, c'est-à-dire la moyenne des \\(y_i\\). Sachant que l'ensemble d'apprentissage contient les valeurs \\(y = \\{4, 6, 8, 10\\}\\), calculez \\(H_0\\).",
  "ans": 7.0,
  "ansText": "7.0",
  "tol": 0.01,
  "id": "gradient-boosting-14",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "Après avoir ajusté l'apprenant faible \\(h_t\\) sur les pseudo-résidus, on applique la mise à jour \\(H_t(x) = H_{t-1}(x) + \\alpha_t h_t(x)\\). Sachant que \\(H_{t-1}(x) = 4.0\\), que le taux d'apprentissage (poids de l'apprenant faible) vaut \\(\\alpha_t = 0.1\\) et que la sortie de l'apprenant faible est \\(h_t(x) = 3.6\\), calculez \\(H_t(x)\\).",
  "ans": 4.36,
  "ansText": "4.36",
  "tol": 0.01,
  "id": "gradient-boosting-15",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "En utilisant la même règle de mise à jour \\(H_t(x) = H_{t-1}(x) + \\alpha_t h_t(x)\\), calculez \\(H_t(x)\\) sachant que \\(H_{t-1}(x) = 7.5\\), que le taux d'apprentissage vaut \\(\\alpha_t = 0.05\\) et que l'apprenant faible prédit \\(h_t(x) = -5\\) pour cet exemple.",
  "ans": 7.25,
  "ansText": "7.25",
  "tol": 0.01,
  "id": "gradient-boosting-16",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "XGBoost approxime la fonction de perte à optimiser à chaque itération à l'aide d'un développement de Taylor...",
  "opts": [
   {
    "key": "a",
    "text": "du premier ordre uniquement, en utilisant seulement le gradient"
   },
   {
    "key": "b",
    "text": "du second ordre, en utilisant à la fois le gradient \\(g\\) et la dérivée seconde (hessienne) \\(f\\) de la perte"
   },
   {
    "key": "c",
    "text": "du troisième ordre"
   },
   {
    "key": "d",
    "text": "XGBoost n'utilise aucune approximation et optimise la perte exacte"
   }
  ],
  "ans": "b",
  "ansText": "du second ordre, en utilisant à la fois le gradient \\(g\\) et la dérivée seconde (hessienne) \\(f\\) de la perte",
  "id": "gradient-boosting-17",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Dans l'objectif régularisé de XGBoost, \\(\\min \\sum_{i=1}^m \\ell(y_i, \\hat{y}_i) + \\beta L + \\dfrac{\\lambda}{2}\\sum_{j=1}^L (f_t^{(j)})^2\\), à quoi servent les deux termes de régularisation \\(\\beta L\\) et \\(\\dfrac{\\lambda}{2}\\sum_j (f_t^{(j)})^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\beta\\) contrôle le taux d'apprentissage global et \\(\\lambda\\) le nombre d'itérations \\(T\\)"
   },
   {
    "key": "b",
    "text": "\\(\\beta L\\) contrôle le nombre de feuilles \\(L\\) de l'arbre, et le terme en \\(\\lambda\\) pénalise l'amplitude des poids des feuilles"
   },
   {
    "key": "c",
    "text": "\\(\\beta\\) et \\(\\lambda\\) contrôlent tous deux uniquement la profondeur maximale des arbres"
   },
   {
    "key": "d",
    "text": "\\(\\beta\\) et \\(\\lambda\\) sont des taux d'apprentissage appliqués séparément à chaque arbre de l'ensemble"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\beta L\\) contrôle le nombre de feuilles \\(L\\) de l'arbre, et le terme en \\(\\lambda\\) pénalise l'amplitude des poids des feuilles",
  "id": "gradient-boosting-18",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Dans XGBoost, en notant \\(g\\) et \\(f\\) respectivement les dérivées première et seconde de la perte \\(\\ell\\) par rapport à la prédiction \\(\\hat{y}^{(t-1)}\\), quelle est l'expression du poids optimal \\(h_t^{(j)}\\) d'une feuille \\(j\\) (dont l'ensemble des indices des exemples est \\(I_j\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(h_t^{(j)} = \\dfrac{\\sum_{i \\in I_j} g(x_i)}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\)"
   },
   {
    "key": "b",
    "text": "\\(h_t^{(j)} = -\\dfrac{\\sum_{i \\in I_j} g(x_i)}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\)"
   },
   {
    "key": "c",
    "text": "\\(h_t^{(j)} = -\\dfrac{\\sum_{i \\in I_j} f(x_i)}{\\sum_{i \\in I_j} g(x_i) + \\lambda}\\)"
   },
   {
    "key": "d",
    "text": "\\(h_t^{(j)} = \\sum_{i \\in I_j} g(x_i) - \\lambda\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(h_t^{(j)} = -\\dfrac{\\sum_{i \\in I_j} g(x_i)}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\)",
  "id": "gradient-boosting-19",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Pour la perte quadratique \\(\\ell(\\hat{y}^{(t-1)}) = \\tfrac{1}{2}(y - \\hat{y}^{(t-1)})^2\\), lorsque l'on apprend le tout premier arbre en supposant \\(\\hat{y}_i^{(0)} = 0\\) pour tout \\(i\\), le poids optimal d'une feuille \\(j\\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "la médiane des valeurs \\(y_i\\) des exemples tombant dans la feuille"
   },
   {
    "key": "b",
    "text": "la moyenne des valeurs \\(y_i\\) des exemples tombant dans la feuille"
   },
   {
    "key": "c",
    "text": "la somme des valeurs \\(y_i\\) divisée par \\(\\lambda\\) uniquement"
   },
   {
    "key": "d",
    "text": "zéro, car aucune information n'est encore disponible au premier arbre"
   }
  ],
  "ans": "b",
  "ansText": "la moyenne des valeurs \\(y_i\\) des exemples tombant dans la feuille",
  "id": "gradient-boosting-20",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Toujours pour la perte quadratique, pour les arbres appris aux itérations suivantes (\\(t \\geq 2\\)), le poids optimal d'une feuille devient (à la régularisation près) :",
  "opts": [
   {
    "key": "a",
    "text": "la moyenne des pseudo-résidus des exemples tombant dans la feuille"
   },
   {
    "key": "b",
    "text": "la moyenne des valeurs \\(y_i\\) d'origine, comme pour le premier arbre"
   },
   {
    "key": "c",
    "text": "le maximum des pseudo-résidus de la feuille"
   },
   {
    "key": "d",
    "text": "toujours zéro, quel que soit le nombre d'itérations"
   }
  ],
  "ans": "a",
  "ansText": "la moyenne des pseudo-résidus des exemples tombant dans la feuille",
  "id": "gradient-boosting-21",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "La quantité \\(V_j^\\star = -\\dfrac{1}{2}\\dfrac{\\big(\\sum_{i \\in I_j} g(x_i)\\big)^2}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\), utilisée par XGBoost pour évaluer la qualité d'une feuille \\(j\\), peut être vue comme :",
  "opts": [
   {
    "key": "a",
    "text": "une formule généralisant l'indice de Gini (mesure de pureté) à n'importe quelle fonction de perte"
   },
   {
    "key": "b",
    "text": "une approximation de l'erreur quadratique moyenne uniquement, valable pour la régression"
   },
   {
    "key": "c",
    "text": "le taux d'apprentissage optimal à utiliser pour l'arbre suivant"
   },
   {
    "key": "d",
    "text": "la profondeur optimale à donner à l'arbre"
   }
  ],
  "ans": "a",
  "ansText": "une formule généralisant l'indice de Gini (mesure de pureté) à n'importe quelle fonction de perte",
  "id": "gradient-boosting-22",
  "cat": "gradient-boosting"
 },
 {
  "type": "qcm",
  "q": "Dans XGBoost, le critère de split (gain associé à la séparation d'une feuille \\(I\\) en deux feuilles \\(I_L\\) et \\(I_R\\)) est construit à partir des quantités \\(V_{I_L}^\\star\\), \\(V_{I_R}^\\star\\) et \\(V_I^\\star\\). Quelle affirmation décrit correctement ce gain ?",
  "opts": [
   {
    "key": "a",
    "text": "le gain est égal à \\(V_{I_L}^\\star + V_{I_R}^\\star\\) sans terme de pénalité"
   },
   {
    "key": "b",
    "text": "le gain compare la somme des qualités des deux feuilles filles \\(I_L\\) et \\(I_R\\) à celle de la feuille mère \\(I\\), moins une pénalité \\(\\beta\\) liée à l'ajout d'une feuille supplémentaire"
   },
   {
    "key": "c",
    "text": "le gain ne dépend que du nombre d'exemples dans \\(I_L\\) et \\(I_R\\), pas des gradients \\(g\\) et \\(f\\)"
   },
   {
    "key": "d",
    "text": "le gain est toujours négatif par construction et ne sert donc jamais à décider un split"
   }
  ],
  "ans": "b",
  "ansText": "le gain compare la somme des qualités des deux feuilles filles \\(I_L\\) et \\(I_R\\) à celle de la feuille mère \\(I\\), moins une pénalité \\(\\beta\\) liée à l'ajout d'une feuille supplémentaire",
  "id": "gradient-boosting-23",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "On apprend le tout premier arbre avec la perte quadratique \\(\\ell(\\hat{y}^{(t-1)}) = \\tfrac{1}{2}(y-\\hat{y}^{(t-1)})^2\\) et \\(\\hat{y}_i^{(0)} = 0\\) pour tout \\(i\\). Le poids optimal d'une feuille est alors \\(h_t^{(j)} = \\dfrac{\\sum_{i \\in I_j} y_i}{\\lambda + |I_j|}\\). Une feuille contient 3 exemples de valeurs \\(y = \\{2, 4, 6\\}\\), avec un paramètre de régularisation \\(\\lambda = 1\\). Calculez le poids optimal de cette feuille.",
  "ans": 3.0,
  "ansText": "3.0",
  "tol": 0.01,
  "id": "gradient-boosting-24",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "À une itération ultérieure, le poids optimal d'une feuille contenant les pseudo-résidus \\(r_i = y_i - \\hat{y}_i^{(t-1)}\\) est donné par \\(h_t^{(j)} = \\dfrac{\\sum_{i \\in I_j} r_i}{\\lambda + |I_j|}\\). Une feuille contient les pseudo-résidus \\(-2\\), \\(1\\) et \\(3\\), avec \\(\\lambda = 2\\). Calculez le poids optimal de cette feuille.",
  "ans": 0.4,
  "ansText": "0.4",
  "tol": 0.01,
  "id": "gradient-boosting-25",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "Dans le cas général (perte \\(\\ell\\) quelconque), le poids optimal d'une feuille \\(j\\) est \\(h_t^{(j)} = -\\dfrac{\\sum_{i \\in I_j} g(x_i)}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\). Pour une feuille telle que \\(\\sum_{i \\in I_j} g(x_i) = -6\\), \\(\\sum_{i \\in I_j} f(x_i) = 4\\) et \\(\\lambda = 2\\), calculez le poids optimal \\(h_t^{(j)}\\) de cette feuille.",
  "ans": 1.0,
  "ansText": "1.0",
  "tol": 0.01,
  "id": "gradient-boosting-26",
  "cat": "gradient-boosting"
 },
 {
  "type": "num",
  "q": "Pour cette même feuille (\\(\\sum_{i \\in I_j} g(x_i) = -6\\), \\(\\sum_{i \\in I_j} f(x_i) = 4\\), \\(\\lambda = 2\\)), calculez la valeur optimale de la perte associée à cette feuille, donnée par \\(V_j^\\star = -\\dfrac{1}{2}\\dfrac{\\big(\\sum_{i \\in I_j} g(x_i)\\big)^2}{\\sum_{i \\in I_j} f(x_i) + \\lambda}\\).",
  "ans": -3.0,
  "ansText": "-3.0",
  "tol": 0.01,
  "id": "gradient-boosting-27",
  "cat": "gradient-boosting"
 }
];
