import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Clock3, MapPin } from "lucide-react";
import heroImage from "@/public/images/aura-treatment-suite.png";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative min-h-[100svh] overflow-hidden bg-purple text-paper">
      <div className="hero-image-enter absolute inset-0">
        <Image src={heroImage} alt="A warm, light-filled Aura Dental Care treatment suite with a modern dental chair and garden view" fill priority placeholder="blur" sizes="100vw" className="object-cover object-[62%_center]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(15%_0.045_315/0.88)_0%,oklch(17%_0.04_315/0.64)_44%,oklch(17%_0.04_315/0.12)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(0deg,oklch(14%_0.04_315/0.76),transparent)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-7 pt-32 md:px-9 md:pb-9 lg:px-12">
        <div className="hero-enter max-w-[940px]">
          <h1 id="hero-title" className="font-display max-w-[14ch] text-balance text-[clamp(3.2rem,6.6vw,6.7rem)] font-medium leading-[0.96] tracking-[-0.035em] text-paper">
            Feel good about going to the dentist.
          </h1>
          <p className="mt-7 max-w-[54ch] text-pretty text-[1.05rem] leading-7 text-paper/78 md:text-lg">
            Modern family dentistry, explained clearly and delivered gently. From your first message to your follow-up, we make every step feel considered.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#book" className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-paper px-7 text-sm font-semibold text-purple transition-colors hover:bg-paper-warm">
              Book a visit <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <a href={`tel:${site.phones.primaryE164}`} className="inline-flex min-h-14 items-center rounded-full border border-paper/30 px-7 text-sm font-semibold text-paper transition-colors hover:bg-paper/10">Call {site.phones.primaryDisplay}</a>
          </div>
        </div>

        <div className="hero-enter-delay mt-12 grid gap-3 border-t border-paper/20 pt-5 text-sm text-paper/72 sm:grid-cols-2 lg:ml-auto lg:w-[52%]">
          <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-magenta-soft" /><span>{site.hours.label}</span></div>
          <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-paper"><MapPin className="h-4 w-4 text-magenta-soft" /><span>{site.address.street}, {site.address.locality}</span></a>
        </div>
      </div>
    </section>
  );
}
