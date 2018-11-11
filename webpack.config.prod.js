const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')
const ENTRY = ['babel-polyfill', path.resolve(__dirname, './src/entry/index.js')]

// Production webpack configuration
const webpackConfig = {
  entry: ENTRY,
  output: {
    path: DIST,
    filename: '[name].[hash].bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: DIST }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.js', 'dist/*.css']),
    new HtmlWebPackPlugin({
      template: './src/entry/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
}

module.exports = webpackConfig
