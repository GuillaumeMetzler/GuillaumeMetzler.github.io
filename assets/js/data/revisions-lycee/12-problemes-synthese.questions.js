/* ================================================================
   Banque de questions — Problèmes de synthèse (48 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "problemes-synthese";
  var questions = [
    {
      id: "problemes-synthese-01",
      type: "qcm",
      q: `Quelle est la forme canonique de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\((x-2)^2-1\\)` },
        { key: "b", text: `\\((x-2)^2+1\\)` },
        { key: "c", text: `\\((x+2)^2-1\\)` },
        { key: "d", text: `\\((x-4)^2+3\\)` }
      ],
      ans: "a",
      ansText: `\\((x-2)^2-1\\)`,
      problem: "pbA"
    },
    {
      id: "problemes-synthese-02",
      type: "num",
      q: `Quelle est la plus grande des deux racines de \\(f\\) ?`,
      ans: 3,
      ansText: `3`,
      tol: 0.01,
      problem: "pbA"
    },
    {
      id: "problemes-synthese-03",
      type: "qcm",
      q: `Quel est l'ensemble des solutions de l'inéquation \\(f(x) \\leqslant 0\\) ?`,
      opts: [
        { key: "a", text: `\\([1\\,;\\,3]\\)` },
        { key: "b", text: `\\(]-\\infty\\,;\\,1] \\cup [3\\,;\\,+\\infty[\\)` },
        { key: "c", text: `\\([-3\\,;\\,-1]\\)` },
        { key: "d", text: `\\(\\mathbb{R}\\)` }
      ],
      ans: "a",
      ansText: `\\([1\\,;\\,3]\\)`,
      problem: "pbA"
    },
    {
      id: "problemes-synthese-04",
      type: "num",
      q: `Calculer le nombre dérivé \\(f'(4)\\).`,
      ans: 4,
      ansText: `4`,
      tol: 0.01,
      problem: "pbA"
    },
    {
      id: "problemes-synthese-05",
      type: "qcm",
      q: `Quelle est la nature de la suite \\((u_n)\\) ?`,
      opts: [
        { key: "a", text: `Géométrique de raison \\(0{,}9\\)` },
        { key: "b", text: `Arithmétique de raison \\(0{,}9\\)` },
        { key: "c", text: `Géométrique de raison \\(-0{,}1\\)` },
        { key: "d", text: `Arithmétique de raison \\(-200\\)` }
      ],
      ans: "a",
      ansText: `Géométrique de raison \\(0{,}9\\)`,
      problem: "pbB"
    },
    {
      id: "problemes-synthese-06",
      type: "num",
      q: `Calculer \\(u_2\\) (nombre d'individus après 2 semaines), arrondi à l'unité.`,
      ans: 1620,
      ansText: `1620`,
      tol: 1,
      problem: "pbB"
    },
    {
      id: "problemes-synthese-07",
      type: "num",
      q: `Quelle est la limite de la suite \\((u_n)\\) quand \\(n \\to +\\infty\\) ?`,
      ans: 0,
      ansText: `0`,
      tol: 0.01,
      problem: "pbB"
    },
    {
      id: "problemes-synthese-08",
      type: "qcm",
      q: `Quelle écriture est équivalente à \\(u_n = 2000 \\times 0{,}9^n\\) ?`,
      opts: [
        { key: "a", text: `\\(2000\\,e^{\\,n\\ln(0,9)}\\)` },
        { key: "b", text: `\\(2000\\,e^{\\,0,9n}\\)` },
        { key: "c", text: `\\(2000\\,e^{-n}\\)` },
        { key: "d", text: `\\(2000\\,(\\ln 0{,}9)^n\\)` }
      ],
      ans: "a",
      ansText: `\\(2000\\,e^{\\,n\\ln(0,9)}\\)`,
      problem: "pbB"
    },
    {
      id: "problemes-synthese-09",
      type: "qcm",
      q: `Quelles sont les deux solutions de \\(\\cos(x)=\\dfrac12\\) sur \\([0\\,;\\,2\\pi]\\) ?`,
      opts: [
        { key: "a", text: `\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{5\\pi}{3}\\)` },
        { key: "b", text: `\\(\\dfrac{\\pi}{6}\\) et \\(\\dfrac{11\\pi}{6}\\)` },
        { key: "c", text: `\\(\\dfrac{2\\pi}{3}\\) et \\(\\dfrac{4\\pi}{3}\\)` },
        { key: "d", text: `\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{2\\pi}{3}\\)` }
      ],
      ans: "a",
      ansText: `\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{5\\pi}{3}\\)`,
      problem: "pbC"
    },
    {
      id: "problemes-synthese-10",
      type: "qcm",
      q: `Quel est l'ensemble des solutions de \\(\\cos(x)\\geqslant\\dfrac12\\) sur \\([0\\,;\\,2\\pi]\\) ?`,
      opts: [
        { key: "a", text: `\\([0\\,;\\,\\frac{\\pi}{3}] \\cup [\\frac{5\\pi}{3}\\,;\\,2\\pi]\\)` },
        { key: "b", text: `\\([\\frac{\\pi}{3}\\,;\\,\\frac{5\\pi}{3}]\\)` },
        { key: "c", text: `\\([0\\,;\\,\\frac{\\pi}{3}]\\)` },
        { key: "d", text: `\\(]\\frac{\\pi}{3}\\,;\\,\\frac{5\\pi}{3}[\\)` }
      ],
      ans: "a",
      ansText: `\\([0\\,;\\,\\frac{\\pi}{3}] \\cup [\\frac{5\\pi}{3}\\,;\\,2\\pi]\\)`,
      problem: "pbC"
    },
    {
      id: "problemes-synthese-11",
      type: "num",
      q: `Sur le cercle trigonométrique, donner une valeur approchée à \\(0{,}01\\) près de \\(\\sin\\!\\left(\\dfrac{\\pi}{3}\\right)\\).`,
      ans: 0.8660254,
      ansText: `\\(\\frac{\\sqrt3}{2}\\approx0{,}87\\)`,
      tol: 0.01,
      problem: "pbC"
    },
    {
      id: "problemes-synthese-12",
      type: "qcm",
      q: `Sur l'intervalle \\([0\\,;\\,\\pi]\\), la fonction cosinus est ...`,
      opts: [
        { key: "a", text: `strictement décroissante` },
        { key: "b", text: `strictement croissante` },
        { key: "c", text: `constante` },
        { key: "d", text: `ni croissante, ni décroissante` }
      ],
      ans: "a",
      ansText: `strictement décroissante`,
      problem: "pbC"
    },
    {
      id: "problemes-synthese-13",
      type: "qcm",
      q: `La proposition \\(P\\) : « \\(\\forall x \\in \\mathbb{R},\\ x^2 \\geqslant x\\) » est-elle vraie ou fausse ?`,
      opts: [
        { key: "a", text: `Fausse : il existe un contre-exemple` },
        { key: "b", text: `Vraie : démontrée pour tout réel` },
        { key: "c", text: `On ne peut pas savoir sans calculatrice` },
        { key: "d", text: `Vraie uniquement pour \\(x\\geqslant0\\)` }
      ],
      ans: "a",
      ansText: `Fausse : il existe un contre-exemple`,
      problem: "pbD"
    },
    {
      id: "problemes-synthese-14",
      type: "qcm",
      q: `Parmi ces valeurs, laquelle est un contre-exemple à \\(P\\) (c'est-à-dire vérifie \\(x^2&lt;x\\)) ?`,
      opts: [
        { key: "a", text: `\\(0{,}5\\)` },
        { key: "b", text: `2` },
        { key: "c", text: `-2` },
        { key: "d", text: `1` }
      ],
      ans: "a",
      ansText: `\\(0{,}5\\)`,
      problem: "pbD"
    },
    {
      id: "problemes-synthese-15",
      type: "qcm",
      q: `Quelle est la négation correcte de \\(Q\\) : « \\(\\exists x \\in \\mathbb{R},\\ x^2+1=0\\) » ?`,
      opts: [
        { key: "a", text: `\\(\\forall x \\in \\mathbb{R},\\ x^2+1\\neq0\\)` },
        { key: "b", text: `\\(\\exists x \\in \\mathbb{R},\\ x^2+1\\neq0\\)` },
        { key: "c", text: `\\(\\forall x \\in \\mathbb{R},\\ x^2+1=0\\)` },
        { key: "d", text: `\\(\\exists x \\in \\mathbb{R},\\ x^2+1&lt;0\\)` }
      ],
      ans: "a",
      ansText: `\\(\\forall x \\in \\mathbb{R},\\ x^2+1\\neq0\\)`,
      problem: "pbD"
    },
    {
      id: "problemes-synthese-16",
      type: "num",
      q: `Quel est le plus petit entier strictement positif vérifiant \\(x^2-1\\geqslant0\\) ?`,
      ans: 1,
      ansText: `1`,
      tol: 0.01,
      problem: "pbD"
    },
    {
      id: "problemes-synthese-17",
      type: "qcm",
      q: `Quelle est la nature de la suite \\((p_n)\\) ?`,
      opts: [
        { key: "a", text: `Géométrique de raison \\(0{,}95\\)` },
        { key: "b", text: `Arithmétique de raison \\(0{,}95\\)` },
        { key: "c", text: `Géométrique de raison \\(0{,}05\\)` },
        { key: "d", text: `Ni arithmétique, ni géométrique` }
      ],
      ans: "a",
      ansText: `Géométrique de raison \\(0{,}95\\)`,
      problem: "pbE"
    },
    {
      id: "problemes-synthese-18",
      type: "num",
      q: `Calculer \\(p_3\\), la probabilité que la machine fonctionne encore après 3 jours (arrondir à \\(0{,}001\\) près).`,
      ans: 0.857375,
      ansText: `\\(\\approx0{,}857\\)`,
      tol: 0.001,
      problem: "pbE"
    },
    {
      id: "problemes-synthese-19",
      type: "num",
      q: `Quelle est la limite de la suite \\((p_n)\\) quand \\(n \\to +\\infty\\) ?`,
      ans: 0,
      ansText: `0`,
      tol: 0.01,
      problem: "pbE"
    },
    {
      id: "problemes-synthese-20",
      type: "num",
      q: `À l'aide d'une résolution numérique (ou d'un algorithme), déterminer le plus petit entier \\(n\\) tel que \\(p_n &lt; 0{,}5\\) (probabilité de panne supérieure à \\(50\\,\\%\\)).`,
      ans: 14,
      ansText: `14`,
      tol: 0.01,
      problem: "pbE"
    },
    {
      id: "problemes-synthese-21",
      type: "qcm",
      q: `Quelle est la limite de \\(f\\) en \\(+\\infty\\) (croissances comparées) ?`,
      opts: [
        { key: "a", text: `\\(+\\infty\\)` },
        { key: "b", text: `0` },
        { key: "c", text: `1` },
        { key: "d", text: `Elle n'existe pas` }
      ],
      ans: "b",
      ansText: `0`,
      problem: "pbF"
    },
    {
      id: "problemes-synthese-22",
      type: "num",
      q: `On admet que \\(f'(x) = (1-x)e^{-x}\\). En quelle abscisse \\(f\\) admet-elle un maximum local sur \\([0\\,;\\,+\\infty[\\) ?`,
      ans: 1,
      ansText: `1`,
      tol: 0.01,
      problem: "pbF"
    },
    {
      id: "problemes-synthese-23",
      type: "num",
      q: `Calculer la valeur exacte de ce maximum \\(f(1)\\) (donner une valeur approchée à \\(0{,}01\\) près).`,
      ans: 0.367879,
      ansText: `\\(\\frac{1}{e}\\approx0{,}37\\)`,
      tol: 0.01,
      problem: "pbF"
    },
    {
      id: "problemes-synthese-24",
      type: "num",
      q: `Calculer \\(\\displaystyle\\int_0^2 x\\,e^{-x}\\,dx\\) (aire sous \\(\\mathcal{C}_f\\) entre 0 et 2), arrondi à \\(0{,}01\\) près.`,
      ans: 0.593994,
      ansText: `\\(1-3e^{-2}\\approx0{,}59\\)`,
      tol: 0.01,
      problem: "pbF"
    },
    {
      id: "problemes-synthese-25",
      type: "qcm",
      q: `Quelle loi suit la variable aléatoire \\(X\\) ?`,
      opts: [
        { key: "a", text: `\\(\\mathcal{B}(8\\,;\\,0{,}25)\\)` },
        { key: "b", text: `\\(\\mathcal{B}(25\\,;\\,0{,}8)\\)` },
        { key: "c", text: `\\(\\mathcal{B}(8\\,;\\,0{,}75)\\)` },
        { key: "d", text: `Ce n'est pas une loi binomiale` }
      ],
      ans: "a",
      ansText: `\\(\\mathcal{B}(8\\,;\\,0{,}25)\\)`,
      problem: "pbG"
    },
    {
      id: "problemes-synthese-26",
      type: "num",
      q: `Calculer \\(P(X=2)\\) (arrondir à \\(0{,}001\\) près).`,
      ans: 0.311462,
      ansText: `\\(\\approx0{,}311\\)`,
      tol: 0.001,
      problem: "pbG"
    },
    {
      id: "problemes-synthese-27",
      type: "num",
      q: `Calculer l'espérance \\(E(X)\\).`,
      ans: 2,
      ansText: `2`,
      tol: 0.01,
      problem: "pbG"
    },
    {
      id: "problemes-synthese-28",
      type: "num",
      q: `Calculer \\(P(X\\geqslant 1)\\) (arrondir à \\(0{,}001\\) près).`,
      ans: 0.899887,
      ansText: `\\(1-0{,}75^8\\approx0{,}900\\)`,
      tol: 0.001,
      problem: "pbG"
    },
    {
      id: "problemes-synthese-29",
      type: "num",
      q: `Calculer la fréquence observée \\(f\\) de réponses favorables dans l'échantillon.`,
      ans: 0.45,
      ansText: `0,45`,
      tol: 0.01,
      problem: "pbH"
    },
    {
      id: "problemes-synthese-30",
      type: "num",
      q: `Calculer la borne inférieure de l'intervalle de fluctuation asymptotique au seuil de \\(95\\,\\%\\) (arrondir à \\(0{,}001\\) près).`,
      ans: 0.430704,
      ansText: `\\(\\approx0{,}431\\)`,
      tol: 0.001,
      problem: "pbH"
    },
    {
      id: "problemes-synthese-31",
      type: "num",
      q: `Calculer la borne supérieure de cet intervalle de fluctuation (arrondir à \\(0{,}001\\) près).`,
      ans: 0.569296,
      ansText: `\\(\\approx0{,}569\\)`,
      tol: 0.001,
      problem: "pbH"
    },
    {
      id: "problemes-synthese-32",
      type: "qcm",
      q: `Peut-on considérer, au seuil de \\(95\\,\\%\\), que le résultat observé est cohérent avec \\(p=0{,}5\\) ?`,
      opts: [
        { key: "a", text: `Oui, car \\(f\\) appartient à l'intervalle de fluctuation` },
        { key: "b", text: `Non, car \\(f\\) n'appartient pas à l'intervalle de fluctuation` },
        { key: "c", text: `On ne peut rien conclure sans connaître \\(n\\)` },
        { key: "d", text: `Non, car \\(f \\neq p\\)` }
      ],
      ans: "a",
      ansText: `Oui, car \\(f\\) appartient à l'intervalle de fluctuation`,
      problem: "pbH"
    },
    {
      id: "problemes-synthese-33",
      type: "qcm",
      q: `On pose \\(v_n = u_n - 250\\) pour tout entier \\(n\\). Quelle est la nature de la suite \\((v_n)\\) ?`,
      opts: [
        { key: "a", text: `Géométrique de raison \\(0{,}8\\)` },
        { key: "b", text: `Arithmétique de raison \\(0{,}8\\)` },
        { key: "c", text: `Géométrique de raison \\(50\\)` },
        { key: "d", text: `Ni arithmétique, ni géométrique` }
      ],
      ans: "a",
      ansText: `Géométrique de raison \\(0{,}8\\)`,
      problem: "pbI"
    },
    {
      id: "problemes-synthese-34",
      type: "num",
      q: `Calculer \\(u_2\\).`,
      ans: 218,
      ansText: `218`,
      tol: 0.01,
      problem: "pbI"
    },
    {
      id: "problemes-synthese-35",
      type: "num",
      q: `Déterminer la limite de la suite \\((u_n)\\) quand \\(n \\to +\\infty\\).`,
      ans: 250,
      ansText: `250`,
      tol: 0.01,
      problem: "pbI"
    },
    {
      id: "problemes-synthese-36",
      type: "num",
      q: `À l'aide d'une résolution numérique, déterminer le plus petit entier \\(n\\) tel que \\(u_n &gt; 249\\).`,
      ans: 18,
      ansText: `18`,
      tol: 0.01,
      problem: "pbI"
    },
    {
      id: "problemes-synthese-37",
      type: "qcm",
      q: `Quelle est l'expression de \\(f'(x)\\) ?`,
      opts: [
        { key: "a", text: `\\(-x\\,e^{-x}\\)` },
        { key: "b", text: `\\((1-x)e^{-x}\\)` },
        { key: "c", text: `\\(e^{-x}\\)` },
        { key: "d", text: `\\(-e^{-x}\\)` }
      ],
      ans: "a",
      ansText: `\\(-x\\,e^{-x}\\)`,
      problem: "pbJ"
    },
    {
      id: "problemes-synthese-38",
      type: "qcm",
      q: `Quel est le sens de variation de \\(f\\) sur \\([0\\,;\\,+\\infty[\\) ?`,
      opts: [
        { key: "a", text: `Croissante puis décroissante` },
        { key: "b", text: `Décroissante sur \\([0\\,;\\,+\\infty[\\)` },
        { key: "c", text: `Croissante sur \\([0\\,;\\,+\\infty[\\)` },
        { key: "d", text: `Constante` }
      ],
      ans: "b",
      ansText: `Décroissante sur \\([0\\,;\\,+\\infty[\\)`,
      problem: "pbJ"
    },
    {
      id: "problemes-synthese-39",
      type: "num",
      q: `Déterminer la limite de \\(f\\) en \\(+\\infty\\).`,
      ans: 0,
      ansText: `0`,
      tol: 0.01,
      problem: "pbJ"
    },
    {
      id: "problemes-synthese-40",
      type: "qcm",
      q: `Quelle est l'équation de la tangente à \\(\\mathcal{C}_f\\) au point d'abscisse \\(0\\) ?`,
      opts: [
        { key: "a", text: `\\(y = 1\\)` },
        { key: "b", text: `\\(y = x+1\\)` },
        { key: "c", text: `\\(y = -x+1\\)` },
        { key: "d", text: `\\(y = 0\\)` }
      ],
      ans: "a",
      ansText: `\\(y = 1\\)`,
      problem: "pbJ"
    },
    {
      id: "problemes-synthese-41",
      type: "num",
      q: `Calculer \\(P(T \\cap M)\\).`,
      ans: 0.019,
      ansText: `0,019`,
      tol: 0.001,
      problem: "pbK"
    },
    {
      id: "problemes-synthese-42",
      type: "num",
      q: `À l'aide de la formule des probabilités totales, calculer \\(P(T)\\).`,
      ans: 0.0484,
      ansText: `0,0484`,
      tol: 0.001,
      problem: "pbK"
    },
    {
      id: "problemes-synthese-43",
      type: "num",
      q: `En déduire \\(P_T(M)\\), la probabilité qu'une personne testée positive soit réellement malade (arrondir à \\(0{,}001\\) près).`,
      ans: 0.392562,
      ansText: `\\(\\approx0{,}393\\)`,
      tol: 0.001,
      problem: "pbK"
    },
    {
      id: "problemes-synthese-44",
      type: "qcm",
      q: `Que peut-on conclure de la valeur de \\(P_T(M)\\) ?`,
      opts: [
        { key: "a", text: `À peine plus d'une personne positive sur trois est réellement malade` },
        { key: "b", text: `Un test positif garantit que la personne est malade` },
        { key: "c", text: `Le test est positif chez 95&nbsp;% des personnes testées` },
        { key: "d", text: `La maladie touche 39&nbsp;% de la population` }
      ],
      ans: "a",
      ansText: `À peine plus d'une personne positive sur trois est réellement malade`,
      problem: "pbK"
    },
    {
      id: "problemes-synthese-45",
      type: "qcm",
      q: `Pour démontrer par récurrence que, pour tout entier \\(n\\), \\(0 \\leqslant u_n \\leqslant 3\\), quelle est l'initialisation correcte ?`,
      opts: [
        { key: "a", text: `\\(u_0 = 0\\), donc \\(0 \\leqslant u_0 \\leqslant 3\\) : la propriété est vraie au rang 0` },
        { key: "b", text: `\\(u_1 = \\sqrt{3}\\), donc la propriété est vraie au rang 1` },
        { key: "c", text: `\\(u_0 = 3\\)` },
        { key: "d", text: `Il n'y a pas besoin d'initialisation pour une suite définie par récurrence` }
      ],
      ans: "a",
      ansText: `\\(u_0 = 0\\), donc \\(0 \\leqslant u_0 \\leqslant 3\\) : la propriété est vraie au rang 0`,
      problem: "pbL"
    },
    {
      id: "problemes-synthese-46",
      type: "num",
      q: `Calculer \\(u_1\\) (arrondir à \\(0{,}01\\) près).`,
      ans: 1.732,
      ansText: `\\(\\sqrt{3}\\approx1{,}732\\)`,
      tol: 0.01,
      problem: "pbL"
    },
    {
      id: "problemes-synthese-47",
      type: "qcm",
      q: `Dans l'hérédité, en supposant \\(0 \\leqslant u_n \\leqslant 3\\), comment montre-t-on que \\(u_{n+1} \\leqslant 3\\) ?`,
      opts: [
        { key: "a", text: `\\(u_n \\leqslant 3 \\Rightarrow 2u_n+3 \\leqslant 9 \\Rightarrow u_{n+1}=\\sqrt{2u_n+3} \\leqslant \\sqrt{9}=3\\)` },
        { key: "b", text: `\\(u_{n+1} = 2u_n+3 \\leqslant 3\\)` },
        { key: "c", text: `On ne peut pas le montrer sans calculatrice` },
        { key: "d", text: `\\(u_{n+1} \\leqslant u_n\\) est toujours vrai` }
      ],
      ans: "a",
      ansText: `\\(u_n \\leqslant 3 \\Rightarrow 2u_n+3 \\leqslant 9 \\Rightarrow u_{n+1}=\\sqrt{2u_n+3} \\leqslant \\sqrt{9}=3\\)`,
      problem: "pbL"
    },
    {
      id: "problemes-synthese-48",
      type: "num",
      q: `La suite \\((u_n)\\) étant croissante et majorée par \\(3\\), elle converge vers une limite \\(\\ell\\) vérifiant \\(\\ell = \\sqrt{2\\ell+3}\\). Déterminer \\(\\ell\\).`,
      ans: 3,
      ansText: `3`,
      tol: 0.01,
      problem: "pbL"
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
