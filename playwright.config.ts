import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173
  },
  testDir: "./src/tests",
  testMatch: ".ts"
};

export default config;