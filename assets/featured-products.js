/* Renders the six Featured Products cards on the homepage.
   Reads from assets/products-data.js (window.ILVETOTECH_PRODUCTS).
   Plain script (no modules) so it also works when index.html is opened directly from disk. */
(function () {
  'use strict';

  var grid = document.getElementById('fpGrid');
  var products = window.ILVETOTECH_PRODUCTS;
  if (!grid || !Array.isArray(products)) return;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildCard(p) {
    var label = p.buttonLabel || 'Learn More';

    var card = el('article', 'fp-card');

    var media = el('div', 'fp-media');
    var img = document.createElement('img');
    img.alt = p.imageAlt || p.name;
    img.width = 800;
    img.height = 800;
    // Aura's official image (resized by their store), with the local drawing as a safety net
    window.ILVETOTECH_IMAGE.apply(img, p, '', {
      width: 800, widths: [400, 600, 800, 1100],
      sizes: '(max-width: 980px) 46vw, 265px', lazy: true
    });
    media.appendChild(img);

    var body = el('div', 'fp-body');
    body.appendChild(el('h3', 'fp-name', p.name));
    body.appendChild(el('p', 'fp-desc', p.shortDescription));

    var link = el('a', 'fp-link', label);
    link.href = p.page;                                   // internal product page, never the retailer
    link.setAttribute('aria-label', label + ': ' + p.name);
    body.appendChild(link);

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  var frag = document.createDocumentFragment();
  products.forEach(function (p) { frag.appendChild(buildCard(p)); });
  grid.appendChild(frag);
})();
