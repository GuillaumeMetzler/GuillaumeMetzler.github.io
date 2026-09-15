/* ================================================================
   Banque de questions — Étude de fonctions (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "etude-fonctions";
  var questions = [
    {
      id: "etude-fonctions-01",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\dfrac{x+2}{x-5}\\) ?`,
      opts: [
        { key: "a", text: `\\(\\mathbb{R}\\setminus\\{-5;5\\}\\)` },
        { key: "b", text: `\\(\\mathbb{R}\\)` },
        { key: "c", text: `\\(\\mathbb{R}\\setminus\\{-2\\}\\)` },
        { key: "d", text: `\\(\\mathbb{R}\\setminus\\{5\\}\\)` }
      ],
      ans: "d",
      ansText: `Il faut exclure la valeur qui annule le dénominateur : \\(x-5=0 \\Leftrightarrow x=5\\). Donc \\(D_f=\\mathbb{R}\\setminus\\{5\\}\\).`
    },
    {
      id: "etude-fonctions-02",
      type: "qcm",
      q: `Quel est l'ensemble de définition de \\(f(x) = \\sqrt{5-x}\\) ?`,
      opts: [
        { key: "a", text: `\\(]-\\infty;5]\\)` },
        { key: "b", text: `\\([5;+\\infty[\\)` },
        { key: "c", text: `\\(\\mathbb{R}\\)` },
        { key: "d", text: `\\(]-\\infty;5[\\)` }
      ],
      ans: "a",
      ansText: `Il faut que l'expression sous la racine soit positive ou nulle : \\(5-x \\geqslant 0 \\Leftrightarrow x \\leqslant 5\\), donc \\(D_f = \\;]-\\infty;5]\\).`
    },
    {
      id: "etude-fonctions-03",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{3}{x-2}\\), définie sur \\(\\mathbb{R}\\setminus\\{2\\}\\). Quelle est l'équation de l'asymptote verticale à la courbe de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(y=2\\)` },
        { key: "b", text: `\\(x=2\\)` },
        { key: "c", text: `\\(x=-2\\)` },
        { key: "d", text: `\\(x=3\\)` }
      ],
      ans: "b",
      ansText: `Quand \\(x \\to 2\\), le dénominateur tend vers \\(0\\) et le numérateur vers \\(3 \\neq 0\\), donc \\(f(x) \\to \\pm\\infty\\) : asymptote verticale d'équation \\(x=2\\).`
    },
    {
      id: "etude-fonctions-04",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{5x-1}{2x+3}\\). Quelle est l'équation de l'asymptote horizontale à la courbe de \\(f\\) en \\(+\\infty\\) ?`,
      opts: [
        { key: "a", text: `\\(y=0\\)` },
        { key: "b", text: `\\(x=\\dfrac{5}{2}\\)` },
        { key: "c", text: `\\(y=-\\dfrac{1}{3}\\)` },
        { key: "d", text: `\\(y=\\dfrac{5}{2}\\)` }
      ],
      ans: "d",
      ansText: `En \\(+\\infty\\), \\(f(x)\\) se comporte comme \\(\\dfrac{5x}{2x} = \\dfrac{5}{2}\\), donc \\(\\displaystyle\\lim_{x\\to+\\infty} f(x) = \\dfrac{5}{2}\\) : asymptote horizontale \\(y=\\dfrac{5}{2}\\).`
    },
    {
      id: "etude-fonctions-05",
      type: "num",
      q: `Soit \\(f(x) = x^3 - 2x^2 + 1\\). Calculer \\(f'(2)\\).`,
      ans: 4,
      ansText: `\\(f'(x)=3x^2-4x\\), donc \\(f'(2) = 3\\times4 - 4\\times2 = 12-8=4\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-06",
      type: "qcm",
      q: `Soit \\(f(x) = -2x^2+4x+1\\) sur \\(\\mathbb{R}\\). Quel est le sens de variation de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(f\\) est décroissante sur \\(]-\\infty;1]\\) puis croissante sur \\([1;+\\infty[\\)` },
        { key: "b", text: `\\(f\\) est croissante sur \\(\\mathbb{R}\\)` },
        { key: "c", text: `\\(f\\) est décroissante sur \\(\\mathbb{R}\\)` },
        { key: "d", text: `\\(f\\) est croissante sur \\(]-\\infty;1]\\) puis décroissante sur \\([1;+\\infty[\\)` }
      ],
      ans: "d",
      ansText: `\\(f'(x) = -4x+4 = 4(1-x)\\) : \\(f'(x)>0\\) pour \\(x&lt;1\\) et \\(f'(x)&lt;0\\) pour \\(x>1\\), donc \\(f\\) croît puis décroît, avec un maximum en \\(x=1\\).`
    },
    {
      id: "etude-fonctions-07",
      type: "qcm",
      q: `Une fonction \\(f\\) est dérivable sur \\(\\mathbb{R}\\), avec \\(f'(x)>0\\) sur \\(]-\\infty;-2[\\), \\(f'(-2)=0\\), \\(f'(x)&lt;0\\) sur \\(]-2;3[\\), \\(f'(3)=0\\), \\(f'(x)>0\\) sur \\(]3;+\\infty[\\). Quels sont les extremums locaux de \\(f\\) ?`,
      opts: [
        { key: "a", text: `maximum local en \\(-2\\), minimum local en \\(3\\)` },
        { key: "b", text: `\\(f\\) n'a pas d'extremum local` },
        { key: "c", text: `minimum local en \\(-2\\), maximum local en \\(3\\)` },
        { key: "d", text: `maximum local en \\(-2\\) et en \\(3\\)` }
      ],
      ans: "a",
      ansText: `\\(f'\\) passe de \\(+\\) à \\(-\\) en \\(-2\\) : maximum local en \\(-2\\). \\(f'\\) passe de \\(-\\) à \\(+\\) en \\(3\\) : minimum local en \\(3\\).`
    },
    {
      id: "etude-fonctions-08",
      type: "num",
      q: `Soit \\(f(x) = x^3-3x^2+2\\). On admet que \\(f'(x)=3x(x-2)\\), avec \\(f'>0\\) sur \\(]-\\infty;0[\\), \\(f'&lt;0\\) sur \\(]0;2[\\), \\(f'>0\\) sur \\(]2;+\\infty[\\). Quelle est la valeur du minimum local de \\(f\\) ?`,
      ans: -2,
      ansText: `Le minimum local est atteint en \\(x=2\\) (là où \\(f'\\) passe de \\(-\\) à \\(+\\)) : \\(f(2) = 8-12+2=-2\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-09",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{x-1}{x^2-4}\\). Quelles sont les asymptotes verticales de la courbe de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(x=1\\)` },
        { key: "b", text: `\\(x=-2\\) et \\(x=2\\)` },
        { key: "c", text: `\\(x=-2\\) uniquement` },
        { key: "d", text: `\\(x=2\\) uniquement` }
      ],
      ans: "b",
      ansText: `\\(D_f = \\mathbb{R}\\setminus\\{-2;2\\}\\). En \\(x=2\\), le numérateur vaut \\(1\\neq0\\) ; en \\(x=-2\\), il vaut \\(-3\\neq0\\) : dans les deux cas le dénominateur s'annule sans que le numérateur s'annule, donc \\(f\\) admet deux asymptotes verticales, \\(x=-2\\) et \\(x=2\\).`
    },
    {
      id: "etude-fonctions-10",
      type: "qcm",
      q: `Soit \\(f(x) = \\sqrt{4-x^2}\\), définie sur \\([-2;2]\\). Quel est son sens de variation ?`,
      opts: [
        { key: "a", text: `croissante sur \\([-2;0]\\), décroissante sur \\([0;2]\\)` },
        { key: "b", text: `décroissante sur \\([-2;2]\\)` },
        { key: "c", text: `croissante sur \\([-2;2]\\)` },
        { key: "d", text: `décroissante sur \\([-2;0]\\), croissante sur \\([0;2]\\)` }
      ],
      ans: "a",
      ansText: `\\(f'(x) = \\dfrac{-x}{\\sqrt{4-x^2}}\\) : pour \\(x&lt;0\\), \\(f'(x)>0\\) (croissante) ; pour \\(x>0\\), \\(f'(x)&lt;0\\) (décroissante). Maximum local en \\(x=0\\), \\(f(0)=2\\).`
    },
    {
      id: "etude-fonctions-11",
      type: "qcm",
      q: `Soit \\(f(x) = x\\,e^{-x}\\) sur \\(\\mathbb{R}\\). En quelle valeur de \\(x\\) la fonction admet-elle un maximum local, et quelle est sa valeur ?`,
      opts: [
        { key: "a", text: `\\(x=0\\), \\(f(0)=0\\)` },
        { key: "b", text: `\\(x=-1\\), \\(f(-1)=-e\\)` },
        { key: "c", text: `\\(x=1\\), \\(f(1)=\\dfrac{1}{e}\\)` },
        { key: "d", text: `\\(x=1\\), \\(f(1)=e\\)` }
      ],
      ans: "c",
      ansText: `\\(f'(x) = (1-x)e^{-x}\\) s'annule en \\(x=1\\), positive avant, négative après : maximum local en \\(x=1\\), \\(f(1) = 1\\times e^{-1} = \\dfrac{1}{e}\\).`
    },
    {
      id: "etude-fonctions-12",
      type: "num",
      q: `Quelle est la limite de \\(f(x) = x\\,e^{-x}\\) quand \\(x \\to +\\infty\\) ? (résultat de croissances comparées : l'exponentielle l'emporte sur \\(x\\))`,
      ans: 0,
      ansText: `Par croissances comparées, \\(\\displaystyle\\lim_{x\\to+\\infty} x\\,e^{-x} = 0\\) : la droite \\(y=0\\) est asymptote horizontale en \\(+\\infty\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-13",
      type: "qcm",
      q: `Soit \\(f(x) = x^3\\). On a \\(f'(x)=3x^2\\) qui s'annule en \\(x=0\\). Peut-on affirmer que \\(f\\) admet un extremum local en \\(x=0\\) ?`,
      opts: [
        { key: "a", text: `Oui, un maximum local` },
        { key: "b", text: `Oui, un minimum local` },
        { key: "c", text: `Non, car \\(f'(0)\\) n'est pas nul` },
        { key: "d", text: `Non, car \\(f'\\) ne change pas de signe en \\(0\\) : \\(f\\) est strictement croissante sur \\(\\mathbb{R}\\)` }
      ],
      ans: "d",
      ansText: `\\(f'(x)=3x^2 \\geqslant 0\\) sur \\(\\mathbb{R}\\) et ne s'annule qu'en \\(0\\) sans changer de signe : \\(f\\) reste strictement croissante sur \\(\\mathbb{R}\\), \\(0\\) n'est pas un extremum.`
    },
    {
      id: "etude-fonctions-14",
      type: "qcm",
      q: `La courbe de \\(g(x) = \\dfrac{x^2-1}{x-1}\\) admet-elle une asymptote verticale en \\(x=1\\) ?`,
      opts: [
        { key: "a", text: `Non : après simplification \\(g(x)=x+1\\) pour \\(x\\neq1\\), et \\(\\displaystyle\\lim_{x\\to1} g(x) = 2\\) (limite finie)` },
        { key: "b", text: `Oui, car \\(x=1\\) n'appartient pas à l'ensemble de définition` },
        { key: "c", text: `Oui, car le dénominateur s'annule en \\(1\\)` },
        { key: "d", text: `Non, car \\(g\\) est un polynôme` }
      ],
      ans: "a",
      ansText: `Le numérateur et le dénominateur s'annulent tous deux en \\(1\\) : on factorise, \\(g(x) = \\dfrac{(x-1)(x+1)}{x-1} = x+1\\) pour \\(x\\neq1\\). La limite en \\(1\\) vaut \\(2\\), finie : il n'y a pas d'asymptote verticale.`
    },
    {
      id: "etude-fonctions-15",
      type: "qcm",
      q: `Le tableau de variations d'une fonction \\(f\\) continue sur \\([-1;6]\\) indique : \\(f\\) croissante de \\(-4\\) à \\(3\\) sur \\([-1;2]\\), puis décroissante de \\(3\\) à \\(-2\\) sur \\([2;6]\\). Combien de solutions a l'équation \\(f(x) = 1\\) sur \\([-1;6]\\) ?`,
      opts: [
        { key: "a", text: `0` },
        { key: "b", text: `2` },
        { key: "c", text: `1` },
        { key: "d", text: `3` }
      ],
      ans: "b",
      ansText: `Sur \\([-1;2]\\), \\(f\\) croît de \\(-4\\) à \\(3\\) : \\(1\\) est atteint une fois. Sur \\([2;6]\\), \\(f\\) décroît de \\(3\\) à \\(-2\\) : \\(1\\) est atteint une fois aussi. Total : \\(2\\) solutions.`
    },
    {
      id: "etude-fonctions-16",
      type: "qcm",
      q: `Une fonction \\(f\\), définie et dérivable sur \\(\\mathbb{R}\\), a le tableau de variations suivant : \\(f\\) décroissante sur \\(]-\\infty;-1]\\) de \\(+\\infty\\) à \\(2\\), croissante sur \\([-1;3]\\) de \\(2\\) à \\(6\\), décroissante sur \\([3;+\\infty[\\) de \\(6\\) à \\(-\\infty\\). Combien de solutions a l'équation \\(f(x)=4\\) sur \\(\\mathbb{R}\\) ?`,
      opts: [
        { key: "a", text: `2` },
        { key: "b", text: `1` },
        { key: "c", text: `4` },
        { key: "d", text: `3` }
      ],
      ans: "d",
      ansText: `Sur \\(]-\\infty;-1]\\), \\(f\\) parcourt \\(]2;+\\infty[\\) en décroissant : \\(4>2\\), une solution. Sur \\([-1;3]\\), \\(f\\) parcourt \\([2;6]\\) en croissant : \\(4\\) y est compris, une solution. Sur \\([3;+\\infty[\\), \\(f\\) parcourt \\(]-\\infty;6]\\) en décroissant : \\(4\\) y est compris, une solution. Total : \\(3\\) solutions.`
    },
    {
      id: "etude-fonctions-17",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{\\sqrt{x+3}}{x-1}\\). Quel est l'ensemble de définition de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(\\mathbb{R}\\setminus\\{1\\}\\)` },
        { key: "b", text: `\\([-3;1[\\,\\cup\\,]1;+\\infty[\\)` },
        { key: "c", text: `\\([-3;+\\infty[\\)` },
        { key: "d", text: `\\(]-\\infty;1[\\,\\cup\\,]1;+\\infty[\\)` }
      ],
      ans: "b",
      ansText: `Deux conditions se cumulent : sous la racine, \\(x+3\\geqslant0\\) soit \\(x\\geqslant-3\\) ; au dénominateur, \\(x-1\\neq0\\) soit \\(x\\neq1\\). En prenant l'intersection, \\(D_f = [-3;1[\\,\\cup\\,]1;+\\infty[\\).`
    },
    {
      id: "etude-fonctions-18",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{x}{x^2+1}\\) sur \\(\\mathbb{R}\\). On admet que \\(f'(x) = \\dfrac{1-x^2}{(x^2+1)^2}\\). Quels sont les extremums locaux de \\(f\\) ?`,
      opts: [
        { key: "a", text: `maximum local en \\(x=-1\\), minimum local en \\(x=1\\)` },
        { key: "b", text: `maximum local en \\(x=-1\\) et en \\(x=1\\)` },
        { key: "c", text: `minimum local en \\(x=-1\\), maximum local en \\(x=1\\)` },
        { key: "d", text: `\\(f\\) n'a pas d'extremum local` }
      ],
      ans: "c",
      ansText: `Comme \\((x^2+1)^2>0\\), le signe de \\(f'\\) est celui de \\(1-x^2\\) : négatif pour \\(x&lt;-1\\), positif pour \\(-1&lt;x&lt;1\\), négatif pour \\(x>1\\). \\(f'\\) passe de \\(-\\) à \\(+\\) en \\(-1\\) : minimum local. \\(f'\\) passe de \\(+\\) à \\(-\\) en \\(1\\) : maximum local.`
    },
    {
      id: "etude-fonctions-19",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{x-1}{x^2+2}\\). Calculer \\(f'(0)\\).`,
      ans: 0.5,
      ansText: `\\(f'(x) = \\dfrac{1\\times(x^2+2) - (x-1)\\times2x}{(x^2+2)^2} = \\dfrac{-x^2+2x+2}{(x^2+2)^2}\\), donc \\(f'(0) = \\dfrac{2}{4} = 0{,}5\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-20",
      type: "qcm",
      q: `Une fonction \\(f\\), continue sur \\([0;8]\\), a le tableau de variations suivant : croissante de \\(-3\\) à \\(5\\) sur \\([0;2]\\), décroissante de \\(5\\) à \\(2\\) sur \\([2;5]\\), croissante de \\(2\\) à \\(7\\) sur \\([5;8]\\). Combien de solutions a l'équation \\(f(x)=2\\) sur \\([0;8]\\) ?`,
      opts: [
        { key: "a", text: `1` },
        { key: "b", text: `4` },
        { key: "c", text: `3` },
        { key: "d", text: `2` }
      ],
      ans: "d",
      ansText: `Sur \\([0;2]\\), \\(f\\) croît de \\(-3\\) à \\(5\\) : \\(2\\) est atteint une fois, en un point intérieur. Sur \\([2;5]\\), \\(f\\) décroît de \\(5\\) à \\(2\\) : la valeur \\(2\\) est atteinte exactement en \\(x=5\\), la borne de l'intervalle. Sur \\([5;8]\\), \\(f\\) croît de \\(2\\) à \\(7\\) : la valeur \\(2\\) est de nouveau atteinte en \\(x=5\\), la même borne (piège classique : ne pas compter deux fois une solution atteinte à la jonction de deux intervalles). Au total : \\(2\\) solutions distinctes.`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
