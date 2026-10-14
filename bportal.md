# BPortal E-Consulting — Documentación de módulos

Fuente: [https://bportal.e-consulting.org/](https://bportal.e-consulting.org/)  
Documentado con sesión autenticada (usuario visible: Gabriel) vía Tandem.  
Fecha: 9 oct 2026.

## Qué es

Intranet del grupo **ADADE / E-Consulting**: portal Vue (Argon Dashboard + Laravel Sanctum) para asociados y personal. Tras el login, el **Inicio** es una rejilla de accesos; el mismo catálogo está en el **sidebar**. El menú de usuario (arriba a la derecha) da acceso a **Perfil**, **Cambiar contraseña** y **Cerrar sesión** (logout redirige a `e-consulting.org`). Pie: © 2026 · [hitech-informatica.es](https://www.hitech-informatica.es).

El Inicio no es un contenido: es el índice. El contenido vive dentro de cada módulo, y la profundidad cambia de uno a otro.

### Caparazón común

| Zona | Contenido |
|------|-----------|
| Sidebar | Logo, enlace Inicio + un ítem por módulo (según permisos/roles) |
| Navbar | Nombre del usuario + desplegable Perfil / Contraseña / Logout |
| Contenido | Título del módulo + acciones (Crear/Añadir…) + el layout propio de ese módulo |
| Auth pública | `/login` (correo + contraseña), `/reset/email`, `/reset/password/:token` |

---

## Mapa estructural

Cada rama es un tipo de contenido distinto. Compartir “tarjetas” o “tabla” no significa la misma profundidad.

```
Login
└─ Inicio (/)                    rejilla de 21 accesos (imagen + título). Sin filtros.

   ├─ Boletines y noticias
   │    Circulares               tarjeta fechada → visor RTF del texto completo
   │    Blog                     tabla de entradas + tres tablas auxiliares (categoría, tipo, sitio)
   │
   ├─ Consulta por área temática
   │    Foro técnico             tabla de categorías → tabla de conversaciones → hilo con respuestas
   │    Información complementaria
   │                             tabla de las mismas áreas → tabla de documentos → ficha (puede tener respuesta)
   │
   ├─ Repositorio de ficheros
   │    Biblioteca               una sola categoría → tabla de documentos → enlace al PDF
   │    Gestión de procesos      tabla de 4 procedimientos descargables
   │    Vídeos                   una sola categoría → tabla → modal de ficha
   │
   ├─ Tablón del grupo
   │    Comunicaciones internas  tabla plana de avisos → mensaje + respuestas (sin áreas temáticas)
   │
   ├─ Catálogo de servicios
   │    Valor añadido            tarjeta (nombre + % prescriptor) → ficha + Solicitar
   │    Específicos              tarjeta → ficha (texto, web, solicitud)
   │    Software                 una ficha de producto + solicitud
   │    Emprende                 casi todo sale a un sitio externo; una entrada tiene ficha interna
   │
   ├─ Enlaces y convenios
   │    Bases de datos           tarjeta → acceso externo, o modal con varios productos
   │    Utilidades               tarjeta → enlace externo; una abre un modal de calculadoras
   │    Acuerdos                 tarjeta por entidad → lista de PDFs firmados + web
   │    Convenios AEAT y CCAA    tarjeta por administración → artículo con pasos y FAQ
   │
   ├─ Directorio
   │    Oficinas                 tabla → ficha con datos y mapa
   │    Profesionales            filtros (tipo, provincia) → tarjetas de contacto
   │
   └─ Administración
        Usuarios · Roles · Soporte interno (formulario) · mantenimiento del Blog
```

### Por qué no van juntos

| Lo que parece igual | En pantalla no lo es |
|---------------------|----------------------|
| Foro e información complementaria | Mismas áreas (Fiscal, Laboral, Jurídico…), pero el foro indexa **conversaciones** (nº de respuestas, última respuesta) y la información complementaria indexa **documentos** (autor y fecha de creación). |
| Esos dos y la biblioteca | La biblioteca no tiene esas áreas. Hay una única categoría, “Biblioteca”, y abrir una fila lleva al PDF, no a un hilo. |
| Esos tres y comunicaciones internas | El tablón no clasifica por materia. Es una sola lista de avisos del grupo (jornadas, renovaciones, notas). |
| Convenios AEAT/CCAA y Acuerdos | Los convenios son la **guía** para ser colaborador social (pasos y preguntas). Los acuerdos son el **archivo** del PDF firmado con cada entidad. |
| Valor añadido, específicos, software y emprende | Los tres primeros son ficha interna con solicitud. Emprende, salvo una entrada, es un enlace a la herramienta externa. |

---

## Índice de módulos (sidebar / Inicio)

| # | Módulo | Ruta de entrada |
|---|--------|-----------------|
| 0 | Inicio (dashboard) | `/` |
| 1 | Bases de datos | `/data-bases` |
| 2 | Convenios AEAT y CCAA | `/ccaa/convenios` |
| 3 | Foro técnico | `/forum-api` |
| 4 | Información complementaria | `/additional-information-api` |
| 5 | Circulares | `/circulars-api` |
| 6 | Servicios de valor añadido | `/value-added-services` |
| 7 | Servicios específicos | `/specific-services` |
| 8 | Servicios y utilidades | `/utilities` → `/utilities/1` |
| 9 | Acuerdos | `/agreements` → `/agreements/1` |
| 10 | Emprende | `/entrepreneurships` |
| 11 | Software | `/software-services` |
| 12 | Comunicaciones internas | `/internal-communications` |
| 13 | Gestión de procesos | `/process-management` |
| 14 | Biblioteca | `/library-api` (entra ya en la categoría Biblioteca) |
| 15 | Vídeos | `/videos-api` → `/videos-api/1` |
| 16 | Oficinas | `/offices` |
| 17 | Profesionales | `/professionals` |
| 18 | Usuarios | `/users` |
| 19 | Soporte interno | `/internal-support/messages` |
| 20 | Blog | `/blog/posts` |
| 21 | Roles | `/roles` |
| — | Perfil | `/profile` |
| — | Cambiar contraseña | `/change-password` |
| — | Tipos de profesionales | `/type-professionals` |

---

## 0. Inicio (`/`)

Rejilla de **21 tarjetas**. Cada una: imagen (`/img/…`) + `h2` con el nombre del módulo + enlace a su ruta. No hay título de página dominante, ni filtros, ni tablas.

---

## 1. Bases de datos (`/data-bases`)

Accesos a bases jurídicas de terceros.

**Nivel 1 — tarjetas.** Título + botón **Acceder** + **Crear** (admin).

**Nivel 2 — depende de la base:**

- **La ley** abre un modal con cuatro productos: LaLeyDigital360, CISS Fiscal, CISS Laboral, CISS Contable Mercantil.
- Aranzadi, LEFEBVRE, Tirant Lo Blanch y VLex no despliegan esa lista: el acceso es el de la propia tarjeta.

No hay artículos ni hilos dentro del portal.

---

## 2. Convenios AEAT y CCAA (`/ccaa/convenios`)

Guías de **colaborador social**: cómo firmar en nombre de terceros ante AEAT y las haciendas autonómicas o forales. No es el archivo del convenio firmado (eso está en Acuerdos).

**Nivel 1 — 20 tarjetas**, cada una con **Leer más**.

**Nivel 2 — artículo** (`/ccaa/convenios/:id/show`). Cabecera “Convenio: …”, botón **Editar**, sección **Acerca de este convenio**. El cuerpo es HTML con pasos y un bloque de preguntas. En AEAT las secciones observadas son:

- Cómo ser Colaborador Social (Firma en nombre de Terceros)
- ¿Cuáles son los pasos para firmar en nombre de terceros?
- ¿Qué debo tener en cuenta para hacer todo correctamente?
- Si ya soy Colaborador Social con otra asociación y quiero cambiarme a ADADE, ¿cómo lo hago?
- ¿Qué puedo hacer si el botón “firmar y enviar” no funciona?
- ¿Cómo compruebo que ya soy Colaborador Social?

**Territorios:** AEAT; Andalucía; Aragón; Canarias; Cantabria; Castilla-La Mancha; Castilla y León; Cataluña; Extremadura; Galicia; Madrid; La Rioja; Baleares; Murcia; Navarra; Valencia; Asturias; Álava; Bizkaia; Guipúzcoa.

---

## 3. Foro técnico (`/forum-api`)

Consultas entre despachos, clasificadas por materia. Tres pantallas, cada una es una tabla o un hilo.

**Nivel 1 — tabla de categorías.** Columnas `Título` · `Temas` · `Opciones`. Botón **Añadir categoria**. Migas: Inicio. No hay subcategorías (el hijo de cada área viene vacío).

| Categoría | Temas |
|-----------|------:|
| ALLINIAL GLOBAL | 0 |
| Cláusulas suelo | 3 |
| Compliance | 1 |
| Fiscal - Contable | 175 |
| General | 166 |
| Internacional | 3 |
| Jurídico | 17 |
| Laboral | 253 |
| Protección de Datos | 5 |

**Nivel 2 — tabla de conversaciones** (`/forum-api/:categoria`). Migas `Inicio / Fiscal - Contable` (o el área elegida). Botón **Añadir tema**, buscador y paginación (Fiscal - Contable llega a la página 12). Columnas:

`Título` · `Autor` · `Núm. resp.` · `Última respuesta` · `Opciones` (editar y eliminar).

En Fiscal - Contable conviven dos tipos de fila: consultas de socios (suelen tener 1 respuesta) y boletines semanales publicados por el grupo (“Boletín semanal de información fiscal”, “Boletín semanal de información contable-mercantil”), que aparecen con 0 respuestas.

**Nivel 3 — hilo** (`/forum-api/:categoria/topic/:id`).

- Título, botón **Editar tema**, nombre del área.
- Mensaje de apertura: autor y cuerpo.
- Respuestas numeradas `#1`, `#2`, `#3`… con autor, fecha y hora, botón **Responder** y, cuando los hay, PDF adjuntos.
- Al pie, editor (negrita, cursiva, enlace, listas, tabla, imagen, media), **Subir archivos** y **Enviar**.

Ejemplo de hilo con adjuntos: “Liquidacion IVA Socio Profesional” (Fiscal - Contable), con una nota técnica de la AEAT y una consulta vinculante en PDF.

---

## 4. Información complementaria (`/additional-information-api`)

Mismas áreas que el foro, con otro objeto: modelos, guías y notas para reutilizar, no el índice de la conversación.

**Nivel 1 — tabla de categorías.** Mismas columnas (`Título` · `Temas` · `Opciones`) y **Añadir categoria**. El volumen es mucho mayor.

| Categoría | Temas |
|-----------|------:|
| Allinial Global | 169 |
| Cláusulas suelo | 29 |
| Compliance | 16 |
| Fiscal - Contable | 822 |
| General | 1496 |
| Internacional | 54 |
| Jurídico | 306 |
| Laboral | 155 |
| Protección de Datos | 47 |

**Nivel 2 — tabla de documentos** (`/additional-information-api/:categoria`). Migas `Inicio / Cláusulas suelo`. Botón **Añadir tema**, buscador, paginación. Columnas distintas a las del foro:

`Título` · `Autor` · `Fecha de creación` · `Opciones`

No se muestra el número de respuestas en esta tabla. En Cláusulas suelo las filas son piezas reutilizables: demandas, costas, modelos, sentencias del Tribunal Supremo, guía de cláusulas abusivas.

**Nivel 3 — ficha** (`/additional-information-api/:categoria/topic/:id`). Título, área, autor y texto. Puede haber una respuesta numerada (`#1`) con **Responder**, pero la pantalla de partida no es un tablón de conversaciones: es un documento fechado.

En **Perfil** el usuario se suscribe, por separado, a categorías de este módulo y del foro.

---

## 5. Circulares (`/circulars-api`)

Boletín de novedades (fiscal, laboral, mercantil, vivienda). No hay categorías.

**Nivel 1 — tarjetas.** Cabecera + **Añadir circular** + buscador. Cada tarjeta es un titular y `Fecha: DD/MM/YYYY`. Unas 90 páginas. El enlace de la tarjeta no cambia de ruta.

**Nivel 2 — visor RTF** (modal “RTF READER”). El texto completo de la circular, con campos de combinación del membrete (`LOGO`, `NOMBRE`, `DIRECCION`, `TELF`, `FAX`, `EMAIL`) y el artículo a continuación. No hay hilo ni categoría.

Titulares de la primera página (8 y 1 oct 2026): medidas de vivienda; aplazamiento de VeriFactu; informe de edad de jubilación; reducción de capital por pérdidas; factura electrónica; IRPF y dependencia; cese de actividad de autónomos; despido disciplinario; IA en selección de personal.

---

## 6. Servicios de valor añadido (`/value-added-services`)

Servicios del grupo que el despacho puede prescribir. La tarjeta enseña el porcentaje de **cuantía prescriptor**.

**Nivel 1 — 10 tarjetas:** nombre, `% Cuantía prescriptor`, botón **Acerca de**.

**Nivel 2 — ficha** (`/value-added-services/:id/show`): título “Servicio: …”, **Solicitar**, **Editar**, sección **Acerca de** (HTML descriptivo). No hay documentos ni respuestas.

| Servicio | Cuantía prescriptor |
|----------|--------------------:|
| Emisión de certificados digitales | 0 % |
| Planes de igualdad | 20 % |
| Canal Ético de Denuncias | 20 % |
| Auditoría de cuentas | 20 % |
| Protección de datos | 15 % |
| Prevención de blanqueo de capitales | 20 % |
| Asesoría Jurídica Especializada | 20 % |
| Legal Compliance | 20 % |
| EUROPREVEN CORREDURÍA DE SEGUROS | 50 % |
| Prevención de riesgos laborales | 20 % |

---

## 7. Servicios específicos (`/specific-services`)

Colaboradores externos. Misma idea de catálogo, sin porcentaje.

**Nivel 1 — 11 tarjetas** con **Leer más**.

**Nivel 2 — ficha** (`/specific-services/:id`): “Servicio específico: …”, **Solicita este servicio**, **Editar**, sección **Sobre el servicio**. El texto remite a menudo al módulo Acuerdos para las condiciones. En Subvenciones, por ejemplo, el cuerpo describe el acuerdo con Next Avalon.

**Piezas:** Gestión de Marcas · Subvenciones · Control notificaciones electrónicas · Seguro de RC · Comunicaciones electrónicas certificadas · Empresa certificadora de certificados · RED PAE · DEH ONLINE · Informes periciales informáticos · Valoración y tasación de bienes · Simplificación Sistema Red y Contrata.

---

## 8. Servicios y utilidades (`/utilities` → `/utilities/1`)

Directorio de herramientas y sedes. La ruta cae en una única agrupación.

**Nivel 1 — tarjetas** con **Añadir servicio o utilidad**. Dos comportamientos:

- **Ír** — sale del portal (sede, BOE, SEPE, AEAT, etc.).
- **Ver** — se queda dentro. Solo **Herramientas de cálculo** usa Ver: abre un modal con calculadoras, no una página nueva.

**Calculadoras del modal:** intereses judiciales · tasas judiciales · embargo de salario · pensión alimenticia · actualización de rentas · indemnización por despido.

**Resto (enlace externo):** Licitaciones · Alta PAE · Acceso PAE · NETCONTRATA · Revista Seguridad Social · Portal Europeo de e-Justice · Consultas vinculantes DGT · Normativa DGT · Códigos electrónicos BOE · Punto de Acceso General · CENDOJ · Novedades AEAT · Normativa y criterios · Doctrina TEA · Epígrafes IAE · Cálculo de rentas · BBVA colectivos · Sistema RED · CNAE 2025 · SEPE · Noticias Jurídicas · ICAC · Ministerio de Empleo · Ministerio de Seguridad Social.

---

## 9. Acuerdos (`/agreements` → `/agreements/1`)

Archivo de convenios firmados. Una sola categoría de sistema, llamada **Acuerdos** (60 entidades). No es la guía de adhesión: cada tarjeta es una contraparte.

**Nivel 1 — tarjeta por entidad:** nombre, **Mostrar convenios**, **Convenio**, **Web**. Hay buscador y **Añadir acuerdo**.

**Nivel 2 — al pulsar Mostrar convenios** la tarjeta se despliega y lista los PDF (descarga interna) más el enlace **Web** a la sede de la entidad. No hay artículo ni conversación. Algunas haciendas forales (Álava, Gipuzkoa, Navarra) tienen web y ningún PDF cargado.

**Temas del archivo** (no son categorías de pantalla; es el contenido de las 60 tarjetas):

- **Colaboración social con administraciones** — AEAT, Andalucía, Aragón, Canarias, Cantabria, Castilla-La Mancha, Castilla y León, Cataluña, C. Valenciana, Extremadura, Galicia, Madrid, Murcia, La Rioja, Baleares, Asturias, Bizkaia. Documentos típicos: convenio, renovación, modelo de adhesión, publicación en boletín oficial.
- **Firma, certificados y notificaciones** — Uanataca, Lleida.net, DEH Online, Notificad@s, Dijit.
- **Software e información jurídica** — Wolters Kluwer (incluye anexo y convenio A3), Tirant lo Blanch, Anfix, AccounTax.
- **Banca y financiación** — Banco Sabadell, BBVA, Banco de Investimento Global, MytripleA, IDF All Financing, GVC Gaesco.
- **Red internacional** — ETL International, Cámara de Comercio del Mercosur, Iberglobal, Clearwater, Premier Corporate Group.
- **Servicios para el despacho o el cliente** — Asepeyo, Avalon Subvenciones, Netcontrata, Grupo Paradell, Thirsa, Quantyca, Tecnitasa, Capazita, Incotec, Apreblaca, Centro de Innovación de Despachos, Camerdata, Adiss.
- **Logística de jornadas** — Hotel Rafael Atocha (un acuerdo por temporada).

---

## 10. Emprende (`/entrepreneurships`)

Herramientas de autodiagnóstico para pymes, casi todas fuera del portal (IPYME y similares).

**Nivel 1 — 14 tarjetas.** Trece llevan **Ver sitio web** y abren el sitio en otra pestaña. **Elección forma jurídica** lleva **Leer más**.

**Nivel 2 — solo esa ficha** (`/entrepreneurships/:id`): **Editar** y la sección **Información a tener en cuenta**. El resto no tiene ficha interna.

**Tarjetas:** Autodiagnóstico de actitudes emprendedoras · Plan de empresa · Acceso a nuevos mercados · DAFO · Lienzo de modelo de negocio · Matriz de posicionamiento · ¿Soy una Pyme? · Autodiagnóstico digital avanzada · Salud empresarial · Economía circular · Madurez digital · Ciberseguridad · Buscador de licitaciones para pymes · Elección forma jurídica.

---

## 11. Software (`/software-services`)

Un solo producto.

**Nivel 1 — tarjeta** Diagram + **Leer más**.

**Nivel 2 — ficha** (`/software-services/7`): **Solicita este software**, **Editar**, sección **Sobre el software**. El texto presenta soluciones en la nube y software de gestión a medida. No hay más entradas ni categorías.

---

## 12. Comunicaciones internas (`/internal-communications`)

Tablón del grupo. No está partido por materia fiscal, laboral o jurídica: la entrada ya es la lista de avisos.

**Nivel 1 — tabla “Temas”.** **Añadir mensaje**, buscador, unas 28 páginas. Columnas:

`Título` · `Autor` · `Núm. resp.` · `Última respuesta` · `Opciones`

Los avisos observados son de vida interna: programa de las XXXIV Jornadas (Granada, 23–25 sep 2026), renovación Qmementix 2026, integración de Supralaboris, sedes de foros presenciales, dinamización de despachos. Autor habitual de la apertura: Helena Torren.

**Nivel 2 — mensaje** (`/internal-communications/:categoria/topic/:id`). Aunque la URL lleva un id de categoría, en pantalla solo existe el ámbito “Comunicaciones Internas”: no hay una tabla previa de áreas. La ficha muestra título, autor, cuerpo, PDF adjunto (en el ejemplo, el programa de las jornadas), respuestas numeradas, **Editar mensaje**, **Responder**, editor y **Enviar**.

---

## 13. Gestión de procesos (`/process-management`)

Cuatro ficheros de procedimiento. No hay ficha narrativa.

**Una sola tabla:** `Nombre` · `Fecha` · `Opciones`, más **Añadir proceso** y buscador. La fila descarga, edita o elimina el fichero.

- Procedimiento Asesoría Laboral (21/11/2024)
- Procedimiento Asesoría Mercantil
- Procedimiento Asesoría Contable
- Modelo Presupuesto Asesoría

---

## 14. Biblioteca (`/library-api`)

Informes y revistas (IEE, CEOE, CGE, Aranzadi, Wolters Kluwer, REAF…). No es un foro y no está troceada en áreas.

**Nivel 1 — ya dentro de la única categoría “Biblioteca”.** Migas `Inicio / Biblioteca`. Botones **Añadir categoria** y **Añadir tema**, buscador, unas 27 páginas (~393 documentos). No hay tabla de categorías que elegir: la consulta de hijas de esta categoría vuelve vacía. Columnas:

`Título` · `Autor` · `Fecha de creación` · `Opciones`

Ejemplos de la primera página (julio 2026): competitividad fiscal IEE, panorama económico CEOE, observatorio financiero CGE, dosier Aranzadi ReformIA, barómetro de la asesoría Wolters Kluwer, revista REAF. Autoría visible: Helena Torren.

**Nivel 2 — ficha del documento** (`/library-api/5/topic/:id`). Título, la etiqueta “Biblioteca”, el nombre del PDF y **Editar documento**. Ahí termina: no hay listado de respuestas ni editor de comentario en la ficha abierta.

---

## 15. Vídeos (`/videos-api` → `/videos-api/1`)

Videoteca. La ruta cae en la única categoría existente, **General** (~201 piezas, unas 14 páginas).

**Nivel 1 — tabla.** Cabecera “Vídeos: General”, **Añadir vídeo**, buscador. Columnas:

`Título` · `Fecha` · `Visualizaciones` · `Opciones`

El título no navega a otra ruta.

**Nivel 2 — modal de ficha.** Título, fecha, texto descriptivo y número de visualizaciones. Ejemplos: webinar del Impuesto sobre Sociedades 2025, campaña de renta 2025, Next Avalon Subvenciones, digitalización de facturas con Dijit.app, jornadas AESAE.

---

## 16. Oficinas (`/offices`)

Directorio de despachos.

**Nivel 1 — tabla:** `Despacho` · `Dirección` · `Ciudad` · `C.P.` · `Opciones`. **Crear**, buscador, paginación (6 páginas o más). Filas del tipo ADADE Albacete, Almería, Amposta.

**Nivel 2 — ficha** (`/offices/:id/view`): nombre, correo, teléfonos, FAX, web, dirección, CP, ciudad, provincia, país y mapa de Google.

---

## 17. Profesionales (`/professionals`)

Directorio de personas, no una tabla CRUD.

**Filtros:** **Tipo de profesional**, **Provincia**, **Buscar**. Enlace a **Tipos de profesionales**.

**Resultado:** tarjetas con nombre, oficina, correo, teléfono y tipo (por ejemplo “Gerente” en Oficina Central). Unas 413 fichas públicas.

**Provincias del filtro:** Albacete, Alicante, Almería, Badajoz, Barcelona, Burgos, Cádiz, Castellón, Ciudad Real, Cuenca, Granada, Islas Baleares, León, Lugo, Madrid, Málaga, Murcia, Ourense, Palencia, Tarragona, Toledo, Valencia, Valladolid, Zaragoza.

**Tipos** (`/type-professionals`, tabla `Nombre` · `Operaciones`): Abogado y las especialidades Administrativo, Civil, Laboral, Mercantil y Penal; Administración; Administrativo; Asesor Fiscal-Contable; Asesor Laboral; Asesor Mercantil; Auditor; Consultor; Contable; Dpto. Comercial; Gerente; Gestoría; Graduado Social; Informático; Oficina Central; Técnico Contable-Fiscal; Técnico Laboral.

---

## 18. Usuarios (`/users`)

Cuentas de acceso. Tabla `Nombre` · `Correo electrónico` · `Oficina` · `Rol` · `Operaciones`. **Crear**, **Ordenar por**, buscador, unas 19 páginas. Roles que aparecen en las filas: Superadmin, Asociado ADADE, y el resto definido en Roles.

---

## 19. Soporte interno (`/internal-support/messages`)

Formulario de ticket, no un histórico de conversaciones en la pantalla de entrada.

**Enviar mensaje:**

| Campo | Qué es |
|-------|--------|
| Área | Email / Intranet / Publicaciones-noticias / Web |
| Nombre de contacto | Texto |
| Teléfono de contacto | Texto |
| Observaciones | Editor (CKEditor) |
| Acciones | **Enviar**; enlace **Áreas** |

**Áreas** (`/internal-support/areas`): tabla área + buzón receptor. Email, Intranet y Publicaciones/noticias van a `info@e-consulting.org`. Web (minisite y modificación de datos) añade otro destinatario junto a `info@`.

---

## 20. Blog (`/blog/posts`)

CMS de noticias para las webs del grupo, separado de las circulares del portal.

**Entradas:** tabla `Título` · `Fecha` · `Opciones`, **Crear**, unas 399 páginas. El contenido visible son notas de jurisprudencia y criterio (Audiencia Nacional, TEAC, Tribunal Supremo).

**Tres tablas auxiliares, no son el cuerpo de la noticia:**

| Submódulo | Ruta | Qué hay |
|-----------|------|---------|
| Categorías | `/blog/categories` | Una fila: `categoria` / slug `categoria`. Columnas Nombre · Slug · Operaciones |
| Tipos de entrada | `/blog/types` | Una fila: `Blog` |
| Sitios | `/blog/sites` | ADADE · E-CONSULTING · ICARIA · Iurispreven |

---

## 21. Roles (`/roles`)

Tabla `Nombre` · `Operaciones` + **Crear**.

Roles: Administrador nivel 2 · Asociado ADADE · Asociado E-consulting · Superadmin · test · Trabajador ADADE · Trabajador E-Consulting.

El sidebar se monta con `can(...)` / `is('Superadmin')`.

---

## Perfil y cuenta

### Perfil (`/profile`)

Nombre, correo y **Guardar**. Debajo, dos bloques de suscripción independientes, con un checkbox por categoría:

- categorías del **Foro técnico**
- categorías de **Información complementaria**

### Cambiar contraseña (`/change-password`)

Contraseña actual · Contraseña · Confirmar contraseña · **Guardar**.

### Login (`/login`)

Correo · Contraseña · **Acceder** · **Recordar contraseña**.

---

## Notas técnicas (observadas)

- SPA Vue 2 + Vue Router + Bootstrap Vue / Element UI + plantilla Argon.
- Auth: cookies Sanctum (`/sanctum/csrf-cookie`, `/api/logout`, `/api/profile`) + JWT en cookie.
- Locale por defecto: `es`.
- Foro, información complementaria, biblioteca y vídeos cuelgan de paquetes Hitech (`forum-api`, `library-api`, `videos-api`). El foro se sirve desde `bportal.adade.es`; el resto de listados observados, desde `bportal.e-consulting.org`.
- Monitorización: Sentry + Cloudflare.
- Mapas: Google Maps en la ficha de oficina.
- Varios módulos “de una sola categoría” redirigen a `…/1` (utilidades, acuerdos, vídeos) o abren ya la categoría única (biblioteca, id 5).

---

## Limitaciones de esta documentación

- Conteos de temas, páginas y listados cambian con el tiempo.
- Las columnas **Opciones** son iconos (editar, eliminar, descargar), sin texto accesible.
- No se documentan credenciales ni datos de contacto de personas.
