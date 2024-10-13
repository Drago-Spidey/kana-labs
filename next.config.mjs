/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/kana-labs', // Replace with your repo name
    assetPrefix: '/kana-labs/', // Replace with your repo name
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
    eslint: {
      // This allows production builds to complete even if there are ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  