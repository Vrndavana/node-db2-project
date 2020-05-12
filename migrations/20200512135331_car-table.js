// This is for updating table
exports.up = function(knex) {
  return knex.schema.createTable("cars", table =>{ 
      table.increments();
      table.string("VIN").notNullable().unique();
      table.string("make", 30).notNullable();
      table.string("model", 30).notNullable();
      table.integer("milage").notNullable();
      table.string("transmission type", 20).nullable();
      table.string("title status", 20).nullable();
  })
};
// This is for downgrading table
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
