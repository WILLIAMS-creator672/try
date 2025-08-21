// auth-utils.js

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser'); // optional
    window.location.href = 'authen.html';
}
