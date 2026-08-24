import { cn } from "@/lib/utils";

type LogoProps = { className?: string; withWordmark?: boolean; invert?: boolean };

export function Logo({ className, withWordmark = true, invert = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 42 42" aria-hidden className="h-9 w-9 shrink-0">
        <rect width="42" height="42" rx="13" fill={invert ? "oklch(95% 0.018 67)" : "oklch(29% 0.095 315)"} />
        <path d="M21 9.5c-4.5 0-7.4 2.7-11 2.7.5 5.2 2.1 8.6 3.5 12.1 1.8 4.4 2.8 8.2 5.2 8.2 1.6 0 1.2-6.2 2.3-6.2s.7 6.2 2.3 6.2c2.4 0 3.4-3.8 5.2-8.2 1.4-3.5 3-6.9 3.5-12.1-3.6 0-6.5-2.7-11-2.7Z" fill={invert ? "oklch(29% 0.095 315)" : "oklch(95% 0.018 67)"} />
        <path d="M14.5 17.7c4.6 1.8 8.5 1.8 13 0" fill="none" stroke={invert ? "oklch(58% 0.16 28)" : "oklch(79% 0.085 38)"} strokeLinecap="round" strokeWidth="1.5" />
      </svg>
      {withWordmark && (
        <div className={cn("leading-none", invert ? "text-paper" : "text-ink")}>
          <span className="block text-[1rem] font-semibold tracking-[-0.045em]">Aura</span>
          <span className={cn("mt-1 block text-[0.63rem] font-medium tracking-[0.08em]", invert ? "text-paper/60" : "text-ink-mute")}>DENTAL CARE</span>
        </div>
      )}
      <span className="sr-only">Aura Dental Care</span>
    </div>
  );
}
