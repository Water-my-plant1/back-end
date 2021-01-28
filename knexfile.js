// Update with your config settings.

const sharedSettings = {
  client: "sqlite3",
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  useNullAsDefault: true,
};

module.exports = {
  development: {
    ...sharedSettings,
    connection: {
      filename: "./data/test.db3",
    },
  },

  production: {
    ...sharedSettings,
    filename: "./data/data.db3",
  },
};
