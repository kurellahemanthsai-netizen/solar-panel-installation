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


 

  const rtlToggle = document.getElementById("rtl-toggle");

  rtlToggle.addEventListener("click", () => {

    if(document.body.getAttribute("dir") === "rtl"){

      document.body.setAttribute("dir", "ltr");

    }
    else{

      document.body.setAttribute("dir", "rtl");

    }

  });
  const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-menu");
 
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
 
 
/* MOBILE DROPDOWN */
 
const mobileDropdown = document.querySelector(".mobile-dropdown");
 
const mobileDropdownToggle =
document.querySelector(".mobile-dropdown-toggle");
 
mobileDropdownToggle.addEventListener("click", () => {
 
  mobileDropdown.classList.toggle("active");
 
});