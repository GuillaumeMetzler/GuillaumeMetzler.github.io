/* ================================================================
   Banque de questions — Nombres, inégalités & valeur absolue (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "nombres-inegalites";
  var questions = [
    {
      id: "nombres-inegalites-01",
      type: "qcm",
      q: `Quel est l'ensemble des solutions de \\( |x-2| \\le 3 \\) ?`,
      opts: [
        { key: "a", text: `\\([-1,5]\\)` },
        { key: "b", text: `\\([-5,1]\\)` },
        { key: "c", text: `\\(]-\\infty,-1]\\cup[5,+\\infty[\\)` },
        { key: "d", text: `\\([-3,3]\\)` }
      ],
      ans: "a",
      ansText: `\\(|x-a|\\le r \\iff x\\in[a-r,a+r]\\), ici \\(a=2\\), \\(r=3\\), donc \\(x\\in[-1,5]\\).`
    },
    {
      id: "nombres-inegalites-02",
      type: "num",
      q: `Calculer \\( |7-(-3)| \\) (la distance entre les réels 7 et -3).`,
      ans: 10,
      ansText: `\\(|7-(-3)|=|10|=10\\)`,
      tol: 0.01
    },
    {
      id: "nombres-inegalites-03",
      type: "num",
      q: `L'équation \\( |3x-6|=12 \\) a deux solutions. Donner la plus grande.`,
      ans: 6,
      ansText: `\\(3x-6=12 \\Rightarrow x=6\\) ; ou \\(3x-6=-12 \\Rightarrow x=-2\\). La plus grande solution est \\(6\\).`,
      tol: 0.01
    },
    {
      id: "nombres-inegalites-04",
      type: "qcm",
      q: `Laquelle des propriétés suivantes est vraie pour TOUS les réels \\(a\\) et \\(b\\) ?`,
      opts: [
        { key: "a", text: `\\(|a+b|=|a|+|b|\\)` },
        { key: "b", text: `\\(|ab|=|a|\\,|b|\\)` },
        { key: "c", text: `\\(|a-b|=|a|-|b|\\)` },
        { key: "d", text: `\\(|a|&lt;|b| \\Rightarrow a&lt;b\\)` }
      ],
      ans: "b",
      ansText: `\\(|ab|=|a|\\,|b|\\) est toujours vraie. Les trois autres sont fausses en général (par exemple \\(a=1,b=-1\\) met en défaut a, c et d).`
    },
    {
      id: "nombres-inegalites-05",
      type: "qcm",
      q: `On part de l'inégalité \\( x &lt; 5 \\) et on multiplie les deux membres par \\(-2\\). Quelle inégalité obtient-on ?`,
      opts: [
        { key: "a", text: `\\(-2x &lt; -10\\)` },
        { key: "b", text: `\\(-2x > -10\\)` },
        { key: "c", text: `\\(-2x &lt; 10\\)` },
        { key: "d", text: `\\(-2x > 10\\)` }
      ],
      ans: "b",
      ansText: `Multiplier par un négatif inverse le sens de l'inégalité : \\(x&lt;5 \\Rightarrow -2x>-10\\).`
    },
    {
      id: "nombres-inegalites-06",
      type: "qcm",
      q: `Combien vaut \\( \\sqrt{(-3)^2} \\) ?`,
      opts: [
        { key: "a", text: `\\(-3\\)` },
        { key: "b", text: `\\(3\\)` },
        { key: "c", text: `\\(\\pm3\\)` },
        { key: "d", text: `n'existe pas` }
      ],
      ans: "b",
      ansText: `\\(\\sqrt{a^2}=|a|\\), donc \\(\\sqrt{(-3)^2}=|-3|=3\\), pas \\(-3\\).`
    },
    {
      id: "nombres-inegalites-07",
      type: "num",
      q: `En utilisant l'identité \\( a^2-b^2=(a-b)(a+b) \\), calculer \\( 101^2 - 99^2 \\).`,
      ans: 400,
      ansText: `\\(101^2-99^2=(101-99)(101+99)=2\\times200=400\\)`,
      tol: 0.01
    },
    {
      id: "nombres-inegalites-08",
      type: "qcm",
      q: `Simplifier \\( \\dfrac{a^5}{a^{-2}} \\) pour \\(a\\ne0\\).`,
      opts: [
        { key: "a", text: `\\(a^3\\)` },
        { key: "b", text: `\\(a^7\\)` },
        { key: "c", text: `\\(a^{-7}\\)` },
        { key: "d", text: `\\(a^{10}\\)` }
      ],
      ans: "b",
      ansText: `\\(\\dfrac{a^5}{a^{-2}}=a^{5-(-2)}=a^7\\)`
    },
    {
      id: "nombres-inegalites-09",
      type: "qcm",
      q: `Rationaliser \\( \\dfrac{1}{\\sqrt3-1} \\).`,
      opts: [
        { key: "a", text: `\\(\\dfrac{\\sqrt3+1}{2}\\)` },
        { key: "b", text: `\\(\\dfrac{\\sqrt3-1}{2}\\)` },
        { key: "c", text: `\\(\\sqrt3+1\\)` },
        { key: "d", text: `\\(\\dfrac{\\sqrt3+1}{4}\\)` }
      ],
      ans: "a",
      ansText: `En multipliant par \\(\\dfrac{\\sqrt3+1}{\\sqrt3+1}\\) : \\(\\dfrac{\\sqrt3+1}{(\\sqrt3)^2-1^2}=\\dfrac{\\sqrt3+1}{2}\\)`
    },
    {
      id: "nombres-inegalites-10",
      type: "qcm",
      q: `Résoudre \\( (2x-4)(x+1) > 0 \\) à l'aide d'un tableau de signes.`,
      opts: [
        { key: "a", text: `\\(]-\\infty,-1[\\,\\cup\\,]2,+\\infty[\\)` },
        { key: "b", text: `\\(]-1,2[\\)` },
        { key: "c", text: `\\(]-\\infty,-1]\\cup[2,+\\infty[\\)` },
        { key: "d", text: `\\(]-1,+\\infty[\\)` }
      ],
      ans: "a",
      ansText: `Zéros en \\(x=-1\\) et \\(x=2\\). \\(2x-4\\) est négatif avant \\(2\\), positif après ; \\(x+1\\) est négatif avant \\(-1\\), positif après. Le produit est positif quand les deux facteurs ont même signe : pour \\(x&lt;-1\\) (les deux négatifs) et pour \\(x>2\\) (les deux positifs).`
    },
    {
      id: "nombres-inegalites-11",
      type: "qcm",
      q: `Résoudre \\( \\dfrac{x-1}{x+2} \\le 0 \\) à l'aide d'un tableau de signes.`,
      opts: [
        { key: "a", text: `\\([-2,1]\\)` },
        { key: "b", text: `\\(]-2,1]\\)` },
        { key: "c", text: `\\(]-\\infty,-2[\\,\\cup\\,[1,+\\infty[\\)` },
        { key: "d", text: `\\(]-2,1[\\)` }
      ],
      ans: "b",
      ansText: `Numérateur nul en \\(x=1\\), dénominateur nul (valeur interdite) en \\(x=-2\\). Le quotient est négatif ou nul sur \\(]-2,1]\\) : \\(x=-2\\) est exclu (dénominateur nul), \\(x=1\\) est inclus (l'inégalité est large et le numérateur s'annule).`
    },
    {
      id: "nombres-inegalites-12",
      type: "qcm",
      q: `Pour résoudre \\( \\dfrac{3}{x-2} > 1 \\), quelle est la démarche correcte ?`,
      opts: [
        { key: "a", text: `Multiplier directement les deux membres par \\(x-2\\), ce qui donne \\(3 > x-2\\), puis résoudre.` },
        { key: "b", text: `Écrire \\(\\dfrac{3}{x-2}-1>0\\), réduire au même dénominateur en \\(\\dfrac{5-x}{x-2}>0\\), puis étudier le signe avec un tableau.` },
        { key: "c", text: `Ajouter \\(1\\) aux deux membres puis diviser par \\(x\\).` },
        { key: "d", text: `Élever les deux membres au carré pour se débarrasser de la fraction.` }
      ],
      ans: "b",
      ansText: `On ne peut pas multiplier par \\(x-2\\) sans connaître son signe (il change selon \\(x\\)). La méthode sûre : tout ramener d'un seul côté en une seule fraction, puis étudier le signe du numérateur et du dénominateur séparément dans un tableau de signes.`
    },
    {
      id: "nombres-inegalites-13",
      type: "qcm",
      q: `Résoudre \\( |2x+1| \\ge 7 \\).`,
      opts: [
        { key: "a", text: `\\(]-\\infty,-4]\\cup[3,+\\infty[\\)` },
        { key: "b", text: `\\(]-\\infty,-4[\\,\\cup\\,]3,+\\infty[\\)` },
        { key: "c", text: `\\([-4,3]\\)` },
        { key: "d", text: `\\([3,+\\infty[\\)` }
      ],
      ans: "a",
      ansText: `Pour \\(r>0\\), \\(|x-a|\\ge r \\iff x\\le a-r\\) ou \\(x\\ge a+r\\), avec les bornes incluses. Ici \\(2x+1\\ge7 \\Rightarrow x\\ge3\\), ou \\(2x+1\\le-7 \\Rightarrow x\\le-4\\). Solution : \\(]-\\infty,-4]\\cup[3,+\\infty[\\) (union de deux demi-droites, pas un intervalle unique).`
    },
    {
      id: "nombres-inegalites-14",
      type: "num",
      q: `L'équation \\( |2x-5|=9 \\) a deux solutions. Donner leur somme.`,
      ans: 5,
      ansText: `\\(2x-5=9 \\Rightarrow x=7\\) ; ou \\(2x-5=-9 \\Rightarrow x=-2\\). Somme des solutions : \\(7+(-2)=5\\).`,
      tol: 0.01
    },
    {
      id: "nombres-inegalites-15",
      type: "qcm",
      q: `On sait que \\( 2 &lt; x &lt; 5 \\). Que peut-on en déduire sur \\( \\dfrac1x \\) ?`,
      opts: [
        { key: "a", text: `\\(\\dfrac1x \\in \\left]-\\dfrac12,-\\dfrac15\\right[\\)` },
        { key: "b", text: `\\(\\dfrac1x \\in \\left]\\dfrac15,\\dfrac12\\right[\\)` },
        { key: "c", text: `\\(\\dfrac1x \\in \\,]2,5[\\)` },
        { key: "d", text: `\\(\\dfrac1x \\in \\left]\\dfrac12,\\dfrac15\\right[\\)` }
      ],
      ans: "b",
      ansText: `\\(x\\) et les bornes \\(2\\) et \\(5\\) sont de même signe (strictement positifs), donc l'inverse renverse le sens de l'inégalité et échange les bornes : \\(2&lt;x&lt;5 \\Rightarrow \\dfrac15&lt;\\dfrac1x&lt;\\dfrac12\\), soit \\(\\dfrac1x\\in\\left]\\dfrac15,\\dfrac12\\right[\\).`
    },
    {
      id: "nombres-inegalites-16",
      type: "qcm",
      q: `Résoudre \\( (x-1)(3-x) > 0 \\) à l'aide d'un tableau de signes.`,
      opts: [
        { key: "a", text: `\\(]-\\infty,3[\\)` },
        { key: "b", text: `\\([1,3]\\)` },
        { key: "c", text: `\\(]1,3[\\)` },
        { key: "d", text: `\\(]-\\infty,1[\\,\\cup\\,]3,+\\infty[\\)` }
      ],
      ans: "c",
      ansText: `Zéros en \\(x=1\\) et \\(x=3\\). \\(x-1\\) est négatif avant \\(1\\), positif après. \\(3-x\\) a un coefficient de \\(x\\) négatif, donc il est positif avant son zéro \\(3\\), négatif après : attention, c'est l'inverse du cas habituel. Sur \\(]1,3[\\), \\(x-1>0\\) et \\(3-x>0\\) : les deux facteurs sont positifs, le produit est positif. Ailleurs, les facteurs sont de signes contraires.`
    },
    {
      id: "nombres-inegalites-17",
      type: "qcm",
      q: `Parmi les nombres suivants, lequel n'appartient PAS à \\( \\mathbb{Q} \\) ?`,
      opts: [
        { key: "a", text: `\\(0{,}75\\)` },
        { key: "b", text: `\\(-3\\)` },
        { key: "c", text: `\\(\\sqrt2\\)` },
        { key: "d", text: `\\(\\dfrac{22}{7}\\)` }
      ],
      ans: "c",
      ansText: `\\(0{,}75=\\dfrac34\\), \\(-3\\) et \\(\\dfrac{22}{7}\\) sont des quotients d'entiers, donc rationnels. \\(\\sqrt2\\) est irrationnel (il n'existe pas d'entiers \\(p,q\\) tels que \\(\\sqrt2=p/q\\)), donc \\(\\sqrt2\\notin\\mathbb{Q}\\) alors que \\(\\sqrt2\\in\\mathbb{R}\\).`
    },
    {
      id: "nombres-inegalites-18",
      type: "num",
      q: `On sait que \\( |x-1|\\le0{,}5 \\) et on pose \\( y=3 \\). En utilisant l'inégalité triangulaire \\( |x-y|\\le|x-1|+|1-y| \\), quel majorant obtient-on pour \\( |x-y| \\) ?`,
      ans: 2.5,
      ansText: `\\(|1-y|=|1-3|=2\\). L'inégalité triangulaire donne \\(|x-y|\\le|x-1|+|1-y|\\le0{,}5+2=2{,}5\\).`,
      tol: 0.01
    },
    {
      id: "nombres-inegalites-19",
      type: "qcm",
      q: `On sait que \\( x\\in\\,]-4,2[ \\). Que peut-on affirmer sur \\( x^2 \\) ?`,
      opts: [
        { key: "a", text: `\\(x^2\\in[0,16[\\)` },
        { key: "b", text: `\\(x^2\\in\\,]16,4[\\)` },
        { key: "c", text: `\\(x^2\\in[4,16[\\)` },
        { key: "d", text: `\\(x^2\\in\\,]0,16[\\)` }
      ],
      ans: "a",
      ansText: `Comme \\(x\\) peut être négatif, on ne peut pas élever l'encadrement au carré terme à terme sans réfléchir. Le minimum de \\(x^2\\) est atteint en \\(x=0\\) (inclus dans l'intervalle), donc \\(x^2=0\\) est possible. Le maximum est approché quand \\(x\\to-4\\) (borne exclue), où \\(x^2\\to16\\) sans l'atteindre ; en \\(x\\to2\\) (borne exclue), \\(x^2\\to4\\), valeur plus petite. Donc \\(x^2\\in[0,16[\\).`
    },
    {
      id: "nombres-inegalites-20",
      type: "qcm",
      q: `On pose \\( a=-2 \\) et \\( b=-8 \\). Que vaut \\( \\sqrt{ab} \\), et peut-on utiliser la formule \\( \\sqrt{ab}=\\sqrt a\\,\\sqrt b \\) dans ce cas ?`,
      opts: [
        { key: "a", text: `\\(\\sqrt{ab}=4\\), et la formule \\(\\sqrt{ab}=\\sqrt a\\,\\sqrt b\\) est valable ici car \\(ab>0\\).` },
        { key: "b", text: `\\(\\sqrt{ab}=4\\), mais la formule \\(\\sqrt a\\,\\sqrt b\\) n'a pas de sens ici car \\(a&lt;0\\) et \\(b&lt;0\\) (une racine carrée de nombre négatif n'est pas définie dans \\(\\mathbb R\\)).` },
        { key: "c", text: `\\(\\sqrt{ab}=-4\\)` },
        { key: "d", text: `\\(\\sqrt{ab}\\) n'existe pas, car \\(ab&lt;0\\)` }
      ],
      ans: "b",
      ansText: `\\(ab=(-2)\\times(-8)=16\\), donc \\(\\sqrt{ab}=\\sqrt{16}=4\\), ce nombre existe bien. Mais la formule \\(\\sqrt{ab}=\\sqrt a\\,\\sqrt b\\) exige \\(a\\ge0\\) et \\(b\\ge0\\) (pas seulement \\(ab\\ge0\\)) : ici \\(\\sqrt a\\) et \\(\\sqrt b\\) ne sont même pas définis dans \\(\\mathbb R\\) puisque \\(a\\) et \\(b\\) sont négatifs.`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
