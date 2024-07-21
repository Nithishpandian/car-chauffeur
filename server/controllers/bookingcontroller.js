const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const Stripe = require("stripe");

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
  const { accept, sessionId } = req.body;

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Retrieve the booking to get the payment intent ID
    const booking = await Booking.findOne({ session: sessionId });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (accept === "false") {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (!session) {
          return res.status(404).json({ message: "Session not found" });
        }

        // Use the payment_intent from session to initiate refund
        const refund = await stripe.refunds.create({
          payment_intent: session.payment_intent,
          amount: session.amount_total, // Refund the full amount for simplicity
        });

        res.status(200).json({ success: true, refund });
      } catch (error) {
        console.error("Refund error: ", error);
        return res
          .status(500)
          .json({ message: "Refund processing failed", error });
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
