import Image from "next/image";
import Link from "next/link";
import { categories, machines } from "@/data/machines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Machine images (public/images/machines/<id>.webp) shown side by side on each category's stage; the middle one is enlarged. */
const covers: Record<string, (number | string)[]> = {
  premix: [190, 195, 177],
  "bean-to-cup": [197, 199, 187],
  espresso: ["astoria-tanya-r"],
};

export function CategoryGrid() {
  return (
    <section className="container-luxe py-14 sm:py-20">
      <SectionHeading
        eyebrow="Find your machine"
        title={
          <>
            Three ways to a <em className="text-brass-deep">perfect cup</em>
          </>
        }
        telugu="మీకు సరైన యంత్రాన్ని ఎంచుకోండి"
        intro="Whether it’s a 2-option pantry machine, a touchscreen serving 150 cups a day or a barista’s espresso machine, we’ll match you with the right machine — and keep it stocked."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 90}>
            <Link
              href={`/machines?category=${c.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-ivory transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-brass/60 hover:shadow-[0_30px_60px_-30px_rgba(43,27,18,0.45)]"
            >
              <div className="relative flex h-60 items-end justify-center gap-2 overflow-hidden stage px-6 pt-6 sm:h-64">
                <div className="kolam absolute inset-0 opacity-20" />
                <div className="absolute inset-x-16 top-1/4 h-1/2 rounded-full bg-brass/20 blur-3xl" />
                {covers[c.slug].map((id, j, all) => (
                  <div key={id} className={`relative h-full flex-1 transition-transform duration-700 ease-luxe ${j === Math.floor(all.length / 2) ? "z-10 scale-110 group-hover:scale-[1.15]" : "opacity-80 group-hover:scale-105"}`}>
                    <Image src={`/images/machines/${id}.webp`} alt="" fill sizes="(min-width: 768px) 16vw, 30vw" className="object-contain" />
                  </div>
                ))}
                <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-espresso/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ivory/70 backdrop-blur">
                  {(() => {
                    const count = machines.filter((m) => m.category === c.slug).length;
                    return `${count} ${count === 1 ? "model" : "models"}`;
                  })()}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-display text-sm text-brass-deep">0{i + 1}</span>
                <h3 className="mt-1 text-3xl sm:text-4xl">{c.name}</h3>
                <p lang="te" className="font-telugu text-sm text-brass-deep">
                  {c.telugu}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.blurb}</p>
                <span className="mt-5 text-sm font-semibold text-espresso group-hover:text-brass-deep">Browse →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
