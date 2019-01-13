const defaultConfig = require('ss-clean-webpack/src/webpack.production.babel');

const images = require('./loaderConfigs/images');

const config = (env) => {
  const newConfig = defaultConfig(env);
  newConfig.entry = ['@babel/polyfill', ...newConfig.entry];
  newConfig.module.rules.push(images);
  return newConfig;
};

module.exports = config;
