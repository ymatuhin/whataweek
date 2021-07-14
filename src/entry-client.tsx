import hydrate from "preact-iso/hydrate";
import { App } from "./app";

hydrate(<App />, document.getElementById("app")!);
