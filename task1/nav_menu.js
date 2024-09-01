const navbar = document.querySelector(".navbar");
let scrolled = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && !scrolled) {
    navbar.classList.add("scrolled");
    scrolled = true;
  } else if (window.scrollY === 0 && scrolled) {
    navbar.classList.remove("scrolled");
    scrolled = false;
  }
});
