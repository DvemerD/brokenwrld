function whitepapers(tl) {
  gsap.from(".whitepapers .title_mini", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.7,
    },
    y: "70%",
    opacity: 0,
    duration: 1,
  });

  gsap.from(".whitepapers__subtitle", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5,
    },
    y: "-70%",
    opacity: 0,
    duration: 1,
  });

  gsap.from(".whitepapers__wrapper-btn", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5,
    },
    y: "-70%",
    opacity: 0,
    duration: 1,
  });

  gsap.from(".whitepapers__img", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5,
    },
    y: "50%",
    opacity: 0,
    duration: 1.5,
  });
}

export default whitepapers;
