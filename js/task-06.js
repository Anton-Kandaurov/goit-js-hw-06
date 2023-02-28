const inputEl = document.querySelector('#validation-input');
const validator = inputEl.getAttribute('data-length');

inputEl.addEventListener("blur", () => {
    inputEl.classList.remove('valid', 'invalid')

    inputEl.value.length === Number(validator)
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');
})