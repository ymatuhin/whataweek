import fs from "fs";
import path from "path";
import fse from "fs-extra";
import { prerender } from "./dist/ssr/entry-server.js";
import renderToString from "preact-render-to-string";

const template = fs.readFileSync("./dist/index.html", "utf-8");
const rendered = new Set();
const initialRoutes = ["/", "/404.html"];

async function render(url) {
  const filePath = getNewFilePath(url);
  if (rendered.has(filePath)) return;
  rendered.add(filePath);

  const headTags = [];
  const { html, links } = await prerender({ path: url, headTags });
  const head = renderToString(headTags).replaceAll(" data-rh", "");
  const finalHtml = template.replace(`<!--app-html-->`, html).replace(`<!--app-head-->`, head);

  fse.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, finalHtml);
  console.log(`Prerendered: ${url} -> ${filePath}`);
  links.forEach(render);
}

function getNewFilePath(url) {
  if (url[0] === "/") url = url.slice(1); // /home -> home
  if (url.indexOf("./") === 0) url = url.slice(2); // ./home -> home
  if (!url.includes(".html")) url = path.join(url, "index.html"); // home -> home/index.html
  return path.join("./dist", url); // home/index.html -> ./dist/home/index.html
}

initialRoutes.map(render);
