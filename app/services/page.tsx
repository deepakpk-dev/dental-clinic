import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Orthodontics, dental implants, root canal, children's dentistry, cosmetic dentistry and general checkups at Aura Dental Care, Ottapalam.",
};

export default function ServicesPage() {
  return (
    <StubPage
      eyebrow="Services"
      title="Detailed service pages — coming soon"
      description="We're putting together rich pages for each treatment, with what to expect, who it's for, and honest pricing. In the meantime, you can book any service from the home page."
    />
  );
}
