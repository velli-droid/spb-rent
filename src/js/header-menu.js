import { setLayoutShift } from "./layout-shift";

export function headerMenu() {
  const header = document.querySelector(".header");
  const menu = header?.querySelector(".js-jump-menu");
  const burger = header?.querySelector(".js-header-burger");

  if (!menu || !burger) return;

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    setLayoutShift();
  });
}