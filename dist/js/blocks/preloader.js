import { disableScroll, enableScroll } from "../helpers.js";

function preloader(tl) {
  const bar = document.getElementById("progress-confirm"),
    preloader = document.getElementById("preloader"),
    wrapp = document.querySelector(".wrapp");
  let id,
    width = 0;

  disableScroll();

  id = setInterval(() => {
    if (width >= 100) {
      clearInterval(id);
      preloader.classList.add("preloader_hide");
      enableScroll();
      wrapp.style.visibility = "visible";
      tl.play();
    } else {
      width++;
      bar.style.width = width + "%";
      document.getElementById("percent").innerHTML = width + "%";
    }
  }, 20);
}

export default preloader;
