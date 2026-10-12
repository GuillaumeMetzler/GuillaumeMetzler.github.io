/* ================================================================
   Banque de questions — Probabilités (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "probabilites-lycee";
  var questions = [
    {
      id: "probabilites-lycee-01",
      type: "qcm",
      q: `Dans le vocabulaire des probabilités, qu'appelle-t-on l'univers \\(\\Omega\\) d'une expérience aléatoire ?`,
      opts: [
        { key: "a", text: `L'ensemble de toutes les issues possibles de l'expérience` },
        { key: "b", text: `Un sous-ensemble particulier de résultats favorables` },
        { key: "c", text: `La probabilité totale de l'expérience, toujours égale à 1` },
        { key: "d", text: `Le résultat obtenu lors d'une seule réalisation de l'expérience` }
      ],
      ans: "a",
      ansText: `L'univers \\(\\Omega\\) est l'ensemble de toutes les issues possibles de l'expérience aléatoire.`
    },
    {
      id: "probabilites-lycee-02",
      type: "qcm",
      q: `On lance un dé équilibré à 6 faces et on considère l'événement \\(A\\) : « obtenir un nombre pair ». Quel est l'événement contraire \\(\\overline{A}\\) ?`,
      opts: [
        { key: "a", text: `« obtenir un multiple de 3 »` },
        { key: "b", text: `« obtenir un nombre impair »` },
        { key: "c", text: `« obtenir un nombre premier »` },
        { key: "d", text: `« obtenir 1 ou 6 »` }
      ],
      ans: "b",
      ansText: `\\(\\overline{A}\\) rassemble toutes les issues qui ne sont pas dans \\(A\\) : les nombres impairs \\(\\{1;3;5\\}\\).`
    },
    {
      id: "probabilites-lycee-03",
      type: "qcm",
      q: `On lance un dé équilibré à 6 faces. Quelle est la probabilité de l'événement \\(A\\) : « obtenir un multiple de 3 » ?`,
      opts: [
        { key: "a", text: `\\(\\dfrac{1}{6}\\)` },
        { key: "b", text: `\\(\\dfrac{1}{2}\\)` },
        { key: "c", text: `\\(\\dfrac{1}{3}\\)` },
        { key: "d", text: `\\(\\dfrac{2}{3}\\)` }
      ],
      ans: "c",
      ansText: `Issues favorables : \\(\\{3;6\\}\\), donc \\(P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}\\).`
    },
    {
      id: "probabilites-lycee-04",
      type: "num",
      q: `Une urne contient 4 boules rouges, 3 boules bleues et 5 boules vertes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité d'obtenir une boule bleue ? (donner le résultat sous forme décimale)`,
      ans: 0.25,
      ansText: `\\(P(\\text{bleue}) = \\dfrac{3}{12} = \\dfrac{1}{4} = 0{,}25\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-05",
      type: "qcm",
      q: `Deux événements \\(A\\) et \\(B\\) sont dits incompatibles lorsque :`,
      opts: [
        { key: "a", text: `\\(P(A) = P(B)\\)` },
        { key: "b", text: `\\(A \\cup B = \\Omega\\)` },
        { key: "c", text: `\\(P(A \\cap B) = P(A) \\times P(B)\\)` },
        { key: "d", text: `\\(A \\cap B = \\varnothing\\)` }
      ],
      ans: "d",
      ansText: `\\(A\\) et \\(B\\) sont incompatibles si et seulement si \\(A \\cap B = \\varnothing\\) : ils ne peuvent pas se réaliser simultanément.`
    },
    {
      id: "probabilites-lycee-06",
      type: "qcm",
      q: `Pour deux événements \\(A\\) et \\(B\\) d'un même univers, quelle est la formule correcte donnant \\(P(A \\cup B)\\) ?`,
      opts: [
        { key: "a", text: `\\(P(A)+P(B)-P(A\\cap B)\\)` },
        { key: "b", text: `\\(P(A)+P(B)\\)` },
        { key: "c", text: `\\(P(A)\\times P(B)\\)` },
        { key: "d", text: `\\(P(A)+P(B)+P(A\\cap B)\\)` }
      ],
      ans: "a",
      ansText: `\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\), pour éviter de compter deux fois les issues communes.`
    },
    {
      id: "probabilites-lycee-07",
      type: "num",
      q: `On donne \\(P(A)=0{,}6\\), \\(P(B)=0{,}5\\) et \\(P(A\\cap B)=0{,}3\\). Calculer \\(P(A\\cup B)\\).`,
      ans: 0.8,
      ansText: `\\(P(A\\cup B) = 0{,}6+0{,}5-0{,}3 = 0{,}8\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-08",
      type: "qcm",
      q: `Pour deux événements \\(A\\) et \\(B\\) avec \\(P(A) \\neq 0\\), la probabilité conditionnelle \\(P_A(B)\\) (probabilité de \\(B\\) sachant \\(A\\)) est définie par :`,
      opts: [
        { key: "a", text: `\\(P_A(B) = \\dfrac{P(B)}{P(A)}\\)` },
        { key: "b", text: `\\(P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}\\)` },
        { key: "c", text: `\\(P_A(B) = P(A)\\times P(B)\\)` },
        { key: "d", text: `\\(P_A(B) = \\dfrac{P(A\\cap B)}{P(B)}\\)` }
      ],
      ans: "b",
      ansText: `\\(P_A(B) = \\dfrac{P(A\\cap B)}{P(A)}\\), avec \\(P(A) \\neq 0\\).`
    },
    {
      id: "probabilites-lycee-09",
      type: "num",
      q: `On donne \\(P(A)=0{,}4\\) et \\(P(A\\cap B)=0{,}12\\). Calculer \\(P_A(B)\\).`,
      ans: 0.3,
      ansText: `\\(P_A(B) = \\dfrac{0{,}12}{0{,}4} = 0{,}3\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-10",
      type: "qcm",
      q: `Quelle est la formule des probabilités composées, pour \\(P(A)\\neq 0\\) ?`,
      opts: [
        { key: "a", text: `\\(P(A\\cap B) = P(A) + P_A(B)\\)` },
        { key: "b", text: `\\(P(A\\cap B) = \\dfrac{P(A)}{P_A(B)}\\)` },
        { key: "c", text: `\\(P(A\\cap B) = P(A) \\times P_A(B)\\)` },
        { key: "d", text: `\\(P(A\\cap B) = P_A(B) - P(A)\\)` }
      ],
      ans: "c",
      ansText: `\\(P(A\\cap B) = P(A) \\times P_A(B)\\) découle directement de la définition de \\(P_A(B)\\).`
    },
    {
      id: "probabilites-lycee-11",
      type: "num",
      q: `Un arbre pondéré représente une expérience en deux étapes. On lit sur l'arbre \\(P(A)=0{,}7\\) puis, sur la branche suivante issue de \\(A\\), \\(P_A(B)=0{,}4\\). Calculer \\(P(A\\cap B)\\).`,
      ans: 0.28,
      ansText: `\\(P(A\\cap B) = P(A) \\times P_A(B) = 0{,}7 \\times 0{,}4 = 0{,}28\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-12",
      type: "qcm",
      q: `Sur un arbre pondéré correctement construit, la somme des probabilités inscrites sur les branches issues d'un même nœud est toujours égale à :`,
      opts: [
        { key: "a", text: `0` },
        { key: "b", text: `0,5` },
        { key: "c", text: `cela dépend de l'expérience` },
        { key: "d", text: `1` }
      ],
      ans: "d",
      ansText: `La somme des probabilités des branches issues d'un même nœud vaut toujours \\(1\\) (loi des probabilités totales sur ce nœud).`
    },
    {
      id: "probabilites-lycee-13",
      type: "num",
      q: `Un univers est partagé par les événements \\(A_1\\) et \\(A_2\\) (partition de \\(\\Omega\\)), avec \\(P(A_1)=0{,}3\\) et \\(P(A_2)=0{,}7\\). On donne \\(P_{A_1}(B)=0{,}2\\) et \\(P_{A_2}(B)=0{,}5\\). Calculer \\(P(B)\\) à l'aide de la formule des probabilités totales.`,
      ans: 0.41,
      ansText: `\\(P(B) = 0{,}3\\times0{,}2 + 0{,}7\\times0{,}5 = 0{,}06+0{,}35 = 0{,}41\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-14",
      type: "qcm",
      q: `Deux événements \\(A\\) et \\(B\\) de probabilités non nulles sont dits indépendants lorsque :`,
      opts: [
        { key: "a", text: `\\(P(A\\cap B) = P(A)\\times P(B)\\)` },
        { key: "b", text: `\\(A \\cap B = \\varnothing\\)` },
        { key: "c", text: `\\(P_A(B) = P_B(A)\\)` },
        { key: "d", text: `\\(A \\cup B = \\Omega\\)` }
      ],
      ans: "a",
      ansText: `\\(A\\) et \\(B\\) sont indépendants si et seulement si \\(P(A\\cap B) = P(A)\\times P(B)\\).`
    },
    {
      id: "probabilites-lycee-15",
      type: "qcm",
      q: `Une variable aléatoire \\(X\\) prend les valeurs \\(-1\\), \\(0\\) et \\(2\\) avec les probabilités respectives \\(0{,}2\\), \\(x\\) et \\(0{,}3\\). Quelle est la valeur de \\(x\\) ?`,
      opts: [
        { key: "a", text: `0,3` },
        { key: "b", text: `0,5` },
        { key: "c", text: `0,6` },
        { key: "d", text: `1` }
      ],
      ans: "b",
      ansText: `La somme des probabilités vaut \\(1\\) : \\(x = 1-0{,}2-0{,}3 = 0{,}5\\).`
    },
    {
      id: "probabilites-lycee-16",
      type: "num",
      q: `Une variable aléatoire \\(X\\) suit la loi suivante : \\(P(X=-2)=0{,}3\\), \\(P(X=1)=0{,}5\\), \\(P(X=3)=0{,}2\\). Calculer l'espérance \\(E(X)\\).`,
      ans: 0.5,
      ansText: `\\(E(X) = -2\\times0{,}3 + 1\\times0{,}5 + 3\\times0{,}2 = 0{,}5\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-17",
      type: "num",
      q: `Avec la même loi qu'à la question précédente (\\(P(X=-2)=0{,}3\\), \\(P(X=1)=0{,}5\\), \\(P(X=3)=0{,}2\\), et \\(E(X)=0{,}5\\)), calculer la variance \\(V(X)\\) à l'aide de la formule \\(V(X)=E(X^2)-[E(X)]^2\\).`,
      ans: 3.25,
      ansText: `\\(E(X^2) = 4\\times0{,}3+1\\times0{,}5+9\\times0{,}2 = 3{,}5\\) ; \\(V(X) = 3{,}5-0{,}5^2 = 3{,}25\\)`,
      tol: 0.01
    },
    {
      id: "probabilites-lycee-18",
      type: "qcm",
      q: `Une urne contient 3 boules rouges et 7 boules bleues. On tire une boule, on note sa couleur, on la remet dans l'urne, et on répète cette expérience 8 fois de façon identique et indépendante. On note \\(X\\) le nombre de boules rouges obtenues. Quelle est la loi suivie par \\(X\\) ?`,
      opts: [
        { key: "a", text: `\\(\\mathcal{B}(8\\,;\\,0{,}7)\\)` },
        { key: "b", text: `\\(\\mathcal{B}(10\\,;\\,0{,}3)\\)` },
        { key: "c", text: `\\(\\mathcal{B}(8\\,;\\,0{,}3)\\)` },
        { key: "d", text: `\\(X\\) ne suit pas une loi binomiale` }
      ],
      ans: "c",
      ansText: `Tirages avec remise, identiques et indépendants : \\(X \\sim \\mathcal{B}(8\\,;\\,0{,}3)\\) car \\(P(\\text{rouge}) = \\dfrac{3}{10} = 0{,}3\\).`
    },
    {
      id: "probabilites-lycee-19",
      type: "qcm",
      q: `Toujours avec cette urne (3 rouges, 7 bleues), on effectue maintenant 8 tirages SANS remise et on note à nouveau \\(X\\) le nombre de boules rouges obtenues. La variable \\(X\\) suit-elle une loi binomiale ?`,
      opts: [
        { key: "a", text: `Oui, \\(\\mathcal{B}(8\\,;\\,0{,}3)\\), comme avec remise` },
        { key: "b", text: `Oui, mais avec les paramètres \\(\\mathcal{B}(8\\,;\\,0{,}7)\\)` },
        { key: "c", text: `Non, car il n'y a pas assez de boules dans l'urne pour faire 8 tirages` },
        { key: "d", text: `Non, car les tirages ne sont plus indépendants : la probabilité de tirer une boule rouge change à chaque tirage` }
      ],
      ans: "d",
      ansText: `Sans remise, la composition de l'urne change à chaque tirage : les répétitions ne sont plus indépendantes ni identiques, donc \\(X\\) ne suit pas une loi binomiale.`
    },
    {
      id: "probabilites-lycee-20",
      type: "num",
      q: `Une variable aléatoire \\(X\\) suit la loi binomiale \\(\\mathcal{B}(5\\,;\\,0{,}3)\\). Calculer \\(P(X=2)\\) (arrondir à \\(0{,}0001\\) près).`,
      ans: 0.3087,
      ansText: `\\(P(X=2) = \\dbinom{5}{2}\\times0{,}3^2\\times0{,}7^3 = 10\\times0{,}09\\times0{,}343 = 0{,}3087\\)`,
      tol: 0.001
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
