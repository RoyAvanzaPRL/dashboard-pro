export function compare(kind, left, right, dir = "asc") {
  const emptyLeft = left == null || left === "";
  const emptyRight = right == null || right === "";
  if (emptyLeft && emptyRight) return 0;
  if (emptyLeft) return 1;
  if (emptyRight) return -1;
  const sign = dir === "asc" ? 1 : -1;
  if (kind === "money") return (Number(left) - Number(right)) * sign;
  return String(left).localeCompare(String(right), "es", { numeric: true, sensitivity: "base" }) * sign;
}

export function nextSerial(rows, prefix) {
  const highest = rows.reduce((max, row) => {
    const number = Number(String(row.id).replace(/\D/g, ""));
    return Number.isFinite(number) ? Math.max(max, number) : max;
  }, 0);
  return `${prefix}${String(highest + 1).padStart(2, "0")}`;
}

export function pageFor(rows, id, size) {
  const index = rows.findIndex((row) => row.id === id);
  return index < 0 ? 1 : Math.floor(index / size) + 1;
}

export function uniqueSorted(values) {
  return [...new Set(values.filter((value) => value != null && value !== ""))].sort((a, b) =>
    String(a).localeCompare(String(b), "es", { numeric: true }),
  );
}
