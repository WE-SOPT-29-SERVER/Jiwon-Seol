const express = require("express");
const router = express.Router();
const { fail, success } = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

const users = require("../dbMockup/user");

router.post("/signup", async (req, res) => {
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
});

// async, await DB 연동되면 필요함
router.post("/login", async (req, res) => {
  // request body에서 데이터 가져오기
  const { email, password } = req.body;

  // request data 확인 - 없다면 Null Value 반환
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 존재하는 유저인지 확인 - 없다면 No user 반환
  const user = user.filter((obj) => obj.email === email)[0];

  if (!user) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // 비밀번호 확인 - 틀렸다면 Missmatch password 반환

  if (user.password !== password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  // 성공 - login success와 함께 비밀번호를 제외한 유저 정보 반환
  const loginUser = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  res
    .status(statusCode.OK)
    .send(success(statusCode.OK, responseMessage.LOGIN_SUCCESS, loginUser));

  // 유저 검색 히스토리 저장
  // search?keyword=principles

  // 1. 검색 결과 반환
  // res.status().send()

  // 2. 검색 히스토리 저장
});
// router.get("/", (req, res) => {});
// router.get("/:id", (req, res) => {});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  if (!id || !newName) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const updatedUser = { ...existingUser, name: newName };

  res
    .status(statusCode.OK)
    .send(
      success(statusCode.OK, responseMessage.USER_UPDATE_SUCCESS, updatedUser)
    );
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res
    .status(statusCode.OK)
    .send(
      success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUsers)
    );
});

module.exports = router;
