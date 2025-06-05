const products = [
  { id: "p1", name: "Mountain Bike" },
  { id: "p2", name: "Road Bike" },
  { id: "p3", name: "Electric Scooter" },
  { id: "p4", name: "Helmet" }
];

const productSelect = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});