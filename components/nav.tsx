"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const MENU_ID = "mobile-menu";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + focus management
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    // Focus first nav link when drawer opens
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC closes drawer; restore focus to toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    drawer.addEventListener("keydown", onKey);
    return () => drawer.removeEventListener("keydown", onKey);
  }, [open]);

  function closeDrawer() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-line-soft bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Aura Dental Care home"
          className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-purple"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.86rem] font-medium text-ink-soft transition-colors hover:text-purple"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phones.primaryE164}`}
            className="text-[0.86rem] font-medium text-ink-soft transition hover:text-purple tnum"
          >
            {site.phones.primaryDisplay}
          </a>
          <Link
            href="/#book"
            className="group inline-flex items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-purple-mid"
          >
            Book a chair
            <span className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={MENU_ID}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id={MENU_ID}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open ? true : undefined}
        className={cn(
          "fixed inset-x-0 top-[68px] bottom-0 z-40 origin-top transform overflow-y-auto bg-paper transition-all duration-300 md:hidden",
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 pt-8 pb-12" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={l.href}
              onClick={closeDrawer}
              className="group flex items-baseline justify-between gap-4 border-b border-line-soft py-5"
            >
              <span className="font-display text-3xl tracking-[-0.02em] text-ink transition-colors group-hover:text-purple">
                {l.label}
              </span>
              <span className="label tnum">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${site.phones.primaryE164}`}
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-ink-soft tnum"
            >
              {site.phones.primaryDisplay}
            </a>
            <Link
              href="/#book"
              onClick={closeDrawer}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Book a chair →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
