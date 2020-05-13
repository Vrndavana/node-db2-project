
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'rowValue1', make: 'Datsun', model:'510', mileage:'40' },
        {id: 2, VIN: 'rowValue2', make: 'Nissan', model:'240sx', mileage:'60' },
        {id: 3, VIN: 'rowValue3', make: 'BWN', model:'150', mileage:'40' },
        {id: 4, VIN: 'rowValue4', make: 'Audi', model:'SRX', mileage:'40' },

      ]);
    });
};
