/*----------primary nav------------*/
const hamburgerContainer = document.querySelector(".primary-nav-container");
const hamburger = document.querySelector(".header__primary-nav--hamburger");
const links = document.querySelectorAll(".header__primary-nav-links li");
hamburger.addEventListener('click', function(){
  hamburgerContainer.classList.toggle("main__nav--position");
  links.forEach((link,i)=>{
    link.style.transition = `all 0.5s ease-in-out ${i*0.2+0.2}s`;
    link.classList.toggle('fade')
  })
})