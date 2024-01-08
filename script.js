// Implementations for hamburger working
hamburgerBtn = document.querySelector(".responsive-hamburger");
mobileMenu = document.querySelector(".hamburger-navbar");

hero_section = document.querySelector(".hero-section");
section_header = document.querySelector(".section-header");

hamburgerBtn.addEventListener("click", () => {
  // console.log("helloWorld");
  mobileMenu.classList.toggle("displayNone");
  mobileMenu.classList.toggle("animation-come-in-bottom");
});

// Sticky Navigation Bar Implemetation

// We cannot use that method to make our navbar sticky because it changes due to viewport according to device
// window.addEventListener('scroll',function(){
//     console.log(window.scrollY)
//     if(window.scrollY > 20){
//         section_header.style.position="sticky"
//     }
// })

// Smooth Scrolling for all types of navigations
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroling back to top when click on logo of site
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links when click on any btn or nav menu
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation after click on nav link
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky Navigation bar
// The Element which we want to observe Here (sectionHeroEl)
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      section_header.classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      section_header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari Version
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexboox-gap");
}

checkFlexGap();
