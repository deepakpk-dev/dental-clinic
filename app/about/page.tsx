import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team and the philosophy behind Aura Dental Care, a modern dental clinic in Ottapalam, Kerala.",
};

export default function AboutPage() {
  return (
    <StubPage
      eyebrow="About"
      title="The story of Aura — coming soon"
      description="Our team, our values, and the small everyday choices that make a clinic feel like a clinic patients actually look forward to."
    />
  );
}
