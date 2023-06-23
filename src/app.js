import { setViewportHeigth } from "./js/viewport-height";
import { setLayoutShift } from "./js/layout-shift";
import { pageScrollHandler } from "./js/page-scroll-handler";
import { headerMenu } from "./js/header-menu";
import { accordions } from "./js/accordions";
import { initSwipers } from "./js/swipers";
import { initSmoothScroll } from "./js/smooth-scroll";
import { initProfileToggle } from "./js/profile-toggle";
import { initModals } from "./js/modals";

window.addEventListener('DOMContentLoaded', () => {
    headerMenu();
    setViewportHeigth();
    setLayoutShift();
    accordions();
    pageScrollHandler();
    initSwipers();
    initSmoothScroll();
    initProfileToggle();
    initModals();
})

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './scss/app.scss';