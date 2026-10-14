export function parseRoute(hash = location.hash) {
  const raw = decodeURIComponent(hash.replace(/^#/, ""));
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  const [pathname, search = ""] = path.split("?");
  const parts = pathname.split("/").filter(Boolean);
  return {
    name: parts[0] || "resumen",
    param: parts[1] ? decodeURIComponent(parts[1]) : "",
    query: new URLSearchParams(search),
  };
}

export function navKey(name) {
  if (name === "expediente" || name === "expedientes") return "foro";
  if (name === "noticia") return "agenda";
  return name;
}
