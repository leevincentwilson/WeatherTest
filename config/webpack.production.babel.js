const defaultConfig = require('ss-clean-webpack/src/webpack.production.babel');

const config = (env) => {
  const newConfig = defaultConfig(env);
  newConfig.entry = ['@babel/polyfill', ...newConfig.entry];
  return newConfig;
};

module.exports = config;
