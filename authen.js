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


// LOG IN

let loginForm = document.getElementById('signinForm');
let loginEmailInput = document.getElementById('logInEmail');
let loginPasswordInput = document.getElementById('logInPassword');
let logInButton = document.getElementById('logInButton');


let logInError = document.getElementById('logInError');

// Fetch stored user data once
let storedUserData = JSON.parse(localStorage.getItem('signUpFormData'));


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = loginEmailInput.value.trim();
    let password = loginPasswordInput.value;

    let userData = JSON.parse(localStorage.getItem('signUpFormData'));

    if (userData) {
        if (email === userData.email && password === userData.password) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(userData));

            window.location.href = 'index.html';
        } else {
            logInError.classList.remove('opacity-0');
            logInError.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Wrong Credentials';

            setTimeout(() => {
                logInError.classList.add('opacity-0');
                logInError.innerText = '';
            }, 3000);
        }
    } else {
        alert('No user found. Please sign up first.');
    }
});
