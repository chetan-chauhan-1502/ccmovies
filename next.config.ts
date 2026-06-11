import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vegamovies.mq",
      },
    ],
  },
};

export default nextConfig;
