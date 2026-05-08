import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of the Aura Dental Care clinic, treatment rooms, and patient smile transformations.",
};

export default function GalleryPage() {
  return (
    <StubPage
      eyebrow="Gallery"
      title="Smile gallery — coming soon"
      description="Before-and-afters, the clinic in motion, and a few patient celebrations. We're hand-curating the first set."
    />
  );
}
