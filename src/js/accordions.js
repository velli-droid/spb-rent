export function accordions() {
    const els = [...document.querySelectorAll('.js-accordion')];

    if (!els.length) return;

    els.forEach(el => {
        const items = [...el.querySelectorAll('.js-accordion-item')];

        if (!items.length) return;

        items.forEach(item => {
            const head = item.querySelector('.js-accordion-head');
            const body = item.querySelector('.js-accordion-body');

            if (!head || !body) return;

            head.addEventListener('click', () => { toggle(item, head, body) });
        })
    })

    function toggle(_item, _head, _body) {
        if (!_item.classList.contains('active')) {
            _body.style.maxHeight = `${_body.scrollHeight}px`;
            setTimeout(() => {
                _body.style.maxHeight = '';
            }, 300);
        } else {
            _body.style.maxHeight = `${_body.scrollHeight}px`;
            setTimeout(() => {
                _body.style.maxHeight = '';
            }, 10);
        }
        _item.classList.toggle('active');
    }
}