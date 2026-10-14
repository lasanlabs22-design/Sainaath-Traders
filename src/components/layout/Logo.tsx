import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Sainaath Traders logo lockup, cut from the client's posters.
 * The artwork has dark lettering, so on dark surfaces (`light`) it sits on an ivory plate.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className={light ? "rounded-2xl bg-ivory px-3 py-2 shadow-[inset_0_0_0_1px_rgba(220,187,120,0.5)]" : ""}>
        <Image src="/images/brand/sainaath-traders-logo.png" alt={site.name} width={350} height={240} priority className={light ? "h-11 w-auto" : "h-14 w-auto lg:h-16"} />
      </span>
      <span className="hidden whitespace-nowrap leading-none sm:block">
        <span className={`block text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-brass-light" : "text-brass-deep"}`}>Coffee vending machines</span>
        <span className={`mt-1.5 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-ivory/60" : "text-muted"}`}>
          Sales &amp; service · Since {site.established}
        </span>
      </span>
    </Link>
  );
}
