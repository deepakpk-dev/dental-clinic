import type { Metadata } from "next";
import Image from "next/image";
import { InteriorPage } from "@/components/interior-page";
import consultationImage from "@/public/images/aura-consultation.png";
import suiteImage from "@/public/images/aura-treatment-suite.png";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of the Aura Dental Care clinic, treatment rooms, and patient smile transformations.",
};

export default function GalleryPage() {
  return (
    <InteriorPage
      eyebrow="Inside Aura"
      title="Designed to put you at ease."
      description="A quiet, considered setting for clear conversations and precise treatment."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <figure className="lg:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-card">
            <Image src={suiteImage} alt="Aura Dental Care treatment suite" fill placeholder="blur" sizes="(min-width: 1024px) 67vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-4 text-sm text-ink-soft">The treatment suite · calm, bright, and carefully equipped</figcaption>
        </figure>
        <figure className="lg:col-span-4 lg:pt-32">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image src={consultationImage} alt="A patient consultation at Aura Dental Care" fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-4 text-sm text-ink-soft">Every visit begins with a conversation</figcaption>
        </figure>
      </div>
    </InteriorPage>
  );
}
