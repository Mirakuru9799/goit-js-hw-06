// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

const inputField =  document.querySelector('#validation-input');

inputField.addEventListener('blur', () => {

    console.log(inputField.value.length);
    console.log(inputField.getAttribute('data-length'));

    if (inputField.value.length !== parseInt(inputField.getAttribute("data-length")))  {
        inputField.classList.add("invalid");
        inputField.classList.remove("valid");
    }   else inputField.classList.replace("invalid", "valid");

});
