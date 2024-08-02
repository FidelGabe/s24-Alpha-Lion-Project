let body = document.getElementsByTagName("body");
body = body[0];

body.style.backgroundColor = "gray";

let proteinNavigationBtn = document.getElementById("btn-protein");
let preworkoutNavigationBtn = document.getElementById("btn-preworkout");
let apparelNavigationBtn = document.getElementById("btn-apparel");

let proteinRow = document.getElementById("protein-row");
let preworkoutRow = document.getElementById("preworkout-row");
let apparelRow = document.getElementById("apparel-row");

proteinNavigationBtn.addEventListener("click", function () {
  proteinRow.classList.replace("d-none", "d-block");
  preworkoutRow.classList.replace("d-block", "d-none");
  apparelRow.classList.replace("d-block", "d-none");
});

preworkoutNavigationBtn.addEventListener("click", function () {
  preworkoutRow.classList.replace("d-none", "d-block");
  proteinRow.classList.replace("d-block", "d-none");
  apparelRow.classList.replace("d-block", "d-none");
});

apparelNavigationBtn.addEventListener("click", function () {
  apparelRow.classList.replace("d-none", "d-block");
  preworkoutRow.classList.replace("d-block", "d-none");
  proteinRow.classList.replace("d-block", "d-none");
});
