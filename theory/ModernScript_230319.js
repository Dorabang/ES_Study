// Spread 구문(Spread Syntax)
/* 
const numbers = [1, 2, 3];

console.log(numbers); // [1, 2, 3]
 */

/* 
const numbers = [1, 2, 3];

console.log(...numbers); // 1, 2, 3
console.log(1, 2, 3); // 1, 2, 3
 */

/* const numbers = [1, 2, 3];

console.log(...numbers); // 1, 2, 3
console.log(1, 2, 3); // 1, 2, 3

const sumAll = (...args) => {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(sumAll(1, 2, 3, 4)); // 10
 */

/* 
const webPublishing = ["HTML", "CSS"];
const interactiveWeb = webPublishing.slice();

interactiveWeb.push("JavaScript");

console.log(webPublishing); // ["HTML", "CSS"]
console.log(interactiveWeb); // ["HTML", "CSS", "JavaScript"]
 */

/* 
const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [...webPublishing];

interactiveWeb.push("JavaScript");

console.log(webPublishing); // ["HTML", "CSS"]
console.log(interactiveWeb); // ["HTML", "CSS", "JavaScript"]
 */

/* 
const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [...webPublishing, "JavaScript"];

console.log(webPublishing); // ["HTML", "CSS"]
console.log(interactiveWeb); // ["HTML", "CSS", "JavaScript"]
 */

/* 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
 */

/* 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const arr4 = arr1.concat(arr2);
console.log(arr4); // [1, 2, 3, 4, 5, 6]
 */

/* const introduce = (name, birth, job) => {
  console.log("안녕하세요! 반갑습니다.");
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년 생이고,`);
  console.log(`직업은 ${job}입니다.`);
  console.log("잘 부탁드립니다.");
};

const myArr = ["코드잇", 2017, "프로그래밍 강사"];
introduce(...myArr);
 */

/* 
const numbers = [1];

const number = ...numbers; // SyntaxError
 */

// index가 property-name이 되어서 객체 생성
const members = ["태호", "종훈", "우재"];

const newObject = { ...members };

console.log(newObject); // {0:"태호",1:"종훈",2:"우재"}
