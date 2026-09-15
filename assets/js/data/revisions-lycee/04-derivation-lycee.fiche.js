/* ================================================================
   Fiche de révision — Dérivation
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "derivation-lycee",
  label: "Dérivation",
  fiche:
      `<h4>Nombre dérivé et tangente</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="152.3" x2="360.0" y2="152.3" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,148.3 367.0,152.3 360.0,156.3" fill="var(--text-muted)"/><text x="370.0" y="156.3" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="197.0" y1="190.0" x2="197.0" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="193.0,14.0 197.0,7.0 201.0,14.0" fill="var(--text-muted)"/><text x="203.0" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="48.8" y1="149.3" x2="48.8" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="98.2" y1="149.3" x2="98.2" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="147.6" y1="149.3" x2="147.6" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="246.4" y1="149.3" x2="246.4" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="295.8" y1="149.3" x2="295.8" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="345.2" y1="149.3" x2="345.2" y2="155.3" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="177.4" x2="200.0" y2="177.4" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="127.1" x2="200.0" y2="127.1" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="102.0" x2="200.0" y2="102.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="76.9" x2="200.0" y2="76.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="51.7" x2="200.0" y2="51.7" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="26.6" x2="200.0" y2="26.6" stroke="var(--text-muted)" stroke-width="1"/><text x="186.0" y="165.3" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,129.4 L 38.7,120.4 L 43.4,112.0 L 48.2,104.3 L 52.9,97.2 L 57.6,90.6 L 62.3,84.7 L 67.1,79.4 L 71.8,74.5 L 76.5,70.3 L 81.2,66.5 L 86.0,63.2 L 90.7,60.3 L 95.4,58.0 L 100.1,56.0 L 104.9,54.4 L 109.6,53.3 L 114.3,52.5 L 119.0,52.0 L 123.8,51.9 L 128.5,52.0 L 133.2,52.5 L 137.9,53.2 L 142.7,54.2 L 147.4,55.4 L 152.1,56.8 L 156.8,58.4 L 161.6,60.2 L 166.3,62.1 L 171.0,64.2 L 175.7,66.3 L 180.5,68.6 L 185.2,70.9 L 189.9,73.3 L 194.6,75.7 L 199.4,78.1 L 204.1,80.5 L 208.8,82.8 L 213.5,85.1 L 218.3,87.4 L 223.0,89.5 L 227.7,91.6 L 232.4,93.5 L 237.2,95.3 L 241.9,96.9 L 246.6,98.3 L 251.3,99.5 L 256.1,100.5 L 260.8,101.2 L 265.5,101.7 L 270.2,101.8 L 275.0,101.7 L 279.7,101.3 L 284.4,100.5 L 289.1,99.3 L 293.9,97.7 L 298.6,95.8 L 303.3,93.4 L 308.0,90.5 L 312.8,87.2 L 317.5,83.5 L 322.2,79.2 L 326.9,74.4 L 331.7,69.0 L 336.4,63.1 L 341.1,56.6 L 345.8,49.5 L 350.6,41.7 L 355.3,33.3 L 360.0,24.3" fill="none" stroke="var(--primary)" stroke-width="2.4"/><path d="M 142.7,69.2 L 350.1,127.3" fill="none" stroke="var(--warning)" stroke-width="2" stroke-dasharray="6,3"/><path d="M 263.7,103.1 L 327.9,103.1 L 327.9,116.2" fill="none" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><text x="289.8" y="118.1" font-size="10" fill="var(--text-muted)">1</text><text x="332.9" y="113.6" font-size="10" fill="var(--text-muted)">f&#8217;(a)</text><circle cx="246.4" cy="98.2" r="4.5" fill="var(--accent)"/><text x="188.4" y="86.2" font-size="11" fill="var(--accent)" font-weight="700">A(a ; f(a))</text></svg><p class="exo-fiche-fig-caption">La tangente en A a pour coefficient directeur le nombre dérivé f'(a) : c'est la pente de la meilleure approximation affine de la courbe au voisinage de A.</p>` +
      `</div>` +
      `
<p>Pour une fonction \\(f\\) définie autour d'un point \\(a\\), le <strong>taux d'accroissement</strong> entre \\(a\\) et \\(a+h\\) (\\(h \\neq 0\\)) est \\(\\dfrac{f(a+h)-f(a)}{h}\\). Intuitivement, quand \\(h\\) devient de plus en plus petit, ce taux se rapproche d'un nombre : c'est le <strong>nombre dérivé</strong> de \\(f\\) en \\(a\\), noté \\(f'(a)\\), à condition qu'il existe.</p>` +
      `
<p>Interprétation graphique : \\(f'(a)\\) est le coefficient directeur de la <strong>tangente</strong> à la courbe de \\(f\\) au point d'abscisse \\(a\\).</p>` +
      `
<ul>
<li>Équation de la tangente au point d'abscisse \\(a\\) : \\(y = f'(a)(x-a) + f(a)\\).</li>` +
      `
<li>Si \\(f'(a)=0\\), la tangente en \\(a\\) est horizontale.</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Soit \\(f(x) = x^2 - 3x + 1\\), donc \\(f'(x) = 2x - 3\\). En \\(a = 2\\) : \\(f(2) = 4 - 6 + 1 = -1\\) et \\(f'(2) = 4 - 3 = 1\\). L'équation de la tangente en \\(2\\) est \\(y = 1 \\times (x-2) + (-1) = x - 3\\).</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="166.2" x2="360.0" y2="166.2" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,162.2 367.0,166.2 360.0,170.2" fill="var(--text-muted)"/><text x="370.0" y="170.2" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="71.6" y1="190.0" x2="71.6" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="67.6,14.0 71.6,7.0 75.6,14.0" fill="var(--text-muted)"/><text x="77.6" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="134.3" y1="163.2" x2="134.3" y2="169.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="197.0" y1="163.2" x2="197.0" y2="169.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="259.7" y1="163.2" x2="259.7" y2="169.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="322.4" y1="163.2" x2="322.4" y2="169.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="68.6" y1="118.6" x2="74.6" y2="118.6" stroke="var(--text-muted)" stroke-width="1"/><line x1="68.6" y1="71.1" x2="74.6" y2="71.1" stroke="var(--text-muted)" stroke-width="1"/><line x1="68.6" y1="23.5" x2="74.6" y2="23.5" stroke="var(--text-muted)" stroke-width="1"/><text x="60.6" y="179.2" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,158.0 L 39.5,151.6 L 45.1,145.4 L 50.6,139.4 L 56.1,133.6 L 61.6,128.1 L 67.2,122.8 L 72.7,117.7 L 78.2,112.8 L 83.7,108.2 L 89.3,103.7 L 94.8,99.5 L 100.3,95.5 L 105.8,91.7 L 111.4,88.2 L 116.9,84.9 L 122.4,81.8 L 127.9,78.9 L 133.5,76.2 L 139.0,73.8 L 144.5,71.6 L 150.0,69.6 L 155.6,67.8 L 161.1,66.3 L 166.6,64.9 L 172.1,63.8 L 177.7,62.9 L 183.2,62.3 L 188.7,61.8 L 194.2,61.6 L 199.8,61.6 L 205.3,61.8 L 210.8,62.3 L 216.3,62.9 L 221.9,63.8 L 227.4,64.9 L 232.9,66.3 L 238.4,67.8 L 244.0,69.6 L 249.5,71.6 L 255.0,73.8 L 260.5,76.2 L 266.1,78.9 L 271.6,81.8 L 277.1,84.9 L 282.6,88.2 L 288.2,91.7 L 293.7,95.5 L 299.2,99.5 L 304.7,103.7 L 310.3,108.2 L 315.8,112.8 L 321.3,117.7 L 326.8,122.8 L 332.4,128.1 L 337.9,133.6 L 343.4,139.4 L 348.9,145.4 L 354.5,151.6 L 360.0,158.0" fill="none" stroke="var(--primary)" stroke-width="2.4"/><line x1="121.8" y1="61.6" x2="272.2" y2="61.6" stroke="var(--warning)" stroke-width="2" stroke-dasharray="6,3"/><circle cx="197.0" cy="61.6" r="4.5" fill="var(--accent)"/><text x="167.0" y="49.6" font-size="11" fill="var(--accent)" font-weight="700">maximum local</text><text x="207.0" y="77.6" font-size="10" fill="var(--warning)">tangente horizontale : f&#8217;(2)=0</text></svg><p class="exo-fiche-fig-caption">Exemple : en un maximum ou un minimum local, la tangente est horizontale — le nombre dérivé y est nul.</p>` +
      `</div>` +
      `

<h4>Dérivées des fonctions usuelles</h4>` +
      `
<ul>
<li>\\(f(x) = k\\) (constante) : \\(f'(x) = 0\\)</li>` +
      `
<li>\\(f(x) = ax + b\\) (fonction affine) : \\(f'(x) = a\\) (en particulier \\(f(x)=x \\Rightarrow f'(x)=1\\))</li>` +
      `
<li>\\(f(x) = x^n\\) (\\(n\\) entier, \\(n \\geq 1\\)) : \\(f'(x) = n x^{n-1}\\)</li>` +
      `
<li>\\(f(x) = \\dfrac{1}{x}\\) (sur \\(]-\\infty;0[\\) ou \\(]0;+\\infty[\\)) : \\(f'(x) = -\\dfrac{1}{x^2}\\)</li>` +
      `
<li>\\(f(x) = \\sqrt{x}\\) (sur \\(]0;+\\infty[\\)) : \\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\)</li>` +
      `
<li>\\(f(x) = e^x\\) : \\(f'(x) = e^x\\)</li>` +
      `
</ul>` +
      `

<h4>Opérations sur les dérivées</h4>` +
      `
<ul>
<li>Somme : \\((u+v)' = u' + v'\\) ; produit par une constante : \\((ku)' = k u'\\)</li>` +
      `
<li>Produit : \\((uv)' = u'v + uv'\\)</li>` +
      `
<li>Quotient (là où \\(v \\neq 0\\)) : \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}\\)</li>` +
      `
<li>Composée simple \\(x \\mapsto u(ax+b)\\) : dérivée \\(= a \\times u'(ax+b)\\) — ne pas oublier de multiplier par \\(a\\), la dérivée de l'intérieur.</li>` +
      `
<li>Composée \\(x \\mapsto e^{u(x)}\\) : dérivée \\(= u'(x)\\, e^{u(x)}\\).</li>` +
      `
</ul>` +
      `
<div class="exo-fiche-exemple"><strong>Exemple.</strong> Soit \\(f(x) = \\dfrac{2x+1}{x-3}\\) sur \\(]3;+\\infty[\\). Avec \\(u = 2x+1\\), \\(u'=2\\) et \\(v = x-3\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{2(x-3) - (2x+1)\\times 1}{(x-3)^2} = \\dfrac{2x-6-2x-1}{(x-3)^2} = \\dfrac{-7}{(x-3)^2}\\).</div>` +
      `

<h4>Signe de la dérivée, variations et extremums</h4>` +
      `
<ul>
<li>Si \\(f' > 0\\) sur un intervalle, \\(f\\) y est strictement croissante.</li>` +
      `
<li>Si \\(f' &lt; 0\\) sur un intervalle, \\(f\\) y est strictement décroissante.</li>` +
      `
<li>Si \\(f' = 0\\) sur un intervalle, \\(f\\) y est constante.</li>` +
      `
<li>\\(f\\) admet un extremum local en \\(a\\) si \\(f'(a) = 0\\) <strong>et</strong> si \\(f'\\) change de signe en \\(a\\) (croissante puis décroissante, ou l'inverse).</li>` +
      `
</ul>` +
      `

<div class="exo-fiche-piege"><strong>Piège classique.</strong> Dans la formule du quotient, l'ordre compte : le numérateur est \\(u'v - uv'\\), pas \\(uv' - u'v\\). Une inversion change le signe de tout le résultat.</div>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="162.2" x2="360.0" y2="162.2" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,158.2 367.0,162.2 360.0,166.2" fill="var(--text-muted)"/><text x="370.0" y="166.2" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="197.0" y1="190.0" x2="197.0" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="193.0,14.0 197.0,7.0 201.0,14.0" fill="var(--text-muted)"/><text x="203.0" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="44.2" y1="159.2" x2="44.2" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="95.1" y1="159.2" x2="95.1" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="146.1" y1="159.2" x2="146.1" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="247.9" y1="159.2" x2="247.9" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="298.9" y1="159.2" x2="298.9" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="349.8" y1="159.2" x2="349.8" y2="165.2" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="115.9" x2="200.0" y2="115.9" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="69.6" x2="200.0" y2="69.6" stroke="var(--text-muted)" stroke-width="1"/><line x1="194.0" y1="23.3" x2="200.0" y2="23.3" stroke="var(--text-muted)" stroke-width="1"/><text x="186.0" y="175.2" font-size="10" fill="var(--text-muted)">0</text><path d="M 34.0,14.0 L 39.5,19.0 L 45.1,24.0 L 50.6,29.1 L 56.1,34.1 L 61.6,39.1 L 67.2,44.1 L 72.7,49.2 L 78.2,54.2 L 83.7,59.2 L 89.3,64.2 L 94.8,69.3 L 100.3,74.3 L 105.8,79.3 L 111.4,84.3 L 116.9,89.4 L 122.4,94.4 L 127.9,99.4 L 133.5,104.4 L 139.0,109.5 L 144.5,114.5 L 150.0,119.5 L 155.6,124.5 L 161.1,129.6 L 166.6,134.6 L 172.1,139.6 L 177.7,144.6 L 183.2,149.7 L 188.7,154.7 L 194.2,159.7 L 199.8,159.7 L 205.3,154.7 L 210.8,149.7 L 216.3,144.6 L 221.9,139.6 L 227.4,134.6 L 232.9,129.6 L 238.4,124.5 L 244.0,119.5 L 249.5,114.5 L 255.0,109.5 L 260.5,104.4 L 266.1,99.4 L 271.6,94.4 L 277.1,89.4 L 282.6,84.3 L 288.2,79.3 L 293.7,74.3 L 299.2,69.3 L 304.7,64.2 L 310.3,59.2 L 315.8,54.2 L 321.3,49.2 L 326.8,44.1 L 332.4,39.1 L 337.9,34.1 L 343.4,29.1 L 348.9,24.0 L 354.5,19.0 L 360.0,14.0" fill="none" stroke="var(--primary)" stroke-width="2.4"/><line x1="115.5" y1="88.1" x2="186.8" y2="152.9" stroke="var(--warning)" stroke-width="2" stroke-dasharray="5,3"/><line x1="207.2" y1="152.9" x2="278.5" y2="88.1" stroke="var(--success)" stroke-width="2" stroke-dasharray="5,3"/><circle cx="197.0" cy="162.2" r="5" fill="var(--accent)"/><text x="49.3" y="67.3" font-size="10" fill="var(--warning)" font-weight="700">pente -1</text><text x="283.6" y="67.3" font-size="10" fill="var(--success)" font-weight="700">pente +1</text><text x="118.0" y="18.6" font-size="10" fill="var(--accent)" font-style="italic" text-anchor="middle">point anguleux en 0 :</text><text x="118.0" y="32.5" font-size="10" fill="var(--accent)" font-style="italic" text-anchor="middle">pas de tangente unique</text></svg><p class="exo-fiche-fig-caption">Contre-exemple : f(x) = |x| est continue en 0, mais n'est PAS dérivable en 0 — les demi-tangentes à gauche (pente -1) et à droite (pente +1) diffèrent : c'est un point anguleux.</p>` +
      `</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Pour dériver \\((3x+1)^2\\), écrire seulement \\(2(3x+1)\\) est faux : il faut aussi multiplier par la dérivée de l'intérieur \\(3x+1\\), qui vaut \\(3\\). La bonne dérivée est \\(2 \\times 3 \\times (3x+1) = 6(3x+1)\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> \\(f'(a) = 0\\) ne suffit pas pour conclure qu'il y a un extremum local en \\(a\\) : il faut que \\(f'\\) change réellement de signe. Par exemple pour \\(f(x)=x^3\\), \\(f'(0)=0\\) mais \\(f'(x)=3x^2 \\geq 0\\) partout, donc pas de changement de signe et pas d'extremum en \\(0\\).</div>` +
      `
<div class="exo-fiche-piege"><strong>Piège classique.</strong> Dans l'équation de la tangente \\(y = f'(a)(x-a) + f(a)\\), ne pas confondre \\(f(a)\\) (l'ordonnée du point de la courbe) et \\(f'(a)\\) (le coefficient directeur de la tangente) : les intervertir donne une droite qui ne correspond à rien.</div>`

});
