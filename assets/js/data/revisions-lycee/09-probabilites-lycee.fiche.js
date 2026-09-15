/* ================================================================
   Fiche de révision — Probabilités
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "probabilites-lycee",
  label: "Probabilités",
  fiche:
      `<h4>Vocabulaire des probabilités et équiprobabilité</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><circle cx="40" cy="110" r="4" fill="var(--text)"/><line x1="40" y1="110" x2="180" y2="55" stroke="var(--primary)" stroke-width="2"/><text x="102.0" y="76.5" font-size="11" fill="var(--primary)" font-weight="700">0,4</text><circle cx="180" cy="55" r="4" fill="var(--primary)"/><text x="188" y="59" font-size="12" fill="var(--primary)" font-weight="700">A</text><line x1="40" y1="110" x2="180" y2="165" stroke="var(--accent)" stroke-width="2"/><text x="102.0" y="131.5" font-size="11" fill="var(--accent)" font-weight="700">0,6</text><circle cx="180" cy="165" r="4" fill="var(--accent)"/><text x="188" y="169" font-size="12" fill="var(--accent)" font-weight="700">non A</text><line x1="180" y1="55" x2="320" y2="20" stroke="var(--text-muted)" stroke-width="1.4"/><text x="244.0" y="33.5" font-size="10" fill="var(--text-muted)">0,5</text><circle cx="320" cy="20" r="3.5" fill="var(--text)"/><text x="328" y="24" font-size="11" fill="var(--text)">B</text><line x1="180" y1="55" x2="320" y2="90" stroke="var(--text-muted)" stroke-width="1.4"/><text x="244.0" y="68.5" font-size="10" fill="var(--text-muted)">0,5</text><circle cx="320" cy="90" r="3.5" fill="var(--text)"/><text x="328" y="94" font-size="11" fill="var(--text)">non B</text><line x1="180" y1="165" x2="320" y2="140" stroke="var(--text-muted)" stroke-width="1.4"/><text x="244.0" y="148.5" font-size="10" fill="var(--text-muted)">0,2</text><circle cx="320" cy="140" r="3.5" fill="var(--text)"/><text x="328" y="144" font-size="11" fill="var(--text)">B</text><line x1="180" y1="165" x2="320" y2="200" stroke="var(--text-muted)" stroke-width="1.4"/><text x="244.0" y="178.5" font-size="10" fill="var(--text-muted)">0,8</text><circle cx="320" cy="200" r="3.5" fill="var(--text)"/><text x="328" y="204" font-size="11" fill="var(--text)">non B</text></svg><p class="exo-fiche-fig-caption">Arbre pondéré à deux étapes : la probabilité d'une issue s'obtient en multipliant les probabilités le long du chemin (ex. P(A∩B) = 0,4 × 0,5 = 0,2).</p>` +
      `</div>` +
      `
<p>Une <strong>expérience aléatoire</strong> est une expérience dont on connaît toutes les issues possibles, mais pas le résultat à l'avance (lancer un dé, tirer une carte, etc.). L'ensemble de toutes les issues possibles s'appelle l'<strong>univers</strong>, noté \\(\\Omega\\).</p>` +
      `
<p>Un <strong>événement</strong> est une partie (un sous-ensemble) de \\(\\Omega\\). Un événement est <strong>réalisé</strong> si l'issue obtenue lui appartient. Un <strong>événement élémentaire</strong> ne contient qu'une seule issue.</p>` +
      `
<ul>
<li>L'événement contraire de \\(A\\), noté \\(\\overline{A}\\), est constitué de toutes les issues de \\(\\Omega\\) qui ne sont pas dans \\(A\\) : \\(P(\\overline{A}) = 1 - P(A)\\).</li>` +
      `
<li>L'événement certain est \\(\\Omega\\) (\\(P(\\Omega)=1\\)) ; l'événement impossible est \\(\\varnothing\\) (\\(P(\\varnothing)=0\\)).</li>` +
      `
<li>Il y a <strong>équiprobabilité</strong> lorsque toutes les issues élémentaires ont la même probabilité. Dans ce cas, pour un événement \\(A\\) : \\(P(A) = \\dfrac{\\text{nombre d'issues favorables à } A}{\\text{nombre d'issues possibles}}\\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> On lance un dé équilibré à 6 faces : \\(\\Omega = \\{1;2;3;4;5;6\\}\\), il y a équiprobabilité. Pour \\(A\\) : « obtenir un multiple de 3 », les issues favorables sont \\(\\{3;6\\}\\), donc \\(P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}\\).</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="190.0" x2="360.0" y2="190.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,186.0 367.0,190.0 360.0,194.0" fill="var(--text-muted)"/><text x="370.0" y="194.0" font-size="11" fill="var(--text-muted)" font-style="italic">k</text><line x1="65.5" y1="190.0" x2="65.5" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="61.5,14.0 65.5,7.0 69.5,14.0" fill="var(--text-muted)"/><text x="71.5" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">P(X=k)</text><line x1="118.1" y1="187.0" x2="118.1" y2="193.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="170.7" y1="187.0" x2="170.7" y2="193.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="223.3" y1="187.0" x2="223.3" y2="193.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="275.9" y1="187.0" x2="275.9" y2="193.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="328.5" y1="187.0" x2="328.5" y2="193.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="62.5" y1="146.0" x2="68.5" y2="146.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="62.5" y1="102.0" x2="68.5" y2="102.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="62.5" y1="58.0" x2="68.5" y2="58.0" stroke="var(--text-muted)" stroke-width="1"/><text x="54.5" y="203.0" font-size="10" fill="var(--text-muted)">0</text><rect x="54.5" y="116.0" width="22" height="74.0" fill="var(--primary)" fill-opacity="0.75"/><text x="65.5" y="110.0" font-size="9" fill="var(--text)" text-anchor="middle">0.17</text><rect x="107.1" y="31.5" width="22" height="158.5" fill="var(--primary)" fill-opacity="0.75"/><text x="118.1" y="25.5" font-size="9" fill="var(--text)" text-anchor="middle">0.36</text><rect x="159.7" y="54.2" width="22" height="135.8" fill="var(--primary)" fill-opacity="0.75"/><text x="170.7" y="48.2" font-size="9" fill="var(--text)" text-anchor="middle">0.31</text><rect x="212.3" y="131.8" width="22" height="58.2" fill="var(--primary)" fill-opacity="0.75"/><text x="223.3" y="125.8" font-size="9" fill="var(--text)" text-anchor="middle">0.13</text><rect x="264.9" y="177.5" width="22" height="12.5" fill="var(--primary)" fill-opacity="0.75"/><text x="275.9" y="171.5" font-size="9" fill="var(--text)" text-anchor="middle">0.03</text><rect x="317.5" y="188.9" width="22" height="1.1" fill="var(--primary)" fill-opacity="0.75"/><text x="328.5" y="182.9" font-size="9" fill="var(--text)" text-anchor="middle">0.00</text><text x="244.3" y="31.6" font-size="11" fill="var(--primary)" font-weight="700">X ~ B(5 ; 0,3)</text></svg><p class="exo-fiche-fig-caption">Exemple : loi binomiale B(5 ; 0,3) — probabilité d'obtenir exactement k succès sur 5 répétitions indépendantes d'une épreuve de probabilité de succès 0,3.</p>` +
      `</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> L'équiprobabilité n'est jamais automatique ! Un dé pipé, une roue de loterie aux secteurs inégaux ou une pièce truquée ne donnent pas des issues équiprobables : il faut alors utiliser les probabilités données dans l'énoncé, pas compter simplement les issues.</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><circle cx="120" cy="100" r="55" fill="var(--primary)" fill-opacity="0.22" stroke="var(--primary)" stroke-width="2"/><circle cx="260" cy="100" r="55" fill="var(--accent)" fill-opacity="0.22" stroke="var(--accent)" stroke-width="2"/><text x="112" y="105" font-size="14" fill="var(--primary)" font-weight="700">A</text><text x="252" y="105" font-size="14" fill="var(--accent)" font-weight="700">B</text><text x="120.0" y="30" font-size="11" fill="var(--text)" font-weight="700">A et B incompatibles (disjoints) : A&#8745;B=&#8709;</text><text x="95.0" y="188" font-size="10" fill="var(--text-muted)" font-style="italic">mais incompatibles &#8800; ind&#233;pendants</text></svg><p class="exo-fiche-fig-caption">Contre-exemple : deux événements incompatibles (disjoints, A∩B=∅) ne sont pas la même chose que deux événements indépendants — une confusion très fréquente.</p>` +
      `</div>` +
      `

<h4>Opérations sur les événements et réunion</h4>` +
      `
<p>Pour deux événements \\(A\\) et \\(B\\) d'un même univers \\(\\Omega\\) :</p>` +
      `
<ul>
<li>\\(A \\cap B\\) (« \\(A\\) inter \\(B\\) ») est l'événement « \\(A\\) ET \\(B\\) » : les issues appartenant à la fois à \\(A\\) et à \\(B\\).</li>` +
      `
<li>\\(A \\cup B\\) (« \\(A\\) union \\(B\\) ») est l'événement « \\(A\\) OU \\(B\\) » : les issues appartenant à \\(A\\), à \\(B\\), ou aux deux.</li>` +
      `
<li>\\(A\\) et \\(B\\) sont <strong>incompatibles</strong> lorsque \\(A \\cap B = \\varnothing\\) (ils ne peuvent pas se réaliser en même temps).</li>` +
      `
<li>Formule générale : \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Si \\(A\\) et \\(B\\) sont incompatibles, \\(P(A \\cap B) = 0\\) donc \\(P(A \\cup B) = P(A) + P(B)\\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> On donne \\(P(A) = 0{,}6\\), \\(P(B) = 0{,}5\\) et \\(P(A \\cap B) = 0{,}3\\). Alors \\(P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Oublier de soustraire \\(P(A \\cap B)\\) quand \\(A\\) et \\(B\\) ne sont pas incompatibles conduit à additionner deux fois les issues communes : la formule \\(P(A \\cup B) = P(A) + P(B)\\) n'est valable QUE si \\(A \\cap B = \\varnothing\\).</div>` +
      `

<h4>Probabilités conditionnelles et probabilités composées</h4>` +
      `
<p>Soit \\(A\\) un événement de probabilité non nulle. La <strong>probabilité conditionnelle</strong> de \\(B\\) sachant que \\(A\\) est réalisé, notée \\(P_A(B)\\), est la probabilité que \\(B\\) se réalise en sachant que \\(A\\) s'est déjà réalisé :</p>` +
      `
<p>\\[P_A(B) = \\dfrac{P(A \\cap B)}{P(A)} \\quad \\text{(avec } P(A) \\neq 0\\text{)}\\]</p>` +
      `
<p>On en déduit la <strong>formule des probabilités composées</strong> : \\(P(A \\cap B) = P(A) \\times P_A(B)\\).</p>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Dans une classe, \\(P(A) = 0{,}4\\) (l'élève est en spécialité maths) et \\(P(A \\cap B) = 0{,}12\\) (l'élève est en spécialité maths ET pratique un sport). Alors \\(P_A(B) = \\dfrac{0{,}12}{0{,}4} = 0{,}3\\) : sachant que l'élève est en spécialité maths, la probabilité qu'il pratique un sport est \\(0{,}3\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> \\(P_A(B)\\) et \\(P_B(A)\\) sont en général DIFFÉRENTES ! \\(P_A(B)\\) se lit « sachant \\(A\\) » (on divise par \\(P(A)\\)), \\(P_B(A)\\) se lit « sachant \\(B\\) » (on divise par \\(P(B)\\)). Confondre les deux est une erreur très fréquente.</div>` +
      `

<h4>Arbres pondérés, indépendance et probabilités totales</h4>` +
      `
<p>Un <strong>arbre pondéré</strong> représente une expérience en plusieurs étapes.</p>` +
      `
<ul>
<li><strong>Règle des nœuds</strong> : la somme des probabilités inscrites sur les branches issues d'un même nœud vaut toujours \\(1\\).</li>` +
      `
<li><strong>Règle des chemins</strong> : la probabilité associée à un chemin est le produit des probabilités inscrites sur ses branches (probabilités composées).</li>` +
      `
<li><strong>Règle des probabilités totales</strong> : si \\(A_1, A_2, \\dots, A_n\\) forment une partition de \\(\\Omega\\) (événements deux à deux incompatibles dont l'union est \\(\\Omega\\)), alors pour tout événement \\(B\\) : \\(P(B) = P(A_1) \\times P_{A_1}(B) + P(A_2) \\times P_{A_2}(B) + \\dots + P(A_n) \\times P_{A_n}(B)\\), c'est-à-dire qu'on additionne les probabilités de tous les chemins qui mènent à \\(B\\).</li>` +
      `
<li><strong>Indépendance</strong> : deux événements \\(A\\) et \\(B\\) sont <strong>indépendants</strong> lorsque \\(P(A \\cap B) = P(A) \\times P(B)\\), ce qui équivaut (si \\(P(A) \\neq 0\\)) à \\(P_A(B) = P(B)\\) : savoir que \\(A\\) est réalisé ne change rien à la probabilité de \\(B\\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple (arbre).</strong> Une urne partitionnée en deux groupes : \\(P(A_1) = 0{,}3\\) et \\(P(A_2) = 0{,}7\\), avec \\(P_{A_1}(B) = 0{,}2\\) et \\(P_{A_2}(B) = 0{,}5\\). Par la formule des probabilités totales : \\(P(B) = 0{,}3 \\times 0{,}2 + 0{,}7 \\times 0{,}5 = 0{,}06 + 0{,}35 = 0{,}41\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Incompatibilité et indépendance sont deux notions différentes, souvent confondues ! Si \\(A\\) et \\(B\\) sont incompatibles ET ont chacune une probabilité non nulle, elles ne peuvent PAS être indépendantes : \\(P(A \\cap B) = 0\\) alors que \\(P(A) \\times P(B) \\neq 0\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Sur un arbre, ne pas confondre la lecture « en descendant » (multiplier les branches d'un même chemin) et « en remontant » (additionner les probabilités des chemins menant à un même événement final).</div>` +
      `

<h4>Variables aléatoires : loi, espérance, variance, écart-type</h4>` +
      `
<p>Une <strong>variable aléatoire</strong> \\(X\\) associe un nombre réel à chaque issue de l'expérience. Sa <strong>loi de probabilité</strong> donne, pour chaque valeur \\(x_i\\) prise par \\(X\\), la probabilité \\(P(X = x_i)\\). La somme de toutes ces probabilités vaut toujours \\(1\\).</p>` +
      `
<p>Pour une variable aléatoire prenant les valeurs \\(x_1, \\dots, x_n\\) avec les probabilités \\(p_1, \\dots, p_n\\) :</p>` +
      `
<ul>
<li><strong>Espérance</strong> : \\(E(X) = \\displaystyle\\sum_{i=1}^{n} p_i\\, x_i = p_1 x_1 + p_2 x_2 + \\dots + p_n x_n\\) (moyenne des valeurs pondérée par leurs probabilités).</li>` +
      `
<li><strong>Variance</strong> : \\(V(X) = \\displaystyle\\sum_{i=1}^{n} p_i\\, (x_i - E(X))^2 = E(X^2) - [E(X)]^2\\), avec \\(E(X^2) = \\displaystyle\\sum_{i=1}^{n} p_i\\, x_i^2\\).</li>` +
      `
<li><strong>Écart-type</strong> : \\(\\sigma(X) = \\sqrt{V(X)}\\) (mesure la dispersion des valeurs autour de l'espérance, dans la même unité que \\(X\\)).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(X\\) prend les valeurs \\(-2\\), \\(1\\) et \\(3\\) avec les probabilités \\(0{,}3\\), \\(0{,}5\\) et \\(0{,}2\\). \\(E(X) = -2 \\times 0{,}3 + 1 \\times 0{,}5 + 3 \\times 0{,}2 = 0{,}5\\). \\(E(X^2) = 4 \\times 0{,}3 + 1 \\times 0{,}5 + 9 \\times 0{,}2 = 3{,}5\\), donc \\(V(X) = 3{,}5 - 0{,}5^2 = 3{,}25\\) et \\(\\sigma(X) = \\sqrt{3{,}25} \\approx 1{,}80\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Pour calculer la variance avec \\(E(X^2) - [E(X)]^2\\), il ne faut PAS confondre \\(E(X^2)\\) (espérance des carrés des valeurs) avec \\([E(X)]^2\\) (carré de l'espérance) : ce sont deux nombres différents !</div>` +
      `

<h4>Épreuve de Bernoulli et loi binomiale</h4>` +
      `
<p>Une <strong>épreuve de Bernoulli</strong> est une expérience aléatoire à deux issues : « succès » (probabilité \\(p\\)) et « échec » (probabilité \\(1-p\\)).</p>` +
      `
<p>Un <strong>schéma de Bernoulli</strong> consiste à répéter \\(n\\) fois, de façon <strong>identique et indépendante</strong>, la même épreuve de Bernoulli de paramètre \\(p\\) (par exemple : tirages avec remise). La variable aléatoire \\(X\\) qui compte le nombre de succès suit alors la <strong>loi binomiale</strong> de paramètres \\(n\\) et \\(p\\), notée \\(\\mathcal{B}(n,p)\\).</p>` +
      `
<ul>
<li>Pour tout entier \\(k\\) tel que \\(0 \\le k \\le n\\) : \\(P(X=k) = \\dbinom{n}{k} p^k (1-p)^{n-k}\\), où \\(\\dbinom{n}{k}\\) (« \\(k\\) parmi \\(n\\) », coefficient binomial) est le nombre de chemins de l'arbre menant à exactement \\(k\\) succès.</li>` +
      `
<li>Espérance : \\(E(X) = np\\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Une urne contient 3 boules rouges et 7 boules bleues. On tire une boule, on la remet, et on répète \\(8\\) fois : \\(X\\), le nombre de boules rouges obtenues, suit la loi \\(\\mathcal{B}\\!\\left(8\\,;\\,0{,}3\\right)\\), et \\(E(X) = 8 \\times 0{,}3 = 2{,}4\\).</div>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple (calcul).</strong> Pour \\(X \\sim \\mathcal{B}(5\\,;\\,0{,}3)\\) : \\(P(X=2) = \\dbinom{5}{2} \\times 0{,}3^2 \\times 0{,}7^3 = 10 \\times 0{,}09 \\times 0{,}343 = 0{,}3087\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Un schéma binomial suppose des tirages <strong>avec remise</strong> (ou plus généralement des répétitions indépendantes et identiques). Des tirages successifs <strong>sans remise</strong> ne suivent PAS une loi binomiale : la probabilité de succès change à chaque tirage puisque la composition de l'urne évolue.</div>`

});
