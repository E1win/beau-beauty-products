"use strict";

// VARIABLES
const informationCards = document.querySelectorAll(".information__card");

// FUNCTIONS
const toggleInformationCard = function (evt) {
  let card = evt.currentTarget;
  card.classList.toggle("information__card-open");
};

const keyDownInformationCardHandler = function (evt) {
  if (evt.code === "Enter") {
    toggleInformationCard(evt);
  }
};

// EVENT LISTENERS
informationCards.forEach((element) => {
  element.addEventListener("click", toggleInformationCard);
  element.addEventListener("keydown", keyDownInformationCardHandler);
});
