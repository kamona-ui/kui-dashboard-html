(() => {
  // src/assets/js/landing-page.js
  document.addEventListener("alpine:init", () => {
    let toast = new Toasty({
      autoClose: false
    });
    gsap.to("#loading .logo", { y: -50, opacity: 0, duration: 0.5 });
    gsap.to("#loading .left", { rotateY: 45, x: "-130%", duration: 1, delay: 0.6 });
    gsap.to("#loading .right", {
      rotateY: -45,
      x: "130%",
      duration: 1,
      delay: 0.6,
      onComplete: () => {
        document.getElementById("loading")?.remove();
      }
    });
    gsap.from(["#mobile2Showcase", "#mobile1Showcase"], {
      rotateZ: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 2
    });
    gsap.from(["#desktopShowcase"], {
      rotateZ: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 2,
      onComplete: () => {
        toast.info("This template is not finished yet and still in design phase. We are building it in public.");
      }
    });
  });
})();
