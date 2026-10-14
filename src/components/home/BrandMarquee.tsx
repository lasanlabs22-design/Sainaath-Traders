import { promises } from "@/data/content";
import { machines } from "@/data/machines";
import { products } from "@/data/products";
import type { Product } from "@/lib/types";

/** A single typographic rail of product names — brand in small caps, name in italic serif. */
function NameRail({ items, reverse = false, duration }: { items: Product[]; reverse?: boolean; duration: string }) {
  return (
    <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <ul className={`marquee-slow flex w-max items-center ${reverse ? "marquee-reverse" : ""}`} style={{ ["--marquee-duration" as string]: duration }}>
        {[...items, ...items].map((p, i) => (
          <li key={`${p.slug}-${i}`} aria-hidden={i >= items.length || undefined} className="flex items-center">
            <span className="flex flex-col items-start px-7 py-3">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-brass-light/70">{p.brand}</span>
              <span className="whitespace-nowrap font-display text-3xl italic leading-tight text-ivory sm:text-4xl">{p.name}</span>
            </span>
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-brass/70" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BrandMarquee() {
  const brands = Array.from(new Set([...machines.map((m) => m.brand), ...products.map((p) => p.brand)]));
  const row = [...brands, ...brands];
  // Alternate items between the two rails so each mixes coffee, tea and specialty drinks.
  const top = products.filter((_, i) => i % 2 === 0);
  const bottom = products.filter((_, i) => i % 2 === 1);

  return (
    <section aria-label="Brands, products and promises" className="mt-10 sm:mt-12">
      <div className="container-luxe">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {promises.map((p) => (
            <li key={p.label} className="bg-ivory px-5 py-6 text-center">
              <p className="font-display text-2xl text-espresso">{p.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{p.sub}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-10 overflow-hidden bg-espresso py-8 sm:py-10">
        <div className="kolam-dark absolute inset-0 opacity-50" />
        <div className="container-luxe relative text-center">
          <p className="eyebrow text-brass-light">Premixes, coffee &amp; tea we stock</p>
          <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">
            {products.length} blends · <em className="brass-text">{brands.length} brands</em>
          </h2>
        </div>
        <div className="relative mt-8 space-y-2">
          <NameRail items={top} duration="220s" />
          <NameRail items={bottom} duration="240s" reverse />
        </div>
      </div>

      <div className="container-luxe">
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <p className="eyebrow mb-4 text-center">Brands we sell &amp; service</p>
          <div className="marquee flex w-max gap-14" style={{ animationDuration: "70s" }}>
            {row.map((b, i) => (
              <span key={i} className="whitespace-nowrap font-display text-3xl italic text-mocha/50" aria-hidden={i >= brands.length}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
