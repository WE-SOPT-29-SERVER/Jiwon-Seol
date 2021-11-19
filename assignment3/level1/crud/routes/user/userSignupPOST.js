const { fail, success } = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

const users = require("../dbMockup/user");

module.exports = async (req, res) => {
  // destructuring assignment
  // 비구조화 할당
  // const id = req.body.id는 const {id} = req.body와 동일
  const { name, password, email } = req.body;

  // request body가 잘못됐을 때
  if (!email || !name || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 해당 email을 가진 user가 이미 있을 때 (email이 unique하다고 가정)
  const alreadyUser = users.filter((obj) => obj.email === email).length > 0;

  if (alreadyUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  // id는 db에서 자동으로 생성
  const newUser = {
    id: users.length + 1,
    name,
    password,
    email,
  };

  // users.push(newUser);

  res
    .status(statusCode.OK)
    .send(success(statusCode.OK, responseMessage.CREATED_USER, newUser));
};
