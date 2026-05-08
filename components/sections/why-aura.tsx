import Image from "next/image";
import { Reveal } from "@/components/reveal";

/**
 * Why Aura — asymmetric editorial spread.
 *
 * Replaces the standard "three equal feature cards" pattern with a
 * 12-col composition: a tall photographic plate on the left, a
 * deliberately uneven stack of three notes on the right, each note a
 * different size and rhythm. Pull-quote sits between to give the page
 * one recognisable typographic moment.
 */
export function WhyAura() {
  return (
    <section
      aria-label="Why Aura"
      className="relative overflow-hidden bg-paper-cool py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label">Chapter 02 · The way we work</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
              A clinic patients <em className="italic text-magenta">recommend</em> — not just
              visit.
            </h2>
          </div>
        </header>

        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          {/* Photo plate */}
          <Reveal className="md:col-span-5">
            <figure className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-paper-deeper">
                <Image
                  src="/images/treatment-room.svg"
                  alt="Aura treatment room — purple chair, soft daylight, calm"
                  fill
                  sizes="(min-width: 768px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4 text-sm">
                <span className="text-ink-soft">Inside the studio · 9:30 am</span>
                <span className="label text-ink-faint tnum">FIG · 02</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Editorial note column */}
          <div className="md:col-span-7 md:pl-6 lg:pl-12">
            {/* Pull-quote — single typographic moment */}
            <Reveal>
              <blockquote className="border-t border-ink/15 pt-8 font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.018em] text-ink">
                <span aria-hidden className="text-magenta">&ldquo;</span>
                We&rsquo;d rather take 30 extra seconds to explain than 30 minutes to
                undo a misunderstanding.
                <span aria-hidden className="text-magenta">&rdquo;</span>
              </blockquote>
              <p className="mt-4 text-sm text-ink-soft">
                — Dr. Anjali Menon
              </p>
            </Reveal>

            <div className="mt-16 space-y-14">
              <Reveal delay={80}>
                <Note number="01" title="Modern technology, quietly">
                  Digital intra-oral scans, rotary endodontics, 3D smile design — the kind of
                  equipment that turns long appointments into single visits. We don&rsquo;t
                  brand it on the wall; you only notice when your appointment ends an hour
                  earlier than expected.
                </Note>
              </Reveal>

              <Reveal delay={140}>
                <Note number="02" title="Genuinely gentle">
                  We explain every step, listen to every worry. Whether it&rsquo;s your
                  child&rsquo;s first visit or your most anxious one — you&rsquo;ll feel the
                  difference between a clinic that&rsquo;s polite and one that&rsquo;s actually
                  kind.
                </Note>
              </Reveal>

              <Reveal delay={200}>
                <Note number="03" title="Open all seven days, including Sunday">
                  Open all seven days — including Sundays, when most clinics in Ottapalam
                  are closed. Book online any time; a real person confirms within business
                  hours on the same WhatsApp thread.
                </Note>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Note({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 items-baseline gap-4 border-t border-line pt-8">
      <span className="label tnum text-ink-faint col-span-2">{number}</span>
      <div className="col-span-10">
        <h3 className="font-display text-[clamp(1.25rem,2vw,1.6rem)] font-medium leading-[1.2] tracking-[-0.015em] text-ink">
          {title}
        </h3>
        <p className="mt-3 max-w-[58ch] text-pretty text-[1rem] leading-[1.6] text-ink-soft">
          {children}
        </p>
      </div>
    </div>
  );
}
