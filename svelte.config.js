import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte"],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    })
  ],

  kit: {
    adapter: adapter(),
    alias: {
      "@components/*": "src/lib/components/",
      "@css/*": "src/lib/css/",
    },
  },
};

export default config;
