// Rest Parameter
/* 
function printArguments() {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log("------------------");
}

printArguments("Young", "Mark", "Koby");
// Young
// Mark
// Koby
// ------------------
printArguments("Captain");
// Captain
// ------------------
printArguments("Jayden", "Scott");
// Jayden
// Scott
// ------------------
printArguments("Suri", "Jack", "Joy", "Noel");
// Suri
// Jack
// Joy
// Noel
// ------------------
 */

/* 
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  console.log("------------------");
}

printArguments("Young", "Mark", "Koby");
// Young
// Mark
// Koby
// ------------------
printArguments("Captain");
// Captain
// ------------------
printArguments("Jayden", "Scott");
// Jayden
// Scott
// ------------------
printArguments("Suri", "Jack", "Joy", "Noel");
// Suri
// Jack
// Joy
// Noel
// ------------------
 */

/* 
function printArguments(...args) {
  console.log(args.splice(0, 2));
  console.log(arguments.splice(0, 2));
  console.log("------------------");
}

printArguments("Young", "Mark", "Koby");
// Young
// Mark
// ------------------
printArguments("Captain");
// TypeError
printArguments("Jayden", "Scott");
// Jayden
// Scott
// ------------------
printArguments("Suri", "Jack", "Joy", "Noel");
// Suri
// Jack
// Joy
// Noel
// ------------------
 */

/* 
function printRank(first, second, ...others) {
  console.log("코드잇 레이스 최종 결과");
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRank("Phil", "Won", "Emma", "Min", "Luke");
// 코드잇 레이스 최종 결과
// 우승: Phil
// 준우승: Won
// 참가자: Emma
// 참가자: Min
// 참가자: Luke
 */

function ignoreFirst(first, ...noFirst) {
  for (const arg of noFirst) {
    console.log(arg);
  }
}

ignoreFirst("1세대", "2세대", "3세대");
ignoreFirst("곰팡이", "강아지", "고양이");
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
