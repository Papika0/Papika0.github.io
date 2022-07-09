const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .GetS-Button");
const form = document.querySelector("form");
const prevBtn = document.querySelectorAll("form .back-btn");
const stageNum = document.getElementById("stagenum-1");
const closePopUpButton = document.querySelectorAll("form .close-button");

let fName = document.getElementById("Name");
let email = document.getElementById("Email");
let pnum = document.getElementById("Pnumber");
let date = document.getElementById("Date");

let namePop = document.getElementById("popup-name");
let emailPop = document.getElementById("popup-email");
let pnumPop = document.getElementById("popup-pnum");
let datePop = document.getElementById("popup-date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInputs()) {
    stageNum.classList.add("done");
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
    console.log("Wrong name");
    setErrorFor(fName, "Name cannot be blank");
    namePop.classList.add("valid");
  } else {
    check++;
    setSuccessFor(fName);
  }
  if (check == 1) {
    let emailVal = "@redberry.ge";
    if (emailValue.includes(emailVal)) {
      setSuccessFor(email);
      check++;
    } else {
      namePop.classList.remove("valid");
      emailPop.classList.add("valid");
      setErrorFor(email, "Not a valid email");
      console.log("wrong email");
    }
  }
  if (check == 2) {
    if (pnumValue.length == 9) {
      setSuccessFor(pnum);
      check++;
    } else {
      emailPop.classList.remove("valid");
      pnumPop.classList.add("valid");
      setErrorFor(pnum, "pnum cannot be blank");
      console.log("wrong  phone");
    }
  }
  if (check == 3) {
    if (!dateValue) {
      pnumPop.classList.remove("valid");
      datePop.classList.add("valid");
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
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-0 error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-0 success";
}

closePopUpButton.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("close");
  });
});

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
