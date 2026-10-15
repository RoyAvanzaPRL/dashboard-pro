import { renderBreadcrumbs } from "../../components/breadcrumbs.js";

const TITLES = {
  bandeja: "Bandeja",
  "bandeja-recibidos": "Recibidos",
  "bandeja-pendientes": "Pendientes",
  "bandeja-hechos": "Hechos",
};

export function mount(main, route) {
  const heading = main.querySelector("h1");
  if (heading && TITLES[route.name]) heading.textContent = TITLES[route.name];

  const current = TITLES[route.name];
  if (route.name !== "bandeja" && current) {
    renderBreadcrumbs(main, [
      { label: "Bandeja", href: "#/bandeja" },
      { label: current },
    ]);
  }
}
