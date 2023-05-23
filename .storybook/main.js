const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    }
    return config;
  },
  stories: ["../src/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web"
  ],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
};
