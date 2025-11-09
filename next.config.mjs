/** @type {import(''next'').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['swiper'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
