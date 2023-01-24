
// Header Mobile Menu Toggle 

const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".primary-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".primary-menu").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// Blog Pagination

