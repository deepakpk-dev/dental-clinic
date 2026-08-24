import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-9 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="text-sm font-medium text-magenta">Care for every stage</p>
              <h2 id="services-title" className="font-display mt-5 max-w-[9ch] text-balance text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.93] text-ink">Everything your smile needs.</h2>
              <p className="mt-7 max-w-[38ch] text-pretty leading-7 text-ink-soft">Preventive checkups, complex treatment, and cosmetic care, all planned around one thing: what is right for you.</p>
              <Link href="/#book" className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-semibold text-ink">Not sure what to book? Start with a consultation <ArrowUpRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
          {services.map((service, index) => (
            <Reveal key={service.key} delay={index * 45}>
              <li>
                <Link href={`/services#${service.key}`} className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-paper-warm sm:grid-cols-[3.5rem_1fr_auto] sm:items-start sm:px-3 md:py-10">
                  <span className="text-sm text-ink-faint tnum">0{index + 1}</span>
                  <div>
                    <h3 className="text-[clamp(1.35rem,2.4vw,2rem)] font-medium tracking-[-0.04em] text-ink">{service.title}</h3>
                    <p className="mt-2 max-w-[54ch] text-pretty text-[0.98rem] leading-6 text-ink-soft">{service.blurb}</p>
                  </div>
                  <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all group-hover:border-purple group-hover:bg-purple group-hover:text-paper sm:flex"><ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
