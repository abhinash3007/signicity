import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder stock photography. Replace with local images in /public when real photos are ready.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
