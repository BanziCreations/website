/* Renders a product information page from assets/products-data.js.
   The page's <body data-product-id="product-N"> says which product to show.
   Plain script (no modules) so pages also open correctly straight from disk. */
(function () {
  'use strict';

  var BASE = '../';   // product pages live one folder down from the site root
  var DISCLOSURE = 'Some links on this page are affiliate links. If you purchase through these links, we may earn a commission at no additional cost to you.';
  var PLACEHOLDER_URL = /^https?:\/\/(www\.)?example\.com\//i;

  var products = window.ILVETOTECH_PRODUCTS || [];
  var id = document.body.getAttribute('data-product-id');
  var root = document.getElementById('productRoot');
  if (!root) return;

  var product = products.filter(function (p) { return p.id === id; })[0];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function add(parent) {
    for (var i = 1; i < arguments.length; i++) parent.appendChild(arguments[i]);
    return parent;
  }
  function link(href, className, text) {
    var a = el('a', className, text);
    a.href = href;
    return a;
  }
  function wrap(child) { return add(el('div', 'wrap'), child); }
  function productImage(p, opts) {
    var img = document.createElement('img');
    img.alt = p.imageAlt || p.name;
    img.width = 800; img.height = 800;
    return window.ILVETOTECH_IMAGE.apply(img, p, BASE, opts);
  }

  if (!product) {
    var missing = el('div', 'wrap');
    missing.style.padding = '96px 24px';
    add(missing,
      el('h1', 'pp-title rule', 'Product not found'),
      el('p', 'pp-intro', 'We could not find that product. Head back to the homepage to browse the featured products.'),
      link(BASE + 'index.html#featured-products', 'btn', 'Browse featured products'));
    add(root, missing);
    document.title = 'Product not found | ILVETOTECH';
    return;
  }

  function buyButton() {
    var label = product.buyLabel || 'Buy Now';
    var a = el('a', 'btn pp-buy-btn', label);
    a.href = product.affiliateUrl;                       // external affiliate URL (set in products-data.js)
    a.target = '_blank';
    a.rel = 'sponsored noopener noreferrer';
    a.setAttribute('data-affiliate-link', '');
    if (PLACEHOLDER_URL.test(product.affiliateUrl || '')) {
      a.setAttribute('data-affiliate-placeholder', 'true');   // still a placeholder: replace before publishing
    }
    a.setAttribute('aria-label', label + ': ' + product.name + ' (opens the retailer in a new tab)');
    return a;
  }
  function disclosure() {
    var p = el('p', 'pp-disclosure');
    add(p, el('strong', '', 'Affiliate Disclosure:'), document.createTextNode(' ' + DISCLOSURE));
    return p;
  }

  document.title = product.name + ' | ILVETOTECH';
  var meta = document.getElementById('metaDescription');
  if (meta && product.shortDescription) meta.setAttribute('content', product.shortDescription);

  var frag = document.createDocumentFragment();

  /* Breadcrumb */
  var crumbs = el('nav', 'wrap pp-crumbs');
  crumbs.setAttribute('aria-label', 'Breadcrumb');
  var ol = el('ol');
  var li1 = add(el('li'), link(BASE + 'index.html', '', 'Home'));
  var li2 = add(el('li'), link(BASE + 'index.html#featured-products', '', 'Featured Products'));
  var li3 = el('li', '', product.name); li3.setAttribute('aria-current', 'page');
  add(ol, li1, li2, li3);
  add(crumbs, ol);
  frag.appendChild(crumbs);

  /* Hero: large image + title, intro, buy button, disclosure */
  var hero = el('section', 'wrap pp-hero');
  var media = el('div', 'pp-media');
  var heroImg = productImage(product, {
    width: 1000, widths: [600, 800, 1000, 1400],
    sizes: '(max-width: 900px) 92vw, 540px', priority: true
  });
  media.appendChild(heroImg);

  var summary = el('div', 'pp-summary');
  if (product.category) summary.appendChild(el('p', 'pp-category', product.category));
  summary.appendChild(el('h1', 'pp-title rule', product.name));
  summary.appendChild(el('p', 'pp-intro', product.intro));
  var buy = el('div', 'pp-buy');
  add(buy, buyButton(), disclosure(), el('p', 'pp-note', 'Opens the retailer\u2019s website in a new tab.'));
  summary.appendChild(buy);
  add(hero, media, summary);
  frag.appendChild(hero);

  /* Overview */
  if (product.overview && product.overview.length) {
    var ov = el('section', 'pp-section');
    var ovBox = el('div', 'pp-overview');
    product.overview.forEach(function (t) { ovBox.appendChild(el('p', '', t)); });
    add(ov, wrap(add(el('div'), el('h2', 'rule', 'Overview'), ovBox)));
    frag.appendChild(ov);
  }

  /* Key features and benefits */
  if (product.features && product.features.length) {
    var ft = el('section', 'pp-section');
    var ul = el('ul', 'pp-features');
    product.features.forEach(function (f) {
      add(ul, add(el('li'), el('h3', '', f.title), el('p', '', f.text)));
    });
    add(ft, wrap(add(el('div'), el('h2', 'rule', 'Key features and benefits'), ul)));
    frag.appendChild(ft);
  }

  /* Specifications */
  if (product.specs && product.specs.length) {
    var sp = el('section', 'pp-section');
    var table = el('table', 'pp-specs');
    add(table, el('caption', 'sr-only', 'Specifications for ' + product.name));
    var tbody = el('tbody');
    product.specs.forEach(function (row) {
      var tr = el('tr');
      var th = el('th', '', row[0]); th.setAttribute('scope', 'row');
      add(tr, th, el('td', '', row[1]));
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    add(sp, wrap(add(el('div'), el('h2', 'rule', 'Specifications'), table)));
    frag.appendChild(sp);
  }

  /* Closing buy band */
  var cta = el('section', 'pp-cta');
  var ctaInner = el('div', 'wrap');
  add(ctaInner,
    el('h2', '', 'Ready to take a closer look?'),
    el('p', 'lead', 'Continue to the retailer\u2019s website to see this product\u2019s current details.'),
    buyButton(),
    disclosure(),
    link(BASE + 'index.html', 'pp-back', 'Back to Home'));
  cta.appendChild(ctaInner);
  frag.appendChild(cta);

  /* More from Aura Displays: clickable thumbnails of the other products (upsell, sits just above the footer) */
  var others = products.filter(function (p) { return p.id !== product.id; });
  if (others.length) {
    var br = el('section', 'pp-section pp-upsell');
    br.style.borderTop = '0';
    var grid = el('div', 'pp-others');
    others.forEach(function (p) {
      var a = el('a', 'pp-mini');
      a.href = p.page.replace(/^products\//, '');       // internal sibling page, never the retailer
      a.setAttribute('aria-label', p.name + (p.upsellText ? ': ' + p.upsellText : ''));
      var thumb = el('span', 'thumb');
      var timg = productImage(p, {
        width: 700, widths: [300, 500, 700],
        sizes: '(max-width: 560px) 30vw, 360px', lazy: true
      });
      thumb.appendChild(timg);
      add(a, thumb, el('span', 'label', p.name));
      if (p.upsellText) a.appendChild(el('span', 'teaser', p.upsellText));
      grid.appendChild(a);
    });
    var foot = add(el('p', 'pp-others-foot'), link(BASE + 'index.html#featured-products', '', 'See all featured products on the homepage'));
    add(br, wrap(add(el('div'),
      el('h2', 'rule', 'More from Aura Displays'),
      el('p', 'pp-upsell-lede', 'Not quite what you are after? Take a look at the rest of the range.'),
      grid, foot)));
    frag.appendChild(br);
  }

  root.textContent = '';          // clears the <noscript>/loading fallback
  root.appendChild(frag);
})();
