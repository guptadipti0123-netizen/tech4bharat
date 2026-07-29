const app = require("./app");
const config = require("./config/env");
const { checkConnection } = require("./config/db");
const logger = require("./utils/logger");

async function start() {
  try {
    await checkConnection();
    logger.info("Connected to MySQL.");
  } catch (error) {
    logger.error("Failed to connect to MySQL:", error.message);
    logger.error("Check your .env DB_* values and that the MySQL server is running.");
    process.exit(1);
  }

  const server = app.listen(config.port, () => {
    logger.info(`Tech4Bharat API listening on http://localhost:${config.port}${config.apiPrefix}`);
  });

  const shutdown = (signal) => {
    logger.info(`${signal} received. Shutting down gracefully...`);
    server.close(() => {
      logger.info("HTTP server closed.");
      process.exit(0);
    });
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

start();
