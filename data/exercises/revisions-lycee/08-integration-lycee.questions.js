/* ================================================================
   Banque de questions — Primitives & intégration (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "integration-lycee";
  var questions = [
    {
      id: "integration-lycee-01",
      type: "qcm",
      q: `Soit \\(f\\) une fonction définie sur un intervalle \\(I\\). Par définition, une primitive de \\(f\\) sur \\(I\\) est une fonction \\(F\\), dérivable sur \\(I\\), telle que :`,
      opts: [
        { key: "a", text: `pour tout \\(x\\) de \\(I\\), \\(F(x)=f(x)\\)` },
        { key: "b", text: `pour tout \\(x\\) de \\(I\\), \\(F'(x)=f(x)\\)` },
        { key: "c", text: `pour tout \\(x\\) de \\(I\\), \\(F(x)=f'(x)\\)` },
        { key: "d", text: `pour tout \\(x\\) de \\(I\\), \\(F'(x)=f'(x)\\)` }
      ],
      ans: "b",
      ansText: `Une primitive \\(F\\) de \\(f\\) sur \\(I\\) vérifie \\(F'=f\\) sur \\(I\\).`
    },
    {
      id: "integration-lycee-02",
      type: "qcm",
      q: `Quel est l'ensemble des primitives de \\(f(x)=3x^2\\) sur \\(\\mathbb{R}\\) ?`,
      opts: [
        { key: "a", text: `les fonctions \\(x \\mapsto x^3+k\\), \\(k\\in\\mathbb{R}\\)` },
        { key: "b", text: `uniquement la fonction \\(x \\mapsto x^3\\)` },
        { key: "c", text: `les fonctions \\(x \\mapsto 3x^3+k\\), \\(k\\in\\mathbb{R}\\)` },
        { key: "d", text: `les fonctions \\(x \\mapsto \\dfrac{x^4}{4}+k\\), \\(k\\in\\mathbb{R}\\)` }
      ],
      ans: "a",
      ansText: `\\((x^3)'=3x^2\\), et toutes les primitives de \\(f\\) sur \\(\\mathbb{R}\\) s'obtiennent en ajoutant une constante \\(k\\).`
    },
    {
      id: "integration-lycee-03",
      type: "num",
      q: `Soit \\(f(x)=4x^3\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=5\\). Calculer \\(F(2)\\).`,
      ans: 21,
      ansText: `\\(F(x)=x^4+5\\), donc \\(F(2)=16+5=21\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-04",
      type: "qcm",
      q: `Sur l'intervalle \\(]0;+\\infty[\\), une primitive de \\(f(x)=\\dfrac{1}{x}\\) est :`,
      opts: [
        { key: "a", text: `\\(\\ln x\\)` },
        { key: "b", text: `\\(x\\ln x - x\\)` },
        { key: "c", text: `\\(-\\ln x\\)` },
        { key: "d", text: `\\(\\dfrac{1}{x^2}\\)` }
      ],
      ans: "a",
      ansText: `\\((\\ln x)'=\\dfrac{1}{x}\\) sur \\(]0;+\\infty[\\). (\\(x\\ln x-x\\) est une primitive de \\(\\ln x\\), pas de \\(1/x\\).)`
    },
    {
      id: "integration-lycee-05",
      type: "qcm",
      q: `Une primitive de \\(f(x)=e^x+\\cos x\\) sur \\(\\mathbb{R}\\) est :`,
      opts: [
        { key: "a", text: `\\(e^x+\\sin x\\)` },
        { key: "b", text: `\\(e^x+\\sin x+x\\)` },
        { key: "c", text: `\\(xe^x+\\sin x\\)` },
        { key: "d", text: `\\(e^x-\\sin x\\)` }
      ],
      ans: "a",
      ansText: `\\((e^x+\\sin x)'=e^x+\\cos x=f(x)\\).`
    },
    {
      id: "integration-lycee-06",
      type: "num",
      q: `Soit \\(f(x)=\\sin x\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=3\\). Calculer \\(F(\\pi)\\).`,
      ans: 5,
      ansText: `\\(F(x)=-\\cos x+4\\) (car \\(-\\cos 0+k=3 \\Rightarrow k=4\\)), donc \\(F(\\pi)=-(-1)+4=5\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-07",
      type: "num",
      q: `Soit \\(f(x)=e^x\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=-2\\). Calculer \\(F(\\ln 3)\\).`,
      ans: 0,
      ansText: `\\(F(x)=e^x-3\\) (car \\(1+k=-2 \\Rightarrow k=-3\\)), donc \\(F(\\ln 3)=e^{\\ln 3}-3=3-3=0\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-08",
      type: "qcm",
      q: `On sait que \\(\\displaystyle\\int_0^2 f(x)\\,dx=5\\) et \\(\\displaystyle\\int_2^5 f(x)\\,dx=-3\\). Que vaut \\(\\displaystyle\\int_0^5 f(x)\\,dx\\) ?`,
      opts: [
        { key: "a", text: `\\(-8\\)` },
        { key: "b", text: `\\(-2\\)` },
        { key: "c", text: `\\(8\\)` },
        { key: "d", text: `\\(2\\)` }
      ],
      ans: "d",
      ansText: `Relation de Chasles : \\(\\int_0^5 f=\\int_0^2 f+\\int_2^5 f=5+(-3)=2\\).`
    },
    {
      id: "integration-lycee-09",
      type: "num",
      q: `Calculer \\(\\displaystyle\\int_1^3 (2x-1)\\,dx\\).`,
      ans: 6,
      ansText: `Une primitive de \\(2x-1\\) est \\(x^2-x\\), donc l'intégrale vaut \\((9-3)-(1-1)=6\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-10",
      type: "qcm",
      q: `Une primitive de \\(f(x)=(2x-1)e^{x^2-x}\\) sur \\(\\mathbb{R}\\) est :`,
      opts: [
        { key: "a", text: `\\(e^{x^2-x}\\)` },
        { key: "b", text: `\\((x^2-x)e^{x^2-x}\\)` },
        { key: "c", text: `\\(\\dfrac{e^{x^2-x}}{2x-1}\\)` },
        { key: "d", text: `\\((2x-1)e^{x^2-x}\\)` }
      ],
      ans: "a",
      ansText: `On reconnaît la forme \\(u'e^{u}\\) avec \\(u(x)=x^2-x\\), \\(u'(x)=2x-1\\) : une primitive est \\(e^{u}=e^{x^2-x}\\).`
    },
    {
      id: "integration-lycee-11",
      type: "qcm",
      q: `\\(f\\) est continue et positive sur \\([1;4]\\). Que représente géométriquement \\(\\displaystyle\\int_1^4 f(x)\\,dx\\) ?`,
      opts: [
        { key: "a", text: `le nombre dérivé de \\(f\\) en \\(x=2{,}5\\)` },
        { key: "b", text: `la valeur moyenne de \\(f\\) sur \\([1;4]\\)` },
        { key: "c", text: `la longueur de la courbe de \\(f\\) entre \\(1\\) et \\(4\\)` },
        { key: "d", text: `l'aire, en unités d'aire, du domaine délimité par la courbe de \\(f\\), l'axe des abscisses et les droites \\(x=1\\) et \\(x=4\\)` }
      ],
      ans: "d",
      ansText: `Pour \\(f\\) continue et positive sur \\([a;b]\\), \\(\\int_a^b f(x)\\,dx\\) est l'aire sous la courbe.`
    },
    {
      id: "integration-lycee-12",
      type: "qcm",
      q: `Soit \\(f\\) une fonction continue telle que \\(f(x)\\geq 0\\) pour tout \\(x\\in[2;6]\\). Que peut-on affirmer sur \\(\\displaystyle\\int_2^6 f(x)\\,dx\\) ?`,
      opts: [
        { key: "a", text: `on ne peut rien affirmer sans connaître \\(f\\) explicitement` },
        { key: "b", text: `elle est strictement négative` },
        { key: "c", text: `elle est positive ou nulle` },
        { key: "d", text: `elle vaut nécessairement \\(0\\)` }
      ],
      ans: "c",
      ansText: `Propriété de positivité : si \\(a\\leq b\\) et \\(f\\geq 0\\) sur \\([a;b]\\), alors \\(\\int_a^b f(x)\\,dx\\geq 0\\).`
    },
    {
      id: "integration-lycee-13",
      type: "qcm",
      q: `Sur l'intervalle \\(]-\\infty;0[\\), une primitive de \\(f(x)=\\dfrac{1}{x}\\) est :`,
      opts: [
        { key: "a", text: `\\(\\ln x\\)` },
        { key: "b", text: `\\(\\dfrac{1}{x^2}\\)` },
        { key: "c", text: `\\(-\\ln(-x)\\)` },
        { key: "d", text: `\\(\\ln(-x)\\)` }
      ],
      ans: "d",
      ansText: `\\(\\ln x\\) n'est pas défini pour \\(x&lt;0\\). En revanche \\(\\ln(-x)\\) est défini sur \\(]-\\infty;0[\\) et \\((\\ln(-x))'=\\dfrac{-1}{-x}=\\dfrac{1}{x}\\) : c'est bien \\(\\ln|x|\\).`
    },
    {
      id: "integration-lycee-14",
      type: "num",
      q: `Calculer \\(\\displaystyle\\int_0^2 \\dfrac{x}{x^2+1}\\,dx\\) (arrondir à \\(0{,}01\\) près).`,
      ans: 0.8,
      ansText: `Une primitive de \\(\\dfrac{x}{x^2+1}\\) est \\(\\dfrac12\\ln(x^2+1)\\) (forme \\(\\frac{u'}{u}\\) avec \\(u=x^2+1\\), \\(u'=2x\\), d'où le facteur \\(\\frac12\\)). L'intégrale vaut \\(\\dfrac12\\ln 5-\\dfrac12\\ln 1=\\dfrac12\\ln 5\\approx 0{,}80\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-15",
      type: "qcm",
      q: `\\(f\\) est continue sur \\([0;4]\\), strictement négative sur \\([0;2[\\) et strictement positive sur \\(]2;4]\\). Que représente géométriquement \\(\\displaystyle\\int_0^4 f(x)\\,dx\\) ?`,
      opts: [
        { key: "a", text: `l'intégrale est nécessairement nulle puisque \\(f\\) change de signe` },
        { key: "b", text: `l'aire du domaine uniquement pour \\(x\\in[2;4]\\)` },
        { key: "c", text: `l'aire totale (toujours positive) du domaine compris entre la courbe et l'axe des abscisses` },
        { key: "d", text: `la différence entre l'aire au-dessus de l'axe (pour \\(x\\in[2;4]\\)) et l'aire en dessous (pour \\(x\\in[0;2]\\)) : une aire « algébrique »` }
      ],
      ans: "d",
      ansText: `Dès que \\(f\\) change de signe, l'intégrale n'est plus une aire géométrique mais une somme algébrique (parties positives moins parties négatives).`
    },
    {
      id: "integration-lycee-16",
      type: "qcm",
      q: `Pourquoi une fonction continue sur un intervalle \\(I\\) admet-elle une infinité de primitives sur \\(I\\) ?`,
      opts: [
        { key: "a", text: `car si \\(F\\) est une primitive de \\(f\\) sur \\(I\\), alors pour tout réel \\(k\\), la fonction \\(F+k\\) est aussi une primitive de \\(f\\) sur \\(I\\) (deux fonctions ayant la même dérivée sur un intervalle diffèrent d'une constante)` },
        { key: "b", text: `car il existe plusieurs façons de dériver une même fonction` },
        { key: "c", text: `car \\(f\\) n'est pas dérivable` },
        { key: "d", text: `car l'intégrale \\(\\int f(x)\\,dx\\) dépend du choix des bornes \\(a\\) et \\(b\\)` }
      ],
      ans: "a",
      ansText: `Ajouter n'importe quelle constante \\(k\\) à une primitive \\(F\\) donne encore une primitive, puisque \\((F+k)'=F'=f\\) : c'est pour cela qu'on parle de la famille des primitives « à une constante près ».`
    },
    {
      id: "integration-lycee-17",
      type: "num",
      q: `Calculer \\(\\displaystyle\\int_0^1 \\dfrac{3}{2x+1}\\,dx\\) (arrondir à \\(0{,}01\\) près).`,
      ans: 1.65,
      ansText: `On reconnaît la forme \\(\\lambda\\dfrac{u'}{u}\\) avec \\(u(x)=2x+1\\), \\(u'(x)=2\\) : \\(\\dfrac{3}{2x+1}=\\dfrac{3}{2}\\times\\dfrac{2}{2x+1}\\), donc une primitive est \\(\\dfrac32\\ln(2x+1)\\) (pas de valeur absolue car \\(2x+1>0\\) sur \\([0;1]\\)). L'intégrale vaut \\(\\dfrac32\\ln 3-\\dfrac32\\ln 1=\\dfrac32\\ln 3\\approx 1{,}65\\).`,
      tol: 0.01
    },
    {
      id: "integration-lycee-18",
      type: "qcm",
      q: `Sur l'intervalle \\(\\left]\\dfrac13;+\\infty\\right[\\), une primitive de \\(f(x)=\\dfrac{1}{3x-1}\\) est :`,
      opts: [
        { key: "a", text: `\\(\\ln(3x-1)\\)` },
        { key: "b", text: `\\(3\\ln(3x-1)\\)` },
        { key: "c", text: `\\(\\dfrac{1}{3}\\ln(3x-1)\\)` },
        { key: "d", text: `\\(\\dfrac{1}{3}(3x-1)\\)` }
      ],
      ans: "c",
      ansText: `On a \\(u(x)=3x-1\\) donc \\(u'(x)=3\\), et \\(f(x)=\\dfrac{1}{3x-1}=\\dfrac13\\times\\dfrac{3}{3x-1}=\\dfrac13\\times\\dfrac{u'(x)}{u(x)}\\) : il faut bien diviser par le coefficient \\(3\\), pas le multiplier ni l'oublier. Une primitive est donc \\(\\dfrac13\\ln(3x-1)\\) (sans valeur absolue, car \\(3x-1>0\\) sur cet intervalle).`
    },
    {
      id: "integration-lycee-19",
      type: "qcm",
      q: `Soit \\(f\\) une fonction continue sur \\([0;3]\\) telle que \\(f(x)\\geq 2\\) pour tout \\(x\\in[0;3]\\). Que peut-on affirmer sur \\(\\displaystyle\\int_0^3 f(x)\\,dx\\) ?`,
      opts: [
        { key: "a", text: `elle vaut exactement \\(6\\)` },
        { key: "b", text: `elle est supérieure ou égale à \\(6\\)` },
        { key: "c", text: `elle est inférieure ou égale à \\(6\\)` },
        { key: "d", text: `on ne peut rien affirmer sans connaître \\(f\\) explicitement` }
      ],
      ans: "b",
      ansText: `La fonction constante \\(g(x)=2\\) vérifie \\(g(x)\\leq f(x)\\) sur \\([0;3]\\). Par la propriété de comparaison, \\(\\int_0^3 g(x)\\,dx\\leq \\int_0^3 f(x)\\,dx\\), or \\(\\int_0^3 2\\,dx=6\\), donc \\(\\int_0^3 f(x)\\,dx\\geq 6\\).`
    },
    {
      id: "integration-lycee-20",
      type: "num",
      q: `Calculer \\(\\displaystyle\\int_0^{\\ln 2} (2e^x-x)\\,dx\\) (arrondir à \\(0{,}01\\) près).`,
      ans: 1.76,
      ansText: `Par linéarité, une primitive de \\(2e^x-x\\) est \\(2e^x-\\dfrac{x^2}{2}\\). En \\(\\ln 2\\) : \\(2e^{\\ln 2}-\\dfrac{(\\ln 2)^2}{2}=4-\\dfrac{(\\ln 2)^2}{2}\\). En \\(0\\) : \\(2-0=2\\). L'intégrale vaut donc \\(2-\\dfrac{(\\ln 2)^2}{2}\\approx 1{,}76\\).`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
