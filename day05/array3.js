const menus = [
    {
        name: "상품목록",
        toggle: false,
    },
    {
        name: "회원목록",
        toggle: true,
    },
    {
        name: "결제관리",
        toggle: false,
    },
];

// every
// 콜백함수가 반환하는 값이 모두 트루인가
const eveyReulst = menus.every((menu) => menu.toggle);
// () => retrun(생략) menu.toggle(true)
console.log(eveyReulst); // false

// some
// 콜백함수가 반환하는 값이 일부 트루인가
const soemResult = menus.some((menu) => menu.toggle);
console.log(soemResult); // true

const menuIndex = menus.findIndex((menu) => menu.toggle);
// 함수의 괄호 안에 매개변수가 1개면 괄호 생략이 가능

console.log(menuIndex); // 1
console.log(menus[menuIndex]);

// reduce
// 누적값, 순회 형태가 아니라 빠릅니다

const NumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reduceResult = NumArr.reduce((sum, n) => {
    return sum + n;
});
// 10~1까지 더하는 것 => 55
// 기본값을 지정하지 않았을 때 sum의 값은 첫번째 요소, 다음 요소(n)
// 1 + 2
// 기본값을 지정하면 sum은 기본값이 되고 다음 요소(n)
// 100 + 1

/* 
    문제 1 (다른 사람이 주는게, 내가 나한테 줘야죠)
    => 결과값
    => 결과값을 구하기 위해 필요한 값 => 형태
    => 형태 구하려면 올바른 알고리즘, 자료구조 사용
    => 이 수많은 고차 함수 반드시 필요로 하는 값을 정해져있지 않다.
    => 반환 형태를 정하고 알고리즘을 정하는 것은 "나"
    => 예외 상황 고려
*/
