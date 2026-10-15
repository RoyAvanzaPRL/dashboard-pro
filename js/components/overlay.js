import { esc } from "../core/dom.js";

export const labelClass = "block text-sm text-mute";
export const controlClass = "w-full rounded-lg border border-line bg-white px-3 text-sm outline-none placeholder:text-mute focus:border-ink";
export const inputClass = `mt-1 h-9 ${controlClass}`;
export const areaClass = `mt-1 resize-none py-2 ${controlClass}`;
export const btnPrimary = "inline-flex h-9 items-center justify-center rounded-lg bg-ink px-3 text-sm font-semibold text-white";
export const btnQuiet = "inline-flex h-9 items-center justify-center rounded-lg border border-line bg-white px-3 text-sm font-medium hover:bg-[#f7f8f9]";

const closeIcon = `<svg viewBox="0 0 24 24" class="line size-4" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"></path></svg>`;

/**
 * Ventana compartida. `center` es un cuadro; `side` es un panel lateral.
 * El pie lleva Cancelar con borde y la acción principal en negro.
 */
export function overlay({
  id,
  mode = "center",
  hidden = true,
  titleId,
  title,
  helpId = "",
  help = "",
  body = "",
  bodyId = "",
  formId = "",
  formAttrs = "",
  closeAttr,
  cancelLabel = "Cancelar",
  submitLabel = "",
}) {
  const side = mode === "side";
  const described = help && helpId ? ` aria-describedby="${esc(helpId)}"` : "";
  const helpHtml = help ? `<p${helpId ? ` id="${esc(helpId)}"` : ""} class="mt-1 text-sm text-mute">${esc(help)}</p>` : "";
  const closeBtn = `<button type="button" ${closeAttr} class="grid size-8 shrink-0 place-items-center rounded-lg text-mute hover:bg-[#f6f7f8] hover:text-ink" aria-label="Cerrar">${closeIcon}</button>`;
  const cancelBtn = cancelLabel ? `<button type="button" ${closeAttr} class="${btnQuiet}">${esc(cancelLabel)}</button>` : "";
  const submitBtn = submitLabel ? `<button type="submit" class="${btnPrimary}">${esc(submitLabel)}</button>` : "";
  const footer = cancelBtn || submitBtn ? `<div class="${side ? "flex justify-end gap-2 border-t border-line px-5 py-4" : "mt-5 flex justify-end gap-2"}">${cancelBtn}${submitBtn}</div>` : "";
  const header = side
    ? `<div class="flex items-center justify-between gap-4 border-b border-line px-5 py-4"><h2 id="${esc(titleId)}" class="text-base font-semibold">${esc(title)}</h2>${closeBtn}</div>`
    : `<div class="flex items-start justify-between gap-4"><div class="min-w-0"><h2 id="${esc(titleId)}" class="text-base font-semibold">${esc(title)}</h2>${helpHtml}</div>${closeBtn}</div>`;
  const bodyHtml = `<div${bodyId ? ` id="${esc(bodyId)}"` : ""} class="${side ? "min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-4" : "mt-4 space-y-3"}">${body}</div>`;
  const panelClass = side
    ? "flex h-full w-full max-w-sm flex-col bg-white shadow-[-12px_0_40px_rgba(20,24,28,0.08)]"
    : "flex w-full max-w-md flex-col rounded-2xl bg-white p-5 shadow-[0_16px_40px_rgba(20,24,28,0.16)]";
  const tag = formId || submitLabel ? "form" : "div";
  const formBits = [formId ? `id="${esc(formId)}"` : "", formAttrs].filter(Boolean).join(" ");
  const panel = `<${tag}${formBits ? ` ${formBits}` : ""} role="dialog" aria-modal="true" aria-labelledby="${esc(titleId)}"${described} class="${panelClass}">${header}${bodyHtml}${footer}</${tag}>`;
  const shell = side ? "absolute inset-0 z-40 flex justify-end bg-ink/30" : "absolute inset-0 z-40 grid place-items-center bg-ink/30 p-4";
  return `<div id="${esc(id)}"${hidden ? " hidden" : ""} class="${shell}">${panel}</div>`;
}

export function trapOverlay(overlayEl) {
  if (!overlayEl) return;
  overlayEl.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || overlayEl.hidden) return;
    const nodes = [...overlayEl.querySelectorAll("button, input, textarea, select, a[href]")].filter((node) => !node.disabled && !node.closest("[hidden]"));
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === overlayEl)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || active === overlayEl)) {
      event.preventDefault();
      first.focus();
    }
  });
}
