import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

import sveltePreprocess from "svelte-preprocess";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    include: ["@ymatuhin/debug"],
  },
  server: {
    port: 1010,
  },
  build: {
    minify: mode === "production",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      compilerOptions: {
        hydratable: mode === "production",
        dev: mode !== "production",
      },
    }),
    legacy(),
  ].filter(Boolean),
}));
