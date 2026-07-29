const config = require("../config/env");
const logger = require("../utils/logger");

const MULTER_MESSAGES = {
  LIMIT_FILE_SIZE: "The uploaded file is too large.",
  LIMIT_UNEXPECTED_FILE: "Unexpected file field in upload.",
};

/** Centralized error formatter — every thrown error in the app funnels through here. */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  let statusCode = Number.isInteger(err.statusCode) ? err.statusCode : 500;
  let message = err.message || "Something went wrong.";
  const isOperational = err.isOperational === true;

  if (err.name === "MulterError") {
    statusCode = 400;
    message = MULTER_MESSAGES[err.code] || "File upload failed.";
  } else if (err.code === "ER_DUP_ENTRY") {
    statusCode = 409;
    message = "A record with these details already exists.";
  } else if (err.code === "ER_NO_REFERENCED_ROW_2" || err.code === "ER_ROW_IS_REFERENCED_2") {
    statusCode = 409;
    message = "This action conflicts with a related record.";
  }

  if (!isOperational && statusCode >= 500) {
    logger.error(err.stack || err.message);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.details ? { errors: err.details } : {}),
    ...(config.env === "development" && statusCode >= 500 ? { stack: err.stack } : {}),
  });
}

module.exports = errorHandler;
