import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoute } from "../js/core/route.js";
import { routes } from "../js/router/registry.js";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));

function filesIn(directory, extension) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesIn(path, extension) : path.endsWith(extension) ? [path] : [];
  });
}

function fail(message) {
  throw new Error(message);
}

const javascript = filesIn(join(root, "js"), ".js").concat(filesIn(join(root, "data"), ".js"));
for (const file of javascript) execFileSync(process.execPath, ["--check", file], { stdio: "inherit" });

const routeEntries = Object.entries(routes);
for (const [key, definition] of routeEntries) {
  if (key !== definition.name) fail(`La clave "${key}" no coincide con definition.name "${definition.name}"`);
  if (typeof definition.mount !== "function") fail(`La ruta "${key}" no exporta mount()`);
  const template = join(root, definition.template);
  if (!existsSync(template)) fail(`Falta la plantilla de ${definition.name}: ${definition.template}`);
}

const templates = new Set(routeEntries.map(([, definition]) => definition.template));
for (const template of templates) {
  const html = readFileSync(join(root, template), "utf8");
  if (html.includes("<script") && !html.includes('type="module"')) {
    fail(`${template} incluye scripts inline; el comportamiento debe vivir en js/pages/`);
  }
}

const moduleDir = join(root, "modules");
const moduleFiles = readdirSync(moduleDir).filter((name) => name.endsWith(".html"));
const referenced = new Set([...templates].map((path) => path.replace(/^modules\//, "")));
for (const file of moduleFiles) {
  if (!referenced.has(file)) fail(`modules/${file} no está referenciado por ninguna ruta`);
}

const smokeHashes = [
  "#/resumen",
  "#/agenda",
  "#/noticia/n1",
  "#/foro",
  "#/expedientes",
  "#/expediente/EXP-2026-019",
  "#/tabla-7",
  "#/bandeja",
  "#/bandeja-recibidos",
  "#/bandeja-pendientes",
  "#/bandeja-hechos",
];

for (const hash of smokeHashes) {
  const route = parseRoute(hash);
  if (!routes[route.name]) fail(`Smoke hash sin ruta registrada: ${hash} → ${route.name}`);
}

const index = readFileSync(join(root, "index.html"), "utf8");
if (!index.includes('type="module" src="./js/main.js"')) fail("index.html no carga el entry point modular");
if (index.includes("app.js") || index.includes("data.js")) fail("index.html todavía referencia los bundles monolíticos");
if (!index.includes("./styles/shell.css")) fail("index.html debe enlazar styles/shell.css");

for (const legacy of ["app.js", "data.js", join("modules", "expedientes.html")]) {
  if (existsSync(join(root, legacy))) fail(`Sigue existiendo el artefacto legacy: ${legacy}`);
}

console.log(`OK: ${javascript.length} módulos JavaScript, ${routeEntries.length} rutas y ${smokeHashes.length} hashes de smoke comprobados.`);
console.log(javascript.map((file) => relative(root, file)).join("\n"));
