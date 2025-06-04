const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    name: "Logan Utah Temple",
    location: "Logan, Utah",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    name: "Campinas Brazil Temple",
    location: "Campinas, Brazil",
    dedicated: "2002-05-17",
    area: 48400,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    name: "St. George Utah Temple",
    location: "St. George, Utah",
    dedicated: "1877-04-06",
    area: 110000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  }
];

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  card.innerHTML = `
    <h3>${temple.name}</h3>
    <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  return card;
}

function displayTemples(filter = 'all') {
  const container = document.getElementById('temples-container');
  container.innerHTML = '';

  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split('-')[0]);
    switch (filter) {
      case 'old': return year < 1900;
      case 'new': return year > 2000;
      case 'large': return temple.area > 90000;
      case 'small': return temple.area < 10000;
      default: return true;
    }
  });

  filtered.forEach(temple => {
    container.appendChild(createTempleCard(temple));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayTemples();

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      displayTemples(filter);
    });
  });

  // Footer updates
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});