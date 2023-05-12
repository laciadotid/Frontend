/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  images: {
    unoptimized: true,
    formats: ["image/avif"],
    domains: ["images.ctfassets.net"],
  },
  compress: true,
};

module.exports = nextConfig
