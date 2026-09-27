/* ================================================================
   Banque de questions — Étude de fonctions (40 questions)
   Adapté pour le cours Maths Workshop (EM Lyon, BBA1).
   ================================================================ */

(function () {
  var slug = "etude-fonctions-workshop";
  var questions = [
    {
      id: "etude-fonctions-workshop-01",
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
      id: "etude-fonctions-workshop-02",
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
      id: "etude-fonctions-workshop-03",
      type: "num",
      q: `Soit \\(f(x) = 3x^2 - 2x + 7\\). Calculer \\(f'(1)\\).`,
      ans: 4,
      ansText: `\\(f'(x) = 6x - 2\\), donc \\(f'(1) = 6 - 2 = 4\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-04",
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
      id: "etude-fonctions-workshop-05",
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
      id: "etude-fonctions-workshop-06",
      type: "num",
      q: `Soit \\(f(x) = (2x+1)(x-3)\\). En utilisant la formule du produit \\((uv)'=u'v+uv'\\), calculer \\(f'(0)\\).`,
      ans: -5,
      ansText: `Avec \\(u=2x+1\\), \\(u'=2\\), \\(v=x-3\\), \\(v'=1\\) : \\(f'(x) = 2(x-3) + (2x+1) = 4x - 5\\), donc \\(f'(0) = -5\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-07",
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
      id: "etude-fonctions-workshop-08",
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
      id: "etude-fonctions-workshop-09",
      type: "num",
      q: `Soit \\(f(x) = x^2 - 4x + 5\\). La tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\) a pour équation réduite \\(y = mx + p\\). Donner la valeur de \\(p\\).`,
      ans: 4,
      ansText: `\\(f'(x)=2x-4\\). \\(f(1) = 1-4+5=2\\) et \\(f'(1) = 2-4=-2\\). Tangente : \\(y = -2(x-1)+2 = -2x+4\\), donc \\(p=4\\) (et \\(m=-2\\)).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-10",
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
      id: "etude-fonctions-workshop-11",
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
      id: "etude-fonctions-workshop-12",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{x-1}{x^2+1}\\). En utilisant la formule du quotient, calculer \\(f'(0)\\).`,
      ans: 1,
      ansText: `Avec \\(u=x-1\\), \\(u'=1\\), \\(v=x^2+1\\), \\(v'=2x\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{(x^2+1) - (x-1)(2x)}{(x^2+1)^2} = \\dfrac{-x^2+2x+1}{(x^2+1)^2}\\). Donc \\(f'(0) = \\dfrac{1}{1} = 1\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-13",
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
      id: "etude-fonctions-workshop-14",
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
      id: "etude-fonctions-workshop-15",
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
      id: "etude-fonctions-workshop-16",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{2x}{x+1}\\) sur \\(]-1;+\\infty[\\). Calculer le coefficient directeur de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\).`,
      ans: 0.5,
      ansText: `Avec \\(u=2x\\), \\(u'=2\\), \\(v=x+1\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{2(x+1)-2x}{(x+1)^2} = \\dfrac{2}{(x+1)^2}\\). Donc \\(f'(1) = \\dfrac{2}{4} = 0{,}5\\), qui est le coefficient directeur de la tangente en \\(a=1\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-17",
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
      id: "etude-fonctions-workshop-18",
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
      id: "etude-fonctions-workshop-19",
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
      id: "etude-fonctions-workshop-20",
      type: "num",
      q: `Soit \\(f(x) = e^{-x+2}\\). Calculer le coefficient directeur de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a=2\\).`,
      ans: -1,
      ansText: `Avec la règle \\(x \\mapsto e^{u(x)}\\), \\(u(x) = -x+2\\), \\(u'(x) = -1\\) : \\(f'(x) = u'(x)e^{u(x)} = -e^{-x+2}\\). Donc \\(f'(2) = -e^{0} = -1\\), qui est le coefficient directeur cherché. Oublier le signe \\(-\\) issu de la dérivée de l'intérieur est l'erreur classique ici.`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-21",
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
      id: "etude-fonctions-workshop-22",
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
      id: "etude-fonctions-workshop-23",
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
      id: "etude-fonctions-workshop-24",
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
      id: "etude-fonctions-workshop-25",
      type: "num",
      q: `Soit \\(f(x) = x^3 - 2x^2 + 1\\). Calculer \\(f'(2)\\).`,
      ans: 4,
      ansText: `\\(f'(x)=3x^2-4x\\), donc \\(f'(2) = 3\\times4 - 4\\times2 = 12-8=4\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-26",
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
      id: "etude-fonctions-workshop-27",
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
      id: "etude-fonctions-workshop-28",
      type: "num",
      q: `Soit \\(f(x) = x^3-3x^2+2\\). On admet que \\(f'(x)=3x(x-2)\\), avec \\(f'>0\\) sur \\(]-\\infty;0[\\), \\(f'&lt;0\\) sur \\(]0;2[\\), \\(f'>0\\) sur \\(]2;+\\infty[\\). Quelle est la valeur du minimum local de \\(f\\) ?`,
      ans: -2,
      ansText: `Le minimum local est atteint en \\(x=2\\) (là où \\(f'\\) passe de \\(-\\) à \\(+\\)) : \\(f(2) = 8-12+2=-2\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-29",
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
      id: "etude-fonctions-workshop-30",
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
      id: "etude-fonctions-workshop-31",
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
      id: "etude-fonctions-workshop-32",
      type: "num",
      q: `Quelle est la limite de \\(f(x) = x\\,e^{-x}\\) quand \\(x \\to +\\infty\\) ? (résultat de croissances comparées : l'exponentielle l'emporte sur \\(x\\))`,
      ans: 0,
      ansText: `Par croissances comparées, \\(\\displaystyle\\lim_{x\\to+\\infty} x\\,e^{-x} = 0\\) : la droite \\(y=0\\) est asymptote horizontale en \\(+\\infty\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-33",
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
      id: "etude-fonctions-workshop-34",
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
      id: "etude-fonctions-workshop-35",
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
      id: "etude-fonctions-workshop-36",
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
      id: "etude-fonctions-workshop-37",
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
      id: "etude-fonctions-workshop-38",
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
      id: "etude-fonctions-workshop-39",
      type: "num",
      q: `Soit \\(f(x) = \\dfrac{x-1}{x^2+2}\\). Calculer \\(f'(0)\\).`,
      ans: 0.5,
      ansText: `\\(f'(x) = \\dfrac{1\\times(x^2+2) - (x-1)\\times2x}{(x^2+2)^2} = \\dfrac{-x^2+2x+2}{(x^2+2)^2}\\), donc \\(f'(0) = \\dfrac{2}{4} = 0{,}5\\).`,
      tol: 0.01
    },
    {
      id: "etude-fonctions-workshop-40",
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
