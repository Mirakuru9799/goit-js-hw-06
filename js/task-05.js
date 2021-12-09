// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous"

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

function onInputChange(event) {
    if (event.currentTarget.value.trim() === '') {
        refs.nameLabel.textContent = "Anonymous";
    } else {
        refs.nameLabel.textContent = event.currentTarget.value.trim();
    }   
};

refs.input.addEventListener('input', onInputChange);





