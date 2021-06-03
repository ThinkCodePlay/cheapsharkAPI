const express = require("express");
const auth = require("../middleware/auth");

const router = new express.Router();

const {
  listOfGames,
  dealsForGame,
  wishlist,
  getWishlist,
} = require("../utils/cheapshark");

router.get("/games-list", async (req, res) => {
  const result = await listOfGames({ title: req.query.title });

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

router.get("/game-deals", async (req, res) => {
  const result = await dealsForGame({ id: req.query.id });

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

router.post("/wishlist", auth, async (req, res) => {
  const result = await wishlist({
    title: req.body.title,
    gameID: req.body.gameID,
    owner: req.user._id
  });

  if (result.error) {
    return res.status(400).send("Error storing game");
  }

  res.send(result);
});

router.get("/get-wishlist", auth ,async (req, res) => {

  const result = await getWishlist(req.user);

  if (result.error) {
    return res.status(400).send("Error getting information");
  }

  res.send(result);
});

module.exports = router;
