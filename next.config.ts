import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://blog.tuanitpro.com/**')],
  },
};

export default nextConfig;
