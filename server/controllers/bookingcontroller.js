const Razorpay = require("razorpay");
const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// @desc    Get all booking data
// @route   GET /api/booking/all
// @access  Private
const allBookingData = asyncHandler(async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
});

// @desc    Update the accept field of a booking and process refund if declined
// @route   PUT /api/booking/update/:id
// @access  Private
const updateBookingAccept = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { accept } = req.body;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (accept === "false") {
      const amount = booking.vehicle === "Toyota Sienna" ? 300 : 700; // Amount in paise
      try {
        const refund = await instance.payments.refund(booking.paymentId, { amount });
        booking.accept = accept;
        await booking.save();
        return res.status(200).json({ message: "Refund processed successfully and booking updated", data: refund });
      } catch (error) {
        console.error("Refund error: ", error);
        return res.status(500).json({ message: "Refund processing failed", error });
      }
    }

    booking.accept = accept;
    await booking.save();
    return res.status(200).json({ message: "Booking updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update booking", error });
  }
});

module.exports = {
  allBookingData,
  updateBookingAccept,
};
