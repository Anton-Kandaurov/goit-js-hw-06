const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const liEl = ingredients.map((el) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');

  return ingredientEl.textContent = el;
});

ulEl.append(...liEl); 
console.log(ulEl);