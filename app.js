// ================================== FAQS SCRIPT =================================== //
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})

//================ MENU TOGGLE SCRIPTS ===========================//
humburger = document.querySelector(".toggle-btn");
humburger.onclick = function(){
  navBar = document.querySelector(".nav_links");
  navBar.classList.toggle("showlinks");
}

window.onclick = function(event) {
  if (!humburger.contains(event.target) && !navBar.contains(event.target)) {
      navBar.classList.remove("showlinks");
  }
};

const navLinks = document.querySelectorAll(".nav_links a");
navLinks.forEach(link => {
  link.onclick = function() {
      navBar.classList.remove("showlinks");
  };
});