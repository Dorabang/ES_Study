// 변수와 스코프
/*
console.log(title); // undefined
var title = 'codeit';
console.log(title); // codeit
*/

/* 
console.log(title); // 선언 전 접근 불가 에러 발생 → 오류가 발생한 원인 파악이 쉽다.
let title;
 */

/* 
// var 변수는 변수 값을 중복 선언할 수 있음
// → 코드가 길어졌을 때, 중복된 변수명을 사용하였을 때, 이전 변수 값이 사라짐
var title = 'Codeit';
console.log(title);
var title = 'JavaScript';
console.log(title);
 */

/* 
// let 변수 사용 시, 변수 중복 선언 에러 발생을 확인할 수 있다.
let title = 'Codeit';
console.log(title);
let title = 'JavaScript';
console.log(title);
 */

/* 
var x = 3; // Global Variable

function myFunc() {
  var y = 4; // Local Variable
  console.log(`x in maFunc: ${x}`);
  console.log(`y in maFunc: ${y}`);
}

myFunc();
console.log(x);
console.log(y);
 */

/* 
var x = 3;

if (x < 4) {
  var y = 3;
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// var 변수는 조건문이나 반복문 안에서 새로운 변수를 선언해도 전역적으로 사용할 수 있음
// let, const 는 코드블럭(={}, 중괄호)으로 변수의 유효범위를 구분
console.log('x:', x); // x: 3
console.log('y:', y); // y: 3
console.log('i:', i); // i: 5
 */

/* 
//let 변수는 단순히 코드블럭으로만 구분되어 있어도 지역변수로 인식
{
  let title = 'codeit';
  console.log(title); // codeit
}

console.log(title); // 미선언 오류 발생
 */

/* 
var x; // 함수 스코프(function scope)
let y; // 블럭 스코프(block scope)
const z; // 블럭 스코프(block scope)
*/
