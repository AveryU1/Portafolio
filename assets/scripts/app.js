let icon = document.querySelector(".icon");
let navBar = document.querySelector(".nav-bar-items");
icon.addEventListener("click", e => {
  let target = e.target;
  target.classList.toggle("active");
  navBar.classList.toggle("menu-active");
});
