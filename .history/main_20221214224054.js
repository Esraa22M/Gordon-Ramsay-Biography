'use strict';
/*----------primary nav------------*/
const mainNavContainer = document.querySelector(".primary-nav-container");
const hamburgerContainer = document.querySelector("#header__primary-nav");
const hamburger = document.querySelector(".header__primary-nav--hamburger");
const links = document.querySelectorAll(".header__primary-nav-links li");
let handleMainNavbarExpantion = function () {
  hamburgerContainer.classList.contains("main__nav--position")
    ? mainNavContainer.setAttribute("aria-expanded", false)
    : mainNavContainer.setAttribute("aria-expanded", true);
  hamburgerContainer.classList.toggle("main__nav--position");
  links.forEach((link, i) => {
    link.style.transition = `all 0.5s ease-in-out ${i * 0.2 + 0.2}s`;
    link.classList.toggle("fade");
  });
};
hamburger.addEventListener("click", handleMainNavbarExpantion);
///////////////////////////////////////
// Button scrolling
const readMoreButton = document.querySelector(".show-case__content--link");
console.log(readMoreButton)
const aboutChefSection = document.querySelector("#about-chef");
readMoreButton.addEventListener('click' , function(e){
    e.preventDefault();
  aboutChefSection.scrollIntoView({
    behavior:'smooth'
  })
})
////////////////////////////////////////////
/////Sticky Navbar scrolling behaviour//////
const observerCallBack = function(){

}
const observerOptions = {
  
}
const observer = new IntersectionObserver();
observer.observe(aboutChefSection);