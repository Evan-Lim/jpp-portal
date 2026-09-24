(function () {
  'use strict';

  var JPP = window.JPP;
  var qsa = JPP.dom.qsa;
  var el  = JPP.dom.el;
  var pad2 = JPP.dom.pad2;

  var ICON =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
    '<path d="M8 2v3M16 2v3M3 9h18"/></svg>';

  function initCountdowns(root) {
    if (!root) return;
    var list = (JPP.data && JPP.data.countdowns) || [];
    root.innerHTML = '';
    list.forEach(function (c) { root.appendChild(renderCard(c)); });
    tickAll(root);
    setInterval(function () { tickAll(root); }, 1000);
  }

  function renderCard(c) {
    var card = el('article', { class: 'countdown' });
    card.innerHTML =
      '<div class="countdown-head">' +
        ICON +
        '<div>' +
          '<span>' + c.label + '</span>' +
          '<h2>' + c.dateLabel + '</h2>' +
          '<p>' + c.subtitle + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="countdown-clock" aria-live="polite" data-target="' + c.target + '">' +
        '<div><strong data-d>00</strong><span>Hari</span></div>' +
        '<div><strong data-h>00</strong><span>Jam</span></div>' +
        '<div><strong data-m>00</strong><span>Minit</span></div>' +
        '<div><strong data-s>00</strong><span>Saat</span></div>' +
      '</div>';
    return card;
  }

  function tickAll(root) {
    qsa('.countdown-clock', root).forEach(function (clock) {
      var target = new Date(clock.dataset.target).getTime();
      var diff   = Math.max(0, target - Date.now());
      var s      = Math.floor(diff / 1000);
      var d      = Math.floor(s / 86400);
      var h      = Math.floor((s % 86400) / 3600);
      var m      = Math.floor((s % 3600) / 60);
      var sec    = s % 60;
      var cellD = clock.querySelector('[data-d]');
      var cellH = clock.querySelector('[data-h]');
      var cellM = clock.querySelector('[data-m]');
      var cellS = clock.querySelector('[data-s]');
      if (cellD) cellD.textContent = pad2(d);
      if (cellH) cellH.textContent = pad2(h);
      if (cellM) cellM.textContent = pad2(m);
      if (cellS) cellS.textContent = pad2(sec);
    });
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.countdowns = initCountdowns;
})();