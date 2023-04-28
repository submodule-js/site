const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/site" : "";
 
module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true
})