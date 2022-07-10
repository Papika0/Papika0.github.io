form1.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPost();
});

var valueD = "true";

console.log(sessionStorage.getItem("experience_level"));

async function fetchPost() {
  var requestoptions = {
    name: sessionStorage.getItem("Name"),
    email: sessionStorage.getItem("Email"),
    phone: sessionStorage.getItem("Pnumber"),
    date_of_birth: sessionStorage.getItem("Date"),
    experience_level: sessionStorage.getItem("experience_level"),
    already_participated:
      sessionStorage.getItem("already_participated") === valueD,
    character_id: parseInt(sessionStorage.getItem("character_id")),
  };

  var response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/register",
    {
      method: "POST",
      body: requestoptions,
    }
  );
  console.log(JSON.stringify(requestoptions));
  if (response.status == 201) {
    sessionStorage.clear;
  }
}
