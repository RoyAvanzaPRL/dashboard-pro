import { parseRoute } from "../core/route.js";
import { routes } from "./registry.js";

export function createRouter({ main, beforeRender, onRoute }) {
  let renderToken = 0;
  let activeDefinition;

  async function render() {
    const token = ++renderToken;
    const route = parseRoute();
    const definition = routes[route.name];

    activeDefinition?.unmount?.();
    activeDefinition = undefined;
    beforeRender?.();

    if (!definition) {
      onRoute?.(route, undefined);
      document.title = "Albor";
      main.innerHTML =
        '<div class="p-8"><p class="text-lg font-semibold">Esa pantalla no existe.</p><a class="mt-3 inline-block text-sm font-medium text-tide" href="#/resumen">Volver al inicio</a></div>';
      return;
    }

    onRoute?.(route, definition);
    document.title = `${definition.title} · Albor`;

    try {
      const response = await fetch(definition.template, { cache: "no-store" });
      if (token !== renderToken) return;
      if (!response.ok) throw new Error(String(response.status));
      main.innerHTML = await response.text();
    } catch {
      if (token !== renderToken) return;
      main.innerHTML =
        '<div class="p-8"><p class="text-lg font-semibold">No se ha podido abrir el módulo.</p><p class="mt-2 text-sm text-mute">Sirve la carpeta con un servidor local.</p></div>';
      return;
    }

    if (token !== renderToken) return;
    activeDefinition = definition;
    definition.mount?.(main, route);
  }

  return {
    start() {
      window.addEventListener("hashchange", render);
      if (!location.hash) location.replace("#/resumen");
      else render();
    },
    render,
  };
}
