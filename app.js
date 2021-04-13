const express = require('express')

const app = express()
const { listOfGames, dealForGame} = require('./utils/cheapshark')

const port = process.env.PORT || 3000

app.get('/games-list', async (req, res) =>  {
  const result = await listOfGames({title: req.query.title});
  
  if (result.error) {
    return res.status(400).send('Error getting information')
  }

  res.send(result)
})

app.get('/game-deal', async (req, res) =>  {
  const result = await dealForGame({id: req.query.id});

  if (result.error) {
    return res.status(400).send('Error getting information')
  }

  res.send(result)
})

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})