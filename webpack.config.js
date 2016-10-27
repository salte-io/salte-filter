var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './salte-filter.module.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'salte-filter.js',
    sourceMapFilename: '[file].map',
    library: 'salte-filter',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [{
    angular: 'angular'
  }],
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'ng-annotate?map=false!babel'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html'
    }]
  }
};
