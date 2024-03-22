function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const result = map(arr, (item) => {
    return item + 10;
});

console.log(result);
