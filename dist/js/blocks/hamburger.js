import { disableScroll, enableScroll } from "../modules/helpers.js";

function hamburger() {
  const hamburgerBtn = document.querySelector(".hamburger"),
    overlay = document.querySelector(".overlay"),
    overlayBgr = document.querySelector(".overlay__bgr"),
    menu = document.querySelector(".header__navigation"),
    menuLink = document.querySelectorAll(".header__menu-link");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("hamburger_active");
    overlay.classList.toggle("overlay_active");
    overlayBgr.classList.toggle("overlay__bgr_active");
    menu.classList.toggle("header__navigation_active");

    if (hamburgerBtn.classList.contains("hamburger_active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  menuLink.forEach((item) => {
    item.addEventListener("click", () => {
      hamburgerBtn.classList.remove("hamburger_active");
      overlay.classList.remove("overlay_active");
      overlayBgr.classList.remove("overlay__bgr_active");
      menu.classList.remove("header__navigation_active");

      enableScroll();
    });
  });
}

export default hamburger;
