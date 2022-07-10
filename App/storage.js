function radioOnClick(value) {
  if (value === true) {
    sessionStorage.setItem("already_participated", true);
  } else {
    sessionStorage.setItem("already_participated", false);
  }
}

function radioCheck() {
  if (sessionStorage.getItem("already_participated") == true) {
    document.getElementById("Yes").checked = true;
    document.getElementById("No").checked = false;
  } else {
    document.getElementById("Yes").checked = false;
    document.getElementById("No").checked = true;
  }
}

function optionOnClick(name) {
  document.getElementById("character_name").innerHTML = name;
  document.getElementById("list").classList.toggle("hide");
  document.getElementById("selector-arrow2").classList.toggle("rotate");
  document.getElementById("selection-2").classList.toggle("shown");
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
    console.log(document.getElementById("experience_level").textContent);
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
