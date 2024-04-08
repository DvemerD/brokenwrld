function promo(tl) {
  tl.fromTo(
    ".promo__logo",
    { opacity: 0, xPercent: -80 },
    { opacity: 1, xPercent: 0, duration: 0.8 },
    1
  );

  tl.fromTo(
    ".promo__title",
    { opacity: 0, xPercent: -80 },
    { opacity: 1, xPercent: 0, duration: 1.5 },
    1.3
  );

  tl.fromTo(
    ".promo__subtitle",
    { opacity: 0, xPercent: -80 },
    { opacity: 1, xPercent: 0, duration: 1.5 },
    1.5
  );

  tl.fromTo(
    ".promo__arrow",
    { opacity: 0, xPercent: -50 },
    { opacity: 1, xPercent: 0, duration: 1.5 },
    1.8
  );

  gsap.to(".promo__bg-img", {
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      scrub: 1.9,
    },
    scale: 1.1,
    opacity: 0.4,
  });

  gsap.to(".promo__wrapper", {
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      scrub: 1.9,
    },
    yPercent: -50,
    opacity: 0,
  });
}

export default promo;
