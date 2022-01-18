const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    return alert("Every field must be filled");
  };
  const form = {email, password};
 event.currentTarget.reset();
 console.log(form);
return form;
};