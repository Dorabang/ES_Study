// Arrow Function

/* 
const getTwice = function (number) {
  return number * 2;
};

console.log(getTwice(5)); // 10

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {
  console.log("button is clicked!");
});
 */

/* 
const getTwice = (number) => {
  return number * 2;
};

console.log(getTwice(5)); // 10

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", () => {
  console.log("button is clicked!");
});
 */

/* 
const sum = (a, b) => {
  const result = a + b;
  return result;
};

const getCodeit = () => ({ name: "Codeit" });
// 리턴값이 객체인 경우, 객체를 함수의 동작부분을 구분하는 중괄호로 인식하여 오류 발생
// 때문에 소괄호로 동작부분임을 알려주어야 함

console.log(sum(10, 5));
console.log(getCodeit());
 */

/* 
function normalFunc() {
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(arguments);
};

normalFunc(1, 2, 3); // [1, 2, 3]
arrowFunc(1, 2, 3); // ReferenceError: arguments is not defined
 */

// this

/* 
console.log(this); // Window{…}
 */

/* 
const user = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName: function () {
    return `${user.firstName} ${user.lastName}}`;
  },
};

console.log(user.getFullName()); // Tess Jang
 */

/* 
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName: getFullName(),
};

const admin = {
  firstName: "Alex",
  lastName: "Kim",
  getFullName: getFullName(),
};

console.log(user.getFullName()); // Tess Jang
console.log(admin.getFullName()); // Alex Kim
 */

/* 
console.log(this);

function printThis() {
  console.log(this);
}

printThis();
 */
/* 
console.log(this);

function printThis() {
  console.log(this);
}

const myObj = {
  content: "myObj",
  printThis: printThis,
};

const otherObj = {
  content: "otherObj",
  printThis: printThis,
};

myObj.printThis(); // {content: "myObj", ...}
otherObj.printThis(); // {content: "otherObj", ...}
 */

console.log(this);

const printThis = () => {
  console.log(this);
};

const myObj = {
  content: "myObj",
  printThis: printThis,
};

const otherObj = {
  content: "otherObj",
  printThis: printThis,
};

myObj.printThis(); // {content: "myObj", ...}
otherObj.printThis(); // {content: "otherObj", ...}
