function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.body;
const handleClick = (event) => {
spanRef.textContent = getRandomHexColor();
bodyRef.style.backgroundColor = spanRef.textContent; 
};
btnRef.addEventListener("click", handleClick);




