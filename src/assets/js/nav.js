// Navigation toggle
const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector(".cs-toggle");
const ul = document.querySelector(".nav-ul-wrapper");

// add aria expanded properties*

// remove active class when clicking on a mobile link
window.addEventListener("click", (e) => {
     if (e.target.matches("a")) {
          menuToggle.classList.remove("cs-active");
          navigation.classList.remove("cs-active");
     }
});

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");
});

// function to set aria
function setAria() {
     const isExpanded = ul.getAttribute("aria-expanded")

     if (isExpanded) {
          ul.setAttribute("aria-expanded", "false");
     } else {
          ul.setAttribute("aria-expanded", "true");
     }
};
