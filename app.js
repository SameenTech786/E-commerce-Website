// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// CART COUNT
let count = 0;
const cartCount = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});