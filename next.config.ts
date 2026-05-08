import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow inline SVG placeholders during the design draft phase.
    // Once real photography is delivered, this can be turned off.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
