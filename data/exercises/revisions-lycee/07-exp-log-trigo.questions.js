/* ================================================================
   Banque de questions — Exponentielle, logarithme & trigonométrie (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "exp-log-trigo";
  var questions = [
    {
      id: "exp-log-trigo-01",
      type: "qcm",
      q: `Simplifier \\( e^5\\times e^{-3} \\).`,
      opts: [
        { key: "a", text: `\\( e^2 \\)` },
        { key: "b", text: `\\( e^8 \\)` },
        { key: "c", text: `\\( e^{-2} \\)` },
        { key: "d", text: `\\( e^{15} \\)` }
      ],
      ans: "a",
      ansText: `\\( e^5\\times e^{-3}=e^{5-3}=e^2 \\)`
    },
    {
      id: "exp-log-trigo-02",
      type: "qcm",
      q: `Quel est le signe de \\( e^x \\) pour tout réel \\( x \\) ?`,
      opts: [
        { key: "a", text: `Toujours strictement positif` },
        { key: "b", text: `Toujours strictement négatif` },
        { key: "c", text: `Dépend du signe de \\( x \\)` },
        { key: "d", text: `Nul lorsque \\( x=0 \\)` }
      ],
      ans: "a",
      ansText: `\\( e^x>0 \\) pour tout \\( x\\in\\mathbb{R} \\), quel que soit le signe de \\( x \\)`
    },
    {
      id: "exp-log-trigo-03",
      type: "num",
      q: `Calculer \\( \\ln(e^3) \\).`,
      ans: 3,
      ansText: `\\( \\ln(e^3)=3 \\) car \\( \\ln \\) et \\( \\exp \\) sont réciproques`,
      tol: 0.0001
    },
    {
      id: "exp-log-trigo-04",
      type: "qcm",
      q: `Pour \\( a>0 \\) et \\( b>0 \\), \\( \\ln(a)+\\ln(b) \\) est égal à :`,
      opts: [
        { key: "a", text: `\\( \\ln(a+b) \\)` },
        { key: "b", text: `\\( \\ln(ab) \\)` },
        { key: "c", text: `\\( \\ln(a-b) \\)` },
        { key: "d", text: `\\( \\ln(a/b) \\)` }
      ],
      ans: "b",
      ansText: `\\( \\ln(a)+\\ln(b)=\\ln(ab) \\) ; attention, \\( \\ln(a+b) \\) est un piège classique et faux en général`
    },
    {
      id: "exp-log-trigo-05",
      type: "qcm",
      q: `Quelle est la valeur exacte de \\( \\cos(\\pi/3) \\) ?`,
      opts: [
        { key: "a", text: `\\( \\dfrac{1}{2} \\)` },
        { key: "b", text: `\\( \\dfrac{\\sqrt{3}}{2} \\)` },
        { key: "c", text: `\\( \\dfrac{\\sqrt{2}}{2} \\)` },
        { key: "d", text: `\\( 1 \\)` }
      ],
      ans: "a",
      ansText: `\\( \\cos(\\pi/3)=1/2 \\) (valeur remarquable du tableau)`
    },
    {
      id: "exp-log-trigo-06",
      type: "num",
      q: `Calculer \\( \\sin(\\pi/6) \\).`,
      ans: 0.5,
      ansText: `\\( \\sin(\\pi/6)=1/2 \\)`,
      tol: 0.0001
    },
    {
      id: "exp-log-trigo-07",
      type: "num",
      q: `Soit \\( f(x)=e^{2x+1} \\). Calculer \\( f'(0) \\) (donner une valeur approchée à \\( 10^{-2} \\) près).`,
      ans: 5.44,
      ansText: `\\( f'(x)=2e^{2x+1} \\), donc \\( f'(0)=2e\\approx 5{,}44 \\)`,
      tol: 0.01
    },
    {
      id: "exp-log-trigo-08",
      type: "qcm",
      q: `Résoudre l'équation \\( e^{x}=7 \\) (\\( x\\in\\mathbb{R} \\)).`,
      opts: [
        { key: "a", text: `\\( x=\\ln 7 \\)` },
        { key: "b", text: `\\( x=7 \\)` },
        { key: "c", text: `\\( x=e^7 \\)` },
        { key: "d", text: `\\( x=1/7 \\)` }
      ],
      ans: "a",
      ansText: `On applique \\( \\ln \\) aux deux membres : \\( x=\\ln(7) \\)`
    },
    {
      id: "exp-log-trigo-09",
      type: "num",
      q: `Résoudre \\( \\cos x=\\dfrac{\\sqrt{2}}{2} \\) sur l'intervalle \\( [0,\\pi] \\) (donner la solution en radians, à \\( 10^{-2} \\) près).`,
      ans: 0.79,
      ansText: `\\( x=\\pi/4\\approx 0{,}79 \\) ; sur \\( [0,\\pi] \\), \\( \\cos \\) est bijective donc il n'y a qu'une seule solution ici`,
      tol: 0.01
    },
    {
      id: "exp-log-trigo-10",
      type: "qcm",
      q: `Résoudre \\( \\sin x=\\dfrac{1}{2} \\) sur \\( [0,2\\pi[ \\).`,
      opts: [
        { key: "a", text: `\\( x=\\pi/6 \\) uniquement` },
        { key: "b", text: `\\( x=\\pi/6 \\) et \\( x=5\\pi/6 \\)` },
        { key: "c", text: `\\( x=\\pi/6 \\) et \\( x=7\\pi/6 \\)` },
        { key: "d", text: `\\( x=\\pi/3 \\) et \\( x=2\\pi/3 \\)` }
      ],
      ans: "b",
      ansText: `\\( \\sin x=\\sin a \\iff x=a+2k\\pi \\) ou \\( x=\\pi-a+2k\\pi \\) ; ici \\( a=\\pi/6 \\), donc \\( x=\\pi/6 \\) ou \\( x=\\pi-\\pi/6=5\\pi/6 \\)`
    },
    {
      id: "exp-log-trigo-11",
      type: "num",
      q: `Résoudre \\( e^{2x-1}=5 \\) et donner la valeur de \\( x \\) à \\( 10^{-2} \\) près.`,
      ans: 1.3,
      ansText: `\\( 2x-1=\\ln 5 \\), donc \\( x=\\dfrac{1+\\ln 5}{2}\\approx 1{,}30 \\)`,
      tol: 0.01
    },
    {
      id: "exp-log-trigo-12",
      type: "qcm",
      q: `Que peut-on dire de l'équation \\( \\ln(x-4)=\\ln(2-x) \\) ?`,
      opts: [
        { key: "a", text: `Elle admet \\( x=3 \\) comme unique solution` },
        { key: "b", text: `Elle n'admet aucune solution` },
        { key: "c", text: `Elle admet \\( x=6 \\) comme unique solution` },
        { key: "d", text: `Elle admet \\( x=-1 \\) comme unique solution` }
      ],
      ans: "b",
      ansText: `Le domaine exigerait \\( x>4 \\) et \\( x&lt;2 \\) simultanément, ce qui est impossible ; \\( x=3 \\) obtenu en égalant les arguments ne vérifie pas ce domaine et doit être rejeté : aucune solution`
    },
    {
      id: "exp-log-trigo-13",
      type: "qcm",
      q: `Quelle est la limite de \\( h(x)=5e^{x}-2 \\) lorsque \\( x\\to -\\infty \\) ?`,
      opts: [
        { key: "a", text: `\\( -2 \\)` },
        { key: "b", text: `\\( 0 \\)` },
        { key: "c", text: `\\( -\\infty \\)` },
        { key: "d", text: `\\( 5 \\)` }
      ],
      ans: "a",
      ansText: `Quand \\( x\\to-\\infty \\), \\( e^x\\to 0 \\), donc \\( h(x)=5e^x-2\\to 5\\times 0-2=-2 \\)`
    },
    {
      id: "exp-log-trigo-14",
      type: "qcm",
      q: `Résoudre dans \\( \\mathbb{R} \\) l'équation \\( e^{2x}-3e^{x}+2=0 \\).`,
      opts: [
        { key: "a", text: `\\( x=1 \\) ou \\( x=2 \\)` },
        { key: "b", text: `Aucune solution réelle` },
        { key: "c", text: `\\( x=\\ln 2 \\) uniquement` },
        { key: "d", text: `\\( x=0 \\) ou \\( x=\\ln 2 \\)` }
      ],
      ans: "d",
      ansText: `En posant \\( t=e^x>0 \\), l'équation devient \\( t^2-3t+2=0 \\), soit \\( (t-1)(t-2)=0 \\), donc \\( t=1 \\) ou \\( t=2 \\), c'est-à-dire \\( x=\\ln 1=0 \\) ou \\( x=\\ln 2 \\)`
    },
    {
      id: "exp-log-trigo-15",
      type: "num",
      q: `En utilisant la parité de la fonction sinus, calculer \\( \\sin(-\\pi/3) \\) (valeur approchée à \\( 10^{-2} \\) près).`,
      ans: -0.87,
      ansText: `\\( \\sin \\) est impaire donc \\( \\sin(-\\pi/3)=-\\sin(\\pi/3)=-\\dfrac{\\sqrt{3}}{2}\\approx -0{,}87 \\)`,
      tol: 0.01
    },
    {
      id: "exp-log-trigo-16",
      type: "num",
      q: `Résoudre \\( \\ln(x)+\\ln(x+2)=\\ln(15) \\) et donner la valeur de \\( x \\).`,
      ans: 3,
      ansText: `Domaine : \\( x>0 \\). On regroupe : \\( \\ln\\big(x(x+2)\\big)=\\ln 15 \\), donc \\( x(x+2)=15 \\), soit \\( x^2+2x-15=0 \\), qui se factorise en \\( (x-3)(x+5)=0 \\). On obtient \\( x=3 \\) ou \\( x=-5 \\) ; seul \\( x=3 \\) respecte \\( x>0 \\), donc \\( x=-5 \\) est rejeté`,
      tol: 0.0001
    },
    {
      id: "exp-log-trigo-17",
      type: "num",
      q: `Soit \\( f(x)=e^{-x^2+1} \\). Calculer \\( f'(1) \\).`,
      ans: -2,
      ansText: `\\( f'(x)=-2x\\,e^{-x^2+1} \\) (ne pas oublier le facteur \\( -2x \\) venant de la dérivée de l'exposant \\( -x^2+1 \\)), donc \\( f'(1)=-2\\times 1\\times e^{-1+1}=-2\\times e^0=-2 \\)`,
      tol: 0.0001
    },
    {
      id: "exp-log-trigo-18",
      type: "qcm",
      q: `Quel est l'ensemble de définition de la fonction \\( g(x)=\\ln(x^2-9) \\) ?`,
      opts: [
        { key: "a", text: `\\( ]-3,3[ \\)` },
        { key: "b", text: `\\( \\mathbb{R} \\)` },
        { key: "c", text: `\\( ]-\\infty,-3[\\ \\cup\\ ]3,+\\infty[ \\)` },
        { key: "d", text: `\\( [3,+\\infty[ \\)` }
      ],
      ans: "c",
      ansText: `Il faut \\( x^2-9>0 \\), c'est-à-dire \\( x^2>9 \\), soit \\( x&lt;-3 \\) ou \\( x>3 \\) : domaine \\( ]-\\infty,-3[\\ \\cup\\ ]3,+\\infty[ \\)`
    },
    {
      id: "exp-log-trigo-19",
      type: "qcm",
      q: `Quelle est la limite de \\( h(x)=2\\ln(x)-5 \\) lorsque \\( x\\to 0^+ \\) ?`,
      opts: [
        { key: "a", text: `\\( -5 \\)` },
        { key: "b", text: `\\( 0 \\)` },
        { key: "c", text: `\\( +\\infty \\)` },
        { key: "d", text: `\\( -\\infty \\)` }
      ],
      ans: "d",
      ansText: `Quand \\( x\\to 0^+ \\), \\( \\ln(x)\\to -\\infty \\), donc \\( h(x)=2\\ln(x)-5\\to -\\infty \\)`
    },
    {
      id: "exp-log-trigo-20",
      type: "num",
      q: `Résoudre \\( \\sin x=-\\dfrac{1}{2} \\) sur \\( [0,2\\pi[ \\) et donner la somme des deux solutions (valeur approchée à \\( 10^{-2} \\) près).`,
      ans: 9.42,
      ansText: `En prenant \\( a=-\\pi/6 \\) (car \\( \\sin(-\\pi/6)=-1/2 \\)), les solutions sont \\( x=-\\pi/6+2\\pi=11\\pi/6 \\) et \\( x=\\pi-(-\\pi/6)=7\\pi/6 \\) ; leur somme vaut \\( 7\\pi/6+11\\pi/6=3\\pi\\approx 9{,}42 \\)`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
