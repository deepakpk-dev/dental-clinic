import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteriorPage } from "@/components/interior-page";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Orthodontics, dental implants, root canal, children's dentistry, cosmetic dentistry and general checkups at Aura Dental Care, Ottapalam.",
};

export default function ServicesPage() {
  return (
    <InteriorPage
      eyebrow="Treatments"
      title="Care for every stage."
      description="From preventive visits to complex restorative care, we explain every option clearly and build the plan around you."
    >
      <ol className="border-t border-line">
        {services.map((service, index) => (
          <li key={service.key} id={service.key} className="scroll-mt-28 border-b border-line py-9 md:py-12">
            <div className="grid gap-5 md:grid-cols-12 md:gap-8">
              <span className="text-sm text-ink-faint tnum md:col-span-1">0{index + 1}</span>
              <div className="md:col-span-4">
                <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-medium tracking-[-0.04em] text-ink">{service.title}</h2>
                <p className="mt-2 text-sm font-medium text-magenta">{service.short}</p>
              </div>
              <div className="md:col-span-5 md:col-start-7">
                <p className="max-w-[58ch] leading-7 text-ink-soft">{service.blurb}</p>
                <Link href="/#book" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Book this treatment <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </InteriorPage>
  );
}
