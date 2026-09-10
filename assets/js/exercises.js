/* =========================================================
   Exercices interactifs — moteur generique
   Deux modes :
   1) Mode "banque" : si window.EXERCISES_DATA existe et qu'un
      element #exo-app est present, les questions sont generees
      dynamiquement avec des onglets par categorie et un score
      independant pour chaque categorie.
   2) Mode "statique" : sinon, le script se contente de rendre
      interactifs les blocs ".exo-card" deja presents dans le HTML.
   Les enonces peuvent contenir du LaTeX delimite par \( ... \)
   (rendu via KaTeX / auto-render, charge par ailleurs dans la page).
   ========================================================= */
(function () {

  function renderMath(el) {
    if (window.renderMathInElement && el) {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }
  }

  function attachCardBehavior(card, onStateChange) {
    var checkBtn = card.querySelector('.exo-check');
    var resetBtn = card.querySelector('.exo-reset');
    var feedback = card.querySelector('.exo-feedback');
    var numInput = card.querySelector('.exo-input');

    card.dataset.state = 'unanswered';

    function setFeedback(html, cls) {
      feedback.hidden = false;
      feedback.innerHTML = html;
      feedback.className = 'exo-feedback ' + cls;
      renderMath(feedback);
    }

    function check() {
      var isCorrect;

      if (numInput) {
        var raw = numInput.value.trim().replace(',', '.');
        if (raw === '') {
          setFeedback("Merci de saisir une valeur avant de vérifier.", 'warn');
          return;
        }
        var val = parseFloat(raw);
        if (isNaN(val)) {
          setFeedback("Réponse non reconnue : saisissez un nombre.", 'warn');
          return;
        }
        var target = parseFloat(card.dataset.answer);
        var tol = parseFloat(card.dataset.tol || '0.01');
        isCorrect = Math.abs(val - target) <= tol;
      } else {
        var checked = card.querySelector('input[type="radio"]:checked');
        if (!checked) {
          setFeedback("Sélectionnez une réponse avant de vérifier.", 'warn');
          return;
        }
        isCorrect = checked.value === card.dataset.answer;
      }

      if (isCorrect) {
        card.dataset.state = 'correct';
        setFeedback("Correct !", 'ok');
      } else {
        card.dataset.state = 'incorrect';
        var answerText = card.dataset.answerText || card.dataset.answer;
        setFeedback("Ce n'est pas la bonne réponse. Réponse attendue : " + answerText, 'bad');
      }

      card.querySelectorAll('input').forEach(function (i) { i.disabled = true; });
      checkBtn.hidden = true;
      if (resetBtn) resetBtn.hidden = false;
      if (onStateChange) onStateChange();
    }

    function reset() {
      card.dataset.state = 'unanswered';
      feedback.hidden = true;
      feedback.innerHTML = '';
      card.querySelectorAll('input').forEach(function (i) {
        i.disabled = false;
        if (i.type === 'radio') { i.checked = false; } else { i.value = ''; }
      });
      checkBtn.hidden = false;
      if (resetBtn) resetBtn.hidden = true;
      if (onStateChange) onStateChange();
    }

    checkBtn.addEventListener('click', check);
    if (resetBtn) resetBtn.addEventListener('click', reset);
    card._exoReset = reset;
  }

  function buildCardFromData(q, numeroDansCategorie) {
    var card = document.createElement('div');
    card.className = 'exo-card';
    card.dataset.cat = q.cat;
    card.dataset.answer = q.type === 'qcm' ? q.ans : String(q.ans);
    card.dataset.answerText = q.ansText != null ? q.ansText : String(q.ans);
    if (q.type === 'num' && q.tol != null) card.dataset.tol = String(q.tol);

    var numEl = document.createElement('p');
    numEl.className = 'exo-num';
    numEl.textContent = 'Exercice ' + numeroDansCategorie;
    card.appendChild(numEl);

    var qEl = document.createElement('p');
    qEl.className = 'exo-q';
    qEl.innerHTML = q.q;
    card.appendChild(qEl);

    if (q.img) {
      var figWrap = document.createElement('div');
      figWrap.className = 'exo-fig';
      var img = document.createElement('img');
      img.src = q.img;
      img.alt = q.imgAlt || 'Graphique associé à l\'exercice';
      img.loading = 'lazy';
      figWrap.appendChild(img);
      card.appendChild(figWrap);
    }

    if (q.type === 'qcm') {
      var optsWrap = document.createElement('div');
      optsWrap.className = 'exo-options';
      q.opts.forEach(function (o) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = q.id;
        input.value = o.key;
        label.appendChild(input);
        var span = document.createElement('span');
        span.innerHTML = ' ' + o.text;
        label.appendChild(span);
        optsWrap.appendChild(label);
      });
      card.appendChild(optsWrap);
    } else {
      var wrap = document.createElement('div');
      wrap.className = 'exo-numeric';
      var input2 = document.createElement('input');
      input2.type = 'text';
      input2.inputMode = 'decimal';
      input2.className = 'exo-input';
      input2.placeholder = 'Votre réponse';
      wrap.appendChild(input2);
      card.appendChild(wrap);
    }

    var actions = document.createElement('div');
    actions.className = 'exo-actions';
    var checkBtn = document.createElement('button');
    checkBtn.type = 'button';
    checkBtn.className = 'exo-check';
    checkBtn.textContent = 'Vérifier';
    var resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'exo-reset';
    resetBtn.textContent = 'Réessayer';
    resetBtn.hidden = true;
    actions.appendChild(checkBtn);
    actions.appendChild(resetBtn);
    card.appendChild(actions);

    var feedback = document.createElement('p');
    feedback.className = 'exo-feedback';
    feedback.hidden = true;
    card.appendChild(feedback);

    return card;
  }

  function initDynamicBank(app) {
    var categories = window.EXERCISES_CATEGORIES || [];
    var questions = window.EXERCISES_DATA || [];
    if (!categories.length || !questions.length) return;

    var countByCat = {};
    questions.forEach(function (q) { countByCat[q.cat] = (countByCat[q.cat] || 0) + 1; });

    // -- onglets --
    var tabsBar = document.createElement('div');
    tabsBar.className = 'exo-tabs';
    app.appendChild(tabsBar);

    var catHeading = document.createElement('div');
    catHeading.className = 'exo-cat-heading';
    catHeading.innerHTML =
      '<span class="exo-cat-title"></span>' +
      '<span class="exo-cat-meta">' +
      '<span class="exo-cat-score"></span>' +
      '<button type="button" class="exo-cat-reset">Réinitialiser ce thème</button>' +
      '</span>';
    app.appendChild(catHeading);

    var cardsWrap = document.createElement('div');
    cardsWrap.className = 'exo-cards';
    app.appendChild(cardsWrap);

    // -- construction de toutes les cartes (groupees par categorie) --
    var allCards = [];
    categories.forEach(function (cat) {
      var qsOfCat = questions.filter(function (q) { return q.cat === cat.slug; });
      qsOfCat.forEach(function (q, idx) {
        var card = buildCardFromData(q, idx + 1);
        attachCardBehavior(card, updateScoreDisplay);
        cardsWrap.appendChild(card);
        allCards.push(card);
      });

      var tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = 'exo-tab';
      tabBtn.dataset.cat = cat.slug;
      tabBtn.innerHTML = cat.label + ' <span class="exo-tab-score">0/' + countByCat[cat.slug] + '</span>';
      tabBtn.addEventListener('click', function () { selectCategory(cat.slug); });
      tabsBar.appendChild(tabBtn);
    });

    // rendu LaTeX de l'ensemble des enonces/options en une seule passe
    renderMath(cardsWrap);

    function scoreForCat(slug) {
      var n = 0;
      allCards.forEach(function (c) { if (c.dataset.cat === slug && c.dataset.state === 'correct') n++; });
      return n;
    }

    function updateScoreDisplay() {
      var activeBtn = tabsBar.querySelector('.exo-tab.active');
      categories.forEach(function (cat) {
        var btn = tabsBar.querySelector('.exo-tab[data-cat="' + cat.slug + '"]');
        var n = scoreForCat(cat.slug);
        if (btn) {
          btn.querySelector('.exo-tab-score').textContent = n + '/' + countByCat[cat.slug];
          btn.classList.toggle('complete', n === countByCat[cat.slug]);
        }
      });
      if (activeBtn) {
        var slug = activeBtn.dataset.cat;
        var n = scoreForCat(slug);
        catHeading.querySelector('.exo-cat-score').innerHTML =
          '<span class="' + (n === countByCat[slug] ? 'done' : '') + '">' + n + '</span> / ' + countByCat[slug] + ' réussies dans ce thème';
      }
    }

    function selectCategory(slug) {
      tabsBar.querySelectorAll('.exo-tab').forEach(function (b) {
        b.classList.toggle('active', b.dataset.cat === slug);
      });
      var cat = categories.filter(function (c) { return c.slug === slug; })[0];
      catHeading.querySelector('.exo-cat-title').textContent = cat ? cat.label : '';
      allCards.forEach(function (c) { c.hidden = c.dataset.cat !== slug; });
      updateScoreDisplay();
      app.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    catHeading.querySelector('.exo-cat-reset').addEventListener('click', function () {
      var activeBtn = tabsBar.querySelector('.exo-tab.active');
      if (!activeBtn) return;
      var slug = activeBtn.dataset.cat;
      allCards.forEach(function (c) { if (c.dataset.cat === slug && c._exoReset) c._exoReset(); });
    });

    // categorie active par defaut : la premiere
    selectCategory(categories[0].slug);
    updateScoreDisplay();
  }

  function initStaticCards(cards) {
    function updateScore() {}
    cards.forEach(function (card) { attachCardBehavior(card, updateScore); });
    renderMath(document.body);
  }

  function init() {
    var app = document.getElementById('exo-app');
    if (app && window.EXERCISES_DATA && window.EXERCISES_CATEGORIES) {
      initDynamicBank(app);
      return;
    }
    var cards = document.querySelectorAll('.exo-card');
    if (cards.length) initStaticCards(cards);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
