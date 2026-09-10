/* Widgets reutilisables pour referencer, sur N'IMPORTE QUELLE page du site,
 * une publication ou la bibliographie d'une personne, avec un numero
 * TOUJOURS synchronise avec publications.html — aucune mise a jour manuelle
 * necessaire si l'ordre ou le contenu de publications.js change.
 *
 * Depend de, dans cet ordre : assets/js/data/publications.js, pub-shared.js.
 *
 * 1) Reference ponctuelle a UNE publication (par son id) :
 *      <span class="pub-ref" data-pub-id="fairgptq-2025"></span>
 *    -> rendu : un lien "[P3]" pointant vers publications.html#fairgptq-2025
 *    Ajouter data-style="full" pour afficher aussi le titre : "[P3] Fair-GPTQ...".
 *
 * 2) Liste automatique de TOUTES les publications d'une personne (par son
 *    authorId, voir authorIds dans publications.js) :
 *      <div class="pub-ref-list" data-author-id="jbastian"></div>
 *    -> rendu : uniquement les etiquettes [C#]/[N#]/[W#]/[P#]/[R#] (triees du
 *    plus recent au plus ancien, toutes categories confondues), chacune un
 *    lien vers la ligne correspondante sur publications.html (le titre et la
 *    venue apparaissent en infobulle au survol, pas dans le texte).
 *
 * NB : les liens generes (vers publications.html#...) sont relatifs a la
 * racine du site, comme les pages qui utilisent ce script (ex. research.html).
 * Depuis une page situee dans un sous-dossier (ex. courses/...), prefixer
 * data-pub-id / adapter le lien ne serait pas correct sans modification.
 */
document.addEventListener('DOMContentLoaded', function () {
  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : '&gt;');
    });
  }

  // --- Reference ponctuelle a une publication ---
  document.querySelectorAll('.pub-ref[data-pub-id]').forEach(function (elm) {
    var pubId = elm.getAttribute('data-pub-id');
    var ranked = PubShared.byId(pubId);
    if (!ranked) {
      elm.textContent = '[réf. inconnue: ' + pubId + ']';
      return;
    }
    var style = elm.getAttribute('data-style') || 'label';
    var label = ranked.label ? '[' + ranked.label + ']' : '';
    var html = '<a class="pub-ref-link" href="publications.html#' + pubId + '">' + label + '</a>';
    if (style === 'full') {
      html += ' ' + escapeHtml(ranked.pub.title);
    }
    elm.innerHTML = html;
  });

  // --- Liste automatique des publications d'une personne (etiquettes seules) ---
  document.querySelectorAll('.pub-ref-list[data-author-id]').forEach(function (elm) {
    var authorId = elm.getAttribute('data-author-id');
    var items = PubShared.byAuthor(authorId);
    elm.innerHTML = '';
    if (items.length === 0) {
      elm.hidden = true;
      return;
    }
    var caption = document.createElement('span');
    caption.className = 'pub-ref-caption';
    caption.textContent = 'Publications : ';
    elm.appendChild(caption);

    items.forEach(function (ranked, i) {
      if (i > 0) elm.appendChild(document.createTextNode(' '));
      var a = document.createElement('a');
      a.className = 'pub-ref-link';
      a.href = 'publications.html#' + ranked.pub.id;
      a.title = ranked.pub.title + ' — ' + ranked.pub.venue;
      a.textContent = ranked.label ? '[' + ranked.label + ']' : '';
      elm.appendChild(a);
    });
  });
});
