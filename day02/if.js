let num = 3;
let answer; // undefined

if (num > 0) {
    answer = "양수";
} else {
    answer = "음수";
}

console.log(answer); // 양수

num = 0;

if (num === 0) {
    answer = "0";
} else if (num > 0) {
    answer = "양수";
} else {
    answer = "음수";
}
console.log(answer); // 0

// 만약에, 아니면, 분기점을 나눠 다양한 결과로 처리, 예외 처리
