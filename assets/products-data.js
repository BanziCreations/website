/* =====================================================================
   ILVETOTECH  |  FEATURED PRODUCTS  |  SINGLE SOURCE OF TRUTH
   ---------------------------------------------------------------------
   This one file feeds BOTH the "Featured Products" grid on the homepage
   (assets/featured-products.js) AND all four product pages
   (products/product-1.html ... product-4.html, via assets/product-page.js).
   Edit it here and every page updates. No other file needs touching.

   WHAT IS HERE
   Four Aura Displays categories (single, dual, smart and desktop monitors).
   The flagship Triple Aero Pro Max is deliberately excluded because it is
   already featured on the homepage.

   WHERE THE FACTS COME FROM
   All names, sizes, resolutions and specifications were taken from Aura's
   own collection pages. Where models in a category differ, the text says
   "depending on the model". Prices and stock are NOT copied here because
   they change; visitors see current ones on Aura's site.

   HOW TO UPDATE A PRODUCT
   - name / shortDescription ... homepage card text
   - image / imageFallback / imageAlt ... homepage card + product page image.
        "image" is Aura's own official image for each category, loaded
        straight from Aura's website (their store resizes it on request, so
        phones get a smaller file). If it ever fails to load, the page
        quietly swaps in the local drawing named in "imageFallback".
        To use your own copy instead (more reliable, and fully yours to
        control): save a square JPG or WebP (800x800 or larger) into
        assets/images/products/ and set "image" to that path, e.g.
        "assets/images/products/single-monitors.jpg" (relative to the site
        root, no leading slash).
        Check Aura's affiliate terms allow you to display their images.
   - intro / overview / features / specs ... product page content
   - upsellText ................ the line under each thumbnail in the
                                 "More from Aura Displays" upsell strip
   - buttonLabel / buyLabel .... button text (card / product page)
   - affiliateUrl .............. your Aura affiliate link for that category
   ===================================================================== */

window.ILVETOTECH_PRODUCTS = [
  {
    id: "product-1",
    page: "products/product-1.html",
    name: "Single Monitors",
    category: "Portable monitors",

    // --- Homepage card -------------------------------------------------
    shortDescription: "Lightweight USB-C screens that add a second display to your laptop. Six models from 13.3 to 24 inches, all plug and play.",
    image: "https://aura-displays.com/cdn/shop/collections/Mega_Menu_1000_1000_copie_21.jpg?v=1761323706",      // Aura's own official image for this category (1500 x 1500)
    imageFallback: "assets/images/products/product-1.svg",   // local drawing, used only if the image above fails to load
    imageAlt: "Aura Displays Single Monitors",
    buttonLabel: "Learn More",

    // --- Upsell strip (shown on the OTHER product pages) ---------------
    upsellText: "Six portable screens, 13.3 to 24 inches",

    // --- Product page --------------------------------------------------
    intro: "A single extra screen gives a laptop more room to work. Aura's Single Monitors connect over USB-C and need no software.",
    overview: [
      "The Single Monitors collection covers six portable screens, from 13.3 to 24 inches, in Full HD, Full HD+ and 4K resolutions. Every model in the collection is plug and play, so there is no software to install.",
      "They work with macOS, Windows, Android, Linux, Chromebook and Surface devices, with game consoles, and with iPad and iPhone models that have USB-C. Aura's comparison page lists the exact differences between models before you choose. Pricing and availability are set by Aura Displays and can change, so check their page for current details."
    ],
    features: [
      { title: "Plug and play", text: "All six models work without installing software, which suits work laptops where IT rules limit driver installs." },
      { title: "A range of sizes", text: "Choose from 13.3, 14, 15.6, 16 or 24 inch screens, depending on how much desk or bag space you have." },
      { title: "Resolution options", text: "Full HD on most models, with a Full HD+ option and a 4K option for sharper detail." },
      { title: "Works with many devices", text: "Compatible with macOS, Windows, Android, Linux, Chromebook, Surface, game consoles, and USB-C iPad and iPhone models." }
    ],
    specs: [
      ["Models in the collection", "6"],
      ["Display sizes", "13.3, 14, 15.6, 16 and 24 inches"],
      ["Resolution", "Full HD, Full HD+ or 4K, depending on the model"],
      ["Brightness", "280 or 300 nits, depending on the model"],
      ["Connection", "USB-C cable to your laptop. One model also needs a 30W power adapter."],
      ["Inputs", "2x USB-C on every model, and 1x mini HDMI on five of the six"],
      ["Software", "None required (plug and play) on all six models"],
      ["Compatibility", "macOS, Windows, Android, Linux, Chromebook, Surface, game consoles, and iPad and iPhone with USB-C"],
      ["Materials", "Composite or full aluminum, depending on the model"],
      ["Warranty", "One year, covering manufacturing defects (Aura Displays policy)"],
      ["Shipping and returns", "Ships worldwide, typically in 4 to 7 days. 14-day returns on purchases made through Aura's website, with conditions."]
    ],
    buyLabel: "Buy Now",

    // Aura Displays affiliate link for this category (opens in a new tab)
    affiliateUrl: "https://aura-displays.com/collections/single-monitor?bg_ref=ZQpmrvW8Pu&utm_source=Hugh%20Sithole&utm_medium=affiliate&utm_campaign=Affiliate%20Level%203"
  },
  {
    id: "product-2",
    page: "products/product-2.html",
    name: "Dual Monitors",
    category: "Portable monitors",

    // --- Homepage card -------------------------------------------------
    shortDescription: "Two screens per model for a wider workspace. Eight models from 14 to 24 inches, up to 2.5K QHD.",
    image: "https://aura-displays.com/cdn/shop/collections/Mega_Menu_1000_1000_copie_11.jpg?v=1761322914",      // Aura's own official image for this category (1500 x 1500)
    imageFallback: "assets/images/products/product-2.svg",   // local drawing, used only if the image above fails to load
    imageAlt: "Aura Displays Dual Monitors",
    buttonLabel: "Learn More",

    // --- Upsell strip (shown on the OTHER product pages) ---------------
    upsellText: "Eight models with two screens each",

    // --- Product page --------------------------------------------------
    intro: "Dual monitors add two screens to your setup, so you can keep more windows in view at once. Aura offers eight models to choose from.",
    overview: [
      "The Dual Monitors collection has eight models with two screens each, in sizes from 14 to 24 inches. Resolutions run from Full HD up to 2.5K QHD, and brightness ranges from 280 to 320 nits depending on the model.",
      "Some models are plug and play, while others need a quick software installation, so check the details if you use a work laptop with IT restrictions. Models are built from aluminum, composite, or a mix of the two. Pricing and availability are set by Aura Displays and can change, so check their page for current details."
    ],
    features: [
      { title: "Two screens, one workspace", text: "Each model adds two displays, so documents, messages and reference material can sit side by side." },
      { title: "Size and resolution choices", text: "Screens from 14 to 24 inches, in Full HD, 2.2K or 2.5K QHD, depending on the model." },
      { title: "Plug and play or software", text: "Five models need no software. Three need a quick installation, so check which applies before you buy." },
      { title: "Wide device support", text: "Every model works with macOS, Windows and Android, and many also support Linux, Chromebook, Surface, game consoles, and USB-C iPad and iPhone." }
    ],
    specs: [
      ["Models in the collection", "8"],
      ["Screens", "Two per model, each 14, 15.6, 16 or 24 inches depending on the model"],
      ["Resolution", "Full HD, 2.2K (1920 x 1200) or 2.5K QHD (2560 x 1440), depending on the model"],
      ["Brightness", "280, 300 or 320 nits, depending on the model"],
      ["Connection", "One USB-C cable on six models, two USB cables on two models. One model also needs a 65W power adapter."],
      ["Inputs", "USB-C on every model, with mini HDMI on three models and HDMI, DisplayPort or a 3.5 mm jack on some"],
      ["Software", "Plug and play on five models, quick software installation on three"],
      ["Compatibility", "macOS, Windows and Android on every model. Linux, Ubuntu, Chromebook, Surface, game console and USB-C iPad and iPhone support varies by model."],
      ["Materials", "Aluminum, composite, or a mix of both, depending on the model"],
      ["Warranty", "One year, covering manufacturing defects (Aura Displays policy)"],
      ["Shipping and returns", "Ships worldwide, typically in 4 to 7 days. 14-day returns on purchases made through Aura's website, with conditions."]
    ],
    buyLabel: "Buy Now",

    // Aura Displays affiliate link for this category (opens in a new tab)
    affiliateUrl: "https://aura-displays.com/collections/dual-monitor?bg_ref=ZQpmrvW8Pu&utm_source=Hugh%20Sithole&utm_medium=affiliate&utm_campaign=Affiliate%20Level%203"
  },
  {
    id: "product-3",
    page: "products/product-3.html",
    name: "Smart Monitors",
    category: "All-in-one smart display",

    // --- Homepage card -------------------------------------------------
    shortDescription: "A 24 inch Full HD smart display running Google TV. Stream without a laptop, or plug in and work.",
    image: "https://aura-displays.com/cdn/shop/collections/35_copie_2.jpg?v=1761325142",      // Aura's own official image for this category (1500 x 1500)
    imageFallback: "assets/images/products/product-3.svg",   // local drawing, used only if the image above fails to load
    imageAlt: "Aura Displays Smart Monitors",
    buttonLabel: "Learn More",

    // --- Upsell strip (shown on the OTHER product pages) ---------------
    upsellText: "Google TV, plus a monitor when you need one",

    // --- Product page --------------------------------------------------
    intro: "Aura's smart monitor runs Google TV, so you can stream over Wi-Fi without a laptop, then plug in and work whenever you want.",
    overview: [
      "The Smart Monitors collection currently lists one model, the Home TV 24 inch (V6) with Google. It has a 23.8 inch Full HD (1920 x 1080) screen with 300 nits of brightness and an aluminum build.",
      "As a standalone smart display it works without a laptop for streaming, and it can also be used as a monitor when you want to work. Pricing and availability are set by Aura Displays and can change, so check their page for current details."
    ],
    features: [
      { title: "Google TV built in", text: "Runs Google TV, so you can stream over Wi-Fi without connecting a laptop." },
      { title: "Plug in and work", text: "Connect a laptop whenever you want to use it as a monitor." },
      { title: "Full HD screen", text: "A 23.8 inch display at 1920 x 1080 with 300 nits of brightness." },
      { title: "Aluminum construction", text: "Aura lists the material for this model as aluminum." }
    ],
    specs: [
      ["Model", "Home TV 24 inch (V6) with Google (Full HD)"],
      ["Screen", "23.8 inches, one screen"],
      ["Resolution", "1920 x 1080 Full HD"],
      ["Brightness", "300 nits"],
      ["Operating system", "Google TV"],
      ["Material", "Aluminum"],
      ["Laptop fit", "Listed by Aura as suitable for all laptop sizes"],
      ["Warranty", "One year, covering manufacturing defects (Aura Displays policy)"],
      ["Shipping and returns", "Ships worldwide, typically in 4 to 7 days. 14-day returns on purchases made through Aura's website, with conditions."]
    ],
    buyLabel: "Buy Now",

    // Aura Displays affiliate link for this category (opens in a new tab)
    affiliateUrl: "https://aura-displays.com/collections/smart-monitors?bg_ref=ZQpmrvW8Pu&utm_source=Hugh%20Sithole&utm_medium=affiliate&utm_campaign=Affiliate%20Level%203"
  },
  {
    id: "product-4",
    page: "products/product-4.html",
    name: "Desktop Monitors",
    category: "Desktop displays",

    // --- Homepage card -------------------------------------------------
    shortDescription: "Larger screens for a fixed desk, in 24 and 27 inch sizes with Full HD and 4K options.",
    image: "https://aura-displays.com/cdn/shop/collections/39_copie.jpg?v=1762127192",      // Aura's own official image for this category (1500 x 1500)
    imageFallback: "assets/images/products/product-4.svg",   // local drawing, used only if the image above fails to load
    imageAlt: "Aura Displays Desktop Monitors",
    buttonLabel: "Learn More",

    // --- Upsell strip (shown on the OTHER product pages) ---------------
    upsellText: "24 and 27 inch screens, up to 4K",

    // --- Product page --------------------------------------------------
    intro: "Aura's Desktop Monitors are larger screens made for a fixed desk, in 24 and 27 inch sizes, with Full HD and 4K options.",
    overview: [
      "The Desktop Monitors collection has three models: the Single Fly 24 inch (Gen 1), the Dual Book Pro Wide 48 inch (Gen 1), which pairs two 24 inch screens, and the Single Glow Infinity (Gen 1), a 27 inch 4K screen.",
      "All three are plug and play and are listed as compatible with macOS, Windows, Android, Linux, Chromebook, Surface, game consoles, and USB-C iPad and iPhone models. The Single Glow Infinity comes in several colours and lets you choose a hue to match your mood. Pricing and availability are set by Aura Displays and can change, so check their page for current details."
    ],
    features: [
      { title: "Desk-sized screens", text: "24 inch and 27 inch options, plus a wide setup that pairs two 24 inch screens." },
      { title: "Full HD or 4K", text: "Choose Full HD, or step up to 4K on the 24 inch Single Fly and the 27 inch Single Glow Infinity." },
      { title: "No software to install", text: "All three models are plug and play." },
      { title: "Colour choice", text: "The Single Glow Infinity is offered in several colours and lets you choose a hue." }
    ],
    specs: [
      ["Models in the collection", "3"],
      ["Display sizes", "24 inch and 27 inch. One model pairs two 24 inch screens."],
      ["Resolution", "Full HD or 4K, depending on the model"],
      ["Brightness", "280 or 300 nits, depending on the model"],
      ["Software", "None required (plug and play) on all three models"],
      ["Compatibility", "macOS, Windows, Android, Linux, Chromebook, Surface, game consoles, and iPad and iPhone with USB-C"],
      ["Materials", "Composite or full aluminum, depending on the model"],
      ["Colour options", "The Single Glow Infinity is offered in several colours"],
      ["Warranty", "One year, covering manufacturing defects (Aura Displays policy)"],
      ["Shipping and returns", "Ships worldwide, typically in 4 to 7 days. 14-day returns on purchases made through Aura's website, with conditions."]
    ],
    buyLabel: "Buy Now",

    // Aura Displays affiliate link for this category (opens in a new tab)
    affiliateUrl: "https://aura-displays.com/collections/desktop-monitors?bg_ref=ZQpmrvW8Pu&utm_source=Hugh%20Sithole&utm_medium=affiliate&utm_campaign=Affiliate%20Level%203"
  }
];

/* ---------------------------------------------------------------------
   Shared image helper, used by the homepage grid and the product pages.
   - Asks Aura's store for a right-sized copy (adds &width=) so mobile
     visitors do not download the full 1500px file.
   - Builds a srcset so sharp screens still get a crisp image.
   - If the image fails to load, swaps in the local "imageFallback".
   Local images (paths without http) are used as they are.
   --------------------------------------------------------------------- */
window.ILVETOTECH_IMAGE = {
  isAura: function (u) { return /^https:\/\/aura-displays\.com\/cdn\/shop\//.test(u || ""); },
  sized: function (u, w) { return this.isAura(u) ? u + (u.indexOf("?") > -1 ? "&" : "?") + "width=" + w : u; },
  /* base = "" on the homepage, "../" on product pages. opts = { width, widths, sizes, lazy, priority } */
  apply: function (img, product, base, opts) {
    var self = this, src = product.image, fb = product.imageFallback;
    if (opts.lazy) { img.loading = "lazy"; img.decoding = "async"; }
    if (opts.priority) img.setAttribute("fetchpriority", "high");
    if (self.isAura(src)) {
      img.src = self.sized(src, opts.width);
      if (opts.widths && opts.widths.length) {
        img.srcset = opts.widths.map(function (w) { return self.sized(src, w) + " " + w + "w"; }).join(", ");
        img.sizes = opts.sizes || "100vw";
      }
      if (fb) {
        img.addEventListener("error", function swap() {
          img.removeEventListener("error", swap);
          img.removeAttribute("srcset");
          img.removeAttribute("sizes");
          img.src = base + fb;
        });
      }
    } else {
      img.src = (/^https?:\/\//.test(src) ? "" : base) + src;
    }
    return img;
  }
};

/* ---------------------------------------------------------------------
   Reminder: warns in the browser console if a placeholder example.com
   link is ever left in. (Safe to delete.)
   --------------------------------------------------------------------- */
(function () {
  var pending = window.ILVETOTECH_PRODUCTS.filter(function (p) {
    return /^https?:\/\/(www\.)?example\.com\//i.test(p.affiliateUrl || "");
  }).map(function (p) { return p.name; });
  if (pending.length && window.console && console.warn) {
    console.warn("[ILVETOTECH] Placeholder affiliate URLs still in use for: " + pending.join(", ") + ". Replace them in assets/products-data.js before publishing.");
  }
})();
