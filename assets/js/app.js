const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");

function addActive() {
    navigation.classList.toggle("navigation-active")
}

hamburger.addEventListener("click", addActive);


var modal = document.querySelector(".modal");

var btn = document.querySelector(".create-program-btn");

var span = document.querySelector(".close");


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}