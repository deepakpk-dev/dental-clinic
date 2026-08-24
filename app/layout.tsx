import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import { dentistJsonLd } from "@/lib/seo";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"], display: "swap" });

export const viewport: Viewport = { themeColor: "#2c172d", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Modern Dental Care in Ottapalam`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["dentist Ottapalam", "dental clinic Ottapalam", "orthodontist Kerala", "dental implants Palakkad", "root canal Ottapalam", "children dentistry Kerala", "cosmetic dentistry Palakkad", "Aura Dental Care"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: site.locale, url: site.url, siteName: site.name,
    title: `${site.name} | Modern dental care in Ottapalam`, description: site.description,
    images: [{ url: "/images/aura-treatment-suite.png", width: 1536, height: 1024, alt: "A warm, contemporary dental treatment suite at Aura Dental Care" }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/aura-treatment-suite.png"] },
  robots: { index: true, follow: true }, icons: { icon: "/favicon.ico" }, category: "health",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <SmoothScroll />
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd()) }} />
      </body>
    </html>
  );
}
