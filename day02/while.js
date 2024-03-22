let count = 3;
do {
    console.log(count);
} while (count < 3);
// 3

let num = 5;
while (true) {
    console.log(num);
    num--;
    if (num === 0) break;
}
// 5, 4, 3, 2, 1

while (num < 10) {
    num++;
    console.log(num);
}
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
