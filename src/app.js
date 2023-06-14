import { setViewportHeigth } from "./js/viewport-height";
import { setLayoutShift } from "./js/layout-shift";
import { pageScrollHandler } from "./js/page-scroll-handler";
import { accordions } from "./js/accordions";
import { initSwipers } from "./js/swipers";

window.addEventListener('DOMContentLoaded', () => {
    setViewportHeigth();
    setLayoutShift();
    accordions();
    pageScrollHandler();
    initSwipers();
})

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './scss/app.scss';