import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // disable Turbopack to avoid the 'to' argument error
  },
};

export default nextConfig;
