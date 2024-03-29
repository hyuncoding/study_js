# JavaScript
> 웹개발 및 front-end 강의에서 공부한 JavaScript 관련 내용입니다.

<hr/>

# DAY 01

## 1-1. 자바스크립트(Javascript)  

   1. 퍼즐 조각처럼 코드 형태로 HTML 페이지에 내장된다.  
   2. 컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.  
      ※ 개발이 발전됨에 따라 컴파일 과정이 가능해졌으며, Node.js로 서버환경을 구축한다.  

## 1-2. 웹 페이지에서 자바스크립트의 역할  

> 웹 페이지 3가지(HTML, CSS, JS) 코드가 결합되어 작성된다.  
> 자바스크립트는 사용자의 입력을 처리하거나 웹 애플리케이션을 작성하는 등  
  웹 페이지의 동적 제어에 사용된다.

   - 사용자의 입력 및 연산  
   - 웹 페이지 내용 및 모양의 동적 제어  
   - 브라우저 제어  
   - 웹 서버와의 통신  
   - 웹 애플리케이션 작성  

## 1-3. JS 환경 구축  

   - Node.js 설치  
     https://nodejs.org/ko/download/

## 1-4. 자바스크립트를 작성할 수 있는 위치  

   1. HTML 태그의 이벤트 리스너 속성에 작성  
      - HTML 태그에는 마우스가 클릭되거나 키보드의 키가 입력되는 등의 이벤트(반응)가 발생할 때  
        처리하는 코드를 등록하는 리스너 속성이 있다.

   2. <script></script>태그 안에서 작성  
      - <head></head>, <body></body>, body태그 밖 등 어디든 들어갈 수 있다.  
      - 웹 페이지 내에서 여러 번 작성할 수 있다.  

   3. .js 자바스크립트 파일에 작성  
      - 자바스크립트 코드를 확장자가 .js인 별도의 파일로 저장하고,
        
            <script src=".js경로"></script>

   4. URL 부분에 작성  
      - <a>태그의 href 속성 등에도 자바스크립트 코드를 작성할 수 있다.  
      - 하지만 href 속성에서 자바스크립트 코드를 쓸 때에는 javascript:라는 키워드를  
        작성해야 한다.

## 1-5. 데이터 타입과 변수  

1. 자바스크립트 식별자(이름)    
> 식별자(identifier)란 자바스크립트 개발자가 변수, 상수, 함수에 붙이는 이름이다.  
  식별자를 만들 때 다음 규칙을 준수해야 한다.  
 
  - 첫 번째 문자 : 알파벳, 언더바, $문자만 사용 가능  
  - 두 번째이상 문자 : 알파벳, 언더바, 0-9, $사용 가능  
  - 대소문자 구분 : data와 dAta는 다른 식별자이다.  
  - 키워드(예약어) 사용 불가  


2. 문장 구분      
> 세미콜론으로 문장과 문장을 구분한다.  
> 한 줄에 한 문장만 있는 경우 세미콜론을 생략할 수 있다.  

    i = i + 1
    j = j + 1;
    k = k + 1; m = m + 1;
    n = n + 1 p = p + 1 (X)

3. 주석  
> 한 줄 주석 : //    
> 범위 주석  : /* */  


4. 데이터 타입(typeof())  
  - 숫자 타입(number) : 42, 3.14, ...  
  - 논리 타입(bool) : true, false  
  - 문자열 타입(string) : "안녕", "하세요", "35", 'a', "A", ...  
  - 객체 레퍼런스 타입(object) : Object, Array, Math, Date,...  
  - undefined : 타입이 정해지지 않은 것을 의미한다.  
  - null : 값이 정해지지 않은 것을 의미한다.  

5. 변수  
  - var 키워드: 함수의 영역만 영역으로 판단한다.  
  - let 키워드: 모든 영역을 영역으로 판단한다.  

6. 상수  
  - const 키워드: 값을 변경시킬 수 없다.  

   
7. 지역변수와 전역변수
> 변수의 사용 범위(scope)에 따라서 전역변수(global)와 지역변수(local)로 나뉜다.

  - 전역 변수: 영역 밖에서 선언된 변수   
  - 지역 변수: 영역 안에서 선언된 변수  

<hr/>


