import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/site";

const explore = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/#book", label: "Book a chair" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative mt-auto text-paper"
      style={{
        background:
          "linear-gradient(180deg, oklch(28% 0.14 295) 0%, oklch(22% 0.10 295) 60%, oklch(18% 0.08 295) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10 md:pt-28">
        {/* Editorial close — large display headline that the page lands on */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label text-paper/60">A note before you go</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-[1] tracking-[-0.022em] text-paper">
              We&rsquo;d rather earn your <em className="font-display italic text-magenta-soft">trust</em>{" "}
              than your <em className="font-display italic text-magenta-soft">click</em>.
            </h2>
            <p className="mt-7 max-w-md text-pretty text-paper/70">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-5 md:pt-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="label text-paper/55">Visit</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/85">
                  {site.address.street},<br />
                  {site.address.locality},<br />
                  {site.address.region} {site.address.postalCode}
                </p>
                <p className="mt-4 text-sm text-paper/65">{site.hours.label}</p>
              </div>
              <div>
                <p className="label text-paper/55">Contact</p>
                <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                  <li>
                    <a
                      href={`tel:${site.phones.primaryE164}`}
                      className="tnum text-paper/85 transition hover:text-paper"
                    >
                      {site.phones.primaryDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.phones.secondaryE164}`}
                      className="tnum text-paper/85 transition hover:text-paper"
                    >
                      {site.phones.secondaryDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-paper/85 transition hover:text-paper"
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-20 mb-8 border-0 h-px bg-paper/15" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo invert />
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {explore.map((l) => (
              <Link key={l.href} href={l.href} className="text-paper/70 transition hover:text-paper">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition hover:bg-paper/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition hover:bg-paper/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M13 22v-8h2.8l.4-3.2H13V8.7c0-.9.3-1.6 1.7-1.6H16V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7V14h2.6v8H13z" />
              </svg>
            </a>
            <a
              href={site.social.google}
              aria-label="Google Maps"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-paper/20 px-4 text-xs text-paper/80 transition hover:bg-paper/10"
            >
              View on Maps →
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="tnum">Designed in Ottapalam · Kerala · IN</p>
        </div>
      </div>
    </footer>
  );
}
