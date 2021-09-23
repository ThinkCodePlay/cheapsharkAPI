const express = require("express");
const cors = require("cors");
const app = express();
require("./db/mongoose");
const gameRouter = require('./routes/gameRoute')
const userRoute = require('./routes/userRoute')

var corsOptions = {
  credentials: true,
  origin: ["http://localhost:4200","http://localhost:3001"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(gameRouter)
app.use(userRoute)

module.exports = app
