function roadmap(tl) {
  gsap.from(".road-map .title_section", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5,
    },
    xPercent: -50,
    opacity: 0.5,
  });

  gsap.from(".road-map .title-line", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: 50,
  });

  gsap.from(".road-map__item", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom-=50% bottom",
      scrub: 1.9,
    },
    y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    opacity: 0,
  });

  gsap.from(".road-map__footer .road-map__char:first-of-type", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5,
    },
    x: "-70%",
    opacity: 0,
  });

  gsap.from(".road-map__footer .road-map__char:last-of-type", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5,
    },
    x: "70%",
    opacity: 0,
  });

  gsap.from(".road-map__footer .road-map__logo", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5,
    },
    opacity: 0,
    scale: 0.6,
  });

  gsap.from(".road-map__links", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9,
    },
    yPercent: 50,
    opacity: 0,
  });
}

export default roadmap;
