/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
    app: true,
  },
  output: "export",
};

module.exports = nextConfig;
