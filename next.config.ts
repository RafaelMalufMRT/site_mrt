import type { NextConfig } from "next";

const noCacheHeaders = [
  {
    key: "Cache-Control",
    value: "no-cache, max-age=0, must-revalidate",
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    const iconFiles = [
      "/favicon.ico",
      "/favicon.svg",
      "/favicon-16x16.png",
      "/favicon-32x32.png",
      "/apple-touch-icon.png",
      "/android-chrome-192x192.png",
      "/android-chrome-512x512.png",
      "/site.webmanifest",
    ];

    return [
      ...iconFiles.map((source) => ({
        source,
        headers: noCacheHeaders,
      })),
      {
        source:
          "/((?!_next/static|_next/image|favicon.ico|favicon.svg|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2)$).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
