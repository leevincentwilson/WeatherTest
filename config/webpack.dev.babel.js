const defaultConfig = require('ss-clean-webpack/src/webpack.dev.babel');

const config = (env) => {
  const newConfig = defaultConfig(env);
  newConfig.entry = ['@babel/polyfill', ...newConfig.entry];
  newConfig.devServer = {
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
    port: 8080,
  }
  return newConfig;
};

module.exports = config;
