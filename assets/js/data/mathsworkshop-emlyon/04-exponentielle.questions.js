/* ================================================================
   Banque de questions — Fonction exponentielle (13 questions)
   Adapté pour le cours Maths Workshop (EM Lyon, BBA1).
   ================================================================ */

(function () {
  var slug = "exponentielle-workshop";
  var questions = [
    {
      id: "exponentielle-workshop-01",
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
      id: "exponentielle-workshop-02",
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
      id: "exponentielle-workshop-03",
      type: "num",
      q: `Soit \\( f(x)=e^{2x+1} \\). Calculer \\( f'(0) \\) (donner une valeur approchée à \\( 10^{-2} \\) près).`,
      ans: 5.44,
      ansText: `\\( f'(x)=2e^{2x+1} \\), donc \\( f'(0)=2e\\approx 5{,}44 \\)`,
      tol: 0.01
    },
    {
      id: "exponentielle-workshop-04",
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
      id: "exponentielle-workshop-05",
      type: "num",
      q: `Résoudre \\( e^{2x-1}=5 \\) et donner la valeur de \\( x \\) à \\( 10^{-2} \\) près.`,
      ans: 1.3,
      ansText: `\\( 2x-1=\\ln 5 \\), donc \\( x=\\dfrac{1+\\ln 5}{2}\\approx 1{,}30 \\)`,
      tol: 0.01
    },
    {
      id: "exponentielle-workshop-06",
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
      id: "exponentielle-workshop-07",
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
      id: "exponentielle-workshop-08",
      type: "num",
      q: `Soit \\( f(x)=e^{-x^2+1} \\). Calculer \\( f'(1) \\).`,
      ans: -2,
      ansText: `\\( f'(x)=-2x\\,e^{-x^2+1} \\) (ne pas oublier le facteur \\( -2x \\) venant de la dérivée de l'exposant \\( -x^2+1 \\)), donc \\( f'(1)=-2\\times 1\\times e^{-1+1}=-2\\times e^0=-2 \\)`,
      tol: 0.0001
    },
    {
      id: "exponentielle-workshop-09",
      type: "num",
      q: `Calculer \\(e^0\\).`,
      ans: 1,
      ansText: `\\(e^0=1\\), comme toute puissance de exposant nul`,
      tol: 0.0001
    },
    {
      id: "exponentielle-workshop-10",
      type: "qcm",
      q: `Comment varie la fonction \\(f(x)=e^{-3x}\\) sur \\(\\mathbb{R}\\) ?`,
      opts: [
        { key: "a", text: `Elle est strictement croissante` },
        { key: "b", text: `Elle est strictement décroissante` },
        { key: "c", text: `Elle est constante` },
        { key: "d", text: `Elle décroît puis croît` }
      ],
      ans: "b",
      ansText: `\\(f'(x)=-3e^{-3x}\\), toujours strictement négative (car \\(e^{-3x}>0\\)) : \\(f\\) est strictement décroissante sur \\(\\mathbb{R}\\)`
    },
    {
      id: "exponentielle-workshop-11",
      type: "num",
      q: `Un capital est placé à intérêts composés : au bout de \\(t\\) années, sa valeur est modélisée par \\(V(t)=1000\\,e^{0{,}05t}\\) (en euros). Quelle est la valeur du capital à \\(t=0\\) ?`,
      ans: 1000,
      ansText: `\\(V(0)=1000\\,e^{0}=1000\\times1=1000\\) euros : c'est le capital initial`,
      tol: 0.01
    },
    {
      id: "exponentielle-workshop-12",
      type: "qcm",
      q: `Avec le modèle \\(V(t)=1000\\,e^{0{,}05t}\\) du placement à intérêts composés, que peut-on dire de \\(V\\) lorsque \\(t\\) augmente ?`,
      opts: [
        { key: "a", text: `\\(V\\) est croissante car l'exposant \\(0{,}05t\\) augmente avec \\(t\\)` },
        { key: "b", text: `\\(V\\) est décroissante` },
        { key: "c", text: `\\(V\\) reste constante` },
        { key: "d", text: `\\(V\\) diminue puis augmente` }
      ],
      ans: "a",
      ansText: `L'exposant \\(0{,}05t\\) est une fonction croissante de \\(t\\) (coefficient \\(0{,}05>0\\)), et la fonction exponentielle est elle-même croissante, donc \\(V\\) est croissante : le capital augmente avec le temps`
    },
    {
      id: "exponentielle-workshop-13",
      type: "num",
      q: `Résoudre \\(3e^{x}-6=0\\) et donner la valeur de \\(x\\) à \\(10^{-2}\\) près.`,
      ans: 0.69,
      ansText: `\\(e^x=2\\), donc \\(x=\\ln 2\\approx 0{,}69\\)`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
