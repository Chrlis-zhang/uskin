var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.output.filename = '[name].js';

config.module = {
  loaders: [{
    test: /\.js|jsx$/,
    exclude: /node_modules|__tests__/,
    loader: 'babel-loader',
    query: {
      cacheDirectory: true
    }
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }, {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
    )
  }, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'css?sourceMap&-minimize!' + 'autoprefixer-loader'
    )
  }, {
    test: /\.(woff|svg|eot|ttf)\??.*$/,
    loader: 'url?limit=1000&name=../css/fonts/[hash:8].icon.[ext]'
  }]
};

config.plugins = [
  new ExtractTextPlugin('../css/uskin.min.css')
];

module.exports = config;