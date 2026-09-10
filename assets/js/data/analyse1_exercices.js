/* Banque d'exercices interactifs - Analyse I
   Genere automatiquement - ne pas editer a la main, regenerer depuis le script source.
   NB: on utilise 'var' (et non 'const') pour que ces variables soient bien attachees a
   l'objet window et donc lisibles depuis exercises.js charge dans un <script> separe. */
var EXERCISES_CATEGORIES = [
 {
  "slug": "suites",
  "label": "Suites numériques"
 },
 {
  "slug": "fonctions",
  "label": "Fonctions classiques"
 },
 {
  "slug": "continuite",
  "label": "Continuité"
 },
 {
  "slug": "derivation",
  "label": "Dérivation & variations"
 },
 {
  "slug": "convexite",
  "label": "Convexité"
 },
 {
  "slug": "integrales",
  "label": "Intégrales"
 },
 {
  "slug": "dl",
  "label": "Développements limités"
 }
];
var EXERCISES_DATA = [
 {
  "type": "num",
  "q": "Soit la suite définie par \\(u_{n} = (3n + 1) / (n + 2)\\). Calculer \\(\\lim_{n \\to + \\infty } u_{n}\\).",
  "ans": 3,
  "ansText": "\\(3\\)",
  "tol": 0.01,
  "id": "suites-01",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\(v_{n} = (2n^{2} - 5n) / (n^{2} + 1)\\). Calculer \\(\\lim_{n \\to + \\infty } v_{n}\\).",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "suites-02",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\lim_{n \\to + \\infty }\\) ( \\(\\sqrt{n^{2} + n} - n\\) ).",
  "ans": 0.5,
  "ansText": "\\(0,5\\) (soit \\(1/2)\\)",
  "tol": 0.01,
  "id": "suites-03",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Quelle est la nature de la suite \\(u_{n} = (-1)^{n}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Convergente vers \\(0\\)"
   },
   {
    "key": "b",
    "text": "Convergente vers \\(1\\)"
   },
   {
    "key": "c",
    "text": "Divergente"
   },
   {
    "key": "d",
    "text": "Convergente vers \\(-1\\)"
   }
  ],
  "ans": "c",
  "ansText": "Divergente",
  "id": "suites-04",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "La suite \\(u_{n} = n^{2}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "croissante et majorée"
   },
   {
    "key": "b",
    "text": "croissante et non majorée"
   },
   {
    "key": "c",
    "text": "décroissante et minorée"
   },
   {
    "key": "d",
    "text": "ni croissante ni décroissante"
   }
  ],
  "ans": "b",
  "ansText": "croissante et non majorée",
  "id": "suites-05",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "D'après le cours, une suite croissante et majorée est :",
  "opts": [
   {
    "key": "a",
    "text": "convergente, vers \\(\\sup{u_{n}}\\)"
   },
   {
    "key": "b",
    "text": "divergente vers \\(+ \\infty\\)"
   },
   {
    "key": "c",
    "text": "nécessairement constante"
   },
   {
    "key": "d",
    "text": "bornée mais pas nécessairement convergente"
   }
  ],
  "ans": "a",
  "ansText": "convergente, vers \\(\\sup{u_{n}}\\)",
  "id": "suites-06",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "D'après le cours, une suite décroissante et minorée est :",
  "opts": [
   {
    "key": "a",
    "text": "divergente vers \\(- \\infty\\)"
   },
   {
    "key": "b",
    "text": "convergente, vers \\(\\inf{u_{n}}\\)"
   },
   {
    "key": "c",
    "text": "convergente vers \\(0\\) uniquement"
   },
   {
    "key": "d",
    "text": "bornée mais pas nécessairement convergente"
   }
  ],
  "ans": "b",
  "ansText": "convergente, vers \\(\\inf{u_{n}}\\)",
  "id": "suites-07",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Que peut-on affirmer, d'après le cours, à propos d'une suite convergente ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est nécessairement monotone"
   },
   {
    "key": "b",
    "text": "Elle est nécessairement bornée"
   },
   {
    "key": "c",
    "text": "Elle est nécessairement positive"
   },
   {
    "key": "d",
    "text": "Elle diverge vers \\(+ \\infty\\)"
   }
  ],
  "ans": "b",
  "ansText": "Elle est nécessairement bornée",
  "id": "suites-08",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "La contraposée de « toute suite convergente est bornée » permet d'affirmer que :",
  "opts": [
   {
    "key": "a",
    "text": "toute suite bornée converge"
   },
   {
    "key": "b",
    "text": "toute suite non bornée diverge"
   },
   {
    "key": "c",
    "text": "toute suite divergente est non bornée"
   },
   {
    "key": "d",
    "text": "toute suite convergente est monotone"
   }
  ],
  "ans": "b",
  "ansText": "toute suite non bornée diverge",
  "id": "suites-09",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\(u_{n} = 5 + 3n\\) une suite arithmétique de raison \\(3\\) et de premier terme \\(u_{0} = 5\\). Calculer \\(u_{10}\\).",
  "ans": 35,
  "ansText": "\\(35\\)",
  "tol": 0.01,
  "id": "suites-10",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\((v_{n})\\) une suite géométrique de premier terme \\(v_{0} = 2\\) et de raison \\(q = 3\\). Calculer \\(v_{4}\\).",
  "ans": 162,
  "ansText": "\\(162\\)",
  "tol": 0.01,
  "id": "suites-11",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Soit \\((v_{n})\\) une suite géométrique de raison \\(q,\\) avec \\(v_{0} \\neq 0\\). Pour \\(quelle(s) valeur(s)\\) de \\(q\\) la suite converge-t-elle vers \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(|q| < 1\\)"
   },
   {
    "key": "b",
    "text": "\\(|q| > 1\\)"
   },
   {
    "key": "c",
    "text": "\\(q = 1\\)"
   },
   {
    "key": "d",
    "text": "pour toute valeur de \\(q\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(|q| < 1\\)",
  "id": "suites-12",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Soit \\((v_{n})\\) une suite géométrique de raison \\(q = 1\\). Que vaut \\(\\lim_{n \\to + \\infty } v_{n}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(0\\)"
   },
   {
    "key": "b",
    "text": "\\(v_{0}\\) (la suite est constante)"
   },
   {
    "key": "c",
    "text": "\\(+ \\infty\\)"
   },
   {
    "key": "d",
    "text": "la suite diverge sans limite infinie"
   }
  ],
  "ans": "b",
  "ansText": "\\(v_{0}\\) (la suite est constante)",
  "id": "suites-13",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "En utilisant le théorème des gendarmes \\((-1 \\le \\sin(n) \\le 1),\\) calculer \\(\\lim_{n \\to + \\infty } \\sin(n) / n\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "suites-14",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\lim_{n \\to + \\infty } (\\cos(n) + 3n) / n\\) (on pourra encadrer \\(\\cos(n)\\) puis diviser par \\(n)\\).",
  "ans": 3,
  "ansText": "\\(3\\)",
  "tol": 0.01,
  "id": "suites-15",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Pour appliquer le théorème des gendarmes à une suite \\((v_{n}),\\) il faut :",
  "opts": [
   {
    "key": "a",
    "text": "trouver deux suites \\((u_{n})\\) et \\((w_{n})\\) telles que \\(u_{n} \\le v_{n} \\le w_{n}\\) et de même limite"
   },
   {
    "key": "b",
    "text": "montrer que \\((v_{n})\\) est monotone"
   },
   {
    "key": "c",
    "text": "montrer que \\((v_{n})\\) est bornée"
   },
   {
    "key": "d",
    "text": "trouver une suite équivalente à \\((v_{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "trouver deux suites \\((u_{n})\\) et \\((w_{n})\\) telles que \\(u_{n} \\le v_{n} \\le w_{n}\\) et de même limite",
  "id": "suites-16",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "On dit que \\(u_{n} = o(v_{n}) (u_{n}\\) négligeable devant \\(v_{n})\\) si :",
  "opts": [
   {
    "key": "a",
    "text": "lim \\(u_{n}/v_{n} = 0\\)"
   },
   {
    "key": "b",
    "text": "lim \\(u_{n}/v_{n} = 1\\)"
   },
   {
    "key": "c",
    "text": "\\(u_{n}/v_{n}\\) est bornée"
   },
   {
    "key": "d",
    "text": "lim \\((u_{n} - v_{n}) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "lim \\(u_{n}/v_{n} = 0\\)",
  "id": "suites-17",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "On dit que \\(u_{n} = O(v_{n}) (u_{n}\\) dominée par \\(v_{n})\\) si :",
  "opts": [
   {
    "key": "a",
    "text": "lim \\(u_{n}/v_{n} = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(u_{n}/v_{n}\\) est bornée à partir d'un certain rang"
   },
   {
    "key": "c",
    "text": "lim \\(u_{n}/v_{n} = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(u_{n} \\le v_{n}\\) pour tout \\(n\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(u_{n}/v_{n}\\) est bornée à partir d'un certain rang",
  "id": "suites-18",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "On dit que \\(u_{n} \\sim v_{n}\\) (suites équivalentes) si :",
  "opts": [
   {
    "key": "a",
    "text": "lim \\(u_{n}/v_{n} = 0\\)"
   },
   {
    "key": "b",
    "text": "lim \\(u_{n}/v_{n} = 1\\)"
   },
   {
    "key": "c",
    "text": "\\(u_{n} = v_{n}\\) pour tout \\(n\\)"
   },
   {
    "key": "d",
    "text": "lim \\((u_{n} - v_{n}) = 0\\)"
   }
  ],
  "ans": "b",
  "ansText": "lim \\(u_{n}/v_{n} = 1\\)",
  "id": "suites-19",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Parmi les comparaisons de référence du cours ( \\(\\alpha\\) , \\(\\beta\\) , \\(\\gamma > 0),\\) laquelle est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(n)^{\\alpha } = o(n^{\\beta })\\)"
   },
   {
    "key": "b",
    "text": "\\(n^{\\beta } = o(\\ln(n)^{\\alpha })\\)"
   },
   {
    "key": "c",
    "text": "\\(n\\)! \\(= o(e^{\\gamma n})\\)"
   },
   {
    "key": "d",
    "text": "\\(e^{\\gamma n}\\) est négligeable devant \\(n^{\\beta }\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln(n)^{\\alpha } = o(n^{\\beta })\\)",
  "id": "suites-20",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Toujours parmi les comparaisons de référence du cours, laquelle est correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^{\\gamma n} = o(n!)\\)"
   },
   {
    "key": "b",
    "text": "\\(n\\)! \\(= o(e^{\\gamma n})\\)"
   },
   {
    "key": "c",
    "text": "\\(n^{\\beta } = o(e^{\\gamma n})\\) est une relation fausse"
   },
   {
    "key": "d",
    "text": "\\(e^{\\gamma n}\\) est dominée par \\(n\\)! seulement si \\(\\gamma < 1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(e^{\\gamma n} = o(n!)\\)",
  "id": "suites-21",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "On sait que si \\(u_{n} \\to 0,\\) alors \\(\\sin(u_{n}) \\sim u_{n}\\). En déduire \\(\\lim_{n \\to + \\infty } \\sin(u_{n}) / u_{n}\\) (pour une suite \\(u_{n} \\to 0, u_{n} \\neq 0)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "suites-22",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "D'après les équivalents usuels, à quoi est équivalent \\(\\cos(u_{n}) - 1\\) lorsque \\(u_{n} \\to 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_{n}\\)"
   },
   {
    "key": "b",
    "text": "\\(-u_{n}^{2}/2\\)"
   },
   {
    "key": "c",
    "text": "\\(u_{n}^{2}/2\\)"
   },
   {
    "key": "d",
    "text": "\\(-u_{n}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(-u_{n}^{2}/2\\)",
  "id": "suites-23",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "D'après les équivalents usuels, à quoi est équivalent \\(\\ln(1 + u_{n})\\) lorsque \\(u_{n} \\to 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_{n}\\)"
   },
   {
    "key": "b",
    "text": "\\(u_{n}^{2}/2\\)"
   },
   {
    "key": "c",
    "text": "\\(1 + u_{n}\\)"
   },
   {
    "key": "d",
    "text": "\\(e^(u_{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_{n}\\)",
  "id": "suites-24",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "D'après les équivalents usuels, à quoi est équivalent \\(e^(u_{n}) - 1\\) lorsque \\(u_{n} \\to 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_{n}\\)"
   },
   {
    "key": "b",
    "text": "\\(1 + u_{n}\\)"
   },
   {
    "key": "c",
    "text": "\\(u_{n}^{2}\\)"
   },
   {
    "key": "d",
    "text": "\\(e \\cdot u_{n}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_{n}\\)",
  "id": "suites-25",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "La relation d'équivalence \\(u_{n} \\sim v_{n}\\) est-elle compatible avec l'addition (si \\(a_{n} \\sim b_{n}\\) et \\(u_{n} \\sim v_{n},\\) a-t-on \\(a_{n} + u_{n} \\sim b_{n} + v_{n})\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toujours"
   },
   {
    "key": "b",
    "text": "Non, ce n'est pas vrai en général"
   },
   {
    "key": "c",
    "text": "Oui, mais seulement si les suites sont positives"
   },
   {
    "key": "d",
    "text": "Oui, mais seulement si \\(b_{n}\\) et \\(v_{n}\\) tendent vers \\(0\\)"
   }
  ],
  "ans": "b",
  "ansText": "Non, ce n'est pas vrai en général",
  "id": "suites-26",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Une suite \\((u_{n})\\) est dite minorée si :",
  "opts": [
   {
    "key": "a",
    "text": "il existe \\(M\\) tel que, pour tout \\(n, u_{n} \\le M\\)"
   },
   {
    "key": "b",
    "text": "il existe \\(m\\) tel que, pour tout \\(n, u_{n} \\ge m\\)"
   },
   {
    "key": "c",
    "text": "pour tout \\(n, u_{n} \\ge 0\\)"
   },
   {
    "key": "d",
    "text": "la suite est convergente"
   }
  ],
  "ans": "b",
  "ansText": "il existe \\(m\\) tel que, pour tout \\(n, u_{n} \\ge m\\)",
  "id": "suites-27",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Une suite \\((u_{n})\\) est bornée si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "elle est convergente"
   },
   {
    "key": "b",
    "text": "la suite \\((|u_{n}|)\\) est majorée"
   },
   {
    "key": "c",
    "text": "elle est monotone"
   },
   {
    "key": "d",
    "text": "elle tend vers \\(0\\)"
   }
  ],
  "ans": "b",
  "ansText": "la suite \\((|u_{n}|)\\) est majorée",
  "id": "suites-28",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit la suite récurrente définie par \\(u_{0} = 1\\) et \\(u_{n+1} = (u_{n} + 4) / 2\\). Si cette suite converge vers une limite \\(L,\\) celle-ci vérifie \\(L = (L + 4) / 2\\). Calculer \\(L\\).",
  "ans": 4,
  "ansText": "\\(4\\)",
  "tol": 0.01,
  "id": "suites-29",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit la suite récurrente définie par \\(u_{n+1} = 3 - u_{n} / 2\\). Si elle converge vers une limite \\(L,\\) celle-ci vérifie \\(L = 3 - L / 2\\). Calculer \\(L\\).",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "suites-30",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\(u_n = \\dfrac{5n^2+2}{n^2-3}\\). Calculer \\(\\lim_{n\\to+\\infty} u_n\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "suites-31",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\(u_n = \\dfrac{n!}{(n+1)!}\\). En remarquant que \\(u_n = \\dfrac{1}{n+1}\\), calculer \\(\\lim_{n\\to+\\infty} u_n\\).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "suites-32",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Soit \\((u_n)\\) une suite arithmético-géométrique vérifiant \\(u_{n+1} = au_n + b\\) avec \\(a \\ne 1\\), et \\(L\\) le point fixe de \\(x \\mapsto ax+b\\) (donc \\(L = aL+b\\)). Quelle est la méthode du cours pour trouver la limite ?",
  "opts": [
   {
    "key": "a",
    "text": "poser \\(v_n = u_n - L\\) : alors \\((v_n)\\) est géométrique de raison \\(a\\)"
   },
   {
    "key": "b",
    "text": "poser \\(v_n = u_n + L\\) : alors \\((v_n)\\) est arithmétique de raison \\(a\\)"
   },
   {
    "key": "c",
    "text": "la suite \\((u_n)\\) est toujours constante à partir d'un certain rang"
   },
   {
    "key": "d",
    "text": "il n'existe pas de méthode générale dans ce cas"
   }
  ],
  "ans": "a",
  "ansText": "poser \\(v_n = u_n - L\\) : alors \\((v_n)\\) est géométrique de raison \\(a\\)",
  "id": "suites-33",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\((u_n)\\) définie par \\(u_0 = 0\\) et \\(u_{n+1} = 0{,}5\\,u_n + 3\\). Le point fixe \\(L\\) vérifie \\(L = 0{,}5L + 3\\). Calculer \\(L\\).",
  "ans": 6,
  "ansText": "6",
  "tol": 0.01,
  "id": "suites-34",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "On considère la suite \\((u_n)\\) représentée ci-dessous. D'après le graphique, quelle semble être sa nature ?",
  "opts": [
   {
    "key": "a",
    "text": "croissante et convergente vers une limite finie"
   },
   {
    "key": "b",
    "text": "décroissante et divergente vers −∞"
   },
   {
    "key": "c",
    "text": "oscillante et divergente"
   },
   {
    "key": "d",
    "text": "constante"
   }
  ],
  "ans": "a",
  "ansText": "croissante et convergente vers une limite finie",
  "img": "../images/exercices/suites_convergente.png",
  "imgAlt": "Suite croissante convergeant vers 5",
  "id": "suites-35",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "D'après le graphique ci-dessus, à quelle valeur entière la suite \\((u_n)\\) semble-t-elle converger ?",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "img": "../images/exercices/suites_convergente.png",
  "imgAlt": "Suite croissante convergeant vers 5",
  "id": "suites-36",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "On considère la suite \\((v_n)\\) représentée ci-dessous. D'après le graphique, quelle est sa nature ?",
  "opts": [
   {
    "key": "a",
    "text": "convergente vers 0"
   },
   {
    "key": "b",
    "text": "convergente vers 2"
   },
   {
    "key": "c",
    "text": "oscillante et divergente (les valeurs alternent sans se stabiliser)"
   },
   {
    "key": "d",
    "text": "croissante"
   }
  ],
  "ans": "c",
  "ansText": "oscillante et divergente (les valeurs alternent sans se stabiliser)",
  "img": "../images/exercices/suites_oscillante.png",
  "imgAlt": "Suite oscillante divergente",
  "id": "suites-37",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Si \\(u_n \\sim a_n\\) et \\(v_n \\sim b_n\\), que peut-on dire du produit \\(u_n v_n\\) et de \\(a_n b_n\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_n v_n \\sim a_n b_n\\) (l'équivalence est compatible avec le produit)"
   },
   {
    "key": "b",
    "text": "\\(u_n v_n\\) et \\(a_n b_n\\) n'ont en général aucun lien"
   },
   {
    "key": "c",
    "text": "\\(u_n v_n \\sim a_n b_n\\) seulement si les suites sont positives"
   },
   {
    "key": "d",
    "text": "\\(u_n v_n \\sim a_n + b_n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_n v_n \\sim a_n b_n\\) (l'équivalence est compatible avec le produit)",
  "id": "suites-38",
  "cat": "suites"
 },
 {
  "type": "qcm",
  "q": "Si \\(u_n \\sim v_n\\) (avec \\(u_n, v_n > 0\\)) et \\(\\alpha \\in \\mathbb{R}\\), que peut-on dire de \\(u_n^{\\alpha}\\) et \\(v_n^{\\alpha}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(u_n^{\\alpha} \\sim v_n^{\\alpha}\\)"
   },
   {
    "key": "b",
    "text": "\\(u_n^{\\alpha}\\) et \\(v_n^{\\alpha}\\) ne sont jamais équivalentes"
   },
   {
    "key": "c",
    "text": "\\(u_n^{\\alpha} \\sim \\alpha v_n\\)"
   },
   {
    "key": "d",
    "text": "cela dépend uniquement du signe de \\(\\alpha\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_n^{\\alpha} \\sim v_n^{\\alpha}\\)",
  "id": "suites-39",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Soit \\(u_n = \\dfrac{2^n}{n!}\\). D'après les comparaisons de référence du cours (\\(n! \\) l'emporte sur \\(e^{\\gamma n}\\), donc a fortiori sur \\(2^n\\)), calculer \\(\\lim_{n\\to+\\infty} u_n\\).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "suites-40",
  "cat": "suites"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\ln(1)\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "fonctions-01",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\ln(e)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "fonctions-02",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x, y > 0, \\ln(xy) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(x) + \\ln(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ln(x) - \\ln(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ln(x) \\times \\ln(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ln(x) / \\ln(y)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln(x) + \\ln(y)\\)",
  "id": "fonctions-03",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x > 0, \\ln(1/x) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(-\\ln(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(1 / \\ln(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(-1 / \\ln(x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(-\\ln(x)\\)",
  "id": "fonctions-04",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Sachant que \\(\\ln(x^{n}) = n \\cdot \\ln(x),\\) calculer \\(\\ln(8) - 3 \\ln(2)\\) (on rappelle que \\(8 = 2^{3})\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "fonctions-05",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Quelle est la limite de \\(\\ln(x)\\) lorsque \\(x \\to 0^{+}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(- \\infty\\)"
   },
   {
    "key": "b",
    "text": "\\(0\\)"
   },
   {
    "key": "c",
    "text": "\\(+ \\infty\\)"
   },
   {
    "key": "d",
    "text": "\\(1\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(- \\infty\\)",
  "id": "fonctions-06",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Quelle est la limite de \\(\\ln(x)\\) lorsque \\(x \\to + \\infty\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(- \\infty\\)"
   },
   {
    "key": "b",
    "text": "\\(0\\)"
   },
   {
    "key": "c",
    "text": "\\(+ \\infty\\)"
   },
   {
    "key": "d",
    "text": "\\(1\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(+ \\infty\\)",
  "id": "fonctions-07",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Le logarithme de base \\(a (a > 0, a \\neq 1)\\) est défini, pour \\(x > 0,\\) par \\(\\log_a(x) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(x) / \\ln(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ln(a) / \\ln(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ln(x) \\times \\ln(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(a^(\\ln(x))\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln(x) / \\ln(a)\\)",
  "id": "fonctions-08",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\exp(0)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "fonctions-09",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x, y\\) réels, \\(\\exp(x + y) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\exp(x) + \\exp(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exp(x) \\times \\exp(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\exp(x) - \\exp(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\exp(x) / \\exp(y)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\exp(x) \\times \\exp(y)\\)",
  "id": "fonctions-10",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x\\) réel, \\(\\exp(-x) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(-\\exp(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(1 / \\exp(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\exp(1/x)\\)"
   },
   {
    "key": "d",
    "text": "\\(-1 / \\exp(x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(1 / \\exp(x)\\)",
  "id": "fonctions-11",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Sachant que \\(exp'(x) = \\exp(x)\\) pour tout \\(x,\\) calculer \\(exp'(0)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "fonctions-12",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction exponentielle est :",
  "opts": [
   {
    "key": "a",
    "text": "strictement croissante sur \\(R,\\) à valeurs dans \\(R\\)"
   },
   {
    "key": "b",
    "text": "strictement croissante sur \\(R,\\) à valeurs dans \\(]0, + \\infty\\) ["
   },
   {
    "key": "c",
    "text": "strictement décroissante sur \\(R\\)"
   },
   {
    "key": "d",
    "text": "ni croissante ni décroissante"
   }
  ],
  "ans": "b",
  "ansText": "strictement croissante sur \\(R,\\) à valeurs dans \\(]0, + \\infty\\) [",
  "id": "fonctions-13",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "En utilisant \\(x^{\\alpha }x^{\\beta } = x^{\\alpha +\\beta },\\) calculer \\(2^{3} \\times 2^{4} / 2^{5}\\).",
  "ans": 4,
  "ansText": "\\(4\\)",
  "tol": 0.01,
  "id": "fonctions-14",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x > 0\\) et \\(\\alpha \\in R,\\) la fonction puissance est définie par \\(x^{\\alpha } =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^( \\alpha \\ln(x))\\)"
   },
   {
    "key": "b",
    "text": "\\(\\alpha e^{x}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ln(x)^{\\alpha }\\)"
   },
   {
    "key": "d",
    "text": "\\(\\alpha ^(\\ln(x))\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(e^( \\alpha \\ln(x))\\)",
  "id": "fonctions-15",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(\\alpha > 0,\\) la fonction \\(x \\mapsto x^{\\alpha }\\) sur \\(]0, + \\infty\\) [ est :",
  "opts": [
   {
    "key": "a",
    "text": "strictement croissante"
   },
   {
    "key": "b",
    "text": "strictement décroissante"
   },
   {
    "key": "c",
    "text": "constante"
   },
   {
    "key": "d",
    "text": "ni croissante ni décroissante"
   }
  ],
  "ans": "a",
  "ansText": "strictement croissante",
  "id": "fonctions-16",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(\\alpha < 0,\\) la fonction \\(x \\mapsto x^{\\alpha }\\) sur \\(]0, + \\infty\\) [ est :",
  "opts": [
   {
    "key": "a",
    "text": "strictement croissante"
   },
   {
    "key": "b",
    "text": "strictement décroissante"
   },
   {
    "key": "c",
    "text": "constante"
   },
   {
    "key": "d",
    "text": "non définie"
   }
  ],
  "ans": "b",
  "ansText": "strictement décroissante",
  "id": "fonctions-17",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\sin( \\pi /6)\\).",
  "ans": 0.5,
  "ansText": "\\(1/2 (0,5)\\)",
  "tol": 0.01,
  "id": "fonctions-18",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\cos( \\pi /3)\\).",
  "ans": 0.5,
  "ansText": "\\(1/2 (0,5)\\)",
  "tol": 0.01,
  "id": "fonctions-19",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\sin( \\pi /2)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "fonctions-20",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\cos( \\pi\\) ).",
  "ans": -1,
  "ansText": "\\(-1\\)",
  "tol": 0.01,
  "id": "fonctions-21",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction cosinus est :",
  "opts": [
   {
    "key": "a",
    "text": "paire et \\(2 \\pi\\) -périodique"
   },
   {
    "key": "b",
    "text": "impaire et \\(2 \\pi\\) -périodique"
   },
   {
    "key": "c",
    "text": "paire et \\(\\pi\\) -périodique"
   },
   {
    "key": "d",
    "text": "ni paire ni impaire"
   }
  ],
  "ans": "a",
  "ansText": "paire et \\(2 \\pi\\) -périodique",
  "id": "fonctions-22",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction sinus est :",
  "opts": [
   {
    "key": "a",
    "text": "paire et \\(2 \\pi\\) -périodique"
   },
   {
    "key": "b",
    "text": "impaire et \\(2 \\pi\\) -périodique"
   },
   {
    "key": "c",
    "text": "impaire et \\(\\pi\\) -périodique"
   },
   {
    "key": "d",
    "text": "ni paire ni impaire"
   }
  ],
  "ans": "b",
  "ansText": "impaire et \\(2 \\pi\\) -périodique",
  "id": "fonctions-23",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour tout réel \\(x, cos^{2}(x) + sin^{2}(x) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(0\\)"
   },
   {
    "key": "b",
    "text": "\\(1\\)"
   },
   {
    "key": "c",
    "text": "\\(2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\cos(2x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(1\\)",
  "id": "fonctions-24",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La dérivée de la fonction sinus est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\cos(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(-\\cos(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\sin(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(1 / \\cos(x)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\cos(x)\\)",
  "id": "fonctions-25",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La dérivée de la fonction cosinus est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sin(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(-\\sin(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\cos(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(-1 / \\sin(x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(-\\sin(x)\\)",
  "id": "fonctions-26",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(\\tan(x) = \\sin(x)/\\cos(x)\\) n'est pas définie :",
  "opts": [
   {
    "key": "a",
    "text": "en \\(x = 0\\)"
   },
   {
    "key": "b",
    "text": "pour \\(x = \\pi /2 + k \\pi\\) , \\(k \\in Z\\)"
   },
   {
    "key": "c",
    "text": "pour \\(x = k \\pi\\) , \\(k \\in Z\\)"
   },
   {
    "key": "d",
    "text": "elle est définie sur \\(R\\) tout entier"
   }
  ],
  "ans": "b",
  "ansText": "pour \\(x = \\pi /2 + k \\pi\\) , \\(k \\in Z\\)",
  "id": "fonctions-27",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Sachant que \\(\\operatorname{ch}(x) = (e^{x} + e^{-x}) / 2,\\) calculer \\(\\operatorname{ch}(0)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "fonctions-28",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Sachant que \\(\\operatorname{sh}(x) = (e^{x} - e^{-x}) / 2,\\) calculer \\(\\operatorname{sh}(0)\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "fonctions-29",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour tout réel \\(x, ch^{2}(x) - sh^{2}(x) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(0\\)"
   },
   {
    "key": "b",
    "text": "\\(1\\)"
   },
   {
    "key": "c",
    "text": "\\(2\\)"
   },
   {
    "key": "d",
    "text": "\\(\\operatorname{ch}(2x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(1\\)",
  "id": "fonctions-30",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\tan\\left(\\dfrac{\\pi}{4}\\right)\\).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "fonctions-31",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction exponentielle \\(\\exp : \\mathbb{R} \\to \\,]0,+\\infty[\\) est une bijection. Quelle est sa bijection réciproque ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln\\)"
   },
   {
    "key": "b",
    "text": "\\(\\sqrt{\\cdot}\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\mapsto 1/x\\)"
   },
   {
    "key": "d",
    "text": "elle n'a pas de réciproque"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln\\)",
  "id": "fonctions-32",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Sachant que la dérivée de \\(x \\mapsto x^{\\alpha}\\) est \\(x \\mapsto \\alpha x^{\\alpha-1}\\), calculer la dérivée de \\(x \\mapsto x^3\\) en \\(x=2\\).",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "fonctions-33",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "On définit \\(\\mathrm{th}(x) = \\dfrac{\\mathrm{sh}(x)}{\\mathrm{ch}(x)}\\). Calculer \\(\\mathrm{th}(0)\\).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "fonctions-34",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Quelle fonction usuelle est représentée par la courbe ci-dessous (paire, 2\\(\\pi\\)-périodique, à valeurs dans \\([-1,1]\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\mapsto \\cos(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\mapsto \\sin(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\mapsto \\tan(x)\\)"
   },
   {
    "key": "d",
    "text": "\\(x \\mapsto x^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\mapsto \\cos(x)\\)",
  "img": "../images/exercices/fonctions_courbe_a.png",
  "imgAlt": "Courbe de la fonction cosinus",
  "id": "fonctions-35",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Quelle fonction usuelle est représentée par la courbe ci-dessous (croissante, définie sur \\(]0,+\\infty[\\), s'annulant en 1, tendant vers \\(-\\infty\\) en \\(0^+\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\mapsto \\ln(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\mapsto \\exp(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\mapsto \\sqrt{x}\\)"
   },
   {
    "key": "d",
    "text": "\\(x \\mapsto -x^2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\mapsto \\ln(x)\\)",
  "img": "../images/exercices/fonctions_courbe_b.png",
  "imgAlt": "Courbe de la fonction logarithme népérien",
  "id": "fonctions-36",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\ln(e^2)\\).",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "fonctions-37",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Pour \\(x, y > 0\\), \\(\\ln(x/y) = ?\\)",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(x) - \\ln(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ln(x) + \\ln(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\ln(x)/\\ln(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(-\\ln(x/y)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln(x) - \\ln(y)\\)",
  "id": "fonctions-38",
  "cat": "fonctions"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\exp(\\ln(5))\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "fonctions-39",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(x \\mapsto \\sqrt{x}\\) sur \\([0,+\\infty[\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "continue et croissante, mais non dérivable en 0"
   },
   {
    "key": "b",
    "text": "décroissante"
   },
   {
    "key": "c",
    "text": "non définie en 0"
   },
   {
    "key": "d",
    "text": "constante sur son domaine"
   }
  ],
  "ans": "a",
  "ansText": "continue et croissante, mais non dérivable en 0",
  "id": "fonctions-40",
  "cat": "fonctions"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est continue en un point \\(a\\) de son intervalle de définition \\(I\\) si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\lim_{x \\to a} f(x) = f(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est dérivable en \\(a\\)"
   },
   {
    "key": "c",
    "text": "\\(f(a)\\) existe"
   },
   {
    "key": "d",
    "text": "\\(f\\) est bornée au voisinage de \\(a\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\lim_{x \\to a} f(x) = f(a)\\)",
  "id": "continuite-01",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) définie par \\(f(x) = x^{2}\\) si \\(x \\le 0,\\) et \\(f(x) = x + 1\\) si \\(x > 0\\). Que peut-on dire de la continuité de \\(f\\) en \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est continue en \\(0\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) n'est pas continue en \\(0\\) (saut de discontinuité)"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'est pas définie en \\(0\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est dérivable en \\(0\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f\\) n'est pas continue en \\(0\\) (saut de discontinuité)",
  "id": "continuite-02",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Soit \\(f\\) définie par \\(f(x) = x^{2}\\) si \\(x \\le 0,\\) et \\(f(x) = x + 1\\) si \\(x > 0\\). Calculer la limite à gauche de \\(f\\) en \\(0\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "continuite-03",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Soit \\(f\\) définie par \\(f(x) = x^{2}\\) si \\(x \\le 0,\\) et \\(f(x) = x + 1\\) si \\(x > 0\\). Calculer la limite à droite de \\(f\\) en \\(0\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "continuite-04",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite continue sur un intervalle \\(I\\) si :",
  "opts": [
   {
    "key": "a",
    "text": "elle est continue en au moins un point de \\(I\\)"
   },
   {
    "key": "b",
    "text": "elle est continue en tout point de \\(I\\)"
   },
   {
    "key": "c",
    "text": "elle est bornée sur \\(I\\)"
   },
   {
    "key": "d",
    "text": "elle est dérivable sur \\(I\\)"
   }
  ],
  "ans": "b",
  "ansText": "elle est continue en tout point de \\(I\\)",
  "id": "continuite-05",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème des valeurs intermédiaires \\((TVI),\\) si \\(f\\) est continue sur \\([a, b]\\) et \\(f(a)f(b) \\le 0,\\) alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est croissante sur \\([a, b]\\)"
   },
   {
    "key": "b",
    "text": "il existe \\(c \\in [a, b]\\) tel que \\(f(c) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(f(a) = f(b)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'a pas de zéro sur \\([a, b]\\)"
   }
  ],
  "ans": "b",
  "ansText": "il existe \\(c \\in [a, b]\\) tel que \\(f(c) = 0\\)",
  "id": "continuite-06",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = e^{x} - 6x\\) sur \\([0, \\ln(6)]\\). On \\(a f(0) = 1 > 0\\) et \\(f(\\ln(6)) = 6(1 - \\ln(6)) < 0\\) (car \\(\\ln(6) > 1)\\). Que peut-on en conclure grâce au TVI ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) ne s'annule pas sur \\([0, \\ln(6)]\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) s'annule au moins une fois sur \\([0, \\ln(6)]\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est croissante sur cet intervalle"
   },
   {
    "key": "d",
    "text": "\\(f\\) est constante"
   }
  ],
  "ans": "b",
  "ansText": "\\(f\\) s'annule au moins une fois sur \\([0, \\ln(6)]\\)",
  "id": "continuite-07",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Le théorème des valeurs intermédiaires permet notamment de montrer que :",
  "opts": [
   {
    "key": "a",
    "text": "tout polynôme de degré pair s'annule au moins une fois"
   },
   {
    "key": "b",
    "text": "tout polynôme de degré impair s'annule au moins une fois"
   },
   {
    "key": "c",
    "text": "tout polynôme est continu"
   },
   {
    "key": "d",
    "text": "tout polynôme est borné"
   }
  ],
  "ans": "b",
  "ansText": "tout polynôme de degré impair s'annule au moins une fois",
  "id": "continuite-08",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Le théorème de Weierstrass affirme que toute fonction continue sur un intervalle fermé borné \\([a, b]\\) :",
  "opts": [
   {
    "key": "a",
    "text": "est dérivable sur \\([a, b]\\)"
   },
   {
    "key": "b",
    "text": "est bornée et atteint ses bornes"
   },
   {
    "key": "c",
    "text": "est strictement monotone"
   },
   {
    "key": "d",
    "text": "est constante"
   }
  ],
  "ans": "b",
  "ansText": "est bornée et atteint ses bornes",
  "id": "continuite-09",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "D'après le cours, l'image d'un intervalle fermé borné par une fonction continue est :",
  "opts": [
   {
    "key": "a",
    "text": "un intervalle ouvert"
   },
   {
    "key": "b",
    "text": "un intervalle fermé et borné"
   },
   {
    "key": "c",
    "text": "un ensemble fini"
   },
   {
    "key": "d",
    "text": "nécessairement \\(R\\) tout entier"
   }
  ],
  "ans": "b",
  "ansText": "un intervalle fermé et borné",
  "id": "continuite-10",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite uniformément continue sur \\(I\\) si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall \\varepsilon > 0, \\exists \\eta > 0, \\forall (x, y) \\in I^{2}, |x - y| \\le \\eta \\Rightarrow |f(x) - f(y)| \\le \\varepsilon\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall x \\in I, \\exists \\eta > 0\\) (pouvant dépendre de \\(x), |f(x) - f(y)| \\le \\varepsilon\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est continue en un seul point de \\(I\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est bornée sur \\(I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall \\varepsilon > 0, \\exists \\eta > 0, \\forall (x, y) \\in I^{2}, |x - y| \\le \\eta \\Rightarrow |f(x) - f(y)| \\le \\varepsilon\\)",
  "id": "continuite-11",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de Heine :",
  "opts": [
   {
    "key": "a",
    "text": "toute fonction continue sur un intervalle ouvert est uniformément continue"
   },
   {
    "key": "b",
    "text": "toute fonction continue sur un segment est uniformément continue"
   },
   {
    "key": "c",
    "text": "toute fonction uniformément continue est dérivable"
   },
   {
    "key": "d",
    "text": "toute fonction bornée est uniformément continue"
   }
  ],
  "ans": "b",
  "ansText": "toute fonction continue sur un segment est uniformément continue",
  "id": "continuite-12",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite k-lipschitzienne sur \\(I\\) s'il existe \\(k > 0\\) tel que :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall (x, y) \\in I^{2}, |f(x) - f(y)| \\le k|x - y|\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall (x, y) \\in I^{2}, f(x) - f(y) = k(x - y)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall x \\in I, |f(x)| \\le k\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est dérivable \\(k\\) fois"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall (x, y) \\in I^{2}, |f(x) - f(y)| \\le k|x - y|\\)",
  "id": "continuite-13",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Toute fonction lipschitzienne sur \\(I\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "dérivable sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "uniformément continue sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "bornée sur \\(I,\\) uniquement si \\(I\\) est fermé"
   },
   {
    "key": "d",
    "text": "strictement monotone"
   }
  ],
  "ans": "b",
  "ansText": "uniformément continue sur \\(I\\)",
  "id": "continuite-14",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) : \\(R^{+} \\to R\\) définie par \\(f(x) = 1 / (1 + x)\\). D'après le cours, cette fonction est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1-lipschitzienne\\)"
   },
   {
    "key": "b",
    "text": "\\(2-lipschitzienne\\)"
   },
   {
    "key": "c",
    "text": "non lipschitzienne"
   },
   {
    "key": "d",
    "text": "lipschitzienne uniquement sur un segment"
   }
  ],
  "ans": "a",
  "ansText": "\\(1-lipschitzienne\\)",
  "id": "continuite-15",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Un intervalle de la forme \\(]a, b[\\) est dit :",
  "opts": [
   {
    "key": "a",
    "text": "fermé"
   },
   {
    "key": "b",
    "text": "ouvert"
   },
   {
    "key": "c",
    "text": "ni ouvert ni fermé"
   },
   {
    "key": "d",
    "text": "borné uniquement"
   }
  ],
  "ans": "b",
  "ansText": "ouvert",
  "id": "continuite-16",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Un intervalle de la forme \\([a, b[\\) est dit :",
  "opts": [
   {
    "key": "a",
    "text": "fermé"
   },
   {
    "key": "b",
    "text": "ouvert"
   },
   {
    "key": "c",
    "text": "ni ouvert ni fermé"
   },
   {
    "key": "d",
    "text": "toujours vide"
   }
  ],
  "ans": "c",
  "ansText": "ni ouvert ni fermé",
  "id": "continuite-17",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) définie sur \\(I\\) est dite paire si :",
  "opts": [
   {
    "key": "a",
    "text": "pour tout \\(x \\in I, f(x) = f(-x)\\)"
   },
   {
    "key": "b",
    "text": "pour tout \\(x \\in I, f(-x) = -f(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(0) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est croissante"
   }
  ],
  "ans": "a",
  "ansText": "pour tout \\(x \\in I, f(x) = f(-x)\\)",
  "id": "continuite-18",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) définie sur \\(I\\) est dite impaire si :",
  "opts": [
   {
    "key": "a",
    "text": "pour tout \\(x \\in I, f(x) = f(-x)\\)"
   },
   {
    "key": "b",
    "text": "pour tout \\(x \\in I, f(-x) = -f(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(0) = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est décroissante"
   }
  ],
  "ans": "b",
  "ansText": "pour tout \\(x \\in I, f(-x) = -f(x)\\)",
  "id": "continuite-19",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite T-périodique si :",
  "opts": [
   {
    "key": "a",
    "text": "pour tout \\(x, f(x + T) = f(x)\\)"
   },
   {
    "key": "b",
    "text": "pour tout \\(x, f(x + T) = -f(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(T) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est bornée par \\(T\\)"
   }
  ],
  "ans": "a",
  "ansText": "pour tout \\(x, f(x + T) = f(x)\\)",
  "id": "continuite-20",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(g(x) = \\cos(3x)\\) est T-périodique, avec \\(T =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(2 \\pi /3\\)"
   },
   {
    "key": "b",
    "text": "\\(3 \\pi\\)"
   },
   {
    "key": "c",
    "text": "\\(\\pi /3\\)"
   },
   {
    "key": "d",
    "text": "\\(6 \\pi\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(2 \\pi /3\\)",
  "id": "continuite-21",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^{2} \\sin(1/x)\\) pour \\(x \\neq 0\\) et \\(f(0) = 0\\). Pourquoi \\(f\\) est-elle continue en \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "car \\(|f(x)| \\le x^{2}\\) et \\(x^{2} \\to 0\\) quand \\(x \\to 0\\) (théorème des gendarmes)"
   },
   {
    "key": "b",
    "text": "car \\(\\sin(1/x)\\) est continue en \\(0\\)"
   },
   {
    "key": "c",
    "text": "car \\(f\\) est un polynôme"
   },
   {
    "key": "d",
    "text": "car \\(f\\) est dérivable en \\(0\\)"
   }
  ],
  "ans": "a",
  "ansText": "car \\(|f(x)| \\le x^{2}\\) et \\(x^{2} \\to 0\\) quand \\(x \\to 0\\) (théorème des gendarmes)",
  "id": "continuite-22",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "La fonction sinus cardinal \\(sinc(x) = \\sin(x)/x\\) n'est pas définie en \\(0\\). Peut-on la prolonger par continuité en \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Non, la limite en \\(0\\) n'existe pas"
   },
   {
    "key": "b",
    "text": "Oui, en posant \\(sinc(0) = 1\\) (limite de \\(\\sin(x)/x\\) en \\(0)\\)"
   },
   {
    "key": "c",
    "text": "Oui, en posant \\(sinc(0) = 0\\)"
   },
   {
    "key": "d",
    "text": "Non, ce n'est jamais possible"
   }
  ],
  "ans": "b",
  "ansText": "Oui, en posant \\(sinc(0) = 1\\) (limite de \\(\\sin(x)/x\\) en \\(0)\\)",
  "id": "continuite-23",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(a\\) un réel fixé. La fonction \\(f(x) = x / (x - a)\\) est-elle continue en \\(a\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, car c'est une fonction rationnelle"
   },
   {
    "key": "b",
    "text": "Non, car \\(f\\) n'est pas définie en \\(a\\)"
   },
   {
    "key": "c",
    "text": "Oui, en la prolongeant par continuité"
   },
   {
    "key": "d",
    "text": "Cela dépend du signe de \\(a\\)"
   }
  ],
  "ans": "b",
  "ansText": "Non, car \\(f\\) n'est pas définie en \\(a\\)",
  "id": "continuite-24",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Soient \\(f\\) et \\(g\\) deux fonctions continues sur un intervalle \\(I\\) telles que \\(f - g\\) change de signe entre deux points \\(a\\) et \\(b\\) de \\(I\\). D'après le TVI, que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "il existe \\(x_{0} \\in [a, b]\\) tel que \\(f(x_{0}) = g(x_{0})\\)"
   },
   {
    "key": "b",
    "text": "\\(f = g\\) sur tout \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) et \\(g\\) sont monotones"
   },
   {
    "key": "d",
    "text": "rien, le TVI ne s'applique pas ici"
   }
  ],
  "ans": "a",
  "ansText": "il existe \\(x_{0} \\in [a, b]\\) tel que \\(f(x_{0}) = g(x_{0})\\)",
  "id": "continuite-25",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "La méthode de dichotomie, basée sur le TVI, permet :",
  "opts": [
   {
    "key": "a",
    "text": "de calculer exactement un zéro d'une fonction continue"
   },
   {
    "key": "b",
    "text": "d'approcher un zéro d'une fonction continue en divisant l'intervalle de recherche par \\(2\\) à chaque étape"
   },
   {
    "key": "c",
    "text": "de calculer la dérivée d'une fonction"
   },
   {
    "key": "d",
    "text": "de montrer qu'une fonction est bornée"
   }
  ],
  "ans": "b",
  "ansText": "d'approcher un zéro d'une fonction continue en divisant l'intervalle de recherche par \\(2\\) à chaque étape",
  "id": "continuite-26",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Avec la méthode de dichotomie, à chaque itération, la longueur de l'intervalle de recherche est divisée par combien ?",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "continuite-27",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(f(x) = x^{2}\\) restreinte à \\([0, a] (a > 0)\\) est-elle uniformément continue ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, comme toute fonction continue sur un segment (théorème de Heine)"
   },
   {
    "key": "b",
    "text": "Non, jamais"
   },
   {
    "key": "c",
    "text": "Oui, mais seulement si \\(a < 1\\)"
   },
   {
    "key": "d",
    "text": "Cela ne peut pas être déterminé"
   }
  ],
  "ans": "a",
  "ansText": "Oui, comme toute fonction continue sur un segment (théorème de Heine)",
  "id": "continuite-28",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(f(x) = x^{2}\\) sur \\(R\\) tout entier est-elle uniformément continue ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, c'est un polynôme"
   },
   {
    "key": "b",
    "text": "Non : l'écart \\(|f(x) - f(y)|\\) peut être grand même pour \\(x, y\\) proches, loin de l'origine"
   },
   {
    "key": "c",
    "text": "Oui, car elle est continue partout"
   },
   {
    "key": "d",
    "text": "Cela dépend de l'intervalle choisi"
   }
  ],
  "ans": "b",
  "ansText": "Non : l'écart \\(|f(x) - f(y)|\\) peut être grand même pour \\(x, y\\) proches, loin de l'origine",
  "id": "continuite-29",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Quel lien existe-t-il entre continuité uniforme et continuité simple ?",
  "opts": [
   {
    "key": "a",
    "text": "ce sont des notions équivalentes"
   },
   {
    "key": "b",
    "text": "la continuité uniforme implique la continuité simple, mais pas l'inverse en général"
   },
   {
    "key": "c",
    "text": "la continuité simple implique la continuité uniforme, mais pas l'inverse"
   },
   {
    "key": "d",
    "text": "elles n'ont aucun lien"
   }
  ],
  "ans": "b",
  "ansText": "la continuité uniforme implique la continuité simple, mais pas l'inverse en général",
  "id": "continuite-30",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "On considère la fonction \\(f\\) représentée ci-dessous, avec \\(f(x) = x^2\\) si \\(x \\le 0\\) et \\(f(x) = x+1\\) si \\(x > 0\\). D'après le graphique, \\(f\\) est-elle continue en \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "non, il y a un saut de discontinuité en 0"
   },
   {
    "key": "b",
    "text": "oui, elle est continue en 0"
   },
   {
    "key": "c",
    "text": "elle n'est pas définie en 0"
   },
   {
    "key": "d",
    "text": "elle est dérivable en 0"
   }
  ],
  "ans": "a",
  "ansText": "non, il y a un saut de discontinuité en 0",
  "img": "../images/exercices/continuite_saut.png",
  "imgAlt": "Saut de discontinuité en 0",
  "id": "continuite-31",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "D'après le même graphique, quelle est la limite à droite de \\(f\\) en \\(0\\), c'est-à-dire \\(\\lim_{x\\to 0^+} f(x)\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "img": "../images/exercices/continuite_saut.png",
  "imgAlt": "Saut de discontinuité en 0",
  "id": "continuite-32",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "On considère la fonction \\(f(x) = -(x-1)^2+4\\), continue sur le segment \\([-1,3]\\), représentée ci-dessous. En quelle abscisse \\(f\\) atteint-elle son maximum sur cet intervalle ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "img": "../images/exercices/continuite_weierstrass.png",
  "imgAlt": "Fonction continue sur un segment fermé borné",
  "id": "continuite-33",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "D'après le théorème de Weierstrass, que peut-on affirmer sur cette fonction \\(f\\), continue sur le segment fermé borné \\([-1,3]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "elle est bornée sur \\([-1,3]\\) et atteint ses bornes (un maximum et un minimum)"
   },
   {
    "key": "b",
    "text": "elle est strictement monotone sur \\([-1,3]\\)"
   },
   {
    "key": "c",
    "text": "elle est constante sur \\([-1,3]\\)"
   },
   {
    "key": "d",
    "text": "on ne peut rien affirmer sans calculer sa dérivée"
   }
  ],
  "ans": "a",
  "ansText": "elle est bornée sur \\([-1,3]\\) et atteint ses bornes (un maximum et un minimum)",
  "img": "../images/exercices/continuite_weierstrass.png",
  "imgAlt": "Fonction continue sur un segment fermé borné",
  "id": "continuite-34",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Théorème du point fixe (conséquence du TVI) : si \\(f\\) est continue sur \\([a,b]\\) et \\(f([a,b]) \\subset [a,b]\\), alors :",
  "opts": [
   {
    "key": "a",
    "text": "il existe \\(c \\in [a,b]\\) tel que \\(f(c) = c\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est nécessairement croissante"
   },
   {
    "key": "c",
    "text": "\\(f\\) est nécessairement bijective"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'admet aucun point fixe"
   }
  ],
  "ans": "a",
  "ansText": "il existe \\(c \\in [a,b]\\) tel que \\(f(c) = c\\)",
  "id": "continuite-35",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Une dichotomie divise la longueur de l'intervalle de recherche par 2 à chaque itération. En partant d'un intervalle de longueur \\(1\\), quelle est la longueur de l'intervalle après \\(10\\) itérations (donner une valeur décimale) ?",
  "ans": 0.0009765625,
  "ansText": "\\(1/1024 \\approx 0{,}000977\\)",
  "tol": 0.0002,
  "id": "continuite-36",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est continue sur \\(I\\) et \\(g\\) est continue sur \\(f(I)\\), que peut-on dire de \\(g \\circ f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g \\circ f\\) est continue sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(g \\circ f\\) n'est continue qu'aux points où \\(f\\) est dérivable"
   },
   {
    "key": "c",
    "text": "\\(g \\circ f\\) est continue seulement si \\(f\\) est bijective"
   },
   {
    "key": "d",
    "text": "on ne peut rien affirmer en général"
   }
  ],
  "ans": "a",
  "ansText": "\\(g \\circ f\\) est continue sur \\(I\\)",
  "id": "continuite-37",
  "cat": "continuite"
 },
 {
  "type": "qcm",
  "q": "Caractérisation séquentielle de la continuité : \\(f\\) est continue en \\(a\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "pour toute suite \\((x_n)\\) telle que \\(x_n \\to a\\), on a \\(f(x_n) \\to f(a)\\)"
   },
   {
    "key": "b",
    "text": "il existe une suite \\((x_n)\\) telle que \\(x_n \\to a\\) et \\(f(x_n) \\to f(a)\\)"
   },
   {
    "key": "c",
    "text": "pour toute suite \\((x_n)\\), \\(f(x_n)\\) converge"
   },
   {
    "key": "d",
    "text": "\\(f\\) est bornée au voisinage de \\(a\\)"
   }
  ],
  "ans": "a",
  "ansText": "pour toute suite \\((x_n)\\) telle que \\(x_n \\to a\\), on a \\(f(x_n) \\to f(a)\\)",
  "id": "continuite-38",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^2 - 2\\) sur \\([0,2]\\). On a \\(f(0) = -2 < 0\\) et \\(f(2) = 2 > 0\\) : d'après le TVI, il existe \\(c \\in [0,2]\\) tel que \\(f(c) = 0\\). Calculer cette valeur \\(c\\) (à \\(10^{-2}\\) près).",
  "ans": 1.41421,
  "ansText": "\\(\\sqrt{2} \\approx 1{,}414\\)",
  "tol": 0.01,
  "id": "continuite-39",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = 3x + 1\\). Pour tout \\(x, y\\), \\(|f(x)-f(y)| = 3|x-y|\\). Quelle est la meilleure (plus petite) constante \\(k\\) telle que \\(f\\) soit \\(k\\)-lipschitzienne ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "continuite-40",
  "cat": "continuite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^{3} - 2x^{2} + 5\\). Calculer \\(f'(1)\\).",
  "ans": -1,
  "ansText": "\\(-1\\)",
  "tol": 0.01,
  "id": "derivation-01",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = (2x^{2} + 1)e^{x}\\). Calculer \\(f'(0)\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "derivation-02",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = (2x^{2} + 1)e^{x}\\). Quelle est sa dérivée \\(f'(x)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^{x}(2x^{2} + 4x + 1)\\)"
   },
   {
    "key": "b",
    "text": "\\(e^{x}(2x^{2} + 1)\\)"
   },
   {
    "key": "c",
    "text": "\\(4x \\cdot e^{x}\\)"
   },
   {
    "key": "d",
    "text": "\\(e^{x}(4x^{2} + 1)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(e^{x}(2x^{2} + 4x + 1)\\)",
  "id": "derivation-03",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\ln(3x^{2} + 2)\\). Calculer \\(f'(0)\\) (on rappelle \\(f'(x) = 6x / (3x^{2} + 2))\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "derivation-04",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\ln(3x^{2} + 2)\\). Quelle est sa dérivée \\(f'(x)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(6x / (3x^{2} + 2)\\)"
   },
   {
    "key": "b",
    "text": "\\(1 / (3x^{2} + 2)\\)"
   },
   {
    "key": "c",
    "text": "\\(6x\\)"
   },
   {
    "key": "d",
    "text": "\\((3x^{2} + 2) / 6x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(6x / (3x^{2} + 2)\\)",
  "id": "derivation-05",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "La dérivée d'un produit \\(f \\times g,\\) toutes deux dérivables en \\(a,\\) est donnée par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(a)g'(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(a)g(a) + f(a)g'(a)\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(a)g(a) - f(a)g'(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(a)/g(a) + f(a)/g'(a)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f'(a)g(a) + f(a)g'(a)\\)",
  "id": "derivation-06",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "La dérivée du quotient f/g en \\(a\\) (avec \\(g(a) \\neq 0)\\) est donnée par :",
  "opts": [
   {
    "key": "a",
    "text": "\\([f'(a)g(a) - g'(a)f(a)] / g(a)^{2}\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(a) / g'(a)\\)"
   },
   {
    "key": "c",
    "text": "\\([f'(a)g(a) + g'(a)f(a)] / g(a)^{2}\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(a)g(a) / g(a)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\([f'(a)g(a) - g'(a)f(a)] / g(a)^{2}\\)",
  "id": "derivation-07",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est dérivable en \\(a\\) et \\(g\\) dérivable en \\(f(a),\\) alors \\((g \\circ f)'(a) =\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(g'(a) \\times f'(f(a))\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(a) \\times g'(f(a))\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(a) + g'(f(a))\\)"
   },
   {
    "key": "d",
    "text": "\\(g'(f(a)) / f'(a)\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f'(a) \\times g'(f(a))\\)",
  "id": "derivation-08",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Quel est le lien correct énoncé par le cours entre dérivabilité et continuité en un point \\(a\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) dérivable en \\(a \\Rightarrow f\\) continue en \\(a\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) continue en \\(a \\Rightarrow f\\) dérivable en \\(a\\)"
   },
   {
    "key": "c",
    "text": "ce sont des notions équivalentes"
   },
   {
    "key": "d",
    "text": "aucun lien n'existe entre les deux"
   }
  ],
  "ans": "a",
  "ansText": "\\(f\\) dérivable en \\(a \\Rightarrow f\\) continue en \\(a\\)",
  "id": "derivation-09",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "La réciproque de « dérivable en \\(a \\Rightarrow\\) continue en \\(a\\) » est-elle vraie en général ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toujours"
   },
   {
    "key": "b",
    "text": "Non, il existe des fonctions continues en \\(a\\) mais non dérivables en \\(a\\)"
   },
   {
    "key": "c",
    "text": "Oui, uniquement pour les polynômes"
   },
   {
    "key": "d",
    "text": "Cela dépend du domaine de définition"
   }
  ],
  "ans": "b",
  "ansText": "Non, il existe des fonctions continues en \\(a\\) mais non dérivables en \\(a\\)",
  "id": "derivation-10",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "L'équation de la tangente à la courbe de \\(f\\) en \\(a\\) est \\(y = f(a) + f'(a)(x - a)\\). Soit \\(f(x) = x^{2}\\) et \\(a = 2\\). Calculer \\(f'(2)\\).",
  "ans": 4,
  "ansText": "\\(4\\)",
  "tol": 0.01,
  "id": "derivation-11",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Avec \\(f(x) = x^{2}\\) et \\(a = 2 (f'(2) = 4, f(2) = 4),\\) calculer l'ordonnée à l'origine de la tangente, c'est-à-dire \\(y(0) = f(2) + f'(2)(0 - 2)\\).",
  "ans": -4,
  "ansText": "\\(-4\\)",
  "tol": 0.01,
  "id": "derivation-12",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) dérivable en \\(a\\) et admettant un extremum local en \\(a\\). D'après le cours :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(a) = 0\\) nécessairement"
   },
   {
    "key": "b",
    "text": "\\(f'(a)\\) peut être non nul"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'est pas continue en \\(a\\)"
   },
   {
    "key": "d",
    "text": "\\(f''(a) = 0\\) nécessairement"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(a) = 0\\) nécessairement",
  "id": "derivation-13",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "La réciproque est-elle vraie (si \\(f'(a) = 0,\\) alors \\(f\\) admet un extremum en \\(a)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toujours"
   },
   {
    "key": "b",
    "text": "Non : \\(f(x) = x^{3}\\) vérifie \\(f'(0) = 0\\) sans admettre d'extremum en \\(0\\)"
   },
   {
    "key": "c",
    "text": "Oui, seulement pour les polynômes"
   },
   {
    "key": "d",
    "text": "Non, ce cas ne peut jamais se produire, même si \\(f'(a) = 0\\)"
   }
  ],
  "ans": "b",
  "ansText": "Non : \\(f(x) = x^{3}\\) vérifie \\(f'(0) = 0\\) sans admettre d'extremum en \\(0\\)",
  "id": "derivation-14",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^{3}\\). Calculer \\(f'(0)\\).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "derivation-15",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Le théorème de Rolle affirme que si \\(f\\) est continue sur \\([a, b],\\) dérivable sur \\(]a, b[\\) et \\(f(a) = f(b),\\) alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est constante sur \\([a, b]\\)"
   },
   {
    "key": "b",
    "text": "il existe \\(c \\in ]a, b[\\) tel que \\(f'(c) = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(a) = f'(b)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est croissante sur \\([a, b]\\)"
   }
  ],
  "ans": "b",
  "ansText": "il existe \\(c \\in ]a, b[\\) tel que \\(f'(c) = 0\\)",
  "id": "derivation-16",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "L'égalité des accroissements finis affirme que, sous les hypothèses du théorème, il existe \\(c \\in ]a, b[\\) tel que :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(b) - f(a) = f'(c)(b - a)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(b) - f(a) = f'(c)\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(c) = 0\\)"
   },
   {
    "key": "d",
    "text": "\\(f(c) = (f(a) + f(b)) / 2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(b) - f(a) = f'(c)(b - a)\\)",
  "id": "derivation-17",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "D'après l'inégalité des accroissements finis, si \\(|f'(x)| \\le M\\) sur \\(]a, b[,\\) alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(|f(b) - f(a)| \\le M(b - a)\\)"
   },
   {
    "key": "b",
    "text": "\\(|f(b) - f(a)| \\ge M(b - a)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(b) = f(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est constante"
   }
  ],
  "ans": "a",
  "ansText": "\\(|f(b) - f(a)| \\le M(b - a)\\)",
  "id": "derivation-18",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "D'après le corollaire du théorème des accroissements finis, si \\(f\\) est dérivable sur \\(I\\) et \\(|f'(x)| \\le k\\) pour tout \\(x \\in I,\\) alors \\(f\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "constante sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "k-lipschitzienne sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "bornée uniquement"
   },
   {
    "key": "d",
    "text": "discontinue sur \\(I\\)"
   }
  ],
  "ans": "b",
  "ansText": "k-lipschitzienne sur \\(I\\)",
  "id": "derivation-19",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "D'après le lien entre dérivée et monotonie, \\(f\\) est croissante sur \\(I\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) \\ge 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) > 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) \\le 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est continue sur \\(I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(x) \\ge 0\\) pour tout \\(x \\in I\\)",
  "id": "derivation-20",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "\\(f\\) est constante sur \\(I\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "b",
    "text": "\\(f(a) = f(b)\\) pour deux points \\(a, b \\in I\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est bornée sur \\(I\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est continue sur \\(I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(x) = 0\\) pour tout \\(x \\in I\\)",
  "id": "derivation-21",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) dérivable sur \\(I,\\) dont la dérivée \\(f'\\) est elle-même continue sur \\(I,\\) est dite :",
  "opts": [
   {
    "key": "a",
    "text": "de classe \\(C^{0}\\)"
   },
   {
    "key": "b",
    "text": "de classe \\(C^{1}\\)"
   },
   {
    "key": "c",
    "text": "de classe \\(C \\infty\\)"
   },
   {
    "key": "d",
    "text": "lipschitzienne"
   }
  ],
  "ans": "b",
  "ansText": "de classe \\(C^{1}\\)",
  "id": "derivation-22",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Si \\(f \\in C^{1}(I, R)\\) et \\(g \\in C^{1}(J, R)\\) avec \\(f(I) \\subset J,\\) alors \\(f \\circ g\\) (ou \\(g \\circ f\\) selon le cas) est :",
  "opts": [
   {
    "key": "a",
    "text": "de classe \\(C^{0}\\) seulement"
   },
   {
    "key": "b",
    "text": "de classe \\(C^{1}\\)"
   },
   {
    "key": "c",
    "text": "non dérivable en général"
   },
   {
    "key": "d",
    "text": "toujours constante"
   }
  ],
  "ans": "b",
  "ansText": "de classe \\(C^{1}\\)",
  "id": "derivation-23",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une bijection de classe \\(C^{1}\\) de \\(I\\) dans \\(J\\) telle que \\(f'\\) ne s'annule pas sur \\(I\\). Alors \\(f^{-1}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "discontinue sur \\(J\\)"
   },
   {
    "key": "b",
    "text": "de classe \\(C^{1}\\) sur \\(J\\)"
   },
   {
    "key": "c",
    "text": "non dérivable sur \\(J\\)"
   },
   {
    "key": "d",
    "text": "seulement de classe \\(C^{0}\\) sur \\(J\\)"
   }
  ],
  "ans": "b",
  "ansText": "de classe \\(C^{1}\\) sur \\(J\\)",
  "id": "derivation-24",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^{4}\\). Calculer \\(f''(1)\\) (dérivée seconde en \\(x = 1)\\).",
  "ans": 12,
  "ansText": "\\(12\\)",
  "tol": 0.01,
  "id": "derivation-25",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est deux fois dérivable, on définit \\(f''\\) par :",
  "opts": [
   {
    "key": "a",
    "text": "\\((f')'\\)"
   },
   {
    "key": "b",
    "text": "\\(f \\times f'\\)"
   },
   {
    "key": "c",
    "text": "\\(1 / f'\\)"
   },
   {
    "key": "d",
    "text": "\\(f' / f\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((f')'\\)",
  "id": "derivation-26",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une bijection strictement monotone et continue de \\(I\\) dans \\(J,\\) dérivable en \\(a\\) avec \\(f'(a) \\neq 0,\\) et \\(b = f(a)\\). D'après la proposition du cours, \\((f^{-1})'(b)\\) est donnée par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 / (f' \\circ f^{-1})(b)\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(f^{-1}(b))\\)"
   },
   {
    "key": "c",
    "text": "\\((f^{-1})'(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(a) \\times f^{-1}(b)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(1 / (f' \\circ f^{-1})(b)\\)",
  "id": "derivation-27",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(F\\) telle que \\(F'(x) = 3x^{2} - 6x + 2\\). Calculer \\(F'(2)\\).",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "derivation-28",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "La formule de Leibniz, vue dans le cours sur la régularité des fonctions, permet de calculer :",
  "opts": [
   {
    "key": "a",
    "text": "la primitive d'un produit de fonctions"
   },
   {
    "key": "b",
    "text": "la dérivée n-ième d'un produit de deux fonctions"
   },
   {
    "key": "c",
    "text": "la limite d'un produit de suites"
   },
   {
    "key": "d",
    "text": "l'intégrale d'un produit de fonctions"
   }
  ],
  "ans": "b",
  "ansText": "la dérivée n-ième d'un produit de deux fonctions",
  "id": "derivation-29",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) et \\(g\\) sont de classe \\(C^{n}\\) sur \\(I,\\) alors \\(f + g\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "de classe \\(C^(n-1)\\) sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "de classe \\(C^{n}\\) sur \\(I,\\) avec \\((f + g)^(n) = f^(n) + g^(n)\\)"
   },
   {
    "key": "c",
    "text": "de classe \\(C^{0}\\) seulement"
   },
   {
    "key": "d",
    "text": "non dérivable en général"
   }
  ],
  "ans": "b",
  "ansText": "de classe \\(C^{n}\\) sur \\(I,\\) avec \\((f + g)^(n) = f^(n) + g^(n)\\)",
  "id": "derivation-30",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "On considère \\(f(x) = x^3 - 3x\\), représentée ci-dessous. Sur \\([-2{,}5\\,;\\,2{,}5]\\), en combien de points la tangente à la courbe est-elle horizontale (points où \\(f'(x)=0\\)) ?",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "img": "../images/exercices/derivation_extrema.png",
  "imgAlt": "Courbe de f(x) = x^3 - 3x avec deux extrema",
  "id": "derivation-31",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "D'après ce même graphique, en quelle valeur positive de \\(x\\) la fonction \\(f(x) = x^3-3x\\) admet-elle un minimum local ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "img": "../images/exercices/derivation_extrema.png",
  "imgAlt": "Courbe de f(x) = x^3 - 3x avec deux extrema",
  "id": "derivation-32",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Le graphique ci-dessous représente \\(f'(x) = 3x^2-3\\), la dérivée de \\(f(x)=x^3-3x\\). En quels points \\(f'\\) s'annule-t-elle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x=-1\\) et \\(x=1\\)"
   },
   {
    "key": "b",
    "text": "\\(x=0\\) uniquement"
   },
   {
    "key": "c",
    "text": "\\(x=-3\\) et \\(x=3\\)"
   },
   {
    "key": "d",
    "text": "elle ne s'annule jamais"
   }
  ],
  "ans": "a",
  "ansText": "\\(x=-1\\) et \\(x=1\\)",
  "img": "../images/exercices/derivation_fprime.png",
  "imgAlt": "Courbe de la dérivée f'(x) = 3x^2 - 3",
  "id": "derivation-33",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "D'après ce graphique de \\(f'(x)=3x^2-3\\) (une parabole), en quelle valeur de \\(x\\) la dérivée \\(f'\\) est-elle minimale ?",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "img": "../images/exercices/derivation_fprime.png",
  "imgAlt": "Courbe de la dérivée f'(x) = 3x^2 - 3",
  "id": "derivation-34",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) continue sur \\([1,3]\\), dérivable sur \\(]1,3[\\), avec \\(f(1) = f(3) = 5\\). D'après le théorème de Rolle :",
  "opts": [
   {
    "key": "a",
    "text": "il existe \\(c \\in \\,]1,3[\\) tel que \\(f'(c) = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est constante sur \\([1,3]\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(1) = f'(3)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'admet pas d'extremum sur \\([1,3]\\)"
   }
  ],
  "ans": "a",
  "ansText": "il existe \\(c \\in \\,]1,3[\\) tel que \\(f'(c) = 0\\)",
  "id": "derivation-35",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = (x^2+1)^3\\). En utilisant la formule de dérivation composée \\(f'(x) = 3(x^2+1)^2 \\cdot 2x\\), calculer \\(f'(1)\\).",
  "ans": 24,
  "ansText": "24",
  "tol": 0.01,
  "id": "derivation-36",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^2 - 4x + 3\\), avec \\(f'(x) = 2x-4\\). Sur quel intervalle \\(f\\) est-elle croissante ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\ge 2\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\le 2\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\ge 4\\)"
   },
   {
    "key": "d",
    "text": "sur R tout entier"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\ge 2\\)",
  "id": "derivation-37",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Pour cette même fonction \\(f(x) = x^2-4x+3\\) (\\(f'(x)=2x-4\\)), calculer \\(f'(2)\\) (on doit trouver un extremum en \\(x=2\\)).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "derivation-38",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est une fonction paire et dérivable sur \\(\\mathbb{R}\\), que peut-on dire de sa dérivée \\(f'\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'\\) est impaire"
   },
   {
    "key": "b",
    "text": "\\(f'\\) est paire"
   },
   {
    "key": "c",
    "text": "\\(f'\\) est nécessairement nulle"
   },
   {
    "key": "d",
    "text": "on ne peut rien affirmer sur la parité de \\(f'\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'\\) est impaire",
  "id": "derivation-39",
  "cat": "derivation"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\sin(x)\\), avec \\(f''(x) = -\\sin(x)\\). Calculer \\(f''(\\pi/2)\\).",
  "ans": -1,
  "ansText": "-1",
  "tol": 0.01,
  "id": "derivation-40",
  "cat": "derivation"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) définie sur un intervalle \\(I\\) est dite convexe si, pour tout \\(x, y \\in I\\) et \\(\\lambda \\in [0, 1]\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f( \\lambda x + (1 - \\lambda )y) \\le \\lambda f(x) + (1 - \\lambda )f(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(f( \\lambda x + (1 - \\lambda )y) \\ge \\lambda f(x) + (1 - \\lambda )f(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x + y) = f(x) + f(y)\\)"
   },
   {
    "key": "d",
    "text": "\\(f''(x) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f( \\lambda x + (1 - \\lambda )y) \\le \\lambda f(x) + (1 - \\lambda )f(y)\\)",
  "id": "convexite-01",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite concave si, pour tout \\(x, y \\in I\\) et \\(\\lambda \\in [0, 1]\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f( \\lambda x + (1 - \\lambda )y) \\le \\lambda f(x) + (1 - \\lambda )f(y)\\)"
   },
   {
    "key": "b",
    "text": "\\(f( \\lambda x + (1 - \\lambda )y) \\ge \\lambda f(x) + (1 - \\lambda )f(y)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x)f(y) = f(x + y)\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est croissante"
   }
  ],
  "ans": "b",
  "ansText": "\\(f( \\lambda x + (1 - \\lambda )y) \\ge \\lambda f(x) + (1 - \\lambda )f(y)\\)",
  "id": "convexite-02",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Parmi les fonctions suivantes, laquelle est convexe sur son ensemble de définition ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\mapsto \\exp(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\mapsto \\ln(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\mapsto \\sqrt{x}\\)"
   },
   {
    "key": "d",
    "text": "\\(x \\mapsto -x^{2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\mapsto \\exp(x)\\)",
  "id": "convexite-03",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Parmi les fonctions suivantes, laquelle est concave sur son ensemble de définition ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\mapsto \\ln(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\mapsto \\exp(x)\\)"
   },
   {
    "key": "c",
    "text": "\\(x \\mapsto x^{2}\\)"
   },
   {
    "key": "d",
    "text": "\\(x \\mapsto x^{4}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\mapsto \\ln(x)\\)",
  "id": "convexite-04",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(x \\mapsto 1/x,\\) restreinte à \\(x > 0,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "convexe"
   },
   {
    "key": "b",
    "text": "concave"
   },
   {
    "key": "c",
    "text": "ni convexe ni concave"
   },
   {
    "key": "d",
    "text": "affine"
   }
  ],
  "ans": "a",
  "ansText": "convexe",
  "id": "convexite-05",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Toute fonction affine \\(x \\mapsto\\) ax \\(+ b (a, b \\in R)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "convexe uniquement"
   },
   {
    "key": "b",
    "text": "concave uniquement"
   },
   {
    "key": "c",
    "text": "à la fois convexe et concave"
   },
   {
    "key": "d",
    "text": "ni convexe ni concave"
   }
  ],
  "ans": "c",
  "ansText": "à la fois convexe et concave",
  "id": "convexite-06",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation d'ordre \\(1,\\) une fonction \\(f\\) dérivable sur \\(I\\) est convexe sur \\(I\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'\\) est croissante sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(f'\\) est décroissante sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(f'\\) est constante sur \\(I\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est bornée sur \\(I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'\\) est croissante sur \\(I\\)",
  "id": "convexite-07",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation d'ordre \\(2,\\) une fonction \\(f\\) deux fois dérivable sur \\(I\\) est convexe sur \\(I\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f''(x) \\ge 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "b",
    "text": "\\(f''(x) \\le 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "c",
    "text": "\\(f''(x) = 0\\) pour tout \\(x \\in I\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = 0\\) pour tout \\(x \\in I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f''(x) \\ge 0\\) pour tout \\(x \\in I\\)",
  "id": "convexite-08",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) deux fois dérivable est concave sur \\(I\\) si et seulement si :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f''(x) \\ge 0\\) sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(f''(x) \\le 0\\) sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(f''(x) = 0\\) sur \\(I\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) \\ge 0\\) sur \\(I\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f''(x) \\le 0\\) sur \\(I\\)",
  "id": "convexite-09",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\exp(x^{2})\\). On \\(a f'(x) = 2x \\cdot \\exp(x^{2})\\) et \\(f''(x) = (2 + 4x^{2}) \\cdot \\exp(x^{2})\\). Calculer \\(f''(0)\\).",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "convexite-10",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Sachant que \\(f''(x) = (2 + 4x^{2})\\exp(x^{2})\\) est toujours positive pour \\(f(x) = \\exp(x^{2}),\\) que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est convexe sur \\(R\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est concave sur \\(R\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) n'est ni convexe ni concave"
   },
   {
    "key": "d",
    "text": "on ne peut rien conclure"
   }
  ],
  "ans": "a",
  "ansText": "\\(f\\) est convexe sur \\(R\\)",
  "id": "convexite-11",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\ln(x)\\) sur \\(R^{+}{}^{\\star},\\) avec \\(f'(x) = 1/x\\) et \\(f''(x) = -1/x^{2}\\). Calculer \\(f''(1)\\).",
  "ans": -1,
  "ansText": "\\(-1\\)",
  "tol": 0.01,
  "id": "convexite-12",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Sachant que \\(f''(x) = -1/x^{2} < 0\\) pour tout \\(x > 0,\\) pour \\(f(x) = \\ln(x),\\) que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est convexe sur \\(R^{+}{}^{\\star}\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est concave sur \\(R^{+}{}^{\\star}\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est affine"
   },
   {
    "key": "d",
    "text": "\\(f\\) n'est pas dérivable"
   }
  ],
  "ans": "b",
  "ansText": "\\(f\\) est concave sur \\(R^{+}{}^{\\star}\\)",
  "id": "convexite-13",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = (1/3)x^{3} - 9x^{2} + 4,\\) avec \\(f''(x) = 2x - 18\\). Pour quelle valeur de \\(x\\) la dérivée seconde \\(f''\\) s'annule-t-elle ?",
  "ans": 9,
  "ansText": "\\(9\\)",
  "tol": 0.01,
  "id": "convexite-14",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Pour \\(f(x) = (1/3)x^{3} - 9x^{2} + 4 (f''(x) = 2x - 18),\\) sur quel intervalle \\(f\\) est-elle convexe ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x < 9\\)"
   },
   {
    "key": "b",
    "text": "\\(x > 9\\)"
   },
   {
    "key": "c",
    "text": "uniquement en \\(x = 9\\)"
   },
   {
    "key": "d",
    "text": "sur \\(R\\) tout entier"
   }
  ],
  "ans": "b",
  "ansText": "\\(x > 9\\)",
  "id": "convexite-15",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Pour cette même fonction, sur quel intervalle \\(f\\) est-elle concave ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x < 9\\)"
   },
   {
    "key": "b",
    "text": "\\(x > 9\\)"
   },
   {
    "key": "c",
    "text": "uniquement en \\(x = 9\\)"
   },
   {
    "key": "d",
    "text": "elle n'est jamais concave"
   }
  ],
  "ans": "a",
  "ansText": "\\(x < 9\\)",
  "id": "convexite-16",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est convexe sur \\(I\\) et dérivable en \\(x_{0} \\in I,\\) la courbe représentative de \\(f\\) par rapport à sa tangente en \\(x_{0}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "toujours au-dessus de la tangente"
   },
   {
    "key": "b",
    "text": "toujours en dessous de la tangente"
   },
   {
    "key": "c",
    "text": "confondue avec la tangente"
   },
   {
    "key": "d",
    "text": "cela dépend du signe de \\(x_{0}\\)"
   }
  ],
  "ans": "a",
  "ansText": "toujours au-dessus de la tangente",
  "id": "convexite-17",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est convexe sur \\(I,\\) la corde reliant deux points \\((x, f(x))\\) et \\((y, f(y))\\) de sa courbe se situe :",
  "opts": [
   {
    "key": "a",
    "text": "au-dessus de la courbe entre \\(x\\) et \\(y\\)"
   },
   {
    "key": "b",
    "text": "en dessous de la courbe entre \\(x\\) et \\(y\\)"
   },
   {
    "key": "c",
    "text": "confondue avec la courbe"
   },
   {
    "key": "d",
    "text": "toujours horizontale"
   }
  ],
  "ans": "a",
  "ansText": "au-dessus de la courbe entre \\(x\\) et \\(y\\)",
  "id": "convexite-18",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après la caractérisation d'ordre \\(0\\) (pentes des \\(sécantes),\\) pour tout \\(x_{0}\\) fixé, \\(f\\) est convexe sur \\(I\\) si et seulement si \\(\\varphi _{x_{0}}(x) = (f(x) - f(x_{0})) / (x - x_{0})\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "croissante"
   },
   {
    "key": "b",
    "text": "décroissante"
   },
   {
    "key": "c",
    "text": "constante"
   },
   {
    "key": "d",
    "text": "bornée"
   }
  ],
  "ans": "a",
  "ansText": "croissante",
  "id": "convexite-19",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "L'inégalité de convexité généralisée \\((n\\) points, \\(\\lambda _{k} \\ge 0, \\sum \\lambda _{k} = 1)\\) affirme que, pour \\(f\\) convexe :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f( \\sum \\lambda _{k}x_{k}) \\le \\sum \\lambda _{k}f(x_{k})\\)"
   },
   {
    "key": "b",
    "text": "\\(f( \\sum \\lambda _{k}x_{k}) \\ge \\sum \\lambda _{k}f(x_{k})\\)"
   },
   {
    "key": "c",
    "text": "\\(f( \\sum \\lambda _{k}x_{k}) = \\sum \\lambda _{k}f(x_{k})\\)"
   },
   {
    "key": "d",
    "text": "\\(\\sum f(x_{k}) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f( \\sum \\lambda _{k}x_{k}) \\le \\sum \\lambda _{k}f(x_{k})\\)",
  "id": "convexite-20",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après le cours (fonctions convexes, cas \\(C^{0}),\\) si \\(f\\) est convexe sur \\(I\\) et admet un minimum local, alors ce minimum est :",
  "opts": [
   {
    "key": "a",
    "text": "forcément un minimum global"
   },
   {
    "key": "b",
    "text": "uniquement local, pas nécessairement global"
   },
   {
    "key": "c",
    "text": "toujours atteint en un unique point"
   },
   {
    "key": "d",
    "text": "toujours égal à \\(0\\)"
   }
  ],
  "ans": "a",
  "ansText": "forcément un minimum global",
  "id": "convexite-21",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après le cours (fonctions convexes, cas \\(C^{1}),\\) si \\(f\\) est convexe et dérivable sur \\(I\\) et admet un point critique \\(x_{0} (f'(x_{0}) = 0),\\) alors :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x_{0}\\) est un point où \\(f\\) atteint son minimum"
   },
   {
    "key": "b",
    "text": "\\(x_{0}\\) est un point où \\(f\\) atteint son maximum"
   },
   {
    "key": "c",
    "text": "\\(x_{0}\\) n'est ni un minimum ni un maximum"
   },
   {
    "key": "d",
    "text": "on ne peut rien conclure"
   }
  ],
  "ans": "a",
  "ansText": "\\(x_{0}\\) est un point où \\(f\\) atteint son minimum",
  "id": "convexite-22",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Pour une fonction concave et dérivable, un point critique correspond à :",
  "opts": [
   {
    "key": "a",
    "text": "un minimum"
   },
   {
    "key": "b",
    "text": "un maximum"
   },
   {
    "key": "c",
    "text": "nécessairement un point d'inflexion"
   },
   {
    "key": "d",
    "text": "rien de particulier"
   }
  ],
  "ans": "b",
  "ansText": "un maximum",
  "id": "convexite-23",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "La fonction exponentielle est convexe sur \\(R\\). Admet-elle un minimum global ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, en \\(x = 0\\)"
   },
   {
    "key": "b",
    "text": "Non : elle n'admet pas de point critique"
   },
   {
    "key": "c",
    "text": "Oui, elle vaut \\(0\\) en \\(- \\infty\\)"
   },
   {
    "key": "d",
    "text": "Non, car elle est non bornée inférieurement"
   }
  ],
  "ans": "b",
  "ansText": "Non : elle n'admet pas de point critique",
  "id": "convexite-24",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^{4} + 4x^{2} - 6,\\) avec \\(f'(x) = 4x^{3} + 8x\\) qui s'annule en un unique réel. En quelle valeur de \\(x\\) la fonction \\(f\\) (convexe sur \\(R)\\) atteint-elle son minimum ?",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "convexite-25",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Pour une fonction \\(f\\) concave sur \\(I\\) admettant un maximum local, d'après le cours, ce maximum est :",
  "opts": [
   {
    "key": "a",
    "text": "forcément un maximum global"
   },
   {
    "key": "b",
    "text": "seulement local"
   },
   {
    "key": "c",
    "text": "nécessairement égal à \\(0\\)"
   },
   {
    "key": "d",
    "text": "atteint en plusieurs points distincts"
   }
  ],
  "ans": "a",
  "ansText": "forcément un maximum global",
  "id": "convexite-26",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(x \\mapsto x^{2},\\) convexe sur \\(R,\\) admet un minimum local en \\(x = 0\\). D'après le cours, ce minimum est aussi :",
  "opts": [
   {
    "key": "a",
    "text": "un minimum global"
   },
   {
    "key": "b",
    "text": "uniquement local"
   },
   {
    "key": "c",
    "text": "un maximum"
   },
   {
    "key": "d",
    "text": "non atteint"
   }
  ],
  "ans": "a",
  "ansText": "un minimum global",
  "id": "convexite-27",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dite concave si son opposé -f est :",
  "opts": [
   {
    "key": "a",
    "text": "convexe"
   },
   {
    "key": "b",
    "text": "concave"
   },
   {
    "key": "c",
    "text": "croissante"
   },
   {
    "key": "d",
    "text": "bornée"
   }
  ],
  "ans": "a",
  "ansText": "convexe",
  "id": "convexite-28",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) convexe sur \\(I\\). Que peut-on dire de -f ?",
  "opts": [
   {
    "key": "a",
    "text": "-f est convexe"
   },
   {
    "key": "b",
    "text": "-f est concave"
   },
   {
    "key": "c",
    "text": "-f n'est ni convexe ni concave"
   },
   {
    "key": "d",
    "text": "-f est constante"
   }
  ],
  "ans": "b",
  "ansText": "-f est concave",
  "id": "convexite-29",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Les fonctions \\(x \\mapsto x^(2n),\\) pour \\(n \\in N,\\) sont :",
  "opts": [
   {
    "key": "a",
    "text": "convexes sur \\(R\\)"
   },
   {
    "key": "b",
    "text": "concaves sur \\(R\\)"
   },
   {
    "key": "c",
    "text": "ni convexes ni concaves"
   },
   {
    "key": "d",
    "text": "convexes uniquement sur \\(R^{+}\\)"
   }
  ],
  "ans": "a",
  "ansText": "convexes sur \\(R\\)",
  "id": "convexite-30",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Le graphique ci-dessous représente deux courbes A (\\(x \\mapsto x^2/2\\)) et B (\\(x \\mapsto 1{,}6\\sqrt{x}\\)). Laquelle est convexe ?",
  "opts": [
   {
    "key": "a",
    "text": "la courbe A"
   },
   {
    "key": "b",
    "text": "la courbe B"
   },
   {
    "key": "c",
    "text": "les deux"
   },
   {
    "key": "d",
    "text": "aucune des deux"
   }
  ],
  "ans": "a",
  "ansText": "la courbe A",
  "img": "../images/exercices/convexite_deux_courbes.png",
  "imgAlt": "Deux courbes, l'une convexe l'autre concave",
  "id": "convexite-31",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "D'après le même graphique, laquelle des deux courbes est concave ?",
  "opts": [
   {
    "key": "a",
    "text": "la courbe A"
   },
   {
    "key": "b",
    "text": "la courbe B"
   },
   {
    "key": "c",
    "text": "les deux"
   },
   {
    "key": "d",
    "text": "aucune des deux"
   }
  ],
  "ans": "b",
  "ansText": "la courbe B",
  "img": "../images/exercices/convexite_deux_courbes.png",
  "imgAlt": "Deux courbes, l'une convexe l'autre concave",
  "id": "convexite-32",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Le graphique ci-dessous représente \\(f(x) = x^3\\). Comment appelle-t-on le point marqué en \\((0,0)\\), où \\(f\\) change de convexité ?",
  "opts": [
   {
    "key": "a",
    "text": "un point d'inflexion"
   },
   {
    "key": "b",
    "text": "un minimum local"
   },
   {
    "key": "c",
    "text": "un maximum local"
   },
   {
    "key": "d",
    "text": "une asymptote"
   }
  ],
  "ans": "a",
  "ansText": "un point d'inflexion",
  "img": "../images/exercices/convexite_inflexion.png",
  "imgAlt": "Point d'inflexion de f(x) = x^3 en 0",
  "id": "convexite-33",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x) = x^3\\), on a \\(f''(x) = 6x\\). Calculer \\(f''(0)\\) (qui s'annule bien au point d'inflexion marqué sur le graphique).",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "img": "../images/exercices/convexite_inflexion.png",
  "imgAlt": "Point d'inflexion de f(x) = x^3 en 0",
  "id": "convexite-34",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^2\\), convexe sur \\(\\mathbb{R}\\). D'après l'inégalité de convexité, \\(f(2) \\le \\dfrac{f(1)+f(3)}{2}\\). Calculer \\(\\dfrac{f(1)+f(3)}{2}\\).",
  "ans": 5,
  "ansText": "5",
  "tol": 0.01,
  "id": "convexite-35",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Pour cette même fonction \\(f(x) = x^2\\), calculer \\(f(2)\\) et vérifier qu'elle est bien inférieure ou égale à \\(5\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "convexite-36",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Soient \\(f\\) et \\(g\\) deux fonctions convexes sur un même intervalle \\(I\\). Que peut-on dire de \\(f+g\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f+g\\) est convexe sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(f+g\\) est concave sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(f+g\\) n'est ni convexe ni concave en général"
   },
   {
    "key": "d",
    "text": "on ne peut rien affirmer sans plus d'informations"
   }
  ],
  "ans": "a",
  "ansText": "\\(f+g\\) est convexe sur \\(I\\)",
  "id": "convexite-37",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Calculer la pente de la sécante à \\(f(x) = x^2\\) entre \\(x=1\\) et \\(x=3\\), c'est-à-dire \\(\\dfrac{f(3)-f(1)}{3-1}\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "convexite-38",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) convexe sur \\(I\\) et \\(g\\) affine croissante sur \\(I\\) (\\(g(x) = \\alpha x + \\beta\\), \\(\\alpha \\ge 0\\)). Que peut-on dire de \\(f+g\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f+g\\) est convexe sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(f+g\\) est concave sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(f+g\\) est affine"
   },
   {
    "key": "d",
    "text": "on ne peut rien affirmer"
   }
  ],
  "ans": "a",
  "ansText": "\\(f+g\\) est convexe sur \\(I\\)",
  "id": "convexite-39",
  "cat": "convexite"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^4\\), avec \\(f''(x) = 12x^2\\). Calculer \\(f''(1)\\).",
  "ans": 12,
  "ansText": "12",
  "tol": 0.01,
  "id": "convexite-40",
  "cat": "convexite"
 },
 {
  "type": "qcm",
  "q": "Une primitive \\(F\\) d'une fonction \\(f\\) continue sur \\(I\\) vérifie :",
  "opts": [
   {
    "key": "a",
    "text": "\\(F' = f\\) sur \\(I\\)"
   },
   {
    "key": "b",
    "text": "\\(F = f'\\) sur \\(I\\)"
   },
   {
    "key": "c",
    "text": "\\(F(x) = \\int f'(x)\\) dx uniquement"
   },
   {
    "key": "d",
    "text": "\\(F\\) est bornée sur \\(I\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(F' = f\\) sur \\(I\\)",
  "id": "integrales-01",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Si \\(F\\) est une primitive de \\(f\\) sur \\(I,\\) alors toutes les primitives de \\(f\\) sur \\(I\\) sont de la forme :",
  "opts": [
   {
    "key": "a",
    "text": "\\(F + k, k \\in R\\)"
   },
   {
    "key": "b",
    "text": "\\(k \\cdot F, k \\in R\\)"
   },
   {
    "key": "c",
    "text": "\\(F / k\\)"
   },
   {
    "key": "d",
    "text": "uniquement \\(F\\) elle-même"
   }
  ],
  "ans": "a",
  "ansText": "\\(F + k, k \\in R\\)",
  "id": "integrales-02",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = 3x^{2}\\). D'après le cours, \\(F(x) = x^{3}\\) est une primitive de \\(f\\). Calculer \\(F(2) - F(0)\\) (c'est-à-dire \\(\\int _{0}^{2} 3x^{2}\\) dx).",
  "ans": 8,
  "ansText": "\\(8\\)",
  "tol": 0.01,
  "id": "integrales-03",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "D'après le corollaire du cours, si \\(F\\) est une primitive de \\(f\\) sur \\(I,\\) alors pour \\(a, b \\in I, \\int _{a}^{b} f(t)\\) dt \\(=\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(F(b) - F(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(F(a) - F(b)\\)"
   },
   {
    "key": "c",
    "text": "\\(F(b) + F(a)\\)"
   },
   {
    "key": "d",
    "text": "\\(F'(b) - F'(a)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(F(b) - F(a)\\)",
  "id": "integrales-04",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{0}^{1} x^{2}\\) dx.",
  "ans": 0.3333333333333333,
  "ansText": "\\(1/3 (0,333)\\)",
  "tol": 0.01,
  "id": "integrales-05",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{1}^{2} (1/x)\\) dx.",
  "ans": 0.693147,
  "ansText": "\\(\\ln(2) \\approx 0,693\\)",
  "tol": 0.01,
  "id": "integrales-06",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{0}^ \\pi \\sin(x)\\) dx.",
  "ans": 2,
  "ansText": "\\(2\\)",
  "tol": 0.01,
  "id": "integrales-07",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{0}^( \\pi /2) \\cos(x)\\) dx.",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "integrales-08",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{0}^{1} e^{x}\\) dx.",
  "ans": 1.718282,
  "ansText": "\\(e - 1 \\approx 1,718\\)",
  "tol": 0.01,
  "id": "integrales-09",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto 1/x\\) sur \\(R^{+}{}^{\\star}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln(x)\\)"
   },
   {
    "key": "b",
    "text": "\\(1/x^{2}\\)"
   },
   {
    "key": "c",
    "text": "\\(-1/x^{2}\\)"
   },
   {
    "key": "d",
    "text": "\\(x \\cdot \\ln(x) - x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\ln(x)\\)",
  "id": "integrales-10",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto \\cos(x)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\sin(x) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(-\\sin(x) + C\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\cos(x) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tan(x) + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\sin(x) + C\\)",
  "id": "integrales-11",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto \\sin(x)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\cos(x) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(-\\cos(x) + C\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\sin(x) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(\\tan(x) + C\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(-\\cos(x) + C\\)",
  "id": "integrales-12",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto e^{x}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^{x} + C\\)"
   },
   {
    "key": "b",
    "text": "\\(x \\cdot e^{x} + C\\)"
   },
   {
    "key": "c",
    "text": "\\(e^{x}/x + C\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ln(x) \\cdot e^{x}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(e^{x} + C\\)",
  "id": "integrales-13",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "D'après le cours (intégration par \\(parties),\\) une primitive de \\(x \\mapsto \\ln(x)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x \\cdot \\ln(x) - x + C\\)"
   },
   {
    "key": "b",
    "text": "\\(\\ln(x)/x + C\\)"
   },
   {
    "key": "c",
    "text": "\\(x/\\ln(x) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(1/x + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x \\cdot \\ln(x) - x + C\\)",
  "id": "integrales-14",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "En utilisant la primitive de \\(\\ln(x)\\) qui s'annule en \\(1 (x \\cdot \\ln(x) - x + 1),\\) calculer sa valeur en \\(x = e,\\) c'est-à-dire \\(e \\cdot \\ln(e) - e + 1\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "integrales-15",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x/(x+1)^{2}\\). D'après le cours, calculer \\(\\int _{0}^(e-1) f(t)\\) dt (le résultat est \\(1/e)\\).",
  "ans": 0.367879,
  "ansText": "\\(1/e \\approx 0,368\\)",
  "tol": 0.01,
  "id": "integrales-16",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "La formule d'intégration par parties s'écrit, pour \\(u, v\\) de classe \\(C^{1}\\) sur \\([a, b]\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int _{a}^{b} u v'\\) dt \\(= [uv]_{a}^{b} - \\int _{a}^{b} u' v\\) dt"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b} u v'\\) dt \\(= [uv]_{a}^{b} + \\int _{a}^{b} u' v\\) dt"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{b} u v'\\) dt \\(= u'(b)v(b)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\int _{a}^{b} u v'\\) dt \\(= \\int _{a}^{b} u' v'\\) dt"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int _{a}^{b} u v'\\) dt \\(= [uv]_{a}^{b} - \\int _{a}^{b} u' v\\) dt",
  "id": "integrales-17",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "La formule du changement de variable affirme que, pour \\(\\varphi\\) de classe \\(C^{1}\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int _{a}^{b} f( \\varphi (t)) \\varphi '(t)\\) dt \\(= \\int _ \\varphi (a)^ \\varphi (b) f(u)\\) du"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b} f( \\varphi (t)) \\varphi '(t)\\) dt \\(= \\int _{a}^{b} f(u)\\) du"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{b} f( \\varphi (t)) \\varphi '(t)\\) dt \\(= f( \\varphi (b)) - f( \\varphi (a))\\)"
   },
   {
    "key": "d",
    "text": "le changement de variable ne s'applique qu'aux fonctions polynomiales"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int _{a}^{b} f( \\varphi (t)) \\varphi '(t)\\) dt \\(= \\int _ \\varphi (a)^ \\varphi (b) f(u)\\) du",
  "id": "integrales-18",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "D'après la linéarité de l'intégrale, pour \\(\\lambda\\) , \\(\\mu\\) réels :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int _{a}^{b}( \\lambda f + \\mu g)\\) dt \\(= \\lambda \\int _{a}^{b}f\\) dt \\(+ \\mu \\int _{a}^{b}g\\) dt"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b}( \\lambda f + \\mu g)\\) dt \\(= \\lambda \\mu \\int _{a}^{b}(f + g)\\) dt"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{b}( \\lambda f + \\mu g)\\) dt \\(=\\) ( \\(\\int _{a}^{b}f\\) dt) \\(\\times\\) ( \\(\\int _{a}^{b}g\\) dt)"
   },
   {
    "key": "d",
    "text": "l'intégrale n'est pas linéaire"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int _{a}^{b}( \\lambda f + \\mu g)\\) dt \\(= \\lambda \\int _{a}^{b}f\\) dt \\(+ \\mu \\int _{a}^{b}g\\) dt",
  "id": "integrales-19",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "D'après la relation de Chasles, pour \\(a < b < c\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int _{a}^{c} f\\) dt \\(= \\int _{a}^{b} f\\) dt \\(+ \\int _b^c f\\) dt"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{c} f\\) dt \\(= \\int _{a}^{b} f\\) dt \\(- \\int _b^c f\\) dt"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{c} f\\) dt \\(= \\int _{a}^{b} f\\) dt \\(\\times \\int _b^c f\\) dt"
   },
   {
    "key": "d",
    "text": "la relation de Chasles ne concerne que les suites"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int _{a}^{c} f\\) dt \\(= \\int _{a}^{b} f\\) dt \\(+ \\int _b^c f\\) dt",
  "id": "integrales-20",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Quelle relation relie \\(\\int _{a}^{b} f(t)\\) dt et \\(\\int _b^a f(t)\\) dt ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int _{a}^{b} f = - \\int _b^a f\\)"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b} f = \\int _b^a f\\)"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{b} f = 2 \\int _b^a f\\)"
   },
   {
    "key": "d",
    "text": "aucune relation générale n'existe"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int _{a}^{b} f = - \\int _b^a f\\)",
  "id": "integrales-21",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "En utilisant la relation de Chasles et le fait que sin est une fonction impaire, calculer \\(\\int _{-} \\pi ^ \\pi \\sin(t)\\) dt.",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "integrales-22",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "D'après l'inégalité de la moyenne, pour \\(f\\) définie sur \\(I\\) et \\(a, b \\in I\\) :",
  "opts": [
   {
    "key": "a",
    "text": "\\(| \\int _{a}^{b} f(t) dt| \\le sup|f| \\cdot |b - a|\\)"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b} f(t)\\) dt \\(= sup|f| \\cdot |b - a|\\)"
   },
   {
    "key": "c",
    "text": "\\(\\int _{a}^{b} f(t)\\) dt \\(\\ge sup|f|\\)"
   },
   {
    "key": "d",
    "text": "aucune borne ne peut être donnée"
   }
  ],
  "ans": "a",
  "ansText": "\\(| \\int _{a}^{b} f(t) dt| \\le sup|f| \\cdot |b - a|\\)",
  "id": "integrales-23",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Quelle inégalité relie \\(\\int _{a}^{b} f(t)\\) dt et \\(\\int _{a}^{b} |f(t)|\\) dt ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(| \\int _{a}^{b} f(t) dt| \\le \\int _{a}^{b} |f(t)|\\) dt"
   },
   {
    "key": "b",
    "text": "\\(\\int _{a}^{b} f(t)\\) dt \\(\\ge \\int _{a}^{b} |f(t)|\\) dt"
   },
   {
    "key": "c",
    "text": "ces deux quantités sont toujours égales"
   },
   {
    "key": "d",
    "text": "aucune comparaison n'est possible"
   }
  ],
  "ans": "a",
  "ansText": "\\(| \\int _{a}^{b} f(t) dt| \\le \\int _{a}^{b} |f(t)|\\) dt",
  "id": "integrales-24",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto x^{n} (n \\in N)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\((1/(n+1))x^(n+1) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(n \\cdot x^(n-1) + C\\)"
   },
   {
    "key": "c",
    "text": "\\(x^(n+1) + C\\)"
   },
   {
    "key": "d",
    "text": "\\((1/n)x^{n} + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((1/(n+1))x^(n+1) + C\\)",
  "id": "integrales-25",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto 1/(a^{2} + x^{2}) (a \\neq 0)\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\((1/a) \\cdot arctan(x/a) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(arctan(x) + C\\)"
   },
   {
    "key": "c",
    "text": "\\((1/a^{2}) \\cdot arctan(x/a) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(a \\cdot arctan(x/a) + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((1/a) \\cdot arctan(x/a) + C\\)",
  "id": "integrales-26",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{-1}^{1} x^{3}\\) dx (fonction impaire sur un intervalle symétrique).",
  "ans": 0,
  "ansText": "\\(0\\)",
  "tol": 0.01,
  "id": "integrales-27",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int _{0}^{2} (3x^{2} - 2x)\\) dx.",
  "ans": 4,
  "ansText": "\\(4\\)",
  "tol": 0.01,
  "id": "integrales-28",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto \\operatorname{ch}(x)\\) (cosinus hyperbolique) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\operatorname{sh}(x) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(\\operatorname{ch}(x) + C\\)"
   },
   {
    "key": "c",
    "text": "\\(th(x) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(-\\operatorname{sh}(x) + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\operatorname{sh}(x) + C\\)",
  "id": "integrales-29",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(x \\mapsto \\operatorname{sh}(x)\\) (sinus hyperbolique) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\operatorname{ch}(x) + C\\)"
   },
   {
    "key": "b",
    "text": "\\(\\operatorname{sh}(x) + C\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\operatorname{ch}(x) + C\\)"
   },
   {
    "key": "d",
    "text": "\\(th(x) + C\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\operatorname{ch}(x) + C\\)",
  "id": "integrales-30",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Le graphique ci-dessous représente l'aire sous la droite \\(f(x)=x\\) entre \\(0\\) et \\(4\\) (un triangle). Calculer cette aire, c'est-à-dire \\(\\int_0^4 x\\,dx\\).",
  "ans": 8,
  "ansText": "8",
  "tol": 0.01,
  "img": "../images/exercices/integrales_aire_triangle.png",
  "imgAlt": "Aire sous une droite (triangle)",
  "id": "integrales-31",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Le graphique ci-dessous représente l'aire sous la parabole \\(f(x)=x^2\\) entre \\(0\\) et \\(2\\). Calculer \\(\\int_0^2 x^2\\,dx\\).",
  "ans": 2.6666666666666665,
  "ansText": "\\(8/3 \\approx 2{,}667\\)",
  "tol": 0.01,
  "img": "../images/exercices/integrales_aire_parabole.png",
  "imgAlt": "Aire sous une parabole",
  "id": "integrales-32",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "En utilisant une intégration par parties (\\(u=x\\), \\(dv=e^x dx\\)), calculer \\(\\int_0^1 x e^x\\,dx\\) (on rappelle qu'une primitive de \\(xe^x\\) est \\(xe^x - e^x\\)).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "integrales-33",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Pour calculer \\(\\int_0^1 2x(x^2+1)^3\\,dx\\) par changement de variable \\(u = x^2+1\\), quelle est l'expression de \\(du\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(du = 2x\\,dx\\)"
   },
   {
    "key": "b",
    "text": "\\(du = x^2\\,dx\\)"
   },
   {
    "key": "c",
    "text": "\\(du = dx\\)"
   },
   {
    "key": "d",
    "text": "\\(du = (x^2+1)^3\\,dx\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(du = 2x\\,dx\\)",
  "id": "integrales-34",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "En posant \\(u=x^2+1\\) (donc \\(u\\) varie de \\(1\\) à \\(2\\)), calculer \\(\\int_0^1 2x(x^2+1)^3\\,dx = \\int_1^2 u^3\\,du\\).",
  "ans": 3.75,
  "ansText": "\\(15/4 = 3{,}75\\)",
  "tol": 0.01,
  "id": "integrales-35",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Soient \\(f\\) et \\(g\\) continues sur \\([a,b]\\) avec \\(f(x) \\ge g(x)\\) pour tout \\(x \\in [a,b]\\). L'aire du domaine compris entre les deux courbes est donnée par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int_a^b (f(t)-g(t))\\,dt\\)"
   },
   {
    "key": "b",
    "text": "\\(\\int_a^b (f(t)+g(t))\\,dt\\)"
   },
   {
    "key": "c",
    "text": "\\(\\int_a^b f(t)\\,dt \\times \\int_a^b g(t)\\,dt\\)"
   },
   {
    "key": "d",
    "text": "\\(f(b)-g(a)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int_a^b (f(t)-g(t))\\,dt\\)",
  "id": "integrales-36",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int_0^1 (3x^2+2x)\\,dx\\).",
  "ans": 2,
  "ansText": "2",
  "tol": 0.01,
  "id": "integrales-37",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\int_1^e \\dfrac{1}{x}\\,dx\\).",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "integrales-38",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est une fonction paire et continue sur \\([-a,a]\\), quelle égalité est vraie ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\int_{-a}^{a} f(t)\\,dt = 2\\int_0^a f(t)\\,dt\\)"
   },
   {
    "key": "b",
    "text": "\\(\\int_{-a}^{a} f(t)\\,dt = 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\int_{-a}^{a} f(t)\\,dt = \\int_0^a f(t)\\,dt\\)"
   },
   {
    "key": "d",
    "text": "cette égalité n'est vraie que si f est impaire"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\int_{-a}^{a} f(t)\\,dt = 2\\int_0^a f(t)\\,dt\\)",
  "id": "integrales-39",
  "cat": "integrales"
 },
 {
  "type": "num",
  "q": "Sachant que \\(\\int_0^2 x^2\\,dx = 8/3\\) et que \\(x \\mapsto x^2\\) est paire, calculer \\(\\int_{-2}^{2} x^2\\,dx\\).",
  "ans": 5.333333333333333,
  "ansText": "\\(16/3 \\approx 5{,}333\\)",
  "tol": 0.01,
  "id": "integrales-40",
  "cat": "integrales"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) admet un développement limité (DL) à l'ordre \\(n\\) au voisinage de \\(a\\) s'il existe \\(a_{0},\\) ..., \\(a_{n}\\) et \\(\\varepsilon (x) \\to 0\\) tels que :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x) = \\sum a_{k}(x - a)^k + (x - a)^{n} \\varepsilon (x)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x) = \\sum a_{k}(x - a)^k\\) seulement, sans reste"
   },
   {
    "key": "c",
    "text": "\\(f(x) = a_{n}(x - a)^{n}\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x) = f(a) + o(x - a)\\) uniquement"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x) = \\sum a_{k}(x - a)^k + (x - a)^{n} \\varepsilon (x)\\)",
  "id": "dl-01",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "La formule de Taylor-Young donne le DL à l'ordre \\(n\\) d'une fonction \\(f\\) de classe \\(C^{n},\\) en utilisant :",
  "opts": [
   {
    "key": "a",
    "text": "les dérivées successives de \\(f\\) en \\(a, f^(k)(a)\\)"
   },
   {
    "key": "b",
    "text": "uniquement la valeur \\(f(a)\\)"
   },
   {
    "key": "c",
    "text": "une primitive de \\(f\\)"
   },
   {
    "key": "d",
    "text": "l'intégrale de \\(f\\) sur \\([a, x]\\)"
   }
  ],
  "ans": "a",
  "ansText": "les dérivées successives de \\(f\\) en \\(a, f^(k)(a)\\)",
  "id": "dl-02",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL à l'ordre \\(1\\) d'une fonction \\(f\\) dérivable en \\(a\\) est étroitement lié à :",
  "opts": [
   {
    "key": "a",
    "text": "l'équation de la tangente à la courbe de \\(f\\) en \\(a\\)"
   },
   {
    "key": "b",
    "text": "l'aire sous la courbe de \\(f\\)"
   },
   {
    "key": "c",
    "text": "la convexité de \\(f\\)"
   },
   {
    "key": "d",
    "text": "la périodicité de \\(f\\)"
   }
  ],
  "ans": "a",
  "ansText": "l'équation de la tangente à la courbe de \\(f\\) en \\(a\\)",
  "id": "dl-03",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(1/(1 - x)\\) au voisinage de \\(0,\\) à l'ordre \\(n,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 + x + x^{2} +\\) ... \\(+ x^{n} + o(x^{n})\\)"
   },
   {
    "key": "b",
    "text": "\\(1 - x + x^{2} -\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "c",
    "text": "\\(1 + x^{2} + x^{4} +\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "d",
    "text": "\\(x + x^{2} +\\) ... \\(+ x^{n} + o(x^{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(1 + x + x^{2} +\\) ... \\(+ x^{n} + o(x^{n})\\)",
  "id": "dl-04",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(e^{x}\\) au voisinage de \\(0,\\) à l'ordre \\(n,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 + x + x^{2}/2\\)! \\(+\\) ... \\(+ x^{n}/n\\)! \\(+ o(x^{n})\\)"
   },
   {
    "key": "b",
    "text": "\\(1 + x + x^{2} +\\) ... \\(+ x^{n} + o(x^{n})\\)"
   },
   {
    "key": "c",
    "text": "\\(x + x^{2}/2\\)! \\(+\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "d",
    "text": "\\(1 - x + x^{2}/2\\)! \\(-\\) ... \\(+ o(x^{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(1 + x + x^{2}/2\\)! \\(+\\) ... \\(+ x^{n}/n\\)! \\(+ o(x^{n})\\)",
  "id": "dl-05",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(\\ln(1 + x)\\) au voisinage de \\(0,\\) à l'ordre \\(n,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x - x^{2}/2 + x^{3}/3 -\\) ... \\(+ (-1)^{n+1}x^{n}/n + o(x^{n})\\)"
   },
   {
    "key": "b",
    "text": "\\(1 + x + x^{2}/2 +\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "c",
    "text": "\\(x + x^{2}/2 + x^{3}/3 +\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "d",
    "text": "\\(1 - x + x^{2} -\\) ... \\(+ o(x^{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x - x^{2}/2 + x^{3}/3 -\\) ... \\(+ (-1)^{n+1}x^{n}/n + o(x^{n})\\)",
  "id": "dl-06",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(\\cos(x)\\) au voisinage de \\(0\\) débute par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 - x^{2}/2 + x^{4}/24 -\\) ..."
   },
   {
    "key": "b",
    "text": "\\(x - x^{3}/6 + x^{5}/120 -\\) ..."
   },
   {
    "key": "c",
    "text": "\\(1 + x + x^{2}/2 +\\) ..."
   },
   {
    "key": "d",
    "text": "\\(1 - x + x^{2} -\\) ..."
   }
  ],
  "ans": "a",
  "ansText": "\\(1 - x^{2}/2 + x^{4}/24 -\\) ...",
  "id": "dl-07",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(\\sin(x)\\) au voisinage de \\(0\\) débute par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x - x^{3}/6 + x^{5}/120 -\\) ..."
   },
   {
    "key": "b",
    "text": "\\(1 - x^{2}/2 + x^{4}/24 -\\) ..."
   },
   {
    "key": "c",
    "text": "\\(x + x^{2}/2 + x^{3}/6 +\\) ..."
   },
   {
    "key": "d",
    "text": "\\(1 + x - x^{2}/2 -\\) ..."
   }
  ],
  "ans": "a",
  "ansText": "\\(x - x^{3}/6 + x^{5}/120 -\\) ...",
  "id": "dl-08",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "D'après le DL de \\(\\cos(x) = 1 - x^{2}/2 + o(x^{2}),\\) quel est le coefficient de \\(x^{2}\\) (avec son signe) ?",
  "ans": -0.5,
  "ansText": "\\(-0.5\\)",
  "tol": 0.01,
  "id": "dl-09",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "D'après le DL de \\(e^{x} = 1 + x + x^{2}/2 + x^{3}/6 + o(x^{3}),\\) quel est le coefficient de \\(x^{3}\\) ?",
  "ans": 0.16666666666666666,
  "ansText": "\\(1/6 \\approx 0,167\\)",
  "tol": 0.01,
  "id": "dl-10",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "D'après le DL de \\(\\sin(x) = x - x^{3}/6 + o(x^{3}),\\) quel est le coefficient de \\(x^{3}\\) ?",
  "ans": -0.16666666666666666,
  "ansText": "\\(-1/6 \\approx -0,167\\)",
  "tol": 0.01,
  "id": "dl-11",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(\\operatorname{ch}(x)\\) (cosinus hyperbolique) au voisinage de \\(0\\) débute par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 + x^{2}/2 + x^{4}/24 +\\) ..."
   },
   {
    "key": "b",
    "text": "\\(x + x^{3}/6 +\\) ..."
   },
   {
    "key": "c",
    "text": "\\(1 - x^{2}/2 +\\) ..."
   },
   {
    "key": "d",
    "text": "\\(1 + x + x^{2}/2 +\\) ..."
   }
  ],
  "ans": "a",
  "ansText": "\\(1 + x^{2}/2 + x^{4}/24 +\\) ...",
  "id": "dl-12",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(\\operatorname{sh}(x)\\) (sinus hyperbolique) au voisinage de \\(0\\) débute par :",
  "opts": [
   {
    "key": "a",
    "text": "\\(x + x^{3}/6 + x^{5}/120 +\\) ..."
   },
   {
    "key": "b",
    "text": "\\(1 + x^{2}/2 +\\) ..."
   },
   {
    "key": "c",
    "text": "\\(x - x^{3}/6 +\\) ..."
   },
   {
    "key": "d",
    "text": "\\(1 + x + x^{2}/2 +\\) ..."
   }
  ],
  "ans": "a",
  "ansText": "\\(x + x^{3}/6 + x^{5}/120 +\\) ...",
  "id": "dl-13",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\((1 + x)^{\\alpha }\\) au voisinage de \\(0,\\) à l'ordre \\(2,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 + \\alpha x + \\alpha\\) ( \\(\\alpha - 1)/2 \\cdot x^{2} + o(x^{2})\\)"
   },
   {
    "key": "b",
    "text": "\\(1 + \\alpha x + \\alpha ^{2}x^{2} + o(x^{2})\\)"
   },
   {
    "key": "c",
    "text": "\\(1 + x + \\alpha x^{2} + o(x^{2})\\)"
   },
   {
    "key": "d",
    "text": "\\(1 + \\alpha x^{2} + o(x^{2})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(1 + \\alpha x + \\alpha\\) ( \\(\\alpha - 1)/2 \\cdot x^{2} + o(x^{2})\\)",
  "id": "dl-14",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant \\((1+x)^{\\alpha } = 1 + \\alpha x + \\alpha\\) ( \\(\\alpha -1)/2 x^{2} + o(x^{2})\\) avec \\(\\alpha = 1/2\\) (racine \\(carrée),\\) quel est le coefficient de \\(x\\) dans le DL de \\(\\sqrt{1+x}\\) ?",
  "ans": 0.5,
  "ansText": "\\(0.5\\)",
  "tol": 0.01,
  "id": "dl-15",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "Toujours avec \\(\\alpha = 1/2,\\) quel est le coefficient de \\(x^{2}\\) dans le DL de \\(\\sqrt{1+x},\\) soit \\(\\alpha\\) ( \\(\\alpha - 1)/2\\) ?",
  "ans": -0.125,
  "ansText": "\\(-1/8 (-0,125)\\)",
  "tol": 0.01,
  "id": "dl-16",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Pour calculer une limite en \\(0\\) d'une expression du type \\(f(x)/g(x)\\) sous forme indéterminée, une méthode efficace consiste à :",
  "opts": [
   {
    "key": "a",
    "text": "utiliser les DL de \\(f\\) et de \\(g\\) au voisinage de \\(0\\)"
   },
   {
    "key": "b",
    "text": "utiliser uniquement la valeur \\(f(0)\\)"
   },
   {
    "key": "c",
    "text": "dériver \\(f\\) et \\(g\\) indéfiniment"
   },
   {
    "key": "d",
    "text": "utiliser le théorème de Rolle"
   }
  ],
  "ans": "a",
  "ansText": "utiliser les DL de \\(f\\) et de \\(g\\) au voisinage de \\(0\\)",
  "id": "dl-17",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant le DL \\(\\sin(x) = x + o(x),\\) calculer \\(\\lim_{x \\to 0} \\sin(x) / x\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "dl-18",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant le DL \\(\\ln(1 + x) = x + o(x),\\) calculer \\(\\lim_{x \\to 0} \\ln(1 + x) / x\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "dl-19",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant le DL \\(e^{x} - 1 = x + o(x),\\) calculer \\(\\lim_{x \\to 0} (e^{x} - 1) / x\\).",
  "ans": 1,
  "ansText": "\\(1\\)",
  "tol": 0.01,
  "id": "dl-20",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant le DL \\(\\cos(x) - 1 = -x^{2}/2 + o(x^{2}),\\) calculer \\(\\lim_{x \\to 0} (\\cos(x) - 1) / x^{2}\\).",
  "ans": -0.5,
  "ansText": "\\(-0.5\\)",
  "tol": 0.01,
  "id": "dl-21",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Un développement asymptotique d'une fonction \\(f\\) au voisinage de \\(+ \\infty\\) s'obtient en étudiant le DL, au voisinage de \\(0,\\) de la fonction :",
  "opts": [
   {
    "key": "a",
    "text": "\\(g(t) = f(1/t)\\)"
   },
   {
    "key": "b",
    "text": "\\(g(t) = f(t)\\)"
   },
   {
    "key": "c",
    "text": "\\(g(t) = 1/f(t)\\)"
   },
   {
    "key": "d",
    "text": "\\(g(t) = f(-t)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(g(t) = f(1/t)\\)",
  "id": "dl-22",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL usuel de \\(1/(1 + x)\\) au voisinage de \\(0,\\) à l'ordre \\(n,\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(1 - x + x^{2} - x^{3} +\\) ... \\(+ (-1)^{n}x^{n} + o(x^{n})\\)"
   },
   {
    "key": "b",
    "text": "\\(1 + x + x^{2} +\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "c",
    "text": "\\(1 - x^{2} + x^{4} -\\) ... \\(+ o(x^{n})\\)"
   },
   {
    "key": "d",
    "text": "\\(-1 + x - x^{2} +\\) ... \\(+ o(x^{n})\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(1 - x + x^{2} - x^{3} +\\) ... \\(+ (-1)^{n}x^{n} + o(x^{n})\\)",
  "id": "dl-23",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "Un développement limité à l'ordre \\(5\\) comporte combien de coefficients \\(a_{0}, a_{1},\\) ..., \\(a_{5}\\) (sans compter le reste) ?",
  "ans": 6,
  "ansText": "\\(6\\)",
  "tol": 0.01,
  "id": "dl-24",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Si \\(f\\) est de classe \\(C^{n}\\) sur \\(I,\\) alors, d'après la proposition du cours, \\(f\\) admet un DL à l'ordre \\(n\\) au voisinage de tout point \\(a\\) de \\(I,\\) de la forme :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x) = \\sum _{k=0}^{n} a_{k}(x - a)^k + o((x - a)^{n})\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x) = f(a) + o(x - a)\\) uniquement"
   },
   {
    "key": "c",
    "text": "\\(f(x) = f'(a)(x - a)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x) = \\sum f(k)(x)/k\\)!"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x) = \\sum _{k=0}^{n} a_{k}(x - a)^k + o((x - a)^{n})\\)",
  "id": "dl-25",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x) = \\ln(1 + x)\\) en \\(a = 0,\\) calculer \\(a_{2} = f''(0) / 2\\)!.",
  "ans": -0.5,
  "ansText": "\\(-0.5\\)",
  "tol": 0.01,
  "id": "dl-26",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "Pour \\(f(x) = \\sin(x)\\) en \\(a = 0,\\) calculer \\(a_{3} = f'''(0) / 3\\)!.",
  "ans": -0.16666666666666666,
  "ansText": "\\(-1/6 \\approx -0,167\\)",
  "tol": 0.01,
  "id": "dl-27",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Les développements limités permettent, entre autres, d'introduire :",
  "opts": [
   {
    "key": "a",
    "text": "le développement de Taylor, réutilisé plus tard dans les algorithmes d'optimisation de fonctions convexes"
   },
   {
    "key": "b",
    "text": "uniquement le calcul d'aires"
   },
   {
    "key": "c",
    "text": "la notion de suite arithmétique"
   },
   {
    "key": "d",
    "text": "la continuité uniforme"
   }
  ],
  "ans": "a",
  "ansText": "le développement de Taylor, réutilisé plus tard dans les algorithmes d'optimisation de fonctions convexes",
  "id": "dl-28",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le DL de \\(f\\) à l'ordre \\(0\\) au voisinage de \\(a\\) (s'il existe) s'écrit simplement :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x) = f(a) + o(1),\\) c'est-à-dire \\(f(x) \\to f(a)\\) quand \\(x \\to a\\) (la continuité en \\(a)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(x) = f'(a)(x - a)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(x) = f(a) + f'(a)(x - a)\\)"
   },
   {
    "key": "d",
    "text": "\\(f(x) = 0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f(x) = f(a) + o(1),\\) c'est-à-dire \\(f(x) \\to f(a)\\) quand \\(x \\to a\\) (la continuité en \\(a)\\)",
  "id": "dl-29",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Dans le reste \\(o((x - a)^{n})\\) d'un DL, que peut-on dire de \\(o((x - a)^{n}) / (x - a)^{n}\\) quand \\(x \\to a\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "sa limite est \\(0\\)"
   },
   {
    "key": "b",
    "text": "sa limite est \\(1\\)"
   },
   {
    "key": "c",
    "text": "il diverge"
   },
   {
    "key": "d",
    "text": "il est constant, égal à \\(1\\)"
   }
  ],
  "ans": "a",
  "ansText": "sa limite est \\(0\\)",
  "id": "dl-30",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le graphique ci-dessous représente \\(f(x) = e^x\\) et sa tangente en \\(0\\). D'après le DL à l'ordre 1 de \\(e^x\\) en \\(0\\) (\\(e^x = 1+x+o(x)\\)), quelle est l'équation de cette tangente ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y = 1+x\\)"
   },
   {
    "key": "b",
    "text": "\\(y = x\\)"
   },
   {
    "key": "c",
    "text": "\\(y = 1+x+x^2/2\\)"
   },
   {
    "key": "d",
    "text": "\\(y=e^x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(y = 1+x\\)",
  "img": "../images/exercices/dl_tangente_exp.png",
  "imgAlt": "Exponentielle et sa tangente en 0",
  "id": "dl-31",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant cette tangente \\(y=1+x\\) comme approximation de \\(e^x\\) au voisinage de \\(0\\), donner la valeur approchée de \\(e^{0,1}\\).",
  "ans": 1.1,
  "ansText": "1.1",
  "tol": 0.01,
  "img": "../images/exercices/dl_tangente_exp.png",
  "imgAlt": "Exponentielle et sa tangente en 0",
  "id": "dl-32",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Le graphique ci-dessous représente \\(\\cos(x)\\) et son DL à l'ordre 2 en \\(0\\), \\(1-x^2/2\\). Sur quelle partie du graphique les deux courbes sont-elles les plus proches ?",
  "opts": [
   {
    "key": "a",
    "text": "au voisinage de \\(x=0\\)"
   },
   {
    "key": "b",
    "text": "loin de \\(0\\), pour \\(|x|\\) grand"
   },
   {
    "key": "c",
    "text": "sur tout l'intervalle représenté, de façon identique"
   },
   {
    "key": "d",
    "text": "il n'y a aucune zone de proximité"
   }
  ],
  "ans": "a",
  "ansText": "au voisinage de \\(x=0\\)",
  "img": "../images/exercices/dl_cos_ordre2.png",
  "imgAlt": "cos(x) et son DL à l'ordre 2",
  "id": "dl-33",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant le DL \\(\\cos(x) = 1 - x^2/2 + o(x^2)\\), donner la valeur approchée de \\(\\cos(0,2)\\).",
  "ans": 0.98,
  "ansText": "0.98",
  "tol": 0.01,
  "img": "../images/exercices/dl_cos_ordre2.png",
  "imgAlt": "cos(x) et son DL à l'ordre 2",
  "id": "dl-34",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En composant les DL usuels, \\(e^{x^2} = 1 + x^2 + o(x^2)\\) au voisinage de \\(0\\). Quel est le coefficient de \\(x^2\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "dl-35",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant \\(\\ln(1+u) = u - u^2/2 + o(u^2)\\) avec \\(u=x^2\\), on obtient \\(\\ln(1+x^2) = x^2 + o(x^2)\\). Quel est le coefficient de \\(x^2\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "dl-36",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Dans le DL à l'ordre 2 de \\(f\\) au voisinage de \\(a\\), \\(f(x) = f(a) + f'(a)(x-a) + \\dfrac{f''(a)}{2}(x-a)^2 + o((x-a)^2)\\), le signe de \\(f''(a)\\) renseigne sur :",
  "opts": [
   {
    "key": "a",
    "text": "la position locale de la courbe par rapport à sa tangente (convexité locale)"
   },
   {
    "key": "b",
    "text": "la valeur de f(a)"
   },
   {
    "key": "c",
    "text": "la périodicité de f"
   },
   {
    "key": "d",
    "text": "la parité de f"
   }
  ],
  "ans": "a",
  "ansText": "la position locale de la courbe par rapport à sa tangente (convexité locale)",
  "id": "dl-37",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "En utilisant \\(e^x = 1+x+x^2/2+o(x^2)\\), calculer \\(\\lim_{x\\to 0} \\dfrac{e^x-1-x}{x^2}\\).",
  "ans": 0.5,
  "ansText": "0.5",
  "tol": 0.01,
  "id": "dl-38",
  "cat": "dl"
 },
 {
  "type": "qcm",
  "q": "Pour calculer \\(\\lim_{x\\to 0} \\dfrac{\\cos(x)-1+x^2/2}{x^4}\\) à l'aide d'un DL de \\(\\cos\\), quel ordre minimal faut-il utiliser ?",
  "opts": [
   {
    "key": "a",
    "text": "l'ordre 4"
   },
   {
    "key": "b",
    "text": "l'ordre 1"
   },
   {
    "key": "c",
    "text": "l'ordre 2"
   },
   {
    "key": "d",
    "text": "aucun DL n'est nécessaire"
   }
  ],
  "ans": "a",
  "ansText": "l'ordre 4",
  "id": "dl-39",
  "cat": "dl"
 },
 {
  "type": "num",
  "q": "Sachant que \\(\\cos(x) = 1 - x^2/2 + x^4/24 + o(x^4)\\), quel est le coefficient de \\(x^4\\) ?",
  "ans": 0.041666666666666664,
  "ansText": "\\(1/24 \\approx 0{,}0417\\)",
  "tol": 0.01,
  "id": "dl-40",
  "cat": "dl"
 }
];
