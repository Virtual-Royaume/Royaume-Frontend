import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
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
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    },
    {
      name: "mobile chrome",
      use: {
        ...devices["Pixel 5"]
      }
    }
  ]
};

export default config;