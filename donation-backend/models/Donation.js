const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  campaignTitle: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);
