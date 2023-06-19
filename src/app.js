import { setViewportHeigth } from "./js/viewport-height";
import { setLayoutShift } from "./js/layout-shift";
import { pageScrollHandler } from "./js/page-scroll-handler";
import { accordions } from "./js/accordions";
import { initSwipers } from "./js/swipers";
import { initSmoothScroll } from "./js/smooth-scroll";
import { initProfileToggle } from "./js/profile-toggle";

window.addEventListener('DOMContentLoaded', () => {
    setViewportHeigth();
    setLayoutShift();
    accordions();
    pageScrollHandler();
    initSwipers();
    initSmoothScroll();
    initProfileToggle();
})

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './scss/app.scss';