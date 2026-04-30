// We import `defineConfig` from `vitest/config` rather than `vite` so the
// `test` field is type-checked and recognized. At runtime this re-exports
// Vite's defineConfig, so `vite build` / `vite dev` behave identically.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.js"],
    css: true,
    include: ["src/**/*.test.{js,jsx}", "scripts/**/*.test.mjs"],
  },
});
