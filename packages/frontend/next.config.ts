import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,  // Will allow builds to pass despite ESLint issues
  },
};

export default nextConfig;
