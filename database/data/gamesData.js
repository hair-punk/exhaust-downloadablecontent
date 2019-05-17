var faker = require('faker');

var results = [];
var numRecords = 10;

for (var i = 0; i < numRecords; i++) {
  var percent = Math.ceil(Math.random()* 100);

  var game = {
    name: faker.commerce.productAdjective() + ' ' + faker.company.catchPhraseNoun(),
    original_price: faker.commerce.price(0,200,2),
    sale_percentage: percent.toString(),
  };
  results.push(game);
}

module.exports = results;