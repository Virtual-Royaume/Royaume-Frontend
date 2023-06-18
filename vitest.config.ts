import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
    include: ["./src/**/*.test.ts"],
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      "#/": "./src/",
      "~/": "./public"
    }
  }
});