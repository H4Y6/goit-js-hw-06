// const identedListItemQuantity = document.body.firstElementChild.nextElementSibling.children.length;
// console.log(`Number of categories: ${identedListItemQuantity}`);

// const firstIdentedListItemTitle = document.body.firstElementChild.nextElementSibling.children[0].firstChild.nextElementSibling.textContent;
// console.log(`Category: ${firstIdentedListItemTitle}`);
// =====================================================================================


const identedListItemCount = document.querySelector("#categories").childElementCount
console.log(`Number of categories: ${identedListItemCount}`);
console.log(' ');

const firstSubtitle = document.querySelector("#categories").children[0].firstChild.nextElementSibling.textContent;
console.log(`Category: ${firstSubtitle}`);

const firstSublistCount = document.querySelector(".item").children[1].childElementCount;      
console.log(`Elements: ${firstSublistCount}`);
console.log(' ');

const secondSubtitle = document.querySelector("#categories").children[1].firstChild.nextElementSibling.textContent;
console.log(`Category: ${secondSubtitle}`);

const secondSublistCount = document.querySelectorAll(".item")[1].children[1].childElementCount;      
console.log(`Elements: ${secondSublistCount}`);
console.log(' ');

const thirdSubtitle = document.querySelector("#categories").children[2].firstChild.nextElementSibling.textContent;
console.log(`Category: ${thirdSubtitle}`);

const thirdSublistCount = document.querySelectorAll(".item")[2].children[1].childElementCount;      
console.log(`Elements: ${thirdSublistCount}`);
