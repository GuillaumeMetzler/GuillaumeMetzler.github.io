/* ================================================================
   Banque de questions — Second degré & polynômes (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "second-degre";
  var questions = [
    {
      id: "second-degre-01",
      type: "num",
      q: `Calculer le discriminant \\(\\Delta\\) du trinôme \\(f(x)=x^2-5x+6\\).`,
      ans: 1,
      ansText: `\\(\\Delta=(-5)^2-4\\times1\\times6=25-24=1\\)`,
      tol: 0.001
    },
    {
      id: "second-degre-02",
      type: "qcm",
      q: `Quelle est la forme canonique du trinôme \\(f(x)=x^2-4x+1\\) ?`,
      opts: [
        { key: "a", text: `\\((x-2)^2-3\\)` },
        { key: "b", text: `\\((x-2)^2+3\\)` },
        { key: "c", text: `\\((x+2)^2-3\\)` },
        { key: "d", text: `\\((x-4)^2-3\\)` }
      ],
      ans: "a",
      ansText: `\\(\\alpha=-\\dfrac{-4}{2}=2\\), \\(\\beta=f(2)=4-8+1=-3\\), donc \\(f(x)=(x-2)^2-3\\).`
    },
    {
      id: "second-degre-03",
      type: "num",
      q: `Résoudre \\(x^2-5x+6=0\\). Donner la plus petite des deux solutions.`,
      ans: 2,
      ansText: `\\(\\Delta=1\\), racines \\(\\dfrac{5\\pm1}{2}\\), soit \\(2\\) et \\(3\\) : la plus petite est \\(2\\).`,
      tol: 0.001
    },
    {
      id: "second-degre-04",
      type: "qcm",
      q: `Combien de solutions réelles admet l'équation \\(x^2+x+1=0\\) ?`,
      opts: [
        { key: "a", text: `Aucune` },
        { key: "b", text: `Une seule (racine double)` },
        { key: "c", text: `Deux` },
        { key: "d", text: `Une infinité` }
      ],
      ans: "a",
      ansText: `\\(\\Delta=1^2-4\\times1\\times1=-3&lt;0\\) : pas de racine réelle.`
    },
    {
      id: "second-degre-05",
      type: "num",
      q: `Un trinôme \\(ax^2+bx+c\\) a deux racines entières dont la somme vaut \\(5\\) et le produit vaut \\(6\\). Donner la plus grande des deux racines.`,
      ans: 3,
      ansText: `Les entiers de somme \\(5\\) et produit \\(6\\) sont \\(2\\) et \\(3\\) : la plus grande est \\(3\\).`,
      tol: 0.001
    },
    {
      id: "second-degre-06",
      type: "qcm",
      q: `Un trinôme \\(x^2+bx+c\\) (coefficient dominant \\(1\\)) admet \\(2\\) et \\(-3\\) comme racines. Quel est ce trinôme ?`,
      opts: [
        { key: "a", text: `\\(x^2+x-6\\)` },
        { key: "b", text: `\\(x^2-x-6\\)` },
        { key: "c", text: `\\(x^2+x+6\\)` },
        { key: "d", text: `\\(x^2-5x+6\\)` }
      ],
      ans: "a",
      ansText: `\\(S=2+(-3)=-1=-b\\Rightarrow b=1\\), \\(P=2\\times(-3)=-6=c\\), donc \\(x^2+x-6\\).`
    },
    {
      id: "second-degre-07",
      type: "num",
      q: `Quelle est la valeur minimale de \\(f(x)=2x^2-8x+9\\) sur \\(\\mathbb{R}\\) ?`,
      ans: 1,
      ansText: `\\(\\alpha=-\\dfrac{-8}{4}=2\\), \\(\\beta=f(2)=8-16+9=1\\) ; comme \\(a=2>0\\), \\(1\\) est le minimum.`,
      tol: 0.001
    },
    {
      id: "second-degre-08",
      type: "qcm",
      q: `On considère \\(h(x)=-x^2+3x-2\\), dont les racines sont \\(1\\) et \\(2\\). Quel est le signe de \\(h(x)\\) pour \\(x\\in\\,]1,2[\\) ?`,
      opts: [
        { key: "a", text: `Positif` },
        { key: "b", text: `Négatif` },
        { key: "c", text: `Nul` },
        { key: "d", text: `Cela dépend de \\(x\\) dans cet intervalle` }
      ],
      ans: "a",
      ansText: `\\(a=-1&lt;0\\) : entre les racines, \\(h\\) est du signe de \\(-a\\), donc positif (par exemple \\(h(1{,}5)=0{,}25>0\\)).`
    },
    {
      id: "second-degre-09",
      type: "qcm",
      q: `Que peut-on dire du signe de \\(f(x)=-3x^2+2x-5\\) pour \\(x\\) parcourant \\(\\mathbb{R}\\) ?`,
      opts: [
        { key: "a", text: `\\(f(x)\\) est toujours positif` },
        { key: "b", text: `\\(f(x)\\) est toujours négatif` },
        { key: "c", text: `\\(f(x)\\) change de signe` },
        { key: "d", text: `On ne peut rien dire sans plus d'informations` }
      ],
      ans: "b",
      ansText: `\\(\\Delta=2^2-4\\times(-3)\\times(-5)=4-60=-56&lt;0\\) : \\(f\\) garde le signe de \\(a=-3\\), donc toujours négatif.`
    },
    {
      id: "second-degre-10",
      type: "qcm",
      q: `Quel est l'ensemble des solutions de l'inéquation \\((x-1)(x^2-5x+6)\\geqslant0\\) ?`,
      opts: [
        { key: "a", text: `\\([1,2]\\cup[3,+\\infty[\\)` },
        { key: "b", text: `\\(]-\\infty,1]\\cup[2,3]\\)` },
        { key: "c", text: `\\([2,3]\\)` },
        { key: "d", text: `\\(]-\\infty,1]\\cup[2,+\\infty[\\)` }
      ],
      ans: "a",
      ansText: `\\(x^2-5x+6=(x-2)(x-3)\\), donc le produit vaut \\((x-1)(x-2)(x-3)\\), de racines \\(1,2,3\\). En étudiant le signe (produit de trois facteurs affines), on obtient un signe négatif avant \\(1\\), positif sur \\(]1,2[\\), négatif sur \\(]2,3[\\), positif après \\(3\\) : solution \\([1,2]\\cup[3,+\\infty[\\).`
    },
    {
      id: "second-degre-11",
      type: "num",
      q: `Sachant que \\(1\\) est racine évidente de \\(P(x)=x^3-6x^2+11x-6\\), et que le quotient obtenu est un trinôme se factorisant lui-même, donner le produit des trois racines de \\(P\\).`,
      ans: 6,
      ansText: `\\(P(x)=(x-1)(x^2-5x+6)=(x-1)(x-2)(x-3)\\), racines \\(1,2,3\\), produit \\(=6\\).`,
      tol: 0.001
    },
    {
      id: "second-degre-12",
      type: "num",
      q: `On considère \\(f(x)=x^2-6x+m\\), où \\(m\\) est un paramètre réel. Déterminer la valeur de \\(m\\) pour laquelle \\(f\\) admet une racine double.`,
      ans: 9,
      ansText: `\\(\\Delta=(-6)^2-4\\times1\\times m=36-4m\\). Une racine double correspond à \\(\\Delta=0\\), soit \\(36-4m=0\\), donc \\(m=9\\) (on retrouve \\(f(x)=x^2-6x+9=(x-3)^2\\)).`,
      tol: 0.001
    },
    {
      id: "second-degre-13",
      type: "qcm",
      q: `Pour quelles valeurs du paramètre réel \\(m\\) le trinôme \\(f(x)=x^2+4x+m\\) n'admet-il aucune racine réelle ?`,
      opts: [
        { key: "a", text: `\\(m=4\\)` },
        { key: "b", text: `\\(m>4\\)` },
        { key: "c", text: `\\(m&lt;4\\)` },
        { key: "d", text: `\\(m>-4\\)` }
      ],
      ans: "b",
      ansText: `\\(\\Delta=4^2-4\\times1\\times m=16-4m\\). Pas de racine réelle \\(\\Leftrightarrow\\Delta&lt;0\\Leftrightarrow16-4m&lt;0\\Leftrightarrow m>4\\).`
    },
    {
      id: "second-degre-14",
      type: "qcm",
      q: `Un rectangle a un périmètre fixé égal à \\(20\\). En notant \\(x\\) la longueur d'un des côtés (avec \\(0&lt;x&lt;10\\)), l'autre côté mesure \\(10-x\\) et l'aire du rectangle est \\(A(x)=x(10-x)\\). Quelle est l'aire maximale possible de ce rectangle ?`,
      opts: [
        { key: "a", text: `\\(25\\)` },
        { key: "b", text: `\\(24\\)` },
        { key: "c", text: `\\(20\\)` },
        { key: "d", text: `\\(30\\)` }
      ],
      ans: "a",
      ansText: `\\(A(x)=-x^2+10x\\), avec \\(a=-1&lt;0\\) : \\(\\alpha=-\\dfrac{10}{2\\times(-1)}=5\\), \\(\\beta=A(5)=5\\times5=25\\). Le maximum de l'aire est donc \\(25\\), atteint pour \\(x=5\\) (un carré).`
    },
    {
      id: "second-degre-15",
      type: "qcm",
      q: `En posant \\(X=x^2\\), on se ramène à une équation du second degré en \\(X\\) pour résoudre \\(x^4-5x^2+4=0\\) sur \\(\\mathbb{R}\\). Combien cette équation admet-elle de solutions réelles distinctes ?`,
      opts: [
        { key: "a", text: `0` },
        { key: "b", text: `2` },
        { key: "c", text: `Une infinité` },
        { key: "d", text: `4` }
      ],
      ans: "d",
      ansText: `\\(X^2-5X+4=0\\) a pour discriminant \\(\\Delta=25-16=9\\), donc \\(X=\\dfrac{5-3}{2}=1\\) ou \\(X=\\dfrac{5+3}{2}=4\\). Comme \\(X=x^2\\) et que \\(1>0\\) et \\(4>0\\), chaque valeur de \\(X\\) donne deux valeurs de \\(x\\) : \\(x=\\pm1\\) et \\(x=\\pm2\\), soit \\(4\\) solutions distinctes.`
    },
    {
      id: "second-degre-16",
      type: "num",
      q: `On considère \\(f(x)=2x^2+kx-6\\), où \\(k\\) est un paramètre réel. Sachant que la somme des deux racines de \\(f\\) vaut \\(3\\), déterminer la valeur de \\(k\\).`,
      ans: -6,
      ansText: `\\(S=-\\dfrac{k}{2}=3\\Rightarrow k=-6\\) (on vérifie que \\(\\Delta=(-6)^2-4\\times2\\times(-6)=36+48=84>0\\), les racines existent bien).`,
      tol: 0.001
    },
    {
      id: "second-degre-17",
      type: "qcm",
      q: `Sachant que \\(-1\\) est racine évidente de \\(P(x)=x^3+2x^2-5x-6\\), quelle est la factorisation complète de \\(P(x)\\) ?`,
      opts: [
        { key: "a", text: `\\((x-1)(x+3)(x-2)\\)` },
        { key: "b", text: `\\((x+1)(x-3)(x+2)\\)` },
        { key: "c", text: `\\((x+1)(x+3)(x-2)\\)` },
        { key: "d", text: `\\((x+1)(x+3)(x+2)\\)` }
      ],
      ans: "c",
      ansText: `\\(P(-1)=-1+2+5-6=0\\), donc \\(P(x)=(x+1)Q(x)\\) avec \\(Q(x)=x^2+x-6=(x+3)(x-2)\\) (racines de somme \\(-1\\) et produit \\(-6\\)). D'où \\(P(x)=(x+1)(x+3)(x-2)\\).`
    },
    {
      id: "second-degre-18",
      type: "num",
      q: `Résoudre l'inéquation \\(x^2-2x-8\\leqslant0\\). Donner la longueur de l'intervalle solution.`,
      ans: 6,
      ansText: `\\(\\Delta=4+32=36\\), racines \\(\\dfrac{2\\pm6}{2}\\), soit \\(-2\\) et \\(4\\). Comme \\(a=1>0\\), le trinôme est négatif entre les racines : l'ensemble solution est \\([-2,4]\\), de longueur \\(4-(-2)=6\\).`,
      tol: 0.001
    },
    {
      id: "second-degre-19",
      type: "qcm",
      q: `Le trinôme \\(f(x)=x^2+2x+m\\) admet deux racines réelles de signes contraires. Quel est l'ensemble des valeurs possibles de \\(m\\) ?`,
      opts: [
        { key: "a", text: `\\(m>0\\)` },
        { key: "b", text: `\\(m&lt;0\\)` },
        { key: "c", text: `\\(m&lt;1\\)` },
        { key: "d", text: `\\(0&lt;m&lt;1\\)` }
      ],
      ans: "b",
      ansText: `Deux racines de signes contraires \\(\\Leftrightarrow\\) leur produit est négatif : \\(P=\\dfrac{c}{a}=m&lt;0\\). (On vérifie que \\(\\Delta=4-4m>0\\) est alors automatiquement vérifié puisque \\(m&lt;0\\).)`
    },
    {
      id: "second-degre-20",
      type: "qcm",
      q: `On considère \\(f(x)=ax^2+bx+c\\) avec \\(a&lt;0\\) et \\(\\Delta>0\\), de racines \\(x_1&lt;x_2\\). Quelle affirmation est vraie ?`,
      opts: [
        { key: "a", text: `\\(f(x)>0\\) pour \\(x&lt;x_1\\) ou \\(x>x_2\\)` },
        { key: "b", text: `\\(f(x)&lt;0\\) pour tout \\(x\\in\\mathbb{R}\\)` },
        { key: "c", text: `\\(f(x)>0\\) pour tout \\(x\\in\\mathbb{R}\\)` },
        { key: "d", text: `\\(f(x)>0\\) pour \\(x_1&lt;x&lt;x_2\\)` }
      ],
      ans: "d",
      ansText: `Comme \\(a&lt;0\\), le trinôme est du signe de \\(-a\\) (donc positif) à l'intérieur des racines, et du signe de \\(a\\) (donc négatif) à l'extérieur : \\(f(x)>0\\) sur \\(]x_1,x_2[\\).`
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
