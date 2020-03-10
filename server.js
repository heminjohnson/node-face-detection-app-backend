const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const { handleSignIn } = require("./controllers/signin");
const { handleRegister } = require("./controllers/register");
const { handleProfile } = require("./controllers/profile");
const { handleImage } = require("./controllers/image");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("It is working");
});

app.post("/signin", (req, res) => {
  handleSignIn(req, res);
});

app.post("/register", (req, res) => {
  handleRegister(req, res);
});

app.get("/profile/:id", (req, res) => {
  handleProfile(req, res);
});

app.put("/image", (req, res) => {
  handleImage(req, res);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
