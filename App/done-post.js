async function fetchPost() {
  var requestoptions = {
    name: sessionStorage.getItem("Name"),
    email: sessionStorage.getItem("Email"),
    phone: sessionStorage.getItem("Pnumber"),
    date_of_birth: sessionStorage.getItem("Date"),
    experience_level: sessionStorage.getItem("experience_level"),
    already_participated: sessionStorage.getItem("already_participated"),
    character_id: sessionStorage.getItem("character_id"),
  };
  var response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/register",
    requestoptions
  );
  if (response.status == 201) {
    // done
  }
}
