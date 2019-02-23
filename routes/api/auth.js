// Authentication
const express = require("express");

const router = express.Router();

// @route GET api/auth/test
// @desc Tests auth route
// @access PROTECTED ROUTE
router.get("/test", (req, res) => {
  // output json data object
  res.json({ message: "Auth Route Works" });
});

module.exports = router;
