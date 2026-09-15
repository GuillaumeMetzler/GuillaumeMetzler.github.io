/* ================================================================
   Banque de questions — Logique, ensembles & raisonnement (20 questions)
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

(function () {
  var slug = "logique-raisonnement";
  var questions = [
    {
      id: "logique-raisonnement-01",
      type: "qcm",
      q: `Quelle est la négation de la proposition \\(\\forall x\\in\\mathbb R,\\ x^2\\ge 0\\) ?`,
      opts: [
        { key: "a", text: `\\(\\forall x\\in\\mathbb R,\\ x^2&lt;0\\)` },
        { key: "b", text: `\\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\)` },
        { key: "c", text: `\\(\\exists x\\in\\mathbb R,\\ x^2\\ge 0\\)` },
        { key: "d", text: `\\(\\forall x\\in\\mathbb R,\\ x^2\\le 0\\)` }
      ],
      ans: "b",
      ansText: `On change \\(\\forall\\) en \\(\\exists\\) et on nie \\(x^2\\ge 0\\) en \\(x^2&lt;0\\) : \\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\).`
    },
    {
      id: "logique-raisonnement-02",
      type: "qcm",
      q: `Quelle est la négation de \\(\\exists x\\in\\mathbb R,\\ x+1=0\\) ?`,
      opts: [
        { key: "a", text: `\\(\\forall x\\in\\mathbb R,\\ x+1=0\\)` },
        { key: "b", text: `\\(\\exists x\\in\\mathbb R,\\ x+1\\ne 0\\)` },
        { key: "c", text: `\\(\\forall x\\in\\mathbb R,\\ x+1\\ne 0\\)` },
        { key: "d", text: `\\(\\exists x\\in\\mathbb R,\\ x+1=0\\)` }
      ],
      ans: "c",
      ansText: `On change \\(\\exists\\) en \\(\\forall\\) et on nie \\(x+1=0\\) en \\(x+1\\ne 0\\) : \\(\\forall x\\in\\mathbb R,\\ x+1\\ne 0\\).`
    },
    {
      id: "logique-raisonnement-03",
      type: "num",
      q: `Combien de sous-ensembles (parties) possède un ensemble à 5 éléments ?`,
      ans: 32,
      ansText: `\\(2^5=32\\).`,
      tol: 0.01
    },
    {
      id: "logique-raisonnement-04",
      type: "qcm",
      q: `On considère l'implication \\(P\\Rightarrow Q\\) avec \\(P\\) : « \\(n\\) est divisible par 4 » et \\(Q\\) : « \\(n\\) est pair ». Quelle est la contraposée de cette implication ?`,
      opts: [
        { key: "a", text: `« si \\(n\\) est pair alors \\(n\\) est divisible par 4 »` },
        { key: "b", text: `« si \\(n\\) n'est pas pair alors \\(n\\) n'est pas divisible par 4 »` },
        { key: "c", text: `« si \\(n\\) n'est pas divisible par 4 alors \\(n\\) n'est pas pair »` },
        { key: "d", text: `« si \\(n\\) n'est pas divisible par 4 alors \\(n\\) est pair »` }
      ],
      ans: "b",
      ansText: `La contraposée de \\(P\\Rightarrow Q\\) est \\(\\text{non } Q\\Rightarrow\\text{non } P\\) : « si \\(n\\) n'est pas pair alors \\(n\\) n'est pas divisible par 4 ».`
    },
    {
      id: "logique-raisonnement-05",
      type: "qcm",
      q: `Une implication \\(P\\Rightarrow Q\\) et sa contraposée \\(\\text{non } Q\\Rightarrow \\text{non } P\\) ont-elles toujours la même valeur de vérité (toutes deux vraies ou toutes deux fausses) ?`,
      opts: [
        { key: "a", text: `Oui, toujours : ce sont deux formulations équivalentes de la même implication.` },
        { key: "b", text: `Non, la contraposée peut être vraie alors que l'implication est fausse.` },
        { key: "c", text: `Cela dépend des propositions \\(P\\) et \\(Q\\) considérées.` },
        { key: "d", text: `Oui, mais seulement si \\(P\\) et \\(Q\\) sont des équations.` }
      ],
      ans: "a",
      ansText: `L'implication et sa contraposée sont toujours équivalentes, quelles que soient \\(P\\) et \\(Q\\) : c'est un résultat général de logique, indépendant du contexte.`
    },
    {
      id: "logique-raisonnement-06",
      type: "qcm",
      q: `L'implication « si un entier \\(n\\) est divisible par 4, alors \\(n\\) est pair » est vraie. Que dire de sa réciproque « si \\(n\\) est pair, alors \\(n\\) est divisible par 4 » ?`,
      opts: [
        { key: "a", text: `Elle est vraie aussi, car une implication vraie a toujours une réciproque vraie.` },
        { key: "b", text: `Elle est fausse : \\(n=2\\) est pair mais n'est pas divisible par 4, c'est un contre-exemple.` },
        { key: "c", text: `Elle est vraie, car c'est la contraposée de l'implication de départ.` },
        { key: "d", text: `On ne peut rien en dire sans étudier tous les entiers pairs un par un.` }
      ],
      ans: "b",
      ansText: `\\(n=2\\) est pair mais n'est pas divisible par 4 : c'est un contre-exemple qui infirme la réciproque. Implication et réciproque ne sont pas équivalentes en général.`
    },
    {
      id: "logique-raisonnement-07",
      type: "qcm",
      q: `Quelle est la négation de \\(\\forall x\\in\\mathbb R,\\ (x>0 \\text{ et } x&lt;1)\\) ?`,
      opts: [
        { key: "a", text: `\\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ et } x\\ge 1)\\)` },
        { key: "b", text: `\\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\)` },
        { key: "c", text: `\\(\\forall x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\)` },
        { key: "d", text: `\\(\\exists x\\in\\mathbb R,\\ (x&lt;0 \\text{ ou } x>1)\\)` }
      ],
      ans: "b",
      ansText: `La négation de « P et Q » est « non P ou non Q » ; ici, \\(\\text{non}(x>0)\\) est \\(x\\le 0\\) et \\(\\text{non}(x&lt;1)\\) est \\(x\\ge 1\\) : \\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\).`
    },
    {
      id: "logique-raisonnement-08",
      type: "qcm",
      q: `Pour infirmer la proposition \\(\\forall x\\in\\mathbb R,\\ x^2>x\\), lequel des réels suivants est un contre-exemple valable ?`,
      opts: [
        { key: "a", text: `\\(x=2\\)` },
        { key: "b", text: `\\(x=-1\\)` },
        { key: "c", text: `\\(x=0{,}5\\)` },
        { key: "d", text: `\\(x=-2\\)` }
      ],
      ans: "c",
      ansText: `Pour \\(x=0{,}5\\) : \\(x^2=0{,}25\\), qui n'est pas supérieur à \\(0{,}5\\) : la proposition \\(x^2>x\\) est fausse pour cette valeur, ce qui l'infirme. (Pour \\(x=2\\), \\(x=-1\\) et \\(x=-2\\), on a bien \\(x^2>x\\).)`
    },
    {
      id: "logique-raisonnement-09",
      type: "qcm",
      q: `Un élève écrit : « Pour montrer que tout nombre premier supérieur à 2 est impair, je vérifie que 3, 5, 7 et 11 sont impairs : c'est donc démontré. » Ce raisonnement est-il valable ?`,
      opts: [
        { key: "a", text: `Oui, car il suffit de vérifier plusieurs exemples pour conclure.` },
        { key: "b", text: `Non : vérifier des exemples, même plusieurs, ne prouve pas une proposition universelle ; il faut un argument valable pour tout nombre premier supérieur à 2 (par exemple, un entier pair supérieur à 2 est divisible par 2 donc n'est pas premier).` },
        { key: "c", text: `Oui, car les nombres premiers testés sont suffisamment grands pour généraliser.` },
        { key: "d", text: `Non, car il aurait fallu utiliser un raisonnement par récurrence.` }
      ],
      ans: "b",
      ansText: `Une proposition universelle ne se démontre pas en vérifiant des exemples, aussi nombreux soient-ils : il faut un argument valable pour un élément quelconque de l'ensemble considéré.`
    },
    {
      id: "logique-raisonnement-10",
      type: "qcm",
      q: `Pour démontrer une proposition \\(P\\) par l'absurde, la démarche correcte est :`,
      opts: [
        { key: "a", text: `Supposer \\(P\\) vraie et vérifier qu'elle est cohérente avec les hypothèses.` },
        { key: "b", text: `Supposer \\(\\text{non } P\\) vraie et aboutir à une contradiction, ce qui permet de conclure que \\(P\\) est vraie.` },
        { key: "c", text: `Trouver un exemple où \\(P\\) est vraie.` },
        { key: "d", text: `Montrer directement la contraposée de \\(P\\).` }
      ],
      ans: "b",
      ansText: `Le raisonnement par l'absurde consiste à supposer le contraire de ce qu'on veut montrer, puis à en déduire une absurdité (contradiction), ce qui force la proposition de départ à être vraie.`
    },
    {
      id: "logique-raisonnement-11",
      type: "qcm",
      q: `On considère la proposition \\(\\forall n\\in\\mathbb N,\\ \\exists m\\in\\mathbb N,\\ m>n\\). Quelle est sa négation ?`,
      opts: [
        { key: "a", text: `\\(\\exists n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\)` },
        { key: "b", text: `\\(\\forall n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\)` },
        { key: "c", text: `\\(\\exists n\\in\\mathbb N,\\ \\exists m\\in\\mathbb N,\\ m\\le n\\)` },
        { key: "d", text: `\\(\\forall m\\in\\mathbb N,\\ \\exists n\\in\\mathbb N,\\ m\\le n\\)` }
      ],
      ans: "a",
      ansText: `On inverse chaque quantificateur dans l'ordre (\\(\\forall\\to\\exists\\), \\(\\exists\\to\\forall\\)) puis on nie \\(m>n\\) en \\(m\\le n\\) : \\(\\exists n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\).`
    },
    {
      id: "logique-raisonnement-12",
      type: "qcm",
      q: `Soit \\(f:\\mathbb R\\to\\mathbb R\\). On considère la proposition \\(\\exists M\\in\\mathbb R,\\ \\forall x\\in\\mathbb R,\\ f(x)\\le M\\) (\\(f\\) est majorée par un majorant commun \\(M\\)). Laquelle des propositions suivantes n'a PAS le même sens (et est en réalité beaucoup plus faible) ?`,
      opts: [
        { key: "a", text: `\\(f\\) est majorée sur \\(\\mathbb R\\).` },
        { key: "b", text: `\\(\\forall x\\in\\mathbb R,\\ \\exists M\\in\\mathbb R,\\ f(x)\\le M\\) (chaque \\(x\\) a son propre majorant, qui peut dépendre de \\(x\\)).` },
        { key: "c", text: `Il existe un réel qui majore toutes les valeurs prises par \\(f\\).` },
        { key: "d", text: `\\(f(x)\\) ne dépasse jamais une certaine constante \\(M\\) fixée à l'avance.` }
      ],
      ans: "b",
      ansText: `En inversant l'ordre des quantificateurs, on obtient \\(\\forall x,\\exists M,\\ f(x)\\le M\\), qui est toujours vraie (il suffit de prendre \\(M=f(x)\\) pour chaque \\(x\\)) : ce n'est plus la même affirmation que « \\(f\\) est majorée », qui exige un \\(M\\) commun à tous les \\(x\\).`
    },
    {
      id: "logique-raisonnement-13",
      type: "qcm",
      q: `Quelle est la négation de \\(\\exists x\\in\\mathbb R,\\ (x>2 \\text{ ou } x&lt;-2)\\) ?`,
      opts: [
        { key: "a", text: `\\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\)` },
        { key: "b", text: `\\(\\exists x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\)` },
        { key: "c", text: `\\(\\forall x\\in\\mathbb R,\\ (x&lt;2 \\text{ et } x>-2)\\)` },
        { key: "d", text: `\\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ ou } x\\ge -2)\\)` }
      ],
      ans: "a",
      ansText: `On change \\(\\exists\\) en \\(\\forall\\), puis on nie « \\(x>2\\) ou \\(x&lt;-2\\) » en « non\\((x>2)\\) et non\\((x&lt;-2)\\) », soit « \\(x\\le 2\\) et \\(x\\ge -2\\) » : \\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\).`
    },
    {
      id: "logique-raisonnement-14",
      type: "qcm",
      q: `On considère, pour un réel \\(x\\), les propositions \\(P\\) : « \\(x>5\\) » et \\(Q\\) : « \\(x^2>25\\) ». On admet que \\(P\\Rightarrow Q\\) est vraie. Que peut-on en conclure ?`,
      opts: [
        { key: "a", text: `\\(P\\) est une condition suffisante mais pas nécessaire pour \\(Q\\) : \\(x=-6\\) vérifie \\(Q\\) sans vérifier \\(P\\).` },
        { key: "b", text: `\\(P\\) est une condition nécessaire mais pas suffisante pour \\(Q\\).` },
        { key: "c", text: `\\(P\\) n'est ni nécessaire ni suffisante pour \\(Q\\).` },
        { key: "d", text: `\\(P\\) est une condition nécessaire et suffisante pour \\(Q\\).` }
      ],
      ans: "a",
      ansText: `\\(P\\Rightarrow Q\\) vraie signifie que \\(P\\) est suffisante pour \\(Q\\). Mais \\(Q\\) peut être vraie sans \\(P\\) : \\(x=-6\\) donne \\(x^2=36>25\\) (donc \\(Q\\) vraie) alors que \\(x=-6\\) n'est pas supérieur à 5 (donc \\(P\\) fausse). \\(P\\) n'est donc pas nécessaire pour \\(Q\\).`
    },
    {
      id: "logique-raisonnement-15",
      type: "num",
      q: `Un ensemble \\(E\\) possède 7 éléments, dont un élément fixé \\(a\\). Combien de parties (sous-ensembles) de \\(E\\) contiennent l'élément \\(a\\) ?`,
      ans: 64,
      ansText: `Une partie de \\(E\\) contenant \\(a\\) est entièrement déterminée par le choix, pour chacun des 6 autres éléments, de son appartenance ou non à cette partie : il y a donc \\(2^6=64\\) telles parties.`,
      tol: 0.01
    },
    {
      id: "logique-raisonnement-16",
      type: "qcm",
      q: `Soit \\(E=\\mathbb R\\) et \\(A=\\,]-\\infty;3]\\). Quel est le complémentaire de \\(A\\) dans \\(E\\), noté \\(\\overline A\\) ?`,
      opts: [
        { key: "a", text: `\\(\\overline A = \\,]3;+\\infty[\\)` },
        { key: "b", text: `\\(\\overline A = [-3;+\\infty[\\)` },
        { key: "c", text: `\\(\\overline A = [3;+\\infty[\\)` },
        { key: "d", text: `\\(\\overline A = \\,]-\\infty;3[\\)` }
      ],
      ans: "a",
      ansText: `\\(\\overline A\\) regroupe les réels de \\(E\\) qui ne sont pas dans \\(A\\), c'est-à-dire ceux qui vérifient \\(x>3\\) (3 est inclus dans \\(A\\), donc exclu de son complémentaire) : \\(\\overline A=\\,]3;+\\infty[\\).`
    },
    {
      id: "logique-raisonnement-17",
      type: "qcm",
      q: `Quelle formulation traduit correctement, à l'aide d'un quantificateur, que \\(A\\subset B\\) (A et B étant deux sous-ensembles d'un ensemble E) ?`,
      opts: [
        { key: "a", text: `\\(\\forall x\\in E,\\ x\\in A \\Rightarrow x\\in B\\)` },
        { key: "b", text: `\\(\\exists x\\in E,\\ x\\in A \\Rightarrow x\\in B\\)` },
        { key: "c", text: `\\(\\forall x\\in E,\\ x\\in B \\Rightarrow x\\in A\\)` },
        { key: "d", text: `\\(\\forall x\\in E,\\ x\\in A \\text{ et } x\\in B\\)` }
      ],
      ans: "a",
      ansText: `L'inclusion \\(A\\subset B\\) signifie que tout élément de \\(A\\) est aussi élément de \\(B\\) : \\(\\forall x\\in E,\\ x\\in A\\Rightarrow x\\in B\\). (b) affaiblit à tort le quantificateur, (c) décrit \\(B\\subset A\\), et (d) décrit \\(A\\cap B = A\\), ce qui est plus fort qu'une inclusion.`
    },
    {
      id: "logique-raisonnement-18",
      type: "qcm",
      q: `On considère deux propositions \\(P\\) et \\(Q\\) portant sur un entier \\(n\\) : \\(P\\) : « \\(n\\) est pair » et \\(Q\\) : « \\(n^2\\) est pair ». On a vu que \\(P\\Rightarrow Q\\) est vraie, et que la réciproque \\(Q\\Rightarrow P\\) est également vraie (démontrée par contraposée). Que peut-on en conclure sur \\(P\\) et \\(Q\\) ?`,
      opts: [
        { key: "a", text: `\\(P\\) est une condition suffisante pour \\(Q\\), mais pas nécessaire.` },
        { key: "b", text: `\\(P\\) est une condition nécessaire pour \\(Q\\), mais pas suffisante.` },
        { key: "c", text: `\\(P\\) et \\(Q\\) sont équivalentes : \\(P\\) est une condition nécessaire et suffisante pour \\(Q\\).` },
        { key: "d", text: `On ne peut rien conclure sans connaître la valeur précise de \\(n\\).` }
      ],
      ans: "c",
      ansText: `Puisque \\(P\\Rightarrow Q\\) et \\(Q\\Rightarrow P\\) sont toutes deux vraies, on a l'équivalence \\(P\\Leftrightarrow Q\\) : \\(P\\) est une condition nécessaire ET suffisante pour \\(Q\\) (et réciproquement).`
    },
    {
      id: "logique-raisonnement-19",
      type: "qcm",
      q: `Un élève veut montrer que pour tout entier naturel \\(n\\), le produit \\(n(n+1)\\) est pair. Il écrit : « Si \\(n\\) est pair, alors \\(n(n+1)\\) est le produit d'un entier pair par un entier, donc pair. Si \\(n\\) est impair, alors \\(n+1\\) est pair, donc \\(n(n+1)\\) est encore le produit d'un entier pair par un entier, donc pair. Dans les deux cas, \\(n(n+1)\\) est pair. » Quelle méthode de démonstration a-t-il utilisée ?`,
      opts: [
        { key: "a", text: `Un raisonnement par l'absurde.` },
        { key: "b", text: `Une démonstration par contre-exemple.` },
        { key: "c", text: `Une récurrence sur \\(n\\).` },
        { key: "d", text: `Une disjonction de cas selon la parité de \\(n\\).` }
      ],
      ans: "d",
      ansText: `L'élève découpe les entiers en deux cas exhaustifs (\\(n\\) pair ou \\(n\\) impair) et montre la propriété dans chacun des deux cas : c'est une disjonction de cas, pas un raisonnement par l'absurde (aucune contradiction n'est cherchée), ni une récurrence (aucun lien entre \\(n\\) et \\(n+1\\) via une hérédité n'est établi), ni un contre-exemple (qui servirait à infirmer, non à démontrer).`
    },
    {
      id: "logique-raisonnement-20",
      type: "num",
      q: `Un ensemble \\(E\\) possède 6 éléments, dont deux éléments fixés \\(a\\) et \\(b\\). Combien de parties de \\(E\\) contiennent \\(a\\) mais ne contiennent pas \\(b\\) ?`,
      ans: 16,
      ansText: `Une telle partie est entièrement déterminée par le choix, pour chacun des 4 éléments restants (autres que \\(a\\) et \\(b\\)), de son appartenance ou non à la partie : \\(a\\) est imposé présent, \\(b\\) est imposé absent, donc il y a \\(2^4=16\\) parties possibles.`,
      tol: 0.01
    }
  ];
  questions.forEach(function (q) {
    q.cat = slug;
    window.EXERCISES_DATA.push(q);
  });
})();
