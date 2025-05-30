document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");         
  const navMenu = document.getElementById("nav-menu");

  // ✅ FIX: Removed flex, now uses block display
  menuButton.addEventListener("click", () => {
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
  });

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Temple data
  const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedicated: "April 6, 1893",
      area: 253015,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/0d89a34f6b2c11ed90cfeeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "March 10, 2019",
      area: 40000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/2d27c2e36002d92eec42e70c8f671f17062cb9d6/full/320%2C/0/default",
    },
    {
      name: "Laie Hawaii Temple",
      location: "Laie, Hawaii",
      dedicated: "November 27, 1919",
      area: 42000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/b7a97bb5274711ecb9d2eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "May 21, 2017",
      area: 44000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/1e7d28915f4711edb2c0eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Logan Utah Temple",
      location: "Logan, Utah",
      dedicated: "May 17, 1884",
      area: 119619,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/fb4c9291294711ecb9d2eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "October 27, 1980",
      area: 52915,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/8f49bdf287ec11ecaa68eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Payson Utah Temple",
      location: "Payson, Utah",
      dedicated: "June 7, 2015",
      area: 96630,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/3a2b9c15bfa711ecb6a1eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
    {
      name: "Kinshasa Democratic Republic of the Congo Temple",
      location: "Kinshasa, DRC",
      dedicated: "April 14, 2019",
      area: 10000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/28bc753ba6b411edb2c0eeeeac1e05d2309e944b/full/320%2C/0/default",
    },
  ];

  const container = document.getElementById("temples-container");

  function displayTemples(templesToShow) {
    container.innerHTML = "";
    templesToShow.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
      card.innerHTML = `
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      `;
      container.appendChild(card);
    });
  }

  window.filterTemples = function(criteria) {
    let filtered = temples;

    switch (criteria) {
      case 'old':
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case 'new':
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case 'large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        filtered = temples.filter(t => t.area < 10000);
        break;
      case 'home':
      default:
        break;
    }

    displayTemples(filtered);
  };

  displayTemples(temples); // Initial load
});