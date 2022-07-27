const { merge } = require('webpack-merge');
const devConfig = require('./dev');

const serverConfig = {
  devServer: {
    static: ['public'],
    client: {
      overlay: true,
    },
    compress: true,
    host: 'localhost',
    port: 3000,
    open: false,
  },
};

module.exports = merge(devConfig, serverConfig);
