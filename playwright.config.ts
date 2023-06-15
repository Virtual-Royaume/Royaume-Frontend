import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run start",
    port: 3000
  },

  use: {
    baseURL: "http://localhost:3000"
  },

  testMatch: "*.test.ts",

  reporter: [["html", { open: "always" }]]
};

export default config;