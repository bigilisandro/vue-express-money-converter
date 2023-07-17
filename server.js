require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

// Cambiar port si corre en otro localhost
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (res) => {
  res.send("Testing server");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = {
    email: email,
    password: password,
  };
  let token = jwt.sign(
    {
      user: user,
    },
    "secret",
    { expiresIn: 60 * 60 * 24 * 30 }
  );

  return res.json({
    user,
    token: token,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
