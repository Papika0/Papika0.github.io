var selectField = document.getElementById("selectField");
var selectText = document.getElementById("character_name");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon1 = document.getElementById("selector-arrow1");
var arrowIcon2 = document.getElementById("selector-arrow2");

var selectField1 = document.getElementById("selectField1");
var selectText1 = document.getElementById("experience_level");
var options1 = document.getElementsByClassName("options1");
var list1 = document.getElementById("list1");

selectField1.onclick = function () {
  list1.classList.toggle("hide");
  arrowIcon1.classList.toggle("rotate");
};
for (option of options1) {
  option.onclick = function () {
    selectText1.innerHTML = this.textContent.trim();
    list1.classList.toggle("hide");
    arrowIcon1.classList.toggle("rotate");
    sessionStorage.setItem("experience_level", this.textContent.trim());
  };
}

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon2.classList.toggle("rotate");
  document.getElementById("selection-2").classList.toggle("shown");
};

window.onload = (event) => {};

function setInput(filed, value) {
  sessionStorage.setItem(filed, value);
}

function getInput(filed) {
  console.log("hello");
  sessionStorage.getItem(filed);
}
