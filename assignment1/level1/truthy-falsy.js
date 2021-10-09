const num1 = 1;
const num2 = 2;

const str = "2";

// 2 -> "2"

const bool = true;

console.log(num1 == bool); // true
// 1 -> true
// true == 1
// false == 0
console.log(num2 == bool); // false
// 2 -> false

// Truthy
// 대충 true다.
console.log(Boolean(10)); // true
console.log(Boolean(-41)); // true
console.log(Boolean("문자")); // true
console.log(Boolean(true)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
// 비어있는 건 문자열만 falsy, 빈 객체는 true

// Falsy
// 대충 false다.
// false, 0, null, undefined
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean(false)); // false

const post = await postsGet();

// post 있는지 없는지 검사할 때 유용
if (!post) {
  // logic
}

// 0은 값이 있는데 0, null은 값이 없음, undefined는 휴지걸이도 없음
// database에 null을 넣는 것과 undefined를 넣는 것은 다름

// postgresql
const query = `
    UPDATE post
    SET name = ${null} // NULL
    WHERE id = 1
`;

const query1 = `
    UPDATE post
    SET name = ${undefined} // 에러 혹은 기존 값
    WHERE id = 1
`;
// 결론: undefined 쓰지 않기!
