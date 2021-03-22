const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  // links.classList.toggle("active");
  // navbar.classList.toggle("active");
  // hamburger.classList.toggle("active");
  if (links.classList.contains("active")) {
    links.classList.remove("active");
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  } else {
    links.classList.add("active");
    navbar.classList.add("active");
    hamburger.classList.add("active");
  }
});
