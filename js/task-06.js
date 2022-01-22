const inputRef = document.querySelector("#validation-input");
const checkBlur = event => { if (event.currentTarget.value.length == inputRef.dataset.length) {
      return  inputRef.classList.replace("invalid", "valid");
    };
   return inputRef.classList.add("invalid");
    };
inputRef.addEventListener("blur", checkBlur); 