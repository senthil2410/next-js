import withBundleAnalyzer from '@next/bundle-analyzer';
import { NextConfig } from 'next';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.vecteezy.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
    

  },
  
};

export default bundleAnalyzer(nextConfig);
