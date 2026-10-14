const TITLES = {
  bandeja: "Bandeja",
  "bandeja-recibidos": "Recibidos",
  "bandeja-pendientes": "Pendientes",
  "bandeja-hechos": "Hechos",
};

export function mount(main, route) {
  const heading = main.querySelector("h1");
  if (heading && TITLES[route.name]) heading.textContent = TITLES[route.name];
}
