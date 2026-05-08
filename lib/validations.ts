import { z } from "zod";

const indianPhone = /^(?:\+?91[-\s]?)?[6-9]\d{9}$/;

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(indianPhone, "Enter a valid Indian mobile number"),
  service: z.string().min(1, "Pick a service"),
  date: z
    .string()
    .min(1, "Pick a preferred date")
    .refine((v) => {
      const d = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(d.getTime()) && d >= today;
    }, "Please choose today or a future date"),
  slot: z.enum(["morning", "afternoon", "evening"], {
    message: "Pick a time slot",
  }),
  notes: z.string().trim().max(200, "Keep notes under 200 characters").optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
