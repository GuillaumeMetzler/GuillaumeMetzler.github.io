/* ================================================================
   Banque de questions — Dérivation (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "derivation-lycee";
  var questions = [
    {
      id: "derivation-lycee-01",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = x^3\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = x^2\\)` },
        { key: "b", text: `\\(f'(x) = 3x^2\\)` },
        { key: "c", text: `\\(f'(x) = 3x^3\\)` },
        { key: "d", text: `\\(f'(x) = \\dfrac{x^4}{4}\\)` }
      ],
      ans: "b",
      ansText: `\\(f'(x) = 3x^2\\), formule \\((x^n)' = nx^{n-1}\\) avec \\(n=3\\).`
    },
    {
      id: "derivation-lycee-02",
      type: "qcm",
      q: `Quelle est la dérivée de la fonction constante \\(f(x) = 5\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = 0\\)` },
        { key: "b", text: `\\(f'(x) = 5\\)` },
        { key: "c", text: `\\(f'(x) = 1\\)` },
        { key: "d", text: `\\(f'(x)\\) n'existe pas` }
      ],
      ans: "a",
      ansText: `La dérivée d'une constante est toujours nulle : \\(f'(x) = 0\\).`
    },
    {
      id: "derivation-lycee-03",
      type: "num",
      q: `Soit \\(f(x) = 3x^2 - 2x + 7\\). Calculer \\(f'(1)\\).`,
      ans: 4,
      ansText: `\\(f'(x) = 6x - 2\\), donc \\(f'(1) = 6 - 2 = 4\\).`,
      tol: 0.01
    },
    {
      id: "derivation-lycee-04",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = \\dfrac{1}{x}\\) sur \\(]0;+\\infty[\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = \\dfrac{1}{x^2}\\)` },
        { key: "b", text: `\\(f'(x) = -\\dfrac{1}{x}\\)` },
        { key: "c", text: `\\(f'(x) = -\\dfrac{1}{x^2}\\)` },
        { key: "d", text: `\\(f'(x) = \\dfrac{-1}{2x}\\)` }
      ],
      ans: "c",
      ansText: `\\(f'(x) = -\\dfrac{1}{x^2}\\).`
    },
    {
      id: "derivation-lycee-05",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = \\sqrt{x}\\) sur \\(]0;+\\infty[\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\)` },
        { key: "b", text: `\\(f'(x) = \\dfrac{1}{\\sqrt{x}}\\)` },
        { key: "c", text: `\\(f'(x) = 2\\sqrt{x}\\)` },
        { key: "d", text: `\\(f'(x) = \\dfrac{\\sqrt{x}}{2}\\)` }
      ],
      ans: "a",
      ansText: `\\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\).`
    },
    {
      id: "derivation-lycee-06",
      type: "num",
      q: `Soit \\(f(x) = (2x+1)(x-3)\\). En utilisant la formule du produit \\((uv)'=u'v+uv'\\), calculer \\(f'(0)\\).`,
      ans: -5,
      ansText: `Avec \\(u=2x+1\\), \\(u'=2\\), \\(v=x-3\\), \\(v'=1\\) : \\(f'(x) = 2(x-3) + (2x+1) = 4x - 5\\), donc \\(f'(0) = -5\\).`,
      tol: 0.01
    },
    {
      id: "derivation-lycee-07",
      type: "qcm",
      q: `Soit \\(f(x) = \\dfrac{x+2}{x-1}\\) sur \\(]1;+\\infty[\\). Quelle est \\(f'(x)\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = \\dfrac{-3}{(x-1)^2}\\)` },
        { key: "b", text: `\\(f'(x) = \\dfrac{3}{(x-1)^2}\\)` },
        { key: "c", text: `\\(f'(x) = \\dfrac{1}{(x-1)^2}\\)` },
        { key: "d", text: `\\(f'(x) = \\dfrac{-3}{x-1}\\)` }
      ],
      ans: "a",
      ansText: `Avec \\(u=x+2\\), \\(u'=1\\), \\(v=x-1\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{(x-1)-(x+2)}{(x-1)^2} = \\dfrac{-3}{(x-1)^2}\\).`
    },
    {
      id: "derivation-lycee-08",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = (5x+2)^2\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = 50x + 20\\)` },
        { key: "b", text: `\\(f'(x) = 10x + 4\\)` },
        { key: "c", text: `\\(f'(x) = 25x + 10\\)` },
        { key: "d", text: `\\(f'(x) = 5x + 2\\)` }
      ],
      ans: "a",
      ansText: `Avec la règle de composée \\(x \\mapsto u(ax+b)\\), \\(u(t)=t^2\\), \\(u'(t)=2t\\) : \\(f'(x) = 5 \\times 2(5x+2) = 10(5x+2) = 50x+20\\). Oublier le facteur \\(5\\) donne l'erreur classique \\(2(5x+2)=10x+4\\).`
    },
    {
      id: "derivation-lycee-09",
      type: "num",
      q: `Soit \\(f(x) = x^2 - 4x + 5\\). La tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\) a pour équation réduite \\(y = mx + p\\). Donner la valeur de \\(p\\).`,
      ans: 4,
      ansText: `\\(f'(x)=2x-4\\). \\(f(1) = 1-4+5=2\\) et \\(f'(1) = 2-4=-2\\). Tangente : \\(y = -2(x-1)+2 = -2x+4\\), donc \\(p=4\\) (et \\(m=-2\\)).`,
      tol: 0.01
    },
    {
      id: "derivation-lycee-10",
      type: "qcm",
      q: `On sait que \\(f'(x) &lt; 0\\) sur \\(]-\\infty;2[\\), \\(f'(2)=0\\) et \\(f'(x) > 0\\) sur \\(]2;+\\infty[\\). Que peut-on dire de \\(f\\) en \\(x=2\\) ?`,
      opts: [
        { key: "a", text: `f admet un minimum local en 2` },
        { key: "b", text: `f admet un maximum local en 2` },
        { key: "c", text: `f n'admet pas d'extremum en 2 car la dérivée s'annule en un seul point` },
        { key: "d", text: `On ne peut rien dire sans connaître f(2)` }
      ],
      ans: "a",
      ansText: `\\(f'\\) change de signe (négative puis positive) en \\(2\\), donc \\(f\\) admet un minimum local en \\(2\\) (décroissante avant, croissante après).`
    },
    {
      id: "derivation-lycee-11",
      type: "qcm",
      q: `Soit \\(f(x) = x^3\\). On a \\(f'(x) = 3x^2\\), donc \\(f'(0) = 0\\). Peut-on affirmer que \\(f\\) admet un extremum local en \\(0\\) ?`,
      opts: [
        { key: "a", text: `Oui, un minimum local` },
        { key: "b", text: `Oui, un maximum local` },
        { key: "c", text: `Non, car f' ne change pas de signe en 0` },
        { key: "d", text: `On ne peut pas savoir sans calculer f(0)` }
      ],
      ans: "c",
      ansText: `Non : \\(f'(x) = 3x^2 \\geq 0\\) pour tout \\(x\\), la dérivée ne change jamais de signe en \\(0\\) (positive des deux côtés), donc il n'y a pas d'extremum local en \\(0\\), même si \\(f'(0)=0\\).`
    },
    {
      id: "derivation-lycee-12",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{x-1}{x^2+1}\\). En utilisant la formule du quotient, calculer \\(f'(0)\\).`,
      ans: 1,
      ansText: `Avec \\(u=x-1\\), \\(u'=1\\), \\(v=x^2+1\\), \\(v'=2x\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{(x^2+1) - (x-1)(2x)}{(x^2+1)^2} = \\dfrac{-x^2+2x+1}{(x^2+1)^2}\\). Donc \\(f'(0) = \\dfrac{1}{1} = 1\\).`,
      tol: 0.01
    },
    {
      id: "derivation-lycee-13",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = e^{3x-1}\\) ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = e^{3x-1}\\)` },
        { key: "b", text: `\\(f'(x) = 3e^{3x-1}\\)` },
        { key: "c", text: `\\(f'(x) = 3xe^{3x-1}\\)` },
        { key: "d", text: `\\(f'(x) = (3x-1)e^{3x-1}\\)` }
      ],
      ans: "b",
      ansText: `Avec la règle \\(x \\mapsto e^{u(x)}\\), \\(u(x)=3x-1\\) et \\(u'(x)=3\\) : \\(f'(x) = u'(x)e^{u(x)} = 3e^{3x-1}\\). Oublier le facteur \\(3\\) donne l'erreur \\(e^{3x-1}\\).`
    },
    {
      id: "derivation-lycee-14",
      type: "qcm",
      q: `Soit \\(f(x) = x^2 - 6x + 5\\). Pour quelle valeur de \\(a\\) la tangente à la courbe de \\(f\\) au point d'abscisse \\(a\\) est-elle horizontale ?`,
      opts: [
        { key: "a", text: `\\(a = -3\\)` },
        { key: "b", text: `\\(a = 6\\)` },
        { key: "c", text: `\\(a = 3\\)` },
        { key: "d", text: `\\(a = 0\\)` }
      ],
      ans: "c",
      ansText: `La tangente est horizontale quand \\(f'(a)=0\\). Ici \\(f'(x) = 2x-6\\), donc \\(f'(a)=0 \\Leftrightarrow 2a-6=0 \\Leftrightarrow a=3\\).`
    },
    {
      id: "derivation-lycee-15",
      type: "qcm",
      q: `Soit \\(f(x) = -x^2 + 4x - 1\\). On étudie le signe de \\(f'(x)\\) sur \\(\\mathbb{R}\\). Que peut-on en conclure sur \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(f\\) est croissante sur \\(]-\\infty;2]\\) puis décroissante sur \\([2;+\\infty[\\) : \\(f\\) admet un maximum local en \\(2\\)` },
        { key: "b", text: `\\(f'(x)\\) ne s'annule jamais, donc \\(f\\) n'admet pas d'extremum` },
        { key: "c", text: `\\(f\\) est croissante sur tout \\(\\mathbb{R}\\) car le coefficient dominant de \\(f'\\) est négatif` },
        { key: "d", text: `\\(f\\) est décroissante sur \\(]-\\infty;2]\\) puis croissante sur \\([2;+\\infty[\\) : \\(f\\) admet un minimum local en \\(2\\)` }
      ],
      ans: "a",
      ansText: `\\(f'(x) = -2x+4\\), qui s'annule en \\(x=2\\), est positive avant (\\(f'(1)=2>0\\)) et négative après (\\(f'(3)=-2&lt;0\\)). \\(f\\) est donc croissante puis décroissante, et admet un maximum local en \\(2\\).`
    },
    {
      id: "derivation-lycee-16",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{2x}{x+1}\\) sur \\(]-1;+\\infty[\\). Calculer le coefficient directeur de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\).`,
      ans: 0.5,
      ansText: `Avec \\(u=2x\\), \\(u'=2\\), \\(v=x+1\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{2(x+1)-2x}{(x+1)^2} = \\dfrac{2}{(x+1)^2}\\). Donc \\(f'(1) = \\dfrac{2}{4} = 0{,}5\\), qui est le coefficient directeur de la tangente en \\(a=1\\).`,
      tol: 0.01
    },
    {
      id: "derivation-lycee-17",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = \\sqrt{2x+3}\\) sur son ensemble de définition ?`,
      opts: [
        { key: "a", text: `\\(f'(x) = \\dfrac{1}{2\\sqrt{2x+3}}\\)` },
        { key: "b", text: `\\(f'(x) = \\dfrac{2}{\\sqrt{2x+3}}\\)` },
        { key: "c", text: `\\(f'(x) = \\dfrac{1}{\\sqrt{2x+3}}\\)` },
        { key: "d", text: `\\(f'(x) = -\\dfrac{1}{\\sqrt{2x+3}}\\)` }
      ],
      ans: "c",
      ansText: `Avec \\(u = 2x+3\\), \\(u'=2\\), et la formule \\((\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}\\) : \\(f'(x) = \\dfrac{2}{2\\sqrt{2x+3}} = \\dfrac{1}{\\sqrt{2x+3}}\\). Oublier de multiplier par \\(u'=2\\) donne l'erreur \\(\\dfrac{1}{2\\sqrt{2x+3}}\\).`
    },
    {
      id: "derivation-lycee-18",
      type: "qcm",
      q: `Quelle est la dérivée de \\(f(x) = (x^2+1)^2\\) ? (Attention, l'intérieur \\(x^2+1\\) n'est pas de la forme \\(ax+b\\).)`,
      opts: [
        { key: "a", text: `\\(f'(x) = 2(x^2+1)\\)` },
        { key: "b", text: `\\(f'(x) = 2x(x^2+1)\\)` },
        { key: "c", text: `\\(f'(x) = 4x^3\\)` },
        { key: "d", text: `\\(f'(x) = 4x^3 + 4x\\)` }
      ],
      ans: "d",
      ansText: `Ici l'intérieur \\(x^2+1\\) n'est pas affine, donc la règle \\(a \\times u'(ax+b)\\) ne s'applique pas directement : il faut écrire \\(f = u^2\\) avec \\(u=x^2+1\\), \\(u'=2x\\), et utiliser \\((u^2)' = 2uu'\\), soit \\(f'(x) = 2(x^2+1)(2x) = 4x^3+4x\\). On peut aussi développer \\(f(x)=x^4+2x^2+1\\) puis dériver terme à terme, ce qui confirme le résultat. L'option \\(2(x^2+1)\\) oublie totalement de multiplier par la dérivée de l'intérieur.`
    },
    {
      id: "derivation-lycee-19",
      type: "qcm",
      q: `Soit \\(f(x) = x^3 - 3x\\), donc \\(f'(x) = 3x^2 - 3\\), qui s'annule en \\(x=-1\\) et \\(x=1\\). Que peut-on affirmer sur les extremums locaux de \\(f\\) ?`,
      opts: [
        { key: "a", text: `\\(f\\) admet un minimum local en \\(-1\\) et un maximum local en \\(1\\)` },
        { key: "b", text: `\\(f\\) admet un maximum local en \\(-1\\) et un minimum local en \\(1\\)` },
        { key: "c", text: `\\(f\\) admet un maximum local en \\(-1\\) et en \\(1\\)` },
        { key: "d", text: `\\(f\\) n'admet aucun extremum local car \\(f'\\) s'annule en deux points distincts` }
      ],
      ans: "b",
      ansText: `\\(f'(x)=3(x-1)(x+1)\\) est positive sur \\(]-\\infty;-1[\\), négative sur \\(]-1;1[\\), positive sur \\(]1;+\\infty[\\). Donc \\(f'\\) change de signe (\\(+\\) puis \\(-\\)) en \\(-1\\) : maximum local en \\(-1\\) ; et change de signe (\\(-\\) puis \\(+\\)) en \\(1\\) : minimum local en \\(1\\).`
    },
    {
      id: "derivation-lycee-20",
      type: "num",
      q: `Soit \\(f(x) = e^{-x+2}\\). Calculer le coefficient directeur de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a=2\\).`,
      ans: -1,
      ansText: `Avec la règle \\(x \\mapsto e^{u(x)}\\), \\(u(x) = -x+2\\), \\(u'(x) = -1\\) : \\(f'(x) = u'(x)e^{u(x)} = -e^{-x+2}\\). Donc \\(f'(2) = -e^{0} = -1\\), qui est le coefficient directeur cherché. Oublier le signe \\(-\\) issu de la dérivée de l'intérieur est l'erreur classique ici.`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
