"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CircleCheck, LoaderCircle, MessageCircle, RotateCcw } from "lucide-react";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { services, timeSlots } from "@/lib/site";
import { cn } from "@/lib/utils";

function todayIso() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.toISOString().split("T")[0];
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState<null | { url: string }>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", service: "", date: "", slot: undefined as unknown as BookingInput["slot"], notes: "" },
    mode: "onTouched",
  });

  useEffect(() => { if (submitted) successHeadingRef.current?.focus(); }, [submitted]);

  function onSubmit(data: BookingInput) {
    const url = buildWhatsappUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted({ url });
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex min-h-[560px] flex-col justify-between rounded-card bg-paper p-7 shadow-soft ring-1 ring-line md:p-11">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success-fg"><CircleCheck className="h-7 w-7" /></div>
          <h3 ref={successHeadingRef} tabIndex={-1} className="font-display mt-8 max-w-[10ch] text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[0.95] text-ink outline-none">One last tap.</h3>
          <p className="mt-5 max-w-[52ch] text-pretty leading-7 text-ink-soft">WhatsApp is open with your appointment details. Tap Send there, and our team will confirm your visit within business hours.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={submitted.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-success-fg px-6 text-sm font-semibold text-paper"><MessageCircle className="h-4 w-4" />Open WhatsApp</a>
          <button type="button" onClick={() => { reset(); setSubmitted(null); }} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold text-ink"><RotateCcw className="h-4 w-4" />Start again</button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="rounded-card bg-paper p-6 shadow-soft ring-1 ring-line md:p-10">
      <div className="mb-8 flex items-center justify-between border-b border-line-soft pb-6">
        <div><p className="text-lg font-semibold tracking-[-0.03em] text-ink">Appointment request</p><p className="mt-1 text-sm text-ink-soft">About 30 seconds</p></div>
        <MessageCircle className="h-5 w-5 text-magenta" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name?.message}>{(a11y) => <input id="name" autoComplete="name" placeholder="Full name" {...register("name")} {...a11y} className={inputClass(Boolean(errors.name))} />}</Field>
        <Field id="phone" label="Mobile number" error={errors.phone?.message}>{(a11y) => <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98xxxxxxxx" {...register("phone")} {...a11y} className={inputClass(Boolean(errors.phone))} />}</Field>
      </div>

      <div className="mt-5"><Field id="service" label="What can we help with?" error={errors.service?.message}>{(a11y) => <select id="service" {...register("service")} {...a11y} className={inputClass(Boolean(errors.service))} defaultValue=""><option value="">Choose a treatment</option>{services.map((service) => <option key={service.key} value={service.key}>{service.bookingLabel}</option>)}</select>}</Field></div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="date" label="Preferred date" error={errors.date?.message}>{(a11y) => <input id="date" type="date" min={todayIso()} {...register("date")} {...a11y} className={inputClass(Boolean(errors.date))} />}</Field>
        <Field id="slot" label="Preferred time" error={errors.slot?.message}>{(a11y) => <select id="slot" {...register("slot")} {...a11y} className={inputClass(Boolean(errors.slot))} defaultValue=""><option value="" disabled>Choose a time</option>{timeSlots.map((slot) => <option key={slot.value} value={slot.value}>{slot.label}</option>)}</select>}</Field>
      </div>

      <div className="mt-5"><Field id="notes" label="Anything we should know? (optional)" error={errors.notes?.message}>{(a11y) => <textarea id="notes" rows={3} maxLength={200} placeholder="Pain, anxiety, previous treatment, or anything else" {...register("notes")} {...a11y} className={cn(inputClass(Boolean(errors.notes)), "resize-none")} />}</Field></div>

      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-purple px-7 text-sm font-semibold text-paper transition-colors hover:bg-purple-mid disabled:opacity-60">
        {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
        {isSubmitting ? "Preparing your message" : "Continue in WhatsApp"}
        {!isSubmitting && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-ink-mute">No payment or commitment. You confirm the final time with our team.</p>
    </form>
  );
}

type FieldA11y = { "aria-invalid"?: true; "aria-describedby"?: string };

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: (a11y: FieldA11y) => React.ReactNode }) {
  const errorId = `${id}-error`;
  const a11y: FieldA11y = error ? { "aria-invalid": true, "aria-describedby": errorId } : {};
  return <div><label htmlFor={id} className="block text-sm font-medium text-ink">{label}</label><div className="mt-2">{children(a11y)}</div>{error && <p id={errorId} role="alert" className="mt-2 text-xs font-medium text-magenta">{error}</p>}</div>;
}

function inputClass(hasError: boolean) {
  return cn("min-h-12 w-full rounded-xl border bg-paper-warm/45 px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink-faint focus:bg-paper focus:ring-2", hasError ? "border-magenta focus:border-magenta focus:ring-magenta/15" : "border-line focus:border-purple focus:ring-purple/12");
}
