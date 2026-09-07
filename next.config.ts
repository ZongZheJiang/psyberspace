//next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Corrected the misspelled slug; keep old links working.
      {
        source: "/about/intern_dominika_urbanika",
        destination: "/about/intern_dominika_urbaniak",
        permanent: true,
      },
    ]
  },
  /* config options here */
};

export default nextConfig;