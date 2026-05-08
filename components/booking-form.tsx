"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarDays,
  CircleCheck,
  LoaderCircle,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { services, timeSlots } from "@/lib/site";
import { cn } from "@/lib/utils";

function todayIso() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().split("T")[0];
}

/**
 * Booking form — friendly, brand-coloured.
 *
 * Lavender-trimmed white card with rounded inputs and a brand-purple
 * submit. On success, swaps to a celebratory state with a WhatsApp-green
 * confirmation link so patients see the handoff is complete.
 */
export function BookingForm() {
  const [submitted, setSubmitted] = useState<null | { url: string }>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      date: "",
      slot: undefined as unknown as BookingInput["slot"],
      notes: "",
    },
    mode: "onTouched",
  });

  // Move focus to the success heading so screen readers announce the handoff.
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  function onSubmit(data: BookingInput) {
    const url = buildWhatsappUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted({ url });
  }

  function handleReset() {
    reset();
    setSubmitted(null);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card bg-paper p-8 ring-1 ring-purple-pale shadow-soft md:p-10"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success-fg">
          <CircleCheck className="h-7 w-7" />
        </div>
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="mt-6 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.018em] text-ink outline-none"
        >
          Almost done!
        </h3>
        <p className="mt-3 max-w-[52ch] text-pretty text-[1rem] leading-[1.6] text-ink-soft">
          We&rsquo;ve opened WhatsApp with your appointment details pre-filled. Please tap{" "}
          <strong className="text-ink">Send</strong> in WhatsApp — we&rsquo;ll confirm within
          business hours.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={submitted.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-purple/25 bg-paper px-6 py-3 text-sm font-semibold text-purple transition hover:bg-paper-cool"
          >
            <RotateCcw className="h-4 w-4" /> Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-card bg-paper p-6 ring-1 ring-purple-pale shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name?.message}>
          {(a11y) => (
            <input
              id="name"
              autoComplete="name"
              placeholder="Full name"
              {...register("name")}
              {...a11y}
              className={inputCls(!!errors.name)}
            />
          )}
        </Field>
        <Field id="phone" label="Mobile number" error={errors.phone?.message}>
          {(a11y) => (
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="98xxxxxxxx"
              {...register("phone")}
              {...a11y}
              className={inputCls(!!errors.phone)}
            />
          )}
        </Field>
      </div>

      <Field id="service" label="Service" error={errors.service?.message}>
        {(a11y) => (
          <select
            id="service"
            {...register("service")}
            {...a11y}
            className={inputCls(!!errors.service)}
            defaultValue=""
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.key} value={s.key}>
                {s.bookingLabel}
              </option>
            ))}
          </select>
        )}
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="date" label="Preferred date" error={errors.date?.message}>
          {(a11y) => (
            <div className="relative">
              <input
                id="date"
                type="date"
                min={todayIso()}
                {...register("date")}
                {...a11y}
                className={cn(inputCls(!!errors.date), "pr-10")}
              />
              <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple" />
            </div>
          )}
        </Field>
        <Field id="slot" label="Preferred time" error={errors.slot?.message}>
          {(a11y) => (
            <select
              id="slot"
              {...register("slot")}
              {...a11y}
              className={inputCls(!!errors.slot)}
              defaultValue=""
            >
              <option value="" disabled>
                Pick a slot…
              </option>
              {timeSlots.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      <Field id="notes" label="Notes (optional)" error={errors.notes?.message}>
        {(a11y) => (
          <textarea
            id="notes"
            rows={3}
            maxLength={200}
            placeholder="Anything we should know? (pain, anxiety, prior treatment…)"
            {...register("notes")}
            {...a11y}
            className={cn(inputCls(!!errors.notes), "resize-none")}
          />
        )}
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-purple px-6 py-3.5 text-sm font-semibold text-paper shadow-soft transition hover:shadow-glow disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-purple-mid transition-transform duration-500 group-hover:translate-x-0" />
        <span className="relative inline-flex items-center gap-2">
          {isSubmitting ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <MessageCircle className="h-4 w-4" />
          )}
          {isSubmitting ? "Preparing…" : "Confirm via WhatsApp"}
        </span>
      </button>
      <p className="text-center text-xs text-ink-soft">
        We&rsquo;ll open WhatsApp with your details pre-filled. You just hit send.
      </p>
    </form>
  );
}

type FieldA11y = {
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: (a11y: FieldA11y) => React.ReactNode;
}) {
  const errorId = `${id}-error`;
  const a11y: FieldA11y = error
    ? { "aria-invalid": true, "aria-describedby": errorId }
    : {};
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="mt-2">{children(a11y)}</div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-xs font-medium text-magenta"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition",
    "placeholder:text-ink-faint",
    "focus:border-purple focus:ring-2 focus:ring-purple/15",
    hasError
      ? "border-magenta focus:border-magenta focus:ring-magenta/15"
      : "border-purple-pale",
  );
}
