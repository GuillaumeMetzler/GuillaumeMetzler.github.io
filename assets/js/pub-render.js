/* Construit entierement la page publications.html a partir de
 * assets/js/data/publications.js (source unique des donnees) et de
 * pub-shared.js (tri chronologique + numerotation [C1], [N2], [W1], [P3],
 * [R2]...). Ajouter, corriger ou retirer une publication se fait
 * uniquement dans publications.js : cette page se regenere seule, dans le
 * bon ordre et avec les bons numeros, a chaque chargement.
 *
 * Depend de, dans cet ordre : assets/js/data/publications.js, pub-shared.js.
 */
document.addEventListener('DOMContentLoaded', function () {
  var app = document.getElementById('pub-app');
  if (!app) return;

  function el(tag, opts) {
    var e = document.createElement(tag);
    if (opts) {
      if (opts.className) e.className = opts.className;
      if (opts.html !== undefined) e.innerHTML = opts.html;
      if (opts.id) e.id = opts.id;
    }
    return e;
  }

  function renderLink(link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.external) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    return a;
  }

  var frag = document.createDocumentFragment();

  PUBLICATIONS_GROUPS.forEach(function (group) {
    var ranked = PubShared.rankGroup(group.id);
    if (ranked.length === 0) return;

    var groupEl = el('div', { className: 'pub-group ' + group.accent, id: group.id });

    var h3 = el('h3', { html: group.title + (group.tag ? ' <span class="pub-tag">' + group.tag + '</span>' : '') });
    groupEl.appendChild(h3);

    ranked.forEach(function (pub, i) {
      var itemEl = el('div', { className: 'pub-item', id: pub.id });

      var titlePrefix = '';
      if (group.type) {
        titlePrefix = '<span class="pub-num">[' + group.type + (i + 1) + ']</span>';
      }
      var titleP = el('p', { className: 'title', html: titlePrefix + escapeHtml(pub.title) });
      itemEl.appendChild(titleP);

      var authorsP = el('p', { className: 'authors', html: escapeHtml(pub.authors) });
      itemEl.appendChild(authorsP);

      var venueHtml = escapeHtml(pub.venue);
      if (pub.badges) {
        pub.badges.forEach(function (b) {
          venueHtml += ' <span class="badge ' + b.color + '">' + escapeHtml(b.text) + '</span>';
        });
      }
      var venueP = el('p', { className: 'venue', html: venueHtml });
      itemEl.appendChild(venueP);

      if (pub.links && pub.links.length) {
        var linksP = el('p', { className: 'pub-links' });
        pub.links.forEach(function (link, li) {
          if (li > 0) linksP.appendChild(document.createTextNode(' '));
          linksP.appendChild(renderLink(link));
        });
        itemEl.appendChild(linksP);
      }

      groupEl.appendChild(itemEl);
    });

    frag.appendChild(groupEl);
  });

  app.appendChild(frag);

  // Compteurs du bandeau d'en-tete (ex. "8 conférences internationales").
  var badges = document.querySelectorAll('.page-hero-stats [data-count-group]');
  badges.forEach(function (badge) {
    var groupId = badge.getAttribute('data-count-group');
    var count = PubShared.rankGroup(groupId).length;
    if (count === 0) {
      badge.hidden = true;
      return;
    }
    var singular = badge.getAttribute('data-singular') || '';
    var plural = badge.getAttribute('data-plural') || singular;
    badge.textContent = count + ' ' + (count === 1 ? singular : plural);
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : '&gt;');
    });
  }
});
