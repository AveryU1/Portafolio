let icon = document.querySelector(".icon");
icon.addEventListener("click", e => {
  let target = e.target;
  target.classList.toggle("active");
});
