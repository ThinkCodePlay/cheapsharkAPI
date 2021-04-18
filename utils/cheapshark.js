const axios = require("axios").default;
const Game = require("../models/game");

const listOfGames = async (params) => {
  try {
    const response = await axios.get(
      "https://www.cheapshark.com/api/1.0/games",
      { params }
    );
    return response.data;
  } catch (error) {
    return { error };
  }
};

const dealsForGame = async (params) => {
  try {
    const response = await axios.get(
      "https://www.cheapshark.com/api/1.0/games",
      { params }
    );
    return response.data.deals;
  } catch (error) {
    return error;
  }
};

const wishlist = async (params) => {
  const game = new Game({ ...params  });

  try {
    const state = await game.save();
    return game;
  } catch (error) {
    return {error};
  }

};

const getWishlist = async (req, res) => {
    try {
        const wishlistGames = Game.find();
        return wishlistGames;
    } catch (error) {
        {error}
    }
}

module.exports = {
  listOfGames,
  dealsForGame,
  wishlist,
  getWishlist
};

// const dealID = async (params) => {
//     try {
//         console.log(params);
//         const response = await axios.get('https://www.cheapshark.com/api/1.0/deals', { params })
//         return response.data
//     } catch (error) {
//         // console.log(error,'error');
//         return {error};
//     }
// }
