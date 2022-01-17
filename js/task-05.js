const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
function putText(event) {
  event.currentTarget.value === "" ? outputRef.textContent = "Anonymous" : outputRef.textContent = event.currentTarget.value;
}
inputRef.addEventListener("input", putText);