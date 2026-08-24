import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyAura } from "@/components/sections/why-aura";
import { Doctors } from "@/components/sections/doctors";
import { Booking } from "@/components/sections/booking";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyAura />
      <Doctors />
      <Booking />
      <CtaBanner />
    </>
  );
}
