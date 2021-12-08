
const formElement = document.querySelector( '.login-form' )

formElement.addEventListener( 'submit', onBtnSubmit )
function onBtnSubmit ( event ) {
    event.preventDefault();

    const objForm = {};
    const formData = new FormData( event.currentTarget )
    formData.forEach( ( value, name ) => {
        objForm[name] = value 
    })
    console.log( objForm )
    event.currentTarget.reset()
}

