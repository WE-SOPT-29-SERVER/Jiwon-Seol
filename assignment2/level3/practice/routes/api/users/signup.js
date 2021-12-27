const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  const result = {
    message: "signup~!",
  };
  res.status(200).send(result);
});

module.exports = router;
