// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.getElementById('nav-menu');

  menuButton.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
    }
  });
});