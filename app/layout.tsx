import type { Metadata, Viewport } from "next";
import { Alegreya, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import { dentistJsonLd } from "@/lib/seo";

// Display: humanist serif with literary warmth and a distinctive italic.
// Chosen over the reflex Fraunces / Newsreader / Cormorant set —
// reads closer to a print magazine than a SaaS landing page.
const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Body: humanist sans, slightly characterful. Quietly distinctive
// next to the serif headlines without competing with them.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fff9f0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Modern Dental Care in Ottapalam, Kerala`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "dentist Ottapalam",
    "dental clinic Ottapalam",
    "orthodontist Kerala",
    "dental implants Palakkad",
    "root canal Ottapalam",
    "children dentistry Kerala",
    "cosmetic dentistry Palakkad",
    "Aura Dental Care",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Modern dental care in Ottapalam`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Asco Plaza, East Ottapalam`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <SmoothScroll />
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd()) }}
        />
      </body>
    </html>
  );
}
