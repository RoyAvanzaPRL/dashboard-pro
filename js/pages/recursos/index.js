import { renderBreadcrumbs } from "../../components/breadcrumbs.js";
import { esc } from "../../core/dom.js";
import {
  CALC_TOOLS,
  CIRCULARS,
  CONVENIOS,
  calcById,
  circularById,
  convenioDoc,
} from "./data.js";

function prose(text) {
  return String(text || "")
    .split(/\n\n+/)
    .map((para) => `<p>${esc(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function relatedLinks(items, activeId, hrefOf) {
  return items
    .filter((item) => item.id !== activeId)
    .map(
      (item) => `<li class="border-t border-line first:border-t-0">
        <a href="${esc(hrefOf(item))}" class="block py-2.5 text-sm font-medium leading-snug hover:text-tide">${esc(item.title)}</a>
      </li>`,
    )
    .join("");
}

export function mountCircular(main, route) {
  const root = main.querySelector("#circular-page");
  if (!root) return;
  const item = circularById(route.param || "verifactu");
  document.title = `${item.title} · Albor`;
  renderBreadcrumbs(root, [
    { label: "Inicio", href: "#/resumen" },
    { label: item.title },
  ]);

  root.querySelector("#circular-title").textContent = item.title;
  root.querySelector("#circular-meta").textContent = `Fecha: ${item.date} · ${item.scope}`;
  root.querySelector("#circular-summary").textContent = item.summary;
  root.querySelector("#circular-body").innerHTML = prose(item.body);
  root.querySelector("#circular-side-date").textContent = item.date;
  root.querySelector("#circular-side-scope").textContent = item.scope;
  root.querySelector("#circular-side-owner").textContent = item.owner;

  const impact = root.querySelector("#circular-impact");
  const impactText = root.querySelector("#circular-impact-text");
  if (item.impact) {
    impact.hidden = false;
    impactText.textContent = item.impact;
  } else {
    impact.hidden = true;
  }

  root.querySelector("#circular-related").innerHTML = relatedLinks(
    CIRCULARS,
    item.id,
    (row) => `#/circular/${encodeURIComponent(row.id)}`,
  );
}

export function mountCalculos(main) {
  const root = main.querySelector("#calculos-page");
  if (!root) return;
  document.title = "Herramientas de cálculo · Albor";
  renderBreadcrumbs(root, [
    { label: "Inicio", href: "#/resumen" },
    { label: "Herramientas de cálculo" },
  ]);
  root.querySelector("#calculos-count").textContent = `${CALC_TOOLS.length} herramientas`;
  root.querySelector("#calculos-list").innerHTML = CALC_TOOLS.map(
    (tool) => `<li>
      <a href="#/calculo/${encodeURIComponent(tool.id)}" class="flex h-full flex-col rounded-xl border border-line px-4 py-4 transition hover:border-tide/40 hover:bg-[#f8fbfa]">
        <span class="text-[11px] font-semibold uppercase tracking-wide text-[#b45309]">${esc(tool.area)}</span>
        <span class="mt-2 text-sm font-semibold leading-snug">${esc(tool.title)}</span>
        <span class="mt-2 flex-1 text-sm leading-relaxed text-mute">${esc(tool.summary)}</span>
        <span class="mt-4 text-sm font-medium text-tide">Abrir →</span>
      </a>
    </li>`,
  ).join("");
}

export function mountCalculo(main, route) {
  const root = main.querySelector("#calculo-page");
  if (!root) return;
  const tool = calcById(route.param);
  document.title = `${tool.title} · Albor`;
  renderBreadcrumbs(root, [
    { label: "Inicio", href: "#/resumen" },
    { label: "Herramientas de cálculo", href: "#/calculos" },
    { label: tool.title },
  ]);

  root.querySelector("#calculo-subtitle").textContent = tool.area;
  root.querySelector("#calculo-title").textContent = tool.title;
  root.querySelector("#calculo-summary").textContent = tool.summary;
  root.querySelector("#calculo-body").innerHTML = prose(tool.body);
  root.querySelector("#calculo-note").textContent = tool.note;
  root.querySelector("#calculo-side-area").textContent = tool.area;
  root.querySelector("#calculo-side-updated").textContent = tool.updated;
  root.querySelector("#calculo-related").innerHTML = relatedLinks(
    CALC_TOOLS,
    tool.id,
    (row) => `#/calculo/${encodeURIComponent(row.id)}`,
  );
}

function parseConvenioParam(raw = "") {
  const value = raw || "aeat-convenio";
  for (const orgId of Object.keys(CONVENIOS)) {
    if (value === orgId) return { orgId, docId: "convenio" };
    if (value.startsWith(`${orgId}-`)) return { orgId, docId: value.slice(orgId.length + 1) };
  }
  return { orgId: "aeat", docId: value };
}

export function mountConvenios(main, route) {
  const root = main.querySelector("#convenios-page");
  if (!root) return;
  const org = CONVENIOS[route.param] || CONVENIOS.aeat;
  document.title = `Convenios · ${org.org} · Albor`;
  renderBreadcrumbs(root, [
    { label: "Inicio", href: "#/resumen" },
    { label: `Convenios · ${org.org}` },
  ]);

  root.querySelector("#convenios-title").textContent = `Convenios · ${org.org}`;
  root.querySelector("#convenios-subtitle").textContent = `Vigencia ${org.term}`;
  root.querySelector("#convenios-count").textContent = `${org.docs.length} documentos`;
  const web = root.querySelector("#convenios-web");
  web.href = org.web;
  web.innerHTML = `Sede ${esc(org.org)}<span class="sr-only">, se abre en una pestaña nueva</span>`;

  root.querySelector("#convenios-list").innerHTML = org.docs
    .map(
      (doc) => `<li>
      <a href="#/convenio/${encodeURIComponent(`${org.id}-${doc.id}`)}" class="flex h-full flex-col rounded-xl border border-line px-4 py-4 transition hover:border-tide/40 hover:bg-[#f8fbfa]">
        <span class="text-[11px] font-semibold uppercase tracking-wide text-[#146c43]">PDF</span>
        <span class="mt-2 text-sm font-semibold leading-snug">${esc(doc.title)}</span>
        <span class="mt-2 flex-1 text-sm leading-relaxed text-mute">${esc(doc.summary)}</span>
        <span class="mt-3 text-xs text-mute">${esc(doc.meta)}</span>
        <span class="mt-4 text-sm font-medium text-tide">Abrir →</span>
      </a>
    </li>`,
    )
    .join("");
}

export function mountConvenio(main, route) {
  const root = main.querySelector("#convenio-page");
  if (!root) return;

  const { orgId, docId } = parseConvenioParam(route.param);
  const resolved = convenioDoc(orgId, docId) || convenioDoc("aeat", "convenio");
  const { org, doc } = resolved;

  document.title = `${doc.title} · ${org.org} · Albor`;
  renderBreadcrumbs(root, [
    { label: "Inicio", href: "#/resumen" },
    { label: `Convenios · ${org.org}`, href: `#/convenios/${encodeURIComponent(org.id)}` },
    { label: doc.title },
  ]);
  root.querySelector("#convenio-org").textContent = `Acuerdo con ${org.org}`;
  root.querySelector("#convenio-web").href = org.web;
  root.querySelector("#convenio-title").textContent = doc.title;
  root.querySelector("#convenio-meta").textContent = `${org.org} · ${doc.meta}`;
  root.querySelector("#convenio-summary").textContent = doc.summary;
  root.querySelector("#convenio-body").innerHTML = prose(doc.body);
  root.querySelector("#convenio-doc").textContent = `${doc.title}.pdf`;
  root.querySelector("#convenio-doc-meta").textContent = doc.meta;
  root.querySelector("#convenio-side-org").textContent = org.org;
  root.querySelector("#convenio-side-term").textContent = org.term;
  root.querySelector("#convenio-related").innerHTML = org.docs
    .map((item) => {
      const href = `#/convenio/${encodeURIComponent(`${org.id}-${item.id}`)}`;
      const on = item.id === doc.id;
      return `<li class="border-t border-line first:border-t-0">
        <a href="${href}" class="block py-2.5 text-sm leading-snug ${on ? "font-semibold text-tide" : "font-medium hover:text-tide"}">${esc(item.title)}</a>
      </li>`;
    })
    .join("");
}
