const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'
const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: isProd ? 'https://mmenu-cms.netlify.app' : 'http://localhost:3000',
  pagesDirectory: __dirname + "/.next/server/pages",
  targetDirectory : 'public/static/',
  ignoredPaths: ['products/item/[slug]'],
  ignoredExtensions: ["js", "map"],
  changefreq: "",
  priority: "",
});

module.exports = withPlugins(
  [
    [optimizedImages],
    [withPWA({
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    },
  )],{
    webpack: (configuration) => {
      configuration.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      })
      return configuration
    },
  }
])
