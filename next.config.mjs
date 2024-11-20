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
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Test for SVG files
        use: ['@svgr/webpack'], // Use SVGR to import as React component
      });
      return config;
    },
  };
  
  export default nextConfig;
  