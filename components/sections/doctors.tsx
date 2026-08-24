import { MessageCircle, ScanLine, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  { icon: MessageCircle, title: "Tell us what is going on", body: "Book online or call. Share what you need, when you are free, and anything that makes dental visits difficult for you." },
  { icon: ScanLine, title: "See the full picture", body: "Your consultation focuses on listening first, examining carefully, and explaining the options in language that makes sense." },
  { icon: Sparkles, title: "Leave with a clear next step", body: "You get a considered plan and a simple follow-up path on WhatsApp. No pressure and no confusion about what happens next." },
];

export function Doctors() {
  return (
    <section aria-labelledby="journey-title" className="surface-grid bg-paper-warm py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-5 md:px-9 lg:px-12">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="journey-title" className="font-display max-w-[11ch] text-balance text-[clamp(2.8rem,5.6vw,5.8rem)] font-medium leading-[0.91] text-ink lg:col-span-7">A simple visit, from hello to follow-up.</h2>
            <p className="max-w-[46ch] text-pretty text-lg leading-8 text-ink-soft lg:col-span-4 lg:col-start-9">Good care should never feel mysterious. Here is what you can expect from your first appointment.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 90} className={index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4 md:pt-16" : "md:col-span-3 md:pt-32"}>
                <article className="border-t border-ink/20 pt-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-magenta" strokeWidth={1.7} />
                    <span className="text-sm text-ink-faint tnum">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 max-w-[16ch] text-2xl font-semibold tracking-[-0.045em] text-ink">{step.title}</h3>
                  <p className="mt-4 max-w-[42ch] text-pretty leading-7 text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
