const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const result = {
    message: "post~!",
  };
  res.status(200).send(result);
});

module.exports = router;
