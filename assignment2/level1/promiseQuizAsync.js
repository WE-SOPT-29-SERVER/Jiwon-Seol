const members = require("./members");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

// getOnline(members)
//    .then(x => getOB(x))
//    .then(console.log);
// getYB(members).then(getOffline).then(console.log);

const membersAsync = async (members) => {
  const onlineMembers = await getOnline(members);
  const onlineOBMembers = await getOB(onlineMembers);
  // console.log는 비동기 함수가 아니기 때문에 await 앞에 붙이지 않아도 됨
  console.log(onlineOBMembers);

  const YBMembers = await getYB(members);
  const YBOfflineMembers = await getOffline(YBMembers);
  console.log(YBOfflineMembers);
};

membersAsync(members);
