"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { site } from "@/lib/site";
import { MagneticButton } from "@/components/magnetic-button";

/**
 * Hero — editorial spread, sized to the viewport.
 *
 * The section locks to roughly the visible fold (min-h-[100svh]) and
 * uses a flex column to distribute dateline / headline / image so the
 * key content sits above the fold on a 1080p monitor without forcing
 * a long scroll. Type cap reduced from 7.6rem (way too large) to 4.5rem.
 */
export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-dateline", { y: 12, opacity: 0 });
      gsap.set(".hero-word", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-fade", { y: 16, opacity: 0 });
      gsap.set(".hero-image", { scale: 1.06, opacity: 0 });
      gsap.set(".hero-rule", { scaleX: 0, transformOrigin: "0 50%" });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-dateline", { y: 0, opacity: 1, duration: 0.7, delay: 0.05 })
        .to(".hero-rule", { scaleX: 1, duration: 0.9, ease: "power3.out" }, "-=0.3")
        .to(".hero-word", { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.05 }, "-=0.5")
        .to(".hero-fade", { y: 0, opacity: 1, duration: 0.85, stagger: 0.08 }, "-=0.6")
        .to(".hero-image", { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=1.0");
    }, root);

    return () => ctx.revert();
  }, []);

  // Two-line headline keeps the page above the fold.
  const lineOne = ["Smiles", "crafted", "with", "care,"];
  const lineTwo = ["in", "the", "heart", "of", "Ottapalam."];

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <section
      ref={root}
      aria-label="Aura Dental Care"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-paper pt-24 pb-10 md:pt-28 md:pb-12"
    >
      {/* Background washes */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-[0.4]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-12%] -z-10 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, oklch(78% 0.13 305 / 0.55), transparent 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[-12%] -z-10 h-[380px] w-[380px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, oklch(82% 0.10 5 / 0.30), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 md:px-10">
        {/* Dateline */}
        <div className="hero-dateline mb-6 flex items-baseline justify-between gap-6 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-magenta" aria-hidden />
            <p className="label text-ink-soft">Vol. 01 · Ottapalam, Kerala</p>
          </div>
          <p className="label hidden text-ink-soft sm:block tnum">{today}</p>
        </div>

        {/* Main grid — fills remaining space */}
        <div className="grid flex-1 items-center gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Headline column */}
          <div className="md:col-span-7 lg:col-span-7">
            <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.025em] text-ink">
              <span className="block">
                {lineOne.map((w, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom pr-[0.16em]"
                  >
                    <span
                      className={`hero-word inline-block ${w === "care," ? "italic text-magenta" : ""}`}
                    >
                      {w}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block">
                {lineTwo.map((w, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom pr-[0.16em]"
                  >
                    <span className="hero-word inline-block">{w}</span>
                  </span>
                ))}
              </span>
            </h1>

            <span className="hero-rule mt-6 block h-px w-20 bg-ink/40" aria-hidden />

            <p className="hero-fade mt-6 max-w-[42ch] text-pretty text-[1rem] leading-[1.55] text-ink-soft md:mt-7 md:text-[1.05rem]">
              Modern orthodontics, implants and family dentistry — delivered with the
              gentleness you wish you&rsquo;d had as a child. Book online, get a WhatsApp
              confirmation, walk in to calm.
            </p>

            <div className="hero-fade mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <MagneticButton asChildHref="/#book">
                Book a chair
                <span aria-hidden>→</span>
              </MagneticButton>
              <a
                href={`tel:${site.phones.primaryE164}`}
                className="group inline-flex items-baseline gap-3 py-2 text-sm font-medium text-ink"
              >
                <span className="label text-ink-soft">Or call</span>
                <span className="tnum border-b border-ink/30 transition-colors group-hover:border-ink">
                  {site.phones.primaryDisplay}
                </span>
              </a>
            </div>
          </div>

          {/* Photo column — capped so the hero never gets pushed off-screen */}
          <div className="md:col-span-5 lg:col-span-5">
            <figure className="hero-image relative mx-auto w-full max-w-[440px]">
              <div className="relative aspect-[4/5] max-h-[58vh] overflow-hidden rounded-[1.5rem] bg-paper-deeper">
                <Image
                  src="/images/treatment-room.svg"
                  alt="Aura Dental Care treatment room — soft lavender chair, modern equipment, framed smile prints on the wall"
                  fill
                  priority
                  sizes="(min-width: 768px) 38vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 backdrop-blur">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
                  </span>
                  <span className="label text-ink">Open today</span>
                </div>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs">
                <span className="text-ink-soft">Treatment Room № 1 · East Ottapalam</span>
                <span className="label text-ink-faint tnum">FIG · 01</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Slim metric strip — typographic, fits in the bottom of the fold */}
        <div className="hero-fade mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-4 md:mt-10">
          <Stat label="Smiles served" value="10,000+" />
          <Stat label="Google rating" value="4.9 / 5" />
          <Stat label="Open every" value="Sunday" />
          <Stat label="Confirmation" value="< 2 hrs" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="label whitespace-nowrap">{label}</p>
      <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-none tracking-[-0.02em] text-ink tnum">
        {value}
      </p>
    </div>
  );
}
