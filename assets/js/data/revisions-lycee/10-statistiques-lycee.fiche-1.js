/* ================================================================
   Fiche de révision — Statistiques
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "statistiques-lycee",
  label: "Statistiques",
  fiche:
      `<h4>Vocabulaire de base</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="74.0" y1="140" x2="74.0" y2="146" stroke="var(--text-muted)" stroke-width="1"/><text x="74.0" y="160" font-size="11" fill="var(--text-muted)" text-anchor="middle">4</text><line x1="140.0" y1="140" x2="140.0" y2="146" stroke="var(--text-muted)" stroke-width="1"/><text x="140.0" y="160" font-size="11" fill="var(--text-muted)" text-anchor="middle">10</text><line x1="184.0" y1="140" x2="184.0" y2="146" stroke="var(--text-muted)" stroke-width="1"/><text x="184.0" y="160" font-size="11" fill="var(--text-muted)" text-anchor="middle">14</text><line x1="250.0" y1="140" x2="250.0" y2="146" stroke="var(--text-muted)" stroke-width="1"/><text x="250.0" y="160" font-size="11" fill="var(--text-muted)" text-anchor="middle">20</text><line x1="327.0" y1="140" x2="327.0" y2="146" stroke="var(--text-muted)" stroke-width="1"/><text x="327.0" y="160" font-size="11" fill="var(--text-muted)" text-anchor="middle">27</text><line x1="30.0" y1="140" x2="360.0" y2="140" stroke="var(--text-muted)" stroke-width="1"/><line x1="74.0" y1="70" x2="140.0" y2="70" stroke="var(--text)" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="250.0" y1="70" x2="327.0" y2="70" stroke="var(--text)" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="74.0" y1="53.0" x2="74.0" y2="87.0" stroke="var(--text)" stroke-width="1.6"/><line x1="327.0" y1="53.0" x2="327.0" y2="87.0" stroke="var(--text)" stroke-width="1.6"/><rect x="140.0" y="53.0" width="110.0" height="34" fill="var(--primary)" fill-opacity="0.2" stroke="var(--primary)" stroke-width="2"/><line x1="184.0" y1="53.0" x2="184.0" y2="87.0" stroke="var(--accent)" stroke-width="2.4"/><text x="74.0" y="45.0" font-size="10" fill="var(--text)" text-anchor="middle">min</text><text x="140.0" y="45.0" font-size="10" fill="var(--text)" text-anchor="middle">Q1</text><text x="184.0" y="45.0" font-size="10" fill="var(--text)" text-anchor="middle">médiane</text><text x="250.0" y="45.0" font-size="10" fill="var(--text)" text-anchor="middle">Q3</text><text x="327.0" y="45.0" font-size="10" fill="var(--text)" text-anchor="middle">max</text></svg><p class="exo-fiche-fig-caption">Boîte à moustaches (box-plot) : le rectangle central regroupe 50 % des valeurs entre Q1 et Q3, la barre représente la médiane, et les moustaches s'étendent jusqu'aux valeurs extrêmes.</p>` +
      `</div>` +
      `
<p>Une étude statistique porte sur une <strong>population</strong> (ensemble d'individus étudiés) : chaque élément est un <strong>individu</strong>. On étudie sur cette population un <strong>caractère</strong> (ou variable), qui peut être quantitatif (valeurs numériques : discret ou continu par classes) ou qualitatif (catégories, non numérique).</p>` +
      `
<ul>
<li><strong>Effectif</strong> \\( n_i \\) d'une valeur (ou d'une classe) \\( x_i \\) : nombre d'individus qui présentent cette valeur.</li>` +
      `
<li><strong>Effectif total</strong> \\( N = \\sum n_i \\).</li>` +
      `
<li><strong>Fréquence</strong> \\( f_i = \\dfrac{n_i}{N} \\) : proportion d'individus concernés (comprise entre 0 et 1, ou exprimée en %).</li>` +
      `
<li>La somme des fréquences vaut toujours 1 (soit 100%).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Dans une classe de 48 élèves, 12 pratiquent le tennis. L'effectif est \\( n = 12 \\), l'effectif total \\( N = 48 \\), et la fréquence est \\( f = \\dfrac{12}{48} = 0{,}25 \\), soit 25 %.</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><rect x="34.0" y="40.7" width="43.6" height="134.3" fill="var(--primary)" fill-opacity="0.65"/><rect x="80.6" y="71.7" width="43.6" height="103.3" fill="var(--primary)" fill-opacity="0.65"/><rect x="127.1" y="113.0" width="43.6" height="62.0" fill="var(--primary)" fill-opacity="0.65"/><rect x="173.7" y="144.0" width="43.6" height="31.0" fill="var(--primary)" fill-opacity="0.65"/><rect x="220.3" y="113.0" width="43.6" height="62.0" fill="var(--primary)" fill-opacity="0.65"/><rect x="266.9" y="71.7" width="43.6" height="103.3" fill="var(--primary)" fill-opacity="0.65"/><rect x="313.4" y="40.7" width="43.6" height="134.3" fill="var(--primary)" fill-opacity="0.65"/><line x1="197.0" y1="10" x2="197.0" y2="178" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5,3"/><text x="151.0" y="20" font-size="11" fill="var(--accent)" font-weight="700">moyenne &#8776; m&#233;diane</text><line x1="34.0" y1="178" x2="360.0" y2="178" stroke="var(--text-muted)" stroke-width="1"/><text x="36.0" y="193" font-size="10" fill="var(--text-muted)">distribution sym&#233;trique</text></svg><p class="exo-fiche-fig-caption">Exemple : pour une distribution à peu près symétrique, la moyenne et la médiane sont proches l'une de l'autre.</p>` +
      `</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Ne pas confondre effectif (un nombre d'individus, sans unité, un entier) et fréquence (un nombre compris entre 0 et 1, ou un pourcentage). Une fréquence n'est jamais supérieure à 1 (ni à 100 %).</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="30.0" y1="90" x2="360.0" y2="90" stroke="var(--text-muted)" stroke-width="1"/><line x1="52.0" y1="86" x2="52.0" y2="94" stroke="var(--text-muted)" stroke-width="1"/><line x1="63.0" y1="86" x2="63.0" y2="94" stroke="var(--text-muted)" stroke-width="1"/><line x1="74.0" y1="86" x2="74.0" y2="94" stroke="var(--text-muted)" stroke-width="1"/><line x1="85.0" y1="86" x2="85.0" y2="94" stroke="var(--text-muted)" stroke-width="1"/><line x1="338.0" y1="86" x2="338.0" y2="94" stroke="var(--text-muted)" stroke-width="1"/><circle cx="52.0" cy="90" r="4" fill="var(--primary)"/><circle cx="63.0" cy="90" r="4" fill="var(--primary)"/><circle cx="63.0" cy="90" r="4" fill="var(--primary)"/><circle cx="74.0" cy="90" r="4" fill="var(--primary)"/><circle cx="74.0" cy="90" r="4" fill="var(--primary)"/><circle cx="85.0" cy="90" r="4" fill="var(--primary)"/><circle cx="338.0" cy="90" r="4" fill="var(--primary)"/><line x1="74.0" y1="60" x2="74.0" y2="120" stroke="var(--success)" stroke-width="2"/><text x="64.0" y="52" font-size="10" fill="var(--success)" font-weight="700">m&#233;diane = 4</text><line x1="107.0" y1="60" x2="107.0" y2="120" stroke="var(--warning)" stroke-width="2"/><text x="97.0" y="138" font-size="10" fill="var(--warning)" font-weight="700">moyenne &#8776; 7.0</text><text x="272.0" y="78" font-size="10" fill="var(--text-muted)" font-style="italic">valeur extreme</text></svg><p class="exo-fiche-fig-caption">Contre-exemple : une seule valeur extrême suffit à éloigner fortement la moyenne de la médiane, qui reste elle beaucoup plus robuste aux valeurs extrêmes.</p>` +
      `</div>` +
      `

<h4>Résumer une série : moyenne et médiane</h4>` +
      `
<p>Pour une série de valeurs \\( x_1, x_2, \\dots, x_k \\) d'effectifs respectifs \\( n_1, n_2, \\dots, n_k \\) (effectif total \\( N \\)), la <strong>moyenne</strong> (pondérée par les effectifs) est :</p>` +
      `
<p>\\[ \\bar{x} = \\dfrac{n_1 x_1 + n_2 x_2 + \\dots + n_k x_k}{N} = \\dfrac{1}{N}\\sum_i n_i x_i \\]</p>` +
      `
<p>La <strong>médiane</strong> \\( Me \\) est la valeur qui partage la série, rangée par ordre croissant, en deux groupes d'effectifs égaux (au moins 50 % des valeurs sont \\( \\le Me \\), au moins 50 % sont \\( \\ge Me \\)) :</p>` +
      `
<ul>
<li>si l'effectif total \\( N \\) est impair, \\( Me \\) est la valeur de rang \\( \\dfrac{N+1}{2} \\) ;</li>` +
      `
<li>si \\( N \\) est pair, \\( Me \\) est la moyenne des deux valeurs centrales, de rangs \\( \\dfrac{N}{2} \\) et \\( \\dfrac{N}{2}+1 \\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Notes 12 (coefficient 2), 15 (coefficient 3), 9 (coefficient 1). Moyenne pondérée : \\( \\bar{x} = \\dfrac{12\\times2 + 15\\times3 + 9\\times1}{2+3+1} = \\dfrac{78}{6} = 13 \\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> La moyenne pondérée n'est pas la moyenne simple des valeurs : il faut bien pondérer chaque valeur par son coefficient (ou son effectif), pas seulement additionner les valeurs et diviser par le nombre de valeurs distinctes.</div>` +
      `

<h4>Quartiles, écart interquartile et diagramme en boîte</h4>` +
      `
<p>On range la série par ordre croissant (effectif total \\( N \\)). Le <strong>premier quartile</strong> \\( Q_1 \\) est la plus petite valeur de la série dont le rang est supérieur ou égal à \\( \\dfrac{N}{4} \\) (on arrondit ce rang à l'entier supérieur si besoin). Le <strong>troisième quartile</strong> \\( Q_3 \\) est la plus petite valeur dont le rang est supérieur ou égal à \\( \\dfrac{3N}{4} \\).</p>` +
      `
<p>L'<strong>écart interquartile</strong> est \\( Q_3 - Q_1 \\) : il contient au moins la moitié « centrale » des valeurs de la série et est peu sensible aux valeurs extrêmes (contrairement à l'étendue).</p>` +
      `
<p>Le <strong>diagramme en boîte</strong> (ou « boîte à moustaches ») représente, sur un axe gradué : le minimum, \\( Q_1 \\), la médiane, \\( Q_3 \\), le maximum. La boîte s'étend de \\( Q_1 \\) à \\( Q_3 \\) (avec un trait pour la médiane à l'intérieur), et les « moustaches » relient la boîte au minimum et au maximum de la série.</p>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Série triée : 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 21, 22, 23, 24, 26, 29 (\\( N = 20 \\)). Rang de \\( Q_1 \\) : \\( \\frac{20}{4} = 5 \\), donc \\( Q_1 = 15 \\) (5ᵉ valeur). Rang de \\( Q_3 \\) : \\( \\frac{3\\times20}{4} = 15 \\), donc \\( Q_3 = 21 \\) (15ᵉ valeur). Écart interquartile : \\( 21 - 15 = 6 \\). Médiane : moyenne des 10ᵉ et 11ᵉ valeurs, soit \\( \\frac{18+18}{2} = 18 \\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Ne pas confondre écart interquartile (\\( Q_3 - Q_1 \\), robuste) et étendue (\\( \\text{max} - \\text{min} \\), très sensible aux valeurs extrêmes). Sur un diagramme en boîte, la largeur de la boîte donne l'écart interquartile, la longueur totale (moustache comprise) donne l'étendue.</div>` +
      `

<h4>Variance, écart-type et effet d'une transformation affine</h4>` +
      `
<p>La <strong>variance</strong> d'une série de valeurs \\( x_i \\) d'effectifs \\( n_i \\), de moyenne \\( \\bar{x} \\), est la moyenne des carrés des écarts à la moyenne :</p>` +
      `
<p>\\[ V = \\dfrac{1}{N}\\sum_i n_i (x_i - \\bar{x})^2 \\]</p>` +
      `
<p>L'<strong>écart-type</strong> est \\( \\sigma = \\sqrt{V} \\) : il s'exprime dans la même unité que les données (contrairement à la variance) et mesure la dispersion autour de la moyenne.</p>` +
      `
<p>Si on transforme chaque donnée par une fonction affine \\( y = a x + b \\) (\\( a, b \\) réels), alors :</p>` +
      `
<ul>
<li>la nouvelle moyenne vaut \\( \\bar{y} = a\\bar{x} + b \\) ;</li>` +
      `
<li>le nouvel écart-type vaut \\( \\sigma_y = |a|\\,\\sigma_x \\) (la translation \\( b \\) ne change pas la dispersion, seul le coefficient multiplicatif \\( a \\) — en valeur absolue — agit sur l'écart-type).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Série 2, 4, 4, 6 : moyenne \\( \\bar{x} = \\frac{2+4+4+6}{4} = 4 \\). Variance : \\( V = \\frac{(2-4)^2+(4-4)^2+(4-4)^2+(6-4)^2}{4} = \\frac{4+0+0+4}{4} = 2 \\). Écart-type : \\( \\sigma = \\sqrt{2} \\approx 1{,}41 \\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Une transformation \\( y = ax+b \\) change l'écart-type par le facteur \\( |a| \\), jamais par un ajout de \\( b \\) : l'écart-type d'une série où l'on a ajouté une constante à toutes les valeurs (\\( a=1 \\)) reste inchangé, seule la moyenne est translatée.</div>` +
      `

<h4>Comparer des séries statistiques</h4>` +
      `
<p>Pour comparer deux séries, on compare d'abord leur position (moyenne ou médiane) puis leur dispersion (écart-type ou écart interquartile) :</p>` +
      `
<ul>
<li>le couple <strong>moyenne / écart-type</strong> est adapté quand la série est plutôt régulière (peu de valeurs extrêmes) ;</li>` +
      `
<li>le couple <strong>médiane / écart interquartile</strong> est plus robuste : il est peu influencé par des valeurs extrêmes ou aberrantes.</li>` +
      `
<li>Une série avec un écart-type (ou un écart interquartile) plus petit est plus « homogène » (les valeurs sont plus resserrées autour de l'indicateur de position).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Deux classes ont la même moyenne de 12 à un devoir : classe A a un écart-type de 1, classe B un écart-type de 4. Les notes de la classe A sont beaucoup plus homogènes (resserrées autour de 12) que celles de la classe B, plus dispersées.</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Deux séries peuvent avoir la même moyenne (ou la même médiane) tout en étant très différentes en dispersion : comparer uniquement les indicateurs de position sans regarder la dispersion peut être trompeur.</div>` +
      `

<h4>Échantillonnage et intervalle de fluctuation asymptotique</h4>` +
      `
<p>Un <strong>échantillon</strong> de taille \\( n \\) est un sous-ensemble d'individus prélevé (au hasard) dans une population. La <strong>fluctuation d'échantillonnage</strong> désigne le fait que la fréquence observée d'un caractère varie d'un échantillon à l'autre, même prélevés dans la même population.</p>` +
      `
<p>Lorsqu'une proportion \\( p \\) est supposée connue dans la population, et sous les conditions \\( n \\ge 25 \\), \\( np \\ge 5 \\) et \\( n(1-p) \\ge 5 \\), l'<strong>intervalle de fluctuation asymptotique au seuil de 95 %</strong> de la fréquence observée sur un échantillon de taille \\( n \\) est :</p>` +
      `
<p>\\[ I = \\left[\\, p - 1{,}96\\sqrt{\\dfrac{p(1-p)}{n}}\\; ;\\; p + 1{,}96\\sqrt{\\dfrac{p(1-p)}{n}} \\,\\right] \\]</p>` +
      `
<p><strong>Règle de décision :</strong> si la fréquence \\( f \\) observée sur un échantillon appartient à \\( I \\), l'échantillon est jugé cohérent avec l'hypothèse « la proportion vaut \\( p \\) », au seuil de 95 % (donc avec un risque de 5 % de se tromper). Si \\( f \\notin I \\), on rejette cette hypothèse, avec un risque de 5 % de se tromper à tort.</p>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Avec \\( p = 0{,}5 \\) et \\( n = 400 \\) : \\( 1{,}96\\sqrt{\\frac{0{,}5\\times0{,}5}{400}} = 1{,}96\\times0{,}025 = 0{,}049 \\), donc \\( I = [0{,}451\\,;\\,0{,}549] \\). Sur 400 lancers d'une pièce supposée équilibrée, si on observe 190 « pile » (fréquence \\( 0{,}475 \\)), \\( 0{,}475 \\in I \\) : l'échantillon est cohérent avec l'hypothèse d'une pièce équilibrée.</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> L'intervalle de fluctuation ne prouve jamais qu'une hypothèse est vraie ou fausse avec certitude : il s'agit d'une règle de décision au seuil de 95 %, avec un risque de 5 % de conclure à tort. Ne pas oublier non plus de vérifier les conditions de validité (\\( n \\ge 25 \\), \\( np \\ge 5 \\), \\( n(1-p) \\ge 5 \\)) avant d'utiliser la formule.</div>`

});
