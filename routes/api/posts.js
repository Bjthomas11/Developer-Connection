const express = require("express");

const router = express.Router();

// @route GET api/posts/test
// @desc Tests post route
// @access PUBLIC ROUTE
router.get("/test", (req, res) => {
  // output json data object
  res.json({ message: "Post Route Works" });
});

module.exports = router;
