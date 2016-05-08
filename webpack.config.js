var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  resolve: {
    modulesDirectories: ['node_modules', 'scripts', 'stylesheets'],
    extensions: ['', '.js', '.scss'],
  },
  entry: ['./src/SiteBundle/Resources/public/src/index.js', './src/SiteBundle/Resources/public/styles/main.scss'],
  output: {
    filename: 'src/SiteBundle/Resources/public/src/browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("src/SiteBundle/Resources/public/styles/main.css")
  ]
};
