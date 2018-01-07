module.exports = require('./webpack.config.js')({
  bundleFileName: '[name].bundle.[hash].js',
  cssFileName: '[name].bundle.[hash].js',
  environment: 'production'
});
