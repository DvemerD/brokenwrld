import { disableScroll, enableScroll } from "../helpers.js";

function hamburger() {
  const hamburgerBtn = document.querySelector(".hamburger"),
    overlay = document.querySelector(".overlay"),
    overlayBgr = document.querySelector(".overlay__bgr"),
    menu = document.querySelector(".header__navigation");

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
}

export default hamburger;
