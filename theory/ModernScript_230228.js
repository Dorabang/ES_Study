// arguments
/* 
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log("---------------");
}

printArguments("Young", "Mark", "Koby");
// Young
// Mark
// Koby
// ---------------
printArguments("Captain"); // 파라미터 개수만큼 없을 시에는 undefined 값을 출력
// Captain
// undefined
// undefined
// ---------------
printArguments("Jayden", "Scott");
// Jayden
// Scott
// undefined
// ---------------
printArguments("Suri", "Jack", "Joy", "Noel"); // 파라미터 개수를 넘는 아규먼트는 무시
// Suri
// Jack
// Joy
// ---------------
 */

// arguments : argument 갯수에 맞게 능동적으로 사용할 수 있는 함수 선언
// 배열의 메소드는 사용할 수 없지만, 유사 배열
// length 프로퍼티로 배열의 갯수를 확인할 수 있고
// 인덱싱을 통해서 아규먼트 하나하나에 접근할 수 있음
// for of문을 통해 아규먼트 하나하나에 반복문을 사용할 수 있음

function printArguments(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log("---------------");
}

printArguments("Suri", "Jack", "Joy", "Noel");
// Suri
// Jack
// Joy
// Noel
// ---------------
