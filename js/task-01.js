const categoryCount = document.querySelector("#categories").childElementCount;
console.log(`Number of categories: ${categoryCount}`);

const mainItemsRef = document.querySelectorAll('#categories > li') ;
mainItemsRef.forEach(item => {
console.log(' ');
console.log(`Category: ${item.childNodes[1].textContent}`);
console.log(`Elements: ${item.children[1].childElementCount}`);
});