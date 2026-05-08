import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";

/**
 * Services — editorial table, not a card grid.
 *
 * Replaces the standard "6 identical icon cards" pattern with a typed
 * index: each service is a row with a running number, a serif name, a
 * one-line note, and a subtle hover state. The first service is broken
 * out as a featured spread to anchor the eye.
 */
export function ServicesGrid() {
  const [featured, ...rest] = services;
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative bg-paper py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="label">Chapter 01 · What we do</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
              Full-service dentistry, <em className="italic text-magenta">thoughtfully</em>{" "}
              delivered.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-pretty text-[1.05rem] leading-[1.55] text-ink-soft">
              Six chairs. One philosophy. Every service runs on the same approach: explain
              clearly, treat gently, finish beautifully. Hover any line to read more.
            </p>
          </div>
        </header>

        {/* Featured break-out — the hero service */}
        <Reveal>
          <Link
            href={`/services#${featured.key}`}
            className="group mt-16 grid items-stretch gap-0 overflow-hidden rounded-[1.5rem] border border-line transition-colors hover:border-purple/40 md:mt-20 md:grid-cols-12"
          >
            <div className="bg-paper-cool px-8 py-12 md:col-span-7 md:px-12 md:py-16">
              <div className="flex items-baseline gap-4">
                <span className="label text-ink-faint tnum">№ 01 · Featured</span>
              </div>
              <h3 className="mt-6 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                {featured.title}
              </h3>
              <p className="mt-3 text-base font-medium text-magenta">{featured.short}</p>
              <p className="mt-6 max-w-[52ch] text-pretty text-[1.02rem] leading-[1.6] text-ink-soft">
                {featured.blurb} Both metal-bracket and clear aligner workflows, with digital
                scans replacing the goopy impression trays you remember from school.
              </p>
              <div className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 group-hover:underline">
                Read about {featured.title.toLowerCase()}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
            <div className="relative bg-purple md:col-span-5">
              <FeaturedOrnament />
            </div>
          </Link>
        </Reveal>

        {/* Service index — typed list, no identical cards */}
        <ol className="mt-20 border-t border-line">
          {rest.map((s, i) => (
            <Reveal key={s.key} delay={i * 60}>
              <li>
                <Link
                  href={`/services#${s.key}`}
                  className="group grid items-baseline gap-4 border-b border-line py-7 transition-colors hover:bg-paper-warm md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <span className="label text-ink-faint tnum md:col-span-1">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-[1.1] tracking-[-0.02em] text-ink md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="text-sm font-medium text-magenta md:col-span-2">{s.short}</p>
                  <p className="max-w-[60ch] text-[0.97rem] leading-[1.55] text-ink-soft md:col-span-4">
                    {s.blurb}
                  </p>
                  <span
                    aria-hidden
                    className="hidden text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-ink md:col-span-1 md:block md:text-right"
                  >
                    →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Editorial ornament for the featured card. Soft tooth silhouette
 * over a calm purple field. Pure decorative — keeps the right column
 * feeling like a print plate, not a stock-photo placeholder.
 */
function FeaturedOrnament() {
  return (
    <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30" aria-hidden />
      <svg
        viewBox="0 0 220 260"
        aria-hidden
        className="animate-float-soft absolute h-[78%] w-auto opacity-90"
      >
        <defs>
          <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(96% 0.012 305)" />
            <stop offset="100%" stopColor="oklch(75% 0.10 305)" />
          </linearGradient>
        </defs>
        <path
          d="M110 12c-26 0-48 14-66 14-10 0-18-3-18-3s-3 28 10 64c7 18 14 26 22 50 6 22 14 60 28 60 11 0 14-26 14-50 0-11 4-18 10-18s10 7 10 18c0 24 3 50 14 50 14 0 22-38 28-60 6-24 14-32 22-50 13-36 10-64 10-64s-8 3-18 3c-18 0-40-14-66-14z"
          fill="url(#toothGrad)"
        />
      </svg>
      <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-paper/80">
        <span className="label text-paper/70">Plate № 01</span>
        <span className="font-display italic text-paper">braces, aligners</span>
      </div>
    </div>
  );
}
