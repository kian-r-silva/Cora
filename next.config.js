/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript checks during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow external images
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
