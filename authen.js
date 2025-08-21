let signupForm = document.getElementById('signupForm');
let signinForm = document.getElementById('signinForm');
let signinNavigateLink = signupForm.querySelector('a');
let signupNavigateLink = signinForm.querySelector('a');

signinForm.style.opacity = '0';
signinForm.style.pointerEvents = 'none';

signinNavigateLink.onclick = function (event) {
    event.preventDefault();

    signupForm.style.opacity = '0';
    signupForm.style.pointerEvents = 'none';

    signinForm.style.opacity = '1';
    signinForm.style.pointerEvents = 'auto';
};

signupNavigateLink.onclick = function (event) {
    event.preventDefault();

    signupForm.style.opacity = '1';
    signupForm.style.pointerEvents = 'auto';

    signinForm.style.opacity = '0';
    signinForm.style.pointerEvents = 'none';
};


// CREATE ACCOUNT

let firstNameInput = document.getElementById('userFirstName')
let lastNameInput = document.getElementById('userLastName')
let emailInput = document.getElementById('userEmail')
let telInput = document.getElementById('userPhoneNumber')
let passwordInput = document.getElementById('passwordInput')
let confirmPasswordInput = document.getElementById('confirmPasswordInput')
let registerButton = document.getElementById('registerButton')


// TOGGLE PASSWORD


let passwordToggle = document.getElementById('passwordToggle')
let seePassword = passwordToggle.querySelector('i')
let seeConfirmPassword = confirmPasswordToggle.querySelector('i')

passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password'
    passwordInput.type = isPassword ? 'text' : 'password'

    seePassword.classList.toggle('fa-eye');
    seePassword.classList.toggle('fa-eye-slash');
})

confirmPasswordToggle.addEventListener('click', () => {
    const isPassword = confirmPasswordInput.type === 'password'
    confirmPasswordInput.type = isPassword ? 'text' : 'password'

    seeConfirmPassword.classList.toggle('fa-eye');
    seeConfirmPassword.classList.toggle('fa-eye-slash');
})


signupForm.addEventListener('input', function () {
    let valid = true;

    if (!firstNameInput.value.trim()) valid = false;
    if (!lastNameInput.value.trim()) valid = false;
    if (!emailInput.value.includes('@')) valid = false;
    if (!telInput.value.match(/^\d{11}$/)) valid = false;
    if (!passwordInput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/)) valid = false;
    if (confirmPasswordInput.value !== passwordInput.value) valid = false;


    if (valid) {
        registerButton.classList.replace('disabled', 'active')
    } else {
        registerButton.classList.add('disabled')

    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault()


    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let fullName = firstName + ' ' + lastName
    let email = emailInput.value
    let phoneNumber = telInput.value
    let password = passwordInput.value

    let userData = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    }

    localStorage.setItem('signUpFormData', JSON.stringify(userData))

    registerButton.innerHTML = 'Creating Account...'

    setTimeout(() => {
        registerButton.innerHTML = 'Please wait...'
    }, 1500)

    setTimeout(() => {
        window.location.href = 'index.html'
    }, 2500)

    setTimeout(() => {
        registerButton.innerHTML = 'Register'
    }, 2500)


})
