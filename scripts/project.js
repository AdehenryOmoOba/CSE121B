document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filterBtn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      getJoke(filter);
    });
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    nextJoke();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    prevJoke();
  });

  getJoke("Computers");
});

let currentJokeIndex = 0;
let jokesData = [];

async function getJoke(filter) {
  const jokeContainer = document.getElementById("jokeContainer");
  jokeContainer.innerHTML = "<p>Loading...</p>";

  let apiUrl = `https://world-of-jokes1.p.rapidapi.com/v1/jokes/jokes-by-category?limit=5&page=1&category=${filter}&sortBy=score%3Adesc`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11652434a6msh702a9e1926760b1p124039jsnd3d45c267759",
      "X-RapidAPI-Host": "world-of-jokes1.p.rapidapi.com",
    },
  };

  console.log("something...");

  try {
    const response = await fetch(apiUrl, options);
    const jokes = await response.json();
    console.log(jokes.results);

    jokesData = jokes.results;
    currentJokeIndex = jokesData.length - 1;
    displayJoke();
  } catch (error) {
    console.error(error);
    jokeContainer.innerHTML =
      "<p>Failed to fetch joke. Please try again later.</p>";
  }
}

function nextJoke() {
  currentJokeIndex++;
  if (currentJokeIndex >= jokesData.length) {
    currentJokeIndex = 0;
  }
  displayJoke();
}

function prevJoke() {
  currentJokeIndex--;
  if (currentJokeIndex < 0) {
    currentJokeIndex = jokesData.length - 1;
  }
  displayJoke();
}

function displayJoke() {
  const jokeContainer = document.getElementById("jokeContainer");
  jokeContainer.innerHTML = `<p><strong>${jokesData[currentJokeIndex].body}</strong>
  <br>
  <br>
  <em>Category: - ${jokesData[currentJokeIndex].category}</em>
  </p>`;
}
