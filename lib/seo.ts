import { site } from "./site";

export function dentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    image: `${site.url}/og-image.png`,
    "@id": site.url,
    url: site.url,
    telephone: site.phones.primaryE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: ["Ottapalam", "Palakkad", "Shoranur", "Kerala"],
    openingHoursSpecification: site.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [site.social.instagram, site.social.facebook, site.social.google],
    priceRange: "₹₹",
  };
}
