(function () {
  'use strict';

  var JPP = window.JPP;
  var qs  = JPP.dom.qs;
  var qsa = JPP.dom.qsa;
  var on  = JPP.dom.on;

  function initHeader(root) {
    if (!root) return;
    initMobileMenu(root);
    initDropdowns(root);
    markCurrentPage(root);
  }

  function initMobileMenu(root) {
    var openBtn  = qs('.menu-button', root);
    var closeBtn = qs('.mobile-menu-close', root);
    var menu     = qs('.mobile-menu', root);
    if (!menu || !openBtn) return;

    function open() {
      menu.hidden = false;
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      menu.hidden = true;
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      openBtn.focus();
    }

    on(openBtn,  'click', open);
    on(closeBtn, 'click', close);
    on(document, 'keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) close();
    });
    qsa('a', menu).forEach(function (a) { on(a, 'click', close); });
  }

  function initDropdowns(root) {
    qsa('[data-dropdown]', root).forEach(function (dd) {
      var trigger = qs('.nav-more-trigger', dd);
      var menu    = qs('.nav-more-menu', dd);
      if (!trigger || !menu) return;

      on(trigger, 'click', function (e) {
        e.stopPropagation();
        var open = menu.hidden;
        menu.hidden = !open;
        trigger.setAttribute('aria-expanded', String(open));
      });
      on(document, 'click', function (e) {
        if (!dd.contains(e.target)) {
          menu.hidden = true;
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
      on(document, 'keydown', function (e) {
        if (e.key === 'Escape') {
          menu.hidden = true;
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function markCurrentPage(root) {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (!path) path = 'index.html';

    qsa('.nav-desktop a, .nav-more-menu a, .mobile-menu-links a', root).forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var file = href.split('/').pop();
      if (file && file === path) a.setAttribute('aria-current', 'page');
    });
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.header = initHeader;
})();