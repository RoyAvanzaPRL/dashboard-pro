export function parseRoute(hash = location.hash) {
  const raw = decodeURIComponent(hash.replace(/^#/, ""));
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  const [pathname, search = ""] = path.split("?");
  const parts = pathname.split("/").filter(Boolean);
  return {
    name: parts[0] || "resumen",
    param: parts[1] ? decodeURIComponent(parts[1]) : "",
    segments: parts.slice(1).map((part) => decodeURIComponent(part)),
    query: new URLSearchParams(search),
  };
}

export function navKey(name) {
  if (name === "expediente" || name === "expedientes") return "foro";
  if (name === "noticia") return "agenda";
  if (
    name === "circular" ||
    name === "calculos" ||
    name === "calculo" ||
    name === "convenios" ||
    name === "convenio"
  ) {
    return "resumen";
  }
  return name;
}
