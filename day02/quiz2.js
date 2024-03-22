/* 
구구단
1~9단

ex)
"1x1 = 1"
...
"9x9 = 81"
*/

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}x${j} = ${i * j}`);
    }
}

// for문을 언제 사용하느냐
// 배열에 담겨있는 요소의 길이만큼 반복

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr.at(-1));
