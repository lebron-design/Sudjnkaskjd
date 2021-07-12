"use strict";
const openNav = document.querySelector(".menu");
const openingNav = document.querySelector(".nav-content");
const closeNav = document.querySelector(".close-svg");

openNav.addEventListener("click", function () {
  openingNav.classList.remove("hidden");
});

closeNav.addEventListener("click", function () {
  openingNav.classList.add("hidden");
});
