var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "#eval-source-map",
  entry: [
    'webpack-dev-server/client?http://localhost:3005',
    'webpack/hot/dev-server',
    "./app/entry"
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: 'http://localhost:3005/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|build)/
      }, {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      }
    ]
  }
};