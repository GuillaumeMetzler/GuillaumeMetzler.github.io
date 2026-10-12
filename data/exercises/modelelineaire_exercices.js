/* Banque d'exercices interactifs - genere automatiquement, ne pas editer
   a la main : regenerer depuis build_modelelineaire_full.py. NB: on utilise
   'var' (et non 'const') pour que ces variables soient bien attachees a
   l'objet window et donc lisibles depuis exercises.js charge dans un
   <script> separe. */
var EXERCISES_CATEGORIES = [
 {
  "slug": "derivation-fonctions",
  "label": "Dérivation des fonctions à plusieurs variables"
 },
 {
  "slug": "extrema-convexite",
  "label": "Recherche d'extrema & fonctions convexes"
 },
 {
  "slug": "mlg-simple",
  "label": "Modèle linéaire gaussien simple"
 },
 {
  "slug": "vecteur-gaussien",
  "label": "Vecteur gaussien & géométrie des modèles linéaires"
 },
 {
  "slug": "mlg-multiple",
  "label": "Modèle linéaire gaussien multiple"
 },
 {
  "slug": "anova",
  "label": "ANOVA : analyse de variance"
 },
 {
  "slug": "regression-r",
  "label": "Régression linéaire en pratique (R)"
 },
 {
  "slug": "generalites-mlg",
  "label": "Généralités sur les modèles linéaires généralisés"
 },
 {
  "slug": "regression-logistique",
  "label": "Régression logistique"
 },
 {
  "slug": "lois-probabilite",
  "label": "Lois de probabilité usuelles"
 }
];
var EXERCISES_DATA = [
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction définie sur un domaine \\(D\\) de \\(\\mathbb{R}^n\\) et \\(x=(x_1,\\dots,x_n)\\in D\\). Comment définit-on la fonction partielle \\(f_{x_i}\\) associée à \\(x\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f_{x_i}(u) = f(x_1,\\dots,x_{i-1},u,x_{i+1},\\dots,x_n)\\), toutes les variables sauf la \\(i\\)-ème sont fixées"
   },
   {
    "key": "b",
    "text": "\\(f_{x_i}(u) = f(u,u,\\dots,u)\\), on remplace toutes les variables par \\(u\\)"
   },
   {
    "key": "c",
    "text": "\\(f_{x_i}(u) = u \\cdot f(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(f_{x_i}(u) = \\dfrac{f(x+u\\,e_i) - f(x)}{u}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f_{x_i}(u) = f(x_1,\\dots,x_{i-1},u,x_{i+1},\\dots,x_n)\\), toutes les variables sauf la \\(i\\)-ème sont fixées",
  "id": "derivation-fonctions-01",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "La dérivée partielle \\(\\dfrac{\\partial f}{\\partial x_i}(x)\\) est définie par la limite :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\displaystyle \\lim_{h\\to 0} \\frac{f(x+h e_i) - f(x)}{h}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\displaystyle \\lim_{h\\to 0} \\frac{f(x+h) - f(x)}{\\|h\\|}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\displaystyle \\lim_{h\\to 0} \\frac{f(x+h e_i) - f(x)}{\\|h\\|}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\displaystyle \\lim_{h\\to 0} \\frac{f(x) - f(x+h e_i)}{h}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\displaystyle \\lim_{h\\to 0} \\frac{f(x+h e_i) - f(x)}{h}\\)",
  "id": "derivation-fonctions-02",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit la fonction affine \\(f(x,y,z) = 2x - 3y + 5z + 7\\), définie de \\(\\mathbb{R}^3\\) dans \\(\\mathbb{R}\\). Calculer \\(\\dfrac{\\partial f}{\\partial y}(x,y,z)\\) (valeur constante).",
  "ans": -3,
  "ansText": "-3",
  "tol": 0.001,
  "id": "derivation-fonctions-03",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) de plusieurs variables est dite de classe \\(\\mathcal{C}^1\\) sur \\(D\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "toutes ses dérivées partielles d'ordre 1 existent et sont continues sur \\(D\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est simplement continue sur \\(D\\)"
   },
   {
    "key": "c",
    "text": "le gradient de \\(f\\) est nul en tout point de \\(D\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) admet des dérivées partielles d'ordre 2 sur \\(D\\)"
   }
  ],
  "ans": "a",
  "ansText": "toutes ses dérivées partielles d'ordre 1 existent et sont continues sur \\(D\\)",
  "id": "derivation-fonctions-04",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Le gradient \\(\\nabla f(a)\\) d'une fonction \\(f : D \\subset \\mathbb{R}^n \\to \\mathbb{R}\\) admettant des dérivées partielles d'ordre 1 en \\(a\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "le vecteur de \\(\\mathbb{R}^n\\) formé des dérivées partielles \\(\\left(\\frac{\\partial f}{\\partial x_1}(a),\\dots,\\frac{\\partial f}{\\partial x_n}(a)\\right)\\)"
   },
   {
    "key": "b",
    "text": "la matrice des dérivées partielles de chaque composante de \\(f\\) par rapport à chaque variable"
   },
   {
    "key": "c",
    "text": "le nombre réel égal à la somme des dérivées partielles de \\(f\\) en \\(a\\)"
   },
   {
    "key": "d",
    "text": "le vecteur des dérivées secondes de \\(f\\) en \\(a\\)"
   }
  ],
  "ans": "a",
  "ansText": "le vecteur de \\(\\mathbb{R}^n\\) formé des dérivées partielles \\(\\left(\\frac{\\partial f}{\\partial x_1}(a),\\dots,\\frac{\\partial f}{\\partial x_n}(a)\\right)\\)",
  "id": "derivation-fonctions-05",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y,z) = 3x^2yz - 2x^3y^2z^4 + e^x\\). Calculer \\(\\dfrac{\\partial f}{\\partial y}(1,1,1)\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.001,
  "id": "derivation-fonctions-06",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x,y,z) = 3x^2yz - 2x^3y^2z^4 + e^x\\), calculer \\(\\dfrac{\\partial f}{\\partial z}(1,1,1)\\).",
  "ans": -5,
  "ansText": "-5",
  "tol": 0.001,
  "id": "derivation-fonctions-07",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Toujours pour \\(f(x,y,z) = 3x^2yz - 2x^3y^2z^4 + e^x\\), calculer \\(\\dfrac{\\partial f}{\\partial x}(1,1,1)\\).",
  "ans": 2.71828,
  "ansText": "\\(e \\approx 2{,}718\\)",
  "tol": 0.01,
  "id": "derivation-fonctions-08",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour une fonction à valeurs vectorielles \\(f : \\mathbb{R}^n \\to \\mathbb{R}^p\\) avec \\(p>1\\), la généralisation du gradient est appelée :",
  "opts": [
   {
    "key": "a",
    "text": "la matrice Jacobienne"
   },
   {
    "key": "b",
    "text": "la matrice Hessienne"
   },
   {
    "key": "c",
    "text": "la différentielle seconde"
   },
   {
    "key": "d",
    "text": "le Laplacien"
   }
  ],
  "ans": "a",
  "ansText": "la matrice Jacobienne",
  "id": "derivation-fonctions-09",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f = (f_1,\\dots,f_p) : D \\subset \\mathbb{R}^n \\to \\mathbb{R}^p\\), où chaque \\(f_j\\) admet des dérivées partielles d'ordre 1. La matrice Jacobienne \\(\\mathrm{Jac}_f(a)\\) est de taille et de coefficients :",
  "opts": [
   {
    "key": "a",
    "text": "\\(p \\times n\\), avec le coefficient ligne \\(j\\) colonne \\(i\\) égal à \\(\\frac{\\partial f_j}{\\partial x_i}(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(n \\times p\\), avec le coefficient ligne \\(i\\) colonne \\(j\\) égal à \\(\\frac{\\partial f_j}{\\partial x_i}(a)\\)"
   },
   {
    "key": "c",
    "text": "\\(n \\times n\\), avec le coefficient ligne \\(j\\) colonne \\(i\\) égal à \\(\\frac{\\partial f_j}{\\partial x_i}(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(p \\times n\\), avec le coefficient ligne \\(j\\) colonne \\(i\\) égal à \\(\\frac{\\partial f_i}{\\partial x_j}(a)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p \\times n\\), avec le coefficient ligne \\(j\\) colonne \\(i\\) égal à \\(\\frac{\\partial f_j}{\\partial x_i}(a)\\)",
  "id": "derivation-fonctions-10",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(A \\in \\mathbb{R}^{p\\times n}\\) et \\(f : \\mathbb{R}^n \\to \\mathbb{R}^p\\) l'application linéaire définie par \\(f(x) = Ax\\). La matrice Jacobienne de \\(f\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(A\\) elle-même"
   },
   {
    "key": "b",
    "text": "\\(A^\\top\\)"
   },
   {
    "key": "c",
    "text": "\\(A^{-1}\\) (lorsqu'elle existe)"
   },
   {
    "key": "d",
    "text": "la matrice identité"
   }
  ],
  "ans": "a",
  "ansText": "\\(A\\) elle-même",
  "id": "derivation-fonctions-11",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y,z) = (3xy,\\ 6xy,\\ -2yz)\\), de \\(\\mathbb{R}^3\\) dans \\(\\mathbb{R}^3\\). Calculer \\(\\dfrac{\\partial f_1}{\\partial x}\\) au point \\((x,y,z)=(1,2,3)\\) (premier coefficient de la Jacobienne).",
  "ans": 6,
  "ansText": "6",
  "tol": 0.001,
  "id": "derivation-fonctions-12",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x,y,z) = (3xy,\\ 6xy,\\ -2yz)\\), calculer \\(\\dfrac{\\partial f_3}{\\partial z}\\) au point \\((1,2,3)\\).",
  "ans": -4,
  "ansText": "-4",
  "tol": 0.001,
  "id": "derivation-fonctions-13",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) définie sur \\(D \\subset \\mathbb{R}^n\\), \\(x \\in D\\) et \\(d\\) un vecteur unitaire de \\(\\mathbb{R}^n\\). On pose \\(\\varphi(t) = f(x+td)\\). La dérivée directionnelle \\(D_d f(x)\\) est égale à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\varphi'(0)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\varphi'(1)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\varphi(0)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\displaystyle \\lim_{t\\to\\infty} \\varphi(t)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\varphi'(0)\\)",
  "id": "derivation-fonctions-14",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "(Proposition) Si \\(f : D \\to \\mathbb{R}\\) est de classe \\(\\mathcal{C}^1\\) et \\(d\\) est un vecteur unitaire de \\(\\mathbb{R}^n\\), alors la dérivée directionnelle de \\(f\\) en \\(x\\) dans la direction \\(d\\) vaut :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle \\nabla f(x), d\\rangle\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla f(x) \\times d\\)"
   },
   {
    "key": "c",
    "text": "\\(\\|\\nabla f(x)\\| \\cdot \\|d\\|\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(x) + d\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle \\nabla f(x), d\\rangle\\)",
  "id": "derivation-fonctions-15",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Lorsque le vecteur direction \\(d\\) est un vecteur de la base canonique \\(e_i\\), la dérivée directionnelle \\(D_{e_i} f(x)\\) coïncide avec :",
  "opts": [
   {
    "key": "a",
    "text": "la dérivée partielle \\(\\dfrac{\\partial f}{\\partial x_i}(x)\\)"
   },
   {
    "key": "b",
    "text": "le gradient complet \\(\\nabla f(x)\\)"
   },
   {
    "key": "c",
    "text": "la matrice Hessienne de \\(f\\) en \\(x\\)"
   },
   {
    "key": "d",
    "text": "zéro, systématiquement"
   }
  ],
  "ans": "a",
  "ansText": "la dérivée partielle \\(\\dfrac{\\partial f}{\\partial x_i}(x)\\)",
  "id": "derivation-fonctions-16",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\langle a, x\\rangle + c\\) une fonction affine sur \\(\\mathbb{R}^2\\), avec \\(a = (3,4)\\). Soit \\(d = (3/5,\\ 4/5)\\), qui est bien un vecteur unitaire. Calculer la dérivée directionnelle \\(D_d f(x)\\) (indépendante de \\(x\\)).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.001,
  "id": "derivation-fonctions-17",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2) = x_1^2 - x_2^2\\) et \\(d = (1/2,\\ \\sqrt3/2)\\), un vecteur unitaire. On a montré que \\(D_d f(x) = x_1 - \\sqrt3\\, x_2\\). Calculer \\(D_d f(x)\\) au point \\(x=(2,1)\\).",
  "ans": 0.2679,
  "ansText": "\\(2-\\sqrt3 \\approx 0{,}268\\)",
  "tol": 0.01,
  "id": "derivation-fonctions-18",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(f(x_1,x_2) = x_1^2 - x_2^2\\), le gradient \\(\\nabla f(x)\\) est donné par :",
  "opts": [
   {
    "key": "a",
    "text": "\\((2x_1,\\ -2x_2)\\)"
   },
   {
    "key": "b",
    "text": "\\((2x_1,\\ 2x_2)\\)"
   },
   {
    "key": "c",
    "text": "\\((x_1^2,\\ -x_2^2)\\)"
   },
   {
    "key": "d",
    "text": "\\((2x_2,\\ -2x_1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((2x_1,\\ -2x_2)\\)",
  "id": "derivation-fonctions-19",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "On dit que \\(f\\) est différentiable en \\(a\\) s'il existe une fonction linéaire \\(L\\) telle que :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\displaystyle \\lim_{x\\to a} \\frac{f(x) - (f(a) + L(x-a))}{\\|x-a\\|} = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\displaystyle \\lim_{x\\to a} \\big(f(x) - (f(a) + L(x-a))\\big) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x) = f(a) + L(x-a)\\) pour tout \\(x\\) proche de \\(a\\)"
   },
   {
    "key": "d",
    "text": "\\(\\displaystyle \\lim_{x\\to a} \\frac{L(x-a)}{\\|x-a\\|} = 1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\displaystyle \\lim_{x\\to a} \\frac{f(x) - (f(a) + L(x-a))}{\\|x-a\\|} = 0\\)",
  "id": "derivation-fonctions-20",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Dans la définition de la différentielle, en écrivant \\(L(x) = \\langle u,x\\rangle\\), on montre que le vecteur \\(u\\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "le vecteur des dérivées partielles de \\(f\\) en \\(a\\), c'est-à-dire \\(\\nabla f(a)\\)"
   },
   {
    "key": "b",
    "text": "un vecteur arbitraire, indépendant de \\(f\\)"
   },
   {
    "key": "c",
    "text": "le vecteur nul"
   },
   {
    "key": "d",
    "text": "la matrice Hessienne de \\(f\\) en \\(a\\)"
   }
  ],
  "ans": "a",
  "ansText": "le vecteur des dérivées partielles de \\(f\\) en \\(a\\), c'est-à-dire \\(\\nabla f(a)\\)",
  "id": "derivation-fonctions-21",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "La différentielle de \\(f\\) en \\(a\\) évaluée en \\(h\\), à savoir \\(\\displaystyle\\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(a)h_i\\), est égale à :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle \\nabla f(a), h\\rangle = D_h f(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\|\\nabla f(a)\\| \\cdot \\|h\\|\\)"
   },
   {
    "key": "c",
    "text": "\\(f(a+h) - f(a)\\) exactement, sans reste"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(a) \\cdot \\nabla h\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle \\nabla f(a), h\\rangle = D_h f(a)\\)",
  "id": "derivation-fonctions-22",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "L'approximation affine de \\(f\\) de classe \\(\\mathcal{C}^1\\) en \\(a\\) s'écrit, pour \\(h\\) tel que \\(a+h \\in D\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(a+h) = f(a) + \\langle \\nabla f(a), h\\rangle + o(\\|h\\|)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(a+h) = f(a) + \\langle \\nabla f(a), h\\rangle\\)"
   },
   {
    "key": "c",
    "text": "\\(f(a+h) = f(a)\\cdot \\langle \\nabla f(a), h\\rangle + o(\\|h\\|)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(a+h) = \\langle \\nabla f(a), h\\rangle + o(\\|h\\|^2)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(a+h) = f(a) + \\langle \\nabla f(a), h\\rangle + o(\\|h\\|)\\)",
  "id": "derivation-fonctions-23",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "L'équation \\(f(a) + \\langle \\nabla f(a), x-a\\rangle\\) définit géométriquement :",
  "opts": [
   {
    "key": "a",
    "text": "l'hyperplan tangent à \\(f\\) en \\(a\\)"
   },
   {
    "key": "b",
    "text": "la droite normale à \\(f\\) en \\(a\\)"
   },
   {
    "key": "c",
    "text": "la ligne de niveau de \\(f\\) passant par \\(a\\)"
   },
   {
    "key": "d",
    "text": "un point critique de \\(f\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'hyperplan tangent à \\(f\\) en \\(a\\)",
  "id": "derivation-fonctions-24",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x_1,x_2) = x_1^2 + x_2^2\\) et \\(a = (1/2,\\ 1/2)\\). Le plan tangent en \\(a\\) est \\(T(x,y) = x + y - \\dfrac12\\). Calculer \\(T(1,1)\\).",
  "ans": 1.5,
  "ansText": "1,5",
  "tol": 0.01,
  "id": "derivation-fonctions-25",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) admet des dérivées partielles d'ordre 2 en \\(x\\) lorsque :",
  "opts": [
   {
    "key": "a",
    "text": "ses dérivées partielles d'ordre 1 sont elles-mêmes différentiables (admettent des dérivées partielles)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est simplement continue en \\(x\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) admet un unique point critique en \\(x\\)"
   },
   {
    "key": "d",
    "text": "le gradient de \\(f\\) est constant au voisinage de \\(x\\)"
   }
  ],
  "ans": "a",
  "ansText": "ses dérivées partielles d'ordre 1 sont elles-mêmes différentiables (admettent des dérivées partielles)",
  "id": "derivation-fonctions-26",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y) = xy^2 - yx^2\\). On a \\(\\dfrac{\\partial f}{\\partial x}(x,y) = y^2 - 2xy\\). Calculer \\(\\dfrac{\\partial^2 f}{\\partial x^2}(1,3)\\).",
  "ans": -6,
  "ansText": "-6",
  "tol": 0.001,
  "id": "derivation-fonctions-27",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x,y) = xy^2 - yx^2\\), avec \\(\\dfrac{\\partial f}{\\partial y}(x,y) = 2xy - x^2\\), calculer la dérivée croisée \\(\\dfrac{\\partial^2 f}{\\partial x \\partial y}(1,3)\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.001,
  "id": "derivation-fonctions-28",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Le théorème de Schwarz énonce que si \\(f\\) est de classe \\(\\mathcal{C}^2\\) sur \\(D\\), alors :",
  "opts": [
   {
    "key": "a",
    "text": "les dérivées partielles croisées sont égales, quel que soit l'ordre de dérivation"
   },
   {
    "key": "b",
    "text": "\\(f\\) est nécessairement convexe"
   },
   {
    "key": "c",
    "text": "le gradient de \\(f\\) est nul en tout point de \\(D\\)"
   },
   {
    "key": "d",
    "text": "la matrice Jacobienne de \\(f\\) est inversible"
   }
  ],
  "ans": "a",
  "ansText": "les dérivées partielles croisées sont égales, quel que soit l'ordre de dérivation",
  "id": "derivation-fonctions-29",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y) = \\dfrac{xy^3}{x^2+y^2}\\) si \\((x,y)\\neq(0,0)\\) et \\(f(0,0)=0\\). On a \\(\\dfrac{\\partial f}{\\partial x}(0,y) = -y\\) pour \\(y\\neq 0\\), et \\(\\dfrac{\\partial f}{\\partial x}(0,0)=0\\). Calculer \\(\\displaystyle \\lim_{y\\to 0} \\frac{\\frac{\\partial f}{\\partial x}(0,y) - \\frac{\\partial f}{\\partial x}(0,0)}{y}\\), c'est-à-dire \\(\\dfrac{\\partial^2 f}{\\partial y \\partial x}(0,0)\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.001,
  "id": "derivation-fonctions-30",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour la fonction précédente, on trouve \\(\\dfrac{\\partial^2 f}{\\partial y \\partial x}(0,0) = -1\\) et \\(\\dfrac{\\partial^2 f}{\\partial x \\partial y}(0,0) = 1\\). Que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "la fonction \\(f\\) n'est pas de classe \\(\\mathcal{C}^2\\) en \\((0,0)\\)"
   },
   {
    "key": "b",
    "text": "le théorème de Schwarz est faux en général"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'admet pas de dérivées partielles d'ordre 1 en \\((0,0)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est convexe au voisinage de \\((0,0)\\)"
   }
  ],
  "ans": "a",
  "ansText": "la fonction \\(f\\) n'est pas de classe \\(\\mathcal{C}^2\\) en \\((0,0)\\)",
  "id": "derivation-fonctions-31",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "La matrice hessienne \\(\\nabla^2 f(x)\\) d'une fonction \\(f : D \\subset \\mathbb{R}^n \\to \\mathbb{R}\\) de classe \\(\\mathcal{C}^2\\) est définie par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\left(\\dfrac{\\partial^2 f}{\\partial x_i \\partial x_j}(x)\\right)_{i,j=1,\\dots,n}\\), la matrice des dérivées secondes"
   },
   {
    "key": "b",
    "text": "\\(\\left(\\dfrac{\\partial f}{\\partial x_i}(x)\\right)_{i=1,\\dots,n}\\), le vecteur gradient de \\(f\\)"
   },
   {
    "key": "c",
    "text": "une matrice diagonale contenant uniquement les dérivées secondes pures"
   },
   {
    "key": "d",
    "text": "le déterminant des dérivées secondes de \\(f\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\left(\\dfrac{\\partial^2 f}{\\partial x_i \\partial x_j}(x)\\right)_{i,j=1,\\dots,n}\\), la matrice des dérivées secondes",
  "id": "derivation-fonctions-32",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "En conséquence du théorème de Schwarz, lorsque \\(f\\) est de classe \\(\\mathcal{C}^2\\) sur \\(D\\), la matrice hessienne \\(\\nabla^2 f(x)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "symétrique"
   },
   {
    "key": "b",
    "text": "antisymétrique"
   },
   {
    "key": "c",
    "text": "toujours diagonale"
   },
   {
    "key": "d",
    "text": "toujours inversible"
   }
  ],
  "ans": "a",
  "ansText": "symétrique",
  "id": "derivation-fonctions-33",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "La formule de Taylor-Young à l'ordre 2 pour \\(f\\) de classe \\(\\mathcal{C}^2\\) s'écrit, pour \\(h \\in \\mathbb{R}^n\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x+h) = f(x) + \\langle \\nabla f(x), h\\rangle + \\frac12 \\langle \\nabla^2 f(x)h, h\\rangle + o(\\|h\\|^2)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x+h) = f(x) + \\langle \\nabla f(x), h\\rangle + o(\\|h\\|)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x+h) = f(x) + \\langle \\nabla^2 f(x)h, h\\rangle + o(\\|h\\|^2)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x+h) = f(x) + \\frac12\\langle \\nabla f(x), h\\rangle + \\langle \\nabla^2 f(x)h, h\\rangle\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x+h) = f(x) + \\langle \\nabla f(x), h\\rangle + \\frac12 \\langle \\nabla^2 f(x)h, h\\rangle + o(\\|h\\|^2)\\)",
  "id": "derivation-fonctions-34",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y) = ye^x + \\cos(xy)\\). On a \\(\\dfrac{\\partial f}{\\partial y}(x,y) = e^x - x\\sin(xy)\\). Calculer \\(\\dfrac{\\partial f}{\\partial y}(0,0)\\) (deuxième composante du gradient en \\((0,0)\\)).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.001,
  "id": "derivation-fonctions-35",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x,y) = ye^x + \\cos(xy)\\), avec \\(\\dfrac{\\partial^2 f}{\\partial x \\partial y}(x,y) = e^x - \\sin(xy) - xy\\cos(xy)\\), calculer \\(\\dfrac{\\partial^2 f}{\\partial x \\partial y}(0,0)\\) (coefficient de la matrice hessienne \\(\\nabla^2 f(0,0)\\)).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.001,
  "id": "derivation-fonctions-36",
  "cat": "derivation-fonctions"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x,y) = ye^x + \\cos(xy)\\), on a \\(f(0,0)=1\\), \\(\\nabla f(0,0) = (0,1)\\) et \\(\\nabla^2 f(0,0) = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0\\end{pmatrix}\\). En utilisant le développement de Taylor-Young à l'ordre 2, estimer \\(f(0{,}1,\\ 0{,}2)\\) par \\(f(0,0) + \\langle \\nabla f(0,0), h\\rangle + \\frac12\\langle \\nabla^2 f(0,0)h, h\\rangle\\) avec \\(h=(0{,}1,\\ 0{,}2)\\).",
  "ans": 1.22,
  "ansText": "1,22",
  "tol": 0.01,
  "id": "derivation-fonctions-37",
  "cat": "derivation-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction définie sur un domaine convexe \\(D \\subset \\mathbb{R}^n\\). Quelle est la définition correcte de la convexité de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in D,\\ \\forall \\alpha \\in [0,1],\\quad f(\\alpha u + (1-\\alpha)v) \\le \\alpha f(u) + (1-\\alpha)f(v)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in D,\\ \\forall \\alpha \\in [0,1],\\quad f(\\alpha u + (1-\\alpha)v) \\ge \\alpha f(u) + (1-\\alpha)f(v)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall u,v \\in D,\\quad f(u+v) \\le f(u) + f(v)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall u,v \\in D,\\ \\forall \\alpha \\in [0,1],\\quad \\alpha f(\\alpha u + (1-\\alpha)v) \\le f(u) + f(v)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in D,\\ \\forall \\alpha \\in [0,1],\\quad f(\\alpha u + (1-\\alpha)v) \\le \\alpha f(u) + (1-\\alpha)f(v)\\)",
  "id": "extrema-convexite-01",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "En reprenant la définition de la convexité, comment définit-on une fonction concave ?",
  "opts": [
   {
    "key": "a",
    "text": "En remplaçant l'inégalité \\(\\le\\) par \\(\\ge\\) dans la définition de la convexité"
   },
   {
    "key": "b",
    "text": "En remplaçant \\(\\alpha\\) par \\(1-\\alpha\\) uniquement dans la définition de la convexité"
   },
   {
    "key": "c",
    "text": "Une fonction concave est une fonction dont le carré \\(f^2\\) est convexe"
   },
   {
    "key": "d",
    "text": "Une fonction concave vérifie \\(f(\\alpha u+(1-\\alpha)v) = \\alpha f(u)+(1-\\alpha) f(v)\\)"
   }
  ],
  "ans": "a",
  "ansText": "En remplaçant l'inégalité \\(\\le\\) par \\(\\ge\\) dans la définition de la convexité",
  "id": "extrema-convexite-02",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Un sous-ensemble \\(U \\subset \\mathbb{R}^n\\) est dit convexe si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in U,\\ \\forall \\alpha \\in [0,1],\\quad \\alpha u + (1-\\alpha)v \\in U\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in U,\\quad u+v \\in U\\)"
   },
   {
    "key": "c",
    "text": "\\(U\\) est un ensemble borné"
   },
   {
    "key": "d",
    "text": "\\(\\forall u \\in U,\\quad -u \\in U\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in U,\\ \\forall \\alpha \\in [0,1],\\quad \\alpha u + (1-\\alpha)v \\in U\\)",
  "id": "extrema-convexite-03",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Quelle affirmation, rappelée dans le cours, est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "Si \\(f\\) est convexe, alors \\(-f\\) est concave, et réciproquement"
   },
   {
    "key": "b",
    "text": "Si \\(f\\) est convexe, alors \\(-f\\) est également convexe"
   },
   {
    "key": "c",
    "text": "Si \\(f\\) est concave, alors \\(f^2\\) est nécessairement convexe"
   },
   {
    "key": "d",
    "text": "La convexité de \\(f\\) n'a aucun lien avec la convexité de \\(-f\\)"
   }
  ],
  "ans": "a",
  "ansText": "Si \\(f\\) est convexe, alors \\(-f\\) est concave, et réciproquement",
  "id": "extrema-convexite-04",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction de classe \\(C^1\\) sur un ensemble \\(D \\subset \\mathbb{R}^d\\). Quelle est la caractérisation d'ordre 1 de la convexité de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) \\ge f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) \\le f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) = f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall u,v \\in D,\\quad \\nabla f(u) \\ge \\nabla f(v)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in D,\\quad f(u) \\ge f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)",
  "id": "extrema-convexite-05",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Quelle est la caractérisation d'ordre 1 de la concavité d'une fonction \\(f\\) de classe \\(C^1\\) sur \\(D\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) \\le f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) \\ge f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall u,v \\in D,\\quad f(u) \\le f(v) - \\langle u-v, \\nabla f(v)\\rangle\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall u,v \\in D,\\quad f(v) \\le f(u)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in D,\\quad f(u) \\le f(v) + \\langle u-v, \\nabla f(v)\\rangle\\)",
  "id": "extrema-convexite-06",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction de classe \\(C^2\\) sur un ensemble \\(D \\subset \\mathbb{R}^d\\). \\(f\\) est convexe sur \\(D\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\ge 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\le 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall u,v \\in D,\\quad \\det(\\nabla^2 f(v)) \\ge 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall u,v \\in D,\\quad \\nabla^2 f(v) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\ge 0\\)",
  "id": "extrema-convexite-07",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "De la même façon, \\(f\\) de classe \\(C^2\\) sur \\(D\\) est concave sur \\(D\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\le 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\ge 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall u,v \\in D,\\quad \\mathrm{tr}(\\nabla^2 f(v)) \\le 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall u,v \\in D,\\quad \\nabla^2 f(v)\\) est inversible"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall u,v \\in D,\\quad u^\\top \\nabla^2 f(v)\\, u \\le 0\\)",
  "id": "extrema-convexite-08",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "On étudie \\(f(x,y) = (4-2y)^2+5x^2+x+3y+4xy\\), qui se réécrit \\(f(x,y) = \\langle Au,u\\rangle + \\langle b,u\\rangle + 16\\) avec \\(A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 4\\end{pmatrix}\\). Calculer \\(\\det(A)\\).",
  "ans": 16,
  "ansText": "16",
  "tol": 0.01,
  "id": "extrema-convexite-09",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Pour cette même matrice \\(A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 4\\end{pmatrix}\\), calculer \\(\\mathrm{tr}(A)\\).",
  "ans": 9,
  "ansText": "9",
  "tol": 0.01,
  "id": "extrema-convexite-10",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x,y) = (4-2y)^2+5x^2+x+3y+4xy\\), l'équation d'Euler \\(\\nabla f(u) = 2Au+b = 0\\) conduit au système \\(10x+4y+1=0\\), \\(4x+8y-13=0\\). Donner la valeur de \\(x\\) au point solution (sous forme décimale).",
  "ans": -0.9375,
  "ansText": "-15/16 = -0.9375",
  "tol": 0.01,
  "id": "extrema-convexite-11",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Avec le même système \\(10x+4y+1=0\\), \\(4x+8y-13=0\\), donner la valeur de \\(y\\) (sous forme décimale).",
  "ans": 2.09375,
  "ansText": "67/32 = 2.09375",
  "tol": 0.01,
  "id": "extrema-convexite-12",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Quelle est la définition correcte d'un minimum local \\(u\\) d'une fonction continue \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\le f(v)\\) pour tout \\(v \\in V\\)"
   },
   {
    "key": "b",
    "text": "Pour tout \\(v \\in \\mathbb{R}^n\\), \\(f(u) \\le f(v)\\)"
   },
   {
    "key": "c",
    "text": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\ge f(v)\\) pour tout \\(v \\in V\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) < 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "Il existe un voisinage \\(V\\) de \\(u\\) tel que \\(f(u) \\le f(v)\\) pour tout \\(v \\in V\\)",
  "id": "extrema-convexite-13",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Quelle est la définition correcte d'un minimum global \\(u\\) d'une fonction \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(u) \\le f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)"
   },
   {
    "key": "b",
    "text": "\\(f(u) \\le f(v)\\) uniquement pour les \\(v\\) situés dans un voisinage de \\(u\\)"
   },
   {
    "key": "c",
    "text": "\\(f(u) \\ge f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) = 0\\) et \\(\\nabla^2 f(u) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(u) \\le f(v)\\) pour tout \\(v \\in \\mathbb{R}^d\\)",
  "id": "extrema-convexite-14",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) continue et différentiable en \\(u\\). Si \\(u\\) est un extremum de \\(f\\), que dit l'équation d'Euler ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla f(u) = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2 f(u) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(f(u) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla f(u) \\ge 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla f(u) = 0\\)",
  "id": "extrema-convexite-15",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(U\\) un ensemble convexe non vide de \\(\\mathbb{R}^n\\) et \\(u \\in U\\) un minimum relatif de \\(f\\) par rapport à \\(U\\), \\(f\\) étant différentiable en \\(u\\). Que dit l'inéquation d'Euler ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\langle \\nabla f(u), v-u\\rangle \\ge 0,\\ \\forall v \\in U\\)"
   },
   {
    "key": "b",
    "text": "\\(\\langle \\nabla f(u), v-u\\rangle \\le 0,\\ \\forall v \\in U\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla f(u) = 0\\) nécessairement"
   },
   {
    "key": "d",
    "text": "\\(\\langle \\nabla f(u), v-u\\rangle = 0,\\ \\forall v \\in U\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\langle \\nabla f(u), v-u\\rangle \\ge 0,\\ \\forall v \\in U\\)",
  "id": "extrema-convexite-16",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\frac{1}{2}(x-2)^2 - 2\\). Le point \\(x=2\\) vérifie \\(f'(x)=0\\). Quelle est la nature de ce point critique ?",
  "opts": [
   {
    "key": "a",
    "text": "C'est un minimum (global, car \\(f\\) est convexe)"
   },
   {
    "key": "b",
    "text": "C'est un maximum"
   },
   {
    "key": "c",
    "text": "Ce n'est ni un minimum ni un maximum"
   },
   {
    "key": "d",
    "text": "On ne peut pas déterminer la nature de ce point sans plus d'information"
   }
  ],
  "ans": "a",
  "ansText": "C'est un minimum (global, car \\(f\\) est convexe)",
  "id": "extrema-convexite-17",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(g(x) = \\frac{1}{2}x^3 - 1\\). Le point \\(x=0\\) vérifie \\(g'(x)=0\\). Quelle est la nature de ce point critique, et qu'illustre cet exemple ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce n'est ni un minimum ni un maximum ; cela illustre que l'équation d'Euler est nécessaire mais non suffisante"
   },
   {
    "key": "b",
    "text": "C'est un minimum global"
   },
   {
    "key": "c",
    "text": "C'est un maximum local"
   },
   {
    "key": "d",
    "text": "C'est à la fois un minimum et un maximum"
   }
  ],
  "ans": "a",
  "ansText": "Ce n'est ni un minimum ni un maximum ; cela illustre que l'équation d'Euler est nécessaire mais non suffisante",
  "id": "extrema-convexite-18",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un point critique de \\(f\\) (\\(\\nabla f(u)=0\\)). Sous quelle condition \\(u\\) est-il un minimum local de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla^2 f(u)\\) est semi-définie positive"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2 f(u)\\) est semi-définie négative"
   },
   {
    "key": "c",
    "text": "\\(\\nabla^2 f(u)\\) est inversible"
   },
   {
    "key": "d",
    "text": "\\(\\nabla^2 f(u) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla^2 f(u)\\) est semi-définie positive",
  "id": "extrema-convexite-19",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un point critique de \\(f\\). Sous quelle condition \\(u\\) est-il un maximum local de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla^2 f(u)\\) est semi-définie négative"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2 f(u)\\) est semi-définie positive"
   },
   {
    "key": "c",
    "text": "\\(\\nabla^2 f(u)\\) est inversible"
   },
   {
    "key": "d",
    "text": "\\(\\nabla^2 f(u) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\nabla^2 f(u)\\) est semi-définie négative",
  "id": "extrema-convexite-20",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(u\\) un point critique de \\(f\\). Si la matrice hessienne \\(\\nabla^2 f(u)\\) n'est ni semi-définie positive ni semi-définie négative (ses valeurs propres sont de signes opposés), que peut-on dire ?",
  "opts": [
   {
    "key": "a",
    "text": "On ne peut rien conclure directement ; une étude plus poussée est nécessaire (\\(u\\) peut être un point-selle)"
   },
   {
    "key": "b",
    "text": "\\(u\\) est nécessairement un minimum local"
   },
   {
    "key": "c",
    "text": "\\(u\\) est nécessairement un maximum local"
   },
   {
    "key": "d",
    "text": "\\(u\\) est nécessairement un minimum global"
   }
  ],
  "ans": "a",
  "ansText": "On ne peut rien conclure directement ; une étude plus poussée est nécessaire (\\(u\\) peut être un point-selle)",
  "id": "extrema-convexite-21",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Quel résultat fondamental relie convexité et points critiques dans le cadre de l'optimisation convexe ?",
  "opts": [
   {
    "key": "a",
    "text": "Si \\(f\\) est convexe sur son ensemble de définition et si \\(u\\) est un point critique de \\(f\\), alors \\(u\\) est un minimum global de \\(f\\)"
   },
   {
    "key": "b",
    "text": "Si \\(f\\) est convexe, elle n'admet jamais de point critique"
   },
   {
    "key": "c",
    "text": "Si \\(u\\) est un point critique de \\(f\\), alors \\(f\\) est nécessairement convexe"
   },
   {
    "key": "d",
    "text": "Si \\(f\\) est convexe, tout point de son domaine est un minimum global"
   }
  ],
  "ans": "a",
  "ansText": "Si \\(f\\) est convexe sur son ensemble de définition et si \\(u\\) est un point critique de \\(f\\), alors \\(u\\) est un minimum global de \\(f\\)",
  "id": "extrema-convexite-22",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y) = x^2+y^2-2x+4y\\). Donner l'abscisse \\(x\\) du point critique de \\(f\\), solution de \\(\\nabla f(x,y) = 0\\).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "extrema-convexite-23",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Pour la même fonction \\(f(x,y) = x^2+y^2-2x+4y\\), donner l'ordonnée \\(y\\) de ce point critique.",
  "ans": -2,
  "ansText": "-2",
  "tol": 0.01,
  "id": "extrema-convexite-24",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Calculer la valeur de \\(f(x,y) = x^2+y^2-2x+4y\\) en son point critique \\((1,-2)\\).",
  "ans": -5,
  "ansText": "-5",
  "tol": 0.01,
  "id": "extrema-convexite-25",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Calculer le déterminant de la matrice hessienne \\(H = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2\\end{pmatrix}\\) en un point critique.",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "extrema-convexite-26",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Soit un point critique dont la matrice hessienne est \\(H = \\begin{pmatrix} 6 & 0 \\\\ 0 & -4\\end{pmatrix}\\). Quelle est la nature de ce point ?",
  "opts": [
   {
    "key": "a",
    "text": "C'est un point-selle : les valeurs propres \\(6\\) et \\(-4\\) sont de signes opposés"
   },
   {
    "key": "b",
    "text": "C'est un minimum local : les deux valeurs propres sont positives"
   },
   {
    "key": "c",
    "text": "C'est un maximum local : les deux valeurs propres sont négatives"
   },
   {
    "key": "d",
    "text": "On ne peut rien dire sans connaître le gradient en ce point"
   }
  ],
  "ans": "a",
  "ansText": "C'est un point-selle : les valeurs propres \\(6\\) et \\(-4\\) sont de signes opposés",
  "id": "extrema-convexite-27",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x,y) = 2x^2+4(y-2)^2+4x+6y-2xy+2y^3\\), de matrice hessienne \\(\\nabla^2 f(x,y) = \\begin{pmatrix} 4 & -2 \\\\ -2 & 12y+8\\end{pmatrix}\\). Calculer la trace de \\(\\nabla^2 f\\) au point \\(y=0\\).",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "extrema-convexite-28",
  "cat": "extrema-convexite"
 },
 {
  "type": "num",
  "q": "Pour la même hessienne \\(\\nabla^2 f(x,y) = \\begin{pmatrix} 4 & -2 \\\\ -2 & 12y+8\\end{pmatrix}\\), calculer son déterminant au point \\(y=0\\).",
  "ans": 28,
  "ansText": "28",
  "tol": 0.01,
  "id": "extrema-convexite-29",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Pour \\(f(x,y) = 2x^2+4(y-2)^2+4x+6y-2xy+2y^3\\), la trace de \\(\\nabla^2 f\\) vaut \\(12y+12\\) et son déterminant vaut \\(48y+28\\). Sur quel ensemble \\(f\\) est-elle convexe ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{R} \\times \\left[-\\frac{7}{12},\\ +\\infty\\right)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{R} \\times (-\\infty,\\ -1]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}^2\\) tout entier"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'est convexe sur aucun sous-ensemble de \\(\\mathbb{R}^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathbb{R} \\times \\left[-\\frac{7}{12},\\ +\\infty\\right)\\)",
  "id": "extrema-convexite-30",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Le système \\(\\nabla f(x,y)=0\\) associé à \\(f(x,y) = 2x^2+4(y-2)^2+4x+6y-2xy+2y^3\\) admet deux points critiques \\(u_1\\) et \\(u_2\\), dont les ordonnées valent respectivement \\(y_1 = \\frac{-7-\\sqrt{241}}{12} \\approx -1{,}88\\) et \\(y_2 = \\frac{-7+\\sqrt{241}}{12} \\approx 0{,}71\\). Lequel de ces deux points est un minimum local de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_2\\), car son ordonnée \\(y_2\\) est strictement supérieure à \\(-\\frac{7}{12}\\), zone où la hessienne est semi-définie positive"
   },
   {
    "key": "b",
    "text": "\\(u_1\\), car son ordonnée \\(y_1\\) est négative"
   },
   {
    "key": "c",
    "text": "Les deux points sont des minima locaux"
   },
   {
    "key": "d",
    "text": "Aucun des deux points n'est un extremum"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_2\\), car son ordonnée \\(y_2\\) est strictement supérieure à \\(-\\frac{7}{12}\\), zone où la hessienne est semi-définie positive",
  "id": "extrema-convexite-31",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Le minimum local trouvé pour \\(f(x,y) = 2x^2+4(y-2)^2+4x+6y-2xy+2y^3\\) n'est pas un minimum global. Pourquoi ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que le terme cubique \\(2y^3\\) fait tendre \\(f\\) vers \\(-\\infty\\) lorsque \\(y \\to -\\infty\\)"
   },
   {
    "key": "b",
    "text": "Parce que \\(f\\) n'admet aucun minimum global par définition"
   },
   {
    "key": "c",
    "text": "Parce que la fonction n'est pas continue"
   },
   {
    "key": "d",
    "text": "Parce que le point trouvé n'est pas un point critique"
   }
  ],
  "ans": "a",
  "ansText": "Parce que le terme cubique \\(2y^3\\) fait tendre \\(f\\) vers \\(-\\infty\\) lorsque \\(y \\to -\\infty\\)",
  "id": "extrema-convexite-32",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "On considère \\(f(x) = 4 + \\left(x_1^2 - 2\\cos(2\\pi x_1)\\right) + \\left(x_2^2 - 2\\cos(2\\pi x_2)\\right)\\) sur \\([-2,2]^2\\), fonction utilisée pour tester des algorithmes d'optimisation. Le vecteur nul \\((0,0)\\) est un point critique de \\(f\\). Quelle affirmation est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) admet plusieurs minima locaux mais un seul minimum global, atteint en \\((0,0)\\), et n'est ni convexe ni concave globalement"
   },
   {
    "key": "b",
    "text": "\\(f\\) est convexe sur \\([-2,2]^2\\), donc \\((0,0)\\) est automatiquement le minimum global"
   },
   {
    "key": "c",
    "text": "\\((0,0)\\) est un maximum global de \\(f\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'admet aucun point critique sur \\([-2,2]^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f\\) admet plusieurs minima locaux mais un seul minimum global, atteint en \\((0,0)\\), et n'est ni convexe ni concave globalement",
  "id": "extrema-convexite-33",
  "cat": "extrema-convexite"
 },
 {
  "type": "qcm",
  "q": "Le modèle linéaire gaussien simple s'écrit \\(Y = \\beta_0 + \\beta_1 X + \\varepsilon\\). Que représente \\(\\beta_0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "L'ordonnée à l'origine du modèle (l'intercept)"
   },
   {
    "key": "b",
    "text": "Le coefficient directeur de la droite (la pente)"
   },
   {
    "key": "c",
    "text": "La variance des erreurs \\(\\varepsilon\\)"
   },
   {
    "key": "d",
    "text": "La variable explicative"
   }
  ],
  "ans": "a",
  "ansText": "L'ordonnée à l'origine du modèle (l'intercept)",
  "id": "mlg-simple-01",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Parmi les hypothèses du modèle linéaire gaussien simple, laquelle est correcte concernant les erreurs \\(\\varepsilon_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles sont i.i.d. et suivent une loi \\(\\mathcal{N}(0, \\sigma^2)\\)"
   },
   {
    "key": "b",
    "text": "Elles suivent une loi uniforme sur \\([0,1]\\)"
   },
   {
    "key": "c",
    "text": "Leur espérance vaut \\(\\beta_0\\)"
   },
   {
    "key": "d",
    "text": "Leur variance dépend de l'indice \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "Elles sont i.i.d. et suivent une loi \\(\\mathcal{N}(0, \\sigma^2)\\)",
  "id": "mlg-simple-02",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Dans le modèle \\(Y_i = \\beta_0 + \\beta_1 X_{i,1} + \\varepsilon_i\\), comment qualifie-t-on respectivement les valeurs \\(X_i\\) et \\(Y_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(X_i\\) est observée et non aléatoire (déterministe), \\(Y_i\\) est observée et aléatoire"
   },
   {
    "key": "b",
    "text": "\\(X_i\\) et \\(Y_i\\) sont toutes les deux non aléatoires"
   },
   {
    "key": "c",
    "text": "\\(X_i\\) est aléatoire et non observée, \\(Y_i\\) est déterministe"
   },
   {
    "key": "d",
    "text": "\\(X_i\\) et \\(Y_i\\) sont toutes les deux inconnues et non observées"
   }
  ],
  "ans": "a",
  "ansText": "\\(X_i\\) est observée et non aléatoire (déterministe), \\(Y_i\\) est observée et aléatoire",
  "id": "mlg-simple-03",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Pourquoi ne cherche-t-on pas à estimer \\(\\beta_0\\) et \\(\\beta_1\\) en minimisant directement \\(\\sum_{i=1}^n (y_i - \\hat y_i)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Car cette somme vaut toujours 0, les écarts positifs et négatifs se compensant"
   },
   {
    "key": "b",
    "text": "Car cette expression n'est pas définie mathématiquement"
   },
   {
    "key": "c",
    "text": "Car elle nécessite de connaître la loi des erreurs à l'avance"
   },
   {
    "key": "d",
    "text": "Car elle dépend de la variance inconnue \\(\\sigma^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Car cette somme vaut toujours 0, les écarts positifs et négatifs se compensant",
  "id": "mlg-simple-04",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "D'après le cours, pourquoi préfère-t-on minimiser \\(\\sum_{i=1}^n (y_i - \\hat y_i)^2\\) plutôt que \\(\\sum_{i=1}^n |y_i - \\hat y_i|\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Car le problème des moindres carrés est mathématiquement plus simple à résoudre"
   },
   {
    "key": "b",
    "text": "Car la valeur absolue donnerait toujours une somme égale à 0"
   },
   {
    "key": "c",
    "text": "Car la méthode des moindres carrés nécessite une hypothèse gaussienne, contrairement à la valeur absolue"
   },
   {
    "key": "d",
    "text": "Car la valeur absolue n'est définie que pour des résidus positifs"
   }
  ],
  "ans": "a",
  "ansText": "Car le problème des moindres carrés est mathématiquement plus simple à résoudre",
  "id": "mlg-simple-05",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de l'estimateur \\(\\hat\\beta_1\\) obtenu par la méthode des moindres carrés ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta_1 = \\dfrac{\\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y)}{\\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar x)^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta_1 = \\dfrac{\\sum_{i=1}^n (x_i-\\bar x)}{\\sum_{i=1}^n (y_i-\\bar y)}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta_1 = \\bar y - \\bar x\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta_1 = \\dfrac{1}{n}\\sum_{i=1}^n (y_i - \\hat y_i)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta_1 = \\dfrac{\\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y)}{\\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar x)^2}\\)",
  "id": "mlg-simple-06",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de l'estimateur \\(\\hat\\beta_0\\) en fonction de \\(\\hat\\beta_1\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\, \\bar x\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta_0 = \\bar x - \\hat\\beta_1\\, \\bar y\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta_0 = \\bar y + \\hat\\beta_1\\, \\bar x\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta_0 = \\hat\\beta_1 \\times \\bar x \\times \\bar y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\, \\bar x\\)",
  "id": "mlg-simple-07",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On dispose des couples \\((x_i, y_i)\\) suivants : \\((1,2)\\), \\((2,3)\\), \\((3,5)\\), \\((4,4)\\), \\((5,6)\\) (soit \\(n=5\\)). On a \\(\\bar x = 3\\) et \\(\\bar y = 4\\). Calculez \\(\\hat\\beta_1 = \\dfrac{\\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y)}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\).",
  "ans": 0.9,
  "ansText": "0.9",
  "tol": 0.01,
  "id": "mlg-simple-08",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "Pour le même jeu de données (\\(n=5\\), \\(\\bar x = 3\\), \\(\\bar y = 4\\)), on a trouvé \\(\\hat\\beta_1 = 0.9\\). Calculez \\(\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\,\\bar x\\).",
  "ans": 1.3,
  "ansText": "1.3",
  "tol": 0.01,
  "id": "mlg-simple-09",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On dispose des statistiques résumées suivantes sur un échantillon de taille \\(n=8\\) : \\(S_{xy} = \\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y) = 40\\) et \\(S_{xx} = \\sum_{i=1}^n (x_i-\\bar x)^2 = 20\\). Calculez \\(\\hat\\beta_1 = S_{xy}/S_{xx}\\).",
  "ans": 2.0,
  "ansText": "2.0",
  "tol": 0.01,
  "id": "mlg-simple-10",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "Pour ce même échantillon (\\(n=8\\)), on a \\(\\bar x = 5\\), \\(\\bar y = 15\\) et on a trouvé \\(\\hat\\beta_1 = 2\\). Calculez \\(\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\, \\bar x\\).",
  "ans": 5.0,
  "ansText": "5.0",
  "tol": 0.01,
  "id": "mlg-simple-11",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On a ajusté un modèle de régression linéaire simple et obtenu \\(\\hat\\beta_0 = 1.3\\) et \\(\\hat\\beta_1 = 0.9\\). Quelle est la valeur prédite \\(\\hat y = \\hat\\beta_0 + \\hat\\beta_1 x\\) pour \\(x = 10\\) ?",
  "ans": 10.3,
  "ansText": "10.3",
  "tol": 0.01,
  "id": "mlg-simple-12",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire du biais de l'estimateur \\(\\hat\\beta_1\\) des moindres carrés ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(E[\\hat\\beta_1] = \\beta_1\\), c'est un estimateur sans biais de \\(\\beta_1\\)"
   },
   {
    "key": "b",
    "text": "\\(E[\\hat\\beta_1] = \\beta_1 + \\bar x\\)"
   },
   {
    "key": "c",
    "text": "Il est biaisé, avec un facteur multiplicatif \\(n/(n-2)\\)"
   },
   {
    "key": "d",
    "text": "Son biais dépend de la variance inconnue \\(\\sigma^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(E[\\hat\\beta_1] = \\beta_1\\), c'est un estimateur sans biais de \\(\\beta_1\\)",
  "id": "mlg-simple-13",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la variance de l'estimateur \\(\\hat\\beta_1\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\text{Var}[\\hat\\beta_1] = \\dfrac{\\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\text{Var}[\\hat\\beta_1] = \\sigma^2 \\sum_{i=1}^n (x_i-\\bar x)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\text{Var}[\\hat\\beta_1] = \\dfrac{\\sigma^2}{n}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\text{Var}[\\hat\\beta_1] = \\dfrac{\\sigma^2}{\\bar x^2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\text{Var}[\\hat\\beta_1] = \\dfrac{\\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\)",
  "id": "mlg-simple-14",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On suppose \\(\\sigma^2 = 4\\) et \\(\\sum_{i=1}^n (x_i - \\bar x)^2 = 10\\). Calculez \\(\\text{Var}[\\hat\\beta_1] = \\sigma^2 / \\sum_{i=1}^n (x_i-\\bar x)^2\\).",
  "ans": 0.4,
  "ansText": "0.4",
  "tol": 0.01,
  "id": "mlg-simple-15",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle relation relie \\(\\hat\\beta_0\\) à \\(\\beta_0\\), \\(\\beta_1\\) et \\(\\hat\\beta_1\\), utilisée pour démontrer les propriétés de \\(\\hat\\beta_0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta_0 = \\beta_0 + (\\beta_1 - \\hat\\beta_1)\\,\\bar x\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta_0 = \\beta_0 - (\\beta_1 + \\hat\\beta_1)\\,\\bar x\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta_0 = \\beta_1 + (\\beta_0 - \\hat\\beta_0)\\,\\bar x\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta_0 = \\beta_0 \\times \\hat\\beta_1 \\times \\bar x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta_0 = \\beta_0 + (\\beta_1 - \\hat\\beta_1)\\,\\bar x\\)",
  "id": "mlg-simple-16",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la variance de l'estimateur \\(\\hat\\beta_0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{n} + \\dfrac{\\bar x^2 \\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{n}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\text{Var}[\\hat\\beta_0] = \\sigma^2\\, \\bar x^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2} - \\dfrac{\\bar x^2}{n}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{n} + \\dfrac{\\bar x^2 \\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\)",
  "id": "mlg-simple-17",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On suppose \\(\\sigma^2 = 4\\), \\(n = 5\\), \\(\\bar x = 3\\) et \\(\\sum_{i=1}^n (x_i - \\bar x)^2 = 10\\). Calculez \\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{n} + \\dfrac{\\bar x^2 \\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\).",
  "ans": 4.4,
  "ansText": "4.4",
  "tol": 0.01,
  "id": "mlg-simple-18",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On suppose \\(\\sigma^2 = 9\\), \\(n = 8\\), \\(\\bar x = 5\\) et \\(\\sum_{i=1}^n (x_i - \\bar x)^2 = 20\\). Calculez \\(\\text{Var}[\\hat\\beta_0] = \\dfrac{\\sigma^2}{n} + \\dfrac{\\bar x^2 \\sigma^2}{\\sum_{i=1}^n (x_i-\\bar x)^2}\\).",
  "ans": 12.375,
  "ansText": "12.375",
  "tol": 0.01,
  "id": "mlg-simple-19",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On suppose \\(\\sigma^2 = 9\\) et \\(\\sum_{i=1}^n (x_i - \\bar x)^2 = 20\\). Calculez l'écart-type de \\(\\hat\\beta_1\\), i.e. \\(\\sqrt{\\text{Var}[\\hat\\beta_1]}\\).",
  "ans": 0.6708,
  "ansText": "0.6708",
  "tol": 0.01,
  "id": "mlg-simple-20",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de l'estimateur de \\(\\sigma^2\\) obtenu par maximum de vraisemblance (biaisé) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n-2}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n}\\sum_{i=1}^n (x_i - \\bar x)^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\sigma^2 = \\bar y - \\hat\\beta_1\\, \\bar x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\sigma^2 = \\dfrac{1}{n}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)",
  "id": "mlg-simple-21",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la version débiaisée de l'estimateur de \\(\\sigma^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n-2}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n-1}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n}\\sum_{i=1}^n (y_i - \\bar y)^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\sigma^2 = \\dfrac{1}{n-2}\\sum_{i=1}^n (y_i - \\bar y)^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\sigma^2 = \\dfrac{1}{n-2}\\sum_{i=1}^n \\left(y_i - (\\hat\\beta_0+\\hat\\beta_1 x_i)\\right)^2\\)",
  "id": "mlg-simple-22",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Pourquoi divise-t-on par \\(n-2\\) et non par \\(n\\) pour obtenir l'estimateur non biaisé de \\(\\sigma^2\\) dans le modèle simple ?",
  "opts": [
   {
    "key": "a",
    "text": "Car le modèle comporte 2 paramètres estimés, \\(\\beta_0\\) et \\(\\beta_1\\)"
   },
   {
    "key": "b",
    "text": "Car il y a 2 variables dans le modèle, \\(X\\) et \\(Y\\)"
   },
   {
    "key": "c",
    "text": "Car la loi de Student a, par convention, toujours \\(n-2\\) degrés de liberté"
   },
   {
    "key": "d",
    "text": "Car on retire les deux valeurs extrêmes du jeu de données avant de calculer la variance"
   }
  ],
  "ans": "a",
  "ansText": "Car le modèle comporte 2 paramètres estimés, \\(\\beta_0\\) et \\(\\beta_1\\)",
  "id": "mlg-simple-23",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "Pour le jeu de données \\((1,2), (2,3), (3,5), (4,4), (5,6)\\) (\\(n=5\\)), le modèle ajusté \\(\\hat y = 1.3 + 0.9x\\) donne les résidus \\(\\varepsilon_i = y_i - \\hat y_i\\) suivants : \\(-0.2,\\ -0.1,\\ 1.0,\\ -0.9,\\ 0.2\\). Calculez l'estimateur du maximum de vraisemblance \\(\\hat\\sigma^2 = \\dfrac{1}{n}\\sum_{i=1}^n \\varepsilon_i^2\\).",
  "ans": 0.38,
  "ansText": "0.38",
  "tol": 0.01,
  "id": "mlg-simple-24",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "Avec les mêmes résidus \\(-0.2,\\ -0.1,\\ 1.0,\\ -0.9,\\ 0.2\\) (\\(n=5\\)), calculez l'estimateur non biaisé \\(\\hat\\sigma^2 = \\dfrac{1}{n-2}\\sum_{i=1}^n \\varepsilon_i^2\\).",
  "ans": 0.6333,
  "ansText": "0.6333",
  "tol": 0.01,
  "id": "mlg-simple-25",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Comment définit-on le coefficient de corrélation linéaire \\(\\rho\\) entre deux variables \\(X\\) et \\(Y\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\rho = \\dfrac{\\text{Cov}[X,Y]}{\\sqrt{\\text{Var}[X]\\,\\text{Var}[Y]}}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\rho = \\dfrac{\\text{Var}[X,Y]}{\\text{Cov}[X]\\,\\text{Cov}[Y]}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\rho = \\text{Cov}[X,Y] \\times \\text{Var}[X] \\times \\text{Var}[Y]\\)"
   },
   {
    "key": "d",
    "text": "\\(\\rho = \\sqrt{\\text{Cov}[X,Y]}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\rho = \\dfrac{\\text{Cov}[X,Y]}{\\sqrt{\\text{Var}[X]\\,\\text{Var}[Y]}}\\)",
  "id": "mlg-simple-26",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "Pour un échantillon, on a \\(S_{xy} = \\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y) = 9\\), \\(S_{xx} = \\sum_{i=1}^n (x_i-\\bar x)^2 = 10\\) et \\(S_{yy} = \\sum_{i=1}^n (y_i-\\bar y)^2 = 10\\). Calculez le coefficient de corrélation empirique \\(\\hat\\rho = S_{xy}/\\sqrt{S_{xx}S_{yy}}\\).",
  "ans": 0.9,
  "ansText": "0.9",
  "tol": 0.01,
  "id": "mlg-simple-27",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle relation relie l'estimateur de la pente \\(\\hat\\beta_1\\) et l'estimateur du coefficient de corrélation \\(\\hat\\rho\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta_1 = \\hat\\rho \\sqrt{\\dfrac{s_Y^2}{s_X^2}}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta_1 = \\hat\\rho \\times s_X \\times s_Y\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta_1 = \\hat\\rho^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta_1 = \\dfrac{\\hat\\rho}{s_X\\, s_Y}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta_1 = \\hat\\rho \\sqrt{\\dfrac{s_Y^2}{s_X^2}}\\)",
  "id": "mlg-simple-28",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "D'après la relation \\(\\hat\\beta_1 = \\hat\\rho\\sqrt{s_Y^2/s_X^2}\\), que peut-on dire des signes de \\(\\hat\\beta_1\\) et \\(\\hat\\rho\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta_1\\) et \\(\\hat\\rho\\) ont toujours le même signe"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta_1\\) est toujours positif, quel que soit le signe de \\(\\hat\\rho\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta_1\\) et \\(\\hat\\rho\\) sont toujours de signes opposés"
   },
   {
    "key": "d",
    "text": "Le signe de \\(\\hat\\beta_1\\) ne dépend que de \\(s_X\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta_1\\) et \\(\\hat\\rho\\) ont toujours le même signe",
  "id": "mlg-simple-29",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On a \\(\\hat\\rho = 0.8\\), un écart-type empirique \\(s_X = 2\\) et \\(s_Y = 5\\). Calculez \\(\\hat\\beta_1 = \\hat\\rho\\, (s_Y / s_X)\\).",
  "ans": 2.0,
  "ansText": "2.0",
  "tol": 0.01,
  "id": "mlg-simple-30",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Pour tester la significativité de la pente du modèle, quelles sont les hypothèses du test ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_0 : \\beta_1 = 0\\) contre \\(H_1 : \\beta_1 \\neq 0\\)"
   },
   {
    "key": "b",
    "text": "\\(H_0 : \\beta_0 = 0\\) contre \\(H_1 : \\beta_0 \\neq 0\\)"
   },
   {
    "key": "c",
    "text": "\\(H_0 : \\beta_1 = 1\\) contre \\(H_1 : \\beta_1 \\neq 1\\)"
   },
   {
    "key": "d",
    "text": "\\(H_0 : \\sigma^2 = 0\\) contre \\(H_1 : \\sigma^2 \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(H_0 : \\beta_1 = 0\\) contre \\(H_1 : \\beta_1 \\neq 0\\)",
  "id": "mlg-simple-31",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Sous \\(H_0 : \\beta_1 = 0\\), quelle est la loi suivie par la statistique de test \\(t_{\\text{test}}\\) associée à la pente ?",
  "opts": [
   {
    "key": "a",
    "text": "Une loi de Student à \\(n-2\\) degrés de liberté, \\(\\mathcal{T}_{n-2}\\)"
   },
   {
    "key": "b",
    "text": "Une loi normale centrée réduite \\(\\mathcal{N}(0,1)\\)"
   },
   {
    "key": "c",
    "text": "Une loi du chi-deux à \\(n-2\\) degrés de liberté, \\(\\chi^2_{n-2}\\)"
   },
   {
    "key": "d",
    "text": "Une loi de Student à \\(n\\) degrés de liberté, \\(\\mathcal{T}_n\\)"
   }
  ],
  "ans": "a",
  "ansText": "Une loi de Student à \\(n-2\\) degrés de liberté, \\(\\mathcal{T}_{n-2}\\)",
  "id": "mlg-simple-32",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la statistique de test utilisée pour tester la significativité de la pente \\(\\beta_1\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(t_{\\text{test}} = \\dfrac{\\hat\\beta_1}{\\sqrt{\\hat\\sigma^2 / \\sum_{i=1}^n (x_i-\\bar x)^2}}\\)"
   },
   {
    "key": "b",
    "text": "\\(t_{\\text{test}} = \\hat\\beta_1 \\times \\hat\\sigma^2\\)"
   },
   {
    "key": "c",
    "text": "\\(t_{\\text{test}} = \\dfrac{\\hat\\beta_1 - \\beta_1}{\\hat\\sigma^2}\\)"
   },
   {
    "key": "d",
    "text": "\\(t_{\\text{test}} = \\sqrt{\\hat\\beta_1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(t_{\\text{test}} = \\dfrac{\\hat\\beta_1}{\\sqrt{\\hat\\sigma^2 / \\sum_{i=1}^n (x_i-\\bar x)^2}}\\)",
  "id": "mlg-simple-33",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On a estimé \\(\\hat\\beta_1 = 0.9\\), \\(\\hat\\sigma^2 = 0.6333\\) et \\(\\sum_{i=1}^n (x_i-\\bar x)^2 = 10\\). Calculez la statistique de test \\(t_{\\text{test}} = \\hat\\beta_1 / \\sqrt{\\hat\\sigma^2/\\sum_{i=1}^n(x_i-\\bar x)^2}\\).",
  "ans": 3.576,
  "ansText": "3.576",
  "tol": 0.03,
  "id": "mlg-simple-34",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Au seuil de significativité \\(\\alpha\\), quelle est la règle de décision pour le test \\(H_0 : \\beta_1 = 0\\) contre \\(H_1 : \\beta_1 \\neq 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "On rejette \\(H_0\\) si \\(t_{\\text{test}} \\notin [t_{\\alpha/2,n-2}, t_{1-\\alpha/2,n-2}]\\)"
   },
   {
    "key": "b",
    "text": "On rejette \\(H_0\\) si \\(t_{\\text{test}} = 0\\)"
   },
   {
    "key": "c",
    "text": "On accepte toujours \\(H_0\\) dès que \\(n > 30\\)"
   },
   {
    "key": "d",
    "text": "On rejette \\(H_0\\) si la p-valeur est supérieure à \\(\\alpha\\)"
   }
  ],
  "ans": "a",
  "ansText": "On rejette \\(H_0\\) si \\(t_{\\text{test}} \\notin [t_{\\alpha/2,n-2}, t_{1-\\alpha/2,n-2}]\\)",
  "id": "mlg-simple-35",
  "cat": "mlg-simple"
 },
 {
  "type": "num",
  "q": "On a estimé \\(\\hat\\rho = 0.9\\) sur un échantillon de taille \\(n = 5\\). Calculez la statistique de test associée à la corrélation \\(t_{\\text{test}} = \\hat\\rho \\big/ \\sqrt{(1-\\hat\\rho^2)/(n-2)}\\).",
  "ans": 3.576,
  "ansText": "3.576",
  "tol": 0.03,
  "id": "mlg-simple-36",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Comment s'écrit le modèle de régression linéaire simple sous forme matricielle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y = X\\beta + \\varepsilon\\)"
   },
   {
    "key": "b",
    "text": "\\(y = \\beta X^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(X = y\\beta + \\varepsilon\\)"
   },
   {
    "key": "d",
    "text": "\\(\\beta = Xy + \\varepsilon\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(y = X\\beta + \\varepsilon\\)",
  "id": "mlg-simple-37",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Dans l'écriture matricielle \\(y = X\\beta + \\varepsilon\\) du modèle simple, que représente le vecteur \\(\\beta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur des paramètres du modèle, \\((\\beta_0, \\beta_1)^\\top\\)"
   },
   {
    "key": "b",
    "text": "Le vecteur des résidus du modèle"
   },
   {
    "key": "c",
    "text": "Le vecteur des observations \\(y_i\\)"
   },
   {
    "key": "d",
    "text": "Le vecteur des valeurs de la variable explicative \\(x_i\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur des paramètres du modèle, \\((\\beta_0, \\beta_1)^\\top\\)",
  "id": "mlg-simple-38",
  "cat": "mlg-simple"
 },
 {
  "type": "qcm",
  "q": "Qu'appelle-t-on un vecteur aléatoire \\(X = (X_1, X_2, \\dots, X_d)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un vecteur dont chacune des composantes \\(X_1,\\dots,X_d\\) est une variable aléatoire"
   },
   {
    "key": "b",
    "text": "Un vecteur dont chaque composante est une constante réelle fixée"
   },
   {
    "key": "c",
    "text": "Une matrice carrée de variables aléatoires"
   },
   {
    "key": "d",
    "text": "Un vecteur dont la norme suit une loi normale"
   }
  ],
  "ans": "a",
  "ansText": "Un vecteur dont chacune des composantes \\(X_1,\\dots,X_d\\) est une variable aléatoire",
  "id": "vecteur-gaussien-01",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Comment définit-on le vecteur espérance \\(\\mathbb{E}[X]\\) d'un vecteur aléatoire \\(X=(X_1,\\dots,X_d)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{E}[X] = (\\mathbb{E}[X_1], \\dots, \\mathbb{E}[X_d])^\\top\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{E}[X] = (\\mathrm{Var}[X_1], \\dots, \\mathrm{Var}[X_d])^\\top\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{E}[X] = \\sum_{i=1}^d \\mathbb{E}[X_i]\\) (un scalaire)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{E}[X] = (X_1, \\dots, X_d)^\\top\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathbb{E}[X] = (\\mathbb{E}[X_1], \\dots, \\mathbb{E}[X_d])^\\top\\)",
  "id": "vecteur-gaussien-02",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "D'après la propriété de linéarité de l'espérance pour les vecteurs aléatoires, pour \\(A \\in \\mathbb{R}^{n\\times d}\\) et \\(c \\in \\mathbb{R}^d\\), que vaut \\(\\mathbb{E}[AX+c]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(A\\,\\mathbb{E}[X] + c\\)"
   },
   {
    "key": "b",
    "text": "\\(A\\,\\mathbb{E}[X]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{E}[X] + c\\)"
   },
   {
    "key": "d",
    "text": "\\(A^\\top \\mathbb{E}[X] + c\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(A\\,\\mathbb{E}[X] + c\\)",
  "id": "vecteur-gaussien-03",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "Soit \\(X\\) un vecteur aléatoire avec \\(\\mathbb{E}[X] = (2, -1, 3)^\\top\\). On pose \\(A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -1 \\end{pmatrix}\\) et \\(c = (1, 2)^\\top\\). En utilisant \\(\\mathbb{E}[AX+c] = A\\,\\mathbb{E}[X] + c\\), quelle est la première composante de \\(\\mathbb{E}[AX+c]\\) ?",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "vecteur-gaussien-04",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Dans la matrice de covariance \\(\\mathrm{Var}[X]\\) d'un vecteur aléatoire \\(X=(X_1,\\dots,X_d)\\), que trouve-t-on sur la diagonale ?",
  "opts": [
   {
    "key": "a",
    "text": "Les variances marginales \\(\\mathrm{Var}[X_i]\\)"
   },
   {
    "key": "b",
    "text": "Les covariances croisées \\(\\mathrm{Cov}[X_i,X_j]\\) pour \\(i\\neq j\\)"
   },
   {
    "key": "c",
    "text": "Les espérances \\(\\mathbb{E}[X_i]\\)"
   },
   {
    "key": "d",
    "text": "Des zéros, par construction"
   }
  ],
  "ans": "a",
  "ansText": "Les variances marginales \\(\\mathrm{Var}[X_i]\\)",
  "id": "vecteur-gaussien-05",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'écriture matricielle de la matrice de covariance d'un vecteur aléatoire \\(X\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathrm{Var}[X] = \\mathbb{E}\\big[(X-\\mathbb{E}[X])(X-\\mathbb{E}[X])^\\top\\big]\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathrm{Var}[X] = \\mathbb{E}\\big[(X-\\mathbb{E}[X])^\\top(X-\\mathbb{E}[X])\\big]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathrm{Var}[X] = (X-\\mathbb{E}[X])(X-\\mathbb{E}[X])^\\top\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathrm{Var}[X] = \\mathbb{E}[XX^\\top] - \\mathbb{E}[X]\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\mathrm{Var}[X] = \\mathbb{E}\\big[(X-\\mathbb{E}[X])(X-\\mathbb{E}[X])^\\top\\big]\\)",
  "id": "vecteur-gaussien-06",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Comment le cours définit-il, de façon simplifiée, un vecteur gaussien \\(X = (X_1,\\dots,X_d)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un vecteur aléatoire dont les composantes sont des variables aléatoires gaussiennes indépendantes"
   },
   {
    "key": "b",
    "text": "Un vecteur aléatoire dont seule la moyenne des composantes suit une loi normale"
   },
   {
    "key": "c",
    "text": "Un vecteur aléatoire dont la norme au carré suit une loi normale"
   },
   {
    "key": "d",
    "text": "Un vecteur aléatoire dont les composantes sont corrélées et de même variance"
   }
  ],
  "ans": "a",
  "ansText": "Un vecteur aléatoire dont les composantes sont des variables aléatoires gaussiennes indépendantes",
  "id": "vecteur-gaussien-07",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Dans le théorème de Cochran, on décompose \\(\\mathbb{R}^n\\) en somme directe orthogonale de sous-espaces \\(E_k\\) de dimension \\(d_k\\). Que représente la matrice \\(P_k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "La matrice de projection orthogonale sur le sous-espace \\(E_k\\)"
   },
   {
    "key": "b",
    "text": "L'inverse de la matrice de covariance de \\(X\\)"
   },
   {
    "key": "c",
    "text": "La matrice identité restreinte à \\(E_k\\)"
   },
   {
    "key": "d",
    "text": "La matrice de corrélation entre les projections \\(Y_k\\)"
   }
  ],
  "ans": "a",
  "ansText": "La matrice de projection orthogonale sur le sous-espace \\(E_k\\)",
  "id": "vecteur-gaussien-08",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Soit \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2 I_n)\\) et \\(Y_k\\) la projection orthogonale de \\(X\\) sur \\(E_k\\). D'après le point (i) du théorème de Cochran, que peut-on dire des vecteurs \\(Y_k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Ce sont des vecteurs gaussiens indépendants et \\(Y_k \\sim \\mathcal{N}(P_k\\mu, \\sigma^2 P_k)\\)"
   },
   {
    "key": "b",
    "text": "Ce sont des vecteurs gaussiens indépendants et \\(Y_k \\sim \\mathcal{N}(\\mu, \\sigma^2 I_n)\\)"
   },
   {
    "key": "c",
    "text": "Ce sont des vecteurs gaussiens mais corrélés entre eux"
   },
   {
    "key": "d",
    "text": "Ce sont des vecteurs de loi \\(\\chi^2_{d_k}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Ce sont des vecteurs gaussiens indépendants et \\(Y_k \\sim \\mathcal{N}(P_k\\mu, \\sigma^2 P_k)\\)",
  "id": "vecteur-gaussien-09",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "D'après le point (ii) du théorème de Cochran, quelle est la loi de \\(\\frac{1}{\\sigma^2}\\|Y_k - P_k\\mu\\|^2\\) et quelle propriété ont ces variables pour \\(k=1,\\dots,p\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles suivent une loi \\(\\chi^2_{d_k}\\) et sont indépendantes"
   },
   {
    "key": "b",
    "text": "Elles suivent une loi \\(\\mathcal{N}(0,1)\\) et sont indépendantes"
   },
   {
    "key": "c",
    "text": "Elles suivent une loi \\(\\chi^2_{d_k}\\) mais sont corrélées"
   },
   {
    "key": "d",
    "text": "Elles suivent toutes une loi \\(\\chi^2_n\\)"
   }
  ],
  "ans": "a",
  "ansText": "Elles suivent une loi \\(\\chi^2_{d_k}\\) et sont indépendantes",
  "id": "vecteur-gaussien-10",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Dans la démonstration du théorème de Cochran, quelles propriétés vérifient les matrices de projection orthogonale \\(P_k\\) associées à la décomposition orthogonale \\(\\mathbb{R}^n = \\bigoplus_{k=1}^p E_k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles sont symétriques, idempotentes, \\(P_k P_\\ell = 0\\) pour \\(k\\neq \\ell\\), et \\(\\sum_{k=1}^p P_k = I_n\\)"
   },
   {
    "key": "b",
    "text": "Elles sont antisymétriques et \\(\\sum_{k=1}^p P_k = 0\\)"
   },
   {
    "key": "c",
    "text": "Elles sont symétriques mais \\(P_k P_\\ell = I_n\\) pour \\(k \\neq \\ell\\)"
   },
   {
    "key": "d",
    "text": "Elles sont inversibles et \\(P_k^{-1} = P_k^\\top\\)"
   }
  ],
  "ans": "a",
  "ansText": "Elles sont symétriques, idempotentes, \\(P_k P_\\ell = 0\\) pour \\(k\\neq \\ell\\), et \\(\\sum_{k=1}^p P_k = I_n\\)",
  "id": "vecteur-gaussien-11",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Dans la démonstration, on pose \\(X' \\sim \\mathcal{N}_n(0, I_n)\\) et \\(Y_k = P_k X'\\). Pourquoi peut-on affirmer que \\(Y_k\\) est un vecteur gaussien ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que toute transformation linéaire d'un vecteur gaussien est encore un vecteur gaussien"
   },
   {
    "key": "b",
    "text": "Parce que \\(P_k\\) est une matrice diagonale"
   },
   {
    "key": "c",
    "text": "Parce que \\(X'\\) est centré réduit"
   },
   {
    "key": "d",
    "text": "Parce que \\(\\|Y_k\\|^2\\) suit une loi du \\(\\chi^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Parce que toute transformation linéaire d'un vecteur gaussien est encore un vecteur gaussien",
  "id": "vecteur-gaussien-12",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Toujours dans la démonstration, on calcule \\(\\mathrm{Cov}[Y_k, Y_\\ell] = P_k \\mathbb{E}[X'X'^\\top] P_\\ell = P_k P_\\ell = 0\\) pour \\(k \\neq \\ell\\). Comment en déduit-on que \\(Y_k\\) et \\(Y_\\ell\\) sont indépendants ?",
  "opts": [
   {
    "key": "a",
    "text": "Comme \\(Y_k\\) et \\(Y_\\ell\\) sont gaussiens et que leur covariance est nulle, non-corrélation implique indépendance"
   },
   {
    "key": "b",
    "text": "On invoque le théorème central limite"
   },
   {
    "key": "c",
    "text": "On calcule explicitement la loi jointe par intégration multiple"
   },
   {
    "key": "d",
    "text": "L'indépendance est supposée dès le départ, sans justification"
   }
  ],
  "ans": "a",
  "ansText": "Comme \\(Y_k\\) et \\(Y_\\ell\\) sont gaussiens et que leur covariance est nulle, non-corrélation implique indépendance",
  "id": "vecteur-gaussien-13",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "On considère \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2 I_n)\\) et \\(v=(1,\\dots,1)^\\top \\in \\mathbb{R}^n\\), \\(V=\\mathrm{span}(v)\\). Que représente la projection orthogonale \\(p_V(X) = \\frac{\\langle v, X\\rangle}{\\|v\\|^2} v\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Le vecteur dont toutes les composantes valent \\(\\bar X\\) (la moyenne empirique des \\(X_i\\))"
   },
   {
    "key": "b",
    "text": "Le vecteur \\(X\\) lui-même"
   },
   {
    "key": "c",
    "text": "Le vecteur nul"
   },
   {
    "key": "d",
    "text": "Le vecteur \\((X_1, 0, \\dots, 0)^\\top\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le vecteur dont toutes les composantes valent \\(\\bar X\\) (la moyenne empirique des \\(X_i\\))",
  "id": "vecteur-gaussien-14",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "Pour \\(X = (2,4,6)^\\top \\in \\mathbb{R}^3\\) et \\(v=(1,1,1)^\\top\\), on calcule \\(p_V(X) = \\frac{\\langle v,X\\rangle}{\\|v\\|^2} v\\). Quelle est la valeur commune des composantes de \\(p_V(X)\\) ?",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "vecteur-gaussien-15",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Comment s'écrit la projection orthogonale de \\(X\\) sur \\(V^\\perp\\) (l'orthogonal de \\(V=\\mathrm{span}(v)\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(p_{V^\\perp}(X) = X - \\bar X (1,\\dots,1)^\\top = (X_1-\\bar X, \\dots, X_n-\\bar X)^\\top\\)"
   },
   {
    "key": "b",
    "text": "\\(p_{V^\\perp}(X) = \\bar X (1,\\dots,1)^\\top\\)"
   },
   {
    "key": "c",
    "text": "\\(p_{V^\\perp}(X) = X + \\bar X (1,\\dots,1)^\\top\\)"
   },
   {
    "key": "d",
    "text": "\\(p_{V^\\perp}(X) = (X_1, \\dots, X_n)^\\top\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p_{V^\\perp}(X) = X - \\bar X (1,\\dots,1)^\\top = (X_1-\\bar X, \\dots, X_n-\\bar X)^\\top\\)",
  "id": "vecteur-gaussien-16",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "Toujours avec \\(X=(2,4,6)^\\top\\), quelle est la première composante de \\(p_{V^\\perp}(X) = (X_1-\\bar X, \\dots, X_n - \\bar X)^\\top\\) ?",
  "ans": -2,
  "ansText": "-2",
  "tol": 0.01,
  "id": "vecteur-gaussien-17",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Pourquoi les vecteurs \\(p_V(X)\\) et \\(p_{V^\\perp}(X)\\) sont-ils indépendants ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que \\(V\\) et \\(V^\\perp\\) sont des sous-espaces orthogonaux et que \\(X\\) est gaussien : le théorème de Cochran s'applique"
   },
   {
    "key": "b",
    "text": "Parce que \\(V\\) et \\(V^\\perp\\) ont la même dimension"
   },
   {
    "key": "c",
    "text": "Parce que \\(\\bar X\\) est une constante"
   },
   {
    "key": "d",
    "text": "Parce que \\(p_V(X)\\) et \\(p_{V^\\perp}(X)\\) ont la même loi"
   }
  ],
  "ans": "a",
  "ansText": "Parce que \\(V\\) et \\(V^\\perp\\) sont des sous-espaces orthogonaux et que \\(X\\) est gaussien : le théorème de Cochran s'applique",
  "id": "vecteur-gaussien-18",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Quelle conséquence directe du théorème de Cochran obtient-on à partir de l'indépendance de \\(p_V(X)\\) et \\(p_{V^\\perp}(X)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\bar X\\) et \\(\\frac{1}{n}\\sum_{i=1}^n (X_i-\\bar X)^2\\) sont indépendants"
   },
   {
    "key": "b",
    "text": "\\(\\bar X\\) et \\(\\frac{1}{n}\\sum_{i=1}^n X_i^2\\) sont égaux"
   },
   {
    "key": "c",
    "text": "\\(X_1\\) et \\(X_2\\) sont indépendants"
   },
   {
    "key": "d",
    "text": "\\(\\bar X\\) suit une loi \\(\\chi^2(n-1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\bar X\\) et \\(\\frac{1}{n}\\sum_{i=1}^n (X_i-\\bar X)^2\\) sont indépendants",
  "id": "vecteur-gaussien-19",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "Le théorème de Cochran assure que \\(p_V(X) \\sim \\chi^2(1)\\) et \\(p_{V^\\perp}(X) \\sim \\chi^2(n-1)\\) (degrés de liberté égaux aux dimensions de \\(V\\) et \\(V^\\perp\\)). Pour \\(n=10\\), quel est le nombre de degrés de liberté associé à \\(p_{V^\\perp}(X)\\) ?",
  "ans": 9,
  "ansText": "9",
  "tol": 0.01,
  "id": "vecteur-gaussien-20",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "L'espérance d'une variable suivant une loi \\(\\chi^2(k)\\) vaut \\(k\\). Quelle est l'espérance d'une loi \\(\\chi^2(7)\\) ?",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "vecteur-gaussien-21",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "num",
  "q": "En utilisant \\(E\\left[\\frac{1}{\\sigma^2}\\|p_{V^\\perp}(X)\\|^2\\right] = n-1\\), quelle est la valeur de cette espérance pour \\(n=15\\) ?",
  "ans": 14,
  "ansText": "14",
  "tol": 0.01,
  "id": "vecteur-gaussien-22",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Sachant que \\(E\\left[\\frac{1}{\\sigma^2}\\|p_{V^\\perp}(X)\\|^2\\right] = n-1\\), c'est-à-dire \\(\\frac{1}{\\sigma^2}E\\left[\\sum_{i=1}^n (X_i-\\bar X)^2\\right] = n-1\\), quel estimateur sans biais de \\(\\sigma^2\\) en déduit-on ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{1}{n-1}\\sum_{i=1}^n (X_i-\\bar X)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{1}{n}\\sum_{i=1}^n (X_i-\\bar X)^2\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac{1}{n-1}\\sum_{i=1}^n X_i^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac{1}{n}\\sum_{i=1}^n X_i^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{1}{n-1}\\sum_{i=1}^n (X_i-\\bar X)^2\\)",
  "id": "vecteur-gaussien-23",
  "cat": "vecteur-gaussien"
 },
 {
  "type": "qcm",
  "q": "Dans le modèle linéaire gaussien multiple, comment s'écrit le modèle sous forme matricielle, avec \\(\\beta \\in \\mathbb{R}^{p+1}\\) et \\(\\varepsilon\\) le vecteur des erreurs ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y = X\\beta + \\varepsilon\\)"
   },
   {
    "key": "b",
    "text": "\\(y = \\beta X + \\varepsilon\\)"
   },
   {
    "key": "c",
    "text": "\\(X = y\\beta + \\varepsilon\\)"
   },
   {
    "key": "d",
    "text": "\\(y = X\\beta \\cdot \\varepsilon\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(y = X\\beta + \\varepsilon\\)",
  "id": "mlg-multiple-01",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "On dispose de \\(n\\) observations et de \\(p\\) variables explicatives \\(X_1,\\dots,X_p\\). Quelle est la taille de la matrice de design \\(X\\) (avec la colonne de constante) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(n \\times (p+1)\\)"
   },
   {
    "key": "b",
    "text": "\\(n \\times p\\)"
   },
   {
    "key": "c",
    "text": "\\((p+1) \\times n\\)"
   },
   {
    "key": "d",
    "text": "\\(n \\times (p-1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(n \\times (p+1)\\)",
  "id": "mlg-multiple-02",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Le modèle linéaire gaussien multiple est dit identifiable si et seulement si...",
  "opts": [
   {
    "key": "a",
    "text": "le rang de \\(X\\) est égal à \\(p+1\\), i.e. les colonnes de \\(X\\) sont linéairement indépendantes"
   },
   {
    "key": "b",
    "text": "le rang de \\(X\\) est égal à \\(n\\)"
   },
   {
    "key": "c",
    "text": "la matrice \\(X\\) est carrée"
   },
   {
    "key": "d",
    "text": "le déterminant de \\(X\\) est nul"
   }
  ],
  "ans": "a",
  "ansText": "le rang de \\(X\\) est égal à \\(p+1\\), i.e. les colonnes de \\(X\\) sont linéairement indépendantes",
  "id": "mlg-multiple-03",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour un petit jeu de données, on a calculé \\(X^\\top X = \\begin{pmatrix} 5 & 15 \\\\ 15 & 55 \\end{pmatrix}\\) et \\(X^\\top y = \\begin{pmatrix} 40 \\\\ 130 \\end{pmatrix}\\). En utilisant \\(\\hat{\\beta} = (X^\\top X)^{-1} X^\\top y\\), calculer la première composante \\(\\hat{\\beta}_0\\) (la constante).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "mlg-multiple-04",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Avec les mêmes données que la question précédente (\\(X^\\top X = \\begin{pmatrix} 5 & 15 \\\\ 15 & 55 \\end{pmatrix}\\), \\(X^\\top y = \\begin{pmatrix} 40 \\\\ 130 \\end{pmatrix}\\)), calculer \\(\\hat{\\beta}_1\\), le coefficient associé à la variable explicative.",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "mlg-multiple-05",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 5.2, quelle est la matrice de variance-covariance de l'estimateur des moindres carrés \\(\\hat{\\beta}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\text{Var}[\\hat{\\beta}] = \\sigma^2 (X^\\top X)^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\text{Var}[\\hat{\\beta}] = \\sigma^2 X^\\top X\\)"
   },
   {
    "key": "c",
    "text": "\\(\\text{Var}[\\hat{\\beta}] = \\sigma^2 (X^\\top X)^{-1} X^\\top\\)"
   },
   {
    "key": "d",
    "text": "\\(\\text{Var}[\\hat{\\beta}] = (X^\\top X)^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\text{Var}[\\hat{\\beta}] = \\sigma^2 (X^\\top X)^{-1}\\)",
  "id": "mlg-multiple-06",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 5.2 (point iii), l'estimateur des moindres carrés ordinaires \\(\\hat{\\beta}\\) est...",
  "opts": [
   {
    "key": "a",
    "text": "l'estimateur linéaire sans biais de variance minimale parmi tous les estimateurs linéaires sans biais de \\(\\beta\\)"
   },
   {
    "key": "b",
    "text": "l'estimateur de variance maximale parmi les estimateurs sans biais"
   },
   {
    "key": "c",
    "text": "un estimateur biaisé mais convergent"
   },
   {
    "key": "d",
    "text": "un estimateur non linéaire en \\(y\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'estimateur linéaire sans biais de variance minimale parmi tous les estimateurs linéaires sans biais de \\(\\beta\\)",
  "id": "mlg-multiple-07",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour construire la vraisemblance du modèle linéaire gaussien multiple, quelle hypothèse fait-on sur les erreurs \\(\\varepsilon_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "les \\(\\varepsilon_i\\) sont i.i.d. de loi \\(\\mathcal{N}(0, \\sigma^2)\\)"
   },
   {
    "key": "b",
    "text": "les \\(\\varepsilon_i\\) suivent une loi uniforme \\(\\mathcal{U}(0,1)\\)"
   },
   {
    "key": "c",
    "text": "les \\(\\varepsilon_i\\) sont i.i.d. de loi \\(\\mathcal{N}(0,1)\\) mais corrélées entre elles"
   },
   {
    "key": "d",
    "text": "chaque \\(\\varepsilon_i\\) a une variance \\(\\sigma_i^2\\) différente selon \\(i\\)"
   }
  ],
  "ans": "a",
  "ansText": "les \\(\\varepsilon_i\\) sont i.i.d. de loi \\(\\mathcal{N}(0, \\sigma^2)\\)",
  "id": "mlg-multiple-08",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression correcte de la log-vraisemblance \\(\\ell(\\beta, \\sigma^2 ; y, X)\\) du modèle linéaire gaussien multiple ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ell(\\beta,\\sigma^2;y,X) = -\\dfrac{n}{2}\\ln(2\\pi) - \\dfrac{n}{2}\\ln(\\sigma^2) - \\dfrac{\\|y - X\\beta\\|_2^2}{2\\sigma^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ell(\\beta,\\sigma^2;y,X) = \\dfrac{n}{2}\\ln(2\\pi) + \\dfrac{n}{2}\\ln(\\sigma^2) + \\dfrac{\\|y - X\\beta\\|_2^2}{2\\sigma^2}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ell(\\beta,\\sigma^2;y,X) = -n\\ln(2\\pi\\sigma^2) - \\|y - X\\beta\\|_2^2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ell(\\beta,\\sigma^2;y,X) = -\\dfrac{n}{2}\\ln(2\\pi) - \\dfrac{n}{2}\\ln(\\sigma^2) + \\dfrac{\\|y - X\\beta\\|_2^2}{2\\sigma^2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ell(\\beta,\\sigma^2;y,X) = -\\dfrac{n}{2}\\ln(2\\pi) - \\dfrac{n}{2}\\ln(\\sigma^2) - \\dfrac{\\|y - X\\beta\\|_2^2}{2\\sigma^2}\\)",
  "id": "mlg-multiple-09",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour un modèle avec \\(n = 12\\) observations, la maximisation de la vraisemblance donne \\(\\|y - X\\hat{\\beta}\\|_2^2 = 72\\). Calculer l'estimateur du maximum de vraisemblance \\(\\hat{\\sigma}^2_{MV} = \\dfrac{\\|y - X\\hat{\\beta}\\|_2^2}{n}\\).",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "mlg-multiple-10",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "L'estimateur \\(\\hat{\\sigma}^2 = \\|y-X\\hat\\beta\\|_2^2/n\\) obtenu par maximum de vraisemblance est-il sans biais pour \\(\\sigma^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Non, il est biaisé (il faudrait diviser par \\(n-p-1\\) et non par \\(n\\) pour le rendre sans biais)"
   },
   {
    "key": "b",
    "text": "Oui, il est toujours sans biais"
   },
   {
    "key": "c",
    "text": "Oui, mais seulement lorsque \\(n\\) est pair"
   },
   {
    "key": "d",
    "text": "Non, et de plus il surestime toujours \\(\\sigma^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Non, il est biaisé (il faudrait diviser par \\(n-p-1\\) et non par \\(n\\) pour le rendre sans biais)",
  "id": "mlg-multiple-11",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On considère \\(n=12\\) observations et \\(p=3\\) variables explicatives, avec une somme des carrés résiduels \\(\\sum_{i=1}^n \\hat\\varepsilon_i^2 = 72\\). Calculer l'estimateur sans biais \\(\\hat\\sigma^2 = \\dfrac{1}{n-p-1}\\sum_{i=1}^n \\hat\\varepsilon_i^2\\).",
  "ans": 9,
  "ansText": "9",
  "tol": 0.01,
  "id": "mlg-multiple-12",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 5.3, l'estimateur \\(\\hat\\sigma^2 = \\dfrac{1}{n-p-1}\\sum_{i=1}^n \\hat\\varepsilon_i^2\\) est...",
  "opts": [
   {
    "key": "a",
    "text": "un estimateur sans biais de \\(\\sigma^2\\)"
   },
   {
    "key": "b",
    "text": "un estimateur biaisé mais convergent de \\(\\sigma^2\\)"
   },
   {
    "key": "c",
    "text": "un estimateur sans biais de \\(\\sigma\\)"
   },
   {
    "key": "d",
    "text": "un estimateur biaisé qui surestime systématiquement \\(\\sigma^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "un estimateur sans biais de \\(\\sigma^2\\)",
  "id": "mlg-multiple-13",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Dans la démonstration de la Proposition 5.3, le facteur de correction \\(n-p-1\\) provient du fait que...",
  "opts": [
   {
    "key": "a",
    "text": "c'est la dimension du sous-espace orthogonal à l'espace engendré par les colonnes de \\(X\\), i.e. la trace du projecteur \\(L = I_n - H\\)"
   },
   {
    "key": "b",
    "text": "c'est le nombre total de paramètres du modèle"
   },
   {
    "key": "c",
    "text": "c'est la dimension de l'espace engendré par les colonnes de \\(X\\)"
   },
   {
    "key": "d",
    "text": "c'est le nombre d'observations \\(n\\) uniquement"
   }
  ],
  "ans": "a",
  "ansText": "c'est la dimension du sous-espace orthogonal à l'espace engendré par les colonnes de \\(X\\), i.e. la trace du projecteur \\(L = I_n - H\\)",
  "id": "mlg-multiple-14",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour tester si la j-ème variable explicative apporte une information significative, quelles sont les hypothèses du test ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_0 : \\beta_j = 0\\) contre \\(H_1 : \\beta_j \\neq 0\\)"
   },
   {
    "key": "b",
    "text": "\\(H_0 : \\beta_j \\neq 0\\) contre \\(H_1 : \\beta_j = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(H_0 : \\beta_j = \\beta_0\\) contre \\(H_1 : \\beta_j \\neq \\beta_0\\)"
   },
   {
    "key": "d",
    "text": "\\(H_0 : \\sigma^2 = 0\\) contre \\(H_1 : \\sigma^2 \\neq 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(H_0 : \\beta_j = 0\\) contre \\(H_1 : \\beta_j \\neq 0\\)",
  "id": "mlg-multiple-15",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "D'après le Corollaire 5.1, quelle est la loi de la statistique \\(\\dfrac{\\hat\\beta_j - \\beta_j}{\\hat\\sigma_{\\hat\\beta_j}}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "une loi de Student à \\(n-(p+1)\\) degrés de liberté"
   },
   {
    "key": "b",
    "text": "une loi normale centrée réduite \\(\\mathcal{N}(0,1)\\)"
   },
   {
    "key": "c",
    "text": "une loi du \\(\\chi^2\\) à \\(p\\) degrés de liberté"
   },
   {
    "key": "d",
    "text": "une loi de Fisher à \\(p\\) et \\(n-p-1\\) degrés de liberté"
   }
  ],
  "ans": "a",
  "ansText": "une loi de Student à \\(n-(p+1)\\) degrés de liberté",
  "id": "mlg-multiple-16",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On a estimé \\(\\hat\\beta_j = 3\\), \\(\\hat\\sigma = 2\\) et le terme diagonal correspondant de \\((X^\\top X)^{-1}\\) vaut \\(C_{jj} = 0.25\\). Calculer la statistique de test \\(t_{test} = \\dfrac{\\hat\\beta_j}{\\hat\\sigma \\sqrt{C_{jj}}}\\) pour tester \\(H_0 : \\beta_j = 0\\).",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "mlg-multiple-17",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Dans un test bilatéral de nullité du coefficient \\(\\beta_j\\), au risque d'erreur \\(\\alpha\\), on rejette \\(H_0\\) lorsque...",
  "opts": [
   {
    "key": "a",
    "text": "\\(|t_{test}| \\geq t_{1-\\alpha/2, n-p-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(t_{test} \\leq t_{\\alpha, n-p-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(|t_{test}| \\leq t_{1-\\alpha/2, n-p-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(t_{test}^2 \\leq f_{p,n-p-1,1-\\alpha}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(|t_{test}| \\geq t_{1-\\alpha/2, n-p-1}\\)",
  "id": "mlg-multiple-18",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme correcte de l'intervalle de confiance de niveau \\(1-\\alpha\\) sur une prédiction individuelle \\(\\hat y_{new}\\) pour une nouvelle observation \\(x_{new}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{1 + x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat y_{new} \\pm z_{1-\\alpha/2}\\, \\hat\\sigma\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma^2 (1 + x_{new}^\\top (X^\\top X)^{-1} x_{new})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{1 + x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)",
  "id": "mlg-multiple-19",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme correcte de l'intervalle de confiance de niveau \\(1-\\alpha\\) sur la valeur moyenne prédite \\(E[y_{new}]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{1 + x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat y_{new} \\pm z_{1-\\alpha/2}\\, \\hat\\sigma \\sqrt{x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat y_{new} \\pm t_{1-\\alpha/2,n-p-1}\\, \\hat\\sigma \\sqrt{x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\)",
  "id": "mlg-multiple-20",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour une nouvelle observation, on a \\(\\hat y_{new} = 20\\), \\(t_{1-\\alpha/2,n-p-1} = 2\\), \\(\\hat\\sigma = 1.5\\) et \\(x_{new}^\\top (X^\\top X)^{-1} x_{new} = 3\\). Calculer la borne supérieure de l'intervalle de confiance sur la prédiction individuelle \\(\\hat y_{new} + t_{1-\\alpha/2,n-p-1}\\hat\\sigma\\sqrt{1 + x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\).",
  "ans": 26,
  "ansText": "26",
  "tol": 0.01,
  "id": "mlg-multiple-21",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour une nouvelle observation, on a \\(\\hat y_{new} = 50\\), \\(t_{1-\\alpha/2,n-p-1} = 2.5\\), \\(\\hat\\sigma = 2\\) et \\(x_{new}^\\top (X^\\top X)^{-1} x_{new} = 4\\). Calculer la borne inférieure de l'intervalle de confiance sur la valeur moyenne prédite \\(\\hat y_{new} - t_{1-\\alpha/2,n-p-1}\\hat\\sigma\\sqrt{x_{new}^\\top (X^\\top X)^{-1} x_{new}}\\).",
  "ans": 40,
  "ansText": "40",
  "tol": 0.01,
  "id": "mlg-multiple-22",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour une même nouvelle observation \\(x_{new}\\), comment se comparent l'intervalle de confiance sur la prédiction individuelle et celui sur la valeur moyenne prédite ?",
  "opts": [
   {
    "key": "a",
    "text": "l'intervalle sur la prédiction individuelle est toujours plus large, car il intègre une incertitude supplémentaire (le terme \\(+1\\) sous la racine)"
   },
   {
    "key": "b",
    "text": "l'intervalle sur la valeur moyenne prédite est toujours plus large"
   },
   {
    "key": "c",
    "text": "les deux intervalles ont toujours exactement la même largeur"
   },
   {
    "key": "d",
    "text": "cela dépend uniquement du signe de \\(\\hat y_{new}\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'intervalle sur la prédiction individuelle est toujours plus large, car il intègre une incertitude supplémentaire (le terme \\(+1\\) sous la racine)",
  "id": "mlg-multiple-23",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelle est la décomposition de la variance totale utilisée pour construire le test de significativité globale du modèle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\text{SCT} = \\text{SCE} + \\text{SCR}\\), avec \\(\\text{SCT} = \\sum(y_i-\\bar y)^2\\), \\(\\text{SCE} = \\sum(\\hat y_i - \\bar y)^2\\), \\(\\text{SCR} = \\sum(y_i-\\hat y_i)^2\\)"
   },
   {
    "key": "b",
    "text": "\\(\\text{SCT} = \\text{SCE} - \\text{SCR}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\text{SCR} = \\text{SCT} \\times \\text{SCE}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\text{SCE} = \\text{SCT} + \\text{SCR}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\text{SCT} = \\text{SCE} + \\text{SCR}\\), avec \\(\\text{SCT} = \\sum(y_i-\\bar y)^2\\), \\(\\text{SCE} = \\sum(\\hat y_i - \\bar y)^2\\), \\(\\text{SCR} = \\sum(y_i-\\hat y_i)^2\\)",
  "id": "mlg-multiple-24",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour un modèle donné, on a \\(\\text{SCE} = 180\\) et \\(\\text{SCT} = 240\\). Calculer le coefficient de détermination \\(R^2 = \\text{SCE}/\\text{SCT}\\).",
  "ans": 0.75,
  "ansText": "0.75",
  "tol": 0.001,
  "id": "mlg-multiple-25",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Avec \\(\\text{SCT} = 240\\) et \\(\\text{SCE} = 180\\), calculer la somme des carrés résiduels \\(\\text{SCR} = \\text{SCT} - \\text{SCE}\\).",
  "ans": 60,
  "ansText": "60",
  "tol": 0.01,
  "id": "mlg-multiple-26",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On a \\(R^2 = 0.75\\) pour un modèle avec \\(n=20\\) observations et \\(p=4\\) variables explicatives. Calculer le coefficient de détermination ajusté \\(R^2_{ajusté} = 1 - \\dfrac{n-1}{n-p-1}(1-R^2)\\).",
  "ans": 0.6833,
  "ansText": "≈ 0.683",
  "tol": 0.01,
  "id": "mlg-multiple-27",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pourquoi introduit-on le coefficient de détermination ajusté \\(R^2_{ajusté}\\) plutôt que d'utiliser uniquement \\(R^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "car \\(R^2\\) augmente naturellement avec le nombre \\(p\\) de variables explicatives, même non pertinentes"
   },
   {
    "key": "b",
    "text": "car \\(R^2\\) diminue toujours quand on ajoute des variables"
   },
   {
    "key": "c",
    "text": "car \\(R^2\\) n'est jamais compris entre 0 et 1"
   },
   {
    "key": "d",
    "text": "car \\(R^2_{ajusté}\\) ne dépend pas de \\(n\\)"
   }
  ],
  "ans": "a",
  "ansText": "car \\(R^2\\) augmente naturellement avec le nombre \\(p\\) de variables explicatives, même non pertinentes",
  "id": "mlg-multiple-28",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour tester la significativité globale du modèle, on a \\(\\text{SCE}=180\\) avec \\(p=4\\) variables, et \\(\\text{SCR}=60\\) avec \\(n=20\\) observations. En utilisant \\(MSE = \\text{SCE}/p\\), \\(MSR = \\text{SCR}/(n-p-1)\\) et \\(F_{test} = MSE/MSR\\), calculer \\(F_{test}\\).",
  "ans": 11.25,
  "ansText": "11.25",
  "tol": 0.01,
  "id": "mlg-multiple-29",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Le critère du VIF (Variance Inflation Factor) associé à une variable \\(X_j\\) est défini, à partir du \\(R_j^2\\) de la régression de \\(X_j\\) sur les autres variables, par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(VIF(X_j) = \\dfrac{1}{1-R_j^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(VIF(X_j) = 1 - R_j^2\\)"
   },
   {
    "key": "c",
    "text": "\\(VIF(X_j) = R_j^2\\)"
   },
   {
    "key": "d",
    "text": "\\(VIF(X_j) = \\dfrac{1}{R_j^2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(VIF(X_j) = \\dfrac{1}{1-R_j^2}\\)",
  "id": "mlg-multiple-30",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "La régression de \\(X_j\\) sur les autres variables explicatives donne un coefficient de détermination \\(R_j^2 = 0.95\\). Calculer \\(VIF(X_j) = \\dfrac{1}{1-R_j^2}\\).",
  "ans": 20,
  "ansText": "20",
  "tol": 0.01,
  "id": "mlg-multiple-31",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Une variable est jugée redondante et potentiellement exclue lorsque son VIF dépasse un seuil (10, ou 5 selon certains auteurs). Lorsque plusieurs variables dépassent ce seuil, la procédure décrite dans le cours consiste à...",
  "opts": [
   {
    "key": "a",
    "text": "supprimer uniquement la variable ayant le VIF le plus élevé, puis recalculer tous les VIF, et répéter jusqu'à ce que tous les VIF soient sous le seuil"
   },
   {
    "key": "b",
    "text": "supprimer toutes les variables dont le VIF dépasse le seuil en une seule fois"
   },
   {
    "key": "c",
    "text": "ne rien faire tant qu'au moins une variable a un VIF élevé"
   },
   {
    "key": "d",
    "text": "remplacer toutes les variables par leurs résidus"
   }
  ],
  "ans": "a",
  "ansText": "supprimer uniquement la variable ayant le VIF le plus élevé, puis recalculer tous les VIF, et répéter jusqu'à ce que tous les VIF soient sous le seuil",
  "id": "mlg-multiple-32",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour comparer deux modèles emboîtés estimés sur les mêmes \\(n=30\\) observations, avec \\(q=4\\) variables, on calcule le critère AIC \\(= n(\\ln(2\\pi)+1) + n\\ln\\!\\left(\\dfrac{\\|y-\\hat y(\\Omega_q)\\|_2^2}{n}\\right) + 2(q+2)\\), avec \\(\\|y-\\hat y(\\Omega_q)\\|_2^2 = 60\\). Calculer la valeur de l'AIC.",
  "ans": 117.93,
  "ansText": "≈ 117.93",
  "tol": 0.5,
  "id": "mlg-multiple-33",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour le même modèle (\\(n=30\\), \\(q=4\\), \\(\\|y-\\hat y(\\Omega_q)\\|_2^2 = 60\\)), calculer le critère BIC \\(= n(\\ln(2\\pi)+1) + n\\ln\\!\\left(\\dfrac{\\|y-\\hat y(\\Omega_q)\\|_2^2}{n}\\right) + \\ln(n)(q+2)\\).",
  "ans": 126.34,
  "ansText": "≈ 126.34",
  "tol": 0.5,
  "id": "mlg-multiple-34",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pourquoi le critère BIC a-t-il tendance à sélectionner des modèles plus parcimonieux (plus petits) que le critère AIC lorsque \\(n > 7\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "car dans ce cas \\(\\ln(n) > 2\\), donc le terme de pénalité \\(\\ln(n)(q+2)\\) du BIC est plus fort que le terme \\(2(q+2)\\) de l'AIC"
   },
   {
    "key": "b",
    "text": "car le BIC ne dépend pas de la somme des carrés résiduels"
   },
   {
    "key": "c",
    "text": "car le BIC utilise une loi de Fisher alors que l'AIC utilise une loi normale"
   },
   {
    "key": "d",
    "text": "car \\(\\ln(n) < 2\\) dès que \\(n > 7\\)"
   }
  ],
  "ans": "a",
  "ansText": "car dans ce cas \\(\\ln(n) > 2\\), donc le terme de pénalité \\(\\ln(n)(q+2)\\) du BIC est plus fort que le terme \\(2(q+2)\\) de l'AIC",
  "id": "mlg-multiple-35",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On compare deux modèles emboîtés \\(\\Omega_q\\) (\\(q=3\\) variables) et \\(\\Omega_{q+1}\\) sur \\(n=30\\) observations, avec \\(\\text{SCR}(\\Omega_q)=100\\) et \\(\\text{SCR}(\\Omega_{q+1})=80\\). En utilisant \\(F_{test} = \\dfrac{\\text{SCR}(\\Omega_q)-\\text{SCR}(\\Omega_{q+1})}{\\text{SCR}(\\Omega_{q+1})/(n-(q+2))}\\), calculer \\(F_{test}\\).",
  "ans": 6.25,
  "ansText": "6.25",
  "tol": 0.01,
  "id": "mlg-multiple-36",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Sous \\(H_0\\) (le modèle réduit \\(\\Omega_q\\) est valide), quelle est la loi suivie par la statistique de test comparant les modèles emboîtés \\(\\Omega_q\\) et \\(\\Omega_{q+1}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "une loi de Fisher à 1 et \\(n-(q+2)\\) degrés de liberté"
   },
   {
    "key": "b",
    "text": "une loi de Student à \\(n-p-1\\) degrés de liberté"
   },
   {
    "key": "c",
    "text": "une loi du \\(\\chi^2\\) à \\(q\\) degrés de liberté"
   },
   {
    "key": "d",
    "text": "une loi de Fisher à \\(q\\) et \\(n-q\\) degrés de liberté"
   }
  ],
  "ans": "a",
  "ansText": "une loi de Fisher à 1 et \\(n-(q+2)\\) degrés de liberté",
  "id": "mlg-multiple-37",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelles hypothèses du modèle linéaire gaussien doit-on vérifier a posteriori à l'aide de l'analyse des résidus ?",
  "opts": [
   {
    "key": "a",
    "text": "l'indépendance et l'identique distribution des observations, la normalité et l'homoscédasticité des erreurs"
   },
   {
    "key": "b",
    "text": "uniquement l'identifiabilité du modèle (rang de \\(X\\))"
   },
   {
    "key": "c",
    "text": "uniquement la significativité globale du modèle (test de Fisher)"
   },
   {
    "key": "d",
    "text": "uniquement le fait que \\(R^2\\) soit proche de 1"
   }
  ],
  "ans": "a",
  "ansText": "l'indépendance et l'identique distribution des observations, la normalité et l'homoscédasticité des erreurs",
  "id": "mlg-multiple-38",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Comment sont définis les résidus standardisés \\(r_i\\), à partir des résidus \\(\\hat\\varepsilon_i\\), de \\(\\hat\\sigma^2\\) et de la valeur \\(H_{ii}\\) (i-ème terme diagonal de la matrice de projection \\(H\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(r_i = \\dfrac{\\hat\\varepsilon_i}{\\hat\\sigma\\sqrt{1-H_{ii}}}\\)"
   },
   {
    "key": "b",
    "text": "\\(r_i = \\hat\\varepsilon_i \\times \\hat\\sigma\\sqrt{1-H_{ii}}\\)"
   },
   {
    "key": "c",
    "text": "\\(r_i = \\dfrac{\\hat\\varepsilon_i}{\\hat\\sigma^2 (1-H_{ii})}\\)"
   },
   {
    "key": "d",
    "text": "\\(r_i = \\dfrac{\\hat\\varepsilon_i - \\hat\\sigma}{1-H_{ii}}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(r_i = \\dfrac{\\hat\\varepsilon_i}{\\hat\\sigma\\sqrt{1-H_{ii}}}\\)",
  "id": "mlg-multiple-39",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour une observation, on a \\(\\hat\\varepsilon_i = 3\\), \\(\\hat\\sigma = 2\\) et \\(H_{ii} = 0.36\\). Calculer le résidu standardisé \\(r_i = \\dfrac{\\hat\\varepsilon_i}{\\hat\\sigma\\sqrt{1-H_{ii}}}\\).",
  "ans": 1.875,
  "ansText": "1.875",
  "tol": 0.01,
  "id": "mlg-multiple-40",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Quelle est la différence entre les résidus standardisés \\(r_i\\) et les résidus studentisés \\(\\tilde r_i\\), et pourquoi préfère-t-on ces derniers pour l'étude de l'homoscédasticité ?",
  "opts": [
   {
    "key": "a",
    "text": "les résidus studentisés utilisent \\(\\hat\\sigma_{(i)}\\), calculé sans l'observation \\(i\\), ce qui évite la dépendance entre \\(\\hat\\varepsilon_i\\) au numérateur et au dénominateur"
   },
   {
    "key": "b",
    "text": "les résidus studentisés sont toujours égaux aux résidus standardisés"
   },
   {
    "key": "c",
    "text": "les résidus studentisés ne dépendent pas de \\(H_{ii}\\)"
   },
   {
    "key": "d",
    "text": "les résidus studentisés sont calculés sans diviser par un estimateur de l'écart-type"
   }
  ],
  "ans": "a",
  "ansText": "les résidus studentisés utilisent \\(\\hat\\sigma_{(i)}\\), calculé sans l'observation \\(i\\), ce qui évite la dépendance entre \\(\\hat\\varepsilon_i\\) au numérateur et au dénominateur",
  "id": "mlg-multiple-41",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour diagnostiquer l'homoscédasticité, le cours recommande de tracer les résidus studentisés en fonction des valeurs prédites \\(\\hat y_i\\) plutôt qu'en fonction de \\(X_i\\) ou \\(Y_i\\), car...",
  "opts": [
   {
    "key": "a",
    "text": "le Théorème de Cochran garantit que les valeurs prédites \\(\\hat y_i\\) et les résidus \\(\\hat\\varepsilon_i\\) sont indépendants"
   },
   {
    "key": "b",
    "text": "\\(\\hat y_i\\) est toujours plus grand que \\(X_i\\)"
   },
   {
    "key": "c",
    "text": "cela évite d'avoir à estimer \\(\\sigma^2\\)"
   },
   {
    "key": "d",
    "text": "\\(X_i\\) n'est jamais disponible en pratique"
   }
  ],
  "ans": "a",
  "ansText": "le Théorème de Cochran garantit que les valeurs prédites \\(\\hat y_i\\) et les résidus \\(\\hat\\varepsilon_i\\) sont indépendants",
  "id": "mlg-multiple-42",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour un grand nombre d'observations \\(n\\), quelle règle utilise-t-on sur les résidus studentisés pour repérer une violation de l'hypothèse d'homoscédasticité ?",
  "opts": [
   {
    "key": "a",
    "text": "environ 95% des résidus studentisés devraient se trouver dans l'intervalle \\([-1.96, 1.96]\\)"
   },
   {
    "key": "b",
    "text": "tous les résidus doivent être strictement positifs"
   },
   {
    "key": "c",
    "text": "tous les résidus doivent être inférieurs à 1"
   },
   {
    "key": "d",
    "text": "la somme des résidus studentisés doit être supérieure à \\(n\\)"
   }
  ],
  "ans": "a",
  "ansText": "environ 95% des résidus studentisés devraient se trouver dans l'intervalle \\([-1.96, 1.96]\\)",
  "id": "mlg-multiple-43",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Concernant le test de Shapiro-Wilk pour vérifier la normalité des résidus, le cours indique que...",
  "opts": [
   {
    "key": "a",
    "text": "c'est un test extrêmement puissant mais très rigide, qui a tendance à rejeter très souvent l'hypothèse de normalité ; on lui préfère souvent une méthode graphique"
   },
   {
    "key": "b",
    "text": "c'est un test peu puissant qu'il ne faut jamais utiliser"
   },
   {
    "key": "c",
    "text": "il ne peut être appliqué qu'aux modèles linéaires simples"
   },
   {
    "key": "d",
    "text": "il remplace entièrement le graphique quantile-quantile"
   }
  ],
  "ans": "a",
  "ansText": "c'est un test extrêmement puissant mais très rigide, qui a tendance à rejeter très souvent l'hypothèse de normalité ; on lui préfère souvent une méthode graphique",
  "id": "mlg-multiple-44",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On considère un modèle avec \\(p=4\\) variables explicatives (donc \\(p+1=5\\) paramètres) et \\(n=25\\) observations. Calculer le seuil \\(\\dfrac{2(p+1)}{n}\\) utilisé pour repérer une valeur de levier (hat value) \\(h_i\\) aberrante.",
  "ans": 0.4,
  "ansText": "0.4",
  "tol": 0.001,
  "id": "mlg-multiple-45",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Pour une observation \\(i\\), on a \\((\\hat\\beta - \\hat\\beta_i)^\\top (X^\\top X)(\\hat\\beta - \\hat\\beta_i) = 12\\), avec \\(p+1 = 4\\) paramètres et \\(\\hat\\sigma^2 = 1.5\\). Calculer la distance de Cook \\(D_i = \\dfrac{(\\hat\\beta - \\hat\\beta_i)^\\top (X^\\top X)(\\hat\\beta - \\hat\\beta_i)}{(p+1)\\hat\\sigma^2}\\).",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "mlg-multiple-46",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Lorsque \\(\\text{Var}[\\varepsilon] = \\sigma^2 \\Sigma\\) avec \\(\\Sigma\\) connue et non égale à \\(I_n\\), quelle est la solution du problème des moindres carrés généralisés (GLS) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta = (X^\\top \\Sigma^{-1} X)^{-1} X^\\top \\Sigma^{-1} y\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta = (X^\\top X)^{-1} X^\\top y\\), comme dans le cas standard"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta = (X^\\top \\Sigma X)^{-1} X^\\top \\Sigma y\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta = \\Sigma^{-1}(X^\\top X)^{-1} X^\\top y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta = (X^\\top \\Sigma^{-1} X)^{-1} X^\\top \\Sigma^{-1} y\\)",
  "id": "mlg-multiple-47",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Dans le cas des moindres carrés pondérés (WLS), où \\(W = \\text{diag}(1/\\sigma_1^2,\\dots,1/\\sigma_n^2)\\), l'estimateur \\(\\hat\\beta\\) est donné par...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\beta = (X^\\top W X)^{-1} X^\\top W y\\), qui est un cas particulier des moindres carrés généralisés avec \\(\\Sigma^{-1} = W\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\beta = (X^\\top X)^{-1} X^\\top W y\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\beta = W(X^\\top X)^{-1} X^\\top y\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\beta = (X^\\top W X)^{-1} W y\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\beta = (X^\\top W X)^{-1} X^\\top W y\\), qui est un cas particulier des moindres carrés généralisés avec \\(\\Sigma^{-1} = W\\)",
  "id": "mlg-multiple-48",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Sous R, quelles sont les fonctions à utiliser pour ajuster respectivement un modèle par moindres carrés pondérés et par moindres carrés généralisés ?",
  "opts": [
   {
    "key": "a",
    "text": "la fonction lm avec l'argument weights pour les moindres carrés pondérés, et la fonction gls du package nlme pour les moindres carrés généralisés"
   },
   {
    "key": "b",
    "text": "la fonction glm pour les deux cas"
   },
   {
    "key": "c",
    "text": "la fonction boxcox du package MASS pour les deux cas"
   },
   {
    "key": "d",
    "text": "la fonction anova pour les moindres carrés pondérés uniquement"
   }
  ],
  "ans": "a",
  "ansText": "la fonction lm avec l'argument weights pour les moindres carrés pondérés, et la fonction gls du package nlme pour les moindres carrés généralisés",
  "id": "mlg-multiple-49",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Dans la procédure de Box & Cox pour transformer la variable à expliquer \\(Y\\), la transformation \\(Y^{(\\lambda)} = \\dfrac{Y^\\lambda - 1}{\\lambda}\\) (si \\(\\lambda \\neq 0\\), et \\(\\ln(Y)\\) sinon) correspond, pour \\(\\lambda = 0\\) et \\(\\lambda = 0.5\\), à...",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lambda=0\\) : transformation logarithme \\(\\ln(Y)\\) ; \\(\\lambda=0.5\\) : transformation racine carrée \\(\\sqrt{Y}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\lambda=0\\) : transformation identité ; \\(\\lambda=0.5\\) : transformation exponentielle"
   },
   {
    "key": "c",
    "text": "\\(\\lambda=0\\) : transformation racine carrée ; \\(\\lambda=0.5\\) : transformation logarithme"
   },
   {
    "key": "d",
    "text": "\\(\\lambda=0\\) et \\(\\lambda=0.5\\) donnent toujours la transformation identité"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lambda=0\\) : transformation logarithme \\(\\ln(Y)\\) ; \\(\\lambda=0.5\\) : transformation racine carrée \\(\\sqrt{Y}\\)",
  "id": "mlg-multiple-50",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Pour inclure une variable qualitative binaire \\(X'\\) (par exemple, être vacciné ou non) dans un modèle linéaire, on l'encode généralement par...",
  "opts": [
   {
    "key": "a",
    "text": "une variable indicatrice \\(X' \\in \\{0,1\\}\\)"
   },
   {
    "key": "b",
    "text": "une variable continue arbitraire entre 0 et 100"
   },
   {
    "key": "c",
    "text": "le rang de la modalité dans un ordre alphabétique"
   },
   {
    "key": "d",
    "text": "une transformation logarithmique de la modalité"
   }
  ],
  "ans": "a",
  "ansText": "une variable indicatrice \\(X' \\in \\{0,1\\}\\)",
  "id": "mlg-multiple-51",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On considère le modèle additif \\(Y = \\beta_0 + \\beta_1 X + \\beta_2 X' + \\varepsilon\\) avec \\(\\hat\\beta_0=2\\), \\(\\hat\\beta_1=0.5\\), \\(\\hat\\beta_2=1.5\\). Calculer la valeur prédite pour un individu vacciné (\\(X'=1\\)) avec \\(X=4\\) unités de pathogène.",
  "ans": 5.5,
  "ansText": "5.5",
  "tol": 0.01,
  "id": "mlg-multiple-52",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Dans le modèle additif \\(Y = \\beta_0 + \\beta_1 X + \\beta_2 X'\\) (Exemple 5.1 du cours), l'ajout de la variable binaire \\(X'\\) a pour effet de...",
  "opts": [
   {
    "key": "a",
    "text": "modifier l'ordonnée à l'origine (nouvelle constante \\(\\beta_0+\\beta_2\\) pour le groupe \\(X'=1\\)) tout en gardant la même pente \\(\\beta_1\\) pour les deux groupes"
   },
   {
    "key": "b",
    "text": "modifier la pente tout en gardant la même ordonnée à l'origine pour les deux groupes"
   },
   {
    "key": "c",
    "text": "multiplier la pente et l'ordonnée à l'origine par un même facteur"
   },
   {
    "key": "d",
    "text": "n'avoir aucun effet sur le modèle"
   }
  ],
  "ans": "a",
  "ansText": "modifier l'ordonnée à l'origine (nouvelle constante \\(\\beta_0+\\beta_2\\) pour le groupe \\(X'=1\\)) tout en gardant la même pente \\(\\beta_1\\) pour les deux groupes",
  "id": "mlg-multiple-53",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "On considère le modèle avec terme d'interaction \\(Y = \\beta_0 + \\beta_1 X + \\beta_2 X X' + \\varepsilon\\), avec \\(\\hat\\beta_1 = 0.5\\) et \\(\\hat\\beta_2 = 0.3\\). Pour le groupe \\(X'=1\\), le modèle devient \\(Y = \\beta_0 + (\\beta_1+\\beta_2)X\\). Calculer la pente \\(\\hat\\beta_1+\\hat\\beta_2\\) pour ce groupe.",
  "ans": 0.8,
  "ansText": "0.8",
  "tol": 0.01,
  "id": "mlg-multiple-54",
  "cat": "mlg-multiple"
 },
 {
  "type": "qcm",
  "q": "Une variable qualitative polytomique (catégorielle) présentant \\(k=4\\) modalités doit être décomposée en combien de variables binaires (indicatrices) dans le modèle, et pourquoi pas \\(k\\) variables ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(k-1 = 3\\) variables, car utiliser \\(k\\) variables créerait une colinéarité exacte avec la constante du modèle (perte d'identifiabilité)"
   },
   {
    "key": "b",
    "text": "\\(k = 4\\) variables, une par modalité"
   },
   {
    "key": "c",
    "text": "\\(k+1 = 5\\) variables, pour inclure la constante"
   },
   {
    "key": "d",
    "text": "1 seule variable prenant les valeurs 1, 2, 3, 4"
   }
  ],
  "ans": "a",
  "ansText": "\\(k-1 = 3\\) variables, car utiliser \\(k\\) variables créerait une colinéarité exacte avec la constante du modèle (perte d'identifiabilité)",
  "id": "mlg-multiple-55",
  "cat": "mlg-multiple"
 },
 {
  "type": "num",
  "q": "Dans l'exemple, 4 protocoles de vaccination sont comparés et 20 patients sont inclus dans chacun. Quel est l'effectif total \\(n\\) de l'échantillon ?",
  "ans": 80,
  "ansText": "80",
  "tol": 0.01,
  "id": "anova-01",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Combien de patients \\(n_k\\) sont inclus dans chaque protocole (centre hospitalier) dans l'exemple étudié ?",
  "ans": 20,
  "ansText": "20",
  "tol": 0.01,
  "id": "anova-02",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Pour le Protocole 1, les effectifs observés sont : 6 patients avec \\(y=4\\), 5 avec \\(y=5\\), 4 avec \\(y=6\\), 3 avec \\(y=7\\) et 2 avec \\(y=8\\). Calculer la moyenne empirique \\(\\bar y_1\\) du score pour ce protocole.",
  "ans": 5.5,
  "ansText": "5.5",
  "tol": 0.01,
  "id": "anova-03",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Les moyennes par protocole valent \\(\\bar y_1=5{,}5\\), \\(\\bar y_2=6{,}15\\), \\(\\bar y_3=6{,}4\\) et \\(\\bar y_4=5{,}55\\), avec un effectif de 20 patients par protocole. Calculer la moyenne générale \\(\\bar y\\) sur les 80 patients.",
  "ans": 5.9,
  "ansText": "5.9",
  "tol": 0.02,
  "id": "anova-04",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Dans le test d'ANOVA à un facteur présenté sur l'exemple vaccinal (4 protocoles), quelle est l'hypothèse nulle \\(H_0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_0 : \\mu_1 = \\mu_2 = \\mu_3 = \\mu_4\\)"
   },
   {
    "key": "b",
    "text": "\\(H_0 : \\mu_1 \\neq \\mu_2 \\neq \\mu_3 \\neq \\mu_4\\)"
   },
   {
    "key": "c",
    "text": "\\(H_0 : \\sigma_1^2 = \\sigma_2^2 = \\sigma_3^2 = \\sigma_4^2\\)"
   },
   {
    "key": "d",
    "text": "\\(H_0 : \\exists\\, k \\neq \\ell \\text{ tel que } \\mu_k \\neq \\mu_\\ell\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(H_0 : \\mu_1 = \\mu_2 = \\mu_3 = \\mu_4\\)",
  "id": "anova-05",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'hypothèse alternative \\(H_1\\) associée à ce test ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(H_1 : \\mu_1 = \\mu_2 = \\mu_3 = \\mu_4\\)"
   },
   {
    "key": "b",
    "text": "\\(H_1 : \\exists\\, k \\neq \\ell \\text{ tel que } \\mu_k \\neq \\mu_\\ell\\)"
   },
   {
    "key": "c",
    "text": "\\(H_1 :\\) toutes les moyennes \\(\\mu_k\\) sont différentes deux à deux"
   },
   {
    "key": "d",
    "text": "\\(H_1 : \\mu_k > \\mu_\\ell\\) pour tout \\(k \\neq \\ell\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(H_1 : \\exists\\, k \\neq \\ell \\text{ tel que } \\mu_k \\neq \\mu_\\ell\\)",
  "id": "anova-06",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quelle hypothèse est faite sur la loi de \\(Y_{ik}\\) dans le modèle gaussien de l'ANOVA ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(Y_{ik} \\sim \\mathcal{N}(\\mu_j, \\sigma^2)\\) avec une variance \\(\\sigma^2\\) identique pour tous les protocoles"
   },
   {
    "key": "b",
    "text": "\\(Y_{ik} \\sim \\mathcal{N}(\\mu_j, \\sigma_j^2)\\) avec une variance propre à chaque protocole"
   },
   {
    "key": "c",
    "text": "\\(Y_{ik}\\) suit une loi de Poisson de paramètre \\(\\mu_j\\)"
   },
   {
    "key": "d",
    "text": "\\(Y_{ik} \\sim \\mathcal{N}(0, \\sigma^2)\\) quel que soit le protocole"
   }
  ],
  "ans": "a",
  "ansText": "\\(Y_{ik} \\sim \\mathcal{N}(\\mu_j, \\sigma^2)\\) avec une variance \\(\\sigma^2\\) identique pour tous les protocoles",
  "id": "anova-07",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Parmi les tests suivants, lequel n'est PAS cité dans le texte pour vérifier l'hypothèse gaussienne sur les \\(Y_{ik}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "le test du \\(\\chi^2\\)"
   },
   {
    "key": "b",
    "text": "le test de Kolmogorov-Smirnov"
   },
   {
    "key": "c",
    "text": "le test de Shapiro-Wilk"
   },
   {
    "key": "d",
    "text": "le test de Student"
   }
  ],
  "ans": "d",
  "ansText": "le test de Student",
  "id": "anova-08",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Comment le vecteur des observations \\(y\\) est-il construit dans le modèle (4) ?",
  "opts": [
   {
    "key": "a",
    "text": "en empilant les observations protocole par protocole, les unes sous les autres"
   },
   {
    "key": "b",
    "text": "en calculant la moyenne des observations de chaque protocole"
   },
   {
    "key": "c",
    "text": "en ordonnant toutes les observations par ordre croissant de leur valeur"
   },
   {
    "key": "d",
    "text": "en tirant aléatoirement un sous-échantillon dans chaque protocole"
   }
  ],
  "ans": "a",
  "ansText": "en empilant les observations protocole par protocole, les unes sous les autres",
  "id": "anova-09",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Sans supposer \\(H_0\\), dans quel sous-espace se trouve \\(E[y]\\) pour le modèle \\(y = X\\mu + \\varepsilon\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "dans \\(V\\), l'espace image de \\(X\\), de dimension 4"
   },
   {
    "key": "b",
    "text": "dans \\(U\\), l'espace engendré par le vecteur de 1, de dimension 1"
   },
   {
    "key": "c",
    "text": "dans \\(V^\\perp\\), de dimension \\(n-4\\)"
   },
   {
    "key": "d",
    "text": "dans \\(W\\), de dimension 3"
   }
  ],
  "ans": "a",
  "ansText": "dans \\(V\\), l'espace image de \\(X\\), de dimension 4",
  "id": "anova-10",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Sous l'hypothèse \\(H_0\\) (avec \\(\\mu = \\mu_1 = \\dots = \\mu_4\\)), quelle est la forme de \\(E[y]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(E[y] = \\begin{pmatrix}1\\\\ \\vdots \\\\ 1\\end{pmatrix}\\mu\\), un vecteur de l'espace \\(U\\) de dimension 1"
   },
   {
    "key": "b",
    "text": "\\(E[y] = X\\mu\\), un vecteur quelconque de \\(V\\)"
   },
   {
    "key": "c",
    "text": "\\(E[y] = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(E[y]\\) est un vecteur aléatoire de loi \\(\\mathcal{N}(0,\\sigma^2 I)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(E[y] = \\begin{pmatrix}1\\\\ \\vdots \\\\ 1\\end{pmatrix}\\mu\\), un vecteur de l'espace \\(U\\) de dimension 1",
  "id": "anova-11",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Que représente l'espace \\(U\\) introduit dans la construction du test de Fisher ?",
  "opts": [
   {
    "key": "a",
    "text": "l'espace image de dimension 1 engendré par le vecteur constitué d'une seule colonne de 1"
   },
   {
    "key": "b",
    "text": "l'espace image de dimension 4 engendré par les colonnes de \\(X\\)"
   },
   {
    "key": "c",
    "text": "le supplémentaire orthogonal de \\(V\\) dans \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "d",
    "text": "le supplémentaire orthogonal de \\(U\\) dans \\(V\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'espace image de dimension 1 engendré par le vecteur constitué d'une seule colonne de 1",
  "id": "anova-12",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Que représente l'espace \\(W\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "le supplémentaire orthogonal de \\(U\\) dans \\(V\\)"
   },
   {
    "key": "b",
    "text": "l'espace engendré par les colonnes de \\(X\\)"
   },
   {
    "key": "c",
    "text": "le supplémentaire orthogonal de \\(V\\) dans \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "d",
    "text": "l'espace engendré par le vecteur de 1"
   }
  ],
  "ans": "a",
  "ansText": "le supplémentaire orthogonal de \\(U\\) dans \\(V\\)",
  "id": "anova-13",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Que représente \\(V^\\perp\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "le supplémentaire orthogonal de \\(V\\) dans l'espace total \\(\\mathbb{R}^n\\)"
   },
   {
    "key": "b",
    "text": "le supplémentaire orthogonal de \\(U\\) dans \\(V\\)"
   },
   {
    "key": "c",
    "text": "l'espace engendré par les colonnes de \\(X\\)"
   },
   {
    "key": "d",
    "text": "l'espace engendré par le vecteur de 1"
   }
  ],
  "ans": "a",
  "ansText": "le supplémentaire orthogonal de \\(V\\) dans l'espace total \\(\\mathbb{R}^n\\)",
  "id": "anova-14",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quel théorème permet de déterminer les lois des projections de \\(y\\) sur \\(U\\), \\(W\\) et \\(V^\\perp\\), ainsi que leur indépendance ?",
  "opts": [
   {
    "key": "a",
    "text": "le Théorème de Cochran"
   },
   {
    "key": "b",
    "text": "le Théorème de Gauss-Markov"
   },
   {
    "key": "c",
    "text": "le Théorème central limite"
   },
   {
    "key": "d",
    "text": "le Théorème de Cramer-Rao"
   }
  ],
  "ans": "a",
  "ansText": "le Théorème de Cochran",
  "id": "anova-15",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Dans l'exemple (\\(n=80\\) observations, \\(p=4\\) protocoles), quelle est la dimension de l'espace \\(V^\\perp\\), supplémentaire orthogonal de \\(V\\) dans \\(\\mathbb{R}^n\\) ?",
  "ans": 76,
  "ansText": "76",
  "tol": 0.01,
  "id": "anova-16",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Dans l'exemple (\\(p=4\\) protocoles), quelle est la dimension de l'espace \\(W\\), supplémentaire orthogonal de \\(U\\) dans \\(V\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "anova-17",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Si \\(A \\in \\mathbb{R}^{n\\times d}\\) est une matrice dont les colonnes forment une base de \\(H\\), quelle est l'expression de la projection orthogonale \\(p_H(z)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(p_H(z) = A(A^\\top A)^{-1}A^\\top z\\)"
   },
   {
    "key": "b",
    "text": "\\(p_H(z) = (A^\\top A)^{-1}A^\\top z\\)"
   },
   {
    "key": "c",
    "text": "\\(p_H(z) = A^\\top(AA^\\top)^{-1}z\\)"
   },
   {
    "key": "d",
    "text": "\\(p_H(z) = AA^\\top z\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(p_H(z) = A(A^\\top A)^{-1}A^\\top z\\)",
  "id": "anova-18",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "D'après la section « Retour à notre exemple », que peut-on dire de \\(p_V(y)\\) comme estimateur de \\(E[y]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "c'est un estimateur sans biais de \\(E[y]\\), que \\(H_0\\) soit vraie ou non"
   },
   {
    "key": "b",
    "text": "c'est un estimateur sans biais de \\(E[y]\\) uniquement sous \\(H_0\\)"
   },
   {
    "key": "c",
    "text": "c'est un estimateur biaisé de \\(E[y]\\)"
   },
   {
    "key": "d",
    "text": "c'est un estimateur sans biais de \\(\\sigma^2\\) uniquement"
   }
  ],
  "ans": "a",
  "ansText": "c'est un estimateur sans biais de \\(E[y]\\), que \\(H_0\\) soit vraie ou non",
  "id": "anova-19",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire de \\(p_U(y)\\) comme estimateur de \\(E[y]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "c'est un estimateur sans biais de \\(E[y]\\) seulement sous l'hypothèse \\(H_0\\)"
   },
   {
    "key": "b",
    "text": "c'est un estimateur sans biais de \\(E[y]\\), que \\(H_0\\) soit vraie ou non"
   },
   {
    "key": "c",
    "text": "ce n'est jamais un estimateur sans biais de \\(E[y]\\)"
   },
   {
    "key": "d",
    "text": "c'est un estimateur sans biais de \\(\\sigma^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "c'est un estimateur sans biais de \\(E[y]\\) seulement sous l'hypothèse \\(H_0\\)",
  "id": "anova-20",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quelle est la loi de \\(\\|y - p_V(y)\\|_2^2 / \\sigma^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\chi^2(n-4)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\chi^2(4)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\chi^2(4-1)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathcal{N}(0,1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\chi^2(n-4)\\)",
  "id": "anova-21",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Sous \\(H_0\\), quelle est la loi de \\(\\|p_V(y) - p_U(y)\\|_2^2 / \\sigma^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\chi^2(4-1)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\chi^2(n-4)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\chi^2(n)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathcal{N}(0,\\sigma^2)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\chi^2(4-1)\\)",
  "id": "anova-22",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Pourquoi les vecteurs \\(y - p_V(y)\\) et \\(p_V(y) - p_U(y)\\) sont-ils indépendants ?",
  "opts": [
   {
    "key": "a",
    "text": "car \\(W\\) et \\(V^\\perp\\) sont orthogonaux, et le Théorème de Cochran s'applique"
   },
   {
    "key": "b",
    "text": "car \\(y\\) suit une loi uniforme"
   },
   {
    "key": "c",
    "text": "car \\(U\\) et \\(V\\) sont de même dimension"
   },
   {
    "key": "d",
    "text": "car \\(\\sigma^2\\) est connu"
   }
  ],
  "ans": "a",
  "ansText": "car \\(W\\) et \\(V^\\perp\\) sont orthogonaux, et le Théorème de Cochran s'applique",
  "id": "anova-23",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 6.1 (test de Fisher), quelle est la statistique pivotale et sa loi sous \\(H_0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{\\|y-p_V(y)\\|^2/(n-4)}{\\|p_V(y)-p_U(y)\\|^2/(4-1)} \\sim F(n-4,\\, 4-1)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{\\|p_V(y)-p_U(y)\\|^2/(4-1)}{\\|y-p_V(y)\\|^2/(n-4)} \\sim F(4-1,\\, n-4)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac{\\|y-p_V(y)\\|^2}{\\|p_V(y)-p_U(y)\\|^2} \\sim F(n,\\,4)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\|y - p_U(y)\\|^2/\\sigma^2 \\sim F(n-1,\\,4)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{\\|y-p_V(y)\\|^2/(n-4)}{\\|p_V(y)-p_U(y)\\|^2/(4-1)} \\sim F(n-4,\\, 4-1)\\)",
  "id": "anova-24",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quelle est la règle de décision du test de Fisher construit dans ce chapitre, \\(f_{1-\\alpha}\\) étant le quantile d'ordre \\(1-\\alpha\\) de la loi de Fisher à \\(n-4\\) et \\(4-1\\) degrés de liberté ?",
  "opts": [
   {
    "key": "a",
    "text": "on rejette \\(H_0\\) si \\(f_{\\text{test}} > f_{1-\\alpha}\\)"
   },
   {
    "key": "b",
    "text": "on rejette \\(H_0\\) si \\(f_{\\text{test}} < f_{1-\\alpha}\\)"
   },
   {
    "key": "c",
    "text": "on accepte \\(H_0\\) si \\(f_{\\text{test}} > f_{1-\\alpha}\\)"
   },
   {
    "key": "d",
    "text": "on rejette \\(H_0\\) si \\(f_{\\text{test}} = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "on rejette \\(H_0\\) si \\(f_{\\text{test}} > f_{1-\\alpha}\\)",
  "id": "anova-25",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Pourquoi le nom « Analyse de Variance » n'est-il pas paradoxal alors que l'on teste l'égalité de moyennes ?",
  "opts": [
   {
    "key": "a",
    "text": "car le calcul explicite de la statistique de test revient à comparer un rapport de variances"
   },
   {
    "key": "b",
    "text": "car les moyennes et les variances sont mathématiquement identiques"
   },
   {
    "key": "c",
    "text": "car le test ne teste en réalité que l'égalité des variances \\(\\sigma_k^2\\)"
   },
   {
    "key": "d",
    "text": "car les données de l'exemple ont une variance nulle"
   }
  ],
  "ans": "a",
  "ansText": "car le calcul explicite de la statistique de test revient à comparer un rapport de variances",
  "id": "anova-26",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "On considère l'exemple avec \\(p=4\\) groupes et \\(n=80\\) observations. On a mesuré \\(\\|y-p_V(y)\\|_2^2 = 456\\) et \\(\\|p_V(y)-p_U(y)\\|_2^2 = 36\\). Calculer la statistique \\(f_{\\text{test}} = \\dfrac{\\|y-p_V(y)\\|_2^2/(n-4)}{\\|p_V(y)-p_U(y)\\|_2^2/(4-1)}\\).",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.01,
  "id": "anova-27",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Avec le même modèle (\\(p=4\\), \\(n=80\\)), on mesure cette fois \\(\\|y-p_V(y)\\|_2^2 = 380\\) et \\(\\|p_V(y)-p_U(y)\\|_2^2 = 15\\). Calculer \\(f_{\\text{test}}\\).",
  "ans": 1.0,
  "ansText": "1.0",
  "tol": 0.01,
  "id": "anova-28",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Quelle relation relie les sommes de carrés \\(SCT\\), \\(SCE\\) et \\(SCR\\), et que représentent \\(SCE\\) et \\(SCR\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(SCT = SCE + SCR\\), où \\(SCE\\) mesure la variance inter-classe (expliquée par le facteur) et \\(SCR\\) la variance intra-classe (résiduelle)"
   },
   {
    "key": "b",
    "text": "\\(SCT = SCE - SCR\\), où \\(SCE\\) et \\(SCR\\) mesurent la même quantité"
   },
   {
    "key": "c",
    "text": "\\(SCT = SCE + SCR\\), où \\(SCE\\) est la variance intra-classe et \\(SCR\\) la variance inter-classe"
   },
   {
    "key": "d",
    "text": "\\(SCT = SCE \\times SCR\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(SCT = SCE + SCR\\), où \\(SCE\\) mesure la variance inter-classe (expliquée par le facteur) et \\(SCR\\) la variance intra-classe (résiduelle)",
  "id": "anova-29",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "À quelle projection correspond la moyenne générale \\(\\bar y\\) dans le formalisme du chapitre ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\bar y = p_U(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\bar y = p_V(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\bar y = p_{V^\\perp}(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\bar y = p_W(y)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\bar y = p_U(y)\\)",
  "id": "anova-30",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Dans une ANOVA à un facteur, on a calculé \\(SCT = 245\\) et \\(SCE = 175\\). En utilisant la relation \\(SCT = SCE + SCR\\), calculer \\(SCR\\).",
  "ans": 70,
  "ansText": "70",
  "tol": 0.01,
  "id": "anova-31",
  "cat": "anova"
 },
 {
  "type": "num",
  "q": "Dans une autre ANOVA à un facteur, on a calculé \\(SCT = 500\\) et \\(SCR = 320\\). En utilisant la relation \\(SCT = SCE + SCR\\), calculer \\(SCE\\).",
  "ans": 180,
  "ansText": "180",
  "tol": 0.01,
  "id": "anova-32",
  "cat": "anova"
 },
 {
  "type": "qcm",
  "q": "Dans cette étude appliquée, quelle est la variable réponse (variable à expliquer) que l'on cherche à modéliser à partir des données de <code>biology.csv</code> ?",
  "opts": [
   {
    "key": "a",
    "text": "vitamin_d, le taux de vitamine D dans le sang"
   },
   {
    "key": "b",
    "text": "infection_status, le type d'infection présenté par l'individu"
   },
   {
    "key": "c",
    "text": "lymphocyte_count, le nombre de lymphocytes circulants (en cellules/µL)"
   },
   {
    "key": "d",
    "text": "bmi, l'indice de masse corporelle de l'individu"
   }
  ],
  "ans": "c",
  "ansText": "lymphocyte_count, le nombre de lymphocytes circulants (en cellules/µL)",
  "id": "regression-r-01",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "D'après le texte, à quoi le vieillissement (variable <code>age</code>) est-il généralement associé ?",
  "opts": [
   {
    "key": "a",
    "text": "À une immunosénescence progressive, c'est-à-dire une baisse du système immunitaire"
   },
   {
    "key": "b",
    "text": "À une augmentation automatique du taux de vitamine D"
   },
   {
    "key": "c",
    "text": "À une amélioration progressive de la réponse immunitaire"
   },
   {
    "key": "d",
    "text": "Le texte ne mentionne aucun lien entre l'âge et le système immunitaire"
   }
  ],
  "ans": "a",
  "ansText": "À une immunosénescence progressive, c'est-à-dire une baisse du système immunitaire",
  "id": "regression-r-02",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Que représente la variable <code>crp</code> décrite dans le jeu de données ?",
  "opts": [
   {
    "key": "a",
    "text": "Une hormone du stress, mesurée en µg/dL"
   },
   {
    "key": "b",
    "text": "La protéine C-réactive, un marqueur systémique de l'inflammation, mesurée en mg/L"
   },
   {
    "key": "c",
    "text": "Une cytokine pro-inflammatoire, mesurée en pg/mL"
   },
   {
    "key": "d",
    "text": "La quantité d'eau absorbée par jour, en L"
   }
  ],
  "ans": "b",
  "ansText": "La protéine C-réactive, un marqueur systémique de l'inflammation, mesurée en mg/L",
  "id": "regression-r-03",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "D'après le texte, quel est le rôle de l'interleukine 6 (variable <code>il6</code>) ?",
  "opts": [
   {
    "key": "a",
    "text": "C'est une cytokine pro-inflammatoire qui stimule la production de CRP"
   },
   {
    "key": "b",
    "text": "C'est un indicateur de la durée de sommeil de l'individu"
   },
   {
    "key": "c",
    "text": "C'est une mesure directe de l'indice de masse corporelle"
   },
   {
    "key": "d",
    "text": "C'est un marqueur de l'hydratation corporelle"
   }
  ],
  "ans": "a",
  "ansText": "C'est une cytokine pro-inflammatoire qui stimule la production de CRP",
  "id": "regression-r-04",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "D'après le texte, quel effet le stress, mesuré via le <code>cortisol</code>, a-t-il sur le système immunitaire à long terme ?",
  "opts": [
   {
    "key": "a",
    "text": "Un effet stimulant, augmentant le nombre de lymphocytes circulants"
   },
   {
    "key": "b",
    "text": "Aucun effet, le cortisol n'étant qu'un marqueur inflammatoire"
   },
   {
    "key": "c",
    "text": "Un effet immunosuppresseur"
   },
   {
    "key": "d",
    "text": "Un effet uniquement sur la durée de sommeil, sans lien avec l'immunité"
   }
  ],
  "ans": "c",
  "ansText": "Un effet immunosuppresseur",
  "id": "regression-r-05",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Parmi les variables suivantes du jeu de données <code>biology.csv</code>, laquelle est qualitative (catégorielle) et non quantitative ?",
  "opts": [
   {
    "key": "a",
    "text": "cortisol"
   },
   {
    "key": "b",
    "text": "vitamin_d"
   },
   {
    "key": "c",
    "text": "bmi"
   },
   {
    "key": "d",
    "text": "infection_status"
   }
  ],
  "ans": "d",
  "ansText": "infection_status",
  "id": "regression-r-06",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Dans la description textuelle des variables, celle-ci est appelée « hydratation ». Or, quel est le nom exact de la colonne correspondante tel qu'il apparaît dans la sortie de <code>head(data)</code> sur les données R ?",
  "opts": [
   {
    "key": "a",
    "text": "hydratation"
   },
   {
    "key": "b",
    "text": "hydration"
   },
   {
    "key": "c",
    "text": "water_intake"
   },
   {
    "key": "d",
    "text": "h2o_intake"
   }
  ],
  "ans": "b",
  "ansText": "hydration",
  "id": "regression-r-07",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Que fait précisément l'instruction <code>data = read.csv(\"data/biology.csv\")</code> ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle ajuste directement un modèle de régression linéaire sur le fichier"
   },
   {
    "key": "b",
    "text": "Elle importe le fichier CSV et le stocke sous forme de data frame nommé <code>data</code>"
   },
   {
    "key": "c",
    "text": "Elle affiche un résumé statistique (moyenne, écart-type) des variables du fichier"
   },
   {
    "key": "d",
    "text": "Elle trace un nuage de points entre toutes les paires de variables"
   }
  ],
  "ans": "b",
  "ansText": "Elle importe le fichier CSV et le stocke sous forme de data frame nommé <code>data</code>",
  "id": "regression-r-08",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Que signifie la formule utilisée dans <code>lm(lymphocyte_count ~ ., data)</code> ?",
  "opts": [
   {
    "key": "a",
    "text": "On régresse lymphocyte_count uniquement sur la variable age"
   },
   {
    "key": "b",
    "text": "On calcule uniquement la moyenne de lymphocyte_count"
   },
   {
    "key": "c",
    "text": "On régresse lymphocyte_count sur l'ensemble des autres variables présentes dans data"
   },
   {
    "key": "d",
    "text": "On régresse toutes les variables de data sur lymphocyte_count pris comme variable explicative"
   }
  ],
  "ans": "c",
  "ansText": "On régresse lymphocyte_count sur l'ensemble des autres variables présentes dans data",
  "id": "regression-r-09",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Que fournit la fonction <code>summary(mymodel)</code>, appliquée à un objet renvoyé par <code>lm()</code> ?",
  "opts": [
   {
    "key": "a",
    "text": "Uniquement les 6 premières lignes du jeu de données"
   },
   {
    "key": "b",
    "text": "La liste des packages R chargés en mémoire"
   },
   {
    "key": "c",
    "text": "Un résumé du modèle ajusté : estimations des coefficients, erreurs-types, statistiques de test et p-values associées, R² et statistique F globale"
   },
   {
    "key": "d",
    "text": "Un graphique automatique des résidus du modèle"
   }
  ],
  "ans": "c",
  "ansText": "Un résumé du modèle ajusté : estimations des coefficients, erreurs-types, statistiques de test et p-values associées, R² et statistique F globale",
  "id": "regression-r-10",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Dans la sortie de <code>summary(mymodel)</code>, la variable qualitative <code>infection_status</code> apparaît sous la forme d'un coefficient nommé <code>infection_statuschronic</code>. Que représente ce coefficient ?",
  "opts": [
   {
    "key": "a",
    "text": "L'ordonnée à l'origine (intercept) du modèle"
   },
   {
    "key": "b",
    "text": "L'effet moyen de toutes les infections confondues, aigües et chroniques"
   },
   {
    "key": "c",
    "text": "L'effet estimé du statut « chronic » par rapport à la modalité de référence « acute »"
   },
   {
    "key": "d",
    "text": "Le coefficient associé à la variable bmi"
   }
  ],
  "ans": "c",
  "ansText": "L'effet estimé du statut « chronic » par rapport à la modalité de référence « acute »",
  "id": "regression-r-11",
  "cat": "regression-r"
 },
 {
  "type": "num",
  "q": "D'après la sortie de <code>summary(mymodel)</code>, quelle est la valeur du coefficient de détermination multiple (Multiple R-squared) du modèle ?",
  "ans": 0.6678,
  "ansText": "0.6678",
  "tol": 0.001,
  "id": "regression-r-12",
  "cat": "regression-r"
 },
 {
  "type": "num",
  "q": "D'après la table des coefficients, quelle est l'estimation (Estimate) associée à la variable <code>age</code> dans le modèle ?",
  "ans": -6.4485,
  "ansText": "-6.4485",
  "tol": 0.01,
  "id": "regression-r-13",
  "cat": "regression-r"
 },
 {
  "type": "num",
  "q": "La sortie du modèle indique une statistique F calculée avec 9 et 790 degrés de liberté (\"F-statistic: 176.5 on 9 and 790 DF\"). En déduire le nombre total d'individus (observations) présents dans le jeu de données.",
  "ans": 800,
  "ansText": "800",
  "tol": 0,
  "id": "regression-r-14",
  "cat": "regression-r"
 },
 {
  "type": "num",
  "q": "D'après la sortie du modèle, quelle est la valeur de l'erreur-type résiduelle (Residual standard error) ?",
  "ans": 225.3,
  "ansText": "225.3",
  "tol": 0.05,
  "id": "regression-r-15",
  "cat": "regression-r"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme canonique générale de la densité d'une loi appartenant à la famille exponentielle, telle que présentée dans le cours ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x) = c(\\theta)h(x)\\exp\\big(\\langle \\theta, T(x)\\rangle\\big)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x) = c(\\theta) + h(x)\\exp\\big(\\langle \\theta, T(x)\\rangle\\big)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x) = h(\\theta)\\exp\\big(c(\\theta)T(x)\\big)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x) = c(x)h(\\theta)\\exp\\big(\\langle T(\\theta), x\\rangle\\big)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x) = c(\\theta)h(x)\\exp\\big(\\langle \\theta, T(x)\\rangle\\big)\\)",
  "id": "generalites-mlg-01",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans l'Exemple 8.1 du cours, pour écrire la densité de \\(Y\\sim\\mathcal N(\\mu,\\sigma^2)\\) sous la forme \\(f(x)=c(\\theta)h(x)\\exp(\\langle\\theta,T(x)\\rangle)\\), quel vecteur \\(T(x)\\) le cours utilise-t-il ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(T(x) = \\begin{pmatrix} x \\\\ -x^2/2\\end{pmatrix}\\)"
   },
   {
    "key": "b",
    "text": "\\(T(x) = \\begin{pmatrix} x^2 \\\\ -x/2\\end{pmatrix}\\)"
   },
   {
    "key": "c",
    "text": "\\(T(x) = \\begin{pmatrix} x \\\\ x^2/2\\end{pmatrix}\\)"
   },
   {
    "key": "d",
    "text": "\\(T(x) = \\begin{pmatrix} -x \\\\ x^2/2\\end{pmatrix}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(T(x) = \\begin{pmatrix} x \\\\ -x^2/2\\end{pmatrix}\\)",
  "id": "generalites-mlg-02",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Toujours dans l'Exemple 8.1 (loi \\(\\mathcal N(\\mu,\\sigma^2)\\)), quel est le paramètre naturel \\(\\theta\\) associé au vecteur \\(T(x) = \\begin{pmatrix} x \\\\ -x^2/2\\end{pmatrix}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\theta = \\begin{pmatrix} \\mu/\\sigma^2 \\\\ 1/\\sigma^2\\end{pmatrix}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\theta = \\begin{pmatrix} \\mu \\\\ \\sigma^2\\end{pmatrix}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\theta = \\begin{pmatrix} 1/\\sigma^2 \\\\ \\mu/\\sigma^2\\end{pmatrix}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\theta = \\begin{pmatrix} \\mu\\sigma^2 \\\\ \\sigma^2\\end{pmatrix}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\theta = \\begin{pmatrix} \\mu/\\sigma^2 \\\\ 1/\\sigma^2\\end{pmatrix}\\)",
  "id": "generalites-mlg-03",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Pour écrire la loi Gamma de paramètres \\(\\alpha,\\eta>0\\) sous forme exponentielle (Exemple 8.2 du cours), quel vecteur \\(T(x)\\) le cours utilise-t-il ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(T(x) = \\begin{pmatrix}\\ln(x)\\\\-x\\end{pmatrix}\\)"
   },
   {
    "key": "b",
    "text": "\\(T(x) = \\begin{pmatrix}x\\\\\\ln(x)\\end{pmatrix}\\)"
   },
   {
    "key": "c",
    "text": "\\(T(x) = \\begin{pmatrix}-\\ln(x)\\\\x\\end{pmatrix}\\)"
   },
   {
    "key": "d",
    "text": "\\(T(x) = \\begin{pmatrix}\\ln(x)\\\\x\\end{pmatrix}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(T(x) = \\begin{pmatrix}\\ln(x)\\\\-x\\end{pmatrix}\\)",
  "id": "generalites-mlg-04",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme générale de la densité d'une loi de la famille exponentielle utilisée pour définir les modèles linéaires généralisés (Equation (5) du cours) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f_{\\theta,\\phi}(y) = \\exp\\!\\left(\\dfrac{\\theta y - b(\\theta)}{a(\\phi)} + c(y,\\phi)\\right)\\)"
   },
   {
    "key": "b",
    "text": "\\(f_{\\theta,\\phi}(y) = \\exp\\!\\left(\\dfrac{a(\\phi) y - b(\\theta)}{\\theta} + c(y,\\phi)\\right)\\)"
   },
   {
    "key": "c",
    "text": "\\(f_{\\theta,\\phi}(y) = \\exp\\!\\left(\\theta y - \\dfrac{b(\\theta)}{a(\\phi)} - c(y,\\phi)\\right)\\)"
   },
   {
    "key": "d",
    "text": "\\(f_{\\theta,\\phi}(y) = c(\\theta)\\exp\\!\\left(\\dfrac{y - b(\\theta)}{a(\\phi)}\\right)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f_{\\theta,\\phi}(y) = \\exp\\!\\left(\\dfrac{\\theta y - b(\\theta)}{a(\\phi)} + c(y,\\phi)\\right)\\)",
  "id": "generalites-mlg-05",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans l'écriture \\(f_{\\theta,\\phi}(y) = \\exp\\!\\left(\\dfrac{\\theta y - b(\\theta)}{a(\\phi)} + c(y,\\phi)\\right)\\), que représente le paramètre \\(\\phi\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Un paramètre de dispersion"
   },
   {
    "key": "b",
    "text": "La moyenne de la loi"
   },
   {
    "key": "c",
    "text": "Le paramètre naturel de la loi"
   },
   {
    "key": "d",
    "text": "Le nombre d'observations de l'échantillon"
   }
  ],
  "ans": "a",
  "ansText": "Un paramètre de dispersion",
  "id": "generalites-mlg-06",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans l'Exemple 8.4 (loi Gamma reparamétrée sous la forme de l'Equation (5)), comment s'exprime le paramètre naturel \\(\\theta\\) en fonction de \\(\\alpha\\) et \\(\\eta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\theta = -\\dfrac{\\eta}{\\alpha} = -\\dfrac{1}{E[Y]}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\theta = \\dfrac{\\eta}{\\alpha} = E[Y]\\)"
   },
   {
    "key": "c",
    "text": "\\(\\theta = \\dfrac{\\alpha}{\\eta}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\theta = -\\alpha\\eta\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\theta = -\\dfrac{\\eta}{\\alpha} = -\\dfrac{1}{E[Y]}\\)",
  "id": "generalites-mlg-07",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après la Proposition 8.1 du cours, pour une variable aléatoire \\(Y\\) de la famille exponentielle écrite sous la forme de l'Equation (5), que valent \\(E[Y]\\) et \\(\\mathrm{Var}[Y]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(E[Y] = b'(\\theta)\\) et \\(\\mathrm{Var}[Y] = b''(\\theta)a(\\phi)\\)"
   },
   {
    "key": "b",
    "text": "\\(E[Y] = b(\\theta)\\) et \\(\\mathrm{Var}[Y] = b'(\\theta)\\)"
   },
   {
    "key": "c",
    "text": "\\(E[Y] = b''(\\theta)\\) et \\(\\mathrm{Var}[Y] = b'(\\theta)a(\\phi)\\)"
   },
   {
    "key": "d",
    "text": "\\(E[Y] = a(\\phi)\\) et \\(\\mathrm{Var}[Y] = b'(\\theta)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(E[Y] = b'(\\theta)\\) et \\(\\mathrm{Var}[Y] = b''(\\theta)a(\\phi)\\)",
  "id": "generalites-mlg-08",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Dans l'Exemple 8.3 (loi Normale reparamétrée sous la forme de l'Equation (5)), on a \\(b(\\theta) = \\theta^2/2\\). Calculer \\(b(\\theta)\\) pour \\(\\theta = 6\\).",
  "ans": 18,
  "ansText": "18",
  "tol": 0.01,
  "id": "generalites-mlg-09",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Toujours dans l'Exemple 8.3, on a \\(b(\\theta) = \\theta^2/2\\). Calculer \\(b''(\\theta)\\), la dérivée seconde de \\(b\\) (elle ne dépend pas de \\(\\theta\\)).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.001,
  "id": "generalites-mlg-10",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Dans l'Exemple 8.4 (loi Gamma reparamétrée), on a \\(b(\\theta) = -\\ln(\\theta)\\), donc \\(E[Y] = b'(\\theta) = -1/\\theta\\). Calculer \\(E[Y]\\) pour \\(\\theta = -0{,}25\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "generalites-mlg-11",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Comment est définie la fonction de lien canonique \\(g\\) à partir de la fonction \\(b\\) de l'Equation (5) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g = (b')^{-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(g = b'\\)"
   },
   {
    "key": "c",
    "text": "\\(g = b^{-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(g = (b'')^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(g = (b')^{-1}\\)",
  "id": "generalites-mlg-12",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après la Définition 8.1 du cours, un modèle linéaire généralisé est constitué de trois éléments. Lesquels ?",
  "opts": [
   {
    "key": "a",
    "text": "Des variables \\(Y_i\\) de la famille exponentielle, un ensemble de paramètres \\(\\beta\\) et de variables explicatives \\(X_1,\\dots,X_p\\), et un lien \\(g(\\mu_i)=x_i^\\top\\beta\\)"
   },
   {
    "key": "b",
    "text": "Une variable \\(Y\\) gaussienne, une matrice de covariance, et une fonction de vraisemblance"
   },
   {
    "key": "c",
    "text": "Des variables \\(Y_i\\) i.i.d., un estimateur des moindres carrés, et un test de Student"
   },
   {
    "key": "d",
    "text": "Un paramètre \\(\\theta\\), un paramètre \\(\\phi\\), et une fonction \\(c(y,\\phi)\\) uniquement"
   }
  ],
  "ans": "a",
  "ansText": "Des variables \\(Y_i\\) de la famille exponentielle, un ensemble de paramètres \\(\\beta\\) et de variables explicatives \\(X_1,\\dots,X_p\\), et un lien \\(g(\\mu_i)=x_i^\\top\\beta\\)",
  "id": "generalites-mlg-13",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Quelle relation caractérise un modèle linéaire généralisé, avec \\(\\mu=E[Y]\\), \\(X\\) la matrice des variables explicatives, \\(\\beta\\) les paramètres et \\(g\\) la fonction de lien ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g(\\mu) = X\\beta\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mu = X\\beta\\)"
   },
   {
    "key": "c",
    "text": "\\(Y = X\\beta\\)"
   },
   {
    "key": "d",
    "text": "\\(g(Y) = X\\beta\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(g(\\mu) = X\\beta\\)",
  "id": "generalites-mlg-14",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après le tableau du cours, quelle est la fonction de lien canonique associée à la loi Binomiale ?",
  "opts": [
   {
    "key": "a",
    "text": "Le lien logit, \\(g(\\mu)=\\ln\\!\\left(\\dfrac{\\mu}{1-\\mu}\\right)\\)"
   },
   {
    "key": "b",
    "text": "Le lien identité, \\(g(\\mu)=\\mu\\)"
   },
   {
    "key": "c",
    "text": "Le lien logarithmique, \\(g(\\mu)=\\ln(\\mu)\\)"
   },
   {
    "key": "d",
    "text": "Le lien inverse, \\(g(\\mu)=\\mu^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le lien logit, \\(g(\\mu)=\\ln\\!\\left(\\dfrac{\\mu}{1-\\mu}\\right)\\)",
  "id": "generalites-mlg-15",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après le tableau du cours, quelle est la fonction de lien canonique associée à la loi de Poisson ?",
  "opts": [
   {
    "key": "a",
    "text": "Le lien logarithmique, \\(g(\\mu)=\\ln(\\mu)\\)"
   },
   {
    "key": "b",
    "text": "Le lien logit, \\(g(\\mu)=\\ln\\!\\left(\\dfrac{\\mu}{1-\\mu}\\right)\\)"
   },
   {
    "key": "c",
    "text": "Le lien identité, \\(g(\\mu)=\\mu\\)"
   },
   {
    "key": "d",
    "text": "Le lien inverse, \\(g(\\mu)=\\mu^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le lien logarithmique, \\(g(\\mu)=\\ln(\\mu)\\)",
  "id": "generalites-mlg-16",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après le tableau du cours, quelle est la fonction de lien canonique associée à la loi Normale ?",
  "opts": [
   {
    "key": "a",
    "text": "Le lien identité, \\(g(\\mu)=\\mu\\)"
   },
   {
    "key": "b",
    "text": "Le lien logarithmique, \\(g(\\mu)=\\ln(\\mu)\\)"
   },
   {
    "key": "c",
    "text": "Le lien logit, \\(g(\\mu)=\\ln\\!\\left(\\dfrac{\\mu}{1-\\mu}\\right)\\)"
   },
   {
    "key": "d",
    "text": "Le lien inverse, \\(g(\\mu)=\\mu^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le lien identité, \\(g(\\mu)=\\mu\\)",
  "id": "generalites-mlg-17",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "D'après le tableau du cours, quelle est la fonction de lien canonique associée à la loi Gamma ?",
  "opts": [
   {
    "key": "a",
    "text": "Le lien inverse, \\(g(\\mu)=\\mu^{-1}\\)"
   },
   {
    "key": "b",
    "text": "Le lien identité, \\(g(\\mu)=\\mu\\)"
   },
   {
    "key": "c",
    "text": "Le lien logit, \\(g(\\mu)=\\ln\\!\\left(\\dfrac{\\mu}{1-\\mu}\\right)\\)"
   },
   {
    "key": "d",
    "text": "Le lien logarithmique, \\(g(\\mu)=\\ln(\\mu)\\)"
   }
  ],
  "ans": "a",
  "ansText": "Le lien inverse, \\(g(\\mu)=\\mu^{-1}\\)",
  "id": "generalites-mlg-18",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans la régression de Poisson, avec le lien canonique logarithmique \\(g(\\mu)=\\ln(\\mu)=X\\beta\\), quelle relation relie \\(E[Y|X]\\) et \\(X\\beta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(E[Y|X] = \\exp(X\\beta)\\)"
   },
   {
    "key": "b",
    "text": "\\(E[Y|X] = X\\beta\\)"
   },
   {
    "key": "c",
    "text": "\\(E[Y|X] = \\ln(X\\beta)\\)"
   },
   {
    "key": "d",
    "text": "\\(E[Y|X] = (X\\beta)^{-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(E[Y|X] = \\exp(X\\beta)\\)",
  "id": "generalites-mlg-19",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans l'Exemple 8.5 (généalogie linguistique), on modélise \\(Y_i \\sim \\mathcal B(\\pi)\\) avec \\(\\pi = e^{-\\theta t}\\), \\(\\theta\\) jouant le rôle de \\(\\beta\\) et \\(t\\) celui de la variable explicative. À quel type de modèle cela correspond-il ?",
  "opts": [
   {
    "key": "a",
    "text": "Un modèle de régression logistique, où \\(\\pi=E[Y_i]\\) est reliée à \\(t\\) via le lien canonique de la loi de Bernoulli"
   },
   {
    "key": "b",
    "text": "Un modèle de régression de Poisson"
   },
   {
    "key": "c",
    "text": "Un modèle de régression linéaire gaussien classique"
   },
   {
    "key": "d",
    "text": "Un modèle de régression Gamma"
   }
  ],
  "ans": "a",
  "ansText": "Un modèle de régression logistique, où \\(\\pi=E[Y_i]\\) est reliée à \\(t\\) via le lien canonique de la loi de Bernoulli",
  "id": "generalites-mlg-20",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Pour la loi de Poisson, le cours pose \\(\\theta = \\ln(\\lambda)\\) et \\(b(\\theta)=e^{\\theta}=\\lambda\\). Si \\(\\theta = \\ln(12)\\), calculer \\(E[Y] = b'(\\theta)\\).",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "generalites-mlg-21",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Pour la loi de Poisson, le lien canonique est \\(g(\\mu) = \\ln(\\mu)\\). Calculer \\(g(\\mu)\\) pour \\(\\mu = 20\\) (arrondir à 4 décimales).",
  "ans": 2.9957,
  "ansText": "≈ 2,9957",
  "tol": 0.01,
  "id": "generalites-mlg-22",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Pour la loi Gamma, le lien canonique donné dans le tableau du cours est \\(g(\\mu) = \\mu^{-1}\\). Calculer \\(g(\\mu)\\) pour \\(\\mu = 5\\).",
  "ans": 0.2,
  "ansText": "0,2",
  "tol": 0.001,
  "id": "generalites-mlg-23",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans l'expression \\(a_i(\\phi) = \\phi/w_i\\) utilisée en Section 8.3 pour l'estimation des paramètres d'un GLM, que représentent les \\(w_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Des poids connus associés à chaque observation"
   },
   {
    "key": "b",
    "text": "Les paramètres naturels \\(\\theta_i\\)"
   },
   {
    "key": "c",
    "text": "Les variances estimées \\(\\hat\\sigma_i^2\\)"
   },
   {
    "key": "d",
    "text": "Les résidus de Pearson"
   }
  ],
  "ans": "a",
  "ansText": "Des poids connus associés à chaque observation",
  "id": "generalites-mlg-24",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Pourquoi ne peut-on pas, en général, obtenir une expression analytique de l'estimateur du maximum de vraisemblance \\(\\hat\\beta\\) dans un modèle linéaire généralisé (contrairement au modèle linéaire gaussien) ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que les \\(\\mu_i\\) dépendent non linéairement de \\(\\beta\\) dans les équations du score"
   },
   {
    "key": "b",
    "text": "Parce que la fonction de vraisemblance n'est pas dérivable"
   },
   {
    "key": "c",
    "text": "Parce que le paramètre de dispersion \\(\\phi\\) est toujours inconnu"
   },
   {
    "key": "d",
    "text": "Parce que les variables \\(Y_i\\) ne sont pas indépendantes"
   }
  ],
  "ans": "a",
  "ansText": "Parce que les \\(\\mu_i\\) dépendent non linéairement de \\(\\beta\\) dans les équations du score",
  "id": "generalites-mlg-25",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Quels sont les deux algorithmes itératifs mentionnés dans le cours pour résoudre les équations du score et estimer \\(\\beta\\) dans un GLM ?",
  "opts": [
   {
    "key": "a",
    "text": "L'algorithme IRLS (Iterative Reweighted Least Squares, basé sur la dérivée première) et l'algorithme de Newton-Raphson (basé sur la dérivée seconde)"
   },
   {
    "key": "b",
    "text": "La descente de gradient stochastique et l'algorithme EM"
   },
   {
    "key": "c",
    "text": "L'algorithme des moindres carrés ordinaires et la méthode des moments uniquement"
   },
   {
    "key": "d",
    "text": "L'algorithme du simplexe et une méthode de Monte-Carlo"
   }
  ],
  "ans": "a",
  "ansText": "L'algorithme IRLS (Iterative Reweighted Least Squares, basé sur la dérivée première) et l'algorithme de Newton-Raphson (basé sur la dérivée seconde)",
  "id": "generalites-mlg-26",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Une fois le modèle ajusté, comment le cours définit-il la prévision \\(\\hat\\mu_i\\) pour une observation \\(x_i\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\hat\\mu_i = g^{-1}(x_i^\\top\\hat\\beta)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\hat\\mu_i = g(x_i^\\top\\hat\\beta)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\hat\\mu_i = x_i^\\top\\hat\\beta\\)"
   },
   {
    "key": "d",
    "text": "\\(\\hat\\mu_i = (x_i^\\top\\hat\\beta)^{-1}\\) quel que soit le lien"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\hat\\mu_i = g^{-1}(x_i^\\top\\hat\\beta)\\)",
  "id": "generalites-mlg-27",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "Dans l'Exemple 8.3, on a \\(b''(\\theta) = 1\\) et \\(a(\\phi) = \\phi = \\sigma^2\\). Calculer \\(\\mathrm{Var}[Y] = b''(\\theta)a(\\phi)\\) pour \\(\\sigma^2 = 7\\).",
  "ans": 7,
  "ansText": "7",
  "tol": 0.01,
  "id": "generalites-mlg-28",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "On considère une observation avec \\(y_i = 15\\), une prévision \\(\\hat\\mu_i = 12\\) et \\(V(\\hat\\mu_i)=12\\) (cas d'une loi de Poisson). Calculer le résidu de Pearson au carré \\(r_i^2 = \\dfrac{(y_i-\\hat\\mu_i)^2}{V(\\hat\\mu_i)}\\).",
  "ans": 0.75,
  "ansText": "0,75",
  "tol": 0.01,
  "id": "generalites-mlg-29",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "On dispose de \\(n=25\\) observations et \\(p=5\\) paramètres estimés. La somme des résidus de Pearson au carré vaut \\(\\sum_{i=1}^n r_i^2 = 40\\). Calculer l'estimateur \\(\\hat\\phi = \\dfrac{1}{n-p}\\sum_{i=1}^n r_i^2\\).",
  "ans": 2.0,
  "ansText": "2",
  "tol": 0.01,
  "id": "generalites-mlg-30",
  "cat": "generalites-mlg"
 },
 {
  "type": "num",
  "q": "On utilise un modèle de régression de Poisson avec le lien canonique logarithmique \\(g(\\mu)=\\ln(\\mu)\\), donc \\(g^{-1}(u) = e^{u}\\). Pour une observation telle que \\(x_i^\\top\\hat\\beta = \\ln(50)\\), calculer la prévision \\(\\hat\\mu_i = g^{-1}(x_i^\\top\\hat\\beta)\\).",
  "ans": 50,
  "ansText": "50",
  "tol": 0.01,
  "id": "generalites-mlg-31",
  "cat": "generalites-mlg"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre de la régression logistique, quelle est la nature de la variable réponse \\(Y\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(Y\\) est une variable continue à valeurs dans \\(\\mathbb{R}\\)"
   },
   {
    "key": "b",
    "text": "\\(Y\\) est une variable binaire ne prenant que les valeurs 0 et 1"
   },
   {
    "key": "c",
    "text": "\\(Y\\) est une variable de comptage à valeurs entières positives"
   },
   {
    "key": "d",
    "text": "\\(Y\\) est un vecteur aléatoire gaussien"
   }
  ],
  "ans": "b",
  "ansText": "\\(Y\\) est une variable binaire ne prenant que les valeurs 0 et 1",
  "id": "regression-logistique-01",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Dans l'exemple introductif du chapitre (prédiction d'une infection à partir de la numération en lymphocytes), pourquoi un modèle de régression linéaire standard avec un seuil à 0.5 devient-il problématique lorsque le nombre de lymphocytes peut prendre des valeurs très élevées ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce que la droite ajustée est modifiée par les valeurs extrêmes et fait manquer des cas positifs (individus infectés) situés à droite"
   },
   {
    "key": "b",
    "text": "Parce que la variable lymphocyte cesse d'être numérique"
   },
   {
    "key": "c",
    "text": "Parce que le modèle linéaire ne peut plus être calculé par moindres carrés"
   },
   {
    "key": "d",
    "text": "Parce que la variable réponse devient continue dans ce cas"
   }
  ],
  "ans": "a",
  "ansText": "Parce que la droite ajustée est modifiée par les valeurs extrêmes et fait manquer des cas positifs (individus infectés) situés à droite",
  "id": "regression-logistique-02",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle propriété doit satisfaire la sortie du modèle recherché pour pouvoir être interprétée comme la probabilité d'avoir une infection ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle doit être une fonction linéaire de la variable explicative"
   },
   {
    "key": "b",
    "text": "Elle doit être strictement croissante et non bornée"
   },
   {
    "key": "c",
    "text": "Elle doit prendre ses valeurs dans l'intervalle \\([0,1]\\)"
   },
   {
    "key": "d",
    "text": "Elle doit être symétrique autour de 0"
   }
  ],
  "ans": "c",
  "ansText": "Elle doit prendre ses valeurs dans l'intervalle \\([0,1]\\)",
  "id": "regression-logistique-03",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Dans le cadre des modèles linéaires généralisés, comment la fonction de lien canonique \\(g\\) relie-t-elle l'espérance de \\(Y\\) au prédicteur linéaire \\(X\\beta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g(X\\beta) = E[Y \\mid X]\\)"
   },
   {
    "key": "b",
    "text": "\\(E[Y \\mid X] = g(X\\beta)^{-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(g(E[Y \\mid X]) = X\\beta\\)"
   },
   {
    "key": "d",
    "text": "\\(X\\beta = E[g(Y) \\mid X]\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(g(E[Y \\mid X]) = X\\beta\\)",
  "id": "regression-logistique-04",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle loi de probabilité suit la variable \\(Y\\) dans le modèle de régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "Une loi normale"
   },
   {
    "key": "b",
    "text": "Une loi de Bernoulli"
   },
   {
    "key": "c",
    "text": "Une loi de Poisson"
   },
   {
    "key": "d",
    "text": "Une loi exponentielle"
   }
  ],
  "ans": "b",
  "ansText": "Une loi de Bernoulli",
  "id": "regression-logistique-05",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression de la loi de Bernoulli utilisée dans le chapitre, avec \\(p = P[Y=1 \\mid X]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(P[Y=y \\mid X] = p^y (1-p)^{1-y}\\)"
   },
   {
    "key": "b",
    "text": "\\(P[Y=y \\mid X] = p (1-p)^y\\)"
   },
   {
    "key": "c",
    "text": "\\(P[Y=y \\mid X] = y^p (1-y)^{1-p}\\)"
   },
   {
    "key": "d",
    "text": "\\(P[Y=y \\mid X] = \\binom{n}{y} p^y (1-p)^{n-y}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(P[Y=y \\mid X] = p^y (1-p)^{1-y}\\)",
  "id": "regression-logistique-06",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "En écrivant la densité de la loi de Bernoulli sous la forme de la famille exponentielle, quel est le paramètre naturel \\(\\theta\\) obtenu ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\theta = p\\)"
   },
   {
    "key": "b",
    "text": "\\(\\theta = \\ln\\left(\\dfrac{p}{1-p}\\right)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\theta = \\ln(1-p)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\theta = \\dfrac{1}{1+e^{-p}}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\theta = \\ln\\left(\\dfrac{p}{1-p}\\right)\\)",
  "id": "regression-logistique-07",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Pour la loi de Bernoulli écrite sous forme exponentielle, quelle est l'expression de la fonction \\(b(\\theta)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(b(\\theta) = \\theta^2/2\\)"
   },
   {
    "key": "b",
    "text": "\\(b(\\theta) = \\ln\\left(1+e^{\\theta}\\right)\\)"
   },
   {
    "key": "c",
    "text": "\\(b(\\theta) = e^{\\theta}\\)"
   },
   {
    "key": "d",
    "text": "\\(b(\\theta) = -\\ln(\\theta)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(b(\\theta) = \\ln\\left(1+e^{\\theta}\\right)\\)",
  "id": "regression-logistique-08",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "On rappelle que la fonction de lien canonique \\(g\\) est égale à \\((b')^{-1}\\). Quelle relation cela traduit-il ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g = b'\\)"
   },
   {
    "key": "b",
    "text": "\\(g = (b')^{-1}\\), c'est-à-dire la réciproque de la dérivée de \\(b\\)"
   },
   {
    "key": "c",
    "text": "\\(g = b^{-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(g\\) est la dérivée seconde de \\(b\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(g = (b')^{-1}\\), c'est-à-dire la réciproque de la dérivée de \\(b\\)",
  "id": "regression-logistique-09",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Comment s'appelle la fonction de lien \\(g\\) ainsi obtenue pour la régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "La fonction logistique"
   },
   {
    "key": "b",
    "text": "La fonction logit"
   },
   {
    "key": "c",
    "text": "La fonction de Gram"
   },
   {
    "key": "d",
    "text": "La fonction probit"
   }
  ],
  "ans": "b",
  "ansText": "La fonction logit",
  "id": "regression-logistique-10",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Comment s'appelle la réciproque \\((g)^{-1}\\) de la fonction logit ?",
  "opts": [
   {
    "key": "a",
    "text": "La fonction probit"
   },
   {
    "key": "b",
    "text": "La fonction logistique"
   },
   {
    "key": "c",
    "text": "La fonction canonique"
   },
   {
    "key": "d",
    "text": "La fonction de lien"
   }
  ],
  "ans": "b",
  "ansText": "La fonction logistique",
  "id": "regression-logistique-11",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'expression finale du modèle de régression logistique (modèle logit) pour \\(P[Y=1 \\mid X]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(P[Y=1 \\mid X] = X\\beta\\)"
   },
   {
    "key": "b",
    "text": "\\(P[Y=1 \\mid X] = \\ln\\left(1+e^{X\\beta}\\right)\\)"
   },
   {
    "key": "c",
    "text": "\\(P[Y=1 \\mid X] = \\dfrac{1}{1+\\exp(-X\\beta)}\\)"
   },
   {
    "key": "d",
    "text": "\\(P[Y=1 \\mid X] = \\exp(-X\\beta)\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(P[Y=1 \\mid X] = \\dfrac{1}{1+\\exp(-X\\beta)}\\)",
  "id": "regression-logistique-12",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Comment s'écrit la vraisemblance \\(L(\\beta,S)\\) des données \\(S=\\{x_1,\\dots,x_m\\}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(L(\\beta,S) = \\sum_{i=1}^m Pr(Y=y_i \\mid X=x_i)\\)"
   },
   {
    "key": "b",
    "text": "\\(L(\\beta,S) = \\prod_{i=1}^m Pr(Y=y_i \\mid X=x_i)\\)"
   },
   {
    "key": "c",
    "text": "\\(L(\\beta,S) = \\max_i Pr(Y=y_i \\mid X=x_i)\\)"
   },
   {
    "key": "d",
    "text": "\\(L(\\beta,S) = \\prod_{i=1}^m y_i\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(L(\\beta,S) = \\prod_{i=1}^m Pr(Y=y_i \\mid X=x_i)\\)",
  "id": "regression-logistique-13",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Que fait-on en pratique, plutôt que de maximiser directement la vraisemblance \\(L(\\beta,S)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "On minimise la log-vraisemblance négative \\(\\ell(\\beta,S) = -\\ln(L(\\beta,S))\\)"
   },
   {
    "key": "b",
    "text": "On maximise le carré de la vraisemblance"
   },
   {
    "key": "c",
    "text": "On minimise directement \\(L(\\beta,S)\\) sans passer par le logarithme"
   },
   {
    "key": "d",
    "text": "On maximise \\(L(\\beta,S)\\) élevée à la puissance \\(m\\)"
   }
  ],
  "ans": "a",
  "ansText": "On minimise la log-vraisemblance négative \\(\\ell(\\beta,S) = -\\ln(L(\\beta,S))\\)",
  "id": "regression-logistique-14",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Par souci de simplicité, quelle notation \\(g(\\beta,x)\\) est introduite dans le chapitre pour réécrire la log-vraisemblance négative ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g(\\beta,x) = X\\beta\\)"
   },
   {
    "key": "b",
    "text": "\\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-x\\beta)}\\)"
   },
   {
    "key": "c",
    "text": "\\(g(\\beta,x) = \\ln(x\\beta)\\)"
   },
   {
    "key": "d",
    "text": "\\(g(\\beta,x) = x\\beta\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-x\\beta)}\\)",
  "id": "regression-logistique-15",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire du problème d'optimisation \\(\\min_{\\beta} -\\frac{1}{m}\\sum_i y_i\\ln(g(\\beta,x_i)) + (1-y_i)\\ln(1-g(\\beta,x_i))\\) associé à l'estimation de \\(\\beta\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Il est linéaire et admet une solution analytique, comme pour les moindres carrés"
   },
   {
    "key": "b",
    "text": "Il est convexe, mais il n'existe pas de solution analytique connue"
   },
   {
    "key": "c",
    "text": "Il n'est pas convexe, ce qui empêche toute garantie de convergence"
   },
   {
    "key": "d",
    "text": "Il se résout uniquement par inversion directe de la matrice de design \\(X\\)"
   }
  ],
  "ans": "b",
  "ansText": "Il est convexe, mais il n'existe pas de solution analytique connue",
  "id": "regression-logistique-16",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle matrice remplace le pas d'apprentissage \\(\\eta\\) dans l'algorithme de Newton-Raphson appliqué à la régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "La matrice de covariance empirique des données"
   },
   {
    "key": "b",
    "text": "L'inverse de la matrice hessienne de \\(\\ell\\)"
   },
   {
    "key": "c",
    "text": "La matrice identité"
   },
   {
    "key": "d",
    "text": "La matrice de design \\(X\\) seule"
   }
  ],
  "ans": "b",
  "ansText": "L'inverse de la matrice hessienne de \\(\\ell\\)",
  "id": "regression-logistique-17",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle est l'écriture compacte de la matrice hessienne \\(\\nabla^2\\ell(\\beta,X)\\) donnée dans le chapitre ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\nabla^2\\ell(\\beta,X) = XX^\\top\\)"
   },
   {
    "key": "b",
    "text": "\\(\\nabla^2\\ell(\\beta,X) = X^\\top G X\\)"
   },
   {
    "key": "c",
    "text": "\\(\\nabla^2\\ell(\\beta,X) = GX\\)"
   },
   {
    "key": "d",
    "text": "\\(\\nabla^2\\ell(\\beta,X) = X^\\top X\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\nabla^2\\ell(\\beta,X) = X^\\top G X\\)",
  "id": "regression-logistique-18",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Dans l'écriture compacte \\(\\nabla^2\\ell(\\beta,X) = X^\\top G X\\), qu'est-ce que la matrice diagonale \\(G \\in \\mathbb{R}^{m\\times m}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(G = diag(y_i)\\)"
   },
   {
    "key": "b",
    "text": "\\(G = diag\\big(g(\\beta,x_i)(1-g(\\beta,x_i))\\big)\\)"
   },
   {
    "key": "c",
    "text": "\\(G = diag(x_i)\\)"
   },
   {
    "key": "d",
    "text": "\\(G\\) est la matrice identité"
   }
  ],
  "ans": "b",
  "ansText": "\\(G = diag\\big(g(\\beta,x_i)(1-g(\\beta,x_i))\\big)\\)",
  "id": "regression-logistique-19",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Pourquoi peut-on affirmer que la matrice hessienne \\(\\nabla^2\\ell(\\beta,S)\\) est semi-définie positive ?",
  "opts": [
   {
    "key": "a",
    "text": "Parce qu'elle est diagonale"
   },
   {
    "key": "b",
    "text": "Parce qu'elle s'exprime comme une combinaison linéaire positive de matrices de Gram \\(x_i x_i^\\top\\)"
   },
   {
    "key": "c",
    "text": "Parce que son déterminant est toujours nul"
   },
   {
    "key": "d",
    "text": "Parce que \\(g(\\beta,x)\\) est toujours négatif"
   }
  ],
  "ans": "b",
  "ansText": "Parce qu'elle s'exprime comme une combinaison linéaire positive de matrices de Gram \\(x_i x_i^\\top\\)",
  "id": "regression-logistique-20",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "Quelle est la formule de mise à jour de l'algorithme de Newton-Raphson pour la régression logistique ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\beta^{(k+1)} = \\beta^{(k)} - \\eta\\, \\nabla\\ell(\\beta^{(k)},S)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\beta^{(k+1)} = \\beta^{(k)} - \\big[\\nabla^2\\ell(\\beta^{(k)},S)\\big]^{-1} \\nabla\\ell(\\beta^{(k)},S)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\beta^{(k+1)} = \\beta^{(k)} + \\nabla^2\\ell(\\beta^{(k)},S)\\, \\nabla\\ell(\\beta^{(k)},S)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\beta^{(k+1)} = \\big[\\nabla^2\\ell(\\beta^{(k)},S)\\big]^{-1} \\beta^{(k)}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\beta^{(k+1)} = \\beta^{(k)} - \\big[\\nabla^2\\ell(\\beta^{(k)},S)\\big]^{-1} \\nabla\\ell(\\beta^{(k)},S)\\)",
  "id": "regression-logistique-21",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "On note \\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-x\\beta)}\\). Calculer \\(g(\\beta,x)\\) lorsque \\(x\\beta = 0\\).",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.001,
  "id": "regression-logistique-22",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "En utilisant \\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-x\\beta)}\\), calculer la valeur de \\(g(\\beta,x)\\) lorsque \\(x\\beta = 2\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.8808,
  "ansText": "≈ 0.8808",
  "tol": 0.001,
  "id": "regression-logistique-23",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "En utilisant \\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-x\\beta)}\\), calculer la valeur de \\(g(\\beta,x)\\) lorsque \\(x\\beta = -1\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.2689,
  "ansText": "≈ 0.2689",
  "tol": 0.001,
  "id": "regression-logistique-24",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "On considère un modèle de régression logistique à un seul prédicteur, avec \\(\\beta_0 = 0\\) et \\(\\beta_1 = 2\\). Pour une observation \\(x = 0.5\\), calculer la probabilité prédite \\(P[Y=1 \\mid X=x] = g(\\beta,x) = \\dfrac{1}{1+\\exp(-(\\beta_0+\\beta_1 x))}\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.7311,
  "ansText": "≈ 0.7311",
  "tol": 0.001,
  "id": "regression-logistique-25",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "En utilisant \\(\\theta = \\ln\\left(\\dfrac{p}{1-p}\\right)\\), calculer \\(\\theta\\) pour \\(p = 0.7\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.8473,
  "ansText": "≈ 0.8473",
  "tol": 0.005,
  "id": "regression-logistique-26",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "En utilisant \\(p = \\dfrac{e^{\\theta}}{1+e^{\\theta}}\\), calculer la valeur de \\(p\\) lorsque \\(\\theta = -0.5\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.3775,
  "ansText": "≈ 0.3775",
  "tol": 0.001,
  "id": "regression-logistique-27",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "En utilisant \\(b(\\theta) = \\ln\\left(1+e^{\\theta}\\right)\\), calculer \\(b(\\theta)\\) pour \\(\\theta = 0\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.6931,
  "ansText": "≈ 0.6931",
  "tol": 0.001,
  "id": "regression-logistique-28",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "Dans la matrice \\(G\\) intervenant dans la hessienne, chaque terme diagonal vaut \\(g(\\beta,x_i)\\big(1-g(\\beta,x_i)\\big)\\). Calculer ce terme lorsque \\(g(\\beta,x_i) = 0.8\\).",
  "ans": 0.16,
  "ansText": "0.16",
  "tol": 0.001,
  "id": "regression-logistique-29",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "Dans la matrice \\(G\\) intervenant dans la hessienne, chaque terme diagonal vaut \\(g(\\beta,x_i)\\big(1-g(\\beta,x_i)\\big)\\). Calculer ce terme lorsque \\(g(\\beta,x_i) = 0.3\\).",
  "ans": 0.21,
  "ansText": "0.21",
  "tol": 0.001,
  "id": "regression-logistique-30",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "Pour une observation avec \\(y_i = 1\\) et une probabilité prédite \\(g(\\beta,x_i) = 0.8\\), calculer la contribution de cette observation à la log-vraisemblance négative, \\(-\\big[y_i\\ln(g(\\beta,x_i)) + (1-y_i)\\ln(1-g(\\beta,x_i))\\big]\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 0.2231,
  "ansText": "≈ 0.2231",
  "tol": 0.001,
  "id": "regression-logistique-31",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "Pour une observation avec \\(y_i = 0\\) et une probabilité prédite \\(g(\\beta,x_i) = 0.8\\), calculer la contribution de cette observation à la log-vraisemblance négative, \\(-\\big[y_i\\ln(g(\\beta,x_i)) + (1-y_i)\\ln(1-g(\\beta,x_i))\\big]\\) (arrondir à \\(10^{-4}\\) près).",
  "ans": 1.6094,
  "ansText": "≈ 1.6094",
  "tol": 0.001,
  "id": "regression-logistique-32",
  "cat": "regression-logistique"
 },
 {
  "type": "num",
  "q": "On dispose d'un unique exemple d'apprentissage \\((x_1,y_1) = (1,1)\\) et d'un modèle de régression logistique à un seul paramètre \\(\\beta\\) (sans intercept), tel que \\(g(\\beta,x) = \\dfrac{1}{1+\\exp(-\\beta x)}\\). On part de \\(\\beta^{(0)} = 0\\), avec \\(\\nabla\\ell(\\beta,S) = -\\sum_i (y_i - g(\\beta,x_i))x_i\\) et \\(\\nabla^2\\ell(\\beta,S) = \\sum_i g(\\beta,x_i)\\big(1-g(\\beta,x_i)\\big)x_i^2\\). En appliquant une itération de Newton-Raphson \\(\\beta^{(1)} = \\beta^{(0)} - \\big[\\nabla^2\\ell(\\beta^{(0)},S)\\big]^{-1}\\nabla\\ell(\\beta^{(0)},S)\\), donner la valeur de \\(\\beta^{(1)}\\).",
  "ans": 2,
  "ansText": "2",
  "tol": 0.001,
  "id": "regression-logistique-33",
  "cat": "regression-logistique"
 },
 {
  "type": "qcm",
  "q": "La loi normale \\(\\mathcal{N}(\\mu,\\sigma^2)\\) est entièrement caractérisée par la connaissance de quels paramètres ?",
  "opts": [
   {
    "key": "a",
    "text": "Sa moyenne \\(\\mu\\) et sa variance \\(\\sigma^2\\)"
   },
   {
    "key": "b",
    "text": "Sa médiane et son écart-type"
   },
   {
    "key": "c",
    "text": "Son mode et sa variance \\(\\sigma^2\\)"
   },
   {
    "key": "d",
    "text": "Sa moyenne \\(\\mu\\) et son quantile à 50%"
   }
  ],
  "ans": "a",
  "ansText": "Sa moyenne \\(\\mu\\) et sa variance \\(\\sigma^2\\)",
  "id": "lois-probabilite-01",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Quelle est la densité \\(f\\) de la loi normale \\(\\mathcal{N}(\\mu,\\sigma^2)\\), définie pour tout \\(x\\in\\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\dfrac{1}{2}\\left(\\dfrac{x-\\mu}{\\sigma}\\right)^2\\right]\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x)=\\dfrac{1}{\\sqrt{2\\pi}}\\exp\\left[-\\dfrac{1}{2}\\left(\\dfrac{x-\\mu}{\\sigma}\\right)^2\\right]\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[\\dfrac{1}{2}\\left(\\dfrac{x-\\mu}{\\sigma}\\right)^2\\right]\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\dfrac{1}{2}\\left(\\dfrac{x-\\mu}{\\sigma}\\right)\\right]\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\dfrac{1}{2}\\left(\\dfrac{x-\\mu}{\\sigma}\\right)^2\\right]\\)",
  "id": "lois-probabilite-02",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Dans le cas multi-dimensionnel, avec un vecteur aléatoire à valeurs dans \\(\\mathbb{R}^n\\), la loi normale est caractérisée par :",
  "opts": [
   {
    "key": "a",
    "text": "Un vecteur de moyenne \\(\\mu\\in\\mathbb{R}^n\\) et une matrice de covariance \\(\\Sigma\\in\\mathcal{M}_n(\\mathbb{R})\\)"
   },
   {
    "key": "b",
    "text": "Une moyenne scalaire \\(\\mu\\in\\mathbb{R}\\) et une matrice de covariance \\(\\Sigma\\)"
   },
   {
    "key": "c",
    "text": "Un vecteur de moyenne \\(\\mu\\in\\mathbb{R}^n\\) et une variance scalaire \\(\\sigma^2\\)"
   },
   {
    "key": "d",
    "text": "Une matrice de moyenne et un vecteur de covariance"
   }
  ],
  "ans": "a",
  "ansText": "Un vecteur de moyenne \\(\\mu\\in\\mathbb{R}^n\\) et une matrice de covariance \\(\\Sigma\\in\\mathcal{M}_n(\\mathbb{R})\\)",
  "id": "lois-probabilite-03",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Soient \\(X_1,\\dots,X_k\\) des variables aléatoires indépendantes suivant une loi normale centrée réduite. Quelle est la loi de \\(X=\\sum_{i=1}^{k}X_i^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Une loi du \\(\\chi^2\\) à \\(k\\) degrés de liberté, notée \\(\\chi^2_k\\)"
   },
   {
    "key": "b",
    "text": "Une loi normale \\(\\mathcal{N}(0,k)\\)"
   },
   {
    "key": "c",
    "text": "Une loi de Student à \\(k\\) degrés de liberté"
   },
   {
    "key": "d",
    "text": "Une loi du \\(\\chi^2\\) à \\(k-1\\) degrés de liberté"
   }
  ],
  "ans": "a",
  "ansText": "Une loi du \\(\\chi^2\\) à \\(k\\) degrés de liberté, notée \\(\\chi^2_k\\)",
  "id": "lois-probabilite-04",
  "cat": "lois-probabilite"
 },
 {
  "type": "num",
  "q": "Soient \\(X_1,X_2,X_3,X_4,X_5\\) des variables aléatoires indépendantes suivant une loi normale centrée réduite. À combien de degrés de liberté suit la loi du \\(\\chi^2\\) de la variable \\(X=\\sum_{i=1}^{5}X_i^2\\) ?",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "lois-probabilite-05",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Dans la définition de la loi du \\(\\chi^2_k\\), quelle hypothèse est faite sur les variables aléatoires \\(X_1,\\dots,X_k\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elles sont indépendantes et suivent chacune une loi normale centrée réduite"
   },
   {
    "key": "b",
    "text": "Elles sont indépendantes et suivent chacune une loi normale de moyenne \\(\\mu\\) quelconque"
   },
   {
    "key": "c",
    "text": "Elles sont indépendantes et suivent chacune une loi de Student"
   },
   {
    "key": "d",
    "text": "Elles sont indépendantes et suivent chacune une loi uniforme sur \\([0,1]\\)"
   }
  ],
  "ans": "a",
  "ansText": "Elles sont indépendantes et suivent chacune une loi normale centrée réduite",
  "id": "lois-probabilite-06",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(X\\) une variable aléatoire centrée réduite et \\(U\\) une variable aléatoire suivant une loi du \\(\\chi^2_k\\), \\(X\\) et \\(U\\) étant indépendantes. Quelle variable aléatoire suit une loi de Student à \\(k\\) degrés de liberté ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(T_k = \\dfrac{X}{\\sqrt{U/k}}\\)"
   },
   {
    "key": "b",
    "text": "\\(T_k = X\\sqrt{U/k}\\)"
   },
   {
    "key": "c",
    "text": "\\(T_k = \\dfrac{U}{\\sqrt{X/k}}\\)"
   },
   {
    "key": "d",
    "text": "\\(T_k = \\dfrac{X}{U}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(T_k = \\dfrac{X}{\\sqrt{U/k}}\\)",
  "id": "lois-probabilite-07",
  "cat": "lois-probabilite"
 },
 {
  "type": "num",
  "q": "Soit \\(X\\) une variable aléatoire centrée réduite et \\(U\\) une variable aléatoire suivant une loi du \\(\\chi^2_{12}\\), indépendantes. La variable \\(T=\\dfrac{X}{\\sqrt{U/12}}\\) suit une loi de Student \\(T_k\\). Quelle est la valeur de \\(k\\) ?",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "lois-probabilite-08",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Soient \\(U_1\\) et \\(U_2\\) deux variables aléatoires indépendantes suivant respectivement une loi du \\(\\chi^2\\) à \\(k_1\\) et \\(k_2\\) degrés de liberté. Quelle est la loi de \\(X=\\dfrac{U_1/k_1}{U_2/k_2}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Une loi de Fisher, notée \\(F(k_1,k_2)\\)"
   },
   {
    "key": "b",
    "text": "Une loi de Student à \\(k_1+k_2\\) degrés de liberté"
   },
   {
    "key": "c",
    "text": "Une loi du \\(\\chi^2\\) à \\(k_1+k_2\\) degrés de liberté"
   },
   {
    "key": "d",
    "text": "Une loi de Fisher, notée \\(F(k_2,k_1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "Une loi de Fisher, notée \\(F(k_1,k_2)\\)",
  "id": "lois-probabilite-09",
  "cat": "lois-probabilite"
 },
 {
  "type": "qcm",
  "q": "Dans la notation \\(F(k_1,k_2)\\) de la loi de Fisher, que représentent \\(k_1\\) et \\(k_2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Les degrés de liberté des deux lois du \\(\\chi^2\\) indépendantes intervenant respectivement au numérateur et au dénominateur"
   },
   {
    "key": "b",
    "text": "La moyenne et la variance de la loi de Fisher"
   },
   {
    "key": "c",
    "text": "Les paramètres \\(\\mu\\) et \\(\\sigma^2\\) de la loi normale sous-jacente"
   },
   {
    "key": "d",
    "text": "Le nombre total d'observations de l'échantillon, sans lien avec les lois du \\(\\chi^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Les degrés de liberté des deux lois du \\(\\chi^2\\) indépendantes intervenant respectivement au numérateur et au dénominateur",
  "id": "lois-probabilite-10",
  "cat": "lois-probabilite"
 }
];
