const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const app = express();
const cookieParser = require("cookie-parser");
const fs = require("fs");

const salt = bcrypt.genSaltSync(10);
const secret = "qsdu98qw12319812kln";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blog:Spanish8000@cluster0.euzg2jo.mongodb.net/"
);
app.use(cookieParser());

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
      res.json({ success: true, id: userDoc._id, username });
    });
  } else {
    // Wrong credentials
    res.status(400).json("Wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  res.json(token);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "" + ext;
  fs.renameSync(path, newPath);

  res.json({ ext });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
