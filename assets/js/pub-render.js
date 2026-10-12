/* Construit entierement la page publications.html a partir de
 * data/publications/publications.js (source unique des donnees) et de
 * pub-shared.js (tri chronologique + numerotation [C1], [N2], [W1], [P3],
 * [R2]...). Ajouter, corriger ou retirer une publication se fait
 * uniquement dans publications.js : cette page se regenere seule, dans le
 * bon ordre et avec les bons numeros, a chaque chargement.
 *
 * Depend de, dans cet ordre : data/publications/publications.js, pub-shared.js
 * et (facultatif) data/publications/pub-resumes.js pour les resumes deroulants.
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


  // ---- Resume deroulant (bouton "Resume") --------------------------------
  // Donnees : data/publications/pub-resumes.js (PUB_SUMMARIES / PUB_SUMMARY_MAP).
  // Le contenu n'est construit qu'a la premiere ouverture du panneau.
  var SUMMARY_BLOCKS = [
    ['Probl\u00e8me', 'problem', 'fa-circle-question', 'sb-problem'],
    ['Id\u00e9e et contribution', 'idea', 'fa-lightbulb', 'sb-idea'],
    ['R\u00e9sultats', 'results', 'fa-chart-line', 'sb-results']
  ];

  function getSummary(pubId) {
    if (typeof PUB_SUMMARY_MAP === 'undefined' || typeof PUB_SUMMARIES === 'undefined') return null;
    var key = PUB_SUMMARY_MAP[pubId];
    return key ? (PUB_SUMMARIES[key] || null) : null;
  }

  function renderSummaryButton(pubId) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'pub-toggle';
    b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-controls', pubId + '-summary');
    b.innerHTML = '<span class="pub-chevron" aria-hidden="true">&#9660;</span> R\u00e9sum\u00e9';
    b.addEventListener('click', function () { toggleSummary(pubId); });
    return b;
  }

  function renderSummaryPanel(pubId, summary) {
    var panel = el('div', { className: 'pub-summary', id: pubId + '-summary' });
    panel.hidden = true;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'R\u00e9sum\u00e9');
    panel.appendChild(el('div', { className: 'pub-summary-inner' }));
    panel._summary = summary;
    return panel;
  }

  function fillSummaryPanel(panel) {
    var inner = panel.firstChild;
    if (inner.childNodes.length) return;
    var body = el('div', { className: 'pub-summary-body' });
    SUMMARY_BLOCKS.forEach(function (blk) {
      var txt = panel._summary[blk[1]];
      if (!txt) return;
      var block = el('section', { className: 'pub-summary-block ' + blk[3] });
      block.appendChild(el('h4', { html: '<i class="fa-solid ' + blk[2] + '" aria-hidden="true"></i> ' + escapeHtml(blk[0]) }));
      block.appendChild(el('p', { html: escapeHtml(txt) }));
      body.appendChild(block);
    });
    inner.appendChild(body);
    if (window.renderMathInElement) {
      window.renderMathInElement(body, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  }

  function toggleSummary(pubId, forceOpen) {
    var panel = document.getElementById(pubId + '-summary');
    var btn = document.querySelector('#' + pubId + ' .pub-toggle');
    if (!panel || !btn) return;
    var open = forceOpen !== undefined ? forceOpen : btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      fillSummaryPanel(panel);
      panel.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add('open'); }); });
    } else {
      panel.classList.remove('open');
      var done = function () { if (!panel.classList.contains('open')) panel.hidden = true; };
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) done(); else setTimeout(done, 320);
    }
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

      var summary = getSummary(pub.id);
      var hasLinks = pub.links && pub.links.length;
      if (hasLinks || summary) {
        var linksP = el('p', { className: 'pub-links' });
        if (summary) linksP.appendChild(renderSummaryButton(pub.id));
        if (hasLinks) {
          pub.links.forEach(function (link) {
            linksP.appendChild(document.createTextNode(' '));
            linksP.appendChild(renderLink(link));
          });
        }
        itemEl.appendChild(linksP);
      }
      if (summary) itemEl.appendChild(renderSummaryPanel(pub.id, summary));

      groupEl.appendChild(itemEl);
    });

    frag.appendChild(groupEl);
  });

  app.appendChild(frag);

  // Lien direct publications.html#id : ouvre le resume de cette publication.
  if (location.hash.length > 1) {
    var hid = decodeURIComponent(location.hash.slice(1));
    if (document.getElementById(hid + '-summary')) toggleSummary(hid, true);
  }

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
