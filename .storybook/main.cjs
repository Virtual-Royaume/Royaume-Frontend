const preprocess = require("svelte-preprocess");
const path = require("path");

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    }
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  svelteOptions: import("../svelte.config.js").preprocess
}