import { esc } from "../../core/dom.js";

const cardUi = { open: "", dialog: "", opener: "" };

function cardBtn(kind) {
  const base = "inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  if (kind === "solid") return `${base} bg-ink text-white`;
  return `${base} border border-line bg-white text-ink hover:bg-[#f7f8f9]`;
}

function cardLeave(name) {
  return `<span class="sr-only">, ${esc(name)}, se abre en una pestaña nueva</span>`;
}

function cardShell() {
  return "flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(20,24,28,0.04)]";
}

function cardActions(html) {
  return `<div class="mt-auto flex flex-wrap gap-2 pt-4">${html}</div>`;
}

function renderPortalCard(item, openId) {
  const title = `<h2 class="text-sm font-semibold leading-snug">${esc(item.title)}</h2>`;
  if (item.type === "acceso") {
    return `<li class="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(20,24,28,0.04)]">
      <a href="${esc(item.href)}" class="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
        <span class="grid h-28 place-items-center bg-[#e7f8f3] text-tide" aria-hidden="true"><svg viewBox="0 0 24 24" class="line size-8"><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"></path><path d="M14 3.5V8h4.5"></path><path d="M9 13h6M9 16.5h4"></path></svg></span>
        <span class="px-4 py-3">${title}</span>
      </a>
    </li>`;
  }
  if (item.type === "base") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Acceder${cardLeave(item.title)}</a><button type="button" class="${cardBtn()}" data-card-dialog="crear" data-card-opener="crear" data-card-id="${esc(item.id || "")}">Crear</button>`)}</li>`;
  }
  if (item.type === "leer") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}">Leer más</a>`)}</li>`;
  }
  if (item.type === "circular") {
    return `<li class="${cardShell()}">
      <button type="button" class="flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" data-card-dialog="circular" data-card-opener="circular" data-card-id="${esc(item.id || "")}">
        ${title}
        <span class="mt-2 text-sm text-mute">Fecha: ${esc(item.date)}</span>
      </button>
    </li>`;
  }
  if (item.type === "prescriptor") {
    return `<li class="${cardShell()}">${title}<p class="mt-3 text-2xl font-semibold tabular-nums leading-none">${esc(item.percent)}</p><p class="mt-1 text-xs text-mute">Cuantía prescriptor</p>${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}">Acerca de</a>`)}</li>`;
  }
  if (item.type === "ir") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Ír${cardLeave(item.title)}</a>`)}</li>`;
  }
  if (item.type === "ver") {
    return `<li class="${cardShell()}">${title}${cardActions(`<button type="button" class="${cardBtn("solid")}" data-card-dialog="calculos" data-card-opener="calculos" data-card-id="${esc(item.id || "")}">Ver</button>`)}</li>`;
  }
  if (item.type === "acuerdo") {
    const open = openId === item.id;
    const rows = item.pdfs
      .map((pdf) => `<li class="flex items-baseline justify-between gap-3 border-t border-line py-2 text-sm"><span>${esc(pdf)}</span><span class="shrink-0 text-xs text-mute">PDF</span></li>`)
      .join("");
    return `<li class="${cardShell()}">${title}${cardActions(`<button type="button" class="${cardBtn()}" data-card-toggle="${esc(item.id)}" data-card-opener="acuerdo" aria-expanded="${open ? "true" : "false"}" aria-controls="acuerdo-pdfs">Mostrar convenios</button><button type="button" class="${cardBtn()}" data-card-convenio="${esc(item.id)}" data-card-opener="convenio">Convenio</button><a class="${cardBtn()}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Web${cardLeave(item.title)}</a>`)}${open ? `<ul id="acuerdo-pdfs" class="mt-2">${rows}</ul>` : ""}</li>`;
  }
  if (item.type === "web") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Ver sitio web${cardLeave(item.title)}</a>`)}</li>`;
  }
  return `<li class="${cardShell()}">${title}<p class="mt-2 text-sm text-[#3c424a]">${esc(item.office)}</p><a class="mt-1 text-sm text-tide" href="mailto:${esc(item.email)}">${esc(item.email)}</a><p class="mt-3 text-sm text-mute">${esc(item.kind)}</p></li>`;
}

function cardDialog(kind, item) {
  if (!kind) return "";
  let body = "";
  if (kind === "crear") {
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">Crear base</h2>
      <form data-card-form class="mt-4">
        <label class="block text-sm">Nombre<input name="nombre" required class="mt-1 h-9 w-full rounded-lg border border-line px-3 text-sm outline-none focus:border-ink" /></label>
        <div class="mt-4 flex gap-2"><button type="submit" class="${cardBtn("solid")}">Crear</button><button type="button" class="${cardBtn()}" data-card-close>Cancelar</button></div>
      </form>`;
  } else if (kind === "circular") {
    const title = item?.title || "Aplazamiento de VeriFactu";
    const date = item?.date || "08/10/2026";
    const extra = item?.body ? `<p class="mt-4 text-sm leading-relaxed text-[#3c424a]">${esc(item.body)}</p>` : "";
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">${esc(title)}</h2>
      <p class="mt-2 text-sm text-mute">Fecha: ${esc(date)}</p>
      <p class="mt-4 text-xs tracking-wide text-mute">LOGO · NOMBRE · DIRECCION · TELF · FAX · EMAIL</p>
      ${extra}
      <button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  } else if (kind === "productos") {
    const rows = ["LaLeyDigital360", "CISS Fiscal", "CISS Laboral", "CISS Contable Mercantil"]
      .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
      .join("");
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">La Ley</h2><ul class="mt-3">${rows}</ul><button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  } else {
    const rows = ["Intereses judiciales", "Tasas judiciales", "Embargo de salario", "Pensión alimenticia", "Actualización de rentas", "Indemnización por despido"]
      .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
      .join("");
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">Herramientas de cálculo</h2><ul class="mt-3">${rows}</ul><button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  }
  return `<div class="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,24,28,0.32)] p-4" data-card-backdrop><div role="dialog" aria-modal="true" aria-labelledby="card-dialog-title" data-card-dialog class="w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(20,24,28,0.16)]">${body}</div></div>`;
}

function renderCardGrid(items, state) {
  const current = state.itemId ? items.find((item) => item.id === state.itemId) : undefined;
  return `<ul class="grid list-none grid-cols-2 items-stretch gap-4 lg:grid-cols-3 xl:grid-cols-4">${items.map((item) => renderPortalCard(item, state.open)).join("")}</ul>${cardDialog(state.dialog, current)}`;
}

function homeCards() {
  return [
    { id: "base", type: "base", title: "Aranzadi", href: "https://www.aranzadi.es" },
    { id: "circular", type: "circular", title: "Aplazamiento de VeriFactu", date: "08/10/2026" },
    { id: "ir", type: "ir", title: "Códigos electrónicos BOE", href: "https://www.boe.es/biblioteca_juridica/codigos/" },
    { id: "ver", type: "ver", title: "Herramientas de cálculo" },
    {
      id: "aeat",
      type: "acuerdo",
      title: "AEAT",
      href: "https://sede.agenciatributaria.gob.es",
      pdfs: ["Convenio", "Renovación", "Modelo de adhesión", "Publicación en boletín oficial"],
    },
    { id: "web", type: "web", title: "DAFO", href: "https://www.ipyme.org" },
    { id: "profesional", type: "profesional", title: "Marina Soler", office: "Barcelona", email: "marina.soler@albor.example", kind: "Socia" },
  ];
}

export function mount(main) {
  const grid = main.querySelector("#home-cards");
  if (grid) {
    cardUi.open = "";
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
      grid.querySelectorAll("[data-card-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.dataset.cardToggle;
          cardUi.open = cardUi.open === id ? "" : id;
          draw();
          grid.querySelector(`[data-card-toggle="${CSS.escape(id)}"]`)?.focus();
        });
      });
      grid.querySelectorAll("[data-card-convenio]").forEach((button) => {
        button.addEventListener("click", () => {
          cardUi.open = button.dataset.cardConvenio;
          draw();
          grid.querySelector("#acuerdo-pdfs li")?.focus?.();
          grid.querySelector(`[data-card-convenio="${CSS.escape(button.dataset.cardConvenio)}"]`)?.focus();
        });
      });
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
