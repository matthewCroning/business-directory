const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Auth = require("../controllers/auth");

router.post("/signup", Auth.signup);
router.post("/signin", Auth.signin);

module.exports = router;