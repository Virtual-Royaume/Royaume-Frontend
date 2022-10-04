const preprocess = require("svelte-preprocess");

module.exports = {
  "stories": [
    "../src/**/*.story.mdx",
    "../src/**/*.story.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    {
      name: '@storybook/addon-postcss',
      options: {
          postcssLoaderOptions: {
              implementation: require('postcss'),
          },
      },
    }
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  svelteOptions: {
    preprocess: preprocess({
      postcss: true
    })
  }
}