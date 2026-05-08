import Image from "next/image";
import { Reveal } from "@/components/reveal";

type Tile = {
  src: string;
  alt: string;
  caption: string;
  ratio: "tall" | "square" | "wide";
};

const tiles: Tile[] = [
  { src: "/images/treatment-room.svg", alt: "Treatment room", caption: "Treatment Room № 1", ratio: "tall" },
  { src: "/images/storefront.svg", alt: "Storefront", caption: "Asco Plaza · Front", ratio: "square" },
  { src: "/images/treatment-room.svg", alt: "Chair detail", caption: "Sterilised, daily", ratio: "wide" },
  { src: "/images/storefront.svg", alt: "Reception window", caption: "From the street", ratio: "tall" },
  { src: "/images/treatment-room.svg", alt: "Lounge", caption: "Calm waiting", ratio: "square" },
  { src: "/images/storefront.svg", alt: "Signage", caption: "Look up · second floor", ratio: "wide" },
];

const ratioClass: Record<Tile["ratio"], string> = {
  tall: "h-[420px] w-[280px] md:h-[460px] md:w-[300px]",
  square: "h-[340px] w-[340px] md:h-[380px] md:w-[380px]",
  wide: "h-[280px] w-[460px] md:h-[300px] md:w-[500px]",
};

export function GalleryMarquee() {
  const loop = [...tiles, ...tiles];
  return (
    <section
      aria-label="Inside Aura"
      className="relative overflow-hidden bg-paper py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label">Chapter 04 · A walk through</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
              A clinic that doesn&rsquo;t <em className="italic text-magenta">look</em> like one.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-pretty text-[1rem] leading-[1.55] text-ink-soft">
              35mm-style stills from inside the practice. Real photography replaces these
              illustrations once we&rsquo;re in.
            </p>
          </div>
        </header>
      </div>

      <Reveal>
        <div className="mt-16 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="flex w-max animate-marquee items-end gap-6 px-6 md:gap-8">
            {loop.map((t, i) => (
              <figure
                key={i}
                className={`relative shrink-0 overflow-hidden rounded-[1.25rem] bg-paper-deeper ${ratioClass[t.ratio]}`}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="500px"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between gap-3 rounded-md bg-paper/85 px-3 py-1.5 text-[0.75rem] backdrop-blur">
                  <span className="font-medium text-ink">{t.caption}</span>
                  <span className="label tnum text-ink-faint">
                    {String((i % tiles.length) + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
