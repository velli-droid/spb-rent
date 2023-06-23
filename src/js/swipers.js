import Swiper, { Navigation, Pagination } from 'swiper';

export function initSwipers() {
    const catalogCardsSwipers = [...document.querySelectorAll('.catalog-card__swiper')];
    const gridSwipers = [...document.querySelectorAll('.grid-swiper')];
    const reviewsSwiperContainer = [...document.querySelectorAll('.reviews__swiper')];

    const tablet = window.matchMedia('(min-width: 641px) and (max-width: 744px)');
    const desktop = window.matchMedia('(min-width: 745px)');
    const mobile = window.matchMedia('(min-width: 0) and (max-width: 640px)');

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
        gridSwipers.forEach((el, index) => {
            let gridSwiper = null;
            let gridSwiperInit = false;

            el.classList.add(`grid-swiper-${index}`)

            window.addEventListener('load', function() {
                gridSwiperMode(`.grid-swiper-${index}`);
            });
        
            window.addEventListener('resize', function() {
                gridSwiperMode(`.grid-swiper-${index}`);
            }); 

            function gridSwiperMode(_selector) {
                if (mobile.matches || tablet.matches) {
                    if (gridSwiperInit) return;
                    gridSwiperInit = true;
                    gridSwiper = new Swiper(_selector, {
                        slidesPerView: 'auto'
                    });
        
                } else if (desktop.matches) {
                    gridSwiper?.destroy();
                    gridSwiperInit = false;
                }
            }      
        })

       
    }
}