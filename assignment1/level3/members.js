const members = [
  { name: "강한희", part: "Server", group: "OB" },
  { name: "고성용", part: "Server", group: "OB" },
  { name: "구건모", part: "Server", group: "YB" },
  { name: "권세훈", part: "Server", group: "YB" },
  { name: "김영권", part: "Server", group: "YB" },
  { name: "김은지", part: "Server", group: "YB" },
  { name: "김진욱", part: "Server", group: "YB" },
  { name: "김희빈", part: "Server", group: "OB" },
  { name: "남지윤", part: "Server", group: "YB" },
  { name: "문규원", part: "Server", group: "YB" },
  { name: "박나희", part: "Server", group: "OB" },
  { name: "박정현", part: "Server", group: "YB" },
  { name: "박현지", part: "Server", group: "OB" },
  { name: "변주현", part: "Server", group: "OB" },
  { name: "서호영", part: "Server", group: "OB" },
  { name: "설지원", part: "Server", group: "YB" },
  { name: "손시형", part: "Server", group: "YB" },
  { name: "안준영", part: "Server", group: "OB" },
  { name: "장서현", part: "Server", group: "OB" },
  { name: "오예원", part: "Server", group: "OB" },
  { name: "이다은", part: "Server", group: "OB" },
  { name: "이동근", part: "Server", group: "YB" },
  { name: "이솔", part: "Server", group: "OB" },
  { name: "이승헌", part: "Server", group: "YB" },
  { name: "이정은", part: "Server", group: "YB" },
  { name: "이제준", part: "Server", group: "YB" },
  { name: "정설희", part: "Server", group: "OB" },
  { name: "조윤서", part: "Server", group: "OB" },
  { name: "조재호", part: "Server", group: "YB" },
  { name: "조찬우", part: "Server", group: "YB" },
  { name: "주어진사랑", part: "Server", group: "YB" },
  { name: "주효식", part: "Server", group: "YB" },
  { name: "채정아", part: "Server", group: "OB" },
  { name: "최영재", part: "Server", group: "OB" },
  { name: "최유림", part: "Server", group: "YB" },
  { name: "최진영", part: "Server", group: "YB" },
  { name: "허유정", part: "Server", group: "YB" },
];

// 랜덤 배정을 하기 위해 배열을 섞는 함수
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // 무작위 index
    let j = Math.floor(Math.random() * (i + 1));
    // 임시로 원본 값을 저장하고, 랜덤 위치인 j를 사용해 배열 요소를 섞음
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// console.log(shuffleArray(members));

// OB와 YB 비율을 맞추기 위해 OB를 구분하는 함수
const getOB = (members) => {
  let OB = members.filter((member) => member.group === "OB");
  return OB;
};

// OB와 YB 비율을 맞추기 위해 YB를 구분하는 함수
const getYB = (members) => {
  let YB = members.filter((member) => member.group === "YB");
  return YB;
};

// OB YB 비율을 최대한 맞추어 랜덤으로 5개의 팀 배정하는 함수
const getRandomTeam = (members) => {
  // 팀 수 : 5
  const teamCnt = 5;
  const team1 = [];
  const team2 = [];
  const team3 = [];
  const team4 = [];
  const team5 = [];

  // random하게 shuffle한 OB, YB
  const randomOB = getOB(shuffleArray(members));
  const randomYB = getYB(shuffleArray(members));

  // 전체 OB, YB 수
  const OBCnt = randomOB.length;
  const YBCnt = randomYB.length;

  // 팀 당 OB, YB 수
  const OBCntPerTeam = Math.floor(OBCnt / teamCnt);
  const YBCntPerTeam = Math.floor(YBCnt / teamCnt);

  // OB, YB 남는 멤버 수
  const OBRest = OBCnt - OBCntPerTeam * teamCnt;
  const YBRest = YBCnt - YBCntPerTeam * teamCnt;

  for (let i = 0; i < OBCntPerTeam; i++) {
    // OB 배정
    team1[i] = randomOB[i];
    team2[i] = randomOB[i + OBCntPerTeam];
    team3[i] = randomOB[i + 2 * OBCntPerTeam];
    team4[i] = randomOB[i + 3 * OBCntPerTeam];
    team5[i] = randomOB[i + 4 * OBCntPerTeam];

    // YB 배정
    team1[i + OBCntPerTeam] = randomYB[i];
    team2[i + OBCntPerTeam] = randomYB[i + YBCntPerTeam];
    team3[i + OBCntPerTeam] = randomYB[i + 2 * YBCntPerTeam];
    team4[i + OBCntPerTeam] = randomYB[i + 3 * YBCntPerTeam];
    team5[i + OBCntPerTeam] = randomYB[i + 4 * YBCntPerTeam];
  }

  // 남은 OB, YB는 team1에 배정
  for (let i = 0; i < OBRest; i++) {
    team1[i + YBCntPerTeam + OBCntPerTeam] = randomOB[i + 5 * OBCntPerTeam];
  }
  for (let i = 0; i < YBRest; i++) {
    team1[i + YBCntPerTeam + OBCntPerTeam + OBRest] =
      randomYB[i + 5 * YBCntPerTeam];
  }

  console.log("============ team1 ============");
  team1.forEach((member) => console.log(`${member.group} ${member.name}`));
  console.log("============ team2 ============");
  team2.forEach((member) => console.log(`${member.group} ${member.name}`));
  console.log("============ team3 ============");
  team3.forEach((member) => console.log(`${member.group} ${member.name}`));
  console.log("============ team4 ============");
  team4.forEach((member) => console.log(`${member.group} ${member.name}`));
  console.log("============ team5 ============");
  team5.forEach((member) => console.log(`${member.group} ${member.name}`));
};

getRandomTeam(members);

// 랜덤 값의 최대, 최소 범위를 넣어주면 랜덤 값 배열을 생성해주는 함수
// const getRandomArr = (min, max) => {
//   let randomArr = [];
//   let totalLen = max - min + 1;
//   for (i = 0; i < totalLen; i++) {
//     randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (randomArr.indexOf(randomNum) === -1) {
//       randomArr.push(randomNum);
//     } else {
//       i--;
//     }
//   }
//   return randomArr;
// };
