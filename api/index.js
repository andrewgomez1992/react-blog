const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  // Handle registration logic here
  console.log(req.body);
  res.json("Registration successful");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
