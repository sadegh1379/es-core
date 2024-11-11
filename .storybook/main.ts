import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/react",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-data-theme-switcher",
    // "storybook-addon-theme-changer"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  env: {
    REACT_APP_DEVELOPMENT_MODE: 'STAGE'
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
