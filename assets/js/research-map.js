(function () {
  'use strict';

  var explorer = document.querySelector('.research-explorer');
  if (!explorer) return;

  var search = document.getElementById('research-search');
  var area = document.getElementById('area-filter');
  var kind = document.getElementById('kind-filter');
  var code = document.getElementById('code-filter');
  var sort = document.getElementById('sort-filter');
  var clear = explorer.querySelector('[data-clear]');
  var empty = explorer.querySelector('[data-empty]');
  var emptyClear = explorer.querySelector('[data-empty-clear]');
  var count = document.getElementById('result-count');
  var results = explorer.querySelector('.research-results');
  var cards = Array.prototype.slice.call(explorer.querySelectorAll('[data-research-card]'));
  var trackButtons = Array.prototype.slice.call(explorer.querySelectorAll('[data-track]'));
  var presetButtons = Array.prototype.slice.call(explorer.querySelectorAll('[data-preset]'));
  var areaJumps = Array.prototype.slice.call(explorer.querySelectorAll('[data-area-jump]'));
  var activeTrack = '';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function normalizedTerms(value) {
    return value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  }

  function setTrack(value) {
    activeTrack = value || '';
    trackButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.track === activeTrack));
    });
  }

  function stateIsFiltered() {
    return Boolean(search.value.trim() || area.value || kind.value || activeTrack || code.checked || sort.value !== 'newest');
  }

  function updatePresets() {
    var noQuery = !search.value.trim();
    var defaultSort = sort.value === 'newest';
    presetButtons.forEach(function (button) {
      var preset = button.dataset.preset;
      var isActive = false;
      if (preset === 'all') isActive = noQuery && defaultSort && !area.value && !kind.value && !activeTrack && !code.checked;
      if (preset === 'orient') isActive = noQuery && defaultSort && area.value === 'foundations-pathways' && !kind.value && !activeTrack && !code.checked;
      if (preset === 'code') isActive = noQuery && defaultSort && code.checked && !area.value && !kind.value && !activeTrack;
      if (preset === 'benchmarks') isActive = noQuery && defaultSort && kind.value === 'benchmark' && !area.value && !activeTrack && !code.checked;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function updateUrl() {
    if (!window.history || !window.history.replaceState) return;
    var params = new URLSearchParams();
    if (search.value.trim()) params.set('q', search.value.trim());
    if (area.value) params.set('area', area.value);
    if (kind.value) params.set('kind', kind.value);
    if (activeTrack) params.set('track', activeTrack);
    if (code.checked) params.set('code', '1');
    if (sort.value !== 'newest') params.set('sort', sort.value);
    var query = params.toString();
    window.history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
  }

  function applyFilters(options) {
    options = options || {};
    var terms = normalizedTerms(search.value);
    var visible = 0;

    cards.sort(function (a, b) {
      if (sort.value === 'title') return a.dataset.title.localeCompare(b.dataset.title);
      var direction = sort.value === 'oldest' ? 1 : -1;
      return (Number(a.dataset.date) - Number(b.dataset.date)) * direction;
    });

    cards.forEach(function (card) {
      var matchesText = terms.every(function (term) { return card.dataset.search.indexOf(term) !== -1; });
      var matchesArea = !area.value || card.dataset.area === area.value;
      var matchesKind = !kind.value || card.dataset.kind === kind.value;
      var matchesTrack = !activeTrack || card.dataset.track === activeTrack;
      var matchesCode = !code.checked || card.dataset.code === '1';
      var matches = matchesText && matchesArea && matchesKind && matchesTrack && matchesCode;

      card.hidden = !matches;
      results.appendChild(card);
      if (matches) visible += 1;
    });

    count.textContent = visible === cards.length && !stateIsFiltered()
      ? 'Showing all ' + cards.length + ' signals'
      : 'Showing ' + visible + ' of ' + cards.length + ' signals';
    empty.hidden = visible !== 0;
    clear.disabled = !stateIsFiltered();
    updatePresets();
    if (!options.skipUrl) updateUrl();
  }

  function reset(options) {
    search.value = '';
    area.value = '';
    kind.value = '';
    code.checked = false;
    sort.value = 'newest';
    setTrack('');
    applyFilters(options);
  }

  function selectPreset(preset) {
    reset({ skipUrl: true });
    if (preset === 'orient') area.value = 'foundations-pathways';
    if (preset === 'code') code.checked = true;
    if (preset === 'benchmarks') kind.value = 'benchmark';
    applyFilters();
  }

  function loadFromUrl() {
    var params = new URLSearchParams(window.location.search);
    search.value = params.get('q') || '';
    if (Array.prototype.some.call(area.options, function (option) { return option.value === params.get('area'); })) {
      area.value = params.get('area') || '';
    }
    if (Array.prototype.some.call(kind.options, function (option) { return option.value === params.get('kind'); })) {
      kind.value = params.get('kind') || '';
    }
    code.checked = params.get('code') === '1';
    var requestedSort = params.get('sort');
    if (requestedSort === 'oldest' || requestedSort === 'title') sort.value = requestedSort;
    var requestedTrack = params.get('track');
    setTrack(requestedTrack === 'technical' || requestedTrack === 'governance' ? requestedTrack : '');
  }

  search.addEventListener('input', function () { applyFilters(); });
  area.addEventListener('change', function () { applyFilters(); });
  kind.addEventListener('change', function () { applyFilters(); });
  code.addEventListener('change', function () { applyFilters(); });
  sort.addEventListener('change', function () { applyFilters(); });
  clear.addEventListener('click', function () { reset(); search.focus(); });
  emptyClear.addEventListener('click', function () { reset(); search.focus(); });

  trackButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setTrack(button.dataset.track);
      applyFilters();
    });
  });

  presetButtons.forEach(function (button) {
    button.addEventListener('click', function () { selectPreset(button.dataset.preset); });
  });

  areaJumps.forEach(function (button) {
    button.addEventListener('click', function () {
      search.value = '';
      area.value = button.dataset.areaJump;
      kind.value = '';
      code.checked = false;
      setTrack('');
      applyFilters();
      document.querySelector('.explorer-controls').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  document.addEventListener('keydown', function (event) {
    var target = event.target;
    var isTyping = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable);
    if (event.key === '/' && !isTyping) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === 'Escape' && document.activeElement === search && search.value) {
      search.value = '';
      applyFilters();
    }
  });

  loadFromUrl();
  applyFilters({ skipUrl: true });
}());
