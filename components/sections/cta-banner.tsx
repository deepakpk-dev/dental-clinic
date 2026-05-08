import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

/**
 * Closing CTA — typographic, not a gradient banner.
 *
 * The previous version leaned on a multi-stop purple-magenta gradient,
 * which is the AI default. This version is restraint instead: a quiet
 * paper field, one large serif sentence, two unambiguous links. The
 * "wow" comes from typography, not colour.
 */
export function CtaBanner() {
  return (
    <section
      aria-label="Get in touch"
      className="relative bg-paper py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="grid items-baseline gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-2">
              <p className="label">Closing note</p>
            </div>
            <div className="md:col-span-10">
              <p className="font-display text-[clamp(1.9rem,4.6vw,4rem)] font-medium leading-[1] tracking-[-0.022em] text-ink">
                Your better smile starts with{" "}
                <em className="italic text-magenta">one</em> appointment.
              </p>
              <p className="mt-8 max-w-[58ch] text-pretty text-[1.05rem] leading-[1.55] text-ink-soft">
                Walk-ins welcome. Bookings preferred. Sundays included. We&rsquo;ll see you at
                Asco Plaza.
              </p>
              <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                <Link
                  href="/#book"
                  className="group inline-flex items-baseline gap-3 border-b border-ink pb-2 text-base font-medium text-ink"
                >
                  Book a chair
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href={`tel:${site.phones.primaryE164}`}
                  className="group inline-flex items-baseline gap-3 border-b border-line pb-2 text-base font-medium text-ink-soft hover:border-ink hover:text-ink"
                >
                  <span className="label">Or call</span>
                  <span className="tnum">{site.phones.primaryDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
