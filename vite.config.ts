import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

import sveltePreprocess from "svelte-preprocess";
import legacy from "@vitejs/plugin-legacy";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@ymatuhin/debug"],
  },
  server: {
    port: 1010,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      // TODO remove this once vite-plugin-svelte caching bugs are fixed
      disableTransformCache: true,
      emitCss: false,
      compilerOptions: {
        hydratable: isProd,
        dev: !isProd,
      },
    }),
    legacy(),
  ].filter(Boolean),
});
