# dashboard-pro

Albor es un prototipo estático con HTML, Tailwind por CDN y ES Modules nativos. No necesita build.

## Desarrollo local

Los fragmentos de pantalla se cargan con `fetch`, por lo que hay que servir la carpeta:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/#/resumen`.

Tras levantar el servidor, recorre estas rutas en el navegador (smoke manual):

- `#/resumen`
- `#/agenda` y `#/noticia/n1`
- `#/foro` y `#/expediente/EXP-2026-019`
- `#/tabla-7`
- `#/bandeja`, `#/bandeja-recibidos`, `#/bandeja-pendientes`, `#/bandeja-hechos`

Para comprobar la estructura y la sintaxis:

```bash
node scripts/check.mjs
```

## Arquitectura

```text
index.html                 Shell y puntos de montaje
styles/
  base.css                 Utilidades compartidas del contenido principal
  shell.css                Sidebar, navegación y pie del shell
  pages/                   Estilos prefijados por pantalla
data/                      Datos de dominio exportados como módulos
js/
  main.js                  Arranque de la aplicación
  core/                    DOM, rutas y formato
  components/              Utilidades UI realmente compartidas
  router/                  Registro declarativo y ciclo de navegación
  shell/                   Sidebar, sede, avisos y búsqueda global
  pages/<pagina>/          Estado, render y eventos de cada pantalla
modules/                   Fragmentos HTML cargados por el router
```

Cada entrada de `js/pages/` es un componente de página. Expone `mount(main, route)` y solo implementa `unmount()` si registra recursos que sobreviven al fragmento, como listeners en `document`, observers o timers.

## Cómo añadir una pantalla

1. Crea `modules/<nombre>.html`.
2. Crea `js/pages/<nombre>/index.js` y exporta `mount(main, route)`.
3. Añade su definición en `js/router/registry.js`.
4. Si necesita estilos propios, crea `styles/pages/<nombre>.css`, prefija sus selectores con el ID raíz de la pantalla y enlázalo desde `index.html`.
5. Añade el enlace de navegación solo si la pantalla debe aparecer en el sidebar.

## Reglas para evitar conflictos

- El trabajo funcional de una pantalla se limita a `js/pages/<pagina>/`, su archivo en `modules/` y su CSS de página.
- `js/main.js`, `js/router/`, `js/core/`, `js/components/`, `js/shell/` e `index.html` son infraestructura compartida. Sus cambios deben ir en PRs separados de las features.
- Una página no registra listeners globales sin devolver o implementar su limpieza en `unmount()`.
- Los datos exclusivos de una pantalla viven junto a ella. Los datos usados por varias pantallas viven en `data/`.
- No se amplía un componente compartido para resolver un caso de una sola pantalla; primero se implementa localmente y se extrae cuando haya una segunda necesidad real.
- Un PR debe tener un único owner funcional y no mezclar refactors de infraestructura con cambios visuales.

## Reparto recomendado

Dos personas pueden trabajar en paralelo por cortes verticales. Por ejemplo:

- Persona A: `resumen`, `agenda` y `noticia`.
- Persona B: `foro`, `tabla-7`, `expediente` y `bandeja`.

Si una feature necesita cambiar el router o un componente compartido, conviene hacer primero un PR pequeño de infraestructura y continuar la feature cuando esté integrado.

## Checklist de revisión

- La ruta carga y marca correctamente su enlace en el sidebar.
- Navegar varias veces hacia y desde la pantalla no duplica eventos.
- Los menús, búsquedas, filtros, formularios y paneles conservan su comportamiento.
- La consola no muestra errores ni peticiones 404.
- `node scripts/check.mjs` termina correctamente.
- El cambio no toca carpetas de otras pantallas salvo que sea un PR de infraestructura acordado.
