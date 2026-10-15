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
let navHover = null;
let headHover = null;

function navHit(node) {
  const sub = node.closest?.(".nav-sub");
  if (sub) return sub;
  const row = node.closest?.(".nav-row");
  if (row) return row;
  const link = node.closest?.(".nav-link");
  if (link && !link.closest(".nav-row")) return link;
  return null;
}

function headHit(node) {
  if (!elements?.sidebarHead?.contains(node)) return null;
  if (node.closest?.("#sede-panel, #profile-panel")) return null;
  const notice = node.closest?.("#notice-toggle");
  if (notice) return notice;
  const sede = node.closest?.("#sede-toggle");
  if (sede) return sede;
  const toggle = node.closest?.("#sidebar-toggle");
  if (toggle) return toggle;
  const profile = node.closest?.("#profile-toggle");
  if (profile) return profile;
  return null;
}

function placeThumb(kind, target, instant = false) {
  const isNav = kind === "nav";
  const thumb = isNav ? elements?.navThumb : elements?.headThumb;
  const rootEl = isNav ? elements?.navScroll : elements?.sidebarHead;
  if (!thumb || !rootEl) return;

  if (!target) {
    if (isNav) navHover = null;
    else headHover = null;
    thumb.classList.remove("is-on");
    return;
  }

  const current = isNav ? navHover : headHover;
  if (target === current && !instant) return;
  if (isNav) navHover = target;
  else headHover = target;

  const root = rootEl.getBoundingClientRect();
  const box = target.getBoundingClientRect();
  const x = box.left - root.left + (isNav ? elements.navScroll.scrollLeft : 0);
  const y = box.top - root.top + (isNav ? elements.navScroll.scrollTop : 0);
  if (instant) thumb.style.transition = "none";
  thumb.style.width = `${box.width}px`;
  thumb.style.height = `${box.height}px`;
  thumb.style.transform = `translate(${x}px, ${y}px)`;
  thumb.classList.add("is-on");
  if (instant) {
    void thumb.offsetWidth;
    thumb.style.transition = "";
  }
}

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
  const name = sedeById(state.sede).name;
  elements.sedeLabel.textContent = name;
  elements.sedeToggle.title = name;
  if (state.compact) elements.sedeToggle.setAttribute("aria-label", `Sede ${name}`);
  else elements.sedeToggle.removeAttribute("aria-label");
}

function placeNoticePanel() {
  if (!state.compact) {
    elements.noticePanel.style.removeProperty("top");
    return;
  }
  const raw = elements.noticeToggle.getBoundingClientRect().top - elements.sidebar.getBoundingClientRect().top;
  const maxTop = elements.sidebar.clientHeight - elements.noticePanel.offsetHeight - 12;
  elements.noticePanel.style.top = `${Math.max(12, Math.min(raw, maxTop))}px`;
}

function syncCompact() {
  elements.sidebar.classList.toggle("is-compact", state.compact);
  elements.sidebarToggle.setAttribute("aria-pressed", state.compact ? "true" : "false");
  elements.sidebarToggle.setAttribute("aria-label", state.compact ? "Expandir el menú" : "Contraer el menú");
  syncSedeLabel();
  placeNoticePanel();
  syncNavFade();
  placeThumb("nav", navHover, true);
  placeThumb("head", headHover, true);
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
  if (navHover) placeThumb("nav", navHover, true);
}

export function closeFloaters() {
  if (!elements) return;
  closeLayer(elements.noticePanel, elements.noticeToggle);
  closeLayer(elements.sedePanel, elements.sedeToggle);
  closeLayer(elements.profilePanel, elements.profileToggle);
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
    sidebarHead: document.querySelector(".sidebar-head"),
    sidebarToggle: document.querySelector("#sidebar-toggle"),
    profileToggle: document.querySelector("#profile-toggle"),
    profilePanel: document.querySelector("#profile-panel"),
    noticeToggle: document.querySelector("#notice-toggle"),
    noticePanel: document.querySelector("#notice-panel"),
    sedeToggle: document.querySelector("#sede-toggle"),
    sedePanel: document.querySelector("#sede-panel"),
    sedeLabel: document.querySelector("#sede-label"),
    sedeSearch: document.querySelector("#sede-q"),
    sedeList: document.querySelector("#sede-list"),
    navScroll: document.querySelector(".nav-scroll"),
  };

  document.querySelectorAll("[data-branch] .nav-chevron").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.closest("[data-branch]").dataset.branch;
      if (openBranches.has(id)) openBranches.delete(id);
      else openBranches.add(id);
      syncBranches(parseRoute(), true);
    });
  });

  elements.sidebarToggle.addEventListener("click", () => {
    state.compact = !state.compact;
    syncCompact();
  });

  elements.profileToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLayer(elements.profilePanel, elements.profileToggle);
  });
  elements.profilePanel.addEventListener("click", (event) => {
    event.stopPropagation();
    const action = event.target.closest("[data-profile-action]")?.dataset.profileAction;
    if (!action) return;
    closeLayer(elements.profilePanel, elements.profileToggle);
    if (action === "logout") location.hash = "#/resumen";
  });

  elements.noticeToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLayer(elements.noticePanel, elements.noticeToggle);
    placeNoticePanel();
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

  const navThumb = document.createElement("div");
  navThumb.className = "rail-thumb";
  navThumb.setAttribute("aria-hidden", "true");
  elements.navScroll.prepend(navThumb);
  elements.navThumb = navThumb;

  const headThumb = document.createElement("div");
  headThumb.className = "rail-thumb";
  headThumb.setAttribute("aria-hidden", "true");
  elements.sidebarHead.prepend(headThumb);
  elements.headThumb = headThumb;

  const syncNavHover = (event) => placeThumb("nav", navHit(event.target));
  elements.navScroll.addEventListener("pointerover", syncNavHover);
  elements.navScroll.addEventListener("pointermove", syncNavHover);
  elements.navScroll.addEventListener("pointerleave", () => placeThumb("nav", null));
  elements.navScroll.addEventListener(
    "scroll",
    () => {
      syncNavFade();
      if (navHover) placeThumb("nav", navHover, true);
    },
    { passive: true },
  );
  new ResizeObserver(() => {
    syncNavFade();
    if (navHover) placeThumb("nav", navHover, true);
  }).observe(elements.navScroll);

  const syncHeadHover = (event) => placeThumb("head", headHit(event.target));
  elements.sidebarHead.addEventListener("pointerover", syncHeadHover);
  elements.sidebarHead.addEventListener("pointermove", syncHeadHover);
  elements.sidebarHead.addEventListener("pointerleave", () => placeThumb("head", null));
  new ResizeObserver(() => {
    if (headHover) placeThumb("head", headHover, true);
  }).observe(elements.sidebarHead);

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
  document.addEventListener("click", (event) => {
    if (!elements.noticePanel.hidden && !elements.noticePanel.contains(event.target) && !elements.noticeToggle.contains(event.target)) {
      closeLayer(elements.noticePanel, elements.noticeToggle);
    }
    if (!elements.sedePanel.hidden && !elements.sedePanel.contains(event.target) && !elements.sedeToggle.contains(event.target)) {
      closeLayer(elements.sedePanel, elements.sedeToggle);
    }
    if (!elements.profilePanel.hidden && !elements.profilePanel.contains(event.target) && !elements.profileToggle.contains(event.target)) {
      closeLayer(elements.profilePanel, elements.profileToggle);
    }
  });

  renderSedes();
  syncSedeLabel();
  syncNavFade();
}
