const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .GetS-Button,.next-btn");
const form = document.querySelector("form");
const prevBtn = document.querySelectorAll("form .back-btn");

let nameG = document.getElementById("Name");
let email = document.getElementById("Email");
let pnum = document.getElementById("Pnumber");
let date = document.getElementById("Date");

nameG.addEventListener("input", validateInput);
email.addEventListener("input", validateInput);
pnum.addEventListener("input", validateInput);
date.addEventListener("input", validateInput);

function validateInput(e) {
  if (e.target.id == "Name") {
    if (e.target.value.length >= 2) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }
  let emailVal = "@redberry.ge";
  if (e.target.id == "Email") {
    if (e.target.value.includes(emailVal)) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }
  if (e.target.id == "Pnumber") {
    if (e.target.value.length == 9) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }
  if (e.target.id == "Date") {
    console.log(!e.target.date);
    if (!e.target.date) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }
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
