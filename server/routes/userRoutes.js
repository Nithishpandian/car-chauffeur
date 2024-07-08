const express = require("express")
const router = express.Router()
const {registerUser, loginUser, usersData, getUserDetails} = require("../controllers/userController")

const {protect} = require("../middlewares/authMiddleware")

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/data", protect, usersData)
router.get("/me", protect, getUserDetails)

module.exports = router