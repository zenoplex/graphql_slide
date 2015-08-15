/* eslint-disable no-var */
var webpack = require('webpack');
var webpackModules = require('./webpack.module');
var path = require('path');
var config = require('./gulp/config');

module.exports = {
  entry:   {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server',
      config.src.js.main
    ]
  },
  output:  {
    path:       path.join(__dirname, config.dist.js),
    filename:   '[name].bundle.js',
    publicPath: '/js/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module:  webpackModules
};
