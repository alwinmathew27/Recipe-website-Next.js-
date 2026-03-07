// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;