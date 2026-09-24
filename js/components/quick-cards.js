(function () {
  'use strict';

  var JPP = window.JPP;
  var el = JPP.dom.el;
  var pad2 = JPP.dom.pad2;
  var pagesPrefix = JPP.dom.pagesPrefix;

  function initQuickCards(root) {
    if (!root) return;
    var list = (JPP.data && JPP.data.quickCards) || [];
    root.innerHTML = '';
    list.forEach(function (c) { root.appendChild(renderCard(c)); });
  }

  function renderCard(c) {
    var cls = 'card quick-card card--' + c.color +
              (c.featured ? ' quick-card--featured' : '');
    var card = el('a', { class: cls, href: pagesPrefix() + c.href });
    card.innerHTML =
      '<div class="quick-card-top">' +
        '<div class="quick-emblem">' + c.icon + '</div>' +
        '<strong>' + pad2(c.number) + '</strong>' +
      '</div>' +
      '<div class="quick-copy">' +
        '<span class="kicker">' + c.eyebrow + '</span>' +
        (c.badge ? '<small class="badge">' + c.badge + '</small>' : '') +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.description + '</p>' +
      '</div>' +
      '<div class="quick-action">' +
        '<b>' + c.cta + '</b><span aria-hidden="true">→</span>' +
      '</div>';
    return card;
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.quickCards = initQuickCards;
})();