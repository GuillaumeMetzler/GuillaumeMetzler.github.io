/* Fiches de revision lycee (1ere/Terminale specialite maths) - Analyse I
   Genere automatiquement - ne pas editer a la main, regenerer depuis le
   dossier source. NB: on utilise 'var' (et non 'const') pour que ces
   variables soient bien attachees a l'objet window et donc lisibles
   depuis exercises.js charge dans un <script> separe. */
var EXERCISES_CATEGORIES = [
 {
  "slug": "nombres-inegalites",
  "label": "Nombres, inégalités & valeur absolue",
  "fiche": "<h4>Ensembles de nombres et intervalles</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 80\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"20.0\" y1=\"40\" x2=\"360.0\" y2=\"40\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,36 369.0,40 360.0,44\" fill=\"var(--text-muted)\"/><line x1=\"20.0\" y1=\"34\" x2=\"20.0\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"20.0\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">-3</text><line x1=\"57.8\" y1=\"34\" x2=\"57.8\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"57.8\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">-2</text><line x1=\"95.6\" y1=\"34\" x2=\"95.6\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"95.6\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">-1</text><line x1=\"133.3\" y1=\"34\" x2=\"133.3\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"133.3\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">0</text><line x1=\"171.1\" y1=\"34\" x2=\"171.1\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"171.1\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">1</text><line x1=\"208.9\" y1=\"34\" x2=\"208.9\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"208.9\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">2</text><line x1=\"246.7\" y1=\"34\" x2=\"246.7\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"246.7\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">3</text><line x1=\"284.4\" y1=\"34\" x2=\"284.4\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"284.4\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">4</text><line x1=\"322.2\" y1=\"34\" x2=\"322.2\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"322.2\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">5</text><line x1=\"360.0\" y1=\"34\" x2=\"360.0\" y2=\"46\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"360.0\" y=\"62\" font-size=\"12\" fill=\"var(--text-muted)\" text-anchor=\"middle\">6</text><line x1=\"95.6\" y1=\"40\" x2=\"246.7\" y2=\"40\" stroke=\"var(--primary)\" stroke-width=\"5\"/><circle cx=\"95.6\" cy=\"40\" r=\"6\" fill=\"var(--primary)\"/><circle cx=\"246.7\" cy=\"40\" r=\"6\" fill=\"var(--surface)\" stroke=\"var(--primary)\" stroke-width=\"3\"/><text x=\"171.1\" y=\"22\" font-size=\"13\" fill=\"var(--primary)\" text-anchor=\"middle\" font-weight=\"700\">[ -1 ; 3 [</text></svg><p class=\"exo-fiche-fig-caption\">Représentation de l'intervalle [-1 ; 3[ sur la droite des réels : point plein = borne incluse, point vide = borne exclue.</p></div><p>Ensembles usuels, emboîtés les uns dans les autres : \\(\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\).</p><ul><li>\\(\\mathbb{N}=\\{0,1,2,\\dots\\}\\) : entiers naturels.</li><li>\\(\\mathbb{Z}\\) : entiers relatifs (avec les négatifs).</li><li>\\(\\mathbb{Q}\\) : rationnels, quotients \\(p/q\\) avec \\(p\\in\\mathbb{Z}\\), \\(q\\in\\mathbb{Z}^*\\).</li><li>\\(\\mathbb{R}\\) : réels, comprend aussi les irrationnels (\\(\\sqrt2\\), \\(\\pi\\), ...).</li></ul><p>Un intervalle de \\(\\mathbb{R}\\) se note avec crochets : crochet <strong>fermé</strong> \\([\\,\\) si la borne est incluse, <strong>ouvert</strong> \\(]\\,\\) si elle est exclue.</p><ul><li>\\([a,b]=\\{x\\in\\mathbb{R}:a\\le x\\le b\\}\\) (borné, fermé).</li><li>\\(]a,b[=\\{x\\in\\mathbb{R}:a&lt; x&lt; b\\}\\) (borné, ouvert).</li><li>\\([a,b[\\), \\(]a,b]\\) : bornés, mi-ouverts.</li><li>\\([a,+\\infty[\\), \\(]-\\infty,a]\\), \\(]-\\infty,+\\infty[=\\mathbb{R}\\) : non bornés. \\(+\\infty\\) et \\(-\\infty\\) ne sont jamais inclus, toujours avec un crochet ouvert de leur côté.</li></ul><h4>Valeur absolue</h4><p>Définition : \\(|a|=a\\) si \\(a\\ge0\\), \\(|a|=-a\\) si \\(a&lt;0\\). Toujours \\(|a|\\ge0\\).</p><p>Interprétation géométrique : \\(|a-b|\\) est la <strong>distance</strong> entre les réels \\(a\\) et \\(b\\) sur la droite graduée.</p><ul><li>\\(|ab|=|a|\\,|b|\\) (multiplicative, toujours vraie).</li><li>Inégalité triangulaire : \\(|a+b|\\le |a|+|b|\\) (pas d'égalité en général : \\(|a+b|=|a|+|b|\\) seulement si \\(a\\) et \\(b\\) de même signe).</li><li>\\(|a-b|\\le |a-c|+|c-b|\\) (variante de l'inégalité triangulaire, utile pour majorer une distance).</li><li>Pour \\(r>0\\) : \\(|x-a|\\le r \\iff a-r\\le x\\le a+r \\iff x\\in[a-r,a+r]\\). Idem avec \\(&lt;\\) pour un intervalle ouvert.</li><li>Pour \\(r>0\\) : \\(|x-a|\\ge r \\iff x\\le a-r \\text{ ou } x\\ge a+r\\) (union de deux demi-droites, PAS un intervalle unique).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Résoudre \\(|x-2|\\le3\\) : on pose \\(a=2\\), \\(r=3\\), donc \\(2-3\\le x\\le2+3\\), soit \\(x\\in[-1,5]\\).</div><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Résoudre \\(|3x-6|=12\\) : deux cas, \\(3x-6=12\\) donne \\(x=6\\), ou \\(3x-6=-12\\) donne \\(x=-2\\). Deux solutions : \\(x=-2\\) et \\(x=6\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\(\\sqrt{a^2}=|a|\\), PAS \\(a\\). Si \\(a&lt;0\\) (par exemple \\(a=-3\\)), \\(\\sqrt{a^2}=\\sqrt9=3=|a|\\ne a\\). La racine carrée renvoie toujours un nombre positif ou nul.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\(|x-a|\\le r\\) se traduit par un <strong>encadrement</strong> \\(x\\in[a-r,a+r]\\), pas par deux intervalles séparés (c'est \\(|x-a|\\ge r\\) qui donne une union de deux demi-droites). Ne pas confondre les deux cas.</div><h4>Manipuler les inégalités</h4><ul><li><strong>Addition</strong> : on peut toujours ajouter le même réel aux deux membres, le sens de l'inégalité ne change pas : \\(a&lt;b \\iff a+c&lt;b+c\\).</li><li><strong>Multiplication</strong> par un réel \\(c\\) : si \\(c>0\\), le sens est conservé (\\(a&lt;b \\Rightarrow ac&lt;bc\\)) ; si \\(c&lt;0\\), le sens s'<strong>inverse</strong> (\\(a&lt;b \\Rightarrow ac>bc\\)).</li><li><strong>Inverse</strong> : si \\(a\\) et \\(b\\) sont de <strong>même signe</strong> (tous deux strictement positifs ou tous deux strictement négatifs) et \\(0&lt;a&lt;b\\), alors \\(\\frac1a>\\frac1b\\) (le sens s'inverse). Interdit de comparer directement les inverses si \\(a\\) et \\(b\\) n'ont pas le même signe.</li><li><strong>Carré</strong> : si \\(0\\le a&lt;b\\) alors \\(a^2&lt;b^2\\) (sens conservé, car les deux membres sont positifs). Si un membre peut être négatif, il faut étudier séparément les signes avant d'élever au carré : en général \\(a&lt;b\\) n'entraîne PAS \\(a^2&lt;b^2\\) (contre-exemple : \\(-5&lt;1\\) mais \\(25>1\\)).</li></ul><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> En multipliant (ou divisant) une inégalité par un nombre négatif, il faut inverser le sens de l'inégalité : \\(x&lt;5\\) multiplié par \\(-2\\) donne \\(-2x>-10\\), pas \\(-2x&lt;-10\\). Même remarque en divisant par une expression contenant \\(x\\) : il faut d'abord connaître son signe (ou tout ramener d'un seul côté et étudier le signe d'un quotient, plutôt que de multiplier par une expression de signe inconnu).</div><h4>Identités remarquables</h4><ul><li>\\((a+b)^2=a^2+2ab+b^2\\)</li><li>\\((a-b)^2=a^2-2ab+b^2\\)</li><li>\\(a^2-b^2=(a-b)(a+b)\\)</li></ul><p>Utiles pour factoriser une expression et en étudier le signe, ou pour transformer une inéquation en produit de facteurs.</p><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(101^2-99^2=(101-99)(101+99)=2\\times200=400\\), sans calculer les carrés directement.</div><h4>Puissances, racines et rationalisation</h4><ul><li>\\(a^m\\times a^n=a^{m+n}\\), \\(\\dfrac{a^m}{a^n}=a^{m-n}\\), \\((a^m)^n=a^{mn}\\), valables pour \\(a\\ne0\\) et \\(m,n\\in\\mathbb{Z}\\).</li><li>Exposant négatif : \\(a^{-n}=\\dfrac1{a^n}\\) (\\(a\\ne0\\)) ; exposant nul : \\(a^0=1\\) (\\(a\\ne0\\)).</li><li>\\(\\sqrt{a^2}=|a|\\) pour tout réel \\(a\\) ; \\(\\sqrt{ab}=\\sqrt a\\sqrt b\\) seulement si \\(a\\ge0\\) et \\(b\\ge0\\).</li><li>Rationaliser un dénominateur avec une racine : multiplier numérateur et dénominateur par l'expression conjuguée, en utilisant \\(a^2-b^2=(a-b)(a+b)\\) pour faire disparaître la racine au dénominateur.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Rationaliser \\(\\dfrac1{\\sqrt3-1}\\) : multiplier par \\(\\dfrac{\\sqrt3+1}{\\sqrt3+1}\\), on obtient \\(\\dfrac{\\sqrt3+1}{(\\sqrt3)^2-1^2}=\\dfrac{\\sqrt3+1}{3-1}=\\dfrac{\\sqrt3+1}{2}\\).</div><h4>Tableau de signes et inéquations produit/quotient</h4><p>Pour résoudre \\(f(x)\\times g(x)>0\\) ou \\(\\dfrac{f(x)}{g(x)}\\le0\\) avec \\(f,g\\) affines : trouver le zéro de chaque facteur, placer ces zéros dans l'ordre croissant sur une ligne, déterminer le signe de chaque facteur sur chaque intervalle (un facteur affine \\(px+q\\) est du signe de \\(p\\) après son zéro, du signe opposé avant), puis appliquer la règle des signes (produit/quotient de deux facteurs de même signe est positif, de signes contraires est négatif). Pour un quotient, le ou les zéros du <strong>dénominateur</strong> sont toujours exclus de la solution (valeur interdite), même si l'inégalité est large.</p><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Ne jamais multiplier une inéquation par une expression contenant \\(x\\) dont le signe n'est pas connu (par exemple multiplier \\(\\dfrac3{x-2}>1\\) par \\(x-2\\) directement) : le sens de l'inégalité dépend du signe de \\(x-2\\), qui change selon \\(x\\). La bonne méthode : tout ramener d'un seul côté sous forme d'une unique fraction, puis étudier le signe du numérateur et du dénominateur séparément dans un tableau de signes.</div>"
 },
 {
  "slug": "second-degre",
  "label": "Second degré & polynômes",
  "fiche": "<h4>Forme canonique et sommet de la parabole</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"113.2\" x2=\"360.0\" y2=\"113.2\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,109.2 367.0,113.2 360.0,117.2\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"117.2\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"150.4\" y1=\"190.0\" x2=\"150.4\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"146.4,14.0 150.4,7.0 154.4,14.0\" fill=\"var(--text-muted)\"/><text x=\"156.4\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"57.3\" y1=\"110.2\" x2=\"57.3\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"103.9\" y1=\"110.2\" x2=\"103.9\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"197.0\" y1=\"110.2\" x2=\"197.0\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"243.6\" y1=\"110.2\" x2=\"243.6\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"290.1\" y1=\"110.2\" x2=\"290.1\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"336.7\" y1=\"110.2\" x2=\"336.7\" y2=\"116.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.4\" y1=\"177.2\" x2=\"153.4\" y2=\"177.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.4\" y1=\"145.2\" x2=\"153.4\" y2=\"145.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.4\" y1=\"81.2\" x2=\"153.4\" y2=\"81.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.4\" y1=\"49.2\" x2=\"153.4\" y2=\"49.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.4\" y1=\"17.2\" x2=\"153.4\" y2=\"17.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"139.4\" y=\"126.2\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><path d=\"M 34.0,-18.8 L 38.7,-7.6 L 43.4,3.3 L 48.2,13.8 L 52.9,24.0 L 57.6,33.9 L 62.3,43.4 L 67.1,52.7 L 71.8,61.6 L 76.5,70.1 L 81.2,78.4 L 86.0,86.3 L 90.7,93.8 L 95.4,101.1 L 100.1,108.0 L 104.9,114.6 L 109.6,120.8 L 114.3,126.8 L 119.0,132.4 L 123.8,137.6 L 128.5,142.6 L 133.2,147.2 L 137.9,151.5 L 142.7,155.4 L 147.4,159.0 L 152.1,162.3 L 156.8,165.3 L 161.6,167.9 L 166.3,170.2 L 171.0,172.2 L 175.7,173.9 L 180.5,175.2 L 185.2,176.2 L 189.9,176.8 L 194.6,177.2 L 199.4,177.2 L 204.1,176.8 L 208.8,176.2 L 213.5,175.2 L 218.3,173.9 L 223.0,172.2 L 227.7,170.2 L 232.4,167.9 L 237.2,165.3 L 241.9,162.3 L 246.6,159.0 L 251.3,155.4 L 256.1,151.5 L 260.8,147.2 L 265.5,142.6 L 270.2,137.6 L 275.0,132.4 L 279.7,126.8 L 284.4,120.8 L 289.1,114.6 L 293.9,108.0 L 298.6,101.1 L 303.3,93.8 L 308.0,86.3 L 312.8,78.4 L 317.5,70.1 L 322.2,61.6 L 326.9,52.7 L 331.7,43.4 L 336.4,33.9 L 341.1,24.0 L 345.8,13.8 L 350.6,3.3 L 355.3,-7.6 L 360.0,-18.8\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.4\"/><line x1=\"197.0\" y1=\"190.0\" x2=\"197.0\" y2=\"17.2\" stroke=\"var(--accent)\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/><circle cx=\"103.9\" cy=\"113.2\" r=\"4.5\" fill=\"var(--warning)\"/><circle cx=\"290.1\" cy=\"113.2\" r=\"4.5\" fill=\"var(--warning)\"/><circle cx=\"197.0\" cy=\"177.2\" r=\"4.5\" fill=\"var(--accent)\"/><text x=\"203.0\" y=\"193.2\" font-size=\"11\" fill=\"var(--accent)\" font-weight=\"700\">S(1 ; -4)</text><text x=\"296.1\" y=\"105.2\" font-size=\"11\" fill=\"var(--warning)\">3</text><text x=\"87.9\" y=\"105.2\" font-size=\"11\" fill=\"var(--warning)\">-1</text></svg><p class=\"exo-fiche-fig-caption\">Parabole associée à f(x) = x² − 2x − 3 : racines en -1 et 3, sommet S(1 ; -4), axe de symétrie x = 1.</p></div><p>Un trinôme du second degré s'écrit sous forme développée \\(f(x)=ax^2+bx+c\\) avec \\(a\\neq0\\), ou sous forme canonique \\(f(x)=a(x-\\alpha)^2+\\beta\\), avec :</p><ul><li>\\(\\alpha=-\\dfrac{b}{2a}\\) (abscisse du sommet)</li><li>\\(\\beta=f(\\alpha)=-\\dfrac{\\Delta}{4a}\\) (ordonnée du sommet)</li></ul><p>Le point \\(S(\\alpha,\\beta)\\) est le sommet de la parabole représentant \\(f\\). Le signe de \\(a\\) donne la concavité et le sens de variation :</p><ul><li>si \\(a>0\\) : parabole tournée vers le haut, \\(\\beta\\) est le <strong>minimum</strong> de \\(f\\) sur \\(\\mathbb{R}\\)</li><li>si \\(a&lt;0\\) : parabole tournée vers le bas, \\(\\beta\\) est le <strong>maximum</strong> de \\(f\\) sur \\(\\mathbb{R}\\)</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(f(x)=-2x^2+4x+1\\) : \\(\\alpha=-\\dfrac{4}{2\\times(-2)}=1\\), puis \\(\\beta=f(1)=-2+4+1=3\\). Donc \\(f(x)=-2(x-1)^2+3\\) : parabole tournée vers le bas, maximum \\(3\\) atteint en \\(x=1\\).</div><h4>Discriminant et racines</h4><p>Le discriminant est \\(\\Delta=b^2-4ac\\). Il donne le nombre de racines réelles :</p><ul><li>\\(\\Delta>0\\) : deux racines réelles distinctes \\(x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}\\) et \\(x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}\\)</li><li>\\(\\Delta=0\\) : une racine double \\(x_0=-\\dfrac{b}{2a}\\)</li><li>\\(\\Delta&lt;0\\) : aucune racine réelle</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(f(x)=2x^2-3x-5\\) : \\(\\Delta=(-3)^2-4\\times2\\times(-5)=9+40=49=7^2\\), donc \\(\\Delta>0\\). Les racines sont \\(x_1=\\dfrac{3-7}{4}=-1\\) et \\(x_2=\\dfrac{3+7}{4}=2{,}5\\), et \\(f(x)=2(x+1)(x-2{,}5)=(x+1)(2x-5)\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Attention aux signes dans \\(x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}\\) : on divise par \\(2a\\) (pas seulement par \\(a\\)), et si \\(b\\) est déjà négatif, \\(-b\\) redevient positif — bien mettre \\(-b\\) entre parenthèses avant de calculer.</div><h4>Somme, produit des racines et signe du trinôme</h4><p>Quand \\(\\Delta\\geq0\\), les racines \\(x_1,x_2\\) (éventuellement confondues) vérifient :</p><ul><li>\\(S=x_1+x_2=-\\dfrac{b}{a}\\)</li><li>\\(P=x_1\\times x_2=\\dfrac{c}{a}\\)</li></ul><p>Ces relations permettent de retrouver rapidement un trinôme connaissant ses racines, ou de vérifier un résultat sans refaire tout le calcul.</p><p><strong>Signe du trinôme</strong> \\(f(x)=ax^2+bx+c\\) :</p><ul><li>si \\(\\Delta&lt;0\\) : \\(f(x)\\) garde un signe constant sur \\(\\mathbb{R}\\), celui de \\(a\\)</li><li>si \\(\\Delta=0\\) : \\(f(x)\\) a le signe de \\(a\\) pour tout \\(x\\neq x_0\\), et \\(f(x_0)=0\\)</li><li>si \\(\\Delta>0\\), avec \\(x_1&lt;x_2\\) : \\(f(x)\\) est du signe de \\(a\\) <strong>à l'extérieur</strong> des racines (\\(x&lt;x_1\\) ou \\(x>x_2\\)), et du signe de \\(-a\\) <strong>à l'intérieur</strong> (\\(x_1&lt;x&lt;x_2\\))</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(g(x)=x^2-5x+6\\), \\(\\Delta=25-24=1>0\\), racines \\(x_1=2\\) et \\(x_2=3\\) (on vérifie \\(S=2+3=5=-\\dfrac{-5}{1}\\) et \\(P=2\\times3=6=\\dfrac{6}{1}\\), cohérent). Comme \\(a=1>0\\) : \\(g(x)>0\\) sur \\(]-\\infty,2[\\cup]3,+\\infty[\\), \\(g(x)&lt;0\\) sur \\(]2,3[\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> La règle « signe de \\(a\\) à l'extérieur des racines » ne veut pas dire « toujours positif à l'extérieur » : si \\(a&lt;0\\), le trinôme est <em>négatif</em> à l'extérieur des racines et <em>positif</em> entre les deux. Il faut toujours reprendre le signe de \\(a\\), pas une règle mémorisée à l'aveugle.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\(\\Delta&lt;0\\) ne signifie pas « signe inconnu » : cela signifie au contraire que \\(f\\) ne s'annule jamais et garde un signe constant sur \\(\\mathbb{R}\\), exactement celui de \\(a\\). C'est une erreur fréquente d'oublier ce cas et de croire qu'on ne peut rien dire du signe.</div><h4>Équations, inéquations et factorisation d'un polynôme de degré supérieur</h4><p>Pour résoudre une inéquation du type \\(ax^2+bx+c\\geqslant0\\) (ou \\(\\leqslant\\), \\(&lt;\\), \\(>\\)), on détermine le signe du trinôme comme ci-dessus, puis on lit l'ensemble solution dans un tableau de signes. Quand plusieurs facteurs sont en jeu (un facteur affine et un trinôme), on étudie le signe de chaque facteur séparément dans le même tableau, puis on applique la règle des signes d'un produit.</p><p>Pour un polynôme de degré \\(\\geqslant3\\), si l'on trouve une <strong>racine évidente</strong> \\(r\\) (souvent \\(-2,-1,0,1,2\\)), alors le polynôme est factorisable par \\((x-r)\\) ; on identifie le quotient (par division ou identification des coefficients), qui est de degré inférieur d'une unité — s'il redevient un trinôme, on lui applique tout ce qui précède.</p><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(P(x)=x^3-6x^2+11x-6\\), on teste \\(x=1\\) : \\(P(1)=1-6+11-6=0\\), donc \\(1\\) est racine évidente et \\(P(x)=(x-1)Q(x)\\). En identifiant, \\(Q(x)=x^2-5x+6\\), qui est le trinôme \\(g\\) de l'exemple précédent : \\(Q(x)=(x-2)(x-3)\\). Finalement \\(P(x)=(x-1)(x-2)(x-3)\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Lors d'une factorisation \\(ax^2+bx+c=a(x-x_1)(x-x_2)\\), ne pas oublier le facteur \\(a\\) devant le produit : \\(2x^2-3x-5\\) se factorise en \\(2(x+1)(x-2{,}5)\\) — ou, après avoir absorbé le \\(2\\) dans un des facteurs, \\((x+1)(2x-5)\\) — mais surtout pas en \\((x+1)(x-2{,}5)\\), qui donnerait \\(x^2-1{,}5x-2{,}5\\), un polynôme différent.</div>"
 },
 {
  "slug": "fonctions-reference",
  "label": "Fonctions de référence & généralités",
  "fiche": "<h4>Vocabulaire de base et lecture graphique</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"179.3\" x2=\"360.0\" y2=\"179.3\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,175.3 367.0,179.3 360.0,183.3\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"183.3\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"53.8\" y1=\"190.0\" x2=\"53.8\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"49.8,14.0 53.8,7.0 57.8,14.0\" fill=\"var(--text-muted)\"/><text x=\"59.8\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"103.2\" y1=\"176.3\" x2=\"103.2\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"152.5\" y1=\"176.3\" x2=\"152.5\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"201.9\" y1=\"176.3\" x2=\"201.9\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"251.3\" y1=\"176.3\" x2=\"251.3\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"300.7\" y1=\"176.3\" x2=\"300.7\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"350.1\" y1=\"176.3\" x2=\"350.1\" y2=\"182.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"152.7\" x2=\"56.8\" y2=\"152.7\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"126.0\" x2=\"56.8\" y2=\"126.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"99.3\" x2=\"56.8\" y2=\"99.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"72.7\" x2=\"56.8\" y2=\"72.7\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"46.0\" x2=\"56.8\" y2=\"46.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.8\" y1=\"19.3\" x2=\"56.8\" y2=\"19.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"42.8\" y=\"192.3\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><path d=\"M 53.8,179.3 L 56.9,179.2 L 60.0,178.9 L 63.1,178.4 L 66.2,177.6 L 69.3,176.7 L 72.4,175.5 L 75.5,174.2 L 78.6,172.6 L 81.7,170.8 L 84.8,168.8 L 87.9,166.6 L 91.0,164.2 L 94.1,161.5 L 97.2,158.7 L 100.3,155.7 L 103.4,152.4 L 106.5,148.9 L 109.6,145.2 L 112.7,141.3 L 115.8,137.2 L 118.9,132.9 L 122.0,128.4 L 125.1,123.7 L 128.2,118.7 L 131.3,113.6 L 134.4,108.2 L 137.5,102.6 L 140.6,96.8 L 143.7,90.8 L 146.8,84.6 L 149.9,78.2 L 153.1,71.6 L 156.2,64.7 L 159.3,57.7 L 162.4,50.4 L 165.5,42.9 L 168.6,35.3 L 171.7,27.4 L 174.8,19.3\" fill=\"none\" stroke=\"var(--warning)\" stroke-width=\"2\"/><path d=\"M 53.8,179.3 L 59.8,170.0 L 65.9,166.1 L 71.9,163.2 L 78.0,160.7 L 84.0,158.5 L 90.0,156.5 L 96.1,154.6 L 102.1,152.9 L 108.2,151.3 L 114.2,149.8 L 120.3,148.4 L 126.3,147.0 L 132.4,145.7 L 138.4,144.4 L 144.5,143.2 L 150.5,142.0 L 156.6,140.9 L 162.6,139.7 L 168.7,138.7 L 174.7,137.6 L 180.8,136.6 L 186.8,135.6 L 192.9,134.6 L 198.9,133.6 L 205.0,132.7 L 211.0,131.8 L 217.1,130.8 L 223.1,130.0 L 229.2,129.1 L 235.2,128.2 L 241.3,127.4 L 247.3,126.5 L 253.3,125.7 L 259.4,124.9 L 265.4,124.1 L 271.5,123.3 L 277.5,122.6 L 283.6,121.8 L 289.6,121.1 L 295.7,120.3 L 301.7,119.6 L 307.8,118.9 L 313.8,118.1 L 319.9,117.4 L 325.9,116.7 L 332.0,116.0 L 338.0,115.4 L 344.1,114.7 L 350.1,114.0\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.4\"/><path d=\"M 69.6,96.0 L 75.3,118.2 L 81.0,131.0 L 86.7,139.4 L 92.5,145.3 L 98.2,149.7 L 103.9,153.1 L 109.6,155.8 L 115.4,158.0 L 121.1,159.8 L 126.8,161.3 L 132.5,162.6 L 138.3,163.7 L 144.0,164.7 L 149.7,165.6 L 155.4,166.4 L 161.2,167.1 L 166.9,167.7 L 172.6,168.3 L 178.4,168.8 L 184.1,169.2 L 189.8,169.7 L 195.5,170.0 L 201.3,170.4 L 207.0,170.7 L 212.7,171.0 L 218.4,171.3 L 224.2,171.6 L 229.9,171.9 L 235.6,172.1 L 241.3,172.3 L 247.1,172.5 L 252.8,172.7 L 258.5,172.9 L 264.2,173.1 L 270.0,173.2 L 275.7,173.4 L 281.4,173.5 L 287.1,173.7 L 292.9,173.8 L 298.6,174.0 L 304.3,174.1 L 310.0,174.2 L 315.8,174.3 L 321.5,174.4 L 327.2,174.5 L 332.9,174.6 L 338.7,174.7 L 344.4,174.8 L 350.1,174.9\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.4\"/><text x=\"330.4\" y=\"110.2\" font-size=\"11\" fill=\"var(--primary)\" font-weight=\"700\">&#8730;x</text><text x=\"110.6\" y=\"150.1\" font-size=\"11\" fill=\"var(--accent)\" font-weight=\"700\">1/x</text><text x=\"150.8\" y=\"21.3\" font-size=\"11\" fill=\"var(--warning)\" font-weight=\"700\">x&#178;</text></svg><p class=\"exo-fiche-fig-caption\">Allure comparée des fonctions de référence : x ↦ √x, x ↦ 1/x (sur x > 0) et x ↦ x².</p></div><p>Une fonction \\(f\\) associe à tout réel \\(x\\) d'un ensemble \\(D_f\\) (l'<strong>ensemble de définition</strong>) au plus un réel noté \\(f(x)\\), appelé l'<strong>image</strong> de \\(x\\) par \\(f\\). Si \\(y = f(x)\\), on dit que \\(x\\) est un <strong>antécédent</strong> de \\(y\\) par \\(f\\). Un réel peut avoir zéro, un ou plusieurs antécédents, mais une seule image.</p><ul><li>Courbe représentative \\(\\mathcal{C}_f\\) : ensemble des points \\(M(x\\,;\\,f(x))\\) pour \\(x \\in D_f\\).</li><li>Lire l'image de \\(a\\) sur le graphique : on part de \\(a\\) en abscisse, on monte jusqu'à la courbe, on lit l'ordonnée.</li><li>Lire les antécédents de \\(b\\) : on part de \\(b\\) en ordonnée, on trace l'horizontale, chaque point d'intersection avec la courbe donne un antécédent (son abscisse).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(f(x) = x^2\\). L'image de \\(3\\) est \\(f(3) = 9\\). Les antécédents de \\(9\\) sont les solutions de \\(x^2 = 9\\), soit \\(x = 3\\) ou \\(x = -3\\) : \\(9\\) a donc deux antécédents.</div><h4>Sens de variation, extremums, parité, périodicité</h4><p>Soit \\(f\\) définie sur un intervalle \\(I\\).</p><ul><li>\\(f\\) est <strong>croissante</strong> sur \\(I\\) si pour tous \\(a, b \\in I\\), \\(a \\leqslant b \\Rightarrow f(a) \\leqslant f(b)\\) (strictement si l'inégalité de droite est stricte dès que \\(a&lt;b\\)).</li><li>\\(f\\) est <strong>décroissante</strong> sur \\(I\\) si \\(a \\leqslant b \\Rightarrow f(a) \\geqslant f(b)\\) (l'ordre des images est <em>inversé</em> par rapport à celui des antécédents).</li><li>\\(f\\) est <strong>constante</strong> sur \\(I\\) si \\(f(a) = f(b)\\) pour tous \\(a, b \\in I\\).</li><li><strong>Maximum</strong> (resp. minimum) de \\(f\\) sur \\(I\\) en \\(x_0\\) : \\(f(x_0) \\geqslant f(x)\\) (resp. \\(\\leqslant\\)) pour tout \\(x \\in I\\). Un extremum est dit <em>local</em> si l'inégalité n'est vraie que sur un petit intervalle autour de \\(x_0\\), <em>global</em> si elle est vraie sur tout \\(D_f\\).</li><li>\\(f\\) est <strong>paire</strong> si \\(D_f\\) est symétrique par rapport à \\(0\\) et \\(f(-x) = f(x)\\) pour tout \\(x\\) : sa courbe est symétrique par rapport à l'<strong>axe des ordonnées</strong>.</li><li>\\(f\\) est <strong>impaire</strong> si \\(D_f\\) est symétrique et \\(f(-x) = -f(x)\\) : sa courbe est symétrique par rapport à l'<strong>origine</strong> du repère.</li><li>\\(f\\) est <strong>périodique</strong> de période \\(T > 0\\) si \\(f(x+T) = f(x)\\) pour tout \\(x \\in D_f\\) (notion reprise en détail avec les fonctions trigonométriques).</li></ul><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Croissante ne veut pas dire positive ! \\(f(x) = x\\) est strictement croissante sur \\(\\mathbb{R}\\) et pourtant \\(f(-5) = -5 &lt; 0\\). \"Croissante\" décrit comment les images évoluent quand \\(x\\) augmente, pas leur signe.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Une fonction impaire n'est pas forcément croissante : \\(f(x) = -x^3\\) est impaire (\\(f(-x) = x^3 = -f(x)\\)) mais elle est strictement <em>décroissante</em> sur \\(\\mathbb{R}\\). Parité et sens de variation sont deux notions indépendantes.</div><h4>Fonctions de référence</h4><ul><li><strong>Fonction affine</strong> \\(f(x) = ax+b\\), définie sur \\(\\mathbb{R}\\) : croissante sur \\(\\mathbb{R}\\) si \\(a>0\\), décroissante si \\(a&lt;0\\), constante si \\(a=0\\).</li><li><strong>Fonction carré</strong> \\(f(x) = x^2\\), définie sur \\(\\mathbb{R}\\) : décroissante sur \\(]-\\infty\\,;0]\\), croissante sur \\([0\\,;+\\infty[\\), minimum global \\(0\\) atteint en \\(x=0\\). Fonction paire.</li><li><strong>Fonction inverse</strong> \\(f(x) = \\dfrac{1}{x}\\), définie sur \\(\\mathbb{R}^* = ]-\\infty\\,;0[\\,\\cup\\,]0\\,;+\\infty[\\) : décroissante sur \\(]-\\infty\\,;0[\\) et décroissante sur \\(]0\\,;+\\infty[\\) (attention : pas décroissante sur \\(\\mathbb{R}^*\\) tout entier, à cause de la coupure en \\(0\\)). Fonction impaire.</li><li><strong>Fonction racine carrée</strong> \\(f(x) = \\sqrt{x}\\), définie sur \\([0\\,;+\\infty[\\) : croissante sur \\([0\\,;+\\infty[\\).</li><li><strong>Fonction valeur absolue</strong> \\(f(x) = |x|\\), définie sur \\(\\mathbb{R}\\) : décroissante sur \\(]-\\infty\\,;0]\\), croissante sur \\([0\\,;+\\infty[\\), minimum global \\(0\\) en \\(x=0\\). Fonction paire.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour comparer \\(f(-3)\\) et \\(f(-1)\\) avec \\(f(x)=x^2\\) : sur \\(]-\\infty\\,;0]\\), \\(f\\) est décroissante et \\(-3 \\leqslant -1\\), donc \\(f(-3) \\geqslant f(-1)\\), c'est-à-dire \\(9 \\geqslant 1\\). On retrouve bien le résultat sans calculer les carrés si besoin.</div><h4>Ensemble de définition d'une fonction construite et comparaison d'images</h4><p>Pour une fonction obtenue en combinant des opérations, on cherche toutes les valeurs de \\(x\\) qui rendent <em>chaque</em> opération possible, puis on prend l'<strong>intersection</strong> de toutes les conditions.</p><ul><li>Quotient \\(\\dfrac{u(x)}{v(x)}\\) : il faut \\(v(x) \\neq 0\\).</li><li>Racine carrée \\(\\sqrt{u(x)}\\) : il faut \\(u(x) \\geqslant 0\\).</li><li>Si plusieurs opérations se combinent (racine ET quotient, par exemple), on impose <strong>toutes</strong> les conditions en même temps.</li></ul><p>Pour <strong>comparer deux images</strong> \\(f(a)\\) et \\(f(b)\\) sans calculer, on identifie un intervalle contenant \\(a\\) et \\(b\\) sur lequel le sens de variation de \\(f\\) est connu, puis on applique la définition : si \\(f\\) est croissante sur cet intervalle, l'ordre de \\(f(a)\\) et \\(f(b)\\) est le même que celui de \\(a\\) et \\(b\\) ; si \\(f\\) est décroissante, l'ordre est <strong>inversé</strong>.</p><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Ensemble de définition de \\(f(x) = \\dfrac{\\sqrt{x+2}}{x-1}\\) : il faut \\(x+2 \\geqslant 0\\) (soit \\(x \\geqslant -2\\)) <em>et</em> \\(x - 1 \\neq 0\\) (soit \\(x \\neq 1\\)). En combinant les deux conditions : \\(D_f = [-2\\,;1[\\,\\cup\\,]1\\,;+\\infty[\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Dans un ensemble de définition avec plusieurs contraintes (racine ET quotient), il ne faut oublier <em>aucune</em> condition : traiter seulement la racine (ou seulement le dénominateur) donne un ensemble trop grand. On vérifie toujours qu'on a bien pris l'intersection de toutes les conditions.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> En comparant des images par une fonction <em>décroissante</em>, l'ordre s'inverse : si \\(0 &lt; a &lt; b\\) et \\(f\\) décroissante sur \\(]0\\,;+\\infty[\\), alors \\(f(a) > f(b)\\) (et non \\(f(a) &lt; f(b)\\)). Bien vérifier le sens de variation avant de conclure.</div>"
 },
 {
  "slug": "derivation-lycee",
  "label": "Dérivation",
  "fiche": "<h4>Nombre dérivé et tangente</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"152.3\" x2=\"360.0\" y2=\"152.3\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,148.3 367.0,152.3 360.0,156.3\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"156.3\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"197.0\" y1=\"190.0\" x2=\"197.0\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"193.0,14.0 197.0,7.0 201.0,14.0\" fill=\"var(--text-muted)\"/><text x=\"203.0\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"48.8\" y1=\"149.3\" x2=\"48.8\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"98.2\" y1=\"149.3\" x2=\"98.2\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"147.6\" y1=\"149.3\" x2=\"147.6\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"246.4\" y1=\"149.3\" x2=\"246.4\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"295.8\" y1=\"149.3\" x2=\"295.8\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"345.2\" y1=\"149.3\" x2=\"345.2\" y2=\"155.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"177.4\" x2=\"200.0\" y2=\"177.4\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"127.1\" x2=\"200.0\" y2=\"127.1\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"102.0\" x2=\"200.0\" y2=\"102.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"76.9\" x2=\"200.0\" y2=\"76.9\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"51.7\" x2=\"200.0\" y2=\"51.7\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"26.6\" x2=\"200.0\" y2=\"26.6\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"186.0\" y=\"165.3\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><path d=\"M 34.0,129.4 L 38.7,120.4 L 43.4,112.0 L 48.2,104.3 L 52.9,97.2 L 57.6,90.6 L 62.3,84.7 L 67.1,79.4 L 71.8,74.5 L 76.5,70.3 L 81.2,66.5 L 86.0,63.2 L 90.7,60.3 L 95.4,58.0 L 100.1,56.0 L 104.9,54.4 L 109.6,53.3 L 114.3,52.5 L 119.0,52.0 L 123.8,51.9 L 128.5,52.0 L 133.2,52.5 L 137.9,53.2 L 142.7,54.2 L 147.4,55.4 L 152.1,56.8 L 156.8,58.4 L 161.6,60.2 L 166.3,62.1 L 171.0,64.2 L 175.7,66.3 L 180.5,68.6 L 185.2,70.9 L 189.9,73.3 L 194.6,75.7 L 199.4,78.1 L 204.1,80.5 L 208.8,82.8 L 213.5,85.1 L 218.3,87.4 L 223.0,89.5 L 227.7,91.6 L 232.4,93.5 L 237.2,95.3 L 241.9,96.9 L 246.6,98.3 L 251.3,99.5 L 256.1,100.5 L 260.8,101.2 L 265.5,101.7 L 270.2,101.8 L 275.0,101.7 L 279.7,101.3 L 284.4,100.5 L 289.1,99.3 L 293.9,97.7 L 298.6,95.8 L 303.3,93.4 L 308.0,90.5 L 312.8,87.2 L 317.5,83.5 L 322.2,79.2 L 326.9,74.4 L 331.7,69.0 L 336.4,63.1 L 341.1,56.6 L 345.8,49.5 L 350.6,41.7 L 355.3,33.3 L 360.0,24.3\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.4\"/><path d=\"M 142.7,69.2 L 350.1,127.3\" fill=\"none\" stroke=\"var(--warning)\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/><path d=\"M 263.7,103.1 L 327.9,103.1 L 327.9,116.2\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><text x=\"289.8\" y=\"118.1\" font-size=\"10\" fill=\"var(--text-muted)\">1</text><text x=\"332.9\" y=\"113.6\" font-size=\"10\" fill=\"var(--text-muted)\">f&#8217;(a)</text><circle cx=\"246.4\" cy=\"98.2\" r=\"4.5\" fill=\"var(--accent)\"/><text x=\"188.4\" y=\"86.2\" font-size=\"11\" fill=\"var(--accent)\" font-weight=\"700\">A(a ; f(a))</text></svg><p class=\"exo-fiche-fig-caption\">La tangente en A a pour coefficient directeur le nombre dérivé f'(a) : c'est la pente de la meilleure approximation affine de la courbe au voisinage de A.</p></div>\n<p>Pour une fonction \\(f\\) définie autour d'un point \\(a\\), le <strong>taux d'accroissement</strong> entre \\(a\\) et \\(a+h\\) (\\(h \\neq 0\\)) est \\(\\dfrac{f(a+h)-f(a)}{h}\\). Intuitivement, quand \\(h\\) devient de plus en plus petit, ce taux se rapproche d'un nombre : c'est le <strong>nombre dérivé</strong> de \\(f\\) en \\(a\\), noté \\(f'(a)\\), à condition qu'il existe.</p>\n<p>Interprétation graphique : \\(f'(a)\\) est le coefficient directeur de la <strong>tangente</strong> à la courbe de \\(f\\) au point d'abscisse \\(a\\).</p>\n<ul>\n<li>Équation de la tangente au point d'abscisse \\(a\\) : \\(y = f'(a)(x-a) + f(a)\\).</li>\n<li>Si \\(f'(a)=0\\), la tangente en \\(a\\) est horizontale.</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(f(x) = x^2 - 3x + 1\\), donc \\(f'(x) = 2x - 3\\). En \\(a = 2\\) : \\(f(2) = 4 - 6 + 1 = -1\\) et \\(f'(2) = 4 - 3 = 1\\). L'équation de la tangente en \\(2\\) est \\(y = 1 \\times (x-2) + (-1) = x - 3\\).</div>\n\n<h4>Dérivées des fonctions usuelles</h4>\n<ul>\n<li>\\(f(x) = k\\) (constante) : \\(f'(x) = 0\\)</li>\n<li>\\(f(x) = ax + b\\) (fonction affine) : \\(f'(x) = a\\) (en particulier \\(f(x)=x \\Rightarrow f'(x)=1\\))</li>\n<li>\\(f(x) = x^n\\) (\\(n\\) entier, \\(n \\geq 1\\)) : \\(f'(x) = n x^{n-1}\\)</li>\n<li>\\(f(x) = \\dfrac{1}{x}\\) (sur \\(]-\\infty;0[\\) ou \\(]0;+\\infty[\\)) : \\(f'(x) = -\\dfrac{1}{x^2}\\)</li>\n<li>\\(f(x) = \\sqrt{x}\\) (sur \\(]0;+\\infty[\\)) : \\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\)</li>\n<li>\\(f(x) = e^x\\) : \\(f'(x) = e^x\\)</li>\n</ul>\n\n<h4>Opérations sur les dérivées</h4>\n<ul>\n<li>Somme : \\((u+v)' = u' + v'\\) ; produit par une constante : \\((ku)' = k u'\\)</li>\n<li>Produit : \\((uv)' = u'v + uv'\\)</li>\n<li>Quotient (là où \\(v \\neq 0\\)) : \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}\\)</li>\n<li>Composée simple \\(x \\mapsto u(ax+b)\\) : dérivée \\(= a \\times u'(ax+b)\\) — ne pas oublier de multiplier par \\(a\\), la dérivée de l'intérieur.</li>\n<li>Composée \\(x \\mapsto e^{u(x)}\\) : dérivée \\(= u'(x)\\, e^{u(x)}\\).</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(f(x) = \\dfrac{2x+1}{x-3}\\) sur \\(]3;+\\infty[\\). Avec \\(u = 2x+1\\), \\(u'=2\\) et \\(v = x-3\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{2(x-3) - (2x+1)\\times 1}{(x-3)^2} = \\dfrac{2x-6-2x-1}{(x-3)^2} = \\dfrac{-7}{(x-3)^2}\\).</div>\n\n<h4>Signe de la dérivée, variations et extremums</h4>\n<ul>\n<li>Si \\(f' > 0\\) sur un intervalle, \\(f\\) y est strictement croissante.</li>\n<li>Si \\(f' &lt; 0\\) sur un intervalle, \\(f\\) y est strictement décroissante.</li>\n<li>Si \\(f' = 0\\) sur un intervalle, \\(f\\) y est constante.</li>\n<li>\\(f\\) admet un extremum local en \\(a\\) si \\(f'(a) = 0\\) <strong>et</strong> si \\(f'\\) change de signe en \\(a\\) (croissante puis décroissante, ou l'inverse).</li>\n</ul>\n\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Dans la formule du quotient, l'ordre compte : le numérateur est \\(u'v - uv'\\), pas \\(uv' - u'v\\). Une inversion change le signe de tout le résultat.</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Pour dériver \\((3x+1)^2\\), écrire seulement \\(2(3x+1)\\) est faux : il faut aussi multiplier par la dérivée de l'intérieur \\(3x+1\\), qui vaut \\(3\\). La bonne dérivée est \\(2 \\times 3 \\times (3x+1) = 6(3x+1)\\).</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\(f'(a) = 0\\) ne suffit pas pour conclure qu'il y a un extremum local en \\(a\\) : il faut que \\(f'\\) change réellement de signe. Par exemple pour \\(f(x)=x^3\\), \\(f'(0)=0\\) mais \\(f'(x)=3x^2 \\geq 0\\) partout, donc pas de changement de signe et pas d'extremum en \\(0\\).</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Dans l'équation de la tangente \\(y = f'(a)(x-a) + f(a)\\), ne pas confondre \\(f(a)\\) (l'ordonnée du point de la courbe) et \\(f'(a)\\) (le coefficient directeur de la tangente) : les intervertir donne une droite qui ne correspond à rien.</div>"
 },
 {
  "slug": "etude-fonctions",
  "label": "Étude de fonctions",
  "fiche": "<h4>Ensemble de définition</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"107.2\" x2=\"360.0\" y2=\"107.2\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,103.2 367.0,107.2 360.0,111.2\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"111.2\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"197.0\" y1=\"190.0\" x2=\"197.0\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"193.0,14.0 197.0,7.0 201.0,14.0\" fill=\"var(--text-muted)\"/><text x=\"203.0\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"61.2\" y1=\"104.2\" x2=\"61.2\" y2=\"110.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"129.1\" y1=\"104.2\" x2=\"129.1\" y2=\"110.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"264.9\" y1=\"104.2\" x2=\"264.9\" y2=\"110.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"332.8\" y1=\"104.2\" x2=\"332.8\" y2=\"110.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"158.9\" x2=\"200.0\" y2=\"158.9\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"194.0\" y1=\"55.4\" x2=\"200.0\" y2=\"55.4\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"186.0\" y=\"120.2\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><path d=\"M 34.0,221.5 L 37.3,209.9 L 40.6,198.8 L 43.8,188.3 L 47.1,178.4 L 50.4,169.0 L 53.7,160.1 L 57.0,151.7 L 60.2,143.8 L 63.5,136.5 L 66.8,129.5 L 70.1,123.1 L 73.3,117.1 L 76.6,111.5 L 79.9,106.4 L 83.2,101.6 L 86.5,97.3 L 89.7,93.4 L 93.0,89.8 L 96.3,86.7 L 99.6,83.9 L 102.9,81.4 L 106.1,79.2 L 109.4,77.4 L 112.7,75.9 L 116.0,74.7 L 119.2,73.8 L 122.5,73.2 L 125.8,72.8 L 129.1,72.7\" fill=\"none\" stroke=\"var(--success)\" stroke-width=\"2.6\"/><path d=\"M 129.1,72.7 L 133.8,72.9 L 138.5,73.6 L 143.1,74.7 L 147.8,76.2 L 152.5,78.1 L 157.2,80.3 L 161.9,82.8 L 166.6,85.5 L 171.2,88.5 L 175.9,91.6 L 180.6,94.9 L 185.3,98.3 L 190.0,101.8 L 194.7,105.4 L 199.3,109.0 L 204.0,112.5 L 208.7,116.0 L 213.4,119.4 L 218.1,122.7 L 222.8,125.9 L 227.4,128.8 L 232.1,131.6 L 236.8,134.0 L 241.5,136.2 L 246.2,138.1 L 250.9,139.6 L 255.5,140.7 L 260.2,141.4 L 264.9,141.7\" fill=\"none\" stroke=\"var(--warning)\" stroke-width=\"2.6\"/><path d=\"M 264.9,141.7 L 268.2,141.6 L 271.5,141.2 L 274.8,140.5 L 278.0,139.6 L 281.3,138.4 L 284.6,136.9 L 287.9,135.1 L 291.1,133.0 L 294.4,130.5 L 297.7,127.7 L 301.0,124.5 L 304.3,121.0 L 307.5,117.0 L 310.8,112.7 L 314.1,108.0 L 317.4,102.9 L 320.7,97.3 L 323.9,91.3 L 327.2,84.8 L 330.5,77.9 L 333.8,70.5 L 337.0,62.6 L 340.3,54.2 L 343.6,45.4 L 346.9,36.0 L 350.2,26.0 L 353.4,15.5 L 356.7,4.5 L 360.0,-7.1\" fill=\"none\" stroke=\"var(--success)\" stroke-width=\"2.6\"/><circle cx=\"129.1\" cy=\"72.7\" r=\"4.5\" fill=\"var(--accent)\"/><line x1=\"129.1\" y1=\"72.7\" x2=\"129.1\" y2=\"107.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><circle cx=\"264.9\" cy=\"141.7\" r=\"4.5\" fill=\"var(--accent)\"/><line x1=\"264.9\" y1=\"141.7\" x2=\"264.9\" y2=\"107.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><text x=\"95.1\" y=\"64.7\" font-size=\"10\" fill=\"var(--accent)\" font-weight=\"700\">max local</text><text x=\"270.9\" y=\"157.7\" font-size=\"10\" fill=\"var(--accent)\" font-weight=\"700\">min local</text><text x=\"51.0\" y=\"153.8\" font-size=\"10\" fill=\"var(--success)\" font-weight=\"700\">croissante</text><text x=\"159.6\" y=\"177.1\" font-size=\"10\" fill=\"var(--warning)\" font-weight=\"700\">décroissante</text><text x=\"288.7\" y=\"26.9\" font-size=\"10\" fill=\"var(--success)\" font-weight=\"700\">croissante</text></svg><p class=\"exo-fiche-fig-caption\">Lecture des variations sur la courbe de f(x) = x³/3 − x : croissante, puis décroissante entre les deux extremums locaux, puis croissante à nouveau.</p></div>\n<p>Avant toute étude, il faut déterminer le plus grand ensemble \\(D_f\\) sur lequel l'expression de \\(f(x)\\) a un sens.</p>\n<ul>\n<li>Fonction polynôme : définie sur \\(\\mathbb{R}\\).</li>\n<li>Fonction rationnelle (quotient de polynômes) : on exclut les valeurs qui annulent le dénominateur.</li>\n<li>Fonction avec une racine carrée \\(\\sqrt{u(x)}\\) : il faut \\(u(x) \\geqslant 0\\).</li>\n<li>Fonction avec une exponentielle \\(e^{u(x)}\\) : définie partout où \\(u(x)\\) est définie (l'exponentielle ne rajoute jamais de condition).</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(f(x) = \\dfrac{\\sqrt{3-2x}}{x+1}\\). Il faut \\(3-2x \\geqslant 0\\), soit \\(x \\leqslant \\dfrac{3}{2}\\), et \\(x+1 \\neq 0\\), soit \\(x \\neq -1\\). Donc \\(D_f = \\;]-\\infty ; -1[\\, \\cup \\,]-1 ; \\dfrac{3}{2}]\\).</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Quand plusieurs conditions se cumulent (racine ET dénominateur, par exemple), il faut les vérifier toutes les deux et prendre l'intersection des ensembles obtenus : oublier l'une des deux conditions est l'erreur la plus fréquente.</div>\n\n<h4>Limites aux bornes et asymptotes</h4>\n<p>On étudie la limite de \\(f\\) à chaque borne (ouverte) de \\(D_f\\) : en \\(+\\infty\\), en \\(-\\infty\\), et en tout réel exclu de \\(D_f\\).</p>\n<ul>\n<li>Asymptote verticale d'équation \\(x = a\\) : si \\(\\displaystyle\\lim_{x \\to a} f(x) = +\\infty\\) ou \\(-\\infty\\) (à gauche et/ou à droite de \\(a\\)).</li>\n<li>Asymptote horizontale d'équation \\(y = b\\) : si \\(\\displaystyle\\lim_{x \\to +\\infty} f(x) = b\\) ou \\(\\displaystyle\\lim_{x \\to -\\infty} f(x) = b\\) (les deux limites peuvent différer, ou n'exister que d'un seul côté).</li>\n<li>Si la limite en \\(+\\infty\\) (ou en \\(-\\infty\\)) est infinie, il n'y a pas d'asymptote horizontale de ce côté (on ne s'intéresse pas ici aux éventuelles asymptotes obliques, hors programme de cette fiche).</li>\n<li>Pour une fonction rationnelle, la limite en \\(\\pm\\infty\\) est celle du quotient des termes de plus haut degré du numérateur et du dénominateur.</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(f(x) = \\dfrac{2x+1}{x-3}\\), \\(D_f = \\mathbb{R}\\setminus\\{3\\}\\). En \\(x=3\\), le numérateur tend vers \\(7 \\neq 0\\) et le dénominateur vers \\(0\\) : \\(f(x) \\to \\pm\\infty\\), donc la droite d'équation \\(x=3\\) est asymptote verticale. En \\(\\pm\\infty\\), \\(f(x)\\) se comporte comme \\(\\dfrac{2x}{x} = 2\\), donc \\(\\displaystyle\\lim_{x\\to\\pm\\infty} f(x) = 2\\) : la droite d'équation \\(y=2\\) est asymptote horizontale, des deux côtés.</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Si le numérateur ET le dénominateur s'annulent au même point (forme \\(\\frac{0}{0}\\)), il n'y a pas forcément d'asymptote verticale : il faut d'abord factoriser et simplifier. Par exemple pour \\(g(x)=\\dfrac{x^2-1}{x-1}\\), on a \\(g(x) = x+1\\) pour \\(x\\neq 1\\) : la limite en \\(1\\) vaut \\(2\\) (limite finie), il n'y a pas d'asymptote verticale en \\(x=1\\).</div>\n\n<h4>Dérivée et signe de la dérivée</h4>\n<p>On calcule \\(f'(x)\\), puis on étudie son signe sur chaque intervalle de \\(D_f\\) pour en déduire les variations de \\(f\\).</p>\n<ul>\n<li>Si \\(f'(x) > 0\\) sur un intervalle \\(I\\), alors \\(f\\) est strictement croissante sur \\(I\\).</li>\n<li>Si \\(f'(x) &lt; 0\\) sur un intervalle \\(I\\), alors \\(f\\) est strictement décroissante sur \\(I\\).</li>\n<li>Quotient : \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}\\) ; comme \\(v^2 > 0\\), seul le signe du numérateur \\(u'v-uv'\\) compte.</li>\n<li>Racine : \\(\\left(\\sqrt{u}\\right)' = \\dfrac{u'}{2\\sqrt{u}}\\) : le signe de la dérivée est celui de \\(u'\\), car \\(2\\sqrt{u} > 0\\).</li>\n<li>Exponentielle : \\(\\left(e^{u}\\right)' = u' \\, e^{u}\\) : le signe de la dérivée est celui de \\(u'\\), car \\(e^{u} > 0\\) toujours.</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(f(x) = x^3 - 3x\\) sur \\(\\mathbb{R}\\) : \\(f'(x) = 3x^2 - 3 = 3(x-1)(x+1)\\). \\(f'(x) > 0\\) pour \\(x \\in\\, ]-\\infty;-1[ \\,\\cup\\, ]1;+\\infty[\\), \\(f'(x) &lt; 0\\) pour \\(x \\in \\,]-1;1[\\), \\(f'(x)=0\\) en \\(x=-1\\) et \\(x=1\\).</div>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(f(x) = x\\,e^{-x}\\) sur \\(\\mathbb{R}\\) : \\(f'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = (1-x)e^{-x}\\). Comme \\(e^{-x} > 0\\) toujours, le signe de \\(f'\\) est celui de \\((1-x)\\) : \\(f'(x) > 0\\) pour \\(x &lt; 1\\), \\(f'(x) &lt; 0\\) pour \\(x > 1\\).</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Dans la dérivée d'un quotient, ne pas oublier le signe \\(-\\) devant \\(uv'\\) : \\(\\left(\\dfrac{u}{v}\\right)' \\neq \\dfrac{u'}{v'}\\) et \\(\\left(\\dfrac{u}{v}\\right)' \\neq \\dfrac{u'v+uv'}{v^2}\\) (c'est la formule du produit qu'il ne faut pas confondre).</div>\n\n<h4>Tableau de variations et extremums locaux</h4>\n<p>Le tableau de variations résume, avec des flèches, le sens de variation de \\(f\\) sur chaque intervalle, avec les valeurs de \\(f\\) aux bornes et aux points où \\(f'\\) s'annule.</p>\n<ul>\n<li>Un extremum local apparaît en \\(x_0\\) lorsque \\(f'(x_0)=0\\) ET que \\(f'\\) change de signe en \\(x_0\\) : maximum local si \\(f'\\) passe de \\(+\\) à \\(-\\) (courbe ↗ puis ↘), minimum local si \\(f'\\) passe de \\(-\\) à \\(+\\) (courbe ↘ puis ↗).</li>\n<li>Si \\(f'(x_0)=0\\) mais que \\(f'\\) garde le même signe autour de \\(x_0\\), il n'y a pas d'extremum : la tangente est horizontale un instant mais \\(f\\) continue de varier dans le même sens.</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(f(x) = x^3-3x\\) : \\(f(-1) = -1+3 = 2\\) et \\(f(1) = 1 - 3 = -2\\). \\(f'\\) passe de \\(+\\) à \\(-\\) en \\(x=-1\\) : maximum local \\(f(-1)=2\\). \\(f'\\) passe de \\(-\\) à \\(+\\) en \\(x=1\\) : minimum local \\(f(1)=-2\\). Variations : \\(f\\) ↗ sur \\(]-\\infty;-1]\\) (de \\(-\\infty\\) à \\(2\\)), ↘ sur \\([-1;1]\\) (de \\(2\\) à \\(-2\\)), ↗ sur \\([1;+\\infty[\\) (de \\(-2\\) à \\(+\\infty\\)).</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\(f'(x_0)=0\\) n'entraîne pas automatiquement un extremum local : pour \\(f(x)=x^3\\), \\(f'(x)=3x^2 \\geqslant 0\\) s'annule en \\(0\\) mais reste positif de part et d'autre (ne change pas de signe), donc \\(f\\) est strictement croissante sur \\(\\mathbb{R}\\) et \\(0\\) n'est pas un extremum.</div>\n\n<h4>Allure de la courbe et lecture d'un tableau de variations</h4>\n<p>Le tableau de variations permet de tracer l'allure de la courbe (montées/descentes, extremums, asymptotes en pointillés), mais aussi, à l'inverse, de répondre à des questions à partir d'un tableau donné, sans connaître l'expression de \\(f\\).</p>\n<ul>\n<li>Si \\(f\\) est continue et strictement monotone sur un intervalle \\([\\alpha;\\beta]\\), alors pour tout réel \\(k\\) compris entre \\(f(\\alpha)\\) et \\(f(\\beta)\\), l'équation \\(f(x)=k\\) admet une unique solution dans \\([\\alpha;\\beta]\\) (théorème des valeurs intermédiaires appliqué au cas monotone).</li>\n<li>Pour compter le nombre de solutions de \\(f(x)=k\\) sur un ensemble découpé en plusieurs intervalles de monotonie, on raisonne intervalle par intervalle, puis on additionne.</li>\n</ul>\n<div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Un tableau de variations donne : \\(f\\) décroissante de \\(5\\) à \\(-3\\) sur \\([0;4]\\), puis croissante de \\(-3\\) à \\(2\\) sur \\([4;7]\\), \\(f\\) continue. Combien de solutions a l'équation \\(f(x)=0\\) sur \\([0;7]\\) ? Sur \\([0;4]\\), \\(0\\) est compris entre \\(-3\\) et \\(5\\) : une solution. Sur \\([4;7]\\), \\(0\\) est compris entre \\(-3\\) et \\(2\\) : une solution. Au total, \\(2\\) solutions.</div>\n<div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Si la valeur \\(k\\) est atteinte exactement à la jonction entre deux intervalles (ici en \\(x=4\\)), il ne faut la compter qu'une seule fois, pas deux.</div>"
 },
 {
  "slug": "suites-lycee",
  "label": "Suites numériques",
  "fiche": "<h4>Définir une suite, étudier son sens de variation</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"190.0\" x2=\"360.0\" y2=\"190.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,186.0 367.0,190.0 360.0,194.0\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"194.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">n</text><line x1=\"53.2\" y1=\"190.0\" x2=\"53.2\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"49.2,14.0 53.2,7.0 57.2,14.0\" fill=\"var(--text-muted)\"/><text x=\"59.2\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">u_n</text><line x1=\"85.1\" y1=\"187.0\" x2=\"85.1\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"117.1\" y1=\"187.0\" x2=\"117.1\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"149.1\" y1=\"187.0\" x2=\"149.1\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"181.0\" y1=\"187.0\" x2=\"181.0\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"213.0\" y1=\"187.0\" x2=\"213.0\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"244.9\" y1=\"187.0\" x2=\"244.9\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"276.9\" y1=\"187.0\" x2=\"276.9\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"308.9\" y1=\"187.0\" x2=\"308.9\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"340.8\" y1=\"187.0\" x2=\"340.8\" y2=\"193.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.2\" y1=\"160.7\" x2=\"56.2\" y2=\"160.7\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.2\" y1=\"131.3\" x2=\"56.2\" y2=\"131.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.2\" y1=\"102.0\" x2=\"56.2\" y2=\"102.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.2\" y1=\"72.7\" x2=\"56.2\" y2=\"72.7\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"50.2\" y1=\"43.3\" x2=\"56.2\" y2=\"43.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"42.2\" y=\"203.0\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><line x1=\"53.2\" y1=\"43.3\" x2=\"360.0\" y2=\"43.3\" stroke=\"var(--accent)\" stroke-width=\"1.2\" stroke-dasharray=\"5,3\"/><text x=\"326.0\" y=\"37.3\" font-size=\"11\" fill=\"var(--accent)\" font-weight=\"700\">limite &#8467; = 5</text><line x1=\"53.2\" y1=\"190.0\" x2=\"53.2\" y2=\"160.7\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"53.2\" cy=\"160.7\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"85.1\" y1=\"190.0\" x2=\"85.1\" y2=\"102.0\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"85.1\" cy=\"102.0\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"117.1\" y1=\"190.0\" x2=\"117.1\" y2=\"82.4\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"117.1\" cy=\"82.4\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"149.1\" y1=\"190.0\" x2=\"149.1\" y2=\"72.7\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"149.1\" cy=\"72.7\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"181.0\" y1=\"190.0\" x2=\"181.0\" y2=\"66.8\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"181.0\" cy=\"66.8\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"213.0\" y1=\"190.0\" x2=\"213.0\" y2=\"62.9\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"213.0\" cy=\"62.9\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"244.9\" y1=\"190.0\" x2=\"244.9\" y2=\"60.1\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"244.9\" cy=\"60.1\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"276.9\" y1=\"190.0\" x2=\"276.9\" y2=\"58.0\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"276.9\" cy=\"58.0\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"308.9\" y1=\"190.0\" x2=\"308.9\" y2=\"56.4\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"308.9\" cy=\"56.4\" r=\"4\" fill=\"var(--primary)\"/><line x1=\"340.8\" y1=\"190.0\" x2=\"340.8\" y2=\"55.1\" stroke=\"var(--border)\" stroke-width=\"1\"/><circle cx=\"340.8\" cy=\"55.1\" r=\"4\" fill=\"var(--primary)\"/><text x=\"53.2\" y=\"150.7\" font-size=\"10\" fill=\"var(--text-muted)\">u&#8320;</text></svg><p class=\"exo-fiche-fig-caption\">Premiers termes d'une suite (uₙ) croissante et convergente vers sa limite ℓ = 5 (asymptote horizontale).</p></div><p>Une suite numérique \\((u_n)\\) associe à chaque entier \\(n\\) (à partir d'un certain rang, souvent \\(0\\) ou \\(1\\)) un réel \\(u_n\\).</p><ul><li><strong>Définition explicite</strong> : \\(u_n = f(n)\\) pour tout \\(n\\). On calcule directement n'importe quel terme sans connaître les précédents.</li><li><strong>Définition par récurrence</strong> : \\(u_0\\) est donné et \\(u_{n+1} = f(u_n)\\) pour tout \\(n\\). Chaque terme se déduit du précédent ; on ne peut pas sauter directement à \\(u_{50}\\) sans calculer les termes intermédiaires.</li><li><strong>Sens de variation (méthode de la différence)</strong> : on étudie le signe de \\(u_{n+1}-u_n\\). Si \\(u_{n+1}-u_n \\geq 0\\) pour tout \\(n\\), \\((u_n)\\) est croissante (strictement si \\(>0\\)) ; si \\(\\leq 0\\), décroissante (strictement si \\(&lt;0\\)).</li><li><strong>Sens de variation (méthode du quotient)</strong> : si \\((u_n)\\) est à termes strictement positifs, on peut comparer \\(\\dfrac{u_{n+1}}{u_n}\\) à \\(1\\) : si \\(\\dfrac{u_{n+1}}{u_n} \\geq 1\\), la suite est croissante ; si \\(\\dfrac{u_{n+1}}{u_n} \\leq 1\\), elle est décroissante.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(u_n = \\dfrac{n}{n+1}\\) pour \\(n \\geq 0\\) (termes strictement positifs pour \\(n\\geq 1\\), et \\(u_0=0\\)). Différence : \\(u_{n+1}-u_n = \\dfrac{n+1}{n+2}-\\dfrac{n}{n+1} = \\dfrac{(n+1)^2-n(n+2)}{(n+1)(n+2)} = \\dfrac{1}{(n+1)(n+2)} > 0\\), donc \\((u_n)\\) est strictement croissante. On peut aussi vérifier par le quotient pour \\(n\\geq 1\\) : \\(\\dfrac{u_{n+1}}{u_n} = \\dfrac{(n+1)^2}{n(n+2)} > 1\\) car \\((n+1)^2 = n(n+2)+1\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Une suite définie par récurrence \\(u_{n+1}=f(u_n)\\) n'est arithmétique ou géométrique QUE si \\(f\\) est de la forme particulière \\(f(x)=x+r\\) (arithmétique) ou \\(f(x)=qx\\) (géométrique). Pour \\(u_{n+1}=\\sqrt{u_n+2}\\) ou \\(u_{n+1}=u_n^2\\) par exemple, la suite n'est ni arithmétique ni géométrique : il faut étudier son sens de variation, sa majoration/minoration, etc. (outils qui seront formalisés en Analyse I).</div><h4>Suites arithmétiques</h4><p>\\((u_n)\\) est arithmétique de raison \\(r\\) si, pour tout \\(n\\) (à partir du rang de départ), \\(u_{n+1}=u_n+r\\) (on ajoute toujours la même quantité).</p><ul><li>Terme général (départ à l'indice \\(0\\)) : \\(u_n = u_0 + n r\\). Plus généralement, entre deux rangs \\(p\\) et \\(n\\) : \\(u_n = u_p + (n-p) r\\).</li><li>Somme des \\(n+1\\) premiers termes \\(u_0+u_1+\\dots+u_n\\) : \\[S = (n+1)\\times\\dfrac{u_0+u_n}{2} = \\text{(nombre de termes)} \\times \\dfrac{\\text{premier terme}+\\text{dernier terme}}{2}.\\]</li><li>Sens de variation : croissante si \\(r>0\\), décroissante si \\(r&lt;0\\), constante si \\(r=0\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(u_0=5\\), raison \\(r=3\\). Alors \\(u_n = 5+3n\\), donc \\(u_{10}=5+30=35\\). La somme des \\(11\\) premiers termes (indices \\(0\\) à \\(10\\)) vaut \\(S = 11 \\times \\dfrac{5+35}{2} = 11\\times 20 = 220\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Le rang de départ compte ! Si le premier terme donné est \\(u_1\\) (et non \\(u_0\\)), la formule devient \\(u_n = u_1+(n-1)r\\), et la somme des \\(n\\) premiers termes \\(u_1+\\dots+u_n\\) vaut \\(n \\times \\dfrac{u_1+u_n}{2}\\) (avec \\(n\\) termes, pas \\(n+1\\)). Il ne faut pas appliquer machinalement « \\(u_0+nr\\) » ou « \\((n+1)\\times\\dots\\) » sans vérifier à quel indice commence réellement la suite.</div><h4>Suites géométriques</h4><p>\\((u_n)\\) est géométrique de raison \\(q\\) (avec \\(u_0\\neq0\\) et \\(q\\neq0\\)) si, pour tout \\(n\\), \\(u_{n+1}=q\\,u_n\\) (on multiplie toujours par la même quantité).</p><ul><li>Terme général (départ à l'indice \\(0\\)) : \\(u_n = u_0\\,q^n\\).</li><li>Somme des \\(n+1\\) premiers termes, <strong>si \\(q\\neq 1\\)</strong> : \\[S = u_0\\times\\dfrac{1-q^{n+1}}{1-q}.\\] Si \\(q=1\\), la suite est constante et \\(S=(n+1)u_0\\) directement (la formule précédente n'a pas de sens, division par \\(0\\)).</li><li>Comportement pour \\(u_0\\neq0\\) : si \\(|q|&lt;1\\), \\(u_n \\to 0\\) (la suite converge) ; si \\(q>1\\), \\((u_n)\\) diverge (tend vers \\(+\\infty\\) si \\(u_0>0\\), vers \\(-\\infty\\) si \\(u_0&lt;0\\)) ; si \\(q=1\\), suite constante ; si \\(q\\leq -1\\), la suite diverge (les termes oscillent en signe et ne se rapprochent d'aucune limite).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(u_0=2\\), raison \\(q=3\\). Les termes sont \\(2,6,18,54,162,\\dots\\) donc \\(u_4=162\\). La somme des \\(5\\) premiers termes (indices \\(0\\) à \\(4\\)) vaut \\(S = 2\\times\\dfrac{1-3^5}{1-3} = 2\\times\\dfrac{1-243}{-2} = 2\\times 121 = 242\\), ce qui correspond bien à \\(2+6+18+54+162=242\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Ne jamais utiliser \\(S = u_0\\dfrac{1-q^{n+1}}{1-q}\\) sans vérifier \\(q\\neq 1\\) : pour \\(q=1\\) on divise par \\(0\\), la formule est fausse (il faut alors utiliser \\(S=(n+1)u_0\\)).</div><h4>Raisonnement par récurrence</h4><p>Pour démontrer qu'une propriété \\(P(n)\\) est vraie pour tout entier \\(n \\geq n_0\\), on procède en trois étapes.</p><ul><li><strong>Initialisation</strong> : on vérifie que \\(P(n_0)\\) est vraie (au premier rang concerné).</li><li><strong>Hérédité</strong> : on suppose \\(P(n)\\) vraie pour un entier \\(n\\geq n_0\\) fixé quelconque (c'est l'<em>hypothèse de récurrence</em>, HR), et on démontre, <strong>à partir de cette hypothèse</strong>, que \\(P(n+1)\\) est vraie.</li><li><strong>Conclusion</strong> : par le principe de récurrence, \\(P(n)\\) est vraie pour tout \\(n\\geq n_0\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(u_0=0\\) et \\(u_{n+1}=\\sqrt{u_n+2}\\). Montrons par récurrence que pour tout \\(n\\), \\(u_n \\leq 2\\).<br>Initialisation : \\(u_0=0\\leq 2\\), vrai.<br>Hérédité : on suppose \\(u_n\\leq 2\\) (HR). Alors \\(u_n+2\\leq 4\\), et comme la fonction racine carrée est croissante, \\(\\sqrt{u_n+2}\\leq\\sqrt{4}=2\\), c'est-à-dire \\(u_{n+1}\\leq 2\\).<br>Conclusion : pour tout \\(n\\), \\(u_n\\leq 2\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Dans l'hérédité, on doit partir de l'hypothèse de récurrence (\\(P(n)\\) vraie) et en déduire \\(P(n+1)\\) par une chaîne d'implications. Une rédaction fausse et fréquente consiste à supposer directement la conclusion (« supposons \\(u_{n+1}\\leq 2\\), alors... donc \\(u_n\\leq 2\\) ») : c'est un raisonnement circulaire qui ne prouve rien, car on utilise ce qu'on cherche à démontrer au lieu de l'hypothèse sur le rang \\(n\\).</div>"
 },
 {
  "slug": "exp-log-trigo",
  "label": "Exponentielle, logarithme & trigonométrie",
  "fiche": "<h4>Fonction exponentielle</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"131.3\" x2=\"360.0\" y2=\"131.3\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,127.3 367.0,131.3 360.0,135.3\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"135.3\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"142.7\" y1=\"190.0\" x2=\"142.7\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"138.7,14.0 142.7,7.0 146.7,14.0\" fill=\"var(--text-muted)\"/><text x=\"148.7\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"59.1\" y1=\"128.3\" x2=\"59.1\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"100.9\" y1=\"128.3\" x2=\"100.9\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"184.5\" y1=\"128.3\" x2=\"184.5\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"226.3\" y1=\"128.3\" x2=\"226.3\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"268.1\" y1=\"128.3\" x2=\"268.1\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"309.8\" y1=\"128.3\" x2=\"309.8\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"351.6\" y1=\"128.3\" x2=\"351.6\" y2=\"134.3\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"176.5\" x2=\"145.7\" y2=\"176.5\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"153.9\" x2=\"145.7\" y2=\"153.9\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"108.8\" x2=\"145.7\" y2=\"108.8\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"86.2\" x2=\"145.7\" y2=\"86.2\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"63.6\" x2=\"145.7\" y2=\"63.6\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"41.1\" x2=\"145.7\" y2=\"41.1\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"139.7\" y1=\"18.5\" x2=\"145.7\" y2=\"18.5\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"131.7\" y=\"144.3\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><path d=\"M 34.0,190.0 L 360.0,14.0\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><path d=\"M 38.2,129.5 L 41.7,129.3 L 45.2,129.1 L 48.7,128.9 L 52.2,128.7 L 55.8,128.5 L 59.3,128.3 L 62.8,128.0 L 66.3,127.7 L 69.8,127.4 L 73.3,127.0 L 76.8,126.7 L 80.3,126.3 L 83.9,125.8 L 87.4,125.3 L 90.9,124.8 L 94.4,124.2 L 97.9,123.6 L 101.4,122.9 L 104.9,122.2 L 108.5,121.4 L 112.0,120.5 L 115.5,119.6 L 119.0,118.5 L 122.5,117.4 L 126.0,116.2 L 129.5,114.8 L 133.1,113.4 L 136.6,111.8 L 140.1,110.1 L 143.6,108.3 L 147.1,106.2 L 150.6,104.0 L 154.1,101.6 L 157.7,99.0 L 161.2,96.2 L 164.7,93.1 L 168.2,89.8 L 171.7,86.1 L 175.2,82.2 L 178.7,77.8 L 182.3,73.1 L 185.8,68.0 L 189.3,62.5 L 192.8,56.4 L 196.3,49.9 L 199.8,42.7 L 203.3,35.0 L 206.9,26.5 L 210.4,17.3\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.4\"/><path d=\"M 143.9,210.5 L 148.2,177.1 L 152.4,164.2 L 156.6,156.1 L 160.9,150.1 L 165.1,145.4 L 169.4,141.5 L 173.6,138.1 L 177.8,135.2 L 182.1,132.7 L 186.3,130.4 L 190.6,128.3 L 194.8,126.3 L 199.0,124.6 L 203.3,122.9 L 207.5,121.4 L 211.7,120.0 L 216.0,118.7 L 220.2,117.4 L 224.5,116.2 L 228.7,115.0 L 232.9,114.0 L 237.2,112.9 L 241.4,111.9 L 245.7,111.0 L 249.9,110.1 L 254.1,109.2 L 258.4,108.4 L 262.6,107.5 L 266.9,106.8 L 271.1,106.0 L 275.3,105.3 L 279.6,104.6 L 283.8,103.9 L 288.1,103.2 L 292.3,102.6 L 296.5,101.9 L 300.8,101.3 L 305.0,100.7 L 309.2,100.1 L 313.5,99.6 L 317.7,99.0 L 322.0,98.5 L 326.2,97.9 L 330.4,97.4 L 334.7,96.9 L 338.9,96.4 L 343.2,96.0 L 347.4,95.5 L 351.6,95.0\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.4\"/><text x=\"188.6\" y=\"57.5\" font-size=\"11\" fill=\"var(--primary)\" font-weight=\"700\">exp(x)</text><text x=\"293.1\" y=\"94.4\" font-size=\"11\" fill=\"var(--accent)\" font-weight=\"700\">ln(x)</text><text x=\"326.6\" y=\"39.9\" font-size=\"10\" fill=\"var(--text-muted)\" font-style=\"italic\">y = x</text></svg><p class=\"exo-fiche-fig-caption\">Courbes de exp et de ln, symétriques par rapport à la droite d'équation y = x (fonctions réciproques l'une de l'autre).</p></div><p>La fonction exponentielle \\( x \\mapsto e^x \\) est définie sur \\( \\mathbb{R} \\), avec \\( e^0=1 \\) et \\( e^1=e\\approx 2{,}718 \\).</p><ul><li>Toujours strictement positive : \\( e^x>0 \\) pour tout \\( x\\in\\mathbb{R} \\) (jamais nulle, jamais négative).</li><li>Strictement croissante sur \\( \\mathbb{R} \\).</li><li>Limites : \\( \\displaystyle\\lim_{x\\to+\\infty} e^x=+\\infty \\) et \\( \\displaystyle\\lim_{x\\to-\\infty} e^x=0 \\).</li><li>Propriétés algébriques : \\( e^{a+b}=e^a\\times e^b \\) ; \\( e^{-a}=\\dfrac{1}{e^a} \\) ; \\( e^{a-b}=\\dfrac{e^a}{e^b} \\) ; \\( (e^a)^n=e^{na} \\).</li><li>Dérivée : \\( (e^x)'=e^x \\). Règle pratique pour une fonction composée : \\( (e^{u(x)})'=u'(x)\\,e^{u(x)} \\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Simplifier \\( A=\\dfrac{e^3\\times e^{-5}}{e^{-2}} \\). On additionne/soustrait les exposants : \\( A=e^{3-5-(-2)}=e^{3-5+2}=e^0=1 \\). Donc \\( A=1 \\).</div><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Dériver \\( f(x)=e^{3x-1} \\). Ici \\( u(x)=3x-1 \\) donc \\( u'(x)=3 \\), d'où \\( f'(x)=3\\,e^{3x-1} \\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> En dérivant \\( e^{-x} \\) ou \\( e^{-x^2} \\), ne pas oublier le facteur venant de la dérivée de l'exposant : \\( (e^{-x})'=-e^{-x} \\) (et non \\( e^{-x} \\)), et \\( (e^{-x^2})'=-2x\\,e^{-x^2} \\) (facteur \\( -2x \\), pas seulement \\( -x \\) ni sans signe).</div><h4>Fonction logarithme népérien</h4><p>La fonction \\( \\ln \\) est définie uniquement sur \\( ]0,+\\infty[ \\). C'est la réciproque de l'exponentielle : \\( \\ln(e^x)=x \\) pour tout \\( x\\in\\mathbb{R} \\), et \\( e^{\\ln x}=x \\) pour tout \\( x>0 \\). On a \\( \\ln 1=0 \\) et \\( \\ln e=1 \\).</p><ul><li>Strictement croissante sur \\( ]0,+\\infty[ \\).</li><li>Limites : \\( \\displaystyle\\lim_{x\\to 0^+} \\ln x=-\\infty \\) et \\( \\displaystyle\\lim_{x\\to+\\infty} \\ln x=+\\infty \\).</li><li>Propriétés algébriques (pour \\( a,b>0 \\)) : \\( \\ln(ab)=\\ln a+\\ln b \\) ; \\( \\ln\\!\\left(\\dfrac{a}{b}\\right)=\\ln a-\\ln b \\) ; \\( \\ln(a^n)=n\\ln a \\).</li><li>Pour résoudre \\( e^{X}=k \\) avec \\( k>0 \\) : \\( X=\\ln k \\). Pour résoudre \\( \\ln(X)=k \\) : \\( X=e^{k} \\), à condition d'avoir vérifié que \\( X>0 \\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Résoudre \\( \\ln(x)+\\ln(x+3)=\\ln(4) \\). Domaine : il faut \\( x>0 \\) (ce qui entraîne aussi \\( x+3>0 \\)). On regroupe : \\( \\ln\\big(x(x+3)\\big)=\\ln 4 \\), donc \\( x(x+3)=4 \\), soit \\( x^2+3x-4=0 \\), qui se factorise en \\( (x-1)(x+4)=0 \\). On obtient \\( x=1 \\) ou \\( x=-4 \\) ; seul \\( x=1 \\) respecte le domaine \\( x>0 \\), donc \\( x=-4 \\) est rejeté. Solution : \\( x=1 \\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> \\( \\ln(a+b) \\) n'est PAS égal à \\( \\ln a+\\ln b \\) (seule la propriété avec le produit \\( \\ln(ab) \\) est vraie). Exemple numérique : \\( \\ln(1+1)=\\ln 2\\approx 0{,}693 \\), alors que \\( \\ln 1+\\ln 1=0+0=0 \\) : les deux résultats sont différents.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Toujours vérifier le domaine avant de conclure. Par exemple pour résoudre \\( \\ln(x-4)=\\ln(2-x) \\), il faudrait \\( x-4>0 \\) ET \\( 2-x>0 \\), c'est-à-dire \\( x>4 \\) et \\( x&lt;2 \\) en même temps : c'est impossible. Un élève pressé écrirait directement \\( x-4=2-x \\), trouverait \\( x=3 \\), et répondrait \\( x=3 \\) — mais \\( x=3 \\) ne vérifie même pas \\( x>4 \\) : cette équation n'a en réalité AUCUNE solution.</div><h4>Trigonométrie : cercle trigonométrique et valeurs remarquables</h4><p>Sur le cercle trigonométrique (rayon 1, centré à l'origine), pour un angle \\( x \\) (en radians), le point associé a pour coordonnées \\( (\\cos x,\\sin x) \\).</p><ul><li>Relation fondamentale : \\( \\cos^2 x+\\sin^2 x=1 \\).</li><li>Périodicité : \\( \\cos(x+2\\pi)=\\cos x \\) et \\( \\sin(x+2\\pi)=\\sin x \\) (période \\( 2\\pi \\)).</li><li>Parité : \\( \\cos \\) est paire (\\( \\cos(-x)=\\cos x \\)) ; \\( \\sin \\) est impaire (\\( \\sin(-x)=-\\sin x \\)).</li><li>Valeurs remarquables :</li></ul><ul><li>\\( x=0 \\) : \\( \\cos x=1 \\), \\( \\sin x=0 \\)</li><li>\\( x=\\pi/6 \\) : \\( \\cos x=\\dfrac{\\sqrt{3}}{2} \\), \\( \\sin x=\\dfrac{1}{2} \\)</li><li>\\( x=\\pi/4 \\) : \\( \\cos x=\\dfrac{\\sqrt{2}}{2} \\), \\( \\sin x=\\dfrac{\\sqrt{2}}{2} \\)</li><li>\\( x=\\pi/3 \\) : \\( \\cos x=\\dfrac{1}{2} \\), \\( \\sin x=\\dfrac{\\sqrt{3}}{2} \\)</li><li>\\( x=\\pi/2 \\) : \\( \\cos x=0 \\), \\( \\sin x=1 \\)</li></ul><p>Résolution d'équations simples : \\( \\cos x=\\cos a \\iff x=a+2k\\pi \\) ou \\( x=-a+2k\\pi \\) (\\( k\\in\\mathbb{Z} \\)) ; \\( \\sin x=\\sin a \\iff x=a+2k\\pi \\) ou \\( x=\\pi-a+2k\\pi \\) (\\( k\\in\\mathbb{Z} \\)).</p><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Résoudre \\( \\cos x=\\dfrac{1}{2} \\) sur \\( [0,2\\pi[ \\). On a \\( \\cos(\\pi/3)=1/2 \\), donc les solutions sont \\( x=\\pi/3 \\) et \\( x=-\\pi/3+2\\pi=5\\pi/3 \\). Deux solutions : \\( x=\\pi/3 \\) ou \\( x=5\\pi/3 \\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Une équation \\( \\cos x=a \\) (avec \\( -1&lt;a&lt;1 \\)) a en général DEUX solutions sur une période de longueur \\( 2\\pi \\), pas une seule. Oublier la deuxième solution (par symétrie par rapport à l'axe des abscisses) est une erreur fréquente ; il en va de même pour \\( \\sin x=a \\) (symétrie par rapport à l'axe vertical \\( x=\\pi/2 \\)).</div>"
 },
 {
  "slug": "integration-lycee",
  "label": "Primitives & intégration",
  "fiche": "<h4>Notion de primitive</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><line x1=\"34.0\" y1=\"174.0\" x2=\"360.0\" y2=\"174.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"360.0,170.0 367.0,174.0 360.0,178.0\" fill=\"var(--text-muted)\"/><text x=\"370.0\" y=\"178.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">x</text><line x1=\"60.1\" y1=\"190.0\" x2=\"60.1\" y2=\"14.0\" stroke=\"var(--text-muted)\" stroke-width=\"1.2\"/><polygon points=\"56.1,14.0 60.1,7.0 64.1,14.0\" fill=\"var(--text-muted)\"/><text x=\"66.1\" y=\"12.0\" font-size=\"11\" fill=\"var(--text-muted)\" font-style=\"italic\">y</text><line x1=\"125.3\" y1=\"171.0\" x2=\"125.3\" y2=\"177.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"190.5\" y1=\"171.0\" x2=\"190.5\" y2=\"177.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"255.7\" y1=\"171.0\" x2=\"255.7\" y2=\"177.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"320.9\" y1=\"171.0\" x2=\"320.9\" y2=\"177.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"57.1\" y1=\"134.0\" x2=\"63.1\" y2=\"134.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"57.1\" y1=\"94.0\" x2=\"63.1\" y2=\"94.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><line x1=\"57.1\" y1=\"54.0\" x2=\"63.1\" y2=\"54.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\"/><text x=\"49.1\" y=\"187.0\" font-size=\"10\" fill=\"var(--text-muted)\">0</text><polygon points=\"125.3,174.0 125.3,124.0 129.8,122.6 134.3,121.1 138.8,119.4 143.3,117.7 147.8,115.9 152.3,114.0 156.8,112.0 161.3,109.9 165.7,107.7 170.2,105.5 174.7,103.1 179.2,100.6 183.7,98.0 188.2,95.4 192.7,92.6 197.2,89.8 201.7,86.8 206.2,83.8 210.7,80.6 215.2,77.4 219.7,74.1 224.2,70.6 228.7,67.1 233.2,63.5 237.7,59.8 242.2,56.0 246.7,52.1 251.2,48.1 255.7,44.0 255.7,174.0\" fill=\"var(--primary)\" fill-opacity=\"0.25\" stroke=\"none\"/><path d=\"M 60.1,134.0 L 65.8,133.9 L 71.5,133.7 L 77.2,133.3 L 83.0,132.8 L 88.7,132.1 L 94.4,131.2 L 100.1,130.2 L 105.9,129.1 L 111.6,127.8 L 117.3,126.3 L 123.0,124.7 L 128.7,122.9 L 134.5,121.0 L 140.2,118.9 L 145.9,116.7 L 151.6,114.3 L 157.3,111.7 L 163.1,109.0 L 168.8,106.2 L 174.5,103.2 L 180.2,100.0 L 186.0,96.7 L 191.7,93.3 L 197.4,89.6 L 203.1,85.9 L 208.8,81.9 L 214.6,77.9 L 220.3,73.6 L 226.0,69.2 L 231.7,64.7 L 237.5,60.0 L 243.2,55.1 L 248.9,50.1 L 254.6,45.0 L 260.3,39.7 L 266.1,34.2 L 271.8,28.6 L 277.5,22.8 L 283.2,16.9 L 288.9,10.8 L 294.7,4.5 L 300.4,-1.8 L 306.1,-8.4 L 311.8,-15.1 L 317.6,-21.9 L 323.3,-29.0 L 329.0,-36.1 L 334.7,-43.4 L 340.4,-50.9\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.4\"/><line x1=\"125.3\" y1=\"174.0\" x2=\"125.3\" y2=\"124.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/><text x=\"122.3\" y=\"190.0\" font-size=\"11\" fill=\"var(--text-muted)\">1</text><line x1=\"255.7\" y1=\"174.0\" x2=\"255.7\" y2=\"44.0\" stroke=\"var(--text-muted)\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/><text x=\"252.7\" y=\"190.0\" font-size=\"11\" fill=\"var(--text-muted)\">3</text><text x=\"170.5\" y=\"138.0\" font-size=\"12\" fill=\"var(--primary)\" font-weight=\"700\">&#8747;&#8321;&#179; f(x)dx</text></svg><p class=\"exo-fiche-fig-caption\">L'intégrale ∫₁³ f(x)dx correspond à l'aire (en unités d'aire) de la région comprise entre la courbe de f, l'axe des abscisses et les droites x = 1 et x = 3.</p></div><p>Soit \\(f\\) une fonction définie sur un intervalle \\(I\\). Une <strong>primitive</strong> de \\(f\\) sur \\(I\\) est une fonction \\(F\\), dérivable sur \\(I\\), telle que pour tout \\(x\\) de \\(I\\) : \\(F'(x)=f(x)\\).</p><ul><li>Toute fonction continue sur un intervalle \\(I\\) admet des primitives sur \\(I\\) (admis en terminale).</li><li>Si \\(F\\) est une primitive de \\(f\\) sur \\(I\\), alors <strong>toutes</strong> les primitives de \\(f\\) sur \\(I\\) sont les fonctions \\(x \\mapsto F(x)+k\\), où \\(k\\) est une constante réelle quelconque (deux fonctions ayant la même dérivée sur un intervalle diffèrent d'une constante).</li><li>Une fonction admet donc une infinité de primitives sur \\(I\\), qui forment une famille « à une constante près ».</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(F(x)=x^2\\) est une primitive de \\(f(x)=2x\\) sur \\(\\mathbb{R}\\), car \\(F'(x)=2x=f(x)\\). Toutes les primitives de \\(f\\) sur \\(\\mathbb{R}\\) sont les fonctions \\(x \\mapsto x^2+k\\), \\(k\\in\\mathbb{R}\\).</div><h4>Primitives usuelles à connaître par cœur</h4><p>Ces primitives sont à connaître par cœur (\\(k\\) désigne une constante réelle quelconque) :</p><ul><li>\\(f(x)=x^n\\) (\\(n\\) entier, \\(n\\neq -1\\)) : primitive \\(F(x)=\\dfrac{x^{n+1}}{n+1}+k\\) (sur \\(\\mathbb{R}\\) si \\(n\\geq 0\\), sur un intervalle ne contenant pas \\(0\\) si \\(n&lt;0\\)).</li><li>\\(f(x)=\\dfrac{1}{x}\\) : primitive \\(F(x)=\\ln|x|+k\\), sur un intervalle ne contenant pas \\(0\\) (par exemple \\(]0;+\\infty[\\) ou \\(]-\\infty;0[\\)).</li><li>\\(f(x)=e^x\\) : primitive \\(F(x)=e^x+k\\) sur \\(\\mathbb{R}\\).</li><li>\\(f(x)=\\cos x\\) : primitive \\(F(x)=\\sin x+k\\) sur \\(\\mathbb{R}\\).</li><li>\\(f(x)=\\sin x\\) : primitive \\(F(x)=-\\cos x+k\\) sur \\(\\mathbb{R}\\).</li><li>Forme \\(u'e^{u}\\) : primitive \\(e^{u}+k\\).</li><li>Forme \\(\\dfrac{u'}{u}\\) (avec \\(u\\) ne s'annulant pas) : primitive \\(\\ln|u|+k\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Pour \\(f(x)=2x\\,e^{x^2}\\), on reconnaît la forme \\(u'e^{u}\\) avec \\(u(x)=x^2\\) (donc \\(u'(x)=2x\\)) : une primitive est \\(F(x)=e^{x^2}\\). Pour \\(g(x)=\\dfrac{2x}{x^2+1}\\), on reconnaît la forme \\(\\dfrac{u'}{u}\\) avec \\(u(x)=x^2+1>0\\) : une primitive est \\(G(x)=\\ln(x^2+1)\\) (pas besoin de valeur absolue puisque \\(x^2+1>0\\)).</div><h4>Déterminer une primitive à partir d'une condition initiale</h4><p>Pour déterminer la primitive \\(F\\) de \\(f\\) qui vérifie une condition du type \\(F(a)=b\\) :</p><ul><li>On écrit la famille générale des primitives de \\(f\\) sous la forme \\(F(x)=G(x)+k\\), où \\(G\\) est une primitive « simple » de \\(f\\).</li><li>On remplace \\(x\\) par \\(a\\) dans l'égalité \\(F(a)=b\\), ce qui donne une équation en \\(k\\).</li><li>On résout cette équation pour trouver la valeur de \\(k\\), puis on l'injecte dans l'expression de \\(F\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Soit \\(f(x)=2x\\). On cherche la primitive \\(F\\) de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(1)=5\\). Les primitives de \\(f\\) sont \\(F(x)=x^2+k\\). La condition \\(F(1)=5\\) donne \\(1+k=5\\), soit \\(k=4\\). Donc \\(F(x)=x^2+4\\).</div><h4>Intégrale d'une fonction continue : aire et lien avec les primitives</h4><p>Soit \\(f\\) une fonction continue et <strong>positive</strong> sur \\([a;b]\\) (avec \\(a\\leq b\\)). L'intégrale \\(\\displaystyle\\int_a^b f(x)\\,dx\\) est, par définition, l'aire (exprimée en unités d'aire) du domaine délimité par la courbe de \\(f\\), l'axe des abscisses et les droites d'équations \\(x=a\\) et \\(x=b\\).</p><p><strong>Lien fondamental primitive/intégrale :</strong> si \\(F\\) est une primitive de \\(f\\) sur un intervalle contenant \\(a\\) et \\(b\\), alors : \\[\\int_a^b f(x)\\,dx = F(b)-F(a),\\] que l'on note aussi \\(\\big[F(x)\\big]_a^b\\).</p><ul><li>Ce résultat reste valable même si \\(f\\) n'est pas positive : c'est ainsi que l'on calcule concrètement une intégrale, en cherchant une primitive.</li><li>Cas particulier : \\(\\displaystyle\\int_a^a f(x)\\,dx = 0\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(\\displaystyle\\int_0^2 x^2\\,dx=\\Big[\\dfrac{x^3}{3}\\Big]_0^2=\\dfrac{8}{3}-0=\\dfrac{8}{3}\\).</div><h4>Propriétés de l'intégrale</h4><p>Pour \\(f\\) et \\(g\\) continues sur un intervalle contenant \\(a\\), \\(b\\), \\(c\\), et \\(\\lambda\\) un réel :</p><ul><li><strong>Linéarité :</strong> \\(\\displaystyle\\int_a^b (f(x)+g(x))\\,dx=\\int_a^b f(x)\\,dx+\\int_a^b g(x)\\,dx\\) et \\(\\displaystyle\\int_a^b \\lambda f(x)\\,dx=\\lambda\\int_a^b f(x)\\,dx\\).</li><li><strong>Relation de Chasles :</strong> \\(\\displaystyle\\int_a^b f(x)\\,dx+\\int_b^c f(x)\\,dx=\\int_a^c f(x)\\,dx\\).</li><li><strong>Positivité :</strong> si \\(a\\leq b\\) et \\(f(x)\\geq 0\\) pour tout \\(x\\in[a;b]\\), alors \\(\\displaystyle\\int_a^b f(x)\\,dx\\geq 0\\).</li><li><strong>Comparaison :</strong> si \\(a\\leq b\\) et \\(f(x)\\leq g(x)\\) pour tout \\(x\\in[a;b]\\), alors \\(\\displaystyle\\int_a^b f(x)\\,dx\\leq\\int_a^b g(x)\\,dx\\).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(\\displaystyle\\int_0^1 (2x+3)\\,dx=\\int_0^1 2x\\,dx+\\int_0^1 3\\,dx=\\big[x^2\\big]_0^1+\\big[3x\\big]_0^1=1+3=4\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> La primitive de \\(f(x)=\\dfrac{1}{x}\\) est \\(\\ln|x|\\) et non \\(\\ln x\\) tout court : sur \\(]-\\infty;0[\\), \\(\\ln x\\) n'existe pas, alors que \\(\\ln(-x)\\) (qui vaut \\(\\ln|x|\\) sur cet intervalle) est bien défini et est une primitive de \\(\\dfrac{1}{x}\\) sur \\(]-\\infty;0[\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Quand \\(f\\) change de signe sur \\([a;b]\\), \\(\\displaystyle\\int_a^b f(x)\\,dx\\) n'est <strong>plus</strong> l'aire du domaine coloré : c'est une somme algébrique (aires « au-dessus » de l'axe comptées positivement, aires « en dessous » comptées négativement). L'intégrale peut donc être nulle, voire négative, alors que la figure occupe une aire visible non nulle.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Pour reconnaître les formes \\(u'e^{u}\\) ou \\(\\dfrac{u'}{u}\\), il faut vérifier <strong>tout le coefficient</strong> devant l'exponentielle ou la fraction, pas seulement la présence de \\(x\\). Par exemple, une primitive de \\(\\dfrac{x}{x^2+1}\\) n'est pas \\(\\ln(x^2+1)\\) mais \\(\\dfrac12\\ln(x^2+1)\\), car \\(u(x)=x^2+1\\) a pour dérivée \\(u'(x)=2x\\) : il manque un facteur \\(\\dfrac12\\) pour compenser.</div>"
 },
 {
  "slug": "logique-raisonnement",
  "label": "Logique, ensembles & raisonnement",
  "fiche": "<h4>Quantificateurs et négation</h4><div class=\"exo-fiche-fig\"><svg viewBox=\"0 0 380 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-hidden=\"true\" style=\"\"><circle cx=\"145\" cy=\"105\" r=\"72\" fill=\"var(--primary)\" fill-opacity=\"0.22\" stroke=\"var(--primary)\" stroke-width=\"2\"/><circle cx=\"235\" cy=\"105\" r=\"72\" fill=\"var(--accent)\" fill-opacity=\"0.22\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"87\" y=\"55\" font-size=\"15\" fill=\"var(--primary)\" font-weight=\"700\">A</text><text x=\"281\" y=\"55\" font-size=\"15\" fill=\"var(--accent)\" font-weight=\"700\">B</text><text x=\"180.0\" y=\"111\" font-size=\"12\" fill=\"var(--text)\" font-weight=\"700\">A&#8745;B</text><text x=\"105\" y=\"111\" font-size=\"11\" fill=\"var(--text)\">A</text><text x=\"261\" y=\"111\" font-size=\"11\" fill=\"var(--text)\">B</text><text x=\"144.0\" y=\"192\" font-size=\"12\" fill=\"var(--text-muted)\" font-style=\"italic\">A&#8746;B = ensemble reunissant A et B</text></svg><p class=\"exo-fiche-fig-caption\">Diagramme de Venn : intersection A ∩ B (zone commune) et union A ∪ B (les deux ensembles réunis).</p></div><p>Une proposition peut porter sur une variable qui parcourt un ensemble : on dit qu'elle est <strong>quantifiée</strong>.</p><ul><li>\\(\\forall x \\in E,\\ P(x)\\) : « pour tout \\(x\\) de \\(E\\), \\(P(x)\\) est vraie ». Vraie si \\(P(x)\\) est vraie pour chaque élément de \\(E\\), sans exception.</li><li>\\(\\exists x \\in E,\\ P(x)\\) : « il existe (au moins) un \\(x\\) de \\(E\\) tel que \\(P(x)\\) est vraie ». Vraie dès qu'un seul élément convient.</li><li>Négation : on inverse le quantificateur ET on nie ce qui suit. \\[ \\text{non}\\big(\\forall x \\in E,\\ P(x)\\big) \\equiv \\exists x \\in E,\\ \\text{non } P(x) \\] \\[ \\text{non}\\big(\\exists x \\in E,\\ P(x)\\big) \\equiv \\forall x \\in E,\\ \\text{non } P(x) \\]</li><li>Avec deux quantificateurs, l'ordre compte : \\(\\forall x\\, \\exists y,\\ P(x,y)\\) (y peut dépendre de x) n'a pas le même sens que \\(\\exists y\\, \\forall x,\\ P(x,y)\\) (un même y convient pour tous les x). Pour nier une chaîne de quantificateurs, on les inverse un par un dans l'ordre, puis on nie la proposition finale.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Nier \\(\\forall x\\in\\mathbb R,\\ x^2\\ge 0\\). On change \\(\\forall\\) en \\(\\exists\\) et on nie \\(x^2\\ge 0\\) (qui devient \\(x^2&lt;0\\)) : la négation est \\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\) (proposition fausse, mais c'est bien la négation correcte de la proposition de départ, qui elle est vraie).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Nier \\(\\forall x\\in\\mathbb R,\\ x>0\\) par « \\(\\forall x\\in\\mathbb R,\\ x&lt;0\\) » est faux : on a oublié de changer le quantificateur. La bonne négation est \\(\\exists x\\in\\mathbb R,\\ x\\le 0\\).</div><h4>Implication, réciproque, contraposée, équivalence</h4><p>Soient \\(P\\) et \\(Q\\) deux propositions.</p><ul><li>Implication \\(P\\Rightarrow Q\\) : « si \\(P\\) est vraie alors \\(Q\\) est vraie ». \\(P\\) est une condition <strong>suffisante</strong> pour \\(Q\\) ; \\(Q\\) est une condition <strong>nécessaire</strong> pour \\(P\\).</li><li>Réciproque de \\(P\\Rightarrow Q\\) : c'est \\(Q\\Rightarrow P\\). En général, PAS équivalente à l'implication de départ.</li><li>Contraposée de \\(P\\Rightarrow Q\\) : c'est \\(\\text{non } Q \\Rightarrow \\text{non } P\\). Toujours équivalente à \\(P\\Rightarrow Q\\) (même valeur de vérité) : c'est un outil de démonstration légitime.</li><li>Équivalence \\(P\\Leftrightarrow Q\\) : \\(P\\Rightarrow Q\\) ET \\(Q\\Rightarrow P\\) (double implication). \\(P\\) et \\(Q\\) sont alors des conditions nécessaires et suffisantes l'une pour l'autre.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> Avec \\(P\\) : « \\(x=2\\) » et \\(Q\\) : « \\(x^2=4\\) », on a \\(P\\Rightarrow Q\\) vraie. La réciproque \\(Q\\Rightarrow P\\) est fausse : \\(x=-2\\) vérifie \\(Q\\) mais pas \\(P\\). Implication et réciproque ne sont donc pas équivalentes ici.</div><div class=\"exo-fiche-exemple\"><strong>Exemple (contraposée).</strong> Pour montrer « si \\(n^2\\) est pair alors \\(n\\) est pair », on montre la contraposée « si \\(n\\) est impair alors \\(n^2\\) est impair », souvent plus simple : \\(n=2k+1 \\Rightarrow n^2=4k^2+4k+1=2(2k^2+2k)+1\\), qui est impair.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Confondre condition nécessaire et condition suffisante : si \\(P\\Rightarrow Q\\), alors \\(P\\) est suffisante pour \\(Q\\) mais pas forcément nécessaire (on peut avoir \\(Q\\) vraie sans \\(P\\)). Exemple : « \\(x=3\\) » est suffisant pour « \\(x^2=9\\) » mais pas nécessaire, car \\(x=-3\\) vérifie aussi \\(x^2=9\\).</div><h4>Démontrer ou infirmer une proposition</h4><ul><li>Pour montrer \\(\\forall x\\in E,\\ P(x)\\) : il faut un argument valable pour un \\(x\\) quelconque (générique) de \\(E\\). Un ou plusieurs exemples, même nombreux, ne suffisent jamais.</li><li>Pour infirmer \\(\\forall x\\in E,\\ P(x)\\) (montrer que c'est faux) : un seul contre-exemple suffit, c'est-à-dire un \\(x_0\\in E\\) tel que \\(P(x_0)\\) est fausse.</li><li>Pour montrer \\(\\exists x\\in E,\\ P(x)\\) : un seul exemple qui convient suffit.</li><li>Raisonnement par l'absurde : pour montrer une proposition \\(P\\), on suppose \\(\\text{non } P\\) vraie, et on en déduit une contradiction ; on conclut que \\(P\\) est vraie.</li><li>Disjonction de cas : pour montrer \\(P\\), on découpe les situations possibles en plusieurs cas exhaustifs (signe, parité, position par rapport à une valeur...) et on montre \\(P\\) dans chaque cas.</li><li>Récurrence (rappel, voir fiche « Suites ») : pour montrer \\(\\forall n\\ge n_0,\\ P(n)\\), on montre \\(P(n_0)\\) (initialisation) puis \\(P(n)\\Rightarrow P(n+1)\\) pour tout \\(n\\ge n_0\\) (hérédité).</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple (absurde).</strong> Montrer que \\(\\sqrt2\\) est irrationnel : on suppose \\(\\sqrt2=\\dfrac{p}{q}\\) avec \\(p,q\\) entiers et la fraction irréductible ; on montre alors que \\(p\\) et \\(q\\) sont tous deux pairs, ce qui contredit l'irréductibilité. Donc \\(\\sqrt2\\) est irrationnel.</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Vérifier une propriété sur quelques exemples numériques ne prouve rien pour une proposition universelle, même si cela aide à conjecturer. Exemple célèbre : \\(n^2-n+41\\) est premier pour \\(n=0,1,\\ldots,39\\), mais pas pour \\(n=41\\).</div><h4>Vocabulaire ensembliste</h4><ul><li>\\(x\\in E\\) : \\(x\\) appartient à \\(E\\) (relation entre un élément et un ensemble). \\(A\\subset E\\) : \\(A\\) est inclus dans \\(E\\), c'est-à-dire \\(\\forall x,\\ x\\in A \\Rightarrow x\\in E\\) (relation entre deux ensembles).</li><li>\\(A\\cup B\\) (réunion) : éléments qui sont dans \\(A\\) ou dans \\(B\\) (ou les deux). \\(A\\cap B\\) (intersection) : éléments qui sont dans \\(A\\) et dans \\(B\\).</li><li>Complémentaire de \\(A\\) dans \\(E\\), noté \\(\\overline A\\) ou \\(E\\setminus A\\) : éléments de \\(E\\) qui ne sont pas dans \\(A\\).</li><li>Utile pour décrire un ensemble de définition comme réunion d'intervalles, par exemple \\(D_f=\\mathbb R\\setminus\\{1\\}=\\,]-\\infty;1[\\,\\cup\\,]1;+\\infty[\\).</li><li>Un ensemble fini à \\(n\\) éléments possède exactement \\(2^n\\) sous-ensembles (parties), y compris l'ensemble vide et l'ensemble lui-même.</li></ul><div class=\"exo-fiche-exemple\"><strong>Exemple.</strong> \\(D_f=\\{x\\in\\mathbb R : x\\ge 0 \\text{ et } x\\ne 4\\} = [0;4[\\,\\cup\\,]4;+\\infty[\\).</div><div class=\"exo-fiche-piege\"><strong>Piège classique.</strong> Confondre \\(\\subset\\) et \\(\\in\\) : un élément appartient à un ensemble, un ensemble est inclus dans un ensemble. Écrire « \\(2\\subset\\mathbb N\\) » n'a pas de sens ; la formulation correcte est \\(2\\in\\mathbb N\\).</div>"
 },
 {
  "slug": "problemes-synthese",
  "label": "Problèmes de synthèse",
  "fiche": "<h4>Quatre problèmes transversaux</h4><p>Contrairement aux fiches précédentes organisées par thème, cette section propose quatre problèmes plus longs : chacun combine plusieurs notions vues dans deux ou trois thèmes différents, comme cela sera souvent le cas dans les exercices d'Analyse I. Chaque question d'un problème reste indépendante et se vérifie séparément.</p>",
  "problems": [
   {
    "id": "pbA",
    "title": "Problème A — Étude d'un trinôme du second degré",
    "context": "<p>On étudie la fonction polynôme du second degré définie sur \\(\\mathbb{R}\\) par \\(f(x) = x^2 - 4x + 3\\).</p>"
   },
   {
    "id": "pbB",
    "title": "Problème B — Suite géométrique et décroissance exponentielle",
    "context": "<p>Une population d'insectes compte initialement \\(u_0 = 2000\\) individus. Chaque semaine, la population diminue de 10&nbsp;% : \\(u_{n+1} = 0{,}9\\,u_n\\) pour tout entier \\(n\\).</p>"
   },
   {
    "id": "pbC",
    "title": "Problème C — Équation et inéquation trigonométriques",
    "context": "<p>On considère l'équation \\(\\cos(x) = \\dfrac{1}{2}\\) et l'inéquation associée \\(\\cos(x) \\geqslant \\dfrac{1}{2}\\), toutes deux étudiées sur l'intervalle \\([0\\,;\\,2\\pi]\\).</p>"
   },
   {
    "id": "pbD",
    "title": "Problème D — Logique, ensembles et inéquations",
    "context": "<p>On s'intéresse à la proposition \\(P\\) : « \\(\\forall x \\in \\mathbb{R},\\ x^2 \\geqslant x\\) » ainsi qu'à la proposition \\(Q\\) : « \\(\\exists x \\in \\mathbb{R},\\ x^2+1=0\\) ».</p>"
   }
  ]
 }
];
var EXERCISES_DATA = [
 {
  "type": "qcm",
  "q": "Quel est l'ensemble des solutions de \\( |x-2| \\le 3 \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([-1,5]\\)"
   },
   {
    "key": "b",
    "text": "\\([-5,1]\\)"
   },
   {
    "key": "c",
    "text": "\\(]-\\infty,-1]\\cup[5,+\\infty[\\)"
   },
   {
    "key": "d",
    "text": "\\([-3,3]\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(|x-a|\\le r \\iff x\\in[a-r,a+r]\\), ici \\(a=2\\), \\(r=3\\), donc \\(x\\in[-1,5]\\).",
  "id": "nombres-inegalites-01",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "Calculer \\( |7-(-3)| \\) (la distance entre les réels 7 et -3).",
  "ans": 10,
  "ansText": "\\(|7-(-3)|=|10|=10\\)",
  "tol": 0.01,
  "id": "nombres-inegalites-02",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "L'équation \\( |3x-6|=12 \\) a deux solutions. Donner la plus grande.",
  "ans": 6,
  "ansText": "\\(3x-6=12 \\Rightarrow x=6\\) ; ou \\(3x-6=-12 \\Rightarrow x=-2\\). La plus grande solution est \\(6\\).",
  "tol": 0.01,
  "id": "nombres-inegalites-03",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Laquelle des propriétés suivantes est vraie pour TOUS les réels \\(a\\) et \\(b\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(|a+b|=|a|+|b|\\)"
   },
   {
    "key": "b",
    "text": "\\(|ab|=|a|\\,|b|\\)"
   },
   {
    "key": "c",
    "text": "\\(|a-b|=|a|-|b|\\)"
   },
   {
    "key": "d",
    "text": "\\(|a|&lt;|b| \\Rightarrow a&lt;b\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(|ab|=|a|\\,|b|\\) est toujours vraie. Les trois autres sont fausses en général (par exemple \\(a=1,b=-1\\) met en défaut a, c et d).",
  "id": "nombres-inegalites-04",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "On part de l'inégalité \\( x &lt; 5 \\) et on multiplie les deux membres par \\(-2\\). Quelle inégalité obtient-on ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(-2x &lt; -10\\)"
   },
   {
    "key": "b",
    "text": "\\(-2x > -10\\)"
   },
   {
    "key": "c",
    "text": "\\(-2x &lt; 10\\)"
   },
   {
    "key": "d",
    "text": "\\(-2x > 10\\)"
   }
  ],
  "ans": "b",
  "ansText": "Multiplier par un négatif inverse le sens de l'inégalité : \\(x&lt;5 \\Rightarrow -2x>-10\\).",
  "id": "nombres-inegalites-05",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Combien vaut \\( \\sqrt{(-3)^2} \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(-3\\)"
   },
   {
    "key": "b",
    "text": "\\(3\\)"
   },
   {
    "key": "c",
    "text": "\\(\\pm3\\)"
   },
   {
    "key": "d",
    "text": "n'existe pas"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\sqrt{a^2}=|a|\\), donc \\(\\sqrt{(-3)^2}=|-3|=3\\), pas \\(-3\\).",
  "id": "nombres-inegalites-06",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "En utilisant l'identité \\( a^2-b^2=(a-b)(a+b) \\), calculer \\( 101^2 - 99^2 \\).",
  "ans": 400,
  "ansText": "\\(101^2-99^2=(101-99)(101+99)=2\\times200=400\\)",
  "tol": 0.01,
  "id": "nombres-inegalites-07",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Simplifier \\( \\dfrac{a^5}{a^{-2}} \\) pour \\(a\\ne0\\).",
  "opts": [
   {
    "key": "a",
    "text": "\\(a^3\\)"
   },
   {
    "key": "b",
    "text": "\\(a^7\\)"
   },
   {
    "key": "c",
    "text": "\\(a^{-7}\\)"
   },
   {
    "key": "d",
    "text": "\\(a^{10}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\dfrac{a^5}{a^{-2}}=a^{5-(-2)}=a^7\\)",
  "id": "nombres-inegalites-08",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Rationaliser \\( \\dfrac{1}{\\sqrt3-1} \\).",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{\\sqrt3+1}{2}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{\\sqrt3-1}{2}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\sqrt3+1\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac{\\sqrt3+1}{4}\\)"
   }
  ],
  "ans": "a",
  "ansText": "En multipliant par \\(\\dfrac{\\sqrt3+1}{\\sqrt3+1}\\) : \\(\\dfrac{\\sqrt3+1}{(\\sqrt3)^2-1^2}=\\dfrac{\\sqrt3+1}{2}\\)",
  "id": "nombres-inegalites-09",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Résoudre \\( (2x-4)(x+1) > 0 \\) à l'aide d'un tableau de signes.",
  "opts": [
   {
    "key": "a",
    "text": "\\(]-\\infty,-1[\\,\\cup\\,]2,+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(]-1,2[\\)"
   },
   {
    "key": "c",
    "text": "\\(]-\\infty,-1]\\cup[2,+\\infty[\\)"
   },
   {
    "key": "d",
    "text": "\\(]-1,+\\infty[\\)"
   }
  ],
  "ans": "a",
  "ansText": "Zéros en \\(x=-1\\) et \\(x=2\\). \\(2x-4\\) est négatif avant \\(2\\), positif après ; \\(x+1\\) est négatif avant \\(-1\\), positif après. Le produit est positif quand les deux facteurs ont même signe : pour \\(x&lt;-1\\) (les deux négatifs) et pour \\(x>2\\) (les deux positifs).",
  "id": "nombres-inegalites-10",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Résoudre \\( \\dfrac{x-1}{x+2} \\le 0 \\) à l'aide d'un tableau de signes.",
  "opts": [
   {
    "key": "a",
    "text": "\\([-2,1]\\)"
   },
   {
    "key": "b",
    "text": "\\(]-2,1]\\)"
   },
   {
    "key": "c",
    "text": "\\(]-\\infty,-2[\\,\\cup\\,[1,+\\infty[\\)"
   },
   {
    "key": "d",
    "text": "\\(]-2,1[\\)"
   }
  ],
  "ans": "b",
  "ansText": "Numérateur nul en \\(x=1\\), dénominateur nul (valeur interdite) en \\(x=-2\\). Le quotient est négatif ou nul sur \\(]-2,1]\\) : \\(x=-2\\) est exclu (dénominateur nul), \\(x=1\\) est inclus (l'inégalité est large et le numérateur s'annule).",
  "id": "nombres-inegalites-11",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Pour résoudre \\( \\dfrac{3}{x-2} > 1 \\), quelle est la démarche correcte ?",
  "opts": [
   {
    "key": "a",
    "text": "Multiplier directement les deux membres par \\(x-2\\), ce qui donne \\(3 > x-2\\), puis résoudre."
   },
   {
    "key": "b",
    "text": "Écrire \\(\\dfrac{3}{x-2}-1>0\\), réduire au même dénominateur en \\(\\dfrac{5-x}{x-2}>0\\), puis étudier le signe avec un tableau."
   },
   {
    "key": "c",
    "text": "Ajouter \\(1\\) aux deux membres puis diviser par \\(x\\)."
   },
   {
    "key": "d",
    "text": "Élever les deux membres au carré pour se débarrasser de la fraction."
   }
  ],
  "ans": "b",
  "ansText": "On ne peut pas multiplier par \\(x-2\\) sans connaître son signe (il change selon \\(x\\)). La méthode sûre : tout ramener d'un seul côté en une seule fraction, puis étudier le signe du numérateur et du dénominateur séparément dans un tableau de signes.",
  "id": "nombres-inegalites-12",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "Calculer le discriminant \\(\\Delta\\) du trinôme \\(f(x)=x^2-5x+6\\).",
  "ans": 1,
  "ansText": "\\(\\Delta=(-5)^2-4\\times1\\times6=25-24=1\\)",
  "tol": 0.001,
  "id": "second-degre-01",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme canonique du trinôme \\(f(x)=x^2-4x+1\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((x-2)^2-3\\)"
   },
   {
    "key": "b",
    "text": "\\((x-2)^2+3\\)"
   },
   {
    "key": "c",
    "text": "\\((x+2)^2-3\\)"
   },
   {
    "key": "d",
    "text": "\\((x-4)^2-3\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\alpha=-\\dfrac{-4}{2}=2\\), \\(\\beta=f(2)=4-8+1=-3\\), donc \\(f(x)=(x-2)^2-3\\).",
  "id": "second-degre-02",
  "cat": "second-degre"
 },
 {
  "type": "num",
  "q": "Résoudre \\(x^2-5x+6=0\\). Donner la plus petite des deux solutions.",
  "ans": 2,
  "ansText": "\\(\\Delta=1\\), racines \\(\\dfrac{5\\pm1}{2}\\), soit \\(2\\) et \\(3\\) : la plus petite est \\(2\\).",
  "tol": 0.001,
  "id": "second-degre-03",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Combien de solutions réelles admet l'équation \\(x^2+x+1=0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Aucune"
   },
   {
    "key": "b",
    "text": "Une seule (racine double)"
   },
   {
    "key": "c",
    "text": "Deux"
   },
   {
    "key": "d",
    "text": "Une infinité"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\Delta=1^2-4\\times1\\times1=-3&lt;0\\) : pas de racine réelle.",
  "id": "second-degre-04",
  "cat": "second-degre"
 },
 {
  "type": "num",
  "q": "Un trinôme \\(ax^2+bx+c\\) a deux racines entières dont la somme vaut \\(5\\) et le produit vaut \\(6\\). Donner la plus grande des deux racines.",
  "ans": 3,
  "ansText": "Les entiers de somme \\(5\\) et produit \\(6\\) sont \\(2\\) et \\(3\\) : la plus grande est \\(3\\).",
  "tol": 0.001,
  "id": "second-degre-05",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Un trinôme \\(x^2+bx+c\\) (coefficient dominant \\(1\\)) admet \\(2\\) et \\(-3\\) comme racines. Quel est ce trinôme ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x^2+x-6\\)"
   },
   {
    "key": "b",
    "text": "\\(x^2-x-6\\)"
   },
   {
    "key": "c",
    "text": "\\(x^2+x+6\\)"
   },
   {
    "key": "d",
    "text": "\\(x^2-5x+6\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(S=2+(-3)=-1=-b\\Rightarrow b=1\\), \\(P=2\\times(-3)=-6=c\\), donc \\(x^2+x-6\\).",
  "id": "second-degre-06",
  "cat": "second-degre"
 },
 {
  "type": "num",
  "q": "Quelle est la valeur minimale de \\(f(x)=2x^2-8x+9\\) sur \\(\\mathbb{R}\\) ?",
  "ans": 1,
  "ansText": "\\(\\alpha=-\\dfrac{-8}{4}=2\\), \\(\\beta=f(2)=8-16+9=1\\) ; comme \\(a=2>0\\), \\(1\\) est le minimum.",
  "tol": 0.001,
  "id": "second-degre-07",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "On considère \\(h(x)=-x^2+3x-2\\), dont les racines sont \\(1\\) et \\(2\\). Quel est le signe de \\(h(x)\\) pour \\(x\\in\\,]1,2[\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Positif"
   },
   {
    "key": "b",
    "text": "Négatif"
   },
   {
    "key": "c",
    "text": "Nul"
   },
   {
    "key": "d",
    "text": "Cela dépend de \\(x\\) dans cet intervalle"
   }
  ],
  "ans": "a",
  "ansText": "\\(a=-1&lt;0\\) : entre les racines, \\(h\\) est du signe de \\(-a\\), donc positif (par exemple \\(h(1{,}5)=0{,}25>0\\)).",
  "id": "second-degre-08",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire du signe de \\(f(x)=-3x^2+2x-5\\) pour \\(x\\) parcourant \\(\\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(x)\\) est toujours positif"
   },
   {
    "key": "b",
    "text": "\\(f(x)\\) est toujours négatif"
   },
   {
    "key": "c",
    "text": "\\(f(x)\\) change de signe"
   },
   {
    "key": "d",
    "text": "On ne peut rien dire sans plus d'informations"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\Delta=2^2-4\\times(-3)\\times(-5)=4-60=-56&lt;0\\) : \\(f\\) garde le signe de \\(a=-3\\), donc toujours négatif.",
  "id": "second-degre-09",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble des solutions de l'inéquation \\((x-1)(x^2-5x+6)\\geqslant0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([1,2]\\cup[3,+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(]-\\infty,1]\\cup[2,3]\\)"
   },
   {
    "key": "c",
    "text": "\\([2,3]\\)"
   },
   {
    "key": "d",
    "text": "\\(]-\\infty,1]\\cup[2,+\\infty[\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(x^2-5x+6=(x-2)(x-3)\\), donc le produit vaut \\((x-1)(x-2)(x-3)\\), de racines \\(1,2,3\\). En étudiant le signe (produit de trois facteurs affines), on obtient un signe négatif avant \\(1\\), positif sur \\(]1,2[\\), négatif sur \\(]2,3[\\), positif après \\(3\\) : solution \\([1,2]\\cup[3,+\\infty[\\).",
  "id": "second-degre-10",
  "cat": "second-degre"
 },
 {
  "type": "num",
  "q": "Sachant que \\(1\\) est racine évidente de \\(P(x)=x^3-6x^2+11x-6\\), et que le quotient obtenu est un trinôme se factorisant lui-même, donner le produit des trois racines de \\(P\\).",
  "ans": 6,
  "ansText": "\\(P(x)=(x-1)(x^2-5x+6)=(x-1)(x-2)(x-3)\\), racines \\(1,2,3\\), produit \\(=6\\).",
  "tol": 0.001,
  "id": "second-degre-11",
  "cat": "second-degre"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = 3x - 2\\). Calculer l'image de \\(4\\) par \\(f\\), c'est-à-dire \\(f(4)\\).",
  "ans": 10,
  "ansText": "\\(f(4) = 3\\times 4 - 2 = 10\\)",
  "tol": 0.01,
  "id": "fonctions-reference-01",
  "cat": "fonctions-reference"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\sqrt{x+3}\\). Calculer \\(f(6)\\).",
  "ans": 3,
  "ansText": "\\(f(6) = \\sqrt{6+3} = \\sqrt{9} = 3\\)",
  "tol": 0.01,
  "id": "fonctions-reference-02",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^2\\). Quel est l'ensemble des antécédents de \\(9\\) par \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\{3\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\{-3\\}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\{3\\,;-3\\}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\{9\\}\\)"
   }
  ],
  "ans": "c",
  "ansText": "Les antécédents vérifient \\(x^2 = 9\\), donc \\(x=3\\) ou \\(x=-3\\) : l'ensemble est \\(\\{3\\,;-3\\}\\).",
  "id": "fonctions-reference-03",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Sur l'intervalle \\(]0\\,;+\\infty[\\), la fonction inverse \\(x \\mapsto \\dfrac{1}{x}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "croissante"
   },
   {
    "key": "b",
    "text": "décroissante"
   },
   {
    "key": "c",
    "text": "constante"
   },
   {
    "key": "d",
    "text": "ni croissante ni décroissante"
   }
  ],
  "ans": "b",
  "ansText": "La fonction inverse est décroissante sur chacun des deux intervalles \\(]-\\infty\\,;0[\\) et \\(]0\\,;+\\infty[\\).",
  "id": "fonctions-reference-04",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(f\\) définie sur \\(\\mathbb{R}\\) par \\(f(x) = x^3\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "paire"
   },
   {
    "key": "b",
    "text": "impaire"
   },
   {
    "key": "c",
    "text": "ni paire ni impaire"
   },
   {
    "key": "d",
    "text": "périodique"
   }
  ],
  "ans": "b",
  "ansText": "\\(f(-x) = (-x)^3 = -x^3 = -f(x)\\) pour tout \\(x\\) : \\(f\\) est impaire.",
  "id": "fonctions-reference-05",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "On sait que \\(f\\) est strictement décroissante sur \\([-5\\,;5]\\). Sachant que \\(-3 &lt; 1\\), que peut-on en déduire ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(-3) &lt; f(1)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(-3) > f(1)\\)"
   },
   {
    "key": "c",
    "text": "\\(f(-3) = f(1)\\)"
   },
   {
    "key": "d",
    "text": "On ne peut rien déduire sans calculer"
   }
  ],
  "ans": "b",
  "ansText": "\\(f\\) est décroissante, donc l'ordre des images est inversé par rapport à celui des antécédents : \\(-3 &lt; 1 \\Rightarrow f(-3) > f(1)\\).",
  "id": "fonctions-reference-06",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = -2x + 5\\), définie sur \\(\\mathbb{R}\\). Le sens de variation de \\(f\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est croissante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est décroissante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est constante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est croissante puis décroissante"
   }
  ],
  "ans": "b",
  "ansText": "Le coefficient directeur est \\(a = -2 &lt; 0\\), donc \\(f\\) est strictement décroissante sur \\(\\mathbb{R}\\).",
  "id": "fonctions-reference-07",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est strictement croissante sur \\([-2\\,;5]\\) et vérifie \\(f(-2) = -10\\). Peut-on affirmer que \\(f\\) est positive sur \\([-2\\,;5]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, une fonction croissante est toujours positive"
   },
   {
    "key": "b",
    "text": "Non, croissante ne veut pas dire positive"
   },
   {
    "key": "c",
    "text": "Oui, car \\(f(-2)\\) est la plus petite valeur donc les autres sont positives"
   },
   {
    "key": "d",
    "text": "On ne peut jamais savoir sans le tableau de signes"
   }
  ],
  "ans": "b",
  "ansText": "Non : \\(f\\) croissante ne renseigne que sur l'évolution des images, pas sur leur signe. Ici, par exemple, \\(f(-2) = -10 &lt; 0\\) : \\(f\\) n'est pas positive sur tout l'intervalle.",
  "id": "fonctions-reference-08",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble de définition de \\(f(x) = \\dfrac{\\sqrt{x+2}}{x-1}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([-2\\,;+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\([-2\\,;1[\\,\\cup\\,]1\\,;+\\infty[\\)"
   },
   {
    "key": "c",
    "text": "\\(]-2\\,;+\\infty[\\,\\setminus\\,\\{1\\}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{R}\\,\\setminus\\,\\{1\\}\\)"
   }
  ],
  "ans": "b",
  "ansText": "Il faut \\(x+2 \\geqslant 0\\) (soit \\(x \\geqslant -2\\)) et \\(x - 1 \\neq 0\\) (soit \\(x \\neq 1\\)). En combinant : \\(D_f = [-2\\,;1[\\,\\cup\\,]1\\,;+\\infty[\\).",
  "id": "fonctions-reference-09",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble de définition de \\(f(x) = \\sqrt{\\dfrac{3-x}{x+1}}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(]-1\\,;3]\\)"
   },
   {
    "key": "b",
    "text": "\\([-1\\,;3]\\)"
   },
   {
    "key": "c",
    "text": "\\(]-\\infty\\,;-1[\\,\\cup\\,[3\\,;+\\infty[\\)"
   },
   {
    "key": "d",
    "text": "\\(]-1\\,;3[\\)"
   }
  ],
  "ans": "a",
  "ansText": "Il faut que le quotient soit \\(\\geqslant 0\\) et que \\(x \\neq -1\\). Une étude de signe (numérateur nul en \\(3\\), dénominateur nul en \\(-1\\)) donne un quotient positif ou nul exactement sur \\(]-1\\,;3]\\).",
  "id": "fonctions-reference-10",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Soit \\(h(x) = \\sqrt{\\dfrac{1}{x}}\\), définie sur \\(]0\\,;+\\infty[\\). En utilisant les sens de variation de \\(x \\mapsto \\dfrac{1}{x}\\) et de \\(x \\mapsto \\sqrt{x}\\), comparer \\(h(2)\\) et \\(h(8)\\) sans calculer leurs valeurs exactes.",
  "opts": [
   {
    "key": "a",
    "text": "\\(h(2) &lt; h(8)\\)"
   },
   {
    "key": "b",
    "text": "\\(h(2) > h(8)\\)"
   },
   {
    "key": "c",
    "text": "\\(h(2) = h(8)\\)"
   },
   {
    "key": "d",
    "text": "On ne peut pas comparer sans calculer"
   }
  ],
  "ans": "b",
  "ansText": "Sur \\(]0\\,;+\\infty[\\), \\(x \\mapsto 1/x\\) est décroissante, donc \\(2 &lt; 8 \\Rightarrow \\frac{1}{2} > \\frac{1}{8}\\). La racine carrée est croissante, donc elle conserve cet ordre : \\(\\sqrt{1/2} > \\sqrt{1/8}\\), c'est-à-dire \\(h(2) > h(8)\\) (la composée est décroissante).",
  "id": "fonctions-reference-11",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "La fonction \\(f(x) = -x^3\\) est impaire. Peut-on en déduire qu'elle est croissante sur \\(\\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toute fonction impaire est croissante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "b",
    "text": "Non, la parité ne renseigne pas sur le sens de variation"
   },
   {
    "key": "c",
    "text": "Oui, car \\(x^3\\) est croissante donc \\(-x^3\\) aussi"
   },
   {
    "key": "d",
    "text": "Non, car \\(f\\) est constante sur \\(\\mathbb{R}\\)"
   }
  ],
  "ans": "b",
  "ansText": "Non : la parité (ici l'imparité) ne donne aucune information sur le sens de variation. En fait \\(f(x) = -x^3\\) est strictement décroissante sur \\(\\mathbb{R}\\).",
  "id": "fonctions-reference-12",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de \\(f(x) = x^3\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = x^2\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = 3x^2\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = 3x^3\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = \\dfrac{x^4}{4}\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(f'(x) = 3x^2\\), formule \\((x^n)' = nx^{n-1}\\) avec \\(n=3\\).",
  "id": "derivation-lycee-01",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de la fonction constante \\(f(x) = 5\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = 0\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = 5\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = 1\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x)\\) n'existe pas"
   }
  ],
  "ans": "a",
  "ansText": "La dérivée d'une constante est toujours nulle : \\(f'(x) = 0\\).",
  "id": "derivation-lycee-02",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = 3x^2 - 2x + 7\\). Calculer \\(f'(1)\\).",
  "ans": 4,
  "ansText": "\\(f'(x) = 6x - 2\\), donc \\(f'(1) = 6 - 2 = 4\\).",
  "tol": 0.01,
  "id": "derivation-lycee-03",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de \\(f(x) = \\dfrac{1}{x}\\) sur \\(]0;+\\infty[\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = \\dfrac{1}{x^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = -\\dfrac{1}{x}\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = -\\dfrac{1}{x^2}\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = \\dfrac{-1}{2x}\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(f'(x) = -\\dfrac{1}{x^2}\\).",
  "id": "derivation-lycee-04",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de \\(f(x) = \\sqrt{x}\\) sur \\(]0;+\\infty[\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = \\dfrac{1}{\\sqrt{x}}\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = 2\\sqrt{x}\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = \\dfrac{\\sqrt{x}}{2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(x) = \\dfrac{1}{2\\sqrt{x}}\\).",
  "id": "derivation-lycee-05",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = (2x+1)(x-3)\\). En utilisant la formule du produit \\((uv)'=u'v+uv'\\), calculer \\(f'(0)\\).",
  "ans": -5,
  "ansText": "Avec \\(u=2x+1\\), \\(u'=2\\), \\(v=x-3\\), \\(v'=1\\) : \\(f'(x) = 2(x-3) + (2x+1) = 4x - 5\\), donc \\(f'(0) = -5\\).",
  "tol": 0.01,
  "id": "derivation-lycee-06",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\dfrac{x+2}{x-1}\\) sur \\(]1;+\\infty[\\). Quelle est \\(f'(x)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = \\dfrac{-3}{(x-1)^2}\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = \\dfrac{3}{(x-1)^2}\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = \\dfrac{1}{(x-1)^2}\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = \\dfrac{-3}{x-1}\\)"
   }
  ],
  "ans": "a",
  "ansText": "Avec \\(u=x+2\\), \\(u'=1\\), \\(v=x-1\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{(x-1)-(x+2)}{(x-1)^2} = \\dfrac{-3}{(x-1)^2}\\).",
  "id": "derivation-lycee-07",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de \\(f(x) = (5x+2)^2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = 50x + 20\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = 10x + 4\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = 25x + 10\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = 5x + 2\\)"
   }
  ],
  "ans": "a",
  "ansText": "Avec la règle de composée \\(x \\mapsto u(ax+b)\\), \\(u(t)=t^2\\), \\(u'(t)=2t\\) : \\(f'(x) = 5 \\times 2(5x+2) = 10(5x+2) = 50x+20\\). Oublier le facteur \\(5\\) donne l'erreur classique \\(2(5x+2)=10x+4\\).",
  "id": "derivation-lycee-08",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^2 - 4x + 5\\). La tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\) a pour équation réduite \\(y = mx + p\\). Donner la valeur de \\(p\\).",
  "ans": 4,
  "ansText": "\\(f'(x)=2x-4\\). \\(f(1) = 1-4+5=2\\) et \\(f'(1) = 2-4=-2\\). Tangente : \\(y = -2(x-1)+2 = -2x+4\\), donc \\(p=4\\) (et \\(m=-2\\)).",
  "tol": 0.01,
  "id": "derivation-lycee-09",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "On sait que \\(f'(x) &lt; 0\\) sur \\(]-\\infty;2[\\), \\(f'(2)=0\\) et \\(f'(x) > 0\\) sur \\(]2;+\\infty[\\). Que peut-on dire de \\(f\\) en \\(x=2\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "f admet un minimum local en 2"
   },
   {
    "key": "b",
    "text": "f admet un maximum local en 2"
   },
   {
    "key": "c",
    "text": "f n'admet pas d'extremum en 2 car la dérivée s'annule en un seul point"
   },
   {
    "key": "d",
    "text": "On ne peut rien dire sans connaître f(2)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'\\) change de signe (négative puis positive) en \\(2\\), donc \\(f\\) admet un minimum local en \\(2\\) (décroissante avant, croissante après).",
  "id": "derivation-lycee-10",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^3\\). On a \\(f'(x) = 3x^2\\), donc \\(f'(0) = 0\\). Peut-on affirmer que \\(f\\) admet un extremum local en \\(0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, un minimum local"
   },
   {
    "key": "b",
    "text": "Oui, un maximum local"
   },
   {
    "key": "c",
    "text": "Non, car f' ne change pas de signe en 0"
   },
   {
    "key": "d",
    "text": "On ne peut pas savoir sans calculer f(0)"
   }
  ],
  "ans": "c",
  "ansText": "Non : \\(f'(x) = 3x^2 \\geq 0\\) pour tout \\(x\\), la dérivée ne change jamais de signe en \\(0\\) (positive des deux côtés), donc il n'y a pas d'extremum local en \\(0\\), même si \\(f'(0)=0\\).",
  "id": "derivation-lycee-11",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\dfrac{x-1}{x^2+1}\\). En utilisant la formule du quotient, calculer \\(f'(0)\\).",
  "ans": 1,
  "ansText": "Avec \\(u=x-1\\), \\(u'=1\\), \\(v=x^2+1\\), \\(v'=2x\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{(x^2+1) - (x-1)(2x)}{(x^2+1)^2} = \\dfrac{-x^2+2x+1}{(x^2+1)^2}\\). Donc \\(f'(0) = \\dfrac{1}{1} = 1\\).",
  "tol": 0.01,
  "id": "derivation-lycee-12",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\((u_n)\\) la suite arithmétique de premier terme \\(u_0=4\\) et de raison \\(r=5\\). Calculer \\(u_6\\).",
  "ans": 34,
  "ansText": "\\(u_6 = u_0+6r = 4+30 = 34\\)",
  "tol": 0.01,
  "id": "suites-lycee-01",
  "cat": "suites-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=3\\) et de raison \\(q=2\\). Calculer \\(u_4\\).",
  "ans": 48,
  "ansText": "\\(u_4 = u_0\\,q^4 = 3\\times16 = 48\\)",
  "tol": 0.01,
  "id": "suites-lycee-02",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "La suite \\((u_n)\\) est définie par \\(u_0=2\\) et, pour tout \\(n\\), \\(u_{n+1}=u_n+7\\). Que peut-on dire de \\((u_n)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est arithmétique de raison \\(7\\)"
   },
   {
    "key": "b",
    "text": "Elle est arithmétique de raison \\(2\\)"
   },
   {
    "key": "c",
    "text": "Elle est géométrique de raison \\(7\\)"
   },
   {
    "key": "d",
    "text": "Elle n'est ni arithmétique ni géométrique"
   }
  ],
  "ans": "a",
  "ansText": "\\(u_{n+1}=u_n+7\\) : on ajoute toujours \\(7\\), donc arithmétique de raison \\(7\\) (le premier terme \\(u_0=2\\) n'est pas la raison).",
  "id": "suites-lycee-03",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "La suite \\((u_n)\\) est définie par \\(u_0=1\\) et, pour tout \\(n\\), \\(u_{n+1}=-3u_n\\). Que peut-on dire de \\((u_n)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est arithmétique de raison \\(-3\\)"
   },
   {
    "key": "b",
    "text": "Elle est géométrique de raison \\(-3\\)"
   },
   {
    "key": "c",
    "text": "Elle est géométrique de raison \\(1\\)"
   },
   {
    "key": "d",
    "text": "Elle n'est ni arithmétique ni géométrique"
   }
  ],
  "ans": "b",
  "ansText": "\\(u_{n+1}=-3\\,u_n\\) : on multiplie toujours par \\(-3\\), donc géométrique de raison \\(q=-3\\).",
  "id": "suites-lycee-04",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Quel est le sens de variation de la suite définie pour tout \\(n\\) par \\(u_n = 5-2n\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Strictement croissante"
   },
   {
    "key": "b",
    "text": "Strictement décroissante"
   },
   {
    "key": "c",
    "text": "Constante"
   },
   {
    "key": "d",
    "text": "Ni croissante ni décroissante"
   }
  ],
  "ans": "b",
  "ansText": "\\(u_{n+1}-u_n = 5-2(n+1)-(5-2n) = -2 &lt; 0\\) pour tout \\(n\\) : strictement décroissante.",
  "id": "suites-lycee-05",
  "cat": "suites-lycee"
 },
 {
  "type": "num",
  "q": "Soit la suite arithmétique de premier terme \\(u_0=1\\) et de raison \\(r=2\\) (donc \\(u_n=1+2n\\)). Calculer la somme des \\(10\\) premiers termes \\(u_0+u_1+\\dots+u_9\\).",
  "ans": 100,
  "ansText": "\\(u_9=1+18=19\\), donc \\(S = 10\\times\\dfrac{1+19}{2} = 10\\times10 = 100\\) (c'est la somme des \\(10\\) premiers nombres impairs).",
  "tol": 0.01,
  "id": "suites-lycee-06",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit la suite géométrique de premier terme \\(u_0=1\\) et de raison \\(q=2\\). Que vaut la somme des \\(6\\) premiers termes \\(u_0+u_1+\\dots+u_5\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(63\\)"
   },
   {
    "key": "b",
    "text": "\\(64\\)"
   },
   {
    "key": "c",
    "text": "\\(31\\)"
   },
   {
    "key": "d",
    "text": "\\(127\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(S = 1\\times\\dfrac{1-2^6}{1-2} = \\dfrac{1-64}{-1} = 63\\) (vérification directe : \\(1+2+4+8+16+32=63\\)). \\(127\\) correspondrait à \\(7\\) termes, \\(31\\) à un exposant faux dans la formule.",
  "id": "suites-lycee-07",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Pour une suite géométrique de premier terme \\(u_0\\) et de raison \\(q=1\\), que vaut la somme des \\(n+1\\) premiers termes \\(u_0+u_1+\\dots+u_n\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((n+1)\\,u_0\\)"
   },
   {
    "key": "b",
    "text": "\\(u_0\\dfrac{1-1^{n+1}}{1-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(0\\)"
   },
   {
    "key": "d",
    "text": "\\(n\\,u_0\\)"
   }
  ],
  "ans": "a",
  "ansText": "Si \\(q=1\\), la suite est constante égale à \\(u_0\\) : la somme des \\(n+1\\) termes vaut \\((n+1)u_0\\). La formule \\(u_0\\frac{1-q^{n+1}}{1-q}\\) est invalide pour \\(q=1\\) (division par \\(0\\)).",
  "id": "suites-lycee-08",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\((u_n)\\) une suite à termes strictement positifs telle que, pour tout \\(n\\), \\(\\dfrac{u_{n+1}}{u_n} = \\dfrac{n+1}{n+3}\\). Quel est le sens de variation de \\((u_n)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Strictement croissante"
   },
   {
    "key": "b",
    "text": "Strictement décroissante"
   },
   {
    "key": "c",
    "text": "Constante"
   },
   {
    "key": "d",
    "text": "On ne peut pas déterminer le sens de variation"
   }
  ],
  "ans": "b",
  "ansText": "Pour tout \\(n\\geq0\\), \\(n+1 &lt; n+3\\), donc \\(\\dfrac{n+1}{n+3} &lt; 1\\) : le quotient \\(\\frac{u_{n+1}}{u_n}\\) est toujours strictement inférieur à \\(1\\), donc \\((u_n)\\) est strictement décroissante (critère du quotient, termes positifs).",
  "id": "suites-lycee-09",
  "cat": "suites-lycee"
 },
 {
  "type": "num",
  "q": "Une suite arithmétique a pour premier terme (au rang \\(1\\)) \\(u_1=7\\) et pour raison \\(r=4\\). Calculer la somme \\(S=u_1+u_2+\\dots+u_{10}\\) (les \\(10\\) premiers termes, à partir du rang \\(1\\)).",
  "ans": 250,
  "ansText": "\\(u_{10}=u_1+9r=7+36=43\\), donc \\(S = 10\\times\\dfrac{u_1+u_{10}}{2} = 10\\times\\dfrac{7+43}{2} = 10\\times25 = 250\\) (attention : ici \\(10\\) est le nombre de termes de \\(u_1\\) à \\(u_{10}\\), pas \\(n+1\\)).",
  "tol": 0.01,
  "id": "suites-lycee-10",
  "cat": "suites-lycee"
 },
 {
  "type": "num",
  "q": "Une suite géométrique de raison \\(q=\\dfrac{1}{2}\\) vérifie \\(u_2=8\\). Calculer \\(u_5\\).",
  "ans": 1,
  "ansText": "\\(u_5 = u_2\\,q^{5-2} = 8\\times\\left(\\dfrac{1}{2}\\right)^3 = 8\\times\\dfrac{1}{8} = 1\\)",
  "tol": 0.01,
  "id": "suites-lycee-11",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Pour démontrer par récurrence que, pour tout \\(n\\), une propriété \\(P(n)\\) est vraie, un élève rédige l'hérédité ainsi : « Supposons que \\(P(n+1)\\) est vraie. Montrons alors que \\(P(n)\\) est vraie. » Quel est le défaut de cette rédaction ?",
  "opts": [
   {
    "key": "a",
    "text": "L'hérédité part de l'hypothèse sur \\(P(n+1)\\) au lieu de \\(P(n)\\) : c'est l'inverse de ce qu'il faut faire (supposer \\(P(n)\\) vraie et en déduire \\(P(n+1)\\))"
   },
   {
    "key": "b",
    "text": "C'est l'étape d'initialisation qui est fausse, pas l'hérédité"
   },
   {
    "key": "c",
    "text": "La conclusion du principe de récurrence est mal énoncée"
   },
   {
    "key": "d",
    "text": "Il n'y a aucun défaut, cette rédaction est correcte"
   }
  ],
  "ans": "a",
  "ansText": "L'hérédité doit supposer vraie l'hypothèse de récurrence \\(P(n)\\) (au rang \\(n\\)) et en déduire \\(P(n+1)\\). Partir de \\(P(n+1)\\) pour \"redémontrer\" \\(P(n)\\) inverse le sens de l'implication et ne prouve rien (raisonnement circulaire).",
  "id": "suites-lycee-12",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Simplifier \\( e^5\\times e^{-3} \\).",
  "opts": [
   {
    "key": "a",
    "text": "\\( e^2 \\)"
   },
   {
    "key": "b",
    "text": "\\( e^8 \\)"
   },
   {
    "key": "c",
    "text": "\\( e^{-2} \\)"
   },
   {
    "key": "d",
    "text": "\\( e^{15} \\)"
   }
  ],
  "ans": "a",
  "ansText": "\\( e^5\\times e^{-3}=e^{5-3}=e^2 \\)",
  "id": "exp-log-trigo-01",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Quel est le signe de \\( e^x \\) pour tout réel \\( x \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Toujours strictement positif"
   },
   {
    "key": "b",
    "text": "Toujours strictement négatif"
   },
   {
    "key": "c",
    "text": "Dépend du signe de \\( x \\)"
   },
   {
    "key": "d",
    "text": "Nul lorsque \\( x=0 \\)"
   }
  ],
  "ans": "a",
  "ansText": "\\( e^x>0 \\) pour tout \\( x\\in\\mathbb{R} \\), quel que soit le signe de \\( x \\)",
  "id": "exp-log-trigo-02",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Calculer \\( \\ln(e^3) \\).",
  "ans": 3,
  "ansText": "\\( \\ln(e^3)=3 \\) car \\( \\ln \\) et \\( \\exp \\) sont réciproques",
  "tol": 0.0001,
  "id": "exp-log-trigo-03",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Pour \\( a>0 \\) et \\( b>0 \\), \\( \\ln(a)+\\ln(b) \\) est égal à :",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\ln(a+b) \\)"
   },
   {
    "key": "b",
    "text": "\\( \\ln(ab) \\)"
   },
   {
    "key": "c",
    "text": "\\( \\ln(a-b) \\)"
   },
   {
    "key": "d",
    "text": "\\( \\ln(a/b) \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( \\ln(a)+\\ln(b)=\\ln(ab) \\) ; attention, \\( \\ln(a+b) \\) est un piège classique et faux en général",
  "id": "exp-log-trigo-04",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Quelle est la valeur exacte de \\( \\cos(\\pi/3) \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( \\dfrac{1}{2} \\)"
   },
   {
    "key": "b",
    "text": "\\( \\dfrac{\\sqrt{3}}{2} \\)"
   },
   {
    "key": "c",
    "text": "\\( \\dfrac{\\sqrt{2}}{2} \\)"
   },
   {
    "key": "d",
    "text": "\\( 1 \\)"
   }
  ],
  "ans": "a",
  "ansText": "\\( \\cos(\\pi/3)=1/2 \\) (valeur remarquable du tableau)",
  "id": "exp-log-trigo-05",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Calculer \\( \\sin(\\pi/6) \\).",
  "ans": 0.5,
  "ansText": "\\( \\sin(\\pi/6)=1/2 \\)",
  "tol": 0.0001,
  "id": "exp-log-trigo-06",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Soit \\( f(x)=e^{2x+1} \\). Calculer \\( f'(0) \\) (donner une valeur approchée à \\( 10^{-2} \\) près).",
  "ans": 5.44,
  "ansText": "\\( f'(x)=2e^{2x+1} \\), donc \\( f'(0)=2e\\approx 5{,}44 \\)",
  "tol": 0.01,
  "id": "exp-log-trigo-07",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Résoudre l'équation \\( e^{x}=7 \\) (\\( x\\in\\mathbb{R} \\)).",
  "opts": [
   {
    "key": "a",
    "text": "\\( x=\\ln 7 \\)"
   },
   {
    "key": "b",
    "text": "\\( x=7 \\)"
   },
   {
    "key": "c",
    "text": "\\( x=e^7 \\)"
   },
   {
    "key": "d",
    "text": "\\( x=1/7 \\)"
   }
  ],
  "ans": "a",
  "ansText": "On applique \\( \\ln \\) aux deux membres : \\( x=\\ln(7) \\)",
  "id": "exp-log-trigo-08",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Résoudre \\( \\cos x=\\dfrac{\\sqrt{2}}{2} \\) sur l'intervalle \\( [0,\\pi] \\) (donner la solution en radians, à \\( 10^{-2} \\) près).",
  "ans": 0.79,
  "ansText": "\\( x=\\pi/4\\approx 0{,}79 \\) ; sur \\( [0,\\pi] \\), \\( \\cos \\) est bijective donc il n'y a qu'une seule solution ici",
  "tol": 0.01,
  "id": "exp-log-trigo-09",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Résoudre \\( \\sin x=\\dfrac{1}{2} \\) sur \\( [0,2\\pi[ \\).",
  "opts": [
   {
    "key": "a",
    "text": "\\( x=\\pi/6 \\) uniquement"
   },
   {
    "key": "b",
    "text": "\\( x=\\pi/6 \\) et \\( x=5\\pi/6 \\)"
   },
   {
    "key": "c",
    "text": "\\( x=\\pi/6 \\) et \\( x=7\\pi/6 \\)"
   },
   {
    "key": "d",
    "text": "\\( x=\\pi/3 \\) et \\( x=2\\pi/3 \\)"
   }
  ],
  "ans": "b",
  "ansText": "\\( \\sin x=\\sin a \\iff x=a+2k\\pi \\) ou \\( x=\\pi-a+2k\\pi \\) ; ici \\( a=\\pi/6 \\), donc \\( x=\\pi/6 \\) ou \\( x=\\pi-\\pi/6=5\\pi/6 \\)",
  "id": "exp-log-trigo-10",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Résoudre \\( e^{2x-1}=5 \\) et donner la valeur de \\( x \\) à \\( 10^{-2} \\) près.",
  "ans": 1.3,
  "ansText": "\\( 2x-1=\\ln 5 \\), donc \\( x=\\dfrac{1+\\ln 5}{2}\\approx 1{,}30 \\)",
  "tol": 0.01,
  "id": "exp-log-trigo-11",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Que peut-on dire de l'équation \\( \\ln(x-4)=\\ln(2-x) \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle admet \\( x=3 \\) comme unique solution"
   },
   {
    "key": "b",
    "text": "Elle n'admet aucune solution"
   },
   {
    "key": "c",
    "text": "Elle admet \\( x=6 \\) comme unique solution"
   },
   {
    "key": "d",
    "text": "Elle admet \\( x=-1 \\) comme unique solution"
   }
  ],
  "ans": "b",
  "ansText": "Le domaine exigerait \\( x>4 \\) et \\( x&lt;2 \\) simultanément, ce qui est impossible ; \\( x=3 \\) obtenu en égalant les arguments ne vérifie pas ce domaine et doit être rejeté : aucune solution",
  "id": "exp-log-trigo-12",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Quelle est la négation de la proposition \\(\\forall x\\in\\mathbb R,\\ x^2\\ge 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall x\\in\\mathbb R,\\ x^2&lt;0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\exists x\\in\\mathbb R,\\ x^2\\ge 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall x\\in\\mathbb R,\\ x^2\\le 0\\)"
   }
  ],
  "ans": "b",
  "ansText": "On change \\(\\forall\\) en \\(\\exists\\) et on nie \\(x^2\\ge 0\\) en \\(x^2&lt;0\\) : \\(\\exists x\\in\\mathbb R,\\ x^2&lt;0\\).",
  "id": "logique-raisonnement-01",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Quelle est la négation de \\(\\exists x\\in\\mathbb R,\\ x+1=0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall x\\in\\mathbb R,\\ x+1=0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists x\\in\\mathbb R,\\ x+1\\ne 0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall x\\in\\mathbb R,\\ x+1\\ne 0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\exists x\\in\\mathbb R,\\ x+1=0\\)"
   }
  ],
  "ans": "c",
  "ansText": "On change \\(\\exists\\) en \\(\\forall\\) et on nie \\(x+1=0\\) en \\(x+1\\ne 0\\) : \\(\\forall x\\in\\mathbb R,\\ x+1\\ne 0\\).",
  "id": "logique-raisonnement-02",
  "cat": "logique-raisonnement"
 },
 {
  "type": "num",
  "q": "Combien de sous-ensembles (parties) possède un ensemble à 5 éléments ?",
  "ans": 32,
  "ansText": "\\(2^5=32\\).",
  "tol": 0.01,
  "id": "logique-raisonnement-03",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "On considère l'implication \\(P\\Rightarrow Q\\) avec \\(P\\) : « \\(n\\) est divisible par 4 » et \\(Q\\) : « \\(n\\) est pair ». Quelle est la contraposée de cette implication ?",
  "opts": [
   {
    "key": "a",
    "text": "« si \\(n\\) est pair alors \\(n\\) est divisible par 4 »"
   },
   {
    "key": "b",
    "text": "« si \\(n\\) n'est pas pair alors \\(n\\) n'est pas divisible par 4 »"
   },
   {
    "key": "c",
    "text": "« si \\(n\\) n'est pas divisible par 4 alors \\(n\\) n'est pas pair »"
   },
   {
    "key": "d",
    "text": "« si \\(n\\) n'est pas divisible par 4 alors \\(n\\) est pair »"
   }
  ],
  "ans": "b",
  "ansText": "La contraposée de \\(P\\Rightarrow Q\\) est \\(\\text{non } Q\\Rightarrow\\text{non } P\\) : « si \\(n\\) n'est pas pair alors \\(n\\) n'est pas divisible par 4 ».",
  "id": "logique-raisonnement-04",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Une implication \\(P\\Rightarrow Q\\) et sa contraposée \\(\\text{non } Q\\Rightarrow \\text{non } P\\) ont-elles toujours la même valeur de vérité (toutes deux vraies ou toutes deux fausses) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, toujours : ce sont deux formulations équivalentes de la même implication."
   },
   {
    "key": "b",
    "text": "Non, la contraposée peut être vraie alors que l'implication est fausse."
   },
   {
    "key": "c",
    "text": "Cela dépend des propositions \\(P\\) et \\(Q\\) considérées."
   },
   {
    "key": "d",
    "text": "Oui, mais seulement si \\(P\\) et \\(Q\\) sont des équations."
   }
  ],
  "ans": "a",
  "ansText": "L'implication et sa contraposée sont toujours équivalentes, quelles que soient \\(P\\) et \\(Q\\) : c'est un résultat général de logique, indépendant du contexte.",
  "id": "logique-raisonnement-05",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "L'implication « si un entier \\(n\\) est divisible par 4, alors \\(n\\) est pair » est vraie. Que dire de sa réciproque « si \\(n\\) est pair, alors \\(n\\) est divisible par 4 » ?",
  "opts": [
   {
    "key": "a",
    "text": "Elle est vraie aussi, car une implication vraie a toujours une réciproque vraie."
   },
   {
    "key": "b",
    "text": "Elle est fausse : \\(n=2\\) est pair mais n'est pas divisible par 4, c'est un contre-exemple."
   },
   {
    "key": "c",
    "text": "Elle est vraie, car c'est la contraposée de l'implication de départ."
   },
   {
    "key": "d",
    "text": "On ne peut rien en dire sans étudier tous les entiers pairs un par un."
   }
  ],
  "ans": "b",
  "ansText": "\\(n=2\\) est pair mais n'est pas divisible par 4 : c'est un contre-exemple qui infirme la réciproque. Implication et réciproque ne sont pas équivalentes en général.",
  "id": "logique-raisonnement-06",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Quelle est la négation de \\(\\forall x\\in\\mathbb R,\\ (x>0 \\text{ et } x&lt;1)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ et } x\\ge 1)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\exists x\\in\\mathbb R,\\ (x&lt;0 \\text{ ou } x>1)\\)"
   }
  ],
  "ans": "b",
  "ansText": "La négation de « P et Q » est « non P ou non Q » ; ici, \\(\\text{non}(x>0)\\) est \\(x\\le 0\\) et \\(\\text{non}(x&lt;1)\\) est \\(x\\ge 1\\) : \\(\\exists x\\in\\mathbb R,\\ (x\\le 0 \\text{ ou } x\\ge 1)\\).",
  "id": "logique-raisonnement-07",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Pour infirmer la proposition \\(\\forall x\\in\\mathbb R,\\ x^2>x\\), lequel des réels suivants est un contre-exemple valable ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x=2\\)"
   },
   {
    "key": "b",
    "text": "\\(x=-1\\)"
   },
   {
    "key": "c",
    "text": "\\(x=0{,}5\\)"
   },
   {
    "key": "d",
    "text": "\\(x=-2\\)"
   }
  ],
  "ans": "c",
  "ansText": "Pour \\(x=0{,}5\\) : \\(x^2=0{,}25\\), qui n'est pas supérieur à \\(0{,}5\\) : la proposition \\(x^2>x\\) est fausse pour cette valeur, ce qui l'infirme. (Pour \\(x=2\\), \\(x=-1\\) et \\(x=-2\\), on a bien \\(x^2>x\\).)",
  "id": "logique-raisonnement-08",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Un élève écrit : « Pour montrer que tout nombre premier supérieur à 2 est impair, je vérifie que 3, 5, 7 et 11 sont impairs : c'est donc démontré. » Ce raisonnement est-il valable ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, car il suffit de vérifier plusieurs exemples pour conclure."
   },
   {
    "key": "b",
    "text": "Non : vérifier des exemples, même plusieurs, ne prouve pas une proposition universelle ; il faut un argument valable pour tout nombre premier supérieur à 2 (par exemple, un entier pair supérieur à 2 est divisible par 2 donc n'est pas premier)."
   },
   {
    "key": "c",
    "text": "Oui, car les nombres premiers testés sont suffisamment grands pour généraliser."
   },
   {
    "key": "d",
    "text": "Non, car il aurait fallu utiliser un raisonnement par récurrence."
   }
  ],
  "ans": "b",
  "ansText": "Une proposition universelle ne se démontre pas en vérifiant des exemples, aussi nombreux soient-ils : il faut un argument valable pour un élément quelconque de l'ensemble considéré.",
  "id": "logique-raisonnement-09",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Pour démontrer une proposition \\(P\\) par l'absurde, la démarche correcte est :",
  "opts": [
   {
    "key": "a",
    "text": "Supposer \\(P\\) vraie et vérifier qu'elle est cohérente avec les hypothèses."
   },
   {
    "key": "b",
    "text": "Supposer \\(\\text{non } P\\) vraie et aboutir à une contradiction, ce qui permet de conclure que \\(P\\) est vraie."
   },
   {
    "key": "c",
    "text": "Trouver un exemple où \\(P\\) est vraie."
   },
   {
    "key": "d",
    "text": "Montrer directement la contraposée de \\(P\\)."
   }
  ],
  "ans": "b",
  "ansText": "Le raisonnement par l'absurde consiste à supposer le contraire de ce qu'on veut montrer, puis à en déduire une absurdité (contradiction), ce qui force la proposition de départ à être vraie.",
  "id": "logique-raisonnement-10",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "On considère la proposition \\(\\forall n\\in\\mathbb N,\\ \\exists m\\in\\mathbb N,\\ m>n\\). Quelle est sa négation ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\exists n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\)"
   },
   {
    "key": "b",
    "text": "\\(\\forall n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\)"
   },
   {
    "key": "c",
    "text": "\\(\\exists n\\in\\mathbb N,\\ \\exists m\\in\\mathbb N,\\ m\\le n\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall m\\in\\mathbb N,\\ \\exists n\\in\\mathbb N,\\ m\\le n\\)"
   }
  ],
  "ans": "a",
  "ansText": "On inverse chaque quantificateur dans l'ordre (\\(\\forall\\to\\exists\\), \\(\\exists\\to\\forall\\)) puis on nie \\(m>n\\) en \\(m\\le n\\) : \\(\\exists n\\in\\mathbb N,\\ \\forall m\\in\\mathbb N,\\ m\\le n\\).",
  "id": "logique-raisonnement-11",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f:\\mathbb R\\to\\mathbb R\\). On considère la proposition \\(\\exists M\\in\\mathbb R,\\ \\forall x\\in\\mathbb R,\\ f(x)\\le M\\) (\\(f\\) est majorée par un majorant commun \\(M\\)). Laquelle des propositions suivantes n'a PAS le même sens (et est en réalité beaucoup plus faible) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est majorée sur \\(\\mathbb R\\)."
   },
   {
    "key": "b",
    "text": "\\(\\forall x\\in\\mathbb R,\\ \\exists M\\in\\mathbb R,\\ f(x)\\le M\\) (chaque \\(x\\) a son propre majorant, qui peut dépendre de \\(x\\))."
   },
   {
    "key": "c",
    "text": "Il existe un réel qui majore toutes les valeurs prises par \\(f\\)."
   },
   {
    "key": "d",
    "text": "\\(f(x)\\) ne dépasse jamais une certaine constante \\(M\\) fixée à l'avance."
   }
  ],
  "ans": "b",
  "ansText": "En inversant l'ordre des quantificateurs, on obtient \\(\\forall x,\\exists M,\\ f(x)\\le M\\), qui est toujours vraie (il suffit de prendre \\(M=f(x)\\) pour chaque \\(x\\)) : ce n'est plus la même affirmation que « \\(f\\) est majorée », qui exige un \\(M\\) commun à tous les \\(x\\).",
  "id": "logique-raisonnement-12",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Quelle est la forme canonique de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((x-2)^2-1\\)"
   },
   {
    "key": "b",
    "text": "\\((x-2)^2+1\\)"
   },
   {
    "key": "c",
    "text": "\\((x+2)^2-1\\)"
   },
   {
    "key": "d",
    "text": "\\((x-4)^2+3\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((x-2)^2-1\\)",
  "id": "problemes-synthese-01",
  "cat": "problemes-synthese",
  "problem": "pbA"
 },
 {
  "type": "num",
  "q": "Quelle est la plus grande des deux racines de \\(f\\) ?",
  "ans": 3,
  "ansText": "3",
  "tol": 0.01,
  "id": "problemes-synthese-02",
  "cat": "problemes-synthese",
  "problem": "pbA"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble des solutions de l'inéquation \\(f(x) \\leqslant 0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([1\\,;\\,3]\\)"
   },
   {
    "key": "b",
    "text": "\\(]-\\infty\\,;\\,1] \\cup [3\\,;\\,+\\infty[\\)"
   },
   {
    "key": "c",
    "text": "\\([-3\\,;\\,-1]\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{R}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\([1\\,;\\,3]\\)",
  "id": "problemes-synthese-03",
  "cat": "problemes-synthese",
  "problem": "pbA"
 },
 {
  "type": "num",
  "q": "Calculer le nombre dérivé \\(f'(4)\\).",
  "ans": 4,
  "ansText": "4",
  "tol": 0.01,
  "id": "problemes-synthese-04",
  "cat": "problemes-synthese",
  "problem": "pbA"
 },
 {
  "type": "qcm",
  "q": "Quelle est la nature de la suite \\((u_n)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Géométrique de raison \\(0{,}9\\)"
   },
   {
    "key": "b",
    "text": "Arithmétique de raison \\(0{,}9\\)"
   },
   {
    "key": "c",
    "text": "Géométrique de raison \\(-0{,}1\\)"
   },
   {
    "key": "d",
    "text": "Arithmétique de raison \\(-200\\)"
   }
  ],
  "ans": "a",
  "ansText": "Géométrique de raison \\(0{,}9\\)",
  "id": "problemes-synthese-05",
  "cat": "problemes-synthese",
  "problem": "pbB"
 },
 {
  "type": "num",
  "q": "Calculer \\(u_2\\) (nombre d'individus après 2 semaines), arrondi à l'unité.",
  "ans": 1620,
  "ansText": "1620",
  "tol": 1,
  "id": "problemes-synthese-06",
  "cat": "problemes-synthese",
  "problem": "pbB"
 },
 {
  "type": "num",
  "q": "Quelle est la limite de la suite \\((u_n)\\) quand \\(n \\to +\\infty\\) ?",
  "ans": 0,
  "ansText": "0",
  "tol": 0.01,
  "id": "problemes-synthese-07",
  "cat": "problemes-synthese",
  "problem": "pbB"
 },
 {
  "type": "qcm",
  "q": "Quelle écriture est équivalente à \\(u_n = 2000 \\times 0{,}9^n\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(2000\\,e^{\\,n\\ln(0,9)}\\)"
   },
   {
    "key": "b",
    "text": "\\(2000\\,e^{\\,0,9n}\\)"
   },
   {
    "key": "c",
    "text": "\\(2000\\,e^{-n}\\)"
   },
   {
    "key": "d",
    "text": "\\(2000\\,(\\ln 0{,}9)^n\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(2000\\,e^{\\,n\\ln(0,9)}\\)",
  "id": "problemes-synthese-08",
  "cat": "problemes-synthese",
  "problem": "pbB"
 },
 {
  "type": "qcm",
  "q": "Quelles sont les deux solutions de \\(\\cos(x)=\\dfrac12\\) sur \\([0\\,;\\,2\\pi]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{5\\pi}{3}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{\\pi}{6}\\) et \\(\\dfrac{11\\pi}{6}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac{2\\pi}{3}\\) et \\(\\dfrac{4\\pi}{3}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{2\\pi}{3}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\dfrac{\\pi}{3}\\) et \\(\\dfrac{5\\pi}{3}\\)",
  "id": "problemes-synthese-09",
  "cat": "problemes-synthese",
  "problem": "pbC"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble des solutions de \\(\\cos(x)\\geqslant\\dfrac12\\) sur \\([0\\,;\\,2\\pi]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([0\\,;\\,\\frac{\\pi}{3}] \\cup [\\frac{5\\pi}{3}\\,;\\,2\\pi]\\)"
   },
   {
    "key": "b",
    "text": "\\([\\frac{\\pi}{3}\\,;\\,\\frac{5\\pi}{3}]\\)"
   },
   {
    "key": "c",
    "text": "\\([0\\,;\\,\\frac{\\pi}{3}]\\)"
   },
   {
    "key": "d",
    "text": "\\(]\\frac{\\pi}{3}\\,;\\,\\frac{5\\pi}{3}[\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\([0\\,;\\,\\frac{\\pi}{3}] \\cup [\\frac{5\\pi}{3}\\,;\\,2\\pi]\\)",
  "id": "problemes-synthese-10",
  "cat": "problemes-synthese",
  "problem": "pbC"
 },
 {
  "type": "num",
  "q": "Sur le cercle trigonométrique, donner une valeur approchée à \\(0{,}01\\) près de \\(\\sin\\!\\left(\\dfrac{\\pi}{3}\\right)\\).",
  "ans": 0.8660254,
  "ansText": "\\(\\frac{\\sqrt3}{2}\\approx0{,}87\\)",
  "tol": 0.01,
  "id": "problemes-synthese-11",
  "cat": "problemes-synthese",
  "problem": "pbC"
 },
 {
  "type": "qcm",
  "q": "Sur l'intervalle \\([0\\,;\\,\\pi]\\), la fonction cosinus est ...",
  "opts": [
   {
    "key": "a",
    "text": "strictement décroissante"
   },
   {
    "key": "b",
    "text": "strictement croissante"
   },
   {
    "key": "c",
    "text": "constante"
   },
   {
    "key": "d",
    "text": "ni croissante, ni décroissante"
   }
  ],
  "ans": "a",
  "ansText": "strictement décroissante",
  "id": "problemes-synthese-12",
  "cat": "problemes-synthese",
  "problem": "pbC"
 },
 {
  "type": "qcm",
  "q": "La proposition \\(P\\) : « \\(\\forall x \\in \\mathbb{R},\\ x^2 \\geqslant x\\) » est-elle vraie ou fausse ?",
  "opts": [
   {
    "key": "a",
    "text": "Fausse : il existe un contre-exemple"
   },
   {
    "key": "b",
    "text": "Vraie : démontrée pour tout réel"
   },
   {
    "key": "c",
    "text": "On ne peut pas savoir sans calculatrice"
   },
   {
    "key": "d",
    "text": "Vraie uniquement pour \\(x\\geqslant0\\)"
   }
  ],
  "ans": "a",
  "ansText": "Fausse : il existe un contre-exemple",
  "id": "problemes-synthese-13",
  "cat": "problemes-synthese",
  "problem": "pbD"
 },
 {
  "type": "qcm",
  "q": "Parmi ces valeurs, laquelle est un contre-exemple à \\(P\\) (c'est-à-dire vérifie \\(x^2&lt;x\\)) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(0{,}5\\)"
   },
   {
    "key": "b",
    "text": "2"
   },
   {
    "key": "c",
    "text": "-2"
   },
   {
    "key": "d",
    "text": "1"
   }
  ],
  "ans": "a",
  "ansText": "\\(0{,}5\\)",
  "id": "problemes-synthese-14",
  "cat": "problemes-synthese",
  "problem": "pbD"
 },
 {
  "type": "qcm",
  "q": "Quelle est la négation correcte de \\(Q\\) : « \\(\\exists x \\in \\mathbb{R},\\ x^2+1=0\\) » ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall x \\in \\mathbb{R},\\ x^2+1\\neq0\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists x \\in \\mathbb{R},\\ x^2+1\\neq0\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall x \\in \\mathbb{R},\\ x^2+1=0\\)"
   },
   {
    "key": "d",
    "text": "\\(\\exists x \\in \\mathbb{R},\\ x^2+1&lt;0\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\forall x \\in \\mathbb{R},\\ x^2+1\\neq0\\)",
  "id": "problemes-synthese-15",
  "cat": "problemes-synthese",
  "problem": "pbD"
 },
 {
  "type": "num",
  "q": "Quel est le plus petit entier strictement positif vérifiant \\(x^2-1\\geqslant0\\) ?",
  "ans": 1,
  "ansText": "1",
  "tol": 0.01,
  "id": "problemes-synthese-16",
  "cat": "problemes-synthese",
  "problem": "pbD"
 },
 {
  "type": "qcm",
  "q": "Résoudre \\( |2x+1| \\ge 7 \\).",
  "opts": [
   {
    "key": "a",
    "text": "\\(]-\\infty,-4]\\cup[3,+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(]-\\infty,-4[\\,\\cup\\,]3,+\\infty[\\)"
   },
   {
    "key": "c",
    "text": "\\([-4,3]\\)"
   },
   {
    "key": "d",
    "text": "\\([3,+\\infty[\\)"
   }
  ],
  "ans": "a",
  "ansText": "Pour \\(r>0\\), \\(|x-a|\\ge r \\iff x\\le a-r\\) ou \\(x\\ge a+r\\), avec les bornes incluses. Ici \\(2x+1\\ge7 \\Rightarrow x\\ge3\\), ou \\(2x+1\\le-7 \\Rightarrow x\\le-4\\). Solution : \\(]-\\infty,-4]\\cup[3,+\\infty[\\) (union de deux demi-droites, pas un intervalle unique).",
  "id": "nombres-inegalites-13",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "L'équation \\( |2x-5|=9 \\) a deux solutions. Donner leur somme.",
  "ans": 5,
  "ansText": "\\(2x-5=9 \\Rightarrow x=7\\) ; ou \\(2x-5=-9 \\Rightarrow x=-2\\). Somme des solutions : \\(7+(-2)=5\\).",
  "tol": 0.01,
  "id": "nombres-inegalites-14",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "On sait que \\( 2 &lt; x &lt; 5 \\). Que peut-on en déduire sur \\( \\dfrac1x \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\dfrac1x \\in \\left]-\\dfrac12,-\\dfrac15\\right[\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac1x \\in \\left]\\dfrac15,\\dfrac12\\right[\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac1x \\in \\,]2,5[\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac1x \\in \\left]\\dfrac12,\\dfrac15\\right[\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(x\\) et les bornes \\(2\\) et \\(5\\) sont de même signe (strictement positifs), donc l'inverse renverse le sens de l'inégalité et échange les bornes : \\(2&lt;x&lt;5 \\Rightarrow \\dfrac15&lt;\\dfrac1x&lt;\\dfrac12\\), soit \\(\\dfrac1x\\in\\left]\\dfrac15,\\dfrac12\\right[\\).",
  "id": "nombres-inegalites-15",
  "cat": "nombres-inegalites"
 },
 {
  "type": "qcm",
  "q": "Résoudre \\( (x-1)(3-x) > 0 \\) à l'aide d'un tableau de signes.",
  "opts": [
   {
    "key": "a",
    "text": "\\(]-\\infty,3[\\)"
   },
   {
    "key": "b",
    "text": "\\([1,3]\\)"
   },
   {
    "key": "c",
    "text": "\\(]1,3[\\)"
   },
   {
    "key": "d",
    "text": "\\(]-\\infty,1[\\,\\cup\\,]3,+\\infty[\\)"
   }
  ],
  "ans": "c",
  "ansText": "Zéros en \\(x=1\\) et \\(x=3\\). \\(x-1\\) est négatif avant \\(1\\), positif après. \\(3-x\\) a un coefficient de \\(x\\) négatif, donc il est positif avant son zéro \\(3\\), négatif après : attention, c'est l'inverse du cas habituel. Sur \\(]1,3[\\), \\(x-1>0\\) et \\(3-x>0\\) : les deux facteurs sont positifs, le produit est positif. Ailleurs, les facteurs sont de signes contraires.",
  "id": "nombres-inegalites-16",
  "cat": "nombres-inegalites"
 },
 {
  "type": "num",
  "q": "On considère \\(f(x)=x^2-6x+m\\), où \\(m\\) est un paramètre réel. Déterminer la valeur de \\(m\\) pour laquelle \\(f\\) admet une racine double.",
  "ans": 9,
  "ansText": "\\(\\Delta=(-6)^2-4\\times1\\times m=36-4m\\). Une racine double correspond à \\(\\Delta=0\\), soit \\(36-4m=0\\), donc \\(m=9\\) (on retrouve \\(f(x)=x^2-6x+9=(x-3)^2\\)).",
  "tol": 0.001,
  "id": "second-degre-12",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Pour quelles valeurs du paramètre réel \\(m\\) le trinôme \\(f(x)=x^2+4x+m\\) n'admet-il aucune racine réelle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(m=4\\)"
   },
   {
    "key": "b",
    "text": "\\(m>4\\)"
   },
   {
    "key": "c",
    "text": "\\(m&lt;4\\)"
   },
   {
    "key": "d",
    "text": "\\(m>-4\\)"
   }
  ],
  "ans": "b",
  "ansText": "\\(\\Delta=4^2-4\\times1\\times m=16-4m\\). Pas de racine réelle \\(\\Leftrightarrow\\Delta&lt;0\\Leftrightarrow16-4m&lt;0\\Leftrightarrow m>4\\).",
  "id": "second-degre-13",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Un rectangle a un périmètre fixé égal à \\(20\\). En notant \\(x\\) la longueur d'un des côtés (avec \\(0&lt;x&lt;10\\)), l'autre côté mesure \\(10-x\\) et l'aire du rectangle est \\(A(x)=x(10-x)\\). Quelle est l'aire maximale possible de ce rectangle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(25\\)"
   },
   {
    "key": "b",
    "text": "\\(24\\)"
   },
   {
    "key": "c",
    "text": "\\(20\\)"
   },
   {
    "key": "d",
    "text": "\\(30\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(A(x)=-x^2+10x\\), avec \\(a=-1&lt;0\\) : \\(\\alpha=-\\dfrac{10}{2\\times(-1)}=5\\), \\(\\beta=A(5)=5\\times5=25\\). Le maximum de l'aire est donc \\(25\\), atteint pour \\(x=5\\) (un carré).",
  "id": "second-degre-14",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "En posant \\(X=x^2\\), on se ramène à une équation du second degré en \\(X\\) pour résoudre \\(x^4-5x^2+4=0\\) sur \\(\\mathbb{R}\\). Combien cette équation admet-elle de solutions réelles distinctes ?",
  "opts": [
   {
    "key": "a",
    "text": "0"
   },
   {
    "key": "b",
    "text": "2"
   },
   {
    "key": "c",
    "text": "Une infinité"
   },
   {
    "key": "d",
    "text": "4"
   }
  ],
  "ans": "d",
  "ansText": "\\(X^2-5X+4=0\\) a pour discriminant \\(\\Delta=25-16=9\\), donc \\(X=\\dfrac{5-3}{2}=1\\) ou \\(X=\\dfrac{5+3}{2}=4\\). Comme \\(X=x^2\\) et que \\(1>0\\) et \\(4>0\\), chaque valeur de \\(X\\) donne deux valeurs de \\(x\\) : \\(x=\\pm1\\) et \\(x=\\pm2\\), soit \\(4\\) solutions distinctes.",
  "id": "second-degre-15",
  "cat": "second-degre"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble de définition de \\(f(x) = \\dfrac{1}{\\sqrt{x-2}}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\([2\\,;+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{R}\\,\\setminus\\,\\{2\\}\\)"
   },
   {
    "key": "c",
    "text": "\\(]-\\infty\\,;2[\\)"
   },
   {
    "key": "d",
    "text": "\\(]2\\,;+\\infty[\\)"
   }
  ],
  "ans": "d",
  "ansText": "Il faut \\(x-2 \\geqslant 0\\) pour que la racine existe, mais aussi \\(\\sqrt{x-2} \\neq 0\\) puisqu'elle est au dénominateur, donc \\(x-2 > 0\\) strictement. On obtient \\(D_f = ]2\\,;+\\infty[\\).",
  "id": "fonctions-reference-13",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^2\\), étudiée sur l'intervalle \\([-2\\,;3]\\). Quel est le maximum de \\(f\\) sur cet intervalle ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(4\\)"
   },
   {
    "key": "b",
    "text": "\\(-2\\)"
   },
   {
    "key": "c",
    "text": "\\(0\\)"
   },
   {
    "key": "d",
    "text": "\\(9\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(f\\) est décroissante sur \\([-2\\,;0]\\) puis croissante sur \\([0\\,;3]\\) : le maximum sur \\([-2\\,;3]\\) est donc atteint à l'une des deux bornes. On compare \\(f(-2)=4\\) et \\(f(3)=9\\) : le maximum vaut \\(9\\), atteint en \\(x=3\\).",
  "id": "fonctions-reference-14",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = |x|\\). Que peut-on dire de \\(f(-7)\\) et \\(f(4)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f(-7) > f(4)\\)"
   },
   {
    "key": "b",
    "text": "\\(f(-7) &lt; f(4)\\)"
   },
   {
    "key": "c",
    "text": "On ne peut rien dire sans savoir si \\(-7\\) et \\(4\\) sont dans le même intervalle de monotonie"
   },
   {
    "key": "d",
    "text": "\\(f(-7) = f(4)\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(-7\\) et \\(4\\) ne sont pas dans le même intervalle de monotonie de \\(f\\) (l'un est négatif, l'autre positif), donc on ne peut pas utiliser directement le sens de variation : il faut calculer. \\(f(-7) = 7\\) et \\(f(4) = 4\\), donc \\(f(-7) > f(4)\\).",
  "id": "fonctions-reference-15",
  "cat": "fonctions-reference"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\dfrac{1}{|x|}\\), définie sur \\(\\mathbb{R}^*\\). Calculer \\(f(-5)\\).",
  "ans": 0.2,
  "ansText": "\\(f(-5) = \\dfrac{1}{|-5|} = \\dfrac{1}{5} = 0{,}2\\)",
  "tol": 0.01,
  "id": "fonctions-reference-16",
  "cat": "fonctions-reference"
 },
 {
  "type": "qcm",
  "q": "Quelle est la dérivée de \\(f(x) = e^{3x-1}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f'(x) = e^{3x-1}\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x) = 3e^{3x-1}\\)"
   },
   {
    "key": "c",
    "text": "\\(f'(x) = 3xe^{3x-1}\\)"
   },
   {
    "key": "d",
    "text": "\\(f'(x) = (3x-1)e^{3x-1}\\)"
   }
  ],
  "ans": "b",
  "ansText": "Avec la règle \\(x \\mapsto e^{u(x)}\\), \\(u(x)=3x-1\\) et \\(u'(x)=3\\) : \\(f'(x) = u'(x)e^{u(x)} = 3e^{3x-1}\\). Oublier le facteur \\(3\\) donne l'erreur \\(e^{3x-1}\\).",
  "id": "derivation-lycee-13",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^2 - 6x + 5\\). Pour quelle valeur de \\(a\\) la tangente à la courbe de \\(f\\) au point d'abscisse \\(a\\) est-elle horizontale ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(a = -3\\)"
   },
   {
    "key": "b",
    "text": "\\(a = 6\\)"
   },
   {
    "key": "c",
    "text": "\\(a = 3\\)"
   },
   {
    "key": "d",
    "text": "\\(a = 0\\)"
   }
  ],
  "ans": "c",
  "ansText": "La tangente est horizontale quand \\(f'(a)=0\\). Ici \\(f'(x) = 2x-6\\), donc \\(f'(a)=0 \\Leftrightarrow 2a-6=0 \\Leftrightarrow a=3\\).",
  "id": "derivation-lycee-14",
  "cat": "derivation-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = -x^2 + 4x - 1\\). On étudie le signe de \\(f'(x)\\) sur \\(\\mathbb{R}\\). Que peut-on en conclure sur \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est croissante sur \\(]-\\infty;2]\\) puis décroissante sur \\([2;+\\infty[\\) : \\(f\\) admet un maximum local en \\(2\\)"
   },
   {
    "key": "b",
    "text": "\\(f'(x)\\) ne s'annule jamais, donc \\(f\\) n'admet pas d'extremum"
   },
   {
    "key": "c",
    "text": "\\(f\\) est croissante sur tout \\(\\mathbb{R}\\) car le coefficient dominant de \\(f'\\) est négatif"
   },
   {
    "key": "d",
    "text": "\\(f\\) est décroissante sur \\(]-\\infty;2]\\) puis croissante sur \\([2;+\\infty[\\) : \\(f\\) admet un minimum local en \\(2\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(x) = -2x+4\\), qui s'annule en \\(x=2\\), est positive avant (\\(f'(1)=2>0\\)) et négative après (\\(f'(3)=-2&lt;0\\)). \\(f\\) est donc croissante puis décroissante, et admet un maximum local en \\(2\\).",
  "id": "derivation-lycee-15",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = \\dfrac{2x}{x+1}\\) sur \\(]-1;+\\infty[\\). Calculer le coefficient directeur de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a=1\\).",
  "ans": 0.5,
  "ansText": "Avec \\(u=2x\\), \\(u'=2\\), \\(v=x+1\\), \\(v'=1\\) : \\(f'(x) = \\dfrac{u'v-uv'}{v^2} = \\dfrac{2(x+1)-2x}{(x+1)^2} = \\dfrac{2}{(x+1)^2}\\). Donc \\(f'(1) = \\dfrac{2}{4} = 0{,}5\\), qui est le coefficient directeur de la tangente en \\(a=1\\).",
  "tol": 0.01,
  "id": "derivation-lycee-16",
  "cat": "derivation-lycee"
 },
 {
  "type": "num",
  "q": "Une suite \\((u_n)\\) est définie par \\(u_0=3\\) et, pour tout \\(n\\), \\(u_{n+1}=2u_n-1\\) (elle n'est ni arithmétique ni géométrique). Calculer \\(u_3\\) en utilisant la relation de récurrence terme après terme.",
  "ans": 17,
  "ansText": "\\(u_1=2\\times3-1=5\\), \\(u_2=2\\times5-1=9\\), \\(u_3=2\\times9-1=17\\). On ne peut pas utiliser une formule directe (la suite n'est ni arithmétique ni géométrique) : il faut calculer les termes un par un depuis \\(u_0\\).",
  "tol": 0.01,
  "id": "suites-lycee-13",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\((u_n)\\) la suite géométrique de premier terme \\(u_0=-4\\) et de raison \\(q=1{,}5\\). Quel est le comportement de \\((u_n)\\) quand \\(n\\) tend vers \\(+\\infty\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((u_n)\\) tend vers \\(+\\infty\\)"
   },
   {
    "key": "b",
    "text": "\\((u_n)\\) est constante"
   },
   {
    "key": "c",
    "text": "\\((u_n)\\) tend vers \\(-\\infty\\)"
   },
   {
    "key": "d",
    "text": "\\((u_n)\\) converge vers \\(0\\)"
   }
  ],
  "ans": "c",
  "ansText": "Ici \\(q=1{,}5>1\\) donc \\(|u_n|\\) devient de plus en plus grand, et comme \\(u_0=-4&lt;0\\), tous les termes restent négatifs et diminuent indéfiniment (\\(-4,-6,-9,-13{,}5,\\dots\\)) : \\((u_n)\\) tend vers \\(-\\infty\\). Le cas \\(|q|&lt;1\\) donnerait une convergence vers \\(0\\), mais ce n'est pas le cas ici.",
  "id": "suites-lycee-14",
  "cat": "suites-lycee"
 },
 {
  "type": "num",
  "q": "On considère la suite géométrique de premier terme \\(u_0=1000\\) et de raison \\(q=0{,}5\\) (elle converge vers \\(0\\)). Un algorithme de seuil doit déterminer le plus petit entier \\(n\\) tel que \\(u_n &lt; 1\\). Quelle est la valeur de cet entier \\(n\\) ?",
  "ans": 10,
  "ansText": "\\(u_n = 1000\\times0{,}5^{\\,n}\\). On calcule \\(u_9 = 1000/2^9 = 1000/512 \\approx 1{,}953 > 1\\) et \\(u_{10} = 1000/2^{10} = 1000/1024 \\approx 0{,}977 &lt; 1\\). Le plus petit entier \\(n\\) qui convient est donc \\(n=10\\).",
  "tol": 0.01,
  "id": "suites-lycee-15",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\((u_n)\\) une suite arithmétique de raison \\(r\\neq0\\), et soit \\((v_n)\\) la suite définie par \\(v_n=u_n^2\\) pour tout \\(n\\). Que peut-on dire de \\((v_n)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\((v_n)\\) est toujours géométrique"
   },
   {
    "key": "b",
    "text": "\\((v_n)\\) est toujours arithmétique"
   },
   {
    "key": "c",
    "text": "\\((v_n)\\) est arithmétique seulement si \\(r=1\\)"
   },
   {
    "key": "d",
    "text": "\\((v_n)\\) n'est jamais arithmétique ni géométrique"
   }
  ],
  "ans": "d",
  "ansText": "\\(u_n=u_0+nr\\) donc \\(v_n=(u_0+nr)^2\\) est une expression du second degré en \\(n\\) (car \\(r\\neq0\\)) : \\(v_{n+1}-v_n = 2rn r+r^2+2ru_0\\) dépend de \\(n\\) (à cause du terme en \\(r^2\\times 2n\\)), donc jamais constante : \\((v_n)\\) n'est jamais arithmétique. On peut vérifier de même que le quotient \\(v_{n+1}/v_n\\) n'est pas constant : \\((v_n)\\) n'est pas non plus géométrique, quelle que soit la valeur de \\(r\\neq0\\).",
  "id": "suites-lycee-16",
  "cat": "suites-lycee"
 },
 {
  "type": "qcm",
  "q": "Quelle est la limite de \\( h(x)=5e^{x}-2 \\) lorsque \\( x\\to -\\infty \\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\( -2 \\)"
   },
   {
    "key": "b",
    "text": "\\( 0 \\)"
   },
   {
    "key": "c",
    "text": "\\( -\\infty \\)"
   },
   {
    "key": "d",
    "text": "\\( 5 \\)"
   }
  ],
  "ans": "a",
  "ansText": "Quand \\( x\\to-\\infty \\), \\( e^x\\to 0 \\), donc \\( h(x)=5e^x-2\\to 5\\times 0-2=-2 \\)",
  "id": "exp-log-trigo-13",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Résoudre dans \\( \\mathbb{R} \\) l'équation \\( e^{2x}-3e^{x}+2=0 \\).",
  "opts": [
   {
    "key": "a",
    "text": "\\( x=1 \\) ou \\( x=2 \\)"
   },
   {
    "key": "b",
    "text": "Aucune solution réelle"
   },
   {
    "key": "c",
    "text": "\\( x=\\ln 2 \\) uniquement"
   },
   {
    "key": "d",
    "text": "\\( x=0 \\) ou \\( x=\\ln 2 \\)"
   }
  ],
  "ans": "d",
  "ansText": "En posant \\( t=e^x>0 \\), l'équation devient \\( t^2-3t+2=0 \\), soit \\( (t-1)(t-2)=0 \\), donc \\( t=1 \\) ou \\( t=2 \\), c'est-à-dire \\( x=\\ln 1=0 \\) ou \\( x=\\ln 2 \\)",
  "id": "exp-log-trigo-14",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "En utilisant la parité de la fonction sinus, calculer \\( \\sin(-\\pi/3) \\) (valeur approchée à \\( 10^{-2} \\) près).",
  "ans": -0.87,
  "ansText": "\\( \\sin \\) est impaire donc \\( \\sin(-\\pi/3)=-\\sin(\\pi/3)=-\\dfrac{\\sqrt{3}}{2}\\approx -0{,}87 \\)",
  "tol": 0.01,
  "id": "exp-log-trigo-15",
  "cat": "exp-log-trigo"
 },
 {
  "type": "num",
  "q": "Résoudre \\( \\ln(x)+\\ln(x+2)=\\ln(15) \\) et donner la valeur de \\( x \\).",
  "ans": 3,
  "ansText": "Domaine : \\( x>0 \\). On regroupe : \\( \\ln\\big(x(x+2)\\big)=\\ln 15 \\), donc \\( x(x+2)=15 \\), soit \\( x^2+2x-15=0 \\), qui se factorise en \\( (x-3)(x+5)=0 \\). On obtient \\( x=3 \\) ou \\( x=-5 \\) ; seul \\( x=3 \\) respecte \\( x>0 \\), donc \\( x=-5 \\) est rejeté",
  "tol": 0.0001,
  "id": "exp-log-trigo-16",
  "cat": "exp-log-trigo"
 },
 {
  "type": "qcm",
  "q": "Quelle est la négation de \\(\\exists x\\in\\mathbb R,\\ (x>2 \\text{ ou } x&lt;-2)\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\)"
   },
   {
    "key": "b",
    "text": "\\(\\exists x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\)"
   },
   {
    "key": "c",
    "text": "\\(\\forall x\\in\\mathbb R,\\ (x&lt;2 \\text{ et } x>-2)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ ou } x\\ge -2)\\)"
   }
  ],
  "ans": "a",
  "ansText": "On change \\(\\exists\\) en \\(\\forall\\), puis on nie « \\(x>2\\) ou \\(x&lt;-2\\) » en « non\\((x>2)\\) et non\\((x&lt;-2)\\) », soit « \\(x\\le 2\\) et \\(x\\ge -2\\) » : \\(\\forall x\\in\\mathbb R,\\ (x\\le 2 \\text{ et } x\\ge -2)\\).",
  "id": "logique-raisonnement-13",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "On considère, pour un réel \\(x\\), les propositions \\(P\\) : « \\(x>5\\) » et \\(Q\\) : « \\(x^2>25\\) ». On admet que \\(P\\Rightarrow Q\\) est vraie. Que peut-on en conclure ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(P\\) est une condition suffisante mais pas nécessaire pour \\(Q\\) : \\(x=-6\\) vérifie \\(Q\\) sans vérifier \\(P\\)."
   },
   {
    "key": "b",
    "text": "\\(P\\) est une condition nécessaire mais pas suffisante pour \\(Q\\)."
   },
   {
    "key": "c",
    "text": "\\(P\\) n'est ni nécessaire ni suffisante pour \\(Q\\)."
   },
   {
    "key": "d",
    "text": "\\(P\\) est une condition nécessaire et suffisante pour \\(Q\\)."
   }
  ],
  "ans": "a",
  "ansText": "\\(P\\Rightarrow Q\\) vraie signifie que \\(P\\) est suffisante pour \\(Q\\). Mais \\(Q\\) peut être vraie sans \\(P\\) : \\(x=-6\\) donne \\(x^2=36>25\\) (donc \\(Q\\) vraie) alors que \\(x=-6\\) n'est pas supérieur à 5 (donc \\(P\\) fausse). \\(P\\) n'est donc pas nécessaire pour \\(Q\\).",
  "id": "logique-raisonnement-14",
  "cat": "logique-raisonnement"
 },
 {
  "type": "num",
  "q": "Un ensemble \\(E\\) possède 7 éléments, dont un élément fixé \\(a\\). Combien de parties (sous-ensembles) de \\(E\\) contiennent l'élément \\(a\\) ?",
  "ans": 64,
  "ansText": "Une partie de \\(E\\) contenant \\(a\\) est entièrement déterminée par le choix, pour chacun des 6 autres éléments, de son appartenance ou non à cette partie : il y a donc \\(2^6=64\\) telles parties.",
  "tol": 0.01,
  "id": "logique-raisonnement-15",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Soit \\(E=\\mathbb R\\) et \\(A=\\,]-\\infty;3]\\). Quel est le complémentaire de \\(A\\) dans \\(E\\), noté \\(\\overline A\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\overline A = \\,]3;+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(\\overline A = [-3;+\\infty[\\)"
   },
   {
    "key": "c",
    "text": "\\(\\overline A = [3;+\\infty[\\)"
   },
   {
    "key": "d",
    "text": "\\(\\overline A = \\,]-\\infty;3[\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(\\overline A\\) regroupe les réels de \\(E\\) qui ne sont pas dans \\(A\\), c'est-à-dire ceux qui vérifient \\(x>3\\) (3 est inclus dans \\(A\\), donc exclu de son complémentaire) : \\(\\overline A=\\,]3;+\\infty[\\).",
  "id": "logique-raisonnement-16",
  "cat": "logique-raisonnement"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble de définition de \\(f(x) = \\dfrac{x+2}{x-5}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\mathbb{R}\\setminus\\{-5;5\\}\\)"
   },
   {
    "key": "b",
    "text": "\\(\\mathbb{R}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}\\setminus\\{-2\\}\\)"
   },
   {
    "key": "d",
    "text": "\\(\\mathbb{R}\\setminus\\{5\\}\\)"
   }
  ],
  "ans": "d",
  "ansText": "Il faut exclure la valeur qui annule le dénominateur : \\(x-5=0 \\Leftrightarrow x=5\\). Donc \\(D_f=\\mathbb{R}\\setminus\\{5\\}\\).",
  "id": "etude-fonctions-01",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble de définition de \\(f(x) = \\sqrt{5-x}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(]-\\infty;5]\\)"
   },
   {
    "key": "b",
    "text": "\\([5;+\\infty[\\)"
   },
   {
    "key": "c",
    "text": "\\(\\mathbb{R}\\)"
   },
   {
    "key": "d",
    "text": "\\(]-\\infty;5[\\)"
   }
  ],
  "ans": "a",
  "ansText": "Il faut que l'expression sous la racine soit positive ou nulle : \\(5-x \\geqslant 0 \\Leftrightarrow x \\leqslant 5\\), donc \\(D_f = \\;]-\\infty;5]\\).",
  "id": "etude-fonctions-02",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\dfrac{3}{x-2}\\), définie sur \\(\\mathbb{R}\\setminus\\{2\\}\\). Quelle est l'équation de l'asymptote verticale à la courbe de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y=2\\)"
   },
   {
    "key": "b",
    "text": "\\(x=2\\)"
   },
   {
    "key": "c",
    "text": "\\(x=-2\\)"
   },
   {
    "key": "d",
    "text": "\\(x=3\\)"
   }
  ],
  "ans": "b",
  "ansText": "Quand \\(x \\to 2\\), le dénominateur tend vers \\(0\\) et le numérateur vers \\(3 \\neq 0\\), donc \\(f(x) \\to \\pm\\infty\\) : asymptote verticale d'équation \\(x=2\\).",
  "id": "etude-fonctions-03",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\dfrac{5x-1}{2x+3}\\). Quelle est l'équation de l'asymptote horizontale à la courbe de \\(f\\) en \\(+\\infty\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(y=0\\)"
   },
   {
    "key": "b",
    "text": "\\(x=\\dfrac{5}{2}\\)"
   },
   {
    "key": "c",
    "text": "\\(y=-\\dfrac{1}{3}\\)"
   },
   {
    "key": "d",
    "text": "\\(y=\\dfrac{5}{2}\\)"
   }
  ],
  "ans": "d",
  "ansText": "En \\(+\\infty\\), \\(f(x)\\) se comporte comme \\(\\dfrac{5x}{2x} = \\dfrac{5}{2}\\), donc \\(\\displaystyle\\lim_{x\\to+\\infty} f(x) = \\dfrac{5}{2}\\) : asymptote horizontale \\(y=\\dfrac{5}{2}\\).",
  "id": "etude-fonctions-04",
  "cat": "etude-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^3 - 2x^2 + 1\\). Calculer \\(f'(2)\\).",
  "ans": 4,
  "ansText": "\\(f'(x)=3x^2-4x\\), donc \\(f'(2) = 3\\times4 - 4\\times2 = 12-8=4\\).",
  "tol": 0.01,
  "id": "etude-fonctions-05",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = -2x^2+4x+1\\) sur \\(\\mathbb{R}\\). Quel est le sens de variation de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(f\\) est décroissante sur \\(]-\\infty;1]\\) puis croissante sur \\([1;+\\infty[\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) est croissante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "c",
    "text": "\\(f\\) est décroissante sur \\(\\mathbb{R}\\)"
   },
   {
    "key": "d",
    "text": "\\(f\\) est croissante sur \\(]-\\infty;1]\\) puis décroissante sur \\([1;+\\infty[\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(f'(x) = -4x+4 = 4(1-x)\\) : \\(f'(x)>0\\) pour \\(x&lt;1\\) et \\(f'(x)&lt;0\\) pour \\(x>1\\), donc \\(f\\) croît puis décroît, avec un maximum en \\(x=1\\).",
  "id": "etude-fonctions-06",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\) est dérivable sur \\(\\mathbb{R}\\), avec \\(f'(x)>0\\) sur \\(]-\\infty;-2[\\), \\(f'(-2)=0\\), \\(f'(x)&lt;0\\) sur \\(]-2;3[\\), \\(f'(3)=0\\), \\(f'(x)>0\\) sur \\(]3;+\\infty[\\). Quels sont les extremums locaux de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "maximum local en \\(-2\\), minimum local en \\(3\\)"
   },
   {
    "key": "b",
    "text": "\\(f\\) n'a pas d'extremum local"
   },
   {
    "key": "c",
    "text": "minimum local en \\(-2\\), maximum local en \\(3\\)"
   },
   {
    "key": "d",
    "text": "maximum local en \\(-2\\) et en \\(3\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'\\) passe de \\(+\\) à \\(-\\) en \\(-2\\) : maximum local en \\(-2\\). \\(f'\\) passe de \\(-\\) à \\(+\\) en \\(3\\) : minimum local en \\(3\\).",
  "id": "etude-fonctions-07",
  "cat": "etude-fonctions"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x) = x^3-3x^2+2\\). On admet que \\(f'(x)=3x(x-2)\\), avec \\(f'>0\\) sur \\(]-\\infty;0[\\), \\(f'&lt;0\\) sur \\(]0;2[\\), \\(f'>0\\) sur \\(]2;+\\infty[\\). Quelle est la valeur du minimum local de \\(f\\) ?",
  "ans": -2,
  "ansText": "Le minimum local est atteint en \\(x=2\\) (là où \\(f'\\) passe de \\(-\\) à \\(+\\)) : \\(f(2) = 8-12+2=-2\\).",
  "tol": 0.01,
  "id": "etude-fonctions-08",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\dfrac{x-1}{x^2-4}\\). Quelles sont les asymptotes verticales de la courbe de \\(f\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x=1\\)"
   },
   {
    "key": "b",
    "text": "\\(x=-2\\) et \\(x=2\\)"
   },
   {
    "key": "c",
    "text": "\\(x=-2\\) uniquement"
   },
   {
    "key": "d",
    "text": "\\(x=2\\) uniquement"
   }
  ],
  "ans": "b",
  "ansText": "\\(D_f = \\mathbb{R}\\setminus\\{-2;2\\}\\). En \\(x=2\\), le numérateur vaut \\(1\\neq0\\) ; en \\(x=-2\\), il vaut \\(-3\\neq0\\) : dans les deux cas le dénominateur s'annule sans que le numérateur s'annule, donc \\(f\\) admet deux asymptotes verticales, \\(x=-2\\) et \\(x=2\\).",
  "id": "etude-fonctions-09",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = \\sqrt{4-x^2}\\), définie sur \\([-2;2]\\). Quel est son sens de variation ?",
  "opts": [
   {
    "key": "a",
    "text": "croissante sur \\([-2;0]\\), décroissante sur \\([0;2]\\)"
   },
   {
    "key": "b",
    "text": "décroissante sur \\([-2;2]\\)"
   },
   {
    "key": "c",
    "text": "croissante sur \\([-2;2]\\)"
   },
   {
    "key": "d",
    "text": "décroissante sur \\([-2;0]\\), croissante sur \\([0;2]\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\(f'(x) = \\dfrac{-x}{\\sqrt{4-x^2}}\\) : pour \\(x&lt;0\\), \\(f'(x)>0\\) (croissante) ; pour \\(x>0\\), \\(f'(x)&lt;0\\) (décroissante). Maximum local en \\(x=0\\), \\(f(0)=2\\).",
  "id": "etude-fonctions-10",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x\\,e^{-x}\\) sur \\(\\mathbb{R}\\). En quelle valeur de \\(x\\) la fonction admet-elle un maximum local, et quelle est sa valeur ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(x=0\\), \\(f(0)=0\\)"
   },
   {
    "key": "b",
    "text": "\\(x=-1\\), \\(f(-1)=-e\\)"
   },
   {
    "key": "c",
    "text": "\\(x=1\\), \\(f(1)=\\dfrac{1}{e}\\)"
   },
   {
    "key": "d",
    "text": "\\(x=1\\), \\(f(1)=e\\)"
   }
  ],
  "ans": "c",
  "ansText": "\\(f'(x) = (1-x)e^{-x}\\) s'annule en \\(x=1\\), positive avant, négative après : maximum local en \\(x=1\\), \\(f(1) = 1\\times e^{-1} = \\dfrac{1}{e}\\).",
  "id": "etude-fonctions-11",
  "cat": "etude-fonctions"
 },
 {
  "type": "num",
  "q": "Quelle est la limite de \\(f(x) = x\\,e^{-x}\\) quand \\(x \\to +\\infty\\) ? (résultat de croissances comparées : l'exponentielle l'emporte sur \\(x\\))",
  "ans": 0,
  "ansText": "Par croissances comparées, \\(\\displaystyle\\lim_{x\\to+\\infty} x\\,e^{-x} = 0\\) : la droite \\(y=0\\) est asymptote horizontale en \\(+\\infty\\).",
  "tol": 0.01,
  "id": "etude-fonctions-12",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f(x) = x^3\\). On a \\(f'(x)=3x^2\\) qui s'annule en \\(x=0\\). Peut-on affirmer que \\(f\\) admet un extremum local en \\(x=0\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Oui, un maximum local"
   },
   {
    "key": "b",
    "text": "Oui, un minimum local"
   },
   {
    "key": "c",
    "text": "Non, car \\(f'(0)\\) n'est pas nul"
   },
   {
    "key": "d",
    "text": "Non, car \\(f'\\) ne change pas de signe en \\(0\\) : \\(f\\) est strictement croissante sur \\(\\mathbb{R}\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(f'(x)=3x^2 \\geqslant 0\\) sur \\(\\mathbb{R}\\) et ne s'annule qu'en \\(0\\) sans changer de signe : \\(f\\) reste strictement croissante sur \\(\\mathbb{R}\\), \\(0\\) n'est pas un extremum.",
  "id": "etude-fonctions-13",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "La courbe de \\(g(x) = \\dfrac{x^2-1}{x-1}\\) admet-elle une asymptote verticale en \\(x=1\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "Non : après simplification \\(g(x)=x+1\\) pour \\(x\\neq1\\), et \\(\\displaystyle\\lim_{x\\to1} g(x) = 2\\) (limite finie)"
   },
   {
    "key": "b",
    "text": "Oui, car \\(x=1\\) n'appartient pas à l'ensemble de définition"
   },
   {
    "key": "c",
    "text": "Oui, car le dénominateur s'annule en \\(1\\)"
   },
   {
    "key": "d",
    "text": "Non, car \\(g\\) est un polynôme"
   }
  ],
  "ans": "a",
  "ansText": "Le numérateur et le dénominateur s'annulent tous deux en \\(1\\) : on factorise, \\(g(x) = \\dfrac{(x-1)(x+1)}{x-1} = x+1\\) pour \\(x\\neq1\\). La limite en \\(1\\) vaut \\(2\\), finie : il n'y a pas d'asymptote verticale.",
  "id": "etude-fonctions-14",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Le tableau de variations d'une fonction \\(f\\) continue sur \\([-1;6]\\) indique : \\(f\\) croissante de \\(-4\\) à \\(3\\) sur \\([-1;2]\\), puis décroissante de \\(3\\) à \\(-2\\) sur \\([2;6]\\). Combien de solutions a l'équation \\(f(x) = 1\\) sur \\([-1;6]\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "0"
   },
   {
    "key": "b",
    "text": "2"
   },
   {
    "key": "c",
    "text": "1"
   },
   {
    "key": "d",
    "text": "3"
   }
  ],
  "ans": "b",
  "ansText": "Sur \\([-1;2]\\), \\(f\\) croît de \\(-4\\) à \\(3\\) : \\(1\\) est atteint une fois. Sur \\([2;6]\\), \\(f\\) décroît de \\(3\\) à \\(-2\\) : \\(1\\) est atteint une fois aussi. Total : \\(2\\) solutions.",
  "id": "etude-fonctions-15",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Une fonction \\(f\\), définie et dérivable sur \\(\\mathbb{R}\\), a le tableau de variations suivant : \\(f\\) décroissante sur \\(]-\\infty;-1]\\) de \\(+\\infty\\) à \\(2\\), croissante sur \\([-1;3]\\) de \\(2\\) à \\(6\\), décroissante sur \\([3;+\\infty[\\) de \\(6\\) à \\(-\\infty\\). Combien de solutions a l'équation \\(f(x)=4\\) sur \\(\\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "2"
   },
   {
    "key": "b",
    "text": "1"
   },
   {
    "key": "c",
    "text": "4"
   },
   {
    "key": "d",
    "text": "3"
   }
  ],
  "ans": "d",
  "ansText": "Sur \\(]-\\infty;-1]\\), \\(f\\) parcourt \\(]2;+\\infty[\\) en décroissant : \\(4>2\\), une solution. Sur \\([-1;3]\\), \\(f\\) parcourt \\([2;6]\\) en croissant : \\(4\\) y est compris, une solution. Sur \\([3;+\\infty[\\), \\(f\\) parcourt \\(]-\\infty;6]\\) en décroissant : \\(4\\) y est compris, une solution. Total : \\(3\\) solutions.",
  "id": "etude-fonctions-16",
  "cat": "etude-fonctions"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction définie sur un intervalle \\(I\\). Par définition, une primitive de \\(f\\) sur \\(I\\) est une fonction \\(F\\), dérivable sur \\(I\\), telle que :",
  "opts": [
   {
    "key": "a",
    "text": "pour tout \\(x\\) de \\(I\\), \\(F(x)=f(x)\\)"
   },
   {
    "key": "b",
    "text": "pour tout \\(x\\) de \\(I\\), \\(F'(x)=f(x)\\)"
   },
   {
    "key": "c",
    "text": "pour tout \\(x\\) de \\(I\\), \\(F(x)=f'(x)\\)"
   },
   {
    "key": "d",
    "text": "pour tout \\(x\\) de \\(I\\), \\(F'(x)=f'(x)\\)"
   }
  ],
  "ans": "b",
  "ansText": "Une primitive \\(F\\) de \\(f\\) sur \\(I\\) vérifie \\(F'=f\\) sur \\(I\\).",
  "id": "integration-lycee-01",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Quel est l'ensemble des primitives de \\(f(x)=3x^2\\) sur \\(\\mathbb{R}\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "les fonctions \\(x \\mapsto x^3+k\\), \\(k\\in\\mathbb{R}\\)"
   },
   {
    "key": "b",
    "text": "uniquement la fonction \\(x \\mapsto x^3\\)"
   },
   {
    "key": "c",
    "text": "les fonctions \\(x \\mapsto 3x^3+k\\), \\(k\\in\\mathbb{R}\\)"
   },
   {
    "key": "d",
    "text": "les fonctions \\(x \\mapsto \\dfrac{x^4}{4}+k\\), \\(k\\in\\mathbb{R}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((x^3)'=3x^2\\), et toutes les primitives de \\(f\\) sur \\(\\mathbb{R}\\) s'obtiennent en ajoutant une constante \\(k\\).",
  "id": "integration-lycee-02",
  "cat": "integration-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x)=4x^3\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=5\\). Calculer \\(F(2)\\).",
  "ans": 21,
  "ansText": "\\(F(x)=x^4+5\\), donc \\(F(2)=16+5=21\\).",
  "tol": 0.01,
  "id": "integration-lycee-03",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Sur l'intervalle \\(]0;+\\infty[\\), une primitive de \\(f(x)=\\dfrac{1}{x}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln x\\)"
   },
   {
    "key": "b",
    "text": "\\(x\\ln x - x\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\ln x\\)"
   },
   {
    "key": "d",
    "text": "\\(\\dfrac{1}{x^2}\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((\\ln x)'=\\dfrac{1}{x}\\) sur \\(]0;+\\infty[\\). (\\(x\\ln x-x\\) est une primitive de \\(\\ln x\\), pas de \\(1/x\\).)",
  "id": "integration-lycee-04",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(f(x)=e^x+\\cos x\\) sur \\(\\mathbb{R}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^x+\\sin x\\)"
   },
   {
    "key": "b",
    "text": "\\(e^x+\\sin x+x\\)"
   },
   {
    "key": "c",
    "text": "\\(xe^x+\\sin x\\)"
   },
   {
    "key": "d",
    "text": "\\(e^x-\\sin x\\)"
   }
  ],
  "ans": "a",
  "ansText": "\\((e^x+\\sin x)'=e^x+\\cos x=f(x)\\).",
  "id": "integration-lycee-05",
  "cat": "integration-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x)=\\sin x\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=3\\). Calculer \\(F(\\pi)\\).",
  "ans": 5,
  "ansText": "\\(F(x)=-\\cos x+4\\) (car \\(-\\cos 0+k=3 \\Rightarrow k=4\\)), donc \\(F(\\pi)=-(-1)+4=5\\).",
  "tol": 0.01,
  "id": "integration-lycee-06",
  "cat": "integration-lycee"
 },
 {
  "type": "num",
  "q": "Soit \\(f(x)=e^x\\). On note \\(F\\) la primitive de \\(f\\) sur \\(\\mathbb{R}\\) telle que \\(F(0)=-2\\). Calculer \\(F(\\ln 3)\\).",
  "ans": 0,
  "ansText": "\\(F(x)=e^x-3\\) (car \\(1+k=-2 \\Rightarrow k=-3\\)), donc \\(F(\\ln 3)=e^{\\ln 3}-3=3-3=0\\).",
  "tol": 0.01,
  "id": "integration-lycee-07",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "On sait que \\(\\displaystyle\\int_0^2 f(x)\\,dx=5\\) et \\(\\displaystyle\\int_2^5 f(x)\\,dx=-3\\). Que vaut \\(\\displaystyle\\int_0^5 f(x)\\,dx\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "\\(-8\\)"
   },
   {
    "key": "b",
    "text": "\\(-2\\)"
   },
   {
    "key": "c",
    "text": "\\(8\\)"
   },
   {
    "key": "d",
    "text": "\\(2\\)"
   }
  ],
  "ans": "d",
  "ansText": "Relation de Chasles : \\(\\int_0^5 f=\\int_0^2 f+\\int_2^5 f=5+(-3)=2\\).",
  "id": "integration-lycee-08",
  "cat": "integration-lycee"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\displaystyle\\int_1^3 (2x-1)\\,dx\\).",
  "ans": 6,
  "ansText": "Une primitive de \\(2x-1\\) est \\(x^2-x\\), donc l'intégrale vaut \\((9-3)-(1-1)=6\\).",
  "tol": 0.01,
  "id": "integration-lycee-09",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Une primitive de \\(f(x)=(2x-1)e^{x^2-x}\\) sur \\(\\mathbb{R}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(e^{x^2-x}\\)"
   },
   {
    "key": "b",
    "text": "\\((x^2-x)e^{x^2-x}\\)"
   },
   {
    "key": "c",
    "text": "\\(\\dfrac{e^{x^2-x}}{2x-1}\\)"
   },
   {
    "key": "d",
    "text": "\\((2x-1)e^{x^2-x}\\)"
   }
  ],
  "ans": "a",
  "ansText": "On reconnaît la forme \\(u'e^{u}\\) avec \\(u(x)=x^2-x\\), \\(u'(x)=2x-1\\) : une primitive est \\(e^{u}=e^{x^2-x}\\).",
  "id": "integration-lycee-10",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "\\(f\\) est continue et positive sur \\([1;4]\\). Que représente géométriquement \\(\\displaystyle\\int_1^4 f(x)\\,dx\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "le nombre dérivé de \\(f\\) en \\(x=2{,}5\\)"
   },
   {
    "key": "b",
    "text": "la valeur moyenne de \\(f\\) sur \\([1;4]\\)"
   },
   {
    "key": "c",
    "text": "la longueur de la courbe de \\(f\\) entre \\(1\\) et \\(4\\)"
   },
   {
    "key": "d",
    "text": "l'aire, en unités d'aire, du domaine délimité par la courbe de \\(f\\), l'axe des abscisses et les droites \\(x=1\\) et \\(x=4\\)"
   }
  ],
  "ans": "d",
  "ansText": "Pour \\(f\\) continue et positive sur \\([a;b]\\), \\(\\int_a^b f(x)\\,dx\\) est l'aire sous la courbe.",
  "id": "integration-lycee-11",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Soit \\(f\\) une fonction continue telle que \\(f(x)\\geq 0\\) pour tout \\(x\\in[2;6]\\). Que peut-on affirmer sur \\(\\displaystyle\\int_2^6 f(x)\\,dx\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "on ne peut rien affirmer sans connaître \\(f\\) explicitement"
   },
   {
    "key": "b",
    "text": "elle est strictement négative"
   },
   {
    "key": "c",
    "text": "elle est positive ou nulle"
   },
   {
    "key": "d",
    "text": "elle vaut nécessairement \\(0\\)"
   }
  ],
  "ans": "c",
  "ansText": "Propriété de positivité : si \\(a\\leq b\\) et \\(f\\geq 0\\) sur \\([a;b]\\), alors \\(\\int_a^b f(x)\\,dx\\geq 0\\).",
  "id": "integration-lycee-12",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Sur l'intervalle \\(]-\\infty;0[\\), une primitive de \\(f(x)=\\dfrac{1}{x}\\) est :",
  "opts": [
   {
    "key": "a",
    "text": "\\(\\ln x\\)"
   },
   {
    "key": "b",
    "text": "\\(\\dfrac{1}{x^2}\\)"
   },
   {
    "key": "c",
    "text": "\\(-\\ln(-x)\\)"
   },
   {
    "key": "d",
    "text": "\\(\\ln(-x)\\)"
   }
  ],
  "ans": "d",
  "ansText": "\\(\\ln x\\) n'est pas défini pour \\(x&lt;0\\). En revanche \\(\\ln(-x)\\) est défini sur \\(]-\\infty;0[\\) et \\((\\ln(-x))'=\\dfrac{-1}{-x}=\\dfrac{1}{x}\\) : c'est bien \\(\\ln|x|\\).",
  "id": "integration-lycee-13",
  "cat": "integration-lycee"
 },
 {
  "type": "num",
  "q": "Calculer \\(\\displaystyle\\int_0^2 \\dfrac{x}{x^2+1}\\,dx\\) (arrondir à \\(0{,}01\\) près).",
  "ans": 0.8,
  "ansText": "Une primitive de \\(\\dfrac{x}{x^2+1}\\) est \\(\\dfrac12\\ln(x^2+1)\\) (forme \\(\\frac{u'}{u}\\) avec \\(u=x^2+1\\), \\(u'=2x\\), d'où le facteur \\(\\frac12\\)). L'intégrale vaut \\(\\dfrac12\\ln 5-\\dfrac12\\ln 1=\\dfrac12\\ln 5\\approx 0{,}80\\).",
  "tol": 0.01,
  "id": "integration-lycee-14",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "\\(f\\) est continue sur \\([0;4]\\), strictement négative sur \\([0;2[\\) et strictement positive sur \\(]2;4]\\). Que représente géométriquement \\(\\displaystyle\\int_0^4 f(x)\\,dx\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "l'intégrale est nécessairement nulle puisque \\(f\\) change de signe"
   },
   {
    "key": "b",
    "text": "l'aire du domaine uniquement pour \\(x\\in[2;4]\\)"
   },
   {
    "key": "c",
    "text": "l'aire totale (toujours positive) du domaine compris entre la courbe et l'axe des abscisses"
   },
   {
    "key": "d",
    "text": "la différence entre l'aire au-dessus de l'axe (pour \\(x\\in[2;4]\\)) et l'aire en dessous (pour \\(x\\in[0;2]\\)) : une aire « algébrique »"
   }
  ],
  "ans": "d",
  "ansText": "Dès que \\(f\\) change de signe, l'intégrale n'est plus une aire géométrique mais une somme algébrique (parties positives moins parties négatives).",
  "id": "integration-lycee-15",
  "cat": "integration-lycee"
 },
 {
  "type": "qcm",
  "q": "Pourquoi une fonction continue sur un intervalle \\(I\\) admet-elle une infinité de primitives sur \\(I\\) ?",
  "opts": [
   {
    "key": "a",
    "text": "car si \\(F\\) est une primitive de \\(f\\) sur \\(I\\), alors pour tout réel \\(k\\), la fonction \\(F+k\\) est aussi une primitive de \\(f\\) sur \\(I\\) (deux fonctions ayant la même dérivée sur un intervalle diffèrent d'une constante)"
   },
   {
    "key": "b",
    "text": "car il existe plusieurs façons de dériver une même fonction"
   },
   {
    "key": "c",
    "text": "car \\(f\\) n'est pas dérivable"
   },
   {
    "key": "d",
    "text": "car l'intégrale \\(\\int f(x)\\,dx\\) dépend du choix des bornes \\(a\\) et \\(b\\)"
   }
  ],
  "ans": "a",
  "ansText": "Ajouter n'importe quelle constante \\(k\\) à une primitive \\(F\\) donne encore une primitive, puisque \\((F+k)'=F'=f\\) : c'est pour cela qu'on parle de la famille des primitives « à une constante près ».",
  "id": "integration-lycee-16",
  "cat": "integration-lycee"
 }
];
