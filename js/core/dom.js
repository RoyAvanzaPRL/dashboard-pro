export function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function fill(root, record) {
  root.querySelectorAll("[data-bind]").forEach((node) => {
    const value = record[node.dataset.bind];
    node.textContent = value == null ? "" : String(value);
  });
}
