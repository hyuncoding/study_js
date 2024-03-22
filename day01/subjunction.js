5 == 5; // true
5 == "5"; // true
5 == 8; // false

false == "0"; // true
false == "false"; // false
false == undefined; // false
false == null; // false

null == undefined; // true
null === undefined; // false

5 === 5; // true
5 === "5"; // false

NaN === NaN; // false
// NaN은 JS에서 자신과 자신을 비교했을 때 일치되지 않는 유일한 값
// 따라서 해당 값이 NaN인지 확인하기 위해서는 isNaN(a)

0 === -0; // true

5 != 8; // true
5 != 5; // false
5 != "5"; // false

5 !== 8; // true
5 !== 5; // false
5 !== "5"; // true
