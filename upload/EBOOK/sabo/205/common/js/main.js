<<<<<<< HEAD
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
$(window).scroll(function () {});
// 맨 위로
$("#btn-top").click(function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 1500);
  return false;
});

let currentElement = null;

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      currentElement = entry.target;
    }
  });
});

const flags = document.querySelectorAll(".move-flag");
flags.forEach((el) => {
  io.observe(el);
});

$("#btn-next-section").click(function (e) {
  e.preventDefault();
  let index = Number(currentElement.dataset.index) + 1;
  if (index >= flags.length) {
    index = flags.length;
  }
  console.log(`#flag${index}`);
  console.log($(`#flag${index}`));
  $("html, body")
    .stop()
    .animate({ scrollTop: $(`#flag${index}`).offset().top }, 1000);
  return false;
});
=======
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
$(window).scroll(function () {});
// 맨 위로
$("#btn-top").click(function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 1500);
  return false;
});

let currentElement = null;

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      currentElement = entry.target;
    }
  });
});

const flags = document.querySelectorAll(".move-flag");
flags.forEach((el) => {
  io.observe(el);
});

$("#btn-next-section").click(function (e) {
  e.preventDefault();
  let index = Number(currentElement.dataset.index) + 1;
  if (index >= flags.length) {
    index = flags.length;
  }
  console.log(`#flag${index}`);
  console.log($(`#flag${index}`));
  $("html, body")
    .stop()
    .animate({ scrollTop: $(`#flag${index}`).offset().top }, 1000);
  return false;
});
>>>>>>> 9e93d89b4a60728fec32a096490f78eea34d0fb1
