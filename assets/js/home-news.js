/* Construit automatiquement le bloc "Actualités" de la page d'accueil a
 * partir des publications les plus recentes (conferences, revues,
 * preprints) declarees dans assets/js/data/publications.js. Ajouter,
 * corriger ou dater une publication se fait uniquement dans ce fichier de
 * donnees : la page d'accueil se met a jour seule, sans jamais avoir a
 * toucher index.html.
 *
 * Depend de, dans cet ordre : assets/js/data/publications.js, pub-shared.js.
 */
document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('home-news-list');
  if (!list) return;

  // Categories retenues pour les actualites (on exclut volontairement les
  // workshops et les theses/memoires, qui ne sont pas des "actualites" au
  // sens de nouvelles publications a mettre en avant).
  var INCLUDED_GROUPS = ['group-conf-intl', 'group-conf-nat', 'group-revues-intl', 'group-preprints'];
  var MAX_ITEMS = 5;

  var MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
    'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  var LABELS = {
    'group-conf-intl': { text: 'Article accepté en conférence', icon: 'fa-award' },
    'group-conf-nat': { text: 'Article accepté en conférence', icon: 'fa-award' },
    'group-revues-intl': { text: 'Article accepté en revue', icon: 'fa-book-open' },
    'group-preprints': { text: 'Nouveau préprint', icon: 'fa-flask' }
  };

  var groupsById = {};
  PUBLICATIONS_GROUPS.forEach(function (g) { groupsById[g.id] = g; });

  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : '&gt;');
    });
  }

  function formatDate(pub) {
    var s = pub.month ? (MONTHS[pub.month - 1] + ' ' + pub.year) : String(pub.year);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  var items = PUBLICATIONS.filter(function (p) {
    return INCLUDED_GROUPS.indexOf(p.group) !== -1;
  });
  items.sort(function (a, b) { return PubShared.dateKey(b) - PubShared.dateKey(a); });
  items = items.slice(0, MAX_ITEMS);

  var frag = document.createDocumentFragment();

  items.forEach(function (pub) {
    var group = groupsById[pub.group] || {};
    var label = LABELS[pub.group] || { text: 'Nouvelle publication', icon: 'fa-file' };
    var color = (group.accent || '').replace('card-accent-', '') || 'blue';

    var article = document.createElement('article');
    article.className = 'card news-item';

    var iconDiv = document.createElement('div');
    iconDiv.className = 'news-icon ' + color;
    iconDiv.innerHTML = '<i class="fa-solid ' + label.icon + '" aria-hidden="true"></i>';
    article.appendChild(iconDiv);

    var body = document.createElement('div');

    var dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.textContent = formatDate(pub);
    body.appendChild(dateSpan);

    var h3 = document.createElement('h3');
    h3.textContent = label.text;
    body.appendChild(h3);

    var titleP = document.createElement('p');
    titleP.className = 'title';
    titleP.innerHTML = '<em>' + escapeHtml(pub.title) + '</em>, ' + escapeHtml(pub.authors) + '.';
    body.appendChild(titleP);

    var venueHtml = '<em>' + escapeHtml(pub.venue) + '</em>';
    if (pub.badges) {
      pub.badges.forEach(function (b) {
        venueHtml += ' <span class="badge ' + b.color + '">' + escapeHtml(b.text) + '</span>';
      });
    }
    var venueP = document.createElement('p');
    venueP.className = 'venue';
    venueP.innerHTML = venueHtml;
    body.appendChild(venueP);

    var links = (pub.links && pub.links.length) ? pub.links :
      [{ label: 'Voir sur la page Publications', href: 'publications.html#' + pub.id }];
    var linksP = document.createElement('p');
    linksP.className = 'pub-links';
    links.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
      if (link.external) { a.target = '_blank'; a.rel = 'noopener'; }
      linksP.appendChild(a);
    });
    body.appendChild(linksP);

    article.appendChild(body);
    frag.appendChild(article);
  });

  list.appendChild(frag);
});
