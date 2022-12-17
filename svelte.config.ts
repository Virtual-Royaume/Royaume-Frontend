import adapter from "@sveltejs/adapter-node";
import type { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config: Config = {
  preprocess: vitePreprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    files: {
      lib: "src/libraries",
      assets: "src/assets"
    },
    alias: {
      "@components/*": "src/libraries/components/*",
      "@icons/*": "src/libraries/icons/*"
    }
  }
};

export default config;