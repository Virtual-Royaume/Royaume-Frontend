import type { PlaywrightTestConfig } from "@playwright/test";
import "dotenv/config";

// Server base URL and port:
const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}`;

// Playwright config:
const config: PlaywrightTestConfig = {
  testMatch: "*.spec.ts",

  reporter: [["html", { open: "always" }]],

  webServer: {
    url: baseURL,
    command: "npm run build && npm run dev",
    reuseExistingServer: !process.env.CI
  },

  use: {
    baseURL: baseURL,
    trace: "on"
  }
};

export default config;