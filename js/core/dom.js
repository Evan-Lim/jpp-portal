(function () {
  'use strict';

  window.JPP = window.JPP || {};

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function on(el, ev, fn, opts) {
    if (!el) return function () {};
    el.addEventListener(ev, fn, opts);
    return function () { el.removeEventListener(ev, fn, opts); };
  }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v);
    });
    var list = [].concat(children || []);
    list.forEach(function (child) {
      if (child == null || child === false) return;
      node.append(child.nodeType ? child : document.createTextNode(String(child)));
    });
    return node;
  }
  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  /*
    Returns the prefix you must add in front of any link that lives
    inside the /pages/ folder.

    On index.html              -> "pages/"
    On pages/organisasi.html   -> ""
    On pages/exco/foo.html     -> "../"

    Works with both file:// and http(s):// URLs.
  */
  function pagesPrefix() {
    var path = window.location.pathname.replace(/\\/g, '/');
    if (/\/pages\/exco\/[^/]*$/.test(path)) return '../';
    if (/\/pages\/[^/]*$/.test(path))       return '';
    return 'pages/';
  }

  window.JPP.dom = {
    qs: qs,
    qsa: qsa,
    on: on,
    el: el,
    pad2: pad2,
    pagesPrefix: pagesPrefix
  };
})();