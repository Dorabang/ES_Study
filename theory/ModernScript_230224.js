/* 
// 함수를 변수에 할당하여 선언
const printCodeit = function () {
    console.log('Codeit');
};

printCodeit(); // Codeit → 함수 표현식
*/

/* 
// 콜백 함수
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success()); // 정답!
  } else {
    console.log(fail()); // 오답!
  }
}

function getSuccess() {
  return '정답!';
}

function getFail() {
  return '오답!';
}

const question = '5 + 3 = ?';

makeQuiz(question, '8', getSuccess, getFail);
 */
/* 
// 고차 함수
function getPrintHi() {
  return function () {
    console.log('Hi!?');
  };
}
// const sayHi = getPrintHi();
// sayHi();
getPrintHi()();
*/
