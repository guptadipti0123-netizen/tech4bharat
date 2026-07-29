/**
 * Applies database/schema.sql against the configured MySQL server.
 * Usage: npm run db:migrate
 */
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
const config = require("../config/env");
const logger = require("../utils/logger");

async function migrate() {
  const schemaPath = path.join(__dirname, "schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf8");

  // A dedicated, short-lived connection with multipleStatements enabled —
  // intentionally not the shared app pool, which stays single-statement for safety.
  const connection = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    multipleStatements: true,
  });

  try {
    logger.info("Applying schema.sql ...");
    await connection.query(schemaSql);
    logger.info("Schema applied successfully.");
  } finally {
    await connection.end();
  }
}

migrate().catch((error) => {
  logger.error("Migration failed:", error.message);
  process.exit(1);
});
