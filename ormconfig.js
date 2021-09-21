module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": ["./src/database/migrations/*.js"], // local ts
    "entities": ["./src/modules/**/entities/*.js"], // local ts
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
}