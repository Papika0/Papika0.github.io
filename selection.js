var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("selector-arrow");

var selectField1 = document.getElementById("selectField1");
var selectText1 = document.getElementById("selectText1");
var options1 = document.getElementsByClassName("options1");
var list1 = document.getElementById("list1");

selectField1.onclick = function () {
  list1.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (option of options1) {
  option.onclick = function () {
    selectText1.innerHTML = this.textContent;
    list1.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
