(function () {
  'use strict';

  function initReveal() {
    var targets = document.querySelectorAll('.section, .hero, .countdown');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(targets, function (t) { t.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    Array.prototype.forEach.call(targets, function (t) {
      t.classList.add('reveal');
      io.observe(t);
    });
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.reveal = initReveal;
})();