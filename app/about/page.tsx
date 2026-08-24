import type { Metadata } from "next";
import Image from "next/image";
import { InteriorPage } from "@/components/interior-page";
import consultationImage from "@/public/images/aura-consultation.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team and the philosophy behind Aura Dental Care, a modern dental clinic in Ottapalam, Kerala.",
};

export default function AboutPage() {
  return (
    <InteriorPage
      eyebrow="About Aura"
      title="A calmer way to care for your smile."
      description="Aura combines modern clinical tools with clear conversations, a gentle pace, and treatment plans you can understand."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative min-h-[460px] overflow-hidden rounded-card lg:col-span-7 lg:min-h-[720px]">
          <Image src={consultationImage} alt="A calm dental consultation at Aura Dental Care" fill placeholder="blur" sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
          {[
            ["Clarity first", "We explain what we see, what can wait, and what each option involves before treatment begins."],
            ["Comfort by design", "A calm room, a thoughtful pace, and time for questions are part of every appointment."],
            ["Technology with purpose", "Digital workflows support precise care while your needs continue to guide every decision."],
          ].map(([title, body], index) => (
            <section key={title} className="border-t border-line py-7">
              <p className="text-xs text-ink-faint tnum">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-ink-soft">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </InteriorPage>
  );
}
