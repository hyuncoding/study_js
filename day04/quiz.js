/*
자판기라는 함수를 정의
자판기 함수 처음에 실행되었을 때 "자판기가 가동되었습니다" 출력

반환값은
잔돈이 0원이면 음료수 이름을 반환
잔돈이 있으면 이름과 잔돈을 반환

메뉴
솔의눈 300원
비타500 500원
콜라 1000원

없는 메뉴를 선택하면 존재하지 않는 상품입니다. 출력
만약 투입금액이 선택한 음료수의 값보다 적을 경우 금액이 부족합니다 출력

함수의 인자는 (투입금액, 음료수명)

*/

function japangi(money, drinkName) {
    console.log("자판기가 가동되었습니다.");
    const menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 };
    const price = menu[drinkName];
    if (!price) {
        return console.log("존재하지 않는 상품입니다.");
    }
    if (money > price) {
        return console.log(`음료수 이름: ${drinkName}, 잔돈: ${money - price}`);
    } else if (money == price) {
        return console.log(`음료수 이름: ${drinkName}`);
    } else {
        return console.log("금액이 부족합니다.");
    }
}

console.log(japangi(1000, "솔의눈"));
