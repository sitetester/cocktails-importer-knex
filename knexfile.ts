// Update with your config settings.

module.exports = {
    client: "sqlite3",
    connection: {
        filename: "./src/db/drinks.sqlite3"
    },
    migrations: {
        tableName: "knex_migrations"
    },
    useNullAsDefault: true
};
