// Authentication
const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const router = express.Router();

// Load user model
const User = require("../../models/User");

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => {
  // output json data object
  res.json({ message: "Users Route Works" });
});

// @route GET api/users/register
// @desc register a user
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        // size
        s: "200",
        // rating
        r: "PG",
        // default
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route GET api/users/login
// @desc login user, returing the token (jwt)
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // find the user by email
  User.findOne(email).then(user => {
    // check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    // check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        res.json({ message: "Success" });
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
