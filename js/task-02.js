const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const items = [];
ingredients.forEach((ingredient) => {
  const itemRef = (document.createElement("li"));
  itemRef.classList.add('item'); 
  itemRef.textContent = ingredient;
  items.push(itemRef);
});
listRef.prepend(...items);
console.log(listRef);