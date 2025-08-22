let overlay = document.getElementById('overlay')
let hamburgerOverlay = document.getElementById('hamburgerOverlay')
let mobileMenuButton = document.getElementById('mobileMenuTrigger')
let mobileNav = document.getElementById('navBar')

let openMenuIcon = mobileMenuButton.querySelectorAll('i')[0]
let closeMenuIcon = mobileMenuButton.querySelectorAll('i')[1]

mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('left-0');
    closeMenuIcon.classList.toggle('scale-0')
    openMenuIcon.classList.toggle('scale-0')
    hamburgerOverlay.classList.toggle('hidden')
})

hamburgerOverlay.addEventListener('click', () => {
    mobileNav.classList.toggle('left-0')
    closeMenuIcon.classList.toggle('scale-0')
    openMenuIcon.classList.toggle('scale-0')
    hamburgerOverlay.classList.toggle('hidden')
})


// PROGRAMMES ABOUT MODAL

let programmesAboutModal = document.getElementById('programmesModal')

let programmesAboutMessage = document.getElementById('programmeAboutMessage')

let programmesHeading = document.getElementById('programmeHeading')

let aboutPhotograhButton = document.querySelectorAll('#programmes button')[0]

let aboutCampButton = document.querySelectorAll('#programmes button')[1]

let aboutSpellingButton = document.querySelectorAll('#programmes button')[2]

let closeAboutProgrammesButton = document.getElementById('closeAboutProgrammesModalButton')


aboutPhotograhButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'PHOTOGRAPH WORKSHOP'
    programmesAboutMessage.innerText = "This is organized by the State officials in other to get good photographs of the Boys' for remebrance purposes"
    overlay.classList.toggle('hidden')
})

aboutCampButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'CAMP'
    programmesAboutMessage.innerText = 'Every year we organize a state training camp for the members of the Boys Brigade to expose them mentally, spiritually, socially and physically'
    overlay.classList.toggle('hidden')
})

aboutSpellingButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'SPELLING COMPETITION'
    programmesAboutMessage.innerText = "The Brigade really focus on the Boys so we organize spellings competitions for all the sections in the Brigade "
    overlay.classList.toggle('hidden')
})

closeAboutProgrammesButton.addEventListener('click', () => {
    overlay.classList.add('hidden')
    programmesAboutModal.classList.toggle('scale-150')
})

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    programmesAboutModal.classList.toggle('scale-150')
})




let redirectToAbout = document.getElementById('aboutUsButton')

redirectToAbout.addEventListener('click', () => {
    window.location.href = 'about.html'
})


// FOOTER DATE

let footerYear = document.getElementById('footer-year');

let currentYear = new Date().getFullYear();

footerYear.textContent = currentYear;


// DISPLAY USER ACCOUNT

// let headerButtonContainer = document.getElementById('headerSignLogDiv');
// let userAccountButton = document.getElementById('userAccountButton');

// function showSpecialButtonIfAllowed() {
//     const savedData = localStorage.getItem('signUpFormData');

//     if (savedData) {

//         try {
//             const parsedData = JSON.parse(savedData);

//             if (parsedData) {
//                 // User is signed in
//                 headerButtonContainer.style.display = 'none';
//                 userAccountButton.style.display = 'block';
//             }
//         } catch (e) {
//             console.error('Error parsing savedData:', e);
//             // If parsing fails, treat it as not signed in
//             userAccountButton.style.display = 'none';
//             headerButtonContainer.style.display = 'block';
//         }

//     } else {
//         // No user is signed in
//         userAccountButton.style.display = 'none';
//         headerButtonContainer.style.display = 'flex'; // or 'block' if appropriate
//     }
// }

// window.addEventListener('DOMContentLoaded', showSpecialButtonIfAllowed);


let headerButtonContainer = document.getElementById('headerSignLogDiv')
let hamburgerButtonContainer = document.getElementById('hamburgerSignLogDiv')
let userNAME = document.getElementById('userName')
let headerUserButton = document.getElementById('userAccountButton')
let hamburgerUserButton = document.getElementById('hamburgerUserButton')
let hamburgerUserName = hamburgerUserButton.querySelector('p')
let userAccountDiv = document.getElementById('userAccountDiv')
let headerUserName = userAccountDiv.querySelector('p')






let getSavedData = {
    savedData: localStorage.getItem('signUpFormData')

}

let { savedData } = getSavedData

function showSpecialButtonIfAllowed() {

    if (savedData) {
        let parsedData = JSON.parse(savedData);
        headerButtonContainer.classList.add('hidden')
        hamburgerButtonContainer.classList.add('hidden');
        hamburgerUserName.innerHTML = `<i class="fa-solid fa-user text-[#FEFE00] text-[18px]"></i> &nbsp; ${parsedData.fullName}`
        headerUserName.innerText = parsedData.fullName

        // USER ACCOUNT BUTTON RESPONSIVENESS

        const isMediumScreen = window.matchMedia('(min-width: 768px)').matches;

        if (isMediumScreen) {
            headerUserButton.classList.remove('hidden');
            hamburgerLogOutButon.classList.remove('hidden')
        } else {
            headerUserButton.classList.add('hidden');
            // hamburgerLogOutButon.classList.add('hidden')
        }

    } else {

        headerUserButton.classList.add('hidden');

        hamburgerButtonContainer.classList.remove('hidden');

        hamburgerLogOutButon.classList.add('hidden')
    }

}

window.addEventListener('DOMContentLoaded', showSpecialButtonIfAllowed);

window.addEventListener('resize', showSpecialButtonIfAllowed);


headerUserButton.onclick = function () {
    showUserAccountDiv()
}

function showUserAccountDiv() {
    userAccountDiv.classList.toggle('-translate-y-[600px]')
}

// REDIRECT TO SIGN UP PAGE

let headerSignUpLink = headerButtonContainer.querySelectorAll('button')[0]
let hamburgerSignUpLink = hamburgerButtonContainer.querySelectorAll('button')[0]
let getStartedButton = document.getElementById('getStartedButton')

headerSignUpLink.addEventListener('click', () => {
    window.location.href = 'authen.html'
})

// ERRORS

let getStartedError = document.getElementById('getStartedError');

let navBrigadeShopLink = document.getElementById('navBrigadeShopLink')

let headerHelpLink = document.getElementById('headerHelpLink')

getStartedButton.addEventListener('click', () => {
    if (savedData) {

        getStartedError.classList.remove('opacity-0');
        getStartedError.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> You are already signed in';


        setTimeout(() => {
            getStartedError.classList.add('opacity-0');
            getStartedError.innerText = '';
        }, 3000);
    } else {
        window.location.href = 'authen.html'
    }

});

navBrigadeShopLink.addEventListener('click', showComingSoon)

headerHelpLink.addEventListener('click', showComingSoon)

function showComingSoon(event){
    event.preventDefault()
    getStartedError.classList.remove('opacity-0');
    getStartedError.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Coming Soon.....';

    setTimeout(() => {
        getStartedError.classList.add('opacity-0');
        getStartedError.innerText = '';
    }, 3000);
}



// LOG OUT

let headerLogOutButton = document.getElementById('headerLogOut')
let hamburgerLogOutButon = mobileNav.querySelectorAll('button')[2]

headerLogOutButton.addEventListener('click', logout)
hamburgerLogOutButon.addEventListener('click', logout)

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'authen.html';
}































// PROGRAMME CARDS SLIDE IN EFFECT

// Function to observe when the elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'in-view' class to trigger animation
            entry.target.classList.add('in-view');
        } else {
            // Remove the 'in-view' class when the element is out of view
            entry.target.classList.remove('in-view');
        }
    });
}, {
    threshold: 0.5, // Trigger when 50% of the element is in view
    rootMargin: '0px 0px -20px 0px', // Trigger when the element is about to enter the viewport
});

// Target each programme-card element for the scroll animation
const leftCard = document.querySelector('.left-card');
const bottomCard = document.querySelector('.bottom-card');
const rightCard = document.querySelector('.right-card');

// Observe the cards for when they enter the viewport
observer.observe(leftCard);
observer.observe(bottomCard);
observer.observe(rightCard);





//     // let firstName = parsedData.firstName
//     // let capitalizeFirstLetter = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()