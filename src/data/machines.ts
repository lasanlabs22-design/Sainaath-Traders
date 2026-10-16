import type { Category, Machine } from "@/lib/types";

/**
 * Client vending-machine inventory, extracted from the Sainaath Traders
 * product posters (client images #175–#200). Each machine image is the
 * machine alone, cut from its poster without headings or badges.
 * Prices were not supplied → every machine is "Price on request".
 */

export const categories: Category[] = [
  {
    slug: "premix",
    name: "Instant Premix Vending",
    telugu: "ఇన్‌స్టంట్ వెండింగ్",
    blurb: "Tabletop tea & coffee machines with 2–6 one-touch options. Ideal for offices, factories, hospitals and shops.",
    visual: "capsule",
  },
  {
    slug: "bean-to-cup",
    name: "Bean-to-Cup & Touchscreen",
    telugu: "బీన్ టు కప్",
    blurb: "Fresh-ground espresso, cappuccino and latte on a touchscreen — café quality for premium offices and lounges.",
    visual: "superauto",
  },
  {
    slug: "espresso",
    name: "Traditional Espresso",
    telugu: "ఎస్ప్రెస్సో మెషీన్లు",
    blurb: "Barista-operated Italian espresso machines with portafilters and steam wands — for cafés, restaurants and hotels.",
    visual: "espresso",
  },
];

/** Machine cut out of its poster as a transparent WebP with a floor shadow (shown on the `stage` backdrop). */
const cut = (id: number) => `/images/machines/${id}.webp`;
const poster = (id: number) => `/images/posters/${id}.webp`;

const premixDefaults: Pick<Machine, "category" | "idealFor" | "price" | "finishes" | "visual"> = {
  category: "premix",
  idealFor: ["office", "cafe"],
  price: null,
  finishes: [],
  visual: "capsule",
};

const beanDefaults: Pick<Machine, "category" | "idealFor" | "price" | "finishes" | "visual"> = {
  category: "bean-to-cup",
  idealFor: ["office", "cafe"],
  price: null,
  finishes: [],
  visual: "superauto",
};

export const machines: Machine[] = [
  // ── Astoria ─────────────────────────────────────────────────
  // Not from the poster set: product photo supplied in chat (2026-10-15),
  // cut onto the stage by hand. No spec sheet was supplied, so only what the
  // photo shows and the SAE (volumetric) version's keypad are listed.
  {
    category: "espresso",
    idealFor: ["cafe"],
    price: null,
    finishes: [],
    visual: "espresso",
    slug: "astoria-tanya-r",
    name: "Astoria Tanya R",
    brand: "Astoria",
    model: "SAE · 2-group semi-automatic",
    tagline: "Italian espresso, barista-style.",
    description:
      "A traditional Italian two-group espresso machine in red and polished steel. The barista grinds, tamps and locks in the portafilters; volumetric keypads then dose each shot. Twin steam wands and a hot-water tap round it out for cafés, restaurants and hotel counters. Pairs with a separate coffee grinder.",
    highlights: ["Two brewing groups", "Programmable volumetric dose keypads", "Twin steam wands", "Hot-water tap & cup-warmer top"],
    beverages: ["Espresso", "Cappuccino", "Latte", "Americano", "Hot Water"],
    specs: { display: "Push-button volumetric keypads (no touchscreen)", grinder: "Not built in — use a separate grinder" },
    images: ["/images/machines/astoria-tanya-r.webp"],
    featured: true,
    badge: "New",
  },

  // ── Atlantis ────────────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "atlantis-classic",
    name: "Atlantis Classic",
    brand: "Atlantis",
    model: "Classic · 4-option",
    tagline: "Refreshes always.",
    description:
      "A dependable instant-premix vending machine in a silver-and-black body. Four beverage buttons plus a stop key dispense coffee, tea, half cups and hot water at a consistent taste, cup after cup.",
    highlights: ["Coffee, tea, half cup & hot water", "LCD status display", "4 L hot-water tank", "Easy daily maintenance"],
    beverages: ["Coffee", "Tea", "Half Cup", "Hot Water"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1300 W · 230 V AC, 50 Hz", dimensions: "310 × 465 × 580 mm", weight: "18–20 kg (approx.)" },
    images: [cut(175)],
    poster: poster(175),
  },
  {
    ...premixDefaults,
    slug: "atlantis-neo",
    name: "Atlantis NEO",
    brand: "Atlantis",
    model: "NEO · 4-option",
    tagline: "Fresh green looks, authentic taste.",
    description:
      "The compact NEO brings Atlantis reliability in a slimmer 360 mm-deep cabinet with a fresh leaf-green front. Coffee, tea, half cup and hot water at the touch of a button.",
    highlights: ["Slim 360 mm depth", "Coffee, tea, half cup & hot water", "4 L hot-water tank", "Easy daily maintenance"],
    beverages: ["Coffee", "Tea", "Half Cup", "Hot Water"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1300 W · 230 V AC, 50 Hz", dimensions: "310 × 360 × 580 mm", weight: "18–20 kg (approx.)" },
    images: [cut(176)],
    poster: poster(176),
  },

  // ── BRU ─────────────────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "bru-hotsip-5-option",
    name: "BRU Hotsip",
    brand: "BRU",
    model: "5-option tall cabinet",
    tagline: "Authentic South Indian filter-coffee taste.",
    description:
      "The tall BRU cabinet serves full and half cups of coffee and tea plus hot water. A favourite for offices and factories that want the familiar BRU taste on tap.",
    highlights: ["5 options incl. half cups", "Side tap for hot water", "4 L tank", "Instant BRU premix"],
    beverages: ["Hot Water", "Coffee", "Coffee Half", "Tea", "Tea Half"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "350 × 350 × 680 mm", weight: "18–20 kg (approx.)" },
    images: [cut(177)],
    poster: poster(177),
    featured: true,
    badge: "Bestseller",
  },
  {
    ...premixDefaults,
    slug: "bru-strong-coffee",
    name: "BRU Strong Coffee",
    brand: "BRU",
    model: "5-option twin-door",
    tagline: "For those who like it strong.",
    description:
      "A twin-door BRU machine with a dedicated Strong Coffee button alongside regular coffee, tea, half coffee and hot water — great for canteens with mixed tastes.",
    highlights: ["Dedicated strong-coffee option", "Twin-door service access", "4 L tank", "Instant BRU premix"],
    beverages: ["Tea", "Coffee", "Strong Coffee", "Hot Water", "Half Coffee"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "320 × 430 × 620 mm", weight: "18–20 kg (approx.)" },
    images: [cut(178)],
    poster: poster(178),
  },

  // ── Café Desire ─────────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "cafe-desire-6-option",
    name: "Café Desire Multi-Beverage",
    brand: "Café Desire",
    model: "6-option vending",
    tagline: "I drink success.",
    description:
      "A sleek black machine with six one-touch speciality drinks — from café latte and cappuccino to hot chocolate and tea — for offices that want more than just coffee and tea.",
    highlights: ["6 speciality beverages", "LCD display", "4 L tank", "Instant premix"],
    beverages: ["Black Coffee", "Café Latte", "Cappuccino", "Hot Chocolate", "Hot Milk", "Tea Premix"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "420 × 520 × 580 mm", weight: "18–20 kg (approx.)" },
    images: [cut(179)],
    poster: poster(179),
  },
  {
    ...premixDefaults,
    slug: "cafe-desire-bottle-fed",
    name: "Café Desire Bottle-Fed",
    brand: "Café Desire",
    model: "20 L bottle-top vending",
    tagline: "Hot beverages. Great taste.",
    description:
      "No plumbing needed: a 20-litre water bottle sits on top and feeds up to 100 cups a day. Push-button tea, coffee, strong and black coffee with an MS powder-coated body and SS front panel.",
    highlights: ["20 L bottle — no plumbing", "Up to 100 cups/day", "Push-button operation", "SS front panel"],
    beverages: ["Tea", "Coffee", "Strong", "Black"],
    specs: { display: "LCD", waterTank: "20 L bottle", capacity: "Up to 100 cups/day", power: "2000 W · 230 V AC, 50 Hz", dimensions: "430 × 460 × 830 mm", weight: "Approx. 25 kg", material: "MS powder-coated, SS front panel" },
    images: [cut(180)],
    poster: poster(180),
    cupsPerDay: "Up to 100",
  },
  {
    ...beanDefaults,
    slug: "cafe-desire-insta-bean",
    name: "Insta Bean",
    brand: "Café Desire",
    model: "Insta Bean tea & coffee",
    tagline: "Good taste. Good life.",
    description:
      "Eighteen hot and cold drinks on one panel — espresso and cappuccino to masala tea, badam milk, soup and lemon drink. Built for medium-to-high footfall at 6–8 seconds a cup.",
    highlights: ["18 beverages", "6–8 sec per cup", "Up to 200 cups/day", "Bottle or direct water connection"],
    beverages: ["Black Coffee", "Coffee", "Cappuccino", "Espresso", "Dip Tea", "Cardamom Tea", "Lemon Tea", "Hot Water", "Hot Milk", "Chocolate", "Cold Coffee", "Soup", "Green Tea", "Lemon Drink", "Badam Milk", "Filter Coffee", "Ginger Tea", "Masala Tea"],
    specs: { display: "LCD, touch buttons", speed: "6–8 sec per cup", waterTank: "20 L bottle / direct connection", capacity: "Up to 200 cups/day", power: "1600 W · 230 V AC, 50 Hz", dimensions: "420 × 520 × 710 mm", weight: "Approx. 22 kg", material: "Mild steel with ABS panels" },
    images: [cut(181)],
    poster: poster(181),
    featured: true,
    badge: "18 drinks",
    cupsPerDay: "Up to 200",
  },

  // ── Cothas / LIQCAF ─────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "cothas-filter-coffee",
    name: "Cothas Filter Coffee Machine",
    brand: "Cothas",
    model: "Decoction vending + milk unit",
    tagline: "Ensuring rich aroma for several decades.",
    description:
      "Authentic South Indian filter coffee from Bengaluru’s Cothas — black, light and strong coffee plus hot milk from a stainless-steel cabinet with a separate milk unit.",
    highlights: ["Authentic filter-coffee decoction", "Light / strong / black coffee", "Separate milk unit", "Stainless-steel cabinet"],
    beverages: ["Black Coffee", "Light Coffee", "Strong Coffee", "Hot Milk", "Hot Water", "Flush"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "520 × 380 × 580 mm (main unit)", weight: "18–20 kg (approx.)" },
    images: [cut(182)],
    poster: poster(182),
    featured: true,
    badge: "Filter coffee",
  },
  {
    ...beanDefaults,
    slug: "liqcaf-touch",
    name: "LIQCAF Touch",
    brand: "Cothas",
    line: "LIQCAF",
    model: "7″ touchscreen bean-to-cup",
    tagline: "Designed for performance, built for experience.",
    description:
      "Cothas’ LIQCAF brings espresso, Americano, cappuccino and café latte to a 7-inch touchscreen, with a steam wand for milk foam. A premium choice for corporate pantries.",
    highlights: ["7″ touchscreen", "Espresso, Americano, cappuccino, latte", "Milk & foam wand", "Up to 80 cups/day"],
    beverages: ["Espresso", "Americano", "Cappuccino", "Café Latte", "Hot Water", "Milk / Foam"],
    specs: { display: "7″ touchscreen", waterTank: "Large capacity", capacity: "Up to 80 cups/day", power: "1500 W · 220–240 V", dimensions: "310 × 465 × 580 mm", weight: "18 kg" },
    images: [cut(192)],
    poster: poster(192),
    cupsPerDay: "Up to 80",
  },
  {
    ...premixDefaults,
    slug: "liqcaf-premix",
    name: "LIQCAF Premix",
    brand: "Cothas",
    line: "LIQCAF",
    model: "Premix vending + side unit",
    tagline: "Rich aroma. Authentic taste.",
    description:
      "A tall black LIQCAF cabinet with a companion side unit, serving coffee, half coffee, tea and hot water with Cothas consistency.",
    highlights: ["Coffee, half coffee, tea, hot water", "Companion side unit", "4 L tank", "Instant premix"],
    beverages: ["Hot Water", "Coffee", "Coffee Half", "Tea"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "350 × 450 × 530 mm", weight: "18–20 kg (approx.)" },
    images: [cut(193)],
    poster: poster(193),
  },
  {
    ...premixDefaults,
    slug: "liqcaf-compact",
    name: "LIQCAF Compact",
    brand: "Cothas",
    line: "LIQCAF",
    model: "Compact countertop",
    tagline: "Café looks for any counter.",
    description:
      "A minimal matte-black countertop machine with a bronze trim and tilted display — coffee, half coffee, tea and hot water for reception areas and premium cabins.",
    highlights: ["Minimal countertop design", "Coffee, half coffee, tea, hot water", "4 L tank", "Instant premix"],
    beverages: ["Hot Water", "Coffee", "Coffee Half", "Tea"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "350 × 480 × 540 mm", weight: "18–20 kg (approx.)" },
    images: [cut(194)],
    poster: poster(194),
  },

  // ── Dr.coffee ───────────────────────────────────────────────
  {
    ...beanDefaults,
    slug: "dr-coffee-fully-automatic",
    name: "Dr.coffee Fully Automatic",
    brand: "Dr.coffee",
    model: "Fully automatic coffee vending",
    tagline: "One machine. Endless possibilities.",
    description:
      "Twin bean hoppers, twin steam wands and a 7-inch touchscreen deliver espresso, cappuccino, latte, Americano, mocha and tea in 6–10 seconds — up to 150 cups a day.",
    highlights: ["7″ touchscreen", "Twin 1.2 kg bean hoppers", "6–10 sec per cup", "Up to 150 cups/day"],
    beverages: ["Espresso", "Black Coffee", "Cappuccino", "Latte", "Americano", "Mocha", "Tea"],
    specs: { display: "7″ touchscreen", speed: "6–10 sec per cup", grinder: "Bean hoppers 1.2 kg each", waterTank: "20 L bottle / direct connection", capacity: "Up to 150 cups/day", power: "1500 W · 230 V AC, 50 Hz", dimensions: "300 × 500 × 580 mm", weight: "Approx. 20 kg", material: "Food-grade ABS & stainless steel" },
    images: [cut(183)],
    poster: poster(183),
    featured: true,
    badge: "Premium",
    cupsPerDay: "Up to 150",
  },

  // ── Granules n Beans ────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "granules-n-beans-2-line",
    name: "GnB 2-Line Vending",
    brand: "Granules n Beans",
    model: "2-line premix",
    tagline: "Perfect beverages. Every time.",
    description:
      "Compact, smart and stylish — two beverage lines (tea/green tea and coffee/black coffee) at 80–100 cups an hour. Ideal for offices, schools, hospitals and showrooms.",
    highlights: ["2 beverage lines", "80–100 cups/hour", "20 L tank", "Fully automatic"],
    beverages: ["Tea / Green Tea", "Coffee / Black Coffee"],
    specs: { display: "LED indicators", waterTank: "20 L", capacity: "80–100 cups/hour", power: "2000 W · 230 V, 50 Hz", dimensions: "320 × 320 × 600 mm", weight: "16 kg (approx.)", material: "MS powder-coated" },
    images: [cut(184)],
    poster: poster(184),
  },
  {
    ...premixDefaults,
    slug: "granules-n-beans-4-line",
    name: "GnB 4-Line Vending",
    brand: "Granules n Beans",
    model: "4-line premix",
    tagline: "Perfect beverages. Every time.",
    description:
      "Four beverage lines — tea, coffee, premix coffee and milk-based drinks or soup — with 100 mm cup clearance for high-footfall offices, factories and colleges.",
    highlights: ["4 beverage lines", "80–100 cups/hour", "100 mm cup clearance", "Fully automatic"],
    beverages: ["Tea / Green Tea", "Coffee / Black Coffee", "Premix Coffee", "Milk-based / Soup"],
    specs: { display: "LCD", waterTank: "20 L", capacity: "80–100 cups/hour", power: "2000 W · 230 V, 50 Hz", dimensions: "450 × 390 × 750 mm", weight: "28 kg (approx.)", material: "MS powder-coated" },
    images: [cut(185)],
    poster: poster(185),
  },
  // Not from the poster set: two product photos supplied in chat (2026-10-16),
  // one model in two versions. No spec sheet was supplied, so only what the
  // photos show is listed.
  {
    ...premixDefaults,
    slug: "granules-n-beans-beverage-urn",
    name: "GnB Hot Beverage Urn",
    brand: "Granules n Beans",
    model: "Stainless-steel urn · single or twin tap",
    tagline: "Hot tea & coffee for a crowd.",
    description:
      "A stainless-steel urn that keeps a large batch of tea or coffee hot and ready to pour. The single-tap version serves one beverage; the twin-tap version adds a separate hot-water tap and a temperature knob. Side handles make it easy to move between canteens, events and counters.",
    highlights: ["Single-tap or twin-tap version", "Separate hot-water tap (twin-tap)", "Indicator lamps", "Stainless-steel body with side handles"],
    beverages: ["Tea", "Coffee", "Hot Water"],
    specs: { display: "Power & heating indicator lamps", material: "Stainless steel" },
    images: ["/images/machines/gnb-urn-twin-tap.webp", "/images/machines/gnb-urn-single-tap.webp"],
    badge: "New",
  },
  {
    ...beanDefaults,
    slug: "granules-n-beans-bean-to-cup-steel",
    name: "GnB Bean-to-Cup Steel",
    brand: "Granules n Beans",
    line: "GnB Premium Espresso",
    model: "Bean-to-cup, LCD",
    tagline: "Precision. Performance. Perfection.",
    description:
      "A stainless-steel bean-to-cup with a built-in grinder and twin steam wands — espresso, Americano, cappuccino, latte, tea, hot milk, hot water and steam at one touch.",
    highlights: ["Built-in grinder", "Twin steam wands", "Adjustable strength & volume", "Stainless-steel body"],
    beverages: ["Espresso", "Americano", "Cappuccino", "Latte", "Tea", "Hot Milk", "Hot Water", "Steam"],
    specs: { display: "LCD touch", grinder: "1 kg bean hopper", boiler: "1.5 L", waterTank: "4 L", power: "1500 W · 220–240 V", dimensions: "340 × 540 × 760 mm", weight: "28 kg (approx.)", material: "Stainless steel" },
    images: [cut(186)],
    poster: poster(186),
  },
  {
    ...beanDefaults,
    slug: "granules-n-beans-bean-to-cup-touch",
    name: "GnB Bean-to-Cup Touch",
    brand: "Granules n Beans",
    line: "GnB Premium Espresso",
    model: "Bean-to-cup, 7″ touch",
    tagline: "Precision. Performance. Perfection.",
    description:
      "All-black bean-to-cup with a 7-inch touchscreen, built-in grinder and twin steam wands. Café-style espresso drinks with adjustable strength and volume.",
    highlights: ["7″ touchscreen", "Built-in grinder", "Twin steam wands", "Adjustable strength & volume"],
    beverages: ["Espresso", "Americano", "Cappuccino", "Latte", "Tea", "Hot Milk", "Hot Water", "Steam"],
    specs: { display: "7″ touchscreen", grinder: "1 kg bean hopper", boiler: "1.5 L", waterTank: "4 L", power: "1500 W · 220–240 V", dimensions: "340 × 540 × 760 mm", weight: "28 kg (approx.)", material: "Stainless steel" },
    images: [cut(187)],
    poster: poster(187),
    featured: true,
    badge: "Touchscreen",
  },
  // Not from the poster set: a Granules n Beans flyer supplied in chat
  // (2026-10-16), shown as the brochure; the cut-out was traced from it.
  {
    ...beanDefaults,
    slug: "granules-n-beans-my-espresso-fa100",
    name: "GnB My Espresso FA100",
    brand: "Granules n Beans",
    line: "GnB Premium Espresso",
    model: "FA100 JL30B · fresh-milk bean-to-cup",
    tagline: "Sip. Smile. Share.",
    description:
      "Fresh-milk coffee from whole beans: a built-in 64 mm steel burr grinder, a choice of 14 g or 20 g brewer and a 7-inch touchscreen. Smart bean detection and automatic rinsing and cleaning keep it running with little attention at up to 100 cups a day — for offices, cafés, hotels, restaurants and corporate spaces.",
    highlights: ["Fresh-milk coffee", "14 g / 20 g brewer options", "Smart bean detection", "Automatic rinsing & cleaning"],
    specs: { display: "7″ touchscreen", grinder: "Built-in 64 mm steel burr grinder", capacity: "Up to 100 cups/day" },
    images: ["/images/machines/gnb-my-espresso-fa100.webp"],
    poster: "/images/posters/gnb-my-espresso-fa100.webp",
    badge: "New",
    cupsPerDay: "Up to 100",
  },
  {
    ...beanDefaults,
    slug: "granules-n-beans-trubrew",
    name: "TruBrew Machine",
    brand: "Granules n Beans",
    model: "TruBrew",
    tagline: "Taste the freshness.",
    description:
      "TruBrew combines fresh-bean filter coffee with Indian tea specialities — masala chai, lemon tea, green tea — and hot water, all from one wide stainless-steel unit.",
    highlights: ["Filter coffee from fresh beans", "Masala chai, lemon & green tea", "One-touch selection", "6 L water tank"],
    beverages: ["Green Tea", "Hot Water", "Masala Chai", "Lemon Tea", "Filter Coffee", "Black Coffee"],
    specs: { display: "LCD", grinder: "1 kg bean hopper", boiler: "1.5 L", waterTank: "6 L", power: "1500 W · 220–240 V", dimensions: "580 × 360 × 520 mm", weight: "23 kg (approx.)", material: "Stainless steel" },
    images: [cut(188)],
    poster: poster(188),
  },

  // ── Godrej Vending ──────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "godrej-vending-tall",
    name: "Godrej Multi-Beverage",
    brand: "Godrej Vending",
    model: "Tall multi-select",
    tagline: "Designed for performance, built for experience.",
    description:
      "Godrej’s tall vending machine with a multi-select panel serves coffee, tea, lemon tea, milk and hot water from a 20-litre top-load tank — up to 80 cups a day.",
    highlights: ["20 L top-load tank", "Up to 80 cups/day", "Coffee, tea, lemon tea, milk", "Godrej quality"],
    beverages: ["Coffee", "Tea", "Lemon Tea", "Milk", "Hot Water"],
    specs: { waterTank: "20 L (top load)", capacity: "Up to 80 cups/day", power: "1400 W · 220–240 V", dimensions: "350 × 470 × 590 mm", weight: "16 kg (approx.)" },
    images: [cut(189)],
    poster: poster(189),
    cupsPerDay: "Up to 80",
  },
  {
    ...premixDefaults,
    slug: "godrej-vending-compact",
    name: "Godrej Compact",
    brand: "Godrej Vending",
    model: "Compact 5-option",
    tagline: "Designed for performance, built for experience.",
    description:
      "A lighter 12 kg Godrej machine with five buttons — hot water, coffee, tea, lemon tea and milk — that fits neatly on any pantry counter.",
    highlights: ["Only 12 kg", "5 one-touch options", "20 L top-load tank", "Up to 80 cups/day"],
    beverages: ["Hot Water", "Coffee", "Tea", "Lemon Tea", "Milk"],
    specs: { waterTank: "20 L (top load)", capacity: "Up to 80 cups/day", power: "1300 W · 220–240 V", dimensions: "310 × 360 × 580 mm", weight: "12 kg (approx.)" },
    images: [cut(190)],
    poster: poster(190),
    cupsPerDay: "Up to 80",
  },
  {
    ...premixDefaults,
    slug: "godrej-tea-coffee-cafe",
    name: "Godrej Tea & Coffee Café",
    brand: "Godrej Vending",
    model: "Tea & coffee, 10-option",
    tagline: "Good taste. Good life.",
    description:
      "Built for high-footfall areas: black coffee, cappuccino, espresso, dip tea, cardamom and lemon tea at 4–6 seconds per cup, up to 150 cups a day.",
    highlights: ["4–6 sec per cup", "Up to 150 cups/day", "Cappuccino & espresso", "Food-grade ABS body"],
    beverages: ["Black Coffee", "Coffee", "Cappuccino", "Espresso", "Dip Tea", "Cardamom Tea", "Lemon Tea", "Hot Water"],
    specs: { display: "LCD, touch buttons", speed: "4–6 sec per cup", waterTank: "20 L bottle (top mounted)", capacity: "Up to 150 cups/day", power: "1500 W · 230 V AC, 50 Hz", dimensions: "330 × 450 × 635 mm", weight: "Approx. 18 kg", material: "Food-grade ABS" },
    images: [cut(191)],
    poster: poster(191),
    cupsPerDay: "Up to 150",
  },

  // ── Nescafé ─────────────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "nescafe-bottle-top",
    name: "NESCAFÉ Bottle-Top",
    brand: "NESCAFÉ",
    model: "5-option, 20 L top load",
    tagline: "Designed for performance, built for experience.",
    description:
      "The iconic black-and-red NESCAFÉ machine with a 20-litre bottle on top. Coffee, tea, lemon tea, milk and hot water — up to 100 cups a day with zero plumbing.",
    highlights: ["20 L bottle — no plumbing", "Up to 100 cups/day", "Only 12 kg", "5 one-touch options"],
    beverages: ["Hot Water", "Coffee", "Tea", "Lemon Tea", "Milk"],
    specs: { waterTank: "20 L (top load)", capacity: "100 cups/day (approx.)", power: "1300 W · 220–240 V", dimensions: "310 × 360 × 580 mm", weight: "12 kg (approx.)" },
    images: [cut(195)],
    poster: poster(195),
    featured: true,
    badge: "Most installed",
    cupsPerDay: "Up to 100",
  },
  {
    ...premixDefaults,
    slug: "nescafe-premium",
    name: "NESCAFÉ Premium",
    brand: "NESCAFÉ",
    model: "5-option, 4 L tank",
    tagline: "Rich aroma. Perfect taste. Anytime, anywhere.",
    description:
      "A premium NESCAFÉ cabinet with a big red-mug display and five buttons — tea, coffee, tea half, coffee half and hot water. Easy to use and low maintenance.",
    highlights: ["Full & half cups", "Quick dispensing", "Low maintenance", "Energy efficient"],
    beverages: ["Tea", "Coffee", "Tea Half", "Coffee Half", "Hot Water"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "300 × 450 × 560 mm", weight: "18–20 kg (approx.)" },
    images: [cut(196)],
    poster: poster(196),
  },

  // ── Roastea ─────────────────────────────────────────────────
  {
    ...beanDefaults,
    slug: "roastea-touch",
    name: "Roastea Tea & Coffee",
    brand: "Roastea",
    model: "10.1″ touchscreen",
    tagline: "Your beverage partner.",
    description:
      "Four canisters — two for beans, two for powders — feed a 10.1-inch touchscreen menu of espresso, cappuccino, latte, mocha, chocolate, lemon tea and masala tea.",
    highlights: ["10.1″ touchscreen", "2 bean + 2 powder canisters", "6–10 sec per cup", "Up to 150 cups/day"],
    beverages: ["Espresso", "Black Coffee", "Cappuccino", "Latte", "Mocha", "Chocolate", "Lemon Tea", "Masala Tea", "Hot Water", "Milk"],
    specs: { display: "10.1″ touchscreen", speed: "6–10 sec per cup", grinder: "Bean hoppers 2 × 1.2 kg; powder 2 × 1.5 kg", waterTank: "20 L bottle / direct connection", capacity: "Up to 150 cups/day", power: "1500 W · 230 V AC, 50 Hz", dimensions: "300 × 520 × 650 mm", weight: "Approx. 25 kg", material: "Mild steel with ABS panels" },
    images: [cut(197)],
    poster: poster(197),
    cupsPerDay: "Up to 150",
  },

  // ── Tata ────────────────────────────────────────────────────
  {
    ...premixDefaults,
    slug: "tata-kaapi",
    name: "Tata Kaapi",
    brand: "Tata",
    line: "Tata Kaapi",
    model: "4-option premix",
    tagline: "Coffee like no other coffee can be.",
    description:
      "Tata Kaapi’s vending machine serves coffee, tea, half cups and hot water from an MS powder-coated body — a sturdy everyday workhorse for offices and factories.",
    highlights: ["Coffee, tea, half & hot water", "MS powder-coated body", "4 L tank", "Instant premix"],
    beverages: ["Coffee", "Tea", "Half", "Hot Water"],
    specs: { waterTank: "4 L (approx.)", capacity: "Multiple cups per hour", power: "1200 W · 230 V AC, 50 Hz", dimensions: "320 × 430 × 620 mm", weight: "18–20 kg (approx.)", material: "MS body, powder coated" },
    images: [cut(198)],
    poster: poster(198),
  },
  {
    ...beanDefaults,
    slug: "tata-mybistro-premium",
    name: "Tata MyBistro Premium",
    brand: "Tata",
    line: "MyBistro",
    model: "7″ touch bean-to-cup",
    tagline: "Perfect coffee. Every time.",
    description:
      "Tata’s premium bean-to-cup in champagne-steel with a 7-inch touchscreen: espresso, black coffee, cappuccino, latte, Americano and mocha at up to 150 cups a day.",
    highlights: ["7″ touchscreen", "1.2 kg bean hopper", "6–10 sec per cup", "Up to 150 cups/day"],
    beverages: ["Espresso", "Black Coffee", "Cappuccino", "Latte", "Americano", "Mocha"],
    specs: { display: "7″ touchscreen", speed: "6–10 sec per cup", grinder: "1.2 kg bean hopper", waterTank: "20 L bottle / direct connection", capacity: "Up to 150 cups/day", power: "1500 W · 230 V AC, 50 Hz", dimensions: "300 × 500 × 580 mm", weight: "Approx. 20 kg", material: "Food-grade ABS & stainless steel" },
    images: [cut(199)],
    poster: poster(199),
    featured: true,
    badge: "Flagship",
    cupsPerDay: "Up to 150",
  },
  {
    ...beanDefaults,
    slug: "tata-mybistro-decoction",
    name: "Tata MyBistro Filter Coffee",
    brand: "Tata",
    line: "MyBistro",
    model: "Touchscreen + decoction unit",
    tagline: "Filter coffee, the modern way.",
    description:
      "MyBistro paired with a separate decoction unit for authentic filter coffee and tea, plus black coffee — South Indian taste with touchscreen convenience.",
    highlights: ["Separate decoction unit", "Filter coffee & tea", "7″ touchscreen", "Up to 150 cups/day"],
    beverages: ["Filter Coffee", "Tea", "Black Coffee"],
    specs: { display: "7″ touchscreen", speed: "6–10 sec per cup", waterTank: "20 L bottle / direct connection", capacity: "Up to 150 cups/day", power: "1500 W · 230 V AC, 50 Hz", dimensions: "Main 340 × 520 × 580 mm · Decoction 260 × 430 × 580 mm", weight: "Approx. 25 kg (total)", material: "Food-grade ABS & stainless steel" },
    images: [cut(200)],
    poster: poster(200),
    cupsPerDay: "Up to 150",
  },
];
