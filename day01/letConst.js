console.log(a); // undefined

var a = 5;
console.log(a); // 5

// console.log(b); // Cannot access 'b' before initialization -error
let b = 5;
console.log(b); // 5
b = 6;
console.log(b); // 6

// var a = 5; (0)
// let a = 5; (x)
// Identifier 'a' has already been declared
// error

const c = 7;
// c = 9;
// Assignment to constant variable

/*
문자열 내에서 변수를 사용하는 방법
*/

console.log("a의 값은" + a + "입니다"); // + ==> 그대로 문자열로 더해짐
console.log("a의 값은", a, "입니다"); // ,  ==> 앞뒤에 공백 추가, a는 숫자로 출력됨
console.log(`a의 값은 ${a}입니다`); // ${}, ``  ==> a는 문자열로 변환되어 출력됨
