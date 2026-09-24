(function () {
  'use strict';

  var JPP = window.JPP;
  var qs  = JPP.dom.qs;
  var on  = JPP.dom.on;
  var el  = JPP.dom.el;
  var pad2 = JPP.dom.pad2;
  var pagesPrefix = JPP.dom.pagesPrefix;   // <-- new

  var AUTO_MS = 5000;

  function initCarousel(root) {
    if (!root) return;

    var viewport = qs('.carousel-viewport', root);
    var track    = qs('[data-carousel-track]', root);
    var prevBtn  = qs('[data-carousel-prev]', root);
    var nextBtn  = qs('[data-carousel-next]', root);
    var playBtn  = qs('[data-carousel-play]', root);
    var counter  = qs('[data-carousel-counter]', root);
    var progress = qs('[data-carousel-progress]', root);

    if (!track) return;

    var memories = (JPP.data && JPP.data.memories) || [];
    memories.forEach(function (m) { track.appendChild(renderSlide(m)); });

    var index   = 0;
    var playing = true;
    var timer   = null;

    function update() {
      track.style.transform = 'translateX(' + (-index * 100) + '%)';
      if (counter) counter.textContent =
        pad2(index + 1) + ' / ' + pad2(track.children.length);
      if (progress) progress.style.width =
        ((index + 1) / track.children.length * 100) + '%';
    }
    function go(i) {
      index = (i + track.children.length) % track.children.length;
      update();
    }
    function start() {
      stop();
      timer = setInterval(function () { go(index + 1); }, AUTO_MS);
      playing = true;
      if (playBtn) playBtn.textContent = 'Jeda';
    }
    function stop() {
      clearInterval(timer); timer = null;
      playing = false;
      if (playBtn) playBtn.textContent = 'Main';
    }

    on(prevBtn, 'click', function () { stop(); go(index - 1); });
    on(nextBtn, 'click', function () { stop(); go(index + 1); });
    on(playBtn, 'click', function () { playing ? stop() : start(); });

    on(root, 'keydown', function (e) {
      if (e.key === 'ArrowLeft')  { stop(); go(index - 1); }
      if (e.key === 'ArrowRight') { stop(); go(index + 1); }
    });

    var startX = 0;
    on(viewport, 'touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    on(viewport, 'touchend', function (e) {
      var delta = startX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 40) { stop(); go(delta > 0 ? index + 1 : index - 1); }
    });

    update();
    start();
  }

  function renderSlide(m) {
    var slide = el('div', {
      class: 'carousel-item',
      role: 'group',
      'aria-roledescription': 'slide'
    });
    slide.innerHTML =
      '<article class="memory-card">' +
        '<figure>' +
          '<img src="' + m.image + '" alt="' + m.title + '" loading="lazy">' +
          '<figcaption>' + m.photoCount + ' foto dalam album</figcaption>' +
        '</figure>' +
        '<div class="memory-copy">' +
          '<div class="memory-number">' +
            '<span>BAB ' + pad2(m.chapter) + '</span>' +
            '<small>' + m.tagline + '</small>' +
          '</div>' +
          '<h3>' + m.title + '</h3>' +
          '<dl>' +
            '<div><dt>Masa / sesi</dt><dd>' + m.session + '</dd></div>' +
            '<div><dt>Tempat</dt><dd>' + m.place + '</dd></div>' +
            '<div><dt>Aktiviti</dt><dd>' + m.activity + '</dd></div>' +
          '</dl>' +
          '<div class="memory-note">' +
            '<span>Apa yang kami lakukan</span>' +
            '<p>' + m.description + '</p>' +
          '</div>' +
          '<a href="' + pagesPrefix() + 'acara.html" class="link">Buka bab ini →</a>' +
        '</div>' +
      '</article>';
    return slide;
  }

  window.JPP.components = window.JPP.components || {};
  window.JPP.components.carousel = initCarousel;
})();