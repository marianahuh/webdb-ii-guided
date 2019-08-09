exports.up = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.string('species');
  });
};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
    tbl.dropColumn('species');
  });
};
