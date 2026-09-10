/* Logique partagee de tri/numerotation des publications, utilisee a la fois
 * par pub-render.js (page publications.html) et pub-ref.js (reference d'une
 * publication ou de la bibliographie d'une personne sur une autre page).
 * Definir cette logique une seule fois ici garantit que la numerotation
 * [C1], [N2], [W1], [P3], [R2]... est TOUJOURS identique partout sur le
 * site, sans jamais avoir a la dupliquer ni a la recalculer a la main.
 *
 * Depend de assets/js/data/publications.js (PUBLICATIONS, PUBLICATIONS_GROUPS),
 * a charger avant ce fichier.
 */
var PubShared = (function () {
  function dateKey(pub) {
    return (pub.year || 0) * 100 + (pub.month || 0);
  }

  // Renvoie, pour un groupe donne, la liste de ses publications triees par
  // ordre chronologique decroissant (la plus recente en premier). A date
  // egale, l'ordre de declaration dans publications.js est conserve (tri
  // stable), ce qui correspond a l'ordre historique deja en place sur le
  // site.
  function rankGroup(groupId) {
    var items = [];
    for (var i = 0; i < PUBLICATIONS.length; i++) {
      if (PUBLICATIONS[i].group === groupId) {
        items.push({ pub: PUBLICATIONS[i], idx: i });
      }
    }
    items.sort(function (a, b) {
      var d = dateKey(b.pub) - dateKey(a.pub);
      if (d !== 0) return d;
      return a.idx - b.idx;
    });
    return items.map(function (it) { return it.pub; });
  }

  // Calcule, pour toutes les publications, leur rang au sein de leur groupe
  // (1 = la plus recente) et l'etiquette correspondante ("C1", "N3", ...),
  // ou null pour un groupe sans lettre (ex. theses). Renvoie une table
  // { idDePublication: { number, label, group } }.
  var _cache = null;
  function allRanked() {
    if (_cache) return _cache;
    var groupsById = {};
    PUBLICATIONS_GROUPS.forEach(function (g) { groupsById[g.id] = g; });

    var result = {};
    PUBLICATIONS_GROUPS.forEach(function (g) {
      var ranked = rankGroup(g.id);
      ranked.forEach(function (pub, i) {
        var number = i + 1;
        var label = g.type ? (g.type + number) : null;
        result[pub.id] = { number: number, label: label, group: g.id, groupMeta: g, pub: pub };
      });
    });
    _cache = result;
    return result;
  }

  function byId(pubId) {
    return allRanked()[pubId] || null;
  }

  // Toutes les publications dont authorIds contient l'identifiant donne,
  // triees par ordre chronologique decroissant (toutes categories confondues).
  function byAuthor(authorId) {
    var ranked = allRanked();
    var items = PUBLICATIONS.filter(function (pub) {
      return pub.authorIds && pub.authorIds.indexOf(authorId) !== -1;
    });
    items.sort(function (a, b) { return dateKey(b) - dateKey(a); });
    return items.map(function (pub) { return ranked[pub.id]; });
  }

  return { rankGroup: rankGroup, allRanked: allRanked, byId: byId, byAuthor: byAuthor, dateKey: dateKey };
})();
