// 타입 검사

console.log(typeof "5"); // string
console.log(typeof 5); // number
console.log(typeof undefined); // undefined

console.log(typeof null); // object
// 버그, 자바스크립트 초기버전 오류, 하위 호환성으로 수정 보류

// 타입 가드
function a(number) {
    if (typeof number === "string") return;

    /* 
        ... 기능
    */
}
