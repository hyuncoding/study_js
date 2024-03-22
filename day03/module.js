const printName = require("./modules/name-helper");

function parseName(name2) {
    return name2 + "입니다"; // return 양현입니다
}

function nameFunction(name) {
    printName(name);
    return parseName(name);
}

console.log(nameFunction("양현")); // 양현, 양현입니다

// 양현 -> nameFunction (name) -> name -> printName, parseName (name1, name2)

// 모듈화 이유? --> 유지보수, 재사용(모듈화), 가독성(코드가 길어질 수 있음)
