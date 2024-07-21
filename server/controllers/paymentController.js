const asyncHandler = require("express-async-handler");
const Stripe = require("stripe");
const Booking = require("../models/bookingModel");

// @desc    create a checkout session
// @route   POST /api/payment/checkout-session
// @access  Private
const getCheckoutSession = asyncHandler(async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const {
      name,
      email,
      vehicle,
      pickupLocation,
      dropOffLocation,
      category,
      message,
      phone,
      company,
    } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: vehicle === "Toyota Sienna" ? 300 : 700, // Stripe expects the amount in cents
            product_data: {
              name,
              metadata: {
                vehicle,
                pickupLocation,
                dropOffLocation,
                category,
                message,
                phone,
                company,
              },
            },
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        setup_future_usage: "off_session",
      },
    });

    const booking = new Booking({
      name,
      email,
      vehicle,
      pickupLocation,
      dropOffLocation,
      category,
      message,
      phone,
      company,
      session: session.id,
      paymentIntentId: session.payment_intent,
    });


    await booking.save();

    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ message: "Payment failed", error });
  }
});

module.exports = {
  getCheckoutSession,
};
