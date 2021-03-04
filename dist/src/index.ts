import App from "./App.svelte";
import "tailwindcss/tailwind.css";
import "./index.css";

const app = new App({
  target: document.getElementById("app"),
  hydrate: process.env.NODE_ENV === "production",
});

export default app;
