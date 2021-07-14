import { Router } from "wouter-preact";
import staticLocationHook from "wouter-preact/static-location";
import ssr from "preact-iso/prerender";

import { App } from "./app";

type Data = { path: string } & Record<string, unknown>;

export async function prerender(data: Data) {
  const { path, ...rest } = data;
  return await ssr(
    <Router hook={staticLocationHook(path)}>
      <App {...rest} />
    </Router>,
  );
}
