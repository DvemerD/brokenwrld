function packs(tl) {
  gsap.from(".packs .title_section", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5,
    },
    xPercent: -50,
    opacity: 0.5,
  });

  gsap.from(".packs .title-line", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: 50,
  });

  gsap.from(".packs .pack:first-of-type", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1,
    },
    x: "-70%",
    opacity: 0,
    duration: 1,
  });

  gsap.from(".packs .pack:last-of-type", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1,
    },
    x: "70%",
    opacity: 0,
    duration: 1,
  });
}

export default packs;
