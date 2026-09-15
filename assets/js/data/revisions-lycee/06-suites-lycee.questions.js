/* ================================================================
   Banque de questions — Suites numériques (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "suites-lycee";
  var questions = [
    {
      id: "suites-lycee-01",
      type: "num",
      q: `Soit \\((u_n)\\) la suite arithmétique de premier terme \\(u_0=4\\) et de raison \\(r=5\\). Calculer \\(u_6\\).`,
      ans: 34,
      ansText: `\\(u_6 = u_0+6r = 4+30 = 34\\)`,
      tol: 0.01
    },
    {
      id: "suites-lycee-02",
      type: "num",
      q: `Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=3\\) et de raison \\(q=2\\). Calculer \\(u_4\\).`,
      ans: 48,
      ansText: `\\(u_4 = u_0\\,q^4 = 3\\times16 = 48\\)`,
      tol: 0.01
    },
    {
      id: "suites-lycee-03",
      type: "qcm",
      q: `La suite \\((u_n)\\) est définie par \\(u_0=2\\) et, pour tout \\(n\\), \\(u_{n+1}=u_n+7\\). Que peut-on dire de \\((u_n)\\) ?`,
      opts: [
        { key: "a", text: `Elle est arithmétique de raison \\(7\\)` },
        { key: "b", text: `Elle est arithmétique de raison \\(2\\)` },
        { key: "c", text: `Elle est géométrique de raison \\(7\\)` },
        { key: "d", text: `Elle n'est ni arithmétique ni géométrique` }
      ],
      ans: "a",
      ansText: `\\(u_{n+1}=u_n+7\\) : on ajoute toujours \\(7\\), donc arithmétique de raison \\(7\\) (le premier terme \\(u_0=2\\) n'est pas la raison).`
    },
    {
      id: "suites-lycee-04",
      type: "qcm",
      q: `La suite \\((u_n)\\) est définie par \\(u_0=1\\) et, pour tout \\(n\\), \\(u_{n+1}=-3u_n\\). Que peut-on dire de \\((u_n)\\) ?`,
      opts: [
        { key: "a", text: `Elle est arithmétique de raison \\(-3\\)` },
        { key: "b", text: `Elle est géométrique de raison \\(-3\\)` },
        { key: "c", text: `Elle est géométrique de raison \\(1\\)` },
        { key: "d", text: `Elle n'est ni arithmétique ni géométrique` }
      ],
      ans: "b",
      ansText: `\\(u_{n+1}=-3\\,u_n\\) : on multiplie toujours par \\(-3\\), donc géométrique de raison \\(q=-3\\).`
    },
    {
      id: "suites-lycee-05",
      type: "qcm",
      q: `Quel est le sens de variation de la suite définie pour tout \\(n\\) par \\(u_n = 5-2n\\) ?`,
      opts: [
        { key: "a", text: `Strictement croissante` },
        { key: "b", text: `Strictement décroissante` },
        { key: "c", text: `Constante` },
        { key: "d", text: `Ni croissante ni décroissante` }
      ],
      ans: "b",
      ansText: `\\(u_{n+1}-u_n = 5-2(n+1)-(5-2n) = -2 &lt; 0\\) pour tout \\(n\\) : strictement décroissante.`
    },
    {
      id: "suites-lycee-06",
      type: "num",
      q: `Soit la suite arithmétique de premier terme \\(u_0=1\\) et de raison \\(r=2\\) (donc \\(u_n=1+2n\\)). Calculer la somme des \\(10\\) premiers termes \\(u_0+u_1+\\dots+u_9\\).`,
      ans: 100,
      ansText: `\\(u_9=1+18=19\\), donc \\(S = 10\\times\\dfrac{1+19}{2} = 10\\times10 = 100\\) (c'est la somme des \\(10\\) premiers nombres impairs).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-07",
      type: "qcm",
      q: `Soit la suite géométrique de premier terme \\(u_0=1\\) et de raison \\(q=2\\). Que vaut la somme des \\(6\\) premiers termes \\(u_0+u_1+\\dots+u_5\\) ?`,
      opts: [
        { key: "a", text: `\\(63\\)` },
        { key: "b", text: `\\(64\\)` },
        { key: "c", text: `\\(31\\)` },
        { key: "d", text: `\\(127\\)` }
      ],
      ans: "a",
      ansText: `\\(S = 1\\times\\dfrac{1-2^6}{1-2} = \\dfrac{1-64}{-1} = 63\\) (vérification directe : \\(1+2+4+8+16+32=63\\)). \\(127\\) correspondrait à \\(7\\) termes, \\(31\\) à un exposant faux dans la formule.`
    },
    {
      id: "suites-lycee-08",
      type: "qcm",
      q: `Pour une suite géométrique de premier terme \\(u_0\\) et de raison \\(q=1\\), que vaut la somme des \\(n+1\\) premiers termes \\(u_0+u_1+\\dots+u_n\\) ?`,
      opts: [
        { key: "a", text: `\\((n+1)\\,u_0\\)` },
        { key: "b", text: `\\(u_0\\dfrac{1-1^{n+1}}{1-1}\\)` },
        { key: "c", text: `\\(0\\)` },
        { key: "d", text: `\\(n\\,u_0\\)` }
      ],
      ans: "a",
      ansText: `Si \\(q=1\\), la suite est constante égale à \\(u_0\\) : la somme des \\(n+1\\) termes vaut \\((n+1)u_0\\). La formule \\(u_0\\frac{1-q^{n+1}}{1-q}\\) est invalide pour \\(q=1\\) (division par \\(0\\)).`
    },
    {
      id: "suites-lycee-09",
      type: "qcm",
      q: `Soit \\((u_n)\\) une suite à termes strictement positifs telle que, pour tout \\(n\\), \\(\\dfrac{u_{n+1}}{u_n} = \\dfrac{n+1}{n+3}\\). Quel est le sens de variation de \\((u_n)\\) ?`,
      opts: [
        { key: "a", text: `Strictement croissante` },
        { key: "b", text: `Strictement décroissante` },
        { key: "c", text: `Constante` },
        { key: "d", text: `On ne peut pas déterminer le sens de variation` }
      ],
      ans: "b",
      ansText: `Pour tout \\(n\\geq0\\), \\(n+1 &lt; n+3\\), donc \\(\\dfrac{n+1}{n+3} &lt; 1\\) : le quotient \\(\\frac{u_{n+1}}{u_n}\\) est toujours strictement inférieur à \\(1\\), donc \\((u_n)\\) est strictement décroissante (critère du quotient, termes positifs).`
    },
    {
      id: "suites-lycee-10",
      type: "num",
      q: `Une suite arithmétique a pour premier terme (au rang \\(1\\)) \\(u_1=7\\) et pour raison \\(r=4\\). Calculer la somme \\(S=u_1+u_2+\\dots+u_{10}\\) (les \\(10\\) premiers termes, à partir du rang \\(1\\)).`,
      ans: 250,
      ansText: `\\(u_{10}=u_1+9r=7+36=43\\), donc \\(S = 10\\times\\dfrac{u_1+u_{10}}{2} = 10\\times\\dfrac{7+43}{2} = 10\\times25 = 250\\) (attention : ici \\(10\\) est le nombre de termes de \\(u_1\\) à \\(u_{10}\\), pas \\(n+1\\)).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-11",
      type: "num",
      q: `Une suite géométrique de raison \\(q=\\dfrac{1}{2}\\) vérifie \\(u_2=8\\). Calculer \\(u_5\\).`,
      ans: 1,
      ansText: `\\(u_5 = u_2\\,q^{5-2} = 8\\times\\left(\\dfrac{1}{2}\\right)^3 = 8\\times\\dfrac{1}{8} = 1\\)`,
      tol: 0.01
    },
    {
      id: "suites-lycee-12",
      type: "qcm",
      q: `Pour démontrer par récurrence que, pour tout \\(n\\), une propriété \\(P(n)\\) est vraie, un élève rédige l'hérédité ainsi : « Supposons que \\(P(n+1)\\) est vraie. Montrons alors que \\(P(n)\\) est vraie. » Quel est le défaut de cette rédaction ?`,
      opts: [
        { key: "a", text: `L'hérédité part de l'hypothèse sur \\(P(n+1)\\) au lieu de \\(P(n)\\) : c'est l'inverse de ce qu'il faut faire (supposer \\(P(n)\\) vraie et en déduire \\(P(n+1)\\))` },
        { key: "b", text: `C'est l'étape d'initialisation qui est fausse, pas l'hérédité` },
        { key: "c", text: `La conclusion du principe de récurrence est mal énoncée` },
        { key: "d", text: `Il n'y a aucun défaut, cette rédaction est correcte` }
      ],
      ans: "a",
      ansText: `L'hérédité doit supposer vraie l'hypothèse de récurrence \\(P(n)\\) (au rang \\(n\\)) et en déduire \\(P(n+1)\\). Partir de \\(P(n+1)\\) pour "redémontrer" \\(P(n)\\) inverse le sens de l'implication et ne prouve rien (raisonnement circulaire).`
    },
    {
      id: "suites-lycee-13",
      type: "num",
      q: `Une suite \\((u_n)\\) est définie par \\(u_0=3\\) et, pour tout \\(n\\), \\(u_{n+1}=2u_n-1\\) (elle n'est ni arithmétique ni géométrique). Calculer \\(u_3\\) en utilisant la relation de récurrence terme après terme.`,
      ans: 17,
      ansText: `\\(u_1=2\\times3-1=5\\), \\(u_2=2\\times5-1=9\\), \\(u_3=2\\times9-1=17\\). On ne peut pas utiliser une formule directe (la suite n'est ni arithmétique ni géométrique) : il faut calculer les termes un par un depuis \\(u_0\\).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-14",
      type: "qcm",
      q: `Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=-4\\) et de raison \\(q=1{,}5\\). Quel est le comportement de \\((u_n)\\) quand \\(n\\) tend vers \\(+\\infty\\) ?`,
      opts: [
        { key: "a", text: `\\((u_n)\\) tend vers \\(+\\infty\\)` },
        { key: "b", text: `\\((u_n)\\) est constante` },
        { key: "c", text: `\\((u_n)\\) tend vers \\(-\\infty\\)` },
        { key: "d", text: `\\((u_n)\\) converge vers \\(0\\)` }
      ],
      ans: "c",
      ansText: `Ici \\(q=1{,}5>1\\) donc \\(|u_n|\\) devient de plus en plus grand, et comme \\(u_0=-4&lt;0\\), tous les termes restent négatifs et diminuent indéfiniment (\\(-4,-6,-9,-13{,}5,\\dots\\)) : \\((u_n)\\) tend vers \\(-\\infty\\). Le cas \\(|q|&lt;1\\) donnerait une convergence vers \\(0\\), mais ce n'est pas le cas ici.`
    },
    {
      id: "suites-lycee-15",
      type: "num",
      q: `On considère la suite géométrique de premier terme \\(u_0=1000\\) et de raison \\(q=0{,}5\\) (elle converge vers \\(0\\)). Un algorithme de seuil doit déterminer le plus petit entier \\(n\\) tel que \\(u_n &lt; 1\\). Quelle est la valeur de cet entier \\(n\\) ?`,
      ans: 10,
      ansText: `\\(u_n = 1000\\times0{,}5^{\\,n}\\). On calcule \\(u_9 = 1000/2^9 = 1000/512 \\approx 1{,}953 > 1\\) et \\(u_{10} = 1000/2^{10} = 1000/1024 \\approx 0{,}977 &lt; 1\\). Le plus petit entier \\(n\\) qui convient est donc \\(n=10\\).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-16",
      type: "qcm",
      q: `Soit \\((u_n)\\) une suite arithmétique de raison \\(r\\neq0\\), et soit \\((v_n)\\) la suite définie par \\(v_n=u_n^2\\) pour tout \\(n\\). Que peut-on dire de \\((v_n)\\) ?`,
      opts: [
        { key: "a", text: `\\((v_n)\\) est toujours géométrique` },
        { key: "b", text: `\\((v_n)\\) est toujours arithmétique` },
        { key: "c", text: `\\((v_n)\\) est arithmétique seulement si \\(r=1\\)` },
        { key: "d", text: `\\((v_n)\\) n'est jamais arithmétique ni géométrique` }
      ],
      ans: "d",
      ansText: `\\(u_n=u_0+nr\\) donc \\(v_n=(u_0+nr)^2\\) est une expression du second degré en \\(n\\) (car \\(r\\neq0\\)) : \\(v_{n+1}-v_n = 2rn r+r^2+2ru_0\\) dépend de \\(n\\) (à cause du terme en \\(r^2\\times 2n\\)), donc jamais constante : \\((v_n)\\) n'est jamais arithmétique. On peut vérifier de même que le quotient \\(v_{n+1}/v_n\\) n'est pas constant : \\((v_n)\\) n'est pas non plus géométrique, quelle que soit la valeur de \\(r\\neq0\\).`
    },
    {
      id: "suites-lycee-17",
      type: "num",
      q: `Soit \\((u_n)\\) une suite arithmétique telle que \\(u_2 = 13\\) et \\(u_9 = 41\\). Calculer \\(u_{20}\\).`,
      ans: 85,
      ansText: `La raison vaut \\(r = \\dfrac{u_9-u_2}{9-2} = \\dfrac{41-13}{7} = 4\\), puis \\(u_0 = u_2-2r = 13-8=5\\). Donc \\(u_{20} = u_0+20r = 5+80 = 85\\).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-18",
      type: "qcm",
      q: `Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=5\\) et de raison \\(q=-2\\). Quel est le sens de variation de \\((u_n)\\) ?`,
      opts: [
        { key: "a", text: `Strictement croissante` },
        { key: "b", text: `Strictement décroissante` },
        { key: "c", text: `Ni croissante ni décroissante : les termes alternent de signe` },
        { key: "d", text: `Constante` }
      ],
      ans: "c",
      ansText: `Les premiers termes sont \\(5,\\,-10,\\,20,\\,-40,\\,80,\\dots\\) : comme \\(q=-2&lt;0\\), le signe de \\(u_n\\) alterne à chaque rang, donc la différence \\(u_{n+1}-u_n\\) change elle aussi de signe selon \\(n\\). La suite ne peut donc être ni croissante ni décroissante (c'est le cas \\(q\\leq -1\\) évoqué dans le cours : la suite diverge en oscillant).`
    },
    {
      id: "suites-lycee-19",
      type: "num",
      q: `Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=2\\) et de raison \\(q=-3\\). Calculer la somme des \\(5\\) premiers termes \\(u_0+u_1+u_2+u_3+u_4\\).`,
      ans: 122,
      ansText: `\\(S = u_0\\times\\dfrac{1-q^5}{1-q} = 2\\times\\dfrac{1-(-3)^5}{1-(-3)} = 2\\times\\dfrac{1+243}{4} = 2\\times61 = 122\\). Vérification directe : \\(2-6+18-54+162 = 122\\).`,
      tol: 0.01
    },
    {
      id: "suites-lycee-20",
      type: "qcm",
      q: `Soit \\((u_n)\\) définie par \\(u_0=1\\) et, pour tout entier \\(n\\), \\(u_{n+1}=u_n+n\\). Quelle affirmation est correcte ?`,
      opts: [
        { key: "a", text: `\\((u_n)\\) est géométrique de raison \\(n\\)` },
        { key: "b", text: `\\((u_n)\\) est arithmétique de raison \\(1\\)` },
        { key: "c", text: `\\((u_n)\\) est arithmétique, de raison variable égale à \\(n\\) à chaque étape` },
        { key: "d", text: `\\((u_n)\\) n'est pas arithmétique : la quantité ajoutée d'un terme au suivant, ici \\(n\\), n'est pas constante` }
      ],
      ans: "d",
      ansText: `Pour que \\((u_n)\\) soit arithmétique, il faut que \\(u_{n+1}-u_n\\) soit une constante indépendante de \\(n\\). Ici \\(u_{n+1}-u_n = n\\), qui prend une valeur différente à chaque rang (\\(0, 1, 2, 3,\\dots\\)) : ce n'est pas une raison constante, donc \\((u_n)\\) n'est pas arithmétique (une « raison variable » n'existe pas, par définition la raison est fixe).`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
