const express = require("express");
const router = express.Router();
const Business = require("../controllers/business");

router.get("/findAll", Business.findAll);

router.post("/create", Business.create);


module.exports = router;