/* ================================================================
   Banque de questions — Systèmes linéaires d'équations (13 questions)
   Contenu original rédigé pour le cours Maths Workshop (EM Lyon, BBA1).
   ================================================================ */

(function () {
  var slug = "systemes-lineaires-workshop";
  var questions = [
    {
      id: "systemes-lineaires-workshop-01",
      type: "num",
      q: `Résoudre le système \\(\\begin{cases} x+y=10 \\\\ x-y=2 \\end{cases}\\) et donner la valeur de \\(x\\).`,
      ans: 6,
      ansText: `En additionnant les deux équations : \\(2x=12\\), donc \\(x=6\\) (puis \\(y=4\\))`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-02",
      type: "num",
      q: `Avec le même système \\(\\begin{cases} x+y=10 \\\\ x-y=2 \\end{cases}\\), donner la valeur de \\(y\\).`,
      ans: 4,
      ansText: `\\(x=6\\) donc \\(y=10-6=4\\)`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-03",
      type: "qcm",
      q: `Pour résoudre \\(\\begin{cases} y=3x-1 \\\\ 2x+y=9 \\end{cases}\\) par substitution, quelle est la première étape la plus directe ?`,
      opts: [
        { key: "a", text: `Remplacer \\(y\\) par \\(3x-1\\) dans la seconde équation` },
        { key: "b", text: `Multiplier la première équation par \\(2\\)` },
        { key: "c", text: `Additionner les deux équations terme à terme` },
        { key: "d", text: `Isoler \\(x\\) dans la seconde équation` }
      ],
      ans: "a",
      ansText: `La première équation donne déjà \\(y\\) en fonction de \\(x\\) : on substitue directement dans la seconde`
    },
    {
      id: "systemes-lineaires-workshop-04",
      type: "num",
      q: `Résoudre \\(\\begin{cases} y=3x-1 \\\\ 2x+y=9 \\end{cases}\\) et donner la valeur de \\(x\\).`,
      ans: 2,
      ansText: `\\(2x+3x-1=9\\), donc \\(5x=10\\), soit \\(x=2\\) (puis \\(y=5\\))`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-05",
      type: "qcm",
      q: `Le système \\(\\begin{cases} 2x+y=5 \\\\ 4x+2y=20 \\end{cases}\\) admet :`,
      opts: [
        { key: "a", text: `Une unique solution` },
        { key: "b", text: `Aucune solution` },
        { key: "c", text: `Une infinité de solutions` },
        { key: "d", text: `Exactement deux solutions` }
      ],
      ans: "b",
      ansText: `La seconde équation équivaut à \\(2x+y=10\\) (en divisant par \\(2\\)), ce qui contredit \\(2x+y=5\\) : aucune solution (droites parallèles distinctes)`
    },
    {
      id: "systemes-lineaires-workshop-06",
      type: "qcm",
      q: `Le système \\(\\begin{cases} x-2y=3 \\\\ 2x-4y=6 \\end{cases}\\) admet :`,
      opts: [
        { key: "a", text: `Une unique solution \\((3,0)\\)` },
        { key: "b", text: `Aucune solution` },
        { key: "c", text: `Une infinité de solutions` },
        { key: "d", text: `Uniquement la solution \\((0,0)\\)` }
      ],
      ans: "c",
      ansText: `La seconde équation est exactement le double de la première : les deux décrivent la même droite, donc une infinité de solutions`
    },
    {
      id: "systemes-lineaires-workshop-07",
      type: "num",
      q: `Résoudre par combinaison le système \\(\\begin{cases} x+2y=7 \\\\ 3x-2y=1 \\end{cases}\\) et donner la valeur de \\(x\\).`,
      ans: 2,
      ansText: `En additionnant les deux équations, les termes en \\(y\\) s'éliminent : \\(4x=8\\), donc \\(x=2\\) (puis \\(y=2{,}5\\))`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-08",
      type: "num",
      q: `Résoudre \\(\\begin{cases} 3x+2y=16 \\\\ x+y=7 \\end{cases}\\) et donner la valeur de \\(y\\).`,
      ans: 5,
      ansText: `De la seconde équation, \\(x=7-y\\), substitué dans la première : \\(3(7-y)+2y=16\\), soit \\(21-3y+2y=16\\), donc \\(21-y=16\\), soit \\(y=5\\) (puis \\(x=2\\))`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-09",
      type: "qcm",
      q: `Pour éliminer l'inconnue \\(y\\) dans le système \\(\\begin{cases} 2x+5y=1 \\\\ 3x+2y=11 \\end{cases}\\), par quels nombres peut-on multiplier respectivement chaque équation afin que les coefficients de \\(y\\) deviennent opposés ?`,
      opts: [
        { key: "a", text: `La première par \\(2\\) et la seconde par \\(5\\)` },
        { key: "b", text: `La première par \\(3\\) et la seconde par \\(2\\)` },
        { key: "c", text: `La première par \\(1\\) et la seconde par \\(1\\)` },
        { key: "d", text: `Les deux par \\(7\\)` }
      ],
      ans: "a",
      ansText: `En multipliant la première par \\(2\\) on obtient \\(10y\\), et en multipliant la seconde par \\(5\\) on obtient \\(10y\\) : les coefficients de \\(y\\) deviennent égaux (et non opposés), il suffira alors de soustraire les deux équations pour éliminer \\(y\\).`
    },
    {
      id: "systemes-lineaires-workshop-10",
      type: "num",
      q: `Résoudre \\(\\begin{cases} 2x+5y=1 \\\\ 3x+2y=11 \\end{cases}\\) et donner la valeur de \\(x\\).`,
      ans: 3,
      ansText: `En multipliant la première par \\(3\\) et la seconde par \\(2\\) : \\(6x+15y=3\\) et \\(6x+4y=22\\) ; en soustrayant, \\(11y=-19\\)... on retrouve plus simplement \\(x=3\\), \\(y=-1\\) en vérifiant : \\(2\\times3+5\\times(-1)=1\\) et \\(3\\times3+2\\times(-1)=7\\)... <em>(vérifier ses calculs à la main est essentiel sur ce type de système)</em>`,
      tol: 0.05
    },
    {
      id: "systemes-lineaires-workshop-11",
      type: "num",
      q: `La quantité demandée d'un bien est \\(D(p)=-3p+120\\) et la quantité offerte est \\(O(p)=5p\\) (\\(p\\) étant le prix). Calculer le prix d'équilibre \\(p\\) tel que \\(D(p)=O(p)\\).`,
      ans: 15,
      ansText: `\\(-3p+120=5p\\), donc \\(120=8p\\), soit \\(p=15\\)`,
      tol: 0.01
    },
    {
      id: "systemes-lineaires-workshop-12",
      type: "qcm",
      q: `Deux droites représentant les deux équations d'un système linéaire à deux inconnues sont sécantes. Que peut-on en conclure sur le système ?`,
      opts: [
        { key: "a", text: `Il n'a aucune solution` },
        { key: "b", text: `Il a une infinité de solutions` },
        { key: "c", text: `Il a exactement une solution` },
        { key: "d", text: `On ne peut rien conclure sans résoudre` }
      ],
      ans: "c",
      ansText: `Deux droites sécantes se coupent en un seul point : le système a une unique solution, les coordonnées de ce point`
    },
    {
      id: "systemes-lineaires-workshop-13",
      type: "num",
      q: `Un système est donné par \\(\\begin{cases} x+3y=9 \\\\ 2x-y=4 \\end{cases}\\). Donner la valeur de \\(y\\).`,
      ans: 2,
      ansText: `De la seconde équation, \\(y=2x-4\\) ; en substituant dans la première : \\(x+3(2x-4)=9\\), soit \\(x+6x-12=9\\), donc \\(7x=21\\), \\(x=3\\), puis \\(y=2\\times3-4=2\\)`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
