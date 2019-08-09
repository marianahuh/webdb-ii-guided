exports.up = function(knex) {
  // we make changes to the db schema
  return knex.schema.createTable('fruits', tbl => {
    // add primary key named id, integer, auto-increment
    tbl.increments();

    // other columns
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl.decimal('avgWeightOz');
    tbl.boolean('delicious');
    tbl.string('color');
  });
};

exports.down = function(knex) {
  // we undo the changes to the db schema
  return knex.schema.dropTableIfExists('fruits');
};
