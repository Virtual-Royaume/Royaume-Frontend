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
    hideColorSchemeSwitch: true,
    defaultColorScheme: "dark",
    logo: {
      dark: "./static/images/royaume-logo-text-white.png",
      square: "./static/images/royaume-logo.png"
    },
    colors: {
      primary: defaultColors.green,
      gray: {
        "50": "#F9FAFB",
        "100": "#F3F4F6",
        "200": "#E5E7EB",
        "300": "#D1D5DB",
        "400": "#9CA3AF",
        "500": "#6B7280",
        "600": "#4B5563",
        "700": "#0C0C0D",
        "750": "#0A0A0B",
        "800": "#060606",
        "850": "#040404",
        "900": "#020202",
        "950": "#010101"
      }
    }
  }
});