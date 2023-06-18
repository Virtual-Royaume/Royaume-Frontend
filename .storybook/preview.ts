import type { Preview } from "@storybook/react";
import "../src/lib/styles/font.css";
import "../src/lib/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#0c0c0d",
        },
        {
          name: "white",
          value: "#FFFFFF",
        }
      ],
    },

    /**
     * @see https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/#routing
     */
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/"
      }
    }
  }
}

export default preview;
