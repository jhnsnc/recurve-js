const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: [
    './src/recurve.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'recurve.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
        query: {
          presets: ['es2015', 'stage-1']
        },
      }
    ]
  },
};
