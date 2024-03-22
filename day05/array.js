// push, pop

const newArr = ["김성용", "짱구", "마이멜로디"];

newArr.push("해피캣");
console.log(newArr);

newArr.pop();
console.log(newArr);

newArr.unshift("쿠로미");
console.log(newArr);
console.log(newArr.length);

newArr.shift();
console.log(newArr);
console.log(newArr.length);

if (!newArr.includes("쿠로미")) {
    newArr.push("쿠로미");
}

console.log(newArr);
console.log(newArr.indexOf("쿠로미"));
console.log(newArr.indexOf("짝귀"));

// split
// 문자로 이루어진 정렬 (문자열) -> 유사배열 -> 배열이 가진 메서드를 일부 사용 가능
const phone = "010-1234-1234";
const str = "안녕하세요 여러분 저의 이름은 양현 입니다";
console.log(phone.length);
phone.split("-"); // [010, 1234, 1234]
str.split(" "); // [안녕하세요, 여러분, 저의, 이름은, 양현, 입니다]
// 문자열을 특정한 요소 기준으로 나눠야할 때 사용

str.split(" ").join("★");

// slice
// start, end전까지(end-1) 데이터 복사본을 반환

// splice
// start, count 전까지의 원본 데이터를 삭제하고 대체 및 수정이 가능

const apart = ["짱구", "오수", "신혼부부", "훈이", "스폰지밥"];

console.log(apart.slice(1, 3)); // ['오수', '신혼부부']
console.log(apart.slice(-3, -1)); // ['신혼부부', '훈이']
console.log(apart.slice(1, 1)); // []

const deleteItem = apart.splice(1, 2, "배고프다");
console.log(deleteItem, apart);
