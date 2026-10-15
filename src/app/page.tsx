import Link from "next/link";
import { getFeaturedMachines, getMachine, getMachineBrands } from "@/lib/catalog";
import { Hero } from "@/components/home/Hero";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Featured } from "@/components/home/Featured";
import { Heritage } from "@/components/home/Heritage";
import { Journey } from "@/components/home/Journey";
import { Testimonials } from "@/components/home/Testimonials";
import { Showrooms } from "@/components/home/Showrooms";
import { CtaBand } from "@/components/home/CtaBand";
import { MachineBrands } from "@/components/machines/MachineBrands";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default async function HomePage() {
  const [featured, spotlight, brands] = await Promise.all([getFeaturedMachines(), getMachine("astoria-tanya-r"), getMachineBrands()]);

  return (
    <>
      <Hero spotlight={spotlight ?? featured[0]} />
      <BrandMarquee />
      <CategoryGrid />
      <Featured machines={featured.filter((m) => m.slug !== spotlight?.slug)} />
      <section className="container-luxe py-14 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow={`${brands.length} brands · ${brands.reduce((n, b) => n + b.models.length, 0)} machines`}
            title={
              <>
                Machines by <em className="text-brass-deep">brand</em>
              </>
            }
            telugu="బ్రాండ్ల వారీగా యంత్రాలు"
          />
          <Link href="/machines" className="btn btn-ghost shrink-0">
            View all machines
          </Link>
        </div>
        <div className="mt-8">
          <MachineBrands brands={brands} />
        </div>
      </section>
      <Heritage />
      <Journey />
      <Testimonials />
      <Showrooms />
      <CtaBand />
    </>
  );
}
