// Get current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get last modified date
const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModified.toDateString()}`;

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
   // console.log('click')
  hamburger.classList.toggle("rotate");
  //console.log(click)
 nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
});
