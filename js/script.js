"use strict";

const navMobile = document.getElementById("navbar__mobile");
const navMobileContent = document.getElementById("navbar__mobile-content");

const btnOpenMobileNav = document.getElementById("navbar__mobile-button-open");
const btnCloseMobileNav = document.getElementById(
  "navbar__mobile-button-close"
);

// FUNCTIONS

const fnNavOpen = function () {
  navMobile.classList.add("navbar__mobile-opened");
};

const fnNavClose = function () {
  navMobile.classList.remove("navbar__mobile-opened");
};

// EVENT LISTENERS

btnOpenMobileNav.addEventListener("click", fnNavOpen);
btnCloseMobileNav.addEventListener("click", fnNavClose);
