gsap.registerPlugin(ScrollTrigger);

// 헤더 로드
$("#header").load("../nav.html", function () {
  document.getElementById("header").classList.add("fixed");
});

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;

const panels = gsap.utils.toArray("#panels-container .panel");
let sections = gsap.utils.toArray(".panel");

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

// let scrollTween = gsap.to(panels, {
//   xPercent: -100 * (panels.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#panels-container",
//     start: "top top",
//     end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
//     pin: true,
//     scrub: true,
//     invalidateOnRefresh: true,
//   },
// });
/* Panels */

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  },
  "(max-width: 767px)": function () {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  },
});
// 사이드 버튼 메뉴 띄우기
const panelsContainer2 = document.querySelector(".container");
const windowH = panelsContainer2.getBoundingClientRect();
const Bottomoffset = windowH.width;
const duration1 = 1;
$(window).scroll(function () {
  if ($(this).scrollTop() > Bottomoffset) {
    $(".sidebtn-wrap").stop().fadeIn(duration1);
  } else {
    $(".sidebtn-wrap").stop().fadeOut(duration1);
  }
});
// 맨 위로
$("#btn-top").click(function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 1500);
  return false;
});
