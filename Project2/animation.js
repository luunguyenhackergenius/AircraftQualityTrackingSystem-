// ── Cart state ────────────────────────────────────────────────────────────────
let cart = [];
let qty = 1;
let currentPrice = 0;

// ── Menu item data ────────────────────────────────────────────────────────────
const menuItems = {
  buttered: {
    title: "BUTTERED CROISSANT",
    icon: "images/Croissant Icon.png",
    image: "images/butteredcroissant.jpeg",
    description: "Flaky, golden layers of buttery pastry baked to perfection — crisp on the outside, soft and airy inside.",
    contains: "Contains: Laminated dough, European butter, sea salt, water, and milk.",
    availability: "Available All-Times",
    price: 5,
    calories: 50,
    sectionPage: "page-morning",
    sectionTitle: "Morning Pastries (Available 8 AM – 12 PM)",
    sectionBackground: "images/morningpastries.jpeg"
  },

  almond: {
    title: "ALMOND ROSE CROISSANT",
    icon: "images/Croissant Icon 2.png",
    image: "images/almondrosecroissant.jpeg",
    description: "A buttery croissant filled with almond cream, drizzled with rose glaze, and sprinkled with crushed almonds for a delicate floral twist.",
    contains: "Contains: Flour, European butter, milk, sugar, sea salt, almond cream, rosewater glaze, crushed almonds.",
    availability: "Available through August 28",
    price: 6,
    calories: 80,
    sectionPage: "page-morning",
    sectionTitle: "Morning Pastries (Available 8 AM – 12 PM)",
    sectionBackground: "images/morningpastries.jpeg"
  },

  maple: {
    title: "MAPLE PECAN MORNING BUN",
    icon: "images/Cinnamon Bun.png",
    image: "images/maplepecanmorningbun.jpeg",
    description: "Soft morning bun swirled with cinnamon and finished with maple pecan caramel glaze.",
    contains: "Contains: Flour, butter, cinnamon, maple glaze, pecans, sugar, and milk.",
    availability: "Available Daily",
    price: 7,
    calories: 90,
    sectionPage: "page-morning",
    sectionTitle: "Morning Pastries (Available 8 AM – 12 PM)",
    sectionBackground: "images/morningpastries.jpeg"
  },

  scone: {
    title: "SEASONAL SCONE",
    icon: "images/Scone Icon.png",
    image: "images/seasonalscone.jpeg",
    description: "Tender seasonal scone with fruit and glaze, served as a rotating bakery favorite.",
    contains: "Contains: Flour, butter, cream, sugar, and seasonal fruit.",
    availability: "Available Seasonally",
    price: 7.5,
    calories: 70,
    sectionPage: "page-morning",
    sectionTitle: "Morning Pastries (Available 8 AM – 12 PM)",
    sectionBackground: "images/morningpastries.jpeg"
  },

  vanillaLemon: {
    title: "VANILLA BEAN CUPCAKE (LEMON CURD CORE)",
    icon: "images/Cupcake Icon.png",
    image: "images/lemoncupcakes.jpg",
    description: "A soft, moist vanilla bean cupcake filled with tangy lemon curd at the center, topped with silky vanilla buttercream for the perfect balance of bright citrus and sweet creaminess.",
    contains: "Contains: All-purpose flour, fresh vanilla bean, butter, sugar, eggs, milk, lemon curd, vanilla buttercream, candied lemon garnish.",
    availability: "Available through August 25",
    price: 3,
    calories: 60,
    sectionPage: "page-signature",
    sectionTitle: "Signature Treats",
    sectionBackground: "images/signaturetreats.jpeg"
  },

  carrotChai: {
    title: "CHAI-SPICED CARROT CAKE CUPCAKE",
    icon: "images/Cupcake Icon.png",
    image: "images/carrotcupcakes.jpg",
    description: "Moist carrot cupcake infused with warm chai spices, topped with tangy cream cheese frosting and a sprinkle of cinnamon sugar.",
    contains: "Contains: Grated carrots, flour, brown sugar, eggs, butter, cinnamon, cream cheese, candied carrot garnish.",
    availability: "Available through August 27",
    price: 4,
    calories: 50,
    sectionPage: "page-signature",
    sectionTitle: "Signature Treats",
    sectionBackground: "images/signaturetreats.jpeg"
  },

  earlGreyCookies: {
    title: "EARL GREY SHORTBREAD COOKIES",
    icon: "images/Cookie Icon.png",
    image: "images/earlgrey shortbread cookies.jpg",
    description: "Buttery shortbread infused with finely ground Earl Grey tea, offering delicate notes of bergamot and black tea in every bite.",
    contains: "Contains: Flour, butter, powdered sugar, vanilla extract, Earl Grey tea leaves, all-purpose flour, light sugar.",
    availability: "Available through August 29",
    price: 2,
    calories: 35,
    sectionPage: "page-signature",
    sectionTitle: "Signature Treats",
    sectionBackground: "images/signaturetreats.jpeg"
  },

  chocolateTart: {
    title: "CHOCOLATE SEA SALT TART",
    icon: "images/Chocolate Cake Icon.png",
    image: "images/chocolateseasalttart.jpeg",
    description: "A rich dark chocolate ganache nestled in a crisp buttery tart shell, topped with a sprinkle of flaky sea salt for the perfect sweet-salty balance.",
    contains: "Contains: Butter, flour, cocoa powder, sugar, dark chocolate, heavy cream, vanilla, flaky sea salt.",
    availability: "Available through August 20",
    price: 5,
    calories: 120,
    sectionPage: "page-signature",
    sectionTitle: "Signature Treats",
    sectionBackground: "images/signaturetreats.jpeg"
  },

  figHoney: {
    title: "FIG & HONEY GALETTE",
    icon: "images/Hazel Nut Pie Icon.png",
    image: "images/fighoney.jpeg",
    description: "Buttery hand-folded crust filled with roasted figs, drizzled with wildflower honey, and finished with a hint of thyme for a sweet, aromatic bite.",
    contains: "Contains: Fresh figs, butter, thyme, flour, egg wash, sugar.",
    availability: "Available through August 20",
    price: 12,
    calories: 140,
    sectionPage: "page-seasonal",
    sectionTitle: "Seasonal Specials",
    sectionBackground: "images/seasonalspecials.jpeg"
  },

  appleCider: {
    title: "APPLE CIDER CRUMB CAKE",
    icon: "images/apple cider crumb cake.png",
    image: "images/applecindercrumbcake.jpeg",
    description: "Moist apple cider-infused cake layered with warm cinnamon and nutmeg, topped with a buttery brown sugar crumb and finished with a hint of vanilla.",
    contains: "Contains: Fresh apples, brown sugar, butter, vanilla extract, all-purpose flour, eggs.",
    availability: "Available through August 25",
    price: 10,
    calories: 160,
    sectionPage: "page-seasonal",
    sectionTitle: "Seasonal Specials",
    sectionBackground: "images/seasonalspecials.jpeg"
  },

  strawberryBasil: {
    title: "STRAWBERRY BASIL TARLET",
    icon: "images/Strawberry tart.png",
    image: "images/strawberrybasil.jpeg",
    description: "Buttery shortcrust pastry filled with vanilla bean cream, topped with fresh strawberries, and finished with a hint of basil for a bright, refreshing twist.",
    contains: "Contains: Vanilla bean pastry cream, fresh strawberries, fresh basil leaves, light glaze, vanilla extract, basil, shortcrust pastry.",
    availability: "Available through August 19",
    price: 9,
    calories: 100,
    sectionPage: "page-seasonal",
    sectionTitle: "Seasonal Specials",
    sectionBackground: "images/seasonalspecials.jpeg"
  },

  pumpkinChoux: {
    title: "PUMPKIN CREAM CHOUX",
    icon: "images/Pumpkin Muffin.png",
    image: "images/pumpkincreamchoux.jpeg",
    description: "Light, airy choux pastry filled with silky pumpkin cream and finished with a dusting of spiced sugar.",
    contains: "Contains: Choux pastry, pumpkin purée, whipped cream, cinnamon & nutmeg, spiced sugar topping.",
    availability: "Available through August 12",
    price: 5,
    calories: 20,
    sectionPage: "page-seasonal",
    sectionTitle: "Seasonal Specials",
    sectionBackground: "images/seasonalspecials.jpeg"
  },

  oliveCitrus: {
    title: "OLIVE OIL CITRUS CAKE",
    icon: "images/Citrus Cake.png",
    image: "images/oliveoilcirus.jpeg",
    description: "Bright, tender olive oil cake layered with citrus flavor and finished with blood orange segments and rosemary syrup.",
    contains: "Contains: Olive oil, flour, eggs, blood orange, sugar, rosemary, vanilla extract.",
    availability: "Available through August 24",
    price: 10,
    calories: 110,
    sectionPage: "page-cakes",
    sectionTitle: "Daily Cakes by the Slice",
    sectionBackground: "images/dailycakes.jpeg"
  },

  chocolateBeet: {
    title: "CHOCOLATE BEET VELVET CAKE",
    icon: "images/Velvet Cake.png",
    image: "images/chocolatebeet.jpeg",
    description: "Deep red, rich chocolate cake with earthy beet flavor and tangy crème fraîche frosting.",
    contains: "Contains: Beet purée, cocoa powder, flour, eggs, butter, crème fraîche, sugar.",
    availability: "Available through August 22",
    price: 8,
    calories: 95,
    sectionPage: "page-cakes",
    sectionTitle: "Daily Cakes by the Slice",
    sectionBackground: "images/dailycakes.jpeg"
  },

  toastedCoconut: {
    title: "TOASTED COCONUT & LIME CAKE",
    icon: "images/Lime Cake.png",
    image: "images/toastedcoconut.jpeg",
    description: "Fluffy coconut sponge layered with lime zest frosting and topped with toasted coconut flakes.",
    contains: "Contains: Coconut milk, flour, eggs, lime zest, butter, toasted coconut, sugar.",
    availability: "Available through August 21",
    price: 7,
    calories: 85,
    sectionPage: "page-cakes",
    sectionTitle: "Daily Cakes by the Slice",
    sectionBackground: "images/dailycakes.jpeg"
  },

  strawberryShortcake: {
    title: "STRAWBERRY SHORTCAKE SLICE",
    icon: "images/Strawberry Shortcake.png",
    image: "images/strawberryshorcake.jpeg",
    description: "Soft vanilla sponge layered with whipped cream and fresh strawberries for a light summer favorite.",
    contains: "Contains: Vanilla sponge, whipped cream, fresh strawberries, sugar, flour, eggs, milk.",
    availability: "Available through August 26",
    price: 6,
    calories: 75,
    sectionPage: "page-cakes",
    sectionTitle: "Daily Cakes by the Slice",
    sectionBackground: "images/dailycakes.jpeg"
  },

  coldBrew: {
    title: "LOCAL COLD BREW",
    icon: "images/Cold Brew Coffee.png",
    image: "images/localbrew.jpeg",
    description: "Smooth, slow-steeped coffee brewed with locally roasted beans, served chilled for a bold yet refreshing taste.",
    contains: "Contains: Locally roasted coffee beans, filtered water. Optional: milk or non-dairy alternatives, simple syrup.",
    availability: "Available through September 2",
    price: 4,
    calories: 130,
    sectionPage: "page-pairings",
    sectionTitle: "Perfect Pairings (Drinks)",
    sectionBackground: "images/perfectpairing.jpeg"
  },

  chaiLatte: {
    title: "CHAI LATTE",
    icon: "images/Chai Latte.png",
    image: "images/chailatte.jpeg",
    description: "A warm, spiced blend of black tea, cinnamon, cardamom, ginger, and cloves, steamed with your choice of milk for a cozy, aromatic treat.",
    contains: "Contains: Black tea, cinnamon, cardamom, ginger, cloves, milk or non-dairy alternative. Optional: sweetener (honey or sugar).",
    availability: "Available through August 25",
    price: 5,
    calories: 110,
    sectionPage: "page-pairings",
    sectionTitle: "Perfect Pairings (Drinks)",
    sectionBackground: "images/perfectpairing.jpeg"
  },

  lavenderMatcha: {
    title: "LAVENDER MATCHA",
    icon: "images/Lavender Matcha.png",
    image: "images/lavendermatcha.jpeg",
    description: "Premium Japanese matcha whisked with steamed milk and infused with a hint of lavender for a calming, earthy floral flavor.",
    contains: "Contains: Japanese matcha powder, steamed milk or non-dairy alternative, house-made lavender syrup. Optional: sweetener (honey or sugar).",
    availability: "Available through August 25",
    price: 7,
    calories: 140,
    sectionPage: "page-pairings",
    sectionTitle: "Perfect Pairings (Drinks)",
    sectionBackground: "images/perfectpairing.jpeg"
  },

  herbalTea: {
    title: "HOUSE-MADE HERBAL TEAS",
    icon: "images/tea pot.png",
    image: "images/herbaltea.jpeg",
    description: "Naturally caffeine-free blends of dried herbs, spices, and florals, crafted in-house and rotating weekly for fresh, soothing flavor.",
    contains: "Contains: Chamomile, peppermint, hibiscus, or seasonal herbs, citrus peel, rose petals, or other florals (rotating). Optional: honey or natural sweetener.",
    availability: "Available through August 25",
    price: 6,
    calories: 60,
    sectionPage: "page-pairings",
    sectionTitle: "Perfect Pairings (Drinks)",
    sectionBackground: "images/perfectpairing.jpeg"
  }
};

// ── Page navigation ───────────────────────────────────────────────────────────
// FIX: show() now calls closeMenu() so any open side panel collapses on navigation
function show(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = "block";
  }
  closeMenu();
}

// ── Unified hamburger menu system ─────────────────────────────────────────────
// FIX: single MENU_MAP replaces 9 separate toggle/close functions.
// FIX: closeMenu() now resets ALL menus and checkboxes, not just #side-menu.
const MENU_MAP = {
  "checkbox1":           "side-menu",
  "checkbox-menu":       "side-menu-menu",
  "checkbox-about":      "side-menu-about",
  "checkbox-order":      "side-menu-order",
  "checkbox-contact":    "side-menu-contact",
  "checkbox-faq":        "side-menu-faq",
  "checkbox-blog":       "side-menu-blog",
  "checkbox-career":     "side-menu-career",
  "checkbox-policy":     "side-menu-policy",
  "checkbox-delivery":   "side-menu-delivery"
};

function _toggleAnyMenu(checkboxId) {
  const menuId   = MENU_MAP[checkboxId];
  if (!menuId) return;
  const menu     = document.getElementById(menuId);
  const checkbox = document.getElementById(checkboxId);
  if (!menu || !checkbox) return;
  menu.style.transform = checkbox.checked ? "translateX(0)" : "translateX(-100%)";
}

function closeMenu() {
  Object.entries(MENU_MAP).forEach(function(entry) {
    var menu = document.getElementById(entry[1]);
    var cb   = document.getElementById(entry[0]);
    if (menu) menu.style.transform = "translateX(-100%)";
    if (cb)   cb.checked = false;
  });
}

// Per-page toggle functions (called by each hamburger's onchange attribute)
function toggleMenu()         { _toggleAnyMenu("checkbox1"); }
function toggleMenuPageMenu() { _toggleAnyMenu("checkbox-menu"); }
function toggleAboutMenu()    { _toggleAnyMenu("checkbox-about"); }
function toggleOrderMenu()    { _toggleAnyMenu("checkbox-order"); }
function toggleContactMenu()  { _toggleAnyMenu("checkbox-contact"); }
function toggleFaqMenu()      { _toggleAnyMenu("checkbox-faq"); }
function toggleBlogMenu()     { _toggleAnyMenu("checkbox-blog"); }
function toggleCareerMenu()   { _toggleAnyMenu("checkbox-career"); }
function togglePolicyMenu()   { _toggleAnyMenu("checkbox-policy"); }
function toggleDeliveryMenu() { _toggleAnyMenu("checkbox-delivery"); }

// Per-page close aliases (called by nav links inside each side menu)
function closeMenuPageMenu() { closeMenu(); }
function closeAboutMenu()    { closeMenu(); }
function closeOrderMenu()    { closeMenu(); }
function closeContactMenu()  { closeMenu(); }
function closeFaqMenu()      { closeMenu(); }
function closeBlogMenu()     { closeMenu(); }
function closeCareerMenu()   { closeMenu(); }
function closePolicyMenu()   { closeMenu(); }
function closeDeliveryMenu() { closeMenu(); }

// ── Popup ─────────────────────────────────────────────────────────────────────
// FIX: removed the duplicate openPopup/closePopup that was at the top of the old file
function openPopup() {
  var popup = document.getElementById("page-popup");
  if (popup) popup.classList.add("popup-open");
}

function closePopup() {
  var popup = document.getElementById("page-popup");
  if (popup) popup.classList.remove("popup-open");
}

// ── Cart helpers ──────────────────────────────────────────────────────────────
function changeQty(amount) {
  qty += amount;
  if (qty < 1) qty = 1;
  document.getElementById("qty-val").textContent = qty;
  document.getElementById("cart-total").textContent = (currentPrice * qty).toFixed(2);
}

function addToCart() {
  var itemTitle    = document.getElementById("modal-title").textContent;
  var instructions = document.getElementById("modal-instructions").value.trim();

  cart.push({
    item:         itemTitle,
    quantity:     qty,
    price:        currentPrice,
    total:        currentPrice * qty,
    instructions: instructions
  });

  console.log("Cart:", cart);

  qty = 1;
  document.getElementById("qty-val").textContent = qty;
  document.getElementById("modal-instructions").value = "";

 window.location.href = "/order";
}

// ── Item modal ────────────────────────────────────────────────────────────────
function openItem(itemKey) {
  var item = menuItems[itemKey];
  if (!item) return;

  qty          = 1;
  currentPrice = item.price;

  var title        = document.getElementById("modal-title");
  var icon         = document.getElementById("modal-icon");
  var image        = document.getElementById("modal-image");
  var description  = document.getElementById("modal-description");
  var contains     = document.getElementById("modal-contains");
  var availability = document.getElementById("modal-availability");
  var priceEl      = document.getElementById("modal-price");
  var calories     = document.getElementById("modal-calories");
  var qtyVal       = document.getElementById("qty-val");
  var cartTotal    = document.getElementById("cart-total");
  var backBtn      = document.getElementById("modal-back-btn");
  var closeBtn     = document.getElementById("modal-close-btn");
  var sectionTitle = document.getElementById("modal-section-title");
  var modalBg      = document.getElementById("modal-bg");
  var instructions = document.getElementById("modal-instructions");

  title.textContent        = item.title;
  icon.src                 = item.icon;
  icon.alt                 = item.title + " icon";
  image.style.background   = "url('" + item.image + "') center/cover no-repeat";
  description.textContent  = item.description;
  contains.textContent     = item.contains;
  availability.textContent = item.availability;
  priceEl.textContent      = "$" + item.price.toFixed(2);
  calories.textContent     = item.calories;
  qtyVal.textContent       = qty;
  cartTotal.textContent    = item.price.toFixed(2);
  instructions.value       = "";

  if (sectionTitle) sectionTitle.textContent = item.sectionTitle;
  if (backBtn)  backBtn.setAttribute("onclick",  "closeModal()");
  if (closeBtn) closeBtn.setAttribute("onclick", "closeModal()");

  if (modalBg) {
    modalBg.style.background =
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('" +
      item.sectionBackground + "') center/cover no-repeat";
  }

  var modal = document.getElementById("page-item-modal");
if (modal) modal.style.display = "flex";
}

// ── Modal close ───────────────────────────────────────────────────────────────
function closeModal() {
  var modal = document.getElementById("page-item-modal");
  if (modal) modal.style.display = "none";
}

function toggleLocationPanel() {
  var panel = document.getElementById('location-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function selectPickupLocation(btn, addr) {
  document.querySelectorAll('.loc-btn').forEach(function(b) {
    b.style.background = '#fff';
    b.style.color = '#3a2020';
    b.style.border = '1px solid #e0d8d8';
  });
  btn.style.background = '#7b1326';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  var label = document.getElementById('pickup-addr-label');
  if (label) label.textContent = addr;
  setTimeout(function() {
    var panel = document.getElementById('location-panel');
    if (panel) panel.style.display = 'none';
  }, 300);
}

function selectTime(btn) {
  document.querySelectorAll('.time-btn').forEach(function(b) {
    b.style.background = 'linear-gradient(135deg,#7b1326,#9a2740)';
    b.style.opacity = '0.55';
    b.style.transform = 'scale(1)';
  });
  btn.style.opacity = '1';
  btn.style.transform = 'scale(1.05)';
  btn.style.background = 'linear-gradient(135deg,#4a0b1a,#7b1326)';
}

// ── Calendar ──────────────────────────────────────────────────────────────────
var calYear  = new Date().getFullYear();
var calMonth = new Date().getMonth();

function renderCalendar() {
  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var label = document.getElementById('cal-month-label');
  if (!label) return;
  label.textContent = months[calMonth] + ' ' + calYear;

  var firstDay    = new Date(calYear, calMonth, 1).getDay();
  var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  var today       = new Date();
  var grid        = document.getElementById('cal-grid');
  if (!grid) return;
  grid.innerHTML  = '';

  // Empty spacer cells before first day
  for (var i = 0; i < firstDay; i++) {
    grid.innerHTML += '<div style="width:36px; height:36px;"></div>';
  }

  // Day cells — fixed size so border-radius:50% makes a perfect circle
  for (var d = 1; d <= daysInMonth; d++) {
    var isToday = (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear());
    grid.innerHTML += '<div onclick="selectDay(this)" style="' +
      'width:36px; height:36px; border-radius:50%; cursor:pointer; font-size:13px; font-weight:500;' +
      'display:flex; align-items:center; justify-content:center; margin:2px auto;' +
      "font-family:'Kalnia',serif;" +
      (isToday ? 'background:#7b1326; color:#fff;' : 'color:#1a1a1a;') +
      '">' + d + '</div>';
  }
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}

function selectDay(el) {
  document.querySelectorAll('#cal-grid div').forEach(function(d) {
    d.style.background = '';
    d.style.color = '#1a1a1a';
  });
  el.style.background = '#7b1326';
  el.style.color = '#fff';
}

// Auto-run calendar on page load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('cal-grid')) renderCalendar();
});

window.selectAddr = function(n) {
  var addrs = [
    "9422 Central Ave, Garden Grove, CA 92844",
    "1030 W Katella Ave, Anaheim, CA 92802",
    "1895 S Harbor Blvd, Anaheim, CA 92802",
    "2041 South Harbor Blvd, Anaheim, CA 92802"
  ];
  for (var i = 1; i <= 4; i++) {
    var btn = document.getElementById("addr-" + i);
    if (!btn) continue;
    btn.style.background = i === n ? "rgba(123,19,38,0.80)" : "rgba(255,255,255,0.15)";
    btn.style.borderColor = i === n ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.20)";
  }
  var lbl = document.getElementById("map-addr-label");
  if (lbl) lbl.textContent = addrs[n - 1];
};

window.selectTip = function(btn, val) {
  document.querySelectorAll(".tip-opt").forEach(function(b) {
    b.style.background = "#eef2ff"; b.style.color = "#1a2e6e"; b.style.borderColor = "#c7d2fe";
  });
  btn.style.background = "#1a2e6e"; btn.style.color = "#fff"; btn.style.borderColor = "#1a2e6e";
  document.getElementById("tip-custom").value = "";
  updateTotal();
};

window.updateTotal = function() {
  var tipPct = 20;
  var subtotal = window.subtotal || 4.00;
  var tax = window.tax || 0.40;
  var custom = parseFloat(document.getElementById("tip-custom").value) || 0;
  var tip = custom > 0 ? custom : (subtotal * tipPct / 100);
  document.getElementById("tip-display").textContent = "$" + tip.toFixed(2);
  document.getElementById("order-total").textContent = "$" + (subtotal + tax + tip).toFixed(2);
};

// ── Checkout panel toggles ────────────────────────────────────────────────────
window.toggleCheckoutLocationPanel = function() {
  var panel = document.getElementById('checkout-location-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.toggleOrderTypePanel = function() {
  var panel = document.getElementById('order-type-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.toggleContactPanel = function() {
  var panel = document.getElementById('contact-edit-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.toggleSummaryEdit = function() {
  var panel = document.getElementById('summary-edit-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.toggleCreditPanel = function() {
  var panel = document.getElementById('credit-card-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
};

window.selectCheckoutLocation = function(btn, addr) {
  document.querySelectorAll('.co-loc-btn').forEach(function(b) {
    b.style.background = '#fff'; b.style.color = '#3a2020'; b.style.border = '1px solid #e0d8d8';
  });
  btn.style.background = '#7b1326'; btn.style.color = '#fff'; btn.style.border = 'none';
  var el = document.getElementById('checkout-addr');
  if (el) el.innerHTML = addr.replace(', ', ',<br>');
  setTimeout(function() { toggleCheckoutLocationPanel(); }, 300);
};

window.selectOrderType = function(btn, type) {
  document.querySelectorAll('.ot-type-btn').forEach(function(b) {
    b.style.background = '#fff'; b.style.color = '#1a2e6e'; b.style.border = '1.5px solid #c7d2fe';
  });
  btn.style.background = '#1a2e6e'; btn.style.color = '#fff'; btn.style.border = 'none';
  var el = document.getElementById('order-type-label');
  if (el) el.innerHTML = 'Type: <strong>' + type + '</strong>';
};

window.selectOrderTime = function(btn, time) {
  document.querySelectorAll('.ot-time-btn').forEach(function(b) {
    b.style.background = '#fff'; b.style.color = '#1a2e6e'; b.style.border = '1.5px solid #c7d2fe';
  });
  btn.style.background = '#1a2e6e'; btn.style.color = '#fff'; btn.style.border = 'none';
  var el = document.getElementById('order-time-label');
  if (el) el.innerHTML = 'Time: <strong>' + time + '</strong>';
};

window.saveContactInfo = function() {
  var first = document.getElementById('contact-first').value.trim();
  var last  = document.getElementById('contact-last').value.trim();
  var phone = document.getElementById('contact-phone').value.trim();
  var email = document.getElementById('contact-email').value.trim();
  var name  = (first + ' ' + last).trim() || 'Guest';
  document.getElementById('contact-name-display').textContent = name;
  document.getElementById('contact-details-display').innerHTML = (email || '—') + '<br>' + (phone || '—');
  toggleContactPanel();
};

window.toggleInstructionEdit = function() {
  var editEl = document.getElementById('instruction-edit-mode');
  var dispEl = document.getElementById('summary-instruction-text');
  if (!editEl) return;
  var isEditing = editEl.style.display !== 'none';
  editEl.style.display = isEditing ? 'none' : 'block';
  if (dispEl) dispEl.style.display = isEditing ? 'block' : 'none';
};

window.saveInstruction = function() {
  var input = document.getElementById('checkout-instruction-input');
  var disp  = document.getElementById('summary-instruction-text');
  var row   = document.getElementById('summary-instruction-row');
  var val = input ? input.value.trim() : '';
  if (disp) disp.textContent = val ? '"' + val + '"' : '';
  if (row)  row.style.display = val ? 'block' : 'none';
  toggleInstructionEdit();
};

var summaryQty = 1;
var summaryUnitPrice = 4;

window.changeSummaryQty = function(dir) {
  summaryQty = Math.max(1, summaryQty + dir);
  var qtyEl  = document.getElementById('summary-qty-input');
  var totEl  = document.getElementById('summary-line-total');
  if (qtyEl) qtyEl.textContent = summaryQty;
  if (totEl) totEl.textContent = (summaryQty * summaryUnitPrice).toFixed(2);
};

window.applySummaryQty = function() {
  var qtyLbl  = document.getElementById('summary-qty-label');
  var priceLbl = document.getElementById('summary-price-label');
  if (qtyLbl)  qtyLbl.textContent = summaryQty;
  if (priceLbl) priceLbl.textContent = '$' + (summaryQty * summaryUnitPrice);
  window.subtotal = summaryQty * summaryUnitPrice;
  window.tax = Math.round(window.subtotal * 0.10 * 100) / 100;
  var subEl = document.getElementById('subtotal-display');
  var taxEl = document.getElementById('tax-display');
  if (subEl) subEl.textContent = '$' + window.subtotal.toFixed(2);
  if (taxEl) taxEl.textContent = '$' + window.tax.toFixed(2);
  toggleSummaryEdit();
  updateTotal();
};

window.submitCreditCard = function() {
  var num  = document.getElementById('cc-number').value.replace(/\s/g,'');
  var name = document.getElementById('cc-name').value.trim();
  var exp  = document.getElementById('cc-exp').value.trim();
  var cvv  = document.getElementById('cc-cvv').value.trim();
  if (num.length < 16) { alert('Please enter a valid 16-digit card number.'); return; }
  if (!name)           { alert('Please enter the name on the card.'); return; }
  if (exp.length < 7)  { alert('Please enter a valid expiration date.'); return; }
  if (cvv.length < 3)  { alert('Please enter your CVV.'); return; }
  window.location.href = '/confirm';
};

// Initialize checkout totals on page load
window.subtotal = 4.00;
window.tax = 0.40;

window.selectTip = function(btn, val) {
  document.querySelectorAll('.tip-opt').forEach(function(b) {
    b.style.background = '#eef2ff'; b.style.color = '#1a2e6e'; b.style.borderColor = '#c7d2fe';
  });
  btn.style.background = '#1a2e6e'; btn.style.color = '#fff'; btn.style.borderColor = '#1a2e6e';
  var tipCustom = document.getElementById('tip-custom');
  if (tipCustom) tipCustom.value = '';
  window._tipPct = parseFloat(val) || 0;
  updateTotal();
};

window._tipPct = 20;

window.updateTotal = function() {
  var custom = parseFloat((document.getElementById('tip-custom') || {}).value) || 0;
  var tip = custom > 0 ? custom : (window.subtotal * window._tipPct / 100);
  var total = window.subtotal + window.tax + tip;
  var tipEl   = document.getElementById('tip-display');
  var totalEl = document.getElementById('order-total');
  if (tipEl)   tipEl.textContent   = '$' + tip.toFixed(2);
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
};

window.toggleFaq = function(el) {
  var answer = el.nextElementSibling;
  var arrow  = el.querySelector('.faq-arrow');
  var isOpen = answer.style.display !== 'none';
  answer.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.textContent = isOpen ? '+' : '−';
};

var blogSlideIndex = 0;
window.moveBlogSlide = function(dir) {
  var track = document.getElementById('blog-track');
  if (!track) return;
  blogSlideIndex = Math.max(0, Math.min(4, blogSlideIndex + dir));
  track.style.transform = 'translateX(-' + (blogSlideIndex * 20) + '%)';
};