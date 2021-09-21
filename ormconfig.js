module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": ["./src/modules/**/entities/*.ts"], // local ts
    "migrations": ["./src/database/migrations/*.ts"], // local ts
    // "migrations": ["./src/database/migrations/*.ts"],
    // "entities": ["./src/modules/**/entities/*.ts"], 
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
}