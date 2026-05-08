
const msgInput = document.querySelector('.msgInput');
const msgCounter = document.querySelector('.msgCounter');
const tagInput = document.querySelector('.tagInput');
const tagCounter = document.querySelector('.tagCounter');
const max = 144;
const tagMax = 20;



const textFieldLengthValidator = (input, counter, limite) => {
    input.addEventListener('input', function(){
        if (input.value.length > limite) {
        input.value = input.value.substring(0, limite);
        }

        counter.innerHTML = limite - input.value.length;

    })

}
textFieldLengthValidator(msgInput, msgCounter, max);
textFieldLengthValidator(tagInput, tagCounter, tagMax);



// function actualizarConteo(input, counter, limite) {
//     if (input.value.length > limite) {
//         input.value = input.value.substring(0, limite);
//     }

//     counter.innerHTML = limite - input.value.length;
// }

// msgInput.addEventListener('input', function () {
//     actualizarConteo(msgInput, msgCounter, max);
// });

// tagInput.addEventListener('input', function () {
//     actualizarConteo(tagInput, tagCounter, tagMax);
// });