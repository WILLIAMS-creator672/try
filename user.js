let accountFullName = document.getElementById('accountFullName')
let accountEmail = document.getElementById('accountEmail')
let parsedData;  // Declare globally



// ACCOUNT MODAL

let accountModal = document.getElementById('accountModal')
let userFullName = accountModal.querySelectorAll('p')[1]
let userEmail = accountModal.querySelectorAll('p')[2]
let userPhoneNumber = accountModal.querySelectorAll('p')[3]


window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('signUpFormData');

    if (savedData) {
        parsedData = JSON.parse(savedData);

        accountFullName.innerHTML = `<i class="fa-solid fa-user text-whiite md:text-neutral-500"></i> ${parsedData.fullName}`;
        accountEmail.innerHTML = `<i class="fa-solid fa-envelope text-white md:text-neutral-500"></i> ${parsedData.email}`;

        userFullName.innerHTML = parsedData.fullName
        userEmail.innerHTML = parsedData.email
        userPhoneNumber.innerHTML = parsedData.phoneNumber
    }
});


let accountDetailsButton = document.getElementById('accountDetails')

let overlayTwo = document.getElementById('overlay-2')
let hamburgerOverlayTwo = document.getElementById('hamburgerOverlay-2')
let closeAccountModal = accountModal.querySelector('i')



accountDetailsButton.addEventListener('click', () => {
    accountModal.classList.remove('scale-0')
    overlayTwo.classList.remove('hidden')
})

overlayTwo.addEventListener('click', () => {
    accountModal.classList.add('scale-0')
    overlayTwo.classList.add('hidden')
})

closeAccountModal.addEventListener('click', () => {
    accountModal.classList.add('scale-0')
    overlayTwo.classList.add('hidden')
})


// NOT READY ERROR - COMING SOON

let notReadyError = document.getElementById('notReadyError')

let accountCard = document.getElementById('accountCard')

let accountSettingsButton = accountCard.querySelectorAll('button')[1]

let accountCustomerServiceButton = accountCard.querySelectorAll('button')[2]

let accountBBshopButton = accountCard.querySelectorAll('button')[3]

accountSettingsButton.addEventListener('click', displayNotReadyError)

accountCustomerServiceButton.addEventListener('click', displayNotReadyError)

accountBBshopButton.addEventListener('click', displayNotReadyError)



function displayNotReadyError(event){
    event.preventDefault()
    notReadyError.classList.remove('opacity-0');
    notReadyError.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Coming Soon.....';

    setTimeout(() => {
        notReadyError.classList.add('opacity-0');
        notReadyError.innerText = '';
    }, 3000);
}


// Profile Picture Upload
const fileInput = document.getElementById('file-upload');
const profileImg = document.querySelector('.dp');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let newDp = e.target.result;
            profileImg.src = newDp;
            localStorage.setItem('newdp', newDp);
        };
        reader.readAsDataURL(file);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    // let savedName = localStorage.getItem('profileName');
    // let savedOccupation = localStorage.getItem('occupation');
    // let savedBio = localStorage.getItem('newbio');
    let savedDp = localStorage.getItem('newdp');

    // const profileCard = document.getElementById('card');
    // const form = document.getElementById('form');
    // const profileName = document.getElementById('profile-name');
    // const profileOccupation = document.getElementById('occupation-text');
    // const bioText = document.getElementById('bio-text');
    const profileImg = document.querySelector('.dp');

    // if (savedName && savedOccupation) {
    //     form.style.display = 'none';
    //     profileCard.style.display = 'block';

    //     profileName.innerText = savedName;
    //     profileOccupation.innerText = savedOccupation;
    // }

    // if (savedBio) {
    //     bioText.innerText = savedBio;
    // }

    if (savedDp) {
        profileImg.src = savedDp;
    }
});


// LOG OUT

let accountModalLogoutButton = document.getElementById('accountModalLogOut')



accountModalLogoutButton.addEventListener('click', logout)







