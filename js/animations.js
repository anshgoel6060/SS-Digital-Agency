document.addEventListener("DOMContentLoaded", function () {

  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* =========================
     HOME PAGE ANIMATIONS
  ========================= */
  if (document.querySelector(".hero-text")) {

    gsap.from(".hero-text", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".hero-glow", {
      opacity: 0,
      scale: 0.6,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out"
    });
  }

  /* =========================
     SERVICES PAGE ANIMATIONS
  ========================= */
if (document.querySelector(".services-section")) {

  gsap.fromTo(
    ".service-card",
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

}
}); 