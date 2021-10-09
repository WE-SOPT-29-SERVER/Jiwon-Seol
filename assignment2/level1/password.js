const fs = require("fs");
const crypto = require("crypto");

const password = fs.readFileSync("password.txt").toString();

const salt = crypto.randomBytes(32).toString("base64");
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const callback = (err, derivedKey) => {
  if (err) throw err;
  //   console.log(derivedKey.toString("hex"));
  const hashed = derivedKey.toString("base64");
  fs.writeFileSync("hashed.txt", hashed);
  console.log("****** password hashed! ******");
};
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);
