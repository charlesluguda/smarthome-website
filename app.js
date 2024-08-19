// ================================== FAQS SCRIPT =================================== //
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})

//================ MENU TOGGLE SCRIPTS ===========================//
const humburger = document.querySelector(".nav_aside");
const navBar = document.querySelector(".nav_links");

humburger.onclick = function(event) {
  // Toggle between 'nav_links' and 'showlinks'
  if (navBar.classList.contains("nav_links")) {
    navBar.classList.remove("nav_links");
    navBar.classList.add("showlinks");
  } else if (navBar.classList.contains("showlinks")) {
    navBar.classList.remove("showlinks");
    navBar.classList.add("nav_links");
  }

  // Prevent the event from propagating to the document
  event.stopPropagation();
};

// Hide menu when clicking anywhere outside the menu
document.addEventListener("click", function(event) {
  if (navBar.classList.contains("showlinks") && !navBar.contains(event.target) && !humburger.contains(event.target)) {
    navBar.classList.remove("showlinks");
    navBar.classList.add("nav_links");
  }
});

// Hide menu when clicking a link in the menu
const navLinks = document.querySelectorAll(".nav_links a");
navLinks.forEach(link => {
  link.onclick = function() {
    if (navBar.classList.contains("showlinks")) {
      navBar.classList.remove("showlinks");
      navBar.classList.add("nav_links");
    }
  };
});


