import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  runtime: "nodejs",
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "84lqzifsyk0p0dtg.public.blob.vercel-storage.com"
      }
    ]
  },
};

export default nextConfig;
