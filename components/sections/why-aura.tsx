import Image from "next/image";
import consultationImage from "@/public/images/aura-consultation.png";
import { Reveal } from "@/components/reveal";

const principles = [
  { title: "You understand the plan", body: "We explain what we see, what can wait, and what we recommend before treatment begins." },
  { title: "Comfort is part of the care", body: "A calm room, a gentle pace, and time for questions are built into every appointment." },
  { title: "Modern tools, human decisions", body: "Digital workflows help us work precisely. Your needs still guide every choice." },
];

export function WhyAura() {
  return (
    <section aria-labelledby="experience-title" className="overflow-hidden bg-purple text-paper">
      <div className="mx-auto grid max-w-[1480px] lg:min-h-[900px] lg:grid-cols-2">
        <Reveal className="relative min-h-[560px] lg:min-h-full">
          <Image src={consultationImage} alt="A dentist calmly explains a dental scan to a patient during a consultation" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,oklch(18%_0.06_315/0.35),transparent_45%)]" />
          <p className="absolute bottom-7 left-7 max-w-[25ch] text-sm leading-6 text-paper/80 md:bottom-10 md:left-10">A clear conversation comes before any treatment.</p>
        </Reveal>

        <div id="experience" className="flex scroll-mt-[76px] items-center px-5 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
          <div className="w-full">
            <Reveal>
              <p className="text-sm font-medium text-magenta-soft">The Aura approach</p>
              <h2 id="experience-title" className="font-display mt-5 max-w-[10ch] text-balance text-[clamp(2.8rem,5.3vw,5.5rem)] font-medium leading-[0.92] text-paper">Care that feels considered.</h2>
              <p className="mt-7 max-w-[48ch] text-pretty text-lg leading-8 text-paper/70">A premium experience is not about making dentistry feel exclusive. It is about making you feel listened to, informed, and genuinely at ease.</p>
            </Reveal>

            <div className="mt-14 border-t border-paper/18">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 70}>
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-paper/18 py-7">
                    <span className="pt-1 text-sm text-magenta-soft tnum">0{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-paper">{principle.title}</h3>
                      <p className="mt-2 max-w-[48ch] leading-6 text-paper/62">{principle.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
