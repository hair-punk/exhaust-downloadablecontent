var gamesData = require('./gamesData');
var { Games } = require('../index');

(function () {
  var numDocs = 100;
  gamesData.getData(numDocs, (docs)=>{
    Games.insertMany(docs, function (err, results) {
      if (err) return console.error(err);
      console.log('Inserted into DB!');
    });
  });


})();