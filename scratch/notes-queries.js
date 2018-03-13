'use strict';

const knex = require('../knex');

// knex.select(1).then(res => console.log(res));

// knex.select('id', 'title', 'content')
//   .from('notes')
//   .where('title', 'like', '%cats%')
//   .then(results => {
//     console.log(results);
//   });

// knex
//   .select('title', 'content')
//   .from('notes')
//   .where('id', 1001)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
// .select('title', 'content')
// .from('notes')
// .where('id', 1001)
// .update('title', 'Updated title for note 1001')
// .then(results => console.log(JSON.stringify(results, null, 2)));

knex
  .select('title')
  .from('notes')
  .where('id', 1001)
  .then(results => console.log(JSON.stringify(results, null, 2)));