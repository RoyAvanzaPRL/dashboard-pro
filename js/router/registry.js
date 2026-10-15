import { mount as mountResumen } from "../pages/resumen/index.js";
import { mountAgenda, mountNoticia } from "../pages/agenda/index.js";
import { mount as mountForo } from "../pages/foro/index.js";
import { mount as mountForo2 } from "../pages/foro2/index.js";
import { mount as mountExpediente } from "../pages/expediente/index.js";
import { mount as mountTabla7, unmount as unmountTabla7 } from "../pages/tabla-7/index.js";
import { mount as mountBandeja } from "../pages/bandeja/index.js";
import {
  mountCalculo,
  mountCalculos,
  mountCircular,
  mountConvenio,
  mountConvenios,
} from "../pages/recursos/index.js";

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
  circular: {
    name: "circular",
    title: "Circular",
    template: "modules/circular.html",
    mount: mountCircular,
  },
  calculos: {
    name: "calculos",
    title: "Herramientas de cálculo",
    template: "modules/calculos.html",
    mount: mountCalculos,
  },
  calculo: {
    name: "calculo",
    title: "Herramientas de cálculo",
    template: "modules/calculo.html",
    mount: mountCalculo,
  },
  convenios: {
    name: "convenios",
    title: "Convenios",
    template: "modules/convenios.html",
    mount: mountConvenios,
  },
  convenio: {
    name: "convenio",
    title: "Convenio",
    template: "modules/convenio.html",
    mount: mountConvenio,
  },
  foro: {
    name: "foro",
    title: "Foro",
    template: "modules/foro.html",
    mount: mountForo,
  },
  foro2: {
    name: "foro2",
    title: "Foro 2",
    template: "modules/foro2.html",
    mount: mountForo2,
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
