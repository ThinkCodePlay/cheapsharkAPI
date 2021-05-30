const { game01, game02, game03, setupDatabase } = require("./fixtures/db");
const {
  listOfGames,
  dealsForGame,
  wishlist,
  getWishlist,
} = require("../utils/cheapshark");
const Game = require("../models/game");


beforeAll(setupDatabase);

test("Should get games list by title", async () => {
  const title = game03.title;
  const result = await listOfGames({ title });
  expect(result[0].gameID).toEqual(game03.gameID.toString());
});

test("Should fail when sending no arguments to listOfGames", async () => {
  const result = await listOfGames();
  expect(result.error.response.status).toEqual(400);
});

test("Should look for deals for game", async () => {
  const result = await dealsForGame({ id: game03.gameID });
  expect(result.length).toBeGreaterThanOrEqual(0);
});

test("Should fail when sending no arguments to dealsForGame", async () => {
  const result = await dealsForGame();
  expect(result.response.status).toEqual(400);
});

test("Should add game to wishlist", async () => {
  await wishlist(game01);
  await wishlist(game02);
  await wishlist(game03);
  const games = await Game.find();
  expect(games.length).toEqual(3);
});

test("Should get all wishlist items added", async () => {
  const result = await getWishlist();
  expect(result.length).toEqual(3);
});
