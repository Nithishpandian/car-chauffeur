const Razorpay = require("razorpay");
const crypto = require("crypto");
const Booking = require('../models/bookingModel'); 

const orderPayment = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: req.body.vehicle === "Toyota Sienna" ? 3 * 100 : 7 * 100,
      currency: "USD",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      const bookingData = {
        ...req.body.formData, // formData from the frontend
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      };

      const booking = new Booking(bookingData);
      await booking.save();

      return res.status(200).json({ message: "Payment verified and data saved successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
};

module.exports = {
  orderPayment,
  verifyPayment,
};
