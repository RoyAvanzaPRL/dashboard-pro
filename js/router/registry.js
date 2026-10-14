import { mount as mountResumen } from "../pages/resumen/index.js";
import { mountAgenda, mountNoticia } from "../pages/agenda/index.js";
import { mount as mountForo } from "../pages/foro/index.js";
import { mount as mountExpediente } from "../pages/expediente/index.js";
import { mount as mountTabla7, unmount as unmountTabla7 } from "../pages/tabla-7/index.js";
import { mount as mountBandeja } from "../pages/bandeja/index.js";

const bandeja = (name, title) => ({
  name,
  title,
  template: `modules/${name}.html`,
  mount: mountBandeja,
});

export const routes = {
  resumen: {
    name: "resumen",
    title: "Inicio",
    template: "modules/resumen.html",
    mount: mountResumen,
  },
  agenda: {
    name: "agenda",
    title: "Tablón de noticias",
    template: "modules/agenda.html",
    mount: mountAgenda,
  },
  noticia: {
    name: "noticia",
    title: "Tablón de noticias",
    template: "modules/noticia.html",
    mount: mountNoticia,
  },
  foro: {
    name: "foro",
    title: "Foro",
    template: "modules/foro.html",
    mount: mountForo,
  },
  expedientes: {
    name: "expedientes",
    title: "Foro",
    template: "modules/foro.html",
    mount: mountForo,
  },
  expediente: {
    name: "expediente",
    title: "Expediente",
    template: "modules/expediente.html",
    mount: mountExpediente,
  },
  "tabla-7": {
    name: "tabla-7",
    title: "Tabla 7",
    template: "modules/tabla-7.html",
    mount: mountTabla7,
    unmount: unmountTabla7,
  },
  bandeja: bandeja("bandeja", "Bandeja"),
  "bandeja-recibidos": bandeja("bandeja-recibidos", "Recibidos"),
  "bandeja-pendientes": bandeja("bandeja-pendientes", "Pendientes"),
  "bandeja-hechos": bandeja("bandeja-hechos", "Hechos"),
};
