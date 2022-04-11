const express = require("express");
const router = express.Router();
const Business = require("../controllers/business");
const Auth = require("../controllers/auth");

router.get("/findAll", Business.findAll);

router.post("/create",  Auth.authMiddleware, Business.create);
router.post("/update/:id", Auth.authMiddleware, Business.update);

module.exports = router;