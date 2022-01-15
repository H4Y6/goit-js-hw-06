const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const items = [];
ingredients.forEach(function (ingredient) {
  const item = (document.createElement("li"));
  item.classList.add('item'); 
  item.textContent = ingredient;
  items.push(item);
});
list.prepend(...items);
console.log(list);