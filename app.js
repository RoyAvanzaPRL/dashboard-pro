const NAV = {
  resumen: "Inicio",
  foro: "Foro",
  agenda: "Tablón de noticias",
  "tabla-7": "Tabla 7",
  bandeja: "Bandeja",
  "bandeja-recibidos": "Recibidos",
  "bandeja-pendientes": "Pendientes",
  "bandeja-hechos": "Hechos",
};

const MATERIAS_PARENT = {
  "bandeja-recibidos": "bandeja",
  "bandeja-pendientes": "bandeja",
  "bandeja-hechos": "bandeja",
};

const ASSET_V = "56";

const MODULES = {
  resumen: "modules/resumen.html",
  foro: "modules/foro.html",
  expedientes: "modules/foro.html",
  agenda: "modules/agenda.html",
  noticia: "modules/noticia.html",
  expediente: "modules/expediente.html",
  "tabla-7": "modules/tabla-7.html",
  bandeja: "modules/bandeja.html",
  "bandeja-recibidos": "modules/bandeja-recibidos.html",
  "bandeja-pendientes": "modules/bandeja-pendientes.html",
  "bandeja-hechos": "modules/bandeja-hechos.html",
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
  category: "general",
  thread: "t1",
  q: "",
  compose: "",
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
  if (name === "expediente" || name === "expedientes") return "foro";
  if (name === "noticia") return "agenda";
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

const cardUi = { open: "", dialog: "", opener: "" };

function cardBtn(kind) {
  const base = "inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  if (kind === "solid") return `${base} bg-ink text-white`;
  return `${base} border border-line bg-white text-ink hover:bg-[#f7f8f9]`;
}

function cardLeave(name) {
  return `<span class="sr-only">, ${esc(name)}, se abre en una pestaña nueva</span>`;
}

function cardShell() {
  return "flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(20,24,28,0.04)]";
}

function cardActions(html) {
  return `<div class="mt-auto flex flex-wrap gap-2 pt-4">${html}</div>`;
}

function renderPortalCard(item, openId) {
  const title = `<h2 class="text-sm font-semibold leading-snug">${esc(item.title)}</h2>`;
  if (item.type === "acceso") {
    return `<li class="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(20,24,28,0.04)]">
      <a href="${esc(item.href)}" class="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
        <span class="grid h-28 place-items-center bg-[#e7f8f3] text-tide" aria-hidden="true"><svg viewBox="0 0 24 24" class="line size-8"><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"></path><path d="M14 3.5V8h4.5"></path><path d="M9 13h6M9 16.5h4"></path></svg></span>
        <span class="px-4 py-3">${title}</span>
      </a>
    </li>`;
  }
  if (item.type === "base") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Acceder${cardLeave(item.title)}</a><button type="button" class="${cardBtn()}" data-card-dialog="crear" data-card-opener="crear" data-card-id="${esc(item.id || "")}">Crear</button>`)}</li>`;
  }
  if (item.type === "leer") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}">Leer más</a>`)}</li>`;
  }
  if (item.type === "circular") {
    return `<li class="${cardShell()}">
      <button type="button" class="flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" data-card-dialog="circular" data-card-opener="circular" data-card-id="${esc(item.id || "")}">
        ${title}
        <span class="mt-2 text-sm text-mute">Fecha: ${esc(item.date)}</span>
      </button>
    </li>`;
  }
  if (item.type === "prescriptor") {
    return `<li class="${cardShell()}">${title}<p class="mt-3 text-2xl font-semibold tabular-nums leading-none">${esc(item.percent)}</p><p class="mt-1 text-xs text-mute">Cuantía prescriptor</p>${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}">Acerca de</a>`)}</li>`;
  }
  if (item.type === "ir") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Ír${cardLeave(item.title)}</a>`)}</li>`;
  }
  if (item.type === "ver") {
    return `<li class="${cardShell()}">${title}${cardActions(`<button type="button" class="${cardBtn("solid")}" data-card-dialog="calculos" data-card-opener="calculos" data-card-id="${esc(item.id || "")}">Ver</button>`)}</li>`;
  }
  if (item.type === "acuerdo") {
    const open = openId === item.id;
    const rows = item.pdfs
      .map((pdf) => `<li class="flex items-baseline justify-between gap-3 border-t border-line py-2 text-sm"><span>${esc(pdf)}</span><span class="shrink-0 text-xs text-mute">PDF</span></li>`)
      .join("");
    return `<li class="${cardShell()}">${title}${cardActions(`<button type="button" class="${cardBtn()}" data-card-toggle="${esc(item.id)}" data-card-opener="acuerdo" aria-expanded="${open ? "true" : "false"}" aria-controls="acuerdo-pdfs">Mostrar convenios</button><button type="button" class="${cardBtn()}" data-card-convenio="${esc(item.id)}" data-card-opener="convenio">Convenio</button><a class="${cardBtn()}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Web${cardLeave(item.title)}</a>`)}${open ? `<ul id="acuerdo-pdfs" class="mt-2">${rows}</ul>` : ""}</li>`;
  }
  if (item.type === "web") {
    return `<li class="${cardShell()}">${title}${cardActions(`<a class="${cardBtn("solid")}" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">Ver sitio web${cardLeave(item.title)}</a>`)}</li>`;
  }
  return `<li class="${cardShell()}">${title}<p class="mt-2 text-sm text-[#3c424a]">${esc(item.office)}</p><a class="mt-1 text-sm text-tide" href="mailto:${esc(item.email)}">${esc(item.email)}</a><p class="mt-3 text-sm text-mute">${esc(item.kind)}</p></li>`;
}

function cardDialog(kind, item) {
  if (!kind) return "";
  let body = "";
  if (kind === "crear") {
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">Crear base</h2>
      <form data-card-form class="mt-4">
        <label class="block text-sm">Nombre<input name="nombre" required class="mt-1 h-9 w-full rounded-lg border border-line px-3 text-sm outline-none focus:border-ink" /></label>
        <div class="mt-4 flex gap-2"><button type="submit" class="${cardBtn("solid")}">Crear</button><button type="button" class="${cardBtn()}" data-card-close>Cancelar</button></div>
      </form>`;
  } else if (kind === "circular") {
    const title = item?.title || "Aplazamiento de VeriFactu";
    const date = item?.date || "08/10/2026";
    const extra = item?.body ? `<p class="mt-4 text-sm leading-relaxed text-[#3c424a]">${esc(item.body)}</p>` : "";
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">${esc(title)}</h2>
      <p class="mt-2 text-sm text-mute">Fecha: ${esc(date)}</p>
      <p class="mt-4 text-xs tracking-wide text-mute">LOGO · NOMBRE · DIRECCION · TELF · FAX · EMAIL</p>
      ${extra}
      <button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  } else if (kind === "productos") {
    const rows = ["LaLeyDigital360", "CISS Fiscal", "CISS Laboral", "CISS Contable Mercantil"]
      .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
      .join("");
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">La Ley</h2><ul class="mt-3">${rows}</ul><button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  } else {
    const rows = ["Intereses judiciales", "Tasas judiciales", "Embargo de salario", "Pensión alimenticia", "Actualización de rentas", "Indemnización por despido"]
      .map((name) => `<li class="border-t border-line py-2 text-sm">${esc(name)}</li>`)
      .join("");
    body = `<h2 id="card-dialog-title" class="text-base font-semibold">Herramientas de cálculo</h2><ul class="mt-3">${rows}</ul><button type="button" class="${cardBtn()} mt-4" data-card-close>Cerrar</button>`;
  }
  return `<div class="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,24,28,0.32)] p-4" data-card-backdrop><div role="dialog" aria-modal="true" aria-labelledby="card-dialog-title" data-card-dialog class="w-full max-w-md rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(20,24,28,0.16)]">${body}</div></div>`;
}

function renderCardGrid(items, state) {
  const current = state.itemId ? items.find((item) => item.id === state.itemId) : undefined;
  return `<ul class="grid list-none grid-cols-2 items-stretch gap-4 lg:grid-cols-3 xl:grid-cols-4">${items.map((item) => renderPortalCard(item, state.open)).join("")}</ul>${cardDialog(state.dialog, current)}`;
}

function homeCards() {
  return [
    { id: "base", type: "base", title: "Aranzadi", href: "https://www.aranzadi.es" },
    { id: "circular", type: "circular", title: "Aplazamiento de VeriFactu", date: "08/10/2026" },
    { id: "ir", type: "ir", title: "Códigos electrónicos BOE", href: "https://www.boe.es/biblioteca_juridica/codigos/" },
    { id: "ver", type: "ver", title: "Herramientas de cálculo" },
    {
      id: "aeat",
      type: "acuerdo",
      title: "AEAT",
      href: "https://sede.agenciatributaria.gob.es",
      pdfs: ["Convenio", "Renovación", "Modelo de adhesión", "Publicación en boletín oficial"],
    },
    { id: "web", type: "web", title: "DAFO", href: "https://www.ipyme.org" },
    { id: "profesional", type: "profesional", title: "Marina Soler", office: "Barcelona", email: "marina.soler@albor.example", kind: "Socia" },
  ];
}

function bindResumen() {
  const grid = main.querySelector("#home-cards");
  if (grid) {
    cardUi.open = "";
    cardUi.dialog = "";
    cardUi.opener = "";
    const shut = () => {
      const opener = cardUi.opener;
      cardUi.dialog = "";
      cardUi.opener = "";
      draw();
      if (opener) grid.querySelector(`[data-card-opener="${CSS.escape(opener)}"]`)?.focus();
    };
    const draw = () => {
      grid.innerHTML = renderCardGrid(homeCards(), cardUi);
      grid.querySelectorAll("[data-card-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.dataset.cardToggle;
          cardUi.open = cardUi.open === id ? "" : id;
          draw();
          grid.querySelector(`[data-card-toggle="${CSS.escape(id)}"]`)?.focus();
        });
      });
      grid.querySelectorAll("[data-card-convenio]").forEach((button) => {
        button.addEventListener("click", () => {
          cardUi.open = button.dataset.cardConvenio;
          draw();
          grid.querySelector("#acuerdo-pdfs li")?.focus?.();
          grid.querySelector(`[data-card-convenio="${CSS.escape(button.dataset.cardConvenio)}"]`)?.focus();
        });
      });
      grid.querySelectorAll("[data-card-dialog]").forEach((button) => {
        if (button.getAttribute("role") === "dialog") return;
        button.addEventListener("click", () => {
          cardUi.dialog = button.dataset.cardDialog;
          cardUi.opener = button.dataset.cardOpener || "";
          draw();
          const field = grid.querySelector("[data-card-dialog] input, [data-card-dialog] [data-card-close]");
          field?.focus();
        });
      });
      grid.querySelector("[data-card-backdrop]")?.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) shut();
      });
      grid.querySelectorAll("[data-card-close]").forEach((button) => {
        button.addEventListener("click", shut);
      });
      grid.querySelector("[data-card-form]")?.addEventListener("submit", (event) => {
        event.preventDefault();
        shut();
      });
    };
    grid.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && cardUi.dialog) shut();
    });
    draw();
    return;
  }
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

function orderMoney(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);
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
  if (col.kind === "date") return tabla4Date(value);
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
  const hiddenCols = TABLA7_COLS.filter((col) => !tabla7.cols[col.key]).length;
  root.querySelector("#tabla7-cols-btn span").textContent = hiddenCols ? `Columnas · ${hiddenCols}` : "Columnas";
  [
    ["#tabla7-cols-btn", "columnas", hiddenCols > 0],
  ].forEach(([selector, name, marked]) => {
    const button = root.querySelector(selector);
    const on = tabla7.open === name;
    button.setAttribute("aria-expanded", on ? "true" : "false");
    button.className = tabla7MenuButton(on, marked);
  });

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
  if (bodyScroll) new ResizeObserver(() => tabla7SyncGutter(root)).observe(bodyScroll);
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
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const sheet5 = main.querySelector("#tabla5-sheet");
  if (sheet5 && !sheet5.hidden) sheet5.hidden = true;
  if (main.querySelector("#tabla7") && (tabla7.open || tabla7.pick || tabla7.sheet || tabla7.menu)) {
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

function forumCategory(id) {
  return FORUM_CATEGORIES.find((category) => category.id === id) || FORUM_CATEGORIES[0];
}

function forumThread(id) {
  return FORUM_THREADS.find((thread) => thread.id === id) || null;
}

function forumThreadList() {
  const q = forumUi.q.trim().toLowerCase();
  return FORUM_THREADS.filter((thread) => {
    if (thread.category !== forumUi.category) return false;
    if (!q) return true;
    return [thread.title, thread.excerpt, thread.author].join(" ").toLowerCase().includes(q);
  });
}

function drawForo() {
  const root = main.querySelector("#foro");
  if (!root) return;
  const category = forumCategory(forumUi.category);
  const threads = forumThreadList();
  if (!threads.some((thread) => thread.id === forumUi.thread)) forumUi.thread = threads[0]?.id || "";

  root.querySelector("#forum-categories").innerHTML = FORUM_CATEGORIES.map((item) => {
    const active = item.id === forumUi.category;
    const count = FORUM_THREADS.filter((thread) => thread.category === item.id).length;
    return `<button type="button" data-forum-category="${item.id}" class="w-full rounded-xl p-3 text-left ${active ? "bg-[#e7f8f3]" : "hover:bg-[#f6f7f8]"}">
      <span class="flex items-start justify-between gap-2">
        <span class="flex min-w-0 items-center gap-2">
          <span class="grid size-7 shrink-0 place-items-center rounded-lg ${item.tone} text-xs font-semibold">${esc(item.name.slice(0, 1))}</span>
          <span class="truncate text-sm font-medium ${active ? "text-[#0f766e]" : "text-ink"}">${esc(item.name)}</span>
        </span>
        <span class="text-xs text-mute">${count}</span>
      </span>
      <span class="mt-1 block truncate pl-9 text-xs text-mute">${esc(item.description)}</span>
    </button>`;
  }).join("");

  root.querySelector("#forum-category-title").textContent = category.name;
  root.querySelector("#forum-category-description").textContent = category.description;
  root.querySelector("#forum-thread-count").textContent = `${threads.length} ${threads.length === 1 ? "conversación" : "conversaciones"}`;
  root.querySelector("#forum-threads").innerHTML = threads.length
    ? threads
        .map(
          (thread) => `<button type="button" data-forum-thread="${thread.id}" class="block w-full border-b border-line py-4 text-left ${forumUi.thread === thread.id ? "bg-[#f6fbfa] -mx-2 rounded-xl px-2" : ""}">
            <div class="flex items-start gap-3">
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-[#dbeafe] text-[10px] font-semibold text-[#1d4ed8]">${esc(thread.initials)}</span>
              <span class="min-w-0 flex-1">
                <span class="flex flex-wrap items-center gap-2">
                  <span class="truncate text-sm font-semibold">${esc(thread.title)}</span>
                  ${thread.pinned ? '<span class="rounded bg-[#f3f4f6] px-1.5 py-0.5 text-[10px] font-medium text-mute">Fijada</span>' : ""}
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
    <span class="inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${threadCategory.tone}">${esc(threadCategory.name)}</span>
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
  panel?.classList.toggle("hidden", !thread);
  panel?.classList.toggle("forum-mobile-open", Boolean(thread));
}

function bindForo() {
  const root = main.querySelector("#foro");
  if (!root) return;
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
      forumUi.category = category.dataset.forumCategory;
      forumUi.q = "";
      if (search) search.value = "";
      drawForo();
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
      root.querySelector("#forum-compose-title").textContent = forumUi.compose === "category" ? "Crear categoría" : "Nueva conversación";
      root.querySelector("#forum-compose-name").placeholder = forumUi.compose === "category" ? "Nombre de la categoría" : "¿De qué quieres hablar?";
      root.querySelector("#forum-compose").hidden = false;
      root.querySelector("#forum-compose-name").focus();
      return;
    }
    if (event.target.closest?.("[data-forum-close-compose]") || event.target.id === "forum-compose") {
      root.querySelector("#forum-compose").hidden = true;
      return;
    }
    if (event.target.closest?.("[data-forum-close-thread]")) {
      const panel = root.querySelector("#forum-thread-panel");
      panel.classList.add("hidden");
      panel.classList.remove("forum-mobile-open");
    }
  });

  root.querySelector("#forum-compose-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    root.querySelector("#forum-compose").hidden = true;
    event.currentTarget.reset();
  });
  root.querySelector("#forum-reply")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
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

function hydrate(route) {
  if (route.name === "resumen") bindResumen();
  if (route.name === "agenda") bindInicio2();
  if (route.name === "noticia") bindNoticia(route.param);
  if (route.name === "foro" || route.name === "expedientes") bindForo();
  if (route.name === "expediente") bindMatter(route.param);
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

const navScroll = document.querySelector(".nav-scroll");

function syncNavFade() {
  const remaining = navScroll.scrollHeight - navScroll.clientHeight - navScroll.scrollTop;
  navScroll.classList.toggle("can-scroll-more", remaining > 8);
}

navScroll.addEventListener("scroll", syncNavFade, { passive: true });
new ResizeObserver(syncNavFade).observe(navScroll);

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
  syncNavFade();
}

document.querySelectorAll("[data-branch] .nav-chevron").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.closest("[data-branch]").dataset.branch;
    if (openBranches.has(id)) openBranches.delete(id);
    else openBranches.add(id);
    syncMaterias(parseRoute(), true);
  });
});

const SIDEBAR_MOTION_MS = 360;
let settleTimer = 0;
let reorderGen = 0;
const sidebarToggle = document.querySelector("#sidebar-toggle");
const SIDEBAR_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function sidebarSlots() {
  return [...sidebar.querySelectorAll("#sidebar-toggle, .brand-row > button:first-child, #sede-toggle, #notice-toggle, .nav-link, .foot-btn")];
}

function playSidebar(compact) {
  const gen = ++reorderGen;
  const list = sidebarSlots();
  const first = list.map((node) => node.getBoundingClientRect());
  const fromWidth = sidebar.getBoundingClientRect().width;

  sidebar.style.transition = "none";
  list.forEach((node) => {
    node.style.transition = "none";
    node.style.transform = "";
  });
  sidebar.classList.toggle("is-compact", compact);
  sidebar.classList.toggle("is-settled", compact);
  sidebar.classList.add("is-moving");
  sidebar.style.width = `${fromWidth}px`;
  void sidebar.offsetWidth;

  list.forEach((node, index) => {
    const now = node.getBoundingClientRect();
    const dx = first[index].left - now.left;
    const dy = first[index].top - now.top;
    node.style.transform = Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 ? "" : `translate(${dx}px, ${dy}px)`;
  });

  requestAnimationFrame(() => {
    if (gen !== reorderGen) return;
      sidebar.style.transition = `width ${SIDEBAR_MOTION_MS}ms ${SIDEBAR_EASE}`;
      void sidebar.offsetWidth;
      sidebar.style.width = compact ? "72px" : "220px";
    list.forEach((node) => {
      if (!node.style.transform) return;
      node.style.transition = `transform ${SIDEBAR_MOTION_MS}ms ${SIDEBAR_EASE}`;
      node.style.transform = "";
    });
  });

  window.clearTimeout(settleTimer);
  settleTimer = window.setTimeout(() => {
    if (gen !== reorderGen) return;
    sidebar.style.transition = "";
    sidebar.style.width = "";
    sidebar.classList.remove("is-moving");
    list.forEach((node) => {
      node.style.transition = "";
      node.style.transform = "";
    });
    syncNavFade();
  }, SIDEBAR_MOTION_MS + 40);
}

document.querySelector("#sidebar-toggle").addEventListener("click", () => {
  ui.compact = !ui.compact;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  sidebarToggle.setAttribute("aria-pressed", ui.compact ? "true" : "false");
  sidebarToggle.setAttribute("aria-label", ui.compact ? "Expandir el menú" : "Contraer el menú");
  closeFloaters();
  if (reduceMotion) {
    reorderGen += 1;
    window.clearTimeout(settleTimer);
    sidebar.style.transition = "";
    sidebar.style.width = "";
    sidebar.classList.remove("is-moving");
    sidebar.classList.toggle("is-compact", ui.compact);
    sidebar.classList.toggle("is-settled", ui.compact);
    sidebarSlots().forEach((node) => {
      node.style.transition = "";
      node.style.transform = "";
    });
  } else {
    playSidebar(ui.compact);
  }
  syncNavFade();
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

document.addEventListener("click", (event) => {
  if (!noticePanel.hidden && !noticePanel.contains(event.target) && !noticeToggle.contains(event.target)) closeLayer(noticePanel, noticeToggle);
  if (!sedePanel.hidden && !sedePanel.contains(event.target) && !sedeToggle.contains(event.target)) closeLayer(sedePanel, sedeToggle);
  if (!event.target.closest("[data-menu]") && !event.target.closest("[data-menu-panel]")) {
    main.querySelectorAll("[data-menu-panel]").forEach((panel) => {
      panel.hidden = true;
    });
  }
});

window.addEventListener("hashchange", render);
if (!location.hash) location.replace("#/resumen");
else render();
