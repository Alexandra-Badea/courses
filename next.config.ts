import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A static site (the `out` folder): no server needed, works on Vercel, Cloudflare or any host
  output: "export",
  // /ro/ and /en/ become folders with an index.html, which every static host serves
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // One 404 page for the whole site: each language has its own root layout, so there's no
    // shared layout to build it from (see app/global-not-found.tsx)
    globalNotFound: true,
  },
};

export default nextConfig;
