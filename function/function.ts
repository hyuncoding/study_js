// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted
// tsc --init

// function add(num1, num2) {
//     return num1 + num2;
// }

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기값을 설정할 수 있다.
function add(num1: number, num2: number, num3: number = 0): number {
    return num1 + num2 + num3;
}

// let result = add(1, 2);
// console.log(result);

// result = add(1, 2, 3);
// console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받고, 닉네임은 기본값을 '없음'으로 설정한다.
// function introduce(id, password, nickname = "없음") {
//     console.log(id, password, nickname);
// }

// introduce("hds1234", "1234");
// introduce("hds1234", "1234", "뽀삐");

// 가변인자
// function add(...numbers) {
//     // console.log(numbers);
//     // 빠른 for문 - 인덱스: in사용
//     // for (let i in numbers) {
//     //     console.log(i);
//     // }
//     // 빠른 for문 - 값 : of사용
//     for (let i of numbers) {
//         console.log(i);
//     }
// }

// add(1, 2, 3, 4, 5, 6);

// 이름, 나이를 가변인자로 전달받고 출력하기
function info(...infos: any[]) {
    console.log(`이름: ${infos[0]}`);
    console.log(`나이: ${infos[1]}살`);
}

info("한동석", 20);
