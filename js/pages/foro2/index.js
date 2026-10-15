import { renderBreadcrumbs } from "../../components/breadcrumbs.js";
import { esc } from "../../core/dom.js";

let main;
let currentRoute;
let lastCategory = "";

const CATEGORIES = [
  {
    id: "fiscal",
    name: "Fiscal - Contable",
    description: "Consultas de IVA, IRPF, sociedades y contabilidad",
    tone: "bg-[#e8f2ff] text-[#24527a]",
  },
  {
    id: "laboral",
    name: "Laboral",
    description: "Contratos, despidos, cotizaciones y autónomos",
    tone: "bg-[#fff0e4] text-[#8a4b2a]",
  },
  {
    id: "juridico",
    name: "Jurídico",
    description: "Contencioso, civil y doctrina procesal",
    tone: "bg-[#efe8ff] text-[#5b3d8a]",
  },
  {
    id: "general",
    name: "General",
    description: "Avisos del grupo, jornadas y organización",
    tone: "bg-[#e7f8f3] text-[#0f766e]",
  },
  {
    id: "clausulas",
    name: "Cláusulas suelo",
    description: "Modelos, costas y jurisprudencia de cláusulas",
    tone: "bg-[#f3f4f6] text-[#4b5563]",
  },
  {
    id: "proteccion",
    name: "Protección de Datos",
    description: "RGPD, RAT y tratamientos del despacho",
    tone: "bg-[#dbeafe] text-[#1d4ed8]",
  },
];

const TOPICS = [
  {
    id: "f1",
    category: "fiscal",
    title: "Liquidacion IVA Socio Profesional",
    author: "Marina Soler",
    initials: "MS",
    replies: 2,
    lastReply: "Hoy · 09:18",
    opening: {
      author: "Marina Soler",
      initials: "MS",
      role: "Socia",
      time: "Ayer · 16:40",
      body: "Abrimos consulta sobre la liquidación de IVA de un socio profesional en régimen de estimación directa.\n\nEl cliente factura servicios profesionales a la sociedad y queremos contrastar el criterio de repercusión y deducción. Adjuntamos la nota técnica de la AEAT y una consulta vinculante relacionada.\n\n¿Cómo lo estáis resolviendo en otras sedes?",
      files: ["Nota técnica AEAT.pdf", "Consulta vinculante IVA.pdf"],
    },
    posts: [
      {
        author: "Jordi Palau",
        initials: "JP",
        role: "Socio",
        time: "Hoy · 08:05",
        body: "En casos similares hemos aplicado el criterio de la consulta vinculante. Revisad especialmente el apartado de repercusión al cliente final.",
        files: [],
      },
      {
        author: "Clara Nieto",
        initials: "CN",
        role: "Asociada senior",
        time: "Hoy · 09:18",
        body: "Coincido. Conviene contrastar también con el modelo 303 del trimestre anterior antes de cerrar la liquidación.",
        files: [],
      },
    ],
  },
  {
    id: "f2",
    category: "fiscal",
    title: "Boletín semanal de información fiscal",
    author: "Helena Torren",
    initials: "HT",
    replies: 0,
    lastReply: "—",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Lun · 08:00",
      body: "Resumen semanal de novedades fiscales del grupo. Publicación de lectura; no requiere respuesta.",
      files: ["Boletin-fiscal-semana.pdf"],
    },
    posts: [],
  },
  {
    id: "f3",
    category: "fiscal",
    title: "Boletín semanal de información contable-mercantil",
    author: "Helena Torren",
    initials: "HT",
    replies: 0,
    lastReply: "—",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Lun · 08:05",
      body: "Boletín contable-mercantil de la semana para consulta de los despachos.",
      files: [],
    },
    posts: [],
  },
  {
    id: "f4",
    category: "fiscal",
    title: "Aplazamiento VeriFactu: ¿cómo lo comunicáis al cliente?",
    author: "Adrià Bosch",
    initials: "AB",
    replies: 1,
    lastReply: "Ayer · 11:20",
    opening: {
      author: "Adrià Bosch",
      initials: "AB",
      role: "Asociado",
      time: "Ayer · 10:02",
      body: "Tras el aplazamiento de VeriFactu, ¿qué texto estándar estáis usando en la circular a clientes?\n\nBuscamos un párrafo corto que explique el cambio de calendario sin generar alarmas.",
      files: [],
    },
    posts: [
      {
        author: "Laia Ferrer",
        initials: "LF",
        role: "Gestión",
        time: "Ayer · 11:20",
        body: "En Barcelona reutilizamos el párrafo de la circular interna y añadimos la fecha orientativa de entrada en vigor.",
        files: [],
      },
    ],
  },
  {
    id: "f5",
    category: "fiscal",
    title: "Provisión de fondos y tasas en contencioso",
    author: "Clara Nieto",
    initials: "CN",
    replies: 1,
    lastReply: "Vie · 17:10",
    opening: {
      author: "Clara Nieto",
      initials: "CN",
      role: "Asociada senior",
      time: "Vie · 12:30",
      body: "Con la actualización de tasas, ¿estáis revisando provisiones en recursos pendientes de interposición?",
      files: [],
    },
    posts: [
      {
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Vie · 17:10",
        body: "Sí. Hemos marcado tres asuntos de Nou Transport y uno de Helvetia para revisar esta semana.",
        files: [],
      },
    ],
  },
  {
    id: "g1",
    category: "general",
    title: "XXXIV Jornadas: confirmación de asistentes",
    author: "Helena Torren",
    initials: "HT",
    replies: 3,
    lastReply: "Hoy · 08:40",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Mar · 09:00",
      body: "Pedimos confirmación de asistentes a las jornadas de Granada (23–25 sep). Adjuntamos el programa.",
      files: ["Programa-jornadas.pdf"],
    },
    posts: [
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Mar · 10:15", body: "Confirmamos a Marina y Jordi desde Barcelona.", files: [] },
      { author: "Laia Ferrer", initials: "LF", role: "Gestión", time: "Mar · 11:02", body: "Anoto reservas de hotel y traslado.", files: [] },
      { author: "Helena Torren", initials: "HT", role: "Grupo", time: "Hoy · 08:40", body: "Recibido. Cierro el cupo de la sede mañana.", files: [] },
    ],
  },
  {
    id: "g2",
    category: "general",
    title: "Renovación Qmementix 2026",
    author: "Helena Torren",
    initials: "HT",
    replies: 1,
    lastReply: "Mié · 14:00",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Mié · 09:30",
      body: "Recordatorio del calendario de renovación de Qmementix para 2026.",
      files: [],
    },
    posts: [{ author: "Jordi Palau", initials: "JP", role: "Socio", time: "Mié · 14:00", body: "Lo pasamos a gestión para cerrar antes de fin de mes.", files: [] }],
  },
  {
    id: "l1",
    category: "laboral",
    title: "Cese de actividad de autónomos: modelos actualizados",
    author: "Adrià Bosch",
    initials: "AB",
    replies: 1,
    lastReply: "Hoy · 07:50",
    opening: {
      author: "Adrià Bosch",
      initials: "AB",
      role: "Asociado",
      time: "Ayer · 18:10",
      body: "¿Alguien tiene ya el checklist actualizado tras el cambio de modelos de cese de actividad?",
      files: [],
    },
    posts: [
      {
        author: "Clara Nieto",
        initials: "CN",
        role: "Asociada senior",
        time: "Hoy · 07:50",
        body: "Sí. Lo subiremos a Información complementaria esta tarde; de momento adjunto el borrador.",
        files: ["Checklist-cese-autonomos.pdf"],
      },
    ],
  },
  {
    id: "l2",
    category: "laboral",
    title: "Despido disciplinario y prueba digital",
    author: "Jordi Palau",
    initials: "JP",
    replies: 2,
    lastReply: "Lun · 16:45",
    opening: {
      author: "Jordi Palau",
      initials: "JP",
      role: "Socio",
      time: "Lun · 11:20",
      body: "Compartimos criterio sobre admisión de captura de pantalla como prueba en despido disciplinario.",
      files: [],
    },
    posts: [
      { author: "Marina Soler", initials: "MS", role: "Socia", time: "Lun · 13:05", body: "Útil. Lo enlazamos al expediente de Helvetia.", files: [] },
      {
        author: "Adrià Bosch",
        initials: "AB",
        role: "Asociado",
        time: "Lun · 16:45",
        body: "Añadiría la necesidad de acta notarial cuando el origen sea un móvil personal.",
        files: [],
      },
    ],
  },
  {
    id: "j1",
    category: "juridico",
    title: "Silencio en reposición: unificación de doctrina",
    author: "Jordi Palau",
    initials: "JP",
    replies: 1,
    lastReply: "Hoy · 10:12",
    opening: {
      author: "Jordi Palau",
      initials: "JP",
      role: "Socio",
      time: "Hoy · 08:20",
      body: "La Sala Tercera fija cuándo arranca el cómputo del contencioso tras silencio en reposición. Adjuntamos una nota breve.",
      files: ["Nota-TS-reposicion.pdf"],
    },
    posts: [
      {
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Hoy · 10:12",
        body: "Aplicarlo ya en Nou Transport y en cualquier reposición municipal sin respuesta.",
        files: [],
      },
    ],
  },
  {
    id: "c1",
    category: "clausulas",
    title: "Modelo de demanda actualizado (cláusulas abusivas)",
    author: "Clara Nieto",
    initials: "CN",
    replies: 1,
    lastReply: "Jue · 12:00",
    opening: {
      author: "Clara Nieto",
      initials: "CN",
      role: "Asociada senior",
      time: "Jue · 09:40",
      body: "Subimos el modelo de demanda alineado con la última doctrina del TS.",
      files: ["Modelo-demanda-clausulas.docx"],
    },
    posts: [{ author: "Laia Ferrer", initials: "LF", role: "Gestión", time: "Jue · 12:00", body: "Lo archivo también en Información complementaria.", files: [] }],
  },
  {
    id: "p1",
    category: "proteccion",
    title: "Registro de actividades de tratamiento: plantilla 2026",
    author: "Laia Ferrer",
    initials: "LF",
    replies: 0,
    lastReply: "—",
    opening: {
      author: "Laia Ferrer",
      initials: "LF",
      role: "Gestión",
      time: "Vie · 10:00",
      body: "Plantilla revisada del RAT para despachos del grupo.",
      files: ["Plantilla-RAT-2026.pdf"],
    },
    posts: [],
  },
];

const ui = { q: "", topic: "" };

function categoryById(id) {
  return CATEGORIES.find((item) => item.id === id) || null;
}

function topicById(id) {
  return TOPICS.find((item) => item.id === id) || null;
}

function topicCount(categoryId) {
  return TOPICS.filter((topic) => topic.category === categoryId).length;
}

function topicsFor(categoryId) {
  const q = ui.q.trim().toLowerCase();
  return TOPICS.filter((topic) => {
    if (topic.category !== categoryId) return false;
    if (!q) return true;
    return [topic.title, topic.author, topic.opening.body].join(" ").toLowerCase().includes(q);
  });
}

function categoriesFiltered() {
  const q = ui.q.trim().toLowerCase();
  return CATEGORIES.filter((item) => {
    if (!q) return true;
    return [item.name, item.description].join(" ").toLowerCase().includes(q);
  });
}

function parseForo2(route) {
  const segments = route?.segments || [];
  const categoryId = segments[0] || "";
  const topicId = segments[1] === "topic" ? segments[2] || "" : "";
  return { categoryId, topicId };
}

function countLabel(count, one, many) {
  return `${count} ${count === 1 ? one : many}`;
}

function filesMarkup(files = []) {
  if (!files.length) return "";
  return `<div class="mt-4 flex flex-wrap gap-2">${files
    .map((file) => `<span class="foro2-attach">${esc(file)}</span>`)
    .join("")}</div>`;
}

function bodyMarkup(text) {
  return String(text || "")
    .split(/\n\n+/)
    .map((para) => `<p class="mt-3 text-sm leading-relaxed text-[#3c424a] first:mt-0">${esc(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function setHeader(root, { title, subtitle, crumbs }) {
  const heading = root.querySelector("#foro2-title");
  heading.textContent = title;
  heading.classList.toggle("mt-2", crumbs.length > 0);
  root.querySelector("#foro2-subtitle").textContent = subtitle;
  renderBreadcrumbs(root, crumbs);
}

function syncTopicUrl(categoryId, topicId) {
  const next = topicId
    ? `#/foro2/${encodeURIComponent(categoryId)}/topic/${encodeURIComponent(topicId)}`
    : `#/foro2/${encodeURIComponent(categoryId)}`;
  if (location.hash !== next) history.replaceState(null, "", next);
}

function drawHome(root) {
  root.querySelector("#foro2-home").hidden = false;
  root.querySelector("#foro2-workspace").hidden = true;
  const rows = categoriesFiltered();
  root.querySelector("#foro2-categories").innerHTML = rows.length
    ? rows
        .map((item) => {
          const count = topicCount(item.id);
          const preview = TOPICS.find((topic) => topic.category === item.id);
          return `<button type="button" data-foro2-cat="${esc(item.id)}" class="flex h-full flex-col rounded-2xl bg-white p-5 text-left shadow-[0_1px_2px_rgba(20,24,28,0.04)] hover:ring-1 hover:ring-black/10">
            <span class="flex items-start justify-between gap-3">
              <span class="grid size-10 shrink-0 place-items-center rounded-xl ${item.tone} text-sm font-semibold">${esc(item.name.slice(0, 1))}</span>
              <span class="text-xs text-mute">${esc(countLabel(count, "tema", "temas"))}</span>
            </span>
            <span class="mt-4 text-base font-semibold">${esc(item.name)}</span>
            <span class="mt-1 text-sm leading-relaxed text-mute">${esc(item.description)}</span>
            <span class="mt-4 truncate border-t border-line pt-3 text-xs text-mute">${preview ? esc(preview.title) : "Sin temas"}</span>
          </button>`;
        })
        .join("")
    : `<div class="rounded-2xl bg-white px-5 py-10 text-center text-sm text-mute shadow-[0_1px_2px_rgba(20,24,28,0.04)]">Ninguna categoría coincide.</div>`;
}

function drawTopicList(root, category, activeId) {
  const rows = topicsFor(category.id);
  root.querySelector("#foro2-list-title").textContent = category.name;
  root.querySelector("#foro2-list-count").textContent = countLabel(rows.length, "tema", "temas");
  root.querySelector("#foro2-topics").innerHTML = rows.length
    ? rows
        .map((topic) => {
          const on = topic.id === activeId;
          return `<button type="button" data-foro2-topic="${esc(topic.id)}" class="foro2-topic-btn ${on ? "is-active" : ""}" ${on ? 'aria-current="true"' : ""}>
            <span class="foro2-topic-title block text-sm font-semibold leading-snug">${esc(topic.title)}</span>
            <span class="mt-1 block text-[11px] text-mute">${topic.replies} ${topic.replies === 1 ? "comentario" : "comentarios"}</span>
          </button>`;
        })
        .join("")
    : `<div class="px-2 py-8 text-center text-xs text-mute">No hay temas.</div>`;
}

function drawThread(root, category, topic) {
  const panel = root.querySelector("#foro2-thread-scroll");
  if (!topic) {
    panel.innerHTML = `<div class="grid h-full place-items-center text-sm text-mute">Selecciona una publicación.</div>`;
    return;
  }

  const opening = topic.opening;
  const comments = topic.posts
    .map(
      (post, index) => `<article class="foro2-comment">
        <div class="flex items-start gap-3">
          <span class="grid size-8 shrink-0 place-items-center rounded-full bg-[#e6defa] text-[10px] font-semibold text-[#5b3d8a]">${esc(post.initials)}</span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span class="text-sm font-semibold">${esc(post.author)}</span>
              <span class="text-[11px] text-mute">${esc(post.role)}</span>
              <span class="text-[11px] text-mute">·</span>
              <span class="text-[11px] text-mute">${esc(post.time)}</span>
              <span class="rounded bg-[#f3f4f6] px-1.5 py-0.5 text-[10px] font-medium text-mute">#${index + 1}</span>
            </div>
            <div class="mt-2">${bodyMarkup(post.body)}</div>
            ${filesMarkup(post.files)}
            <button type="button" class="mt-3 text-xs font-medium text-tide hover:text-[#0f766e]">Responder</button>
          </div>
        </div>
      </article>`,
    )
    .join("");

  panel.innerHTML = `
    <article class="max-w-3xl">
      <span class="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${category.tone}">${esc(category.name)}</span>
      <h2 class="mt-3 text-2xl font-semibold leading-tight tracking-tight">${esc(topic.title)}</h2>
      <div class="mt-3 flex items-center gap-2">
        <span class="grid size-8 place-items-center rounded-full bg-[#dbeafe] text-[10px] font-semibold text-[#1d4ed8]">${esc(opening.initials)}</span>
        <span class="min-w-0">
          <span class="block text-sm font-semibold">${esc(opening.author)}</span>
          <span class="block text-[11px] text-mute">${esc(opening.role)} · ${esc(opening.time)} · ${countLabel(topic.posts.length, "comentario", "comentarios")}</span>
        </span>
      </div>
      <div class="mt-5">${bodyMarkup(opening.body)}</div>
      ${filesMarkup(opening.files)}
    </article>

    <section class="mt-8 max-w-3xl border-t border-line pt-6">
      <h3 class="text-sm font-semibold">${countLabel(topic.posts.length, "comentario", "comentarios")}</h3>
      <div class="mt-4">
        ${comments || `<p class="text-sm text-mute">Sé el primero en comentar esta publicación.</p>`}
      </div>
    </section>

    <form id="foro2-reply" class="mt-8 max-w-3xl border-t border-line pt-6 pb-2">
      <p class="text-sm font-semibold">Añadir un comentario</p>
      <label class="sr-only" for="foro2-reply-input">Escribir un comentario</label>
      <textarea id="foro2-reply-input" rows="3" placeholder="Escribe un comentario..." class="mt-3 w-full resize-none rounded-lg border border-line px-3 py-2 text-sm outline-none placeholder:text-mute focus:border-tide"></textarea>
      <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
        <button type="button" class="rounded-lg border border-line px-3 py-2 text-sm font-medium hover:bg-[#f6f7f8]">Adjuntar archivo</button>
        <button type="submit" class="rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white">Comentar</button>
      </div>
    </form>`;

  panel.querySelector("#foro2-reply")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
  panel.scrollTop = 0;
}

function drawWorkspace(root, category) {
  root.querySelector("#foro2-home").hidden = true;
  root.querySelector("#foro2-workspace").hidden = false;

  const rows = topicsFor(category.id);
  if (!rows.some((topic) => topic.id === ui.topic)) {
    ui.topic = rows[0]?.id || "";
  }
  const topic = topicById(ui.topic);
  syncTopicUrl(category.id, ui.topic || "");

  setHeader(root, {
    title: "Foro 2",
    subtitle: category.description,
    crumbs: [
      { label: "Foro 2", href: "#/foro2" },
      { label: category.name, href: `#/foro2/${encodeURIComponent(category.id)}` },
      ...(topic ? [{ label: topic.title }] : []),
    ],
  });

  drawTopicList(root, category, ui.topic);
  drawThread(root, category, topic);
}

function draw(route) {
  const root = main?.querySelector("#foro2");
  if (!root) return;

  const { categoryId, topicId } = parseForo2(route);
  const category = categoryById(categoryId);
  const search = root.querySelector("#foro2-search");
  if (search && search.value !== ui.q) search.value = ui.q;

  if (category) {
    if (topicId && topicById(topicId)?.category === category.id) ui.topic = topicId;
    else if (!ui.topic) ui.topic = topicsFor(category.id)[0]?.id || "";
    drawWorkspace(root, category);
    return;
  }

  ui.topic = "";
  setHeader(root, {
    title: "Foro 2",
    subtitle: "Consultas técnicas entre despachos",
    crumbs: [],
  });
  drawHome(root);
}

function selectTopic(topicId) {
  const root = main?.querySelector("#foro2");
  const category = categoryById(currentRoute?.segments?.[0] || "");
  if (!root || !category) return;
  ui.topic = topicId;
  drawWorkspace(root, category);
}

function bind(root) {
  root.querySelector("#foro2-search")?.addEventListener("input", (event) => {
    ui.q = event.target.value;
    draw(currentRoute);
  });

  root.addEventListener("click", (event) => {
    const cat = event.target.closest?.("[data-foro2-cat]");
    if (cat) {
      ui.topic = "";
      location.hash = `#/foro2/${encodeURIComponent(cat.dataset.foro2Cat)}`;
      return;
    }
    const topic = event.target.closest?.("[data-foro2-topic]");
    if (topic) {
      selectTopic(topic.dataset.foro2Topic);
    }
  });
}

export function mount(root, route) {
  main = root;
  currentRoute = route;
  const { categoryId, topicId } = parseForo2(route);
  if (categoryId !== lastCategory) {
    ui.q = "";
    ui.topic = topicId || "";
  } else if (topicId) {
    ui.topic = topicId;
  }
  lastCategory = categoryId;
  bind(root.querySelector("#foro2") || root);
  draw(route);
}
