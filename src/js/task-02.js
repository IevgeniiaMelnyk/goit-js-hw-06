const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${ingredient}`;
  ingredientEl.classList.add('item');

  const newListIngredients = document.querySelector('ul[id="ingredients"]');
  newListIngredients.append(ingredientEl);
});






