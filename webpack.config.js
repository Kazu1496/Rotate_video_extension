// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')

const config = {
  mode: 'production',
  entry: {
    popup: './scripts/popup.js',
    constant: './scripts/constant.js',
    rotate: './scripts/rotate.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config
