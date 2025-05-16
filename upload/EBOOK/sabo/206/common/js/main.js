// gsap.registerPlugin(ScrollTrigger);

// 헤더 로드
$("#header").load("../common/nav.html", function () {
  document.getElementById("header").classList.add("fixed");
});

$(window).on("load", function () {
  $(".main-slide-container").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    speed: 2000,
  });
});

// const panelsContainer2 = document.querySelector(".container");
// const windowH = panelsContainer2.getBoundingClientRect();
// const Bottomoffset = windowH.width;
const duration1 = 1;
$(window).scroll(function () {});
// 맨 위로
$("#btn-top").click(function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 1500);
  return false;
});

// 섹션 이동 버튼
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
  console.log($(`#flag${index}`));
  $("html, body")
    .stop()
    .animate({ scrollTop: $(`#flag${index}`).offset().top }, 1000);
  return false;
});

// lazy loading
const options = {
  root: null,
  rootMargin: "50%",
  threshold: 0,
};
const lazyIO = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
}, options);

const images = document.querySelectorAll(".lazy");
images.forEach((el) => {
  lazyIO.observe(el);
});
