const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Database config variable
const db = require("./config/keys").mongoURI;

// connect to mongodb through mognoose
mongoose
  .connect(db)
  // promise
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello WORLD!!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
