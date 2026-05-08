import { Reveal } from "@/components/reveal";

type Testimonial = {
  name: string;
  detail: string;
  body: string;
  rating: number;
};

// Sample testimonials — replace with real Google reviews before client handoff.
const items: Testimonial[] = [
  {
    name: "Lakshmi P.",
    detail: "Orthodontics · Ottapalam",
    body: "I was nervous about braces at 32. Dr. Anjali walked me through every option and the results are incredible. The clinic feels nothing like a hospital — it feels like a spa.",
    rating: 5,
  },
  {
    name: "Vinod K.",
    detail: "Implants · Palakkad",
    body: "Got two implants done in a single visit. No pain, very professional. Sunday appointments saved me three trips. Worth driving from Palakkad for.",
    rating: 5,
  },
  {
    name: "Reshma & Aarav",
    detail: "Children's dentistry · Shoranur",
    body: "My 6-year-old actually asks when we're going back. They have a kids' corner, the dentist is patient, and they explain everything to him. Game-changer.",
    rating: 5,
  },
];

/**
 * Testimonials — pull-quote treatment, mixed sizes.
 *
 * Replaces the standard "three identical testimonial cards" pattern.
 * The first quote is set large as a magazine pull-quote anchoring the
 * section. The remaining two run as smaller sidebar quotes underneath
 * — different scales, different rhythms, never the same card.
 */
export function Testimonials() {
  const [lead, ...rest] = items;
  return (
    <section
      aria-label="Patient stories"
      className="relative bg-paper-warm py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label">Chapter 05 · Patient notes</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
              Words that go further than <em className="italic text-magenta">words</em> ever
              could.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <Stars n={5} />
              <span className="tnum">4.9 · 240+ Google reviews</span>
            </div>
            <p className="mt-3 text-xs text-ink-faint">
              Sample stories shown · real Google reviews coming soon
            </p>
          </div>
        </header>

        {/* Lead quote — large pull-quote */}
        <Reveal className="mt-20">
          <figure className="grid gap-10 md:grid-cols-12 md:gap-12">
            <blockquote className="md:col-span-9">
              <span aria-hidden className="font-display text-7xl leading-none text-magenta">
                &ldquo;
              </span>
              <p className="mt-2 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-[1.25] tracking-[-0.018em] text-ink">
                {lead.body}
              </p>
            </blockquote>
            <figcaption className="md:col-span-3 md:pt-12">
              <Stars n={lead.rating} />
              <p className="mt-3 font-display text-xl text-ink">{lead.name}</p>
              <p className="text-sm text-ink-soft">{lead.detail}</p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Two supporting quotes — different scale */}
        <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-12 md:gap-16">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={i === 0 ? "md:col-span-7" : "md:col-span-5"}>
              <article>
                <Stars n={t.rating} />
                <p
                  className={
                    i === 0
                      ? "mt-5 max-w-[52ch] text-pretty text-[1.1rem] leading-[1.55] text-ink"
                      : "mt-5 max-w-[42ch] text-pretty text-[1rem] leading-[1.6] text-ink-soft"
                  }
                >
                  {t.body}
                </p>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="label tnum text-ink-faint">{t.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M12 2l2.9 6.9L22 10l-5.5 4.7L18.2 22 12 18.3 5.8 22l1.7-7.3L2 10l7.1-1.1L12 2z"
            fill={i < n ? "oklch(52% 0.21 5)" : "oklch(86% 0.025 305)"}
          />
        </svg>
      ))}
    </div>
  );
}
