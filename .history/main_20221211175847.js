const hamburgerContainer = document.querySelector(" #header__primary-nav");
const hamburger = document.querySelector(".header__primary-nav--hamburger");
const links = document.querySelector(".header__primary-nav-links li");
hamburger.addEventListener('click', function(){
  hamburgerContainer.classList.toggle("main__nav--position");
  console.log(links)  
})