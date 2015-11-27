var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./app.js'],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css', '.scss'],
  },

  module: {
    loaders: [
      { test: /\.js/, loader: 'babel?cacheDirectory', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'] },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
};
