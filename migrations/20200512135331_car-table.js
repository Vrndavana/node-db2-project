// This is for updating table

exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{ 
      tbl.increments();
      tbl.string('VIN').notNullable().unique();
      tbl.string('make', 30).notNullable();
      tbl.string('model', 30).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission type', 20).nullable();
      tbl.string('title status', 20).nullable();
  })
};
// This is for downgrading table
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
