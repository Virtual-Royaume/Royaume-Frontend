import type { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-node";

const config: Config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      "#components/*": "./src/lib/components/*",
      "#icons/*": "./src/lib/icons/*"
    }
  }
};

export default config;