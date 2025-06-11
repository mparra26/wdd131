// Trail Data
const trailData = [
  {
    name: "Sunset Ridge Trail",
    location: "Vermont",
    difficulty: "Moderate"
  },
  {
    name: "Emerald Lake Path",
    location: "Colorado",
    difficulty: "Easy"
  }
];

// Display Trails on trails.html
const trailList = document.getElementById("trail-list");
if (trailList) {
  trailList.innerHTML = trailData.map(trail => `
    <div class="card">
      <h3>${trail.name}</h3>
      <p><strong>Location:</strong> ${trail.location}</p>
      <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
    </div>
  `).join('');
}

// Handle Trail Submission on submit.html
const form = document.getElementById("trail-form");
const submittedList = document.getElementById("submitted-trails");

if (form) {
  let userTrails = JSON.parse(localStorage.getItem("userTrails")) || [];

  const renderUserTrails = () => {
    submittedList.innerHTML = userTrails.map(t => `<li>${t.name} - ${t.location} (${t.difficulty})</li>`).join('');
  };

  renderUserTrails();

  form.addEventListener("submit", e => {
    e.preventDefault();
    const newTrail = {
      name: form.trailName.value.trim(),
      location: form.location.value.trim(),
      difficulty: form.difficulty.value
    };

    if (newTrail.name && newTrail.location && newTrail.difficulty) {
      userTrails.push(newTrail);
      localStorage.setItem("userTrails", JSON.stringify(userTrails));
      renderUserTrails();
      form.reset();
    }
  });
}