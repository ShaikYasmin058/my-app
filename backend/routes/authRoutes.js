const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save to MongoDB
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User by Email
router.get("/user/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select("username email");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
});

module.exports = router;
