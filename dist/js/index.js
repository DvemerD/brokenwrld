import header from "./blocks/header.js";
import history from "./blocks/history.js";
import hamburger from "./blocks/humburger.js";
import packs from "./blocks/packs.js";
import preloader from "./blocks/preloader.js";
import promo from "./blocks/promo.js";
import roadmap from "./blocks/roadmap.js";
import whitepapers from "./blocks/whitepapers.js";

window.addEventListener("DOMContentLoaded", () => {
  const screenWidth = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    paused: "true",
  });

  if (screenWidth > 768) {
    luxy.init();

    header(tl);
    promo(tl);
    packs(tl);
    whitepapers(tl);
    history(tl);
    roadmap(tl);
  }

  preloader(tl);
  hamburger();
});
