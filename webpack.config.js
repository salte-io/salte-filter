const path = require('path');
const webpack = require('webpack');
const deindent = require('deindent');
const packageJson = require('./package.json');
const { argv: args } = require('yargs');

const isProd = args.mode === 'production';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'salte-filter': ['./salte-filter.module.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].min.js' : '[name].js',
    sourceMapFilename: '[file].map',
    library: 'salte-filter',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'angular': 'angular'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }]
  },
  optimization: {
    minimize: isProd ? true : false
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: deindent(`
        /**
         * ${packageJson.name} JavaScript Library v${packageJson.version}
         *
         * @license MIT (https://github.com/salte-io/salte-auth/blob/main/LICENSE)
         *
         * Made with ♥ by ${packageJson.contributors.join(', ')}
         */
      `).trim(),
      raw: true
    })
  ]
};
