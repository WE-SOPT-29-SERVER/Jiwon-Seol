const num = 1;
const str = "1";

// 동등 연산자: 값만 비교
// == equal
// != not equal

// console.log(num == str);
// console.log("1" == "1"); // 숫자를 문자로 바꿈. 하나의 타입으로 강제됨
console.log(num + str);
console.log(typeof (num + str));

console.log(Number(num) + Number(str));
console.log(typeof (Number(num) + Number(str)));

// 주의 : {postId} 가 str로 올 수 있음
// 문자 숫자 타입이 명확하지 않게 변경될 수 있음. 명확하게 하고 싶으면 타입 명시
// sql에서는 === true로 나올 수 있음, 데이터베이스에서 숫자 문자 모두 받음

// 일치 연산자: 값 & 타입 비교
// === equal
// !== not equal

// 대부분 일치 연산자를 쓰는 것이 안전
// console.log(num === str);
