"use client";

import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "ink";
  asChildHref?: string;
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  asChildHref,
  ...rest
}: Props) {
  const inner = useRef<HTMLSpanElement>(null);

  function onMove(e: React.MouseEvent) {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = inner.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  }

  function onLeave() {
    const el = inner.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-[box-shadow,background,color] duration-300";
  const styles =
    variant === "primary"
      ? "bg-purple text-paper hover:bg-purple-mid"
      : variant === "ink"
      ? "bg-paper text-ink hover:bg-paper-deeper"
      : "border border-purple/30 bg-transparent text-purple hover:bg-purple-pale/40";

  const content = (
    <span className="relative inline-flex items-center gap-2" onMouseMove={onMove} onMouseLeave={onLeave}>
      <span ref={inner} className="inline-flex items-center gap-2 transition-transform duration-200 will-change-transform">
        {children}
      </span>
    </span>
  );

  if (asChildHref) {
    return (
      <a href={asChildHref} className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }
  return (
    <button {...rest} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}
