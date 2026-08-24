import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function InteriorPage({ eyebrow, title, description, children }: Props) {
  return (
    <section className="min-h-screen bg-paper px-5 pb-24 pt-36 md:px-9 md:pb-32 md:pt-44 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <header className="grid gap-8 border-b border-line pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-magenta">{eyebrow}</p>
            <h1 className="font-display mt-5 max-w-[11ch] text-balance text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em] text-ink">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-[52ch] text-pretty text-lg leading-8 text-ink-soft">{description}</p>
            <Link href="/#book" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-purple px-6 text-sm font-semibold text-paper transition-colors hover:bg-purple-mid">
              Book a visit
            </Link>
          </div>
        </header>

        <div className="pt-16 md:pt-24">{children}</div>
      </div>
    </section>
  );
}
