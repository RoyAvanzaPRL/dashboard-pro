import { createRouter } from "./router/render.js";
import { closeFloaters, initShell, syncNavigation } from "./shell/index.js";

const main = document.querySelector("#main");

initShell();

createRouter({
  main,
  beforeRender: closeFloaters,
  onRoute: syncNavigation,
}).start();
