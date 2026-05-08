import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Aura Dental Care at Asco Plaza, East Ottapalam. Call, WhatsApp or visit us.",
};

export default function ContactPage() {
  return (
    <StubPage
      eyebrow="Contact"
      title="A dedicated contact page is coming"
      description="For now, the fastest path is the booking form on the home page — it routes directly to our WhatsApp."
    />
  );
}
