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
