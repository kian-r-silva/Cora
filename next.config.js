/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for FTP deployment
  output: 'export',
  
  // Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable TypeScript checks during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ensure trailing slashes for better compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
