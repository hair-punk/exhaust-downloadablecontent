var expect = require('chai').expect;
var mongoose = require('mongoose');
var { Games } = require('./index');


var dbURI = 'mongodb://localhost:27017/purchaseoptionsservice';

// The `clearDB` helper function, when invoked, will clear the database
// var clearDB = function (done) {
//   mongoose.connection.collections['games'].remove(done);
// };

describe('Seeding Function and Database', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  // beforeEach(function (done) {
  //   clearDB(function () {
  //     var mockData = [
  //       {
  //         key1: 'val1',
  //         key2: 'val2'
  //       }
  //     ];

  //     // See http://mongoosejs.com/docs/models.html for details on the `create` method
  //     Games.create(mockData, done);
  //     done();
  //   });
  // });

  it('Games DB should store data', function (done) {
    Games.find({}).exec((err, queryResults) => {
      if (err) return done(err);
      expect(queryResults).to.be.an('array');
      done();
    });
  });

  it('Games DB should store 100 docs', function (done) {
    Games.find({}).exec((err, queryResults) => {
      if (err) return done(err);
      expect(queryResults.length).to.equal(100);
      done();
    });
  });

  it('Single doc should be in the form of Games Schema', function (done) {
    Games.find({}).limit(1).exec((err, queryResults) => {
      if (err) return done(err);
      expect(queryResults[0]).to.have.property('game_id');
      expect(queryResults[0].game_id).to.be.a('number');

      expect(queryResults[0]).to.have.property('game_name');
      expect(queryResults[0].game_name).to.be.a('string');

      expect(queryResults[0]).to.have.property('game_type');
      expect(queryResults[0].game_type).to.be.a('string');

      expect(queryResults[0]).to.have.property('original_price');
      expect(queryResults[0].original_price).to.be.a('string');

      expect(queryResults[0]).to.have.property('sale_boolean');
      expect(queryResults[0].sale_boolean).to.be.a('boolean');

      expect(queryResults[0]).to.have.property('sale_percentage');
      expect(queryResults[0].sale_percentage).to.be.a('string');

      expect(queryResults[0]).to.have.property('dlcs');
      expect(queryResults[0].dlcs).to.be.an('array');
      if (queryResults[0].dlcs.length > 0) {
        expect(queryResults[0].dlcs[0]).to.be.an('object');
      }

      expect(queryResults[0]).to.have.property('franchise');
      expect(queryResults[0].franchise).to.be.a('boolean');

      expect(queryResults[0]).to.have.property('sale_countdown_boolean');
      expect(queryResults[0].sale_countdown_boolean).to.be.a('boolean');

      expect(queryResults[0]).to.have.property('os');
      expect(queryResults[0].os).to.be.an('array');
      expect(queryResults[0].os[0]).to.be.a('string');

      done();
    });
  });
});

// Jest not recommended with Mongoose apps => refactoring for mocha tests above

// const { MongoClient } = require('mongodb');

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, { useNewUrlParser: true });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = { _id: 'some-user-id', name: 'John' };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({ _id: 'some-user-id' });
//     expect(insertedUser).toEqual(mockUser);
//   });
// });