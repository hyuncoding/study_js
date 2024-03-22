// sort

const arr1 = [2, 3, 1];
const arr2 = ["banana", "apple", "orange"];

arr1.sort();
arr2.sort();

console.log(arr1); // 1, 2, 3
console.log(arr2); // apple, banana, orange

arr1.sort((a, b) => b - a);
console.log(arr1);

// arr1.sort().reverse()
// arr1.sort((a, b) => b - a) // 큰 순서
// a - b // 작은 순서

const arr3 = [1, 10, 2, 3, 5];
arr3.sort(); // 1, 10, 2, 3, 5
console.log(arr3);
// 유니코드 - 전 세계의 모든 문자와 숫자에 대해 코드를 기준하는 일종의 국제 표준
arr3.sort((a, b) => a - b);
console.log(arr3);

// map
const mapArr = [1, 2, 3, 4, 5];

const mapArr2 = mapArr.map((item) => item + 10);
// mapArr.map((item) => { return item + 10 }) 1줄일 경우 return, {} 생략 가능
console.log(mapArr2);
// [11, 12, 13, 14, 15]
// 기존 배열을 이용, 기존 배열의 모든 요소를 순회
// 콜백함수가 리턴하는 값으로 *새로운 배열*을 만든다
// 단순 순회와 반복이 필요하면 반복문을 활용, 새로운 배열이 필요하면 map

// filter
const filterArr = [1, 2, 3, 4, 5, 6];
const _filterArr = filterArr.filter((item) => item % 2 === 0);
console.log(_filterArr); // [2, 4, 6]
// 내가 지정한 특정 조건을 만족하는 요소들만 골라내어 *새로운 배열* 을 만듦.
// 새로운 배열이 필요할 때 사용, 단순 데이터를 분기점 나누는 건 if문

// find
// item, data, info, value
const findArr = [1, 2, 3, 4, 5];
const findEl = findArr.find((el) => el === 2);
console.log(findEl);
// 2

const Posts = [
    {
        id: 1,
        title: "title-1",
        content: "content-1",
    },
    {
        id: 2,
        title: "title-2",
        content: "content-2",
    },
    {
        id: 3,
        title: "title-3",
        content: "content-3",
    },
];

// 배열 데이터의 수정, 특정 요소의 조회
const post = Posts.find((post) => post.id === 2);
post.content = "example";
console.log(Posts);

// 배열 데이터의 삭제, 여러 요소의 조회
const deletePost = Posts.filter((post) => post.id !== 1);
console.log(deletePost);
