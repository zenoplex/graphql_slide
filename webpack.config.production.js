/* eslint-disable no-var */
var webpack = require('webpack');
var webpackModules = require('./webpack.module');
var path = require('path');
var config = require('./gulp/config');

module.exports = {
  entry:   {
    app: [
      config.src.js.main
    ]
  },
  output:  {
    path:     path.join(__dirname, config.dist.js),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        warnings:     false
      }
    })
  ],
  module:  webpackModules
};
