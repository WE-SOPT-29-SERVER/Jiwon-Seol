// original code
hoistFunction();

function hoistFunction() {
  console.log(x);
  var x = "var";
  console.log(x);
}

// same code interpreted by the Js engine
// 선언부가 항상 최상단으로 올라간다. 호이스팅 됨. (선언부만, 할당은 원래 위치에서)
// 선언 먼저 하고 실행하기!
// 호이스팅 하면 var로 선언한 변수에 문제 생길 수 있음 -> 해결법 : var를 쓰지 않는다!
function hoistFunction() {
  var x;
  console.log(x);
  x = "var";
  console.log(x);
}

hoistFunction();
