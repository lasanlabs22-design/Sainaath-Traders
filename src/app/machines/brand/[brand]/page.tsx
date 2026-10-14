import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMachineBrand, getMachineBrands } from "@/lib/catalog";
import { PageHero } from "@/components/ui/PageHero";
import { MachineCard } from "@/components/machines/MachineCard";
import { CtaBand } from "@/components/home/CtaBand";

type Params = { params: Promise<{ brand: string }> };

export async function generateStaticParams() {
  return (await getMachineBrands()).filter((b) => b.models.length > 1).map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const brand = await getMachineBrand((await params).brand);
  if (!brand) return {};
  return {
    title: `${brand.name} Coffee Vending Machines`,
    description: `${brand.models.length} ${brand.name} tea & coffee vending machines — ${brand.models.map((m) => m.name).join(", ")}. Sales, installation and service in Guntur & Vijayawada.`,
  };
}

export default async function BrandPage({ params }: Params) {
  const brand = await getMachineBrand((await params).brand);
  if (!brand || brand.models.length < 2) notFound();

  // Group by sub-brand (e.g. Cothas → LIQCAF, Tata → Tata Kaapi / MyBistro); models without a line come first.
  const groups = new Map<string, typeof brand.models>();
  for (const m of brand.models) {
    const key = m.line ?? brand.name;
    groups.set(key, [...(groups.get(key) ?? []), m]);
  }

  return (
    <>
      <PageHero
        eyebrow={`${brand.models.length} models`}
        title={
          <>
            {brand.name} <em className="text-brass-deep">machines</em>
          </>
        }
        intro={`${brand.blurb} Every model can be demonstrated at our showroom or at your office.`}
        crumbs={[
          { href: "/machines", label: "Machines" },
          { href: `/machines/brand/${brand.slug}`, label: brand.name },
        ]}
      />
      <section className="container-luxe space-y-14 py-10 sm:py-14">
        {[...groups].map(([line, models]) => (
          <div key={line}>
            {groups.size > 1 && (
              <h2 className="mb-6 text-3xl">
                {line} <span className="text-base text-muted">· {models.length}</span>
              </h2>
            )}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {models.map((m, i) => (
                <MachineCard key={m.slug} machine={m} priority={i < 3} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <CtaBand title={`Not sure which ${brand.name} fits?`} body="Tell us your daily cup count and the drinks your team loves — we’ll recommend the right model and arrange a free demo." />
    </>
  );
}
