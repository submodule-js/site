const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
module.exports = withNextra({
  basePath: '/site',
  images: {
    unoptimized: true,
  },
})