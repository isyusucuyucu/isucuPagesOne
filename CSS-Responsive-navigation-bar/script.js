// Get hamburger icon and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
