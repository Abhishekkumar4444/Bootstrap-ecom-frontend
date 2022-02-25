const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const btn = document.querySelector("#button");
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function check() {
  if (email.value.match(regex)) {
    email.style.borderColor = "#27ae60";
    btn.style.backgroundColor = "#27ae60";
    icon1.style.display = "none";
    icon2.style.display = "block";
  } else {
    email.style.borderColor = "#e74c3c";
    btn.style.backgroundColor = "";
    icon1.style.display = "block";
    icon2.style.display = "none";
  }
  if (email.value == "") {
    email.style.borderColor = "lightgrey";
    btn.style.backgroundColor = "";
    icon1.style.display = "none";
    icon2.style.display = "none";
  }
}

// <---------------------add2cart anima--------------------------->

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}

// ----------filter by search in input------------------------

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.querySelectorAll(".li");
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll(".a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// <----------------filter js------------------------->

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
