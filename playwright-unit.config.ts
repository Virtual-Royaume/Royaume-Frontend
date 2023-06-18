import { defineConfig, devices } from "@playwright/experimental-ct-react";
import "dotenv/config";

export default defineConfig({
  testMatch: "*.test.tsx",
  testDir: "src",

  reporter: [["html", { open: "always" }]],

  fullyParallel: true,
  workers: "50%",

  use: {
    trace: "on",

    ctPort: 3100,

    ctViteConfig: {
      resolve: {
        alias: {
          "#/": "./src/",
          "~/": "./public"
        }
      }
    }
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "mobile chrome",
      use: { ...devices["Pixel 5"] }
    }
  ]
});