var faker = require('faker');

var gameTypes = ['farm','fps','car', 'food', 'casino', 'puzzle', 'sports', 'board', 'alien', 'medieval'];
var user_tags = {
  farm: ['story-rich', 'simulation'],
  fps: ['fps', 'first-person', 'shooter'],
  car:['racing'],
  food: ['strategy', 'family'],
  casino: ['retro', 'arcade', 'card'],
  puzzle: ['puzzle', 'strategy'],
  sports: ['sports'],
  board: ['2D', 'strategy'],
  alien: ['sci-fi', 'space'],
  medieval: ['magic', 'dragons']
};
var OS = ['windows', 'mac', 'linux'];
var reviewsOverall = ['very positive', 'mostly positive', ' positive', 'mixed', 'negative', 'mostly negative', 'very negative'];

var results = [];

var getData = (num) => {
  var numGames = num;

  for (var i = 0; i < numGames; i++) {
    var percent = Math.ceil(Math.random()* 100);
    var randOSindex = Math.ceil(Math.random()*OS.length);
    var dlcs = [];

    var game = {
      game_name: faker.commerce.productAdjective() + ' ' + faker.company.catchPhraseNoun(),
      game_type: gameTypes[Math.floor(Math.random() * gameTypes.length)],
      original_price: faker.commerce.price(0,200,2),
      sale_boolean: faker.random.boolean(),
      sale_percentage: percent.toString(),
      os: OS.slice(0,randOSindex)
    };

    // generate between 0 and 4 inclusive DLCs per game
    var numDLCs = Math.floor(Math.random() * 5);

    for (var j = 0; j < numDLCs; j++) {
      var images = [];
      var numImages = Math.floor(Math.random() * 4)

      var dlc = {
        dlc_name: game.game_name + ' - ' + faker.lorem.words(3),
        price: faker.commerce.price(0,(game.original_price),2),
        release_date: faker.date.recent(600).toDateString().substr(4),
        user_reviews_num: faker.random.number(2000),
        user_tags: user_tags[game.game_type],
        images: 'working on this'
      };

      if (dlc.user_reviews_num === 0) {
        dlc.user_reviews_overall = null;
      } else {
        dlc.user_reviews_overall = reviewsOverall[Math.floor(Math.random() * reviewsOverall.length)];
      };
      // TODO images
      dlcs.push(dlc);
    }
    game.dlcs = dlcs;
    results.push(game);
  }

  return results;
}

module.exports.getData = getData;