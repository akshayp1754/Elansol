const { Router } = require("express");
const { user, getAllUsers } = require("../controller/registerUser")
const router = Router();

router.post("/", user)

router.get("/", getAllUsers)

module.exports = router