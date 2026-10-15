import { esc } from "../../core/dom.js";

const SHELL = "flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(20,24,28,0.06)] ring-1 ring-black/[0.04]";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const TONES = {
  tide: { band: "bg-mint", accent: "text-tide", chip: "bg-white/85 text-[#0f766e]" },
  sand: { band: "bg-[#f6f0e6]", accent: "text-[#8a5a2b]", chip: "bg-white/85 text-[#8a5a2b]" },
  sea: { band: "bg-[#e8f1fb]", accent: "text-[#1d4ed8]", chip: "bg-white/85 text-[#1d4ed8]" },
  amber: { band: "bg-[#fff3e0]", accent: "text-[#b45309]", chip: "bg-white/85 text-[#b45309]" },
  leaf: { band: "bg-[#e7f6ec]", accent: "text-good", chip: "bg-white/85 text-[#146c43]" },
  plum: { band: "bg-[#f3eefb]", accent: "text-[#6d28d9]", chip: "bg-white/85 text-[#6d28d9]" },
  slate: { band: "bg-[#e8eef8]", accent: "text-[#1e3a5f]", chip: "bg-white/85 text-[#1e3a5f]" },
};

const icon = (paths) => `<svg viewBox="0 0 24 24" class="line size-7" aria-hidden="true">${paths}</svg>`;

const ICONS = {
  grid: icon(`<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"></rect>`),
  book: icon(`<path d="M6 5.5h9.5A2.5 2.5 0 0 1 18 8v11H8.5A2.5 2.5 0 0 0 6 21.5Z"></path><path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H18v16"></path>`),
  pages: icon(`<path d="M7 4.5h8l3 3V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z"></path><path d="M15 4.5V8h3.5"></path><path d="M9 12.5h6M9 16h4"></path>`),
  news: icon(`<path d="M5 6.5h11a2 2 0 0 1 2 2V18H7.5A2.5 2.5 0 0 1 5 15.5Z"></path><path d="M8 10h7M8 13.5h5"></path><path d="M18 9.5h1.2A1.8 1.8 0 0 1 21 11.3V16a2 2 0 0 1-2 2"></path>`),
  percent: icon(`<path d="M7 17 17 7"></path><circle cx="8" cy="8" r="1.6"></circle><circle cx="16" cy="16" r="1.6"></circle>`),
  out: icon(`<path d="M14 5h5v5"></path><path d="M19 5 10.5 13.5"></path><path d="M17 13.5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.5"></path>`),
  calc: icon(`<rect x="5" y="3.5" width="14" height="17" rx="2"></rect><path d="M8 8h8M8 12h2M12 12h2M16 12h.01M8 16h2M12 16h2M16 16h.01"></path>`),
  files: icon(`<path d="M8 7.5h7l3 3V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Z"></path><path d="M9 7.5V5.8A1.3 1.3 0 0 1 10.3 4.5H16l2.2 2.2"></path>`),
  globe: icon(`<circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4c2.2 2.4 2.2 13.6 0 16M12 4c-2.2 2.4-2.2 13.6 0 16"></path>`),
};

/**
 * Misma pieza para todas: franja (color o imagen), cuerpo y acciones.
 * Al crear una card, `type` elige el contenido; `image` rellena la franja y `tone` cambia el color.
 */
const TYPES = {
  acceso: {
    label: "Acceso",
    tone: "tide",
    icon: ICONS.grid,
    hint: "Módulo del portal",
    actions: [{ label: "Abrir", href: true, tone: "solid" }],
  },
  base: {
    label: "Base de datos",
    tone: "tide",
    icon: ICONS.book,
    hint: "Consulta externa",
    actions: [
      { label: "Acceder", href: true, external: true, tone: "solid" },
      { label: "Crear", dialog: "crear", opener: "crear" },
    ],
  },
  leer: {
    label: "Servicio",
    tone: "plum",
    icon: ICONS.pages,
    hint: "Ficha del servicio",
    actions: [{ label: "Leer más", href: true, tone: "solid" }],
  },
  circular: {
    label: "Circular",
    tone: "sand",
    icon: ICONS.news,
    date: true,
    actions: [{ label: "Leer", href: true, tone: "solid" }],
  },
  prescriptor: {
    label: "Valor añadido",
    tone: "leaf",
    icon: ICONS.percent,
    stat: "Cuantía prescriptor",
    actions: [{ label: "Acerca de", href: true, tone: "solid" }],
  },
  ir: {
    label: "Utilidad",
    tone: "sea",
    icon: ICONS.out,
    hint: "Sale del portal",
    actions: [{ label: "Ír", href: true, external: true, tone: "solid" }],
  },
  ver: {
    label: "Utilidad",
    tone: "amber",
    icon: ICONS.calc,
    hint: "Se abre en el portal",
    actions: [{ label: "Ver", href: true, tone: "solid" }],
  },
  acuerdo: {
    label: "Acuerdo",
    tone: "leaf",
    icon: ICONS.files,
    hint: "Se abre en el portal",
    actions: [
      { label: "Ver", href: "convenios", tone: "solid" },
      { label: "Web", href: true, external: true },
    ],
  },
  web: {
    label: "Emprende",
    tone: "plum",
    icon: ICONS.globe,
    hint: "Herramienta externa",
    actions: [{ label: "Ver sitio web", href: true, external: true, tone: "solid" }],
  },
  profesional: {
    label: "Profesional",
    tone: "slate",
    mark: "initials",
    contact: true,
    actions: [{ label: "Escribir", mailto: true, tone: "solid" }],
  },
};

export function cardBtn(kind) {
  const base = `inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium ${FOCUS}`;
  if (kind === "solid") return `${base} bg-ink text-white`;
  return `${base} border border-line bg-white text-ink hover:bg-[#f7f8f9]`;
}

function cardLeave(name) {
  return `<span class="sr-only">, ${esc(name)}, se abre en una pestaña nueva</span>`;
}

function initials(title) {
  const parts = String(title || "").trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || "·";
}

function toneFor(item, spec) {
  return TONES[item.tone] || TONES[spec.tone] || TONES.tide;
}

function mediaBand(item, spec) {
  const tone = toneFor(item, spec);
  const image = typeof item.image === "string" ? item.image.trim() : "";
  const visual = image
    ? `<img src="${esc(image)}" alt="" class="absolute inset-0 size-full object-cover" />`
    : `<span class="grid size-14 place-items-center ${spec.mark === "initials" ? "rounded-full" : "rounded-2xl"} bg-white/85 ${tone.accent} shadow-[0_1px_2px_rgba(20,24,28,0.06)]">${spec.mark === "initials" ? `<span class="text-base font-semibold">${esc(initials(item.title))}</span>` : spec.icon}</span>`;
  const chip = image ? "bg-white/90 text-ink" : tone.chip;
  return `<div class="relative grid h-28 shrink-0 place-items-center overflow-hidden ${image ? "bg-[#e8eef2]" : tone.band}">
    ${visual}
    <span class="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${chip}">${esc(spec.label)}</span>
  </div>`;
}

function metaHtml(spec, item) {
  if (spec.date) return `<p class="text-sm text-mute">Fecha: ${esc(item.date)}</p>`;
  if (spec.stat) {
    return `<p class="text-2xl font-semibold tabular-nums leading-none">${esc(item.percent)}</p><p class="mt-1 text-xs text-mute">${esc(spec.stat)}</p>`;
  }
  if (spec.contact) {
    return `<p class="text-sm text-[#3c424a]">${esc(item.office)} · ${esc(item.kind)}</p><a class="mt-1 block truncate text-sm text-tide" href="mailto:${esc(item.email)}">${esc(item.email)}</a>`;
  }
  if (item.docCount != null) {
    const count = Number(item.docCount) || 0;
    const noun = count === 1 ? "convenio" : "convenios";
    return `<p class="text-sm text-mute">${count} ${noun}</p>`;
  }
  return `<p class="text-sm text-mute">${esc(spec.hint || "")}</p>`;
}

function actionHref(action, item) {
  if (action.href === "convenios") {
    return item.conveniosHref || `#/convenios/${encodeURIComponent(item.orgId || item.id || "aeat")}`;
  }
  if (action.href === true) return item.href || "#";
  return action.href || item.href || "#";
}

function renderAction(action, item) {
  const className = cardBtn(action.tone === "solid" ? "solid" : "");
  if (action.mailto) return `<a class="${className}" href="mailto:${esc(item.email)}">${esc(action.label)}</a>`;
  if (action.href) {
    const href = actionHref(action, item);
    const external = action.external ? ` target="_blank" rel="noopener noreferrer"` : "";
    const leave = action.external ? cardLeave(item.title) : "";
    return `<a class="${className}" href="${esc(href)}"${external}>${esc(action.label)}${leave}</a>`;
  }
  return `<button type="button" class="${className}" data-card-dialog="${esc(action.dialog)}" data-card-opener="${esc(action.opener)}" data-card-id="${esc(item.id || "")}">${esc(action.label)}</button>`;
}

export function renderCard(item) {
  const spec = TYPES[item.type] || TYPES.profesional;
  const actions = (spec.actions || []).map((action) => renderAction(action, item)).join("");
  return `<li class="${SHELL}">
    ${mediaBand(item, spec)}
    <div class="flex flex-1 flex-col px-4 pt-3">
      <h2 class="line-clamp-2 min-h-10 text-sm font-semibold leading-5">${esc(item.title)}</h2>
      <div class="mt-2 min-h-[3.25rem]">${metaHtml(spec, item)}</div>
    </div>
    <div class="mt-3 flex min-h-[3.25rem] flex-wrap items-center gap-2 border-t border-line px-4 py-3">${actions}</div>
  </li>`;
}
