// 두 정수의 덧셈 결과 출력
function add(number1, number2, f) {
    f(number1 + number2);
}
function print(result) {
    console.log(result);
}

add(1, 3, print);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
function mul(number1, number2, f) {
    f(number1 * number2);
}
function x2AndPrint(result) {
    console.log(result * 2);
}

mul(2, 5, x2AndPrint);

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
function getName(lastName, firstName, f) {
    f(lastName + firstName);
}
function printName(fullName) {
    console.log(fullName + "님");
}

getName("한", "동석", printName);

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤

// 개수가 5개 이하라면 true 아니면 false
function getProductCount(price, total, f) {
    const productCount = total / price;
    f(productCount);
}
function isNotMoreThan5(cnt) {
    const check = true;
    if (cnt > 5) {
        check = false;
    }
    console.log(check);
}

getProductCount(1000, 5000, isNotMoreThan5);

// 결제 상품 이름과, 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력
function getNameAndStatus(productName, payStatus, f) {
    f(productName, payStatus);
}
function checkPayStatus(productName, payStatus) {
    let message = productName;
    if (payStatus) {
        message += " 결제 완료";
    } else {
        message += " 결제 취소";
    }
    console.log(message);
}

getNameAndStatus("iPad Pro", true, checkPayStatus);
