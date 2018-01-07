const path = require('path');
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  const extractSass = new ExtractTextPlugin({
      filename: options.cssFileName,
      disable: options.environment === "development"
    }),
    webpackConfig = {
      entry: {
        index: ['babel-polyfill', path.resolve('./src/index.jsx')]
      },
      output: {
        filename: options.bundleFileName,
        path: path.resolve('./dist')
      },
      module: {
        loaders: [{
          test: /.jsx?$/,
          include: path.resolve('./src/'),
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }],
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve('./assets/index.html'),
        }),
      ]
    };

    if (options.environment === 'development') {
      console.log('true')
      webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        extractSass
      );
      
      webpackConfig.devServer = {
        contentBase: path.resolve('./dist'),
        publicPath: '/',
        hot: true,
        port: options.port,
        inline: true
      };
    } else {
      // production stuff
    }
  
  return webpackConfig;
};
