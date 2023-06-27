import { create } from "@storybook/theming";

export const theme = create({
  base: "dark",

  // Typography:
  fontBase: "'Inter', sans-serif",
  fontCode: "Source Code Pro",

  // Branding:
  brandTitle: "Royaume Design System",
  brandUrl: "https://royaume.world",
  brandImage: "https://iili.io/HPLKcvf.png",
  brandTarget: "_self",

  // Colors:
  colorPrimary: "#E862B3",
  colorSecondary: "#6366F1",
  
  // Background colors:
  appBg: "#131314",
  appContentBg: "#0C0C0D",
  appBorderColor: "#1E1E1F",
  appBorderRadius: 4,

  // Toolbar colors:
  barBg: "#131314",
  barSelectedColor: "#6366F1",
});