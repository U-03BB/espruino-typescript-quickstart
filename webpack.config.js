const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Package = require('./package.json');

module.exports = {
  entry: [
    './polyfills/promise.js',
    './src/app.ts'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: Package.name + '.app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: false // Disable name mangling to avoid this issue: https://github.com/espruino/Espruino/issues/1367
        },
        sourceMap: true
      })
    ]
  },
  resolve: {
    extensions: ['.ts'],
    modules: ['src']
  },
};