/* ================================================================
   Fiche de révision — Nombres, inégalités & valeur absolue
   Genere automatiquement a partir du contenu source - pur re-formatage,
   ne pas editer les valeurs a la main sans repercuter le changement
   dans le dossier source de generation.
   ================================================================ */

window.EXERCISES_CATEGORIES.push({
  slug: "nombres-inegalites",
  label: "Nombres, inégalités & valeur absolue",
  fiche:
      `<h4>Ensembles de nombres et intervalles</h4>` +
      `<div class="exo-fiche-fig"><svg viewBox="0 0 380 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style=""><line x1="20.0" y1="40" x2="360.0" y2="40" stroke="var(--text-muted)" stroke-width="1.2"/><polygon points="360.0,36 369.0,40 360.0,44" fill="var(--text-muted)"/><line x1="20.0" y1="34" x2="20.0" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="20.0" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">-3</text><line x1="57.8" y1="34" x2="57.8" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="57.8" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">-2</text><line x1="95.6" y1="34" x2="95.6" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="95.6" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">-1</text><line x1="133.3" y1="34" x2="133.3" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="133.3" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">0</text><line x1="171.1" y1="34" x2="171.1" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="171.1" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">1</text><line x1="208.9" y1="34" x2="208.9" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="208.9" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">2</text><line x1="246.7" y1="34" x2="246.7" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="246.7" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">3</text><line x1="284.4" y1="34" x2="284.4" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="284.4" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">4</text><line x1="322.2" y1="34" x2="322.2" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="322.2" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">5</text><line x1="360.0" y1="34" x2="360.0" y2="46" stroke="var(--text-muted)" stroke-width="1"/><text x="360.0" y="62" font-size="12" fill="var(--text-muted)" text-anchor="middle">6</text><line x1="95.6" y1="40" x2="246.7" y2="40" stroke="var(--primary)" stroke-width="5"/><circle cx="95.6" cy="40" r="6" fill="var(--primary)"/><circle cx="246.7" cy="40" r="6" fill="var(--surface)" stroke="var(--primary)" stroke-width="3"/><text x="171.1" y="22" font-size="13" fill="var(--primary)" text-anchor="middle" font-weight="700">[ -1 ; 3 [</text></svg><p class="exo-fiche-fig-caption">Représentation de l'intervalle [-1 ; 3[ sur la droite des réels : point plein = borne incluse, point vide = borne exclue.</p>` +
      `</div>` +
      `<p>Ensembles usuels, emboîtés les uns dans les autres : \\(\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\).</p>` +
      `<ul><li>\\(\\mathbb{N}=\\{0,1,2,\\dots\\}\\) : entiers naturels.</li>` +
      `<li>\\(\\mathbb{Z}\\) : entiers relatifs (avec les négatifs).</li>` +
      `<li>\\(\\mathbb{Q}\\) : rationnels, quotients \\(p/q\\) avec \\(p\\in\\mathbb{Z}\\), \\(q\\in\\mathbb{Z}^*\\).</li>` +
      `<li>\\(\\mathbb{R}\\) : réels, comprend aussi les irrationnels (\\(\\sqrt2\\), \\(\\pi\\), ...).</li>` +
      `</ul>` +
      `<p>Un intervalle de \\(\\mathbb{R}\\) se note avec crochets : crochet <strong>fermé</strong> \\([\\,\\) si la borne est incluse, <strong>ouvert</strong> \\(]\\,\\) si elle est exclue.</p>` +
      `<ul><li>\\([a,b]=\\{x\\in\\mathbb{R}:a\\le x\\le b\\}\\) (borné, fermé).</li>` +
      `<li>\\(]a,b[=\\{x\\in\\mathbb{R}:a&lt; x&lt; b\\}\\) (borné, ouvert).</li>` +
      `<li>\\([a,b[\\), \\(]a,b]\\) : bornés, mi-ouverts.</li>` +
      `<li>\\([a,+\\infty[\\), \\(]-\\infty,a]\\), \\(]-\\infty,+\\infty[=\\mathbb{R}\\) : non bornés. \\(+\\infty\\) et \\(-\\infty\\) ne sont jamais inclus, toujours avec un crochet ouvert de leur côté.</li>` +
      `</ul>` +
      `<h4>Valeur absolue</h4>` +
      `<p>Définition : \\(|a|=a\\) si \\(a\\ge0\\), \\(|a|=-a\\) si \\(a&lt;0\\). Toujours \\(|a|\\ge0\\).</p>` +
      `<p>Interprétation géométrique : \\(|a-b|\\) est la <strong>distance</strong> entre les réels \\(a\\) et \\(b\\) sur la droite graduée.</p>` +
      `<ul><li>\\(|ab|=|a|\\,|b|\\) (multiplicative, toujours vraie).</li>` +
      `<li>Inégalité triangulaire : \\(|a+b|\\le |a|+|b|\\) (pas d'égalité en général : \\(|a+b|=|a|+|b|\\) seulement si \\(a\\) et \\(b\\) de même signe).</li>` +
      `<li>\\(|a-b|\\le |a-c|+|c-b|\\) (variante de l'inégalité triangulaire, utile pour majorer une distance).</li>` +
      `<li>Pour \\(r>0\\) : \\(|x-a|\\le r \\iff a-r\\le x\\le a+r \\iff x\\in[a-r,a+r]\\). Idem avec \\(&lt;\\) pour un intervalle ouvert.</li>` +
      `<li>Pour \\(r>0\\) : \\(|x-a|\\ge r \\iff x\\le a-r \\text{ ou } x\\ge a+r\\) (union de deux demi-droites, PAS un intervalle unique).</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Résoudre \\(|x-2|\\le3\\) : on pose \\(a=2\\), \\(r=3\\), donc \\(2-3\\le x\\le2+3\\), soit \\(x\\in[-1,5]\\).</div>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Résoudre \\(|3x-6|=12\\) : deux cas, \\(3x-6=12\\) donne \\(x=6\\), ou \\(3x-6=-12\\) donne \\(x=-2\\). Deux solutions : \\(x=-2\\) et \\(x=6\\).</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> \\(\\sqrt{a^2}=|a|\\), PAS \\(a\\). Si \\(a&lt;0\\) (par exemple \\(a=-3\\)), \\(\\sqrt{a^2}=\\sqrt9=3=|a|\\ne a\\). La racine carrée renvoie toujours un nombre positif ou nul.</div>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> \\(|x-a|\\le r\\) se traduit par un <strong>encadrement</strong> \\(x\\in[a-r,a+r]\\), pas par deux intervalles séparés (c'est \\(|x-a|\\ge r\\) qui donne une union de deux demi-droites). Ne pas confondre les deux cas.</div>` +
      `<h4>Manipuler les inégalités</h4>` +
      `<ul><li><strong>Addition</strong> : on peut toujours ajouter le même réel aux deux membres, le sens de l'inégalité ne change pas : \\(a&lt;b \\iff a+c&lt;b+c\\).</li>` +
      `<li><strong>Multiplication</strong> par un réel \\(c\\) : si \\(c>0\\), le sens est conservé (\\(a&lt;b \\Rightarrow ac&lt;bc\\)) ; si \\(c&lt;0\\), le sens s'<strong>inverse</strong> (\\(a&lt;b \\Rightarrow ac>bc\\)).</li>` +
      `<li><strong>Inverse</strong> : si \\(a\\) et \\(b\\) sont de <strong>même signe</strong> (tous deux strictement positifs ou tous deux strictement négatifs) et \\(0&lt;a&lt;b\\), alors \\(\\frac1a>\\frac1b\\) (le sens s'inverse). Interdit de comparer directement les inverses si \\(a\\) et \\(b\\) n'ont pas le même signe.</li>` +
      `<li><strong>Carré</strong> : si \\(0\\le a&lt;b\\) alors \\(a^2&lt;b^2\\) (sens conservé, car les deux membres sont positifs). Si un membre peut être négatif, il faut étudier séparément les signes avant d'élever au carré : en général \\(a&lt;b\\) n'entraîne PAS \\(a^2&lt;b^2\\) (contre-exemple : \\(-5&lt;1\\) mais \\(25>1\\)).</li>` +
      `</ul>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> En multipliant (ou divisant) une inégalité par un nombre négatif, il faut inverser le sens de l'inégalité : \\(x&lt;5\\) multiplié par \\(-2\\) donne \\(-2x>-10\\), pas \\(-2x&lt;-10\\). Même remarque en divisant par une expression contenant \\(x\\) : il faut d'abord connaître son signe (ou tout ramener d'un seul côté et étudier le signe d'un quotient, plutôt que de multiplier par une expression de signe inconnu).</div>` +
      `<h4>Identités remarquables</h4>` +
      `<ul><li>\\((a+b)^2=a^2+2ab+b^2\\)</li>` +
      `<li>\\((a-b)^2=a^2-2ab+b^2\\)</li>` +
      `<li>\\(a^2-b^2=(a-b)(a+b)\\)</li>` +
      `</ul>` +
      `<p>Utiles pour factoriser une expression et en étudier le signe, ou pour transformer une inéquation en produit de facteurs.</p>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> \\(101^2-99^2=(101-99)(101+99)=2\\times200=400\\), sans calculer les carrés directement.</div>` +
      `<h4>Puissances, racines et rationalisation</h4>` +
      `<ul><li>\\(a^m\\times a^n=a^{m+n}\\), \\(\\dfrac{a^m}{a^n}=a^{m-n}\\), \\((a^m)^n=a^{mn}\\), valables pour \\(a\\ne0\\) et \\(m,n\\in\\mathbb{Z}\\).</li>` +
      `<li>Exposant négatif : \\(a^{-n}=\\dfrac1{a^n}\\) (\\(a\\ne0\\)) ; exposant nul : \\(a^0=1\\) (\\(a\\ne0\\)).</li>` +
      `<li>\\(\\sqrt{a^2}=|a|\\) pour tout réel \\(a\\) ; \\(\\sqrt{ab}=\\sqrt a\\sqrt b\\) seulement si \\(a\\ge0\\) et \\(b\\ge0\\).</li>` +
      `<li>Rationaliser un dénominateur avec une racine : multiplier numérateur et dénominateur par l'expression conjuguée, en utilisant \\(a^2-b^2=(a-b)(a+b)\\) pour faire disparaître la racine au dénominateur.</li>` +
      `</ul>` +
      `<div class="exo-fiche-exemple"><strong>Exemple.</strong> Rationaliser \\(\\dfrac1{\\sqrt3-1}\\) : multiplier par \\(\\dfrac{\\sqrt3+1}{\\sqrt3+1}\\), on obtient \\(\\dfrac{\\sqrt3+1}{(\\sqrt3)^2-1^2}=\\dfrac{\\sqrt3+1}{3-1}=\\dfrac{\\sqrt3+1}{2}\\).</div>` +
      `<h4>Tableau de signes et inéquations produit/quotient</h4>` +
      `<p>Pour résoudre \\(f(x)\\times g(x)>0\\) ou \\(\\dfrac{f(x)}{g(x)}\\le0\\) avec \\(f,g\\) affines : trouver le zéro de chaque facteur, placer ces zéros dans l'ordre croissant sur une ligne, déterminer le signe de chaque facteur sur chaque intervalle (un facteur affine \\(px+q\\) est du signe de \\(p\\) après son zéro, du signe opposé avant), puis appliquer la règle des signes (produit/quotient de deux facteurs de même signe est positif, de signes contraires est négatif). Pour un quotient, le ou les zéros du <strong>dénominateur</strong> sont toujours exclus de la solution (valeur interdite), même si l'inégalité est large.</p>` +
      `<div class="exo-fiche-piege"><strong>Piège classique.</strong> Ne jamais multiplier une inéquation par une expression contenant \\(x\\) dont le signe n'est pas connu (par exemple multiplier \\(\\dfrac3{x-2}>1\\) par \\(x-2\\) directement) : le sens de l'inégalité dépend du signe de \\(x-2\\), qui change selon \\(x\\). La bonne méthode : tout ramener d'un seul côté sous forme d'une unique fraction, puis étudier le signe du numérateur et du dénominateur séparément dans un tableau de signes.</div>`

});
