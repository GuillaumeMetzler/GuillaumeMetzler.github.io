/* ================================================================
   Fiche de révision — Primitives & intégration
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "integration-lycee",
  label: "Primitives & intégration",
  fiche:
      `<h4>Notion de primitive</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="34.0" y1="174.0" x2="360.0" y2="174.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,170.0 367.0,174.0 360.0,178.0" fill="var(--text-muted)"/><text x="370.0" y="178.0" font-size="11" fill="var(--text-muted)" font-style="italic">x</text><line x1="60.1" y1="190.0" x2="60.1" y2="14.0" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="56.1,14.0 60.1,7.0 64.1,14.0" fill="var(--text-muted)"/><text x="66.1" y="12.0" font-size="11" fill="var(--text-muted)" font-style="italic">y</text><line x1="125.3" y1="171.0" x2="125.3" y2="177.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="190.5" y1="171.0" x2="190.5" y2="177.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="255.7" y1="171.0" x2="255.7" y2="177.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="320.9" y1="171.0" x2="320.9" y2="177.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="57.1" y1="134.0" x2="63.1" y2="134.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="57.1" y1="94.0" x2="63.1" y2="94.0" stroke="var(--text-muted)" stroke-width="1"/><line x1="57.1" y1="54.0" x2="63.1" y2="54.0" stroke="var(--text-muted)" stroke-width="1"/><text x="49.1" y="187.0" font-size="10" fill="var(--text-muted)">0</text><polygon points="125.3,174.0 125.3,124.0 129.8,122.6 134.3,121.1 138.8,119.4 143.3,117.7 147.8,115.9 152.3,114.0 156.8,112.0 161.3,109.9 165.7,107.7 170.2,105.5 174.7,103.1 179.2,100.6 183.7,98.0 188.2,95.4 192.7,92.6 197.2,89.8 201.7,86.8 206.2,83.8 210.7,80.6 215.2,77.4 219.7,74.1 224.2,70.6 228.7,67.1 233.2,63.5 237.7,59.8 242.2,56.0 246.7,52.1 251.2,48.1 255.7,44.0 255.7,174.0" fill="var(--primary)" fill-opacity="0.25" stroke="none"/><path d="M 60.1,134.0 L 65.8,133.9 L 71.5,133.7 L 77.2,133.3 L 83.0,132.8 L 88.7,132.1 L 94.4,131.2 L 100.1,130.2 L 105.9,129.1 L 111.6,127.8 L 117.3,126.3 L 123.0,124.7 L 128.7,122.9 L 134.5,121.0 L 140.2,118.9 L 145.9,116.7 L 151.6,114.3 L 157.3,111.7 L 163.1,109.0 L 168.8,106.2 L 174.5,103.2 L 180.2,100.0 L 186.0,96.7 L 191.7,93.3 L 197.4,89.6 L 203.1,85.9 L 208.8,81.9 L 214.6,77.9 L 220.3,73.6 L 226.0,69.2 L 231.7,64.7 L 237.5,60.0 L 243.2,55.1 L 248.9,50.1 L 254.6,45.0 L 260.3,39.7 L 266.1,34.2 L 271.8,28.6 L 277.5,22.8 L 283.2,16.9 L 288.9,10.8 L 294.7,4.5 L 300.4,-1.8 L 306.1,-8.4 L 311.8,-15.1 L 317.6,-21.9 L 323.3,-29.0 L 329.0,-36.1 L 334.7,-43.4 L 340.4,-50.9" fill="none" stroke="var(--primary)" stroke-width="2.4"/><line x1="125.3" y1="174.0" x2="125.3" y2="124.0" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3,2"/><text x="122.3" y="190.0" font-size="11" fill="var(--text-muted)">1</text><line x1="255.7" y1="174.0" x2="255.7" y2="44.0" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3,2"/><text x="252.7" y="190.0" font-size="11" fill="var(--text-muted)">3</text><text x="170.5" y="138.0" font-size="12" fill="var(--primary)" font-weight="700">&#8747;&#8321;&#179; f(x)dx</text></svg><p class="exo-fiche-fig-caption">L'intégrale ∫₁³ f(x)dx correspond à l'aire (en unités d'aire) de la région comprise entre la courbe de f, l'axe des abscisses et les droites x = 1 et x = 3.</p>` +
      `</div>` +
      `<p>Soit \\(f\\) une fonction définie sur un intervalle \\(I\\). Une <strong>primitive</strong> de \\(f\\) sur \\(I\\) est une fonction \\(F\\), dérivable sur \\(I\\), telle que pour tout \\(x\\) de \\(I\\) : \\(F'(x)=f(x)\\).</p>` +
      `<ul><li>Toute fonction continue sur un intervalle \\(I\\) admet des primitives sur \\(I\\) (admis en terminale).</li>` +
      `<li>Si \\(F\\) est une primitive de \\(f\\) sur \\(I\\), alors <strong>toutes</strong> les primitives de \\(f\\) sur \\(I\\) sont les fonctions \\(x \\mapsto F(x)+k\\), où \\(k\\) est une constante réelle quelconque (deux fonctions ayant la même dérivée sur un intervalle diffèrent d'une constante).</li>` +
      `<li>Une fonction admet donc une infinité de primitives sur \\(I\\), qui forment une famille « à une constante près ».</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(F(x)=x^2\\) est une primitive de \\(f(x)=2x\\) sur \\(\\mathbb{R}\\), car \\(F'(x)=2x=f(x)\\). Toutes les primitives de \\(f\\) sur \\(\\mathbb{R}\\) sont les fonctions \\(x \\mapsto x^2+k\\), \\(k\\in\\mathbb{R}\\).</div>` +
      `<h4>Primitives usuelles à connaître par cœur</h4>` +
      `<p>Ces primitives sont à connaître par cœur (\\(k\\) désigne une constante réelle quelconque) :</p>` +
      `<ul><li>\\(f(x)=x^n\\) (\\(n\\) entier, \\(n\\neq -1\\)) : primitive \\(F(x)=\\dfrac{x^{n+1}}{n+1}+k\\) (sur \\(\\mathbb{R}\\) si \\(n\\geq 0\\), sur un intervalle ne contenant pas \\(0\\) si \\(n&lt;0\\)).</li>` +
      `<li>\\(f(x)=\\dfrac{1}{x}\\) : primitive \\(F(x)=\\ln|x|+k\\), sur un intervalle ne contenant pas \\(0\\) (par exemple \\(]0;+\\infty[\\) ou \\(]-\\infty;0[\\)).</li>` +
      `<li>\\(f(x)=e^x\\) : primitive \\(F(x)=e^x+k\\) sur \\(\\mathbb{R}\\).</li>` +
      `<li>\\(f(x)=\\cos x\\) : primitive \\(F(x)=\\sin x+k\\) sur \\(\\mathbb{R}\\).</li>` +
      `<li>\\(f(x)=\\sin x\\) : primitive \\(F(x)=-\\cos x+k\\) sur \\(\\mathbb{R}\\).</li>` +
      `<li>Forme \\(u'e^{u}\\) : primitive \\(e^{u}+k\\).</li>` +
      `<li>Forme \\(\\dfrac{u'}{u}\\) (avec \\(u\\) ne s'annulant pas) : primitive \\(\\ln|u|+k\\).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Pour \\(f(x)=2x\\,e^{x^2}\\), on reconnaît la forme \\(u'e^{u}\\) avec \\(u(x)=x^2\\) (donc \\(u'(x)=2x\\)) : une primitive est \\(F(x)=e^{x^2}\\). Pour \\(g(x)=\\dfrac{2x}{x^2+1}\\), on reconnaît la forme \\(\\dfrac{u'}{u}\\) avec \\(u(x)=x^2+1>0\\) : une primitive est \\(G(x)=\\ln(x^2+1)\\) (pas besoin de valeur absolue puisque \\(x^2+1>0\\)).</div>` +
      `<h4>Déterminer une primitive à partir d'une condition initiale</h4>` +
      `<p>Pour déterminer la primitive \\(F\\) de \\(f\\) qui vérifie une condition du type \\(F(a)=b\\) :</p>` +
      `<ul><li>On écrit la famille générale des primitives de \\(f\\) sous la forme \\(F(x)=G(x)+k\\), où \\(G\\) est une primitive « simple » de \\(f\\).</li>` +
      `<li>On remplace \\(x\\) par \\(a\\) dans l'égalité \\(F(a)=b\\), ce qui donne une équation en \\(k\\).</li>` +
      `<li>On résout cette équation pour trouver la valeur de \\(k\\), puis on l'injecte dans l'expression de \\(F\\).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Soit \\(f(x)=2x\\). On cherche la primitive \\(F\\) de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(1)=5\\). Les primitives de \\(f\\) sont \\(F(x)=x^2+k\\). La condition \\(F(1)=5\\) donne \\(1+k=5\\), soit \\(k=4\\). Donc \\(F(x)=x^2+4\\).</div>` +
      `<h4>Intégrale d'une fonction continue : aire et lien avec les primitives</h4>` +
      `<p>Soit \\(f\\) une fonction continue et <strong>positive</strong> sur \\([a;b]\\) (avec \\(a\\leq b\\)). L'intégrale \\(\\displaystyle\\int_a^b f(x)\\,dx\\) est, par définition, l'aire (exprimée en unités d'aire) du domaine délimité par la courbe de \\(f\\), l'axe des abscisses et les droites d'équations \\(x=a\\) et \\(x=b\\).</p>` +
      `<p><strong>Lien fondamental primitive/intégrale :</strong> si \\(F\\) est une primitive de \\(f\\) sur un intervalle contenant \\(a\\) et \\(b\\), alors : \\[\\int_a^b f(x)\\,dx = F(b)-F(a),\\] que l'on note aussi \\(\\big[F(x)\\big]_a^b\\).</p>` +
      `<ul><li>Ce résultat reste valable même si \\(f\\) n'est pas positive : c'est ainsi que l'on calcule concrètement une intégrale, en cherchant une primitive.</li>` +
      `<li>Cas particulier : \\(\\displaystyle\\int_a^a f(x)\\,dx = 0\\).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(\\displaystyle\\int_0^2 x^2\\,dx=\\Big[\\dfrac{x^3}{3}\\Big]_0^2=\\dfrac{8}{3}-0=\\dfrac{8}{3}\\).</div>` +
      `<h4>Propriétés de l'intégrale</h4>` +
      `<p>Pour \\(f\\) et \\(g\\) continues sur un intervalle contenant \\(a\\), \\(b\\), \\(c\\), et \\(\\lambda\\) un réel :</p>` +
      `<ul><li><strong>Linéarité :</strong> \\(\\displaystyle\\int_a^b (f(x)+g(x))\\,dx=\\int_a^b f(x)\\,dx+\\int_a^b g(x)\\,dx\\) et \\(\\displaystyle\\int_a^b \\lambda f(x)\\,dx=\\lambda\\int_a^b f(x)\\,dx\\).</li>` +
      `<li><strong>Relation de Chasles :</strong> \\(\\displaystyle\\int_a^b f(x)\\,dx+\\int_b^c f(x)\\,dx=\\int_a^c f(x)\\,dx\\).</li>` +
      `<li><strong>Positivité :</strong> si \\(a\\leq b\\) et \\(f(x)\\geq 0\\) pour tout \\(x\\in[a;b]\\), alors \\(\\displaystyle\\int_a^b f(x)\\,dx\\geq 0\\).</li>` +
      `<li><strong>Comparaison :</strong> si \\(a\\leq b\\) et \\(f(x)\\leq g(x)\\) pour tout \\(x\\in[a;b]\\), alors \\(\\displaystyle\\int_a^b f(x)\\,dx\\leq\\int_a^b g(x)\\,dx\\).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(\\displaystyle\\int_0^1 (2x+3)\\,dx=\\int_0^1 2x\\,dx+\\int_0^1 3\\,dx=\\big[x^2\\big]_0^1+\\big[3x\\big]_0^1=1+3=4\\).</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> La primitive de \\(f(x)=\\dfrac{1}{x}\\) est \\(\\ln|x|\\) et non \\(\\ln x\\) tout court : sur \\(]-\\infty;0[\\), \\(\\ln x\\) n'existe pas, alors que \\(\\ln(-x)\\) (qui vaut \\(\\ln|x|\\) sur cet intervalle) est bien défini et est une primitive de \\(\\dfrac{1}{x}\\) sur \\(]-\\infty;0[\\).</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Quand \\(f\\) change de signe sur \\([a;b]\\), \\(\\displaystyle\\int_a^b f(x)\\,dx\\) n'est <strong>plus</strong> l'aire du domaine coloré : c'est une somme algébrique (aires « au-dessus » de l'axe comptées positivement, aires « en dessous » comptées négativement). L'intégrale peut donc être nulle, voire négative, alors que la figure occupe une aire visible non nulle.</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Pour reconnaître les formes \\(u'e^{u}\\) ou \\(\\dfrac{u'}{u}\\), il faut vérifier <strong>tout le coefficient</strong> devant l'exponentielle ou la fraction, pas seulement la présence de \\(x\\). Par exemple, une primitive de \\(\\dfrac{x}{x^2+1}\\) n'est pas \\(\\ln(x^2+1)\\) mais \\(\\dfrac12\\ln(x^2+1)\\), car \\(u(x)=x^2+1\\) a pour dérivée \\(u'(x)=2x\\) : il manque un facteur \\(\\dfrac12\\) pour compenser.</div>`

});
