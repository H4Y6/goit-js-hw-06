const inputRef = document.querySelector("#validation-input");
function checkBlur(event) {
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
        return inputRef;
    };
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
    return inputRef;
    };
inputRef.addEventListener("blur", checkBlur); 