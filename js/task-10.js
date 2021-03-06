function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
btnDestroyRef.addEventListener('click', destroyBoxes);
btnCreateRef.addEventListener('click', () => createBoxes(inputRef.value));
function createBoxes(amount) {
    const boxes = [];
    for (let i = 30; i < 30 + amount * 10; i += 10) {
        const box = document.createElement("div");
        box.style.width = `${i}px`;
        box.style.height = `${i}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
    };
    return boxesRef.append(...boxes);
};
function destroyBoxes(){inputRef.value = '';
    boxesRef.textContent = '';
};