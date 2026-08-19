import { spawn } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "github-pages");
const port = Number(process.env.EXPORT_PORT || 4173);
const origin = `http://127.0.0.1:${port}`;
const routes = [
  "/", "/service", "/safety", "/company", "/contact",
  "/nabex", "/nabex/apps", "/nabex/web", "/nabex/process",
  "/nabex/about", "/nabex/contact",
];

const repository = process.env.GITHUB_REPOSITORY || "";
const [owner = "", repo = ""] = repository.split("/");
const isUserSite = repo && repo.toLowerCase() === `${owner}.github.io`.toLowerCase();
const basePath = process.env.PAGES_BASE_PATH ?? (repo && !isUserSite ? `/${repo}` : "");
const pageOrigin = process.env.GITHUB_PAGES_ORIGIN || (owner ? `https://${owner}.github.io` : "");

function makeStatic(html) {
  const publicBase = `${pageOrigin}${basePath}`;
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(new RegExp(`https?://127\\.0\\.0\\.1:${port}`, "g"), publicBase)
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/url\(\/(?!\/)/g, `url(${basePath}/`);
}

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("The local export server did not start in time.");
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const server = spawn("pnpm", ["exec", "vinext", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
  cwd: root,
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
});

let serverError = "";
server.stderr.on("data", (chunk) => { serverError += chunk.toString(); });

try {
  await waitForServer();

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    if (!response.ok) throw new Error(`Export failed for ${route}: ${response.status}`);
    const directory = route === "/" ? output : path.join(output, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), makeStatic(await response.text()));
  }

  await cp(path.join(root, "public"), output, { recursive: true });
  await cp(path.join(root, "dist/client/_next/static/css"), path.join(output, "_next/static/css"), { recursive: true });
  await cp(path.join(root, "dist/client/_next/static/_vinext_fonts"), path.join(output, "_next/static/_vinext_fonts"), { recursive: true });

  const cssDirectory = path.join(output, "_next/static/css");
  const manifest = JSON.parse(await readFile(path.join(root, "dist/client/.vite/manifest.json"), "utf8"));
  const cssFiles = [...new Set(Object.values(manifest).flatMap((entry) => entry.css || []))];
  for (const cssFile of cssFiles) {
    const file = path.join(output, cssFile.replace(/^\/?_next\/static\/css\//, "_next/static/css/"));
    const css = await readFile(file, "utf8");
    await writeFile(file, css.replace(/url\(\/(?!\/)/g, `url(${basePath}/`));
  }

  await writeFile(path.join(output, ".nojekyll"), "");
  await writeFile(path.join(output, "404.html"), makeStatic(await (await fetch(origin)).text()));
  console.log(`GitHub Pages export complete: ${output}`);
} catch (error) {
  if (serverError) console.error(serverError);
  throw error;
} finally {
  server.kill("SIGTERM");
}
