const arr = [0, 1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 0, 1, 2, 3
/* 
for문은 여러분들이 원하는 만큼 조건식을 설정해서 순회
index의 값을 마음대로 조정할 수 있다
*/

arr.forEach((value, index, array) => {
    console.log(value, index, array);
});
// 0, 0, [0,1,2,3] -> 1, 1, [0,1,2,3]
// 현재요소, 인덱스, 원본배열
/* 
모든 요소를 순회 + 순서 보장 및 인덱스를 활용
*/

for (let el of arr) {
    console.log(el);
}
/* 
모든 요소를 순회, 간편하게 모든 요소를 순회 가능
*/

const user = {
    name: "김성용",
    height: 190,
    age: 20,
};

for (let key in user) {
    console.log(key); // name, hegiht, age
    console.log(user[key]); // "김성용", 190, 20
}

// [name, height, age]
Object.keys(user).forEach((key) => {
    console.log(user[key]);
});

// ["김성용", 190, 20]
Object.values(user).forEach((value) => {
    console.log(value);
});

// [ [name,김성용], [height, 190], [age, 20] ]
const _user = Object.entries(user);

for (let [key, value] of user) {
    console.log(key, value);
}
