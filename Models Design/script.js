"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", openModal);
}

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //   console.log("A key was pressed");
  //   console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //   console.log('escape was pressed')
    closeModal();
  }
});
