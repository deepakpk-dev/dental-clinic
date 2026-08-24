import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { InteriorPage } from "@/components/interior-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Aura Dental Care at Asco Plaza, East Ottapalam. Call, WhatsApp or visit us.",
};

export default function ContactPage() {
  return (
    <InteriorPage
      eyebrow="Visit Aura"
      title="Easy to find. Easy to reach."
      description="Call, message, or visit the clinic in East Ottapalam. We are open every day and confirm appointment requests during business hours."
    >
      <div className="grid overflow-hidden rounded-card border border-line lg:grid-cols-12">
        <div className="bg-purple p-7 text-paper md:p-12 lg:col-span-5 lg:p-14">
          <h2 className="font-display text-4xl font-medium tracking-[-0.04em]">Plan your visit</h2>
          <div className="mt-10 space-y-8">
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Address">
              <a href={site.social.google} target="_blank" rel="noreferrer" className="hover:text-paper">{site.address.full}</a>
            </ContactRow>
            <ContactRow icon={<Clock3 className="h-5 w-5" />} label="Hours">{site.hours.label}</ContactRow>
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Call">
              <a href={`tel:${site.phones.primaryE164}`} className="hover:text-paper">{site.phones.primaryDisplay}</a><br />
              <a href={`tel:${site.phones.secondaryE164}`} className="hover:text-paper">{site.phones.secondaryDisplay}</a>
            </ContactRow>
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
              <a href={`mailto:${site.email}`} className="break-all hover:text-paper">{site.email}</a>
            </ContactRow>
          </div>
        </div>
        <div className="min-h-[480px] bg-paper-warm lg:col-span-7">
          <iframe src={site.mapEmbed} title="Map showing Aura Dental Care in East Ottapalam" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[480px] w-full border-0" />
        </div>
      </div>
    </InteriorPage>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1.5rem_1fr] gap-4">
      <span className="text-magenta-soft">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">{label}</p>
        <div className="mt-2 leading-7 text-paper/75">{children}</div>
      </div>
    </div>
  );
}
