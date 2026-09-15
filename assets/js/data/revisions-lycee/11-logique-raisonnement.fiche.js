/* ================================================================
   Fiche de révision — Logique, ensembles & raisonnement
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "logique-raisonnement",
  label: "Logique, ensembles & raisonnement",
  fiche:
      `<h4>Quantificateurs et négation</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><circle cx="145" cy="105" r="72" fill="var(--primary)" fill-opacity="0.22" stroke="var(--primary)" stroke-width="2"/><circle cx="235" cy="105" r="72" fill="var(--accent)" fill-opacity="0.22" stroke="var(--accent)" stroke-width="2"/><text x="87" y="55" font-size="15" fill="var(--primary)" font-weight="700">A</text><text x="281" y="55" font-size="15" fill="var(--accent)" font-weight="700">B</text><text x="180.0" y="111" font-size="12" fill="var(--text)" font-weight="700">A&#8745;B</text><text x="105" y="111" font-size="11" fill="var(--text)">A</text><text x="261" y="111" font-size="11" fill="var(--text)">B</text><text x="144.0" y="192" font-size="12" fill="var(--text-muted)" font-style="italic">A&#8746;B = ensemble reunissant A et B</text></svg><p class="exo-fiche-fig-caption">Diagramme de Venn : intersection A ∩ B (zone commune) et union A ∪ B (les deux ensembles réunis).</p>` +
      `</div>` +
      `<p>Une proposition peut porter sur une variable qui parcourt un ensemble : on dit qu'elle est <strong>quantifiée</strong>.</p>` +
      `<ul><li>\\(\\forall x \\in E,\\ P(x)\\) : « pour tout \\(x\\) de \\(E\\), \\(P(x)\\) est vraie ». Vraie si \\(P(x)\\) est vraie pour chaque élément de \\(E\\), sans exception.</li>` +
      `<li>\\(\\exists x \\in E,\\ P(x)\\) : « il existe (au moins) un \\(x\\) de \\(E\\) tel que \\(P(x)\\) est vraie ». Vraie dès qu'un seul élément convient.</li>` +
      `<li>Négation : on inverse le quantificateur ET on nie ce qui suit. \\[ \\text{non}\\big(\\forall x \\in E,\\ P(x)\\big) \\equiv \\exists x \\in E,\\ \\text{non } P(x) \\] \\[ \\text{non}\\big(\\exists x \\in E,\\ P(x)\\big) \\equiv \\forall x \\in E,\\ \\text{non } P(x) \\]</li>` +
      `<li>Avec deux quantificateurs, l'ordre compte : \\(\\forall x\\, \\exists y,\\ P(x,y)\\) (y peut dépendre de x) n'a pas le même sens que \\(\\exists y\\, \\forall x,\\ P(x,y)\\) (un même y convient pour tous les x). Pour nier une chaîne de quantificateurs, on les inverse un par un dans l'ordre, puis on nie la proposition finale.</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Nier \\(\\forall x\\in\\mathbb R,\\ x^2\\ge 0\\). On change \\(\\forall\\) en \\(\\exists\\) et on nie \\(x^2\\ge 0\\) (qui devient \\(x^2&lt;0\\)) : la négation est \\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\) (proposition fausse, mais c'est bien la négation correcte de la proposition de départ, qui elle est vraie).</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Nier \\(\\forall x\\in\\mathbb R,\\ x>0\\) par « \\(\\forall x\\in\\mathbb R,\\ x&lt;0\\) » est faux : on a oublié de changer le quantificateur. La bonne négation est \\(\\exists x\\in\\mathbb R,\\ x\\le 0\\).</div>` +
      `<h4>Implication, réciproque, contraposée, équivalence</h4>` +
      `<p>Soient \\(P\\) et \\(Q\\) deux propositions.</p>` +
      `<ul><li>Implication \\(P\\Rightarrow Q\\) : « si \\(P\\) est vraie alors \\(Q\\) est vraie ». \\(P\\) est une condition <strong>suffisante</strong> pour \\(Q\\) ; \\(Q\\) est une condition <strong>nécessaire</strong> pour \\(P\\).</li>` +
      `<li>Réciproque de \\(P\\Rightarrow Q\\) : c'est \\(Q\\Rightarrow P\\). En général, PAS équivalente à l'implication de départ.</li>` +
      `<li>Contraposée de \\(P\\Rightarrow Q\\) : c'est \\(\\text{non } Q \\Rightarrow \\text{non } P\\). Toujours équivalente à \\(P\\Rightarrow Q\\) (même valeur de vérité) : c'est un outil de démonstration légitime.</li>` +
      `<li>Équivalence \\(P\\Leftrightarrow Q\\) : \\(P\\Rightarrow Q\\) ET \\(Q\\Rightarrow P\\) (double implication). \\(P\\) et \\(Q\\) sont alors des conditions nécessaires et suffisantes l'une pour l'autre.</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Avec \\(P\\) : « \\(x=2\\) » et \\(Q\\) : « \\(x^2=4\\) », on a \\(P\\Rightarrow Q\\) vraie. La réciproque \\(Q\\Rightarrow P\\) est fausse : \\(x=-2\\) vérifie \\(Q\\) mais pas \\(P\\). Implication et réciproque ne sont donc pas équivalentes ici.</div>` +
      `<div class="exo-fiche-exemple"><strong>Exemple (contraposée).</strong> Pour montrer « si \\(n^2\\) est pair alors \\(n\\) est pair », on montre la contraposée « si \\(n\\) est impair alors \\(n^2\\) est impair », souvent plus simple : \\(n=2k+1 \\Rightarrow n^2=4k^2+4k+1=2(2k^2+2k)+1\\), qui est impair.</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Confondre condition nécessaire et condition suffisante : si \\(P\\Rightarrow Q\\), alors \\(P\\) est suffisante pour \\(Q\\) mais pas forcément nécessaire (on peut avoir \\(Q\\) vraie sans \\(P\\)). Exemple : « \\(x=3\\) » est suffisant pour « \\(x^2=9\\) » mais pas nécessaire, car \\(x=-3\\) vérifie aussi \\(x^2=9\\).</div>` +
      `<h4>Démontrer ou infirmer une proposition</h4>` +
      `<ul><li>Pour montrer \\(\\forall x\\in E,\\ P(x)\\) : il faut un argument valable pour un \\(x\\) quelconque (générique) de \\(E\\). Un ou plusieurs exemples, même nombreux, ne suffisent jamais.</li>` +
      `<li>Pour infirmer \\(\\forall x\\in E,\\ P(x)\\) (montrer que c'est faux) : un seul contre-exemple suffit, c'est-à-dire un \\(x_0\\in E\\) tel que \\(P(x_0)\\) est fausse.</li>` +
      `<li>Pour montrer \\(\\exists x\\in E,\\ P(x)\\) : un seul exemple qui convient suffit.</li>` +
      `<li>Raisonnement par l'absurde : pour montrer une proposition \\(P\\), on suppose \\(\\text{non } P\\) vraie, et on en déduit une contradiction ; on conclut que \\(P\\) est vraie.</li>` +
      `<li>Disjonction de cas : pour montrer \\(P\\), on découpe les situations possibles en plusieurs cas exhaustifs (signe, parité, position par rapport à une valeur...) et on montre \\(P\\) dans chaque cas.</li>` +
      `<li>Récurrence (rappel, voir fiche « Suites ») : pour montrer \\(\\forall n\\ge n_0,\\ P(n)\\), on montre \\(P(n_0)\\) (initialisation) puis \\(P(n)\\Rightarrow P(n+1)\\) pour tout \\(n\\ge n_0\\) (hérédité).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple (absurde).</strong> Montrer que \\(\\sqrt2\\) est irrationnel : on suppose \\(\\sqrt2=\\dfrac{p}{q}\\) avec \\(p,q\\) entiers et la fraction irréductible ; on montre alors que \\(p\\) et \\(q\\) sont tous deux pairs, ce qui contredit l'irréductibilité. Donc \\(\\sqrt2\\) est irrationnel.</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Vérifier une propriété sur quelques exemples numériques ne prouve rien pour une proposition universelle, même si cela aide à conjecturer. Exemple célèbre : \\(n^2-n+41\\) est premier pour \\(n=0,1,\\ldots,39\\), mais pas pour \\(n=41\\).</div>` +
      `<h4>Vocabulaire ensembliste</h4>` +
      `<ul><li>\\(x\\in E\\) : \\(x\\) appartient à \\(E\\) (relation entre un élément et un ensemble). \\(A\\subset E\\) : \\(A\\) est inclus dans \\(E\\), c'est-à-dire \\(\\forall x,\\ x\\in A \\Rightarrow x\\in E\\) (relation entre deux ensembles).</li>` +
      `<li>\\(A\\cup B\\) (réunion) : éléments qui sont dans \\(A\\) ou dans \\(B\\) (ou les deux). \\(A\\cap B\\) (intersection) : éléments qui sont dans \\(A\\) et dans \\(B\\).</li>` +
      `<li>Complémentaire de \\(A\\) dans \\(E\\), noté \\(\\overline A\\) ou \\(E\\setminus A\\) : éléments de \\(E\\) qui ne sont pas dans \\(A\\).</li>` +
      `<li>Utile pour décrire un ensemble de définition comme réunion d'intervalles, par exemple \\(D_f=\\mathbb R\\setminus\\{1\\}=\\,]-\\infty;1[\\,\\cup\\,]1;+\\infty[\\).</li>` +
      `<li>Un ensemble fini à \\(n\\) éléments possède exactement \\(2^n\\) sous-ensembles (parties), y compris l'ensemble vide et l'ensemble lui-même.</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(D_f=\\{x\\in\\mathbb R : x\\ge 0 \\text{ et } x\\ne 4\\} = [0;4[\\,\\cup\\,]4;+\\infty[\\).</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Confondre \\(\\subset\\) et \\(\\in\\) : un élément appartient à un ensemble, un ensemble est inclus dans un ensemble. Écrire « \\(2\\subset\\mathbb N\\) » n'a pas de sens ; la formulation correcte est \\(2\\in\\mathbb N\\).</div>`

});
