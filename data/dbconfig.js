const knex = require("knex");
const dbconfig = require("../knexfile");
module.exports = knex(dbconfig.development);
