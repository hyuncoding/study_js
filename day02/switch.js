let month = 2;
/* 
변수 이름은 아무렇게나 막 지어도 괜찮을까?

가독성 있는 네이밍 -> 길이는 중요하지 않음
변수명만 보더라도 해당 내용이 어떤 걸 의미하는지 알 수 있도록 작성

ex)
const LoginWithOutAddress

표기법)

    카멜 표기법
        ex) let mathScore

    파스칼 표기법
        ex) let MathScore

    헝가리언 표기법
        ex) let iMathScore

    스네이크 표기법
        ex) let math_score
        
    케밥 표기법
        ex) let math-score (하이픈 인식 x -> 사용 x)
            html class명 등에서 사용

*/

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break; // switch문은 case에 해당 되면 아래 로직을 모두 실행하기 때문에
    // 탈출문을 사용하여 실행을 종료한다
    // return , break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("None");
}
