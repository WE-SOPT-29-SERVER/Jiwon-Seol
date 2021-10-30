const team = [
  { name: "팀원1", address: "주소1", age: 20, hobby: "잠" },
  { name: "팀원2", address: "주소2", age: 20, hobby: "노래" },
  { name: "팀원3", address: "주소3", age: 20, hobby: "코딩" },
];

team.forEach((person) =>
  console.log(
    "이름: " +
      person.name +
      " 사는 곳: " +
      person.address +
      " 나이" +
      person.age +
      " 취미: " +
      person.hobby
  )
);
