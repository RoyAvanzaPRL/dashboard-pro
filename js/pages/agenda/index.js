import { esc } from "../../core/dom.js";

let main;

const NEWS_CATS = {
  boe: { label: "BOE", tone: "bg-[#e8f2ff] text-[#24527a]" },
  jurisprudencia: { label: "Jurisprudencia", tone: "bg-[#efe8ff] text-[#5b3d8a]" },
  legislacion: { label: "Legislación", tone: "bg-[#fff0e4] text-[#8a4b2a]" },
  practica: { label: "Buenas prácticas", tone: "bg-[#e7f8f3] text-[#1f6b45]" },
};

const NEWS_TODAY = "2026-10-07";

const NEWS_WEEKS = [
  {
    id: "w0",
    label: "5–11 oct 2026",
    short: "Esta semana",
    days: [
      { date: "2026-10-05", label: "Lun 5" },
      { date: "2026-10-06", label: "Mar 6" },
      { date: "2026-10-07", label: "Mié 7", today: true },
      { date: "2026-10-08", label: "Jue 8" },
      { date: "2026-10-09", label: "Vie 9" },
      { date: "2026-10-10", label: "Sáb 10" },
      { date: "2026-10-11", label: "Dom 11" },
    ],
    digest: [
      "Un solo BOE relevante hoy: plazos de subsanación y notificación electrónica.",
      "Ayer entró doctrina del TS sobre silencio en reposición.",
    ],
  },
  {
    id: "w1",
    label: "28 sep–4 oct 2026",
    short: "Semana anterior",
    days: [
      { date: "2026-09-28", label: "Lun 28" },
      { date: "2026-09-29", label: "Mar 29" },
      { date: "2026-09-30", label: "Mié 30" },
      { date: "2026-10-01", label: "Jue 1" },
      { date: "2026-10-02", label: "Vie 2" },
      { date: "2026-10-03", label: "Sáb 3" },
      { date: "2026-10-04", label: "Dom 4" },
    ],
    digest: [
      "DOGC de terrazas: aforo y sanción mínima en costa.",
      "Checklist interno para anotar un BOE en el expediente.",
    ],
  },
  {
    id: "w2",
    label: "21–27 sep 2026",
    short: "Hace 2 semanas",
    days: [
      { date: "2026-09-21", label: "Lun 21" },
      { date: "2026-09-22", label: "Mar 22" },
      { date: "2026-09-23", label: "Mié 23" },
      { date: "2026-09-24", label: "Jue 24" },
      { date: "2026-09-25", label: "Vie 25" },
      { date: "2026-09-26", label: "Sáb 26" },
      { date: "2026-09-27", label: "Dom 27" },
    ],
    digest: [
      "Actualización de tasas judiciales en contencioso.",
      "Ritual de lectura semanal del BOE acordado en formación.",
    ],
  },
  {
    id: "w3",
    label: "14–20 sep 2026",
    short: "Hace 3 semanas",
    days: [
      { date: "2026-09-14", label: "Lun 14" },
      { date: "2026-09-15", label: "Mar 15" },
      { date: "2026-09-16", label: "Mié 16" },
      { date: "2026-09-17", label: "Jue 17" },
      { date: "2026-09-18", label: "Vie 18" },
      { date: "2026-09-19", label: "Sáb 19" },
      { date: "2026-09-20", label: "Dom 20" },
    ],
    digest: [
      "TSJ Cataluña sobre proporcionalidad en sanciones de velador.",
      "Avance parlamentario de la reforma de la LEC.",
    ],
  },
];

const NEWS = [
  {
    id: "n1",
    cat: "boe",
    date: "2026-10-07",
    time: "08:10",
    source: "BOE n.º 241",
    title: "Modificación del reglamento de procedimiento administrativo común",
    summary: "Se ajustan los plazos de subsanación y la notificación electrónica en procedimientos locales.",
    body: "El BOE publica hoy el Real Decreto que revisa plazos de subsanación y el régimen de notificación electrónica. Afecta a recursos contencioso-administrativos frente a ayuntamientos y a la forma de acreditar la notificación en sede judicial.\n\nRecomendación Albor: revisar los expedientes abiertos de terraza y licencia (Braseria del Port, veladores) y anotar la fecha de publicación en la ficha del asunto.",
    unread: true,
    featured: true,
  },
  {
    id: "n2",
    cat: "jurisprudencia",
    date: "2026-10-06",
    time: "16:20",
    source: "Tribunal Supremo · Contencioso",
    title: "Unificación de doctrina sobre alegaciones en reposición",
    summary: "El TS fija cuándo el silencio administrativo cuenta para el cómputo del recurso.",
    body: "La Sala Tercera unifica criterio: si la administración no resuelve la reposición en plazo, el cómputo del contencioso arranca desde el día siguiente al vencimiento, no desde la notificación tardía.\n\nÚtil para Nou Transport y para cualquier recurso de reposición pendiente de respuesta municipal.",
    unread: true,
    featured: false,
  },
  {
    id: "n3",
    cat: "legislacion",
    date: "2026-09-30",
    time: "18:20",
    source: "Generalitat · DOGC",
    title: "Criterios de inspección de terrazas en vía pública",
    summary: "Nuevas pautas de aforo, ocupación y sanción mínima en municipios de costa.",
    body: "El DOGC concreta criterios de inspección para terrazas: medición de ocupación, aforo y umbral mínimo de sanción. Sitges y Barcelona quedan dentro del ámbito de aplicación.\n\nClara y Adrià pueden contrastarlo con el expediente de Braseria del Port antes de las alegaciones del día 21.",
    unread: true,
    featured: false,
  },
  {
    id: "n4",
    cat: "practica",
    date: "2026-10-01",
    time: "12:05",
    source: "Albor · Mesa de litigación",
    title: "Cómo anotar un BOE en el expediente en cinco minutos",
    summary: "Checklist interno: fuente, extracto, impacto y responsable de seguimiento.",
    body: "1) Pegar el enlace del BOE en la nota del expediente.\n2) Extraer el párrafo que afecta al cliente.\n3) Marcar impacto: alto / medio / bajo.\n4) Asignar seguimiento (letrada + fecha).\n5) Subir el PDF a Archivo del asunto.\n\nLaia deja la plantilla en Guías · Mesa de hoy.",
    unread: false,
    featured: false,
  },
  {
    id: "n5",
    cat: "boe",
    date: "2026-09-22",
    time: "07:55",
    source: "BOE n.º 228",
    title: "Actualización de tasas judiciales en el orden contencioso",
    summary: "Nuevos importes para recursos frente a actos de entidades locales.",
    body: "Se publican los importes actualizados de tasas en el orden contencioso-administrativo. Entrada en vigor a los veinte días de la publicación.\n\nRevisar provisiones de fondos en asuntos con recurso pendiente de interposición.",
    unread: true,
    featured: false,
  },
  {
    id: "n6",
    cat: "practica",
    date: "2026-09-25",
    time: "11:00",
    source: "Albor · Formación interna",
    title: "Lectura semanal del BOE: ritual de 15 minutos",
    summary: "Cada lunes, Marina o Jordi filtran lo relevante para mercantil y contencioso.",
    body: "Ritual acordado: 15 minutos los lunes, filtro por palabras clave (terraza, sanción, tasa, silencio, mercantil), y un resumen de tres viñetas en el canal del despacho.\n\nQuien lea marca la noticia como leída en el tablón de noticias para que el resto sepa qué ya está cubierto.",
    unread: false,
    featured: false,
  },
  {
    id: "n7",
    cat: "jurisprudencia",
    date: "2026-09-16",
    time: "16:30",
    source: "TSJ Cataluña · Contencioso",
    title: "Licencia de velador: proporcionalidad de la sanción",
    summary: "El TSJ anula una sanción por falta de motivación del aforo.",
    body: "El tribunal estima el recurso al considerar insuficiente la motivación del aforo usado para calcular la sanción. Refuerza la línea de alegaciones que Adrià prepara en licencias de terraza.",
    unread: false,
    featured: false,
  },
  {
    id: "n8",
    cat: "legislacion",
    date: "2026-09-18",
    time: "10:15",
    source: "Congreso · Boletín",
    title: "Tramitación de la reforma de la Ley de enjuiciamiento civil",
    summary: "Avance parlamentario con impacto en plazos de contestación.",
    body: "El texto en comisión propone acotar plazos de contestación en determinados procedimientos civiles. Todavía no es derecho vigente, pero conviene seguir el calendario de enmiendas por si afecta a Mora & Hijos.",
    unread: false,
    featured: false,
  },
];

const newsUi = {
  filter: "todas",
  q: "",
  active: "n1",
  week: 0,
};


function newsById(id) {
  return NEWS.find((item) => item.id === id) || NEWS[0];
}

function currentNewsWeek() {
  return NEWS_WEEKS[newsUi.week] || NEWS_WEEKS[0];
}

function newsWeekDates(week = currentNewsWeek()) {
  return new Set(week.days.map((day) => day.date));
}

function newsWhen(item) {
  if (item.date === NEWS_TODAY) return `Hoy · ${item.time}`;
  const day = NEWS_WEEKS.flatMap((week) => week.days).find((entry) => entry.date === item.date);
  return `${day?.label || item.date} · ${item.time}`;
}

function newsDayHeading(date) {
  if (date === NEWS_TODAY) return "Hoy";
  const day = NEWS_WEEKS.flatMap((week) => week.days).find((entry) => entry.date === date);
  return day?.label || date;
}

function filteredNews() {
  const q = newsUi.q.trim().toLowerCase();
  const dates = newsWeekDates();
  return NEWS.filter((item) => {
    if (!dates.has(item.date)) return false;
    if (newsUi.filter !== "todas" && item.cat !== newsUi.filter) return false;
    if (!q) return true;
    return [item.title, item.summary, item.source, item.body].join(" ").toLowerCase().includes(q);
  }).sort((a, b) => (a.date === b.date ? b.time.localeCompare(a.time) : b.date.localeCompare(a.date)));
}

function jumpToNewsItem(item) {
  const weekIndex = NEWS_WEEKS.findIndex((week) => week.days.some((day) => day.date === item.date));
  if (weekIndex >= 0) newsUi.week = weekIndex;
  newsUi.active = item.id;
}

function renderNewsControls() {
  const week = currentNewsWeek();
  const label = main.querySelector("#news-week-label");
  const prev = main.querySelector("#news-week-prev");
  const next = main.querySelector("#news-week-next");
  const title = main.querySelector("#news-list-title");
  if (label) label.textContent = week.label;
  if (prev) prev.disabled = newsUi.week >= NEWS_WEEKS.length - 1;
  if (next) next.disabled = newsUi.week <= 0;
  if (prev) prev.classList.toggle("opacity-40", prev.disabled);
  if (next) next.classList.toggle("opacity-40", next.disabled);

  main.querySelectorAll("[data-news-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.newsFilter === newsUi.filter ? "true" : "false");
  });

  if (title) title.textContent = week.short;

  const digest = main.querySelector("#news-digest");
  if (digest) {
    digest.innerHTML = week.digest
      .map(
        (line) =>
          `<li class="flex gap-2 border-t border-line py-3 first:border-t-0"><span class="mt-0.5 size-1.5 shrink-0 rounded-full bg-tide"></span><span>${esc(line)}</span></li>`,
      )
      .join("");
  }
}

function renderNewsDetail() {
  const box = main.querySelector("#news-detail");
  if (!box) return;
  const item = newsById(newsUi.active);
  const cat = NEWS_CATS[item.cat];
  const preview = item.body.split(/\n\n+/)[0];
  box.innerHTML = `
    <span class="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${cat.tone}">${esc(cat.label)}</span>
    <h2 class="mt-3 text-lg font-semibold leading-snug">${esc(item.title)}</h2>
    <p class="mt-2 text-xs text-mute">${esc(newsWhen(item))} · ${esc(item.source)}</p>
    <p class="mt-4 text-sm leading-relaxed text-[#3c424a]">${esc(item.summary)}</p>
    <p class="mt-4 text-sm leading-relaxed text-[#3c424a]">${esc(preview)}</p>`;
}

function newsRow(item, { compact = false } = {}) {
  const cat = NEWS_CATS[item.cat];
  const on = newsUi.active === item.id;
  if (compact) {
    return `<button type="button" data-news-open="${esc(item.id)}" class="flex w-full gap-3 border-t border-line py-3 text-left first:border-t-0 ${on ? "is-active -mx-2 rounded-xl px-2" : ""} ${item.unread ? "" : "is-read"}">
      <span class="mt-1 size-2 shrink-0 rounded-full ${item.unread ? "bg-tide" : "bg-[#d5d8e0]"}" aria-hidden="true"></span>
      <span class="min-w-0 flex-1">
        <span class="flex flex-wrap items-center gap-2">
          <span class="inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${cat.tone}">${esc(cat.label)}</span>
          <span class="text-xs text-mute">${esc(item.time)}</span>
        </span>
        <span class="news-title mt-1 block text-sm font-medium leading-snug">${esc(item.title)}</span>
        <span class="mt-1 block text-xs text-mute">${esc(item.source)}</span>
      </span>
    </button>`;
  }
  return `<button type="button" data-news-open="${esc(item.id)}" class="flex w-full gap-3 border-t border-line py-3.5 text-left first:border-t-0 ${on ? "is-active -mx-2 rounded-xl px-2" : ""} ${item.unread ? "" : "is-read"}">
    <span class="mt-1 size-2 shrink-0 rounded-full ${item.unread ? "bg-tide" : "bg-[#d5d8e0]"}" aria-hidden="true"></span>
    <span class="min-w-0 flex-1">
      <span class="flex flex-wrap items-center gap-2">
        <span class="inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${cat.tone}">${esc(cat.label)}</span>
        <span class="text-xs text-mute">${esc(newsWhen(item))}</span>
      </span>
      <span class="news-title mt-1 block text-sm font-medium leading-snug">${esc(item.title)}</span>
      <span class="mt-1 block text-xs text-mute">${esc(item.source)}</span>
    </span>
  </button>`;
}

function renderNewsFeed() {
  const list = main.querySelector("#news-list");
  const featured = main.querySelector("#news-featured");
  const count = main.querySelector("#news-count");
  if (!list || !featured) return;

  const rows = filteredNews();
  const unreadInView = rows.filter((item) => item.unread).length;
  if (count) {
    count.textContent = rows.length
      ? `${rows.length} ${rows.length === 1 ? "pieza" : "piezas"} · ${unreadInView} sin leer`
      : "Sin piezas en este periodo";
  }

  featured.innerHTML = "";
  if (!rows.length) {
    featured.innerHTML = `<div class="rounded-xl border border-dashed border-line px-4 py-6 text-center text-sm text-mute">No hay novedades en esta semana.</div>`;
  }

  if (rows.length) {
    const byDay = new Map();
    rows.forEach((item) => {
      if (!byDay.has(item.date)) byDay.set(item.date, []);
      byDay.get(item.date).push(item);
    });
    const ordered = [...byDay.keys()].sort((a, b) => b.localeCompare(a));
    list.innerHTML = ordered
      .map((date) => {
        const items = byDay.get(date);
        return `<div class="border-t border-line pt-3 first:border-t-0 first:pt-0">
          <p class="mb-1 text-xs font-semibold uppercase tracking-wide text-mute">${esc(newsDayHeading(date))}</p>
          ${items.map((item) => newsRow(item, { compact: true })).join("")}
        </div>`;
      })
      .join("");
  } else {
    list.innerHTML = "";
  }
}

function drawNews() {
  const rows = filteredNews();
  if (!rows.some((item) => item.id === newsUi.active)) {
    newsUi.active = rows[0]?.id || NEWS[0].id;
  }
  renderNewsControls();
  renderNewsFeed();
  renderNewsDetail();
}

function bindInicio2() {
  const root = main.querySelector("#news-home");
  if (!root) return;
  const search = root.querySelector("#news-q");
  if (search) search.value = newsUi.q;
  drawNews();

  root.querySelectorAll("[data-news-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      newsUi.filter = button.dataset.newsFilter;
      drawNews();
    });
  });

  search?.addEventListener("input", () => {
    newsUi.q = search.value;
    drawNews();
  });

  root.addEventListener("click", (event) => {
    if (event.target.closest?.("#news-week-prev") && newsUi.week < NEWS_WEEKS.length - 1) {
      newsUi.week += 1;
      drawNews();
      return;
    }
    if (event.target.closest?.("#news-week-next") && newsUi.week > 0) {
      newsUi.week -= 1;
      drawNews();
      return;
    }
    const open = event.target.closest?.("[data-news-open]");
    if (open && root.contains(open)) {
      newsUi.active = open.dataset.newsOpen;
      const item = newsById(newsUi.active);
      if (item.unread) item.unread = false;
      drawNews();
      return;
    }
    if (event.target.closest?.("#news-enter")) {
      location.hash = `#/noticia/${encodeURIComponent(newsUi.active)}`;
    }
  });
  root.querySelector("#news-panel")?.addEventListener("dblclick", () => {
    location.hash = `#/noticia/${encodeURIComponent(newsUi.active)}`;
  });
}

function bindNoticia(id) {
  const root = main.querySelector("#news-article");
  if (!root) return;
  const item = newsById(id);
  const cat = NEWS_CATS[item.cat];
  root.querySelector("#news-article-category").className = `inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${cat.tone}`;
  root.querySelector("#news-article-category").textContent = cat.label;
  root.querySelector("#news-article-title").textContent = item.title;
  root.querySelector("#news-article-meta").textContent = `${newsWhen(item)} · ${item.source}`;
  root.querySelector("#news-article-summary").textContent = item.summary;
  root.querySelector("#news-article-body").innerHTML = item.body
    .split(/\n\n+/)
    .map((para) => `<p>${esc(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

export function mountAgenda(root) {
  main = root;
  bindInicio2();
}

export function mountNoticia(root, route) {
  main = root;
  bindNoticia(route.param);
}
