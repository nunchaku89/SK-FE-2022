const path = require('path');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: path.resolve(process.cwd(), 'src/index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'public'),
    filename: 'js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = devConfig;
