const arr = [];
console.log(arr[0]); // undefined
arr[1] = 1;
arr[3] = 3;
// [<1 empty item>, 1, <1 empty item>, 3]
console.log(arr.length); // 4
// console.log(arr[2]);
// console.log(arr);

const newArr = ["김성용", "짱구", "마이멜로디"];

newArr.push("해피캣");
console.log(newArr); // 김성용, 짱구, 마이멜로디, 해피캣

newArr.pop();
console.log(newArr); // 김성용, 짱구, 마이멜로디
