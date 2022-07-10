form1.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPost();
});

var valueD = "true";

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestoptions),
    }
  );
  console.log(response.status);
  if ((response.status = 201)) {
    sessionStorage.clear();
    changeStep("next");
  }
}
