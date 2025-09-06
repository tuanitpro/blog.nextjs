import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [new URL("https://blog.tuanitpro.com/**")],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
