const webpackConfig = require('../config/webpack.dev.config');

module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        extensions: [...webpackConfig.resolve.extensions]
      },
      module: {
        ...config.module,
        rules: webpackConfig.module.rules
      }
    };
  },
};
