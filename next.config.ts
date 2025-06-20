import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coopportal.micmacapp.com",
        port: "",
        pathname: "/Adminfolder/Trading/products/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
