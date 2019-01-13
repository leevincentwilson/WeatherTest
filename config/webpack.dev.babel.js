const defaultConfig = require('ss-clean-webpack/src/webpack.dev.babel');
const images = require('./loaderConfigs/images');

const config = (env) => {
  const newConfig = defaultConfig(env);
  newConfig.entry = ['@babel/polyfill', ...newConfig.entry];
  newConfig.devServer = {
    ...newConfig.devServer,
    open: true,
  };
  newConfig.module.rules.push(images);
  return newConfig;
};

module.exports = config;
