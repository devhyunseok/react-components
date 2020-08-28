const webpackConfig = require('../config/webpack.dev.config');
const paths = require('../config/paths');

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
        rules: [
          ...webpackConfig.module.rules,
          {
            test: /\.(ts|tsx)$/,
            exclude: paths.appNodeModules,
            use: [
              {
                // commenting this out, improves performance significantly
                loader: 'react-docgen-typescript-loader',
                options: {
                  // Provide the path to your tsconfig.json so that your stories can
                  // display types from outside each individual story.
                  tsconfigPath: `${paths.appPath}/tsconfig.json`,
                },
              },
            ],
          }
        ]
      }
    };
  },
};
