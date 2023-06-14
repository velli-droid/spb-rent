export function setViewportHeigth() {
  const root = document.querySelector(":root");

  root?.style.setProperty("--viewport-height", `${window.innerHeight}px`);

  window.addEventListener("resize", function () {
    root?.style.setProperty("--viewport-height", `${window.innerHeight}px`);
  });
}
