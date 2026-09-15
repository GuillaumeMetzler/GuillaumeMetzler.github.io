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
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="102.0" x2="360.0" y2="102.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,98.0 367.0,102.0 360.0,106.0" fill="var(--text-muted)"/><text x="370.0" y="106.0" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="197.0" y1="190.0" x2="197.0" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="193.0,14.0 197.0,7.0 201.0,14.0" fill="var(--text-muted)"/><text x="203.0" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="61.2" y1="99.0" x2="61.2" y2="105.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="129.1" y1="99.0" x2="129.1" y2="105.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="264.9" y1="99.0" x2="264.9" y2="105.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="332.8" y1="99.0" x2="332.8" y2="105.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="138.7" x2="200.0" y2="138.7" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="65.3" x2="200.0" y2="65.3" stroke="var(--text-muted)" stroke-width="1"/><text x="186.0" y="115.0" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,183.0 L 37.3,174.7 L 40.6,166.9 L 43.8,159.5 L 47.1,152.5 L 50.4,145.8 L 53.7,139.5 L 57.0,133.6 L 60.2,128.0 L 63.5,122.7 L 66.8,117.8 L 70.1,113.3 L 73.3,109.0 L 76.6,105.1 L 79.9,101.4 L 83.2,98.1 L 86.5,95.0 L 89.7,92.2 L 93.0,89.7 L 96.3,87.5 L 99.6,85.5 L 102.9,83.7 L 106.1,82.2 L 109.4,80.9 L 112.7,79.9 L 116.0,79.0 L 119.2,78.4 L 122.5,77.9 L 125.8,77.6 L 129.1,77.6" fill="none" stroke="var(--success)" stroke-width="2.6"/><path d="M 129.1,77.6 L 133.8,77.7 L 138.5,78.2 L 143.1,79.0 L 147.8,80.1 L 152.5,81.4 L 157.2,83.0 L 161.9,84.7 L 166.6,86.7 L 171.2,88.8 L 175.9,91.0 L 180.6,93.3 L 185.3,95.7 L 190.0,98.2 L 194.7,100.7 L 199.3,103.3 L 204.0,105.8 L 208.7,108.3 L 213.4,110.7 L 218.1,113.0 L 222.8,115.2 L 227.4,117.3 L 232.1,119.3 L 236.8,121.0 L 241.5,122.6 L 246.2,123.9 L 250.9,125.0 L 255.5,125.8 L 260.2,126.3 L 264.9,126.4" fill="none" stroke="var(--warning)" stroke-width="2.6"/><path d="M 264.9,126.4 L 268.2,126.4 L 271.5,126.1 L 274.8,125.6 L 278.0,125.0 L 281.3,124.1 L 284.6,123.1 L 287.9,121.8 L 291.1,120.3 L 294.4,118.5 L 297.7,116.5 L 301.0,114.3 L 304.3,111.8 L 307.5,109.0 L 310.8,105.9 L 314.1,102.6 L 317.4,98.9 L 320.7,95.0 L 323.9,90.7 L 327.2,86.2 L 330.5,81.3 L 333.8,76.0 L 337.0,70.4 L 340.3,64.5 L 343.6,58.2 L 346.9,51.5 L 350.2,44.5 L 353.4,37.1 L 356.7,29.3 L 360.0,21.0" fill="none" stroke="var(--success)" stroke-width="2.6"/><circle cx="129.1" cy="77.6" r="4.5" fill="var(--accent)"/><line x1="129.1" y1="77.6" x2="129.1" y2="102.0" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><circle cx="264.9" cy="126.4" r="4.5" fill="var(--accent)"/><line x1="264.9" y1="126.4" x2="264.9" y2="102.0" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><text x="95.1" y="69.6" font-size="10" fill="var(--accent)" font-weight="700">max local</text><text x="270.9" y="142.4" font-size="10" fill="var(--accent)" font-weight="700">min local</text><text x="51.0" y="135.0" font-size="10" fill="var(--success)" font-weight="700">croissante</text><text x="159.6" y="151.5" font-size="10" fill="var(--warning)" font-weight="700">décroissante</text><text x="288.7" y="45.2" font-size="10" fill="var(--success)" font-weight="700">croissante</text></svg><p class="exo-fiche-fig-caption">Lecture des variations sur la courbe de f(x) = x³/3 − x : croissante, puis décroissante entre les deux extremums locaux, puis croissante à nouveau.</p>` +
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
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="171.8" x2="360.0" y2="171.8" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,167.8 367.0,171.8 360.0,175.8" fill="var(--text-muted)"/><text x="370.0" y="175.8" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="48.7" y1="190.0" x2="48.7" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="44.7,14.0 48.7,7.0 52.7,14.0" fill="var(--text-muted)"/><text x="54.7" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="121.9" y1="168.8" x2="121.9" y2="174.8" stroke="var(--text-muted)" stroke-width="1"/><line x1="195.2" y1="168.8" x2="195.2" y2="174.8" stroke="var(--text-muted)" stroke-width="1"/><line x1="268.4" y1="168.8" x2="268.4" y2="174.8" stroke="var(--text-muted)" stroke-width="1"/><line x1="341.7" y1="168.8" x2="341.7" y2="174.8" stroke="var(--text-muted)" stroke-width="1"/><line x1="45.7" y1="141.4" x2="51.7" y2="141.4" stroke="var(--text-muted)" stroke-width="1"/><line x1="45.7" y1="111.1" x2="51.7" y2="111.1" stroke="var(--text-muted)" stroke-width="1"/><line x1="45.7" y1="80.8" x2="51.7" y2="80.8" stroke="var(--text-muted)" stroke-width="1"/><line x1="45.7" y1="50.4" x2="51.7" y2="50.4" stroke="var(--text-muted)" stroke-width="1"/><line x1="45.7" y1="20.1" x2="51.7" y2="20.1" stroke="var(--text-muted)" stroke-width="1"/><text x="37.7" y="184.8" font-size="10" fill="var(--text-muted)">0</text><line x1="48.7" y1="111.1" x2="360.0" y2="111.1" stroke="var(--warning)" stroke-width="1.2" stroke-dasharray="5,3"/><path d="M 48.7,141.4 L 53.9,137.7 L 59.1,134.7 L 64.3,132.4 L 69.5,130.4 L 74.7,128.8 L 79.9,127.5 L 85.2,126.3 L 90.4,125.3 L 95.6,124.4 L 100.8,123.6 L 106.0,122.9 L 111.2,122.3 L 116.4,121.7 L 121.7,121.2 L 126.9,120.8 L 132.1,120.4 L 137.3,120.0 L 142.5,119.6 L 147.7,119.3 L 153.0,119.0 L 158.2,118.7 L 163.4,118.4 L 168.6,118.2 L 173.8,118.0 L 179.0,117.8 L 184.2,117.6 L 189.5,117.4 L 194.7,117.2 L 199.9,117.0 L 205.1,116.9 L 210.3,116.7 L 215.5,116.6 L 220.7,116.4 L 226.0,116.3 L 231.2,116.2 L 236.4,116.1 L 241.6,115.9 L 246.8,115.8 L 252.0,115.7 L 257.3,115.6 L 262.5,115.5 L 267.7,115.5 L 272.9,115.4 L 278.1,115.3 L 283.3,115.2 L 288.5,115.1 L 293.8,115.0 L 299.0,115.0 L 304.2,114.9 L 309.4,114.8 L 314.6,114.8 L 319.8,114.7 L 325.0,114.7 L 330.3,114.6 L 335.5,114.5 L 340.7,114.5 L 345.9,114.4 L 351.1,114.4 L 356.3,114.3" fill="none" stroke="var(--primary)" stroke-width="2.4"/><text x="239.1" y="103.1" font-size="11" fill="var(--warning)" font-weight="700">asymptote y = 2</text><text x="54.1" y="127.5" font-size="10" fill="var(--primary)">f(x)=(2x+1)/(x+1)</text></svg><p class="exo-fiche-fig-caption">Exemple : pour f(x) = (2x+1)/(x+1), la courbe se rapproche indéfiniment de la droite d'équation y = 2 sans jamais l'atteindre : c'est une asymptote horizontale.</p>` +
      `</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Quand plusieurs conditions se cumulent (racine ET dénominateur, par exemple), il faut les vérifier toutes les deux et prendre l'intersection des ensembles obtenus : oublier l'une des deux conditions est l'erreur la plus fréquente.</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="164.9" x2="360.0" y2="164.9" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,160.9 367.0,164.9 360.0,168.9" fill="var(--text-muted)"/><text x="370.0" y="168.9" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="131.8" y1="190.0" x2="131.8" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="127.8,14.0 131.8,7.0 135.8,14.0" fill="var(--text-muted)"/><text x="137.8" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="66.6" y1="161.9" x2="66.6" y2="167.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="197.0" y1="161.9" x2="197.0" y2="167.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="262.2" y1="161.9" x2="262.2" y2="167.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="327.4" y1="161.9" x2="327.4" y2="167.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="128.8" y1="133.4" x2="134.8" y2="133.4" stroke="var(--text-muted)" stroke-width="1"/><line x1="128.8" y1="102.0" x2="134.8" y2="102.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="128.8" y1="70.6" x2="134.8" y2="70.6" stroke="var(--text-muted)" stroke-width="1"/><line x1="128.8" y1="39.1" x2="134.8" y2="39.1" stroke="var(--text-muted)" stroke-width="1"/><text x="120.8" y="177.9" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,180.6 L 39.5,177.9 L 45.0,175.3 L 50.5,172.6 L 55.9,170.0 L 61.4,167.3 L 66.9,164.7 L 72.4,162.1 L 77.9,159.4 L 83.4,156.8 L 88.9,154.1 L 94.3,151.5 L 99.8,148.8 L 105.3,146.2 L 110.8,143.6 L 116.3,140.9 L 121.8,138.3 L 127.3,135.6 L 132.7,133.0 L 138.2,130.3 L 143.7,127.7 L 149.2,125.0 L 154.7,122.4 L 160.2,119.8 L 165.7,117.1 L 171.1,114.5 L 176.6,111.8 L 182.1,109.2 L 187.6,106.5 L 193.1,103.9" fill="none" stroke="var(--primary)" stroke-width="2.4"/><path d="M 200.9,100.1 L 206.4,97.5 L 211.9,94.8 L 217.4,92.2 L 222.9,89.5 L 228.3,86.9 L 233.8,84.2 L 239.3,81.6 L 244.8,79.0 L 250.3,76.3 L 255.8,73.7 L 261.3,71.0 L 266.7,68.4 L 272.2,65.7 L 277.7,63.1 L 283.2,60.4 L 288.7,57.8 L 294.2,55.2 L 299.7,52.5 L 305.1,49.9 L 310.6,47.2 L 316.1,44.6 L 321.6,41.9 L 327.1,39.3 L 332.6,36.7 L 338.1,34.0 L 343.5,31.4 L 349.0,28.7 L 354.5,26.1 L 360.0,23.4" fill="none" stroke="var(--primary)" stroke-width="2.4"/><circle cx="197.0" cy="102.0" r="4.5" fill="var(--surface)" stroke="var(--accent)" stroke-width="2.4"/><text x="205.0" y="94.0" font-size="11" fill="var(--accent)" font-weight="700">trou en x=1 (pas d&#8217;asymptote)</text><text x="40.5" y="26.6" font-size="10" fill="var(--text-muted)">g(x)=(x&#178;-1)/(x-1) = x+1 apres simplification</text></svg><p class="exo-fiche-fig-caption">Contre-exemple (piège « 0/0 ») : g(x) = (x²-1)/(x-1) se simplifie en x+1 pour x≠1. Il n'y a PAS d'asymptote verticale en x=1, juste un point manquant (trou) sur la droite y=x+1.</p>` +
      `</div>` +
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
