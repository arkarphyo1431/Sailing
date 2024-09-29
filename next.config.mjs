/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/sailing/' : '',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
