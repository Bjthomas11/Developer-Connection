// Profile Model
const express = require("express");

const router = express.Router();

// @route GET api/users/test
// @desc Tests users route
// @access PUBLIC ROUTE
router.get("/test", (req, res) => {
  // output json data object
  res.json({ message: "Profile Route Works" });
});

module.exports = router;
