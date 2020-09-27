const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

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