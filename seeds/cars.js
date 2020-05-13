
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'rowValue1', make: 'Datsun', model:'510', mileage:'40' },

      ]);
    });
};
