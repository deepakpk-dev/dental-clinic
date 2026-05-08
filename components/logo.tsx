import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  invert?: boolean;
};

export function Logo({ className, withWordmark = true, invert = false }: LogoProps) {
  const ink = invert ? "oklch(98.5% 0.006 80)" : "oklch(20% 0.04 305)";
  const purple = invert ? "oklch(98.5% 0.006 80)" : "oklch(35% 0.16 300)";
  const tone = invert ? "oklch(78% 0.10 5)" : "oklch(52% 0.21 5)";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 64" aria-hidden className="h-9 w-9 shrink-0">
        <path
          d="M32 6c-8 0-14 4-19 4-3 0-5-1-5-1s-1 8 3 18c2 5 4 7 6 14 2 6 4 17 8 17 3 0 4-7 4-14 0-3 1-5 3-5s3 2 3 5c0 7 1 14 4 14 4 0 6-11 8-17 2-7 4-9 6-14 4-10 3-18 3-18s-2 1-5 1c-5 0-11-4-19-4z"
          fill={invert ? "oklch(35% 0.16 300 / 0.18)" : "oklch(98.5% 0.006 80)"}
          stroke={purple}
          strokeWidth="1.6"
        />
        <path
          d="M32 16c-4 0-7 2-10 2-2 0-3-0.5-3-0.5s-0.5 4 1.5 9c1 2.5 2 3.5 3 7 1 3 2 9 4 9 1.5 0 2-3.5 2-7 0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 3.5 0.5 7 2 7 2 0 3-6 4-9 1-3.5 2-4.5 3-7 2-5 1.5-9 1.5-9s-1 0.5-3 0.5c-3 0-6-2-10-2z"
          fill={purple}
          opacity="0.85"
        />
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-[1.2rem] font-semibold tracking-[-0.01em]"
            style={{ color: purple }}
          >
            Aura
          </span>
          <span
            className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: tone }}
          >
            Dental Care
          </span>
        </div>
      )}
      <span className="sr-only" style={{ color: ink }}>
        Aura Dental Care
      </span>
    </div>
  );
}
