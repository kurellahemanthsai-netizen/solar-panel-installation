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
 const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const menuIcon = document.getElementById("menu-icon");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("active");

  if(nav.classList.contains("active")){
    menuIcon.innerHTML = "✖";
  }
  else{
    menuIcon.innerHTML = "☰";
  }

});