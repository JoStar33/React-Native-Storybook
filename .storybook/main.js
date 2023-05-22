const path = require('path');

module.exports = {
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
