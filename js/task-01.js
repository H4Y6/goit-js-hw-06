const categoryCount = document.querySelector("#categories").childElementCount;
const h2 = document.querySelectorAll("h2");
const subList = document.querySelectorAll(".item > ul");

console.log(`Number of categories: ${categoryCount}`);

for (let i = 0; i < categoryCount; i += 1) {
  console.log(' ');
  console.log(`Category: ${h2[i].textContent}`  );
  console.log(`Elements: ${subList[i].childElementCount}`)
}
