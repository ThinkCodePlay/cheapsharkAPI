const axios = require('axios').default;

const listOfGames = async (params) => {
    try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/games', { params })
        return response.data
    } catch (error) {
        return {error};
    }
}

const dealForGame = async (params) => {
    try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/games', { params })
        return response.data.deals
    } catch (error) {
        return errorObj;
    }
}

module.exports = {
    listOfGames,
    dealForGame
};