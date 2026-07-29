const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");
const { verifyAccessToken } = require("../services/token.service");

/** Requires a valid `Authorization: Bearer <token>` header; attaches the decoded identity to req.user. */
const authenticate = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    throw AppError.unauthorized("Authentication token missing.");
  }

  const token = header.slice("Bearer ".length).trim();

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Session expired. Please log in again."
        : "Invalid authentication token.";
    throw AppError.unauthorized(message);
  }

  req.user = {
    id: payload.sub,
    name: payload.name,
    email: payload.email,
    roleId: payload.roleId,
    roleSlug: payload.roleSlug,
    permissions: payload.permissions || [],
  };

  next();
});

module.exports = { authenticate };
