/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["preview.bit68.com"],
  },
};

module.exports = nextConfig;
