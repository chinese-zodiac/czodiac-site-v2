const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
  trailingSlash:true
};

module.exports = withPlugins([withSass, withImages], nextConfig);
