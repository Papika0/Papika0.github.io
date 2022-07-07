const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .GetS-Button");
const form = document.querySelector("form");
const prevBtn = document.querySelectorAll("form .back-btn");

let fName = document.getElementById("Name");
let email = document.getElementById("Email");
let pnum = document.getElementById("Pnumber");
let date = document.getElementById("Date");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    changeStep("next");
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const fNameValue = fName.value.trim();
  const emailValue = email.value.trim();
  const pnumValue = pnum.value.trim();
  const dateValue = date.value.trim();

  let check = 0;

  if (fNameValue.length < 2) {
    setErrorFor(fName, "Name cannot be blank");
    console.log("Wrong name");
  } else {
    check++;
    setSuccessFor(fName);
  }
  let emailVal = "@redberry.ge";
  if (emailValue.includes(emailVal)) {
    setSuccessFor(email);
    check++;
  } else {
    setErrorFor(email, "Not a valid email");
    console.log("wrong email");
  }

  if (pnumValue.length == 9) {
    setSuccessFor(pnum);
    check++;
  } else {
    setErrorFor(pnum, "pnum cannot be blank");
    console.log("wrong  phone");
  }

  if (!dateValue) {
    setErrorFor(date, "Date can't be blank");
    console.log("wrong date");
  } else {
    setSuccessFor(date);
    check++;
  }
  if (check == 4) {
    return true;
  } else {
    console.log("need to be Validated");
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-0 error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-0 success";
}

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
