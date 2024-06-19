import Swiper from 'swiper';

export function initSwipers() {
    const gridSwipers = [...document.querySelectorAll('.grid-swiper')];
    const reviewsSwiperContainer = [...document.querySelectorAll('.reviews__swiper')];

    const tablet = window.matchMedia('(min-width: 641px) and (max-width: 744px)');
    const desktop = window.matchMedia('(min-width: 745px)');
    const mobile = window.matchMedia('(min-width: 0) and (max-width: 640px)');

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