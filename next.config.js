const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

const nextConfig = {
  trailingSlash:true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
};

module.exports = withPlugins([withCSS, withSass, withImages], nextConfig);
