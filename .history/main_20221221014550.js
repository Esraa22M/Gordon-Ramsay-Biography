"use strict";
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
const aboutChefSection = document.querySelector("#about-chef");
readMoreButton.addEventListener("click", function (e) {
  e.preventDefault();
  aboutChefSection.scrollIntoView({
    behavior: "smooth",
  });
});
////////////////////////////////////////////
/////Sticky Navbar scrolling behaviour///
const showCase = document.querySelector("#show-case");
const headerPrimaryNav = document.querySelector("#header__primary-nav");
const headerPrimaryNavLink = document.querySelectorAll(
  ".header__primary-nav--nav-link"
);
const stuckyObserverCallBack = function (enteries, observer) {
  const [entry] = enteries;
  //.navbar__scroll--style
  if (!entry.isIntersecting) {
    headerPrimaryNav.classList.add("navbar__scroll--style");
    headerPrimaryNavLink.forEach((link) =>
      link.classList.add("navbar__scroll--style-link")
    );
  } else {
    headerPrimaryNav.classList.remove("navbar__scroll--style");
    headerPrimaryNavLink.forEach((link) =>
      link.classList.remove("navbar__scroll--style-link")
    );
  }
};
const observerOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(
  stuckyObserverCallBack,
  observerOptions
);
observer.observe(showCase);
/*tabs container */
const work = document.querySelector("#work");
/*tabs */
const tabs = document.querySelectorAll(".work__card img");
work.addEventListener("mouseover", function (e) {
  const clicked = e.target;
 if (clicked.classList.value !== "recipe__image" || clicked.closest('section').classList[0]=='recipe'){
  console.log(clicked)
   tabs.forEach((tab) => {
      tab.classList.remove("hide-img");
   });
 }
   if (clicked.classList.value === "recipe__image") {
    //  tabs.forEach((tab) => {
    //    tab !== clicked && tab.classList.remove("hide-img");
    //  });
     clicked.classList.add("hide-img");
     clicked.nextElementSibling.classList.add("show-recipe");
   }
});