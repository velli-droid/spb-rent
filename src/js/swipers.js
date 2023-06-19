import Swiper, { Navigation, Pagination } from 'swiper';

export function initSwipers() {
    const catalogCardsSwipers = [...document.querySelectorAll('.catalog-card__swiper')];
    const gridSwipers = [...document.querySelectorAll('.grid-swiper')];


    if (catalogCardsSwipers.length) {
        catalogCardsSwipers.forEach((el, index) => {
            el.classList.add(`js-catalog-swiper-${index}`)
            const swiper = new Swiper(`.js-catalog-swiper-${index}`, {
                slidesPerView: 1,
                watchSlidesProgress: true,
                observer: true,
                navigation: {
                    prevEl: '.catalog-card__swiper-prev',
                    nextEl: '.catalog-card__swiper-next',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                modules: [Navigation, Pagination],
            })
        })
    }

    if (gridSwipers.length) {
        gridSwipers.forEach(el => {

        })
    }
}