/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tvsnepal.com",
      },
    ],
  },
};

module.exports = nextConfig;
