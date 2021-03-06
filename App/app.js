const stageNum = document.getElementById("stagenum-1");
const closePopUpButton = document.querySelectorAll("form .close-button");
const form1 = document.querySelector("form");
const nextValid = document.querySelectorAll("form .next-btn-valid");

let fName = document.getElementById("Name");
let email = document.getElementById("Email");
let pnum = document.getElementById("Pnumber");
let date = document.getElementById("Date");

let namePop = document.getElementById("popup-name");
let emailPop = document.getElementById("popup-email");
let pnumPop = document.getElementById("popup-pnum");
let datePop = document.getElementById("popup-date");
let selectPop = document.getElementById("popup-select");

closePopUpButton.forEach((button) => {
  button.addEventListener("click", () => {
    closePopUp();
  });
});

nextValid.forEach((button) => {
  button.addEventListener("click", () => {
    if (checkInputs()) {
      stageNum.classList.add("done");
      closePopUp();
      changeStep("next");
    }
  });
});

function checkInputs() {
  // trim to remove the whitespaces
  const fNameValue = fName.value.trim();
  const emailValue = email.value.trim();
  const pnumValue = pnum.value.trim();
  const dateValue = date.value.trim();

  let check = 0;

  if (fNameValue.length < 2) {
    setErrorFor(fName);
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
      setErrorFor(email);
    }
  }
  if (check == 2) {
    if (pnumValue.length == 9) {
      setSuccessFor(pnum);
      check++;
    } else {
      emailPop.classList.remove("valid");
      pnumPop.classList.add("valid");
      setErrorFor(pnum);
    }
  }
  if (check == 3) {
    if (!dateValue) {
      pnumPop.classList.remove("valid");
      datePop.classList.add("valid");
      setErrorFor(date);
    } else {
      setSuccessFor(date);
      check++;
    }
    if (check == 4) {
      datePop.classList.remove("valid");
      return true;
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

function closePopUp() {
  namePop.classList.remove("valid");
  emailPop.classList.remove("valid");
  pnumPop.classList.remove("valid");
  datePop.classList.remove("valid");
  selectPop.classList.remove("valid");
}
