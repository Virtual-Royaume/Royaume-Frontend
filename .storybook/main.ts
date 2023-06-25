import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
}

export default config;