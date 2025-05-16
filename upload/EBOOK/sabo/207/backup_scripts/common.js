// common.js - 모든 서브페이지에서 공통으로 사용하는 스크립트

// 페이지 로드 시 공통 실행 함수
document.addEventListener('DOMContentLoaded', function() {
  // 헤더 로드
  if (document.getElementById("header")) {
    $("#header").load("../common/nav.html", function () {
      document.getElementById("header").classList.add("fixed");
    });
  }

  // 최상위 이동 버튼 기능
  const topButtons = ["#btn_top", "#side_btn_top", "#btn_top_circle"];
  topButtons.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  });

  // jQuery 버전으로도 동일하게 구현 (기존 코드와의 호환성)
  $(document).ready(function() {
    $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

// 공통 유틸리티 함수들
const commonUtils = {
  // 모바일 디바이스 체크
  isMobile: function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  // 브라우저 체크
  getBrowser: function() {
    const userAgent = navigator.userAgent;
    let browser = "unknown";
    
    if (userAgent.indexOf("Chrome") > -1) browser = "chrome";
    else if (userAgent.indexOf("Safari") > -1) browser = "safari";
    else if (userAgent.indexOf("Firefox") > -1) browser = "firefox";
    else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) browser = "ie";
    else if (userAgent.indexOf("Edge") > -1) browser = "edge";
    
    return browser;
  },
  
  // 디바이스 방향 체크
  isLandscape: function() {
    return window.innerWidth > window.innerHeight;
  }
};

// 공통 애니메이션 함수들 (GSAP 활용)
const commonAnimations = {
  fadeIn: function(element, duration = 0.5, delay = 0) {
    if (typeof gsap !== 'undefined' && element) {
      gsap.fromTo(element, 
        { opacity: 0 }, 
        { opacity: 1, duration: duration, delay: delay }
      );
    }
  },
  
  fadeOut: function(element, duration = 0.5, delay = 0) {
    if (typeof gsap !== 'undefined' && element) {
      gsap.fromTo(element, 
        { opacity: 1 }, 
        { opacity: 0, duration: duration, delay: delay }
      );
    }
  }
};
