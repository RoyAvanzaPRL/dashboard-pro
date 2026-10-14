import { clients, matters } from "../../../data/index.js";
import { esc, fill } from "../../core/dom.js";

const STATUS = {
  abierto: { label: "Abierto", dot: "bg-tide" },
  urgente: { label: "Urgente", dot: "bg-hot" },
  cerrado: { label: "Cerrado", dot: "bg-slate-300" },
};

function statusMarkup(status) {
  const item = STATUS[status] || STATUS.abierto;
  return `<span class="inline-flex items-center gap-1.5 rounded-full bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium"><span class="size-1.5 rounded-full ${item.dot}"></span>${item.label}</span>`;
}

export function mount(main, route) {
  const { param: id } = route;
  const matter = matters[id];
  const view = main.querySelector("#matter");
  const missing = main.querySelector("#matter-missing");
  if (!matter || !view) {
    if (view) view.hidden = true;
    if (missing) missing.hidden = false;
    return;
  }

  const client = clients[matter.clientId];
  document.title = `${id} · Albor`;
  fill(view, { ...matter, id, clientName: client?.name || "" });
  const status = view.querySelector('[data-bind="status"]');
  if (status) status.innerHTML = statusMarkup(matter.status);

  view.querySelector("#timeline").innerHTML = matter.timeline
    .map(
      (item, index) => `
        <li class="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-line py-3.5 text-sm">
          <span class="text-mute">${esc(item.when)}</span>
          <span class="${index === matter.timeline.length - 1 ? "font-medium text-tide" : ""}">${esc(item.label)}</span>
        </li>`,
    )
    .join("");

  view.querySelector("#documents").innerHTML = matter.documents
    .map(
      (doc) => `
        <li class="flex items-center justify-between gap-3 border-t border-line py-3.5 text-sm">
          <span>${esc(doc.name)}</span>
          <span class="shrink-0 text-mute">${esc(doc.meta)}</span>
        </li>`,
    )
    .join("");
}
