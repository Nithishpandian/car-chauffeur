const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  company: String,
  phone: String,
  email: String,
  category: String,
  message: String,
  pickupLocation: String,
  dropOffLocation: String,
  vehicle: String,
  accept: String,
  paymentId: String,
  orderId: String,
});

module.exports = mongoose.model("Booking", BookingSchema);
