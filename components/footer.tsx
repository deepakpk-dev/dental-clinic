import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/lib/site";

const explore = [
  { href: "/#services", label: "Treatments" },
  { href: "/#experience", label: "Our approach" },
  { href: "/#book", label: "Book a visit" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="visit" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1480px] px-5 pb-8 pt-20 md:px-9 md:pt-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo invert />
            <p className="font-display mt-9 max-w-[10ch] text-[clamp(2.4rem,4vw,4.4rem)] font-medium leading-[0.94] text-paper">Modern care. A gentler experience.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="text-sm font-semibold text-paper">Visit Aura</p>
              <address className="mt-5 not-italic leading-7 text-paper/65">{site.address.street}<br />{site.address.locality}, {site.address.region}<br />{site.address.postalCode}</address>
              <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-magenta-soft"><MapPin className="h-4 w-4" />Open in Google Maps</a>
            </div>
            <div>
              <p className="text-sm font-semibold text-paper">Contact</p>
              <div className="mt-5 space-y-2 text-paper/65">
                <a href={`tel:${site.phones.primaryE164}`} className="block transition-colors hover:text-paper tnum">{site.phones.primaryDisplay}</a>
                <a href={`tel:${site.phones.secondaryE164}`} className="block transition-colors hover:text-paper tnum">{site.phones.secondaryDisplay}</a>
                <a href={`mailto:${site.email}`} className="block break-all transition-colors hover:text-paper">{site.email}</a>
              </div>
              <p className="mt-6 text-sm leading-6 text-paper/65">{site.hours.label}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-7 border-t border-paper/15 pt-7 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">{explore.map((link) => <Link key={link.href} href={link.href} className="text-sm text-paper/60 transition-colors hover:text-paper">{link.label}</Link>)}</nav>
          <div className="flex items-center gap-3"><a href={site.social.instagram} aria-label="Aura Dental Care on Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></svg></a><a href={site.social.facebook} aria-label="Aura Dental Care on Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-sm font-semibold text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper">f</a></div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:justify-between"><p>© {year} {site.name}. All rights reserved.</p><p>East Ottapalam, Kerala</p></div>
      </div>
    </footer>
  );
}
