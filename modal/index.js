const body = document.getElementsByTagName("body")[0];
const toggle = document.getElementsByClassName("toggle");
const modal = document.querySelector(".modal");

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", () => {
    body.classList.toggle("active");
    modal.classList.toggle("active");
  });
}
