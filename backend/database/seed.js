/**
 * Seeds roles, starter categories, homepage CMS defaults, and the initial
 * Super Admin user.
 * Usage: npm run db:seed  (run after npm run db:migrate)
 */
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { pool } = require("../config/db");
const config = require("../config/env");
const logger = require("../utils/logger");

/** Strips full-line SQL comments, then splits the remainder into individual statements. */
function splitStatements(sql) {
  return sql
    .split(/\r?\n/)
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n")
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0 && !/^use\s+\S+$/i.test(statement));
}

async function seed() {
  const seedSqlPath = path.join(__dirname, "seed.sql");
  const seedSql = fs.readFileSync(seedSqlPath, "utf8");

  logger.info("Seeding roles, categories, and homepage content defaults ...");
  const statements = splitStatements(seedSql);

  for (const statement of statements) {
    await pool.query(statement);
  }
  logger.info(`Applied ${statements.length} seed statement(s).`);

  if (!config.seedSuperAdmin.email || !config.seedSuperAdmin.password) {
    logger.warn("SEED_SUPER_ADMIN_EMAIL / SEED_SUPER_ADMIN_PASSWORD not set — skipping admin user creation.");
    return;
  }

  const [existingRows] = await pool.query("SELECT id FROM users WHERE email = ?", [
    config.seedSuperAdmin.email,
  ]);

  if (existingRows.length > 0) {
    logger.info(`Super Admin user already exists (${config.seedSuperAdmin.email}) — skipping.`);
    return;
  }

  const [roleRows] = await pool.query("SELECT id FROM roles WHERE slug = 'super-admin' LIMIT 1");
  const role = roleRows[0];
  if (!role) {
    throw new Error("Super Admin role not found — did the roles seed run first?");
  }

  const passwordHash = await bcrypt.hash(config.seedSuperAdmin.password, config.bcryptSaltRounds);

  await pool.query(
    `INSERT INTO users (name, email, password_hash, role_id, is_active) VALUES (?, ?, ?, ?, 1)`,
    [config.seedSuperAdmin.name, config.seedSuperAdmin.email, passwordHash, role.id]
  );

  logger.info(`Super Admin user created: ${config.seedSuperAdmin.email}`);
  logger.warn("Change the seeded Super Admin password immediately after first login.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    logger.error("Seeding failed:", error.message);
    process.exit(1);
  });
