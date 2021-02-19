const path = require('path');

// This will give us the path to the current location on our machine
// console.log(__dirname)
// This will give us the actual path that we want (webpack can't read the path as it is)
// console.log(path.join(__dirname, 'public'))

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
