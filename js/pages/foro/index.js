import { renderBreadcrumbs } from "../../components/breadcrumbs.js";
import { areaClass, inputClass, labelClass, overlay, trapOverlay } from "../../components/overlay.js";
import { esc } from "../../core/dom.js";

let main;

const FORUM_CATEGORIES = [
  { id: "general", name: "General", description: "Noticias, avisos y temas del día a día", tone: "bg-[#e7f8f3] text-[#0f766e]" },
  { id: "litigacion", name: "Litigación", description: "Criterios, escritos y estrategia procesal", tone: "bg-[#e8f2ff] text-[#24527a]" },
  { id: "clientes", name: "Clientes y asuntos", description: "Conversaciones ligadas a un asunto concreto", tone: "bg-[#fff0e4] text-[#8a4b2a]" },
  { id: "recursos", name: "Recursos y guías", description: "Plantillas, herramientas y buenas prácticas", tone: "bg-[#efe8ff] text-[#5b3d8a]" },
];

const FORUM_THREADS = [
  {
    id: "t1",
    category: "general",
    title: "¿Qué novedades compartimos esta semana?",
    excerpt: "Abrimos el hilo para reunir los avisos que puedan afectar al despacho.",
    author: "Marina Soler",
    initials: "MS",
    time: "Hace 35 min",
    replies: 6,
    pinned: true,
    posts: [
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Hoy · 08:42", body: "Dejo abierto este hilo para centralizar las novedades de la semana y decidir qué merece una reunión breve." },
      { author: "Jordi Palau", initials: "JP", role: "Socio", time: "Hoy · 09:10", body: "Por mi parte, destacaría el cambio de plazos de subsanación y la nueva doctrina sobre reposición." },
      { author: "Clara Nieto", initials: "CN", role: "Asociada senior", time: "Hoy · 09:24", body: "Lo recojo para preparar una nota corta antes del viernes." },
    ],
  },
  {
    id: "t2",
    category: "general",
    title: "Organizamos la reunión del lunes",
    excerpt: "Propuestas de orden del día y asuntos que necesitan decisión.",
    author: "Laia Ferrer",
    initials: "LF",
    time: "Ayer",
    replies: 3,
    pinned: false,
    posts: [
      { author: "Laia Ferrer", initials: "LF", role: "Gestión", time: "Ayer · 16:20", body: "¿Qué puntos queréis llevar a la reunión del lunes? Puedo preparar el orden del día." },
      { author: "Adrià Bosch", initials: "AB", role: "Asociado", time: "Ayer · 17:02", body: "Incluiría la previsión de señalamientos y la revisión de las terrazas." },
    ],
  },
  {
    id: "t3",
    category: "litigacion",
    title: "Estrategia para las alegaciones de Braseria del Port",
    excerpt: "Compartimos argumentos antes de cerrar el escrito.",
    author: "Adrià Bosch",
    initials: "AB",
    time: "Hace 2 h",
    replies: 8,
    pinned: false,
    posts: [
      { author: "Adrià Bosch", initials: "AB", role: "Asociado", time: "Hoy · 07:55", body: "He subido un primer esquema de argumentos. Me interesa especialmente vuestra opinión sobre la motivación del aforo." },
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Hoy · 08:18", body: "Reforzaría la falta de proporcionalidad y dejaría el cálculo económico para un apartado separado." },
    ],
  },
  {
    id: "t4",
    category: "litigacion",
    title: "Criterio del Supremo sobre el silencio en reposición",
    excerpt: "¿Lo aplicamos ya en los asuntos pendientes?",
    author: "Jordi Palau",
    initials: "JP",
    time: "Lun",
    replies: 4,
    pinned: true,
    posts: [
      { author: "Jordi Palau", initials: "JP", role: "Socio", time: "Lun · 12:40", body: "La sentencia puede cambiar cómo estamos contando el plazo en varios expedientes." },
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Lun · 13:05", body: "Sí. Abramos una lista de asuntos afectados y revisémosla esta semana." },
    ],
  },
  {
    id: "t5",
    category: "clientes",
    title: "Nou Transport: próximos pasos",
    excerpt: "Seguimiento de la contestación y documentación pendiente.",
    author: "Marina Soler",
    initials: "MS",
    time: "Hoy",
    replies: 5,
    pinned: false,
    posts: [
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Hoy · 08:05", body: "Necesitamos cerrar la contestación y confirmar quién revisa el informe pericial." },
      { author: "Clara Nieto", initials: "CN", role: "Asociada senior", time: "Hoy · 08:30", body: "Puedo revisar el informe antes de las 12 y dejar comentarios en este hilo." },
    ],
  },
  {
    id: "t6",
    category: "recursos",
    title: "Plantilla para anotar un BOE",
    excerpt: "He dejado una versión breve para usar desde el expediente.",
    author: "Laia Ferrer",
    initials: "LF",
    time: "Vie",
    replies: 2,
    pinned: false,
    posts: [
      { author: "Laia Ferrer", initials: "LF", role: "Gestión", time: "Vie · 11:30", body: "La plantilla tiene cuatro pasos: fuente, extracto, impacto y responsable." },
      { author: "Jordi Palau", initials: "JP", role: "Socio", time: "Vie · 12:10", body: "Muy útil. La enlazaría también desde Guías." },
    ],
  },
];

const forumUi = {
  category: "",
  thread: "",
  q: "",
  compose: "",
};

function forumCategory(id) {
  return FORUM_CATEGORIES.find((category) => category.id === id) || FORUM_CATEGORIES[0];
}

function forumThread(id) {
  return FORUM_THREADS.find((thread) => thread.id === id) || null;
}

function forumCategoryList() {
  const q = forumUi.q.trim().toLowerCase();
  return FORUM_CATEGORIES.filter((category) => {
    if (!q) return true;
    return [category.name, category.description].join(" ").toLowerCase().includes(q);
  });
}

function forumThreadList() {
  const q = forumUi.q.trim().toLowerCase();
  return FORUM_THREADS.filter((thread) => {
    if (thread.category !== forumUi.category) return false;
    if (!q) return true;
    return [thread.title, thread.excerpt, thread.author].join(" ").toLowerCase().includes(q);
  }).sort((a, b) => Number(b.pinned) - Number(a.pinned));
}

function forumCountLabel(count) {
  return `${count} ${count === 1 ? "conversación" : "conversaciones"}`;
}

function drawForumHome(root) {
  const categories = forumCategoryList();
  root.querySelector("#forum-categories").innerHTML = categories.length
    ? categories
        .map((item) => {
          const threads = FORUM_THREADS.filter((thread) => thread.category === item.id);
          const preview = threads.find((thread) => thread.pinned) || threads[0];
          return `<button type="button" data-forum-category="${item.id}" class="flex h-full flex-col rounded-2xl bg-white p-5 text-left shadow-[0_1px_2px_rgba(20,24,28,0.04)] hover:ring-1 hover:ring-black/10">
            <span class="flex items-start justify-between gap-3">
              <span class="grid size-10 shrink-0 place-items-center rounded-full ${item.tone} text-sm font-semibold">${esc(item.name.slice(0, 1))}</span>
              <span class="text-xs text-mute">${esc(forumCountLabel(threads.length))}</span>
            </span>
            <span class="mt-4 text-base font-semibold">${esc(item.name)}</span>
            <span class="mt-1 text-sm leading-relaxed text-mute">${esc(item.description)}</span>
            <span class="mt-4 truncate border-t border-line pt-3 text-xs text-mute">${preview ? esc(preview.title) : "Sin conversaciones"}</span>
          </button>`;
        })
        .join("")
    : `<div class="rounded-2xl bg-white px-5 py-10 text-center text-sm text-mute shadow-[0_1px_2px_rgba(20,24,28,0.04)]">Ninguna categoría coincide.</div>`;
}

function drawForo() {
  const root = main.querySelector("#foro");
  if (!root) return;
  const home = root.querySelector("#forum-home");
  const workspace = root.querySelector("#forum-workspace");
  const category = forumUi.category ? forumCategory(forumUi.category) : null;
  const title = root.querySelector("#foro-title");
  if (!category || !FORUM_CATEGORIES.some((item) => item.id === forumUi.category)) {
    forumUi.category = "";
    home.hidden = false;
    workspace.hidden = true;
    renderBreadcrumbs(root, []);
    title?.classList.remove("mt-2");
    drawForumHome(root);
    return;
  }

  home.hidden = true;
  workspace.hidden = false;
  renderBreadcrumbs(root, [
    { label: "Foro", href: "#/foro" },
    { label: category.name },
  ]);
  title?.classList.add("mt-2");
  const threads = forumThreadList();
  if (!threads.some((thread) => thread.id === forumUi.thread)) forumUi.thread = threads.find((thread) => thread.pinned)?.id || threads[0]?.id || "";

  root.querySelector("#forum-category-title").textContent = category.name;
  root.querySelector("#forum-category-description").textContent = category.description;
  root.querySelector("#forum-thread-count").textContent = forumCountLabel(threads.length);
  root.querySelector("#forum-threads").innerHTML = threads.length
    ? threads
        .map(
          (thread) => `<button type="button" data-forum-thread="${thread.id}" class="block w-full border-b border-line py-4 text-left ${forumUi.thread === thread.id ? "bg-[#f6fbfa] -mx-2 rounded-lg px-2" : ""}">
            <div class="flex items-start gap-3">
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-[#dbeafe] text-[10px] font-semibold text-[#1d4ed8]">${esc(thread.initials)}</span>
              <span class="min-w-0 flex-1">
                <span class="flex flex-wrap items-center gap-2">
                  <span class="truncate text-sm font-semibold">${esc(thread.title)}</span>
                  ${thread.pinned ? '<span class="rounded-full bg-[#f3f4f6] px-1.5 py-0.5 text-[10px] font-medium text-mute">Fijada</span>' : ""}
                </span>
                <span class="mt-1 block text-xs leading-relaxed text-mute">${esc(thread.excerpt)}</span>
                <span class="mt-2 flex flex-wrap gap-x-2 text-[11px] text-mute"><span>${esc(thread.author)}</span><span>·</span><span>${esc(thread.time)}</span><span>·</span><span>${thread.replies} respuestas</span></span>
              </span>
            </div>
          </button>`,
        )
        .join("")
    : `<div class="px-2 py-10 text-center text-sm text-mute">No hay conversaciones que coincidan.</div>`;

  const panel = root.querySelector("#forum-thread-panel");
  const thread = forumThread(forumUi.thread);
  if (!thread) {
    root.querySelector("#forum-thread").innerHTML = `<div class="py-10 text-center text-sm text-mute">Selecciona una conversación para ver el hilo.</div>`;
    panel?.classList.remove("forum-mobile-open");
    return;
  }
  const threadCategory = forumCategory(thread.category);
  root.querySelector("#forum-thread").innerHTML = `
    <span class="inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${threadCategory.tone}">${esc(threadCategory.name)}</span>
    <h2 class="mt-3 text-lg font-semibold leading-snug">${esc(thread.title)}</h2>
    <p class="mt-2 text-xs text-mute">${esc(thread.author)} · ${esc(thread.time)} · ${thread.replies} respuestas</p>
    <div class="mt-5 space-y-4">
      ${thread.posts
        .map(
          (post, index) => `<article class="${index ? "border-t border-line pt-4" : ""}">
            <div class="flex items-center gap-2">
              <span class="grid size-7 place-items-center rounded-full bg-[#e6defa] text-[10px] font-semibold text-[#5b3d8a]">${esc(post.initials)}</span>
              <span class="min-w-0">
                <span class="block text-xs font-semibold">${esc(post.author)}</span>
                <span class="block text-[11px] text-mute">${esc(post.role)} · ${esc(post.time)}</span>
              </span>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-[#3c424a]">${esc(post.body)}</p>
          </article>`,
        )
        .join("")}
    </div>`;
  panel?.classList.add("forum-mobile-open");
}

function bindForo() {
  const root = main.querySelector("#foro");
  if (!root) return;
  let composeOpener = null;
  root.insertAdjacentHTML(
    "beforeend",
    overlay({
      id: "forum-compose",
      titleId: "forum-compose-title",
      title: "Nueva conversación",
      helpId: "forum-compose-help",
      help: "El contenido es solo una simulación visual.",
      formId: "forum-compose-form",
      closeAttr: "data-forum-close-compose",
      submitLabel: "Crear",
      body: `<label class="${labelClass}" for="forum-compose-name">Título<input id="forum-compose-name" required class="${inputClass}" placeholder="¿De qué quieres hablar?" /></label><label class="${labelClass}" for="forum-compose-body">Descripción<textarea id="forum-compose-body" rows="4" class="${areaClass}" placeholder="Añade algo de contexto..."></textarea></label>`,
    }),
  );
  trapOverlay(root.querySelector("#forum-compose"));
  const closeCompose = () => {
    const layer = root.querySelector("#forum-compose");
    if (!layer || layer.hidden) return;
    layer.hidden = true;
    composeOpener?.focus();
    composeOpener = null;
  };
  const search = root.querySelector("#foro-search");
  if (search) search.value = forumUi.q;
  drawForo();

  search?.addEventListener("input", () => {
    forumUi.q = search.value;
    drawForo();
  });

  root.addEventListener("click", (event) => {
    const category = event.target.closest?.("[data-forum-category]");
    if (category) {
      location.hash = `#/foro/${category.dataset.forumCategory}`;
      return;
    }
    const thread = event.target.closest?.("[data-forum-thread]");
    if (thread) {
      forumUi.thread = thread.dataset.forumThread;
      drawForo();
      return;
    }
    const compose = event.target.closest?.("[data-forum-compose]");
    if (compose) {
      forumUi.compose = compose.dataset.forumCompose;
      composeOpener = compose;
      root.querySelector("#forum-compose-title").textContent = forumUi.compose === "category" ? "Crear categoría" : "Nueva conversación";
      root.querySelector("#forum-compose-name").placeholder = forumUi.compose === "category" ? "Nombre de la categoría" : "¿De qué quieres hablar?";
      root.querySelector("#forum-compose").hidden = false;
      return;
    }
    if (event.target.closest?.("[data-forum-close-compose]") || event.target.id === "forum-compose") {
      closeCompose();
      return;
    }
    if (event.target.closest?.("[data-forum-close-thread]")) {
      root.querySelector("#forum-thread-panel")?.classList.remove("forum-mobile-open");
    }
  });

  root.querySelector("#forum-compose-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    closeCompose();
  });
  root.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || root.querySelector("#forum-compose")?.hidden) return;
    event.preventDefault();
    closeCompose();
  });
  root.querySelector("#forum-reply")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
}

export function mount(root, route) {
  main = root;
  const category = FORUM_CATEGORIES.some((item) => item.id === route?.param) ? route.param : "";
  if (category !== forumUi.category) {
    forumUi.q = "";
    forumUi.thread = "";
  }
  forumUi.category = category;
  bindForo();
}
