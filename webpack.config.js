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
    angular: {
      root: 'angular',
      commonjs2: 'angular',
      commonjs: 'angular',
      amd: 'angular'
    }
  }],
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [{
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
