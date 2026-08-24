import { Clock3, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { site } from "@/lib/site";

export function Booking() {
  return (
    <section id="book" aria-labelledby="booking-title" className="bg-paper-cool py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-9 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-sm font-medium text-magenta">Your first visit</p>
            <h2 id="booking-title" className="font-display mt-5 max-w-[10ch] text-balance text-[clamp(2.8rem,5.3vw,5.5rem)] font-medium leading-[0.92] text-ink">Ready when you are.</h2>
            <p className="mt-7 max-w-[46ch] text-pretty text-lg leading-8 text-ink-soft">Choose a preferred day and time. WhatsApp opens with your details ready to send, then our team confirms the appointment.</p>
          </Reveal>

          <Reveal delay={80} className="mt-12 border-t border-line">
            <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="group flex gap-4 border-b border-line py-6">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-magenta" />
              <div><p className="font-semibold text-ink">Asco Plaza, East Ottapalam</p><p className="mt-1 text-sm leading-6 text-ink-soft">{site.address.region} {site.address.postalCode}. Open in Google Maps.</p></div>
            </a>
            <div className="flex gap-4 border-b border-line py-6"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-magenta" /><div><p className="font-semibold text-ink">Open all seven days</p><p className="mt-1 text-sm leading-6 text-ink-soft">9:30 am to 7:00 pm, including Sundays.</p></div></div>
            <a href={`tel:${site.phones.primaryE164}`} className="flex gap-4 border-b border-line py-6"><Phone className="mt-1 h-5 w-5 shrink-0 text-magenta" /><div><p className="font-semibold text-ink tnum">{site.phones.primaryDisplay}</p><p className="mt-1 text-sm leading-6 text-ink-soft">Prefer to speak to someone? Call the clinic.</p></div></a>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7"><BookingForm /></Reveal>
      </div>
    </section>
  );
}
