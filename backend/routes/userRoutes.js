const express = require("express");
const router = express.Router();

// Sample route for testing
router.get("/", (req, res) => {
  res.send("User Routes Working!");
});

module.exports = router;
