//  members.js가 export한 내용을 promiseQuiz.js 안의 변수에 할당!
const members = require("./members");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(members.filter((member) => member.location === "online"));
    }, 500);
  });
};
const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(members.filter((member) => member.location === "offline"));
    }, 500);
  });
};
const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(members.filter((member) => member.group === "YB"));
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(members.filter((member) => member.group === "OB"));
    }, 500);
  });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);
