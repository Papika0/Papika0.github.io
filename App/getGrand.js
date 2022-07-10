async function getGrandmasters() {
  const response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/grandmasters"
  );
  const data = await response.json();
  document.getElementById("list").innerHTML = `<li class="count">
                <p>(Total ${data.length})</p>
                </li>`;
  data.map((char) => {
    var optionCreation = document.createElement("li");
    optionCreation.id = char.id;
    optionCreation.innerHTML = `<p>${char.name}</p>
                <img src="https://chess-tournament-api.devtest.ge/${char.image}" />`;
  });
}
