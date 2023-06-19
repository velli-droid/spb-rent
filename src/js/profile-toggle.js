export function initProfileToggle() {
    const profileEl = document.querySelector('.profile');

    if (!profileEl) return;

    const toggleBtn = profileEl.querySelector('.profile__toggle');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        profileEl.classList.toggle('active');
    })

    window.addEventListener('click', (e) => {
        if (e.composedPath().includes(profileEl)) return;

        profileEl.classList.remove('active')
    })
}