import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features that don't work with static export
  experimental: {
    esmExternals: false,
  },
  // Ensure proper asset paths for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
