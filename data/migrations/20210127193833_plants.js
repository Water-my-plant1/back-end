exports.up = function (knex) {
  return knex.schema.createTable("plants", (table) => {
    table.increments("id");
    table.string("nickname", 255).notNullable();
    table.string("species", 255).notNullable();
    table.string("h2oFrequency").notNullable();
    table.integer("user_id").unsigned().notNullable();

    table.foreign("user_id").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants");
};
