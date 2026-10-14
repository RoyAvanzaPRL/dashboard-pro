import { esc } from "../../core/dom.js";
import { money as orderMoney } from "../../core/format.js";
import { compare as tablaCmp, nextSerial, pageFor, uniqueSorted } from "../../components/table-utils.js";

let main;
let pageController;
let pageObserver;

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function formatDate(iso) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

const TABLA7_COLS = [
  { key: "asunto", label: "Asunto", kind: "text", lock: true },
  { key: "organo", label: "Órgano", kind: "text", filter: true },
  { key: "acto", label: "Acto", kind: "text" },
  { key: "plazo", label: "Plazo", kind: "date" },
  { key: "letrado", label: "Letrado", kind: "text", filter: true },
  { key: "estado", label: "Estado", kind: "status", filter: true },
  { key: "cuantia", label: "Cuantía", kind: "money" },
];

const tabla7 = {
  q: "",
  filters: {},
  sort: "plazo",
  dir: "asc",
  page: 1,
  pageSize: 10,
  cols: { asunto: true, organo: true, acto: true, plazo: true, letrado: true, estado: true, cuantia: false },
  open: "",
  pick: "",
  menu: "",
  editing: "",
  selected: new Set(),
  sheet: false,
  searchOpen: false,
  fresh: "",
  rows: [
    { id: "R01", asunto: "Licencia de terraza", organo: "Ayto. Sitges", acto: "Denegación", plazo: "2026-10-21", letrado: "Adrià Bosch", estado: "En plazo", cuantia: 12000 },
    { id: "R02", asunto: "Sanción de la terraza", organo: "Ayto. Sitges", acto: "Multa", plazo: "2026-10-09", letrado: "Adrià Bosch", estado: "Vencido", cuantia: 3000 },
    { id: "R03", asunto: "Licencia de obras", organo: "TSJ Catalunya", acto: "Resolución", plazo: "2026-11-12", letrado: "Marina Soler", estado: "En plazo", cuantia: 86000 },
    { id: "R04", asunto: "Responsabilidad patrimonial", organo: "Contencioso 3", acto: "Reclamación", plazo: "2026-10-30", letrado: "Jordi Palau", estado: "Suspendido", cuantia: 44000 },
    { id: "R05", asunto: "Cierre de actividad", organo: "Ayto. Barcelona", acto: "Orden de cierre", plazo: "2026-10-14", letrado: "Adrià Bosch", estado: "En plazo", cuantia: null },
    { id: "R06", asunto: "Expropiación del local", organo: "Jurado expropiación", acto: "Justiprecio", plazo: "2026-12-02", letrado: "Clara Nieto", estado: "En plazo", cuantia: 210000 },
    { id: "R07", asunto: "Subvención denegada", organo: "Generalitat", acto: "Resolución", plazo: "2026-09-28", letrado: "Marina Soler", estado: "Resuelto", cuantia: 18000 },
    { id: "R08", asunto: "Licencia de hotel", organo: "Ayto. Sitges", acto: "Denegación", plazo: "2026-11-04", letrado: "Adrià Bosch", estado: "En plazo", cuantia: null },
    { id: "R09", asunto: "Sanción ambiental", organo: "Generalitat", acto: "Multa", plazo: "2026-10-11", letrado: "Jordi Palau", estado: "Vencido", cuantia: 7500 },
    { id: "R10", asunto: "Contrato menor", organo: "Ayto. Barcelona", acto: "Anulación", plazo: "2026-10-18", letrado: "Clara Nieto", estado: "En plazo", cuantia: 24000 },
    { id: "R11", asunto: "Planeamiento", organo: "TSJ Catalunya", acto: "Norma", plazo: "2026-11-20", letrado: "Marina Soler", estado: "Suspendido", cuantia: null },
    { id: "R12", asunto: "Tasa de terraza", organo: "Ayto. Sitges", acto: "Liquidación", plazo: "2026-10-08", letrado: "Adrià Bosch", estado: "Vencido", cuantia: 1900 },
    { id: "R13", asunto: "Licencia de rampa", organo: "Ayto. Barcelona", acto: "Silencio", plazo: "2026-10-25", letrado: "Jordi Palau", estado: "En plazo", cuantia: 6400 },
    { id: "R14", asunto: "Personal interino", organo: "Contencioso 1", acto: "Cese", plazo: "2026-11-06", letrado: "Clara Nieto", estado: "En plazo", cuantia: null },
    { id: "R15", asunto: "Dominio público", organo: "TSJ Catalunya", acto: "Recuperación", plazo: "2026-12-15", letrado: "Marina Soler", estado: "En plazo", cuantia: 52000 },
    { id: "R16", asunto: "Sanción de tráfico", organo: "Ayto. Barcelona", acto: "Multa", plazo: "2026-06-02", letrado: "Jordi Palau", estado: "Resuelto", cuantia: 400 },
    { id: "R17", asunto: "Licencia de velador", organo: "Ayto. Sitges", acto: "Revocación", plazo: "2026-10-16", letrado: "Adrià Bosch", estado: "En plazo", cuantia: 8000 },
    { id: "R18", asunto: "Urbanismo del puerto", organo: "Generalitat", acto: "Orden", plazo: "2026-11-28", letrado: "Clara Nieto", estado: "Suspendido", cuantia: 130000 },
  ],
};

const TABLA7_WEIGHT = { asunto: 2.6, organo: 1.6, acto: 1.15, plazo: 1.0, letrado: 1.35, estado: 1.05, cuantia: 1.1 };

function tabla7Visible() {
  return TABLA7_COLS.filter((col) => tabla7.cols[col.key]);
}

const TABLA7_EXTRA = { check: 0.48, actions: 1.55 };

function tabla7Width(key) {
  const visible = tabla7Visible();
  const total = visible.reduce((sum, item) => sum + TABLA7_WEIGHT[item.key], 0) + TABLA7_EXTRA.check + TABLA7_EXTRA.actions;
  const weight = TABLA7_EXTRA[key] || TABLA7_WEIGHT[key];
  return `${((weight / total) * 100).toFixed(2)}%`;
}

function tabla7Text(col, row) {
  const value = row[col.key];
  if (value == null || value === "") return "";
  if (col.kind === "money") return orderMoney(value);
  if (col.kind === "date") return formatDate(value);
  return String(value);
}

function tabla7Tone(value) {
  if (value === "Vencido") return "bg-[#fde8e8] text-hot";
  if (value === "Resuelto") return "bg-mint text-good";
  if (value === "Suspendido") return "bg-[#f3f4f6] text-[#5c6570]";
  return "bg-mint text-[#0f766e]";
}

function tabla7ActiveFilters() {
  return TABLA7_COLS.filter((col) => tabla7.filters[col.key]);
}

function tabla7View() {
  const q = tabla7.q.trim().toLowerCase();
  let rows = tabla7.rows.filter((row) => {
    const filtersOk = tabla7ActiveFilters().every((col) => String(row[col.key] || "") === tabla7.filters[col.key]);
    if (!filtersOk) return false;
    if (!q) return true;
    return TABLA7_COLS.some((col) => tabla7Text(col, row).toLowerCase().includes(q));
  });
  const col = TABLA7_COLS.find((item) => item.key === tabla7.sort) || TABLA7_COLS[0];
  rows = rows.slice().sort((a, b) => tablaCmp(col.kind, a[col.key], b[col.key], tabla7.dir));
  const pages = Math.max(1, Math.ceil(rows.length / tabla7.pageSize));
  tabla7.page = Math.min(tabla7.page, pages);
  const start = (tabla7.page - 1) * tabla7.pageSize;
  return { rows, pageRows: rows.slice(start, start + tabla7.pageSize), pages, start };
}

function tabla7Field(col) {
  const cls = "mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-ink";
  if (col.kind === "date") return `<input data-t7-field="${col.key}" type="date" required class="${cls}" />`;
  if (col.kind === "money") return `<input data-t7-field="${col.key}" type="number" min="0" step="0.01" class="${cls}" placeholder="Opcional" />`;
  if (col.filter) {
    const list = uniqueSorted(tabla7.rows.map((row) => row[col.key])).map((value) => `<option value="${esc(value)}"></option>`).join("");
    return `<input data-t7-field="${col.key}" list="tabla7-list-${col.key}" required class="${cls}" placeholder="Elige o escribe" /><datalist id="tabla7-list-${col.key}">${list}</datalist>`;
  }
  return `<input data-t7-field="${col.key}" required class="${cls}" />`;
}

function tabla7MenuButton(on, marked) {
  return `inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium ${on || marked ? "border-ink bg-[#f4f5f6]" : "border-line bg-white"}`;
}

function tabla7SyncGutter(root) {
  const body = root.querySelector("#tabla7-body-scroll");
  const head = root.querySelector("#tabla7-head-clip");
  if (!body || !head) return;
  const gap = body.offsetWidth - body.clientWidth;
  head.style.paddingRight = gap ? `${gap}px` : "";
}

function tabla7CheckIcon() {
  return `<svg viewBox="0 0 24 24" class="line size-3.5 text-ink" aria-hidden="true"><path d="m5 12 5 5L20 7"></path></svg>`;
}

function drawTabla7() {
  const root = main.querySelector("#tabla7");
  if (!root) return;
  for (const id of [...tabla7.selected]) {
    if (!tabla7.rows.some((row) => row.id === id)) tabla7.selected.delete(id);
  }
  if (tabla7.menu && !tabla7.rows.some((row) => row.id === tabla7.menu)) tabla7.menu = "";
  const { rows, pageRows, pages, start } = tabla7View();
  const visible = tabla7Visible();
  const active = tabla7ActiveFilters();
  const noun = tabla7.rows.length === 1 ? "recurso" : "recursos";
  root.querySelector("#tabla7-count").textContent = rows.length === tabla7.rows.length ? `${rows.length} ${rows.length === 1 ? "recurso" : "recursos"}` : `${rows.length} de ${tabla7.rows.length} ${noun}`;
  const search = root.querySelector("#tabla7-q");
  if (search.value !== tabla7.q) search.value = tabla7.q;
  const searchBtn = root.querySelector("#tabla7-search-btn");
  const searchForm = root.querySelector("#tabla7-search");
  root.querySelector("#tabla7-search-wrap").classList.toggle("is-open", tabla7.searchOpen);
  searchBtn.setAttribute("aria-expanded", tabla7.searchOpen ? "true" : "false");
  searchForm.setAttribute("aria-hidden", tabla7.searchOpen ? "false" : "true");
  search.tabIndex = tabla7.searchOpen ? 0 : -1;
  const colsBtn = root.querySelector("#tabla7-cols-btn");
  colsBtn.querySelector("span").textContent = "Columnas";
  const colsOpen = tabla7.open === "columnas";
  colsBtn.setAttribute("aria-expanded", colsOpen ? "true" : "false");
  colsBtn.className = tabla7MenuButton(colsOpen, false);

  root.querySelector("#tabla7-pop-cols").hidden = tabla7.open !== "columnas";
  root.querySelector("#tabla7-pop-cols").innerHTML = TABLA7_COLS.map((col) => `<label class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-[#f6f7f8] ${col.lock ? "text-mute" : ""}"><input data-t7-col="${col.key}" type="checkbox" class="accent-ink" ${tabla7.cols[col.key] ? "checked" : ""} ${col.lock ? "disabled" : ""} />${esc(col.label)}</label>`).join("");

  const colgroup = [`<col style="width:${tabla7Width("check")}">`]
    .concat(visible.map((col) => `<col style="width:${tabla7Width(col.key)}">`))
    .concat(`<col style="width:${tabla7Width("actions")}">`)
    .join("");
  root.querySelector("#tabla7-head-cols").innerHTML = colgroup;
  root.querySelector("#tabla7-body-cols").innerHTML = colgroup;

  const headCell = "bg-[#f7f8f9] font-medium";
  root.querySelector("#tabla7-head").innerHTML = `<tr>
    <th class="${headCell} px-2 text-center" scope="col" style="width:${tabla7Width("check")}"><input data-t7-check="page" type="checkbox" class="size-4 align-middle accent-ink" aria-label="Seleccionar esta página" /></th>
    ${visible
      .map((col) => {
        const on = tabla7.sort === col.key;
        const mark = on ? (tabla7.dir === "asc" ? "↑" : "↓") : "";
        const align = col.kind === "money" ? "justify-end text-right" : "text-left";
        const pad = col.key === "estado" ? "pl-2 pr-1" : "px-2";
        const hide = col.lock
          ? ""
          : `<button type="button" data-t7-hide="${col.key}" aria-label="Ocultar ${esc(col.label)}" class="grid size-0 shrink-0 place-items-center overflow-hidden rounded text-[#5c6570] opacity-0 hover:bg-[#eceef0] hover:text-ink focus-visible:mr-1 focus-visible:size-5 focus-visible:opacity-100 group-hover:mr-1 group-hover:size-5 group-hover:opacity-100 group-focus-within:mr-1 group-focus-within:size-5 group-focus-within:opacity-100"><svg viewBox="0 0 24 24" class="line size-3" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"></path></svg></button>`;
        return `<th class="group ${headCell}" scope="col" style="width:${tabla7Width(col.key)}"><div class="flex w-full min-w-0 items-center ${align}"><button type="button" data-t7-sort="${col.key}" class="inline-flex min-w-0 items-center gap-1 ${pad} py-3 text-xs font-medium ${align} ${on ? "text-ink" : "text-[#5c6570]"}"><span class="truncate">${esc(col.label)}</span><span class="text-[10px]">${mark}</span></button>${hide}</div></th>`;
      })
      .join("")}
    <th class="${headCell}" scope="col" style="width:${tabla7Width("actions")}"><span class="flex items-center justify-center px-1 py-3 text-xs font-medium text-[#5c6570]">Acciones</span></th>
  </tr>`;

  const narrowed = tabla7.q.trim() || active.length;
  root.querySelector("#tabla7-body").innerHTML = pageRows.length
    ? pageRows
        .map((row, index) => {
          const selected = tabla7.selected.has(row.id);
          const tone = row.id === tabla7.fresh ? "bg-[#f4fbf8]" : selected ? "bg-[#f4f6f8]" : "hover:bg-[#fafbfc]";
          const menuOn = tabla7.menu === row.id;
          const rowLine = index === pageRows.length - 1 ? "" : "shadow-[inset_0_-1px_0_0_#eceef1]";
          const cells = visible
            .map((col) => {
              const text = tabla7Text(col, row);
              const align = col.kind === "money" ? "text-right tabular-nums" : "";
              const weight = col.key === "asunto" ? "font-medium text-ink" : "text-[#3c424a]";
              const clip = "truncate";
              const pad = col.key === "estado" ? "pl-2 pr-1" : "px-2";
              const body = !text ? `<span class="text-mute">—</span>` : col.kind === "status" ? `<span class="rounded-full px-2 py-0.5 text-xs font-medium ${tabla7Tone(text)}">${esc(text)}</span>` : esc(text);
              return `<td class="${pad} py-3 ${clip} ${align} ${weight}" ${text ? `title="${esc(text)}"` : ""}>${body}</td>`;
            })
            .join("");
          return `<tr class="${tone} ${rowLine}">
            <td class="px-2 text-center"><input data-t7-check="row" data-t7-id="${esc(row.id)}" type="checkbox" class="size-4 align-middle accent-ink" ${selected ? "checked" : ""} aria-label="Seleccionar ${esc(row.asunto)}" /></td>
            ${cells}
            <td class="px-1 py-3">
              <div class="flex items-center justify-center gap-0.5">
                <button type="button" data-t7-edit="${esc(row.id)}" class="grid size-7 place-items-center rounded-md text-mute hover:bg-[#eef0f2] hover:text-ink" aria-label="Editar ${esc(row.asunto)}"><svg viewBox="0 0 24 24" class="line size-4"><path d="M4 20h4L18 10l-4-4L4 16v4Z"></path><path d="m12.5 7.5 4 4"></path></svg></button>
                <button type="button" data-t7-remove="${esc(row.id)}" class="grid size-7 place-items-center rounded-md text-mute hover:bg-[#eef0f2] hover:text-hot" aria-label="Borrar ${esc(row.asunto)}"><svg viewBox="0 0 24 24" class="line size-4"><path d="M5 7h14M9 7V5h6v2M8 7l1 13h6l1-13"></path></svg></button>
                <button type="button" data-t7-menu data-t7-menu-btn="${esc(row.id)}" class="grid size-7 place-items-center rounded-md hover:bg-[#eef0f2] hover:text-ink ${menuOn ? "bg-[#eef0f2] text-ink" : "text-mute"}" aria-expanded="${menuOn ? "true" : "false"}" aria-label="Más opciones de ${esc(row.asunto)}"><svg viewBox="0 0 24 24" class="size-4" aria-hidden="true"><circle cx="6" cy="12" r="1.35" fill="currentColor"></circle><circle cx="12" cy="12" r="1.35" fill="currentColor"></circle><circle cx="18" cy="12" r="1.35" fill="currentColor"></circle></svg></button>
              </div>
            </td>
          </tr>`;
        })
        .join("")
    : `<tr><td colspan="${visible.length + 2}" class="px-3 py-12 text-center text-sm text-mute">Nada coincide con esta vista.${narrowed ? ` <button type="button" data-t7-reset class="font-semibold text-ink underline">Limpiar</button>` : ""}</td></tr>`;

  const pageIds = pageRows.map((row) => row.id);
  const pickedOnPage = pageIds.filter((id) => tabla7.selected.has(id)).length;
  const headCheck = root.querySelector("[data-t7-check='page']");
  if (headCheck) {
    headCheck.checked = pageIds.length > 0 && pickedOnPage === pageIds.length;
    headCheck.indeterminate = pickedOnPage > 0 && pickedOnPage < pageIds.length;
  }

  const context = root.querySelector("#tabla7-context");
  const selectedCount = tabla7.selected.size;
  const filtersHtml = TABLA7_COLS.filter((col) => col.filter)
    .map((col) => {
      const picked = tabla7.filters[col.key] || "";
      const open = tabla7.pick === col.key;
      const options = [{ value: "", label: "Todos" }].concat(uniqueSorted(tabla7.rows.map((row) => row[col.key])).map((value) => ({ value, label: value })));
      const list = open
        ? `<div data-t7-keep class="absolute left-0 top-full z-30 mt-1 max-h-44 w-full min-w-[11rem] overflow-y-auto rounded-xl border border-line bg-white p-1 shadow-[0_16px_40px_rgba(20,24,28,0.12)]">${options
            .map((item) => {
              const on = item.value === picked;
              return `<button type="button" data-t7-choice="${col.key}" data-t7-value="${esc(item.value)}" class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm ${on ? "bg-[#f3f4f6] font-semibold" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}"><span class="truncate">${esc(item.label)}</span>${on ? tabla7CheckIcon() : ""}</button>`;
            })
            .join("")}</div>`
        : "";
      return `<div class="flex shrink-0 items-center gap-1.5"><span class="text-xs font-medium text-mute">${esc(col.label)}</span><div data-t7-keep class="relative"><button type="button" data-t7-keep data-t7-pick="${col.key}" class="flex h-8 w-32 items-center justify-between gap-2 rounded-lg border bg-white px-2.5 text-sm ${open ? "border-ink" : "border-line"}" aria-expanded="${open ? "true" : "false"}"><span class="truncate">${esc(picked || "Todos")}</span><svg viewBox="0 0 24 24" class="line size-3.5 shrink-0 text-mute" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>${list}</div></div>`;
    })
    .join("");
  const clearHtml = active.length ? `<button type="button" data-t7-clear class="shrink-0 px-1 text-xs font-medium text-[#5c6570] hover:text-ink">Quitar filtros</button>` : "";
  const selectHtml = selectedCount
    ? `<div class="ml-auto flex h-8 shrink-0 items-center gap-3 rounded-lg bg-[#f4f6f8] px-4"><span class="font-medium">${selectedCount === 1 ? "1 seleccionado" : `${selectedCount} seleccionados`}</span><button type="button" data-t7-bulk-remove class="font-medium text-hot">Borrar</button><button type="button" data-t7-bulk-clear class="font-medium text-[#5c6570]">Anular</button></div>`
    : "";
  context.innerHTML = `<div class="flex shrink-0 items-center gap-3">${filtersHtml}${clearHtml}</div>${selectHtml}`;

  const idle = rows.length === 0;
  const sizeOpen = tabla7.open === "tamano";
  root.querySelector("#tabla7-foot").innerHTML = `<div class="flex min-w-0 items-center gap-3">
      <p class="text-sm text-mute">Mostrando</p>
      <div class="relative">
        <button type="button" id="tabla7-size-btn" data-t7-keep data-t7-toggle="tamano" class="inline-flex h-8 items-center gap-1.5 rounded-lg border bg-white px-2.5 text-sm font-medium ${sizeOpen ? "border-ink" : "border-line"}" aria-expanded="${sizeOpen ? "true" : "false"}" aria-controls="tabla7-pop-size" aria-label="${tabla7.pageSize} por página">
          <span id="tabla7-size-label">${tabla7.pageSize}</span>
          <svg viewBox="0 0 24 24" class="line size-3.5 text-mute"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
        <div id="tabla7-pop-size" data-t7-keep data-t7-pop="tamano" hidden class="absolute bottom-10 left-0 z-30 w-28 rounded-xl border border-line bg-white p-1 shadow-[0_16px_40px_rgba(20,24,28,0.12)]"></div>
      </div>
      <p class="text-sm text-mute">de ${rows.length}</p>
    </div>
    <div class="flex items-center gap-3">
      <button type="button" data-t7-step="-1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f6f7f8] disabled:opacity-40" ${tabla7.page === 1 ? "disabled" : ""}>Anterior</button>
      <span class="min-w-12 text-center text-sm tabular-nums text-[#5c6570]">${idle ? "0 / 0" : `${tabla7.page} / ${pages}`}</span>
      <button type="button" data-t7-step="1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f6f7f8] disabled:opacity-40" ${idle || tabla7.page === pages ? "disabled" : ""}>Siguiente</button>
    </div>`;

  root.querySelector("#tabla7-pop-size").hidden = !sizeOpen;
  root.querySelector("#tabla7-pop-size").innerHTML = [5, 10, 20]
    .map((n) => {
      const on = tabla7.pageSize === n;
      return `<button type="button" data-t7-size="${n}" class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm ${on ? "bg-[#f3f4f6] font-semibold" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}" aria-label="${n} por página"><span>${n}</span>${on ? tabla7CheckIcon() : ""}</button>`;
    })
    .join("");

  const menu = root.querySelector("#tabla7-row-menu");
  const menuRow = tabla7.rows.find((row) => row.id === tabla7.menu);
  if (!menuRow) menu.hidden = true;
  else {
    const marked = tabla7.selected.has(menuRow.id);
    menu.hidden = false;
    menu.innerHTML = `<button type="button" data-t7-more="duplicate" class="flex w-full rounded-lg px-2.5 py-2 text-left text-sm hover:bg-[#f6f7f8]">Duplicar</button><button type="button" data-t7-more="select" class="flex w-full rounded-lg px-2.5 py-2 text-left text-sm hover:bg-[#f6f7f8]">${marked ? "Quitar selección" : "Seleccionar"}</button>`;
    const anchor = root.querySelector(`[data-t7-menu-btn="${CSS.escape(menuRow.id)}"]`);
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      const width = menu.offsetWidth || 176;
      const height = menu.offsetHeight || 84;
      menu.style.left = `${Math.min(window.innerWidth - width - 12, Math.max(12, rect.right - width))}px`;
      const below = rect.bottom + 6;
      menu.style.top = `${below + height > window.innerHeight - 8 ? Math.max(8, rect.top - height - 6) : below}px`;
    }
  }

  root.querySelector("#tabla7-sheet-title").textContent = tabla7.editing ? "Editar recurso" : "Nuevo recurso";
  root.querySelector("#tabla7-sheet").hidden = !tabla7.sheet;
  tabla7SyncGutter(root);
}

function bindTabla7() {
  const root = main.querySelector("#tabla7");
  if (!root) return;
  const bodyScroll = root.querySelector("#tabla7-body-scroll");
  if (bodyScroll) {
    pageObserver = new ResizeObserver(() => tabla7SyncGutter(root));
    pageObserver.observe(bodyScroll);
  }
  const search = root.querySelector("#tabla7-q");
  const sheet = root.querySelector("#tabla7-sheet");
  const fields = root.querySelector("#tabla7-fields");
  search.addEventListener("input", () => {
    tabla7.q = search.value;
    tabla7.page = 1;
    tabla7.fresh = "";
    drawTabla7();
  });
  root.querySelector("#tabla7-search").addEventListener("submit", (event) => event.preventDefault());
  root.querySelector("#tabla7-search-btn").addEventListener("click", () => {
    tabla7.searchOpen = !tabla7.searchOpen;
    tabla7.open = "";
    tabla7.pick = "";
    tabla7.menu = "";
    drawTabla7();
    if (tabla7.searchOpen) search.focus();
  });
  function tabla7ReadFields() {
    const data = {};
    TABLA7_COLS.forEach((col) => {
      const input = fields.querySelector(`[data-t7-field="${col.key}"]`);
      const raw = input.value.trim();
      data[col.key] = col.kind === "money" ? (raw === "" ? null : Number(raw)) : raw;
    });
    return data;
  }

  function tabla7ShowSheet(row) {
    tabla7.editing = row ? row.id : "";
    tabla7.sheet = true;
    tabla7.open = "";
    tabla7.pick = "";
    tabla7.menu = "";
    fields.innerHTML = TABLA7_COLS.map((col) => {
      const hint = col.kind === "money" ? `<span class="mt-1 block text-[11px] font-normal text-mute">Si la rellenas, la columna aparece en la tabla.</span>` : "";
      return `<label class="block text-xs font-medium text-mute">${esc(col.label)}${tabla7Field(col)}${hint}</label>`;
    }).join("");
    TABLA7_COLS.forEach((col) => {
      const input = fields.querySelector(`[data-t7-field="${col.key}"]`);
      if (!row) {
        if (col.key === "plazo") input.value = "2026-10-08";
        return;
      }
      input.value = row[col.key] == null ? "" : String(row[col.key]);
    });
    drawTabla7();
    fields.querySelector("input")?.focus();
  }

  root.addEventListener("click", (event) => {
    if (tabla7.pick && !event.target.closest("[data-t7-keep]")) tabla7.pick = "";
    const more = event.target.closest("[data-t7-more]");
    if (more) {
      const row = tabla7.rows.find((item) => item.id === tabla7.menu);
      const action = more.dataset.t7More;
      tabla7.menu = "";
      if (row && action === "duplicate") {
        const copy = { ...row, id: nextSerial(tabla7.rows, "R"), asunto: `${row.asunto} (copia)` };
        const index = tabla7.rows.findIndex((item) => item.id === row.id);
        tabla7.rows.splice(index + 1, 0, copy);
        tabla7.fresh = copy.id;
        tabla7.page = pageFor(tabla7View().rows, copy.id, tabla7.pageSize);
      } else if (row && action === "select") {
        if (tabla7.selected.has(row.id)) tabla7.selected.delete(row.id);
        else tabla7.selected.add(row.id);
      }
      drawTabla7();
      return;
    }
    const menuBtn = event.target.closest("[data-t7-menu-btn]");
    if (menuBtn) {
      const id = menuBtn.dataset.t7MenuBtn;
      tabla7.menu = tabla7.menu === id ? "" : id;
      tabla7.open = "";
      tabla7.pick = "";
      drawTabla7();
      return;
    }
    const edit = event.target.closest("[data-t7-edit]");
    if (edit) {
      const row = tabla7.rows.find((item) => item.id === edit.dataset.t7Edit);
      if (row) tabla7ShowSheet(row);
      return;
    }
    const pick = event.target.closest("[data-t7-pick]");
    if (pick) {
      tabla7.pick = tabla7.pick === pick.dataset.t7Pick ? "" : pick.dataset.t7Pick;
      tabla7.open = "";
      tabla7.menu = "";
      drawTabla7();
      return;
    }
    const choice = event.target.closest("[data-t7-choice]");
    if (choice) {
      const value = choice.dataset.t7Value;
      if (value) tabla7.filters[choice.dataset.t7Choice] = value;
      else delete tabla7.filters[choice.dataset.t7Choice];
      tabla7.pick = "";
      tabla7.page = 1;
      tabla7.fresh = "";
      tabla7.menu = "";
      drawTabla7();
      return;
    }
    const size = event.target.closest("[data-t7-size]");
    if (size) {
      tabla7.pageSize = Number(size.dataset.t7Size);
      tabla7.page = 1;
      tabla7.open = "";
      tabla7.fresh = "";
      drawTabla7();
      return;
    }
    const toggle = event.target.closest("[data-t7-toggle]");
    if (toggle) {
      const name = toggle.dataset.t7Toggle;
      tabla7.open = tabla7.open === name ? "" : name;
      tabla7.pick = "";
      tabla7.menu = "";
      drawTabla7();
      return;
    }
    const hideCol = event.target.closest("[data-t7-hide]");
    if (hideCol) {
      const key = hideCol.dataset.t7Hide;
      const spec = TABLA7_COLS.find((item) => item.key === key);
      if (spec && !spec.lock) tabla7.cols[key] = false;
      drawTabla7();
      return;
    }
    const sort = event.target.closest("[data-t7-sort]");
    if (sort) {
      const key = sort.dataset.t7Sort;
      tabla7.dir = tabla7.sort === key && tabla7.dir === "asc" ? "desc" : "asc";
      tabla7.sort = key;
      tabla7.page = 1;
      tabla7.fresh = "";
      drawTabla7();
      return;
    }
    if (event.target.closest("[data-t7-clear]")) {
      tabla7.filters = {};
      tabla7.pick = "";
      tabla7.page = 1;
      tabla7.fresh = "";
      drawTabla7();
      return;
    }
    if (event.target.closest("[data-t7-reset]")) {
      tabla7.q = "";
      tabla7.filters = {};
      tabla7.pick = "";
      tabla7.page = 1;
      tabla7.fresh = "";
      search.value = "";
      drawTabla7();
      return;
    }
    const step = event.target.closest("[data-t7-step]");
    if (step && !step.disabled) {
      tabla7.page += Number(step.dataset.t7Step);
      tabla7.fresh = "";
      tabla7.menu = "";
      drawTabla7();
      return;
    }
    const remove = event.target.closest("[data-t7-remove]");
    if (remove) {
      const id = remove.dataset.t7Remove;
      tabla7.rows = tabla7.rows.filter((row) => row.id !== id);
      tabla7.selected.delete(id);
      if (tabla7.fresh === id) tabla7.fresh = "";
      if (tabla7.editing === id) {
        tabla7.editing = "";
        tabla7.sheet = false;
      }
      if (tabla7.menu === id) tabla7.menu = "";
      drawTabla7();
      return;
    }
    if (event.target.closest("[data-t7-bulk-remove]")) {
      tabla7.rows = tabla7.rows.filter((row) => !tabla7.selected.has(row.id));
      if (tabla7.selected.has(tabla7.fresh)) tabla7.fresh = "";
      if (tabla7.selected.has(tabla7.editing)) {
        tabla7.editing = "";
        tabla7.sheet = false;
      }
      tabla7.selected.clear();
      tabla7.menu = "";
      drawTabla7();
      return;
    }
    if (event.target.closest("[data-t7-bulk-clear]")) {
      tabla7.selected.clear();
      drawTabla7();
      return;
    }
    if (event.target.id === "tabla7-add") {
      tabla7ShowSheet(null);
      return;
    }
    if (event.target.closest("[data-t7-close]") || event.target.id === "tabla7-sheet") {
      tabla7.sheet = false;
      tabla7.editing = "";
      drawTabla7();
    }
  });
  root.addEventListener("change", (event) => {
    const col = event.target.closest("[data-t7-col]");
    if (col && !col.disabled) {
      tabla7.cols[col.dataset.t7Col] = col.checked;
      drawTabla7();
      return;
    }
    const check = event.target.closest("[data-t7-check]");
    if (!check) return;
    if (check.dataset.t7Check === "page") {
      tabla7View().pageRows.forEach((row) => (check.checked ? tabla7.selected.add(row.id) : tabla7.selected.delete(row.id)));
    } else if (check.checked) tabla7.selected.add(check.dataset.t7Id);
    else tabla7.selected.delete(check.dataset.t7Id);
    tabla7.menu = "";
    drawTabla7();
  });
  sheet.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = tabla7ReadFields();
    let id = tabla7.editing;
    if (id) {
      const current = tabla7.rows.find((item) => item.id === id);
      if (current) Object.assign(current, data);
    } else {
      id = nextSerial(tabla7.rows, "R");
      tabla7.rows.unshift({ id, ...data });
      tabla7.q = "";
      tabla7.filters = {};
      search.value = "";
    }
    if (data.cuantia != null) tabla7.cols.cuantia = true;
    tabla7.fresh = id;
    tabla7.sheet = false;
    tabla7.editing = "";
    tabla7.open = "";
    tabla7.page = pageFor(tabla7View().rows, id, tabla7.pageSize);
    fields.innerHTML = "";
    drawTabla7();
  });
  drawTabla7();
}

export function mount(root) {
  main = root;
  pageController?.abort();
  pageController = new AbortController();
  const { signal } = pageController;

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element) || !target.isConnected) return;
    let dirty = false;
    if (tabla7.menu && !target.closest("[data-t7-menu]")) {
      tabla7.menu = "";
      dirty = true;
    }
    if ((tabla7.open || tabla7.pick) && !target.closest("[data-t7-keep]")) {
      tabla7.open = "";
      tabla7.pick = "";
      dirty = true;
    }
    if (dirty && main.querySelector("#tabla7")) drawTabla7();
  }, { signal });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (tabla7.open || tabla7.pick || tabla7.sheet || tabla7.menu) {
      tabla7.open = "";
      tabla7.pick = "";
      tabla7.menu = "";
      tabla7.sheet = false;
      tabla7.editing = "";
      drawTabla7();
    }
  }, { signal });

  bindTabla7();
}

export function unmount() {
  pageController?.abort();
  pageController = undefined;
  pageObserver?.disconnect();
  pageObserver = undefined;
}
