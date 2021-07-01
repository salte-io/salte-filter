module.exports = {
  output: {
    pathinfo: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules\/(?!chai)/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }]
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: false
  }
};
