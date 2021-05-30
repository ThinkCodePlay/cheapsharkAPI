const app = require('../app')
const Game = require("../models/game");

const game01 = {
  title: "into the breach",
  gameID: 172155,
};

const game02 = {
  title: "FTL: Faster Than Light",
  gameID: 89174,
};

const game03 = {
  title: "Death Stranding",
  gameID: 207044,
};

const setupDatabase = async () => {
  await Game.deleteMany()
};

module.exports = {
  game01,
  game02,
  game03,
  setupDatabase,
};
