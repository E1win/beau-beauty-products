"use strict";

// VARIABLES
const informationCards = document.querySelectorAll(".information__card");

// FUNCTIONS
const toggleInformationCard = function (evt) {
  let card = evt.currentTarget;

  card.classList.toggle("information__card-open");
};

// EVENT LISTENERS
informationCards.forEach((element) => {
  element.addEventListener("click", toggleInformationCard);
});
