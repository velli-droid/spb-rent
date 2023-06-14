export function pageScrollHandler() {
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 60) {
            document.body.classList.remove(scrollUp);
            document.body.classList.remove(scrollDown);
            return;
        }
        if (currentScroll > lastScroll) {
            document.body.classList.remove(scrollUp);
            document.body.classList.add(scrollDown);

        } else if (currentScroll < lastScroll) {
            document.body.classList.remove(scrollDown);
            document.body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    })
}