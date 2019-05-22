const express = require('express');
var { Games } = require('../database/index');

let app = express();
const port = 3003;

app.use(express.static(__dirname+'/../client/dist'));

app.get('/games/:gameid', (req, res) => {
  let id = req.params.gameid;
  Games.find({ game_id: id }).limit(1).exec((err, queryResults) => {
    res.json(queryResults[0]);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});