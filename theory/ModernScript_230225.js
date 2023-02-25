// Parameter

/*
function greeting(name) {
  console.log(`Hi! My name is ${name}!`);
}

greeting("JavaScript"); // Hi! My name is JavaScript!
greeting("Codeit"); // Hi! My name is Codeit!
greeting("World"); // Hi! My name is World!
 */

/* 
// 파라미터에 할당 연산자를 사용하여 기본값을 설정할 수 있음
function greeting(name = "Codeit") {
  console.log(`Hi! My name is ${name}!`);
}

// 아래와 같이 아규먼트가 전달되지 않아도 undefined 값이 아닌 기본 값을 출력
greeting(); // Hi! My name is Codeit!
 */

/* 
function greeting(name = "Codeit", interest) {
  console.log(`Hi! My name is ${name}`);
  console.log(`I like ${interest}`);
}

greeting("JavaScript"); // 아규면트는 파라미터의 기본값과 상관없이 호출 시 작성한 순서대로 전달됨
// Hi! My name is JavaScript
// I like undefined
 */
/* 
// 아규먼트와 파라미터, 기본값을 사용하여 더욱더 다양하게 응용할 수 있다.
function defaultTest(x, y = x + 3) {
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
}

defaultTest(2);
// x: 2
// y: 5
 */
