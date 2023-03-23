import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["./src/**/*.test.ts"],
    environment: "happy-dom",
    deps: {
      inline: ["clsx"]
    }
  }
});