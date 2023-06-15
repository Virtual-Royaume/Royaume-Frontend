import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run start",
    port: 3000
  },

  use: {
    headless: false,
    baseURL: "http://localhost:3000"
  },

  testDir: "./tests",
  testMatch: "*.ts",

  reporter: [["html", { open: "always" }]]
};

export default config;