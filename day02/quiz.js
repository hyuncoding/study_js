/* 

변수
이름, 국어점수, 수학점수, 영어점수, 탐구영역점수
이 네 가지 점수를 합산하여 평균을 구하고

해당 평균 값에 따라 분기를 나누어
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 학점 f학점

ex)
    000님의 이번 학기 성적은 0학점 입니다.

*/

let name = "홍길동";
let kor = 80;
let mat = 70;
let eng = 100;
let tamgu = 95;

let grade;
let avg;

avg = (kor + mat + eng + tamgu) / 4;

if (avg >= 90) {
    grade = "a";
} else if (avg >= 80) {
    grade = "b";
} else if (avg >= 70) {
    grade = "c";
} else {
    grade = "f";
}

console.log(`${name}님의 이번 학기 성적은 ${grade}학점 입니다.`);
console.log(`평균 점수는 ${avg}점 입니다.`);
