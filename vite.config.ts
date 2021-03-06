import { defineConfig } from "vite";
import svelte from "rollup-plugin-svelte";

import sveltePreprocess from "svelte-preprocess";
import legacy from "@vitejs/plugin-legacy";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1010,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      emitCss: false,
      compilerOptions: {
        hydratable: isProd,
        dev: !isProd,
      },
    }),
    legacy(),
  ].filter(Boolean),
});
