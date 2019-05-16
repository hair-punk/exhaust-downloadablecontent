const knex = require('knex');

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'alyssa',
    password: 'alyssa',
    database: 'test'
  }
});

module.exports = database;

// TODO update user, password, db name