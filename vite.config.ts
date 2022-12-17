import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.test.ts"]
  }
};

export default config;