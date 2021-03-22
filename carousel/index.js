const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".carousel img");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let counter = 0;
const size = 200;

slider.style.transition = "transform 0.4s ease-in-out";

prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) { counter = images.length - 1; }
  slider.style.transform = "translateX(" + (-size * counter) + "px)";
});

next.addEventListener("click", () => {
  counter++;
  if (counter > images.length - 1) { counter = 0; }
  slider.style.transform = "translateX(" + (-size * counter) + "px)";
});
