// gsap.registerPlugin(ScrollTrigger);

// 헤더 로드
$("#header").load("../nav2.html", function () {
  document.getElementById("header").classList.add("fixed");
});

// /* Main navigation */
// let panelsSection = document.querySelector("#panels"),
//   panelsContainer = document.querySelector("#panels-container"),
//   tween;

// let scrollFunc = ScrollTrigger.getScrollFunc(window);

// $(window).on("load", function () {
//   // lenis 플러그인 : 마우스 부드럽게 작동
//   const lenis = new Lenis();
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
//   gsap.ticker.lagSmoothing(0);
// // });

$(".insights-wrap").slick({
  centerMode: true,
  slidesToShow: 3,
  arrows: true,
  infinite: true,
  prevArrow: $("#aro1_prev"),
  nextArrow: $("#aro1_next"),
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
});
