export function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    if (!anchors.length) return;

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const sectionId = anchor.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                e.preventDefault();

                const y = section.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });
}
