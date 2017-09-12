var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./main.jsx",
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /(node_modules|bower_components)/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1'],
          plugins: [
            'react-html-attrs',
            'add-module-exports',
            'transform-class-properties', 
            'transform-decorators-legacy',
            'transform-async-to-generator'
          ],
        }
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  output: {
    path: __dirname + "/resources/public/js",
    publicPath: "/js/",
    filename: "main.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};