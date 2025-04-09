const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crowdfundingDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Connection Error:", err);
});

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const donationRoutes = require("./routes/donationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/donations", donationRoutes);

// Root Test Route
app.get("/", (req, res) => {
  res.send("🌐 Welcome to the Crowdfunding API!");
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
