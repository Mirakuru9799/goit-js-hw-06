
const formElement = document.querySelector( '.login-form' );
formElement.addEventListener( 'submit', onBtnSubmit );

function onBtnSubmit ( event ) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        return alert ('Все поля должны быть заполнены!')
    } 

    const formData = new FormData( event.currentTarget )
    const dataFormValue = {};

    formData.forEach( ( value, name ) => {
        dataFormValue[name] = value;
    })
    console.log( dataFormValue );
    formElement.reset();
}

