import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'learn-plus-bucket1.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'learn-plus-bucket1.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
