// Footer Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.style.display === "flex";
  navMenu.style.display = isOpen ? "none" : "flex";
  menuButton.textContent = isOpen ? "☰" : "✖";
});