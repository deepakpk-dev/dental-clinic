import { Reveal } from "@/components/reveal";

type Doctor = {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  initials: string;
  years: string;
};

// Placeholder profiles — replace with real names/photos before client handoff.
const doctors: Doctor[] = [
  {
    name: "Dr. Anjali Menon",
    role: "Chief Dental Surgeon · Orthodontist",
    qualifications: "BDS, MDS (Orthodontics)",
    years: "12 yrs",
    bio: "Twelve years of orthodontic practice across Palakkad district. She takes the long first consultation — the one most clinics skip — because the treatment plan is only as good as the conversation before it.",
    initials: "AM",
  },
  {
    name: "Dr. Rohan Krishnan",
    role: "Implantologist · Cosmetic Dentistry",
    qualifications: "BDS, Fellowship in Implantology",
    years: "9 yrs",
    bio: "Post-graduate fellowship in implantology, Rajiv Gandhi University of Health Sciences. Handles full-arch cases and complete smile makeovers. Believes a good cosmetic result is invisible — you look like yourself, only without the thing that bothered you.",
    initials: "RK",
  },
];

/**
 * Doctors — editorial pair, broken composition.
 *
 * Replaces the standard "two identical doctor cards" pattern with an
 * asymmetric two-column composition: the first doctor takes a wide
 * left column with a large initials plate and full bio, the second
 * runs as a tighter right column. Each profile is presented as a name
 * card with running specs, not a stat block.
 */
export function Doctors() {
  return (
    <section
      id="doctors"
      aria-label="Meet the doctors"
      className="relative overflow-hidden py-20 text-paper md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 80% 0%, oklch(45% 0.18 305), oklch(28% 0.14 295) 60%, oklch(22% 0.10 295))",
      }}
    >
      <div className="absolute inset-0 bg-grain opacity-25" aria-hidden />
      <div
        className="absolute -bottom-40 left-[-10%] h-[460px] w-[460px] rounded-full"
        style={{ background: "radial-gradient(circle at center, oklch(78% 0.18 5 / 0.30), transparent 65%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label text-paper/55">Chapter 03 · The team</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-paper">
              Hands you can <em className="italic text-magenta-soft">trust</em>, in chairs that
              don&rsquo;t scare you.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-pretty text-[1rem] leading-[1.55] text-paper/75">
              Every Aura patient is seen by qualified specialists — not assistants.
              Here&rsquo;s who&rsquo;ll be looking after your smile.
            </p>
          </div>
        </header>

        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-7">
            <DoctorPanel doctor={doctors[0]} size="lead" />
          </Reveal>
          <Reveal className="md:col-span-5 md:pt-16" delay={120}>
            <DoctorPanel doctor={doctors[1]} size="support" />
          </Reveal>
        </div>

        <div className="mt-20 grid items-baseline gap-6 border-t border-paper/15 pt-10 md:grid-cols-12">
          <p className="md:col-span-6 font-display text-[clamp(1.2rem,1.9vw,1.55rem)] leading-[1.3] tracking-[-0.012em] text-paper">
            Both doctors are Indian Dental Association registered, with continuing-education
            certifications updated annually.
          </p>
          <p className="label tnum text-paper/45 md:col-span-2 md:col-start-11 md:text-right">
            IDA · KDC reg.
          </p>
        </div>
      </div>
    </section>
  );
}

function DoctorPanel({
  doctor,
  size,
}: {
  doctor: Doctor;
  size: "lead" | "support";
}) {
  const initialsSize =
    size === "lead"
      ? "h-[120px] w-[120px] text-[3.6rem] sm:h-[160px] sm:w-[160px] sm:text-[5rem] md:h-[220px] md:w-[220px] md:text-[7rem]"
      : "h-[100px] w-[100px] text-[3.2rem] sm:h-[140px] sm:w-[140px] sm:text-[4.5rem] md:h-[160px] md:w-[160px] md:text-[5.5rem]";
  const nameSize =
    size === "lead"
      ? "text-[clamp(1.6rem,2.8vw,2.2rem)]"
      : "text-[clamp(1.3rem,2.2vw,1.7rem)]";

  return (
    <article className="flex flex-col gap-7">
      <div className="flex items-center gap-6">
        <div
          className={`flex shrink-0 items-center justify-center rounded-[1rem] border border-paper/15 bg-paper/[0.04] font-display font-medium leading-none text-paper backdrop-blur ${initialsSize}`}
          aria-hidden
        >
          {doctor.initials}
        </div>
        <div>
          <p className="label tnum text-magenta-soft">{doctor.years} · in practice</p>
          <h3 className={`mt-2 font-display ${nameSize} font-medium leading-[1.05] tracking-[-0.018em] text-paper`}>
            {doctor.name}
          </h3>
          <p className="mt-1 text-sm text-paper/65">{doctor.role}</p>
        </div>
      </div>
      <p className="max-w-[52ch] text-pretty text-[1rem] leading-[1.6] text-paper/80">
        {doctor.bio}
      </p>
      <p className="label tnum text-paper/50">{doctor.qualifications}</p>
    </article>
  );
}
