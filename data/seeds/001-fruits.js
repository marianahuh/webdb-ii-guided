exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .truncate() // deletes the data and resets the primary key back to 1
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'banana', avgWeightOz: '4', delicious: true, color: 'yellow' },
        {
          name: 'green apple',
          avgWeightOz: '3.7',
          delicious: true,
          color: 'green'
        },
        { name: 'peach', avgWeightOz: '5.3', delicious: true, color: 'peach' },
        {
          name: 'strawberry',
          avgWeightOz: '1.3',
          delicious: true,
          color: 'red'
        }
      ]);
    });
};
