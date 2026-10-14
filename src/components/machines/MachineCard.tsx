import Link from "next/link";
import type { Machine } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { getCategory } from "@/lib/catalog";
import { MachineMedia } from "./MachineMedia";
import { Icon } from "@/components/ui/Icon";

export function MachineCard({ machine, priority = false }: { machine: Machine; priority?: boolean }) {
  const category = getCategory(machine.category);
  return (
    <Link
      href={`/machines/${machine.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/70 bg-ivory transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_30px_60px_-30px_rgba(43,27,18,0.45)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stage">
        {/* Soft brass spotlight behind the machine */}
        <div className="absolute inset-x-8 top-1/4 h-1/2 rounded-full bg-brass/15 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />
        <MachineMedia
          machine={machine}
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stage to-transparent" />
        {machine.badge && (
          <span className="absolute left-4 top-4 whitespace-nowrap rounded-full border border-brass/40 bg-stage/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brass-light backdrop-blur">
            {machine.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <p className="eyebrow tracking-[0.2em]!">
          {machine.line ?? machine.brand} · {category.name}
        </p>
        <h3 className="mt-2 text-2xl leading-tight">{machine.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{machine.tagline}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">{machine.cupsPerDay ? "Capacity" : machine.price === null ? "Pricing" : "From"}</p>
            <p className="font-display text-xl font-semibold text-espresso">
              {machine.cupsPerDay ? `${machine.cupsPerDay} cups/day` : formatPrice(machine.price)}
            </p>
          </div>
          <span className="grid size-11 place-items-center rounded-full border border-line text-espresso transition-colors duration-300 group-hover:border-espresso group-hover:bg-espresso group-hover:text-brass-light">
            <Icon name="arrow" className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
