gsap.registerPlugin(ScrollTrigger);

// 헤더 로드
$("#header").load("../nav.html", function () {
  document.getElementById("header").classList.add("fixed");
});

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;

let scrollFunc = ScrollTrigger.getScrollFunc(window);

$(window).on("load", function () {
  // lenis 플러그인 : 마우스 부드럽게 작동
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    anticipatePin: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: { min: 0.5, max: 1 },
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});
