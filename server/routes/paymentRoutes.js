const express = require("express");
const router = express.Router();
const {
  orderPayment,
  verifyPayment,
} = require("../controllers/paymentController");

router.post("/orders", orderPayment);
router.post("/verify", verifyPayment);

module.exports = router;
