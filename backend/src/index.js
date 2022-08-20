const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"))
// }

module.exports = app;
