const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
    elements: { email, password }
  } = event.currentTarget;
    console.log(email.value, password.value);

    const inputValue = {
        Email: `${email.value}`,
        Password: `${password.value}`
    };

    console.log(inputValue);

    if (email.value.length === 0 && password.value.length) {
        window.alert("Всі поля повинні бути заповнені!!!");
    };

    event.target.reset();
})
