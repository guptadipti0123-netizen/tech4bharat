const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

/** Runs after an express-validator chain; turns collected errors into a single 400 AppError. */
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const details = errors.array().map((err) => ({ field: err.path, message: err.msg }));
    next(AppError.badRequest("Validation failed.", details));
    return;
  }
  next();
}

module.exports = validate;
