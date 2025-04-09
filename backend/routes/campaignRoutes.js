const express = require("express");
const Campaign = require("../models/Campaign");
const router = express.Router();

// ✅ Create a new campaign
router.post("/", async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all campaigns
router.get("/", async (req, res) => {
  console.log("✅ Received GET request at /api/campaigns");
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    console.error("❌ Error fetching campaigns:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
