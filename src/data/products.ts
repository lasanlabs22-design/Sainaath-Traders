import type { Product, ProductKind } from "@/lib/types";

/**
 * Beverages & consumables, extracted from the client's 200 images.
 * Posters #95–#174 (and #58) are the primary source; shop-floor photos in
 * #1–#94 were matched against them and merged as duplicates (`sources`).
 * Shown on the site as a names-only scrolling rail (no product photos).
 */

export const productKinds: { slug: ProductKind; name: string; telugu: string }[] = [
  { slug: "coffee-premix", name: "Coffee Premix", telugu: "కాఫీ ప్రీమిక్స్" },
  { slug: "tea-premix", name: "Tea Premix", telugu: "టీ ప్రీమిక్స్" },
  { slug: "coffee", name: "Filter Coffee & Beans", telugu: "ఫిల్టర్ కాఫీ" },
  { slug: "tea", name: "Leaf & Dust Tea", telugu: "టీ పొడి" },
  { slug: "wellness", name: "Green & Herbal", telugu: "గ్రీన్ టీ" },
  { slug: "specialty", name: "Milk, Malt & Soups", telugu: "ప్రత్యేక పానీయాలు" },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type Row = [id: number, brand: string, name: string, kind: ProductKind, description: string, extra?: { variant?: string; pack?: string; dupes?: number[] }];

const rows: Row[] = [
  // ── Coffee premix ──────────────────────────────────────────
  [95, "afresh", "Instant Coffee Premix", "coffee-premix", "Rich aroma and a smooth, balanced taste — afresh’s classic coffee premix made for vending machines, offices and cafés.", { variant: "Rich & Classic", pack: "1 kg" }],
  [97, "Amar Cafe", "Coffee Premix Premium", "coffee-premix", "A rich and smooth premium coffee premix that gives the same perfect cup every time.", { variant: "Rich & Smooth", pack: "1 kg" }],
  [89, "Aromaa Café", "Premium Coffee", "coffee-premix", "Aromaa Café’s house coffee premix — just add hot water for a creamy café-style cup.", { pack: "1 kg" }],
  [77, "Aromaa Café", "Araku Premium Coffee", "coffee-premix", "An instant premix built on Araku Valley coffee, for a richer, more aromatic vending cup.", { pack: "1 kg" }],
  [75, "Aromaa Café", "Cappuccino", "coffee-premix", "Frothy instant cappuccino premix — café-style foam straight from the vending machine.", { pack: "1 kg" }],
  [81, "Aromaa Café", "Coffee Premix Low Sugar", "coffee-premix", "All the Aromaa Café flavour with less sugar, for health-conscious offices.", { variant: "Low Sugar", pack: "1 kg" }],
  [101, "BRU", "Hot Coffee Premix", "coffee-premix", "BRU’s instant energy in a cup — easy to prepare with hot water, quality assured and made with premium ingredients.", { pack: "Institutional pack" }],
  [105, "Café Delite", "Coffee Premix — Araku Premium", "coffee-premix", "Café Delite’s coffee premix made with Araku premium coffee for a bold, aromatic vending cup.", { dupes: [78] }],
  [108, "Café Delite", "Coffee Premix Low Sugar", "coffee-premix", "A lighter, low-sugar take on Café Delite’s signature coffee premix.", { variant: "Low Sugar", dupes: [76] }],
  [73, "Café Delite", "Coffee Premix", "coffee-premix", "Rich, aromatic and invigorating — the everyday Café Delite coffee premix.", {}],
  [110, "Café Desire", "Instant Coffee Premix", "coffee-premix", "Café Desire’s smooth instant coffee premix, made for consistent taste in every vending cup.", { pack: "1 kg" }],
  [129, "Granules n Beans", "Coffee Latte", "coffee-premix", "A creamy instant coffee latte premix — café comfort in a single sachet.", { pack: "Sachets" }],
  [135, "Granules n Beans", "Instant Coffee Chicory Premix", "coffee-premix", "Refresh ho jaa — a South-Indian-style coffee with chicory premix for a strong, familiar cup.", { variant: "Coffee & Chicory" }],
  [152, "NESCAFÉ", "Sunrise Premix", "coffee-premix", "NESCAFÉ Sunrise premix — a smooth coffee-chicory blend loved across Indian offices.", { dupes: [22] }],
  [159, "Purvi Beverages", "Premium Coffee Premix", "coffee-premix", "Purvi’s premium coffee premix, a value favourite for high-volume vending.", { dupes: [83] }],
  [88, "Koffee Time", "Hot Coffee Premix", "coffee-premix", "A full-bodied hot coffee premix for quick, consistent vending cups.", {}],
  [149, "NESCAFÉ", "Ice", "coffee-premix", "NESCAFÉ Ice cold-beverage premix — instant iced coffee for summer menus." ],

  // ── Tea premix ─────────────────────────────────────────────
  [96, "afresh", "Instant Tea Premix — Cardamom", "tea-premix", "Rich aroma and a refreshing elaichi taste — afresh’s cardamom tea premix for vending machines and homes.", { variant: "Cardamom", pack: "1 kg", dupes: [93] }],
  [92, "afresh", "Instant Tea Premix — Ginger", "tea-premix", "afresh ginger tea premix — warming adrak chai, ready in seconds.", { variant: "Ginger" }],
  [100, "Aromaa Café", "Rose Milk", "tea-premix", "A delicate, creamy blend of tea, milk and rose for a refreshing, all-day drink.", { variant: "Rose Milk", pack: "1 kg", dupes: [17] }],
  [70, "Aromaa Café", "Premium Tea", "tea-premix", "Aromaa Café’s premium instant tea — strong, milky and consistent.", { pack: "1 kg" }],
  [74, "Aromaa Café", "Mint Lemon Tea", "tea-premix", "A cooling mint-and-lemon tea premix — a refreshing alternative to regular chai.", { variant: "Mint Lemon", pack: "1 kg" }],
  [106, "Café Delite", "Badam Tea", "tea-premix", "Creamy almond-flavoured tea premix — a rich, comforting cup.", { variant: "Badam", dupes: [72] }],
  [107, "Café Delite", "Cardamom Tea Premix", "tea-premix", "Instant, aromatic and energising — Café Delite’s elaichi tea premix.", { variant: "Cardamom", dupes: [85] }],
  [109, "Café Delite", "Ginger Tea Premix", "tea-premix", "A warming adrak chai premix with real ginger flavour.", { variant: "Ginger", dupes: [79] }],
  [111, "Café Desire", "Lemon Flavored Tea", "tea-premix", "A light, zesty lemon tea instant premix — refreshing hot or cold." , { variant: "Lemon" }],
  [112, "Café Desire", "Cardamom Tea Premix", "tea-premix", "Café Desire’s elaichi tea premix — milky, sweet and fragrant.", { variant: "Cardamom", dupes: [12] }],
  [127, "Granules n Beans", "Cardamom Chai", "tea-premix", "Instant tea premix with real cardamom — a classic chai in sachets.", { variant: "Cardamom", pack: "10 sachets" }],
  [133, "Granules n Beans", "Ginger Chai", "tea-premix", "Instant ginger chai premix — warming, spicy and ready in seconds.", { variant: "Ginger", pack: "10 sachets" }],
  [136, "Granules n Beans", "Lemongrass Ginger Chai", "tea-premix", "A zesty fusion of lemongrass and ginger in an instant chai premix.", { variant: "Lemongrass Ginger" }],
  [138, "Granules n Beans", "Instant Lemon Tea", "tea-premix", "A tangy instant lemon tea premix for vending lines.", { variant: "Lemon", pack: "1 kg" }],
  [139, "Granules n Beans", "Masala Chai", "tea-premix", "Instant masala chai premix with traditional Indian spices.", { variant: "Masala", dupes: [140] }],
  [143, "Granules n Beans", "Lemon Ice Tea", "tea-premix", "Instant lemon ice-tea beverage premix — a cool, refreshing summer drink.", { variant: "Lemon Ice" }],
  [142, "Godrej", "D’lite Cardamom Flavoured Tea", "tea-premix", "Godrej Vending D’lite cardamom tea beverage premix, made for Godrej machines.", { variant: "Cardamom", dupes: [23, 24] }],
  [147, "Lipton", "Lemon Premix Tea", "tea-premix", "Lipton lemon premix tea — a bright, refreshing citrus cup.", { variant: "Lemon" }],
  [153, "Nestea", "Cardamom Flavour", "tea-premix", "Nestea cardamom tea premix — the creamy elaichi chai served in many offices.", { variant: "Cardamom" }],
  [155, "Nestea", "Iced Tea Premix", "tea-premix", "Nestea iced tea premix with lemon — instant cool refreshment.", { variant: "Lemon Iced Tea" }],
  [158, "Purvi Beverages", "Ginger Tea Premix", "tea-premix", "Purvi’s ginger tea premix — warming adrak chai for every break.", { variant: "Ginger", dupes: [21] }],
  [160, "Brooke Bond", "Red Label Cardamom Tea Premix", "tea-premix", "Brooke Bond Red Label with real cardamom, in a vending-ready premix.", { variant: "Cardamom" }],
  [164, "Steam & Froth", "Instant Tea Premix", "tea-premix", "An instant tea premix made specifically for vending machines.", {}],
  [171, "Wagh Bakri", "Navchetan Elaichi Chai", "tea-premix", "Wagh Bakri Navchetan — strong tea with the fragrance of elaichi.", { variant: "Elaichi" }],
  [90, "Koffee Time", "Cardamom Tea Premix", "tea-premix", "A sweet, milky cardamom tea premix for everyday vending.", { variant: "Cardamom" }],
  [84, "Continental", "Chaay Cardamom Tea Premix", "tea-premix", "Continental Chaay tea beverage premix with cardamom.", { variant: "Cardamom" }],
  [58, "Bhalo Cha", "Elaichi Chai", "tea-premix", "A delicious blend of premium tea and natural elaichi — strong aroma, rich taste.", { variant: "Elaichi", pack: "250 g" }],

  // ── Filter coffee & beans ──────────────────────────────────
  [99, "Araku Valley", "Premium Araku Coffee", "coffee", "The pride of Visakha — medium-roast whole beans of Arabica & Robusta, collected by the tribes of Araku Valley.", { variant: "Medium Roast", pack: "200 g" }],
  [102, "BRU", "Roast & Ground", "coffee", "BRU roast & ground filter coffee in an institutional pack for decoction machines.", { dupes: [103] }],
  [104, "BRU", "Freshly Packed Roasted Beans", "coffee", "Freshly packed roasted coffee beans from BRU for bean-to-cup machines.", { pack: "1 kg" }],
  [113, "Coffee Day", "Highland Aroma", "coffee", "Coffee Day Highland Aroma — premium roasted beans with a deep, rounded flavour." ],
  [114, "Coffee Day", "Roasted Coffee Beans", "coffee", "Coffee Day roasted coffee beans for espresso and bean-to-cup vending." ],
  [117, "Cothas", "100% Arabica", "coffee", "Velvety and aromatic with a hint of dried fruit — medium-roast 100% Arabica beans.", { variant: "Medium Roast" }],
  [118, "Cothas", "Aroma Gold", "coffee", "Medium-roast beans, 80% Arabica / 20% Robusta — aromatic with a strong body.", { variant: "80/20" }],
  [119, "Cothas", "Premium", "coffee", "Cothas Premium — medium-roasted 70% Arabica / 30% Robusta beans.", { variant: "70/30" }],
  [121, "Cothas", "Institutional Blend Filter Coffee", "coffee", "Cothas institutional filter coffee for canteens and decoction machines.", { variant: "Filter Coffee" }],
  [122, "Cothas", "Speciality Blend", "coffee", "The iconic yellow pack — South Indian filter coffee, speciality blend." ],
  [123, "Cothas", "Perfect Blend", "coffee", "Cothas Perfect Blend filter coffee & chicory — the classic tumbler-davara taste.", { pack: "200 g" }],
  [124, "Cothas", "Institutional Blend Coffee & Chicory", "coffee", "Bulk coffee-chicory blend for institutional and vending use." ],
  [128, "Granules n Beans", "Classic Blend Filter Coffee Powder", "coffee", "Granules n Beans classic filter coffee powder for a strong South Indian decoction." ],
  [130, "Granules n Beans", "Filter Coffee Powder 65:35", "coffee", "65% coffee, 35% chicory — a strong, traditional filter coffee.", { variant: "65% Coffee / 35% Chicory", dupes: [20] }],
  [131, "Granules n Beans", "Filter Coffee Powder 85:15", "coffee", "85% coffee, 15% chicory — a premium, aromatic filter coffee.", { variant: "85% Coffee / 15% Chicory", dupes: [8, 19, 87] }],
  [141, "Granules n Beans", "Espresso Roasted Coffee Beans", "coffee", "Espresso-roast whole beans for bean-to-cup machines.", { variant: "Espresso", dupes: [15, 18] }],
  [150, "NESCAFÉ", "Intenso Whole Beans", "coffee", "NESCAFÉ Intenso whole roasted coffee beans — bold and intense.", { variant: "Intenso" }],
  [151, "NESCAFÉ", "Signature Blend", "coffee", "NESCAFÉ Signature Blend — a smooth, rich everyday coffee.", { dupes: [29] }],
  [162, "Roastea", "Filter Coffee", "coffee", "Roastea’s South Indian filter coffee for decoction-based machines." ],
  [163, "Roastea", "Roasted Coffee Beans", "coffee", "Roastea roasted coffee beans for bean-to-cup vending.", { pack: "1 kg" }],
  [167, "Vidya", "Ground Filter Coffee — Classic", "coffee", "Vidya Ground classic filter coffee — a balanced coffee-chicory blend.", { pack: "200 g" }],
  [169, "Vidya", "Filter Coffee Premium", "coffee", "Pure quality and traditional Indian taste — Vidya’s premium filter coffee.", { pack: "200 g" }],
  [170, "Vidya", "Ground Filter Coffee — Premium", "coffee", "Vidya Ground premium filter coffee in the blue pack.", { pack: "200 g" }],

  // ── Leaf & dust tea ────────────────────────────────────────
  [98, "Amar", "Dust Tea — Select Blend", "tea", "A specially crafted dust tea with strong colour, rich aroma and refreshing taste.", { pack: "250 g" }],
  [120, "Cothas", "Institutional Blend CTC Tea", "tea", "Cothas CTC tea in an institutional pack for canteens and vending." ],
  [125, "Darbar", "Super Premium Tea", "tea", "A quality product from Adhira — Darbar Super Premium tea for a royal cup.", { dupes: [62, 63, 64] }],
  [126, "Granules n Beans", "Assam Tea Bags", "tea", "Granules n Beans Assam tea in convenient tea bags.", { pack: "100 tea bags" }],
  [86, "Granules n Beans", "Premium Assam Tea", "tea", "Granules n Beans premium Assam leaf tea for strong, bright chai.", {}],
  [137, "Granules n Beans", "Lemon Tea Bags", "tea", "Lemon tea bags with natural lemon flavour — a light, refreshing cup.", { pack: "100 tea bags" }],
  [161, "Roastea", "Premium Assam Tea", "tea", "Roastea premium Assam tea — strong, malty and full of colour." ],
  [166, "Brooke Bond", "Taj Mahal Tea Bags", "tea", "Rich and flavourful Taj Mahal tea in environment-friendly bags — perfect for vending.", { pack: "200 tea bags", dupes: [165] }],
  [168, "Brooke Bond", "Taj Mahal", "tea", "Brooke Bond Taj Mahal leaf tea — rich and flavourful.", {}],
  [172, "Society", "Strong Dust Tea", "tea", "A strong, refreshing dust tea with rich taste, aroma and vibrant colour — perfect for vending.", { pack: "1 kg", dupes: [173] }],
  [174, "Wagh Bakri", "Vending Tea Blend", "tea", "Wagh Bakri’s tea blend made for fresh brew in vending machines." ],

  // ── Green & herbal ─────────────────────────────────────────
  [115, "Coffee Day", "Roosh Ginger Tea", "wellness", "Roosh ginger tea from Coffee Day — a warming, natural cup." ],
  [116, "Coffee Day", "Roosh Green Tea", "wellness", "Roosh green tea from Coffee Day — light and refreshing." ],
  [132, "Granules n Beans", "Green Tea Bags", "wellness", "Finest-quality green tea leaves with a refreshing taste and rich aroma.", { pack: "100 tea bags" }],
  [144, "Healthy Ka-Wahh!!", "Green Tea", "wellness", "A blend of Indian spices — ashwagandha, moringa, ginger and turmeric — your daily immunity cup.", { pack: "25 tea bags" }],
  [145, "Healthy Ka-Wahh!!", "Lemon Ginger Green Tea", "wellness", "Green tea with lemon and ginger for a zesty, refreshing wellness cup.", { pack: "25 tea bags" }],
  [146, "Healthy Ka-Wahh!!", "Lemon Honey Green Tea", "wellness", "Green tea with natural honey and lemon — a soothing daily cup.", { pack: "25 tea bags" }],
  [148, "Lipton", "Green Tea Honey Lemon", "wellness", "A refreshing blend of pure green tea leaves with the goodness of honey and lemon." ],
  [156, "Organic India", "Tulsi Green Tea Honey Lemon", "wellness", "Certified-organic tulsi green tea with honey and lemon — stress-relieving and uplifting.", { pack: "25 tea bags" }],
  [157, "Organic India", "Moringa Hibiscus", "wellness", "Certified-organic moringa and hibiscus — a caffeine-free boost of antioxidants.", { pack: "25 tea bags" }],

  // ── Milk, malt & soups ─────────────────────────────────────
  [80, "Aromaa Café", "Horlicks", "specialty", "Instant Horlicks premix — a nourishing malt drink for vending machines.", {}],
  [82, "Aromaa Café", "Boost", "specialty", "Instant Boost premix — a chocolate-malt energy drink for vending lines.", {}],
  [134, "Granules n Beans", "Hot Chocolate", "specialty", "A rich instant hot-chocolate premix — a treat for kids and grown-ups alike.", { pack: "1 kg" }],
  [154, "Nestlé", "Nesquik", "specialty", "Nesquik cocoa-based beverage premix — creamy chocolate milk from the machine." ],
  [91, "Coffee Day", "Zest Badam Mix", "specialty", "Bursting with the goodness of badam — an almond milk beverage mix.", {}],
  [94, "Coffee Day", "Souper Tomato Soup", "specialty", "Coffee Day Souper — a hot tomato soup premix for vending machines.", {}],
];

export const products: Product[] = rows.map(([id, brand, name, kind, description, extra = {}]) => ({
  slug: slugify(`${brand} ${name}`),
  name,
  brand,
  kind,
  variant: extra.variant,
  pack: extra.pack,
  description,
  sources: [id, ...(extra.dupes ?? [])],
}));
