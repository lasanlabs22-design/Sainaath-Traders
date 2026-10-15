import Link from "next/link";
import type { Machine } from "@/lib/types";
import { formatPrice, machineTitle } from "@/lib/format";
import { site } from "@/data/site";
import { machines } from "@/data/machines";
import { MachineMedia } from "@/components/machines/MachineMedia";
import { KolamRosette } from "@/components/ui/Ornament";
import { Icon } from "@/components/ui/Icon";

const stats = [
  { value: `${new Date().getFullYear() - Number(site.established)}+`, label: "Years brewing" },
  { value: String(machines.length), label: "Machines" },
  { value: "90+", label: "Premixes & teas" },
];

/**
 * On desktop the hero is locked to the viewport (minus the top bar + header,
 * 8.25rem) so the whole first screen — copy, CTAs, stats and spotlight — is
 * visible without scrolling. Type and image scale with the available height.
 */
export function Hero({ spotlight }: { spotlight: Machine }) {
  return (
    <section className="container-luxe pt-3 sm:pt-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-espresso text-ivory sm:rounded-[2.5rem] lg:h-[calc(100dvh_-_8.25rem_-_1.25rem)] lg:max-h-[46rem] lg:min-h-[32rem]">
        <div className="kolam-dark absolute inset-0 -z-10 opacity-70" />
        <div className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(220,187,120,0.22),transparent_65%)]" />
        <KolamRosette className="absolute -bottom-24 -left-24 -z-10 size-96 text-brass/10" />

        <div className="grid h-full items-center gap-10 px-6 pb-12 pt-10 sm:px-12 sm:pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:px-14 lg:py-[clamp(1.5rem,4dvh,3rem)]">
          <div>
            <p className="eyebrow text-brass-light">Est. {site.established} · Guntur &amp; Vijayawada</p>
            <h1 className="mt-4 text-[2.5rem] leading-[0.98] text-ivory sm:text-6xl lg:text-[clamp(2.75rem,7dvh,4.25rem)]">
              The art of coffee,
              <br />
              <em className="brass-text font-medium">crafted for Andhra homes.</em>
            </h1>
            <p lang="te" className="mt-3 font-telugu text-base text-brass-light/80">
              ప్రతి కప్పులో సంప్రదాయం, ప్రతి యంత్రంలో నైపుణ్యం
            </p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ivory/70">
              Tea &amp; coffee vending and bean-to-cup machines for offices, cafés and homes — with a free demo, installation and local
              service you can trust.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/machines" className="btn btn-brass">
                Explore Machines <Icon name="arrow" className="size-4" />
              </Link>
              <Link href="/contact#enquire" className="btn btn-ghost-light">
                Book a Free Demo
              </Link>
            </div>

            <dl className="mt-[clamp(1.25rem,4dvh,2.5rem)] grid max-w-md grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col px-3 first:pl-0">
                  <dt className="order-2 mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-ivory/50">{s.label}</dt>
                  <dd className="font-display text-3xl text-brass-light">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:flex lg:h-full lg:max-w-none lg:items-center lg:justify-center">
            <div className="arch relative aspect-[4/4.6] w-full overflow-hidden border border-brass/40 stage p-2 lg:h-[calc(100%_-_1.5rem)] lg:w-auto">
              <div className="arch absolute inset-3 border border-brass/25" />
              <div className="absolute inset-x-10 top-1/4 h-1/2 rounded-full bg-brass/15 blur-3xl" />
              <MachineMedia machine={spotlight} priority steam sizes="(min-width: 1024px) 34vw, 90vw" className="h-full w-full" />
            </div>

            <Link
              href={`/machines/${spotlight.slug}`}
              className="absolute -bottom-4 left-1/2 flex w-[88%] max-w-sm -translate-x-1/2 items-center justify-between gap-4 rounded-2xl border border-brass/30 bg-ivory/95 px-4 py-3 text-espresso shadow-2xl backdrop-blur transition-transform hover:-translate-y-0.5 lg:bottom-1"
            >
              <span>
                <span className="eyebrow block text-[0.6rem]">In the spotlight</span>
                <span className="mt-0.5 block font-display text-lg leading-tight">{machineTitle(spotlight)}</span>
              </span>
              <span className="text-right">
                <span className="block text-sm font-semibold">{formatPrice(spotlight.price)}</span>
                <span className="text-xs text-brass-deep">View →</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="h-6 lg:hidden" />
      </div>
    </section>
  );
}
