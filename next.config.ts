import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: false, // Enable Vercel's image optimization
  },
  // Enable server-side features for Vercel
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
