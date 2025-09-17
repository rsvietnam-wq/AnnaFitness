document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".sidebar nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
