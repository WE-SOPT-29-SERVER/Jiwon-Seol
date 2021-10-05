// Function Scope
// var

// 함수 범위가 없을 때 전체가 함수
if (true) {
  var x = "var";
}
console.log(`var: ${x}`);

// Block Scope
// let or const
if (true) {
  let y = "let";
  const z = "const";
}
console.log(`let: ${y}`);
console.log(`const: ${z}`);

// Function Scope
// var is inaccessible from outside of the function

function colorFunction() {
  if (true) {
    var color = "blue";
    console.log(color);
  }
  console.log(color);
}

//colorFunction();
console.log(color);

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {} // 블록 안에서만 변수를 정의하고 싶을 경우

const arr2 = [5, 6, 7];

for (let i = 0; i < arr2.length; i++) {}
