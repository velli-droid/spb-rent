import { getScrollbarWidth } from "./scrollbar-width";

export function setLayoutShift() {
  let offset = getScrollbarWidth();
  const root = document.querySelector(":root");
  root.style.setProperty("--layout-shift", `${offset}px`);

  window.addEventListener('resize', () => {
    offset = getScrollbarWidth();
    root.style.setProperty("--layout-shift", `${offset}px`);
  })
}
