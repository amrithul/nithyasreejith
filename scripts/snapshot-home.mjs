/**
 * Write the rendered invitation to `.vercel/output/static/index.html`.
 * Vercel then serves `/` as a file. If server rendering throws on the
 * deployed function, the page still opens.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const handlerUrl = pathToFileURL(
  join(root, ".vercel/output/functions/__server.func/index.mjs"),
).href;

const mod = await import(handlerUrl);
const handler = mod.default;
const response = await handler.fetch(
  new Request("https://invitation.local/", {
    headers: { accept: "text/html", host: "invitation.local" },
  }),
);
const html = await response.text();
if (response.status !== 200 || !html.includes("<html")) {
  console.error("[snapshot-home] render failed", response.status);
  console.error(html.slice(0, 500));
  process.exit(1);
}
const target = join(root, ".vercel/output/static/index.html");
writeFileSync(target, html);
console.log(`[snapshot-home] wrote ${target} (${html.length} bytes)`);
