/*
 * Guillaume Metzler — widget "Statistiques de reussite"
 * Lit un classeur Excel (.xlsx) et affiche : nombre d'etudiants, moyenne,
 * mediane, ecart-type (echantillon), taux de reussite (> 10/20) ainsi qu'un
 * histogramme de la distribution des notes (Chart.js). Le parsing du fichier
 * Excel se fait cote client avec la bibliotheque SheetJS (window.XLSX),
 * chargee avant ce script sur chaque page qui utilise ce widget.
 *
 * Format attendu, premiere feuille du classeur :
 *
 * 1) Format simple (une seule composante) :
 *   annee | note
 *   2024  | 14.5
 *   2024  | 8
 *
 * 2) Format detaille (plusieurs composantes, ex. examen/projet/moyenne) :
 *   annee | examen | projet | moyenne
 *   2025  | 7      | 5      | 6
 *   2025  | 9      | 15     | 12
 *
 * La premiere colonne doit s'appeler "annee". Les colonnes suivantes sont
 * libres (autant que necessaire) et deviennent chacune une option du filtre
 * "Examen". "moyenne" est affichee par defaut quand elle existe, sinon la
 * premiere colonne de notes.
 *
 * Deux filtres sont toujours proposes : "Annee universitaire" et "Examen"
 * (la composante de note a afficher).
 *
 * Les notes sont sur 20. Une ligne vide, une annee manquante ou une note non
 * numerique est ignoree pour cette valeur (les autres colonnes de la ligne
 * restent exploitees).
 */
(function () {
  function normalizeHeader(h) {
    return String(h == null ? '' : h).trim().toLowerCase();
  }

  function toNumber(v) {
    if (v === null || v === undefined || v === '') return null;
    if (typeof v === 'number') return isNaN(v) ? null : v;
    var n = parseFloat(String(v).trim().replace(',', '.'));
    return isNaN(n) ? null : n;
  }

  // Parse un ArrayBuffer (.xlsx) et renvoie { components: [...], rows: [...] }
  // avec rows = [{ annee: '2025', values: { examen: 7, projet: 5, moyenne: 6 } }, ...]
  function parseWorkbook(arrayBuffer) {
    if (!window.XLSX) return { components: ['note'], rows: [] };
    var wb = XLSX.read(arrayBuffer, { type: 'array' });
    var sheetName = wb.SheetNames[0];
    var sheet = wb.Sheets[sheetName];
    var matrix = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null, raw: true });

    // ignore les lignes totalement vides
    matrix = matrix.filter(function (row) {
      return row && row.some(function (c) { return c !== null && c !== undefined && String(c).trim() !== ''; });
    });

    if (!matrix.length) return { components: ['note'], rows: [] };

    var header = matrix[0].map(normalizeHeader);
    var yearIdx = header.indexOf('annee');
    if (yearIdx === -1) yearIdx = 0; // tolerance si l'en-tete est absent/different

    var components = header.filter(function (_, i) { return i !== yearIdx && header[i]; });
    if (!components.length) components = ['note'];

    var rows = matrix.slice(1).map(function (line) {
      var anneeRaw = line[yearIdx];
      var annee = anneeRaw === null || anneeRaw === undefined ? '' : String(anneeRaw).trim();
      var values = {};
      header.forEach(function (h, i) {
        if (i === yearIdx || !h) return;
        values[h] = toNumber(line[i]);
      });
      return { annee: annee, values: values };
    }).filter(function (r) { return r.annee; });

    return { components: components, rows: rows };
  }

  function mean(arr) { return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length; }

  function median(arr) {
    var s = arr.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(s.length / 2);
    return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  }

  function stddev(arr) {
    if (arr.length < 2) return 0;
    var m = mean(arr);
    var variance = arr.reduce(function (a, b) { return a + Math.pow(b - m, 2); }, 0) / (arr.length - 1);
    return Math.sqrt(variance);
  }

  function fmt(n) { return Math.round(n * 100) / 100; }

  function buildBins() {
    // 10 tranches de 2 points, de 0 a 20
    var bins = [];
    for (var i = 0; i < 10; i++) bins.push({ min: i * 2, max: i * 2 + 2, count: 0, label: (i * 2) + '-' + (i * 2 + 2) });
    return bins;
  }

  function pickDefaultComponent(components) {
    var lower = components.map(function (c) { return c.toLowerCase(); });
    var moyIdx = lower.indexOf('moyenne');
    if (moyIdx !== -1) return components[moyIdx];
    var noteIdx = lower.indexOf('note');
    if (noteIdx !== -1) return components[noteIdx];
    return components[0];
  }

  function labelize(c) {
    return c.charAt(0).toUpperCase() + c.slice(1);
  }

  function renderStats(root, rows, component) {
    var tilesEl = root.querySelector('.stats-tiles');
    var chartWrap = root.querySelector('.stats-chart-wrap');
    var emptyEl = root.querySelector('.stats-empty');
    var canvas = root.querySelector('canvas');

    var notes = rows
      .map(function (r) { return r.values[component]; })
      .filter(function (v) { return v !== null && v !== undefined && !isNaN(v); });

    if (!notes.length) {
      emptyEl.hidden = false;
      tilesEl.hidden = true;
      chartWrap.hidden = true;
      return;
    }

    emptyEl.hidden = true;
    tilesEl.hidden = false;
    chartWrap.hidden = false;

    var n = notes.length;
    var reussite = notes.filter(function (x) { return x > 10; }).length;

    tilesEl.innerHTML =
      tile(n, 'Etudiants') +
      tile(fmt(mean(notes)), 'Moyenne') +
      tile(fmt(median(notes)), 'Mediane') +
      tile(fmt(stddev(notes)), 'Ecart-type') +
      tile(Math.round((reussite / n) * 100) + '%', 'Reussite (>10)');

    var bins = buildBins();
    notes.forEach(function (v) {
      var idx = Math.min(Math.floor(v / 2), 9);
      if (idx < 0) idx = 0;
      bins[idx].count++;
    });

    if (window.Chart && canvas) {
      if (root._chart) root._chart.destroy();
      root._chart = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: bins.map(function (b) { return b.label; }),
          datasets: [{
            label: 'Nombre d\'etudiants',
            data: bins.map(function (b) { return b.count; }),
            backgroundColor: '#0d8f82',
            hoverBackgroundColor: '#0a746a',
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { title: { display: true, text: 'Note / 20' } },
            y: { beginAtZero: true, ticks: { precision: 0 } }
          }
        }
      });
    }
  }

  function tile(val, lbl) {
    return '<div class="stats-tile"><div class="val">' + val + '</div><div class="lbl">' + lbl + '</div></div>';
  }

  function makeFilter(id, labelText, ariaLabel) {
    var wrap = document.createElement('div');
    wrap.className = 'stats-filter';
    var label = document.createElement('label');
    label.className = 'stats-filter-label';
    label.setAttribute('for', id);
    label.textContent = labelText;
    var select = document.createElement('select');
    select.id = id;
    select.setAttribute('aria-label', ariaLabel);
    wrap.appendChild(label);
    wrap.appendChild(select);
    return { wrap: wrap, select: select };
  }

  var BASE = window.GRADES_BASE || '../grades/';

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('grades-widget');
    if (!root) return;
    var slug = root.getAttribute('data-slug');
    var controls = root.querySelector('.stats-controls');

    fetch(BASE + slug + '.xlsx', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('no data'); return r.arrayBuffer(); })
      .then(function (buf) {
        var parsed = parseWorkbook(buf);
        var rows = parsed.rows;
        var components = parsed.components;

        if (!rows.length) { renderStats(root, [], components[0]); return; }

        var currentComponent = pickDefaultComponent(components);

        var years = Array.from(new Set(rows.map(function (r) { return r.annee; }))).sort();
        var currentYear = years.length ? years[years.length - 1] : 'all';

        function currentRows() {
          return rows.filter(function (r) { return r.annee === currentYear; });
        }

        controls.innerHTML = '';

        // Filtre "Annee universitaire" (toujours affiche).
        var yearFilter = makeFilter('stats-year-' + slug, 'Annee universitaire', 'Choisir l\'annee universitaire');
        yearFilter.select.innerHTML = years.map(function (y) {
          var sel = y === currentYear ? ' selected' : '';
          return '<option value="' + y + '"' + sel + '>' + y + '</option>';
        }).join('');
        yearFilter.select.addEventListener('change', function () {
          currentYear = yearFilter.select.value;
          renderStats(root, currentRows(), currentComponent);
        });
        controls.appendChild(yearFilter.wrap);

        // Filtre "Examen" (composante de note, toujours affiche).
        var examFilter = makeFilter('stats-exam-' + slug, 'Examen', 'Choisir la composante de la note');
        examFilter.select.innerHTML = components.map(function (c) {
          var sel = c === currentComponent ? ' selected' : '';
          return '<option value="' + c + '"' + sel + '>' + labelize(c) + '</option>';
        }).join('');
        examFilter.select.addEventListener('change', function () {
          currentComponent = examFilter.select.value;
          renderStats(root, currentRows(), currentComponent);
        });
        controls.appendChild(examFilter.wrap);

        renderStats(root, currentRows(), currentComponent);
      })
      .catch(function () { renderStats(root, [], 'note'); });
  });

})();
