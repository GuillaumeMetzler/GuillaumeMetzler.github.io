/* ================================================================
   Fiche de révision — Étude de fonctions
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "etude-fonctions",
  label: "Étude de fonctions",
  fiche:
      `<h4>Ensemble de définition</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="107.2" x2="360.0" y2="107.2" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,103.2 367.0,107.2 360.0,111.2" fill="var(--text-muted)"/><text x="370.0" y="111.2" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="197.0" y1="190.0" x2="197.0" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="193.0,14.0 197.0,7.0 201.0,14.0" fill="var(--text-muted)"/><text x="203.0" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="61.2" y1="104.2" x2="61.2" y2="110.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="129.1" y1="104.2" x2="129.1" y2="110.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="264.9" y1="104.2" x2="264.9" y2="110.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="332.8" y1="104.2" x2="332.8" y2="110.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="158.9" x2="200.0" y2="158.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="55.4" x2="200.0" y2="55.4" stroke="var(--text-muted)" stroke-width="1"/><text x="186.0" y="120.2" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,221.5 L 37.3,209.9 L 40.6,198.8 L 43.8,188.3 L 47.1,178.4 L 50.4,169.0 L 53.7,160.1 L 57.0,151.7 L 60.2,143.8 L 63.5,136.5 L 66.8,129.5 L 70.1,123.1 L 73.3,117.1 L 76.6,111.5 L 79.9,106.4 L 83.2,101.6 L 86.5,97.3 L 89.7,93.4 L 93.0,89.8 L 96.3,86.7 L 99.6,83.9 L 102.9,81.4 L 106.1,79.2 L 109.4,77.4 L 112.7,75.9 L 116.0,74.7 L 119.2,73.8 L 122.5,73.2 L 125.8,72.8 L 129.1,72.7" fill="none" stroke="var(--success)" stroke-width="2.6"/><path d="M 129.1,72.7 L 133.8,72.9 L 138.5,73.6 L 143.1,74.7 L 147.8,76.2 L 152.5,78.1 L 157.2,80.3 L 161.9,82.8 L 166.6,85.5 L 171.2,88.5 L 175.9,91.6 L 180.6,94.9 L 185.3,98.3 L 190.0,101.8 L 194.7,105.4 L 199.3,109.0 L 204.0,112.5 L 208.7,116.0 L 213.4,119.4 L 218.1,122.7 L 222.8,125.9 L 227.4,128.8 L 232.1,131.6 L 236.8,134.0 L 241.5,136.2 L 246.2,138.1 L 250.9,139.6 L 255.5,140.7 L 260.2,141.4 L 264.9,141.7" fill="none" stroke="var(--warning)" stroke-width="2.6"/><path d="M 264.9,141.7 L 268.2,141.6 L 271.5,141.2 L 274.8,140.5 L 278.0,139.6 L 281.3,138.4 L 284.6,136.9 L 287.9,135.1 L 291.1,133.0 L 294.4,130.5 L 297.7,127.7 L 301.0,124.5 L 304.3,121.0 L 307.5,117.0 L 310.8,112.7 L 314.1,108.0 L 317.4,102.9 L 320.7,97.3 L 323.9,91.3 L 327.2,84.8 L 330.5,77.9 L 333.8,70.5 L 337.0,62.6 L 340.3,54.2 L 343.6,45.4 L 346.9,36.0 L 350.2,26.0 L 353.4,15.5 L 356.7,4.5 L 360.0,-7.1" fill="none" stroke="var(--success)" stroke-width="2.6"/><circle cx="129.1" cy="72.7" r="4.5" fill="var(--accent)"/><line x1="129.1" y1="72.7" x2="129.1" y2="107.2" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><circle cx="264.9" cy="141.7" r="4.5" fill="var(--accent)"/><line x1="264.9" y1="141.7" x2="264.9" y2="107.2" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><text x="95.1" y="64.7" font-size="10" fill="var(--accent)" font-weight="700">max local</text><text x="270.9" y="157.7" font-size="10" fill="var(--accent)" font-weight="700">min local</text><text x="51.0" y="153.8" font-size="10" fill="var(--success)" font-weight="700">croissante</text><text x="159.6" y="177.1" font-size="10" fill="var(--warning)" font-weight="700">décroissante</text><text x="288.7" y="26.9" font-size="10" fill="var(--success)" font-weight="700">croissante</text></svg><p class="exo-fiche-fig-caption">Lecture des variations sur la courbe de f(x) = x³/3 − x : croissante, puis décroissante entre les deux extremums locaux, puis croissante à nouveau.</p>` +
      `</div>` +
      `
<p>Avant toute étude, il faut déterminer le plus grand ensemble \\(D_f\\) sur lequel l'expression de \\(f(x)\\) a un sens.</p>` +
      `
<ul>
<li>Fonction polynôme : définie sur \\(\\mathbb{R}\\).</li>` +
      `
<li>Fonction rationnelle (quotient de polynômes) : on exclut les valeurs qui annulent le dénominateur.</li>` +
      `
<li>Fonction avec une racine carrée \\(\\sqrt{u(x)}\\) : il faut \\(u(x) \\geqslant 0\\).</li>` +
      `
<li>Fonction avec une exponentielle \\(e^{u(x)}\\) : définie partout où \\(u(x)\\) est définie (l'exponentielle ne rajoute jamais de condition).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Soit \\(f(x) = \\dfrac{\\sqrt{3-2x}}{x+1}\\). Il faut \\(3-2x \\geqslant 0\\), soit \\(x \\leqslant \\dfrac{3}{2}\\), et \\(x+1 \\neq 0\\), soit \\(x \\neq -1\\). Donc \\(D_f = \\;]-\\infty ; -1[\\, \\cup \\,]-1 ; \\dfrac{3}{2}]\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Quand plusieurs conditions se cumulent (racine ET dénominateur, par exemple), il faut les vérifier toutes les deux et prendre l'intersection des ensembles obtenus : oublier l'une des deux conditions est l'erreur la plus fréquente.</div>` +
      `

<h4>Limites aux bornes et asymptotes</h4>` +
      `
<p>On étudie la limite de \\(f\\) à chaque borne (ouverte) de \\(D_f\\) : en \\(+\\infty\\), en \\(-\\infty\\), et en tout réel exclu de \\(D_f\\).</p>` +
      `
<ul>
<li>Asymptote verticale d'équation \\(x = a\\) : si \\(\\displaystyle\\lim_{x \\to a} f(x) = +\\infty\\) ou \\(-\\infty\\) (à gauche et/ou à droite de \\(a\\)).</li>` +
      `
<li>Asymptote horizontale d'équation \\(y = b\\) : si \\(\\displaystyle\\lim_{x \\to +\\infty} f(x) = b\\) ou \\(\\displaystyle\\lim_{x \\to -\\infty} f(x) = b\\) (les deux limites peuvent différer, ou n'exister que d'un seul côté).</li>` +
      `
<li>Si la limite en \\(+\\infty\\) (ou en \\(-\\infty\\)) est infinie, il n'y a pas d'asymptote horizontale de ce côté (on ne s'intéresse pas ici aux éventuelles asymptotes obliques, hors programme de cette fiche).</li>` +
      `
<li>Pour une fonction rationnelle, la limite en \\(\\pm\\infty\\) est celle du quotient des termes de plus haut degré du numérateur et du dénominateur.</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(f(x) = \\dfrac{2x+1}{x-3}\\), \\(D_f = \\mathbb{R}\\setminus\\{3\\}\\). En \\(x=3\\), le numérateur tend vers \\(7 \\neq 0\\) et le dénominateur vers \\(0\\) : \\(f(x) \\to \\pm\\infty\\), donc la droite d'équation \\(x=3\\) est asymptote verticale. En \\(\\pm\\infty\\), \\(f(x)\\) se comporte comme \\(\\dfrac{2x}{x} = 2\\), donc \\(\\displaystyle\\lim_{x\\to\\pm\\infty} f(x) = 2\\) : la droite d'équation \\(y=2\\) est asymptote horizontale, des deux côtés.</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Si le numérateur ET le dénominateur s'annulent au même point (forme \\(\\frac{0}{0}\\)), il n'y a pas forcément d'asymptote verticale : il faut d'abord factoriser et simplifier. Par exemple pour \\(g(x)=\\dfrac{x^2-1}{x-1}\\), on a \\(g(x) = x+1\\) pour \\(x\\neq 1\\) : la limite en \\(1\\) vaut \\(2\\) (limite finie), il n'y a pas d'asymptote verticale en \\(x=1\\).</div>` +
      `

<h4>Dérivée et signe de la dérivée</h4>` +
      `
<p>On calcule \\(f'(x)\\), puis on étudie son signe sur chaque intervalle de \\(D_f\\) pour en déduire les variations de \\(f\\).</p>` +
      `
<ul>
<li>Si \\(f'(x) > 0\\) sur un intervalle \\(I\\), alors \\(f\\) est strictement croissante sur \\(I\\).</li>` +
      `
<li>Si \\(f'(x) &lt; 0\\) sur un intervalle \\(I\\), alors \\(f\\) est strictement décroissante sur \\(I\\).</li>` +
      `
<li>Quotient : \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}\\) ; comme \\(v^2 > 0\\), seul le signe du numérateur \\(u'v-uv'\\) compte.</li>` +
      `
<li>Racine : \\(\\left(\\sqrt{u}\\right)' = \\dfrac{u'}{2\\sqrt{u}}\\) : le signe de la dérivée est celui de \\(u'\\), car \\(2\\sqrt{u} > 0\\).</li>` +
      `
<li>Exponentielle : \\(\\left(e^{u}\\right)' = u' \\, e^{u}\\) : le signe de la dérivée est celui de \\(u'\\), car \\(e^{u} > 0\\) toujours.</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(f(x) = x^3 - 3x\\) sur \\(\\mathbb{R}\\) : \\(f'(x) = 3x^2 - 3 = 3(x-1)(x+1)\\). \\(f'(x) > 0\\) pour \\(x \\in\\, ]-\\infty;-1[ \\,\\cup\\, ]1;+\\infty[\\), \\(f'(x) &lt; 0\\) pour \\(x \\in \\,]-1;1[\\), \\(f'(x)=0\\) en \\(x=-1\\) et \\(x=1\\).</div>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(f(x) = x\\,e^{-x}\\) sur \\(\\mathbb{R}\\) : \\(f'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = (1-x)e^{-x}\\). Comme \\(e^{-x} > 0\\) toujours, le signe de \\(f'\\) est celui de \\((1-x)\\) : \\(f'(x) > 0\\) pour \\(x &lt; 1\\), \\(f'(x) &lt; 0\\) pour \\(x > 1\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Dans la dérivée d'un quotient, ne pas oublier le signe \\(-\\) devant \\(uv'\\) : \\(\\left(\\dfrac{u}{v}\\right)' \\neq \\dfrac{u'}{v'}\\) et \\(\\left(\\dfrac{u}{v}\\right)' \\neq \\dfrac{u'v+uv'}{v^2}\\) (c'est la formule du produit qu'il ne faut pas confondre).</div>` +
      `

<h4>Tableau de variations et extremums locaux</h4>` +
      `
<p>Le tableau de variations résume, avec des flèches, le sens de variation de \\(f\\) sur chaque intervalle, avec les valeurs de \\(f\\) aux bornes et aux points où \\(f'\\) s'annule.</p>` +
      `
<ul>
<li>Un extremum local apparaît en \\(x_0\\) lorsque \\(f'(x_0)=0\\) ET que \\(f'\\) change de signe en \\(x_0\\) : maximum local si \\(f'\\) passe de \\(+\\) à \\(-\\) (courbe ↗ puis ↘), minimum local si \\(f'\\) passe de \\(-\\) à \\(+\\) (courbe ↘ puis ↗).</li>` +
      `
<li>Si \\(f'(x_0)=0\\) mais que \\(f'\\) garde le même signe autour de \\(x_0\\), il n'y a pas d'extremum : la tangente est horizontale un instant mais \\(f\\) continue de varier dans le même sens.</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Pour \\(f(x) = x^3-3x\\) : \\(f(-1) = -1+3 = 2\\) et \\(f(1) = 1 - 3 = -2\\). \\(f'\\) passe de \\(+\\) à \\(-\\) en \\(x=-1\\) : maximum local \\(f(-1)=2\\). \\(f'\\) passe de \\(-\\) à \\(+\\) en \\(x=1\\) : minimum local \\(f(1)=-2\\). Variations : \\(f\\) ↗ sur \\(]-\\infty;-1]\\) (de \\(-\\infty\\) à \\(2\\)), ↘ sur \\([-1;1]\\) (de \\(2\\) à \\(-2\\)), ↗ sur \\([1;+\\infty[\\) (de \\(-2\\) à \\(+\\infty\\)).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> \\(f'(x_0)=0\\) n'entraîne pas automatiquement un extremum local : pour \\(f(x)=x^3\\), \\(f'(x)=3x^2 \\geqslant 0\\) s'annule en \\(0\\) mais reste positif de part et d'autre (ne change pas de signe), donc \\(f\\) est strictement croissante sur \\(\\mathbb{R}\\) et \\(0\\) n'est pas un extremum.</div>` +
      `

<h4>Allure de la courbe et lecture d'un tableau de variations</h4>` +
      `
<p>Le tableau de variations permet de tracer l'allure de la courbe (montées/descentes, extremums, asymptotes en pointillés), mais aussi, à l'inverse, de répondre à des questions à partir d'un tableau donné, sans connaître l'expression de \\(f\\).</p>` +
      `
<ul>
<li>Si \\(f\\) est continue et strictement monotone sur un intervalle \\([\\alpha;\\beta]\\), alors pour tout réel \\(k\\) compris entre \\(f(\\alpha)\\) et \\(f(\\beta)\\), l'équation \\(f(x)=k\\) admet une unique solution dans \\([\\alpha;\\beta]\\) (théorème des valeurs intermédiaires appliqué au cas monotone).</li>` +
      `
<li>Pour compter le nombre de solutions de \\(f(x)=k\\) sur un ensemble découpé en plusieurs intervalles de monotonie, on raisonne intervalle par intervalle, puis on additionne.</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Un tableau de variations donne : \\(f\\) décroissante de \\(5\\) à \\(-3\\) sur \\([0;4]\\), puis croissante de \\(-3\\) à \\(2\\) sur \\([4;7]\\), \\(f\\) continue. Combien de solutions a l'équation \\(f(x)=0\\) sur \\([0;7]\\) ? Sur \\([0;4]\\), \\(0\\) est compris entre \\(-3\\) et \\(5\\) : une solution. Sur \\([4;7]\\), \\(0\\) est compris entre \\(-3\\) et \\(2\\) : une solution. Au total, \\(2\\) solutions.</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Si la valeur \\(k\\) est atteinte exactement à la jonction entre deux intervalles (ici en \\(x=4\\)), il ne faut la compter qu'une seule fois, pas deux.</div>`

});
