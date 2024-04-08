function history(tl) {
  gsap.from(".history .title_section", {
    scrollTrigger: {
      trigger: ".history",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5,
    },
    xPercent: -50,
    opacity: 0.5,
  });

  gsap.from(".history .title-line", {
    scrollTrigger: {
      trigger: ".history",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: 50,
  });

  gsap.from(".history .history__img", {
    scrollTrigger: {
      trigger: ".history",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9,
    },
    opacity: 0,
  });

  gsap.from(".history .history__frame", {
    scrollTrigger: {
      trigger: ".history",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9,
    },
    opacity: 0,
    yPercent: 80,
  });
}

export default history;
