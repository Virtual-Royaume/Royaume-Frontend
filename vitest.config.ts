import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
    include: ["./src/**/*.test.ts"]
  },
  resolve: {
    alias: {
      "#/": "./src/",
      "~/": "./public"
    }
  }
});