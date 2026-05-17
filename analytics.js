// ======================= analytics.js =======================

// DARK MODE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    themeToggle.innerHTML = "☀️";

  } else {

    themeToggle.innerHTML = "🌙";

  }

});

// RTL MODE

const rtlToggle = document.getElementById("rtl-toggle");

rtlToggle.addEventListener("click", () => {

  document.body.classList.toggle("rtl");

});
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("active");

  // Toggle icon
  if(nav.classList.contains("active")){
    hamburger.innerHTML = "✖";
  }
  else{
    hamburger.innerHTML = "☰";
  }

});