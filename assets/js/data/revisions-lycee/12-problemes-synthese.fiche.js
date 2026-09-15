/* ================================================================
   Fiche de révision — Problèmes de synthèse
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "problemes-synthese",
  label: "Problèmes de synthèse",
  fiche:
      `<h4>Huit problèmes transversaux</h4>` +
      `<p>Contrairement aux fiches précédentes organisées par thème, cette section propose huit problèmes plus longs : chacun combine plusieurs notions vues dans deux ou trois thèmes différents, comme cela sera souvent le cas dans les exercices d'Analyse I. Les problèmes E à H sont inspirés du format d'un sujet de Baccalauréat (spécialité mathématiques) : un contexte concret, puis plusieurs questions guidées qui mobilisent successivement suites, fonctions, intégration, probabilités ou statistiques. Chaque question d'un problème reste indépendante et se vérifie séparément.</p>`,

  problems: [
    { id: "pbA", title: `Problème A — Étude d'un trinôme du second degré`, context: `<p>On étudie la fonction polynôme du second degré définie sur \\(\\mathbb{R}\\) par \\(f(x) = x^2 - 4x + 3\\).</p>` },
    { id: "pbB", title: `Problème B — Suite géométrique et décroissance exponentielle`, context: `<p>Une population d'insectes compte initialement \\(u_0 = 2000\\) individus. Chaque semaine, la population diminue de 10&nbsp;% : \\(u_{n+1} = 0{,}9\\,u_n\\) pour tout entier \\(n\\).</p>` },
    { id: "pbC", title: `Problème C — Équation et inéquation trigonométriques`, context: `<p>On considère l'équation \\(\\cos(x) = \\dfrac{1}{2}\\) et l'inéquation associée \\(\\cos(x) \\geqslant \\dfrac{1}{2}\\), toutes deux étudiées sur l'intervalle \\([0\\,;\\,2\\pi]\\).</p>` },
    { id: "pbD", title: `Problème D — Logique, ensembles et inéquations`, context: `<p>On s'intéresse à la proposition \\(P\\) : « \\(\\forall x \\in \\mathbb{R},\\ x^2 \\geqslant x\\) » ainsi qu'à la proposition \\(Q\\) : « \\(\\exists x \\in \\mathbb{R},\\ x^2+1=0\\) ».</p>` },
    { id: "pbE", title: `Problème E — Suite et probabilité`, context: `<p>Une machine industrielle est mise en service. On admet que, chaque jour, elle a une probabilité \\(0{,}05\\) de tomber en panne, indépendamment des jours précédents, si elle fonctionnait la veille. On note \\(p_n\\) la probabilité que la machine fonctionne encore après \\(n\\) jours de service, avec \\(p_0=1\\) et \\(p_{n+1}=0{,}95\\,p_n\\) pour tout entier \\(n\\).</p>` },
    { id: "pbF", title: `Problème F — Étude de fonction et calcul d'aire`, context: `<p>On considère la fonction \\(f\\) définie sur \\([0\\,;\\,+\\infty[\\) par \\(f(x) = x\\,e^{-x}\\), et on note \\(\\mathcal{C}_f\\) sa courbe représentative.</p>` },
    { id: "pbG", title: `Problème G — Loi binomiale`, context: `<p>Dans une usine, on estime que \\(25\\,\\%\\) des pièces produites présentent un défaut mineur, indépendamment les unes des autres. On prélève au hasard un échantillon de \\(8\\) pièces (assimilé à un tirage avec remise vu la taille de la production). On note \\(X\\) le nombre de pièces défectueuses parmi les \\(8\\) prélevées.</p>` },
    { id: "pbH", title: `Problème H — Échantillonnage`, context: `<p>Un institut de sondage souhaite tester l'hypothèse selon laquelle une proposition recueille le soutien de \\(50\\,\\%\\) des électeurs (\\(p=0{,}5\\)). Il interroge un échantillon aléatoire de \\(n=200\\) électeurs et obtient \\(90\\) réponses favorables.</p>` },
    { id: "pbI", title: `Problème I — Suite arithmético-géométrique`, context: `<p>Une entreprise gère un stock de pièces détachées. Chaque mois, 20&nbsp;% du stock restant est utilisé, puis un fournisseur livre 50 nouvelles pièces. On modélise le stock au bout de \\(n\\) mois par la suite \\((u_n)\\) définie par \\(u_0 = 200\\) et, pour tout entier \\(n\\), \\(u_{n+1} = 0{,}8\\,u_n + 50\\).</p>` },
    { id: "pbJ", title: `Problème J — Étude d'une fonction avec exponentielle`, context: `<p>On considère la fonction \\(f\\) définie sur \\([0\\,;\\,+\\infty[\\) par \\(f(x) = (x+1)e^{-x}\\), et on note \\(\\mathcal{C}_f\\) sa courbe représentative.</p>` },
    { id: "pbK", title: `Problème K — Probabilités conditionnelles et test de dépistage`, context: `<p>Dans une population, 2&nbsp;% des personnes sont porteuses d'une maladie \\(M\\). Un test de dépistage est positif chez 95&nbsp;% des personnes malades, mais aussi, à tort, chez 3&nbsp;% des personnes non malades (faux positif). On choisit une personne au hasard dans la population et on note \\(M\\) l'événement « la personne est malade » et \\(T\\) l'événement « le test est positif ». On a donc \\(P(M) = 0{,}02\\), \\(P_M(T) = 0{,}95\\) et \\(P_{\\overline{M}}(T) = 0{,}03\\).</p>` },
    { id: "pbL", title: `Problème L — Raisonnement par récurrence sur une suite`, context: `<p>On définit la suite \\((u_n)\\) par \\(u_0 = 0\\) et, pour tout entier \\(n\\), \\(u_{n+1} = \\sqrt{2u_n + 3}\\). On souhaite étudier cette suite à l'aide d'un raisonnement par récurrence.</p>` }
  ]
});
