/* ================================================================
   Banque de questions — Fonctions de référence & généralités (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "fonctions-reference";
  var questions = [
    {
      id: "fonctions-reference-01",
      type: "num",
      q: `Soit \\(f(x) = 3x - 2\\). Calculer l'image de \\(4\\) par \\(f\\), c'est-à-dire \\(f(4)\\).`,
      ans: 10,
      ansText: `\\(f(4) = 3\\times 4 - 2 = 10\\)`,
      tol: 0.01
    },
    {
      id: "fonctions-reference-02",
      type: "num",
      q: `Soit \\(f(x) = \\sqrt{x+3}\\). Calculer \\(f(6)\\).`,
      ans: 3,
      ansText: `\\(f(6) = \\sqrt{6+3} = \\sqrt{9} = 3\\)`,
      tol: 0.01
    },
    {
      id: "fonctions-reference-03",
      type: "qcm",
      q: `Soit \\(f(x) = x^2\\). Quel est l'ensemble des antécédents de \\(9\\) par \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(\\{3\\}\\)` },
        { key: "b", text: `\\(\\{-3\\}\\)` },
        { key: "c", text: `\\(\\{3\\,;-3\\}\\)` },
        { key: "d", text: `\\(\\{9\\}\\)` }
      ],
      ans: "c",
      ansText: `Les antécédents vérifient \\(x^2 = 9\\), donc \\(x=3\\) ou \\(x=-3\\) : l'ensemble est \\(\\{3\\,;-3\\}\\).`
    },
    {
      id: "fonctions-reference-04",
      type: "qcm",
      q: `Sur l'intervalle \\(]0\\,;+\\infty[\\), la fonction inverse \\(x \\mapsto \\dfrac{1}{x}\\) est :`,
      opts: [
        { key: "a", text: `croissante` },
        { key: "b", text: `décroissante` },
        { key: "c", text: `constante` },
        { key: "d", text: `ni croissante ni décroissante` }
      ],
      ans: "b",
      ansText: `La fonction inverse est décroissante sur chacun des deux intervalles \\(]-\\infty\\,;0[\\) et \\(]0\\,;+\\infty[\\).`
    },
    {
      id: "fonctions-reference-05",
      type: "qcm",
      q: `La fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par \\(f(x) = x^3\\) est :`,
      opts: [
        { key: "a", text: `paire` },
        { key: "b", text: `impaire` },
        { key: "c", text: `ni paire ni impaire` },
        { key: "d", text: `périodique` }
      ],
      ans: "b",
      ansText: `\\(f(-x) = (-x)^3 = -x^3 = -f(x)\\) pour tout \\(x\\) : \\(f\\) est impaire.`
    },
    {
      id: "fonctions-reference-06",
      type: "qcm",
      q: `On sait que \\(f\\) est strictement décroissante sur \\([-5\\,;5]\\). Sachant que \\(-3 &lt; 1\\), que peut-on en déduire ?`,
      opts: [
        { key: "a", text: `\\(f(-3) &lt; f(1)\\)` },
        { key: "b", text: `\\(f(-3) > f(1)\\)` },
        { key: "c", text: `\\(f(-3) = f(1)\\)` },
        { key: "d", text: `On ne peut rien déduire sans calculer` }
      ],
      ans: "b",
      ansText: `\\(f\\) est décroissante, donc l'ordre des images est inversé par rapport à celui des antécédents : \\(-3 &lt; 1 \\Rightarrow f(-3) > f(1)\\).`
    },
    {
      id: "fonctions-reference-07",
      type: "qcm",
      q: `Soit \\(f(x) = -2x + 5\\), définie sur \\(\\mathbb{R}\\). Le sens de variation de \\(f\\) est :`,
      opts: [
        { key: "a", text: `\\(f\\) est croissante sur \\(\\mathbb{R}\\)` },
        { key: "b", text: `\\(f\\) est décroissante sur \\(\\mathbb{R}\\)` },
        { key: "c", text: `\\(f\\) est constante sur \\(\\mathbb{R}\\)` },
        { key: "d", text: `\\(f\\) est croissante puis décroissante` }
      ],
      ans: "b",
      ansText: `Le coefficient directeur est \\(a = -2 &lt; 0\\), donc \\(f\\) est strictement décroissante sur \\(\\mathbb{R}\\).`
    },
    {
      id: "fonctions-reference-08",
      type: "qcm",
      q: `Une fonction \\(f\\) est strictement croissante sur \\([-2\\,;5]\\) et vérifie \\(f(-2) = -10\\). Peut-on affirmer que \\(f\\) est positive sur \\([-2\\,;5]\\) ?`,
      opts: [
        { key: "a", text: `Oui, une fonction croissante est toujours positive` },
        { key: "b", text: `Non, croissante ne veut pas dire positive` },
        { key: "c", text: `Oui, car \\(f(-2)\\) est la plus petite valeur donc les autres sont positives` },
        { key: "d", text: `On ne peut jamais savoir sans le tableau de signes` }
      ],
      ans: "b",
      ansText: `Non : \\(f\\) croissante ne renseigne que sur l'évolution des images, pas sur leur signe. Ici, par exemple, \\(f(-2) = -10 &lt; 0\\) : \\(f\\) n'est pas positive sur tout l'intervalle.`
    },
    {
      id: "fonctions-reference-09",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\dfrac{\\sqrt{x+2}}{x-1}\\) ?`,
      opts: [
        { key: "a", text: `\\([-2\\,;+\\infty[\\)` },
        { key: "b", text: `\\([-2\\,;1[\\,\\cup\\,]1\\,;+\\infty[\\)` },
        { key: "c", text: `\\(]-2\\,;+\\infty[\\,\\setminus\\,\\{1\\}\\)` },
        { key: "d", text: `\\(\\mathbb{R}\\,\\setminus\\,\\{1\\}\\)` }
      ],
      ans: "b",
      ansText: `Il faut \\(x+2 \\geqslant 0\\) (soit \\(x \\geqslant -2\\)) et \\(x - 1 \\neq 0\\) (soit \\(x \\neq 1\\)). En combinant : \\(D_f = [-2\\,;1[\\,\\cup\\,]1\\,;+\\infty[\\).`
    },
    {
      id: "fonctions-reference-10",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\sqrt{\\dfrac{3-x}{x+1}}\\) ?`,
      opts: [
        { key: "a", text: `\\(]-1\\,;3]\\)` },
        { key: "b", text: `\\([-1\\,;3]\\)` },
        { key: "c", text: `\\(]-\\infty\\,;-1[\\,\\cup\\,[3\\,;+\\infty[\\)` },
        { key: "d", text: `\\(]-1\\,;3[\\)` }
      ],
      ans: "a",
      ansText: `Il faut que le quotient soit \\(\\geqslant 0\\) et que \\(x \\neq -1\\). Une étude de signe (numérateur nul en \\(3\\), dénominateur nul en \\(-1\\)) donne un quotient positif ou nul exactement sur \\(]-1\\,;3]\\).`
    },
    {
      id: "fonctions-reference-11",
      type: "qcm",
      q: `Soit \\(h(x) = \\sqrt{\\dfrac{1}{x}}\\), définie sur \\(]0\\,;+\\infty[\\). En utilisant les sens de variation de \\(x \\mapsto \\dfrac{1}{x}\\) et de \\(x \\mapsto \\sqrt{x}\\), comparer \\(h(2)\\) et \\(h(8)\\) sans calculer leurs valeurs exactes.`,
      opts: [
        { key: "a", text: `\\(h(2) &lt; h(8)\\)` },
        { key: "b", text: `\\(h(2) > h(8)\\)` },
        { key: "c", text: `\\(h(2) = h(8)\\)` },
        { key: "d", text: `On ne peut pas comparer sans calculer` }
      ],
      ans: "b",
      ansText: `Sur \\(]0\\,;+\\infty[\\), \\(x \\mapsto 1/x\\) est décroissante, donc \\(2 &lt; 8 \\Rightarrow \\frac{1}{2} > \\frac{1}{8}\\). La racine carrée est croissante, donc elle conserve cet ordre : \\(\\sqrt{1/2} > \\sqrt{1/8}\\), c'est-à-dire \\(h(2) > h(8)\\) (la composée est décroissante).`
    },
    {
      id: "fonctions-reference-12",
      type: "qcm",
      q: `La fonction \\(f(x) = -x^3\\) est impaire. Peut-on en déduire qu'elle est croissante sur \\(\\mathbb{R}\\) ?`,
      opts: [
        { key: "a", text: `Oui, toute fonction impaire est croissante sur \\(\\mathbb{R}\\)` },
        { key: "b", text: `Non, la parité ne renseigne pas sur le sens de variation` },
        { key: "c", text: `Oui, car \\(x^3\\) est croissante donc \\(-x^3\\) aussi` },
        { key: "d", text: `Non, car \\(f\\) est constante sur \\(\\mathbb{R}\\)` }
      ],
      ans: "b",
      ansText: `Non : la parité (ici l'imparité) ne donne aucune information sur le sens de variation. En fait \\(f(x) = -x^3\\) est strictement décroissante sur \\(\\mathbb{R}\\).`
    },
    {
      id: "fonctions-reference-13",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\dfrac{1}{\\sqrt{x-2}}\\) ?`,
      opts: [
        { key: "a", text: `\\([2\\,;+\\infty[\\)` },
        { key: "b", text: `\\(\\mathbb{R}\\,\\setminus\\,\\{2\\}\\)` },
        { key: "c", text: `\\(]-\\infty\\,;2[\\)` },
        { key: "d", text: `\\(]2\\,;+\\infty[\\)` }
      ],
      ans: "d",
      ansText: `Il faut \\(x-2 \\geqslant 0\\) pour que la racine existe, mais aussi \\(\\sqrt{x-2} \\neq 0\\) puisqu'elle est au dénominateur, donc \\(x-2 > 0\\) strictement. On obtient \\(D_f = ]2\\,;+\\infty[\\).`
    },
    {
      id: "fonctions-reference-14",
      type: "qcm",
      q: `Soit \\(f(x) = x^2\\), étudiée sur l'intervalle \\([-2\\,;3]\\). Quel est le maximum de \\(f\\) sur cet intervalle ?`,
      opts: [
        { key: "a", text: `\\(4\\)` },
        { key: "b", text: `\\(-2\\)` },
        { key: "c", text: `\\(0\\)` },
        { key: "d", text: `\\(9\\)` }
      ],
      ans: "d",
      ansText: `\\(f\\) est décroissante sur \\([-2\\,;0]\\) puis croissante sur \\([0\\,;3]\\) : le maximum sur \\([-2\\,;3]\\) est donc atteint à l'une des deux bornes. On compare \\(f(-2)=4\\) et \\(f(3)=9\\) : le maximum vaut \\(9\\), atteint en \\(x=3\\).`
    },
    {
      id: "fonctions-reference-15",
      type: "qcm",
      q: `Soit \\(f(x) = |x|\\). Que peut-on dire de \\(f(-7)\\) et \\(f(4)\\) ?`,
      opts: [
        { key: "a", text: `\\(f(-7) > f(4)\\)` },
        { key: "b", text: `\\(f(-7) &lt; f(4)\\)` },
        { key: "c", text: `On ne peut rien dire sans savoir si \\(-7\\) et \\(4\\) sont dans le même intervalle de monotonie` },
        { key: "d", text: `\\(f(-7) = f(4)\\)` }
      ],
      ans: "a",
      ansText: `\\(-7\\) et \\(4\\) ne sont pas dans le même intervalle de monotonie de \\(f\\) (l'un est négatif, l'autre positif), donc on ne peut pas utiliser directement le sens de variation : il faut calculer. \\(f(-7) = 7\\) et \\(f(4) = 4\\), donc \\(f(-7) > f(4)\\).`
    },
    {
      id: "fonctions-reference-16",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{1}{|x|}\\), définie sur \\(\\mathbb{R}^*\\). Calculer \\(f(-5)\\).`,
      ans: 0.2,
      ansText: `\\(f(-5) = \\dfrac{1}{|-5|} = \\dfrac{1}{5} = 0{,}2\\)`,
      tol: 0.01
    },
    {
      id: "fonctions-reference-17",
      type: "qcm",
      q: `Soit \\(f(x) = x^2 + x\\), définie sur \\(\\mathbb{R}\\). La fonction \\(f\\) est-elle paire, impaire, ou ni l'une ni l'autre ?`,
      opts: [
        { key: "a", text: `\\(f\\) est paire` },
        { key: "b", text: `\\(f\\) est impaire` },
        { key: "c", text: `\\(f\\) n'est ni paire ni impaire` },
        { key: "d", text: `\\(f\\) est périodique` }
      ],
      ans: "c",
      ansText: `\\(f(-x) = (-x)^2 + (-x) = x^2 - x\\). Ce n'est égal ni à \\(f(x) = x^2+x\\) (sauf pour \\(x=0\\)), ni à \\(-f(x) = -x^2-x\\) en général : \\(f\\) n'est ni paire ni impaire.`
    },
    {
      id: "fonctions-reference-18",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\dfrac{\\sqrt{x-1}}{\\sqrt{5-x}}\\) ?`,
      opts: [
        { key: "a", text: `\\([1\\,;5[\\)` },
        { key: "b", text: `\\(]1\\,;5[\\)` },
        { key: "c", text: `\\([1\\,;5]\\)` },
        { key: "d", text: `\\(]1\\,;5]\\)` }
      ],
      ans: "a",
      ansText: `Pour le numérateur, il faut \\(x-1 \\geqslant 0\\), soit \\(x \\geqslant 1\\). Pour le dénominateur, il faut \\(5-x \\geqslant 0\\) mais aussi \\(\\sqrt{5-x} \\neq 0\\) puisqu'il est au dénominateur, donc \\(5-x > 0\\) strictement, soit \\(x &lt; 5\\). En combinant les deux conditions : \\(D_f = [1\\,;5[\\).`
    },
    {
      id: "fonctions-reference-19",
      type: "num",
      q: `Soit \\(f(x) = x^2\\), définie sur \\(\\mathbb{R}\\). Combien de réels \\(x\\) vérifient \\(f(x) = -4\\), c'est-à-dire combien d'antécédents \\(-4\\) admet-il par \\(f\\) ?`,
      ans: 0,
      ansText: `Pour tout réel \\(x\\), \\(x^2 \\geqslant 0\\), donc l'équation \\(x^2 = -4\\) n'a aucune solution réelle : \\(-4\\) n'a aucun antécédent par \\(f\\).`,
      tol: 0.01
    },
    {
      id: "fonctions-reference-20",
      type: "qcm",
      q: `On sait qu'une fonction \\(f\\), définie sur \\([0\\,;5]\\), admet un maximum local en \\(x=2\\) avec \\(f(2) = 10\\), et que par ailleurs \\(f(0) = 100\\). Peut-on affirmer que \\(f(2)\\) est le maximum global de \\(f\\) sur \\([0\\,;5]\\) ?`,
      opts: [
        { key: "a", text: `Oui, un maximum local est toujours un maximum global` },
        { key: "b", text: `Oui, car \\(x=2\\) est à l'intérieur de l'intervalle` },
        { key: "c", text: `On ne peut rien affirmer, il manque des informations` },
        { key: "d", text: `Non, car \\(f(0) = 100 > 10 = f(2)\\) : \\(f(2)\\) n'est pas le maximum global` }
      ],
      ans: "d",
      ansText: `Un maximum local ne majore les images que sur un petit intervalle autour de \\(x=2\\), pas forcément sur \\(D_f\\) tout entier. Ici on connaît une valeur, \\(f(0)=100\\), strictement supérieure à \\(f(2)=10\\) : \\(f(2)\\) n'est donc pas le maximum global sur \\([0\\,;5]\\).`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
