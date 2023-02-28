const inputEl = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

const userEvent = (event) => {

    nameUser.textContent = event.currentTarget.value.trim();

    if (nameUser.textContent.length === 0) {
        nameUser.textContent = "Anonymous";
    }
}

inputEl.addEventListener('input', userEvent);
