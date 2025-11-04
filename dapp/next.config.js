/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables available on client side
  env: {
    NEXT_PUBLIC_APP_NAME: 'MeeChain',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },
  
  // Webpack configuration for external modules
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/src',
      '@/external-modules': __dirname + '/../external-modules',
    };
    return config;
  },
  
  // Image optimization
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;

