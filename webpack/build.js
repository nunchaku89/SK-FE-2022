const { merge } = require('webpack-merge');
const devConfig = require('./dev');
const path = require('path');

const buildConfig = {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(process.cwd(), 'public'),
    filename: 'js/main.bundle.min.js',
  },
};

module.exports = merge(devConfig, buildConfig);
