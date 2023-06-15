import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["dotenv/config", "./vitest.setup.ts"],
    environment: "happy-dom",
    include: ["./**/*.test.?(c|m)[jt]s?(x)"]
  },
  resolve: {
    alias: {
      "#/": "./"
    }
  }
});