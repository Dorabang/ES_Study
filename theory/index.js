// AND 연산자는 왼쪽 값이 Truthy하면 오른쪽 값을 리턴,
// 왼쪽 값이 Falsy하면 왼쪽 값을 리턴
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// AND 와 OR의 연산 방식
console.log('Codeit' && 'JavaScript'); // JavaScript

// OR 연산자는 왼쪽 값이 Truthy하면 그대로 왼쪽 값을 리턴,
// 왼쪽 값이 Falsy하면 오른쪽 값을 리턴
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// AND 와 OR의 연산 방식
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}

// AND 와 OR 연산자 응용
function print(value) {
  const message = value || 'codeit';

  console.log(message);
}

print(); // codeit
print('JavaScript'); // JavaScript

// AND와 OR 연산자의 연산 우선순위 → AND > OR
console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log('Codeit' || (NaN && false)); // Codeit
console.log(('Codeit' || NaN) && false); // false
