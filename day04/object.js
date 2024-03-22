// new -> 생성자
// 붕어빵(객체, 인스턴스) -> 붕어빵 기계(틀, 인터페이스)

let seongyong = new Object();
// let seongyong = {};
seongyong.name = "김성용";
seongyong.age = 20;
seongyong.height = 160;

console.log(seongyong);
seongyong.height = 190;

console.log(seongyong); // {name: "김성용", age: 20, height: 190}, 수정
