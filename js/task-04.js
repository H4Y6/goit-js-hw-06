let counterValue = 0;
const spanRef = document.querySelector('span');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
 const handleClick = () => {counterValue -= 1;
  spanRef.textContent = counterValue;
}
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const handleUpClick = () => {counterValue += 1;
  spanRef.textContent = counterValue;
} 
decrementBtnRef.addEventListener("click", handleClick);
 incrementBtnRef.addEventListener("click", handleUpClick);
 