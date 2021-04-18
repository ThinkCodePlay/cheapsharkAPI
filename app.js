const express = require("express");
require("./db/mongoose");

const app = express();
const {
  listOfGames,
  dealsForGame,
  wishlist,
  getWishlist
} = require("./utils/cheapshark");

const port = process.env.PORT || 3000;

app.get("/games-list", async (req, res) => {
  const result = await listOfGames({ title: req.query.title });

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

app.get("/game-deals", async (req, res) => {
  const result = await dealsForGame({ id: req.query.id });

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

app.post("/wishlist", async (req, res) => {
  const result = await wishlist({ title: req.query.title, gameID: req.query.gameID });

  if (result.error) {
    return res.status(400).send("Error storing game");
  }

  res.send(result);
});

app.get("/get-wishlist", async (req, res) => {
  const result = await getWishlist();

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
