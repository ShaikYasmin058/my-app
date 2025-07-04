const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Donation = require("./models/Donation");

const app = express();
const PORT = 5001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/donations")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Home route
app.get("/", (req, res) => {
  res.send("🎉 Donation Backend is running!");
});

// Initiate payment + save to DB
app.post("/initiate-payment", async (req, res) => {
  const { name, amount, paymentMethod, campaignTitle } = req.body;

  if (!name || !amount || amount <= 0) {
    return res.status(400).json({ success: false, message: "Invalid donation details." });
  }

  try {
    const donation = new Donation({
      name,
      amount,
      paymentMethod,
      campaignTitle,
    });

    await donation.save();

    // const upiUrl = `upi://pay?pa=testuser@upi&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;
    const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

    console.log(`💰 Donation saved: ₹${amount} by ${name} via ${paymentMethod}`);
    res.json({ success: true, redirectUrl: upiUrl });
  } catch (err) {
    console.error("Error saving donation:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// View all donations
app.get("/donations", async (req, res) => {
  try {
    const allDonations = await Donation.find().sort({ date: -1 });
    res.json(allDonations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch donations." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
});
