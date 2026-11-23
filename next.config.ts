import type { NextConfig } from "next";

/**
 * Static export: the site has no server-side features, so `next build` writes
 * plain HTML/CSS/JS to `out/`. That folder deploys as-is to Vercel and to
 * Hostinger (Apache). `trailingSlash` emits /about/index.html so clean URLs
 * work on Apache without rewrite rules.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
