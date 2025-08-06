import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:['cdn-icons-png.flaticon.com']
  },
  // Enable standalone output for Docker
  output: 'standalone'
};

export default nextConfig;
