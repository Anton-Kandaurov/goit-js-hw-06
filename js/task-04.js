const wrap_button = {
  incrementEl: document.querySelector("[data-action='increment']"),
  decrementEl: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
wrap_button.incrementEl.addEventListener('click', increment);
wrap_button.decrementEl.addEventListener('click', decrement);