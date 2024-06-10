document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('lastModified').textContent = lastModified;
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("rotate");
    nav.classList.toggle('show');
});
