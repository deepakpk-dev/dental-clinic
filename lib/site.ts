// Single source of truth for clinic info. Update these to swap real numbers / hours / address.

export const site = {
  name: "Aura Dental Care",
  tagline: "Smiles crafted with care, in the heart of Ottapalam",
  description:
    "Aura Dental Care is a modern dental clinic in Ottapalam, Kerala, offering orthodontics, implants, root canal, children's dentistry and cosmetic care. Open 7 days a week with same-week appointments.",
  url: "https://auradentalcare.example.com", // replace with real domain when issued
  locale: "en-IN",
  address: {
    street: "Asco Plaza",
    locality: "East Ottapalam",
    region: "Kerala",
    postalCode: "679101",
    country: "IN",
    full: "Asco Plaza, East Ottapalam, Kerala 679101, India",
  },
  geo: {
    // Approximate Ottapalam coords; update with exact clinic geocode later
    latitude: 10.7706,
    longitude: 76.3787,
  },
  // Primary line receives WhatsApp bookings. Both shown for calls.
  phones: {
    primaryDisplay: "+91 92078 444 57",
    primaryE164: "+919207844457",
    primaryWa: "919207844457",
    secondaryDisplay: "+91 92078 444 58",
    secondaryE164: "+919207844458",
  },
  email: "auradentalcareotp@gmail.com",
  hours: {
    label: "9:30 am – 7:00 pm · Open all 7 days",
    structured: [
      { day: "Mo-Su", opens: "09:30", closes: "19:00" },
    ],
  },
  social: {
    instagram: "https://instagram.com/auradentalcareotp",
    facebook: "https://facebook.com/auradentalcareotp",
    google:
      "https://www.google.com/maps/search/?api=1&query=Aura+Dental+Care+Ottapalam",
  },
  mapEmbed:
    // Generic Ottapalam map; replace with exact clinic embed once Place ID is known
    "https://www.google.com/maps?q=Asco+Plaza+East+Ottapalam+Kerala&output=embed",
};

export type ServiceKey =
  | "orthodontics"
  | "implants"
  | "root-canal"
  | "childrens"
  | "cosmetic"
  | "general";

export type Service = {
  key: ServiceKey;
  title: string;
  short: string;
  blurb: string;
  // Lucide icon name string, resolved in the component
  icon:
    | "Smile"
    | "Sparkles"
    | "ShieldCheck"
    | "Baby"
    | "Stethoscope"
    | "HeartPulse";
  bookingLabel: string;
};

export const services: Service[] = [
  {
    key: "orthodontics",
    title: "Orthodontics",
    short: "Braces & aligners",
    blurb:
      "Correction of crooked teeth with metal, ceramic and clear aligners, designed to fit your lifestyle.",
    icon: "Smile",
    bookingLabel: "Orthodontics, Braces / Aligners",
  },
  {
    key: "implants",
    title: "Implantology",
    short: "Permanent tooth replacement",
    blurb:
      "Single, multiple and full-arch implants, restoring your bite with titanium-grade durability.",
    icon: "ShieldCheck",
    bookingLabel: "Dental Implants",
  },
  {
    key: "root-canal",
    title: "Root Canal",
    short: "Painless endodontics",
    blurb:
      "Modern, single-visit root canals using rotary endodontics, saving teeth that used to mean extraction.",
    icon: "HeartPulse",
    bookingLabel: "Root Canal Treatment",
  },
  {
    key: "childrens",
    title: "Children's Dentistry",
    short: "Gentle paediatric care",
    blurb:
      "A friendly, fear-free experience built for little ones, from first-tooth checkups to early orthodontics.",
    icon: "Baby",
    bookingLabel: "Children's Dentistry",
  },
  {
    key: "cosmetic",
    title: "Cosmetic Dentistry",
    short: "Veneers, whitening, smile design",
    blurb:
      "Whitening, veneers and full smile makeovers, designed in 3D before a single tooth is touched.",
    icon: "Sparkles",
    bookingLabel: "Cosmetic / Smile Design",
  },
  {
    key: "general",
    title: "General Checkup",
    short: "Cleanings & consultations",
    blurb:
      "Routine cleanings, scaling, fillings and oral health screenings. Twice-yearly visits help prevent emergencies.",
    icon: "Stethoscope",
    bookingLabel: "General Checkup / Cleaning",
  },
];

export const timeSlots = [
  { value: "morning", label: "Morning (9:30 – 12:00)" },
  { value: "afternoon", label: "Afternoon (12:00 – 4:00)" },
  { value: "evening", label: "Evening (4:00 – 7:00)" },
] as const;

export type TimeSlotValue = (typeof timeSlots)[number]["value"];
