// include.js - 클라이언트 사이드에서 HTML 파일을 포함하는 기능

/**
 * HTML 파일을 특정 요소에 포함시키는 함수
 * @param {string} url - 포함할 HTML 파일의 URL
 * @param {string} elementId - HTML을 삽입할 요소의 ID
 */
function includeHTML(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      element.innerHTML = html;
      
      // 스크립트 태그 실행
      const scripts = element.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const script = document.createElement('script');
        script.textContent = scripts[i].textContent;
        if (scripts[i].src) script.src = scripts[i].src;
        document.head.appendChild(script);
        document.head.removeChild(script);
      }
    })
    .catch(error => {
      console.error('HTML 포함 중 오류 발생:', error);
    });
}

/**
 * 모든 include-html 속성을 가진 요소를 찾아 HTML을 포함시키는 함수
 */
function includeAllHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(element => {
    const url = element.getAttribute('include-html');
    if (url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(html => {
          element.innerHTML = html;
          element.removeAttribute('include-html');
          
          // 스크립트 태그 실행
          const scripts = element.getElementsByTagName('script');
          for (let i = 0; i < scripts.length; i++) {
            const script = document.createElement('script');
            script.textContent = scripts[i].textContent;
            if (scripts[i].src) script.src = scripts[i].src;
            document.head.appendChild(script);
            document.head.removeChild(script);
          }
        })
        .catch(error => {
          console.error('HTML 포함 중 오류 발생:', error);
        });
    }
  });
}

// 페이지 로드 시 includeAllHTML 함수 실행
document.addEventListener('DOMContentLoaded', includeAllHTML);
