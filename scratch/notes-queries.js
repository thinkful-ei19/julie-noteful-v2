'use strict';

const knex = require('../knex');

// knex.select(1).then(res => console.log(res));

knex.select('id', 'title', 'content')
  .from('notes')
  .where('title', 'like', '%cats%')
  .then(results => {
    console.log(results);
  });