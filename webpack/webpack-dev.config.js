module.exports = require('./webpack.config.js')({
  bundleFileName: '[name].bundle.js',
  cssFileName: '[name].bundle.js',
  environment: 'development',
  port: 3000
});
