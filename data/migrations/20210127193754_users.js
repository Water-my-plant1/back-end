exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", 255).notNullable().unique();
    table.string("phone", 255).notNullable();
    table.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
