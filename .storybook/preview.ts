import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F7F7F7',
        },
        {
          name: 'dark',
          value: '#18181A',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globals: {
  }
};

export default preview;

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        {
          name: 'light', dataTheme: 'light'
        },
        {
          name: 'dark', dataTheme: 'dark'
        },

      ],
    }
  },
}
// export const globalTypes = {
//   themes: {
//     defaultValue: [
//       "light",
//       "dark",
//     ],
//   },
// }
