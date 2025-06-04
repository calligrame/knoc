const logoImage = document.querySelector(".logo");
const nav = document.querySelector("#header");
const navHeight = nav.getBoundingClientRect().height;
let isWhite = false;
// export const updateState = (logoState) => {
//   isWhite = logoState;
//   updateLogo();
// };

// const updateLogo = () => {
//   if (isWhite) {
//     logoImage.classList.add("logo-white");
//   } else {
//     logoImage.classList.remove("logo-white");
//   }
// };

const navColorChange = (flag) => {
  if (flag === "black") {
    $(".parent-item").css("color", "#3a3a3a");
    $("#knoc-logo > img").attr("src", "../images/common/logo-b.png");
    $("#header-left > p").css("color", "#3a3a3a");
  } else {
    $(".parent-item").css("color", "#ffffff");
    $("#knoc-logo > img").attr("src", "../images/common/logo.png");
    $("#header-left > p").css("color", "#ffffff");
  }
};

$(document).ready(function () {
  $(window).on("scroll", function () {
    if (window.scrollY > 80) {
      nav.classList.add("active");
      navColorChange("black");
    } else {
      nav.classList.remove("active");
      navColorChange("white");
    }
  });
  $(".parent-item-title").mouseenter(function (param) {
    console.log("enter");
    if ($(".sub-menu-wrap").hasClass("menu-active")) {
      $(".sub-menu-wrap").removeClass("menu-active");
    }
    $(this).siblings(".sub-menu-wrap").addClass("menu-active");
  });
  $(".parent-item").mouseleave(function () {
    console.log($(".sub-menu-wrap").hasClass("menu-active"));
    if ($(".sub-menu-wrap").hasClass("menu-active")) {
      $(".sub-menu-wrap").removeClass("menu-active");
    }
  });
  $("#header").mouseenter(function () {
    nav.classList.add("active");
    navColorChange("black");
  });
  $("#header").mouseleave(function () {
    nav.classList.remove("active");
    navColorChange("white");
    if ($(".sub-menu-wrap").hasClass("menu-active")) {
      $(".sub-menu-wrap").removeClass("menu-active");
    }
  });
});
