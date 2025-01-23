const menuItems = document.querySelectorAll(".side-menu-item");
const targets = document.querySelectorAll(".content-title");
const popBox = document.getElementById("pop");

const options = {
  root: null,
  rootMain: "0px",
  threshold: 1,
};

const activeMenu = (target) => {
  menuItems.forEach((item) => {
    const data = item.getAttribute("data-target");
    if (data === target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeMenu(entry.target.id);
    }
  });
};

const io = new IntersectionObserver(observerCallback, options);
targets.forEach((target) => {
  io.observe(target);
});

$(document).ready(function () {
  // 헤더 로드
  $("#header").load("../nav.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
  // 최상위 이동
  $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  $(".side-menu-item").on("click", function () {
    const data = this.getAttribute("data-target");
    document.getElementById(data).scrollIntoView({
      behavior: "smooth",
    });
  });

  $(".card").click(function () {
    $(this).toggleClass("flipped");
  });

  // 사이드 버튼 메뉴 띄우기
  const windowH = $(window).height();
  const Bottomoffset = windowH;
  const duration1 = 1;
  $(window).scroll(function () {
    if ($(this).scrollTop() > Bottomoffset) {
      $(".sidebtn-wrap").stop().fadeIn(duration1);
      $(".mob-side-menu-container").stop().fadeIn(duration1);
    } else {
      $(".sidebtn-wrap").stop().fadeOut(duration1);
      $(".mob-side-menu-container").stop().fadeOut(duration1);
    }
  });
  // 맨 위로
  $("#btn-top").click(function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 500);
    return false;
  });
  // 모바일에서 사이드메뉴 띄우기
  $("#btn-content-list").click(function (e) {
    e.preventDefault();
    $("#btn-content-list").toggleClass("open");
    $(".mob-side-menu-container").toggleClass("open");
  });
  $(".mob-side-menu-item").click(function (e) {
    $(".mob-side-menu-container").removeClass("open");
  });

  //주석 팝업
  const popCaption = (posX, posY, index) => {
    const height = popBox.getBoundingClientRect().height;
    popBox.style.left = posX + "px";
    popBox.style.top = posY - height + "px";
    $("#pop > p").text($(`.caption-text-${index}`).text());
  };
  $(".annotation").hover(function (e) {
    $("#pop").toggleClass("active");
    const index = $(this).data("caption-index");
    popCaption(e.pageX, e.pageY, index);
  });

  // 현재 페이지 링크 복사
  $("#btn-share").on("click", function () {
    let currentLink = window.location.href;
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = currentLink;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.");
    // showToast("URL이 복사되었습니다.");
  });
});
