export function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    if (!anchors.length) return;

    const header = document.querySelector('.js-jump-menu');
    const burger = document.querySelector('.js-header-burger');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const sectionId = anchor.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                e.preventDefault();
                document.body.classList.remove('menu-open');
                header?.classList.remove('active');
                burger?.classList.remove('active');
                const y = section.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });
}
