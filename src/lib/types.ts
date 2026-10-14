export type CategorySlug = "premix" | "bean-to-cup";

export type UseCase = "home" | "office" | "cafe";

/** Which illustrated placeholder to draw when no product photo exists yet. */
export type VisualKind = "espresso" | "espresso-grinder" | "superauto" | "capsule" | "commercial";

export interface Finish {
  name: string;
  /** CSS colour used for the swatch and the illustrated placeholder body. */
  color: string;
}

export interface MachineSpecs {
  pressure?: string;
  boiler?: string;
  waterTank?: string;
  grinder?: string;
  display?: string;
  speed?: string;
  capacity?: string;
  power?: string;
  dimensions?: string;
  weight?: string;
  material?: string;
  warranty?: string;
}

export interface Machine {
  slug: string;
  name: string;
  brand: string;
  /** Sub-brand / product line under the parent brand, e.g. LIQCAF under Cothas. */
  line?: string;
  model: string;
  category: CategorySlug;
  idealFor: UseCase[];
  /** Indicative price in INR. `null` → "Price on request". */
  price: number | null;
  mrp?: number;
  tagline: string;
  description: string;
  highlights: string[];
  /** Drinks the machine dispenses, in button order. */
  beverages?: string[];
  specs: MachineSpecs;
  finishes: Finish[];
  visual: VisualKind;
  /**
   * Machine cut-outs, relative to /public (e.g. "/images/machines/175.webp").
   * Leave empty to use the illustrated placeholder.
   */
  images: string[];
  /** Full client brochure/poster for this machine. */
  poster?: string;
  featured?: boolean;
  badge?: string;
  cupsPerDay?: string;
}

export interface MachineBrand {
  slug: string;
  name: string;
  blurb: string;
  models: Machine[];
}

export type ProductKind = "coffee-premix" | "coffee" | "tea-premix" | "tea" | "wellness" | "specialty";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  kind: ProductKind;
  /** Short flavour / variant label shown on the pack, e.g. "Cardamom". */
  variant?: string;
  pack?: string;
  description: string;
  /** Client image numbers that show this same product (kept for the audit trail). */
  sources: number[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  telugu: string;
  blurb: string;
  visual: VisualKind;
}

export interface Showroom {
  city: string;
  telugu: string;
  address: string[];
  phone: string;
  hours: string;
  mapQuery: string;
  /** Client-supplied Google Maps pin; overrides the search link built from mapQuery. */
  mapUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: string;
}
