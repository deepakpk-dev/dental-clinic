import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function StubPage({ eyebrow, title, description }: Props) {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center bg-paper px-6 pt-32 pb-24 md:px-10">
      <div className="mx-auto grid w-full max-w-[1100px] gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <p className="label">{eyebrow} · in development</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.6rem)] font-medium leading-[0.95] tracking-[-0.025em] text-ink">
            {title}
          </h1>
          <p className="mt-8 max-w-prose text-pretty text-lg leading-[1.55] text-ink-soft">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 rounded-full bg-purple px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-purple-mid"
            >
              Book a chair →
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-ink-soft underline-offset-4 hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>

        <aside className="md:col-span-5 md:pt-12">
          <div className="border-t border-line pt-6">
            <p className="label">Coming next</p>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li className="flex items-baseline gap-3">
                <span className="tnum w-7 text-xs text-ink-faint">01</span>
                <span>Detailed service write-ups, with before/after stories.</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="tnum w-7 text-xs text-ink-faint">02</span>
                <span>Doctor profiles, qualifications, and recent training.</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="tnum w-7 text-xs text-ink-faint">03</span>
                <span>A clinic gallery in 35mm — calm, slow, considered.</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
