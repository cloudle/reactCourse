module.exports = {
  entry: "./app/config/routes.js",
  output: {
    filename: "public/bundle.js"
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};