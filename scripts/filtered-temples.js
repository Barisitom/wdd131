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

// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "images/churcha.webp"
    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "images/churchb.webp"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 39000,
      imageUrl: "images/churchc.webp"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44409,
      imageUrl: "images/churchd.webp"
    }
  ];
  
  // Function to display temples based on a filter
  function displayTemples(temples) {
    const templeContainer = document.getElementById("templeContainer");
    templeContainer.innerHTML = "";
  
    temples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
  
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
       <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      `;
  
      templeContainer.appendChild(templeCard);
    });
  }
  
  // Display all temples on Home
  displayTemples(temples);
  
  // Filter functions
  function filterOldTemples() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated.split(", ").pop()).getFullYear() < 1900);
    displayTemples(oldTemples);
  }
  
  function filterNewTemples() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated.split(", ").pop()).getFullYear() > 2000);
    displayTemples(newTemples);
  }
  
  function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  }
  
  function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  }
  
  // Navigation event listeners
  document.querySelector('nav ul li a[href="#"]').addEventListener("click", () => displayTemples(temples));
  document.querySelector('nav ul li a[href="#old"]').addEventListener("click", filterOldTemples);
  document.querySelector('nav ul li a[href="#new"]').addEventListener("click", filterNewTemples);
  document.querySelector('nav ul li a[href="#large"]').addEventListener("click", filterLargeTemples);
  document.querySelector('nav ul li a[href="#small"]').addEventListener("click", filterSmallTemples);
  
  // Update footer information
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
