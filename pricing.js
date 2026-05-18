const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    themeToggle.innerHTML = "☀️";
  }
  else{
    themeToggle.innerHTML = "🌙";
  }

});


/* RTL */

const rtlToggle = document.getElementById("rtl-toggle");

rtlToggle.addEventListener("click", () => {

  if(document.body.getAttribute("dir") === "rtl"){
    document.body.setAttribute("dir", "ltr");
  }
  else{
    document.body.setAttribute("dir", "rtl");
  }

});


/* HAMBURGER */

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("active");

  if(nav.classList.contains("active")){
    hamburger.innerHTML = "✖";
  }
  else{
    hamburger.innerHTML = "☰";
  }

});


/* MOBILE DROPDOWN */

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");

dropBtn.addEventListener("click", (e) => {

  // Prevent link opening
  e.preventDefault();

  // Toggle dropdown
  dropdown.classList.toggle("active");

});