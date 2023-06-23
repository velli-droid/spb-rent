import { setLayoutShift } from "./layout-shift";

export function initModals() {
    const modalEls = [...document.querySelectorAll('.js-modal')];
    const openModalBtns = [...document.querySelectorAll('.js-open-modal-btn')];

    if (!modalEls.length || !openModalBtns.length) return;

    modalEls.forEach(modal => {
        const closeBtn = modal.querySelector('.js-modal-close');
        const modalWrapper = modal.querySelector('.js-modal-wrapper');

        closeBtn.onclick = (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }

        modal.onclick = (e) => {
            if (e.composedPath().includes(modalWrapper)) return;
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    })

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModal = modalEls.find(el => el.dataset.modal === btn.dataset.target);

            if (!targetModal) return;

            modalEls.forEach(modal => {
                modal.classList.remove('active')
            });

            setLayoutShift();
            setTimeout(() => {
                targetModal.classList.add('active');
            }, 100)
            document.body.classList.add('modal-open');
        })
    })
}