const express = require("express")
const router = express.Router()
const {sendMail} = require("../controllers/contactController")


router.post("/send-mail", sendMail)

module.exports = router