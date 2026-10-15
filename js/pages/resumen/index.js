import { cardBtn, renderCard } from "./card.js";
import { esc } from "../../core/dom.js";

const cardUi = { dialog: "", opener: "" };

function cardDialog(kind) {
  if (!kind) return "";
  let body = "";
  if (kind === "crear") {
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">Crear base</h2>
      <form data-card-form class="mt-4">
        <label class="block text-sm">Nombre<input name="nombre" required class="mt-1 h-9 w-full rounded-lg border border-line px-3 text-sm outline-none focus:border-ink" /></label>
        <div class="mt-4 flex gap-2"><button type="submit" class="${cardBtn("solid")}">Crear</button><button type="button" class="${cardBtn()}" data-card-close>Cancelar</button></div>
      </form>`;
  } else if (kind === "productos") {
    const rows = ["LaLeyDigital360", "CISS Fiscal", "CISS Laboral", "CISS Contable Mercantil"]
      .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
      .join("");
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">La Ley</h2><ul class="mt-3">${rows}</ul><button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  } else {
    return "";
  }
  return `<div class="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,24,28,0.32)] p-4" data-card-backdrop><div role="dialog" aria-modal="true" aria-labelledby="card-dialog-title" data-card-dialog class="w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(20,24,28,0.16)]">${body}</div></div>`;
}

function renderCardGrid(items, state) {
  return `<ul class="grid list-none grid-cols-2 items-stretch gap-4 lg:grid-cols-3 xl:grid-cols-4">${items.map((item) => renderCard(item)).join("")}</ul>${cardDialog(state.dialog)}`;
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
  const grid = main.querySelector("#home-cards");
  if (grid) {
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
      grid.innerHTML = renderCardGrid(homeCards(), cardUi);
      grid.querySelectorAll("[data-card-dialog]").forEach((button) => {
        if (button.getAttribute("role") === "dialog") return;
        button.addEventListener("click", () => {
          cardUi.dialog = button.dataset.cardDialog;
          cardUi.opener = button.dataset.cardOpener || "";
          draw();
          const field = grid.querySelector("[data-card-dialog] input, [data-card-dialog] [data-card-close]");
          field?.focus();
        });
      });
      grid.querySelector("[data-card-backdrop]")?.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) shut();
      });
      grid.querySelectorAll("[data-card-close]").forEach((button) => {
        button.addEventListener("click", shut);
      });
      grid.querySelector("[data-card-form]")?.addEventListener("submit", (event) => {
        event.preventDefault();
        shut();
      });
    };
    grid.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && cardUi.dialog) shut();
    });
    draw();
    return;
  }
}
