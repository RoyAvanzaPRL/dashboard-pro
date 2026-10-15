import { renderBreadcrumbs } from "../../components/breadcrumbs.js";
import { areaClass, btnPrimary, btnQuiet, controlClass, inputClass, labelClass, overlay, trapOverlay } from "../../components/overlay.js";
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
    lastReply: "Hoy · 09:18",
    opening: {
      author: "Marina Soler",
      initials: "MS",
      role: "Socia",
      time: "Ayer · 16:40",
      body: "Abrimos consulta sobre la liquidación de IVA de un socio profesional en régimen de estimación directa.\n\nContexto: el cliente factura servicios profesionales a la sociedad (participada al 60 %) y queremos contrastar el criterio de repercusión y deducción. En la sede de Barcelona hemos visto interpretaciones distintas sobre si el IVA soportado es deducible al 100 % cuando hay uso mixto del vehículo y del despacho.\n\nAdjuntamos la nota técnica de la AEAT y una consulta vinculante de 2024. Nos interesa especialmente:\n\n1) Cómo documentáis la afectación a la actividad.\n2) Si aplicáis prorrata especial o general en estos casos.\n3) Quétexto usáis en la memoria del modelo 303 cuando hay controversia.\n\n¿Cómo lo estáis resolviendo en otras sedes?",
      files: ["Nota técnica AEAT.pdf", "Consulta vinculante IVA.pdf"],
    },
    posts: [
      {
        id: "f1-c1",
        author: "Jordi Palau",
        initials: "JP",
        role: "Socio",
        time: "Hoy · 08:05",
        body: "En casos similares hemos aplicado el criterio de la consulta vinculante. Revisad especialmente el apartado de repercusión al cliente final y pedid una declaración firmada de afectación del vehículo.",
        files: [],
        children: [
          {
            id: "f1-c1-r1",
            author: "Marina Soler",
            initials: "MS",
            role: "Socia",
            time: "Hoy · 08:22",
            body: "¿Tenéis una plantilla de esa declaración? Si la compartís la adaptamos al expediente de esta mañana.",
            files: [],
            children: [
              {
                id: "f1-c1-r1-r1",
                author: "Laia Ferrer",
                initials: "LF",
                role: "Gestión",
                time: "Hoy · 08:41",
                body: "La subo esta tarde a Información complementaria. Mientras, os dejo el borrador que usamos en Sitges.",
                files: ["Declaracion-afectacion-borrador.docx"],
                children: [],
              },
            ],
          },
          {
            id: "f1-c1-r2",
            author: "Adrià Bosch",
            initials: "AB",
            role: "Asociado",
            time: "Hoy · 08:55",
            body: "Ojo con el uso mixto: si el kilometraje particular supera el 20 %, en Girona estamos aplicando prorrata y lo dejamos anotado en la ficha del asunto.",
            files: [],
            children: [],
          },
        ],
      },
      {
        id: "f1-c2",
        author: "Clara Nieto",
        initials: "CN",
        role: "Asociada senior",
        time: "Hoy · 09:18",
        body: "Coincido con Jordi. Además conviene contrastar el modelo 303 del trimestre anterior antes de cerrar: a veces el desajuste viene de una factura rectificativa no trasladada.",
        files: [],
        children: [
          {
            id: "f1-c2-r1",
            author: "Jordi Palau",
            initials: "JP",
            role: "Socio",
            time: "Hoy · 09:30",
            body: "Buen punto. Añado la revisión del 303 a la checklist del viernes.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "f2",
    category: "fiscal",
    title: "Boletín semanal de información fiscal",
    author: "Helena Torren",
    initials: "HT",
    lastReply: "—",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Lun · 08:00",
      body: "Resumen semanal de novedades fiscales del grupo (semana del 5 al 11 de octubre).\n\nIncluye: aplazamiento VeriFactu, criterio sobre socios profesionales, y recordatorio de plazos de autoliquidaciones.\n\nPublicación de lectura; no requiere respuesta salvo incidencia en la distribución del PDF.",
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
    lastReply: "—",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Lun · 08:05",
      body: "Boletín contable-mercantil de la semana para consulta de los despachos.\n\nTemas destacados: reducción de capital por pérdidas, facturación electrónica y novedades en el depósito de cuentas.",
      files: ["Boletin-contable-semana.pdf"],
    },
    posts: [],
  },
  {
    id: "f4",
    category: "fiscal",
    title: "Aplazamiento VeriFactu: ¿cómo lo comunicáis al cliente?",
    author: "Adrià Bosch",
    initials: "AB",
    lastReply: "Ayer · 12:05",
    opening: {
      author: "Adrià Bosch",
      initials: "AB",
      role: "Asociado",
      time: "Ayer · 10:02",
      body: "Tras el aplazamiento de VeriFactu, ¿qué texto estándar estáis usando en la circular a clientes?\n\nBuscamos un párrafo corto que explique el cambio de calendario sin generar alarmas, y que deje claro qué deben hacer (o no hacer) sus proveedores de software hasta la nueva fecha.\n\nSi alguien ya tiene una versión validada por marketing interno, compartidla por favor.",
      files: [],
    },
    posts: [
      {
        id: "f4-c1",
        author: "Laia Ferrer",
        initials: "LF",
        role: "Gestión",
        time: "Ayer · 11:20",
        body: "En Barcelona reutilizamos el párrafo de la circular interna y añadimos la fecha orientativa de entrada en vigor. Os lo pego adaptado:",
        files: [],
        children: [
          {
            id: "f4-c1-r1",
            author: "Adrià Bosch",
            initials: "AB",
            role: "Asociado",
            time: "Ayer · 11:45",
            body: "Perfecto. ¿Podemos citar la circular del grupo o preferís un texto neutro sin referencia interna?",
            files: [],
            children: [
              {
                id: "f4-c1-r1-r1",
                author: "Marina Soler",
                initials: "MS",
                role: "Socia",
                time: "Ayer · 12:05",
                body: "Mejor texto neutro al cliente. La circular del grupo la dejamos solo para uso interno.",
                files: [],
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "f5",
    category: "fiscal",
    title: "Provisión de fondos y tasas en contencioso",
    author: "Clara Nieto",
    initials: "CN",
    lastReply: "Vie · 17:40",
    opening: {
      author: "Clara Nieto",
      initials: "CN",
      role: "Asociada senior",
      time: "Vie · 12:30",
      body: "Con la actualización de tasas judiciales en el orden contencioso, ¿estáis revisando provisiones en recursos pendientes de interposición?\n\nEn particular nos preocupan los asuntos con cuantía indeterminada y los que llevan varios meses en cola sin demanda presentada. Propongo una pasada conjunta la semana que viene.",
      files: ["Cuadro-tasas-2026.xlsx"],
    },
    posts: [
      {
        id: "f5-c1",
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Vie · 17:10",
        body: "Sí. Hemos marcado tres asuntos de Nou Transport y uno de Helvetia para revisar esta semana.",
        files: [],
        children: [
          {
            id: "f5-c1-r1",
            author: "Clara Nieto",
            initials: "CN",
            role: "Asociada senior",
            time: "Vie · 17:40",
            body: "Genial. Si quieres, preparo yo la tabla comparativa tasa antigua / nueva antes del lunes.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "g1",
    category: "general",
    title: "XXXIV Jornadas: confirmación de asistentes",
    author: "Helena Torren",
    initials: "HT",
    lastReply: "Hoy · 09:05",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Mar · 09:00",
      body: "Pedimos confirmación de asistentes a las XXXIV Jornadas (Granada, 23–25 sep).\n\nNecesitamos nombre, sede y si requiere hotel. El programa adjunto incluye los talleres de fiscal y laboral. Cupo limitado por sede.",
      files: ["Programa-jornadas.pdf"],
    },
    posts: [
      {
        id: "g1-c1",
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Mar · 10:15",
        body: "Confirmamos a Marina y Jordi desde Barcelona. Hotel sí, llegada el día 22 por la tarde.",
        files: [],
        children: [
          {
            id: "g1-c1-r1",
            author: "Laia Ferrer",
            initials: "LF",
            role: "Gestión",
            time: "Mar · 11:02",
            body: "Anoto reservas de hotel y traslado. ¿Mismo vuelo o tren?",
            files: [],
            children: [
              {
                id: "g1-c1-r1-r1",
                author: "Marina Soler",
                initials: "MS",
                role: "Socia",
                time: "Mar · 11:20",
                body: "Tren. Os paso localizadores cuando los tenga.",
                files: [],
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "g1-c2",
        author: "Helena Torren",
        initials: "HT",
        role: "Grupo",
        time: "Hoy · 08:40",
        body: "Recibido Barcelona. Cierro el cupo de esa sede mañana a las 12:00.",
        files: [],
        children: [
          {
            id: "g1-c2-r1",
            author: "Adrià Bosch",
            initials: "AB",
            role: "Asociado",
            time: "Hoy · 09:05",
            body: "Desde Girona ¿queda alguna plaza? Si hay, me apunto al taller laboral.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "g2",
    category: "general",
    title: "Renovación Qmementix 2026",
    author: "Helena Torren",
    initials: "HT",
    lastReply: "Mié · 15:10",
    opening: {
      author: "Helena Torren",
      initials: "HT",
      role: "Grupo",
      time: "Mié · 09:30",
      body: "Recordatorio del calendario de renovación de Qmementix para 2026.\n\nFecha límite de confirmación: 30 de octubre. Las sedes que no renueven perderán el acceso a los módulos de biblioteca vinculados.",
      files: ["Calendario-Qmementix-2026.pdf"],
    },
    posts: [
      {
        id: "g2-c1",
        author: "Jordi Palau",
        initials: "JP",
        role: "Socio",
        time: "Mié · 14:00",
        body: "Lo pasamos a gestión para cerrar antes de fin de mes.",
        files: [],
        children: [
          {
            id: "g2-c1-r1",
            author: "Laia Ferrer",
            initials: "LF",
            role: "Gestión",
            time: "Mié · 15:10",
            body: "Recibido. Lo meto en la pasada de proveedores del viernes.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "l1",
    category: "laboral",
    title: "Cese de actividad de autónomos: modelos actualizados",
    author: "Adrià Bosch",
    initials: "AB",
    lastReply: "Hoy · 08:20",
    opening: {
      author: "Adrià Bosch",
      initials: "AB",
      role: "Asociado",
      time: "Ayer · 18:10",
      body: "¿Alguien tiene ya el checklist actualizado tras el cambio de modelos de cese de actividad?\n\nNos han entrado dos consultas esta semana y no queremos usar la versión de 2025 por si el campo de causas ha cambiado.",
      files: [],
    },
    posts: [
      {
        id: "l1-c1",
        author: "Clara Nieto",
        initials: "CN",
        role: "Asociada senior",
        time: "Hoy · 07:50",
        body: "Sí. Lo subiremos a Información complementaria esta tarde; de momento adjunto el borrador con los nuevos códigos de causa.",
        files: ["Checklist-cese-autonomos.pdf"],
        children: [
          {
            id: "l1-c1-r1",
            author: "Adrià Bosch",
            initials: "AB",
            role: "Asociado",
            time: "Hoy · 08:20",
            body: "Gracias. Lo cruzo con los dos expedientes abiertos y te digo si falta algo.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "l2",
    category: "laboral",
    title: "Despido disciplinario y prueba digital",
    author: "Jordi Palau",
    initials: "JP",
    lastReply: "Lun · 17:10",
    opening: {
      author: "Jordi Palau",
      initials: "JP",
      role: "Socio",
      time: "Lun · 11:20",
      body: "Compartimos criterio sobre admisión de captura de pantalla como prueba en despido disciplinario.\n\nResumen: la captura sola suele ser insuficiente si no se acredita autenticidad e integridad. En la práctica estamos pidiendo acta notarial o pericial cuando el origen es un dispositivo personal.\n\n¿Alguien tiene experiencia reciente en juzgados de lo social de Cataluña con este tipo de prueba?",
      files: ["Nota-prueba-digital.pdf"],
    },
    posts: [
      {
        id: "l2-c1",
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Lun · 13:05",
        body: "Útil. Lo enlazamos al expediente de Helvetia: allí la captura venía del móvil del encargado.",
        files: [],
        children: [
          {
            id: "l2-c1-r1",
            author: "Adrià Bosch",
            initials: "AB",
            role: "Asociado",
            time: "Lun · 16:45",
            body: "En Helvetia yo pediría acta notarial sí o sí. Si queréis, preparo el encargo al notario.",
            files: [],
            children: [
              {
                id: "l2-c1-r1-r1",
                author: "Marina Soler",
                initials: "MS",
                role: "Socia",
                time: "Lun · 17:10",
                body: "Adelante. Coordina con Laia para la provisión de fondos.",
                files: [],
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "j1",
    category: "juridico",
    title: "Silencio en reposición: unificación de doctrina",
    author: "Jordi Palau",
    initials: "JP",
    lastReply: "Hoy · 10:45",
    opening: {
      author: "Jordi Palau",
      initials: "JP",
      role: "Socio",
      time: "Hoy · 08:20",
      body: "La Sala Tercera fija cuándo arranca el cómputo del contencioso tras silencio en reposición.\n\nCriterio clave: si la administración no resuelve en plazo, el cómputo arranca desde el día siguiente al vencimiento, no desde una notificación tardía.\n\nAdjuntamos nota breve y el extracto. Conviene revisarlo en todos los recursos de reposición municipales abiertos.",
      files: ["Nota-TS-reposicion.pdf"],
    },
    posts: [
      {
        id: "j1-c1",
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Hoy · 10:12",
        body: "Aplicarlo ya en Nou Transport y en cualquier reposición municipal sin respuesta.",
        files: [],
        children: [
          {
            id: "j1-c1-r1",
            author: "Clara Nieto",
            initials: "CN",
            role: "Asociada senior",
            time: "Hoy · 10:45",
            body: "Hago el listado de asuntos afectados y lo dejo en este hilo mañana.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "c1",
    category: "clausulas",
    title: "Modelo de demanda actualizado (cláusulas abusivas)",
    author: "Clara Nieto",
    initials: "CN",
    lastReply: "Jue · 12:40",
    opening: {
      author: "Clara Nieto",
      initials: "CN",
      role: "Asociada senior",
      time: "Jue · 09:40",
      body: "Subimos el modelo de demanda alineado con la última doctrina del TS sobre cláusulas abusivas.\n\nCambios principales: nuevo apartado de transparencia material, referencia a costas y tabla de pretensiones actualizada. Revisad antes de usarlo en demandas nuevas.",
      files: ["Modelo-demanda-clausulas.docx"],
    },
    posts: [
      {
        id: "c1-c1",
        author: "Laia Ferrer",
        initials: "LF",
        role: "Gestión",
        time: "Jue · 12:00",
        body: "Lo archivo también en Información complementaria bajo Cláusulas suelo.",
        files: [],
        children: [
          {
            id: "c1-c1-r1",
            author: "Clara Nieto",
            initials: "CN",
            role: "Asociada senior",
            time: "Jue · 12:40",
            body: "Gracias. Si alguien detecta un fallo de redacción, comentad aquí antes del lunes.",
            files: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "p1",
    category: "proteccion",
    title: "Registro de actividades de tratamiento: plantilla 2026",
    author: "Laia Ferrer",
    initials: "LF",
    lastReply: "—",
    opening: {
      author: "Laia Ferrer",
      initials: "LF",
      role: "Gestión",
      time: "Vie · 10:00",
      body: "Plantilla revisada del RAT para despachos del grupo (versión 2026).\n\nIncluye nuevos tratamientos de videovigilancia y de herramientas de IA usadas en selección de personal. Sustituye a la versión de 2024.",
      files: ["Plantilla-RAT-2026.pdf"],
    },
    posts: [],
  },
];

const TONES = [
  "bg-[#e8f2ff] text-[#24527a]",
  "bg-[#fff0e4] text-[#8a4b2a]",
  "bg-[#efe8ff] text-[#5b3d8a]",
  "bg-[#e7f8f3] text-[#0f766e]",
  "bg-[#f3f4f6] text-[#4b5563]",
  "bg-[#dbeafe] text-[#1d4ed8]",
];

const ui = { q: "", topic: "" };

function slug(value) {
  const base = String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base || "item";
}

function uniqueId(rows, base) {
  let id = base;
  let n = 2;
  while (rows.some((item) => item.id === id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  return id;
}

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

function countComments(nodes = []) {
  return nodes.reduce((sum, node) => sum + 1 + countComments(node.children || []), 0);
}

function topicReplies(topic) {
  return countComments(topic.posts || []);
}

function filesMarkup(files = []) {
  if (!files.length) return "";
  return `<div class="mt-3 flex flex-wrap gap-2">${files
    .map((file) => `<span class="foro2-attach">${esc(file)}</span>`)
    .join("")}</div>`;
}

function bodyMarkup(text) {
  return String(text || "")
    .split(/\n\n+/)
    .map((para) => `<p class="mt-3 text-sm leading-relaxed text-[#3c424a] first:mt-0">${esc(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function commentMarkup(post, depth = 0) {
  const kids = post.children || [];
  const nested = kids.length
    ? `<div class="foro2-replies">${kids.map((child) => commentMarkup(child, depth + 1)).join("")}</div>`
    : "";

  return `<article class="foro2-comment" data-depth="${depth}" data-comment="${esc(post.id || "")}">
    <div class="flex items-start gap-3">
      <span class="grid size-8 shrink-0 place-items-center rounded-full bg-[#e6defa] text-[10px] font-semibold text-[#5b3d8a]">${esc(post.initials)}</span>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span class="text-sm font-semibold">${esc(post.author)}</span>
          <span class="text-[11px] text-mute">${esc(post.role)}</span>
          <span class="text-[11px] text-mute">·</span>
          <span class="text-[11px] text-mute">${esc(post.time)}</span>
        </div>
        <div class="mt-2">${bodyMarkup(post.body)}</div>
        ${filesMarkup(post.files)}
        <div class="mt-2 flex flex-wrap items-center gap-3">
          <button type="button" class="text-xs font-medium text-tide hover:text-[#0f766e]">Responder</button>
          ${kids.length ? `<span class="text-[11px] text-mute">${countLabel(countComments(kids), "respuesta", "respuestas")}</span>` : ""}
        </div>
        ${nested}
      </div>
    </div>
  </article>`;
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
              <span class="grid size-10 shrink-0 place-items-center rounded-full ${item.tone} text-sm font-semibold">${esc(item.name.slice(0, 1))}</span>
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
          const replies = topicReplies(topic);
          return `<button type="button" data-foro2-topic="${esc(topic.id)}" class="foro2-topic-btn ${on ? "is-active" : ""}" ${on ? 'aria-current="true"' : ""}>
            <span class="foro2-topic-title block text-sm font-semibold leading-snug">${esc(topic.title)}</span>
            <span class="mt-1 block text-[11px] text-mute">${replies} ${replies === 1 ? "comentario" : "comentarios"}</span>
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
  const total = topicReplies(topic);
  const comments = (topic.posts || []).map((post) => commentMarkup(post, 0)).join("");

  panel.innerHTML = `
    <article class="max-w-3xl">
      <span class="inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${category.tone}">${esc(category.name)}</span>
      <h2 class="mt-3 text-2xl font-semibold leading-tight tracking-tight">${esc(topic.title)}</h2>
      <div class="mt-3 flex items-center gap-2">
        <span class="grid size-8 place-items-center rounded-full bg-[#dbeafe] text-[10px] font-semibold text-[#1d4ed8]">${esc(opening.initials)}</span>
        <span class="min-w-0">
          <span class="block text-sm font-semibold">${esc(opening.author)}</span>
          <span class="block text-[11px] text-mute">${esc(opening.role)} · ${esc(opening.time)} · ${countLabel(total, "comentario", "comentarios")}</span>
        </span>
      </div>
      <div class="mt-5">${bodyMarkup(opening.body)}</div>
      ${filesMarkup(opening.files)}
    </article>

    <section class="mt-8 max-w-3xl border-t border-line pt-6">
      <h3 class="text-sm font-semibold">${countLabel(total, "comentario", "comentarios")}</h3>
      <div class="foro2-thread-tree mt-4">
        ${comments || `<p class="text-sm text-mute">Sé el primero en comentar esta publicación.</p>`}
      </div>
    </section>

    <form id="foro2-reply" class="mt-8 max-w-3xl border-t border-line pt-6 pb-2">
      <p class="text-sm font-semibold">Añadir un comentario</p>
      <label class="sr-only" for="foro2-reply-input">Escribir un comentario</label>
      <textarea id="foro2-reply-input" rows="3" placeholder="Escribe un comentario..." class="mt-3 resize-none py-2 ${controlClass}"></textarea>
      <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
        <button type="button" class="${btnQuiet}">Adjuntar archivo</button>
        <button type="submit" class="${btnPrimary}">Comentar</button>
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
      { label: category.name },
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
  let composeOpener = null;
  root.insertAdjacentHTML(
    "beforeend",
    overlay({
      id: "foro2-compose",
      titleId: "foro2-compose-title",
      title: "Nuevo tema",
      formId: "foro2-compose-form",
      closeAttr: "data-foro2-close",
      submitLabel: "Crear",
      body: `<label id="foro2-compose-cat-field" class="${labelClass}" for="foro2-compose-category">Categoría<select id="foro2-compose-category" class="${inputClass}"></select></label><label class="${labelClass}" for="foro2-compose-name"><span id="foro2-compose-name-label">Título</span><input id="foro2-compose-name" required class="${inputClass}" /></label><label class="${labelClass}" for="foro2-compose-body">Descripción<textarea id="foro2-compose-body" rows="4" required class="${areaClass}"></textarea></label>`,
    }),
  );
  trapOverlay(root.querySelector("#foro2-compose"));

  const closeCompose = () => {
    const layer = root.querySelector("#foro2-compose");
    if (!layer || layer.hidden) return;
    layer.hidden = true;
    composeOpener?.focus();
    composeOpener = null;
  };

  const openCompose = (kind, opener) => {
    composeOpener = opener;
    const category = kind === "topic";
    const current = categoryById(parseForo2(currentRoute).categoryId);
    const select = root.querySelector("#foro2-compose-category");
    root.querySelector("#foro2-compose-title").textContent = category ? "Nuevo tema" : "Crear categoría";
    root.querySelector("#foro2-compose-cat-field").hidden = !category;
    select.required = category;
    if (category) {
      select.innerHTML = CATEGORIES.map(
        (item) => `<option value="${esc(item.id)}"${current?.id === item.id ? " selected" : ""}>${esc(item.name)}</option>`,
      ).join("");
    }
    root.querySelector("#foro2-compose-name-label").textContent = category ? "Título" : "Nombre";
    root.querySelector("#foro2-compose-name").placeholder = category ? "Título del tema" : "Nombre de la categoría";
    root.querySelector("#foro2-compose-form").dataset.kind = kind;
    root.querySelector("#foro2-compose").hidden = false;
  };

  root.querySelector("#foro2-search")?.addEventListener("input", (event) => {
    ui.q = event.target.value;
    draw(currentRoute);
  });

  root.addEventListener("click", (event) => {
    if (event.target.closest?.("[data-foro2-close]") || event.target.id === "foro2-compose") {
      closeCompose();
      return;
    }
    const composeCat = event.target.closest?.("#foro2-compose-cat");
    if (composeCat) {
      openCompose("category", composeCat);
      return;
    }
    const composeTopic = event.target.closest?.("#foro2-compose-topic");
    if (composeTopic) {
      openCompose("topic", composeTopic);
      return;
    }
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

  root.querySelector("#foro2-compose-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const kind = form.dataset.kind;
    const name = form.querySelector("#foro2-compose-name").value.trim();
    const body = form.querySelector("#foro2-compose-body").value.trim();
    const categoryId = form.querySelector("#foro2-compose-category").value;
    form.reset();
    closeCompose();
    ui.q = "";
    if (kind === "category") {
      const id = uniqueId(CATEGORIES, slug(name));
      CATEGORIES.push({
        id,
        name,
        description: body,
        tone: TONES[CATEGORIES.length % TONES.length],
      });
      ui.topic = "";
      location.hash = `#/foro2/${encodeURIComponent(id)}`;
      return;
    }
    const id = uniqueId(TOPICS, slug(name));
    TOPICS.unshift({
      id,
      category: categoryId,
      title: name,
      author: "Marina Soler",
      initials: "MS",
      lastReply: "Ahora",
      opening: {
        author: "Marina Soler",
        initials: "MS",
        role: "Socia",
        time: "Ahora",
        body,
        files: [],
      },
      posts: [],
    });
    ui.topic = id;
    location.hash = `#/foro2/${encodeURIComponent(categoryId)}/topic/${encodeURIComponent(id)}`;
  });

  root.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || root.querySelector("#foro2-compose")?.hidden) return;
    event.preventDefault();
    closeCompose();
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
