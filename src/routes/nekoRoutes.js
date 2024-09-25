const express = require("express");
const {
  increasePoint,
  DecreasePoint,
} = require("../controllers/gameController");
const router = express.Router();

router.post("/earn", increasePoint); // GET user by userId
router.post("/bet", DecreasePoint);

module.exports = router;
