import Image from "next/image";
import Link from "next/link";
import type { MachineBrand } from "@/lib/types";
import { brandHref } from "@/lib/catalog";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * One card per machine brand. Brands with several models (or sub-brands such
 * as LIQCAF under Cothas) get an "Explore our coffee machines" button that
 * opens the brand page; single-model brands link straight to the machine.
 */
export function MachineBrands({ brands }: { brands: MachineBrand[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {brands.map((b, i) => {
        const multi = b.models.length > 1;
        const lines = Array.from(new Set(b.models.map((m) => m.line).filter(Boolean)));
        const thumbs = b.models.slice(0, 3);
        return (
          <Reveal key={b.slug} delay={(i % 3) * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ivory p-5 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_30px_60px_-30px_rgba(43,27,18,0.45)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-3xl leading-tight">{b.name}</h3>
                  <p className="mt-1 text-sm text-muted">{b.blurb}</p>
                </div>
                <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-muted">
                  {b.models.length} {multi ? "models" : "model"}
                </span>
              </div>

              {lines.length > 0 && (
                <p className="mt-3 flex flex-wrap gap-1.5">
                  {lines.map((l) => (
                    <span key={l} className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-brass-deep">
                      {l}
                    </span>
                  ))}
                </p>
              )}

              {/* One dark stage holding up to three machines side by side — same height for every brand. */}
              <div className="relative mt-5 flex h-56 items-end justify-center gap-1 overflow-hidden rounded-2xl bg-stage px-2 sm:h-60">
                <div className="absolute inset-x-6 top-1/4 h-1/2 rounded-full bg-brass/15 blur-3xl" />
                {thumbs.map((m) => (
                  <div key={m.slug} className={`relative h-full ${thumbs.length === 1 ? "w-3/5" : "flex-1"}`}>
                    {m.images[0] && (
                      <Image
                        src={m.images[0]}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1280px) 12vw, (min-width: 640px) 18vw, 32vw"
                        className="object-contain transition-transform duration-700 ease-luxe group-hover:scale-105"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <Link href={brandHref(b)} className={`btn w-full ${multi ? "btn-primary" : "btn-ghost"}`}>
                  {multi ? "Explore our coffee machines" : `View ${b.models[0].name}`} <Icon name="arrow" className="size-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
