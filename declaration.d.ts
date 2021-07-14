import JSX = preact.JSX;

declare module "*.css" {
  const mapping: Record<string, string>;
  export default mapping;
}

/// <reference types="vite/client" />
