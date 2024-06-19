import { setLayoutShift } from "./layout-shift";

export function initModals() {
    const modalEls = [...document.querySelectorAll('.js-modal')];
    const openModalBtns = [...document.querySelectorAll('.js-open-modal-btn')];

    if (!modalEls.length || !openModalBtns.length) return;

    modalEls.forEach(modal => {
        const closeBtn = modal.querySelector('.js-modal-close');
        const modalWrapper = modal.querySelector('.js-modal-wrapper');

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
            console.log(e)
        })  

        modal.addEventListener('click', (e) => {
            if (!modalWrapper.contains(e.target)) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
                console.log('modalClick')
            }
        })
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
            document.body.classList.add('modal-open');
            targetModal.classList.add('active');
        })
    })
}