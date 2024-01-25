const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = "qsdu98qw12319812kln";

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blog:Spanish8000@cluster0.euzg2jo.mongodb.net/"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });

  if (!userDoc) {
    // User not found
    return res.status(400).json("User not found");
  }

  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;

      // Set the cookie before sending the JSON response
      res.cookie("token", token);

      // Log in successful
      // Additional login logic can be added here
      res.json({ success: true });
    });
  } else {
    // Wrong credentials
    res.status(400).json("Wrong credentials");
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
