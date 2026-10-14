import Link from "next/link";
import { PageHero } from "./PageHero";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

/** Shared layout for policy pages: hero, sticky contents list, numbered sections. */
export function LegalPage({ eyebrow, title, intro, updated, href, sections }: { eyebrow: string; title: React.ReactNode; intro: string; updated: string; href: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} crumbs={[{ href, label: eyebrow }]} />
      <section className="container-luxe grid gap-10 py-12 sm:py-16 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28 rounded-3xl border border-line bg-cream p-6">
            <p className="eyebrow">On this page</p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2 text-muted hover:text-brass-deep">
                    <span className="w-5 shrink-0 font-display text-brass-deep">{i + 1}.</span> {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="max-w-3xl">
          <p className="text-sm text-muted">Last updated: {updated}</p>
          <div className="mt-8 space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-3xl">
                  <span className="mr-2 text-brass-deep">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-ink/85 [&_a]:font-semibold [&_a]:text-brass-deep [&_a:hover]:underline [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{s.body}</div>
              </section>
            ))}
          </div>
          <p className="mt-12 rounded-2xl border border-line bg-cream p-5 text-sm text-muted">
            Questions about this page? Write to us from the <Link href="/contact" className="font-semibold text-brass-deep hover:underline">Visit Us</Link> page — we usually reply within one working day.
          </p>
        </article>
      </section>
    </>
  );
}
