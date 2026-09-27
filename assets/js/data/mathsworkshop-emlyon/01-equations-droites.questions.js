/* ================================================================
   Banque de questions — Équations de droites et équations linéaires (15 questions)
   Contenu original rédigé pour le cours Maths Workshop (EM Lyon, BBA1).
   ================================================================ */

(function () {
  var slug = "equations-droites-workshop";
  var questions = [
    {
      id: "equations-droites-workshop-01",
      type: "num",
      q: `Résoudre l'équation \\(4x-9=3x+2\\) et donner la valeur de \\(x\\).`,
      ans: 11,
      ansText: `\\(4x-3x = 2+9\\), donc \\(x=11\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-02",
      type: "qcm",
      q: `Résoudre l'équation \\(-2x+6=0\\).`,
      opts: [
        { key: "a", text: `\\(x=3\\)` },
        { key: "b", text: `\\(x=-3\\)` },
        { key: "c", text: `\\(x=12\\)` },
        { key: "d", text: `\\(x=-12\\)` }
      ],
      ans: "a",
      ansText: `\\(-2x=-6\\), donc \\(x=\\dfrac{-6}{-2}=3\\)`
    },
    {
      id: "equations-droites-workshop-03",
      type: "num",
      q: `Résoudre \\(5(x-2)=3x+4\\) et donner la valeur de \\(x\\).`,
      ans: 7,
      ansText: `\\(5x-10=3x+4\\), donc \\(2x=14\\), soit \\(x=7\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-04",
      type: "qcm",
      q: `Résoudre l'équation produit \\((x+1)(x-5)=0\\).`,
      opts: [
        { key: "a", text: `\\(x=1\\) ou \\(x=5\\)` },
        { key: "b", text: `\\(x=-1\\) ou \\(x=5\\)` },
        { key: "c", text: `\\(x=-1\\) et \\(x=-5\\) uniquement simultanément` },
        { key: "d", text: `Aucune solution` }
      ],
      ans: "b",
      ansText: `\\(x+1=0\\) donne \\(x=-1\\), et \\(x-5=0\\) donne \\(x=5\\)`
    },
    {
      id: "equations-droites-workshop-05",
      type: "qcm",
      q: `Pour résoudre l'équation \\(\\dfrac{3}{x-2}=6\\), quelle est la valeur interdite à exclure ?`,
      opts: [
        { key: "a", text: `\\(x=0\\)` },
        { key: "b", text: `\\(x=2\\)` },
        { key: "c", text: `\\(x=3\\)` },
        { key: "d", text: `\\(x=6\\)` }
      ],
      ans: "b",
      ansText: `Le dénominateur \\(x-2\\) ne doit pas être nul, donc \\(x\\neq2\\)`
    },
    {
      id: "equations-droites-workshop-06",
      type: "num",
      q: `Résoudre \\(\\dfrac{3}{x-2}=6\\) (avec \\(x\\neq2\\)) et donner la valeur de \\(x\\).`,
      ans: 2.5,
      ansText: `\\(3=6(x-2)=6x-12\\), donc \\(15=6x\\), soit \\(x=2{,}5\\), qui est bien différent de \\(2\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-07",
      type: "qcm",
      q: `Quelle est l'ordonnée à l'origine de la droite d'équation \\(y=-4x+9\\) ?`,
      opts: [
        { key: "a", text: `\\(-4\\)` },
        { key: "b", text: `\\(4\\)` },
        { key: "c", text: `\\(9\\)` },
        { key: "d", text: `\\(-9\\)` }
      ],
      ans: "c",
      ansText: `L'ordonnée à l'origine est la constante \\(p=9\\) (valeur de \\(y\\) quand \\(x=0\\))`
    },
    {
      id: "equations-droites-workshop-08",
      type: "num",
      q: `Une droite passe par les points \\(A(0,3)\\) et \\(B(2,11)\\). Calculer son coefficient directeur.`,
      ans: 4,
      ansText: `\\(m=\\dfrac{11-3}{2-0}=\\dfrac{8}{2}=4\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-09",
      type: "num",
      q: `Une droite a pour coefficient directeur \\(m=2\\) et passe par le point \\(A(3,10)\\). Calculer son ordonnée à l'origine \\(p\\).`,
      ans: 4,
      ansText: `\\(10 = 2\\times3+p\\), donc \\(p=10-6=4\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-10",
      type: "qcm",
      q: `Une droite passe par \\(A(1,2)\\) et \\(B(4,2)\\). Quelle est son équation réduite ?`,
      opts: [
        { key: "a", text: `\\(y=2\\)` },
        { key: "b", text: `\\(x=2\\)` },
        { key: "c", text: `\\(y=2x\\)` },
        { key: "d", text: `\\(y=x+2\\)` }
      ],
      ans: "a",
      ansText: `\\(y_A=y_B=2\\), donc la droite est horizontale : \\(m=0\\) et \\(y=2\\)`
    },
    {
      id: "equations-droites-workshop-11",
      type: "qcm",
      q: `Les droites \\(y=3x-1\\) et \\(y=3x+5\\) sont :`,
      opts: [
        { key: "a", text: `Sécantes` },
        { key: "b", text: `Parallèles et confondues` },
        { key: "c", text: `Parallèles et strictement distinctes` },
        { key: "d", text: `Perpendiculaires` }
      ],
      ans: "c",
      ansText: `Même coefficient directeur \\(m=3\\) mais ordonnées à l'origine différentes (\\(-1\\neq5\\)) : parallèles distinctes`
    },
    {
      id: "equations-droites-workshop-12",
      type: "num",
      q: `Trouver l'abscisse du point d'intersection des droites \\(y=2x+1\\) et \\(y=-x+7\\).`,
      ans: 2,
      ansText: `\\(2x+1=-x+7\\), donc \\(3x=6\\), soit \\(x=2\\)`,
      tol: 0.01
    },
    {
      id: "equations-droites-workshop-13",
      type: "qcm",
      q: `Un coût total est donné par \\(C(x)=6x+120\\) (en euros, pour \\(x\\) unités produites) et le chiffre d'affaires par \\(R(x)=10x\\). Quel est le seuil de rentabilité (nombre d'unités \\(x\\) pour lequel \\(C(x)=R(x)\\)) ?`,
      opts: [
        { key: "a", text: `\\(20\\)` },
        { key: "b", text: `\\(24\\)` },
        { key: "c", text: `\\(30\\)` },
        { key: "d", text: `\\(12\\)` }
      ],
      ans: "c",
      ansText: `\\(6x+120=10x\\) donne \\(120=4x\\), soit \\(x=30\\)`
    },
    {
      id: "equations-droites-workshop-14",
      type: "qcm",
      q: `Que peut-on dire des droites \\(y=5x-2\\) et \\(y=-2x+5\\) ?`,
      opts: [
        { key: "a", text: `Elles sont parallèles` },
        { key: "b", text: `Elles sont confondues` },
        { key: "c", text: `Elles sont sécantes car leurs coefficients directeurs sont différents` },
        { key: "d", text: `On ne peut pas savoir sans tracer les droites` }
      ],
      ans: "c",
      ansText: `\\(5\\neq-2\\) : coefficients directeurs différents, donc les droites sont nécessairement sécantes (en un unique point)`
    },
    {
      id: "equations-droites-workshop-15",
      type: "num",
      q: `Résoudre \\(2(3x-1)-(x+4)=0\\) et donner la valeur de \\(x\\).`,
      ans: 1.2,
      ansText: `\\(6x-2-x-4=0\\), donc \\(5x=6\\), soit \\(x=1{,}2\\)`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
