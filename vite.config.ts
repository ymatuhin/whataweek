import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  // resolve: {
  //   alias: {
  //     react: "preact/compat",
  //     "react-dom/test-utils": "preact/test-utils",
  //     "react-dom": "preact/compat",
  //   },
  // },
  build: {
    minify: mode === "production",
  },
  plugins: [
    preact(),
    // process.env.SSR ? undefined : legacy()
  ].filter(Boolean),
}));
