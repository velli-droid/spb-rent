import { InputMask } from "imask/esm/index";

export function setPhoneMask() {
    const inputsWithPhoneMask = [...document.querySelectorAll('.js-phone-mask')]

    if (!inputsWithPhoneMask.length) return

    inputsWithPhoneMask.forEach((input) => {
        new InputMask(input, {
            mask: '[+7](000)000-00-00',
            lazy: true,
            placeholderChar: '_'   
        });
    })
}