const express = require("express");

const { _Post, _allUsers } = require("../controllers/userControoler.js");
const router = express.Router();

router.get("/", _allUsers);
router.post("/post", _Post);

module.exports = router;
