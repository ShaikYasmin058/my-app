// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const DonationSchema = mongoose.Schema({
//   amount: {
//     type: Number,
//     default: 0,
//   },
//   transactionComplete: {
//     type: Boolean,
//     default: false,
//   },
//   transactionID: {
//     type: String,
//     default: "",
//   },
//   campaign: {
//     type: Schema.Types.ObjectId,
//     ref: "Campaign",
//   },
// });

// const Donation = mongoose.model("Donation", DonationSchema);

// module.exports = Donation;









const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ✅ Define the donation schema
const donationSchema = new mongoose.Schema({
    donorName: { type: String, required: true },  // Donor's Name
    amount: { type: Number, required: true },    // Donation Amount
    message: { type: String },                   // Optional Message
    date: { type: Date, default: Date.now },     // Donation Date
    transactionComplete: { type: Boolean, default: false }, // Transaction Status
    transactionID: { type: String, default: "" }, // Unique Transaction ID
    campaign: { type: Schema.Types.ObjectId, ref: "Campaign" } // Linked Campaign
});

// ✅ Create the model
const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
