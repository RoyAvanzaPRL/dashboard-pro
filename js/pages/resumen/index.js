import { overlay, trapOverlay, inputClass, labelClass } from "../../components/overlay.js";
import { esc } from "../../core/dom.js";
import { renderCard } from "./card.js";

const cardUi = { dialog: "", opener: "" };

function cardDialog(kind) {
  if (kind !== "crear" && kind !== "productos") return "";
  const crear = kind === "crear";
  const rows = ["LaLeyDigital360", "CISS Fiscal", "CISS Laboral", "CISS Contable Mercantil"]
    .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
    .join("");
  return overlay({
    id: "card-overlay",
    hidden: false,
    titleId: "card-dialog-title",
    title: crear ? "Crear base" : "La Ley",
    body: crear
      ? `<label class="${labelClass}" for="card-nombre">Nombre<input id="card-nombre" name="nombre" required class="${inputClass}" /></label>`
      : `<ul>${rows}</ul>`,
    formAttrs: crear ? "data-card-form" : "",
    closeAttr: "data-card-close",
    cancelLabel: crear ? "Cancelar" : "Cerrar",
    submitLabel: crear ? "Crear" : "",
  });
}

function renderCardGrid(items) {
  return `<ul class="grid list-none grid-cols-2 items-stretch gap-4 lg:grid-cols-3 xl:grid-cols-4">${items.map((item) => renderCard(item)).join("")}</ul>`;
}

function picture(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function homeCards() {
  return [
    {
      id: "base",
      type: "base",
      title: "Aranzadi",
      href: "https://www.aranzadi.es",
      image: picture(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 224"><rect width="640" height="224" fill="#d7f4ee"/><circle cx="540" cy="28" r="96" fill="#12b5a4" opacity=".28"/><rect x="46" y="42" width="250" height="146" rx="18" fill="#fff"/><rect x="72" y="72" width="132" height="12" rx="6" fill="#1c1e21"/><rect x="72" y="100" width="180" height="8" rx="4" fill="#b7c4c1"/><rect x="72" y="118" width="156" height="8" rx="4" fill="#b7c4c1"/><rect x="72" y="148" width="78" height="18" rx="9" fill="#12b5a4"/></svg>`),
    },
    {
      id: "circular",
      type: "circular",
      title: "Aplazamiento de VeriFactu",
      date: "08/10/2026",
      href: "#/circular/verifactu",
    },
    { id: "ir", type: "ir", title: "Códigos electrónicos BOE", href: "https://www.boe.es/biblioteca_juridica/codigos/" },
    { id: "ver", type: "ver", title: "Herramientas de cálculo", href: "#/calculos" },
    {
      id: "aeat",
      type: "acuerdo",
      title: "AEAT",
      orgId: "aeat",
      docCount: 4,
      href: "https://sede.agenciatributaria.gob.es",
      conveniosHref: "#/convenios/aeat",
    },
    {
      id: "web",
      type: "web",
      title: "DAFO",
      href: "https://www.ipyme.org",
      image: picture(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 224"><rect width="640" height="224" fill="#efe8fb"/><rect x="70" y="36" width="150" height="150" rx="16" fill="#fff"/><rect x="250" y="36" width="150" height="68" rx="16" fill="#6d28d9" opacity=".85"/><rect x="250" y="118" width="150" height="68" rx="16" fill="#c4b5fd"/><rect x="430" y="36" width="140" height="150" rx="16" fill="#fff"/><circle cx="145" cy="111" r="28" fill="#6d28d9" opacity=".9"/></svg>`),
    },
    { id: "profesional", type: "profesional", title: "Marina Soler", office: "Barcelona", email: "marina.soler@albor.example", kind: "Socia" },
  ];
}

export function mount(main) {
  const home = main.querySelector("#home");
  const grid = home?.querySelector("#home-cards");
  if (!home || !grid) return;
  cardUi.dialog = "";
  cardUi.opener = "";
  const shut = () => {
    const opener = cardUi.opener;
    cardUi.dialog = "";
    cardUi.opener = "";
    draw();
    if (opener) grid.querySelector(`[data-card-opener="${CSS.escape(opener)}"]`)?.focus();
  };
  const draw = () => {
    grid.innerHTML = renderCardGrid(homeCards());
    home.querySelector("#card-overlay")?.remove();
    const markup = cardDialog(cardUi.dialog);
    if (markup) {
      home.insertAdjacentHTML("beforeend", markup);
      trapOverlay(home.querySelector("#card-overlay"));
    }
    grid.querySelectorAll("[data-card-dialog]").forEach((button) => {
      button.addEventListener("click", () => {
        cardUi.dialog = button.dataset.cardDialog;
        cardUi.opener = button.dataset.cardOpener || "";
        draw();
      });
    });
  };
  home.addEventListener("click", (event) => {
    if (event.target.id === "card-overlay" || event.target.closest("[data-card-close]")) shut();
  });
  home.addEventListener("submit", (event) => {
    if (!event.target.closest("[data-card-form]")) return;
    event.preventDefault();
    shut();
  });
  home.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && cardUi.dialog) {
      event.preventDefault();
      shut();
    }
  });
  draw();
}
