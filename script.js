const inputs = document.querySelectorAll('.form-input');
const form = document.querySelector('.form');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.value !== '') {
            input.nextElementSibling.classList.add('float');
        } else {
            input.nextElementSibling.classList.remove('float');
            input.classList.remove('valid');
        }
    })
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputs.forEach(input => {
        let label = input.nextElementSibling.innerHTML;
        let errorMsg = input.nextElementSibling.nextElementSibling;
        if(input.value === '') {
            input.classList.add('error');
            input.classList.remove('valid');
            errorMsg.innerHTML = label + " cannot be empty";
            input.parentElement.querySelector('.error-icon').classList.remove('hidden');
        } else {
            input.classList.remove('error');
            input.classList.add('valid');
            errorMsg.innerHTML = '';
            input.parentElement.querySelector('.error-icon').classList.add('hidden');
            if(input.type === 'text' && !validateName(input.value)) {
                console.log('oi');
                input.classList.add('error');
                input.classList.remove('valid');
                errorMsg.innerHTML = label + " is in an invalid format";
                input.parentElement.querySelector('.error-icon').classList.remove('hidden');
            }
            if(input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('error');
                input.classList.remove('valid');
                errorMsg.innerHTML = "Looks like this is not an email";
                input.parentElement.querySelector('.error-icon').classList.remove('hidden');
            }
        }
    });
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const validateName = (name) => {
    return String(name)
        .toLowerCase()
        .match(
            /^[a-zñáéíóãéúü]+$/i
        )
};