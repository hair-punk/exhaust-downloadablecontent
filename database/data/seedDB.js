var gamesData = require('./gamesData');
var Games = require('../index');

(function () {
  var numDocs = 3;
  var docs = gamesData.getData(numDocs);

  Games.insertMany(docs, function (err, results) {
    if (err) return console.error(err);
  });

})();