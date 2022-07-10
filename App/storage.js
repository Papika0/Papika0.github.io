function radioOnClick(value) {
  sessionStorage.setItem("already_participated", value);
  console.log(sessionStorage.getItem("already_participated"));
}

function radioCheck() {
  if (sessionStorage.getItem("already_participated") == "true") {
    document.getElementById("Yes").checked = true;
    document.getElementById("No").checked = false;
    console.log("yes");
  } else {
    document.getElementById("Yes").checked = false;
    document.getElementById("No").checked = true;
    console.log("no");
  }
}

function optionOnClick(name) {
  document.getElementById("character_name").innerHTML = name;
  document.getElementById("list").classList.toggle("hide");
  document.getElementById("selector-arrow2").classList.toggle("rotate");
}

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
    optionCreation.id = "option" + char.id;
    optionCreation.classList.add("options");
    optionCreation.onclick = function () {
      optionOnClick(char.name);
      sessionStorage.setItem("character_id", char.id);
      sessionStorage.setItem("character_name", char.name);
    };

    optionCreation.innerHTML = `<p>${char.name}</p>
        <img src="https://chess-tournament-api.devtest.ge/${char.image}" />`;
    document.getElementById("list").appendChild(optionCreation);
  });
}
function checkSession(id) {
  if (
    sessionStorage.getItem(id) != undefined ||
    sessionStorage.getItem(id) != null
  ) {
    document.getElementById(id).value = sessionStorage.getItem(id);
  }
}

function checkSessionSelect(id) {
  if (
    sessionStorage.getItem(id) != undefined ||
    sessionStorage.getItem(id) != null
  ) {
    document.getElementById(id).innerHTML = sessionStorage.getItem(id);
  }
}

window.onload = (event) => {
  getGrandmasters().then(checkSessionSelect("character_name"));
  checkSession("Name");
  checkSession("Email");
  checkSession("Pnumber");
  checkSession("Date");
  checkSessionSelect("experience_level");
  radioCheck();
};
