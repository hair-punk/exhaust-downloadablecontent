var gamesData = require('./gamesData');
var Games = require('../index');

(function () {
  var docs = gamesData.getData(3);

  Games.insertMany(docs, function (err, results) {
    if (err) return console.error(err);
  });

})();