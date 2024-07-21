const express = require("express");
const router = express.Router();
const {
  getCheckoutSession,
} = require("../controllers/paymentController");

router.post("/checkout-session", getCheckoutSession);

module.exports = router;
