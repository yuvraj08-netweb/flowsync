import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    // domains: ["cdn.simpleicons.org"], // Allow external images from SimpleIcons
  },
};

export default nextConfig;
