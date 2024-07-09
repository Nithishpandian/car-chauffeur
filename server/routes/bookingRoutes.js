const express = require("express");
const router = express.Router();
const {
  allBookingData,
  updateBookingAccept,
} = require("../controllers/bookingcontroller");

router.get("/all", allBookingData);
router.put("/update/:id", updateBookingAccept);

module.exports = router;
