// 변수와 스코프
//let 변수는 단순히 코드블럭으로만 구분되어 있어도 지역변수로 인식
{
  let title = 'codeit';
  console.log(title); // codeit
}

console.log(title); // 미선언 오류 발생
