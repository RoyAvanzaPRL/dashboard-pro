import { esc } from "../core/dom.js";

/**
 * @param {{ label: string, href?: string }[]} items
 *   Last item = current page (no href). Earlier items are links.
 * @returns {string}
 */
export function breadcrumbs(items) {
  if (!items?.length) return "";

  const parts = items.map((item, index) => {
    const last = index === items.length - 1;
    const sep =
      index > 0
        ? `<li class="select-none text-mute" aria-hidden="true">/</li>`
        : "";
    const label = esc(item.label);
    if (last || !item.href) {
      return `${sep}<li class="min-w-0 truncate text-sm text-mute" aria-current="page">${label}</li>`;
    }
    return `${sep}<li class="min-w-0">
      <a href="${esc(item.href)}" class="text-sm font-medium text-tide hover:text-[#0f766e]">${label}</a>
    </li>`;
  });

  return `<nav aria-label="Miga de pan">
    <ol class="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1">${parts.join("")}</ol>
  </nav>`;
}

export function renderBreadcrumbs(root, items) {
  const slot = root?.querySelector?.("[data-breadcrumbs]");
  if (!slot) return;
  slot.innerHTML = breadcrumbs(items);
}
