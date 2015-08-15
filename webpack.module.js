/* eslint-disable no-var */
var path = require('path');
var loaders = [
  {
    test: /\.scss$/, loader: 'style!css!sass?' +
  'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
  },
  {test: /\.jsx?$/, loader: 'babel?stage=0', include: path.join(__dirname, './src/js')}
];

module.exports = {
  loaders: loaders
};
