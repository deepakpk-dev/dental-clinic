import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { site } from "@/lib/site";

const reassurance = [
  "We respond within business hours, every single day.",
  "No payment, no commitment until you sit in the chair.",
  "Reschedule any time on the same WhatsApp thread.",
];

export function Booking() {
  return (
    <section
      id="book"
      aria-label="Book an appointment"
      className="relative scroll-mt-24 bg-paper-cool py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="label">Chapter 06 · Book in 30 seconds</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
              Tell us when. We&rsquo;ll do the rest on{" "}
              <em className="italic text-magenta">WhatsApp</em>.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-pretty text-[1rem] leading-[1.55] text-ink-soft">
              Fill the form, hit submit, and WhatsApp opens with your details ready to send.
              A real human at Aura confirms within business hours.
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-12 lg:gap-16">
          <Reveal className="md:col-span-5">
            <ol className="space-y-7 border-t border-line pt-8">
              {reassurance.map((r, i) => (
                <li key={r} className="grid grid-cols-12 items-baseline gap-3">
                  <span className="label tnum text-ink-faint col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="col-span-10 text-pretty text-[1.05rem] leading-[1.5] text-ink">
                    {r}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-7 border-t border-line pt-8">
              <Detail label="Address">
                {site.address.street}, {site.address.locality}<br />
                {site.address.region} {site.address.postalCode}
              </Detail>
              <Detail label="Hours">{site.hours.label}</Detail>
              <Detail label="Phone">
                <a
                  href={`tel:${site.phones.primaryE164}`}
                  className="tnum underline-offset-4 hover:underline"
                >
                  {site.phones.primaryDisplay}
                </a>{" "}
                <span className="text-ink-faint">·</span>{" "}
                <a
                  href={`tel:${site.phones.secondaryE164}`}
                  className="tnum underline-offset-4 hover:underline"
                >
                  {site.phones.secondaryDisplay}
                </a>
              </Detail>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-line">
              <iframe
                title="Aura Dental Care location"
                src={site.mapEmbed}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[20%]"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={120}>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 items-baseline gap-3">
      <p className="label tnum col-span-3 text-ink-faint">{label}</p>
      <p className="col-span-9 text-[0.98rem] leading-[1.5] text-ink">{children}</p>
    </div>
  );
}
