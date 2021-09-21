module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": ["./src/modules/**/entities/*.js"], // local ts
    "migrations": ["./src/database/migrations/*.js"], // local ts
    // "migrations": ["./src/database/migrations/*.ts"],
    // "entities": ["./src/modules/**/entities/*.ts"], 
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
}