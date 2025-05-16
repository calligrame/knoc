# 공통 스크립트 및 헤더 사용 가이드

이 문서는 웹사이트의 공통 스크립트 및 헤더 파일을 효율적으로 사용하는 방법에 대한 가이드입니다.

## 1. 개요

웹사이트의 여러 페이지에서 동일한 스크립트와 스타일시트를 반복적으로 포함시키는 것은 비효율적입니다. 이를 개선하기 위해 공통 헤더 파일과 스크립트 파일을 만들었습니다.

## 2. 파일 구조

- `common/header.html`: 모든 페이지에서 공통으로 사용하는 메타 태그, 스타일시트, 스크립트 링크를 포함
- `common/js/common.js`: 모든 페이지에서 공통으로 사용하는 JavaScript 함수
- `common/js/include.js`: 클라이언트 사이드에서 HTML 파일을 포함시키는 기능을 제공하는 스크립트
- `.htaccess`: 서버 사이드 인클루드(SSI)를 활성화하는 설정 파일

## 3. 사용 방법

### 3.1. 서버 사이드 인클루드(SSI) 방식 (권장)

Apache 서버에서 SSI가 활성화된 경우 다음과 같이 사용할 수 있습니다:

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- 공통 헤더 파일 포함 -->
    <!--#include virtual="../common/header.html" -->
    <title>페이지 제목</title>
  </head>
  <body>
    <!-- 페이지 내용 -->
  </body>
</html>
```

### 3.2. PHP 방식

PHP를 사용하는 서버에서는 다음과 같이 사용할 수 있습니다:

```php
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- 공통 헤더 파일 포함 (PHP 방식) -->
    <?php include('../common/header.html'); ?>
    <title>페이지 제목</title>
  </head>
  <body>
    <!-- 페이지 내용 -->
  </body>
</html>
```

### 3.3. JavaScript 방식

서버 사이드 인클루드가 불가능한 환경에서는 JavaScript를 사용하여 HTML 파일을 포함시킬 수 있습니다:

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>페이지 제목</title>
    
    <!-- 공통 헤더 포함을 위한 스크립트 -->
    <script defer src="../common/js/include.js"></script>
    
    <!-- 공통 헤더 요소 (JavaScript로 내용이 채워짐) -->
    <div id="common-header" include-html="../common/header.html"></div>
  </head>
  <body>
    <!-- 페이지 내용 -->
  </body>
</html>
```

## 4. 주의사항

- SSI 방식을 사용하려면 서버에서 SSI가 활성화되어 있어야 합니다.
- PHP 방식을 사용하려면 서버에서 PHP가 활성화되어 있어야 합니다.
- JavaScript 방식은 클라이언트 사이드에서 동작하므로 페이지 로딩 시 약간의 지연이 발생할 수 있습니다.
- 상대 경로를 사용할 때는 현재 페이지의 위치를 기준으로 경로를 지정해야 합니다.

## 5. 공통 스크립트 확장하기

`common.js` 파일에 새로운 공통 함수를 추가하여 확장할 수 있습니다. 이 파일은 모든 페이지에서 자동으로 로드됩니다.
