"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { href: "/#services", label: "Treatments" },
  { href: "/#experience", label: "Our approach" },
  { href: "/#visit", label: "Visit" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const focusFrame = open
      ? window.requestAnimationFrame(() => firstLinkRef.current?.focus())
      : undefined;
    return () => {
      if (focusFrame !== undefined) window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab" && drawerRef.current) {
        const drawerItems = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        );
        const focusable = [toggleRef.current, ...drawerItems].filter(
          (item): item is HTMLElement => item !== null,
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() { setOpen(false); }
  const overDarkHero = pathname === "/" && !scrolled && !open;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", overDarkHero ? "border-paper/20 bg-transparent" : "border-line-soft bg-paper/95 shadow-[0_12px_40px_-28px_oklch(19%_0.032_315/0.45)] backdrop-blur")}>
      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 md:px-9 lg:px-12">
        <Link href="/" aria-label="Aura Dental Care home" tabIndex={open ? -1 : undefined}><Logo invert={overDarkHero} /></Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors", overDarkHero ? "text-paper/75 hover:text-paper" : "text-ink-soft hover:text-ink")}>{link.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${site.phones.primaryE164}`} aria-label={`Call ${site.name}`} className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors", overDarkHero ? "border-paper/25 text-paper hover:bg-paper/10" : "border-line text-ink hover:bg-paper-warm")}><Phone className="h-4 w-4" /></a>
          <Link href="/#book" className={cn("inline-flex min-h-11 items-center rounded-full px-6 text-sm font-semibold transition-colors", overDarkHero ? "bg-paper text-purple hover:bg-paper-warm" : "bg-purple text-paper hover:bg-purple-mid")}>Book a visit</Link>
        </div>

        <button ref={toggleRef} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden", overDarkHero ? "text-paper" : "text-ink")}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div ref={drawerRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site menu" inert={!open ? true : undefined} className={cn("absolute inset-x-0 top-full h-[calc(100svh-76px)] overflow-y-auto bg-paper px-5 pt-8 transition-all duration-300 md:hidden", open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0")}>
        <nav aria-label="Mobile navigation" className="mx-auto max-w-lg">
          {links.map((link, index) => (
            <Link key={link.href} ref={index === 0 ? firstLinkRef : undefined} href={link.href} onClick={close} className="flex min-h-16 items-center justify-between border-b border-line-soft text-2xl font-medium tracking-[-0.04em] text-ink">
              {link.label}<span className="text-base text-ink-faint">0{index + 1}</span>
            </Link>
          ))}
          <Link href="/#book" onClick={close} className="mt-8 flex min-h-14 items-center justify-center rounded-full bg-purple px-6 font-semibold text-paper">Book a visit</Link>
          <a href={`tel:${site.phones.primaryE164}`} className="mt-4 flex min-h-12 items-center justify-center gap-2 text-sm font-medium text-ink-soft"><Phone className="h-4 w-4" />{site.phones.primaryDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
