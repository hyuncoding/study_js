const a = 3;
Array.isArray(a); // false

Array.isArray([]); // true
Array.isArray(new Array()); // true
Array.isArray({}); // false
Array.isArray("Array"); // false, 문자열 => 유사 배열

// Array.from()
// 유사 배열 객체를 배열화
// 유사 배열 객체 -> 객체인데 키값으로 배열의 속성을 갖고 있는 것
let obj = {
    0: "a",
    1: "b",
    length: 2,
};
console.log(obj.length, obj[0], obj[1]); // 유사배열객체
const arr = Array.from(obj);
console.log(arr);
// ['a', 'b']

// 유사 배열 객체를 이용하여 비어있는 길이 5 배열을 생성
// 비어있던 배열이 콜백함수가 반환하는 값으로 순회해서 채워짐
const newArr = Array.from({ length: 5 }, (_, index) => {
    console.log(_); // undefined (비어있는 배열)
    return index; // 0~4
});

// {length:5}, (el,i)=>{}
function from(obj, callback) {
    let reulst = [];
    for (let i; i < obj.length; i++) {
        reulst.push(obj[i]);
        // undefiend
    }

    if (callback) {
        reulst = reulst.map((el, i) => callback(el, i));
        // [callback(el,i), callback(el,i), callback(el,i), callback(el,i), callback(el,i)]
    }
    return reulst; // [und, und, und, und, und]
}

// Array.of
// ()안의 전달된 값으로 이루어진 배열 생성

// const ofArr = Array.of(0)
// [0]
const ofArr = Array.of(0, 1);
// [0, 1]

const emptyArr = Array(10);
console.log(emptyArr);

const fullArr = Array(10).fill(0);
console.log(fullArr);

// mock data
// 가짜 데이터 -> 백엔드 없이도 프로젝트 (msw, web storege, fire-base, json-server)
const mockPosts = Array(10)
    .fill()
    .map((_, i) => ({
        // 순서는 지켜야하지만 요소가 사용중이지 않기 때문에 _로 표시한 것
        id: i + 1,
        content: `example-${i + 1}`, // faker.js 랜덤으로
        title: "반갑습니다",
    }));
console.log(mockPosts);
