import { categories, machines } from "@/data/machines";
import type { CategorySlug, Machine, MachineBrand } from "@/lib/types";

/**
 * Data-access layer. Pages only talk to these functions, so swapping the
 * static data for a CMS or database later means changing this file only.
 */

export async function getAllMachines(): Promise<Machine[]> {
  return machines;
}

export async function getMachine(slug: string): Promise<Machine | undefined> {
  return machines.find((m) => m.slug === slug);
}

export async function getFeaturedMachines(): Promise<Machine[]> {
  return machines.filter((m) => m.featured);
}

export async function getRelatedMachines(machine: Machine, limit = 3): Promise<Machine[]> {
  return machines
    .filter((m) => m.slug !== machine.slug && m.brand === machine.brand)
    .concat(machines.filter((m) => m.brand !== machine.brand && m.category === machine.category))
    .slice(0, limit);
}

export async function getCategories() {
  return categories;
}

export function getCategory(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug)!;
}

export const brandSlug = (brand: string) =>
  brand
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const brandBlurbs: Record<string, string> = {
  Astoria: "Traditional Italian espresso machines for cafés.",
  Atlantis: "Rugged instant-premix machines that refresh, always.",
  BRU: "South India’s favourite coffee, on tap in your office.",
  "Café Desire": "From bottle-fed classics to the 18-drink Insta Bean.",
  Cothas: "Bengaluru’s filter-coffee house, plus the LIQCAF range.",
  "Dr.coffee": "Fully automatic, touchscreen bean-to-cup.",
  "Granules n Beans": "Premix vending, beverage urns, TruBrew and Premium Espresso bean machines.",
  "Godrej Vending": "Trusted Godrej engineering for every pantry.",
  NESCAFÉ: "The iconic red-mug machines, bottle-top or tank.",
  Roastea: "10.1″ touchscreen tea & coffee for busy floors.",
  Tata: "Tata Kaapi premix and the MyBistro bean-to-cup range.",
};

/** Machines grouped by brand, in catalogue order. A brand with more than one model gets its own page. */
export function getMachineBrandsSync(): MachineBrand[] {
  const map = new Map<string, Machine[]>();
  for (const m of machines) map.set(m.brand, [...(map.get(m.brand) ?? []), m]);
  return [...map].map(([name, models]) => ({ slug: brandSlug(name), name, blurb: brandBlurbs[name] ?? "", models }));
}

export async function getMachineBrands(): Promise<MachineBrand[]> {
  return getMachineBrandsSync();
}

export async function getMachineBrand(slug: string): Promise<MachineBrand | undefined> {
  return getMachineBrandsSync().find((b) => b.slug === slug);
}

/** Where a brand card should link: the brand page for multi-model brands, else straight to the single machine. */
export function brandHref(brand: MachineBrand): string {
  return brand.models.length > 1 ? `/machines/brand/${brand.slug}` : `/machines/${brand.models[0].slug}`;
}

