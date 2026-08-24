import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaBanner() {
  return (
    <section aria-label="Book a dental visit" className="bg-magenta-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1480px] px-5 md:px-9 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p className="font-display max-w-[11ch] text-balance text-[clamp(2.7rem,6vw,6.4rem)] font-medium leading-[0.9] text-purple">Let&apos;s make your next visit an easy one.</p>
            <Link href="/#book" className="group inline-flex min-h-14 shrink-0 items-center gap-3 self-start rounded-full bg-purple px-7 text-sm font-semibold text-paper transition-colors hover:bg-purple-mid md:self-auto">Book a visit <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
