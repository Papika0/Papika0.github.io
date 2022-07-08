const api_url = "https://chess-tournament-api.devtest.ge/api/grandmasters";

async function getGrandmasters(n) {
  const response = await fetch(api_url);
  const data = await response.json();
  const { id, name, image } = data[n];

  document.getElementById("id").textContent = id;
  document.getElementById("name").textContent = name;
  document.getElementById("image").src =
    "https://chess-tournament-api.devtest.ge" + image;
}

getGrandmasters(0);
