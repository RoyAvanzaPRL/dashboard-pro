const NAV = {
  resumen: "Inicio",
  expedientes: "Expedientes",
  agenda: "Inicio 2",
  equipo: "Equipo",
  "tabla-1": "Tabla 1",
  "tabla-2": "Tabla 2",
  "tabla-4": "Tabla 4",
  "tabla-5": "Tabla 5",
  "tabla-7": "Tabla 7",
  bandeja: "Bandeja",
  archivo: "Archivo",
  senalamientos: "Señalamientos",
  minutas: "Minutas",
  tasaciones: "Tasaciones",
  partes: "Partes",
  facturas: "Facturas",
  "bandeja-recibidos": "Recibidos",
  "bandeja-pendientes": "Pendientes",
  "bandeja-hechos": "Hechos",
  "archivo-cerrados": "Cerrados",
  "archivo-escrituras": "Escrituras",
  "archivo-cliente": "Por cliente",
  "senalamientos-semana": "Esta semana",
  "senalamientos-manana": "Mañana",
  "senalamientos-sala": "Salas",
  "senalamientos-vistas": "Vistas",
  "senalamientos-pasadas": "Pasadas",
  "senalamientos-aplazadas": "Aplazadas",
  "minutas-borradores": "Borradores",
  "minutas-firmadas": "Firmadas",
  "minutas-compartidas": "Compartidas",
  "minutas-actas": "Actas",
};

const MATERIAS_PARENT = {
  "bandeja-recibidos": "bandeja",
  "bandeja-pendientes": "bandeja",
  "bandeja-hechos": "bandeja",
  "archivo-cerrados": "archivo",
  "senalamientos-semana": "senalamientos",
  "senalamientos-manana": "senalamientos",
  "senalamientos-sala": "senalamientos",
  "senalamientos-vistas": "senalamientos",
  "senalamientos-pasadas": "senalamientos",
  "senalamientos-aplazadas": "senalamientos",
  "minutas-borradores": "minutas",
  "minutas-firmadas": "minutas",
  "minutas-compartidas": "minutas",
  "minutas-actas": "minutas",
};

const ASSET_V = "50";

const MODULES = {
  resumen: "modules/resumen.html",
  expedientes: "modules/expedientes.html",
  agenda: "modules/agenda.html",
  equipo: "modules/equipo.html",
  expediente: "modules/expediente.html",
  "tabla-1": "modules/tabla-1.html",
  "tabla-2": "modules/tabla-2.html",
  "tabla-4": "modules/tabla-4.html",
  "tabla-5": "modules/tabla-5.html",
  "tabla-7": "modules/tabla-7.html",
  bandeja: "modules/bandeja.html",
  archivo: "modules/archivo.html",
  senalamientos: "modules/senalamientos.html",
  minutas: "modules/minutas.html",
  tasaciones: "modules/tasaciones.html",
  partes: "modules/partes.html",
  facturas: "modules/facturas.html",
  "bandeja-recibidos": "modules/bandeja-recibidos.html",
  "bandeja-pendientes": "modules/bandeja-pendientes.html",
  "bandeja-hechos": "modules/bandeja-hechos.html",
  "archivo-cerrados": "modules/archivo-cerrados.html",
  "archivo-escrituras": "modules/archivo-escrituras.html",
  "archivo-cliente": "modules/archivo-cliente.html",
  "senalamientos-semana": "modules/senalamientos-semana.html",
  "senalamientos-manana": "modules/senalamientos-manana.html",
  "senalamientos-sala": "modules/senalamientos-sala.html",
  "senalamientos-vistas": "modules/senalamientos-vistas.html",
  "senalamientos-pasadas": "modules/senalamientos-pasadas.html",
  "senalamientos-aplazadas": "modules/senalamientos-aplazadas.html",
  "minutas-borradores": "modules/minutas-borradores.html",
  "minutas-firmadas": "modules/minutas-firmadas.html",
  "minutas-compartidas": "modules/minutas-compartidas.html",
  "minutas-actas": "modules/minutas-actas.html",
};

const STATUS = {
  abierto: { label: "Abierto", dot: "bg-tide" },
  urgente: { label: "Urgente", dot: "bg-hot" },
  cerrado: { label: "Cerrado", dot: "bg-slate-300" },
};

const AREAS = {
  mercantil: "Mercantil",
  laboral: "Laboral",
  civil: "Civil",
  familia: "Familia",
  contencioso: "Contencioso",
};

const HOURS = ["9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h"];

const WEEKS = {
  w1: {
    label: "5–11 oct 2026",
    days: [
      { key: "5", letter: "L", name: "lunes 5" },
      { key: "6", letter: "M", name: "martes 6" },
      { key: "7", letter: "X", name: "miércoles 7", today: true },
      { key: "8", letter: "J", name: "jueves 8" },
      { key: "9", letter: "V", name: "viernes 9" },
      { key: "10", letter: "S", name: "sábado 10" },
      { key: "11", letter: "D", name: "domingo 11" },
    ],
    grid: [
      [2, 1, 1, 3, 8, 1, 0],
      [3, 2, 6, 4, 5, 1, 0],
      [2, 3, 4, 5, 4, 0, 1],
      [1, 2, 2, 3, 2, 0, 0],
      [2, 1, 3, 11, 3, 1, 0],
      [4, 3, 2, 9, 4, 0, 0],
      [3, 4, 3, 8, 3, 1, 0],
      [2, 2, 5, 6, 2, 0, 0],
      [1, 1, 2, 4, 1, 0, 0],
    ],
    busy: [
      { when: "Jue, 13:00", title: "Contestación de Nou Transport", meta: "1 vencimiento", href: "#/expediente/EXP-2026-019" },
      { when: "Vie, 9:30", title: "Informe pericial de Helvetia", meta: "1 revisión", href: "#/expediente/EXP-2026-003" },
      { when: "Hoy, 16:30", title: "Llamada con Olga Serra", meta: "1 reunión", href: "#/expediente/EXP-2026-003" },
    ],
    byDay: {
      5: [],
      6: [],
      7: [
        { when: "Hoy, 10:00", title: "Estrategia de la vista, con Jordi", meta: "Sala 2", href: "#/expediente/EXP-2026-014" },
        { when: "Hoy, 16:30", title: "Olga Serra, Helvetia", meta: "Decidir el perito de parte", href: "#/expediente/EXP-2026-003" },
      ],
      8: [{ when: "Jueves 8, 13:00", title: "Presentar la contestación", meta: "Cerrar con Ricard antes de las 11", href: "#/expediente/EXP-2026-019" }],
      9: [{ when: "Viernes 9, 9:30", title: "Lectura del informe pericial", meta: "Helvetia", href: "#/expediente/EXP-2026-003" }],
      10: [],
      11: [],
    },
    panel: {
      title: "Revisar el jueves",
      lede: "Mañana se concentra el vencimiento de Nou Transport. La contestación tiene que quedar cerrada con Ricard Puig antes de las 11:00.",
      bars: [
        { label: "8h", v: 22, hot: false },
        { label: "", v: 30, hot: false },
        { label: "10h", v: 26, hot: false },
        { label: "", v: 18, hot: false },
        { label: "12h", v: 24, hot: false },
        { label: "", v: 86, hot: true },
        { label: "14h", v: 100, hot: true },
        { label: "", v: 94, hot: true },
        { label: "16h", v: 72, hot: true },
        { label: "", v: 28, hot: false },
        { label: "18h", v: 16, hot: false },
      ],
      predictTitle: "Predicción de mañana",
      predicts: ["Pico 13:00–16:00 · contestación", "Cierre con Ricard antes de las 11:00"],
      blockTitle: "Plazos de mañana",
      blockHref: "#/senalamientos-semana",
      metrics: [
        { n: "2", label: "Hitos en el día", hint: "11:00 y 13:00", tone: "good" },
        { n: "1", label: "Sin presentar", hint: "vence mañana", tone: "bad" },
      ],
      actionHref: "#/expediente/EXP-2026-019",
      action: "Preparar contestación",
    },
  },
  w2: {
    label: "12–18 oct 2026",
    days: [
      { key: "12", letter: "L", name: "lunes 12" },
      { key: "13", letter: "M", name: "martes 13" },
      { key: "14", letter: "X", name: "miércoles 14" },
      { key: "15", letter: "J", name: "jueves 15" },
      { key: "16", letter: "V", name: "viernes 16" },
      { key: "17", letter: "S", name: "sábado 17" },
      { key: "18", letter: "D", name: "domingo 18" },
    ],
    grid: [
      [1, 2, 4, 2, 1, 0, 0],
      [2, 3, 5, 3, 2, 0, 0],
      [2, 3, 10, 3, 2, 1, 0],
      [1, 2, 7, 2, 3, 0, 0],
      [2, 2, 4, 3, 4, 0, 0],
      [1, 2, 3, 2, 8, 0, 0],
      [1, 1, 2, 2, 6, 0, 0],
      [1, 1, 2, 1, 4, 0, 0],
      [0, 1, 1, 1, 2, 0, 0],
    ],
    busy: [
      { when: "Mié 14, 11:30", title: "Vista preliminar de Mora & Hijos", meta: "1 vista", href: "#/expediente/EXP-2026-014" },
      { when: "Vie 16", title: "Propuesta de inventario, familia Riera", meta: "1 envío", href: "#/expediente/EXP-2025-088" },
    ],
    byDay: {
      12: [],
      13: [],
      14: [{ when: "Miércoles 14, 11:30", title: "Vista preliminar", meta: "Mercantil n.º 7 · Jordi Palau", href: "#/expediente/EXP-2026-014" }],
      15: [],
      16: [{ when: "Viernes 16", title: "Propuesta de inventario", meta: "Clara la envía a la otra parte", href: "#/expediente/EXP-2025-088" }],
      17: [],
      18: [],
    },
    panel: {
      title: "Revisar el miércoles 14",
      lede: "La vista preliminar de Mora & Hijos es el hito de esa semana. Acude Jordi Palau al Mercantil n.º 7.",
      bars: [
        { label: "8h", v: 16, hot: false },
        { label: "", v: 24, hot: false },
        { label: "10h", v: 40, hot: false },
        { label: "", v: 100, hot: true },
        { label: "12h", v: 78, hot: true },
        { label: "", v: 48, hot: true },
        { label: "14h", v: 22, hot: false },
        { label: "", v: 18, hot: false },
        { label: "16h", v: 14, hot: false },
        { label: "", v: 12, hot: false },
        { label: "18h", v: 8, hot: false },
      ],
      predictTitle: "Predicción del día 14",
      predicts: ["Pico 11:30 · vista preliminar", "Jordi lleva el señalamiento"],
      blockTitle: "Esa semana",
      blockHref: "#/senalamientos-semana",
      metrics: [
        { n: "1", label: "Vista señalada", hint: "miércoles 11:30", tone: "good" },
        { n: "1", label: "Envío de Clara", hint: "inventario, viernes 16", tone: "bad" },
      ],
      actionHref: "#/expediente/EXP-2026-014",
      action: "Abrir la vista",
    },
  },
  w3: {
    label: "19–25 oct 2026",
    days: [
      { key: "19", letter: "L", name: "lunes 19" },
      { key: "20", letter: "M", name: "martes 20" },
      { key: "21", letter: "X", name: "miércoles 21" },
      { key: "22", letter: "J", name: "jueves 22" },
      { key: "23", letter: "V", name: "viernes 23" },
      { key: "24", letter: "S", name: "sábado 24" },
      { key: "25", letter: "D", name: "domingo 25" },
    ],
    grid: [
      [1, 1, 3, 1, 1, 0, 0],
      [1, 2, 6, 2, 1, 0, 0],
      [2, 2, 9, 2, 1, 0, 0],
      [1, 1, 7, 1, 1, 0, 0],
      [1, 2, 4, 1, 1, 0, 0],
      [1, 1, 3, 1, 0, 0, 0],
      [0, 1, 2, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
    ],
    busy: [{ when: "Mié 21", title: "Alegaciones de la terraza", meta: "Adrià Bosch", href: "#/expediente/EXP-2026-011" }],
    byDay: {
      19: [],
      20: [],
      21: [{ when: "Miércoles 21", title: "Alegaciones de la licencia", meta: "Braseria del Port · Adrià Bosch", href: "#/expediente/EXP-2026-011" }],
      22: [],
      23: [],
      24: [],
      25: [],
    },
    panel: {
      title: "Revisar el miércoles 21",
      lede: "Adrià presenta las alegaciones de la terraza de Sitges. Joana Vidal quiere saber si cabe una medida cautelar.",
      bars: [
        { label: "8h", v: 12, hot: false },
        { label: "", v: 20, hot: false },
        { label: "10h", v: 70, hot: true },
        { label: "", v: 100, hot: true },
        { label: "12h", v: 84, hot: true },
        { label: "", v: 36, hot: false },
        { label: "14h", v: 22, hot: false },
        { label: "", v: 16, hot: false },
        { label: "16h", v: 12, hot: false },
        { label: "", v: 10, hot: false },
        { label: "18h", v: 8, hot: false },
      ],
      predictTitle: "Predicción del día 21",
      predicts: ["Pico por la mañana · alegaciones", "El plano de 2019 ya está pedido"],
      blockTitle: "Esa semana",
      blockHref: "#/expediente/EXP-2026-011",
      metrics: [
        { n: "1", label: "Escrito a presentar", hint: "miércoles 21", tone: "good" },
        { n: "1", label: "Cliente esperando", hint: "Joana, esta semana", tone: "bad" },
      ],
      actionHref: "#/expediente/EXP-2026-011",
      action: "Abrir la terraza",
    },
  },
};

const ui = {
  compact: false,
  panelOpen: true,
  span: "week",
  week: "w1",
  day: 2,
  sede: "barcelona",
};

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
    body: "Ritual acordado: 15 minutos los lunes, filtro por palabras clave (terraza, sanción, tasa, silencio, mercantil), y un resumen de tres viñetas en el canal del despacho.\n\nQuien lea marca la noticia como leída en Inicio 2 para que el resto sepa qué ya está cubierto.",
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

const main = document.querySelector("#main");
const sidebar = document.querySelector("#sidebar");
const noticeToggle = document.querySelector("#notice-toggle");
const noticePanel = document.querySelector("#notice-panel");
const sedeToggle = document.querySelector("#sede-toggle");
const sedePanel = document.querySelector("#sede-panel");
const sedeLabel = document.querySelector("#sede-label");
const sedeSearch = document.querySelector("#sede-q");
const sedeList = document.querySelector("#sede-list");
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

function sedeById(id) {
  return SEDES.find((item) => item.id === id) || SEDES[0];
}

function renderSedes(query = "") {
  if (!sedeList) return;
  const q = query.trim().toLowerCase();
  const rows = SEDES.filter((item) => !q || item.name.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q));
  sedeList.innerHTML = rows.length
    ? rows
        .map((item) => {
          const on = ui.sede === item.id;
          return `<button type="button" data-sede="${esc(item.id)}" class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${on ? "bg-[#f3f4f6] font-medium" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}"><span>${esc(item.name)}</span><span class="text-xs text-mute">${esc(item.hint)}</span></button>`;
        })
        .join("")
    : `<p class="px-3 py-4 text-center text-sm text-mute">Ninguna sede coincide.</p>`;
}

function syncSedeLabel() {
  sedeLabel.textContent = sedeById(ui.sede).name;
}
const inviteToggle = document.querySelector("#invite-toggle");
const invitePanel = document.querySelector("#invite-panel");
const tutorialsToggle = document.querySelector("#tutorials-toggle");
const tutorialsPanel = document.querySelector("#tutorials-panel");
const palette = document.querySelector("#palette");
const paletteList = palette.querySelector("div");
const globalSearch = document.querySelector("#q-global");

function parseRoute() {
  const raw = decodeURIComponent(location.hash.replace(/^#/, ""));
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  const [pathname, search = ""] = path.split("?");
  const parts = pathname.split("/").filter(Boolean);
  return {
    name: parts[0] || "resumen",
    param: parts[1] ? decodeURIComponent(parts[1]) : "",
    query: new URLSearchParams(search),
  };
}

function navKey(name) {
  if (name === "expediente") return "expedientes";
  return name;
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fill(root, record) {
  root.querySelectorAll("[data-bind]").forEach((node) => {
    const key = node.dataset.bind;
    if (key === "clientLink" || key === "emailLink") return;
    node.textContent = record[key] ?? "";
  });
}

function statusMarkup(status) {
  const item = STATUS[status] || STATUS.abierto;
  return `<span class="inline-flex items-center gap-2 text-sm"><span class="size-1.5 rounded-full ${item.dot}"></span>${item.label}</span>`;
}

function closeLayer(panel, toggle) {
  if (!panel || !toggle) return;
  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function closeFloaters() {
  closeLayer(noticePanel, noticeToggle);
  closeLayer(sedePanel, sedeToggle);
  closeLayer(invitePanel, inviteToggle);
  closeLayer(tutorialsPanel, tutorialsToggle);
  palette.hidden = true;
}

function heatTone(n) {
  if (n <= 0) return ["#f3f6f6", "#a3aaaa"];
  if (n <= 2) return ["#d7f4ef", "#3e6d67"];
  if (n <= 4) return ["#9fe6dc", "#145e56"];
  if (n <= 7) return ["#3dcec0", "#ffffff"];
  if (n <= 9) return ["#14b5a5", "#ffffff"];
  return ["#0c857c", "#ffffff"];
}

function renderHeat() {
  const week = WEEKS[ui.week];
  const heat = main.querySelector("#heat");
  const busy = main.querySelector("#busy");
  if (!heat || !week) return;

  const dayMode = ui.span === "day";
  const dayIndex = Math.min(ui.day, week.days.length - 1);
  const columns = dayMode ? [dayIndex] : week.days.map((_, index) => index);
  const template = dayMode ? "2.4rem 4.5rem" : `2.4rem repeat(${columns.length}, minmax(0, 1fr))`;

  const heads = columns
    .map((index) => {
      const day = week.days[index];
      const mark = day.today ? "box-shadow:inset 0 0 0 1.5px #12b5a4;color:#0f766e;" : "";
      return `<button type="button" data-pick-day="${index}" class="grid h-7 place-items-center rounded-full text-xs font-semibold text-[#66707a]" style="${mark}" aria-pressed="${dayMode && index === dayIndex ? "true" : "false"}">${day.letter}</button>`;
    })
    .join("");

  const rows = week.grid
    .map((row, hour) => {
      const cells = columns
        .map((index) => {
          const n = row[index];
          const [bg, fg] = heatTone(n);
          const day = week.days[index];
          return `<span class="grid h-7 place-items-center rounded-md text-[11px] font-semibold tabular-nums" style="background:${bg};color:${fg}" title="${esc(day.name)} · ${HOURS[hour]} · ${n}">${n}</span>`;
        })
        .join("");
      return `<div class="grid items-center gap-1.5" style="grid-template-columns:${template}"><span class="text-[11px] text-mute">${HOURS[hour]}</span>${cells}</div>`;
    })
    .join("");

  heat.innerHTML = `<div class="grid items-center gap-1.5" style="grid-template-columns:${template}"><span></span>${heads}</div><div class="mt-1.5 grid gap-1.5">${rows}</div>`;

  const items = dayMode ? week.byDay[week.days[dayIndex].key] || [] : week.busy;
  busy.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <a href="${esc(item.href)}" class="mt-3 block first:mt-2">
              <p class="text-[13px] font-semibold leading-snug">${esc(item.when)}</p>
              <p class="mt-0.5 text-[13px] leading-snug text-[#3c424a]">${esc(item.title)}</p>
              <p class="text-[11px] text-mute">${esc(item.meta)}</p>
            </a>`,
        )
        .join("")
    : `<p class="mt-3 text-sm text-mute">Ese día no hay señalamiento.</p>`;

  heat.querySelectorAll("[data-pick-day]").forEach((button) => {
    button.addEventListener("click", () => {
      ui.day = Number(button.dataset.pickDay);
      ui.span = "day";
      syncSpan();
      renderHeat();
    });
  });
}

function renderPanel() {
  const panel = WEEKS[ui.week]?.panel;
  const root = main.querySelector("#peak-panel");
  if (!panel || !root) return;
  root.querySelector("#peak-title").textContent = panel.title;
  root.querySelector("#peak-lede").textContent = panel.lede;
  root.querySelector("#peak-predict-title").textContent = panel.predictTitle;
  root.querySelector("#peak-block-title").textContent = panel.blockTitle;
  const blockLink = root.querySelector("#peak-block-link");
  blockLink.href = panel.blockHref;
  const action = root.querySelector("#peak-action");
  action.href = panel.actionHref;
  action.textContent = panel.action;

  root.querySelector("#peak-bars").innerHTML = panel.bars
    .map((bar) => {
      const color = bar.hot ? "#ef4444" : "#dfe3e8";
      return `<div class="flex min-w-0 flex-1 flex-col">
        <span class="flex min-h-0 flex-1 items-end"><span class="block w-full rounded-t-[4px]" style="height:${bar.v}%;background:${color}"></span></span>
        <span class="h-4 text-center text-[10px] leading-4 text-mute">${bar.label}</span>
      </div>`;
    })
    .join("");

  root.querySelector("#peak-predicts").innerHTML = panel.predicts
    .map(
      (line) => `<p class="mt-1.5 flex items-start gap-2 text-sm text-[#3c424a]"><svg viewBox="0 0 24 24" class="line mt-0.5 size-3.5 shrink-0 text-mute"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v4l2.5 2"></path></svg><span>${esc(line)}</span></p>`,
    )
    .join("");

  root.querySelector("#peak-metrics").innerHTML = panel.metrics
    .map((metric) => {
      const hint = metric.tone === "bad" ? "text-hot" : "text-good";
      const num = metric.tone === "bad" ? "text-hot" : "text-ink";
      return `<div class="flex items-end justify-between gap-3 border-t border-line py-3 first:border-t-0">
        <div>
          <p class="text-[28px] font-semibold leading-none ${num}">${esc(metric.n)}</p>
          <p class="mt-1 text-sm text-[#3c424a]">${esc(metric.label)}</p>
        </div>
        <p class="pb-1 text-xs font-medium ${hint}">${esc(metric.hint)}</p>
      </div>`;
    })
    .join("");
}

function renderAssistant() {
  const box = main.querySelector("#assistant");
  if (!box) return;
  if (ui.sede === "sitges") {
    box.innerHTML = `<svg viewBox="0 0 24 24" class="line size-4 shrink-0 text-tide"><path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z"></path><path d="M18 14l.7 1.8L20.5 16.5 18.7 17.2 18 19l-.7-1.8L15.5 16.5l1.8-.7L18 14Z"></path></svg>
      <p class="text-sm text-[#24584e]">Asistente · En Sitges está la terraza de Braseria del Port. Las alegaciones vencen el 21 de octubre. <a href="#/expediente/EXP-2026-011" class="font-semibold text-tide">Ver el asunto</a></p>`;
    return;
  }
  box.innerHTML = `<svg viewBox="0 0 24 24" class="line size-4 shrink-0 text-tide"><path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z"></path><path d="M18 14l.7 1.8L20.5 16.5 18.7 17.2 18 19l-.7-1.8L15.5 16.5l1.8-.7L18 14Z"></path></svg>
    <p class="text-sm text-[#24584e]">Asistente · Hay 5 asuntos abiertos. La contestación de Nou Transport vence mañana. <a href="#/expediente/EXP-2026-019" class="font-semibold text-tide">Ver el plazo</a></p>`;
}

function syncSpan() {
  main.querySelectorAll("[data-span]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.span === ui.span ? "true" : "false");
  });
}

function applyPanel() {
  const home = main.querySelector("#home");
  if (!home) return;
  home.classList.toggle("is-panel-closed", !ui.panelOpen);
  const toggle = main.querySelector("#panel-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", ui.panelOpen ? "true" : "false");
    toggle.setAttribute("aria-label", ui.panelOpen ? "Ocultar el plazo" : "Mostrar el plazo");
  }
}

function bindResumen() {
  const weekSelect = main.querySelector("#week");
  if (weekSelect) weekSelect.value = ui.week;
  syncSpan();
  applyPanel();
  renderAssistant();
  renderHeat();
  renderPanel();

  const setSpan = (span) => {
    ui.span = span;
    if (ui.span === "day") {
      const today = WEEKS[ui.week].days.findIndex((day) => day.today);
      if (today >= 0) ui.day = today;
    }
    syncSpan();
    renderHeat();
    main.querySelectorAll("[data-menu-panel]").forEach((panel) => {
      panel.hidden = true;
    });
  };

  main.querySelectorAll("[data-span]").forEach((button) => {
    button.addEventListener("click", () => setSpan(button.dataset.span));
  });
  main.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => setSpan(button.dataset.jump));
  });

  weekSelect?.addEventListener("change", () => {
    ui.week = weekSelect.value;
    const today = WEEKS[ui.week].days.findIndex((day) => day.today);
    ui.day = today >= 0 ? today : 0;
    renderHeat();
    renderPanel();
  });

  main.querySelector("#panel-toggle")?.addEventListener("click", () => {
    ui.panelOpen = !ui.panelOpen;
    applyPanel();
  });

  main.querySelector("#peak-later")?.addEventListener("click", () => {
    ui.panelOpen = false;
    applyPanel();
  });

  main.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const panel = main.querySelector(`[data-menu-panel="${button.dataset.menu}"]`);
      const open = panel.hidden;
      main.querySelectorAll("[data-menu-panel]").forEach((item) => {
        item.hidden = true;
      });
      panel.hidden = !open;
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  main.querySelectorAll("[data-target]").forEach((box) => {
    box.addEventListener("click", () => {
      const on = box.getAttribute("aria-pressed") === "true";
      box.setAttribute("aria-pressed", on ? "false" : "true");
      box.closest("li")?.classList.toggle("is-done", !on);
    });
  });
}

function bindChecks() {
  main.querySelectorAll("[data-check]").forEach((box) => {
    if (box.closest("#tabla2")) return;
    box.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const row = box.closest("[data-row]");
      if (!row) {
        const on = box.getAttribute("aria-pressed") === "true";
        box.setAttribute("aria-pressed", on ? "false" : "true");
        return;
      }
      const selected = row.classList.contains("is-selected");
      main.querySelectorAll("[data-row]").forEach((item) => {
        item.classList.remove("is-selected");
        item.querySelector("[data-check]")?.setAttribute("aria-pressed", "false");
      });
      row.classList.toggle("is-selected", !selected);
      box.setAttribute("aria-pressed", !selected ? "true" : "false");
    });
  });
}

function applyRows(rows, status, q, area) {
  let visible = 0;
  rows.forEach((row) => {
    const okStatus = status === "todos" || row.dataset.status === status;
    const okArea = !area || row.dataset.area === area;
    const okQuery = !q || row.dataset.search.includes(q);
    const show = okStatus && okArea && okQuery;
    row.classList.toggle("hidden", !show);
    if (show) visible += 1;
  });
  const empty = main.querySelector("#result-empty");
  if (empty) empty.hidden = visible !== 0;
  const count = main.querySelector("#result-count");
  if (count) {
    const noun = count.dataset.noun || "asuntos";
    count.textContent = visible === 1 ? `1 ${count.dataset.one || "asunto"}` : `${visible} ${noun}`;
  }
  return visible;
}

function bindExpedientes(route) {
  const q = (route.query.get("q") || "").trim().toLowerCase();
  const status = route.query.get("estado") || "todos";
  const area = route.query.get("area") || "";
  const input = main.querySelector("#q");
  const form = main.querySelector("#list-search");
  if (input) input.value = route.query.get("q") || "";

  main.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.setAttribute("aria-pressed", chip.dataset.filter === status ? "true" : "false");
    chip.addEventListener("click", () => {
      const params = new URLSearchParams(route.query);
      if (chip.dataset.filter === "todos") params.delete("estado");
      else params.set("estado", chip.dataset.filter);
      const query = params.toString();
      location.hash = query ? `#/${route.name}?${query}` : `#/${route.name}`;
    });
  });

  const chip = main.querySelector("#area-chip");
  if (chip) {
    if (AREAS[area]) {
      chip.hidden = false;
      chip.querySelector("span").textContent = AREAS[area];
    } else chip.hidden = true;
  }

  const go = () => {
    const params = new URLSearchParams(route.query);
    const value = input.value.trim();
    if (value) params.set("q", value);
    else params.delete("q");
    const query = params.toString();
    location.hash = query ? `#/${route.name}?${query}` : `#/${route.name}`;
  };

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    go();
  });

  applyRows([...main.querySelectorAll("[data-matter]")], status, q, area);
  bindSheet("matter-sheet");
}

function bindSheet(id) {
  const open = main.querySelector(`[data-open="${id}"]`);
  const sheet = main.querySelector(`#${id}`);
  const close = sheet?.querySelector("[data-close]");
  open?.addEventListener("click", () => {
    sheet.hidden = false;
  });
  close?.addEventListener("click", () => {
    sheet.hidden = true;
  });
  sheet?.querySelector("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = sheet.querySelector("[data-sheet-note]");
    if (note) {
      note.hidden = false;
      note.textContent = "Anotado en la mesa. No se abre ficha nueva desde aquí.";
    }
  });
  sheet?.addEventListener("click", (event) => {
    if (event.target === sheet) sheet.hidden = true;
  });
}

function bindMatter(id) {
  const matter = window.ALBOR.matters[id];
  const view = main.querySelector("#matter");
  const missing = main.querySelector("#matter-missing");
  if (!matter || !view) {
    if (view) view.hidden = true;
    if (missing) missing.hidden = false;
    return;
  }

  const client = window.ALBOR.clients[matter.clientId];
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

function paletteItems(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const items = [];
  Object.entries(window.ALBOR.matters).forEach(([id, matter]) => {
    const clientName = window.ALBOR.clients[matter.clientId]?.name || "";
    const blob = `${id} ${matter.title} ${matter.area} ${matter.lead} ${matter.opponent} ${clientName}`.toLowerCase();
    if (blob.includes(q)) items.push({ href: `#/expediente/${id}`, title: matter.title, meta: `${id} · ${matter.area}` });
  });
  return items.slice(0, 8);
}

function renderPalette() {
  const items = paletteItems(globalSearch.value);
  if (!globalSearch.value.trim()) {
    palette.hidden = true;
    return;
  }
  palette.hidden = false;
  paletteList.innerHTML = items.length
    ? items
        .map(
          (item) => `<a href="${esc(item.href)}" class="block rounded-lg px-3 py-2 hover:bg-[#f6f7f8]">
            <p class="text-sm font-medium">${esc(item.title)}</p>
            <p class="text-xs text-mute">${esc(item.meta)}</p>
          </a>`,
        )
        .join("")
    : `<p class="px-3 py-3 text-sm text-mute">Nada coincide con esa búsqueda.</p>`;
}

let renderToken = 0;

async function render() {
  const token = ++renderToken;
  const route = parseRoute();
  const file = MODULES[route.name];
  const section = navKey(route.name);
  const area = route.name === "expedientes" ? route.query.get("area") || "" : "";

  const parent = MATERIAS_PARENT[route.name] || "";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const on = !area && (link.dataset.nav === section || link.dataset.nav === parent);
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  syncMaterias(route);
  document.querySelectorAll("[data-area-link]").forEach((link) => {
    const on = link.dataset.areaLink === area && area !== "";
    link.classList.toggle("is-active", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  closeFloaters();
  document.title = `${NAV[section] || "Albor"} · Albor`;

  if (!file) {
    main.innerHTML =
      '<div class="p-8"><p class="text-lg font-semibold">Esa pantalla no existe.</p><a class="mt-3 inline-block text-sm font-medium text-tide" href="#/resumen">Volver al inicio</a></div>';
    return;
  }

  try {
    const response = await fetch(`${file}?v=${ASSET_V}`, { cache: "no-store" });
    if (token !== renderToken) return;
    if (!response.ok) throw new Error(String(response.status));
    main.innerHTML = await response.text();
  } catch {
    if (token !== renderToken) return;
    main.innerHTML =
      '<div class="p-8"><p class="text-lg font-semibold">No se ha podido abrir el módulo.</p><p class="mt-2 text-sm text-mute">Sirve la carpeta con un servidor local.</p></div>';
    return;
  }

  if (token !== renderToken) return;
  hydrate(route);
}

const ORDER_TABS = [
  ["todos", "Todos"],
  ["pendiente", "Incompletos"],
  ["vencido", "Vencidos"],
  ["curso", "En curso"],
  ["terminado", "Terminados"],
];

const ORDER_STATUS = {
  pendiente: ["Pendiente", "bg-[#f3f4f6] text-[#5c6570]"],
  vencido: ["Vencido", "bg-[#fde8e8] text-hot"],
  curso: ["En curso", "bg-mint text-[#0f766e]"],
  terminado: ["Terminado", "bg-mint text-good"],
  devuelto: ["Devuelto", "bg-[#fde8e8] text-hot"],
};

const ORDER_COLS = [
  ["numero", "Número"],
  ["cliente", "Cliente"],
  ["fecha", "Fecha"],
  ["estado", "Estado"],
  ["importe", "Importe"],
  ["pago", "Pago"],
];

const ORDER_FACES = [
  ["#ffe0cc", "#8a4b2a"],
  ["#d9f3e4", "#1f6b45"],
  ["#e6defa", "#5b3d8a"],
  ["#e7f8f3", "#0f766e"],
  ["#fde8e8", "#9f1239"],
];

const ORDER_GRID = "grid min-w-[52rem] grid-cols-[2rem_6.5rem_minmax(11rem,1.4fr)_7rem_6.75rem_6rem_5.75rem_4.5rem]";

const tabla2 = {
  tab: "todos",
  sort: "numero",
  dir: "desc",
  page: 1,
  pageSize: 9,
  q: "",
  selected: new Set(),
  rows: [
    { id: "PED1008", client: "Esther Kiehn", date: "2024-12-17", when: "17 dic 2024", status: "pendiente", amount: 10.5, paid: false },
    { id: "PED1007", client: "Denise Kuhn", date: "2024-12-16", when: "16 dic 2024", status: "pendiente", amount: 100.5, paid: false },
    { id: "PED1006", client: "Clint Hoppe", date: "2024-12-16", when: "16 dic 2024", status: "terminado", amount: 60.56, paid: true },
    { id: "PED1005", client: "Darin Deckow", date: "2024-12-16", when: "16 dic 2024", status: "devuelto", amount: 640.5, paid: true },
    { id: "PED1004", client: "Jacquelyn Robel", date: "2024-12-15", when: "15 dic 2024", status: "terminado", amount: 39.5, paid: true },
    { id: "PED1003", client: "Clint Hoppe", date: "2024-12-16", when: "16 dic 2024", status: "terminado", amount: 29.5, paid: true },
    { id: "PED1002", client: "Erin Bins", date: "2024-12-16", when: "16 dic 2024", status: "terminado", amount: 120.35, paid: true },
    { id: "PED1001", client: "Gretchen Quitzon", date: "2024-12-14", when: "14 dic 2024", status: "devuelto", amount: 123.5, paid: true },
    { id: "PED1000", client: "Stewart Kulas", date: "2024-12-14", when: "14 dic 2024", status: "curso", amount: 84, paid: false },
    { id: "PED0999", client: "Núria Mora", date: "2024-12-13", when: "13 dic 2024", status: "vencido", amount: 210, paid: false },
    { id: "PED0998", client: "Ricard Puig", date: "2024-12-12", when: "12 dic 2024", status: "curso", amount: 56.2, paid: true },
    { id: "PED0997", client: "Joana Vidal", date: "2024-12-11", when: "11 dic 2024", status: "pendiente", amount: 18, paid: false },
    { id: "PED0996", client: "Olga Serra", date: "2024-12-10", when: "10 dic 2024", status: "vencido", amount: 430, paid: false },
    { id: "PED0995", client: "Andreu Feliu", date: "2024-12-09", when: "9 dic 2024", status: "terminado", amount: 75, paid: true },
    { id: "PED0994", client: "Elena Vives", date: "2024-12-08", when: "8 dic 2024", status: "curso", amount: 96.4, paid: false },
    { id: "PED0993", client: "Clara Nieto", date: "2024-12-07", when: "7 dic 2024", status: "pendiente", amount: 12.9, paid: false },
    { id: "PED0992", client: "Marina Soler", date: "2024-12-06", when: "6 dic 2024", status: "terminado", amount: 250, paid: true },
    { id: "PED0991", client: "Jordi Palau", date: "2024-12-05", when: "5 dic 2024", status: "vencido", amount: 88, paid: false },
  ],
};

function orderMoney(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);
}

function orderInitials(name) {
  const parts = name.split(" ").filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

function orderFace(name) {
  const index = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % ORDER_FACES.length;
  return ORDER_FACES[index];
}

function orderMatches(row) {
  const tabOk = tabla2.tab === "todos" || row.status === tabla2.tab;
  const q = tabla2.q.trim().toLowerCase();
  if (!q) return tabOk;
  const blob = `${row.id} ${row.client} ${row.when} ${ORDER_STATUS[row.status][0]} ${row.paid ? "pagado" : "impagado"}`.toLowerCase();
  return tabOk && blob.includes(q);
}

function orderValue(row, key) {
  if (key === "numero") return Number(row.id.replace(/\D/g, ""));
  if (key === "cliente") return row.client;
  if (key === "fecha") return row.date;
  if (key === "estado") return ORDER_STATUS[row.status][0];
  if (key === "importe") return row.amount;
  return row.paid ? 1 : 0;
}

function orderView() {
  const rows = tabla2.rows.filter(orderMatches);
  rows.sort((a, b) => {
    const left = orderValue(a, tabla2.sort);
    const right = orderValue(b, tabla2.sort);
    const cmp = typeof left === "number" ? left - right : String(left).localeCompare(String(right), "es");
    return tabla2.dir === "asc" ? cmp : -cmp;
  });
  const pages = Math.max(1, Math.ceil(rows.length / tabla2.pageSize));
  tabla2.page = Math.min(tabla2.page, pages);
  const start = (tabla2.page - 1) * tabla2.pageSize;
  return { rows, pageRows: rows.slice(start, start + tabla2.pageSize), pages, start };
}

function drawTabla2() {
  const root = main.querySelector("#tabla2");
  if (!root) return;
  const { rows, pageRows, pages, start } = orderView();
  const tabs = root.querySelector("#tabla2-tabs");
  const head = root.querySelector("#tabla2-head");
  const body = root.querySelector("#tabla2-body");
  const empty = root.querySelector("#tabla2-empty");
  const foot = root.querySelector("#tabla2-foot");
  const bulk = root.querySelector("#tabla2-bulk");
  const count = root.querySelector("#tabla2-count");
  if (count) {
    const noun = rows.length === 1 ? "encargo" : "encargos";
    count.textContent = `${rows.length} ${noun}`;
  }

  tabs.innerHTML = ORDER_TABS.map(([id, label]) => {
    const on = tabla2.tab === id;
    return `<button type="button" data-tab="${id}" role="tab" aria-selected="${on ? "true" : "false"}" class="-mb-px border-b-2 px-1 pb-3 text-sm font-medium ${on ? "border-ink text-ink" : "border-transparent text-mute hover:text-ink"}">${label}</button>`;
  }).join("");

  const pageIds = pageRows.map((row) => row.id);
  const allOn = pageIds.length > 0 && pageIds.every((id) => tabla2.selected.has(id));
  head.innerHTML = `<div class="grid ${ORDER_GRID} items-center gap-3 px-2 py-3 text-[11px] font-semibold tracking-wide text-mute">
      <button type="button" data-check data-pick="all" class="size-4 rounded-[4px] border border-[#d5d8e0]" aria-pressed="${allOn ? "true" : "false"}" aria-label="Seleccionar los de esta página"></button>
      ${ORDER_COLS.map(([key, label]) => {
        const on = tabla2.sort === key;
        const mark = on ? (tabla2.dir === "asc" ? "↑" : "↓") : "";
        return `<button type="button" data-sort="${key}" class="inline-flex min-w-0 items-center gap-1 text-left ${on ? "text-ink" : ""}">${label}<span class="text-[10px]">${mark}</span></button>`;
      }).join("")}
      <span class="text-right">Acciones</span>
    </div>`;

  body.innerHTML = pageRows
    .map((row) => {
      const on = tabla2.selected.has(row.id);
      const [bg, fg] = orderFace(row.client);
      const [status, pill] = ORDER_STATUS[row.status];
      return `<div data-order="${esc(row.id)}" class="grid ${ORDER_GRID} items-center gap-3 rounded-xl px-2 py-3 text-sm ${on ? "is-selected" : ""}">
          <button type="button" data-check data-pick="${esc(row.id)}" class="size-4 rounded-[4px] border border-[#d5d8e0]" aria-pressed="${on ? "true" : "false"}" aria-label="Seleccionar ${esc(row.id)}"></button>
          <span class="font-medium">#${esc(row.id)}</span>
          <span class="flex min-w-0 items-center gap-2.5">
            <span class="grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold" style="background:${bg};color:${fg}">${esc(orderInitials(row.client))}</span>
            <span class="truncate">${esc(row.client)}</span>
          </span>
          <span class="text-[#5c6570]">${esc(row.when)}</span>
          <span><span class="rounded-full px-2 py-0.5 text-xs font-medium ${pill}">${status}</span></span>
          <span class="tabular-nums">${esc(orderMoney(row.amount))}</span>
          <span class="${row.paid ? "text-[#5c6570]" : "text-ink"}">${row.paid ? "Pagado" : "Impagado"}</span>
          <span class="flex items-center justify-end gap-2 text-mute">
            <button type="button" data-row-edit="${esc(row.id)}" class="grid size-7 place-items-center rounded-md hover:bg-white hover:text-ink" aria-label="Editar ${esc(row.id)}"><svg viewBox="0 0 24 24" class="line size-4"><path d="M4 20h4L19 9l-4-4L4 16v4Z"></path></svg></button>
            <button type="button" data-row-more="${esc(row.id)}" class="grid size-7 place-items-center rounded-md hover:bg-white hover:text-hot" aria-label="Eliminar ${esc(row.id)}"><svg viewBox="0 0 24 24" class="line size-4"><path d="M5 7h14M9 7V5h6v2M8 7l1 13h6l1-13"></path></svg></button>
          </span>
        </div>`;
    })
    .join("");
  empty.hidden = rows.length !== 0;

  const from = rows.length ? start + 1 : 0;
  const to = start + pageRows.length;
  const nums = Array.from({ length: pages }, (_, index) => index + 1)
    .map((page) => {
      const on = page === tabla2.page;
      return `<button type="button" data-page="${page}" class="grid size-8 place-items-center rounded-lg text-sm font-medium ${on ? "bg-tide text-white" : "text-[#5c6570] hover:bg-[#f3f4f6]"}" ${on ? 'aria-current="page"' : ""}>${page}</button>`;
    })
    .join("");
  foot.innerHTML = `<p class="text-sm text-mute">Mostrando ${from}–${to} de ${rows.length}</p>
      <div class="flex items-center gap-1">
        <button type="button" data-page-step="-1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f3f4f6] disabled:opacity-40" ${tabla2.page === 1 ? "disabled" : ""}>Anterior</button>
        ${nums}
        <button type="button" data-page-step="1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f3f4f6] disabled:opacity-40" ${tabla2.page === pages ? "disabled" : ""}>Siguiente</button>
      </div>`;

  const picked = tabla2.selected.size;
  bulk.hidden = picked === 0;
  bulk.innerHTML = picked
    ? `<div class="flex items-center gap-1 rounded-2xl border border-line bg-white py-1 pl-4 pr-1.5 shadow-[0_12px_32px_rgba(20,24,28,0.12)]">
        <span class="pr-2 text-sm font-medium">${picked} ${picked === 1 ? "seleccionado" : "seleccionados"}</span>
        <button type="button" data-bulk="copy" class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium hover:bg-[#f6f7f8]"><svg viewBox="0 0 24 24" class="line size-4"><rect x="8" y="8" width="11" height="11" rx="2"></rect><path d="M5 15V5h10"></path></svg>Duplicar</button>
        <button type="button" data-bulk="print" class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium hover:bg-[#f6f7f8]"><svg viewBox="0 0 24 24" class="line size-4"><path d="M7 8V4h10v4"></path><rect x="5" y="8" width="14" height="8" rx="1.5"></rect><path d="M8 16v4h8v-4"></path></svg>Imprimir</button>
        <button type="button" data-bulk="delete" class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-hot hover:bg-[#fde8e8]"><svg viewBox="0 0 24 24" class="line size-4"><path d="M5 7h14M9 7V5h6v2M8 7l1 13h6l1-13"></path></svg>Eliminar</button>
        <button type="button" data-bulk="clear" class="grid size-8 place-items-center rounded-lg text-mute hover:bg-[#f6f7f8] hover:text-ink" aria-label="Quitar la selección"><svg viewBox="0 0 24 24" class="line size-4"><path d="m7 7 10 10M17 7 7 17"></path></svg></button>
      </div>`
    : "";
}

function bindTabla2() {
  const root = main.querySelector("#tabla2");
  if (!root) return;
  const redraw = () => {
    drawTabla2();
    wireTabla2();
  };
  const search = root.querySelector("#tabla2-q");
  search.addEventListener("input", () => {
    tabla2.q = search.value;
    tabla2.page = 1;
    redraw();
  });
  root.querySelector("#tabla2-search").addEventListener("submit", (event) => event.preventDefault());

  const sheet = root.querySelector("#order-sheet");
  const openSheet = root.querySelector("[data-open='order-sheet']");
  openSheet.addEventListener("click", () => {
    sheet.hidden = false;
    root.querySelector("#nuevo-cliente").focus();
  });
  sheet.querySelector("[data-close]").addEventListener("click", () => {
    sheet.hidden = true;
  });
  sheet.addEventListener("click", (event) => {
    if (event.target === sheet) sheet.hidden = true;
  });
  sheet.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const client = root.querySelector("#nuevo-cliente").value.trim();
    const status = root.querySelector("#nuevo-estado").value;
    const amount = Number(root.querySelector("#nuevo-importe").value);
    const paid = root.querySelector("#nuevo-pago").value === "pagado";
    const next = tabla2.rows.reduce((top, row) => Math.max(top, Number(row.id.replace(/\D/g, ""))), 1000) + 1;
    tabla2.rows.unshift({
      id: `PED${next}`,
      client,
      date: "2026-10-08",
      when: "8 oct 2026",
      status,
      amount,
      paid,
    });
    tabla2.tab = "todos";
    tabla2.page = 1;
    tabla2.q = "";
    search.value = "";
    event.currentTarget.reset();
    sheet.hidden = true;
    redraw();
  });

  const wireTabla2 = () => {
    root.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        tabla2.tab = button.dataset.tab;
        tabla2.page = 1;
        redraw();
      });
    });
    root.querySelectorAll("[data-sort]").forEach((button) => {
      button.addEventListener("click", () => {
        if (tabla2.sort === button.dataset.sort) tabla2.dir = tabla2.dir === "asc" ? "desc" : "asc";
        else {
          tabla2.sort = button.dataset.sort;
          tabla2.dir = "asc";
        }
        redraw();
      });
    });
    root.querySelectorAll("[data-pick]").forEach((box) => {
      box.addEventListener("click", () => {
        const { pageRows } = orderView();
        if (box.dataset.pick === "all") {
          const ids = pageRows.map((row) => row.id);
          const allOn = ids.every((id) => tabla2.selected.has(id));
          ids.forEach((id) => (allOn ? tabla2.selected.delete(id) : tabla2.selected.add(id)));
        } else if (tabla2.selected.has(box.dataset.pick)) tabla2.selected.delete(box.dataset.pick);
        else tabla2.selected.add(box.dataset.pick);
        redraw();
      });
    });
    root.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        tabla2.page = Number(button.dataset.page);
        redraw();
      });
    });
    root.querySelectorAll("[data-page-step]").forEach((button) => {
      button.addEventListener("click", () => {
        tabla2.page += Number(button.dataset.pageStep);
        redraw();
      });
    });
    root.querySelectorAll("[data-row-more]").forEach((button) => {
      button.addEventListener("click", () => {
        tabla2.rows = tabla2.rows.filter((row) => row.id !== button.dataset.rowMore);
        tabla2.selected.delete(button.dataset.rowMore);
        redraw();
      });
    });
    root.querySelector("[data-bulk='clear']")?.addEventListener("click", () => {
      tabla2.selected.clear();
      redraw();
    });
    root.querySelector("[data-bulk='delete']")?.addEventListener("click", () => {
      tabla2.rows = tabla2.rows.filter((row) => !tabla2.selected.has(row.id));
      tabla2.selected.clear();
      redraw();
    });
    root.querySelector("[data-bulk='copy']")?.addEventListener("click", () => {
      const max = tabla2.rows.reduce((top, row) => Math.max(top, Number(row.id.replace(/\D/g, ""))), 1000);
      let next = max;
      tabla2.rows
        .filter((row) => tabla2.selected.has(row.id))
        .forEach((row) => {
          next += 1;
          tabla2.rows.unshift({ ...row, id: `PED${next}` });
        });
      tabla2.selected.clear();
      tabla2.page = 1;
      tabla2.tab = "todos";
      redraw();
    });
    root.querySelector("[data-bulk='print']")?.addEventListener("click", () => {
      const button = root.querySelector("[data-bulk='print']");
      button.textContent = "Listo";
    });
  };
  redraw();
}


const TABLA4_COLS = [
  { key: "nombre", label: "Elemento", kind: "text", width: "minmax(6.5rem,1.5fr)" },
  { key: "tipo", label: "Tipo", kind: "text", width: "5.5rem", filter: true },
  { key: "cliente", label: "Cliente", kind: "text", width: "minmax(5.5rem,1fr)", filter: true },
  { key: "estado", label: "Estado", kind: "status", width: "6rem", filter: true },
  { key: "fecha", label: "Fecha", kind: "date", width: "6rem" },
  { key: "importe", label: "Importe", kind: "money", width: "5.5rem" },
];

const TABLA4_MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

const tabla4 = {
  q: "",
  sort: "fecha",
  dir: "desc",
  filters: {},
  fresh: "",
  rows: [
    { id: "E1", nombre: "Impugnación de la junta", tipo: "Asunto", cliente: "Mora & Hijos", estado: "Abierto", fecha: "2026-10-08", importe: null },
    { id: "E2", nombre: "Contestación de Nou Transport", tipo: "Plazo", cliente: "Nou Transport", estado: "Urgente", fecha: "2026-10-09", importe: null },
    { id: "E3", nombre: "Tasación de Riera", tipo: "Plazo", cliente: "Elena Vives Riera", estado: "Urgente", fecha: "2026-10-10", importe: null },
    { id: "E4", nombre: "Acta de la junta", tipo: "Documento", cliente: "Mora & Hijos", estado: "Hecho", fecha: "2026-10-11", importe: null },
    { id: "E5", nombre: "Vista de Helvetia", tipo: "Plazo", cliente: "Helvetia Seguros", estado: "Abierto", fecha: "2026-10-16", importe: null },
    { id: "E6", nombre: "Licencia de terraza", tipo: "Asunto", cliente: "Braseria del Port", estado: "Abierto", fecha: "2026-10-21", importe: null },
    { id: "E7", nombre: "PED1008", tipo: "Encargo", cliente: "Esther Kiehn", estado: "Pendiente", fecha: "2024-12-17", importe: 10.5 },
    { id: "E8", nombre: "PED1006", tipo: "Encargo", cliente: "Clint Hoppe", estado: "Pagado", fecha: "2024-12-16", importe: 60.56 },
    { id: "E9", nombre: "Honorarios de Llevant", tipo: "Encargo", cliente: "Clínica Llevant", estado: "Impagado", fecha: "2025-11-02", importe: 840 },
    { id: "E10", nombre: "Liquidación de gananciales", tipo: "Asunto", cliente: "Elena Vives Riera", estado: "Abierto", fecha: "2026-10-28", importe: null },
    { id: "E11", nombre: "Informe pericial", tipo: "Documento", cliente: "Helvetia Seguros", estado: "Pendiente", fecha: "2026-10-14", importe: null },
    { id: "E12", nombre: "Recurso de alzada", tipo: "Plazo", cliente: "Braseria del Port", estado: "Abierto", fecha: "2026-11-19", importe: null },
    { id: "E13", nombre: "Propuesta de la junta", tipo: "Documento", cliente: "Mora & Hijos", estado: "Hecho", fecha: "2026-10-08", importe: null },
    { id: "E14", nombre: "PED1001", tipo: "Encargo", cliente: "Gretchen Quitzon", estado: "Impagado", fecha: "2024-12-14", importe: 123.5 },
  ],
};

function tabla4Date(iso) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${TABLA4_MONTHS[Number(month) - 1]} ${year}`;
}

function tabla4Text(col, row) {
  const value = row[col.key];
  if (value == null || value === "") return "";
  if (col.kind === "money") return orderMoney(value);
  if (col.kind === "date") return tabla4Date(value);
  return String(value);
}

function tabla4Tone(value) {
  if (value === "Urgente" || value === "Impagado") return "bg-[#fdecec] text-hot";
  if (value === "Hecho" || value === "Pagado") return "bg-mint text-[#24584e]";
  if (value === "Pendiente") return "bg-[#f6f1e6] text-[#8a6232]";
  if (value === "Abierto") return "bg-[#e7f3f8] text-[#24586e]";
  return "bg-[#f3f4f6] text-[#5c6570]";
}

function tabla4Cell(col, row) {
  const text = tabla4Text(col, row);
  if (!text) return `<span class="text-mute">—</span>`;
  if (col.kind === "status") {
    return `<span class="inline-flex max-w-full truncate rounded-full px-2 py-0.5 text-xs font-medium ${tabla4Tone(text)}">${esc(text)}</span>`;
  }
  const align = col.kind === "money" ? "text-right" : "";
  return `<span class="block truncate ${align}">${esc(text)}</span>`;
}

function tabla4Compare(col, a, b) {
  const left = a[col.key];
  const right = b[col.key];
  const emptyLeft = left == null || left === "";
  const emptyRight = right == null || right === "";
  if (emptyLeft && emptyRight) return 0;
  if (emptyLeft) return 1;
  if (emptyRight) return -1;
  const dir = tabla4.dir === "asc" ? 1 : -1;
  if (col.kind === "money") return (left - right) * dir;
  return String(left).localeCompare(String(right), "es", { sensitivity: "base", numeric: true }) * dir;
}

function tabla4View() {
  const q = tabla4.q.trim().toLowerCase();
  let rows = tabla4.rows.filter((row) => {
    const filtersOk = TABLA4_COLS.every((col) => {
      const picked = tabla4.filters[col.key];
      return !picked || String(row[col.key] || "") === picked;
    });
    if (!filtersOk) return false;
    if (!q) return true;
    return TABLA4_COLS.some((col) => tabla4Text(col, row).toLowerCase().includes(q));
  });
  const col = TABLA4_COLS.find((item) => item.key === tabla4.sort);
  if (col) rows = rows.slice().sort((a, b) => tabla4Compare(col, a, b));
  return rows;
}

function tabla4Template() {
  return TABLA4_COLS.map((col) => col.width).join(" ");
}

function drawTabla4() {
  const root = main.querySelector("#tabla4");
  if (!root) return;
  const rows = tabla4View();
  const noun = rows.length === 1 ? "elemento" : "elementos";
  root.querySelector("#tabla4-count").textContent = `${rows.length} ${noun}`;

  const filtering = TABLA4_COLS.some((col) => tabla4.filters[col.key]);
  root.querySelector("#tabla4-filters").innerHTML = TABLA4_COLS.filter((col) => col.filter)
    .map((col) => {
      const values = [...new Set(tabla4.rows.map((row) => row[col.key]).filter(Boolean))].sort((a, b) =>
        String(a).localeCompare(String(b), "es"),
      );
      const picked = tabla4.filters[col.key] || "";
      const options = [`<option value="">Todos</option>`]
        .concat(values.map((value) => `<option value="${esc(value)}"${value === picked ? " selected" : ""}>${esc(value)}</option>`))
        .join("");
      return `<label class="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${picked ? "bg-mint text-[#24584e]" : "bg-[#f3f4f6] text-[#5c6570]"}">${esc(col.label)}<select data-filter4="${col.key}" class="bg-transparent text-sm font-medium text-ink outline-none">${options}</select></label>`;
    })
    .join("") + (filtering ? `<button type="button" data-clear4 class="px-2 text-xs font-semibold text-tide">Quitar filtros</button>` : "");

  const template = tabla4Template();
  root.querySelector("#tabla4-head").innerHTML = `<div class="grid items-center gap-3 border-b border-line px-2 py-2 text-[11px] font-semibold tracking-wide text-mute" style="grid-template-columns:${template}">${TABLA4_COLS.map((col) => {
    const on = tabla4.sort === col.key;
    const mark = on ? (tabla4.dir === "asc" ? "↑" : "↓") : "";
    const align = col.kind === "money" ? "justify-end" : "";
    return `<button type="button" data-sort4="${col.key}" class="inline-flex min-w-0 items-center gap-1 ${align} ${on ? "text-ink" : ""}"><span class="truncate">${esc(col.label)}</span><span class="text-[10px]">${mark}</span></button>`;
  }).join("")}</div>`;

  root.querySelector("#tabla4-body").innerHTML = rows
    .map((row) => {
      const fresh = row.id === tabla4.fresh ? "bg-mint" : "";
      return `<div class="grid items-center gap-3 border-b border-line px-2 py-2.5 text-sm ${fresh}" style="grid-template-columns:${template}">${TABLA4_COLS.map((col) => tabla4Cell(col, row)).join("")}</div>`;
    })
    .join("");
  root.querySelector("#tabla4-empty").hidden = rows.length !== 0;
}

function tabla4Fields() {
  return TABLA4_COLS.map((col) => {
    const values = [...new Set(tabla4.rows.map((row) => row[col.key]).filter(Boolean))];
    const list = col.filter ? `<datalist id="tabla4-list-${col.key}">${values.map((value) => `<option value="${esc(value)}"></option>`).join("")}</datalist>` : "";
    let control = "";
    if (col.kind === "date") {
      control = `<input id="tabla4-field-${col.key}" data-field4="${col.key}" type="date" class="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-tide" />`;
    } else if (col.kind === "money") {
      control = `<input id="tabla4-field-${col.key}" data-field4="${col.key}" type="number" min="0" step="0.01" class="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-tide" placeholder="Opcional" />`;
    } else if (col.filter) {
      control = `<input id="tabla4-field-${col.key}" data-field4="${col.key}" list="tabla4-list-${col.key}" required class="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-tide" placeholder="Elige o escribe uno nuevo" />${list}`;
    } else {
      control = `<input id="tabla4-field-${col.key}" data-field4="${col.key}" required class="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-tide" />`;
    }
    return `<label class="block text-xs font-medium text-mute">${esc(col.label)}${control}</label>`;
  }).join("");
}

function bindTabla4() {
  const root = main.querySelector("#tabla4");
  if (!root) return;
  const search = root.querySelector("#tabla4-q");
  search.addEventListener("input", () => {
    tabla4.q = search.value;
    tabla4.fresh = "";
    drawTabla4();
  });
  root.querySelector("#tabla4-search").addEventListener("submit", (event) => event.preventDefault());

  root.querySelector("#tabla4-filters").addEventListener("change", (event) => {
    const select = event.target.closest("[data-filter4]");
    if (!select) return;
    tabla4.filters[select.dataset.filter4] = select.value;
    tabla4.fresh = "";
    drawTabla4();
  });
  root.querySelector("#tabla4-filters").addEventListener("click", (event) => {
    if (!event.target.closest("[data-clear4]")) return;
    tabla4.filters = {};
    tabla4.fresh = "";
    drawTabla4();
  });
  root.querySelector("#tabla4-head").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sort4]");
    if (!button) return;
    const key = button.dataset.sort4;
    tabla4.dir = tabla4.sort === key && tabla4.dir === "asc" ? "desc" : "asc";
    tabla4.sort = key;
    tabla4.fresh = "";
    drawTabla4();
  });

  const sheet = root.querySelector("#tabla4-sheet");
  const fields = root.querySelector("#tabla4-fields");
  root.querySelector("[data-open='tabla4-sheet']").addEventListener("click", () => {
    fields.innerHTML = tabla4Fields();
    sheet.hidden = false;
    fields.querySelector("input")?.focus();
  });
  sheet.querySelector("[data-close]").addEventListener("click", () => {
    sheet.hidden = true;
  });
  sheet.addEventListener("click", (event) => {
    if (event.target === sheet) sheet.hidden = true;
  });
  sheet.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const row = { id: `E${Date.now()}` };
    TABLA4_COLS.forEach((col) => {
      const input = fields.querySelector(`[data-field4="${col.key}"]`);
      const raw = input.value.trim();
      if (col.kind === "money") row[col.key] = raw === "" ? null : Number(raw);
      else row[col.key] = raw;
    });
    tabla4.rows.unshift(row);
    tabla4.filters = {};
    tabla4.q = "";
    tabla4.fresh = row.id;
    tabla4.sort = "fecha";
    tabla4.dir = "desc";
    search.value = "";
    sheet.hidden = true;
    drawTabla4();
  });

  drawTabla4();
}

function tablaCmp(kind, left, right, dir) {
  const emptyLeft = left == null || left === "";
  const emptyRight = right == null || right === "";
  if (emptyLeft && emptyRight) return 0;
  if (emptyLeft) return 1;
  if (emptyRight) return -1;
  const sign = dir === "asc" ? 1 : -1;
  if (kind === "money") return (Number(left) - Number(right)) * sign;
  return String(left).localeCompare(String(right), "es", { numeric: true, sensitivity: "base" }) * sign;
}

function nextSerial(rows, prefix) {
  const max = rows.reduce((top, row) => Math.max(top, Number(String(row.id).replace(/\D/g, "")) || 0), 0);
  return `${prefix}${String(max + 1).padStart(2, "0")}`;
}

function pageFor(rows, id, size) {
  const index = rows.findIndex((row) => row.id === id);
  return index < 0 ? 1 : Math.floor(index / size) + 1;
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "es"));
}

const TABLA5_COLS = [
  { key: "asunto", label: "Asunto", kind: "text" },
  { key: "cliente", label: "Cliente", kind: "text" },
  { key: "juzgado", label: "Juzgado", kind: "text" },
  { key: "cuantia", label: "Cuantía", kind: "money" },
  { key: "estado", label: "Estado", kind: "status" },
  { key: "fecha", label: "Fecha", kind: "date" },
];

const TABLA5_GRID = "grid grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)_5.7rem_6.15rem_5.35rem_5.45rem_1.6rem] items-center gap-x-2";

const tabla5 = {
  q: "",
  status: "todos",
  filters: { cliente: "", juzgado: "" },
  sort: "fecha",
  dir: "desc",
  page: 1,
  pageSize: 8,
  fresh: "",
  rows: [
    { id: "C01", asunto: "Responsabilidad del arquitecto", cliente: "Helvetia Seguros", juzgado: "Juzgado 12", cuantia: 186000, estado: "Abierto", fecha: "2026-10-16" },
    { id: "C02", asunto: "Honorarios de la clínica", cliente: "Clínica Llevant", juzgado: "Juzgado 4", cuantia: 8400, estado: "Cerrado", fecha: "2025-11-02" },
    { id: "C03", asunto: "Daños en el local de Sitges", cliente: "Braseria del Port", juzgado: "Juzgado 7", cuantia: 42000, estado: "Urgente", fecha: "2026-10-09" },
    { id: "C04", asunto: "Reclamación de arras", cliente: "Núria Mora", juzgado: "Juzgado 12", cuantia: 15000, estado: "Abierto", fecha: "2026-10-22" },
    { id: "C05", asunto: "Vicios de construcción", cliente: "Mora & Hijos", juzgado: "Juzgado 3", cuantia: 96000, estado: "Abierto", fecha: "2026-11-04" },
    { id: "C06", asunto: "Impago de rentas", cliente: "Andreu Feliu", juzgado: "Juzgado 4", cuantia: 6200, estado: "Urgente", fecha: "2026-10-11" },
    { id: "C07", asunto: "Accidente en la ronda", cliente: "Olga Serra", juzgado: "Juzgado 18", cuantia: 28000, estado: "Abierto", fecha: "2026-10-30" },
    { id: "C08", asunto: "Defectos en la reforma", cliente: "Elena Vives", juzgado: "Juzgado 7", cuantia: 11400, estado: "Cerrado", fecha: "2026-06-18" },
    { id: "C09", asunto: "Seguro de hogar", cliente: "Helvetia Seguros", juzgado: "Juzgado 12", cuantia: 3400, estado: "Abierto", fecha: "2026-12-02" },
    { id: "C10", asunto: "Servidumbre de paso", cliente: "Ricard Puig", juzgado: "Juzgado 3", cuantia: null, estado: "Abierto", fecha: "2026-11-19" },
    { id: "C11", asunto: "Resolución de contrato", cliente: "Nou Transport", juzgado: "Juzgado 18", cuantia: 54000, estado: "Urgente", fecha: "2026-10-08" },
    { id: "C12", asunto: "Comunidad de propietarios", cliente: "Joana Vidal", juzgado: "Juzgado 4", cuantia: 2100, estado: "Cerrado", fecha: "2026-03-12" },
    { id: "C13", asunto: "Responsabilidad médica", cliente: "Clínica Llevant", juzgado: "Juzgado 7", cuantia: 120000, estado: "Abierto", fecha: "2026-11-27" },
    { id: "C14", asunto: "Filtraciones del ático", cliente: "Esther Kiehn", juzgado: "Juzgado 3", cuantia: 7800, estado: "Abierto", fecha: "2026-10-25" },
    { id: "C15", asunto: "Compraventa no escriturada", cliente: "Gretchen Quitzon", juzgado: "Juzgado 12", cuantia: 210000, estado: "Urgente", fecha: "2026-10-14" },
    { id: "C16", asunto: "Daños por obras", cliente: "Clint Hoppe", juzgado: "Juzgado 18", cuantia: 9600, estado: "Cerrado", fecha: "2026-01-20" },
  ],
};

function tabla5View() {
  const q = tabla5.q.trim().toLowerCase();
  let rows = tabla5.rows.filter((row) => {
    if (tabla5.status !== "todos" && row.estado !== tabla5.status) return false;
    if (tabla5.filters.cliente && row.cliente !== tabla5.filters.cliente) return false;
    if (tabla5.filters.juzgado && row.juzgado !== tabla5.filters.juzgado) return false;
    if (!q) return true;
    const blob = [row.asunto, row.cliente, row.juzgado, row.estado, tabla4Date(row.fecha), row.cuantia == null ? "" : orderMoney(row.cuantia)].join(" ").toLowerCase();
    return blob.includes(q);
  });
  const col = TABLA5_COLS.find((item) => item.key === tabla5.sort) || TABLA5_COLS[0];
  rows = rows.slice().sort((a, b) => tablaCmp(col.kind, a[col.key], b[col.key], tabla5.dir));
  const pages = Math.max(1, Math.ceil(rows.length / tabla5.pageSize));
  tabla5.page = Math.min(tabla5.page, pages);
  const start = (tabla5.page - 1) * tabla5.pageSize;
  return { rows, pageRows: rows.slice(start, start + tabla5.pageSize), pages, start };
}

function tabla5FilterSelect(key, label) {
  const picked = tabla5.filters[key] || "";
  const options = [`<option value="">Todos</option>`]
    .concat(uniqueSorted(tabla5.rows.map((row) => row[key])).map((value) => `<option value="${esc(value)}"${value === picked ? " selected" : ""}>${esc(value)}</option>`))
    .join("");
  const on = picked ? "bg-mint text-[#24584e]" : "bg-[#f3f4f6] text-[#5c6570]";
  return `<label class="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${on}">${label}<select data-t5-filter="${key}" class="max-w-[10rem] bg-transparent text-sm font-medium text-ink outline-none">${options}</select></label>`;
}

function drawTabla5() {
  const root = main.querySelector("#tabla5");
  if (!root) return;
  const { rows, pageRows, pages, start } = tabla5View();
  const noun = tabla5.rows.length === 1 ? "asunto" : "asuntos";
  root.querySelector("#tabla5-count").textContent = rows.length === tabla5.rows.length ? `${rows.length} ${rows.length === 1 ? "asunto" : "asuntos"}` : `${rows.length} de ${tabla5.rows.length} ${noun}`;
  const search = root.querySelector("#tabla5-q");
  if (search.value !== tabla5.q) search.value = tabla5.q;
  root.querySelector("#tabla5-sort").value = `${tabla5.sort}:${tabla5.dir}`;
  root.querySelectorAll("[data-t5-status]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.t5Status === tabla5.status ? "true" : "false");
  });
  const filtering = tabla5.status !== "todos" || tabla5.filters.cliente || tabla5.filters.juzgado;
  root.querySelector("#tabla5-filters").innerHTML = `${tabla5FilterSelect("cliente", "Cliente")}${tabla5FilterSelect("juzgado", "Juzgado")}${filtering ? `<button type="button" data-t5-clear class="px-2 text-xs font-semibold text-tide">Quitar filtros</button>` : ""}`;

  root.querySelector("#tabla5-head").innerHTML = `<div class="${TABLA5_GRID} px-2 py-2 text-[11px] font-semibold tracking-wide text-mute">${TABLA5_COLS.map((col) => {
    const on = tabla5.sort === col.key;
    const mark = on ? (tabla5.dir === "asc" ? "↑" : "↓") : "";
    const align = col.kind === "money" ? "justify-end" : "";
    return `<button type="button" data-t5-sort="${col.key}" class="inline-flex min-w-0 items-center gap-1 text-left ${align} ${on ? "text-ink" : ""}"><span class="truncate">${col.label}</span><span class="text-[10px]">${mark}</span></button>`;
  }).join("")}<span></span></div>`;

  root.querySelector("#tabla5-body").innerHTML = pageRows
    .map((row) => {
      const fresh = row.id === tabla5.fresh ? "bg-mint" : "hover:bg-[#f8f9fa]";
      const cells = TABLA5_COLS.map((col) => {
        if (col.kind === "money") {
          const text = row.cuantia == null ? "—" : orderMoney(row.cuantia);
          return `<span class="text-right tabular-nums ${row.cuantia == null ? "text-mute" : ""}">${esc(text)}</span>`;
        }
        if (col.kind === "date") return `<span class="text-[#5c6570]">${esc(tabla4Date(row.fecha))}</span>`;
        if (col.kind === "status") return `<span class="inline-flex max-w-full truncate rounded-full px-2 py-0.5 text-xs font-medium ${tabla4Tone(row.estado)}">${esc(row.estado)}</span>`;
        const strong = col.key === "asunto" ? "font-medium" : "text-[#5c6570]";
        return `<span class="min-w-0 truncate ${strong}" title="${esc(row[col.key])}">${esc(row[col.key])}</span>`;
      }).join("");
      return `<div class="${TABLA5_GRID} rounded-xl px-2 py-3 text-sm ${fresh}">${cells}<button type="button" data-t5-remove="${esc(row.id)}" class="grid size-7 place-items-center rounded-md text-mute hover:bg-white hover:text-hot" aria-label="Quitar ${esc(row.asunto)}"><svg viewBox="0 0 24 24" class="line size-4"><path d="M5 7h14M9 7V5h6v2M8 7l1 13h6l1-13"></path></svg></button></div>`;
    })
    .join("");
  root.querySelector("#tabla5-empty").hidden = rows.length !== 0;

  const from = rows.length ? start + 1 : 0;
  const to = start + pageRows.length;
  const nums = Array.from({ length: pages }, (_, index) => index + 1)
    .map((page) => {
      const on = page === tabla5.page;
      return `<button type="button" data-t5-page="${page}" class="grid size-8 place-items-center rounded-lg text-sm font-medium ${on ? "bg-tide text-white" : "text-[#5c6570] hover:bg-[#f3f4f6]"}" ${on ? 'aria-current="page"' : ""}>${page}</button>`;
    })
    .join("");
  root.querySelector("#tabla5-foot").innerHTML = `<div class="flex items-center gap-3">
      <p class="text-sm text-mute">Mostrando ${from}–${to} de ${rows.length}</p>
      <label class="inline-flex items-center gap-2 text-xs text-mute">Por página
        <select data-t5-size class="rounded-lg bg-[#f3f4f6] px-2 py-1 text-sm font-medium text-ink outline-none">
          ${[5, 8, 12].map((size) => `<option value="${size}"${size === tabla5.pageSize ? " selected" : ""}>${size}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="flex items-center gap-1">
      <button type="button" data-t5-step="-1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f3f4f6] disabled:opacity-40" ${tabla5.page === 1 ? "disabled" : ""}>Anterior</button>
      ${nums}
      <button type="button" data-t5-step="1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f3f4f6] disabled:opacity-40" ${tabla5.page === pages ? "disabled" : ""}>Siguiente</button>
    </div>`;
}

function bindTabla5() {
  const root = main.querySelector("#tabla5");
  if (!root) return;
  const search = root.querySelector("#tabla5-q");
  search.addEventListener("input", () => {
    tabla5.q = search.value;
    tabla5.page = 1;
    tabla5.fresh = "";
    drawTabla5();
  });
  root.querySelector("#tabla5-search").addEventListener("submit", (event) => event.preventDefault());
  root.querySelector("#tabla5-sort").addEventListener("change", (event) => {
    const [key, dir] = event.target.value.split(":");
    tabla5.sort = key;
    tabla5.dir = dir;
    tabla5.page = 1;
    tabla5.fresh = "";
    drawTabla5();
  });
  root.addEventListener("click", (event) => {
    const status = event.target.closest("[data-t5-status]");
    if (status) {
      tabla5.status = status.dataset.t5Status;
      tabla5.page = 1;
      tabla5.fresh = "";
      drawTabla5();
      return;
    }
    const sort = event.target.closest("[data-t5-sort]");
    if (sort) {
      const key = sort.dataset.t5Sort;
      tabla5.dir = tabla5.sort === key && tabla5.dir === "asc" ? "desc" : "asc";
      tabla5.sort = key;
      tabla5.fresh = "";
      drawTabla5();
      return;
    }
    if (event.target.closest("[data-t5-clear]")) {
      tabla5.status = "todos";
      tabla5.filters = { cliente: "", juzgado: "" };
      tabla5.page = 1;
      tabla5.fresh = "";
      drawTabla5();
      return;
    }
    const page = event.target.closest("[data-t5-page]");
    if (page) {
      tabla5.page = Number(page.dataset.t5Page);
      drawTabla5();
      return;
    }
    const step = event.target.closest("[data-t5-step]");
    if (step && !step.disabled) {
      tabla5.page += Number(step.dataset.t5Step);
      drawTabla5();
      return;
    }
    const remove = event.target.closest("[data-t5-remove]");
    if (remove) {
      tabla5.rows = tabla5.rows.filter((row) => row.id !== remove.dataset.t5Remove);
      if (tabla5.fresh === remove.dataset.t5Remove) tabla5.fresh = "";
      drawTabla5();
      return;
    }
    if (event.target.closest("[data-t5-open]")) {
      root.querySelector("#tabla5-clientes").innerHTML = uniqueSorted(tabla5.rows.map((row) => row.cliente)).map((value) => `<option value="${esc(value)}"></option>`).join("");
      root.querySelector("#tabla5-juzgados").innerHTML = uniqueSorted(tabla5.rows.map((row) => row.juzgado)).map((value) => `<option value="${esc(value)}"></option>`).join("");
      root.querySelector("#tabla5-fecha").value = "2026-10-08";
      root.querySelector("#tabla5-sheet").hidden = false;
      root.querySelector("#tabla5-asunto").focus();
      return;
    }
    if (event.target.closest("[data-t5-close]") || event.target.id === "tabla5-sheet") {
      root.querySelector("#tabla5-sheet").hidden = true;
    }
  });
  root.addEventListener("change", (event) => {
    const filter = event.target.closest("[data-t5-filter]");
    if (filter) {
      tabla5.filters[filter.dataset.t5Filter] = filter.value;
      tabla5.page = 1;
      tabla5.fresh = "";
      drawTabla5();
      return;
    }
    const size = event.target.closest("[data-t5-size]");
    if (size) {
      tabla5.pageSize = Number(size.value);
      tabla5.page = 1;
      drawTabla5();
    }
  });
  root.querySelector("#tabla5-sheet form").addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = root.querySelector("#tabla5-cuantia").value.trim();
    const row = {
      id: nextSerial(tabla5.rows, "C"),
      asunto: root.querySelector("#tabla5-asunto").value.trim(),
      cliente: root.querySelector("#tabla5-cliente").value.trim(),
      juzgado: root.querySelector("#tabla5-juzgado").value.trim(),
      cuantia: amount === "" ? null : Number(amount),
      estado: root.querySelector("#tabla5-estado").value,
      fecha: root.querySelector("#tabla5-fecha").value,
    };
    tabla5.rows.unshift(row);
    tabla5.q = "";
    tabla5.status = "todos";
    tabla5.filters = { cliente: "", juzgado: "" };
    tabla5.fresh = row.id;
    tabla5.page = pageFor(tabla5View().rows, row.id, tabla5.pageSize);
    search.value = "";
    event.currentTarget.reset();
    root.querySelector("#tabla5-sheet").hidden = true;
    drawTabla5();
  });
  drawTabla5();
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

const TABLA7_WEIGHT = { asunto: 1.2, organo: 2.15, acto: 1.22, plazo: 1.9, letrado: 1.9, estado: 1.7, cuantia: 1.45 };

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
  if (col.kind === "date") return tabla4Date(value);
  return String(value);
}

function tabla7Tone(value) {
  if (value === "Vencido") return "text-hot";
  if (value === "Resuelto") return "text-good";
  if (value === "Suspendido") return "text-[#8a6232]";
  return "text-[#0f766e]";
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

function tabla7CheckIcon(light) {
  return `<svg viewBox="0 0 24 24" class="line size-3.5 ${light ? "" : "text-ink"}" aria-hidden="true"><path d="m5 12 5 5L20 7"></path></svg>`;
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
  root.querySelector("#tabla7-size-label").textContent = `${tabla7.pageSize} por página`;
  root.querySelector("#tabla7-filter-label").textContent = active.length ? `Filtrar · ${active.length}` : "Filtrar";
  const sortCol = TABLA7_COLS.find((col) => col.key === tabla7.sort);
  root.querySelector("#tabla7-sort-label").textContent = `Orden · ${sortCol.label} ${tabla7.dir === "asc" ? "↑" : "↓"}`;
  [
    ["#tabla7-filter-btn", "filtrar", active.length > 0],
    ["#tabla7-sort-btn", "orden", false],
    ["#tabla7-cols-btn", "columnas", false],
    ["#tabla7-size-btn", "tamano", false],
  ].forEach(([selector, name, marked]) => {
    const button = root.querySelector(selector);
    const on = tabla7.open === name;
    button.setAttribute("aria-expanded", on ? "true" : "false");
    button.className = tabla7MenuButton(on, marked);
  });

  root.querySelector("#tabla7-pop-filter").hidden = tabla7.open !== "filtrar";
  root.querySelector("#tabla7-pop-filter").innerHTML = TABLA7_COLS.filter((col) => col.filter)
    .map((col) => {
      const picked = tabla7.filters[col.key] || "";
      const open = tabla7.pick === col.key;
      const options = [{ value: "", label: "Todos" }].concat(uniqueSorted(tabla7.rows.map((row) => row[col.key])).map((value) => ({ value, label: value })));
      const list = open
        ? `<div class="mt-1 max-h-44 overflow-y-auto rounded-lg border border-line p-1">${options
            .map((item) => {
              const on = item.value === picked;
              return `<button type="button" data-t7-choice="${col.key}" data-t7-value="${esc(item.value)}" class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm ${on ? "bg-[#f3f4f6] font-semibold" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}"><span class="truncate">${esc(item.label)}</span>${on ? tabla7CheckIcon(false) : ""}</button>`;
            })
            .join("")}</div>`
        : "";
      return `<div class="mb-2 last:mb-0"><p class="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wide text-mute">${esc(col.label)}</p><button type="button" data-t7-pick="${col.key}" class="flex h-9 w-full items-center justify-between gap-2 rounded-lg border bg-white px-2.5 text-sm ${open ? "border-ink" : "border-line"}" aria-expanded="${open ? "true" : "false"}"><span class="truncate">${esc(picked || "Todos")}</span><svg viewBox="0 0 24 24" class="line size-3.5 shrink-0 text-mute"><path d="m6 9 6 6 6-6"></path></svg></button>${list}</div>`;
    })
    .join("");

  root.querySelector("#tabla7-pop-size").hidden = tabla7.open !== "tamano";
  root.querySelector("#tabla7-pop-size").innerHTML = [5, 10, 20]
    .map((n) => {
      const on = tabla7.pageSize === n;
      return `<button type="button" data-t7-size="${n}" class="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm ${on ? "bg-ink font-medium text-white" : "hover:bg-[#f6f7f8]"}" aria-pressed="${on ? "true" : "false"}">${n} por página${on ? tabla7CheckIcon(true) : ""}</button>`;
    })
    .join("");

  root.querySelector("#tabla7-pop-sort").hidden = tabla7.open !== "orden";
  root.querySelector("#tabla7-pop-sort").innerHTML = `${TABLA7_COLS.map((col) => {
    const on = tabla7.sort === col.key;
    return `<button type="button" data-t7-sort="${col.key}" class="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm hover:bg-[#f6f7f8] ${on ? "font-semibold" : ""}">${esc(col.label)}<span class="text-[10px]">${on ? (tabla7.dir === "asc" ? "↑" : "↓") : ""}</span></button>`;
  }).join("")}
    <div class="mt-2 flex gap-1 border-t border-line pt-2">
      <button type="button" data-t7-dir="asc" class="flex-1 rounded-md px-2 py-1.5 text-xs font-medium ${tabla7.dir === "asc" ? "bg-ink text-white" : "text-[#5c6570] hover:bg-[#f6f7f8]"}" aria-pressed="${tabla7.dir === "asc" ? "true" : "false"}">Ascendente</button>
      <button type="button" data-t7-dir="desc" class="flex-1 rounded-md px-2 py-1.5 text-xs font-medium ${tabla7.dir === "desc" ? "bg-ink text-white" : "text-[#5c6570] hover:bg-[#f6f7f8]"}" aria-pressed="${tabla7.dir === "desc" ? "true" : "false"}">Descendente</button>
    </div>`;

  root.querySelector("#tabla7-pop-cols").hidden = tabla7.open !== "columnas";
  root.querySelector("#tabla7-pop-cols").innerHTML = TABLA7_COLS.map((col) => `<label class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-[#f6f7f8] ${col.lock ? "text-mute" : ""}"><input data-t7-col="${col.key}" type="checkbox" class="accent-ink" ${tabla7.cols[col.key] ? "checked" : ""} ${col.lock ? "disabled" : ""} />${esc(col.label)}</label>`).join("");

  const headCell = "sticky top-0 z-10 border-b border-line bg-[#f7f8f9] font-medium";
  root.querySelector("#tabla7-head").innerHTML = `<tr>
    <th class="${headCell} px-2 text-center" scope="col" style="width:${tabla7Width("check")}"><input data-t7-check="page" type="checkbox" class="size-4 align-middle accent-ink" aria-label="Seleccionar esta página" /></th>
    ${visible
      .map((col) => {
        const on = tabla7.sort === col.key;
        const mark = on ? (tabla7.dir === "asc" ? "↑" : "↓") : "";
        const align = col.kind === "money" ? "justify-end text-right" : "text-left";
        const pad = col.key === "estado" ? "pl-2 pr-1" : "px-2";
        const labelClip = "truncate";
        return `<th class="${headCell}" scope="col" style="width:${tabla7Width(col.key)}"><button type="button" data-t7-sort="${col.key}" class="flex w-full min-w-0 items-center gap-1 ${pad} py-3 text-xs font-medium ${align} ${on ? "text-ink" : "text-[#5c6570]"}"><span class="${labelClip}">${esc(col.label)}</span><span class="text-[10px]">${mark}</span></button></th>`;
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
              const body = !text ? `<span class="text-mute">—</span>` : col.kind === "status" ? `<span class="font-medium ${tabla7Tone(text)}">${esc(text)}</span>` : esc(text);
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
  const chipsHtml = active.length
    ? `<div class="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">${active
        .map(
          (col) => `<button type="button" data-t7-chip="${col.key}" class="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-[#f3f4f6] pl-3 pr-2.5 text-sm font-medium">${esc(col.label)}: ${esc(tabla7.filters[col.key])}<span aria-hidden="true">×</span><span class="sr-only">Quitar</span></button>`,
        )
        .join("")}<button type="button" data-t7-clear class="shrink-0 px-1 text-xs font-medium text-[#5c6570] hover:text-ink">Quitar filtros</button></div>`
    : "";
  const selectHtml = selectedCount
    ? `<div class="flex h-8 ${active.length ? "shrink-0" : "w-full"} items-center gap-3 rounded-lg bg-[#f4f6f8] px-4"><span class="font-medium">${selectedCount === 1 ? "1 seleccionado" : `${selectedCount} seleccionados`}</span><button type="button" data-t7-bulk-remove class="ml-auto font-medium text-hot">Borrar</button><button type="button" data-t7-bulk-clear class="font-medium text-[#5c6570]">Anular</button></div>`
    : "";
  context.innerHTML = chipsHtml || selectHtml ? `${chipsHtml}${selectHtml}` : "";

  const from = rows.length ? start + 1 : 0;
  const to = start + pageRows.length;
  const idle = rows.length === 0;
  root.querySelector("#tabla7-foot").innerHTML = `<p class="text-sm text-mute">Mostrando ${from}–${to} de ${rows.length}</p>
    <div class="flex items-center gap-3">
      <button type="button" data-t7-step="-1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f6f7f8] disabled:opacity-40" ${tabla7.page === 1 ? "disabled" : ""}>Anterior</button>
      <span class="min-w-12 text-center text-sm tabular-nums text-[#5c6570]">${idle ? "0 / 0" : `${tabla7.page} / ${pages}`}</span>
      <button type="button" data-t7-step="1" class="rounded-lg px-2 py-1 text-sm text-[#5c6570] hover:bg-[#f6f7f8] disabled:opacity-40" ${idle || tabla7.page === pages ? "disabled" : ""}>Siguiente</button>
    </div>`;

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
}

function bindTabla7() {
  const root = main.querySelector("#tabla7");
  if (!root) return;
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
      if (tabla7.open !== "filtrar") tabla7.pick = "";
      tabla7.menu = "";
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
    const dir = event.target.closest("[data-t7-dir]");
    if (dir) {
      tabla7.dir = dir.dataset.t7Dir;
      tabla7.page = 1;
      tabla7.fresh = "";
      drawTabla7();
      return;
    }
    const chip = event.target.closest("[data-t7-chip]");
    if (chip) {
      delete tabla7.filters[chip.dataset.t7Chip];
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

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !target.isConnected) return;
  let dirty = false;
  if (tabla7.menu && !target.closest("[data-t7-menu]")) {
    tabla7.menu = "";
    dirty = true;
  }
  if (tabla7.open && !target.closest("[data-t7-keep]")) {
    tabla7.open = "";
    tabla7.pick = "";
    dirty = true;
  }
  if (dirty && main.querySelector("#tabla7")) drawTabla7();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const sheet5 = main.querySelector("#tabla5-sheet");
  if (sheet5 && !sheet5.hidden) sheet5.hidden = true;
  if (main.querySelector("#tabla7") && (tabla7.open || tabla7.sheet || tabla7.menu)) {
    tabla7.open = "";
    tabla7.pick = "";
    tabla7.menu = "";
    tabla7.sheet = false;
    tabla7.editing = "";
    drawTabla7();
  }
});

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

function renderNewsAssistant() {
  const box = main.querySelector("#news-assistant");
  if (!box) return;
  const week = currentNewsWeek();
  const inWeek = NEWS.filter((item) => newsWeekDates(week).has(item.date));
  const unreadWeek = inWeek.filter((item) => item.unread).length;
  const unreadAll = NEWS.filter((item) => item.unread).length;
  box.innerHTML = `<svg viewBox="0 0 24 24" class="line size-4 shrink-0 text-tide"><path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z"></path><path d="M18 14l.7 1.8L20.5 16.5 18.7 17.2 18 19l-.7-1.8L15.5 16.5l1.8-.7L18 14Z"></path></svg>
    <p class="text-sm text-[#24584e]">Asistente · ${unreadWeek} sin leer en ${esc(week.short.toLowerCase())} · ${unreadAll} en total. Usa las flechas para ir semana atrás.</p>`;
}

function renderNewsDetail() {
  const box = main.querySelector("#news-detail");
  const mark = main.querySelector("#news-mark");
  if (!box) return;
  const item = newsById(newsUi.active);
  const cat = NEWS_CATS[item.cat];
  box.innerHTML = `
    <span class="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${cat.tone}">${esc(cat.label)}</span>
    <h2 class="mt-3 text-lg font-semibold leading-snug">${esc(item.title)}</h2>
    <p class="mt-2 text-xs text-mute">${esc(newsWhen(item))} · ${esc(item.source)}</p>
    <p class="mt-4 text-sm leading-relaxed text-[#3c424a]">${esc(item.summary)}</p>
    <div class="mt-4 space-y-3 text-sm leading-relaxed text-[#3c424a]">${item.body
      .split(/\n\n+/)
      .map((para) => `<p>${esc(para).replace(/\n/g, "<br>")}</p>`)
      .join("")}</div>`;
  if (mark) mark.textContent = item.unread ? "Marcar leída" : "Marcar sin leer";
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

  const hero = newsUi.week === 0 ? rows.find((item) => item.featured) || rows[0] : null;

  if (hero) {
    const cat = NEWS_CATS[hero.cat];
    featured.innerHTML = `
      <button type="button" data-news-open="${esc(hero.id)}" class="w-full rounded-xl border border-line p-3.5 text-left hover:border-[#d5d8e0] ${newsUi.active === hero.id ? "is-active" : ""} ${hero.unread ? "" : "is-read"}">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${cat.tone}">${esc(cat.label)}</span>
          ${hero.unread ? '<span class="rounded-md bg-mint px-2 py-0.5 text-[11px] font-semibold text-tide">Nueva</span>' : ""}
          <span class="text-xs text-mute">${esc(newsWhen(hero))}</span>
        </div>
        <p class="news-title mt-1.5 text-[15px] font-semibold leading-snug">${esc(hero.title)}</p>
        <p class="mt-1.5 text-sm text-mute">${esc(hero.summary)}</p>
        <p class="mt-2 text-xs font-medium text-tide">${esc(hero.source)} · Abrir lectura</p>
      </button>`;
  } else if (!rows.length) {
    featured.innerHTML = `<div class="rounded-xl border border-dashed border-line px-4 py-6 text-center text-sm text-mute">No hay novedades en esta semana.</div>`;
  } else {
    featured.innerHTML = "";
  }

  const rest = hero ? rows.filter((item) => item.id !== hero.id) : rows;

  if (rest.length) {
    const byDay = new Map();
    rest.forEach((item) => {
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
  } else if (hero) {
    list.innerHTML = `<p class="border-t border-line py-4 text-sm text-mute">No hay más piezas en esta semana.</p>`;
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
  renderNewsAssistant();
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
    if (event.target.closest?.("#news-mark")) {
      const item = newsById(newsUi.active);
      item.unread = !item.unread;
      drawNews();
      return;
    }
    if (event.target.closest?.("#news-next")) {
      const next = NEWS.find((item) => item.unread && item.id !== newsUi.active) || NEWS.find((item) => item.unread);
      if (next) {
        next.unread = false;
        newsUi.filter = "todas";
        newsUi.q = "";
        if (search) search.value = "";
        jumpToNewsItem(next);
        drawNews();
      }
    }
  });
}

function hydrate(route) {
  if (route.name === "resumen") bindResumen();
  if (route.name === "agenda") bindInicio2();
  if (route.name === "expedientes" || route.name === "tabla-1") bindExpedientes(route);
  if (route.name === "expediente") bindMatter(route.param);
  if (route.name === "tabla-2") bindTabla2();
  if (route.name === "tabla-4") bindTabla4();
  if (route.name === "tabla-5") bindTabla5();
  if (route.name === "tabla-7") bindTabla7();
  bindChecks();
}

function toggleLayer(panel, toggle) {
  const open = panel.hidden;
  closeFloaters();
  panel.hidden = !open;
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

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

const openBranches = new Set();

function syncMaterias(route, keepManual) {
  const parent = MATERIAS_PARENT[route.name] || "";
  if (parent && !keepManual) openBranches.add(parent);
  document.querySelectorAll("[data-branch]").forEach((branch) => {
    const open = openBranches.has(branch.dataset.branch);
    const subs = branch.querySelector(".nav-subs");
    const toggle = branch.querySelector(".nav-chevron");
    subs.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    branch.classList.toggle("is-open", open);
  });
}

document.querySelectorAll("[data-branch] .nav-chevron").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.closest("[data-branch]").dataset.branch;
    if (openBranches.has(id)) openBranches.delete(id);
    else openBranches.add(id);
    syncMaterias(parseRoute(), true);
  });
});

document.querySelector("#sidebar-toggle").addEventListener("click", () => {
  ui.compact = !ui.compact;
  sidebar.classList.toggle("is-compact", ui.compact);
  document.querySelector("#sidebar-toggle").setAttribute("aria-pressed", ui.compact ? "true" : "false");
});

noticeToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleLayer(noticePanel, noticeToggle);
});

sedeToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const opening = sedePanel.hidden;
  toggleLayer(sedePanel, sedeToggle);
  if (opening) {
    if (sedeSearch) {
      sedeSearch.value = "";
      sedeSearch.focus();
    }
    renderSedes();
  }
});

sedeSearch?.addEventListener("input", () => renderSedes(sedeSearch.value));
sedeSearch?.addEventListener("click", (event) => event.stopPropagation());
sedeSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLayer(sedePanel, sedeToggle);
    return;
  }
  if (event.key !== "Enter") return;
  const first = sedeList.querySelector("[data-sede]");
  if (!first) return;
  first.click();
});

sedeList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sede]");
  if (!button) return;
  ui.sede = button.dataset.sede;
  syncSedeLabel();
  closeLayer(sedePanel, sedeToggle);
  renderAssistant();
});

renderSedes();
syncSedeLabel();

inviteToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleLayer(invitePanel, inviteToggle);
});

tutorialsToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleLayer(tutorialsPanel, tutorialsToggle);
});

document.querySelector("#invite-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#invite-email").value.trim();
  const note = document.querySelector("#invite-note");
  note.hidden = false;
  note.textContent = `Invitación anotada para ${email}. Laia la verá con las provisiones.`;
  event.currentTarget.hidden = true;
});

globalSearch.addEventListener("input", renderPalette);
globalSearch.addEventListener("focus", renderPalette);
globalSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const first = paletteList.querySelector("a");
    if (first) location.hash = first.getAttribute("href");
  }
  if (event.key === "Escape") palette.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    globalSearch.focus();
    globalSearch.select();
  }
});

document.addEventListener("click", (event) => {
  if (!noticePanel.hidden && !noticePanel.contains(event.target) && !noticeToggle.contains(event.target)) closeLayer(noticePanel, noticeToggle);
  if (!sedePanel.hidden && !sedePanel.contains(event.target) && !sedeToggle.contains(event.target)) closeLayer(sedePanel, sedeToggle);
  if (!invitePanel.hidden && !invitePanel.contains(event.target) && !inviteToggle.contains(event.target)) closeLayer(invitePanel, inviteToggle);
  if (!tutorialsPanel.hidden && !tutorialsPanel.contains(event.target) && !tutorialsToggle.contains(event.target)) closeLayer(tutorialsPanel, tutorialsToggle);
  if (!palette.hidden && !palette.contains(event.target) && event.target !== globalSearch) palette.hidden = true;
  if (!event.target.closest("[data-menu]") && !event.target.closest("[data-menu-panel]")) {
    main.querySelectorAll("[data-menu-panel]").forEach((panel) => {
      panel.hidden = true;
    });
  }
});

window.addEventListener("hashchange", render);
if (!location.hash) location.replace("#/resumen");
else render();
