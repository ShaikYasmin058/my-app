const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Crowdfunding API!");
});

// ✅ Connect to MongoDB (Only One Connection)
mongoose
    .connect("mongodb://127.0.0.1:27017/crowdfundingDB")
    

    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
// const donationRoutes = require("./routes/donationRoutes");
const donationRoutes = require("./routes/donationRoutes");  // ✅ Correct Import



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/donations", donationRoutes);


// Start Server
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));





mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err);
});





