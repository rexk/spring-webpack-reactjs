// Dev Mode Webpack Configuration
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/main/js/mountApp'
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.less$/,
      loader: 'style!css!less!autoprefixer'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
