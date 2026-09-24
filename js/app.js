(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var components = (window.JPP && window.JPP.components) || {};

    var MAP = {
      header:        components.header,
      countdowns:    components.countdowns,
      pyramid:       components.pyramid,
      carousel:      components.carousel,
      'quick-cards': components.quickCards
    };

    var nodes = document.querySelectorAll('[data-component]');
    Array.prototype.forEach.call(nodes, function (node) {
      var name = node.getAttribute('data-component');
      var init = MAP[name];
      if (typeof init === 'function') init(node);
    });

    if (typeof components.reveal === 'function') components.reveal();
  });
})();