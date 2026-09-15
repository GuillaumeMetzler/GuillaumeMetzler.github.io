/* ================================================================
   Banque de questions — Statistiques (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "statistiques-lycee";
  var questions = [
    {
      id: "statistiques-lycee-01",
      type: "qcm",
      q: `Dans une étude statistique portant sur les 30 élèves d'une classe, on s'intéresse à leur groupe sanguin. Comment appelle-t-on l'ensemble des 30 élèves ?`,
      opts: [
        { key: "a", text: `Le caractère` },
        { key: "b", text: `La population` },
        { key: "c", text: `L'effectif` },
        { key: "d", text: `L'échantillon` }
      ],
      ans: "b",
      ansText: `L'ensemble des individus étudiés (ici les 30 élèves) est la population. Le \\(\\ll\\) groupe sanguin \\(\\gg\\) est le caractère étudié.`
    },
    {
      id: "statistiques-lycee-02",
      type: "qcm",
      q: `Une valeur \\( x_i \\) a un effectif \\( n_i \\) dans une population d'effectif total \\( N \\). Comment calcule-t-on sa fréquence \\( f_i \\) ?`,
      opts: [
        { key: "a", text: `\\( f_i = n_i \\times N \\)` },
        { key: "b", text: `\\( f_i = N - n_i \\)` },
        { key: "c", text: `\\( f_i = N/n_i \\)` },
        { key: "d", text: `\\( f_i = n_i/N \\)` }
      ],
      ans: "d",
      ansText: `La fréquence est le quotient de l'effectif de la valeur par l'effectif total : \\( f_i = n_i/N \\).`
    },
    {
      id: "statistiques-lycee-03",
      type: "num",
      q: `Dans un lycée de 48 élèves d'une classe, 12 élèves pratiquent le tennis. Quelle est la fréquence (en %) d'élèves pratiquant le tennis dans cette classe ?`,
      ans: 25,
      ansText: `\\( f = \\dfrac{12}{48} = 0{,}25 = 25\\% \\)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-04",
      type: "num",
      q: `Un élève obtient les notes 12 (coefficient 2), 15 (coefficient 3) et 9 (coefficient 1). Quelle est sa moyenne pondérée ?`,
      ans: 13,
      ansText: `\\( \\bar{x} = \\dfrac{12\\times2+15\\times3+9\\times1}{2+3+1} = \\dfrac{78}{6} = 13 \\)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-05",
      type: "qcm",
      q: `Quelle affirmation définit correctement la médiane \\( Me \\) d'une série statistique rangée par ordre croissant ?`,
      opts: [
        { key: "a", text: `C'est la valeur qui apparaît le plus souvent dans la série` },
        { key: "b", text: `C'est la moyenne arithmétique de toutes les valeurs de la série` },
        { key: "c", text: `C'est une valeur qui partage la série en deux groupes d'effectifs égaux` },
        { key: "d", text: `C'est la différence entre la plus grande et la plus petite valeur` }
      ],
      ans: "c",
      ansText: `La médiane partage la série ordonnée en deux parties d'effectifs égaux (au moins 50 % des valeurs de chaque côté).`
    },
    {
      id: "statistiques-lycee-06",
      type: "num",
      q: `Voici les temps (en minutes) de 8 coureurs : 9, 7, 12, 4, 8, 10, 7, 6. Quelle est la médiane de cette série ?`,
      ans: 7.5,
      ansText: `Série triée : 4, 6, 7, 7, 8, 9, 10, 12. \\( N=8 \\) est pair, \\( Me = \\dfrac{7+8}{2} = 7{,}5 \\)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-07",
      type: "qcm",
      q: `Une série ordonnée par ordre croissant a un effectif total \\( N \\). Comment détermine-t-on le rang de \\( Q_1 \\), le premier quartile ?`,
      opts: [
        { key: "a", text: `\\( Q_1 \\) est la plus petite valeur de rang supérieur ou égal à \\( N/4 \\)` },
        { key: "b", text: `\\( Q_1 \\) est la valeur de rang \\( N/2 \\)` },
        { key: "c", text: `\\( Q_1 \\) est la plus petite valeur de rang supérieur ou égal à \\( 3N/4 \\)` },
        { key: "d", text: `\\( Q_1 \\) est la moyenne de toutes les valeurs inférieures à la médiane` }
      ],
      ans: "a",
      ansText: `\\( Q_1 \\) est la plus petite valeur de la série dont le rang est \\( \\ge N/4 \\) (on arrondit ce rang à l'entier supérieur si besoin).`
    },
    {
      id: "statistiques-lycee-08",
      type: "qcm",
      q: `Série triée (\\( N=20 \\)) : 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 21, 22, 23, 24, 26, 29. Quelle est la valeur de \\( Q_1 \\) ?`,
      opts: [
        { key: "a", text: `14` },
        { key: "b", text: `16` },
        { key: "c", text: `15` },
        { key: "d", text: `18` }
      ],
      ans: "c",
      ansText: `Rang de \\( Q_1 \\) : \\( 20/4 = 5 \\), donc \\( Q_1 \\) est la 5ᵉ valeur de la série, soit \\( Q_1 = 15 \\).`
    },
    {
      id: "statistiques-lycee-09",
      type: "num",
      q: `Pour la même série (\\( N=20 \\)) : 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 21, 22, 23, 24, 26, 29, sachant que \\( Q_1 = 15 \\), calculer l'écart interquartile de cette série.`,
      ans: 6,
      ansText: `Rang de \\( Q_3 \\) : \\( \\frac{3\\times20}{4}=15 \\), donc \\( Q_3 \\) est la 15ᵉ valeur \\( = 21 \\). Écart interquartile : \\( 21-15=6 \\)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-10",
      type: "qcm",
      q: `Sur un diagramme en boîte, la boîte (le rectangle) s'étend :`,
      opts: [
        { key: "a", text: `Du minimum au maximum de la série` },
        { key: "b", text: `Du premier quartile \\( Q_1 \\) au troisième quartile \\( Q_3 \\)` },
        { key: "c", text: `De la moyenne moins l'écart-type à la moyenne plus l'écart-type` },
        { key: "d", text: `De la médiane au maximum` }
      ],
      ans: "b",
      ansText: `La boîte représente l'intervalle interquartile \\( [Q_1\\,;\\,Q_3] \\), avec un trait vertical à l'intérieur pour la médiane ; les moustaches relient la boîte au minimum et au maximum.`
    },
    {
      id: "statistiques-lycee-11",
      type: "qcm",
      q: `Une série a pour minimum 2, maximum 50, \\( Q_1 = 18 \\) et \\( Q_3 = 24 \\). Que peut-on dire ?`,
      opts: [
        { key: "a", text: `L'écart interquartile vaut 48, la série est très dispersée sur toute son étendue` },
        { key: "b", text: `L'étendue vaut 6, la série est peu dispersée` },
        { key: "c", text: `L'écart interquartile et l'étendue valent tous les deux 6` },
        { key: "d", text: `L'étendue vaut 48 (sensible aux valeurs extrêmes) alors que l'écart interquartile ne vaut que 6 (les valeurs centrales sont resserrées)` }
      ],
      ans: "d",
      ansText: `Étendue \\( = 50-2 = 48 \\) ; écart interquartile \\( = Q_3-Q_1 = 24-18 = 6 \\). L'étendue est très sensible aux valeurs extrêmes, contrairement à l'écart interquartile.`
    },
    {
      id: "statistiques-lycee-12",
      type: "num",
      q: `Calculer la variance de la série 2, 4, 4, 6 (formule \\( V=\\dfrac{1}{N}\\sum n_i(x_i-\\bar x)^2 \\)).`,
      ans: 2,
      ansText: `\\( \\bar x = \\frac{2+4+4+6}{4}=4 \\), \\( V=\\frac{(2-4)^2+(4-4)^2+(4-4)^2+(6-4)^2}{4}=\\frac{4+0+0+4}{4}=2 \\)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-13",
      type: "qcm",
      q: `La série 2, 4, 4, 6 a pour variance \\( V = 2 \\). Quel est son écart-type (valeur arrondie au centième) ?`,
      opts: [
        { key: "a", text: `\\( \\sigma \\approx 1{,}41 \\)` },
        { key: "b", text: `\\( \\sigma = 4 \\)` },
        { key: "c", text: `\\( \\sigma = 2 \\)` },
        { key: "d", text: `\\( \\sigma \\approx 0{,}71 \\)` }
      ],
      ans: "a",
      ansText: `\\( \\sigma = \\sqrt{V} = \\sqrt{2} \\approx 1{,}41 \\)`
    },
    {
      id: "statistiques-lycee-14",
      type: "qcm",
      q: `On applique à toutes les valeurs d'une série de moyenne \\( \\bar x \\) la transformation \\( y = ax+b \\) (\\( a,b \\) réels). Que vaut la nouvelle moyenne \\( \\bar y \\) ?`,
      opts: [
        { key: "a", text: `\\( \\bar y = \\bar x \\)` },
        { key: "b", text: `\\( \\bar y = a\\bar x + b \\)` },
        { key: "c", text: `\\( \\bar y = \\bar x + b \\)` },
        { key: "d", text: `\\( \\bar y = a\\bar x \\)` }
      ],
      ans: "b",
      ansText: `La moyenne subit la même transformation affine que les données : \\( \\bar y = a\\bar x+b \\).`
    },
    {
      id: "statistiques-lycee-15",
      type: "qcm",
      q: `On applique à toutes les valeurs d'une série d'écart-type \\( \\sigma_x \\) la transformation \\( y=ax+b \\) (\\( a,b \\) réels). Que vaut le nouvel écart-type \\( \\sigma_y \\) ?`,
      opts: [
        { key: "a", text: `\\( \\sigma_y = \\sigma_x + b \\)` },
        { key: "b", text: `\\( \\sigma_y = a\\sigma_x + b \\)` },
        { key: "c", text: `\\( \\sigma_y = |a|\\,\\sigma_x \\)` },
        { key: "d", text: `\\( \\sigma_y = \\sigma_x \\) (inchangé quels que soient \\( a \\) et \\( b \\))` }
      ],
      ans: "c",
      ansText: `L'écart-type est multiplié par \\( |a| \\) ; la translation \\( b \\) ne modifie pas la dispersion : \\( \\sigma_y = |a|\\sigma_x \\).`
    },
    {
      id: "statistiques-lycee-16",
      type: "num",
      q: `Une série a un écart-type de 3. On transforme toutes les valeurs par \\( y = 5x - 2 \\). Quel est le nouvel écart-type ?`,
      ans: 15,
      ansText: `\\( \\sigma_y = |5|\\times3 = 15 \\) (la translation \\(-2\\) n'a aucun effet sur l'écart-type)`,
      tol: 0.01
    },
    {
      id: "statistiques-lycee-17",
      type: "qcm",
      q: `Deux classes A et B ont obtenu la même moyenne de 12 à un devoir. La classe A a un écart-type de 1, la classe B un écart-type de 4. Que peut-on en conclure ?`,
      opts: [
        { key: "a", text: `Les deux classes ont des résultats identiques puisque la moyenne est la même` },
        { key: "b", text: `La classe B est plus homogène que la classe A` },
        { key: "c", text: `Il est impossible de comparer deux séries ayant la même moyenne` },
        { key: "d", text: `Les notes de la classe A sont plus resserrées (homogènes) autour de 12 que celles de la classe B, plus dispersées` }
      ],
      ans: "d",
      ansText: `Un écart-type plus faible (1 contre 4) signifie que les valeurs sont plus proches de la moyenne : la classe A est plus homogène.`
    },
    {
      id: "statistiques-lycee-18",
      type: "qcm",
      q: `Qu'appelle-t-on la « fluctuation d'échantillonnage » ?`,
      opts: [
        { key: "a", text: `Le fait que la fréquence observée d'un caractère varie d'un échantillon à l'autre, même prélevés dans la même population` },
        { key: "b", text: `Une erreur de mesure commise par l'expérimentateur` },
        { key: "c", text: `Le fait que la population entière change de caractéristiques au cours du temps` },
        { key: "d", text: `La différence entre la moyenne et la médiane d'un échantillon` }
      ],
      ans: "a",
      ansText: `La fluctuation d'échantillonnage désigne la variabilité naturelle de la fréquence observée selon l'échantillon prélevé, même dans une population inchangée.`
    },
    {
      id: "statistiques-lycee-19",
      type: "num",
      q: `On suppose une proportion \\( p = 0{,}5 \\) dans une population et on prélève un échantillon de taille \\( n = 400 \\). Calculer la borne supérieure de l'intervalle de fluctuation asymptotique au seuil de 95 % (arrondir au millième).`,
      ans: 0.549,
      ansText: `\\( p+1{,}96\\sqrt{\\frac{p(1-p)}{n}} = 0{,}5+1{,}96\\sqrt{\\frac{0{,}25}{400}} = 0{,}5+1{,}96\\times0{,}025 = 0{,}5+0{,}049=0{,}549 \\)`,
      tol: 0.001
    },
    {
      id: "statistiques-lycee-20",
      type: "qcm",
      q: `On suppose \\( p=0{,}5 \\) avec \\( n=400 \\), l'intervalle de fluctuation asymptotique au seuil de 95 % étant \\( [0{,}451\\,;\\,0{,}549] \\). Sur un échantillon de 400 personnes, on observe une fréquence \\( f = 0{,}56 \\). Quelle est la bonne interprétation ?`,
      opts: [
        { key: "a", text: `Comme \\( 0{,}56 \\) est proche de \\( 0{,}549 \\), on ne peut rien conclure` },
        { key: "b", text: `Comme \\( f=0{,}56 \\notin [0{,}451\\,;\\,0{,}549] \\), on rejette l'hypothèse \\( p=0{,}5 \\) au seuil de 95 % (avec un risque de 5 % de se tromper)` },
        { key: "c", text: `Comme \\( f=0{,}56 \\notin [0{,}451\\,;\\,0{,}549] \\), on est certain à 100 % que \\( p \\ne 0{,}5 \\)` },
        { key: "d", text: `L'intervalle de fluctuation ne sert qu'à calculer une moyenne, pas à prendre une décision` }
      ],
      ans: "b",
      ansText: `Comme \\( f \\notin I \\), on rejette l'hypothèse au seuil de 95 %, en acceptant un risque de 5 % de conclure à tort : la fluctuation d'échantillonnage ne donne jamais une certitude absolue.`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
