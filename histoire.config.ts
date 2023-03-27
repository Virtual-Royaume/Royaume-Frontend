import { defaultColors, defineConfig } from "histoire";
import { HstSvelte } from "@histoire/plugin-svelte";

export default defineConfig({
  plugins: [
    HstSvelte()
  ],

  setupFile: "./histoire.setup.ts",

  viteNodeInlineDeps: [
    /clsx/
  ],

  theme: {
    logo: {
      dark: "./static/images/royaume-logo-text-white.png",
      light: "./static/images/royaume-logo-text-black.png",
      square: "./static/images/royaume-logo-text-white.png"
    },
    colors: {
      primary: defaultColors.green
    }
  }
});