import { site, timeSlots, services } from "./site";
import type { BookingInput } from "./validations";

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function slotLabel(value: string) {
  return timeSlots.find((s) => s.value === value)?.label ?? value;
}

function serviceLabel(value: string) {
  return services.find((s) => s.key === value)?.bookingLabel ?? value;
}

export function buildBookingMessage(input: BookingInput): string {
  const lines = [
    "Hi Aura Dental Care! I'd like to book an appointment.",
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Service: ${serviceLabel(input.service)}`,
    `Preferred: ${formatDate(input.date)} (${slotLabel(input.slot)})`,
    `Notes: ${input.notes?.trim() ? input.notes.trim() : "None"}`,
    "",
    "(Sent from auradentalcare.com)",
  ];
  return lines.join("\n");
}

export function buildWhatsappUrl(input: BookingInput): string {
  const text = encodeURIComponent(buildBookingMessage(input));
  return `https://wa.me/${site.phones.primaryWa}?text=${text}`;
}

export function quickWhatsappUrl(message: string): string {
  return `https://wa.me/${site.phones.primaryWa}?text=${encodeURIComponent(
    message,
  )}`;
}
