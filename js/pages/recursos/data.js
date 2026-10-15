export const CIRCULARS = [
  {
    id: "verifactu",
    title: "Aplazamiento de VeriFactu",
    date: "08/10/2026",
    scope: "Fiscal · Facturación",
    owner: "Marina Soler",
    summary: "La AEAT aplaza la entrada en vigor obligatoria de VeriFactu para determinados colectivos. Resumen operativo para el despacho.",
    body: "Se confirma el aplazamiento de la obligación de sistemas VeriFactu para autónomos y pequeñas sociedades que aún no hayan migrado su software de facturación.\n\nEl despacho mantiene el calendario interno de formación y la revisión de proveedores, pero deja de marcar como urgente la migración antes de fin de mes.",
    impact: "Informar a clientes con software propio y anotar el nuevo hito en la checklist fiscal de octubre.",
  },
  {
    id: "plazos-octubre",
    title: "Cierre de plazos de octubre",
    date: "01/10/2026",
    scope: "Contencioso · Agenda",
    owner: "Jordi Riera",
    summary: "Recordatorio de vencimientos de contestación y recursos en la primera quincena.",
    body: "Hay tres vencimientos críticos en la primera quincena: Nou Transport (contestación), Braseria del Port (alegaciones) y Helvetia (revisión de informe).\n\nCada responsable debe dejar estado en la bandeja antes del viernes.",
    impact: "Revisar bandeja de pendientes y bloquear 90 minutos el martes para mesa de plazos.",
  },
];

export const CALC_TOOLS = [
  {
    id: "intereses",
    title: "Intereses judiciales",
    area: "Procesal",
    updated: "sep 2026",
    summary: "Cálculo orientativo de intereses legales y de demora sobre una cuantía y un periodo.",
    body: "Introduce capital, tipo aplicable y fechas de inicio y fin. El resultado es orientativo y debe contrastarse con el criterio del letrado del asunto.\n\nÚtil para provisiones de fondos y para liquidaciones en ejecuciones.",
    note: "No sustituye la liquidación judicial ni el informe de procurador.",
  },
  {
    id: "tasas",
    title: "Tasas judiciales",
    area: "Contencioso",
    updated: "oct 2026",
    summary: "Estimación de tasa según orden jurisdiccional e importe del recurso.",
    body: "Selecciona el orden (civil, contencioso, social) y la cuantía del procedimiento. La herramienta aplica los tramos publicados tras la última actualización del BOE.\n\nRevisa siempre si el cliente está exento o bonificado.",
    note: "Actualizado con los importes del BOE n.º 228.",
  },
  {
    id: "embargo",
    title: "Embargo de salario",
    area: "Ejecución",
    updated: "ago 2026",
    summary: "Tramos de inembargabilidad del salario mínimo y porcentajes aplicables.",
    body: "Parte del SMI vigente y del salario neto mensual para estimar la parte embargable.\n\nSirve como base de conversación con el cliente antes de oponerse a un embargo.",
    note: "Comprobar SMI y cargas familiares antes de presentar escrito.",
  },
  {
    id: "pension",
    title: "Pensión alimenticia",
    area: "Familia",
    updated: "jul 2026",
    summary: "Simulación sencilla de contribución según ingresos y número de menores.",
    body: "Herramienta interna de orientación. No genera baremos vinculantes; documenta hipótesis de ingresos y gastos habituales.\n\nÚsala para preparar la primera reunión con el cliente.",
    note: "Contrastar siempre con la jurisprudencia del partido judicial.",
  },
  {
    id: "rentas",
    title: "Actualización de rentas",
    area: "Civil",
    updated: "ene 2026",
    summary: "Actualización de renta arrendaticia según índice y periodo.",
    body: "Aplica el índice elegido (IPC u otro pactado) sobre la renta vigente y el periodo de revisión.\n\nGenera un resumen listo para pegar en la carta al arrendatario.",
    note: "Verificar cláusula de actualización del contrato antes de notificar.",
  },
  {
    id: "despido",
    title: "Indemnización por despido",
    area: "Laboral",
    updated: "sep 2026",
    summary: "Cálculo orientativo de indemnización por despido improcedente u objetivo.",
    body: "Parte de antigüedad, salario diario y tipo de despido. El resultado distingue tramos legales habituales.\n\nNo contempla mejoras de convenio ni especialidades sectoriales.",
    note: "Revisar convenio colectivo aplicable antes de asesorar.",
  },
];

export const CONVENIOS = {
  aeat: {
    id: "aeat",
    org: "AEAT",
    web: "https://sede.agenciatributaria.gob.es",
    term: "2025–2027",
    docs: [
      {
        id: "convenio",
        title: "Convenio",
        summary: "Texto del convenio de colaboración entre Albor y la Agencia Tributaria para el intercambio de información y el acceso a servicios de sede.",
        body: "El convenio regula el marco de colaboración, las obligaciones de confidencialidad y los canales de acceso a la sede electrónica.\n\nIncluye las sedes de Barcelona y Madrid como puntos de contacto del despacho.",
        meta: "PDF · 12 páginas · vigente",
      },
      {
        id: "renovacion",
        title: "Renovación",
        summary: "Addenda de renovación automática y condiciones de prórroga.",
        body: "La renovación mantiene las mismas condiciones económicas y amplía el listado de usuarios autorizados del despacho.\n\nDebe archivarse junto al convenio principal en Documentos · Acuerdos.",
        meta: "PDF · 4 páginas · firmado 2025",
      },
      {
        id: "adhesion",
        title: "Modelo de adhesión",
        summary: "Modelo para dar de alta a nuevas letradas o sedes en el convenio.",
        body: "Completar datos de la persona, rol y sede. Remitir a administración para firma y alta en la plataforma de la AEAT.",
        meta: "PDF · plantilla editable",
      },
      {
        id: "boletin",
        title: "Publicación en boletín oficial",
        summary: "Referencia de la publicación oficial del convenio y su renovación.",
        body: "Contiene el enlace y el extracto publicado. Conservar como prueba de vigencia frente a auditorías internas.",
        meta: "PDF · extracto oficial",
      },
    ],
  },
};

export function circularById(id) {
  return CIRCULARS.find((item) => item.id === id) || CIRCULARS[0];
}

export function calcById(id) {
  return CALC_TOOLS.find((item) => item.id === id) || CALC_TOOLS[0];
}

export function convenioDoc(orgId, docId) {
  const org = CONVENIOS[orgId];
  if (!org) return null;
  const doc = org.docs.find((item) => item.id === docId) || org.docs[0];
  return { org, doc };
}
