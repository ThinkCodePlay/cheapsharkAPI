const express = require("express");
const cors = require("cors");
const app = express();
require("./db/mongoose");
const gameRouter = require('./routes/gameRoute')

var corsOptions = {
  credentials: true,
  origin: "http://localhost:4200",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(gameRouter)

module.exports = app
