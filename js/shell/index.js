import { clients, matters } from "../../data/index.js";
import { esc } from "../core/dom.js";
import { navKey, parseRoute } from "../core/route.js";

const PARENTS = {
  "bandeja-recibidos": "bandeja",
  "bandeja-pendientes": "bandeja",
  "bandeja-hechos": "bandeja",
};

const SEDES = [
  { id: "barcelona", name: "Barcelona", hint: "Mesa" },
  { id: "sitges", name: "Sitges", hint: "Terraza" },
  { id: "girona", name: "Girona", hint: "Oficina" },
  { id: "tarragona", name: "Tarragona", hint: "Puerto" },
  { id: "lleida", name: "Lleida", hint: "Oficina" },
  { id: "madrid", name: "Madrid", hint: "Sede" },
  { id: "valencia", name: "Valencia", hint: "Sede" },
  { id: "bilbao", name: "Bilbao", hint: "Oficina" },
  { id: "sevilla", name: "Sevilla", hint: "Sede" },
  { id: "zaragoza", name: "Zaragoza", hint: "Oficina" },
  { id: "palma", name: "Palma", hint: "Islas" },
  { id: "malaga", name: "Málaga", hint: "Sede" },
];

const state = { compact: false, sede: "barcelona" };
const openBranches = new Set();
let elements;

function closeLayer(panel, toggle) {
  if (!panel || !toggle) return;
  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function toggleLayer(panel, toggle) {
  const open = panel.hidden;
  closeFloaters();
  panel.hidden = !open;
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

function sedeById(id) {
  return SEDES.find((item) => item.id === id) || SEDES[0];
}

function renderSedes(query = "") {
  const q = query.trim().toLowerCase();
  const rows = SEDES.filter((item) => !q || item.name.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q));
  elements.sedeList.innerHTML = rows.length
    ? rows
        .map((item) => {
          const on = state.sede === item.id;
          return `<button type="button" data-sede="${esc(item.id)}" class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${on ? "bg-[#f3f4f6] font-medium" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}"><span>${esc(item.name)}</span><span class="text-xs text-mute">${esc(item.hint)}</span></button>`;
        })
        .join("")
    : '<p class="px-3 py-4 text-center text-sm text-mute">Ninguna sede coincide.</p>';
}

function syncSedeLabel() {
  elements.sedeLabel.textContent = sedeById(state.sede).name;
}

function paletteItems(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return Object.entries(matters)
    .filter(([id, matter]) => {
      const clientName = clients[matter.clientId]?.name || "";
      return `${id} ${matter.title} ${matter.area} ${matter.lead} ${matter.opponent} ${clientName}`.toLowerCase().includes(q);
    })
    .slice(0, 8)
    .map(([id, matter]) => ({ href: `#/expediente/${id}`, title: matter.title, meta: `${id} · ${matter.area}` }));
}

function renderPalette() {
  const items = paletteItems(elements.globalSearch.value);
  if (!elements.globalSearch.value.trim()) {
    elements.palette.hidden = true;
    return;
  }
  elements.palette.hidden = false;
  elements.paletteList.innerHTML = items.length
    ? items
        .map(
          (item) => `<a href="${esc(item.href)}" class="block rounded-lg px-3 py-2 hover:bg-[#f6f7f8]">
            <p class="text-sm font-medium">${esc(item.title)}</p>
            <p class="text-xs text-mute">${esc(item.meta)}</p>
          </a>`,
        )
        .join("")
    : '<p class="px-3 py-3 text-sm text-mute">Nada coincide con esa búsqueda.</p>';
}

function syncNavFade() {
  const remaining = elements.navScroll.scrollHeight - elements.navScroll.clientHeight - elements.navScroll.scrollTop;
  elements.navScroll.classList.toggle("can-scroll-more", remaining > 8);
}

function syncBranches(route, keepManual = false) {
  const parent = PARENTS[route.name] || "";
  if (parent && !keepManual) openBranches.add(parent);
  document.querySelectorAll("[data-branch]").forEach((branch) => {
    const open = openBranches.has(branch.dataset.branch);
    const subs = branch.querySelector(".nav-subs");
    const toggle = branch.querySelector(".nav-chevron");
    subs.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    branch.classList.toggle("is-open", open);
  });
  syncNavFade();
}

export function closeFloaters() {
  if (!elements) return;
  closeLayer(elements.noticePanel, elements.noticeToggle);
  closeLayer(elements.sedePanel, elements.sedeToggle);
  elements.palette.hidden = true;
}

export function syncNavigation(route) {
  const section = navKey(route.name);
  const parent = PARENTS[route.name] || "";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const on = link.dataset.nav === section || link.dataset.nav === parent;
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  syncBranches(route);
}

export function initShell() {
  elements = {
    main: document.querySelector("#main"),
    sidebar: document.querySelector("#sidebar"),
    noticeToggle: document.querySelector("#notice-toggle"),
    noticePanel: document.querySelector("#notice-panel"),
    sedeToggle: document.querySelector("#sede-toggle"),
    sedePanel: document.querySelector("#sede-panel"),
    sedeLabel: document.querySelector("#sede-label"),
    sedeSearch: document.querySelector("#sede-q"),
    sedeList: document.querySelector("#sede-list"),
    palette: document.querySelector("#palette"),
    globalSearch: document.querySelector("#q-global"),
    navScroll: document.querySelector(".nav-scroll"),
  };
  elements.paletteList = elements.palette.querySelector("div");

  document.querySelectorAll("[data-branch] .nav-chevron").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.closest("[data-branch]").dataset.branch;
      if (openBranches.has(id)) openBranches.delete(id);
      else openBranches.add(id);
      syncBranches(parseRoute(), true);
    });
  });

  document.querySelector("#sidebar-toggle").addEventListener("click", () => {
    state.compact = !state.compact;
    elements.sidebar.classList.toggle("is-compact", state.compact);
    document.querySelector("#sidebar-toggle").setAttribute("aria-pressed", state.compact ? "true" : "false");
    syncNavFade();
  });

  elements.noticeToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLayer(elements.noticePanel, elements.noticeToggle);
  });

  elements.sedeToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const opening = elements.sedePanel.hidden;
    toggleLayer(elements.sedePanel, elements.sedeToggle);
    if (opening) {
      elements.sedeSearch.value = "";
      elements.sedeSearch.focus();
      renderSedes();
    }
  });

  elements.sedeSearch.addEventListener("input", () => renderSedes(elements.sedeSearch.value));
  elements.sedeSearch.addEventListener("click", (event) => event.stopPropagation());
  elements.sedeSearch.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLayer(elements.sedePanel, elements.sedeToggle);
    if (event.key === "Enter") elements.sedeList.querySelector("[data-sede]")?.click();
  });
  elements.sedeList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sede]");
    if (!button) return;
    state.sede = button.dataset.sede;
    syncSedeLabel();
    closeLayer(elements.sedePanel, elements.sedeToggle);
  });

  elements.globalSearch.addEventListener("input", renderPalette);
  elements.globalSearch.addEventListener("focus", renderPalette);
  elements.globalSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const first = elements.paletteList.querySelector("a");
      if (first) location.hash = first.getAttribute("href");
    }
    if (event.key === "Escape") elements.palette.hidden = true;
  });

  elements.navScroll.addEventListener("scroll", syncNavFade, { passive: true });
  new ResizeObserver(syncNavFade).observe(elements.navScroll);

  document.addEventListener("pointerover", (event) => {
    const scroller = event.target.closest?.(".overflow-y-auto");
    if (!scroller || scroller.contains(event.relatedTarget)) return;
    scroller.classList.add("is-over");
  });
  document.addEventListener("pointerout", (event) => {
    const scroller = event.target.closest?.(".overflow-y-auto");
    if (!scroller || scroller.contains(event.relatedTarget)) return;
    scroller.classList.remove("is-over");
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      elements.globalSearch.focus();
      elements.globalSearch.select();
    }
  });
  document.addEventListener("click", (event) => {
    if (!elements.noticePanel.hidden && !elements.noticePanel.contains(event.target) && !elements.noticeToggle.contains(event.target)) {
      closeLayer(elements.noticePanel, elements.noticeToggle);
    }
    if (!elements.sedePanel.hidden && !elements.sedePanel.contains(event.target) && !elements.sedeToggle.contains(event.target)) {
      closeLayer(elements.sedePanel, elements.sedeToggle);
    }
    if (!elements.palette.hidden && !elements.palette.contains(event.target) && event.target !== elements.globalSearch) {
      elements.palette.hidden = true;
    }
  });

  renderSedes();
  syncSedeLabel();
  syncNavFade();
}
