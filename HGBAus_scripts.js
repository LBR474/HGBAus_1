const button = document.getElementById("brandButton");
const menu = document.getElementById("brandMenu");
const hero = document.querySelector(".hero-content"); // target the whole hero section

const showMenu = () => {
  gsap.to(menu, {
    opacity: 1,
    duration: 0.3,
    pointerEvents: "auto",
    ease: "power2.out",
  });
};

const hideMenu = () => {
  gsap.to(menu, {
    opacity: 0,
    duration: 0.3,
    pointerEvents: "none",
    ease: "power2.in",
  });
};

// show menu when mouse enters hero
hero.addEventListener("mouseenter", showMenu);
// hide menu when mouse leaves hero
hero.addEventListener("mouseleave", hideMenu);
