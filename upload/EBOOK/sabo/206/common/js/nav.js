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

const textColorChange = () => {};

$(document).ready(function () {
  $(window).on("scroll", function () {
    if (window.scrollY > 80) {
      nav.classList.add("active");
      $(".parent-item").css("color", "#3a3a3a");
    } else {
      nav.classList.remove("active");
      $(".parent-item").css("color", "#ffffff");
    }
  });

  $(".nav-parent-wrap").mouseenter(function () {
    $("#full-nav").addClass("active");
    $(".parent-item").css("color", "#3a3a3a");
  });
  $("#full-nav").mouseleave(function () {
    $("#full-nav").removeClass("active");
    // console.log($("#header").hasClass("active"));
    if ($("#header").is(".fixed .active")) {
      console.log("true");
      $(".parent-item").css("color", "#3a3a3a");
      return;
    } else if ($("#header").is(".active")) {
      console.log("true");
      $(".parent-item").css("color", "#3a3a3a");
      return;
    } else {
      console.log("false");
      $(".parent-item").css("color", "#ffffff");
    }
  });
});
