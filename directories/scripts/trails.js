// Trail data using objects and arrays
const trails = [
  { name: "Riverwalk Trail", difficulty: "Easy" },
  { name: "Sunset Peak", difficulty: "Hard" },
  { name: "Pine Forest Loop", difficulty: "Moderate" },
];

// Populate trail list dynamically using DOM + template literals
const trailList = document.getElementById("trailList");
if (trailList) {
  trails.forEach(trail => {
    trailList.innerHTML += `
      <div class="trail-card">
        <h3>${trail.name}</h3>
        <p>Difficulty: ${trail.difficulty}</p>
      </div>`;
  });
}

// Handle form submission and use localStorage
const form = document.getElementById("reviewForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const trail = document.getElementById("trail").value;
    const difficulty = document.getElementById("difficulty").value;
    const comments = document.getElementById("comments").value;

    const review = {
      trail,
      difficulty,
      comments,
      date: new Date().toLocaleDateString()
    };

    // Save to localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("confirmation").textContent = `Thank you for your review of ${trail}!`;

    form.reset();
  });
}