var expect = require('chai').expect;
var mongoose = require('mongoose');
var Games = require('../database/index');
// var controller = require('');


var dbURI = 'mongodb://localhost/gamequery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['games'].remove(done);
};

describe('Test', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  beforeEach(function (done) {
    clearDB(function () {
      var mockData = [
        {
          key1: 'val1',
          key2: 'val2'
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      // Games.create(mockData, done);
      done();
    });
  });

  it('should work', function (done) {
    // controller.get('', function (err, result) {
    //   if (err) return done(err);
    //   expect(result).to.deep.equal('');
      done();
    // });
  }
  );

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