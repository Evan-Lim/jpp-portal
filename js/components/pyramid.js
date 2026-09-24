(function () {
  'use strict';

  var JPP = window.JPP;
  var el = JPP.dom.el;
  var pad2 = JPP.dom.pad2;
  var pagesPrefix = JPP.dom.pagesPrefix;

  function initPyramid(root) {
    if (!root) return;
    var org = (JPP.data && JPP.data.org) || {};
    root.innerHTML = '';

    if (org.apex)        root.appendChild(renderRow(org.apex, 'apex'));
    root.appendChild(el('div', { class: 'pyramid-line' }));
    if (org.deputies)    root.appendChild(renderRow(org.deputies, 'deputy'));
    root.appendChild(el('div', { class: 'pyramid-line' }));
    if (org.core)        root.appendChild(renderRow(org.core, 'core'));
    root.appendChild(el('div', { class: 'pyramid-line lower' }));
    if (org.secretaries) root.appendChild(renderRow(org.secretaries, 'sec'));
  }

  function renderRow(members, tone) {
    var row = el('div', { class: 'pyramid-row pyramid-row--' + tone });
    members.forEach(function (m) { row.appendChild(renderNode(m)); });
    return row;
  }

  function renderNode(m) {
    var node = el('a', {
      class: 'pyramid-node tone-' + (m.tone != null ? m.tone : 0),
      href:  pagesPrefix() + m.href
    });
    node.innerHTML =
      '<small>MAJLIS TERTINGGI · ' + pad2(m.order) + '</small>' +
      '<div class="photo"><img src="' + m.photo + '" alt="Foto ' + m.name + '"></div>' +
      '<span>' + m.role + '</span>' +
      '<b>' + m.name + '</b>' +
      '<em>Lihat profil rasmi →</em>';
    return node;
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.pyramid = initPyramid;
})();